
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/CustomSyncData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    }
    return CustomSyncData;
}());
exports.CustomSyncData = CustomSyncData;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ3VzdG9tU3luY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztHQUdHO0FBQ0g7SUFBQTtRQUNXLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjO1FBQzNDLFdBQVc7UUFDSixZQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUMxQixnQkFBVyxHQUFhLEVBQUUsQ0FBQyxDQUFDLFFBQVE7UUFDcEMsZ0JBQVcsR0FBYSxFQUFFLENBQUMsQ0FBQyxRQUFRO1FBQ3BDLGlCQUFZLEdBQVksS0FBSyxDQUFDLENBQUMsU0FBUztRQUN4QyxjQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUM3QixnQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU87SUFDM0MsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6ZyA6KaB5ZCM5q2l55qE6Ieq5a6a5LmJ5pWw5o2uXG4gKiDmuLjmiI/kuJrliqHlsYLlkIzmraXmlbDmja7lnKjov5nph4zmt7vliqBcbiAqL1xuZXhwb3J0IGNsYXNzIEN1c3RvbVN5bmNEYXRhIHtcbiAgICBwdWJsaWMgY3VyTGV2ZWw6IG51bWJlciA9IDA7IC8vIOW9k+WJjeWFs+WNoSjnrKzkuIDlhbPkuLowKVxuICAgIC8vIFRPRE8g6Ieq5a6a5LmJXG4gICAgcHVibGljIGN1clN0ZXA6IG51bWJlciA9IDA7IC8vIOatpeaVsFxuICAgIHB1YmxpYyBhbGxIaWRlSXRlbTogc3RyaW5nW10gPSBbXTsgLy8g6ZqQ6JeP55qE54mp5ZOBXG4gICAgcHVibGljIGN1ckhpZGVJdGVtOiBzdHJpbmdbXSA9IFtdOyAvLyDpmpDol4/nmoTnianlk4FcbiAgICBwdWJsaWMgaXNDbGlja1N0YXJ0OiBib29sZWFuID0gZmFsc2U7IC8vIOaYr+WQpueCueWHu+W8gOWni1xuICAgIHB1YmxpYyBjb3VudGRvd246IG51bWJlciA9IDA7IC8vIOWAkuiuoeaXtlxuICAgIHB1YmxpYyBhbnN3ZXJUaW1lczogbnVtYmVyID0gMDsgLy8g562U6aKY5qyh5pWwXG59XG4iXX0=