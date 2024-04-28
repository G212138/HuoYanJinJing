
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1694s8BidGvaCpzhIeiAbf', 'BaseGamePanel');
// frame/scripts/UI/Panel/BaseGamePanel.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConstValue_1 = require("../../../../game/scripts/Data/ConstValue");
var EditorManager_1 = require("../../../../game/scripts/Manager/EditorManager");
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var NetWork_1 = require("../../Http/NetWork");
var ListenerManager_1 = require("../../Manager/ListenerManager");
var ReportManager_1 = require("../../Manager/ReportManager");
var SoundManager_1 = require("../../Manager/SoundManager");
var SyncDataManager_1 = require("../../Manager/SyncDataManager");
var UIManager_1 = require("../../Manager/UIManager");
var GameMsg_1 = require("../../SDK/GameMsg");
var T2M_1 = require("../../SDK/T2M");
var UIHelp_1 = require("../../Utils/UIHelp");
var BaseUI_1 = require("../BaseUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseGamePanel = /** @class */ (function (_super) {
    __extends(BaseGamePanel, _super);
    function BaseGamePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isPanelReady = false;
        _this.isRresult = true;
        return _this;
    }
    // onLoad () {}
    BaseGamePanel.prototype.start = function () {
        var loading = document.getElementById('loading-full');
        if (loading) {
            loading.style.display = 'none';
        }
        if (this.data && this.data.node && this.data.node.parent) {
            this.data.node.removeFromParent();
        }
        // 发送GameStart
        GameMsg_1.default.gameStart(this.isRresult);
        EditorManager_1.EditorManager.hasResult = this.isRresult;
        this.addSDKEventListener();
        if (NetWork_1.NetWork.isSync && !NetWork_1.NetWork.isMaster) {
            UIHelp_1.UIHelp.showRecoverMask();
        }
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.TEACHER_PANEL_LOADING, false);
        if (ConstValue_1.ConstValue.IS_TEACHER) {
            this.panelReady();
            UIHelp_1.UIHelp.showUploadAndReturnPanel();
        }
        else {
            this.getNet();
        }
    };
    BaseGamePanel.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        UIHelp_1.UIHelp.closeMask();
    };
    BaseGamePanel.prototype.panelReady = function () {
        this._isPanelReady = true;
        if (UIManager_1.UIManager.isGameShowing) {
            this.setPanel();
        }
        else {
            cc.game.pause();
        }
    };
    BaseGamePanel.prototype.setPanel = function () {
        T2M_1.T2M.init();
        SyncDataManager_1.SyncDataManager.initSyncData();
        ReportManager_1.ReportManager.initReportData(EditorManager_1.EditorManager.getLevelCount());
        if (!NetWork_1.NetWork.isSync || NetWork_1.NetWork.isMaster) {
            UIHelp_1.UIHelp.closeRecoverMask();
        }
        if (EditorManager_1.EditorManager.editorData.isStarCount) {
            cc.resources.load('prefab/ui/panel/OverTips');
        }
        else {
            cc.resources.load('prefab/ui/panel/StarCount');
        }
    };
    BaseGamePanel.prototype.onRecoveryData = function (recovery) {
        SyncDataManager_1.SyncDataManager.setSyncData(recovery);
        if (SyncDataManager_1.SyncDataManager.syncData.frameSyncData.showGameOver) {
            this.showGameOverPanel();
        }
        else {
            UIHelp_1.UIHelp.closeOverTips();
            UIHelp_1.UIHelp.closeStarCount();
        }
    };
    BaseGamePanel.prototype.answerRight = function (isCurLevelFinish) {
        ReportManager_1.ReportManager.reportLevelResult(true, isCurLevelFinish);
    };
    BaseGamePanel.prototype.answerWrong = function (isCurLevelFinish) {
        if (isCurLevelFinish === void 0) { isCurLevelFinish = false; }
        ReportManager_1.ReportManager.reportLevelResult(false, isCurLevelFinish);
    };
    BaseGamePanel.prototype.gameOver = function () {
        SyncDataManager_1.SyncDataManager.syncData.frameSyncData.showGameOver = true;
        this.showGameOverPanel();
    };
    BaseGamePanel.prototype.showGameOverPanel = function () {
        UIHelp_1.UIHelp.showMask();
        SoundManager_1.SoundManager.stopAll();
        console.log("====SyncDataManager.syncData.frameSyncData.hasReplayCount", SyncDataManager_1.SyncDataManager.syncData.frameSyncData.hasReplayCount);
        var isShowReplay = EditorManager_1.EditorManager.editorData.isReplay &&
            SyncDataManager_1.SyncDataManager.syncData.frameSyncData.hasReplayCount < EditorManager_1.EditorManager.editorData.replayCount;
        if (ReportManager_1.ReportManager.isPassGame() && ReportManager_1.ReportManager.isPassAdditonal()) {
            SyncDataManager_1.SyncDataManager.syncData.frameSyncData.isGameOver = true; // 游戏是否结束
        }
        if (EditorManager_1.EditorManager.editorData.isStarCount) {
            UIHelp_1.UIHelp.showStarCount(isShowReplay);
        }
        else {
            var str = 1 === EditorManager_1.EditorManager.getLevelCount() ? '挑战成功' : '闯关成功';
            UIHelp_1.UIHelp.showOverTips(2, '', null, str, isShowReplay);
        }
    };
    BaseGamePanel.prototype.onGameShow = function () {
        if (this._isPanelReady) {
            cc.game.resume();
            this.setPanel();
        }
    };
    BaseGamePanel.prototype.onReplay = function () {
        UIHelp_1.UIHelp.closeOverTips();
        UIHelp_1.UIHelp.closeStarCount();
        SyncDataManager_1.SyncDataManager.replay();
        ReportManager_1.ReportManager.replayGame();
    };
    /**
     * 附加题
     */
    BaseGamePanel.prototype.onEnterAdditional = function () {
        UIHelp_1.UIHelp.closeOverTips();
        UIHelp_1.UIHelp.closeStarCount();
    };
    BaseGamePanel.prototype.addSDKEventListener = function () {
        // 小组课
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOP, this.onSDKMsgStopReceived.bind(this));
        // 小班课
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.ON_RECOVERY_DATA, this.onRecoveryData, this);
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.REPLAY_START, this.onReplay.bind(this));
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.ENTER_ADDITION, this.onEnterAdditional.bind(this));
        // 预加载：监听窗口打开
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.PRELOAD_GAME_SHOW, this.onGameShow.bind(this), this);
    };
    BaseGamePanel.prototype.getNet = function () {
        var _this = this;
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.GET_QUESTION + '?courseware_id=' + NetWork_1.NetWork.coursewareId, 'GET', 'application/json;charset=utf-8', function (err, response) {
            if (!err) {
                var response_data = response;
                if (Array.isArray(response_data.data)) {
                    return;
                }
                var content = JSON.parse(response_data.data.courseware_content);
                if (content != null) {
                    if (content.CoursewareKey == ConstValue_1.ConstValue.CoursewareKey) {
                        EditorManager_1.EditorManager.setData(content.data);
                        _this.panelReady();
                    }
                    else {
                        // coursewareKey错误
                        GameMsg_1.default.differntKey('CoursewareKey错误！');
                        UIHelp_1.UIHelp.showErrorPanel('CoursewareKey错误,请联系客服！', '', '', '确定');
                        return;
                    }
                }
            }
            else {
            }
        }, null);
    };
    // 游戏结束消息监听
    BaseGamePanel.prototype.onSDKMsgStopReceived = function () {
        //各游戏独立处理  先上报当前作答数据  后发送finish消息
        GameMsg_1.default.gameStop();
        //新课堂上报
        ReportManager_1.ReportManager.reportGameOver();
        GameMsg_1.default.finished();
    };
    BaseGamePanel.prototype.update = function (dt) {
        T2M_1.T2M.update();
    };
    BaseGamePanel.className = 'BaseGamePanel';
    __decorate([
        property
    ], BaseGamePanel.prototype, "isRresult", void 0);
    BaseGamePanel = __decorate([
        ccclass
    ], BaseGamePanel);
    return BaseGamePanel;
}(BaseUI_1.BaseUI));
exports.default = BaseGamePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcQmFzZUdhbWVQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBc0U7QUFDdEUsZ0ZBQStFO0FBQy9FLHdEQUF1RDtBQUN2RCw4Q0FBNkM7QUFDN0MsaUVBQWdFO0FBQ2hFLDZEQUE0RDtBQUM1RCwyREFBMEQ7QUFDMUQsaUVBQTBFO0FBQzFFLHFEQUFvRDtBQUNwRCw2Q0FBd0M7QUFDeEMscUNBQW9DO0FBQ3BDLDZDQUE0QztBQUM1QyxvQ0FBbUM7QUFFN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQU07SUFBakQ7UUFBQSxxRUEyTEM7UUF6TFcsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFHaEMsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUFzTHJDLENBQUM7SUFwTEcsZUFBZTtJQUVmLDZCQUFLLEdBQUw7UUFDSSxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RELElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3JDO1FBRUQsY0FBYztRQUNkLGlCQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyw2QkFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FB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QUFDLENBQUM7Z0JBQ2hFLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtvQkFDakIsSUFBSSxPQUFPLENBQUMsYUFBYSxJQUFJLHVCQUFVLENBQUMsYUFBYSxFQUFFO3dCQUNuRCw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BDLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztxQkFDckI7eUJBQU07d0JBQ0gsa0JBQWtCO3dCQUNsQixpQkFBTyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3dCQUN4QyxlQUFNLENBQUMsY0FBYyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzlELE9BQU87cUJBQ1Y7aUJBQ0o7YUFDSjtpQkFBTTthQUNOO1FBQ0wsQ0FBQyxFQUNELElBQUksQ0FDUCxDQUFDO0lBQ04sQ0FBQztJQUVELFdBQVc7SUFDSCw0Q0FBb0IsR0FBNUI7UUFDSSxpQ0FBaUM7UUFDakMsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQixPQUFPO1FBQ1AsNkJBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvQixpQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLFNBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBekxhLHVCQUFTLEdBQUcsZUFBZSxDQUFDO0lBSTFDO1FBREMsUUFBUTtvREFDd0I7SUFMaEIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTJMakM7SUFBRCxvQkFBQztDQTNMRCxBQTJMQyxDQTNMMEMsZUFBTSxHQTJMaEQ7a0JBM0xvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RWYWx1ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9EYXRhL0NvbnN0VmFsdWUnO1xyXG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XHJcbmltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRnJhbWVNc2dUeXBlJztcclxuaW1wb3J0IHsgTmV0V29yayB9IGZyb20gJy4uLy4uL0h0dHAvTmV0V29yayc7XHJcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcclxuaW1wb3J0IHsgUmVwb3J0TWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvUmVwb3J0TWFuYWdlcic7XHJcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvU291bmRNYW5hZ2VyJztcclxuaW1wb3J0IHsgU3luY0RhdGEsIFN5bmNEYXRhTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyJztcclxuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9VSU1hbmFnZXInO1xyXG5pbXBvcnQgR2FtZU1zZyBmcm9tICcuLi8uLi9TREsvR2FtZU1zZyc7XHJcbmltcG9ydCB7IFQyTSB9IGZyb20gJy4uLy4uL1NESy9UMk0nO1xyXG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xyXG5pbXBvcnQgeyBCYXNlVUkgfSBmcm9tICcuLi9CYXNlVUknO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VHYW1lUGFuZWwgZXh0ZW5kcyBCYXNlVUkge1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnQmFzZUdhbWVQYW5lbCc7XHJcbiAgICBwcml2YXRlIF9pc1BhbmVsUmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHB1YmxpYyBpc1JyZXN1bHQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGxldCBsb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRpbmctZnVsbCcpO1xyXG4gICAgICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubm9kZSAmJiB0aGlzLmRhdGEubm9kZS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Y+R6YCBR2FtZVN0YXJ0XHJcbiAgICAgICAgR2FtZU1zZy5nYW1lU3RhcnQodGhpcy5pc1JyZXN1bHQpO1xyXG4gICAgICAgIEVkaXRvck1hbmFnZXIuaGFzUmVzdWx0ID0gdGhpcy5pc1JyZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5hZGRTREtFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgaWYgKE5ldFdvcmsuaXNTeW5jICYmICFOZXRXb3JrLmlzTWFzdGVyKSB7XHJcbiAgICAgICAgICAgIFVJSGVscC5zaG93UmVjb3Zlck1hc2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5URUFDSEVSX1BBTkVMX0xPQURJTkcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgaWYgKENvbnN0VmFsdWUuSVNfVEVBQ0hFUikge1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsUmVhZHkoKTtcclxuICAgICAgICAgICAgVUlIZWxwLnNob3dVcGxvYWRBbmRSZXR1cm5QYW5lbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TmV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcclxuICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYW5lbFJlYWR5KCkge1xyXG4gICAgICAgIHRoaXMuX2lzUGFuZWxSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgaWYgKFVJTWFuYWdlci5pc0dhbWVTaG93aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGFuZWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5nYW1lLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXRQYW5lbCgpIHtcclxuICAgICAgICBUMk0uaW5pdCgpO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5pbml0U3luY0RhdGEoKTtcclxuICAgICAgICBSZXBvcnRNYW5hZ2VyLmluaXRSZXBvcnREYXRhKEVkaXRvck1hbmFnZXIuZ2V0TGV2ZWxDb3VudCgpKTtcclxuICAgICAgICBpZiAoIU5ldFdvcmsuaXNTeW5jIHx8IE5ldFdvcmsuaXNNYXN0ZXIpIHtcclxuICAgICAgICAgICAgVUlIZWxwLmNsb3NlUmVjb3Zlck1hc2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNTdGFyQ291bnQpIHtcclxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoJ3ByZWZhYi91aS9wYW5lbC9PdmVyVGlwcycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKCdwcmVmYWIvdWkvcGFuZWwvU3RhckNvdW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvblJlY292ZXJ5RGF0YShyZWNvdmVyeTogU3luY0RhdGEpIHtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuc2V0U3luY0RhdGEocmVjb3ZlcnkpO1xyXG4gICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuc3luY0RhdGEuZnJhbWVTeW5jRGF0YS5zaG93R2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93R2FtZU92ZXJQYW5lbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFVJSGVscC5jbG9zZU92ZXJUaXBzKCk7XHJcbiAgICAgICAgICAgIFVJSGVscC5jbG9zZVN0YXJDb3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYW5zd2VyUmlnaHQoaXNDdXJMZXZlbEZpbmlzaDogYm9vbGVhbikge1xyXG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwb3J0TGV2ZWxSZXN1bHQodHJ1ZSwgaXNDdXJMZXZlbEZpbmlzaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFuc3dlcldyb25nKGlzQ3VyTGV2ZWxGaW5pc2g6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwb3J0TGV2ZWxSZXN1bHQoZmFsc2UsIGlzQ3VyTGV2ZWxGaW5pc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnYW1lT3ZlcigpIHtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuc3luY0RhdGEuZnJhbWVTeW5jRGF0YS5zaG93R2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hvd0dhbWVPdmVyUGFuZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2hvd0dhbWVPdmVyUGFuZWwoKSB7XHJcbiAgICAgICAgVUlIZWxwLnNob3dNYXNrKCk7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BBbGwoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09U3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuaGFzUmVwbGF5Q291bnRcIiwgU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuaGFzUmVwbGF5Q291bnQpO1xyXG5cclxuICAgICAgICBsZXQgaXNTaG93UmVwbGF5OiBib29sZWFuID1cclxuICAgICAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzUmVwbGF5ICYmXHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5zeW5jRGF0YS5mcmFtZVN5bmNEYXRhLmhhc1JlcGxheUNvdW50IDwgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLnJlcGxheUNvdW50O1xyXG4gICAgICAgIGlmIChSZXBvcnRNYW5hZ2VyLmlzUGFzc0dhbWUoKSAmJiBSZXBvcnRNYW5hZ2VyLmlzUGFzc0FkZGl0b25hbCgpKSB7XHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5zeW5jRGF0YS5mcmFtZVN5bmNEYXRhLmlzR2FtZU92ZXIgPSB0cnVlOyAvLyDmuLjmiI/mmK/lkKbnu5PmnZ9cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1N0YXJDb3VudCkge1xyXG4gICAgICAgICAgICBVSUhlbHAuc2hvd1N0YXJDb3VudChpc1Nob3dSZXBsYXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBzdHIgPSAxID09PSBFZGl0b3JNYW5hZ2VyLmdldExldmVsQ291bnQoKSA/ICfmjJHmiJjmiJDlip8nIDogJ+mXr+WFs+aIkOWKnyc7XHJcbiAgICAgICAgICAgIFVJSGVscC5zaG93T3ZlclRpcHMoMiwgJycsIG51bGwsIHN0ciwgaXNTaG93UmVwbGF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkdhbWVTaG93KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1BhbmVsUmVhZHkpIHtcclxuICAgICAgICAgICAgY2MuZ2FtZS5yZXN1bWUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRQYW5lbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25SZXBsYXkoKSB7XHJcbiAgICAgICAgVUlIZWxwLmNsb3NlT3ZlclRpcHMoKTtcclxuICAgICAgICBVSUhlbHAuY2xvc2VTdGFyQ291bnQoKTtcclxuXHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLnJlcGxheSgpO1xyXG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwbGF5R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZmE5Yqg6aKYXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvbkVudGVyQWRkaXRpb25hbCgpIHtcclxuICAgICAgICBVSUhlbHAuY2xvc2VPdmVyVGlwcygpO1xyXG4gICAgICAgIFVJSGVscC5jbG9zZVN0YXJDb3VudCgpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcHJpdmF0ZSBhZGRTREtFdmVudExpc3RlbmVyKCkge1xyXG4gICAgICAgIC8vIOWwj+e7hOivvlxyXG4gICAgICAgIEdhbWVNc2cuYWRkRXZlbnQoRnJhbWVNc2dUeXBlLlNUT1AsIHRoaXMub25TREtNc2dTdG9wUmVjZWl2ZWQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8g5bCP54+t6K++XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEZyYW1lTXNnVHlwZS5PTl9SRUNPVkVSWV9EQVRBLCB0aGlzLm9uUmVjb3ZlcnlEYXRhLCB0aGlzKTtcclxuXHJcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKEZyYW1lTXNnVHlwZS5SRVBMQVlfU1RBUlQsIHRoaXMub25SZXBsYXkuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcihGcmFtZU1zZ1R5cGUuRU5URVJfQURESVRJT04sIHRoaXMub25FbnRlckFkZGl0aW9uYWwuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIOmihOWKoOi9ve+8muebkeWQrOeql+WPo+aJk+W8gFxyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihGcmFtZU1zZ1R5cGUuUFJFTE9BRF9HQU1FX1NIT1csIHRoaXMub25HYW1lU2hvdy5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5ldCgpIHtcclxuICAgICAgICBOZXRXb3JrLmh0dHBSZXF1ZXN0KFxyXG4gICAgICAgICAgICBOZXRXb3JrLkdFVF9RVUVTVElPTiArICc/Y291cnNld2FyZV9pZD0nICsgTmV0V29yay5jb3Vyc2V3YXJlSWQsXHJcbiAgICAgICAgICAgICdHRVQnLFxyXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04JyxcclxuICAgICAgICAgICAgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlX2RhdGEgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNwb25zZV9kYXRhLmRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBKU09OLnBhcnNlKHJlc3BvbnNlX2RhdGEuZGF0YS5jb3Vyc2V3YXJlX2NvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQuQ291cnNld2FyZUtleSA9PSBDb25zdFZhbHVlLkNvdXJzZXdhcmVLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRvck1hbmFnZXIuc2V0RGF0YShjb250ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbFJlYWR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb3Vyc2V3YXJlS2V56ZSZ6K+vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lTXNnLmRpZmZlcm50S2V5KCdDb3Vyc2V3YXJlS2V56ZSZ6K+v77yBJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVSUhlbHAuc2hvd0Vycm9yUGFuZWwoJ0NvdXJzZXdhcmVLZXnplJnor68s6K+36IGU57O75a6i5pyN77yBJywgJycsICcnLCAn56Gu5a6aJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5ri45oiP57uT5p2f5raI5oGv55uR5ZCsXHJcbiAgICBwcml2YXRlIG9uU0RLTXNnU3RvcFJlY2VpdmVkKCkge1xyXG4gICAgICAgIC8v5ZCE5ri45oiP54us56uL5aSE55CGICDlhYjkuIrmiqXlvZPliY3kvZznrZTmlbDmja4gIOWQjuWPkemAgWZpbmlzaOa2iOaBr1xyXG4gICAgICAgIEdhbWVNc2cuZ2FtZVN0b3AoKTtcclxuICAgICAgICAvL+aWsOivvuWgguS4iuaKpVxyXG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwb3J0R2FtZU92ZXIoKTtcclxuICAgICAgICBHYW1lTXNnLmZpbmlzaGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgVDJNLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==