import { ListenerManager } from '../../../../frame/scripts/Manager/ListenerManager';
import { SyncData, SyncDataManager } from '../../../../frame/scripts/Manager/SyncDataManager';
import BaseGamePanel from '../../../../frame/scripts/UI/Panel/BaseGamePanel';
import { CustomSyncData } from '../../Data/CustomSyncData';
import { EventType } from '../../Data/EventType';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePanel extends BaseGamePanel {
    public static className = 'GamePanel';

    start() {
        super.start();
        ListenerManager.on(EventType.GAME_OVER, this.gameOver, this);
        ListenerManager.on(EventType.REPORT_RIGHT, this.answerRight, this);
        ListenerManager.on(EventType.REPORT_WRONG, this.answerWrong, this);
    }

    onDestroy() {
        super.onDestroy();
        ListenerManager.off(EventType.GAME_OVER, this.gameOver, this);
        ListenerManager.off(EventType.REPORT_RIGHT, this.answerRight, this);
        ListenerManager.off(EventType.REPORT_WRONG, this.answerWrong, this);
    }

    /**
     * 游戏入口
     * 这里已经拿到数据
     */
    protected setPanel() {
        super.setPanel();
        // TODO 业务逻辑
        
    }

    /**
     * 心跳回调（当actionId不相等时才会触发）
     * @param recovery
     */
    protected onRecoveryData(recovery: SyncData): void {
        super.onRecoveryData(recovery);
        console.log("==========重连=============");
    }

    /**
     * 作答正确
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    protected answerRight(isCurLevelFinish: boolean) {
        super.answerRight(isCurLevelFinish);
    }

    /**
     * 作答错误
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    protected answerWrong(isCurLevelFinish: boolean = false) {
        super.answerWrong(isCurLevelFinish);
    }

    /**
     * 游戏结束
     * 父类实现了结算界面（游戏结束或星级评判）的弹出
     */
    protected gameOver() {
        super.gameOver();
    }

    /**
     * 重玩
     */
    protected onReplay() {
        super.onReplay();
        
    }

    // /**
    // * 附加题
    // */
    // protected onEnterAdditional() {
    //     super.onEnterAdditional();
    //     console.log("=========进入附加题============");
    //     SyncDataManager.getSyncData().customSyncData = new CustomSyncData();
    //     this.gamelayer._initData();
    // }

    update(dt) {
        super.update(dt);
    }
}
