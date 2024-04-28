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
        this.joinFJT = false;
        this.isGameStart = false;
        this.isGameOver = false;
        this.gameData1 = {
            xingBie: -1,
            nianLing: 7,
            AgeDis: 60
        };
        this.gameData2 = {
            shiWuIndex: -1,
            yunDongIndex: -1,
            weightDis: 0,
            weightValue: 0,
            heightDis: 0,
            heightValue: 0,
        };
    }
    return CustomSyncData;
}());
exports.CustomSyncData = CustomSyncData;

cc._RF.pop();