
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/GameItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd31ccYlmDlEsInlQGdP3H4Y', 'GameItem');
// game/scripts/UI/Item/GameItem.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pingxing = false;
        _this.chuizhi = false;
        _this.zhijiao = false;
        _this.dunjiao = false;
        _this.ruijiao = false;
        _this.ganraoxiang = false;
        return _this;
    }
    NewClass.prototype.onClick = function () {
        var curStep = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep;
        var gameData = EditorManager_1.EditorManager.editorData.itemData;
        var type = gameData[curStep].type;
        if (type == 0 && this.pingxing) {
            this.handleTrue();
        }
        else if (type == 1 && this.chuizhi) {
            this.handleTrue();
        }
        else if (type == 2 && this.zhijiao) {
            this.handleTrue();
        }
        else if (type == 3 && this.dunjiao) {
            this.handleTrue();
        }
        else if (type == 4 && this.ruijiao) {
            this.handleTrue();
        }
        else {
            this.handleFalse();
        }
    };
    NewClass.prototype.handleTrue = function () {
        var _this = this;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curHideItem.push(this.node.name);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.allHideItem.push(this.node.name);
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_CLICK_ITEM, true);
        //节点旋转隐藏
        cc.tween(this.node).to(0.5, { angle: 360, opacity: 0 }).call(function () {
            _this.node.active = false;
        }).start();
    };
    NewClass.prototype.handleFalse = function () {
        //节点抖动
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_CLICK_ITEM, false);
        var posX = Number(this.node.x);
        cc.tween(this.node).to(0.1, { x: posX + 10 }).to(0.1, { x: posX - 10 }).to(0.1, { x: posX + 10 }).to(0.1, { x: posX - 10 }).to(0.1, { x: posX }).start();
    };
    __decorate([
        property(Boolean)
    ], NewClass.prototype, "pingxing", void 0);
    __decorate([
        property(Boolean)
    ], NewClass.prototype, "chuizhi", void 0);
    __decorate([
        property(Boolean)
    ], NewClass.prototype, "zhijiao", void 0);
    __decorate([
        property(Boolean)
    ], NewClass.prototype, "dunjiao", void 0);
    __decorate([
        property(Boolean)
    ], NewClass.prototype, "ruijiao", void 0);
    __decorate([
        property(Boolean)
    ], NewClass.prototype, "ganraoxiang", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFGQUFvRjtBQUNwRixxRkFBb0Y7QUFDcEYsa0RBQWlEO0FBQ2pELDZEQUE0RDtBQUV0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWtEQztRQS9DVyxjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixhQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsaUJBQVcsR0FBWSxLQUFLLENBQUM7O0lBcUN6QyxDQUFDO0lBbkNXLDBCQUFPLEdBQWY7UUFDSSxJQUFJLE9BQU8sR0FBRyxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFDbkUsSUFBSSxRQUFRLEdBQUcsNkJBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ2pELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDSCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRU8sNkJBQVUsR0FBbEI7UUFBQSxpQkFRQztRQVBHLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RSxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUUsaUNBQWUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEQsUUFBUTtRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6RCxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRU8sOEJBQVcsR0FBbkI7UUFDSSxNQUFNO1FBQ04saUNBQWUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0osQ0FBQztJQTlDRDtRQURDLFFBQVEsQ0FBQyxPQUFPLENBQUM7OENBQ2dCO0lBRWxDO1FBREMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs2Q0FDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxPQUFPLENBQUM7NkNBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsT0FBTyxDQUFDOzZDQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs2Q0FDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxPQUFPLENBQUM7aURBQ21CO0lBYnBCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrRDVCO0lBQUQsZUFBQztDQWxERCxBQWtEQyxDQWxEcUMsRUFBRSxDQUFDLFNBQVMsR0FrRGpEO2tCQWxEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFN5bmNEYXRhTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL01hbmFnZXIvRWRpdG9yTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoQm9vbGVhbilcclxuICAgIHByaXZhdGUgcGluZ3hpbmc6IEJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gICAgcHJpdmF0ZSBjaHVpemhpOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoQm9vbGVhbilcclxuICAgIHByaXZhdGUgemhpamlhbzogQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgICBwcml2YXRlIGR1bmppYW86IEJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gICAgcHJpdmF0ZSBydWlqaWFvOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoQm9vbGVhbilcclxuICAgIHByaXZhdGUgZ2FucmFveGlhbmc6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgbGV0IGN1clN0ZXAgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJTdGVwO1xyXG4gICAgICAgIGxldCBnYW1lRGF0YSA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pdGVtRGF0YTtcclxuICAgICAgICBsZXQgdHlwZSA9IGdhbWVEYXRhW2N1clN0ZXBdLnR5cGU7XHJcbiAgICAgICAgaWYgKHR5cGUgPT0gMCAmJiB0aGlzLnBpbmd4aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJ1ZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAxICYmIHRoaXMuY2h1aXpoaSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRydWUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gMiAmJiB0aGlzLnpoaWppYW8pIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVUcnVlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IDMgJiYgdGhpcy5kdW5qaWFvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJ1ZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSA0ICYmIHRoaXMucnVpamlhbykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRydWUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUZhbHNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlVHJ1ZSgpIHtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJIaWRlSXRlbS5wdXNoKHRoaXMubm9kZS5uYW1lKTtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbGxIaWRlSXRlbS5wdXNoKHRoaXMubm9kZS5uYW1lKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLk9OX0NMSUNLX0lURU0sIHRydWUpO1xyXG4gICAgICAgIC8v6IqC54K55peL6L2s6ZqQ6JePXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjUsIHsgYW5nbGU6IDM2MCwgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVGYWxzZSgpIHtcclxuICAgICAgICAvL+iKgueCueaKluWKqFxyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuT05fQ0xJQ0tfSVRFTSwgZmFsc2UpO1xyXG4gICAgICAgIGxldCBwb3NYID0gTnVtYmVyKHRoaXMubm9kZS54KTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMSwgeyB4OiBwb3NYICsgMTAgfSkudG8oMC4xLCB7IHg6IHBvc1ggLSAxMCB9KS50bygwLjEsIHsgeDogcG9zWCArIDEwIH0pLnRvKDAuMSwgeyB4OiBwb3NYIC0gMTAgfSkudG8oMC4xLCB7IHg6IHBvc1ggfSkuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=