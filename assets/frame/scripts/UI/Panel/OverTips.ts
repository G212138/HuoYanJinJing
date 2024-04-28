import { SoundManager } from './../../Manager/SoundManager';
import { Tools } from '../../Utils/Tools';
import BaseFrameUI from '../BaseFrameUI';
import { UIHelp } from '../../Utils/UIHelp';
import { UIManager } from '../../Manager/UIManager';
import { T2M } from '../../SDK/T2M';
import { FrameMsgType } from '../../Data/FrameMsgType';
import { ConstValue } from '../../../../game/scripts/Data/ConstValue';
import { EditorManager } from '../../../../game/scripts/Manager/EditorManager';
import { ReportManager } from '../../Manager/ReportManager';

export enum Type_Tile {
    ZuoDaJieShu,
    ChuangGuanChengGong,
    TiaoZhanJieShu,
    TiaoZhanChengGong,
    ChuangGuanJieShu,
}

const { ccclass, property } = cc._decorator;
@ccclass
export class OverTips extends BaseFrameUI {
    public static className = 'OverTips';

    @property(cc.Node)
    private btn_additional: cc.Node = null;

    private _lb_tips: cc.Node = null;
    private _sp_complete: cc.Node = null;
    private _btn_close: cc.Node = null;
    private _btn_replay: cc.Node = null;

    private callback = null;

    constructor() {
        super();
    }

    onLoad() {
    }

    start() {
        this._btn_close.on(cc.Node.EventType.TOUCH_END, this.onClickClose, this);

        T2M.addSyncEventListener(FrameMsgType.OVERTIPS_CLOSE, this.doClickClose.bind(this));
    }

    onDisable() {
        this._btn_close.off(cc.Node.EventType.TOUCH_END, this.onClickClose, this);
    }

    /**
     设置显示内容
     @param {number} type          0: 错误  1：答对了  2：闯关成功(一直显示不会关闭)
     @param {string} str           提示内容
     @param {Function} callback    回调函数
     @param {string} endTitle      end动效提示文字
     @param {boolean} isShowReplay     是否显示重玩按钮
     @param {boolean} isShowClose     是否显示关闭按钮
     @param {boolean} autoOff     是否自动关闭
     */
    init(
        type: number,
        str: string = '',
        callback: Function,
        endTitle?: string,
        isShowReplay?: boolean,
        isShowClose: boolean = false,
        autoOff: boolean = true,
    ): void {
        this.callback = callback;
        this._sp_complete.active = true;
        this._lb_tips.active = type != 2;
        this._lb_tips.getComponent(cc.Label).string = str;
        this._btn_close.active = isShowClose && (0 === type || 1 === type);

        let btnNode = null
        if (EditorManager.editorData.additional.length > 0 && ReportManager.isPassGame() && !ReportManager.isPassAdditonal()) {
            this.btn_additional.active = true;
            this.btn_additional.setScale(0.01);
            btnNode = this.btn_additional;
        }
        else if (ReportManager.isPassGame() && ReportManager.isPassAdditonal()) {
            this._btn_replay.active = isShowReplay;
            this._btn_replay.setScale(0.01);
            btnNode = this._btn_replay
        }

        SoundManager.playEffect("settle_star0", false);
        Tools.playSpine(this._sp_complete.getComponent(sp.Skeleton), 'tiaozhan_kaishi', false, () => {
            if (btnNode && btnNode.active) {
                cc.tween(btnNode)
                    .to(0.5, { scale: 1 }, { easing: 'backOut' })
                    .start();
            }
            Tools.playSpine(this._sp_complete.getComponent(sp.Skeleton), 'tiaozhan_xunhuan', true);
        });

        this.playTipsAction();
        UIHelp.closeMask();
    }

    delayClose(): void {
        this.scheduleOnce(() => {
            this.doClickClose();
        }, 0);
    }

    playTipsAction() {
        if (this._lb_tips.active) {
            let endPos = cc.v2(this._lb_tips.position.x, this._lb_tips.position.y);
            let framePos_1 = cc.v2(endPos.x, endPos.y - 72.8);
            let framePos_2 = cc.v2(endPos.x, endPos.y + 12);
            let framePos_3 = cc.v2(endPos.x, endPos.y - 8);
            let framePos_4 = cc.v2(endPos.x, endPos.y + 7.3);
            this._lb_tips.position = cc.v3(framePos_1.x, framePos_1.y);
            cc.tween(this._lb_tips)
                .to(0.08, { x: framePos_2.x, y: framePos_2.y })
                .to(0.08, { x: framePos_3.x, y: framePos_3.y })
                .to(0.08, { x: framePos_4.x, y: framePos_4.y })
                .to(0.06, { x: endPos.x, y: endPos.y })
                .start();
        }
    }

    onClickClose(event?, customEventData?): void {
        T2M.dispatch(FrameMsgType.OVERTIPS_CLOSE, null);
    }

    doClickClose() {
        if (this.callback) this.callback();
        UIHelp.closeOverTips();
    }
}
