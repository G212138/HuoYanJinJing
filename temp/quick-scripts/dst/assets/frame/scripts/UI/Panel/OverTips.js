
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd402btyepNJObcDSUkLUQcr', 'OverTips');
// frame/scripts/UI/Panel/OverTips.ts

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
exports.OverTips = exports.Type_Tile = void 0;
var SoundManager_1 = require("./../../Manager/SoundManager");
var Tools_1 = require("../../Utils/Tools");
var BaseFrameUI_1 = require("../BaseFrameUI");
var UIHelp_1 = require("../../Utils/UIHelp");
var T2M_1 = require("../../SDK/T2M");
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var EditorManager_1 = require("../../../../game/scripts/Manager/EditorManager");
var ReportManager_1 = require("../../Manager/ReportManager");
var Type_Tile;
(function (Type_Tile) {
    Type_Tile[Type_Tile["ZuoDaJieShu"] = 0] = "ZuoDaJieShu";
    Type_Tile[Type_Tile["ChuangGuanChengGong"] = 1] = "ChuangGuanChengGong";
    Type_Tile[Type_Tile["TiaoZhanJieShu"] = 2] = "TiaoZhanJieShu";
    Type_Tile[Type_Tile["TiaoZhanChengGong"] = 3] = "TiaoZhanChengGong";
    Type_Tile[Type_Tile["ChuangGuanJieShu"] = 4] = "ChuangGuanJieShu";
})(Type_Tile = exports.Type_Tile || (exports.Type_Tile = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OverTips = /** @class */ (function (_super) {
    __extends(OverTips, _super);
    function OverTips() {
        var _this = _super.call(this) || this;
        _this.btn_additional = null;
        _this._lb_tips = null;
        _this._sp_complete = null;
        _this._btn_close = null;
        _this._btn_replay = null;
        _this.callback = null;
        return _this;
    }
    OverTips.prototype.onLoad = function () {
    };
    OverTips.prototype.start = function () {
        this._btn_close.on(cc.Node.EventType.TOUCH_END, this.onClickClose, this);
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.OVERTIPS_CLOSE, this.doClickClose.bind(this));
    };
    OverTips.prototype.onDisable = function () {
        this._btn_close.off(cc.Node.EventType.TOUCH_END, this.onClickClose, this);
    };
    /**
     设置显示内容
     @param {number} type          0: 错误  1：答对了  2：闯关成功(一直显示不会关闭)
     @param {string} str           提示内容
     @param {Function} callback    回调函数
     @param {string} endTitle      end动效提示文字
     @param {boolean} isShowReplay     是否显示重玩按钮
     @param {boolean} isShowClose     是否显示关闭按钮
     @param {boolean} autoOff     是否自动关闭
     */
    OverTips.prototype.init = function (type, str, callback, endTitle, isShowReplay, isShowClose, autoOff) {
        var _this = this;
        if (str === void 0) { str = ''; }
        if (isShowClose === void 0) { isShowClose = false; }
        if (autoOff === void 0) { autoOff = true; }
        this.callback = callback;
        this._sp_complete.active = true;
        this._lb_tips.active = type != 2;
        this._lb_tips.getComponent(cc.Label).string = str;
        this._btn_close.active = isShowClose && (0 === type || 1 === type);
        var btnNode = null;
        if (EditorManager_1.EditorManager.editorData.additional.length > 0 && ReportManager_1.ReportManager.isPassGame() && !ReportManager_1.ReportManager.isPassAdditonal()) {
            this.btn_additional.active = true;
            this.btn_additional.setScale(0.01);
            btnNode = this.btn_additional;
        }
        else if (ReportManager_1.ReportManager.isPassGame() && ReportManager_1.ReportManager.isPassAdditonal()) {
            this._btn_replay.active = isShowReplay;
            this._btn_replay.setScale(0.01);
            btnNode = this._btn_replay;
        }
        SoundManager_1.SoundManager.playEffect("settle_star0", false);
        Tools_1.Tools.playSpine(this._sp_complete.getComponent(sp.Skeleton), 'tiaozhan_kaishi', false, function () {
            if (btnNode && btnNode.active) {
                cc.tween(btnNode)
                    .to(0.5, { scale: 1 }, { easing: 'backOut' })
                    .start();
            }
            Tools_1.Tools.playSpine(_this._sp_complete.getComponent(sp.Skeleton), 'tiaozhan_xunhuan', true);
        });
        this.playTipsAction();
        UIHelp_1.UIHelp.closeMask();
    };
    OverTips.prototype.delayClose = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.doClickClose();
        }, 0);
    };
    OverTips.prototype.playTipsAction = function () {
        if (this._lb_tips.active) {
            var endPos = cc.v2(this._lb_tips.position.x, this._lb_tips.position.y);
            var framePos_1 = cc.v2(endPos.x, endPos.y - 72.8);
            var framePos_2 = cc.v2(endPos.x, endPos.y + 12);
            var framePos_3 = cc.v2(endPos.x, endPos.y - 8);
            var framePos_4 = cc.v2(endPos.x, endPos.y + 7.3);
            this._lb_tips.position = cc.v3(framePos_1.x, framePos_1.y);
            cc.tween(this._lb_tips)
                .to(0.08, { x: framePos_2.x, y: framePos_2.y })
                .to(0.08, { x: framePos_3.x, y: framePos_3.y })
                .to(0.08, { x: framePos_4.x, y: framePos_4.y })
                .to(0.06, { x: endPos.x, y: endPos.y })
                .start();
        }
    };
    OverTips.prototype.onClickClose = function (event, customEventData) {
        T2M_1.T2M.dispatch(FrameMsgType_1.FrameMsgType.OVERTIPS_CLOSE, null);
    };
    OverTips.prototype.doClickClose = function () {
        if (this.callback)
            this.callback();
        UIHelp_1.UIHelp.closeOverTips();
    };
    OverTips.className = 'OverTips';
    __decorate([
        property(cc.Node)
    ], OverTips.prototype, "btn_additional", void 0);
    OverTips = __decorate([
        ccclass
    ], OverTips);
    return OverTips;
}(BaseFrameUI_1.default));
exports.OverTips = OverTips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcT3ZlclRpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE0RDtBQUM1RCwyQ0FBMEM7QUFDMUMsOENBQXlDO0FBQ3pDLDZDQUE0QztBQUU1QyxxQ0FBb0M7QUFDcEMsd0RBQXVEO0FBRXZELGdGQUErRTtBQUMvRSw2REFBNEQ7QUFFNUQsSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ2pCLHVEQUFXLENBQUE7SUFDWCx1RUFBbUIsQ0FBQTtJQUNuQiw2REFBYyxDQUFBO0lBQ2QsbUVBQWlCLENBQUE7SUFDakIsaUVBQWdCLENBQUE7QUFDcEIsQ0FBQyxFQU5XLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBTXBCO0FBRUssSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBOEIsNEJBQVc7SUFhckM7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUFYTyxvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBRyxJQUFJLENBQUM7O0lBSXhCLENBQUM7SUFFRCx5QkFBTSxHQUFOO0lBQ0EsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV6RSxTQUFHLENBQUMsb0JBQW9CLENBQUMsMkJBQVksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFlB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QyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDbEQsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDaEQsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7aUJBQ2xCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDO2lCQUM5QyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztpQkFDOUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUM7aUJBQzlDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO2lCQUN0QyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFFRCwrQkFBWSxHQUFaLFVBQWEsS0FBTSxFQUFFLGVBQWdCO1FBQ2pDLFNBQUcsQ0FBQyxRQUFRLENBQUMsMkJBQVksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25DLGVBQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBOUdhLGtCQUFTLEdBQUcsVUFBVSxDQUFDO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ3FCO0lBSjlCLFFBQVE7UUFEcEIsT0FBTztPQUNLLFFBQVEsQ0FnSHBCO0lBQUQsZUFBQztDQWhIRCxBQWdIQyxDQWhINkIscUJBQVcsR0FnSHhDO0FBaEhZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi8uLi8uLi9NYW5hZ2VyL1NvdW5kTWFuYWdlcic7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSAnLi4vLi4vVXRpbHMvVG9vbHMnO1xyXG5pbXBvcnQgQmFzZUZyYW1lVUkgZnJvbSAnLi4vQmFzZUZyYW1lVUknO1xyXG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xyXG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL1VJTWFuYWdlcic7XHJcbmltcG9ydCB7IFQyTSB9IGZyb20gJy4uLy4uL1NESy9UMk0nO1xyXG5pbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi8uLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XHJcbmltcG9ydCB7IENvbnN0VmFsdWUgfSBmcm9tICcuLi8uLi8uLi8uLi9nYW1lL3NjcmlwdHMvRGF0YS9Db25zdFZhbHVlJztcclxuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9NYW5hZ2VyL0VkaXRvck1hbmFnZXInO1xyXG5pbXBvcnQgeyBSZXBvcnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9SZXBvcnRNYW5hZ2VyJztcclxuXHJcbmV4cG9ydCBlbnVtIFR5cGVfVGlsZSB7XHJcbiAgICBadW9EYUppZVNodSxcclxuICAgIENodWFuZ0d1YW5DaGVuZ0dvbmcsXHJcbiAgICBUaWFvWmhhbkppZVNodSxcclxuICAgIFRpYW9aaGFuQ2hlbmdHb25nLFxyXG4gICAgQ2h1YW5nR3VhbkppZVNodSxcclxufVxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIE92ZXJUaXBzIGV4dGVuZHMgQmFzZUZyYW1lVUkge1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnT3ZlclRpcHMnO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBidG5fYWRkaXRpb25hbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGJfdGlwczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9zcF9jb21wbGV0ZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9idG5fY2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYnRuX3JlcGxheTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsYmFjayA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5fYnRuX2Nsb3NlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsaWNrQ2xvc2UsIHRoaXMpO1xyXG5cclxuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoRnJhbWVNc2dUeXBlLk9WRVJUSVBTX0NMT1NFLCB0aGlzLmRvQ2xpY2tDbG9zZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5fYnRuX2Nsb3NlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbGlja0Nsb3NlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICDorr7nva7mmL7npLrlhoXlrrlcclxuICAgICBAcGFyYW0ge251bWJlcn0gdHlwZSAgICAgICAgICAwOiDplJnor68gIDHvvJrnrZTlr7nkuoYgIDLvvJrpl6/lhbPmiJDlip8o5LiA55u05pi+56S65LiN5Lya5YWz6ZetKVxyXG4gICAgIEBwYXJhbSB7c3RyaW5nfSBzdHIgICAgICAgICAgIOaPkOekuuWGheWuuVxyXG4gICAgIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrICAgIOWbnuiwg+WHveaVsFxyXG4gICAgIEBwYXJhbSB7c3RyaW5nfSBlbmRUaXRsZSAgICAgIGVuZOWKqOaViOaPkOekuuaWh+Wtl1xyXG4gICAgIEBwYXJhbSB7Ym9vbGVhbn0gaXNTaG93UmVwbGF5ICAgICDmmK/lkKbmmL7npLrph43njqnmjInpkq5cclxuICAgICBAcGFyYW0ge2Jvb2xlYW59IGlzU2hvd0Nsb3NlICAgICDmmK/lkKbmmL7npLrlhbPpl63mjInpkq5cclxuICAgICBAcGFyYW0ge2Jvb2xlYW59IGF1dG9PZmYgICAgIOaYr+WQpuiHquWKqOWFs+mXrVxyXG4gICAgICovXHJcbiAgICBpbml0KFxyXG4gICAgICAgIHR5cGU6IG51bWJlcixcclxuICAgICAgICBzdHI6IHN0cmluZyA9ICcnLFxyXG4gICAgICAgIGNhbGxiYWNrOiBGdW5jdGlvbixcclxuICAgICAgICBlbmRUaXRsZT86IHN0cmluZyxcclxuICAgICAgICBpc1Nob3dSZXBsYXk/OiBib29sZWFuLFxyXG4gICAgICAgIGlzU2hvd0Nsb3NlOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgYXV0b09mZjogYm9vbGVhbiA9IHRydWUsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5fc3BfY29tcGxldGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9sYl90aXBzLmFjdGl2ZSA9IHR5cGUgIT0gMjtcclxuICAgICAgICB0aGlzLl9sYl90aXBzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RyO1xyXG4gICAgICAgIHRoaXMuX2J0bl9jbG9zZS5hY3RpdmUgPSBpc1Nob3dDbG9zZSAmJiAoMCA9PT0gdHlwZSB8fCAxID09PSB0eXBlKTtcclxuXHJcbiAgICAgICAgbGV0IGJ0bk5vZGUgPSBudWxsXHJcbiAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5hZGRpdGlvbmFsLmxlbmd0aCA+IDAgJiYgUmVwb3J0TWFuYWdlci5pc1Bhc3NHYW1lKCkgJiYgIVJlcG9ydE1hbmFnZXIuaXNQYXNzQWRkaXRvbmFsKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5fYWRkaXRpb25hbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bl9hZGRpdGlvbmFsLnNldFNjYWxlKDAuMDEpO1xyXG4gICAgICAgICAgICBidG5Ob2RlID0gdGhpcy5idG5fYWRkaXRpb25hbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoUmVwb3J0TWFuYWdlci5pc1Bhc3NHYW1lKCkgJiYgUmVwb3J0TWFuYWdlci5pc1Bhc3NBZGRpdG9uYWwoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9idG5fcmVwbGF5LmFjdGl2ZSA9IGlzU2hvd1JlcGxheTtcclxuICAgICAgICAgICAgdGhpcy5fYnRuX3JlcGxheS5zZXRTY2FsZSgwLjAxKTtcclxuICAgICAgICAgICAgYnRuTm9kZSA9IHRoaXMuX2J0bl9yZXBsYXlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwic2V0dGxlX3N0YXIwXCIsIGZhbHNlKTtcclxuICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5fc3BfY29tcGxldGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgJ3RpYW96aGFuX2thaXNoaScsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidG5Ob2RlICYmIGJ0bk5vZGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihidG5Ob2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLl9zcF9jb21wbGV0ZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCAndGlhb3poYW5feHVuaHVhbicsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXlUaXBzQWN0aW9uKCk7XHJcbiAgICAgICAgVUlIZWxwLmNsb3NlTWFzaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGF5Q2xvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRvQ2xpY2tDbG9zZSgpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlUaXBzQWN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9sYl90aXBzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gY2MudjIodGhpcy5fbGJfdGlwcy5wb3NpdGlvbi54LCB0aGlzLl9sYl90aXBzLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgICBsZXQgZnJhbWVQb3NfMSA9IGNjLnYyKGVuZFBvcy54LCBlbmRQb3MueSAtIDcyLjgpO1xyXG4gICAgICAgICAgICBsZXQgZnJhbWVQb3NfMiA9IGNjLnYyKGVuZFBvcy54LCBlbmRQb3MueSArIDEyKTtcclxuICAgICAgICAgICAgbGV0IGZyYW1lUG9zXzMgPSBjYy52MihlbmRQb3MueCwgZW5kUG9zLnkgLSA4KTtcclxuICAgICAgICAgICAgbGV0IGZyYW1lUG9zXzQgPSBjYy52MihlbmRQb3MueCwgZW5kUG9zLnkgKyA3LjMpO1xyXG4gICAgICAgICAgICB0aGlzLl9sYl90aXBzLnBvc2l0aW9uID0gY2MudjMoZnJhbWVQb3NfMS54LCBmcmFtZVBvc18xLnkpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLl9sYl90aXBzKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMDgsIHsgeDogZnJhbWVQb3NfMi54LCB5OiBmcmFtZVBvc18yLnkgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjA4LCB7IHg6IGZyYW1lUG9zXzMueCwgeTogZnJhbWVQb3NfMy55IH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4wOCwgeyB4OiBmcmFtZVBvc180LngsIHk6IGZyYW1lUG9zXzQueSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMDYsIHsgeDogZW5kUG9zLngsIHk6IGVuZFBvcy55IH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGlja0Nsb3NlKGV2ZW50PywgY3VzdG9tRXZlbnREYXRhPyk6IHZvaWQge1xyXG4gICAgICAgIFQyTS5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuT1ZFUlRJUFNfQ0xPU0UsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvQ2xpY2tDbG9zZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgICAgIFVJSGVscC5jbG9zZU92ZXJUaXBzKCk7XHJcbiAgICB9XHJcbn1cclxuIl19