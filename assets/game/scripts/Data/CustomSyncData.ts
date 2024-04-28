/**
 * 需要同步的自定义数据
 * 游戏业务层同步数据在这里添加
 */
export class CustomSyncData {
    public curLevel: number = 0; // 当前关卡(第一关为0)
    // TODO 自定义
    public joinFJT = false;
    public isGameStart: boolean = false;
    public isGameOver: boolean = false;

    public gameData1 = {
        xingBie: -1,
        nianLing: 7,
        AgeDis: 60
    }

    public gameData2 = {
        shiWuIndex: -1,
        yunDongIndex: -1,
        weightDis: 0,
        weightValue: 0,
        heightDis: 0,
        heightValue: 0,
    }








}
