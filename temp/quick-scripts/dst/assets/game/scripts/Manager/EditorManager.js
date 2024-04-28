
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
exports.EditorManager = exports.OptionData = void 0;
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
        this.GameData = null;
        this.isPanTi = true;
        this.isTiaoTi = true;
    }
    return EditorData;
}());
var OptionData = /** @class */ (function () {
    function OptionData() {
        this.countValue1 = "";
        this.countValue2 = "";
        this.titleData = [];
        this.titleData2 = [];
    }
    return OptionData;
}());
exports.OptionData = OptionData;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcTWFuYWdlclxcRWRpdG9yTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWTs7O0FBRVo7O0dBRUc7QUFDSDtJQUFBO1FBQ0ksVUFBVTtRQUNILGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQ25DLFdBQVc7UUFDSixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGFBQWE7UUFDTixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUNuQyxRQUFRO1FBQ0QsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDL0IsT0FBTztRQUNBLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDOUIsTUFBTTtRQUNDLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDN0Isd0JBQXdCO1FBQ2pCLG9CQUFlLEdBQVcsQ0FBQyxDQUFDO1FBRW5DLHVDQUF1QztRQUNoQyxlQUFVLEdBQVUsRUFBRSxDQUFDO1FBRTlCLGFBQWE7UUFDTixhQUFRLEdBQVEsSUFBSSxDQUFDO1FBRXJCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsYUFBUSxHQUFZLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBR0Q7SUFBQTtRQUNXLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixlQUFVLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFBRCxpQkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksZ0NBQVU7QUFPdkI7SUFjSTtRQUpBLFlBQVk7UUFDTCxlQUFVLEdBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUN6QyxlQUFVLEdBQVksSUFBSSxDQUFDO0lBRW5CLENBQUM7SUFYViw4QkFBVyxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7U0FDN0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQVFEOztPQUVHO0lBQ0ksMENBQWEsR0FBcEI7UUFDSSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXZELE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksMENBQWEsR0FBcEI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7T0FFRztJQUNJLDBDQUFhLEdBQXBCLFVBQXFCLEdBQVc7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNJLHlDQUFZLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0QsQ0FBQztJQUVEOztPQUVHO0lBQ0kseUNBQVksR0FBbkIsVUFBb0IsR0FBVztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSwrQ0FBa0IsR0FBekI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNJLG9DQUFPLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG9DQUFPLEdBQWQsVUFBZSxJQUFnQjtRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBT0Qsc0JBQVcseUNBQVM7UUFJcEI7OztXQUdHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQztRQWZEOzs7O1VBSUU7YUFDRixVQUFxQixLQUFjO1lBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBU0wseUJBQUM7QUFBRCxDQTdGQSxBQTZGQyxJQUFBO0FBRVksUUFBQSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKirnvJbovpHlmajmlbDmja7nsbsgKi9cblxuLyoqXG4gKiDnvJbovpHlmajmlbDmja7vvIzmoLnmja7muLjmiI/oh6rlrprkuYnlhoXpg6jmlbDmja5cbiAqL1xuY2xhc3MgRWRpdG9yRGF0YSB7XG4gICAgLy8g5piv5ZCm5byA5ZCv5pif57qn6K+EXG4gICAgcHVibGljIGlzU3RhckNvdW50OiBib29sZWFuID0gdHJ1ZTtcbiAgICAvLyDmmK/lkKblvIDlkK/lho3njqnkuIDmrKFcbiAgICBwdWJsaWMgaXNSZXBsYXk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8vIOaYr+WQpuiHquWKqOaSreaUvumimOW5suivremfs1xuICAgIHB1YmxpYyBpc1BsYXlUaXRsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgLy8g5Y+v6YeN546p5qyh5pWwXG4gICAgcHVibGljIHJlcGxheUNvdW50OiBudW1iZXIgPSAxO1xuICAgIC8vIOWFs+WNoeaAu+aVsFxuICAgIHB1YmxpYyBsZXZlbENvdW50OiBudW1iZXIgPSAxO1xuICAgIC8vIOaAu+atpeaVsFxuICAgIHB1YmxpYyBzdGVwQ291bnQ6IG51bWJlciA9IDA7XG4gICAgLy8g6K++5Lu2562J57qnIDDvvJrlubzlsI8gIDHvvJrlsI/kvY4gIDLvvJrlsI/pq5hcbiAgICBwdWJsaWMgY291cnNld2FyZUxldmVsOiBudW1iZXIgPSAwO1xuXG4gICAgLy8g5paw5aKe5bGe5oCn77yM6ZmE5Yqg6aKY77yMYW555qC55o2u5a6e6ZmF5oOF5Ya16Ieq5a6a5LmJ77yM5L2G5piv5b+F6aG75Li65pWw57uE5bey5YWz5Y2h5b2i5byP5Ye6546wXG4gICAgcHVibGljIGFkZGl0aW9uYWw6IGFueVtdID0gW107XG5cbiAgICAvLyBUT0RPIOiHquWumuS5ieaVsOaNrlxuICAgIHB1YmxpYyBHYW1lRGF0YTogYW55ID0gbnVsbDtcblxuICAgIHB1YmxpYyBpc1BhblRpOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgaXNUaWFvVGk6IGJvb2xlYW4gPSB0cnVlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBPcHRpb25EYXRhIHtcbiAgICBwdWJsaWMgY291bnRWYWx1ZTEgPSBcIlwiO1xuICAgIHB1YmxpYyBjb3VudFZhbHVlMiA9IFwiXCI7XG4gICAgcHVibGljIHRpdGxlRGF0YSA9IFtdO1xuICAgIHB1YmxpYyB0aXRsZURhdGEyID0gW107XG59XG5cbmNsYXNzIEVkaXRvck1hbmFnZXJDbGFzcyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBFZGl0b3JNYW5hZ2VyQ2xhc3M7XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBFZGl0b3JNYW5hZ2VyQ2xhc3MoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqIOe8lui+keWZqOaVsOaNriAqL1xuICAgIHB1YmxpYyBlZGl0b3JEYXRhOiBFZGl0b3JEYXRhID0gbmV3IEVkaXRvckRhdGEoKTtcbiAgICBwcml2YXRlIF9oYXNSZXN1bHQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIC8qKlxuICAgICAqIOaYr+WQpuaUr+aMgemimOebrue8lui+kVxuICAgICAqL1xuICAgIHB1YmxpYyBpc1N1cHBvcnRFZGl0KCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuZWRpdG9yRGF0YSk7XG5cbiAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoID4gNztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5blhbPljaHmgLvmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TGV2ZWxDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdG9yRGF0YS5sZXZlbENvdW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9ruWFs+WNoeaAu+aVsFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRMZXZlbENvdW50KG51bTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yRGF0YS5sZXZlbENvdW50ID0gbnVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluaAu+atpeaVsFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTdGVwQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRvckRhdGEuc3RlcENvdW50IHx8IHRoaXMuZ2V0TGV2ZWxDb3VudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9ruaAu+atpeaVsFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRTdGVwQ291bnQobnVtOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5lZGl0b3JEYXRhLnN0ZXBDb3VudCA9IG51bTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bor77ku7bnrYnnuqdcbiAgICAgKiDpnIDopoHlkITkuKrmuLjmiI/moLnmja7lrp7pmYXmg4XlhrXorr7nva7mraPnoa7nmoTmlbDlgLxcbiAgICAgKiDor77ku7bnrYnnuqcgMO+8muW5vOWwjyAgMe+8muWwj+S9jiAgMu+8muWwj+mrmFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDb3Vyc2V3YXJlTGV2ZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRvckRhdGEuY291cnNld2FyZUxldmVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPlue8lui+keWZqOaVsOaNrlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXREYXRhKCk6IEVkaXRvckRhdGEge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGl0b3JEYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagueaNrue9kee7nOivt+axgue7k+aenOiuvue9rue8lui+keWZqOaVsOaNrlxuICAgICAqIEBwYXJhbSB7RWRpdG9yRGF0YX0gZGF0YVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXREYXRhKGRhdGE6IEVkaXRvckRhdGEpIHtcbiAgICAgICAgdGhpcy5lZGl0b3JEYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBkZXNjcmlwdGlvbjog6K6+572u5piv5ZCm5pyJ57uT566XXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlIOaYry/lkKYgdHJ1ZS9mYWxzZVxuICAgICogQHJldHVybiB7Kn1cbiAgICAqL1xuICAgIHB1YmxpYyBzZXQgaGFzUmVzdWx0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hhc1Jlc3VsdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbjog6I635Y+W5piv5ZCm5pyJ57uT566XXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGhhc1Jlc3VsdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc1Jlc3VsdDtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBFZGl0b3JNYW5hZ2VyID0gRWRpdG9yTWFuYWdlckNsYXNzLmdldEluc3RhbmNlKCk7XG4iXX0=