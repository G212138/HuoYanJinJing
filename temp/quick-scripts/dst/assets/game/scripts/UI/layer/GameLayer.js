
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXGxheWVyXFxHYW1lTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYscUZBQW9GO0FBQ3BGLCtFQUE4RTtBQUM5RSxxRkFBb0Y7QUFDcEYsK0RBQThEO0FBQzlELGlFQUFnRTtBQUVoRSxrREFBaUQ7QUFDakQsNkRBQTREO0FBRXRELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBK1BDO1FBNVBXLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0Isc0JBQWdCLEdBQWEsSUFBSSxDQUFDO1FBRWxDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQWdCLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFFL0IsZ0JBQVUsR0FBRyxJQUFJLENBQUM7O0lBb085QixDQUFDO0lBbk9HLHlCQUFLLEdBQUw7UUFDSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksaUNB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QUFFLENBQUMsS0FBSyxDQUFDO2dEQUNnQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUN1QjtJQUUxQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNnQjtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNnQjtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzJDQUNXO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7aURBQ2lCO0lBekJ0QixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBK1A3QjtJQUFELGdCQUFDO0NBL1BELEFBK1BDLENBL1BzQyxFQUFFLENBQUMsU0FBUyxHQStQbEQ7a0JBL1BvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9Tb3VuZE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU3luY0RhdGFNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9TeW5jRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9Ub29sc1wiO1xyXG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9VSUhlbHBcIjtcclxuaW1wb3J0IHsgQ3VzdG9tU3luY0RhdGEgfSBmcm9tIFwiLi4vLi4vRGF0YS9DdXN0b21TeW5jRGF0YVwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vRGF0YS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gXCIuLi8uLi9NYW5hZ2VyL0VkaXRvck1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBzdGFydExheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBlbmRMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZW5kTGF5ZXIyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBmaXJzdExheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBzZWNvbmRMYXllcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHRpdGxlOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGNvdW50ZG93bjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBzZWNvbmRMYXllckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgaXRlbVBhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSB3cm9uZ1RpbWU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgcHJpdmF0ZSByb2xlOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBwcml2YXRlIHJvbGVLYWl4aW46IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNvbmZpZ0RhdGEgPSBudWxsO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5PTl9DTElDS19JVEVNLCB0aGlzLm9uSGFuZGxlQ2xpY2ssIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5PTl9DTElDS19JVEVNLCB0aGlzLm9uSGFuZGxlQ2xpY2ssIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIFVJSGVscC5jbG9zZU1hc2soKTtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5lbmFibGVDbGljayA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jb25maWdEYXRhID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLml0ZW1EYXRhO1xyXG4gICAgICAgIGxldCBjdXJTdGVwID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyU3RlcDtcclxuICAgICAgICBsZXQgaXNDbGlja1N0YXJ0ID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuaXNDbGlja1N0YXJ0O1xyXG4gICAgICAgIHRoaXMuc3RhcnRMYXllci5hY3RpdmUgPSAhaXNDbGlja1N0YXJ0O1xyXG5cclxuICAgICAgICBsZXQgdHlwZU5hbWUgPSBbXCLlubPooYznur9cIiwgXCLlnoLnm7RcIiwgXCLnm7Top5JcIiwgXCLplJDop5JcIiwgXCLpkp3op5JcIl1cclxuICAgICAgICBsZXQgdGl0bGUgPSBcIuaJvuWHuuWQq+aciVwiICsgdHlwZU5hbWVbdGhpcy5jb25maWdEYXRhW2N1clN0ZXBdLnR5cGVdICsgXCLnmoTnianlk4FcIiArIHRoaXMuY29uZmlnRGF0YVtjdXJTdGVwXS5jb3VudCArIFwi5LiqXCI7XHJcbiAgICAgICAgdGhpcy50aXRsZS5zdHJpbmcgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnNlY29uZExheWVyTGFiZWwuc3RyaW5nID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy53cm9uZ1RpbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIi1cIiArIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS53cm9uZ1RpbWUudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLndyb25nVGltZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXRBbGxJdGVtKCk7XHJcbiAgICAgICAgdGhpcy5zZXRDb3VudGRvd25MYWJlbCgpO1xyXG4gICAgICAgIHRoaXMucm9sZUthaXhpbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucm9sZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0QWxsSXRlbSgpIHtcclxuICAgICAgICBsZXQgYWxsSGlkZUl0ZW0gPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbGxIaWRlSXRlbTtcclxuICAgICAgICB0aGlzLml0ZW1QYW5lbC5jaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaXRlbS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICBpdGVtLmFuZ2xlID0gMDtcclxuICAgICAgICAgICAgaWYgKGFsbEhpZGVJdGVtLmluZGV4T2YoaXRlbS5uYW1lKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpdGVtLm5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrU3RhcnQoKSB7XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuaXNDbGlja1N0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0YXJ0TGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbmRMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVuZExheWVyMi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZpcnN0TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNob3dTdGFydExheWVyQW5pKCk7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmZpcnN0TGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2Vjb25kTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZWNvbmRMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc3RhcnRDb3VudGRvd24oKTtcclxuICAgICAgICAvLyAgICAgfSwgMSk7XHJcbiAgICAgICAgLy8gfSwgMSk7XHJcblxyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50ZG93biA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5jb3VudGRvd247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93U3RhcnRMYXllckFuaSgpIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5maXJzdExheWVyLmdldENoaWxkQnlOYW1lKFwiZGlhbG9nXCIpO1xyXG4gICAgICAgIFRvb2xzLnBsYXlTcGluZShkaWFsb2cuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJkYW5jaHVhbmdcIiwgZmFsc2UsICgpID0+IHtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLpo57nop/miqLotbDkuoblpKflrrbnmoTkuJzopb/vvIzmiJHku6zljrvmiorlroPku6zmib7lm57mnaVcIiwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBUb29scy5wbGF5U3BpbmUoZGlhbG9nLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwic3VvaHVpXCIsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGUubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC0yODQuNjgxLCAtMjk3LjQzMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGUubm9kZS5zY2FsZSA9IDAuMztcclxuICAgICAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLnJvbGUsIFwiZGFuanVuX3NodW9odWEyXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWNvbmRMYXllci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlY29uZExheWVyVGV4dCA9IHRoaXMuc2Vjb25kTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kTGF5ZXJUZXh0LnNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHNlY29uZExheWVyVGV4dCkudG8oMC4yLCB7IHNjYWxlOiAxLjIgfSkudG8oMC4yLCB7IHNjYWxlOiAxIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuaJvuWHuuWQq+aciVwiLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGVOYW1lOiBzdHJpbmdbXSA9IFtcIuW5s+ihjOe6v1wiLCBcIuWeguebtFwiLCBcIuebtOinklwiLCBcIumUkOinklwiLCBcIumSneinklwiXTtcclxuICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdCh0eXBlTmFtZVt0aGlzLmNvbmZpZ0RhdGFbU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyU3RlcF0udHlwZV0sIGZhbHNlLCBmYWxzZSwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLnmoTnianlk4FcIiwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnRGF0YVtTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJTdGVwXS5jb3VudCA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoKHRoaXMuY29uZmlnRGF0YVtTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJTdGVwXS5jb3VudCkudG9TdHJpbmcoKSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuS4qlwiLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihzZWNvbmRMYXllclRleHQpLnRvKDAuMywgeyBzY2FsZTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlY29uZExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucm9sZS5ub2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKC03OTIuMjE4LCAtNTYwLjE5OCksIHNjYWxlOiAwLjIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q291bnRkb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWNvbmRMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q291bnRkb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0Q291bnRkb3duKCkge1xyXG4gICAgICAgIGxldCBjb3VudGRvd24gPSBOdW1iZXIoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnRkb3duKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY291bnRkb3duLS07XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q291bnRkb3duTGFiZWwoKTtcclxuICAgICAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50ZG93biA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVVcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSwgY291bnRkb3duKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldENvdW50ZG93bkxhYmVsKCkge1xyXG4gICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudGRvd24gPD0gMCkge1xyXG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudGRvd24gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWluID0gTWF0aC5mbG9vcihTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudGRvd24gLyA2MCk7XHJcbiAgICAgICAgbGV0IHNlYyA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50ZG93biAlIDYwO1xyXG4gICAgICAgIGxldCBtaW5TdHIgPSBtaW4gPCAxMCA/ICcwJyArIG1pbiA6IG1pbjtcclxuICAgICAgICBsZXQgc2VjU3RyID0gc2VjIDwgMTAgPyAnMCcgKyBzZWMgOiBzZWM7XHJcbiAgICAgICAgdGhpcy5jb3VudGRvd24uc3RyaW5nID0gbWluU3RyICsgJzonICsgc2VjU3RyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdGltZVVwKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIHRoaXMuZW5kTGF5ZXIyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLkvaDmsqHmnInmib7lm57miYDmnInnmoTnianlk4Hlk6ZcIiwgZmFsc2UsIHRydWUsIGZhbHNlLCAoKSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25IYW5kbGVDbGljayhpc1RydWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoaXNUcnVlKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJIaWRlSXRlbSA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckhpZGVJdGVtO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWdEYXRhW1N5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1clN0ZXBdLmNvdW50ID09IGN1ckhpZGVJdGVtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgVUlIZWxwLnNob3dNYXNrKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVUlIZWxwLmNsb3NlTWFzaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWxsRmluZCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMS41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJvbGVLYWl4aW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJvbGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMucm9sZUthaXhpbiwgXCJkYW5qdW5fa2FpeGluXCIsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVLYWl4aW4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9sZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JvbmdUaW1lLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMud3JvbmdUaW1lLnkgPSA0OTA7XHJcbiAgICAgICAgICAgIGxldCBwb3NYID0gTnVtYmVyKHRoaXMuY291bnRkb3duLm5vZGUucGFyZW50LngpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNvdW50ZG93bi5ub2RlLnBhcmVudCkudG8oMC4xLCB7IHg6IHBvc1ggKyAxMCB9KS50bygwLjEsIHsgeDogcG9zWCAtIDEwIH0pLnRvKDAuMSwgeyB4OiBwb3NYICsgMTAgfSkudG8oMC4xLCB7IHg6IHBvc1ggLSAxMCB9KS50bygwLjEsIHsgeDogcG9zWCB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLndyb25nVGltZSkudG8oMC41LCB7IHk6IDYwMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50ZG93biA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmNvdW50ZG93biAtIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS53cm9uZ1RpbWUgKyAxO1xyXG4gICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJvbGVLYWl4aW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJvbGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMucm9sZUthaXhpbiwgXCJkYW5qdW5fdGFucWlcIiwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9sZUthaXhpbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQWxsRmluZCgpIHtcclxuICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyU3RlcCA9PSB0aGlzLmNvbmZpZ0RhdGEubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUdhbWVPdmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXh0U3RlcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZU5leHRTdGVwKCkge1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckhpZGVJdGVtID0gW107XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyU3RlcCsrO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc2Vjb25kTGF5ZXJUZXh0ID0gdGhpcy5zZWNvbmRMYXllci5nZXRDaGlsZEJ5TmFtZShcInRleHRcIik7XHJcbiAgICAgICAgc2Vjb25kTGF5ZXJUZXh0LnNjYWxlID0gMDtcclxuICAgICAgICBjYy50d2VlbihzZWNvbmRMYXllclRleHQpLnRvKDAuMiwgeyBzY2FsZTogMS4yIH0pLnRvKDAuMiwgeyBzY2FsZTogMSB9KS5zdGFydCgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucm9sZS5ub2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKC0yODQuNjgxLCAtMjk3LjQzMSksIHNjYWxlOiAwLjMgfSkuc3RhcnQoKTtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuaJvuWHuuWQq+aciVwiLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0eXBlTmFtZTogc3RyaW5nW10gPSBbXCLlubPooYznur9cIiwgXCLlnoLnm7RcIiwgXCLnm7Top5JcIiwgXCLplJDop5JcIiwgXCLpkp3op5JcIl07XHJcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KHR5cGVOYW1lW3RoaXMuY29uZmlnRGF0YVtTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJTdGVwXS50eXBlXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLnmoTnianlk4FcIiwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZ0RhdGFbU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyU3RlcF0uY291bnQgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdCgodGhpcy5jb25maWdEYXRhW1N5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1clN0ZXBdLmNvdW50KS50b1N0cmluZygpLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuS4qlwiLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZWNvbmRMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oc2Vjb25kTGF5ZXJUZXh0KS50bygwLjMsIHsgc2NhbGU6IDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucm9sZS5ub2RlKS50bygwLjUsIHsgcG9zaXRpb246IGNjLnYzKC03OTIuMjE4LCAtNTYwLjE5OCksIHNjYWxlOiAwLjIgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zdGFydENvdW50ZG93bigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWNvbmRMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlR2FtZU92ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuaBreWWnOS9oOaJvuWbnuaJgOacieeJqeWTgVwiLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsICgpID0+IHsgfSk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgdGhpcy5lbmRMYXllci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb2NDbGlja1JlcGxheSgpIHtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJTdGVwID0gMDtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5pc0NsaWNrU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jb3VudGRvd24gPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuY291bnRkb3duO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckhpZGVJdGVtID0gW107XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuYWxsSGlkZUl0ZW0gPSBbXTtcclxuXHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuYW5zd2VyVGltZXMrKztcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tHYW1lT3ZlcigpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLlJFUE9SVF9SSUdIVCwgdHJ1ZSk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX09WRVIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==