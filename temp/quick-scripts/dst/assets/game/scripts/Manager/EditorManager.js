
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Manager/EditorManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64363RgvXdCJJdpexRQv89P', 'EditorManager');
// game/scripts/Manager/EditorManager.ts

"use strict";
/**编辑器数据类 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorManager = exports.ItemData = void 0;
/**
 * 编辑器数据，根据游戏自定义内部数据
 */
var EditorData = /** @class */ (function () {
    function EditorData() {
        // 是否开启星级评
        this.isStarCount = true;
        // 是否开启再玩一次
        this.isReplay = true;
        // 是否自动播放题干语音
        this.isPlayTitle = true;
        // 可重玩次数
        this.replayCount = 1;
        // 关卡总数
        this.levelCount = 1;
        // 总步数
        this.stepCount = 0;
        // 课件等级 0：幼小  1：小低  2：小高
        this.coursewareLevel = 0;
        // 新增属性，附加题，any根据实际情况自定义，但是必须为数组已关卡形式出现
        this.additional = [];
        // TODO 自定义数据
        this.countdown = 120;
        this.wrongTime = 5;
        this.itemData = [new ItemData()];
    }
    return EditorData;
}());
var ItemData = /** @class */ (function () {
    function ItemData() {
        this.type = 0;
        this.count = 1;
    }
    return ItemData;
}());
exports.ItemData = ItemData;
var EditorManagerClass = /** @class */ (function () {
    function EditorManagerClass() {
        /** 编辑器数据 */
        this.editorData = new EditorData();
        this._hasResult = true;
    }
    EditorManagerClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new EditorManagerClass();
        }
        return this._instance;
    };
    /**
     * 是否支持题目编辑
     */
    EditorManagerClass.prototype.isSupportEdit = function () {
        var keys = Object.getOwnPropertyNames(this.editorData);
        return keys.length > 7;
    };
    /**
     * 获取关卡总数
     */
    EditorManagerClass.prototype.getLevelCount = function () {
        return this.editorData.levelCount;
    };
    /**
     * 设置关卡总数
     */
    EditorManagerClass.prototype.setLevelCount = function (num) {
        this.editorData.levelCount = num;
    };
    /**
     * 获取总步数
     */
    EditorManagerClass.prototype.getStepCount = function () {
        return this.editorData.stepCount || this.getLevelCount();
    };
    /**
     * 设置总步数
     */
    EditorManagerClass.prototype.setStepCount = function (num) {
        this.editorData.stepCount = num;
    };
    /**
     * 获取课件等级
     * 需要各个游戏根据实际情况设置正确的数值
     * 课件等级 0：幼小  1：小低  2：小高
     */
    EditorManagerClass.prototype.getCoursewareLevel = function () {
        return this.editorData.coursewareLevel;
    };
    /**
     * 获取编辑器数据
     */
    EditorManagerClass.prototype.getData = function () {
        return this.editorData;
    };
    /**
     * 根据网络请求结果设置编辑器数据
     * @param {EditorData} data
     */
    EditorManagerClass.prototype.setData = function (data) {
        this.editorData = data;
    };
    Object.defineProperty(EditorManagerClass.prototype, "hasResult", {
        /**
         * @description: 获取是否有结算
         * @return {*}
         */
        get: function () {
            return this._hasResult;
        },
        /**
        * @description: 设置是否有结算
        * @param {boolean} value 是/否 true/false
        * @return {*}
        */
        set: function (value) {
            this._hasResult = value;
        },
        enumerable: false,
        configurable: true
    });
    return EditorManagerClass;
}());
exports.EditorManager = EditorManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcTWFuYWdlclxcRWRpdG9yTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWTs7O0FBRVo7O0dBRUc7QUFDSDtJQUFBO1FBQ0ksVUFBVTtRQUNILGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQ25DLFdBQVc7UUFDSixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGFBQWE7UUFDTixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUNuQyxRQUFRO1FBQ0QsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDL0IsT0FBTztRQUNBLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDOUIsTUFBTTtRQUNDLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDN0Isd0JBQXdCO1FBQ2pCLG9CQUFlLEdBQVcsQ0FBQyxDQUFDO1FBRW5DLHVDQUF1QztRQUNoQyxlQUFVLEdBQVUsRUFBRSxDQUFDO1FBRTlCLGFBQWE7UUFDTixjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsYUFBUSxHQUFlLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFBRCxpQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUFFRDtJQUFBO1FBQ0ksU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixVQUFLLEdBQVcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSw0QkFBUTtBQUtyQjtJQWNJO1FBSkEsWUFBWTtRQUNMLGVBQVUsR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3pDLGVBQVUsR0FBWSxJQUFJLENBQUM7SUFFbkIsQ0FBQztJQVhWLDhCQUFXLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztTQUM3QztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBUUQ7O09BRUc7SUFDSSwwQ0FBYSxHQUFwQjtRQUNJLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdkQsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSSwwQ0FBYSxHQUFwQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7SUFDdEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksMENBQWEsR0FBcEIsVUFBcUIsR0FBVztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7SUFDckMsQ0FBQztJQUVEOztPQUVHO0lBQ0kseUNBQVksR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7O09BRUc7SUFDSSx5Q0FBWSxHQUFuQixVQUFvQixHQUFXO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLCtDQUFrQixHQUF6QjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksb0NBQU8sR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksb0NBQU8sR0FBZCxVQUFlLElBQWdCO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFPRCxzQkFBVyx5Q0FBUztRQUlwQjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO1FBZkQ7Ozs7VUFJRTthQUNGLFVBQXFCLEtBQWM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFTTCx5QkFBQztBQUFELENBN0ZBLEFBNkZDLElBQUE7QUFFWSxRQUFBLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKue8lui+keWZqOaVsOaNruexuyAqL1xuXG4vKipcbiAqIOe8lui+keWZqOaVsOaNru+8jOagueaNrua4uOaIj+iHquWumuS5ieWGhemDqOaVsOaNrlxuICovXG5jbGFzcyBFZGl0b3JEYXRhIHtcbiAgICAvLyDmmK/lkKblvIDlkK/mmJ/nuqfor4RcbiAgICBwdWJsaWMgaXNTdGFyQ291bnQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8vIOaYr+WQpuW8gOWQr+WGjeeOqeS4gOasoVxuICAgIHB1YmxpYyBpc1JlcGxheTogYm9vbGVhbiA9IHRydWU7XG4gICAgLy8g5piv5ZCm6Ieq5Yqo5pKt5pS+6aKY5bmy6K+t6Z+zXG4gICAgcHVibGljIGlzUGxheVRpdGxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICAvLyDlj6/ph43njqnmrKHmlbBcbiAgICBwdWJsaWMgcmVwbGF5Q291bnQ6IG51bWJlciA9IDE7XG4gICAgLy8g5YWz5Y2h5oC75pWwXG4gICAgcHVibGljIGxldmVsQ291bnQ6IG51bWJlciA9IDE7XG4gICAgLy8g5oC75q2l5pWwXG4gICAgcHVibGljIHN0ZXBDb3VudDogbnVtYmVyID0gMDtcbiAgICAvLyDor77ku7bnrYnnuqcgMO+8muW5vOWwjyAgMe+8muWwj+S9jiAgMu+8muWwj+mrmFxuICAgIHB1YmxpYyBjb3Vyc2V3YXJlTGV2ZWw6IG51bWJlciA9IDA7XG5cbiAgICAvLyDmlrDlop7lsZ7mgKfvvIzpmYTliqDpopjvvIxhbnnmoLnmja7lrp7pmYXmg4XlhrXoh6rlrprkuYnvvIzkvYbmmK/lv4XpobvkuLrmlbDnu4Tlt7LlhbPljaHlvaLlvI/lh7rnjrBcbiAgICBwdWJsaWMgYWRkaXRpb25hbDogYW55W10gPSBbXTtcblxuICAgIC8vIFRPRE8g6Ieq5a6a5LmJ5pWw5o2uXG4gICAgcHVibGljIGNvdW50ZG93bjogbnVtYmVyID0gMTIwO1xuICAgIHB1YmxpYyB3cm9uZ1RpbWU6IG51bWJlciA9IDU7XG4gICAgcHVibGljIGl0ZW1EYXRhOiBJdGVtRGF0YVtdID0gW25ldyBJdGVtRGF0YSgpXTtcbn1cblxuZXhwb3J0IGNsYXNzIEl0ZW1EYXRhIHtcbiAgICB0eXBlOiBudW1iZXIgPSAwO1xuICAgIGNvdW50OiBudW1iZXIgPSAxO1xufVxuXG5jbGFzcyBFZGl0b3JNYW5hZ2VyQ2xhc3Mge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogRWRpdG9yTWFuYWdlckNsYXNzO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgRWRpdG9yTWFuYWdlckNsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKiDnvJbovpHlmajmlbDmja4gKi9cbiAgICBwdWJsaWMgZWRpdG9yRGF0YTogRWRpdG9yRGF0YSA9IG5ldyBFZGl0b3JEYXRhKCk7XG4gICAgcHJpdmF0ZSBfaGFzUmVzdWx0OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICAvKipcbiAgICAgKiDmmK/lkKbmlK/mjIHpopjnm67nvJbovpFcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNTdXBwb3J0RWRpdCgpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLmVkaXRvckRhdGEpO1xuXG4gICAgICAgIHJldHVybiBrZXlzLmxlbmd0aCA+IDc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5YWz5Y2h5oC75pWwXG4gICAgICovXG4gICAgcHVibGljIGdldExldmVsQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRvckRhdGEubGV2ZWxDb3VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7lhbPljaHmgLvmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0TGV2ZWxDb3VudChudW06IG51bWJlcikge1xuICAgICAgICB0aGlzLmVkaXRvckRhdGEubGV2ZWxDb3VudCA9IG51bTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmgLvmraXmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U3RlcENvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGl0b3JEYXRhLnN0ZXBDb3VudCB8fCB0aGlzLmdldExldmVsQ291bnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7mgLvmraXmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U3RlcENvdW50KG51bTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yRGF0YS5zdGVwQ291bnQgPSBudW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W6K++5Lu2562J57qnXG4gICAgICog6ZyA6KaB5ZCE5Liq5ri45oiP5qC55o2u5a6e6ZmF5oOF5Ya16K6+572u5q2j56Gu55qE5pWw5YC8XG4gICAgICog6K++5Lu2562J57qnIDDvvJrlubzlsI8gIDHvvJrlsI/kvY4gIDLvvJrlsI/pq5hcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q291cnNld2FyZUxldmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGl0b3JEYXRhLmNvdXJzZXdhcmVMZXZlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bnvJbovpHlmajmlbDmja5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RGF0YSgpOiBFZGl0b3JEYXRhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdG9yRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoLnmja7nvZHnu5zor7fmsYLnu5Pmnpzorr7nva7nvJbovpHlmajmlbDmja5cbiAgICAgKiBAcGFyYW0ge0VkaXRvckRhdGF9IGRhdGFcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiBFZGl0b3JEYXRhKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yRGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAZGVzY3JpcHRpb246IOiuvue9ruaYr+WQpuaciee7k+eul1xuICAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZSDmmK8v5ZCmIHRydWUvZmFsc2VcbiAgICAqIEByZXR1cm4geyp9XG4gICAgKi9cbiAgICBwdWJsaWMgc2V0IGhhc1Jlc3VsdCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9oYXNSZXN1bHQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb246IOiOt+WPluaYr+WQpuaciee7k+eul1xuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgcHVibGljIGdldCBoYXNSZXN1bHQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNSZXN1bHQ7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRWRpdG9yTWFuYWdlciA9IEVkaXRvck1hbmFnZXJDbGFzcy5nZXRJbnN0YW5jZSgpO1xuIl19