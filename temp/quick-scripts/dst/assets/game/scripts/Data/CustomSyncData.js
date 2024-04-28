
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ3VzdG9tU3luY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztHQUdHO0FBQ0g7SUFBQTtRQUNXLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjO1FBQzNDLFdBQVc7UUFDSixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsY0FBUyxHQUFHO1lBQ2YsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNYLFFBQVEsRUFBRSxDQUFDO1lBQ1gsTUFBTSxFQUFFLEVBQUU7U0FDYixDQUFBO1FBRU0sY0FBUyxHQUFHO1lBQ2YsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUNkLFlBQVksRUFBRSxDQUFDLENBQUM7WUFDaEIsU0FBUyxFQUFFLENBQUM7WUFDWixXQUFXLEVBQUUsQ0FBQztZQUNkLFNBQVMsRUFBRSxDQUFDO1lBQ1osV0FBVyxFQUFFLENBQUM7U0FDakIsQ0FBQTtJQVNMLENBQUM7SUFBRCxxQkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3Qlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOmcgOimgeWQjOatpeeahOiHquWumuS5ieaVsOaNrlxuICog5ri45oiP5Lia5Yqh5bGC5ZCM5q2l5pWw5o2u5Zyo6L+Z6YeM5re75YqgXG4gKi9cbmV4cG9ydCBjbGFzcyBDdXN0b21TeW5jRGF0YSB7XG4gICAgcHVibGljIGN1ckxldmVsOiBudW1iZXIgPSAwOyAvLyDlvZPliY3lhbPljaEo56ys5LiA5YWz5Li6MClcbiAgICAvLyBUT0RPIOiHquWumuS5iVxuICAgIHB1YmxpYyBqb2luRkpUID0gZmFsc2U7XG4gICAgcHVibGljIGlzR2FtZVN0YXJ0OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGlzR2FtZU92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBnYW1lRGF0YTEgPSB7XG4gICAgICAgIHhpbmdCaWU6IC0xLFxuICAgICAgICBuaWFuTGluZzogNyxcbiAgICAgICAgQWdlRGlzOiA2MFxuICAgIH1cblxuICAgIHB1YmxpYyBnYW1lRGF0YTIgPSB7XG4gICAgICAgIHNoaVd1SW5kZXg6IC0xLFxuICAgICAgICB5dW5Eb25nSW5kZXg6IC0xLFxuICAgICAgICB3ZWlnaHREaXM6IDAsXG4gICAgICAgIHdlaWdodFZhbHVlOiAwLFxuICAgICAgICBoZWlnaHREaXM6IDAsXG4gICAgICAgIGhlaWdodFZhbHVlOiAwLFxuICAgIH1cblxuXG5cblxuXG5cblxuXG59XG4iXX0=