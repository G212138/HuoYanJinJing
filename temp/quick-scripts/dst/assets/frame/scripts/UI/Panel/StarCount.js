
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcU3RhckNvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVFQUFzRTtBQUN0RSxnRkFBK0U7QUFDL0UsNkRBQTREO0FBQzVELDJDQUEwQztBQUMxQyw2Q0FBNEM7QUFDNUMsOENBQXlDO0FBQ3pDLDZEQUE0RDtBQUV0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBVztJQUFsRDtRQUFBLHFFQTRGQztRQXhGVyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixlQUFTLEdBQWEsQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUN2RixvQkFBYyxHQUFhLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDdEYsbUJBQWEsR0FBYSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ3pGLGlCQUFXLEdBQWEsQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUN6RixrQkFBWSxHQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFD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QUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2tCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2tCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2tCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ3FCO0lBbEJ0QixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBNEY3QjtJQUFELGdCQUFDO0NBNUZELEFBNEZDLENBNUZzQyxxQkFBVyxHQTRGakQ7a0JBNUZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RWYWx1ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9EYXRhL0NvbnN0VmFsdWUnO1xyXG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XHJcbmltcG9ydCB7IFJlcG9ydE1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL1JlcG9ydE1hbmFnZXInO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gJy4uLy4uL1V0aWxzL1Rvb2xzJztcclxuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSAnLi4vLi4vVXRpbHMvVUlIZWxwJztcclxuaW1wb3J0IEJhc2VGcmFtZVVJIGZyb20gJy4uL0Jhc2VGcmFtZVVJJztcclxuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi8uLi8uLi9NYW5hZ2VyL1NvdW5kTWFuYWdlcic7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhckNvdW50IGV4dGVuZHMgQmFzZUZyYW1lVUkge1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnU3RhckNvdW50JztcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgc3Bfc3RhcjE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHNwX3N0YXIyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBzcF9zdGFyMzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgc3Bfc3Rhcl9lbjE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHNwX3N0YXJfZW4yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBzcF9zdGFyX2VuMzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgYnRuX3JlcGxheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgYnRuX2FkZGl0aW9uYWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYXVkaW9MaXN0OiBzdHJpbmdbXSA9IFsnc2V0dGxlX3N0YXIxJywgJ3NldHRsZV9zdGFyMScsICdzZXR0bGVfc3RhcjInLCAnc2V0dGxlX3N0YXIzJ107XHJcbiAgICBwcml2YXRlIGFuaV9lbnRlcl9saXN0OiBzdHJpbmdbXSA9IFsnMVhfa2Fpc2hpJywgJzFYX2thaXNoaScsICcyeGluZ19rYWlzaGknLCAnM3hpbmdfa2Fpc2hpJ107XHJcbiAgICBwcml2YXRlIGFuaV9pZGxlX2xpc3Q6IHN0cmluZ1tdID0gWycxWF94dW5odWFuJywgJzFYX3h1bmh1YW4nLCAnMnhpbmdfeHVuaHVhbicsICczeGluZ194dW5odWFuJ107XHJcbiAgICBwcml2YXRlIGFuaV9lbl9saXN0OiBzdHJpbmdbXSA9IFsnMXhpbmdfY2l0aWFvJywgJzF4aW5nX2NpdGlhbycsICcyeGluZ19rYWlzaGknLCAnM3hpbmdfa2Fpc2hpJ107XHJcbiAgICBwcml2YXRlIGJ0bl9wb3NfbGlzdDogY2MuVmVjMltdID0gW2NjLnYyKDAsIC0zOTkpLCBjYy52MigwLCAtMzk5KSwgY2MudjIoMCwgLTM2NCksIGNjLnYyKDAsIC0zMTIpXTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGlzU2hvd1JlcGxheSDmmK/lkKbmmL7npLrph43njqnmjInpkq5cclxuICAgICAqIEBwYXJhbSBzdGFyTnVtIOaYn+aVsCAo5LiN5Lyg5Y+C5pWw5YiZ5LuOUmVwb3J0TWFuYWdlcumHjOWPluWAvClcclxuICAgICAqL1xyXG4gICAgc2hvd1N0YXJzKGlzU2hvd1JlcGxheT86IGJvb2xlYW4sIHN0YXJOdW0/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3RhciA9IDA7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gc3Rhck51bSB8fCBudWxsID09PSBzdGFyTnVtKSB7XHJcbiAgICAgICAgICAgIHN0YXIgPSBSZXBvcnRNYW5hZ2VyLmdldFN0YXJDb3VudCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXIgPSBzdGFyTnVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QodGhpcy5hdWRpb0xpc3Rbc3Rhcl0sIGZhbHNlKTtcclxuICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgIGxldCBidG5fbm9kZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5hZGRpdGlvbmFsLmxlbmd0aCA+IDAgJiYgUmVwb3J0TWFuYWdlci5pc1Bhc3NHYW1lKCkgJiYgIVJlcG9ydE1hbmFnZXIuaXNQYXNzQWRkaXRvbmFsKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5fYWRkaXRpb25hbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bl9hZGRpdGlvbmFsLnNldFBvc2l0aW9uKHRoaXMuYnRuX3Bvc19saXN0W3N0YXJdKTtcclxuICAgICAgICAgICAgdGhpcy5idG5fYWRkaXRpb25hbC5zZXRTY2FsZSgwLjAxKTtcclxuICAgICAgICAgICAgYnRuX25vZGUgPSB0aGlzLmJ0bl9hZGRpdGlvbmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChSZXBvcnRNYW5hZ2VyLmlzUGFzc0dhbWUoKSAmJiBSZXBvcnRNYW5hZ2VyLmlzUGFzc0FkZGl0b25hbCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX3JlcGxheS5hY3RpdmUgPSBpc1Nob3dSZXBsYXk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX3JlcGxheS5zZXRQb3NpdGlvbih0aGlzLmJ0bl9wb3NfbGlzdFtzdGFyXSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX3JlcGxheS5zZXRTY2FsZSgwLjAxKTtcclxuICAgICAgICAgICAgYnRuX25vZGUgPSB0aGlzLmJ0bl9yZXBsYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdWJqZWN0OiBudW1iZXIgPSBDb25zdFZhbHVlLlN1YmplY3QgfHwgMTtcclxuICAgICAgICBsZXQgc3BpbmU6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgICAgICBsZXQgc3BpbmVfZW46IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgICAgICBzd2l0Y2ggKHN0YXIpIHtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgc3BpbmUgPSB0aGlzLnNwX3N0YXIzICYmIHRoaXMuc3Bfc3RhcjMuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgIHNwaW5lX2VuID0gdGhpcy5zcF9zdGFyX2VuMy5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHNwaW5lID0gdGhpcy5zcF9zdGFyMiAmJiB0aGlzLnNwX3N0YXIyLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgICAgICAgICBzcGluZV9lbiA9IHRoaXMuc3Bfc3Rhcl9lbjIuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc3BpbmUgPSB0aGlzLnNwX3N0YXIxICYmIHRoaXMuc3Bfc3RhcjEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgIHNwaW5lX2VuID0gdGhpcy5zcF9zdGFyX2VuMS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzcGluZSkge1xyXG4gICAgICAgICAgICBzcGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNwaW5lX2VuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHNwaW5lX2VuLCB0aGlzLmFuaV9lbl9saXN0W3N0YXJdLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3BpbmVfZW4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShzcGluZSwgdGhpcy5hbmlfZW50ZXJfbGlzdFtzdGFyXSwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShzcGluZSwgdGhpcy5hbmlfaWRsZV9saXN0W3N0YXJdLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChidG5fbm9kZSAmJiBidG5fbm9kZS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihidG5fbm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19