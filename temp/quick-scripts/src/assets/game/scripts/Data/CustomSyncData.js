"use strict";
cc._RF.push(module, 'f6665ym0IlJNYKq4da/THmw', 'CustomSyncData');
// game/scripts/Data/CustomSyncData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSyncData = void 0;
/**
 * 需要同步的自定义数据
 * 游戏业务层同步数据在这里添加
 */
var CustomSyncData = /** @class */ (function () {
    function CustomSyncData() {
        this.curLevel = 0; // 当前关卡(第一关为0)
        // TODO 自定义
        this.curStep = 0; // 步数
        this.allHideItem = []; // 隐藏的物品
        this.curHideItem = []; // 隐藏的物品
        this.isClickStart = false; // 是否点击开始
        this.countdown = 0; // 倒计时
        this.answerTimes = 0; // 答题次数
        this.enableClick = true; // 是否可以点击
    }
    return CustomSyncData;
}());
exports.CustomSyncData = CustomSyncData;

cc._RF.pop();