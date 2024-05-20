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
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var Tools_1 = require("../../../../frame/scripts/Utils/Tools");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
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
        _this.role = null;
        _this.roleKaixin = null;
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
        UIHelp_1.UIHelp.closeMask();
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.enableClick = true;
        this.configData = EditorManager_1.EditorManager.editorData.itemData;
        var curStep = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep;
        var isClickStart = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isClickStart;
        this.startLayer.active = !isClickStart;
        var typeName = ["平行线", "垂直", "直角", "锐角", "钝角"];
        var title = "找出含有" + typeName[this.configData[curStep].type] + "的物品" + this.configData[curStep].count + "个";
        this.title.string = title;
        this.secondLayerLabel.string = title;
        this.wrongTime.getComponent(cc.Label).string = "-" + EditorManager_1.EditorManager.editorData.wrongTime.toString();
        this.wrongTime.active = false;
        this.initAllItem();
        this.setCountdownLabel();
        this.roleKaixin.node.active = false;
        this.role.node.active = true;
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
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isClickStart = true;
        this.startLayer.active = false;
        this.endLayer.active = false;
        this.endLayer2.active = false;
        this.firstLayer.active = true;
        this.showStartLayerAni();
        // this.scheduleOnce(() => {
        //     this.firstLayer.active = false;
        //     this.secondLayer.active = true;
        //     this.scheduleOnce(() => {
        //         this.secondLayer.active = false;
        //         this.startCountdown();
        //     }, 1);
        // }, 1);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.countdown = EditorManager_1.EditorManager.editorData.countdown;
    };
    GameLayer.prototype.showStartLayerAni = function () {
        var _this = this;
        var dialog = this.firstLayer.getChildByName("dialog");
        Tools_1.Tools.playSpine(dialog.getComponent(sp.Skeleton), "danchuang", false, function () {
        });
        SoundManager_1.SoundManager.playEffect("飞碟抢走了大家的东西，我们去把它们找回来", false, false, false, function () {
            Tools_1.Tools.playSpine(dialog.getComponent(sp.Skeleton), "suohui", false, function () {
                _this.role.node.position = cc.v3(-284.681, -297.431);
                _this.role.node.scale = 0.3;
                Tools_1.Tools.playSpine(_this.role, "danjun_shuohua2", true);
                _this.firstLayer.active = false;
                _this.secondLayer.active = true;
                var secondLayerText = _this.secondLayer.getChildByName("text");
                secondLayerText.scale = 0;
                cc.tween(secondLayerText).to(0.2, { scale: 1.2 }).to(0.2, { scale: 1 }).start();
                SoundManager_1.SoundManager.playEffect("找出含有", false, false, false, function () {
                    var typeName = ["平行线", "垂直", "直角", "锐角", "钝角"];
                    SoundManager_1.SoundManager.playEffect(typeName[_this.configData[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep].type], false, false, false, function () {
                        SoundManager_1.SoundManager.playEffect("的物品", false, false, false, function () {
                            if (_this.configData[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep].count < 10) {
                                SoundManager_1.SoundManager.playEffect((_this.configData[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep].count).toString(), false, false, false, function () {
                                    SoundManager_1.SoundManager.playEffect("个", false, false, false, function () {
                                        cc.tween(secondLayerText).to(0.3, { scale: 0 }).call(function () {
                                            _this.secondLayer.active = false;
                                            cc.tween(_this.role.node).to(0.5, { position: cc.v3(-792.218, -560.198), scale: 0.2 }).start();
                                            _this.startCountdown();
                                        }).start();
                                    });
                                });
                            }
                            else {
                                _this.secondLayer.active = false;
                                _this.startCountdown();
                            }
                        });
                    });
                });
            });
        });
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
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.countdown <= 0) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.countdown = 0;
        }
        var min = Math.floor(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.countdown / 60);
        var sec = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.countdown % 60;
        var minStr = min < 10 ? '0' + min : min;
        var secStr = sec < 10 ? '0' + sec : sec;
        this.countdown.string = minStr + ':' + secStr;
    };
    GameLayer.prototype.timeUp = function () {
        this.unscheduleAllCallbacks();
        this.endLayer2.active = true;
        SoundManager_1.SoundManager.playEffect("你没有找回所有的物品哦", false, true, false, function () { });
    };
    GameLayer.prototype.onHandleClick = function (isTrue) {
        var _this = this;
        if (isTrue) {
            var curHideItem = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curHideItem;
            if (this.configData[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep].count == curHideItem.length) {
                UIHelp_1.UIHelp.showMask();
                this.scheduleOnce(function () {
                    UIHelp_1.UIHelp.closeMask();
                    _this.handleAllFind();
                }, 1.5);
            }
            this.roleKaixin.node.active = true;
            this.role.node.active = false;
            Tools_1.Tools.playSpine(this.roleKaixin, "danjun_kaixin", false, function () {
                _this.roleKaixin.node.active = false;
                _this.role.node.active = true;
            });
        }
        else {
            this.wrongTime.active = true;
            this.wrongTime.y = 490;
            var posX = Number(this.countdown.node.parent.x);
            cc.tween(this.countdown.node.parent).to(0.1, { x: posX + 10 }).to(0.1, { x: posX - 10 }).to(0.1, { x: posX + 10 }).to(0.1, { x: posX - 10 }).to(0.1, { x: posX }).start();
            cc.tween(this.wrongTime).to(0.5, { y: 600 }).call(function () {
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.countdown = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.countdown - EditorManager_1.EditorManager.editorData.wrongTime + 1;
            }).start();
            this.roleKaixin.node.active = true;
            this.role.node.active = false;
            Tools_1.Tools.playSpine(this.roleKaixin, "danjun_tanqi", false, function () {
                _this.roleKaixin.node.active = false;
                _this.role.node.active = true;
            });
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
        var secondLayerText = this.secondLayer.getChildByName("text");
        secondLayerText.scale = 0;
        cc.tween(secondLayerText).to(0.2, { scale: 1.2 }).to(0.2, { scale: 1 }).start();
        cc.tween(this.role.node).to(0.5, { position: cc.v3(-284.681, -297.431), scale: 0.3 }).start();
        SoundManager_1.SoundManager.playEffect("找出含有", false, false, false, function () {
            var typeName = ["平行线", "垂直", "直角", "锐角", "钝角"];
            SoundManager_1.SoundManager.playEffect(typeName[_this.configData[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep].type], false, false, false, function () {
                SoundManager_1.SoundManager.playEffect("的物品", false, false, false, function () {
                    if (_this.configData[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep].count < 10) {
                        SoundManager_1.SoundManager.playEffect((_this.configData[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curStep].count).toString(), false, false, false, function () {
                            SoundManager_1.SoundManager.playEffect("个", false, false, false, function () {
                                // this.secondLayer.active = false;
                                cc.tween(secondLayerText).to(0.3, { scale: 0 }).call(function () {
                                    _this.secondLayer.active = false;
                                    cc.tween(_this.role.node).to(0.5, { position: cc.v3(-792.218, -560.198), scale: 0.2 }).start();
                                    // this.startCountdown();
                                }).start();
                            });
                        });
                    }
                    else {
                        _this.secondLayer.active = false;
                    }
                });
            });
        });
    };
    GameLayer.prototype.handleGameOver = function () {
        this.scheduleOnce(function () {
            SoundManager_1.SoundManager.playEffect("恭喜你找回所有物品", false, true, false, function () { });
        }, 1);
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
    __decorate([
        property(sp.Skeleton)
    ], GameLayer.prototype, "role", void 0);
    __decorate([
        property(sp.Skeleton)
    ], GameLayer.prototype, "roleKaixin", void 0);
    GameLayer = __decorate([
        ccclass
    ], GameLayer);
    return GameLayer;
}(cc.Component));
exports.default = GameLayer;

cc._RF.pop();