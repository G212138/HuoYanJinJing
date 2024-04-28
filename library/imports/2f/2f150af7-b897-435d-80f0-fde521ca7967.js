"use strict";
cc._RF.push(module, '2f150r3uJdDXYDw/eUhynln', 'ButtonSync');
// game/scripts/Components/ButtonSync.ts

"use strict";
/**
 * v2.0
 * Author: jinhailiang
 * Email: jinhailiang@tal.com
 */
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
var T2M_1 = require("../../../frame/scripts/SDK/T2M");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonSync = /** @class */ (function (_super) {
    __extends(ButtonSync, _super);
    function ButtonSync() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.normalSprite = null;
        _this.seclectSprite = null;
        _this.target = null;
        _this.touchStartEvents = [];
        _this.touchEndEvents = [];
        _this.isScale = 1;
        _this.isEnable = true;
        //是否已经点击
        _this.isTouched = false;
        return _this;
    }
    ButtonSync_1 = ButtonSync;
    Object.defineProperty(ButtonSync.prototype, "seclect", {
        set: function (boolean) {
            this.node.getComponent(cc.Sprite).spriteFrame = boolean ? this.seclectSprite : this.normalSprite;
        },
        enumerable: false,
        configurable: true
    });
    ButtonSync.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.tagId = this.node.name + this.node.parent.name + this.node.getSiblingIndex();
        this.addEventByT2M();
    };
    ButtonSync.prototype.setEnable = function (isEnable) {
        this.isEnable = isEnable;
    };
    ButtonSync.prototype.onEnable = function () {
        this.isTouched = false;
    };
    ButtonSync.prototype.addTouchEvent = function (target, component, handlers, isScale) {
        if (isScale === void 0) { isScale = 1; }
        this.touchStartEvents.push(new ButtonSync_1.EventHandler());
        this.touchStartEvents[0].target = target;
        this.touchStartEvents[0].component = component;
        this.touchStartEvents[0].handler = handlers[0];
        this.touchEndEvents.push(new ButtonSync_1.EventHandler());
        this.touchEndEvents[0].target = target;
        this.touchEndEvents[0].component = component;
        this.touchEndEvents[0].handler = handlers[1];
        this.isScale = isScale;
    };
    ButtonSync.prototype.touchStart = function (event) {
        if (!this.isEnable)
            return;
        if (this.isTouched) {
            return;
        }
        this.isTouched = true;
        var type = 'touchStart' + this.tagId;
        var pos = event.getLocation();
        var data = { pos: { x: pos.x, y: pos.y } };
        T2M_1.T2M.dispatch(type, data);
    };
    ButtonSync.prototype.touchEnd = function (event) {
        if (!this.isEnable)
            return;
        var type = 'touchEnd' + this.tagId;
        var pos = event.getLocation();
        var data = { pos: { x: pos.x, y: pos.y } };
        T2M_1.T2M.dispatch(type, data);
    };
    ButtonSync.prototype.addEventByT2M = function () {
        T2M_1.T2M.addSyncEventListener('touchStart' + this.tagId, this.touchStartHandler.bind(this));
        T2M_1.T2M.addSyncEventListener('touchEnd' + this.tagId, this.touchEndHandler.bind(this));
    };
    ButtonSync.prototype.touchStartHandler = function (data) {
        if (!this.target) {
            this.node.scale = this.isScale;
        }
        else {
            this.target.spriteFrame = this.seclectSprite;
        }
        this.isTouched = true;
        for (var _i = 0, _a = this.touchStartEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ target: this.node, pos: data.pos }]);
        }
    };
    ButtonSync.prototype.touchEndHandler = function (data) {
        if (!this.isTouched) {
            return;
        }
        if (!this.target) {
            this.node.scale = 1;
        }
        else {
            this.target.spriteFrame = this.normalSprite;
        }
        this.isTouched = false;
        for (var _i = 0, _a = this.touchEndEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ target: this.node, pos: data.pos }]);
        }
    };
    var ButtonSync_1;
    __decorate([
        property({ type: cc.SpriteFrame })
    ], ButtonSync.prototype, "normalSprite", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], ButtonSync.prototype, "seclectSprite", void 0);
    __decorate([
        property({ type: cc.Sprite })
    ], ButtonSync.prototype, "target", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], ButtonSync.prototype, "touchStartEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], ButtonSync.prototype, "touchEndEvents", void 0);
    __decorate([
        property
    ], ButtonSync.prototype, "isScale", void 0);
    ButtonSync = ButtonSync_1 = __decorate([
        ccclass
    ], ButtonSync);
    return ButtonSync;
}(cc.Component));
exports.default = ButtonSync;

cc._RF.pop();