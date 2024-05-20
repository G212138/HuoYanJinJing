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
import { EventType } from "../../Data/EventType";
import { EditorManager } from "../../Manager/EditorManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(Boolean)
    private pingxing: Boolean = false;
    @property(Boolean)
    private chuizhi: Boolean = false;
    @property(Boolean)
    private zhijiao: Boolean = false;
    @property(Boolean)
    private dunjiao: Boolean = false;
    @property(Boolean)
    private ruijiao: Boolean = false;
    @property(Boolean)
    private ganraoxiang: Boolean = false;

    private onClick() {
        if (!SyncDataManager.getSyncData().customSyncData.enableClick) {
            return;
        }        
        let curStep = SyncDataManager.getSyncData().customSyncData.curStep;
        let gameData = EditorManager.editorData.itemData;
        let type = gameData[curStep].type;
        if (type == 0 && this.pingxing) {
            this.handleTrue();
        } else if (type == 1 && this.chuizhi) {
            this.handleTrue();
        } else if (type == 2 && this.zhijiao) {
            this.handleTrue();
        } else if (type == 3 && this.ruijiao) {
            this.handleTrue();
        } else if (type == 4 && this.dunjiao) {
            this.handleTrue();
        } else {
            this.handleFalse();
        }
    }

    private handleTrue() {
        SyncDataManager.getSyncData().customSyncData.enableClick = false;
        let soundName = ["哈找对了", "好眼力", "你真棒"];
        let random = Math.floor(Math.random() * 3);
        SoundManager.playEffect(soundName[random], false, true, false, () => {
            SyncDataManager.getSyncData().customSyncData.enableClick = true;
         });
        for (let i = 0; i < SyncDataManager.getSyncData().customSyncData.curHideItem.length; i++) {
            if (SyncDataManager.getSyncData().customSyncData.curHideItem[i] == this.node.name) {
                SyncDataManager.getSyncData().customSyncData.curHideItem.splice(i, 1);
            }
        }
        for (let i = 0; i < SyncDataManager.getSyncData().customSyncData.allHideItem.length; i++) {
            if (SyncDataManager.getSyncData().customSyncData.allHideItem[i] == this.node.name) {
                SyncDataManager.getSyncData().customSyncData.allHideItem.splice(i, 1);
            }
        }
        SyncDataManager.getSyncData().customSyncData.curHideItem.push(this.node.name);
        SyncDataManager.getSyncData().customSyncData.allHideItem.push(this.node.name);

        ListenerManager.dispatch(EventType.ON_CLICK_ITEM, true);
        //节点旋转隐藏
        cc.tween(this.node).to(0.5, { angle: -720, opacity: 0 }).call(() => {
            this.node.active = false;
        }).start();

        let xiaoshiAni = this.node.parent.parent.getChildByName("xiaoshi");
        xiaoshiAni.active = true;
        xiaoshiAni.position = this.node.position;
        Tools.playSpine(xiaoshiAni.getComponent(sp.Skeleton), "xiaoshi", false, () => {
            xiaoshiAni.active = false;
        });
    }

    private handleFalse() {
        SyncDataManager.getSyncData().customSyncData.enableClick = false;
        this.node.parent.parent.getChildByName("xiaoshi").active = false;
        let soundName = ["在想想", "找错咯", "嗯"];
        let random = Math.floor(Math.random() * 3);
        SoundManager.playEffect(soundName[random], false, true, false, () => { 
            SyncDataManager.getSyncData().customSyncData.enableClick = true;
        });
        //节点抖动
        ListenerManager.dispatch(EventType.ON_CLICK_ITEM, false);
        let posX = Number(this.node.x);
        cc.tween(this.node).to(0.1, { x: posX + 10 }).to(0.1, { x: posX - 10 }).to(0.1, { x: posX + 10 }).to(0.1, { x: posX - 10 }).to(0.1, { x: posX }).start();
    }
}
