"use strict";
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