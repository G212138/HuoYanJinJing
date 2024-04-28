// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { CustomSyncData } from "../../Data/CustomSyncData";
import { EventType } from "../../Data/EventType";
import { EditorManager } from "../../Manager/EditorManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLayer extends cc.Component {

    @property(cc.Node)
    private startLayer: cc.Node = null;
    @property(cc.Node)
    private endLayer: cc.Node = null;
    @property(cc.Node)
    private endLayer2: cc.Node = null;
    @property(cc.Node)
    private firstLayer: cc.Node = null;
    @property(cc.Node)
    private secondLayer: cc.Node = null;
    @property(cc.Label)
    private title: cc.Label = null;
    @property(cc.Label)
    private countdown: cc.Label = null;
    @property(cc.Label)
    private secondLayerLabel: cc.Label = null;
    @property(cc.Node)
    private itemPanel: cc.Node = null;
    @property(cc.Node)
    private wrongTime: cc.Node = null;

    private configData = null;
    start() {
        ListenerManager.on(EventType.ON_CLICK_ITEM, this.onHandleClick, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.ON_CLICK_ITEM, this.onHandleClick, this);
    }

    public init() {
        this.configData = EditorManager.editorData.itemData;
        let curStep = SyncDataManager.getSyncData().customSyncData.curStep;
        let isClickStart = SyncDataManager.getSyncData().customSyncData.isClickStart;
        this.startLayer.active = !isClickStart;

        let typeName = ["平行", "垂直", "直角", "锐角", "钝角"]
        let title = "找出含有" + typeName[this.configData[curStep].type] + "的物品" + this.configData[curStep].count + "个";
        this.title.string = title;
        this.secondLayerLabel.string = title;
        this.wrongTime.getComponent(cc.Label).string = "-" + EditorManager.editorData.wrongTime.toString();
        this.wrongTime.active = false;
        this.initAllItem();
        this.setCountdownLabel();
    }

    private initAllItem() {
        let allHideItem = SyncDataManager.getSyncData().customSyncData.allHideItem;
        this.itemPanel.children.forEach((item) => {
            item.active = true;
            item.opacity = 255;
            item.angle = 0;
            if (allHideItem.indexOf(item.name) != -1) {
                console.log("item.name");
                item.active = false;
            }
        });
    }

    private onClickStart() {
        SyncDataManager.getSyncData().customSyncData.isClickStart = true;
        this.startLayer.active = false;
        this.endLayer.active = false;
        this.endLayer2.active = false;
        this.firstLayer.active = true;
        this.scheduleOnce(() => {
            this.firstLayer.active = false;
            this.secondLayer.active = true;
            this.scheduleOnce(() => {
                this.secondLayer.active = false;
                this.startCountdown();
            }, 1);
        }, 1);

        SyncDataManager.getSyncData().customSyncData.countdown = EditorManager.editorData.countdown;
    }

    private startCountdown() {
        let countdown = Number(SyncDataManager.getSyncData().customSyncData.countdown);
        this.schedule(() => {
            SyncDataManager.getSyncData().customSyncData.countdown--;
            this.setCountdownLabel();
            if (SyncDataManager.getSyncData().customSyncData.countdown <= 0) {
                this.timeUp();
            }
        }, 1, countdown);
    }

    private setCountdownLabel() {
        let min = Math.floor(SyncDataManager.getSyncData().customSyncData.countdown / 60);
        let sec = SyncDataManager.getSyncData().customSyncData.countdown % 60;
        let minStr = min < 10 ? '0' + min : min;
        let secStr = sec < 10 ? '0' + sec : sec;
        this.countdown.string = minStr + ':' + secStr;
    }

    private timeUp() {
        this.endLayer2.active = true;
    }

    private onHandleClick(isTrue: boolean) {
        if (isTrue) {
            let curHideItem = SyncDataManager.getSyncData().customSyncData.curHideItem;
            console.log("curHideItem", curHideItem);
            if (this.configData[SyncDataManager.getSyncData().customSyncData.curStep].count == curHideItem.length) {
                this.handleAllFind();
            }
        } else {
            this.wrongTime.active = true;
            this.wrongTime.y = 490;
            let posX = Number(this.countdown.node.parent.x);
            cc.tween(this.countdown.node.parent).to(0.1, { x: posX + 10 }).to(0.1, { x: posX - 10 }).to(0.1, { x: posX + 10 }).to(0.1, { x: posX - 10 }).to(0.1, { x: posX }).start();
            cc.tween(this.wrongTime).to(0.5, { y: 600 }).call(() => {
                SyncDataManager.getSyncData().customSyncData.countdown = SyncDataManager.getSyncData().customSyncData.countdown - EditorManager.editorData.wrongTime;
            }).start();
        }
    }

    private handleAllFind() {
        if (SyncDataManager.getSyncData().customSyncData.curStep == this.configData.length - 1) {
            this.handleGameOver();
        } else {
            this.handleNextStep();
        }
    }

    private handleNextStep() {
        SyncDataManager.getSyncData().customSyncData.curHideItem = [];
        SyncDataManager.getSyncData().customSyncData.curStep++;
        this.init();
        this.secondLayer.active = true;
        this.scheduleOnce(() => {
            this.secondLayer.active = false;
        }, 1);
    }

    private handleGameOver() {
        this.endLayer.active = true;
        this.unscheduleAllCallbacks();
    }

    private ocClickReplay() {
        SyncDataManager.getSyncData().customSyncData.curStep = 0;
        SyncDataManager.getSyncData().customSyncData.isClickStart = false;
        SyncDataManager.getSyncData().customSyncData.countdown = EditorManager.editorData.countdown;
        SyncDataManager.getSyncData().customSyncData.curHideItem = [];
        SyncDataManager.getSyncData().customSyncData.allHideItem = [];

        SyncDataManager.getSyncData().customSyncData.answerTimes++;
        this.init();
    }

    private onClickGameOver() {
        ListenerManager.dispatch(EventType.REPORT_RIGHT, true);
        ListenerManager.dispatch(EventType.GAME_OVER);
    }
}
