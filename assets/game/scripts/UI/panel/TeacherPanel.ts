import { FrameMsgType } from '../../../../frame/scripts/Data/FrameMsgType';
import { ListenerManager } from '../../../../frame/scripts/Manager/ListenerManager';
import { ReportManager } from '../../../../frame/scripts/Manager/ReportManager';
import { UIManager } from '../../../../frame/scripts/Manager/UIManager';
import BaseTeacherPanel from '../../../../frame/scripts/UI/Panel/BaseTeacherPanel';
import SubmissionPanel from '../../../../frame/scripts/UI/Panel/SubmissionPanel';
import { UIHelp } from '../../../../frame/scripts/Utils/UIHelp';
import { EditorManager, ItemData } from '../../Manager/EditorManager';
import ConfigItem from '../Item/ConfigItem';
import GamePanel from './GamePanel';

const { ccclass, property } = cc._decorator;

@ccclass
export default class TeacherPanel extends BaseTeacherPanel {
    public static className = 'TeacherPanel';

    @property(cc.ToggleContainer)
    private toggle_stars: cc.ToggleContainer = null;
    @property(cc.ToggleContainer)
    private toggle_replay: cc.ToggleContainer = null;
    @property(cc.ToggleContainer)
    private toggle_titleAudio: cc.ToggleContainer = null;

    @property(cc.EditBox)
    private countdown: cc.EditBox = null;
    @property(cc.EditBox)
    private wrongTime: cc.EditBox = null;
    @property(ConfigItem)
    private configItem: ConfigItem = null;
    @property(cc.Node)
    private configPanel: cc.Node = null;

    private _btn_save: cc.Node = null;
    private _btn_view: cc.Node = null;

    onLoad() {
        super.onLoad();
    }

    start() {
        super.start();

        // 可编辑的游戏，不展示保存按钮
        const isEdit = EditorManager.isSupportEdit();
        if (this._btn_save) {
            this._btn_save.active = !isEdit;
        }
        this._btn_save.active = true;
    }

    /**
     * 设置界面（这里已经拿到了网络请求数据）
     */
    private gameData = "";
    setPanel() {
        super.setPanel();
        this.toggle_stars.toggleItems[EditorManager.editorData.isStarCount ? 0 : 1].isChecked = true;
        this.toggle_replay.toggleItems[EditorManager.editorData.isReplay ? 0 : 1].isChecked = true;
        this.toggle_titleAudio.toggleItems[EditorManager.editorData.isPlayTitle ? 0 : 1].isChecked = true;

        // if (!EditorManager.editorData.GameData || EditorManager.editorData.GameData.length == 0) {
        //     EditorManager.editorData.GameData = JSON.parse(this.gameData);
        // }
        // let level = new OptionData();
        // EditorManager.editorData.GameData = JSON.parse(JSON.stringify(level.titleData));

        // console.log("EditorManager.editorData.GameData", EditorManager.editorData.GameData);


        // this.node_config.getComponent(TeacherConfig).updateOptionPanel();

        this.countdown.string = EditorManager.editorData.countdown.toString();
        this.wrongTime.string = EditorManager.editorData.wrongTime.toString();
        this.updateItemPanel();
    }

    private onEditCountdownChange() {
        let count = Number(this.countdown.string);
        if (count < 1 || this.countdown.string == "") {
            count = 1;
        }
        this.countdown.string = count.toString();
        EditorManager.editorData.countdown = count;
    }

    private onEditWrongTimeChange() {
        let count = Number(this.wrongTime.string);
        if (count < 0 || this.wrongTime.string == "") {
            count = 0;
        }
        this.wrongTime.string = count.toString();
        EditorManager.editorData.wrongTime = count;
    }

    private onClickAdd() {
        EditorManager.editorData.itemData.push(new ItemData());
        this.updateItemPanel();
    }

    public updateItemPanel() {
        this.configPanel.removeAllChildren();
        for (let i = 0; i < EditorManager.editorData.itemData.length; i++) {
            let item = cc.instantiate(this.configItem.node);
            item.parent = this.configPanel;
            item.getComponent(ConfigItem).init(i);
        }
    }

    // 星级评判开关
    public onToggleStar(toggle: cc.Toggle): void {
        let index = this.toggle_stars.toggleItems.indexOf(toggle);
        EditorManager.editorData.isStarCount = 0 === index;
    }

    // 重玩开关
    public onToggleReplay(toggle: cc.Toggle): void {
        let index = this.toggle_replay.toggleItems.indexOf(toggle);
        EditorManager.editorData.isReplay = 0 === index;
    }

    // 自动播放题干语音开关
    public onToggleTitleAudio(toggle: cc.Toggle): void {
        let index = this.toggle_titleAudio.toggleItems.indexOf(toggle);
        EditorManager.editorData.isPlayTitle = 0 === index;
    }

    // 保存课件按钮
    public onBtnSaveClicked() {
        if (!this.checkConfig()) return;
        UIHelp.showSubmissionPanel();
        // const isEdit = EditorManager.isSupportEdit();
        // if (!isEdit || ReportManager.isAllOver) {
        //     UIHelp.showSubmissionPanel();
        // } else {
        //     UIHelp.showTip('请先完成一遍题目');
        // }
    }
    // 预览课件按钮
    public onBtnViewClicked() {
        if (!this.checkConfig()) return;
        if (
            -1 === EditorManager.getCoursewareLevel() ||
            null === EditorManager.getCoursewareLevel() ||
            void 0 === EditorManager.getCoursewareLevel()
        ) {
            UIHelp.showTip('请先设置coursewareLevel');
        } else {
            ListenerManager.dispatch(FrameMsgType.TEACHER_PANEL_LOADING, true);
            UIManager.showUI(GamePanel);
        }
    }

    //检查配置文件是否完整
    private checkConfig() {
        return true;
    }

    //复制数组
    private copyArray(arr) {
        return JSON.parse(JSON.stringify(arr))
    }
}
