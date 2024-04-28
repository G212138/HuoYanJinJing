"use strict";
cc._RF.push(module, '609994hKQlHnIUh2M+EMJUc', 'DragSyncNew');
// game/scripts/Components/DragSyncNew.ts

"use strict";
/**
 * v1.0
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
var DragSyncNew = /** @class */ (function (_super) {
    __extends(DragSyncNew, _super);
    function DragSyncNew() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isEdit = false;
        _this.touchStartEvents = [];
        _this.touchMovingEvents = [];
        _this.touchEndEvents = [];
        _this.isEnable = true;
        _this.isTouch = false;
        //是否已经点击
        _this.isTouched = false;
        //根据触摸时间判断是否为点击事件
        _this.isClickEvent = false;
        _this.touchStartData = null;
        //触摸开始位置
        _this.touchStartPos = null;
        return _this;
    }
    DragSyncNew_1 = DragSyncNew;
    DragSyncNew.prototype.onLoad = function () {
        var index = this.node.getSiblingIndex();
        this.node.attr({
            id: index,
            initParent: this.node.parent,
            initPos: { x: this.node.x, y: this.node.y },
            initSiblingIndex: index,
        });
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.tagId = this.node.name + this.node.parent.name + this.node.getSiblingIndex();
        this.addEventByT2M();
    };
    DragSyncNew.prototype.setEnable = function (isEnable) {
        this.isEnable = isEnable;
    };
    DragSyncNew.prototype.onEnable = function () {
        this.isTouched = false;
    };
    DragSyncNew.prototype.addTouchEvent = function (target, component, handlers) {
        this.touchStartEvents.push(new DragSyncNew_1.EventHandler());
        this.touchStartEvents[0].target = target;
        this.touchStartEvents[0].component = component;
        this.touchStartEvents[0].handler = handlers[0];
        this.touchMovingEvents.push(new DragSyncNew_1.EventHandler());
        this.touchMovingEvents[0].target = target;
        this.touchMovingEvents[0].component = component;
        this.touchMovingEvents[0].handler = handlers[1];
        this.touchEndEvents.push(new DragSyncNew_1.EventHandler());
        this.touchEndEvents[0].target = target;
        this.touchEndEvents[0].component = component;
        this.touchEndEvents[0].handler = handlers[2];
    };
    DragSyncNew.prototype.touchStart = function (event) {
        if (!this.isEnable)
            return;
        this.isTouched = true;
        this.isTouch = true;
        var pos = event.getLocation();
        var type = 'touchStart' + this.tagId;
        var data = { pos: { x: pos.x, y: pos.y }, isDrag: false };
        if (this.isEdit) {
            this.touchStartHandler(data);
        }
        else {
            T2M_1.T2M.dispatch(type, data);
        }
    };
    DragSyncNew.prototype.touchMove = function (event) {
        if (!this.isTouched) {
            return;
        }
        if (!this.isEnable)
            return;
        var pos = event.getLocation();
        var type = 'touchMove' + this.tagId;
        var data = { pos: { x: pos.x, y: pos.y } };
        if (this.isEdit) {
            this.touchMoveHandler(data);
        }
        else {
            T2M_1.T2M.dispatch(type, data, true);
        }
    };
    DragSyncNew.prototype.touchEnd = function (event) {
        if (!this.isTouched) {
            return;
        }
        if (!this.isEnable)
            return;
        this.isTouch = false;
        var pos = event.getLocation();
        var type = 'touchEnd' + this.tagId;
        var stertPos = event.getStartLocation();
        var endPos = event.getLocation();
        var data = {
            pos: { x: pos.x, y: pos.y },
            spos: { x: stertPos.x, y: stertPos.y },
            epos: { x: endPos.x, y: endPos.y }
        };
        if (this.isEdit) {
            this.touchEndHandler(data);
        }
        else {
            T2M_1.T2M.dispatch(type, data);
        }
    };
    DragSyncNew.prototype.addEventByT2M = function () {
        T2M_1.T2M.addSyncEventListener('touchStart' + this.tagId, this.touchStartHandler.bind(this));
        T2M_1.T2M.addSyncEventListener('touchMove' + this.tagId, this.touchMoveHandler.bind(this));
        T2M_1.T2M.addSyncEventListener('touchEnd' + this.tagId, this.touchEndHandler.bind(this));
    };
    DragSyncNew.prototype.touchStartHandler = function (data) {
        if (!this.isEnable)
            return;
        this.touchStartPos = cc.v2(data.pos.x, data.pos.y);
        this.isTouched = true;
        this.isClickEvent = true;
        this.touchStartData = data;
        // this.handleTouchStart(this.touchStartData);
    };
    DragSyncNew.prototype.handleTouchStart = function (data) {
        // this.node.parent = this.rootNode;
        // this.node.position = cc.v3(this.touchStartData.pos.x, this.touchStartData.pos.y);
        for (var _i = 0, _a = this.touchStartEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: this.touchStartData.pos, target: this.node, isDrag: this.touchStartData.isDrag }]);
        }
    };
    DragSyncNew.prototype.touchMoveHandler = function (data) {
        if (!this.isTouched)
            return;
        //判断当前位置与触摸开始位置的距离，如果超过一定距离，则不再判断为点击事件
        if (this.isClickEvent && this.touchStartPos) {
            var distance = this.touchStartPos.sub(cc.v2(data.pos.x, data.pos.y)).mag();
            if (distance > 10) {
                this.isClickEvent = false;
                this.touchStartData.isDrag = true;
                this.handleTouchStart(this.touchStartData);
                this.touchStartData = null;
            }
        }
        else {
            // this.node.position = cc.v3(data.pos.x, data.pos.y);
            for (var _i = 0, _a = this.touchMovingEvents; _i < _a.length; _i++) {
                var eventHandler = _a[_i];
                eventHandler.emit([{ pos: data.pos, target: this.node }]);
            }
        }
    };
    DragSyncNew.prototype.touchEndHandler = function (data) {
        if (!this.isTouched) {
            return;
        }
        this.isTouched = false;
        if (this.isClickEvent && this.touchStartPos) {
            var distance = this.touchStartPos.sub(cc.v2(data.pos.x, data.pos.y)).mag();
            if (distance <= 10) {
                this.isClickEvent = true;
            }
        }
        else {
            // this.node.position = cc.v3(data.pos.x, data.pos.y);
        }
        for (var _i = 0, _a = this.touchEndEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: data.pos, spos: data.spos, epos: data.epos, target: this.node, isClick: this.isClickEvent }]);
        }
    };
    var DragSyncNew_1;
    __decorate([
        property()
    ], DragSyncNew.prototype, "isEdit", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragSyncNew.prototype, "touchStartEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragSyncNew.prototype, "touchMovingEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragSyncNew.prototype, "touchEndEvents", void 0);
    DragSyncNew = DragSyncNew_1 = __decorate([
        ccclass
    ], DragSyncNew);
    return DragSyncNew;
}(cc.Component));
exports.default = DragSyncNew;

cc._RF.pop();