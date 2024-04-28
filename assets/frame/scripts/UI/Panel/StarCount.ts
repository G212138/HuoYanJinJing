import { ConstValue } from '../../../../game/scripts/Data/ConstValue';
import { EditorManager } from '../../../../game/scripts/Manager/EditorManager';
import { ReportManager } from '../../Manager/ReportManager';
import { Tools } from '../../Utils/Tools';
import { UIHelp } from '../../Utils/UIHelp';
import BaseFrameUI from '../BaseFrameUI';
import { SoundManager } from './../../Manager/SoundManager';

const { ccclass, property } = cc._decorator;

@ccclass
export default class StarCount extends BaseFrameUI {
    public static className = 'StarCount';

    @property(cc.Node)
    private sp_star1: cc.Node = null;
    @property(cc.Node)
    private sp_star2: cc.Node = null;
    @property(cc.Node)
    private sp_star3: cc.Node = null;
    @property(cc.Node)
    private sp_star_en1: cc.Node = null;
    @property(cc.Node)
    private sp_star_en2: cc.Node = null;
    @property(cc.Node)
    private sp_star_en3: cc.Node = null;
    @property(cc.Node)
    private btn_replay: cc.Node = null;
    @property(cc.Node)
    private btn_additional: cc.Node = null;

    private audioList: string[] = ['settle_star1', 'settle_star1', 'settle_star2', 'settle_star3'];
    private ani_enter_list: string[] = ['1X_kaishi', '1X_kaishi', '2xing_kaishi', '3xing_kaishi'];
    private ani_idle_list: string[] = ['1X_xunhuan', '1X_xunhuan', '2xing_xunhuan', '3xing_xunhuan'];
    private ani_en_list: string[] = ['1xing_citiao', '1xing_citiao', '2xing_kaishi', '3xing_kaishi'];
    private btn_pos_list: cc.Vec2[] = [cc.v2(0, -399), cc.v2(0, -399), cc.v2(0, -364), cc.v2(0, -312)];

    onLoad() {

    }

    /**
     * @param isShowReplay 是否显示重玩按钮
     * @param starNum 星数 (不传参数则从ReportManager里取值)
     */
    showStars(isShowReplay?: boolean, starNum?: number): void {
        let star = 0;
        if (void 0 === starNum || null === starNum) {
            star = ReportManager.getStarCount();
        } else {
            star = starNum;
        }

        SoundManager.playEffect(this.audioList[star], false);
        UIHelp.closeMask();

        let btn_node = null;
        if (EditorManager.editorData.additional.length > 0 && ReportManager.isPassGame() && !ReportManager.isPassAdditonal()) {
            this.btn_additional.active = true;
            this.btn_additional.setPosition(this.btn_pos_list[star]);
            this.btn_additional.setScale(0.01);
            btn_node = this.btn_additional;
        }
        else if (ReportManager.isPassGame() && ReportManager.isPassAdditonal()) {
            this.btn_replay.active = isShowReplay;
            this.btn_replay.setPosition(this.btn_pos_list[star]);
            this.btn_replay.setScale(0.01);
            btn_node = this.btn_replay;
        }

        const subject: number = ConstValue.Subject || 1;
        let spine: sp.Skeleton = null;
        let spine_en: sp.Skeleton = null;
        switch (star) {
            case 3:
                spine = this.sp_star3 && this.sp_star3.getComponent(sp.Skeleton);
                spine_en = this.sp_star_en3.getComponent(sp.Skeleton);
                break;
            case 2:
                spine = this.sp_star2 && this.sp_star2.getComponent(sp.Skeleton);
                spine_en = this.sp_star_en2.getComponent(sp.Skeleton);
                break;
            default:
                spine = this.sp_star1 && this.sp_star1.getComponent(sp.Skeleton);
                spine_en = this.sp_star_en1.getComponent(sp.Skeleton);
                break;
        }
        if (spine) {
            spine.node.active = true;
            spine_en.node.active = true;
            Tools.playSpine(spine_en, this.ani_en_list[star], false, () => {
                spine_en.node.active = false;
            });
            Tools.playSpine(spine, this.ani_enter_list[star], false, () => {
                Tools.playSpine(spine, this.ani_idle_list[star], true);
                if (btn_node && btn_node.active) {
                    cc.tween(btn_node)
                        .to(0.5, { scale: 1 }, { easing: 'backOut' })
                        .start();
                }
            });
        }
    }
}
