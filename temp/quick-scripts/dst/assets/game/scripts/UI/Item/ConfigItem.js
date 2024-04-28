
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/ConfigItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXENvbmZpZ0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsNkRBQTREO0FBQzVELHNEQUFpRDtBQUUzQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQWlEQztRQTlDVyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFlLElBQUksQ0FBQztRQUU3QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTlCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDakIsY0FBUSxHQUFhLENBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDOztJQW1DNUQsQ0FBQztJQWpDVSx5QkFBSSxHQUFYLFVBQVksS0FBYTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLFFBQVEsR0FBRyw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRU8sc0NBQWlCLEdBQXpCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtZQUMxQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsNkJBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ2hFLENBQUM7SUFFTyxzQ0FBaUIsR0FBekI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQ25ELENBQUM7SUFFTyxnQ0FBVyxHQUFuQixVQUFvQixLQUEwQixFQUFFLFVBQWtCO1FBQzlELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQiw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVPLGtDQUFhLEdBQXJCO1FBQ0ksNkJBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBN0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ2dCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ2U7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztpREFDZ0I7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDZ0I7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDbUI7SUFYcEIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWlEOUI7SUFBRCxpQkFBQztDQWpERCxBQWlEQyxDQWpEdUMsRUFBRSxDQUFDLFNBQVMsR0FpRG5EO2tCQWpEb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IEVkaXRvck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vTWFuYWdlci9FZGl0b3JNYW5hZ2VyXCI7XHJcbmltcG9ydCBUZWFjaGVyUGFuZWwgZnJvbSBcIi4uL3BhbmVsL1RlYWNoZXJQYW5lbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ0l0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgbGJsX2luZGV4OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGxibF90eXBlOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHByaXZhdGUgZWRpdENvdW50OiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSB0eXBlUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHRlYWNoZXJQYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBcclxuICAgIHB1YmxpYyBpbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdHlwZU5hbWU6IHN0cmluZ1tdID0gW1wi5bmz6KGMXCIsXCLlnoLnm7RcIixcIuebtOinklwiLFwi6ZSQ6KeSXCIsXCLpkp3op5JcIl07XHJcblxyXG4gICAgcHVibGljIGluaXQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgICAgICBsZXQgZ2FtZURhdGEgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXRlbURhdGE7XHJcbiAgICAgICAgdGhpcy5sYmxfaW5kZXguc3RyaW5nID0gXCIoXCIgKyAodGhpcy5pbmRleCArIDEpICsgXCIpXCI7XHJcbiAgICAgICAgdGhpcy5sYmxfdHlwZS5zdHJpbmcgPSB0aGlzLnR5cGVOYW1lW2dhbWVEYXRhW3RoaXMuaW5kZXhdLnR5cGVdO1xyXG4gICAgICAgIHRoaXMuZWRpdENvdW50LnN0cmluZyA9IGdhbWVEYXRhW3RoaXMuaW5kZXhdLmNvdW50LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy50eXBlUGFuZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkVkaXRDb3VudENoYW5nZSgpIHtcclxuICAgICAgICBsZXQgY291bnQgPSBOdW1iZXIodGhpcy5lZGl0Q291bnQuc3RyaW5nKTtcclxuICAgICAgICBpZiAoY291bnQgPCAxIHx8IHRoaXMuZWRpdENvdW50LnN0cmluZyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lZGl0Q291bnQuc3RyaW5nID0gY291bnQudG9TdHJpbmcoKTtcclxuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXRlbURhdGFbdGhpcy5pbmRleF0uY291bnQgPSBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tDaGFuZ2VUeXBlKCkge1xyXG4gICAgICAgIHRoaXMudHlwZVBhbmVsLmFjdGl2ZSA9ICF0aGlzLnR5cGVQYW5lbC5hY3RpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrVHlwZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCwgY3VzdG9tRGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gTnVtYmVyKGN1c3RvbURhdGEpO1xyXG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pdGVtRGF0YVt0aGlzLmluZGV4XS50eXBlID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5sYmxfdHlwZS5zdHJpbmcgPSB0aGlzLnR5cGVOYW1lW2luZGV4XTtcclxuICAgICAgICB0aGlzLnR5cGVQYW5lbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tEZWxldGUoKSB7XHJcbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLml0ZW1EYXRhLnNwbGljZSh0aGlzLmluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLnRlYWNoZXJQYW5lbC5nZXRDb21wb25lbnQoVGVhY2hlclBhbmVsKS51cGRhdGVJdGVtUGFuZWwoKTtcclxuICAgIH1cclxufVxyXG4iXX0=