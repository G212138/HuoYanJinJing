
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/layer/GameLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '947c756X4FGkphYsPImDeJ3', 'GameLayer');
// game/scripts/UI/layer/GameLayer.ts

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
var GameLayer = /** @class */ (function (_super) {
    __extends(GameLayer, _super);
    function GameLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startLayer = null;
        _this.endLayer = null;
        _this.endLayer2 = null;
        _this.firstLayer = null;
        _this.secondLayer = null;
        _this.title = null;
        _this.countdown = null;
        _this.secondLayerLabel = null;
        _this.itemPanel = null;
        _this.wrongTime = null;
        _this.configData = null;
        return _this;
    }
    GameLayer.prototype.start = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ON_CLICK_ITEM, this.onHandleClick, this);
    };
    GameLayer.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ON_CLICK_ITEM, this.onHandleClick, this);
    };
    GameLayer.prototype.init = function () {
        this.configData = EditorManager_1.EditorManager.editorData.itemData;
        var curStep = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep;
        var isClickStart = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isClickStart;
        this.startLayer.active = !isClickStart;
        var typeName = ["平行", "垂直", "直角", "锐角", "钝角"];
        var title = "找出含有" + typeName[this.configData[curStep].type] + "的物品" + this.configData[curStep].count + "个";
        this.title.string = title;
        this.secondLayerLabel.string = title;
        this.wrongTime.getComponent(cc.Label).string = "-" + EditorManager_1.EditorManager.editorData.wrongTime.toString();
        this.wrongTime.active = false;
        this.initAllItem();
        this.setCountdownLabel();
    };
    GameLayer.prototype.initAllItem = function () {
        var allHideItem = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.allHideItem;
        this.itemPanel.children.forEach(function (item) {
            item.active = true;
            item.opacity = 255;
            item.angle = 0;
            if (allHideItem.indexOf(item.name) != -1) {
                console.log("item.name");
                item.active = false;
            }
        });
    };
    GameLayer.prototype.onClickStart = function () {
        var _this = this;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isClickStart = true;
        this.startLayer.active = false;
        this.endLayer.active = false;
        this.endLayer2.active = false;
        this.firstLayer.active = true;
        this.scheduleOnce(function () {
            _this.firstLayer.active = false;
            _this.secondLayer.active = true;
            _this.scheduleOnce(function () {
                _this.secondLayer.active = false;
                _this.startCountdown();
            }, 1);
        }, 1);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.countdown = EditorManager_1.EditorManager.editorData.countdown;
    };
    GameLayer.prototype.startCountdown = function () {
        var _this = this;
        var countdown = Number(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.countdown);
        this.schedule(function () {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.countdown--;
            _this.setCountdownLabel();
            if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.countdown <= 0) {
                _this.timeUp();
            }
        }, 1, countdown);
    };
    GameLayer.prototype.setCountdownLabel = function () {
        var min = Math.floor(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.countdown / 60);
        var sec = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.countdown % 60;
        var minStr = min < 10 ? '0' + min : min;
        var secStr = sec < 10 ? '0' + sec : sec;
        this.countdown.string = minStr + ':' + secStr;
    };
    GameLayer.prototype.timeUp = function () {
        this.endLayer2.active = true;
    };
    GameLayer.prototype.onHandleClick = function (isTrue) {
        if (isTrue) {
            var curHideItem = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curHideItem;
            console.log("curHideItem", curHideItem);
            if (this.configData[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep].count == curHideItem.length) {
                this.handleAllFind();
            }
        }
        else {
            this.wrongTime.active = true;
            this.wrongTime.y = 490;
            var posX = Number(this.countdown.node.parent.x);
            cc.tween(this.countdown.node.parent).to(0.1, { x: posX + 10 }).to(0.1, { x: posX - 10 }).to(0.1, { x: posX + 10 }).to(0.1, { x: posX - 10 }).to(0.1, { x: posX }).start();
            cc.tween(this.wrongTime).to(0.5, { y: 600 }).call(function () {
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.countdown = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.countdown - EditorManager_1.EditorManager.editorData.wrongTime;
            }).start();
        }
    };
    GameLayer.prototype.handleAllFind = function () {
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep == this.configData.length - 1) {
            this.handleGameOver();
        }
        else {
            this.handleNextStep();
        }
    };
    GameLayer.prototype.handleNextStep = function () {
        var _this = this;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curHideItem = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep++;
        this.init();
        this.secondLayer.active = true;
        this.scheduleOnce(function () {
            _this.secondLayer.active = false;
        }, 1);
    };
    GameLayer.prototype.handleGameOver = function () {
        this.endLayer.active = true;
        this.unscheduleAllCallbacks();
    };
    GameLayer.prototype.ocClickReplay = function () {
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep = 0;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isClickStart = false;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.countdown = EditorManager_1.EditorManager.editorData.countdown;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curHideItem = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.allHideItem = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answerTimes++;
        this.init();
    };
    GameLayer.prototype.onClickGameOver = function () {
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.REPORT_RIGHT, true);
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
    };
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "startLayer", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "endLayer", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "endLayer2", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "firstLayer", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "secondLayer", void 0);
    __decorate([
        property(cc.Label)
    ], GameLayer.prototype, "title", void 0);
    __decorate([
        property(cc.Label)
    ], GameLayer.prototype, "countdown", void 0);
    __decorate([
        property(cc.Label)
    ], GameLayer.prototype, "secondLayerLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "itemPanel", void 0);
    __decorate([
        property(cc.Node)
    ], GameLayer.prototype, "wrongTime", void 0);
    GameLayer = __decorate([
        ccclass
    ], GameLayer);
    return GameLayer;
}(cc.Component));
exports.default = GameLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXGxheWVyXFxHYW1lTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYscUZBQW9GO0FBQ3BGLHFGQUFvRjtBQUVwRixrREFBaUQ7QUFDakQsNkRBQTREO0FBRXRELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBOEpDO1FBM0pXLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0Isc0JBQWdCLEdBQWEsSUFBSSxDQUFDO1FBRWxDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFHLElBQUksQ0FBQzs7SUF1STlCLENBQUM7SUF0SUcseUJBQUssR0FBTDtRQUNJLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSxpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFTSx3QkFB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UUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2tCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ1k7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDZ0I7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDdUI7SUFFMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDZ0I7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDZ0I7SUFyQmpCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0E4SjdCO0lBQUQsZ0JBQUM7Q0E5SkQsQUE4SkMsQ0E5SnNDLEVBQUUsQ0FBQyxTQUFTLEdBOEpsRDtrQkE5Sm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDdXN0b21TeW5jRGF0YSB9IGZyb20gXCIuLi8uLi9EYXRhL0N1c3RvbVN5bmNEYXRhXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL01hbmFnZXIvRWRpdG9yTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVMYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHN0YXJ0TGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGVuZExheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBlbmRMYXllcjI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGZpcnN0TGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHNlY29uZExheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgdGl0bGU6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgY291bnRkb3duOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHNlY29uZExheWVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBpdGVtUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHdyb25nVGltZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25maWdEYXRhID0gbnVsbDtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuT05fQ0xJQ0tfSVRFTSwgdGhpcy5vbkhhbmRsZUNsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuT05fQ0xJQ0tfSVRFTSwgdGhpcy5vbkhhbmRsZUNsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ0RhdGEgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXRlbURhdGE7XHJcbiAgICAgICAgbGV0IGN1clN0ZXAgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJTdGVwO1xyXG4gICAgICAgIGxldCBpc0NsaWNrU3RhcnQgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5pc0NsaWNrU3RhcnQ7XHJcbiAgICAgICAgdGhpcy5zdGFydExheWVyLmFjdGl2ZSA9ICFpc0NsaWNrU3RhcnQ7XHJcblxyXG4gICAgICAgIGxldCB0eXBlTmFtZSA9IFtcIuW5s+ihjFwiLCBcIuWeguebtFwiLCBcIuebtOinklwiLCBcIumUkOinklwiLCBcIumSneinklwiXVxyXG4gICAgICAgIGxldCB0aXRsZSA9IFwi5om+5Ye65ZCr5pyJXCIgKyB0eXBlTmFtZVt0aGlzLmNvbmZpZ0RhdGFbY3VyU3RlcF0udHlwZV0gKyBcIueahOeJqeWTgVwiICsgdGhpcy5jb25maWdEYXRhW2N1clN0ZXBdLmNvdW50ICsgXCLkuKpcIjtcclxuICAgICAgICB0aGlzLnRpdGxlLnN0cmluZyA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kTGF5ZXJMYWJlbC5zdHJpbmcgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLndyb25nVGltZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLVwiICsgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLndyb25nVGltZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMud3JvbmdUaW1lLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5pdEFsbEl0ZW0oKTtcclxuICAgICAgICB0aGlzLnNldENvdW50ZG93bkxhYmVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0QWxsSXRlbSgpIHtcclxuICAgICAgICBsZXQgYWxsSGlkZUl0ZW0gPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbGxIaWRlSXRlbTtcclxuICAgICAgICB0aGlzLml0ZW1QYW5lbC5jaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaXRlbS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICBpdGVtLmFuZ2xlID0gMDtcclxuICAgICAgICAgICAgaWYgKGFsbEhpZGVJdGVtLmluZGV4T2YoaXRlbS5uYW1lKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpdGVtLm5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrU3RhcnQoKSB7XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuaXNDbGlja1N0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0YXJ0TGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbmRMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVuZExheWVyMi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZpcnN0TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZWNvbmRMYXllci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY29uZExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydENvdW50ZG93bigpO1xyXG4gICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICB9LCAxKTtcclxuXHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnRkb3duID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmNvdW50ZG93bjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0Q291bnRkb3duKCkge1xyXG4gICAgICAgIGxldCBjb3VudGRvd24gPSBOdW1iZXIoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnRkb3duKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnRkb3duLS07XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q291bnRkb3duTGFiZWwoKTtcclxuICAgICAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50ZG93biA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVVcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSwgY291bnRkb3duKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldENvdW50ZG93bkxhYmVsKCkge1xyXG4gICAgICAgIGxldCBtaW4gPSBNYXRoLmZsb29yKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50ZG93biAvIDYwKTtcclxuICAgICAgICBsZXQgc2VjID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnRkb3duICUgNjA7XHJcbiAgICAgICAgbGV0IG1pblN0ciA9IG1pbiA8IDEwID8gJzAnICsgbWluIDogbWluO1xyXG4gICAgICAgIGxldCBzZWNTdHIgPSBzZWMgPCAxMCA/ICcwJyArIHNlYyA6IHNlYztcclxuICAgICAgICB0aGlzLmNvdW50ZG93bi5zdHJpbmcgPSBtaW5TdHIgKyAnOicgKyBzZWNTdHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lVXAoKSB7XHJcbiAgICAgICAgdGhpcy5lbmRMYXllcjIuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uSGFuZGxlQ2xpY2soaXNUcnVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKGlzVHJ1ZSkge1xyXG4gICAgICAgICAgICBsZXQgY3VySGlkZUl0ZW0gPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJIaWRlSXRlbTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJIaWRlSXRlbVwiLCBjdXJIaWRlSXRlbSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZ0RhdGFbU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyU3RlcF0uY291bnQgPT0gY3VySGlkZUl0ZW0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUFsbEZpbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JvbmdUaW1lLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMud3JvbmdUaW1lLnkgPSA0OTA7XHJcbiAgICAgICAgICAgIGxldCBwb3NYID0gTnVtYmVyKHRoaXMuY291bnRkb3duLm5vZGUucGFyZW50LngpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNvdW50ZG93bi5ub2RlLnBhcmVudCkudG8oMC4xLCB7IHg6IHBvc1ggKyAxMCB9KS50bygwLjEsIHsgeDogcG9zWCAtIDEwIH0pLnRvKDAuMSwgeyB4OiBwb3NYICsgMTAgfSkudG8oMC4xLCB7IHg6IHBvc1ggLSAxMCB9KS50bygwLjEsIHsgeDogcG9zWCB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLndyb25nVGltZSkudG8oMC41LCB7IHk6IDYwMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50ZG93biA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50ZG93biAtIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS53cm9uZ1RpbWU7XHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQWxsRmluZCgpIHtcclxuICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyU3RlcCA9PSB0aGlzLmNvbmZpZ0RhdGEubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUdhbWVPdmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXh0U3RlcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZU5leHRTdGVwKCkge1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckhpZGVJdGVtID0gW107XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyU3RlcCsrO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVHYW1lT3ZlcigpIHtcclxuICAgICAgICB0aGlzLmVuZExheWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvY0NsaWNrUmVwbGF5KCkge1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1clN0ZXAgPSAwO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzQ2xpY2tTdGFydCA9IGZhbHNlO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50ZG93biA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5jb3VudGRvd247XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VySGlkZUl0ZW0gPSBbXTtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbGxIaWRlSXRlbSA9IFtdO1xyXG5cclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbnN3ZXJUaW1lcysrO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja0dhbWVPdmVyKCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuUkVQT1JUX1JJR0hULCB0cnVlKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkdBTUVfT1ZFUik7XHJcbiAgICB9XHJcbn1cclxuIl19