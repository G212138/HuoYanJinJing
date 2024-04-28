"use strict";
cc._RF.push(module, '1ef24i84udIaKa/D6/G9dTr', 'ConfigItem');
// game/scripts/UI/Item/ConfigItem.ts

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
var EditorManager_1 = require("../../Manager/EditorManager");
var TeacherPanel_1 = require("../panel/TeacherPanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ConfigItem = /** @class */ (function (_super) {
    __extends(ConfigItem, _super);
    function ConfigItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbl_index = null;
        _this.lbl_type = null;
        _this.editCount = null;
        _this.typePanel = null;
        _this.teacherPanel = null;
        _this.index = 0;
        _this.typeName = ["平行", "垂直", "直角", "锐角", "钝角"];
        return _this;
    }
    ConfigItem.prototype.init = function (index) {
        this.index = index;
        var gameData = EditorManager_1.EditorManager.editorData.itemData;
        this.lbl_index.string = "(" + (this.index + 1) + ")";
        this.lbl_type.string = this.typeName[gameData[this.index].type];
        this.editCount.string = gameData[this.index].count.toString();
        this.typePanel.active = false;
    };
    ConfigItem.prototype.onEditCountChange = function () {
        var count = Number(this.editCount.string);
        if (count < 1 || this.editCount.string == "") {
            count = 1;
        }
        this.editCount.string = count.toString();
        EditorManager_1.EditorManager.editorData.itemData[this.index].count = count;
    };
    ConfigItem.prototype.onClickChangeType = function () {
        this.typePanel.active = !this.typePanel.active;
    };
    ConfigItem.prototype.onClickType = function (event, customData) {
        var index = Number(customData);
        EditorManager_1.EditorManager.editorData.itemData[this.index].type = index;
        this.lbl_type.string = this.typeName[index];
        this.typePanel.active = false;
    };
    ConfigItem.prototype.onClickDelete = function () {
        EditorManager_1.EditorManager.editorData.itemData.splice(this.index, 1);
        this.teacherPanel.getComponent(TeacherPanel_1.default).updateItemPanel();
    };
    __decorate([
        property(cc.Label)
    ], ConfigItem.prototype, "lbl_index", void 0);
    __decorate([
        property(cc.Label)
    ], ConfigItem.prototype, "lbl_type", void 0);
    __decorate([
        property(cc.EditBox)
    ], ConfigItem.prototype, "editCount", void 0);
    __decorate([
        property(cc.Node)
    ], ConfigItem.prototype, "typePanel", void 0);
    __decorate([
        property(cc.Node)
    ], ConfigItem.prototype, "teacherPanel", void 0);
    ConfigItem = __decorate([
        ccclass
    ], ConfigItem);
    return ConfigItem;
}(cc.Component));
exports.default = ConfigItem;

cc._RF.pop();