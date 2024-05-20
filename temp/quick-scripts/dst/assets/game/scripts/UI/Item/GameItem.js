
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
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var Tools_1 = require("../../../../frame/scripts/Utils/Tools");
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
        if (!SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.enableClick) {
            return;
        }
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
        else if (type == 3 && this.ruijiao) {
            this.handleTrue();
        }
        else if (type == 4 && this.dunjiao) {
            this.handleTrue();
        }
        else {
            this.handleFalse();
        }
    };
    NewClass.prototype.handleTrue = function () {
        var _this = this;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.enableClick = false;
        var soundName = ["哈找对了", "好眼力", "你真棒"];
        var random = Math.floor(Math.random() * 3);
        SoundManager_1.SoundManager.playEffect(soundName[random], false, true, false, function () {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.enableClick = true;
        });
        for (var i = 0; i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curHideItem.length; i++) {
            if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curHideItem[i] == this.node.name) {
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curHideItem.splice(i, 1);
            }
        }
        for (var i = 0; i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.allHideItem.length; i++) {
            if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.allHideItem[i] == this.node.name) {
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.allHideItem.splice(i, 1);
            }
        }
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curHideItem.push(this.node.name);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.allHideItem.push(this.node.name);
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_CLICK_ITEM, true);
        //节点旋转隐藏
        cc.tween(this.node).to(0.5, { angle: -720, opacity: 0 }).call(function () {
            _this.node.active = false;
        }).start();
        var xiaoshiAni = this.node.parent.parent.getChildByName("xiaoshi");
        xiaoshiAni.active = true;
        xiaoshiAni.position = this.node.position;
        Tools_1.Tools.playSpine(xiaoshiAni.getComponent(sp.Skeleton), "xiaoshi", false, function () {
            xiaoshiAni.active = false;
        });
    };
    NewClass.prototype.handleFalse = function () {
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.enableClick = false;
        this.node.parent.parent.getChildByName("xiaoshi").active = false;
        var soundName = ["在想想", "找错咯", "嗯"];
        var random = Math.floor(Math.random() * 3);
        SoundManager_1.SoundManager.playEffect(soundName[random], false, true, false, function () {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.enableClick = true;
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHFGQUFvRjtBQUNwRiwrRUFBOEU7QUFDOUUscUZBQW9GO0FBQ3BGLCtEQUE4RDtBQUM5RCxrREFBaUQ7QUFDakQsNkRBQTREO0FBRXRELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb0ZDO1FBakZXLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixhQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixpQkFBVyxHQUFZLEtBQUssQ0FBQzs7SUF1RXpDLENBQUM7SUFyRVcsMEJBQU8sR0FBZjtRQUNJLElBQUksQ0FBQyxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUU7WUFDM0QsT0FBTztTQUNWO1FBQ0QsSUFBSSxPQUFPLEdBQUcsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBQ25FLElBQUksUUFBUSxHQUFHLDZCQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUNqRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzVCLElBQUksQ0FBQyxVQUFV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UUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFN5bmNEYXRhTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvVG9vbHNcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL0RhdGEvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCB7IEVkaXRvck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vTWFuYWdlci9FZGl0b3JNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gICAgcHJpdmF0ZSBwaW5neGluZzogQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgICBwcml2YXRlIGNodWl6aGk6IEJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gICAgcHJpdmF0ZSB6aGlqaWFvOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoQm9vbGVhbilcclxuICAgIHByaXZhdGUgZHVuamlhbzogQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KEJvb2xlYW4pXHJcbiAgICBwcml2YXRlIHJ1aWppYW86IEJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eShCb29sZWFuKVxyXG4gICAgcHJpdmF0ZSBnYW5yYW94aWFuZzogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgb25DbGljaygpIHtcclxuICAgICAgICBpZiAoIVN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmVuYWJsZUNsaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBsZXQgY3VyU3RlcCA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1clN0ZXA7XHJcbiAgICAgICAgbGV0IGdhbWVEYXRhID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLml0ZW1EYXRhO1xyXG4gICAgICAgIGxldCB0eXBlID0gZ2FtZURhdGFbY3VyU3RlcF0udHlwZTtcclxuICAgICAgICBpZiAodHlwZSA9PSAwICYmIHRoaXMucGluZ3hpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVUcnVlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IDEgJiYgdGhpcy5jaHVpemhpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJ1ZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAyICYmIHRoaXMuemhpamlhbykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRydWUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gMyAmJiB0aGlzLnJ1aWppYW8pIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVUcnVlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IDQgJiYgdGhpcy5kdW5qaWFvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJ1ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRmFsc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVUcnVlKCkge1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmVuYWJsZUNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNvdW5kTmFtZSA9IFtcIuWTiOaJvuWvueS6hlwiLCBcIuWlveecvOWKm1wiLCBcIuS9oOecn+ajklwiXTtcclxuICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3Qoc291bmROYW1lW3JhbmRvbV0sIGZhbHNlLCB0cnVlLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5lbmFibGVDbGljayA9IHRydWU7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VySGlkZUl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckhpZGVJdGVtW2ldID09IHRoaXMubm9kZS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJIaWRlSXRlbS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbGxIaWRlSXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuYWxsSGlkZUl0ZW1baV0gPT0gdGhpcy5ub2RlLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFsbEhpZGVJdGVtLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJIaWRlSXRlbS5wdXNoKHRoaXMubm9kZS5uYW1lKTtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbGxIaWRlSXRlbS5wdXNoKHRoaXMubm9kZS5uYW1lKTtcclxuXHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5PTl9DTElDS19JVEVNLCB0cnVlKTtcclxuICAgICAgICAvL+iKgueCueaXi+i9rOmakOiXj1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC41LCB7IGFuZ2xlOiAtNzIwLCBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbGV0IHhpYW9zaGlBbmkgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcInhpYW9zaGlcIik7XHJcbiAgICAgICAgeGlhb3NoaUFuaS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHhpYW9zaGlBbmkucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgVG9vbHMucGxheVNwaW5lKHhpYW9zaGlBbmkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJ4aWFvc2hpXCIsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHhpYW9zaGlBbmkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVGYWxzZSgpIHtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5lbmFibGVDbGljayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQucGFyZW50LmdldENoaWxkQnlOYW1lKFwieGlhb3NoaVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgc291bmROYW1lID0gW1wi5Zyo5oOz5oOzXCIsIFwi5om+6ZSZ5ZKvXCIsIFwi5ZevXCJdO1xyXG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChzb3VuZE5hbWVbcmFuZG9tXSwgZmFsc2UsIHRydWUsIGZhbHNlLCAoKSA9PiB7IFxyXG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5lbmFibGVDbGljayA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/oioLngrnmipbliqhcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLk9OX0NMSUNLX0lURU0sIGZhbHNlKTtcclxuICAgICAgICBsZXQgcG9zWCA9IE51bWJlcih0aGlzLm5vZGUueCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjEsIHsgeDogcG9zWCArIDEwIH0pLnRvKDAuMSwgeyB4OiBwb3NYIC0gMTAgfSkudG8oMC4xLCB7IHg6IHBvc1ggKyAxMCB9KS50bygwLjEsIHsgeDogcG9zWCAtIDEwIH0pLnRvKDAuMSwgeyB4OiBwb3NYIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19