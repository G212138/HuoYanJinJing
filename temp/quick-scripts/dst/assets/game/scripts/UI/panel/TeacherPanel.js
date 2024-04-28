
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70c27EBmWdPJYtgMQ9dyPZS', 'TeacherPanel');
// game/scripts/UI/panel/TeacherPanel.ts

"use strict";
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
var FrameMsgType_1 = require("../../../../frame/scripts/Data/FrameMsgType");
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var UIManager_1 = require("../../../../frame/scripts/Manager/UIManager");
var BaseTeacherPanel_1 = require("../../../../frame/scripts/UI/Panel/BaseTeacherPanel");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var EditorManager_1 = require("../../Manager/EditorManager");
var ConfigItem_1 = require("../Item/ConfigItem");
var GamePanel_1 = require("./GamePanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TeacherPanel = /** @class */ (function (_super) {
    __extends(TeacherPanel, _super);
    function TeacherPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggle_stars = null;
        _this.toggle_replay = null;
        _this.toggle_titleAudio = null;
        _this.countdown = null;
        _this.wrongTime = null;
        _this.configItem = null;
        _this.configPanel = null;
        _this._btn_save = null;
        _this._btn_view = null;
        /**
         * 设置界面（这里已经拿到了网络请求数据）
         */
        _this.gameData = "";
        return _this;
    }
    TeacherPanel.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TeacherPanel.prototype.start = function () {
        _super.prototype.start.call(this);
        // 可编辑的游戏，不展示保存按钮
        var isEdit = EditorManager_1.EditorManager.isSupportEdit();
        if (this._btn_save) {
            this._btn_save.active = !isEdit;
        }
        this._btn_save.active = true;
    };
    TeacherPanel.prototype.setPanel = function () {
        _super.prototype.setPanel.call(this);
        this.toggle_stars.toggleItems[EditorManager_1.EditorManager.editorData.isStarCount ? 0 : 1].isChecked = true;
        this.toggle_replay.toggleItems[EditorManager_1.EditorManager.editorData.isReplay ? 0 : 1].isChecked = true;
        this.toggle_titleAudio.toggleItems[EditorManager_1.EditorManager.editorData.isPlayTitle ? 0 : 1].isChecked = true;
        // if (!EditorManager.editorData.GameData || EditorManager.editorData.GameData.length == 0) {
        //     EditorManager.editorData.GameData = JSON.parse(this.gameData);
        // }
        // let level = new OptionData();
        // EditorManager.editorData.GameData = JSON.parse(JSON.stringify(level.titleData));
        // console.log("EditorManager.editorData.GameData", EditorManager.editorData.GameData);
        // this.node_config.getComponent(TeacherConfig).updateOptionPanel();
        this.countdown.string = EditorManager_1.EditorManager.editorData.countdown.toString();
        this.wrongTime.string = EditorManager_1.EditorManager.editorData.wrongTime.toString();
        this.updateItemPanel();
    };
    TeacherPanel.prototype.onEditCountdownChange = function () {
        var count = Number(this.countdown.string);
        if (count < 1 || this.countdown.string == "") {
            count = 1;
        }
        this.countdown.string = count.toString();
        EditorManager_1.EditorManager.editorData.countdown = count;
    };
    TeacherPanel.prototype.onEditWrongTimeChange = function () {
        var count = Number(this.wrongTime.string);
        if (count < 0 || this.wrongTime.string == "") {
            count = 0;
        }
        this.wrongTime.string = count.toString();
        EditorManager_1.EditorManager.editorData.wrongTime = count;
    };
    TeacherPanel.prototype.onClickAdd = function () {
        EditorManager_1.EditorManager.editorData.itemData.push(new EditorManager_1.ItemData());
        this.updateItemPanel();
    };
    TeacherPanel.prototype.updateItemPanel = function () {
        this.configPanel.removeAllChildren();
        for (var i = 0; i < EditorManager_1.EditorManager.editorData.itemData.length; i++) {
            var item = cc.instantiate(this.configItem.node);
            item.parent = this.configPanel;
            item.getComponent(ConfigItem_1.default).init(i);
        }
    };
    // 星级评判开关
    TeacherPanel.prototype.onToggleStar = function (toggle) {
        var index = this.toggle_stars.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isStarCount = 0 === index;
    };
    // 重玩开关
    TeacherPanel.prototype.onToggleReplay = function (toggle) {
        var index = this.toggle_replay.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isReplay = 0 === index;
    };
    // 自动播放题干语音开关
    TeacherPanel.prototype.onToggleTitleAudio = function (toggle) {
        var index = this.toggle_titleAudio.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isPlayTitle = 0 === index;
    };
    // 保存课件按钮
    TeacherPanel.prototype.onBtnSaveClicked = function () {
        if (!this.checkConfig())
            return;
        UIHelp_1.UIHelp.showSubmissionPanel();
        // const isEdit = EditorManager.isSupportEdit();
        // if (!isEdit || ReportManager.isAllOver) {
        //     UIHelp.showSubmissionPanel();
        // } else {
        //     UIHelp.showTip('请先完成一遍题目');
        // }
    };
    // 预览课件按钮
    TeacherPanel.prototype.onBtnViewClicked = function () {
        if (!this.checkConfig())
            return;
        if (-1 === EditorManager_1.EditorManager.getCoursewareLevel() ||
            null === EditorManager_1.EditorManager.getCoursewareLevel() ||
            void 0 === EditorManager_1.EditorManager.getCoursewareLevel()) {
            UIHelp_1.UIHelp.showTip('请先设置coursewareLevel');
        }
        else {
            ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.TEACHER_PANEL_LOADING, true);
            UIManager_1.UIManager.showUI(GamePanel_1.default);
        }
    };
    //检查配置文件是否完整
    TeacherPanel.prototype.checkConfig = function () {
        return true;
    };
    //复制数组
    TeacherPanel.prototype.copyArray = function (arr) {
        return JSON.parse(JSON.stringify(arr));
    };
    TeacherPanel.className = 'TeacherPanel';
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_stars", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_replay", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_titleAudio", void 0);
    __decorate([
        property(cc.EditBox)
    ], TeacherPanel.prototype, "countdown", void 0);
    __decorate([
        property(cc.EditBox)
    ], TeacherPanel.prototype, "wrongTime", void 0);
    __decorate([
        property(ConfigItem_1.default)
    ], TeacherPanel.prototype, "configItem", void 0);
    __decorate([
        property(cc.Node)
    ], TeacherPanel.prototype, "configPanel", void 0);
    TeacherPanel = __decorate([
        ccclass
    ], TeacherPanel);
    return TeacherPanel;
}(BaseTeacherPanel_1.default));
exports.default = TeacherPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxUZWFjaGVyUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQTJFO0FBQzNFLHFGQUFvRjtBQUVwRix5RUFBd0U7QUFDeEUsd0ZBQW1GO0FBRW5GLGlFQUFnRTtBQUNoRSw2REFBc0U7QUFDdEUsaURBQTRDO0FBQzVDLHlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBZ0I7SUFBMUQ7UUFBQSxxRUFvSkM7UUFoSlcsa0JBQVksR0FBdUIsSUFBSSxDQUFDO1FBRXhDLG1CQUFhLEdBQXVCLElBQUksQ0FBQztRQUV6Qyx1QkFBaUIsR0FBdUIsSUFBSSxDQUFDO1FBRzdDLGVBQVMsR0FBZSxJQUFJLENBQUM7UUFFN0IsZUFBUyxHQUFlLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFpQmxDOztXQUVHO1FBQ0ssY0FBUSxHQUFHLEVBQUUsQ0FBQzs7SUE0RzFCLENBQUM7SUE5SEcsNkJBQU0sR0FBTjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0ksaUJBQU0sS0FBSyxXQUFFLENBQUM7UUFFZCxpQkFBaUI7UUFDakIsSUFBTSxNQUFNLEdBQUcsNkJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM3QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsU0FB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cEp5QywwQkFBZ0IsR0FvSnpEO2tCQXBKb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvRGF0YS9GcmFtZU1zZ1R5cGUnO1xuaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBSZXBvcnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1JlcG9ydE1hbmFnZXInO1xuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1VJTWFuYWdlcic7XG5pbXBvcnQgQmFzZVRlYWNoZXJQYW5lbCBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1VJL1BhbmVsL0Jhc2VUZWFjaGVyUGFuZWwnO1xuaW1wb3J0IFN1Ym1pc3Npb25QYW5lbCBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1VJL1BhbmVsL1N1Ym1pc3Npb25QYW5lbCc7XG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1V0aWxzL1VJSGVscCc7XG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyLCBJdGVtRGF0YSB9IGZyb20gJy4uLy4uL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XG5pbXBvcnQgQ29uZmlnSXRlbSBmcm9tICcuLi9JdGVtL0NvbmZpZ0l0ZW0nO1xuaW1wb3J0IEdhbWVQYW5lbCBmcm9tICcuL0dhbWVQYW5lbCc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFjaGVyUGFuZWwgZXh0ZW5kcyBCYXNlVGVhY2hlclBhbmVsIHtcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdUZWFjaGVyUGFuZWwnO1xuXG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcbiAgICBwcml2YXRlIHRvZ2dsZV9zdGFyczogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlQ29udGFpbmVyKVxuICAgIHByaXZhdGUgdG9nZ2xlX3JlcGxheTogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlQ29udGFpbmVyKVxuICAgIHByaXZhdGUgdG9nZ2xlX3RpdGxlQXVkaW86IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIGNvdW50ZG93bjogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgcHJpdmF0ZSB3cm9uZ1RpbWU6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShDb25maWdJdGVtKVxuICAgIHByaXZhdGUgY29uZmlnSXRlbTogQ29uZmlnSXRlbSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBjb25maWdQYW5lbDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9idG5fc2F2ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYnRuX3ZpZXc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICAvLyDlj6/nvJbovpHnmoTmuLjmiI/vvIzkuI3lsZXnpLrkv53lrZjmjInpkq5cbiAgICAgICAgY29uc3QgaXNFZGl0ID0gRWRpdG9yTWFuYWdlci5pc1N1cHBvcnRFZGl0KCk7XG4gICAgICAgIGlmICh0aGlzLl9idG5fc2F2ZSkge1xuICAgICAgICAgICAgdGhpcy5fYnRuX3NhdmUuYWN0aXZlID0gIWlzRWRpdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9idG5fc2F2ZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rueVjOmdou+8iOi/memHjOW3sue7j+aLv+WIsOS6hue9kee7nOivt+axguaVsOaNru+8iVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2FtZURhdGEgPSBcIlwiO1xuICAgIHNldFBhbmVsKCkge1xuICAgICAgICBzdXBlci5zZXRQYW5lbCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZV9zdGFycy50b2dnbGVJdGVtc1tFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNTdGFyQ291bnQgPyAwIDogMV0uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b2dnbGVfcmVwbGF5LnRvZ2dsZUl0ZW1zW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1JlcGxheSA/IDAgOiAxXS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZ2dsZV90aXRsZUF1ZGlvLnRvZ2dsZUl0ZW1zW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1BsYXlUaXRsZSA/IDAgOiAxXS5pc0NoZWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIGlmICghRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLkdhbWVEYXRhIHx8IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5HYW1lRGF0YS5sZW5ndGggPT0gMCkge1xuICAgICAgICAvLyAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLkdhbWVEYXRhID0gSlNPTi5wYXJzZSh0aGlzLmdhbWVEYXRhKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBsZXQgbGV2ZWwgPSBuZXcgT3B0aW9uRGF0YSgpO1xuICAgICAgICAvLyBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuR2FtZURhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGxldmVsLnRpdGxlRGF0YSkpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLkdhbWVEYXRhXCIsIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5HYW1lRGF0YSk7XG5cblxuICAgICAgICAvLyB0aGlzLm5vZGVfY29uZmlnLmdldENvbXBvbmVudChUZWFjaGVyQ29uZmlnKS51cGRhdGVPcHRpb25QYW5lbCgpO1xuXG4gICAgICAgIHRoaXMuY291bnRkb3duLnN0cmluZyA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5jb3VudGRvd24udG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy53cm9uZ1RpbWUuc3RyaW5nID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLndyb25nVGltZS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1QYW5lbCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25FZGl0Q291bnRkb3duQ2hhbmdlKCkge1xuICAgICAgICBsZXQgY291bnQgPSBOdW1iZXIodGhpcy5jb3VudGRvd24uc3RyaW5nKTtcbiAgICAgICAgaWYgKGNvdW50IDwgMSB8fCB0aGlzLmNvdW50ZG93bi5zdHJpbmcgPT0gXCJcIikge1xuICAgICAgICAgICAgY291bnQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnRkb3duLnN0cmluZyA9IGNvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5jb3VudGRvd24gPSBjb3VudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRWRpdFdyb25nVGltZUNoYW5nZSgpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gTnVtYmVyKHRoaXMud3JvbmdUaW1lLnN0cmluZyk7XG4gICAgICAgIGlmIChjb3VudCA8IDAgfHwgdGhpcy53cm9uZ1RpbWUuc3RyaW5nID09IFwiXCIpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndyb25nVGltZS5zdHJpbmcgPSBjb3VudC50b1N0cmluZygpO1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEud3JvbmdUaW1lID0gY291bnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrQWRkKCkge1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXRlbURhdGEucHVzaChuZXcgSXRlbURhdGEoKSk7XG4gICAgICAgIHRoaXMudXBkYXRlSXRlbVBhbmVsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUl0ZW1QYW5lbCgpIHtcbiAgICAgICAgdGhpcy5jb25maWdQYW5lbC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pdGVtRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNvbmZpZ0l0ZW0ubm9kZSk7XG4gICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuY29uZmlnUGFuZWw7XG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChDb25maWdJdGVtKS5pbml0KGkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5pif57qn6K+E5Yik5byA5YWzXG4gICAgcHVibGljIG9uVG9nZ2xlU3Rhcih0b2dnbGU6IGNjLlRvZ2dsZSk6IHZvaWQge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZ2dsZV9zdGFycy50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1N0YXJDb3VudCA9IDAgPT09IGluZGV4O1xuICAgIH1cblxuICAgIC8vIOmHjeeOqeW8gOWFs1xuICAgIHB1YmxpYyBvblRvZ2dsZVJlcGxheSh0b2dnbGU6IGNjLlRvZ2dsZSk6IHZvaWQge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZ2dsZV9yZXBsYXkudG9nZ2xlSXRlbXMuaW5kZXhPZih0b2dnbGUpO1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNSZXBsYXkgPSAwID09PSBpbmRleDtcbiAgICB9XG5cbiAgICAvLyDoh6rliqjmkq3mlL7popjlubLor63pn7PlvIDlhbNcbiAgICBwdWJsaWMgb25Ub2dnbGVUaXRsZUF1ZGlvKHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX3RpdGxlQXVkaW8udG9nZ2xlSXRlbXMuaW5kZXhPZih0b2dnbGUpO1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNQbGF5VGl0bGUgPSAwID09PSBpbmRleDtcbiAgICB9XG5cbiAgICAvLyDkv53lrZjor77ku7bmjInpkq5cbiAgICBwdWJsaWMgb25CdG5TYXZlQ2xpY2tlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrQ29uZmlnKCkpIHJldHVybjtcbiAgICAgICAgVUlIZWxwLnNob3dTdWJtaXNzaW9uUGFuZWwoKTtcbiAgICAgICAgLy8gY29uc3QgaXNFZGl0ID0gRWRpdG9yTWFuYWdlci5pc1N1cHBvcnRFZGl0KCk7XG4gICAgICAgIC8vIGlmICghaXNFZGl0IHx8IFJlcG9ydE1hbmFnZXIuaXNBbGxPdmVyKSB7XG4gICAgICAgIC8vICAgICBVSUhlbHAuc2hvd1N1Ym1pc3Npb25QYW5lbCgpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgVUlIZWxwLnNob3dUaXAoJ+ivt+WFiOWujOaIkOS4gOmBjemimOebricpO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIC8vIOmihOiniOivvuS7tuaMiemSrlxuICAgIHB1YmxpYyBvbkJ0blZpZXdDbGlja2VkKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tDb25maWcoKSkgcmV0dXJuO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAtMSA9PT0gRWRpdG9yTWFuYWdlci5nZXRDb3Vyc2V3YXJlTGV2ZWwoKSB8fFxuICAgICAgICAgICAgbnVsbCA9PT0gRWRpdG9yTWFuYWdlci5nZXRDb3Vyc2V3YXJlTGV2ZWwoKSB8fFxuICAgICAgICAgICAgdm9pZCAwID09PSBFZGl0b3JNYW5hZ2VyLmdldENvdXJzZXdhcmVMZXZlbCgpXG4gICAgICAgICkge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dUaXAoJ+ivt+WFiOiuvue9rmNvdXJzZXdhcmVMZXZlbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5URUFDSEVSX1BBTkVMX0xPQURJTkcsIHRydWUpO1xuICAgICAgICAgICAgVUlNYW5hZ2VyLnNob3dVSShHYW1lUGFuZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/mo4Dmn6XphY3nva7mlofku7bmmK/lkKblrozmlbRcbiAgICBwcml2YXRlIGNoZWNrQ29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvL+WkjeWItuaVsOe7hFxuICAgIHByaXZhdGUgY29weUFycmF5KGFycikge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhcnIpKVxuICAgIH1cbn1cbiJdfQ==