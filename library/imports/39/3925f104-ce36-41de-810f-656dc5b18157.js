"use strict";
cc._RF.push(module, '3925fEEzjZB3oEPZW3FsYFX', 'MoreChallenge');
// frame/scripts/UI/Item/MoreChallenge.ts

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
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var T2M_1 = require("../../SDK/T2M");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MoreChallenge = /** @class */ (function (_super) {
    __extends(MoreChallenge, _super);
    function MoreChallenge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._touchEnable = true;
        return _this;
    }
    MoreChallenge.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            if (!_this._touchEnable)
                return;
            _this.node.scale = 1.1;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            if (!_this._touchEnable)
                return;
            _this._touchEnable = false;
            _this.node.scale = 1;
            T2M_1.T2M.dispatch(FrameMsgType_1.FrameMsgType.ENTER_ADDITION, null);
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
            _this.node.scale = 1;
        }, this);
    };
    MoreChallenge.prototype.onEnable = function () {
        this._touchEnable = true;
    };
    MoreChallenge = __decorate([
        ccclass
    ], MoreChallenge);
    return MoreChallenge;
}(cc.Component));
exports.default = MoreChallenge;

cc._RF.pop();