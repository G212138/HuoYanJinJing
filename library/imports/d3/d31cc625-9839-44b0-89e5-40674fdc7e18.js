"use strict";
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