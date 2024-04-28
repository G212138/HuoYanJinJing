
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/UIHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c44e6cLg85JzaIFNvBdsH7x', 'UIHelp');
// frame/scripts/Utils/UIHelp.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIHelp = void 0;
var GamePanel_1 = require("../../../game/scripts/UI/panel/GamePanel");
var TeacherPanel_1 = require("../../../game/scripts/UI/panel/TeacherPanel");
var FrameMsgType_1 = require("../Data/FrameMsgType");
var ListenerManager_1 = require("../Manager/ListenerManager");
var SyncDataManager_1 = require("../Manager/SyncDataManager");
var UIManager_1 = require("../Manager/UIManager");
var AffirmTips_1 = require("../UI/Panel/AffirmTips");
var ErrorPanel_1 = require("../UI/Panel/ErrorPanel");
var OverTips_1 = require("../UI/Panel/OverTips");
var StarCount_1 = require("../UI/Panel/StarCount");
var SubmissionPanel_1 = require("../UI/Panel/SubmissionPanel");
var TipUI_1 = require("../UI/Panel/TipUI");
var UploadAndReturnPanel_1 = require("../UI/Panel/UploadAndReturnPanel");
var UIHelpClass = /** @class */ (function () {
    function UIHelpClass() {
    }
    UIHelpClass.getInstance = function () {
        if (!this._instance) {
            this._instance = new UIHelpClass();
        }
        return this._instance;
    };
    /**
     *
     * @param message tips文字内容
     */
    UIHelpClass.prototype.showTip = function (message) {
        var _this = this;
        var tipUI = UIManager_1.UIManager.getUI(TipUI_1.TipUI);
        if (!tipUI) {
            UIManager_1.UIManager.openUI(TipUI_1.TipUI, null, UIManager_1.EPANEL_ZORDER.TIPS, function () {
                _this.showTip(message);
            });
        }
        else {
            tipUI.showTip(message);
        }
    };
    /**
     * 结束tip
     * @param type tips类型   0: 错误  1：答对了  2：闯关成功(一直显示不会关闭)
     * @param {string} str           提示内容
     * @param {Function} callback    回调函数
     * @param {string} endTitle      end动效提示文字
     * @param {boolean} isShowReplay     是否显示重玩按钮
     * @param {boolean} isShowClose     是否显示关闭按钮
     * @param {boolean} autoOff     是否自动关闭
     */
    UIHelpClass.prototype.showOverTips = function (type, str, callback, endTitle, isShowReplay, isShowClose, autoOff) {
        var _this = this;
        if (str === void 0) { str = ''; }
        if (callback === void 0) { callback = null; }
        if (isShowClose === void 0) { isShowClose = false; }
        if (autoOff === void 0) { autoOff = true; }
        var overTips = UIManager_1.UIManager.getUI(OverTips_1.OverTips);
        if (!overTips) {
            UIManager_1.UIManager.openUI(OverTips_1.OverTips, null, UIManager_1.EPANEL_ZORDER.POPUP, function () {
                _this.showOverTips(type, str, callback, endTitle, isShowReplay, autoOff);
            });
        }
        else {
            overTips.init(type, str, callback, endTitle, isShowReplay, isShowClose, autoOff);
        }
    };
    UIHelpClass.prototype.closeOverTips = function () {
        UIManager_1.UIManager.closeUI(OverTips_1.OverTips);
    };
    /**
     * 星级评测页面(学生自己可GameData StudentData数据自动刷新，同步则需要传参)
     * @param isShowReplay 是否显示重玩按钮
     * @param starNum 星数 (不传参数则从ReportManager里取值)
     */
    UIHelpClass.prototype.showStarCount = function (isShowReplay, starNum) {
        var _this = this;
        var starCount = UIManager_1.UIManager.getUI(StarCount_1.default);
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answerTimes > 2) {
            starNum = 1;
        }
        else if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answerTimes > 0) {
            starNum = 2;
        }
        else {
            starNum = 3;
        }
        if (!starCount) {
            UIManager_1.UIManager.openUI(StarCount_1.default, null, UIManager_1.EPANEL_ZORDER.POPUP, function () {
                _this.showStarCount(isShowReplay, starNum);
            });
        }
        else {
            starCount.showStars(isShowReplay, starNum);
        }
    };
    UIHelpClass.prototype.closeStarCount = function () {
        UIManager_1.UIManager.closeUI(StarCount_1.default);
    };
    /**
     * 二次确认框
     * @param type tips类型  0:内容tips   1:系统tips
     * @param des tips文字内容
     * @param callback 按钮回调
     * @param btnCloselDes 关闭按钮文字描述
     * @param btnOkDes OK按钮文字描述
     */
    UIHelpClass.prototype.showAffirmTip = function (type, des, callback, btnCloselDes, btnOkDes) {
        var _this = this;
        var overTips = UIManager_1.UIManager.getUI(AffirmTips_1.AffirmTips);
        if (!overTips) {
            UIManager_1.UIManager.openUI(AffirmTips_1.AffirmTips, null, UIManager_1.EPANEL_ZORDER.POPUP, function () {
                _this.showAffirmTip(type, des, callback, btnCloselDes, btnOkDes);
            });
        }
        else {
            overTips.init(type, des, callback, btnCloselDes, btnOkDes);
        }
    };
    UIHelpClass.prototype.closeAffirmTip = function () {
        UIManager_1.UIManager.closeUI(AffirmTips_1.AffirmTips);
    };
    /**
     * 错误弹窗
     * @param shuoMing 错误说明
     * @param biaoTi 标题文字
     * @param tiShi 提示文字
     * @param btnLab 按钮文字
     * @param callBack 回调函数
     * @param isClose 是否可关闭
     */
    UIHelpClass.prototype.showErrorPanel = function (shuoMing, biaoTi, tiShi, btnLab, callBack, isClose) {
        var _this = this;
        if (isClose === void 0) { isClose = false; }
        var errorPanel = UIManager_1.UIManager.getUI(ErrorPanel_1.default);
        if (!errorPanel) {
            UIManager_1.UIManager.openUI(ErrorPanel_1.default, null, UIManager_1.EPANEL_ZORDER.ERROR, function () {
                _this.showErrorPanel(shuoMing, biaoTi, tiShi, btnLab, callBack, isClose);
            });
        }
        else {
            errorPanel.setPanel(shuoMing, biaoTi, tiShi, btnLab, callBack, isClose);
        }
    };
    UIHelpClass.prototype.closeErrorPanel = function () {
        UIManager_1.UIManager.closeUI(ErrorPanel_1.default);
    };
    /**
     * 提交、返回
     */
    UIHelpClass.prototype.showUploadAndReturnPanel = function () {
        UIManager_1.UIManager.showUI(UploadAndReturnPanel_1.default, null, UIManager_1.EPANEL_ZORDER.SUBMISSION);
    };
    UIHelpClass.prototype.closeUploadAndReturnPanel = function () {
        UIManager_1.UIManager.closeUI(UploadAndReturnPanel_1.default);
    };
    UIHelpClass.prototype.showSubmissionPanel = function () {
        UIManager_1.UIManager.showUI(SubmissionPanel_1.default, null, UIManager_1.EPANEL_ZORDER.SUBMISSION);
    };
    UIHelpClass.prototype.closeSubmissionPanel = function () {
        UIManager_1.UIManager.closeUI(SubmissionPanel_1.default);
    };
    UIHelpClass.prototype.showGamePanel = function (callback) {
        UIManager_1.UIManager.openUI(GamePanel_1.default, null, UIManager_1.EPANEL_ZORDER.NORMAL, callback);
    };
    UIHelpClass.prototype.closeGamePanel = function () {
        UIManager_1.UIManager.closeUI(GamePanel_1.default);
    };
    UIHelpClass.prototype.showTeacherPanel = function (callback) {
        UIManager_1.UIManager.openUI(TeacherPanel_1.default, null, UIManager_1.EPANEL_ZORDER.NORMAL, callback);
    };
    UIHelpClass.prototype.closeTeacherPanel = function () {
        UIManager_1.UIManager.closeUI(TeacherPanel_1.default);
    };
    /**
     * 显示遮罩
     * @param isShowLoading 是否显示Loading
     */
    UIHelpClass.prototype.showMask = function (isShowLoading) {
        if (isShowLoading === void 0) { isShowLoading = false; }
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_MASK, true, isShowLoading);
    };
    /**
     * 隐藏遮罩
     */
    UIHelpClass.prototype.closeMask = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_MASK, false);
    };
    /**
     * 显示数据恢复遮罩
     */
    UIHelpClass.prototype.showRecoverMask = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.MASK_RECOVER, true);
    };
    /**
     * 隐藏数据恢复遮罩
     */
    UIHelpClass.prototype.closeRecoverMask = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.MASK_RECOVER, false);
    };
    UIHelpClass._instance = null;
    return UIHelpClass;
}());
exports.UIHelp = UIHelpClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxVSUhlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQWlFO0FBQ2pFLDRFQUF1RTtBQUN2RSxxREFBb0Q7QUFDcEQsOERBQTZEO0FBQzdELDhEQUE2RDtBQUM3RCxrREFBZ0U7QUFDaEUscURBQW9EO0FBQ3BELHFEQUFnRDtBQUNoRCxpREFBZ0Q7QUFDaEQsbURBQThDO0FBQzlDLCtEQUEwRDtBQUMxRCwyQ0FBMEM7QUFDMUMseUVBQW9FO0FBRXBFO0lBQUE7SUFnTkEsQ0FBQztJQTdNaUIsdUJBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDZCQUFPLEdBQWQsVUFBZSxPQUFlO1FBQTlCLGlCQVNDO1FBUkcsSUFBSSxLQUFLLEdBQUcscUJBQVMsQ0FBQyxLQUFLLENBQUMsYUFBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLHFCQUFTLENBQUMsTUFBTSxDQUFDLGFBQUssRUFBRSxJQUFJLEVBQUUseUJBQWEsQ0FBQyxJQUFJLEVBQUU7Z0JBQzlDLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxrQ0FBWSxHQUFuQixVQUNJLElBQVksRUFDWixHQUFnQixFQUNoQixRQUF5QixFQUN6QixRQUFpQixFQUNqQixZQUFzQixFQUN0QixXQUE0QixFQUM1QixPQUF1QjtRQVAzQixpQkFp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UUFBQSxNQUFNLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVQYW5lbCBmcm9tICcuLi8uLi8uLi9nYW1lL3NjcmlwdHMvVUkvcGFuZWwvR2FtZVBhbmVsJztcclxuaW1wb3J0IFRlYWNoZXJQYW5lbCBmcm9tICcuLi8uLi8uLi9nYW1lL3NjcmlwdHMvVUkvcGFuZWwvVGVhY2hlclBhbmVsJztcclxuaW1wb3J0IHsgRnJhbWVNc2dUeXBlIH0gZnJvbSAnLi4vRGF0YS9GcmFtZU1zZ1R5cGUnO1xyXG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XHJcbmltcG9ydCB7IFN5bmNEYXRhTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyJztcclxuaW1wb3J0IHsgRVBBTkVMX1pPUkRFUiwgVUlNYW5hZ2VyIH0gZnJvbSAnLi4vTWFuYWdlci9VSU1hbmFnZXInO1xyXG5pbXBvcnQgeyBBZmZpcm1UaXBzIH0gZnJvbSAnLi4vVUkvUGFuZWwvQWZmaXJtVGlwcyc7XHJcbmltcG9ydCBFcnJvclBhbmVsIGZyb20gJy4uL1VJL1BhbmVsL0Vycm9yUGFuZWwnO1xyXG5pbXBvcnQgeyBPdmVyVGlwcyB9IGZyb20gJy4uL1VJL1BhbmVsL092ZXJUaXBzJztcclxuaW1wb3J0IFN0YXJDb3VudCBmcm9tICcuLi9VSS9QYW5lbC9TdGFyQ291bnQnO1xyXG5pbXBvcnQgU3VibWlzc2lvblBhbmVsIGZyb20gJy4uL1VJL1BhbmVsL1N1Ym1pc3Npb25QYW5lbCc7XHJcbmltcG9ydCB7IFRpcFVJIH0gZnJvbSAnLi4vVUkvUGFuZWwvVGlwVUknO1xyXG5pbXBvcnQgVXBsb2FkQW5kUmV0dXJuUGFuZWwgZnJvbSAnLi4vVUkvUGFuZWwvVXBsb2FkQW5kUmV0dXJuUGFuZWwnO1xyXG5cclxuY2xhc3MgVUlIZWxwQ2xhc3Mge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBVSUhlbHBDbGFzcyA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBVSUhlbHBDbGFzcyB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBVSUhlbHBDbGFzcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgdGlwc+aWh+Wtl+WGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1RpcChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdGlwVUkgPSBVSU1hbmFnZXIuZ2V0VUkoVGlwVUkpO1xyXG4gICAgICAgIGlmICghdGlwVUkpIHtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLm9wZW5VSShUaXBVSSwgbnVsbCwgRVBBTkVMX1pPUkRFUi5USVBTLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaXAobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRpcFVJLnNob3dUaXAobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uT5p2fdGlwXHJcbiAgICAgKiBAcGFyYW0gdHlwZSB0aXBz57G75Z6LICAgMDog6ZSZ6K+vICAx77ya562U5a+55LqGICAy77ya6Zev5YWz5oiQ5YqfKOS4gOebtOaYvuekuuS4jeS8muWFs+mXrSlcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgICAgICAgICAgIOaPkOekuuWGheWuuVxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgICAg5Zue6LCD5Ye95pWwXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW5kVGl0bGUgICAgICBlbmTliqjmlYjmj5DnpLrmloflrZdcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTaG93UmVwbGF5ICAgICDmmK/lkKbmmL7npLrph43njqnmjInpkq5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTaG93Q2xvc2UgICAgIOaYr+WQpuaYvuekuuWFs+mXreaMiemSrlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBhdXRvT2ZmICAgICDmmK/lkKboh6rliqjlhbPpl61cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dPdmVyVGlwcyhcclxuICAgICAgICB0eXBlOiBudW1iZXIsXHJcbiAgICAgICAgc3RyOiBzdHJpbmcgPSAnJyxcclxuICAgICAgICBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsLFxyXG4gICAgICAgIGVuZFRpdGxlPzogc3RyaW5nLFxyXG4gICAgICAgIGlzU2hvd1JlcGxheT86IGJvb2xlYW4sXHJcbiAgICAgICAgaXNTaG93Q2xvc2U6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBhdXRvT2ZmOiBib29sZWFuID0gdHJ1ZSxcclxuICAgICkge1xyXG4gICAgICAgIGxldCBvdmVyVGlwcyA9IFVJTWFuYWdlci5nZXRVSShPdmVyVGlwcyk7XHJcbiAgICAgICAgaWYgKCFvdmVyVGlwcykge1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIub3BlblVJKE92ZXJUaXBzLCBudWxsLCBFUEFORUxfWk9SREVSLlBPUFVQLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dPdmVyVGlwcyh0eXBlLCBzdHIsIGNhbGxiYWNrLCBlbmRUaXRsZSwgaXNTaG93UmVwbGF5LCBhdXRvT2ZmKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3ZlclRpcHMuaW5pdCh0eXBlLCBzdHIsIGNhbGxiYWNrLCBlbmRUaXRsZSwgaXNTaG93UmVwbGF5LCBpc1Nob3dDbG9zZSwgYXV0b09mZik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZU92ZXJUaXBzKCkge1xyXG4gICAgICAgIFVJTWFuYWdlci5jbG9zZVVJKE92ZXJUaXBzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYn+e6p+ivhOa1i+mhtemdoijlrabnlJ/oh6rlt7Hlj69HYW1lRGF0YSBTdHVkZW50RGF0YeaVsOaNruiHquWKqOWIt+aWsO+8jOWQjOatpeWImemcgOimgeS8oOWPgilcclxuICAgICAqIEBwYXJhbSBpc1Nob3dSZXBsYXkg5piv5ZCm5pi+56S66YeN546p5oyJ6ZKuXHJcbiAgICAgKiBAcGFyYW0gc3Rhck51bSDmmJ/mlbAgKOS4jeS8oOWPguaVsOWImeS7jlJlcG9ydE1hbmFnZXLph4zlj5blgLwpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93U3RhckNvdW50KGlzU2hvd1JlcGxheT86IGJvb2xlYW4sIHN0YXJOdW0/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3RhckNvdW50ID0gVUlNYW5hZ2VyLmdldFVJKFN0YXJDb3VudCk7XHJcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuc3dlclRpbWVzID4gMikgIHtcclxuICAgICAgICAgICAgc3Rhck51bSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbnN3ZXJUaW1lcyA+IDApIHtcclxuICAgICAgICAgICAgc3Rhck51bSA9IDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3Rhck51bSA9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3RhckNvdW50KSB7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5vcGVuVUkoU3RhckNvdW50LCBudWxsLCBFUEFORUxfWk9SREVSLlBPUFVQLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdGFyQ291bnQoaXNTaG93UmVwbGF5LCBzdGFyTnVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhckNvdW50LnNob3dTdGFycyhpc1Nob3dSZXBsYXksIHN0YXJOdW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VTdGFyQ291bnQoKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmNsb3NlVUkoU3RhckNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS6jOasoeehruiupOahhlxyXG4gICAgICogQHBhcmFtIHR5cGUgdGlwc+exu+WeiyAgMDrlhoXlrrl0aXBzICAgMTrns7vnu590aXBzXHJcbiAgICAgKiBAcGFyYW0gZGVzIHRpcHPmloflrZflhoXlrrlcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayDmjInpkq7lm57osINcclxuICAgICAqIEBwYXJhbSBidG5DbG9zZWxEZXMg5YWz6Zet5oyJ6ZKu5paH5a2X5o+P6L+wXHJcbiAgICAgKiBAcGFyYW0gYnRuT2tEZXMgT0vmjInpkq7mloflrZfmj4/ov7BcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dBZmZpcm1UaXAoXHJcbiAgICAgICAgdHlwZTogbnVtYmVyLFxyXG4gICAgICAgIGRlczogc3RyaW5nLFxyXG4gICAgICAgIGNhbGxiYWNrOiAodHlwZTogbnVtYmVyKSA9PiB2b2lkLFxyXG4gICAgICAgIGJ0bkNsb3NlbERlcz86IHN0cmluZyxcclxuICAgICAgICBidG5Pa0Rlcz86IHN0cmluZyxcclxuICAgICkge1xyXG4gICAgICAgIGxldCBvdmVyVGlwcyA9IFVJTWFuYWdlci5nZXRVSShBZmZpcm1UaXBzKTtcclxuICAgICAgICBpZiAoIW92ZXJUaXBzKSB7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5vcGVuVUkoQWZmaXJtVGlwcywgbnVsbCwgRVBBTkVMX1pPUkRFUi5QT1BVUCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93QWZmaXJtVGlwKHR5cGUsIGRlcywgY2FsbGJhY2ssIGJ0bkNsb3NlbERlcywgYnRuT2tEZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvdmVyVGlwcy5pbml0KHR5cGUsIGRlcywgY2FsbGJhY2ssIGJ0bkNsb3NlbERlcywgYnRuT2tEZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VBZmZpcm1UaXAoKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmNsb3NlVUkoQWZmaXJtVGlwcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDplJnor6/lvLnnqpdcclxuICAgICAqIEBwYXJhbSBzaHVvTWluZyDplJnor6/or7TmmI5cclxuICAgICAqIEBwYXJhbSBiaWFvVGkg5qCH6aKY5paH5a2XXHJcbiAgICAgKiBAcGFyYW0gdGlTaGkg5o+Q56S65paH5a2XXHJcbiAgICAgKiBAcGFyYW0gYnRuTGFiIOaMiemSruaWh+Wtl1xyXG4gICAgICogQHBhcmFtIGNhbGxCYWNrIOWbnuiwg+WHveaVsFxyXG4gICAgICogQHBhcmFtIGlzQ2xvc2Ug5piv5ZCm5Y+v5YWz6ZetXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93RXJyb3JQYW5lbChcclxuICAgICAgICBzaHVvTWluZzogc3RyaW5nLFxyXG4gICAgICAgIGJpYW9UaT86IHN0cmluZyxcclxuICAgICAgICB0aVNoaT86IHN0cmluZyxcclxuICAgICAgICBidG5MYWI/OiBzdHJpbmcsXHJcbiAgICAgICAgY2FsbEJhY2s/OiBGdW5jdGlvbixcclxuICAgICAgICBpc0Nsb3NlOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgZXJyb3JQYW5lbCA9IFVJTWFuYWdlci5nZXRVSShFcnJvclBhbmVsKTtcclxuICAgICAgICBpZiAoIWVycm9yUGFuZWwpIHtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLm9wZW5VSShFcnJvclBhbmVsLCBudWxsLCBFUEFORUxfWk9SREVSLkVSUk9SLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvclBhbmVsKHNodW9NaW5nLCBiaWFvVGksIHRpU2hpLCBidG5MYWIsIGNhbGxCYWNrLCBpc0Nsb3NlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXJyb3JQYW5lbC5zZXRQYW5lbChzaHVvTWluZywgYmlhb1RpLCB0aVNoaSwgYnRuTGFiLCBjYWxsQmFjaywgaXNDbG9zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZUVycm9yUGFuZWwoKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmNsb3NlVUkoRXJyb3JQYW5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmj5DkuqTjgIHov5Tlm55cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dVcGxvYWRBbmRSZXR1cm5QYW5lbCgpIHtcclxuICAgICAgICBVSU1hbmFnZXIuc2hvd1VJKFVwbG9hZEFuZFJldHVyblBhbmVsLCBudWxsLCBFUEFORUxfWk9SREVSLlNVQk1JU1NJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZVVwbG9hZEFuZFJldHVyblBhbmVsKCkge1xyXG4gICAgICAgIFVJTWFuYWdlci5jbG9zZVVJKFVwbG9hZEFuZFJldHVyblBhbmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1N1Ym1pc3Npb25QYW5lbCgpIHtcclxuICAgICAgICBVSU1hbmFnZXIuc2hvd1VJKFN1Ym1pc3Npb25QYW5lbCwgbnVsbCwgRVBBTkVMX1pPUkRFUi5TVUJNSVNTSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VTdWJtaXNzaW9uUGFuZWwoKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmNsb3NlVUkoU3VibWlzc2lvblBhbmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0dhbWVQYW5lbChjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLm9wZW5VSShHYW1lUGFuZWwsIG51bGwsIEVQQU5FTF9aT1JERVIuTk9STUFMLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlR2FtZVBhbmVsKCkge1xyXG4gICAgICAgIFVJTWFuYWdlci5jbG9zZVVJKEdhbWVQYW5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dUZWFjaGVyUGFuZWwoY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIFVJTWFuYWdlci5vcGVuVUkoVGVhY2hlclBhbmVsLCBudWxsLCBFUEFORUxfWk9SREVSLk5PUk1BTCwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZVRlYWNoZXJQYW5lbCgpIHtcclxuICAgICAgICBVSU1hbmFnZXIuY2xvc2VVSShUZWFjaGVyUGFuZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S66YGu572pXHJcbiAgICAgKiBAcGFyYW0gaXNTaG93TG9hZGluZyDmmK/lkKbmmL7npLpMb2FkaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93TWFzayhpc1Nob3dMb2FkaW5nOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLk9OX01BU0ssIHRydWUsIGlzU2hvd0xvYWRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP6YGu572pXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbG9zZU1hc2soKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5PTl9NQVNLLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrmlbDmja7mgaLlpI3pga7nvalcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dSZWNvdmVyTWFzaygpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLk1BU0tfUkVDT1ZFUiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/mlbDmja7mgaLlpI3pga7nvalcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsb3NlUmVjb3Zlck1hc2soKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5NQVNLX1JFQ09WRVIsIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgVUlIZWxwID0gVUlIZWxwQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcclxuIl19