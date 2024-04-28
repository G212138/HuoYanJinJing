"use strict";
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