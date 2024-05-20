// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { Tools } from "../../../../frame/scripts/Utils/Tools";
import { UIHelp } from "../../../../frame/scripts/Utils/UIHelp";
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
    @property(sp.Skeleton)
    private role: sp.Skeleton = null;
    @property(sp.Skeleton)
    private roleKaixin: sp.Skeleton = null;

    private configData = null;
    start() {
        ListenerManager.on(EventType.ON_CLICK_ITEM, this.onHandleClick, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.ON_CLICK_ITEM, this.onHandleClick, this);
    }

    public init() {
        UIHelp.closeMask();
        SyncDataManager.getSyncData().customSyncData.enableClick = true;
        this.configData = EditorManager.editorData.itemData;
        let curStep = SyncDataManager.getSyncData().customSyncData.curStep;
        let isClickStart = SyncDataManager.getSyncData().customSyncData.isClickStart;
        this.startLayer.active = !isClickStart;

        let typeName = ["平行线", "垂直", "直角", "锐角", "钝角"]
        let title = "找出含有" + typeName[this.configData[curStep].type] + "的物品" + this.configData[curStep].count + "个";
        this.title.string = title;
        this.secondLayerLabel.string = title;
        this.wrongTime.getComponent(cc.Label).string = "-" + EditorManager.editorData.wrongTime.toString();
        this.wrongTime.active = false;
        this.initAllItem();
        this.setCountdownLabel();
        this.roleKaixin.node.active = false;
        this.role.node.active = true;
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
        this.showStartLayerAni();
        // this.scheduleOnce(() => {
        //     this.firstLayer.active = false;
        //     this.secondLayer.active = true;
        //     this.scheduleOnce(() => {
        //         this.secondLayer.active = false;
        //         this.startCountdown();
        //     }, 1);
        // }, 1);

        SyncDataManager.getSyncData().customSyncData.countdown = EditorManager.editorData.countdown;
    }

    private showStartLayerAni() {
        let dialog = this.firstLayer.getChildByName("dialog");
        Tools.playSpine(dialog.getComponent(sp.Skeleton), "danchuang", false, () => {

        });
        SoundManager.playEffect("飞碟抢走了大家的东西，我们去把它们找回来", false, false, false, () => {
            Tools.playSpine(dialog.getComponent(sp.Skeleton), "suohui", false, () => {
                this.role.node.position = cc.v3(-284.681, -297.431);
                this.role.node.scale = 0.3;
                Tools.playSpine(this.role, "danjun_shuohua2", true);
                this.firstLayer.active = false;
                this.secondLayer.active = true;
                let secondLayerText = this.secondLayer.getChildByName("text");
                secondLayerText.scale = 0;
                cc.tween(secondLayerText).to(0.2, { scale: 1.2 }).to(0.2, { scale: 1 }).start();
                SoundManager.playEffect("找出含有", false, false, false, () => {
                    let typeName: string[] = ["平行线", "垂直", "直角", "锐角", "钝角"];
                    SoundManager.playEffect(typeName[this.configData[SyncDataManager.getSyncData().customSyncData.curStep].type], false, false, false, () => {
                        SoundManager.playEffect("的物品", false, false, false, () => {
                            if (this.configData[SyncDataManager.getSyncData().customSyncData.curStep].count < 10) {
                                SoundManager.playEffect((this.configData[SyncDataManager.getSyncData().customSyncData.curStep].count).toString(), false, false, false, () => {
                                    SoundManager.playEffect("个", false, false, false, () => {
                                        cc.tween(secondLayerText).to(0.3, { scale: 0 }).call(() => {
                                            this.secondLayer.active = false;
                                            cc.tween(this.role.node).to(0.5, { position: cc.v3(-792.218, -560.198), scale: 0.2 }).start();
                                            this.startCountdown();
                                        }).start();
                                    });
                                });
                            } else {
                                this.secondLayer.active = false;
                                this.startCountdown();
                            }
                        });

                    });
                });
            });
        });
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
        if (SyncDataManager.getSyncData().customSyncData.countdown <= 0) {
            SyncDataManager.getSyncData().customSyncData.countdown = 0;
        }
        let min = Math.floor(SyncDataManager.getSyncData().customSyncData.countdown / 60);
        let sec = SyncDataManager.getSyncData().customSyncData.countdown % 60;
        let minStr = min < 10 ? '0' + min : min;
        let secStr = sec < 10 ? '0' + sec : sec;
        this.countdown.string = minStr + ':' + secStr;
    }

    private timeUp() {
        this.unscheduleAllCallbacks();
        this.endLayer2.active = true;
        SoundManager.playEffect("你没有找回所有的物品哦", false, true, false, () => { });
    }

    private onHandleClick(isTrue: boolean) {
        if (isTrue) {
            let curHideItem = SyncDataManager.getSyncData().customSyncData.curHideItem;
            if (this.configData[SyncDataManager.getSyncData().customSyncData.curStep].count == curHideItem.length) {
                UIHelp.showMask();
                this.scheduleOnce(() => {
                    UIHelp.closeMask();
                    this.handleAllFind();
                }, 1.5);
            }
            this.roleKaixin.node.active = true;
            this.role.node.active = false;
            Tools.playSpine(this.roleKaixin, "danjun_kaixin", false, () => {
                this.roleKaixin.node.active = false;
                this.role.node.active = true;
            });
        } else {
            this.wrongTime.active = true;
            this.wrongTime.y = 490;
            let posX = Number(this.countdown.node.parent.x);
            cc.tween(this.countdown.node.parent).to(0.1, { x: posX + 10 }).to(0.1, { x: posX - 10 }).to(0.1, { x: posX + 10 }).to(0.1, { x: posX - 10 }).to(0.1, { x: posX }).start();
            cc.tween(this.wrongTime).to(0.5, { y: 600 }).call(() => {
                SyncDataManager.getSyncData().customSyncData.countdown = SyncDataManager.getSyncData().customSyncData.countdown - EditorManager.editorData.wrongTime + 1;
            }).start();
            this.roleKaixin.node.active = true;
            this.role.node.active = false;
            Tools.playSpine(this.roleKaixin, "danjun_tanqi", false, () => {
                this.roleKaixin.node.active = false;
                this.role.node.active = true;
            });
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
        let secondLayerText = this.secondLayer.getChildByName("text");
        secondLayerText.scale = 0;
        cc.tween(secondLayerText).to(0.2, { scale: 1.2 }).to(0.2, { scale: 1 }).start();
        cc.tween(this.role.node).to(0.5, { position: cc.v3(-284.681, -297.431), scale: 0.3 }).start();
        SoundManager.playEffect("找出含有", false, false, false, () => {
            let typeName: string[] = ["平行线", "垂直", "直角", "锐角", "钝角"];
            SoundManager.playEffect(typeName[this.configData[SyncDataManager.getSyncData().customSyncData.curStep].type], false, false, false, () => {
                SoundManager.playEffect("的物品", false, false, false, () => {
                    if (this.configData[SyncDataManager.getSyncData().customSyncData.curStep].count < 10) {
                        SoundManager.playEffect((this.configData[SyncDataManager.getSyncData().customSyncData.curStep].count).toString(), false, false, false, () => {
                            SoundManager.playEffect("个", false, false, false, () => {
                                // this.secondLayer.active = false;

                                cc.tween(secondLayerText).to(0.3, { scale: 0 }).call(() => {
                                    this.secondLayer.active = false;
                                    cc.tween(this.role.node).to(0.5, { position: cc.v3(-792.218, -560.198), scale: 0.2 }).start();
                                    // this.startCountdown();
                                }).start();
                            });
                        });
                    } else {
                        this.secondLayer.active = false;
                    }
                });

            });
        });
    }

    private handleGameOver() {
        this.scheduleOnce(() => {
            SoundManager.playEffect("恭喜你找回所有物品", false, true, false, () => { });
        }, 1);
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
