"use strict";
cc._RF.push(module, 'a1fbe+gSexDOJnHjY6RnoVI', 'StarCount');
// frame/scripts/UI/Panel/StarCount.ts

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
var ReportManager_1 = require("../../Manager/ReportManager");
var Tools_1 = require("../../Utils/Tools");
var UIHelp_1 = require("../../Utils/UIHelp");
var BaseFrameUI_1 = require("../BaseFrameUI");
var SoundManager_1 = require("./../../Manager/SoundManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StarCount = /** @class */ (function (_super) {
    __extends(StarCount, _super);
    function StarCount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sp_star1 = null;
        _this.sp_star2 = null;
        _this.sp_star3 = null;
        _this.sp_star_en1 = null;
        _this.sp_star_en2 = null;
        _this.sp_star_en3 = null;
        _this.btn_replay = null;
        _this.btn_additional = null;
        _this.audioList = ['settle_star1', 'settle_star1', 'settle_star2', 'settle_star3'];
        _this.ani_enter_list = ['1X_kaishi', '1X_kaishi', '2xing_kaishi', '3xing_kaishi'];
        _this.ani_idle_list = ['1X_xunhuan', '1X_xunhuan', '2xing_xunhuan', '3xing_xunhuan'];
        _this.ani_en_list = ['1xing_citiao', '1xing_citiao', '2xing_kaishi', '3xing_kaishi'];
        _this.btn_pos_list = [cc.v2(0, -399), cc.v2(0, -399), cc.v2(0, -364), cc.v2(0, -312)];
        return _this;
    }
    StarCount.prototype.onLoad = function () {
    };
    /**
     * @param isShowReplay 是否显示重玩按钮
     * @param starNum 星数 (不传参数则从ReportManager里取值)
     */
    StarCount.prototype.showStars = function (isShowReplay, starNum) {
        var _this = this;
        var star = 0;
        if (void 0 === starNum || null === starNum) {
            star = ReportManager_1.ReportManager.getStarCount();
        }
        else {
            star = starNum;
        }
        SoundManager_1.SoundManager.playEffect(this.audioList[star], false);
        UIHelp_1.UIHelp.closeMask();
        var btn_node = null;
        if (EditorManager_1.EditorManager.editorData.additional.length > 0 && ReportManager_1.ReportManager.isPassGame() && !ReportManager_1.ReportManager.isPassAdditonal()) {
            this.btn_additional.active = true;
            this.btn_additional.setPosition(this.btn_pos_list[star]);
            this.btn_additional.setScale(0.01);
            btn_node = this.btn_additional;
        }
        else if (ReportManager_1.ReportManager.isPassGame() && ReportManager_1.ReportManager.isPassAdditonal()) {
            this.btn_replay.active = isShowReplay;
            this.btn_replay.setPosition(this.btn_pos_list[star]);
            this.btn_replay.setScale(0.01);
            btn_node = this.btn_replay;
        }
        var subject = ConstValue_1.ConstValue.Subject || 1;
        var spine = null;
        var spine_en = null;
        switch (star) {
            case 3:
                spine = this.sp_star3 && this.sp_star3.getComponent(sp.Skeleton);
                spine_en = this.sp_star_en3.getComponent(sp.Skeleton);
                break;
            case 2:
                spine = this.sp_star2 && this.sp_star2.getComponent(sp.Skeleton);
                spine_en = this.sp_star_en2.getComponent(sp.Skeleton);
                break;
            default:
                spine = this.sp_star1 && this.sp_star1.getComponent(sp.Skeleton);
                spine_en = this.sp_star_en1.getComponent(sp.Skeleton);
                break;
        }
        if (spine) {
            spine.node.active = true;
            spine_en.node.active = true;
            Tools_1.Tools.playSpine(spine_en, this.ani_en_list[star], false, function () {
                spine_en.node.active = false;
            });
            Tools_1.Tools.playSpine(spine, this.ani_enter_list[star], false, function () {
                Tools_1.Tools.playSpine(spine, _this.ani_idle_list[star], true);
                if (btn_node && btn_node.active) {
                    cc.tween(btn_node)
                        .to(0.5, { scale: 1 }, { easing: 'backOut' })
                        .start();
                }
            });
        }
    };
    StarCount.className = 'StarCount';
    __decorate([
        property(cc.Node)
    ], StarCount.prototype, "sp_star1", void 0);
    __decorate([
        property(cc.Node)
    ], StarCount.prototype, "sp_star2", void 0);
    __decorate([
        property(cc.Node)
    ], StarCount.prototype, "sp_star3", void 0);
    __decorate([
        property(cc.Node)
    ], StarCount.prototype, "sp_star_en1", void 0);
    __decorate([
        property(cc.Node)
    ], StarCount.prototype, "sp_star_en2", void 0);
    __decorate([
        property(cc.Node)
    ], StarCount.prototype, "sp_star_en3", void 0);
    __decorate([
        property(cc.Node)
    ], StarCount.prototype, "btn_replay", void 0);
    __decorate([
        property(cc.Node)
    ], StarCount.prototype, "btn_additional", void 0);
    StarCount = __decorate([
        ccclass
    ], StarCount);
    return StarCount;
}(BaseFrameUI_1.default));
exports.default = StarCount;

cc._RF.pop();