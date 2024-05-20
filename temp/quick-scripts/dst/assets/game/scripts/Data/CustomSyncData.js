
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
        this.enableClick = true; // 是否可以点击
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ3VzdG9tU3luY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztHQUdHO0FBQ0g7SUFBQTtRQUNXLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjO1FBQzNDLFdBQVc7UUFDSixZQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUMxQixnQkFBVyxHQUFhLEVBQUUsQ0FBQyxDQUFDLFFBQVE7UUFDcEMsZ0JBQVcsR0FBYSxFQUFFLENBQUMsQ0FBQyxRQUFRO1FBQ3BDLGlCQUFZLEdBQVksS0FBSyxDQUFDLENBQUMsU0FBUztRQUN4QyxjQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUM3QixnQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU87UUFDaEMsZ0JBQVcsR0FBWSxJQUFJLENBQUMsQ0FBQyxTQUFTO0lBQ2pELENBQUM7SUFBRCxxQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOmcgOimgeWQjOatpeeahOiHquWumuS5ieaVsOaNrlxuICog5ri45oiP5Lia5Yqh5bGC5ZCM5q2l5pWw5o2u5Zyo6L+Z6YeM5re75YqgXG4gKi9cbmV4cG9ydCBjbGFzcyBDdXN0b21TeW5jRGF0YSB7XG4gICAgcHVibGljIGN1ckxldmVsOiBudW1iZXIgPSAwOyAvLyDlvZPliY3lhbPljaEo56ys5LiA5YWz5Li6MClcbiAgICAvLyBUT0RPIOiHquWumuS5iVxuICAgIHB1YmxpYyBjdXJTdGVwOiBudW1iZXIgPSAwOyAvLyDmraXmlbBcbiAgICBwdWJsaWMgYWxsSGlkZUl0ZW06IHN0cmluZ1tdID0gW107IC8vIOmakOiXj+eahOeJqeWTgVxuICAgIHB1YmxpYyBjdXJIaWRlSXRlbTogc3RyaW5nW10gPSBbXTsgLy8g6ZqQ6JeP55qE54mp5ZOBXG4gICAgcHVibGljIGlzQ2xpY2tTdGFydDogYm9vbGVhbiA9IGZhbHNlOyAvLyDmmK/lkKbngrnlh7vlvIDlp4tcbiAgICBwdWJsaWMgY291bnRkb3duOiBudW1iZXIgPSAwOyAvLyDlgJLorqHml7ZcbiAgICBwdWJsaWMgYW5zd2VyVGltZXM6IG51bWJlciA9IDA7IC8vIOetlOmimOasoeaVsFxuICAgIHB1YmxpYyBlbmFibGVDbGljazogYm9vbGVhbiA9IHRydWU7IC8vIOaYr+WQpuWPr+S7peeCueWHu1xufVxuIl19