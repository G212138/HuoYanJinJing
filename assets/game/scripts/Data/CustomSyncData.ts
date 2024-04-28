/**
 * 需要同步的自定义数据
 * 游戏业务层同步数据在这里添加
 */
export class CustomSyncData {
    public curLevel: number = 0; // 当前关卡(第一关为0)
    // TODO 自定义
    public curStep: number = 0; // 步数
    public allHideItem: string[] = []; // 隐藏的物品
    public curHideItem: string[] = []; // 隐藏的物品
    public isClickStart: boolean = false; // 是否点击开始
    public countdown: number = 0; // 倒计时
    public answerTimes: number = 0; // 答题次数
}
