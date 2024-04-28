// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { EditorManager } from "../../Manager/EditorManager";
import TeacherPanel from "../panel/TeacherPanel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ConfigItem extends cc.Component {

    @property(cc.Label)
    private lbl_index: cc.Label = null;
    @property(cc.Label)
    private lbl_type: cc.Label = null;
    @property(cc.EditBox)
    private editCount: cc.EditBox = null;
    @property(cc.Node)
    private typePanel: cc.Node = null;
    @property(cc.Node)
    private teacherPanel: cc.Node = null;
    
    public index: number = 0;
    private typeName: string[] = ["平行","垂直","直角","锐角","钝角"];

    public init(index: number) {
        this.index = index;
        let gameData = EditorManager.editorData.itemData;
        this.lbl_index.string = "(" + (this.index + 1) + ")";
        this.lbl_type.string = this.typeName[gameData[this.index].type];
        this.editCount.string = gameData[this.index].count.toString();
        this.typePanel.active = false;
    }

    private onEditCountChange() {
        let count = Number(this.editCount.string);
        if (count < 1 || this.editCount.string == "") {
            count = 1;            
        }
        this.editCount.string = count.toString();
        EditorManager.editorData.itemData[this.index].count = count;
    }

    private onClickChangeType() {
        this.typePanel.active = !this.typePanel.active;
    }

    private onClickType(event: cc.Event.EventTouch, customData: string) {
        let index = Number(customData);
        EditorManager.editorData.itemData[this.index].type = index;
        this.lbl_type.string = this.typeName[index];
        this.typePanel.active = false;
    }

    private onClickDelete() {
        EditorManager.editorData.itemData.splice(this.index, 1);
        this.teacherPanel.getComponent(TeacherPanel).updateItemPanel();
    }
}
