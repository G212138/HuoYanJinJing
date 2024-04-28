
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Data/FrameSyncData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98b4e33oG1P47hj2twQ6/jN', 'FrameSyncData');
// frame/scripts/Data/FrameSyncData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameSyncData = void 0;
/**
 * 框架中需要同步的数据
 * 对应 SyncDataManager.syncData.frameSyncData
 * @class FrameSyncData
 */
var FrameSyncData = /** @class */ (function () {
    function FrameSyncData() {
        this.actionId = 0; // 操作指令id
        this.isDispose = true; // 是否处理全量数据
        this.hasReplayCount = 0; // 已重玩的次数
        this.isGameOver = false; // 游戏是否结束
        this.isGameStart = false; // 游戏是否结束
        this.showGameOver = false; // 是否显示游戏结束
    }
    return FrameSyncData;
}());
exports.FrameSyncData = FrameSyncData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXERhdGFcXEZyYW1lU3luY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRztBQUNIO0lBQUE7UUFDVyxhQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUMvQixjQUFTLEdBQVksSUFBSSxDQUFDLENBQUMsV0FBVztRQUN0QyxtQkFBYyxHQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDckMsZUFBVSxHQUFZLEtBQUssQ0FBQyxDQUFDLFNBQVM7UUFDdEMsZ0JBQVcsR0FBWSxLQUFLLENBQUMsQ0FBQyxTQUFTO1FBQ3ZDLGlCQUFZLEdBQVksS0FBSyxDQUFDLENBQUMsV0FBVztJQUVyRCxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmoYbmnrbkuK3pnIDopoHlkIzmraXnmoTmlbDmja5cbiAqIOWvueW6lCBTeW5jRGF0YU1hbmFnZXIuc3luY0RhdGEuZnJhbWVTeW5jRGF0YVxuICogQGNsYXNzIEZyYW1lU3luY0RhdGFcbiAqL1xuZXhwb3J0IGNsYXNzIEZyYW1lU3luY0RhdGEge1xuICAgIHB1YmxpYyBhY3Rpb25JZDogbnVtYmVyID0gMDsgLy8g5pON5L2c5oyH5LukaWRcbiAgICBwdWJsaWMgaXNEaXNwb3NlOiBib29sZWFuID0gdHJ1ZTsgLy8g5piv5ZCm5aSE55CG5YWo6YeP5pWw5o2uXG4gICAgcHVibGljIGhhc1JlcGxheUNvdW50OiBudW1iZXIgPSAwOyAvLyDlt7Lph43njqnnmoTmrKHmlbBcbiAgICBwdWJsaWMgaXNHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlOyAvLyDmuLjmiI/mmK/lkKbnu5PmnZ9cbiAgICBwdWJsaWMgaXNHYW1lU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTsgLy8g5ri45oiP5piv5ZCm57uT5p2fXG4gICAgcHVibGljIHNob3dHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlOyAvLyDmmK/lkKbmmL7npLrmuLjmiI/nu5PmnZ9cblxufVxuIl19