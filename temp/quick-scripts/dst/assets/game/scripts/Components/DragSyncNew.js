
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Components/DragSyncNew.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcQ29tcG9uZW50c1xcRHJhZ1N5bmNOZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0dBSUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILHNEQUFxRDtBQUkvQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXNMQztRQXBMVyxZQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsc0JBQWdCLEdBQWdDLEVBQUUsQ0FBQztRQUVuRCx1QkFBaUIsR0FBZ0MsRUFBRSxDQUFDO1FBRXBELG9CQUFjLEdBQWdDLEVBQUUsQ0FBQztRQUdqRCxjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDakMsUUFBUTtRQUNBLGVBQVMsR0FBWSxLQUFLLENBQUM7UUEwR25DLGlCQUFpQjtRQUNULGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG9CQUFjLEdBQVEsSUFBSSxDQUFDO1FBRW5DLFFBQVE7UUFDQSxtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUF5RDFDLENBQUM7b0JBdExvQixXQUFXO0lBZ0I1Qiw0QkFBTSxHQUFOO1FBRUksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNYLEVBQUUsRUFBRSxLQUFLO1lBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUM1QixPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQzNDLGdCQUFnQixFQUFFLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNsRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLCtCQUFTLEdBQWhCLFVBQWlCLFFBQWlCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFUyw4QkFBUSxHQUFsQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFTSxtQ0FBYSxHQUFwQixVQUFxQixNQUFlLEVBQUUsU0FBaUIsRUFBRSxRQUFrQjtRQUN2RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksYUFBVyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLGFBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksYUFBVyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVPLGdDQUFVLEdBQWxCLFVBQW1CLEtBQTBCO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzdCLElBQUksSUFBSSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDMUQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFBO1NBQy9CO2FBQU07WUFDSCxTQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM1QjtJQUVMLENBQUM7SUFFTywrQkFBUyxHQUFqQixVQUFrQixLQUEwQjtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzNCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixJQUFJLElBQUksR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQyxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDOUI7YUFBTTtZQUNILFNBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFTyw4QkFBUSxHQUFoQixVQUFpQixLQUEwQjtRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUM3QixJQUFJLElBQUksR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVuQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUN2QyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDaEMsSUFBSSxJQUFJLEdBQUc7WUFDUCxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUMzQixJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUN0QyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRTtTQUNyQyxDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0gsU0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDNUI7SUFFTCxDQUFDO0lBRU8sbUNBQWEsR0FBckI7UUFDSSxTQUFHLENBQUMsb0JBQW9CLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLFNBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckYsU0FBRyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQVNPLHVDQUFpQixHQUF6QixVQUEwQixJQUFJO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsOENBQThDO0lBQ2xELENBQUM7SUFFTyxzQ0FBZ0IsR0FBeEIsVUFBeUIsSUFBSTtRQUN6QixvQ0FBb0M7UUFDcEMsb0ZBQW9GO1FBQ3BGLEtBQXlCLFVBQXFCLEVBQXJCLEtBQUEsSUFBSSxDQUFDLGdCQUFnQixFQUFyQixjQUFxQixFQUFyQixJQUFxQixFQUFFO1lBQTNDLElBQUksWUFBWSxTQUFBO1lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEg7SUFDTCxDQUFDO0lBRU8sc0NBQWdCLEdBQXhCLFVBQXlCLElBQUk7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUM1QixzQ0FBc0M7UUFDdEMsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDekMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDM0UsSUFBSSxRQUFRLEdBQUcsRUFBRSxFQUFFO2dCQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQzlCO1NBQ0o7YUFBTTtZQUNILHNEQUFzRDtZQUN0RCxLQUF5QixVQUFzQixFQUF0QixLQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBdEIsY0FBc0IsRUFBdEIsSUFBc0IsRUFBRTtnQkFBNUMsSUFBSSxZQUFZLFNBQUE7Z0JBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzdEO1NBQ0o7SUFDTCxDQUFDO0lBRU8scUNBQWUsR0FBdkIsVUFBd0IsSUFBSTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN6QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMzRSxJQUFJLFFBQVEsSUFBSSxFQUFFLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQzVCO1NBQ0o7YUFDSTtZQUNELHNEQUFzRDtTQUN6RDtRQUVELEtBQXlCLFVBQW1CLEVBQW5CLEtBQUEsSUFBSSxDQUFDLGNBQWMsRUFBbkIsY0FBbUIsRUFBbkIsSUFBbUIsRUFBRTtZQUF6QyxJQUFJLFlBQVksU0FBQTtZQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzSDtJQUNMLENBQUM7O0lBbkxEO1FBREMsUUFBUSxFQUFFOytDQUNZO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO3lEQUNXO0lBRTNEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDOzBEQUNZO0lBRTVEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO3VEQUNTO0lBUnhDLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FzTC9CO0lBQUQsa0JBQUM7Q0F0TEQsQUFzTEMsQ0F0THdDLEVBQUUsQ0FBQyxTQUFTLEdBc0xwRDtrQkF0TG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIHYxLjBcclxuICogQXV0aG9yOiBqaW5oYWlsaWFuZ1xyXG4gKiBFbWFpbDogamluaGFpbGlhbmdAdGFsLmNvbVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFQyTSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1NESy9UMk1cIjtcclxuXHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdTeW5jTmV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwcml2YXRlIGlzRWRpdCA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJdIH0pXHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnRFdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJdIH0pXHJcbiAgICBwcml2YXRlIHRvdWNoTW92aW5nRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyXSB9KVxyXG4gICAgcHJpdmF0ZSB0b3VjaEVuZEV2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSB0YWdJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpc0VuYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8v5piv5ZCm5bey57uP54K55Ye7XHJcbiAgICBwcml2YXRlIGlzVG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hdHRyKHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LFxyXG4gICAgICAgICAgICBpbml0UGFyZW50OiB0aGlzLm5vZGUucGFyZW50LFxyXG4gICAgICAgICAgICBpbml0UG9zOiB7IHg6IHRoaXMubm9kZS54LCB5OiB0aGlzLm5vZGUueSB9LFxyXG4gICAgICAgICAgICBpbml0U2libGluZ0luZGV4OiBpbmRleCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnRhZ0lkID0gdGhpcy5ub2RlLm5hbWUgKyB0aGlzLm5vZGUucGFyZW50Lm5hbWUgKyB0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4KCk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudEJ5VDJNKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEVuYWJsZShpc0VuYWJsZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaXNFbmFibGUgPSBpc0VuYWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc1RvdWNoZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkVG91Y2hFdmVudCh0YXJnZXQ6IGNjLk5vZGUsIGNvbXBvbmVudDogc3RyaW5nLCBoYW5kbGVyczogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHMucHVzaChuZXcgRHJhZ1N5bmNOZXcuRXZlbnRIYW5kbGVyKCkpO1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydEV2ZW50c1swXS50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0RXZlbnRzWzBdLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHNbMF0uaGFuZGxlciA9IGhhbmRsZXJzWzBdO1xyXG5cclxuICAgICAgICB0aGlzLnRvdWNoTW92aW5nRXZlbnRzLnB1c2gobmV3IERyYWdTeW5jTmV3LkV2ZW50SGFuZGxlcigpKTtcclxuICAgICAgICB0aGlzLnRvdWNoTW92aW5nRXZlbnRzWzBdLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnRvdWNoTW92aW5nRXZlbnRzWzBdLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnRvdWNoTW92aW5nRXZlbnRzWzBdLmhhbmRsZXIgPSBoYW5kbGVyc1sxXTtcclxuXHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50cy5wdXNoKG5ldyBEcmFnU3luY05ldy5FdmVudEhhbmRsZXIoKSk7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS5oYW5kbGVyID0gaGFuZGxlcnNbMl07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRW5hYmxlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1RvdWNoZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgICAgICBsZXQgdHlwZSA9ICd0b3VjaFN0YXJ0JyArIHRoaXMudGFnSWQ7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7IHBvczogeyB4OiBwb3MueCwgeTogcG9zLnkgfSwgaXNEcmFnOiBmYWxzZSB9O1xyXG4gICAgICAgIGlmICh0aGlzLmlzRWRpdCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKGRhdGEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVDJNLmRpc3BhdGNoKHR5cGUsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNUb3VjaGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRW5hYmxlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSAndG91Y2hNb3ZlJyArIHRoaXMudGFnSWQ7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7IHBvczogeyB4OiBwb3MueCwgeTogcG9zLnkgfSB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0VkaXQpIHtcclxuICAgICAgICAgICAgdGhpcy50b3VjaE1vdmVIYW5kbGVyKGRhdGEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVDJNLmRpc3BhdGNoKHR5cGUsIGRhdGEsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVG91Y2hlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgbGV0IHR5cGUgPSAndG91Y2hFbmQnICsgdGhpcy50YWdJZDtcclxuXHJcbiAgICAgICAgbGV0IHN0ZXJ0UG9zID0gZXZlbnQuZ2V0U3RhcnRMb2NhdGlvbigpXHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgcG9zOiB7IHg6IHBvcy54LCB5OiBwb3MueSB9LFxyXG4gICAgICAgICAgICBzcG9zOiB7IHg6IHN0ZXJ0UG9zLngsIHk6IHN0ZXJ0UG9zLnkgfSxcclxuICAgICAgICAgICAgZXBvczogeyB4OiBlbmRQb3MueCwgeTogZW5kUG9zLnkgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRWRpdCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvdWNoRW5kSGFuZGxlcihkYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUMk0uZGlzcGF0Y2godHlwZSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEV2ZW50QnlUMk0oKSB7XHJcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKCd0b3VjaFN0YXJ0JyArIHRoaXMudGFnSWQsIHRoaXMudG91Y2hTdGFydEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKCd0b3VjaE1vdmUnICsgdGhpcy50YWdJZCwgdGhpcy50b3VjaE1vdmVIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcigndG91Y2hFbmQnICsgdGhpcy50YWdJZCwgdGhpcy50b3VjaEVuZEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/moLnmja7op6bmkbjml7bpl7TliKTmlq3mmK/lkKbkuLrngrnlh7vkuovku7ZcclxuICAgIHByaXZhdGUgaXNDbGlja0V2ZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnREYXRhOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIC8v6Kem5pG45byA5aeL5L2N572uXHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdG91Y2hTdGFydEhhbmRsZXIoZGF0YSkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpO1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzQ2xpY2tFdmVudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0RGF0YSA9IGRhdGE7XHJcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVUb3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlVG91Y2hTdGFydChkYXRhKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBhcmVudCA9IHRoaXMucm9vdE5vZGU7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjModGhpcy50b3VjaFN0YXJ0RGF0YS5wb3MueCwgdGhpcy50b3VjaFN0YXJ0RGF0YS5wb3MueSk7XHJcbiAgICAgICAgZm9yIChsZXQgZXZlbnRIYW5kbGVyIG9mIHRoaXMudG91Y2hTdGFydEV2ZW50cykge1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIuZW1pdChbeyBwb3M6IHRoaXMudG91Y2hTdGFydERhdGEucG9zLCB0YXJnZXQ6IHRoaXMubm9kZSwgaXNEcmFnOiB0aGlzLnRvdWNoU3RhcnREYXRhLmlzRHJhZyB9XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hNb3ZlSGFuZGxlcihkYXRhKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVG91Y2hlZCkgcmV0dXJuO1xyXG4gICAgICAgIC8v5Yik5pat5b2T5YmN5L2N572u5LiO6Kem5pG45byA5aeL5L2N572u55qE6Led56a777yM5aaC5p6c6LaF6L+H5LiA5a6a6Led56a777yM5YiZ5LiN5YaN5Yik5pat5Li654K55Ye75LqL5Lu2XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDbGlja0V2ZW50ICYmIHRoaXMudG91Y2hTdGFydFBvcykge1xyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLnRvdWNoU3RhcnRQb3Muc3ViKGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpKS5tYWcoKTtcclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gMTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDbGlja0V2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnREYXRhLmlzRHJhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0RGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnREYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKGRhdGEucG9zLngsIGRhdGEucG9zLnkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBldmVudEhhbmRsZXIgb2YgdGhpcy50b3VjaE1vdmluZ0V2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmVtaXQoW3sgcG9zOiBkYXRhLnBvcywgdGFyZ2V0OiB0aGlzLm5vZGUgfV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hFbmRIYW5kbGVyKGRhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNUb3VjaGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1RvdWNoZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrRXZlbnQgJiYgdGhpcy50b3VjaFN0YXJ0UG9zKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMudG91Y2hTdGFydFBvcy5zdWIoY2MudjIoZGF0YS5wb3MueCwgZGF0YS5wb3MueSkpLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPD0gMTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDbGlja0V2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoZGF0YS5wb3MueCwgZGF0YS5wb3MueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBldmVudEhhbmRsZXIgb2YgdGhpcy50b3VjaEVuZEV2ZW50cykge1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIuZW1pdChbeyBwb3M6IGRhdGEucG9zLCBzcG9zOiBkYXRhLnNwb3MsIGVwb3M6IGRhdGEuZXBvcywgdGFyZ2V0OiB0aGlzLm5vZGUsIGlzQ2xpY2s6IHRoaXMuaXNDbGlja0V2ZW50IH1dKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19