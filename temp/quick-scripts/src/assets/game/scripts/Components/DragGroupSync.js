"use strict";
cc._RF.push(module, '785e4D6t3NM1rjAxHZUfJAb', 'DragGroupSync');
// game/scripts/Components/DragGroupSync.ts

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
var DragGroupSync = /** @class */ (function (_super) {
    __extends(DragGroupSync, _super);
    function DragGroupSync() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.touchStartEvents = [];
        _this.touchMovingEvents = [];
        _this.touchEndEvents = [];
        _this.nodes = [];
        return _this;
    }
    DragGroupSync.prototype.start = function () {
        var _this = this;
        this.node.children.forEach(function (node, index) {
            _this.nodes.push(node);
            node.zIndex = index;
            node.attr({ id: index, initParent: _this.node, initPos: { x: node.x, y: node.y }, initSiblingIndex: index });
            node.on(cc.Node.EventType.TOUCH_START, _this.touchStart, _this);
            node.on(cc.Node.EventType.TOUCH_MOVE, _this.touchMove, _this);
            node.on(cc.Node.EventType.TOUCH_END, _this.touchEnd, _this);
            node.on(cc.Node.EventType.TOUCH_CANCEL, _this.touchEnd, _this);
        });
        this.tagId = this.node.name + this.node.parent.name + this.node.getSiblingIndex();
        this.addEventByT2M();
    };
    DragGroupSync.prototype.touchStart = function (event) {
        var node = event.target;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var type = 'touchStart' + this.tagId + node.id;
        var data = { id: node.id, pos: { x: pos.x, y: pos.y } };
        T2M_1.T2M.dispatch(type, data);
    };
    DragGroupSync.prototype.touchMove = function (event) {
        var node = event.target;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var type = 'touchMove' + this.tagId + node.id;
        var data = { id: node.id, pos: { x: pos.x, y: pos.y } };
        T2M_1.T2M.dispatch(type, data);
    };
    DragGroupSync.prototype.touchEnd = function (event) {
        var node = event.target;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var type = 'touchEnd' + this.tagId + node.id;
        var data = { id: node.id, pos: { x: pos.x, y: pos.y } };
        T2M_1.T2M.dispatch(type, data);
    };
    DragGroupSync.prototype.addEventByT2M = function () {
        var _this = this;
        this.node.children.forEach(function (node, index) {
            //@ts-ignore
            T2M_1.T2M.addSyncEventListener('touchStart' + _this.tagId + node.id, _this.touchStartHandler.bind(_this));
            //@ts-ignore
            T2M_1.T2M.addSyncEventListener('touchMove' + _this.tagId + node.id, _this.touchMoveHandler.bind(_this));
            //@ts-ignore
            T2M_1.T2M.addSyncEventListener('touchEnd' + _this.tagId + node.id, _this.touchEndHandler.bind(_this));
        });
    };
    DragGroupSync.prototype.touchStartHandler = function (data) {
        //@ts-ignore
        var node = this.nodes.find(function (node) { return node.id == data.id; });
        node.parent = this.rootNode;
        node.setSiblingIndex(this.rootNode.childrenCount);
        node.position = cc.v3(data.pos.x, data.pos.y);
        for (var _i = 0, _a = this.touchStartEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: data.pos, target: node }]);
        }
    };
    DragGroupSync.prototype.touchMoveHandler = function (data) {
        //@ts-ignore
        var node = this.nodes.find(function (node) { return node.id == data.id; });
        node.position = cc.v3(data.pos.x, data.pos.y);
        for (var _i = 0, _a = this.touchMovingEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: data.pos, target: node }]);
        }
    };
    DragGroupSync.prototype.touchEndHandler = function (data) {
        //@ts-ignore
        var node = this.nodes.find(function (node) { return node.id == data.id; });
        node.position = cc.v3(data.pos.x, data.pos.y);
        for (var _i = 0, _a = this.touchEndEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: data.pos, target: node }]);
        }
    };
    __decorate([
        property(cc.Node)
    ], DragGroupSync.prototype, "rootNode", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragGroupSync.prototype, "touchStartEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragGroupSync.prototype, "touchMovingEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragGroupSync.prototype, "touchEndEvents", void 0);
    DragGroupSync = __decorate([
        ccclass
    ], DragGroupSync);
    return DragGroupSync;
}(cc.Component));
exports.default = DragGroupSync;

cc._RF.pop();