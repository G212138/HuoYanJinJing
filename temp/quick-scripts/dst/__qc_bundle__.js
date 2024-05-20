
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/frame/scripts/Data/FrameConstValue');
require('./assets/frame/scripts/Data/FrameMsgType');
require('./assets/frame/scripts/Data/FrameSyncData');
require('./assets/frame/scripts/Http/NetWork');
require('./assets/frame/scripts/Manager/ListenerManager');
require('./assets/frame/scripts/Manager/ReportManager');
require('./assets/frame/scripts/Manager/SoundManager');
require('./assets/frame/scripts/Manager/SyncDataManager');
require('./assets/frame/scripts/Manager/UIManager');
require('./assets/frame/scripts/SDK/GameMsg');
require('./assets/frame/scripts/SDK/T2M');
require('./assets/frame/scripts/UI/AdaptiveScreen');
require('./assets/frame/scripts/UI/BaseFrameUI');
require('./assets/frame/scripts/UI/BaseUI');
require('./assets/frame/scripts/UI/BindNode');
require('./assets/frame/scripts/UI/GameMain');
require('./assets/frame/scripts/UI/Item/MaskGlobal');
require('./assets/frame/scripts/UI/Item/MaskRecover');
require('./assets/frame/scripts/UI/Item/MoreChallenge');
require('./assets/frame/scripts/UI/Item/TeacherPanelLoading');
require('./assets/frame/scripts/UI/Item/Tip');
require('./assets/frame/scripts/UI/Item/TitleNode');
require('./assets/frame/scripts/UI/Item/replayBtn');
require('./assets/frame/scripts/UI/Panel/AffirmTips');
require('./assets/frame/scripts/UI/Panel/BaseGamePanel');
require('./assets/frame/scripts/UI/Panel/BaseTeacherPanel');
require('./assets/frame/scripts/UI/Panel/ErrorPanel');
require('./assets/frame/scripts/UI/Panel/LoadingUI');
require('./assets/frame/scripts/UI/Panel/OverTips');
require('./assets/frame/scripts/UI/Panel/StarCount');
require('./assets/frame/scripts/UI/Panel/SubmissionPanel');
require('./assets/frame/scripts/UI/Panel/TipUI');
require('./assets/frame/scripts/UI/Panel/UploadAndReturnPanel');
require('./assets/frame/scripts/Utils/AudioPlayExtension');
require('./assets/frame/scripts/Utils/BoundingBoxDemo');
require('./assets/frame/scripts/Utils/BoundingBoxHelp');
require('./assets/frame/scripts/Utils/HitTest');
require('./assets/frame/scripts/Utils/MathUtils');
require('./assets/frame/scripts/Utils/Tools');
require('./assets/frame/scripts/Utils/UIHelp');
require('./assets/game/scripts/Components/ButtonSync');
require('./assets/game/scripts/Components/DragGroupSync');
require('./assets/game/scripts/Components/DragSync');
require('./assets/game/scripts/Components/DragSyncNew');
require('./assets/game/scripts/Data/ConstValue');
require('./assets/game/scripts/Data/CustomSyncData');
require('./assets/game/scripts/Data/EventType');
require('./assets/game/scripts/Manager/EditorManager');
require('./assets/game/scripts/Manager/GameManager');
require('./assets/game/scripts/SkeletonExt');
require('./assets/game/scripts/UI/Item/ConfigItem');
require('./assets/game/scripts/UI/Item/GameItem');
require('./assets/game/scripts/UI/layer/GameLayer');
require('./assets/game/scripts/UI/panel/GamePanel');
require('./assets/game/scripts/UI/panel/TeacherPanel');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/MoreChallenge.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxNb3JlQ2hhbGxlbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUF1RDtBQUN2RCxxQ0FBb0M7QUFFOUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFvQ0M7UUFsQ1csa0JBQVksR0FBWSxJQUFJLENBQUM7O0lBa0N6QyxDQUFDO0lBakNHLDZCQUFLLEdBQUw7UUFBQSxpQkE0QkM7UUEzQkcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ1IsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUM3QjtZQUNJLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWTtnQkFBRSxPQUFPO1lBQy9CLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUMxQixDQUFDLEVBQ0QsSUFBSSxDQUNQLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDUixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQzNCO1lBQ0ksSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZO2dCQUFFLE9BQU87WUFDL0IsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLFNBQUcsQ0FBQyxRQUFRLENBQUMsMkJBQVksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxFQUNELElBQUksQ0FDUCxDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ1IsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUM5QjtZQUNJLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQ0QsSUFBSSxDQUNQLENBQUM7SUFDTixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFuQ2dCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FvQ2pDO0lBQUQsb0JBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQzBDLEVBQUUsQ0FBQyxTQUFTLEdBb0N0RDtrQkFwQ29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tIFwiLi4vLi4vRGF0YS9GcmFtZU1zZ1R5cGVcIjtcclxuaW1wb3J0IHsgVDJNIH0gZnJvbSBcIi4uLy4uL1NESy9UMk1cIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9yZUNoYWxsZW5nZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfdG91Y2hFbmFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFxyXG4gICAgICAgICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl90b3VjaEVuYWJsZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMS4xO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcclxuICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3RvdWNoRW5hYmxlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90b3VjaEVuYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgICAgIFQyTS5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuRU5URVJfQURESVRJT04sIG51bGwpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcclxuICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5fdG91Y2hFbmFibGUgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30e46ZgmPlO+5CRM3r8Ls4a', 'SyncDataManager');
// frame/scripts/Manager/SyncDataManager.ts

"use strict";
/**
 * 同步数据
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncDataManager = exports.SyncData = void 0;
var FrameSyncData_1 = require("../../../frame/scripts/Data/FrameSyncData");
var ReportManager_1 = require("../../../frame/scripts/Manager/ReportManager");
var CustomSyncData_1 = require("../../../game/scripts/Data/CustomSyncData");
/**
 * 需要同步的数据
 * 自定义数据不要在这里实现，请在 CustomSyncData 中实现
 */
var SyncData = /** @class */ (function () {
    function SyncData() {
        this.reportData = null; // 上报数据
        this.customSyncData = new CustomSyncData_1.CustomSyncData(); // 自定义同步数据
        this.frameSyncData = new FrameSyncData_1.FrameSyncData(); // 框架中的同步数据
    }
    return SyncData;
}());
exports.SyncData = SyncData;
var SyncDataManagerClass = /** @class */ (function () {
    function SyncDataManagerClass() {
        /** 同步数据 */
        this._syncData = new SyncData();
    }
    SyncDataManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new SyncDataManagerClass();
        }
        return this._instance;
    };
    Object.defineProperty(SyncDataManagerClass.prototype, "syncData", {
        get: function () {
            return this.getSyncData();
        },
        set: function (data) {
            this.setSyncData(data);
        },
        enumerable: false,
        configurable: true
    });
    SyncDataManagerClass.prototype.initSyncData = function () {
        this._syncData = new SyncData();
    };
    SyncDataManagerClass.prototype.getSyncData = function () {
        this._syncData.reportData = ReportManager_1.ReportManager.getSyncData();
        return this._syncData;
    };
    SyncDataManagerClass.prototype.setSyncData = function (data) {
        this._syncData = data;
        ReportManager_1.ReportManager.setSyncData(data.reportData);
    };
    /**
     * 重玩
     */
    SyncDataManagerClass.prototype.replay = function () {
        var actionId = this._syncData.frameSyncData.actionId;
        var replayCount = this._syncData.frameSyncData.hasReplayCount + 1;
        this._syncData = new SyncData();
        this._syncData.frameSyncData.actionId = actionId;
        this._syncData.frameSyncData.hasReplayCount = replayCount;
    };
    SyncDataManagerClass._instance = null;
    return SyncDataManagerClass;
}());
exports.SyncDataManager = SyncDataManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXE1hbmFnZXJcXFN5bmNEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7OztBQUVILDJFQUEwRTtBQUMxRSw4RUFBNkU7QUFDN0UsNEVBQTJFO0FBRTNFOzs7R0FHRztBQUNIO0lBQUE7UUFDVyxlQUFVLEdBQVEsSUFBSSxDQUFDLENBQUMsT0FBTztRQUMvQixtQkFBYyxHQUFtQixJQUFJLCtCQUFjLEVBQUUsQ0FBQyxDQUFDLFVBQVU7UUFDakUsa0JBQWEsR0FBa0IsSUFBSSw2QkFBYSxFQUFFLENBQUMsQ0FBQyxXQUFXO0lBQzFFLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSw0QkFBUTtBQUtyQjtJQUFBO1FBVUksV0FBVztRQUNILGNBQVMsR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBaUNqRCxDQUFDO0lBekNpQixnQ0FBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7U0FDL0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUlELHNCQUFXLDBDQUFRO2FBR25CO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUIsQ0FBQzthQUxELFVBQW9CLElBQWM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUtNLDJDQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFTSwwQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLDZCQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTSwwQ0FBVyxHQUFsQixVQUFtQixJQUFjO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLDZCQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxxQ0FBTSxHQUFiO1FBQ0ksSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3ZELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQztJQUM5RCxDQUFDO0lBekNjLDhCQUFTLEdBQXlCLElBQUksQ0FBQztJQTJDMUQsMkJBQUM7Q0E1Q0QsQUE0Q0MsSUFBQTtBQUVZLFFBQUEsZUFBZSxHQUFHLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDlkIzmraXmlbDmja5cbiAqL1xuXG5pbXBvcnQgeyBGcmFtZVN5bmNEYXRhIH0gZnJvbSAnLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9EYXRhL0ZyYW1lU3luY0RhdGEnO1xuaW1wb3J0IHsgUmVwb3J0TWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9SZXBvcnRNYW5hZ2VyJztcbmltcG9ydCB7IEN1c3RvbVN5bmNEYXRhIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL0RhdGEvQ3VzdG9tU3luY0RhdGEnO1xuXG4vKipcbiAqIOmcgOimgeWQjOatpeeahOaVsOaNrlxuICog6Ieq5a6a5LmJ5pWw5o2u5LiN6KaB5Zyo6L+Z6YeM5a6e546w77yM6K+35ZyoIEN1c3RvbVN5bmNEYXRhIOS4reWunueOsFxuICovXG5leHBvcnQgY2xhc3MgU3luY0RhdGEge1xuICAgIHB1YmxpYyByZXBvcnREYXRhOiBhbnkgPSBudWxsOyAvLyDkuIrmiqXmlbDmja5cbiAgICBwdWJsaWMgY3VzdG9tU3luY0RhdGE6IEN1c3RvbVN5bmNEYXRhID0gbmV3IEN1c3RvbVN5bmNEYXRhKCk7IC8vIOiHquWumuS5ieWQjOatpeaVsOaNrlxuICAgIHB1YmxpYyBmcmFtZVN5bmNEYXRhOiBGcmFtZVN5bmNEYXRhID0gbmV3IEZyYW1lU3luY0RhdGEoKTsgLy8g5qGG5p625Lit55qE5ZCM5q2l5pWw5o2uXG59XG5jbGFzcyBTeW5jRGF0YU1hbmFnZXJDbGFzcyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTeW5jRGF0YU1hbmFnZXJDbGFzcyA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFN5bmNEYXRhTWFuYWdlckNsYXNzIHtcbiAgICAgICAgaWYgKG51bGwgPT09IHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTeW5jRGF0YU1hbmFnZXJDbGFzcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKiog5ZCM5q2l5pWw5o2uICovXG4gICAgcHJpdmF0ZSBfc3luY0RhdGE6IFN5bmNEYXRhID0gbmV3IFN5bmNEYXRhKCk7XG4gICAgcHVibGljIHNldCBzeW5jRGF0YShkYXRhOiBTeW5jRGF0YSkge1xuICAgICAgICB0aGlzLnNldFN5bmNEYXRhKGRhdGEpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN5bmNEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTeW5jRGF0YSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0U3luY0RhdGEoKSB7XG4gICAgICAgIHRoaXMuX3N5bmNEYXRhID0gbmV3IFN5bmNEYXRhKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFN5bmNEYXRhKCk6IFN5bmNEYXRhIHtcbiAgICAgICAgdGhpcy5fc3luY0RhdGEucmVwb3J0RGF0YSA9IFJlcG9ydE1hbmFnZXIuZ2V0U3luY0RhdGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N5bmNEYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTeW5jRGF0YShkYXRhOiBTeW5jRGF0YSkge1xuICAgICAgICB0aGlzLl9zeW5jRGF0YSA9IGRhdGE7XG4gICAgICAgIFJlcG9ydE1hbmFnZXIuc2V0U3luY0RhdGEoZGF0YS5yZXBvcnREYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph43njqlcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwbGF5KCkge1xuICAgICAgICBjb25zdCBhY3Rpb25JZCA9IHRoaXMuX3N5bmNEYXRhLmZyYW1lU3luY0RhdGEuYWN0aW9uSWQ7XG4gICAgICAgIGNvbnN0IHJlcGxheUNvdW50ID0gdGhpcy5fc3luY0RhdGEuZnJhbWVTeW5jRGF0YS5oYXNSZXBsYXlDb3VudCArIDE7XG4gICAgICAgIHRoaXMuX3N5bmNEYXRhID0gbmV3IFN5bmNEYXRhKCk7XG4gICAgICAgIHRoaXMuX3N5bmNEYXRhLmZyYW1lU3luY0RhdGEuYWN0aW9uSWQgPSBhY3Rpb25JZDtcbiAgICAgICAgdGhpcy5fc3luY0RhdGEuZnJhbWVTeW5jRGF0YS5oYXNSZXBsYXlDb3VudCA9IHJlcGxheUNvdW50O1xuICAgIH1cblxufVxuXG5leHBvcnQgY29uc3QgU3luY0RhdGFNYW5hZ2VyID0gU3luY0RhdGFNYW5hZ2VyQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxUZWFjaGVyUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQTJFO0FBQzNFLHFGQUFvRjtBQUVwRix5RUFBd0U7QUFDeEUsd0ZBQW1GO0FBRW5GLGlFQUFnRTtBQUNoRSw2REFBc0U7QUFDdEUsaURBQTRDO0FBQzVDLHlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBZ0I7SUFBMUQ7UUFBQSxxRUFvSkM7UUFoSlcsa0JBQVksR0FBdUIsSUFBSSxDQUFDO1FBRXhDLG1CQUFhLEdBQXVCLElBQUksQ0FBQztRQUV6Qyx1QkFBaUIsR0FBdUIsSUFBSSxDQUFDO1FBRzdDLGVBQVMsR0FBZSxJQUFJLENBQUM7UUFFN0IsZUFBUyxHQUFlLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFpQmxDOztXQUVHO1FBQ0ssY0FBUSxHQUFHLEVBQUUsQ0FBQzs7SUE0RzFCLENBQUM7SUE5SEcsNkJBQU0sR0FBTjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0ksaUJBQU0sS0FBSyxXQUFFLENBQUM7UUFFZCxpQkFBaUI7UUFDakIsSUFBTSxNQUFNLEdBQUcsNkJBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM3QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQU1ELCtCQUFRLEdBQVI7UUFDSSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUM3RixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMzRixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLDZCQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWxHLDZGQUE2RjtRQUM3RixxRUFBcUU7UUFDckUsSUFBSTtRQUNKLGdDQUFnQztRQUNoQyxtRkFBbUY7UUFFbkYsdUZBQXVGO1FBR3ZGLG9FQUFvRTtRQUVwRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsNkJBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sNENBQXFCLEdBQTdCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtZQUMxQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsNkJBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMvQyxDQUFDO0lBRU8sNENBQXFCLEdBQTdCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtZQUMxQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsNkJBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMvQyxDQUFDO0lBRU8saUNBQVUsR0FBbEI7UUFDSSw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksd0JBQVEsRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxzQ0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsNkJBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFFRCxTQUFTO0lBQ0YsbUNBQVksR0FBbkIsVUFBb0IsTUFBaUI7UUFDakMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELDZCQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLEtBQUssS0FBSyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxPQUFPO0lBQ0EscUNBQWMsR0FBckIsVUFBc0IsTUFBaUI7UUFDbkMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNELDZCQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssS0FBSyxDQUFDO0lBQ3BELENBQUM7SUFFRCxhQUFhO0lBQ04seUNBQWtCLEdBQXpCLFVBQTBCLE1BQWlCO1FBQ3ZDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELDZCQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLEtBQUssS0FBSyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxTQUFTO0lBQ0YsdUNBQWdCLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFBRSxPQUFPO1FBQ2hDLGVBQU0sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzdCLGdEQUFnRDtRQUNoRCw0Q0FBNEM7UUFDNUMsb0NBQW9DO1FBQ3BDLFdBQVc7UUFDWCxrQ0FBa0M7UUFDbEMsSUFBSTtJQUNSLENBQUM7SUFDRCxTQUFTO0lBQ0YsdUNBQWdCLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFBRSxPQUFPO1FBQ2hDLElBQ0ksQ0FBQyxDQUFDLEtBQUssNkJBQWEsQ0FBQyxrQkFBa0IsRUFBRTtZQUN6QyxJQUFJLEtBQUssNkJBQWEsQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQyxLQUFLLENBQUMsS0FBSyw2QkFBYSxDQUFDLGtCQUFrQixFQUFFLEVBQy9DO1lBQ0UsZUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDSCxpQ0FBZSxDQUFDLFFBQVEsQ0FBQywyQkFBWSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25FLHFCQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFTLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFFRCxZQUFZO0lBQ0osa0NBQVcsR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtJQUNFLGdDQUFTLEdBQWpCLFVBQWtCLEdBQUc7UUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBbEphLHNCQUFTLEdBQUcsY0FBYyxDQUFDO0lBR3pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7c0RBQ21CO0lBRWhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7dURBQ29CO0lBRWpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7MkRBQ3dCO0lBR3JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7bURBQ2dCO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7bURBQ2dCO0lBRXJDO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7b0RBQ2lCO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ2tCO0lBakJuQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBb0poQztJQUFELG1CQUFDO0NBcEpELEFBb0pDLENBcEp5QywwQkFBZ0IsR0FvSnpEO2tCQXBKb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvRGF0YS9GcmFtZU1zZ1R5cGUnO1xuaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBSZXBvcnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1JlcG9ydE1hbmFnZXInO1xuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1VJTWFuYWdlcic7XG5pbXBvcnQgQmFzZVRlYWNoZXJQYW5lbCBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1VJL1BhbmVsL0Jhc2VUZWFjaGVyUGFuZWwnO1xuaW1wb3J0IFN1Ym1pc3Npb25QYW5lbCBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1VJL1BhbmVsL1N1Ym1pc3Npb25QYW5lbCc7XG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1V0aWxzL1VJSGVscCc7XG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyLCBJdGVtRGF0YSB9IGZyb20gJy4uLy4uL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XG5pbXBvcnQgQ29uZmlnSXRlbSBmcm9tICcuLi9JdGVtL0NvbmZpZ0l0ZW0nO1xuaW1wb3J0IEdhbWVQYW5lbCBmcm9tICcuL0dhbWVQYW5lbCc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFjaGVyUGFuZWwgZXh0ZW5kcyBCYXNlVGVhY2hlclBhbmVsIHtcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdUZWFjaGVyUGFuZWwnO1xuXG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcbiAgICBwcml2YXRlIHRvZ2dsZV9zdGFyczogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlQ29udGFpbmVyKVxuICAgIHByaXZhdGUgdG9nZ2xlX3JlcGxheTogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlQ29udGFpbmVyKVxuICAgIHByaXZhdGUgdG9nZ2xlX3RpdGxlQXVkaW86IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIGNvdW50ZG93bjogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgcHJpdmF0ZSB3cm9uZ1RpbWU6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShDb25maWdJdGVtKVxuICAgIHByaXZhdGUgY29uZmlnSXRlbTogQ29uZmlnSXRlbSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBjb25maWdQYW5lbDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9idG5fc2F2ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYnRuX3ZpZXc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICAvLyDlj6/nvJbovpHnmoTmuLjmiI/vvIzkuI3lsZXnpLrkv53lrZjmjInpkq5cbiAgICAgICAgY29uc3QgaXNFZGl0ID0gRWRpdG9yTWFuYWdlci5pc1N1cHBvcnRFZGl0KCk7XG4gICAgICAgIGlmICh0aGlzLl9idG5fc2F2ZSkge1xuICAgICAgICAgICAgdGhpcy5fYnRuX3NhdmUuYWN0aXZlID0gIWlzRWRpdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9idG5fc2F2ZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rueVjOmdou+8iOi/memHjOW3sue7j+aLv+WIsOS6hue9kee7nOivt+axguaVsOaNru+8iVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2FtZURhdGEgPSBcIlwiO1xuICAgIHNldFBhbmVsKCkge1xuICAgICAgICBzdXBlci5zZXRQYW5lbCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZV9zdGFycy50b2dnbGVJdGVtc1tFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNTdGFyQ291bnQgPyAwIDogMV0uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b2dnbGVfcmVwbGF5LnRvZ2dsZUl0ZW1zW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1JlcGxheSA/IDAgOiAxXS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZ2dsZV90aXRsZUF1ZGlvLnRvZ2dsZUl0ZW1zW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1BsYXlUaXRsZSA/IDAgOiAxXS5pc0NoZWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIGlmICghRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLkdhbWVEYXRhIHx8IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5HYW1lRGF0YS5sZW5ndGggPT0gMCkge1xuICAgICAgICAvLyAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLkdhbWVEYXRhID0gSlNPTi5wYXJzZSh0aGlzLmdhbWVEYXRhKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBsZXQgbGV2ZWwgPSBuZXcgT3B0aW9uRGF0YSgpO1xuICAgICAgICAvLyBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuR2FtZURhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGxldmVsLnRpdGxlRGF0YSkpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLkdhbWVEYXRhXCIsIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5HYW1lRGF0YSk7XG5cblxuICAgICAgICAvLyB0aGlzLm5vZGVfY29uZmlnLmdldENvbXBvbmVudChUZWFjaGVyQ29uZmlnKS51cGRhdGVPcHRpb25QYW5lbCgpO1xuXG4gICAgICAgIHRoaXMuY291bnRkb3duLnN0cmluZyA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5jb3VudGRvd24udG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy53cm9uZ1RpbWUuc3RyaW5nID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLndyb25nVGltZS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1QYW5lbCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25FZGl0Q291bnRkb3duQ2hhbmdlKCkge1xuICAgICAgICBsZXQgY291bnQgPSBOdW1iZXIodGhpcy5jb3VudGRvd24uc3RyaW5nKTtcbiAgICAgICAgaWYgKGNvdW50IDwgMSB8fCB0aGlzLmNvdW50ZG93bi5zdHJpbmcgPT0gXCJcIikge1xuICAgICAgICAgICAgY291bnQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnRkb3duLnN0cmluZyA9IGNvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5jb3VudGRvd24gPSBjb3VudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRWRpdFdyb25nVGltZUNoYW5nZSgpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gTnVtYmVyKHRoaXMud3JvbmdUaW1lLnN0cmluZyk7XG4gICAgICAgIGlmIChjb3VudCA8IDAgfHwgdGhpcy53cm9uZ1RpbWUuc3RyaW5nID09IFwiXCIpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndyb25nVGltZS5zdHJpbmcgPSBjb3VudC50b1N0cmluZygpO1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEud3JvbmdUaW1lID0gY291bnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrQWRkKCkge1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXRlbURhdGEucHVzaChuZXcgSXRlbURhdGEoKSk7XG4gICAgICAgIHRoaXMudXBkYXRlSXRlbVBhbmVsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUl0ZW1QYW5lbCgpIHtcbiAgICAgICAgdGhpcy5jb25maWdQYW5lbC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pdGVtRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNvbmZpZ0l0ZW0ubm9kZSk7XG4gICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuY29uZmlnUGFuZWw7XG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChDb25maWdJdGVtKS5pbml0KGkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5pif57qn6K+E5Yik5byA5YWzXG4gICAgcHVibGljIG9uVG9nZ2xlU3Rhcih0b2dnbGU6IGNjLlRvZ2dsZSk6IHZvaWQge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZ2dsZV9zdGFycy50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1N0YXJDb3VudCA9IDAgPT09IGluZGV4O1xuICAgIH1cblxuICAgIC8vIOmHjeeOqeW8gOWFs1xuICAgIHB1YmxpYyBvblRvZ2dsZVJlcGxheSh0b2dnbGU6IGNjLlRvZ2dsZSk6IHZvaWQge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZ2dsZV9yZXBsYXkudG9nZ2xlSXRlbXMuaW5kZXhPZih0b2dnbGUpO1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNSZXBsYXkgPSAwID09PSBpbmRleDtcbiAgICB9XG5cbiAgICAvLyDoh6rliqjmkq3mlL7popjlubLor63pn7PlvIDlhbNcbiAgICBwdWJsaWMgb25Ub2dnbGVUaXRsZUF1ZGlvKHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX3RpdGxlQXVkaW8udG9nZ2xlSXRlbXMuaW5kZXhPZih0b2dnbGUpO1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNQbGF5VGl0bGUgPSAwID09PSBpbmRleDtcbiAgICB9XG5cbiAgICAvLyDkv53lrZjor77ku7bmjInpkq5cbiAgICBwdWJsaWMgb25CdG5TYXZlQ2xpY2tlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrQ29uZmlnKCkpIHJldHVybjtcbiAgICAgICAgVUlIZWxwLnNob3dTdWJtaXNzaW9uUGFuZWwoKTtcbiAgICAgICAgLy8gY29uc3QgaXNFZGl0ID0gRWRpdG9yTWFuYWdlci5pc1N1cHBvcnRFZGl0KCk7XG4gICAgICAgIC8vIGlmICghaXNFZGl0IHx8IFJlcG9ydE1hbmFnZXIuaXNBbGxPdmVyKSB7XG4gICAgICAgIC8vICAgICBVSUhlbHAuc2hvd1N1Ym1pc3Npb25QYW5lbCgpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgVUlIZWxwLnNob3dUaXAoJ+ivt+WFiOWujOaIkOS4gOmBjemimOebricpO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIC8vIOmihOiniOivvuS7tuaMiemSrlxuICAgIHB1YmxpYyBvbkJ0blZpZXdDbGlja2VkKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tDb25maWcoKSkgcmV0dXJuO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAtMSA9PT0gRWRpdG9yTWFuYWdlci5nZXRDb3Vyc2V3YXJlTGV2ZWwoKSB8fFxuICAgICAgICAgICAgbnVsbCA9PT0gRWRpdG9yTWFuYWdlci5nZXRDb3Vyc2V3YXJlTGV2ZWwoKSB8fFxuICAgICAgICAgICAgdm9pZCAwID09PSBFZGl0b3JNYW5hZ2VyLmdldENvdXJzZXdhcmVMZXZlbCgpXG4gICAgICAgICkge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dUaXAoJ+ivt+WFiOiuvue9rmNvdXJzZXdhcmVMZXZlbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5URUFDSEVSX1BBTkVMX0xPQURJTkcsIHRydWUpO1xuICAgICAgICAgICAgVUlNYW5hZ2VyLnNob3dVSShHYW1lUGFuZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/mo4Dmn6XphY3nva7mlofku7bmmK/lkKblrozmlbRcbiAgICBwcml2YXRlIGNoZWNrQ29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvL+WkjeWItuaVsOe7hFxuICAgIHByaXZhdGUgY29weUFycmF5KGFycikge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhcnIpKVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/SkeletonExt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b17bdM6/FlI8aRFdqpwmXvl', 'SkeletonExt');
// game/scripts/SkeletonExt.js

"use strict";

cc.game.once(cc.game.EVENT_ENGINE_INITED, function () {
  cc.js.mixin(sp.Skeleton.prototype, {
    update: function update(dt) {
      // if (CC_EDITOR) return;
      if (CC_EDITOR) {
        cc.engine._animatingInEditMode = 1;
        cc.engine.animatingInEditMode = 1;
      }

      if (this.paused) return;
      dt *= this.timeScale * sp.timeScale;

      if (this.isAnimationCached()) {
        // Cache mode and has animation queue.
        if (this._isAniComplete) {
          if (this._animationQueue.length === 0 && !this._headAniInfo) {
            var frameCache = this._frameCache;

            if (frameCache && frameCache.isInvalid()) {
              frameCache.updateToFrame();
              var frames = frameCache.frames;
              this._curFrame = frames[frames.length - 1];
            }

            return;
          }

          if (!this._headAniInfo) {
            this._headAniInfo = this._animationQueue.shift();
          }

          this._accTime += dt;

          if (this._accTime > this._headAniInfo.delay) {
            var aniInfo = this._headAniInfo;
            this._headAniInfo = null;
            this.setAnimation(0, aniInfo.animationName, aniInfo.loop);
          }

          return;
        }

        this._updateCache(dt);
      } else {
        this._updateRealtime(dt);
      }
    }
  });
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcU2tlbGV0b25FeHQuanMiXSwibmFtZXMiOlsiY2MiLCJnYW1lIiwib25jZSIsIkVWRU5UX0VOR0lORV9JTklURUQiLCJqcyIsIm1peGluIiwic3AiLCJTa2VsZXRvbiIsInByb3RvdHlwZSIsInVwZGF0ZSIsImR0IiwiQ0NfRURJVE9SIiwiZW5naW5lIiwiX2FuaW1hdGluZ0luRWRpdE1vZGUiLCJhbmltYXRpbmdJbkVkaXRNb2RlIiwicGF1c2VkIiwidGltZVNjYWxlIiwiaXNBbmltYXRpb25DYWNoZWQiLCJfaXNBbmlDb21wbGV0ZSIsIl9hbmltYXRpb25RdWV1ZSIsImxlbmd0aCIsIl9oZWFkQW5pSW5mbyIsImZyYW1lQ2FjaGUiLCJfZnJhbWVDYWNoZSIsImlzSW52YWxpZCIsInVwZGF0ZVRvRnJhbWUiLCJmcmFtZXMiLCJfY3VyRnJhbWUiLCJzaGlmdCIsIl9hY2NUaW1lIiwiZGVsYXkiLCJhbmlJbmZvIiwic2V0QW5pbWF0aW9uIiwiYW5pbWF0aW9uTmFtZSIsImxvb3AiLCJfdXBkYXRlQ2FjaGUiLCJfdXBkYXRlUmVhbHRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRQyxJQUFSLENBQWFGLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRRSxtQkFBckIsRUFBMEMsWUFBWTtBQUVsREgsRUFBQUEsRUFBRSxDQUFDSSxFQUFILENBQU1DLEtBQU4sQ0FBWUMsRUFBRSxDQUFDQyxRQUFILENBQVlDLFNBQXhCLEVBQW1DO0FBQy9CQyxJQUFBQSxNQUQrQixrQkFDdkJDLEVBRHVCLEVBQ25CO0FBQ1I7QUFFQSxVQUFJQyxTQUFKLEVBQWU7QUFDWFgsUUFBQUEsRUFBRSxDQUFDWSxNQUFILENBQVVDLG9CQUFWLEdBQWlDLENBQWpDO0FBQ0FiLFFBQUFBLEVBQUUsQ0FBQ1ksTUFBSCxDQUFVRSxtQkFBVixHQUFnQyxDQUFoQztBQUNIOztBQUVELFVBQUksS0FBS0MsTUFBVCxFQUFpQjtBQUVqQkwsTUFBQUEsRUFBRSxJQUFJLEtBQUtNLFNBQUwsR0FBaUJWLEVBQUUsQ0FBQ1UsU0FBMUI7O0FBRUEsVUFBSSxLQUFLQyxpQkFBTCxFQUFKLEVBQThCO0FBRTFCO0FBQ0EsWUFBSSxLQUFLQyxjQUFULEVBQXlCO0FBQ3JCLGNBQUksS0FBS0MsZUFBTCxDQUFxQkMsTUFBckIsS0FBZ0MsQ0FBaEMsSUFBcUMsQ0FBQyxLQUFLQyxZQUEvQyxFQUE2RDtBQUN6RCxnQkFBSUMsVUFBVSxHQUFHLEtBQUtDLFdBQXRCOztBQUNBLGdCQUFJRCxVQUFVLElBQUlBLFVBQVUsQ0FBQ0UsU0FBWCxFQUFsQixFQUEwQztBQUN0Q0YsY0FBQUEsVUFBVSxDQUFDRyxhQUFYO0FBQ0Esa0JBQUlDLE1BQU0sR0FBR0osVUFBVSxDQUFDSSxNQUF4QjtBQUNBLG1CQUFLQyxTQUFMLEdBQWlCRCxNQUFNLENBQUNBLE1BQU0sQ0FBQ04sTUFBUCxHQUFnQixDQUFqQixDQUF2QjtBQUNIOztBQUNEO0FBQ0g7O0FBQ0QsY0FBSSxDQUFDLEtBQUtDLFlBQVYsRUFBd0I7QUFDcEIsaUJBQUtBLFlBQUwsR0FBb0IsS0FBS0YsZUFBTCxDQUFxQlMsS0FBckIsRUFBcEI7QUFDSDs7QUFDRCxlQUFLQyxRQUFMLElBQWlCbkIsRUFBakI7O0FBQ0EsY0FBSSxLQUFLbUIsUUFBTCxHQUFnQixLQUFLUixZQUFMLENBQWtCUyxLQUF0QyxFQUE2QztBQUN6QyxnQkFBSUMsT0FBTyxHQUFHLEtBQUtWLFlBQW5CO0FBQ0EsaUJBQUtBLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxpQkFBS1csWUFBTCxDQUFtQixDQUFuQixFQUFzQkQsT0FBTyxDQUFDRSxhQUE5QixFQUE2Q0YsT0FBTyxDQUFDRyxJQUFyRDtBQUNIOztBQUNEO0FBQ0g7O0FBRUQsYUFBS0MsWUFBTCxDQUFrQnpCLEVBQWxCO0FBQ0gsT0ExQkQsTUEwQk87QUFDSCxhQUFLMEIsZUFBTCxDQUFxQjFCLEVBQXJCO0FBQ0g7QUFDSjtBQTFDOEIsR0FBbkM7QUE2Q0gsQ0EvQ0QiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2MuZ2FtZS5vbmNlKGNjLmdhbWUuRVZFTlRfRU5HSU5FX0lOSVRFRCwgZnVuY3Rpb24gKCkge1xuXG4gICAgY2MuanMubWl4aW4oc3AuU2tlbGV0b24ucHJvdG90eXBlLCB7XG4gICAgICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgICAgIC8vIGlmIChDQ19FRElUT1IpIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKENDX0VESVRPUikge1xuICAgICAgICAgICAgICAgIGNjLmVuZ2luZS5fYW5pbWF0aW5nSW5FZGl0TW9kZSA9IDE7XG4gICAgICAgICAgICAgICAgY2MuZW5naW5lLmFuaW1hdGluZ0luRWRpdE1vZGUgPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHJldHVybjtcbiAgICBcbiAgICAgICAgICAgIGR0ICo9IHRoaXMudGltZVNjYWxlICogc3AudGltZVNjYWxlO1xuICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuaXNBbmltYXRpb25DYWNoZWQoKSkge1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIENhY2hlIG1vZGUgYW5kIGhhcyBhbmltYXRpb24gcXVldWUuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lzQW5pQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvblF1ZXVlLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5faGVhZEFuaUluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmcmFtZUNhY2hlID0gdGhpcy5fZnJhbWVDYWNoZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcmFtZUNhY2hlICYmIGZyYW1lQ2FjaGUuaXNJbnZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZUNhY2hlLnVwZGF0ZVRvRnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnJhbWVzID0gZnJhbWVDYWNoZS5mcmFtZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VyRnJhbWUgPSBmcmFtZXNbZnJhbWVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5faGVhZEFuaUluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hlYWRBbmlJbmZvID0gdGhpcy5fYW5pbWF0aW9uUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY2NUaW1lICs9IGR0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fYWNjVGltZSA+IHRoaXMuX2hlYWRBbmlJbmZvLmRlbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5pSW5mbyA9IHRoaXMuX2hlYWRBbmlJbmZvO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGVhZEFuaUluZm8gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltYXRpb24gKDAsIGFuaUluZm8uYW5pbWF0aW9uTmFtZSwgYW5pSW5mby5sb29wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNhY2hlKGR0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUmVhbHRpbWUoZHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxufSlcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/SDK/T2M.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7e393z1URF/Jne7MDcTxH+', 'T2M');
// frame/scripts/SDK/T2M.ts

"use strict";
/**
 * v2.2
 * Author: jinhailiang
 * Email: jinhailiang@tal.com
 * update-1.0: 2020_04_05:构建
 * update-1.1: 2020_10_29:用数组管理reducer，便于多个组件之间进行事件传输；
 * update-1.2: 2020_12_08:添加心跳同步和动作验证；
 * update-2.0: 2021_03_19:代码重构：核心功能解藕-此版本专注于实现游戏异步事件的管理；
 *              1.结构优化-更改API，用户可以按使用单机游戏事件管理器的方式使用此模块。
 *              2.通过增加待运行的事件队列解决偶现的动作执行错序问题。
 *              3.去除心跳同步，心跳同步作为普通异步事件的特例留给用户自定义。
 *              4.去除网络导致的动作错序验证，上层网络导致的动作错序和丢失问题 1）留给心跳同步解决 2）需对上层网络协议重新选择或优化。
 *              5.新增网络堵塞时，抛弃非关键数据功能。
 * update-2.1: 2021_04_06:无论是否同步操作方都直接调用回调函数；
 * update-2.2: 2021_04_07:去除action上携带的时间戳及关键数据标记，接收端通过update依次执行队列中的action，避免使用settimeout出现事件队列阻塞的问题；
 *
 * detail: T2M(type to method)用来管理数据同步，派发action时执行相应的方法。借助此模块，用户可以用开发单机游戏的方式开发同步游戏；
 * 跟开发单机游戏的区别：
 * 1. 反应速度-单机游戏是即时反应，同步游戏需要等一段时间，这段时间包括本模块为降低发送频率所设计的50ms的缓存时间和网络传输消耗的时间。
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.T2M = exports.T2MClass = exports.SendData = exports.Action = void 0;
var FrameMsgType_1 = require("../Data/FrameMsgType");
var NetWork_1 = require("../Http/NetWork");
var ListenerManager_1 = require("../Manager/ListenerManager");
var SyncDataManager_1 = require("../Manager/SyncDataManager");
var UIHelp_1 = require("../Utils/UIHelp");
var GameMsg_1 = require("./GameMsg");
var Action = /** @class */ (function () {
    function Action() {
        this.type = '';
        this.syncData = JSON.parse(JSON.stringify(SyncDataManager_1.SyncDataManager.getSyncData()));
        this.data = null;
    }
    return Action;
}());
exports.Action = Action;
var SendData = /** @class */ (function () {
    function SendData(isHeartBreak, data) {
        this.isHeartBreak = false;
        this.data = [];
        this.isHeartBreak = isHeartBreak || false;
        this.data = data || [];
    }
    return SendData;
}());
exports.SendData = SendData;
var T2MClass = /** @class */ (function () {
    function T2MClass() {
        this._map = new Map();
        this._isSync = false;
        this._isInit = false;
        this._cacheList = [];
        this._waitRunActionList = [];
        this._sendTime = 0;
        this._lastEventTime = 0;
        this.isRecover = false;
        this._heartCount = 0;
        this._heartInterval = 1000;
        this._fastHeartCount = 4;
    }
    T2MClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new T2MClass();
        }
        return this._instance;
    };
    /**
     * 初始化：gamemsg注册监听事件，初始化发送时间
     */
    T2MClass.prototype.init = function () {
        this.setSync(NetWork_1.NetWork.isSync);
        if (!this._isInit) {
            GameMsg_1.default.recv_sync_data(this.actionSyncHandler.bind(this));
            // GameMsg.recv_sync_3s_data(this.onHeartBreakHandler.bind(this));
            this._lastSendTime = Date.now();
            this.addSyncEventListener(FrameMsgType_1.FrameMsgType.ON_HEART_BREAK, this.onHeartBreak.bind(this));
            this.setFastHeartBreakState();
            this._isInit = true;
            GameMsg_1.default.request_sync_init();
        }
    };
    T2MClass.prototype.onReturnToTeacherPanel = function () {
        this._isSync = false;
    };
    /**
     * 设置是否派发同步事件
     * @param isSync  为true时发送同步事件，否则发送单机事件
     */
    T2MClass.prototype.setSync = function (isSync) {
        this._isSync = isSync;
    };
    /**
     * 为事件类型注册监听器
     * @param type  监听的事件类型
     * @param listener  监听器回调函数
     */
    T2MClass.prototype.addSyncEventListener = function (type, listener) {
        this._map.set(type, listener);
    };
    /**
     * 移除事件监听
     * @param type  事件类型
     */
    T2MClass.prototype.removeSyncEventListener = function (type) {
        if (this._map.has(type)) {
            this._map.delete(type);
        }
    };
    /**
     * 派发事件，接收端接收到事件后会触发对应的回调函数
     * @param type  事件类型
     * @param data  发送的数据
     * @param addCache  是否放入缓存。当设置为true时，会将派发的事件放入一个缓存队列中，等一段时间后统一发送；当设置为false时，会立即派发。拖拽事件建议设置为true。
     */
    T2MClass.prototype.dispatch = function (type, data, addCache) {
        if (addCache === void 0) { addCache = true; }
        var syncAction = new Action();
        syncAction.type = type;
        syncAction.data = data;
        if (this._isSync) {
            if (FrameMsgType_1.FrameMsgType.ON_HEART_BREAK === type) {
                var sendData = new SendData(true, [syncAction]);
                GameMsg_1.default.send_sync_data(sendData);
            }
            else {
                // 非心跳事件不发全量数据
                syncAction.syncData = null;
                if (addCache) {
                    this._cacheList.push(syncAction);
                }
                else {
                    var sendData = new SendData(false, [syncAction]);
                    GameMsg_1.default.send_sync_data(sendData);
                }
            }
            this._sendTime = Date.now();
        }
        else {
            if (this._map.has(type)) {
                if (FrameMsgType_1.FrameMsgType.ON_HEART_BREAK !== type) {
                    this._map.get(type)(data);
                }
            }
            else {
                console.log("Listener type is null! type = " + type);
            }
        }
    };
    /**
     * 监听心跳
     * @param data
     */
    T2MClass.prototype.onHeartBreak = function (data) {
        if (SyncDataManager_1.SyncDataManager.syncData.frameSyncData.actionId !== data.frameSyncData.actionId) {
            ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_RECOVERY_DATA, data);
        }
        if (!this.isRecover) {
            this.isRecover = true;
            UIHelp_1.UIHelp.closeRecoverMask();
            // -999为接着玩预留字段，取消接着玩时不发送 ON_FIRST_BREAK 事件
            if (-999 !== data.frameSyncData.actionId) {
                ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_FIRST_BREAK, null);
            }
            // 检测心跳数据量，过大给提醒
            var dataStr = JSON.stringify(data);
            console.log('SyncData length: ', dataStr.length);
            if (dataStr.length > 1024 * 5) {
                console.warn('心跳数据量过大！ dataStr.length: ', dataStr.length);
            }
        }
    };
    /**
     * 1.发送端通过心跳发送缓存事件，每隔一段时间(50ms)发送一次缓存队列；
     * 2.接受端执行待执行缓存队列中的action；
     * 3.使用时需要在组件的update周期函数中调用此函数；
     */
    T2MClass.prototype.update = function () {
        if (!this._isInit)
            return;
        this.sendSyncEvent();
        this.sendHeartBreak();
        this.runActions();
    };
    /**
     * 发送事件
     */
    T2MClass.prototype.sendSyncEvent = function () {
        if (Date.now() - this._lastSendTime >= 50) {
            if (this._cacheList.length > 0) {
                var sendData = new SendData(false, this._cacheList);
                GameMsg_1.default.send_sync_data(sendData);
                this._cacheList = [];
                this._sendTime = Date.now();
            }
            this._lastSendTime = Date.now();
        }
    };
    T2MClass.prototype.setFastHeartBreakState = function () {
        this._sendTime = 0;
        this._heartCount = 0;
        this._heartInterval = 1000;
    };
    /**
     * 发送心跳包
     */
    T2MClass.prototype.sendHeartBreak = function () {
        if (Date.now() - this._sendTime > this._heartInterval && (NetWork_1.NetWork.isSupportKeepPlay || NetWork_1.NetWork.isMaster)) {
            // const syncData = SyncDataManager.getSyncData();
            this.dispatch(FrameMsgType_1.FrameMsgType.ON_HEART_BREAK, null, false);
            this._sendTime = Date.now();
            ++this._heartCount;
            if (this._fastHeartCount === this._heartCount) {
                this._heartInterval = 3000;
            }
            cc.log('sendHeartBreak');
        }
    };
    /**
     * 接受端接收到数据时的回调
     */
    T2MClass.prototype.actionSyncHandler = function (data) {
        var actions = data.data.data;
        // 重新玩或接着玩时，如果播放器拿不到心跳数据，会发一个内容为null的心跳
        if (!actions) {
            var tmpAction = new Action();
            tmpAction.type = FrameMsgType_1.FrameMsgType.ON_HEART_BREAK;
            actions = [tmpAction];
            data.data.data = actions;
            this.onHeartBreakHandler(data);
            return;
        }
        if (1 === actions.length && FrameMsgType_1.FrameMsgType.ON_HEART_BREAK === actions[0].type) {
            if (!NetWork_1.NetWork.isMaster) {
                this.onHeartBreakHandler(data);
            }
            return;
        }
        // 接着玩兼容旧端 学生端接收到第一次心跳后才处理同步事件
        if (NetWork_1.NetWork.isSupportKeepPlay || NetWork_1.NetWork.isMaster || this.isRecover) {
            if (this._waitRunActionList.length == 0) {
                this._waitRunActionList = __spreadArrays(actions);
            }
            else {
                this._waitRunActionList = __spreadArrays(this._waitRunActionList, actions);
            }
            this._lastEventTime = Date.now();
        }
    };
    /**
     *
     * @param data 接收心跳数据
     */
    T2MClass.prototype.onHeartBreakHandler = function (data) {
        var actions = data.data.data;
        // 收到操作事件2S内不处理心跳（防止旧的心跳数据覆盖当前状态）
        if (Date.now() - this._lastEventTime > 2000) {
            if (this._waitRunActionList.length == 0) {
                this._waitRunActionList = __spreadArrays(actions);
            }
            else {
                this._waitRunActionList = __spreadArrays(this._waitRunActionList, actions);
            }
        }
    };
    /**
     * 依次运行缓存中的action
     */
    T2MClass.prototype.runActions = function () {
        var waitRunActionsNum = this._waitRunActionList.length;
        if (waitRunActionsNum > 0) {
            var updateTime = Date.now() - this._lastUpdateTime;
            var minEnterTimePerAction = 7;
            var maxNeedRunActionNum = Math.floor(updateTime / minEnterTimePerAction);
            var runNum = Math.min(waitRunActionsNum, maxNeedRunActionNum);
            var action = this._waitRunActionList[0];
            if (FrameMsgType_1.FrameMsgType.ON_HEART_BREAK !== action.type) {
                for (var i = 0; i < runNum; i++) {
                    var action_1 = this._waitRunActionList.shift();
                    if (this._map.has(action_1.type)) {
                        this._map.get(action_1.type)(action_1.data);
                    }
                    ++SyncDataManager_1.SyncDataManager.syncData.frameSyncData.actionId;
                }
            }
            else {
                this._waitRunActionList.shift();
                this._map.get(action.type)(action.syncData);
            }
        }
        this._lastUpdateTime = Date.now();
    };
    T2MClass._instance = null;
    return T2MClass;
}());
exports.T2MClass = T2MClass;
exports.T2M = T2MClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFNES1xcVDJNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRzs7Ozs7Ozs7OztBQUVILHFEQUFvRDtBQUNwRCwyQ0FBMEM7QUFDMUMsOERBQTZEO0FBRTdELDhEQUF1RTtBQUN2RSwwQ0FBeUM7QUFDekMscUNBQWdDO0FBRWhDO0lBQUE7UUFDSSxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0UsU0FBSSxHQUFRLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQUQsYUFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksd0JBQU07QUFNbkI7SUFJSSxrQkFBWSxZQUFzQixFQUFFLElBQWU7UUFIbkQsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQUdoQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksSUFBSSxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSw0QkFBUTtBQVVyQjtJQUFBO1FBR1ksU0FBSSxHQUEwQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixlQUFVLEdBQWtCLEVBQUUsQ0FBQztRQUcvQix1QkFBa0IsR0FBa0IsRUFBRSxDQUFDO1FBQ3ZDLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDNUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVyxH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dEMsQ0FBQztJQXBRYyxrQkFBUyxHQUFhLElBQUksQ0FBQztJQXFROUMsZUFBQztDQXRRRCxBQXNRQyxJQUFBO0FBdFFZLDRCQUFRO0FBd1FSLFFBQUEsR0FBRyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogdjIuMlxuICogQXV0aG9yOiBqaW5oYWlsaWFuZ1xuICogRW1haWw6IGppbmhhaWxpYW5nQHRhbC5jb21cbiAqIHVwZGF0ZS0xLjA6IDIwMjBfMDRfMDU65p6E5bu6XG4gKiB1cGRhdGUtMS4xOiAyMDIwXzEwXzI5OueUqOaVsOe7hOeuoeeQhnJlZHVjZXLvvIzkvr/kuo7lpJrkuKrnu4Tku7bkuYvpl7Tov5vooYzkuovku7bkvKDovpPvvJtcbiAqIHVwZGF0ZS0xLjI6IDIwMjBfMTJfMDg65re75Yqg5b+D6Lez5ZCM5q2l5ZKM5Yqo5L2c6aqM6K+B77ybXG4gKiB1cGRhdGUtMi4wOiAyMDIxXzAzXzE5OuS7o+eggemHjeaehO+8muaguOW/g+WKn+iDveino+iXlS3mraTniYjmnKzkuJPms6jkuo7lrp7njrDmuLjmiI/lvILmraXkuovku7bnmoTnrqHnkIbvvJtcbiAqICAgICAgICAgICAgICAxLue7k+aehOS8mOWMli3mm7TmlLlBUEnvvIznlKjmiLflj6/ku6XmjInkvb/nlKjljZXmnLrmuLjmiI/kuovku7bnrqHnkIblmajnmoTmlrnlvI/kvb/nlKjmraTmqKHlnZfjgIJcbiAqICAgICAgICAgICAgICAyLumAmui/h+WinuWKoOW+hei/kOihjOeahOS6i+S7tumYn+WIl+ino+WGs+WBtueOsOeahOWKqOS9nOaJp+ihjOmUmeW6j+mXrumimOOAglxuICogICAgICAgICAgICAgIDMu5Y676Zmk5b+D6Lez5ZCM5q2l77yM5b+D6Lez5ZCM5q2l5L2c5Li65pmu6YCa5byC5q2l5LqL5Lu255qE54m55L6L55WZ57uZ55So5oi36Ieq5a6a5LmJ44CCXG4gKiAgICAgICAgICAgICAgNC7ljrvpmaTnvZHnu5zlr7zoh7TnmoTliqjkvZzplJnluo/pqozor4HvvIzkuIrlsYLnvZHnu5zlr7zoh7TnmoTliqjkvZzplJnluo/lkozkuKLlpLHpl67popggMe+8ieeVmee7meW/g+i3s+WQjOatpeino+WGsyAy77yJ6ZyA5a+55LiK5bGC572R57uc5Y2P6K6u6YeN5paw6YCJ5oup5oiW5LyY5YyW44CCXG4gKiAgICAgICAgICAgICAgNS7mlrDlop7nvZHnu5zloLXloZ7ml7bvvIzmipvlvIPpnZ7lhbPplK7mlbDmja7lip/og73jgIJcbiAqIHVwZGF0ZS0yLjE6IDIwMjFfMDRfMDY65peg6K665piv5ZCm5ZCM5q2l5pON5L2c5pa56YO955u05o6l6LCD55So5Zue6LCD5Ye95pWw77ybXG4gKiB1cGRhdGUtMi4yOiAyMDIxXzA0XzA3OuWOu+mZpGFjdGlvbuS4iuaQuuW4pueahOaXtumXtOaIs+WPiuWFs+mUruaVsOaNruagh+iusO+8jOaOpeaUtuerr+mAmui/h3VwZGF0ZeS+neasoeaJp+ihjOmYn+WIl+S4reeahGFjdGlvbu+8jOmBv+WFjeS9v+eUqHNldHRpbWVvdXTlh7rnjrDkuovku7bpmJ/liJfpmLvloZ7nmoTpl67popjvvJtcbiAqXG4gKiBkZXRhaWw6IFQyTSh0eXBlIHRvIG1ldGhvZCnnlKjmnaXnrqHnkIbmlbDmja7lkIzmraXvvIzmtL7lj5FhY3Rpb27ml7bmiafooYznm7jlupTnmoTmlrnms5XjgILlgJ/liqnmraTmqKHlnZfvvIznlKjmiLflj6/ku6XnlKjlvIDlj5HljZXmnLrmuLjmiI/nmoTmlrnlvI/lvIDlj5HlkIzmraXmuLjmiI/vvJtcbiAqIOi3n+W8gOWPkeWNleacuua4uOaIj+eahOWMuuWIq++8mlxuICogMS4g5Y+N5bqU6YCf5bqmLeWNleacuua4uOaIj+aYr+WNs+aXtuWPjeW6lO+8jOWQjOatpea4uOaIj+mcgOimgeetieS4gOauteaXtumXtO+8jOi/meauteaXtumXtOWMheaLrOacrOaooeWdl+S4uumZjeS9juWPkemAgemikeeOh+aJgOiuvuiuoeeahDUwbXPnmoTnvJPlrZjml7bpl7TlkoznvZHnu5zkvKDovpPmtojogJfnmoTml7bpl7TjgIJcbiAqL1xuXG5pbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBOZXRXb3JrIH0gZnJvbSAnLi4vSHR0cC9OZXRXb3JrJztcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcbmltcG9ydCB7IFJlcG9ydE1hbmFnZXIgfSBmcm9tICcuLi9NYW5hZ2VyL1JlcG9ydE1hbmFnZXInO1xuaW1wb3J0IHsgU3luY0RhdGEsIFN5bmNEYXRhTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyJztcbmltcG9ydCB7IFVJSGVscCB9IGZyb20gJy4uL1V0aWxzL1VJSGVscCc7XG5pbXBvcnQgR2FtZU1zZyBmcm9tICcuL0dhbWVNc2cnO1xuXG5leHBvcnQgY2xhc3MgQWN0aW9uIHtcbiAgICB0eXBlOiBzdHJpbmcgPSAnJztcbiAgICBzeW5jRGF0YTogU3luY0RhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpKSk7XG4gICAgZGF0YTogYW55ID0gbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIFNlbmREYXRhIHtcbiAgICBpc0hlYXJ0QnJlYWs6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBkYXRhOiBBY3Rpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoaXNIZWFydEJyZWFrPzogYm9vbGVhbiwgZGF0YT86IEFjdGlvbltdKSB7XG4gICAgICAgIHRoaXMuaXNIZWFydEJyZWFrID0gaXNIZWFydEJyZWFrIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFQyTUNsYXNzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFQyTUNsYXNzID0gbnVsbDtcblxuICAgIHByaXZhdGUgX21hcDogTWFwPHN0cmluZywgRnVuY3Rpb24+ID0gbmV3IE1hcCgpO1xuICAgIHByaXZhdGUgX2lzU3luYzogQm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2lzSW5pdDogQm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2NhY2hlTGlzdDogQXJyYXk8QWN0aW9uPiA9IFtdO1xuICAgIHByaXZhdGUgX2xhc3RTZW5kVGltZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2xhc3RVcGRhdGVUaW1lOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfd2FpdFJ1bkFjdGlvbkxpc3Q6IEFycmF5PEFjdGlvbj4gPSBbXTtcbiAgICBwcml2YXRlIF9zZW5kVGltZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9sYXN0RXZlbnRUaW1lOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBpc1JlY292ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9oZWFydENvdW50OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2hlYXJ0SW50ZXJ2YWw6IG51bWJlciA9IDEwMDA7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfZmFzdEhlYXJ0Q291bnQgPSA0O1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFQyTUNsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMlu+8mmdhbWVtc2fms6jlhoznm5HlkKzkuovku7bvvIzliJ3lp4vljJblj5HpgIHml7bpl7RcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZXRTeW5jKE5ldFdvcmsuaXNTeW5jKTtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0luaXQpIHtcbiAgICAgICAgICAgIEdhbWVNc2cucmVjdl9zeW5jX2RhdGEodGhpcy5hY3Rpb25TeW5jSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIC8vIEdhbWVNc2cucmVjdl9zeW5jXzNzX2RhdGEodGhpcy5vbkhlYXJ0QnJlYWtIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5fbGFzdFNlbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHRoaXMuYWRkU3luY0V2ZW50TGlzdGVuZXIoRnJhbWVNc2dUeXBlLk9OX0hFQVJUX0JSRUFLLCB0aGlzLm9uSGVhcnRCcmVhay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RmFzdEhlYXJ0QnJlYWtTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5faXNJbml0ID0gdHJ1ZTtcbiAgICAgICAgICAgIEdhbWVNc2cucmVxdWVzdF9zeW5jX2luaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblJldHVyblRvVGVhY2hlclBhbmVsKCkge1xuICAgICAgICB0aGlzLl9pc1N5bmMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7mmK/lkKbmtL7lj5HlkIzmraXkuovku7ZcbiAgICAgKiBAcGFyYW0gaXNTeW5jICDkuLp0cnVl5pe25Y+R6YCB5ZCM5q2l5LqL5Lu277yM5ZCm5YiZ5Y+R6YCB5Y2V5py65LqL5Lu2XG4gICAgICovXG4gICAgcHVibGljIHNldFN5bmMoaXNTeW5jOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzU3luYyA9IGlzU3luYztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkuLrkuovku7bnsbvlnovms6jlhoznm5HlkKzlmahcbiAgICAgKiBAcGFyYW0gdHlwZSAg55uR5ZCs55qE5LqL5Lu257G75Z6LXG4gICAgICogQHBhcmFtIGxpc3RlbmVyICDnm5HlkKzlmajlm57osIPlh73mlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkU3luY0V2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5fbWFwLnNldCh0eXBlLCBsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog56e76Zmk5LqL5Lu255uR5ZCsXG4gICAgICogQHBhcmFtIHR5cGUgIOS6i+S7tuexu+Wei1xuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVTeW5jRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX21hcC5oYXModHlwZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX21hcC5kZWxldGUodHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmtL7lj5Hkuovku7bvvIzmjqXmlLbnq6/mjqXmlLbliLDkuovku7blkI7kvJrop6blj5Hlr7nlupTnmoTlm57osIPlh73mlbBcbiAgICAgKiBAcGFyYW0gdHlwZSAg5LqL5Lu257G75Z6LXG4gICAgICogQHBhcmFtIGRhdGEgIOWPkemAgeeahOaVsOaNrlxuICAgICAqIEBwYXJhbSBhZGRDYWNoZSAg5piv5ZCm5pS+5YWl57yT5a2Y44CC5b2T6K6+572u5Li6dHJ1ZeaXtu+8jOS8muWwhua0vuWPkeeahOS6i+S7tuaUvuWFpeS4gOS4que8k+WtmOmYn+WIl+S4re+8jOetieS4gOauteaXtumXtOWQjue7n+S4gOWPkemAge+8m+W9k+iuvue9ruS4umZhbHNl5pe277yM5Lya56uL5Y2z5rS+5Y+R44CC5ouW5ou95LqL5Lu25bu66K6u6K6+572u5Li6dHJ1ZeOAglxuICAgICAqL1xuICAgIHB1YmxpYyBkaXNwYXRjaCh0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSwgYWRkQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGxldCBzeW5jQWN0aW9uID0gbmV3IEFjdGlvbigpO1xuICAgICAgICBzeW5jQWN0aW9uLnR5cGUgPSB0eXBlO1xuICAgICAgICBzeW5jQWN0aW9uLmRhdGEgPSBkYXRhO1xuICAgICAgICBpZiAodGhpcy5faXNTeW5jKSB7XG4gICAgICAgICAgICBpZiAoRnJhbWVNc2dUeXBlLk9OX0hFQVJUX0JSRUFLID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbmREYXRhID0gbmV3IFNlbmREYXRhKHRydWUsIFtzeW5jQWN0aW9uXSk7XG4gICAgICAgICAgICAgICAgR2FtZU1zZy5zZW5kX3N5bmNfZGF0YShzZW5kRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOmdnuW/g+i3s+S6i+S7tuS4jeWPkeWFqOmHj+aVsOaNrlxuICAgICAgICAgICAgICAgIHN5bmNBY3Rpb24uc3luY0RhdGEgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChhZGRDYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUxpc3QucHVzaChzeW5jQWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VuZERhdGEgPSBuZXcgU2VuZERhdGEoZmFsc2UsIFtzeW5jQWN0aW9uXSk7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVNc2cuc2VuZF9zeW5jX2RhdGEoc2VuZERhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3NlbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXAuaGFzKHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEZyYW1lTXNnVHlwZS5PTl9IRUFSVF9CUkVBSyAhPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXAuZ2V0KHR5cGUpKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYExpc3RlbmVyIHR5cGUgaXMgbnVsbCEgdHlwZSA9ICR7dHlwZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebkeWQrOW/g+i3s1xuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBvbkhlYXJ0QnJlYWsoZGF0YTogU3luY0RhdGEpIHtcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5zeW5jRGF0YS5mcmFtZVN5bmNEYXRhLmFjdGlvbklkICE9PSBkYXRhLmZyYW1lU3luY0RhdGEuYWN0aW9uSWQpIHtcbiAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuT05fUkVDT1ZFUllfREFUQSwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaXNSZWNvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVjb3ZlciA9IHRydWU7XG4gICAgICAgICAgICBVSUhlbHAuY2xvc2VSZWNvdmVyTWFzaygpO1xuXG4gICAgICAgICAgICAvLyAtOTk55Li65o6l552A546p6aKE55WZ5a2X5q6177yM5Y+W5raI5o6l552A546p5pe25LiN5Y+R6YCBIE9OX0ZJUlNUX0JSRUFLIOS6i+S7tlxuICAgICAgICAgICAgaWYgKC05OTkgIT09IGRhdGEuZnJhbWVTeW5jRGF0YS5hY3Rpb25JZCkge1xuICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuT05fRklSU1RfQlJFQUssIG51bGwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmo4DmtYvlv4Pot7PmlbDmja7ph4/vvIzov4flpKfnu5nmj5DphpJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFTdHIgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTeW5jRGF0YSBsZW5ndGg6ICcsIGRhdGFTdHIubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChkYXRhU3RyLmxlbmd0aCA+IDEwMjQgKiA1KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCflv4Pot7PmlbDmja7ph4/ov4flpKfvvIEgZGF0YVN0ci5sZW5ndGg6ICcsIGRhdGFTdHIubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIDEu5Y+R6YCB56uv6YCa6L+H5b+D6Lez5Y+R6YCB57yT5a2Y5LqL5Lu277yM5q+P6ZqU5LiA5q615pe26Ze0KDUwbXMp5Y+R6YCB5LiA5qyh57yT5a2Y6Zif5YiX77ybXG4gICAgICogMi7mjqXlj5fnq6/miafooYzlvoXmiafooYznvJPlrZjpmJ/liJfkuK3nmoRhY3Rpb27vvJtcbiAgICAgKiAzLuS9v+eUqOaXtumcgOimgeWcqOe7hOS7tueahHVwZGF0ZeWRqOacn+WHveaVsOS4reiwg+eUqOatpOWHveaVsO+8m1xuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNJbml0KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5zZW5kU3luY0V2ZW50KCk7XG4gICAgICAgIHRoaXMuc2VuZEhlYXJ0QnJlYWsoKTtcbiAgICAgICAgdGhpcy5ydW5BY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Y+R6YCB5LqL5Lu2XG4gICAgICovXG4gICAgcHJpdmF0ZSBzZW5kU3luY0V2ZW50KCkge1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHRoaXMuX2xhc3RTZW5kVGltZSA+PSA1MCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbmREYXRhID0gbmV3IFNlbmREYXRhKGZhbHNlLCB0aGlzLl9jYWNoZUxpc3QpO1xuICAgICAgICAgICAgICAgIEdhbWVNc2cuc2VuZF9zeW5jX2RhdGEoc2VuZERhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2xhc3RTZW5kVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RmFzdEhlYXJ0QnJlYWtTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5fc2VuZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLl9oZWFydENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5faGVhcnRJbnRlcnZhbCA9IDEwMDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Y+R6YCB5b+D6Lez5YyFXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZW5kSGVhcnRCcmVhaygpIHtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSB0aGlzLl9zZW5kVGltZSA+IHRoaXMuX2hlYXJ0SW50ZXJ2YWwgJiYgKE5ldFdvcmsuaXNTdXBwb3J0S2VlcFBsYXkgfHwgTmV0V29yay5pc01hc3RlcikpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IHN5bmNEYXRhID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5PTl9IRUFSVF9CUkVBSywgbnVsbCwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5fc2VuZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgKyt0aGlzLl9oZWFydENvdW50O1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Zhc3RIZWFydENvdW50ID09PSB0aGlzLl9oZWFydENvdW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGVhcnRJbnRlcnZhbCA9IDMwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5sb2coJ3NlbmRIZWFydEJyZWFrJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmjqXlj5fnq6/mjqXmlLbliLDmlbDmja7ml7bnmoTlm57osINcbiAgICAgKi9cbiAgICBwcml2YXRlIGFjdGlvblN5bmNIYW5kbGVyKGRhdGE6IGFueSkge1xuICAgICAgICBsZXQgYWN0aW9ucyA9IGRhdGEuZGF0YS5kYXRhO1xuXG4gICAgICAgIC8vIOmHjeaWsOeOqeaIluaOpeedgOeOqeaXtu+8jOWmguaenOaSreaUvuWZqOaLv+S4jeWIsOW/g+i3s+aVsOaNru+8jOS8muWPkeS4gOS4quWGheWuueS4um51bGznmoTlv4Pot7NcbiAgICAgICAgaWYgKCFhY3Rpb25zKSB7XG4gICAgICAgICAgICBsZXQgdG1wQWN0aW9uID0gbmV3IEFjdGlvbigpO1xuICAgICAgICAgICAgdG1wQWN0aW9uLnR5cGUgPSBGcmFtZU1zZ1R5cGUuT05fSEVBUlRfQlJFQUs7XG4gICAgICAgICAgICBhY3Rpb25zID0gW3RtcEFjdGlvbl07XG4gICAgICAgICAgICBkYXRhLmRhdGEuZGF0YSA9IGFjdGlvbnM7XG4gICAgICAgICAgICB0aGlzLm9uSGVhcnRCcmVha0hhbmRsZXIoZGF0YSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoMSA9PT0gYWN0aW9ucy5sZW5ndGggJiYgRnJhbWVNc2dUeXBlLk9OX0hFQVJUX0JSRUFLID09PSBhY3Rpb25zWzBdLnR5cGUpIHtcbiAgICAgICAgICAgIGlmICghTmV0V29yay5pc01hc3Rlcikge1xuICAgICAgICAgICAgICAgIHRoaXMub25IZWFydEJyZWFrSGFuZGxlcihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaOpeedgOeOqeWFvOWuueaXp+erryDlrabnlJ/nq6/mjqXmlLbliLDnrKzkuIDmrKHlv4Pot7PlkI7miY3lpITnkIblkIzmraXkuovku7ZcbiAgICAgICAgaWYgKE5ldFdvcmsuaXNTdXBwb3J0S2VlcFBsYXkgfHwgTmV0V29yay5pc01hc3RlciB8fCB0aGlzLmlzUmVjb3Zlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3dhaXRSdW5BY3Rpb25MaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2FpdFJ1bkFjdGlvbkxpc3QgPSBbLi4uYWN0aW9uc107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dhaXRSdW5BY3Rpb25MaXN0ID0gWy4uLnRoaXMuX3dhaXRSdW5BY3Rpb25MaXN0LCAuLi5hY3Rpb25zXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2xhc3RFdmVudFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSDmjqXmlLblv4Pot7PmlbDmja5cbiAgICAgKi9cbiAgICBwcml2YXRlIG9uSGVhcnRCcmVha0hhbmRsZXIoZGF0YTogYW55KSB7XG4gICAgICAgIGxldCBhY3Rpb25zID0gZGF0YS5kYXRhLmRhdGE7XG4gICAgICAgIC8vIOaUtuWIsOaTjeS9nOS6i+S7tjJT5YaF5LiN5aSE55CG5b+D6Lez77yI6Ziy5q2i5pen55qE5b+D6Lez5pWw5o2u6KaG55uW5b2T5YmN54q25oCB77yJXG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gdGhpcy5fbGFzdEV2ZW50VGltZSA+IDIwMDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl93YWl0UnVuQWN0aW9uTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dhaXRSdW5BY3Rpb25MaXN0ID0gWy4uLmFjdGlvbnNdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93YWl0UnVuQWN0aW9uTGlzdCA9IFsuLi50aGlzLl93YWl0UnVuQWN0aW9uTGlzdCwgLi4uYWN0aW9uc107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkvp3mrKHov5DooYznvJPlrZjkuK3nmoRhY3Rpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIHJ1bkFjdGlvbnMoKSB7XG4gICAgICAgIGxldCB3YWl0UnVuQWN0aW9uc051bSA9IHRoaXMuX3dhaXRSdW5BY3Rpb25MaXN0Lmxlbmd0aDtcbiAgICAgICAgaWYgKHdhaXRSdW5BY3Rpb25zTnVtID4gMCkge1xuICAgICAgICAgICAgbGV0IHVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy5fbGFzdFVwZGF0ZVRpbWU7XG4gICAgICAgICAgICBsZXQgbWluRW50ZXJUaW1lUGVyQWN0aW9uID0gNztcbiAgICAgICAgICAgIGxldCBtYXhOZWVkUnVuQWN0aW9uTnVtID0gTWF0aC5mbG9vcih1cGRhdGVUaW1lIC8gbWluRW50ZXJUaW1lUGVyQWN0aW9uKTtcbiAgICAgICAgICAgIGxldCBydW5OdW0gPSBNYXRoLm1pbih3YWl0UnVuQWN0aW9uc051bSwgbWF4TmVlZFJ1bkFjdGlvbk51bSk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gdGhpcy5fd2FpdFJ1bkFjdGlvbkxpc3RbMF07XG4gICAgICAgICAgICBpZiAoRnJhbWVNc2dUeXBlLk9OX0hFQVJUX0JSRUFLICE9PSBhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnVuTnVtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGlvbjogQWN0aW9uID0gdGhpcy5fd2FpdFJ1bkFjdGlvbkxpc3Quc2hpZnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWFwLmhhcyhhY3Rpb24udHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21hcC5nZXQoYWN0aW9uLnR5cGUpKGFjdGlvbi5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICsrU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuYWN0aW9uSWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93YWl0UnVuQWN0aW9uTGlzdC5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21hcC5nZXQoYWN0aW9uLnR5cGUpKGFjdGlvbi5zeW5jRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFQyTSA9IFQyTUNsYXNzLmdldEluc3RhbmNlKCk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1694s8BidGvaCpzhIeiAbf', 'BaseGamePanel');
// frame/scripts/UI/Panel/BaseGamePanel.ts

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
var ConstValue_1 = require("../../../../game/scripts/Data/ConstValue");
var EditorManager_1 = require("../../../../game/scripts/Manager/EditorManager");
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var NetWork_1 = require("../../Http/NetWork");
var ListenerManager_1 = require("../../Manager/ListenerManager");
var ReportManager_1 = require("../../Manager/ReportManager");
var SoundManager_1 = require("../../Manager/SoundManager");
var SyncDataManager_1 = require("../../Manager/SyncDataManager");
var UIManager_1 = require("../../Manager/UIManager");
var GameMsg_1 = require("../../SDK/GameMsg");
var T2M_1 = require("../../SDK/T2M");
var UIHelp_1 = require("../../Utils/UIHelp");
var BaseUI_1 = require("../BaseUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseGamePanel = /** @class */ (function (_super) {
    __extends(BaseGamePanel, _super);
    function BaseGamePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isPanelReady = false;
        _this.isRresult = true;
        return _this;
    }
    // onLoad () {}
    BaseGamePanel.prototype.start = function () {
        var loading = document.getElementById('loading-full');
        if (loading) {
            loading.style.display = 'none';
        }
        if (this.data && this.data.node && this.data.node.parent) {
            this.data.node.removeFromParent();
        }
        // 发送GameStart
        GameMsg_1.default.gameStart(this.isRresult);
        EditorManager_1.EditorManager.hasResult = this.isRresult;
        this.addSDKEventListener();
        if (NetWork_1.NetWork.isSync && !NetWork_1.NetWork.isMaster) {
            UIHelp_1.UIHelp.showRecoverMask();
        }
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.TEACHER_PANEL_LOADING, false);
        if (ConstValue_1.ConstValue.IS_TEACHER) {
            this.panelReady();
            UIHelp_1.UIHelp.showUploadAndReturnPanel();
        }
        else {
            this.getNet();
        }
    };
    BaseGamePanel.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        UIHelp_1.UIHelp.closeMask();
    };
    BaseGamePanel.prototype.panelReady = function () {
        this._isPanelReady = true;
        if (UIManager_1.UIManager.isGameShowing) {
            this.setPanel();
        }
        else {
            cc.game.pause();
        }
    };
    BaseGamePanel.prototype.setPanel = function () {
        T2M_1.T2M.init();
        SyncDataManager_1.SyncDataManager.initSyncData();
        ReportManager_1.ReportManager.initReportData(EditorManager_1.EditorManager.getLevelCount());
        if (!NetWork_1.NetWork.isSync || NetWork_1.NetWork.isMaster) {
            UIHelp_1.UIHelp.closeRecoverMask();
        }
        if (EditorManager_1.EditorManager.editorData.isStarCount) {
            cc.resources.load('prefab/ui/panel/OverTips');
        }
        else {
            cc.resources.load('prefab/ui/panel/StarCount');
        }
    };
    BaseGamePanel.prototype.onRecoveryData = function (recovery) {
        SyncDataManager_1.SyncDataManager.setSyncData(recovery);
        if (SyncDataManager_1.SyncDataManager.syncData.frameSyncData.showGameOver) {
            this.showGameOverPanel();
        }
        else {
            UIHelp_1.UIHelp.closeOverTips();
            UIHelp_1.UIHelp.closeStarCount();
        }
    };
    BaseGamePanel.prototype.answerRight = function (isCurLevelFinish) {
        ReportManager_1.ReportManager.reportLevelResult(true, isCurLevelFinish);
    };
    BaseGamePanel.prototype.answerWrong = function (isCurLevelFinish) {
        if (isCurLevelFinish === void 0) { isCurLevelFinish = false; }
        ReportManager_1.ReportManager.reportLevelResult(false, isCurLevelFinish);
    };
    BaseGamePanel.prototype.gameOver = function () {
        SyncDataManager_1.SyncDataManager.syncData.frameSyncData.showGameOver = true;
        this.showGameOverPanel();
    };
    BaseGamePanel.prototype.showGameOverPanel = function () {
        UIHelp_1.UIHelp.showMask();
        SoundManager_1.SoundManager.stopAll();
        console.log("====SyncDataManager.syncData.frameSyncData.hasReplayCount", SyncDataManager_1.SyncDataManager.syncData.frameSyncData.hasReplayCount);
        var isShowReplay = EditorManager_1.EditorManager.editorData.isReplay &&
            SyncDataManager_1.SyncDataManager.syncData.frameSyncData.hasReplayCount < EditorManager_1.EditorManager.editorData.replayCount;
        if (ReportManager_1.ReportManager.isPassGame() && ReportManager_1.ReportManager.isPassAdditonal()) {
            SyncDataManager_1.SyncDataManager.syncData.frameSyncData.isGameOver = true; // 游戏是否结束
        }
        if (EditorManager_1.EditorManager.editorData.isStarCount) {
            UIHelp_1.UIHelp.showStarCount(isShowReplay);
        }
        else {
            var str = 1 === EditorManager_1.EditorManager.getLevelCount() ? '挑战成功' : '闯关成功';
            UIHelp_1.UIHelp.showOverTips(2, '', null, str, isShowReplay);
        }
    };
    BaseGamePanel.prototype.onGameShow = function () {
        if (this._isPanelReady) {
            cc.game.resume();
            this.setPanel();
        }
    };
    BaseGamePanel.prototype.onReplay = function () {
        UIHelp_1.UIHelp.closeOverTips();
        UIHelp_1.UIHelp.closeStarCount();
        SyncDataManager_1.SyncDataManager.replay();
        ReportManager_1.ReportManager.replayGame();
    };
    /**
     * 附加题
     */
    BaseGamePanel.prototype.onEnterAdditional = function () {
        UIHelp_1.UIHelp.closeOverTips();
        UIHelp_1.UIHelp.closeStarCount();
    };
    BaseGamePanel.prototype.addSDKEventListener = function () {
        // 小组课
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOP, this.onSDKMsgStopReceived.bind(this));
        // 小班课
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.ON_RECOVERY_DATA, this.onRecoveryData, this);
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.REPLAY_START, this.onReplay.bind(this));
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.ENTER_ADDITION, this.onEnterAdditional.bind(this));
        // 预加载：监听窗口打开
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.PRELOAD_GAME_SHOW, this.onGameShow.bind(this), this);
    };
    BaseGamePanel.prototype.getNet = function () {
        var _this = this;
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.GET_QUESTION + '?courseware_id=' + NetWork_1.NetWork.coursewareId, 'GET', 'application/json;charset=utf-8', function (err, response) {
            if (!err) {
                var response_data = response;
                if (Array.isArray(response_data.data)) {
                    return;
                }
                var content = JSON.parse(response_data.data.courseware_content);
                if (content != null) {
                    if (content.CoursewareKey == ConstValue_1.ConstValue.CoursewareKey) {
                        EditorManager_1.EditorManager.setData(content.data);
                        _this.panelReady();
                    }
                    else {
                        // coursewareKey错误
                        GameMsg_1.default.differntKey('CoursewareKey错误！');
                        UIHelp_1.UIHelp.showErrorPanel('CoursewareKey错误,请联系客服！', '', '', '确定');
                        return;
                    }
                }
            }
            else {
            }
        }, null);
    };
    // 游戏结束消息监听
    BaseGamePanel.prototype.onSDKMsgStopReceived = function () {
        //各游戏独立处理  先上报当前作答数据  后发送finish消息
        GameMsg_1.default.gameStop();
        //新课堂上报
        ReportManager_1.ReportManager.reportGameOver();
        GameMsg_1.default.finished();
    };
    BaseGamePanel.prototype.update = function (dt) {
        T2M_1.T2M.update();
    };
    BaseGamePanel.className = 'BaseGamePanel';
    __decorate([
        property
    ], BaseGamePanel.prototype, "isRresult", void 0);
    BaseGamePanel = __decorate([
        ccclass
    ], BaseGamePanel);
    return BaseGamePanel;
}(BaseUI_1.BaseUI));
exports.default = BaseGamePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcQmFzZUdhbWVQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBc0U7QUFDdEUsZ0ZBQStFO0FBQy9FLHdEQUF1RDtBQUN2RCw4Q0FBNkM7QUFDN0MsaUVBQWdFO0FBQ2hFLDZEQUE0RDtBQUM1RCwyREFBMEQ7QUFDMUQsaUVBQTBFO0FBQzFFLHFEQUFvRDtBQUNwRCw2Q0FBd0M7QUFDeEMscUNBQW9DO0FBQ3BDLDZDQUE0QztBQUM1QyxvQ0FBbUM7QUFFN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQU07SUFBakQ7UUFBQSxxRUEyTEM7UUF6TFcsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFHaEMsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUFzTHJDLENBQUM7SUFwTEcsZUFBZTtJQUVmLDZCQUFLLEdBQUw7UUFDSSxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RELElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3JDO1FBRUQsY0FBYztRQUNkLGlCQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyw2QkFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FB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QUFDLENBQUM7Z0JBQ2hFLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtvQkFDakIsSUFBSSxPQUFPLENBQUMsYUFBYSxJQUFJLHVCQUFVLENBQUMsYUFBYSxFQUFFO3dCQUNuRCw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BDLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztxQkFDckI7eUJBQU07d0JBQ0gsa0JBQWtCO3dCQUNsQixpQkFBTyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3dCQUN4QyxlQUFNLENBQUMsY0FBYyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzlELE9BQU87cUJBQ1Y7aUJBQ0o7YUFDSjtpQkFBTTthQUNOO1FBQ0wsQ0FBQyxFQUNELElBQUksQ0FDUCxDQUFDO0lBQ04sQ0FBQztJQUVELFdBQVc7SUFDSCw0Q0FBb0IsR0FBNUI7UUFDSSxpQ0FBaUM7UUFDakMsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQixPQUFPO1FBQ1AsNkJBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvQixpQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLFNBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBekxhLHVCQUFTLEdBQUcsZUFBZSxDQUFDO0lBSTFDO1FBREMsUUFBUTtvREFDd0I7SUFMaEIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTJMakM7SUFBRCxvQkFBQztDQTNMRCxBQTJMQyxDQTNMMEMsZUFBTSxHQTJMaEQ7a0JBM0xvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RWYWx1ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9EYXRhL0NvbnN0VmFsdWUnO1xyXG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XHJcbmltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRnJhbWVNc2dUeXBlJztcclxuaW1wb3J0IHsgTmV0V29yayB9IGZyb20gJy4uLy4uL0h0dHAvTmV0V29yayc7XHJcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcclxuaW1wb3J0IHsgUmVwb3J0TWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvUmVwb3J0TWFuYWdlcic7XHJcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvU291bmRNYW5hZ2VyJztcclxuaW1wb3J0IHsgU3luY0RhdGEsIFN5bmNEYXRhTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyJztcclxuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9VSU1hbmFnZXInO1xyXG5pbXBvcnQgR2FtZU1zZyBmcm9tICcuLi8uLi9TREsvR2FtZU1zZyc7XHJcbmltcG9ydCB7IFQyTSB9IGZyb20gJy4uLy4uL1NESy9UMk0nO1xyXG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xyXG5pbXBvcnQgeyBCYXNlVUkgfSBmcm9tICcuLi9CYXNlVUknO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VHYW1lUGFuZWwgZXh0ZW5kcyBCYXNlVUkge1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnQmFzZUdhbWVQYW5lbCc7XHJcbiAgICBwcml2YXRlIF9pc1BhbmVsUmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHB1YmxpYyBpc1JyZXN1bHQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGxldCBsb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRpbmctZnVsbCcpO1xyXG4gICAgICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubm9kZSAmJiB0aGlzLmRhdGEubm9kZS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Y+R6YCBR2FtZVN0YXJ0XHJcbiAgICAgICAgR2FtZU1zZy5nYW1lU3RhcnQodGhpcy5pc1JyZXN1bHQpO1xyXG4gICAgICAgIEVkaXRvck1hbmFnZXIuaGFzUmVzdWx0ID0gdGhpcy5pc1JyZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5hZGRTREtFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgaWYgKE5ldFdvcmsuaXNTeW5jICYmICFOZXRXb3JrLmlzTWFzdGVyKSB7XHJcbiAgICAgICAgICAgIFVJSGVscC5zaG93UmVjb3Zlck1hc2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5URUFDSEVSX1BBTkVMX0xPQURJTkcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgaWYgKENvbnN0VmFsdWUuSVNfVEVBQ0hFUikge1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsUmVhZHkoKTtcclxuICAgICAgICAgICAgVUlIZWxwLnNob3dVcGxvYWRBbmRSZXR1cm5QYW5lbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TmV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcclxuICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYW5lbFJlYWR5KCkge1xyXG4gICAgICAgIHRoaXMuX2lzUGFuZWxSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgaWYgKFVJTWFuYWdlci5pc0dhbWVTaG93aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGFuZWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5nYW1lLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXRQYW5lbCgpIHtcclxuICAgICAgICBUMk0uaW5pdCgpO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5pbml0U3luY0RhdGEoKTtcclxuICAgICAgICBSZXBvcnRNYW5hZ2VyLmluaXRSZXBvcnREYXRhKEVkaXRvck1hbmFnZXIuZ2V0TGV2ZWxDb3VudCgpKTtcclxuICAgICAgICBpZiAoIU5ldFdvcmsuaXNTeW5jIHx8IE5ldFdvcmsuaXNNYXN0ZXIpIHtcclxuICAgICAgICAgICAgVUlIZWxwLmNsb3NlUmVjb3Zlck1hc2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNTdGFyQ291bnQpIHtcclxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoJ3ByZWZhYi91aS9wYW5lbC9PdmVyVGlwcycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKCdwcmVmYWIvdWkvcGFuZWwvU3RhckNvdW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvblJlY292ZXJ5RGF0YShyZWNvdmVyeTogU3luY0RhdGEpIHtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuc2V0U3luY0RhdGEocmVjb3ZlcnkpO1xyXG4gICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuc3luY0RhdGEuZnJhbWVTeW5jRGF0YS5zaG93R2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93R2FtZU92ZXJQYW5lbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFVJSGVscC5jbG9zZU92ZXJUaXBzKCk7XHJcbiAgICAgICAgICAgIFVJSGVscC5jbG9zZVN0YXJDb3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYW5zd2VyUmlnaHQoaXNDdXJMZXZlbEZpbmlzaDogYm9vbGVhbikge1xyXG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwb3J0TGV2ZWxSZXN1bHQodHJ1ZSwgaXNDdXJMZXZlbEZpbmlzaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFuc3dlcldyb25nKGlzQ3VyTGV2ZWxGaW5pc2g6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwb3J0TGV2ZWxSZXN1bHQoZmFsc2UsIGlzQ3VyTGV2ZWxGaW5pc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnYW1lT3ZlcigpIHtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuc3luY0RhdGEuZnJhbWVTeW5jRGF0YS5zaG93R2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hvd0dhbWVPdmVyUGFuZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2hvd0dhbWVPdmVyUGFuZWwoKSB7XHJcbiAgICAgICAgVUlIZWxwLnNob3dNYXNrKCk7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BBbGwoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09U3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuaGFzUmVwbGF5Q291bnRcIiwgU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuaGFzUmVwbGF5Q291bnQpO1xyXG5cclxuICAgICAgICBsZXQgaXNTaG93UmVwbGF5OiBib29sZWFuID1cclxuICAgICAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzUmVwbGF5ICYmXHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5zeW5jRGF0YS5mcmFtZVN5bmNEYXRhLmhhc1JlcGxheUNvdW50IDwgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLnJlcGxheUNvdW50O1xyXG4gICAgICAgIGlmIChSZXBvcnRNYW5hZ2VyLmlzUGFzc0dhbWUoKSAmJiBSZXBvcnRNYW5hZ2VyLmlzUGFzc0FkZGl0b25hbCgpKSB7XHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5zeW5jRGF0YS5mcmFtZVN5bmNEYXRhLmlzR2FtZU92ZXIgPSB0cnVlOyAvLyDmuLjmiI/mmK/lkKbnu5PmnZ9cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1N0YXJDb3VudCkge1xyXG4gICAgICAgICAgICBVSUhlbHAuc2hvd1N0YXJDb3VudChpc1Nob3dSZXBsYXkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBzdHIgPSAxID09PSBFZGl0b3JNYW5hZ2VyLmdldExldmVsQ291bnQoKSA/ICfmjJHmiJjmiJDlip8nIDogJ+mXr+WFs+aIkOWKnyc7XHJcbiAgICAgICAgICAgIFVJSGVscC5zaG93T3ZlclRpcHMoMiwgJycsIG51bGwsIHN0ciwgaXNTaG93UmVwbGF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkdhbWVTaG93KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc1BhbmVsUmVhZHkpIHtcclxuICAgICAgICAgICAgY2MuZ2FtZS5yZXN1bWUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRQYW5lbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25SZXBsYXkoKSB7XHJcbiAgICAgICAgVUlIZWxwLmNsb3NlT3ZlclRpcHMoKTtcclxuICAgICAgICBVSUhlbHAuY2xvc2VTdGFyQ291bnQoKTtcclxuXHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLnJlcGxheSgpO1xyXG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwbGF5R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZmE5Yqg6aKYXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvbkVudGVyQWRkaXRpb25hbCgpIHtcclxuICAgICAgICBVSUhlbHAuY2xvc2VPdmVyVGlwcygpO1xyXG4gICAgICAgIFVJSGVscC5jbG9zZVN0YXJDb3VudCgpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcHJpdmF0ZSBhZGRTREtFdmVudExpc3RlbmVyKCkge1xyXG4gICAgICAgIC8vIOWwj+e7hOivvlxyXG4gICAgICAgIEdhbWVNc2cuYWRkRXZlbnQoRnJhbWVNc2dUeXBlLlNUT1AsIHRoaXMub25TREtNc2dTdG9wUmVjZWl2ZWQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8g5bCP54+t6K++XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEZyYW1lTXNnVHlwZS5PTl9SRUNPVkVSWV9EQVRBLCB0aGlzLm9uUmVjb3ZlcnlEYXRhLCB0aGlzKTtcclxuXHJcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKEZyYW1lTXNnVHlwZS5SRVBMQVlfU1RBUlQsIHRoaXMub25SZXBsYXkuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcihGcmFtZU1zZ1R5cGUuRU5URVJfQURESVRJT04sIHRoaXMub25FbnRlckFkZGl0aW9uYWwuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIOmihOWKoOi9ve+8muebkeWQrOeql+WPo+aJk+W8gFxyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihGcmFtZU1zZ1R5cGUuUFJFTE9BRF9HQU1FX1NIT1csIHRoaXMub25HYW1lU2hvdy5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5ldCgpIHtcclxuICAgICAgICBOZXRXb3JrLmh0dHBSZXF1ZXN0KFxyXG4gICAgICAgICAgICBOZXRXb3JrLkdFVF9RVUVTVElPTiArICc/Y291cnNld2FyZV9pZD0nICsgTmV0V29yay5jb3Vyc2V3YXJlSWQsXHJcbiAgICAgICAgICAgICdHRVQnLFxyXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04JyxcclxuICAgICAgICAgICAgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlX2RhdGEgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNwb25zZV9kYXRhLmRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBKU09OLnBhcnNlKHJlc3BvbnNlX2RhdGEuZGF0YS5jb3Vyc2V3YXJlX2NvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQuQ291cnNld2FyZUtleSA9PSBDb25zdFZhbHVlLkNvdXJzZXdhcmVLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRvck1hbmFnZXIuc2V0RGF0YShjb250ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbFJlYWR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb3Vyc2V3YXJlS2V56ZSZ6K+vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lTXNnLmRpZmZlcm50S2V5KCdDb3Vyc2V3YXJlS2V56ZSZ6K+v77yBJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVSUhlbHAuc2hvd0Vycm9yUGFuZWwoJ0NvdXJzZXdhcmVLZXnplJnor68s6K+36IGU57O75a6i5pyN77yBJywgJycsICcnLCAn56Gu5a6aJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5ri45oiP57uT5p2f5raI5oGv55uR5ZCsXHJcbiAgICBwcml2YXRlIG9uU0RLTXNnU3RvcFJlY2VpdmVkKCkge1xyXG4gICAgICAgIC8v5ZCE5ri45oiP54us56uL5aSE55CGICDlhYjkuIrmiqXlvZPliY3kvZznrZTmlbDmja4gIOWQjuWPkemAgWZpbmlzaOa2iOaBr1xyXG4gICAgICAgIEdhbWVNc2cuZ2FtZVN0b3AoKTtcclxuICAgICAgICAvL+aWsOivvuWgguS4iuaKpVxyXG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwb3J0R2FtZU92ZXIoKTtcclxuICAgICAgICBHYW1lTXNnLmZpbmlzaGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgVDJNLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f5171dGpWFGFZGEuFaQdUkt', 'AudioPlayExtension');
// frame/scripts/Utils/AudioPlayExtension.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayExtension = void 0;
var SoundManager_1 = require("./../Manager/SoundManager");
/**期望发音与'resources/audio'文件夹下资源名称的对应配置 */
var AudioConfig = {
    例: 'sfx_buttn',
    子: 'sfx_error',
};
/**音频播放扩展方法 */
var AudioPlayExtension = /** @class */ (function () {
    function AudioPlayExtension() {
    }
    /**
     * 播放多个音频资源组成的一段内容
     * @param content AudioConfig中的key组成的内容, eg: '例子例子'
     * @param finish 完成回调
     */
    AudioPlayExtension.playJoinAudio = function (content, finish) {
        if (content.length == 0) {
            console.warn('playJoinAudio : 内容为空!');
            finish();
            return;
        }
        var idx = 0;
        function next() {
            if (idx > content.length - 1) {
                console.log("'" + content + "' \u64AD\u653E\u5B8C\u6210.");
                finish();
                return;
            }
            SoundManager_1.SoundManager.playEffect(AudioConfig[content[idx]], false, false, false, next);
            idx++;
        }
        next();
    };
    return AudioPlayExtension;
}());
exports.AudioPlayExtension = AudioPlayExtension;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxBdWRpb1BsYXlFeHRlbnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXlEO0FBRXpELHlDQUF5QztBQUN6QyxJQUFJLFdBQVcsR0FBRztJQUNkLENBQUMsRUFBRSxXQUFXO0lBQ2QsQ0FBQyxFQUFFLFdBQVc7Q0FDakIsQ0FBQztBQUVGLGNBQWM7QUFDZDtJQUFBO0lBMEJBLENBQUM7SUF6Qkc7Ozs7T0FJRztJQUNXLGdDQUFhLEdBQTNCLFVBQTRCLE9BQWUsRUFBRSxNQUFnQjtRQUN6RCxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUN0QyxNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU87U0FDVjtRQUVELElBQUksR0FBRyxHQUFXLENBQUMsQ0FBQztRQUNwQixTQUFTLElBQUk7WUFDVCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFJLE9BQU8sZ0NBQVMsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNLEVBQUUsQ0FBQztnQkFDVCxPQUFPO2FBQ1Y7WUFFRCwyQkFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUUsR0FBRyxFQUFFLENBQUM7UUFDVixDQUFDO1FBQ0QsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4vLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXInO1xuXG4vKirmnJ/mnJvlj5Hpn7PkuI4ncmVzb3VyY2VzL2F1ZGlvJ+aWh+S7tuWkueS4i+i1hOa6kOWQjeensOeahOWvueW6lOmFjee9riAqL1xubGV0IEF1ZGlvQ29uZmlnID0ge1xuICAgIOS+izogJ3NmeF9idXR0bicsXG4gICAg5a2QOiAnc2Z4X2Vycm9yJyxcbn07XG5cbi8qKumfs+mikeaSreaUvuaJqeWxleaWueazlSAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvUGxheUV4dGVuc2lvbiB7XG4gICAgLyoqXG4gICAgICog5pKt5pS+5aSa5Liq6Z+z6aKR6LWE5rqQ57uE5oiQ55qE5LiA5q615YaF5a65XG4gICAgICogQHBhcmFtIGNvbnRlbnQgQXVkaW9Db25maWfkuK3nmoRrZXnnu4TmiJDnmoTlhoXlrrksIGVnOiAn5L6L5a2Q5L6L5a2QJ1xuICAgICAqIEBwYXJhbSBmaW5pc2gg5a6M5oiQ5Zue6LCDXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBwbGF5Sm9pbkF1ZGlvKGNvbnRlbnQ6IHN0cmluZywgZmluaXNoOiBGdW5jdGlvbikge1xuICAgICAgICBpZiAoY29udGVudC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdwbGF5Sm9pbkF1ZGlvIDog5YaF5a655Li656m6IScpO1xuICAgICAgICAgICAgZmluaXNoKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaWR4OiBudW1iZXIgPSAwO1xuICAgICAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgaWYgKGlkeCA+IGNvbnRlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAnJHtjb250ZW50fScg5pKt5pS+5a6M5oiQLmApO1xuICAgICAgICAgICAgICAgIGZpbmlzaCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoQXVkaW9Db25maWdbY29udGVudFtpZHhdXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgbmV4dCk7XG4gICAgICAgICAgICBpZHgrKztcbiAgICAgICAgfVxuICAgICAgICBuZXh0KCk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Data/FrameSyncData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98b4e33oG1P47hj2twQ6/jN', 'FrameSyncData');
// frame/scripts/Data/FrameSyncData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameSyncData = void 0;
/**
 * 框架中需要同步的数据
 * 对应 SyncDataManager.syncData.frameSyncData
 * @class FrameSyncData
 */
var FrameSyncData = /** @class */ (function () {
    function FrameSyncData() {
        this.actionId = 0; // 操作指令id
        this.isDispose = true; // 是否处理全量数据
        this.hasReplayCount = 0; // 已重玩的次数
        this.isGameOver = false; // 游戏是否结束
        this.isGameStart = false; // 游戏是否结束
        this.showGameOver = false; // 是否显示游戏结束
    }
    return FrameSyncData;
}());
exports.FrameSyncData = FrameSyncData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXERhdGFcXEZyYW1lU3luY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRztBQUNIO0lBQUE7UUFDVyxhQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUMvQixjQUFTLEdBQVksSUFBSSxDQUFDLENBQUMsV0FBVztRQUN0QyxtQkFBYyxHQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDckMsZUFBVSxHQUFZLEtBQUssQ0FBQyxDQUFDLFNBQVM7UUFDdEMsZ0JBQVcsR0FBWSxLQUFLLENBQUMsQ0FBQyxTQUFTO1FBQ3ZDLGlCQUFZLEdBQVksS0FBSyxDQUFDLENBQUMsV0FBVztJQUVyRCxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmoYbmnrbkuK3pnIDopoHlkIzmraXnmoTmlbDmja5cbiAqIOWvueW6lCBTeW5jRGF0YU1hbmFnZXIuc3luY0RhdGEuZnJhbWVTeW5jRGF0YVxuICogQGNsYXNzIEZyYW1lU3luY0RhdGFcbiAqL1xuZXhwb3J0IGNsYXNzIEZyYW1lU3luY0RhdGEge1xuICAgIHB1YmxpYyBhY3Rpb25JZDogbnVtYmVyID0gMDsgLy8g5pON5L2c5oyH5LukaWRcbiAgICBwdWJsaWMgaXNEaXNwb3NlOiBib29sZWFuID0gdHJ1ZTsgLy8g5piv5ZCm5aSE55CG5YWo6YeP5pWw5o2uXG4gICAgcHVibGljIGhhc1JlcGxheUNvdW50OiBudW1iZXIgPSAwOyAvLyDlt7Lph43njqnnmoTmrKHmlbBcbiAgICBwdWJsaWMgaXNHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlOyAvLyDmuLjmiI/mmK/lkKbnu5PmnZ9cbiAgICBwdWJsaWMgaXNHYW1lU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTsgLy8g5ri45oiP5piv5ZCm57uT5p2fXG4gICAgcHVibGljIHNob3dHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlOyAvLyDmmK/lkKbmmL7npLrmuLjmiI/nu5PmnZ9cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Components/DragGroupSync.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '785e4D6t3NM1rjAxHZUfJAb', 'DragGroupSync');
// game/scripts/Components/DragGroupSync.ts

"use strict";
/**
 * v2.0
 * Author: jinhailiang
 * Email: jinhailiang@tal.com
 */
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
var T2M_1 = require("../../../frame/scripts/SDK/T2M");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DragGroupSync = /** @class */ (function (_super) {
    __extends(DragGroupSync, _super);
    function DragGroupSync() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.touchStartEvents = [];
        _this.touchMovingEvents = [];
        _this.touchEndEvents = [];
        _this.nodes = [];
        return _this;
    }
    DragGroupSync.prototype.start = function () {
        var _this = this;
        this.node.children.forEach(function (node, index) {
            _this.nodes.push(node);
            node.zIndex = index;
            node.attr({ id: index, initParent: _this.node, initPos: { x: node.x, y: node.y }, initSiblingIndex: index });
            node.on(cc.Node.EventType.TOUCH_START, _this.touchStart, _this);
            node.on(cc.Node.EventType.TOUCH_MOVE, _this.touchMove, _this);
            node.on(cc.Node.EventType.TOUCH_END, _this.touchEnd, _this);
            node.on(cc.Node.EventType.TOUCH_CANCEL, _this.touchEnd, _this);
        });
        this.tagId = this.node.name + this.node.parent.name + this.node.getSiblingIndex();
        this.addEventByT2M();
    };
    DragGroupSync.prototype.touchStart = function (event) {
        var node = event.target;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var type = 'touchStart' + this.tagId + node.id;
        var data = { id: node.id, pos: { x: pos.x, y: pos.y } };
        T2M_1.T2M.dispatch(type, data);
    };
    DragGroupSync.prototype.touchMove = function (event) {
        var node = event.target;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var type = 'touchMove' + this.tagId + node.id;
        var data = { id: node.id, pos: { x: pos.x, y: pos.y } };
        T2M_1.T2M.dispatch(type, data);
    };
    DragGroupSync.prototype.touchEnd = function (event) {
        var node = event.target;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var type = 'touchEnd' + this.tagId + node.id;
        var data = { id: node.id, pos: { x: pos.x, y: pos.y } };
        T2M_1.T2M.dispatch(type, data);
    };
    DragGroupSync.prototype.addEventByT2M = function () {
        var _this = this;
        this.node.children.forEach(function (node, index) {
            //@ts-ignore
            T2M_1.T2M.addSyncEventListener('touchStart' + _this.tagId + node.id, _this.touchStartHandler.bind(_this));
            //@ts-ignore
            T2M_1.T2M.addSyncEventListener('touchMove' + _this.tagId + node.id, _this.touchMoveHandler.bind(_this));
            //@ts-ignore
            T2M_1.T2M.addSyncEventListener('touchEnd' + _this.tagId + node.id, _this.touchEndHandler.bind(_this));
        });
    };
    DragGroupSync.prototype.touchStartHandler = function (data) {
        //@ts-ignore
        var node = this.nodes.find(function (node) { return node.id == data.id; });
        node.parent = this.rootNode;
        node.setSiblingIndex(this.rootNode.childrenCount);
        node.position = cc.v3(data.pos.x, data.pos.y);
        for (var _i = 0, _a = this.touchStartEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: data.pos, target: node }]);
        }
    };
    DragGroupSync.prototype.touchMoveHandler = function (data) {
        //@ts-ignore
        var node = this.nodes.find(function (node) { return node.id == data.id; });
        node.position = cc.v3(data.pos.x, data.pos.y);
        for (var _i = 0, _a = this.touchMovingEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: data.pos, target: node }]);
        }
    };
    DragGroupSync.prototype.touchEndHandler = function (data) {
        //@ts-ignore
        var node = this.nodes.find(function (node) { return node.id == data.id; });
        node.position = cc.v3(data.pos.x, data.pos.y);
        for (var _i = 0, _a = this.touchEndEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: data.pos, target: node }]);
        }
    };
    __decorate([
        property(cc.Node)
    ], DragGroupSync.prototype, "rootNode", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragGroupSync.prototype, "touchStartEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragGroupSync.prototype, "touchMovingEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragGroupSync.prototype, "touchEndEvents", void 0);
    DragGroupSync = __decorate([
        ccclass
    ], DragGroupSync);
    return DragGroupSync;
}(cc.Component));
exports.default = DragGroupSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcQ29tcG9uZW50c1xcRHJhZ0dyb3VwU3luYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsc0RBQXFEO0FBRy9DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBMkZDO1FBekZXLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsc0JBQWdCLEdBQWdDLEVBQUUsQ0FBQztRQUVuRCx1QkFBaUIsR0FBZ0MsRUFBRSxDQUFDO1FBRXBELG9CQUFjLEdBQWdDLEVBQUUsQ0FBQztRQUdqRCxXQUFLLEdBQW1CLEVBQUUsQ0FBQzs7SUFnRnZDLENBQUM7SUE5RUcsNkJBQUssR0FBTDtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7WUFDbkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzVHLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEtBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ2xGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sa0NBQVUsR0FBbEIsVUFBbUIsS0FBMEI7UUFDekMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN4QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksSUFBSSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDL0MsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDeEQsU0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLGlDQUFTLEdBQWpCLFVBQWtCLEtBQTBCO1FBQ3hDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDeEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNsRSxJQUFJLElBQUksR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzlDLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3hELFNBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTyxnQ0FBUSxHQUFoQixVQUFpQixLQUEwQjtRQUN2QyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3hCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxJQUFJLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM3QyxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN4RCxTQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU8scUNBQWEsR0FBckI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVMsRUFBRSxLQUFLO1lBQ3hDLFlBQVk7WUFDWixTQUFHLENBQUMsb0JBQW9CLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7WUFDakcsWUFBWTtZQUNaLFNBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQztZQUMvRixZQUFZO1lBQ1osU0FBRyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQztRQUNqRyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyx5Q0FBaUIsR0FBekIsVUFBMEIsSUFBSTtRQUMxQixZQUFZO1FBQ1osSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLEtBQXlCLFVBQXFCLEVBQXJCLEtBQUEsSUFBSSxDQUFDLGdCQUFnQixFQUFyQixjQUFxQixFQUFyQixJQUFxQixFQUFFO1lBQTNDLElBQUksWUFBWSxTQUFBO1lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEQ7SUFDTCxDQUFDO0lBRU8sd0NBQWdCLEdBQXhCLFVBQXlCLElBQUk7UUFDekIsWUFBWTtRQUNaLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsS0FBeUIsVUFBc0IsRUFBdEIsS0FBQSxJQUFJLENBQUMsaUJBQWlCLEVBQXRCLGNBQXNCLEVBQXRCLElBQXNCLEVBQUU7WUFBNUMsSUFBSSxZQUFZLFNBQUE7WUFDakIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN4RDtJQUNMLENBQUM7SUFFTyx1Q0FBZSxHQUF2QixVQUF3QixJQUFJO1FBQ3hCLFlBQVk7UUFDWixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLEtBQXlCLFVBQW1CLEVBQW5CLEtBQUEsSUFBSSxDQUFDLGNBQWMsRUFBbkIsY0FBbUIsRUFBbkIsSUFBbUIsRUFBRTtZQUF6QyxJQUFJLFlBQVksU0FBQTtZQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0wsQ0FBQztJQXhGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDOzJEQUNXO0lBRTNEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDOzREQUNZO0lBRTVEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO3lEQUNTO0lBUnhDLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0EyRmpDO0lBQUQsb0JBQUM7Q0EzRkQsQUEyRkMsQ0EzRjBDLEVBQUUsQ0FBQyxTQUFTLEdBMkZ0RDtrQkEzRm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogdjIuMFxyXG4gKiBBdXRob3I6IGppbmhhaWxpYW5nXHJcbiAqIEVtYWlsOiBqaW5oYWlsaWFuZ0B0YWwuY29tXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgVDJNIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvU0RLL1QyTVwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnR3JvdXBTeW5jIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSByb290Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl0gfSlcclxuICAgIHByaXZhdGUgdG91Y2hTdGFydEV2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl0gfSlcclxuICAgIHByaXZhdGUgdG91Y2hNb3ZpbmdFdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJdIH0pXHJcbiAgICBwcml2YXRlIHRvdWNoRW5kRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHRhZ0lkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIG5vZGVzOiBBcnJheTxjYy5Ob2RlPiA9IFtdO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUuekluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIG5vZGUuYXR0cih7IGlkOiBpbmRleCwgaW5pdFBhcmVudDogdGhpcy5ub2RlLCBpbml0UG9zOiB7IHg6IG5vZGUueCwgeTogbm9kZS55IH0sIGluaXRTaWJsaW5nSW5kZXg6IGluZGV4IH0pO1xyXG4gICAgICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGFnSWQgPSB0aGlzLm5vZGUubmFtZSArIHRoaXMubm9kZS5wYXJlbnQubmFtZSArIHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50QnlUMk0oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5yb290Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBsZXQgdHlwZSA9ICd0b3VjaFN0YXJ0JyArIHRoaXMudGFnSWQgKyBub2RlLmlkO1xyXG4gICAgICAgIGxldCBkYXRhID0geyBpZDogbm9kZS5pZCwgcG9zOiB7IHg6IHBvcy54LCB5OiBwb3MueSB9IH07XHJcbiAgICAgICAgVDJNLmRpc3BhdGNoKHR5cGUsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hNb3ZlKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMucm9vdE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSAndG91Y2hNb3ZlJyArIHRoaXMudGFnSWQgKyBub2RlLmlkO1xyXG4gICAgICAgIGxldCBkYXRhID0geyBpZDogbm9kZS5pZCwgcG9zOiB7IHg6IHBvcy54LCB5OiBwb3MueSB9IH07XHJcbiAgICAgICAgVDJNLmRpc3BhdGNoKHR5cGUsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5yb290Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBsZXQgdHlwZSA9ICd0b3VjaEVuZCcgKyB0aGlzLnRhZ0lkICsgbm9kZS5pZDtcclxuICAgICAgICBsZXQgZGF0YSA9IHsgaWQ6IG5vZGUuaWQsIHBvczogeyB4OiBwb3MueCwgeTogcG9zLnkgfSB9O1xyXG4gICAgICAgIFQyTS5kaXNwYXRjaCh0eXBlLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEV2ZW50QnlUMk0oKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2goKG5vZGU6IGFueSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcigndG91Y2hTdGFydCcgKyB0aGlzLnRhZ0lkICsgbm9kZS5pZCwgdGhpcy50b3VjaFN0YXJ0SGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcigndG91Y2hNb3ZlJyArIHRoaXMudGFnSWQgKyBub2RlLmlkLCB0aGlzLnRvdWNoTW92ZUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoJ3RvdWNoRW5kJyArIHRoaXMudGFnSWQgKyBub2RlLmlkLCB0aGlzLnRvdWNoRW5kSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnRIYW5kbGVyKGRhdGEpIHtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZXMuZmluZCgobm9kZSkgPT4gbm9kZS5pZCA9PSBkYXRhLmlkKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMucm9vdE5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRTaWJsaW5nSW5kZXgodGhpcy5yb290Tm9kZS5jaGlsZHJlbkNvdW50KTtcclxuICAgICAgICBub2RlLnBvc2l0aW9uID0gY2MudjMoZGF0YS5wb3MueCwgZGF0YS5wb3MueSk7XHJcbiAgICAgICAgZm9yIChsZXQgZXZlbnRIYW5kbGVyIG9mIHRoaXMudG91Y2hTdGFydEV2ZW50cykge1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIuZW1pdChbeyBwb3M6IGRhdGEucG9zLCB0YXJnZXQ6IG5vZGUgfV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoTW92ZUhhbmRsZXIoZGF0YSkge1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2Rlcy5maW5kKChub2RlKSA9PiBub2RlLmlkID09IGRhdGEuaWQpO1xyXG4gICAgICAgIG5vZGUucG9zaXRpb24gPSBjYy52MyhkYXRhLnBvcy54LCBkYXRhLnBvcy55KTtcclxuICAgICAgICBmb3IgKGxldCBldmVudEhhbmRsZXIgb2YgdGhpcy50b3VjaE1vdmluZ0V2ZW50cykge1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIuZW1pdChbeyBwb3M6IGRhdGEucG9zLCB0YXJnZXQ6IG5vZGUgfV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoRW5kSGFuZGxlcihkYXRhKSB7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGVzLmZpbmQoKG5vZGUpID0+IG5vZGUuaWQgPT0gZGF0YS5pZCk7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IGNjLnYzKGRhdGEucG9zLngsIGRhdGEucG9zLnkpO1xyXG4gICAgICAgIGZvciAobGV0IGV2ZW50SGFuZGxlciBvZiB0aGlzLnRvdWNoRW5kRXZlbnRzKSB7XHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlci5lbWl0KFt7IHBvczogZGF0YS5wb3MsIHRhcmdldDogbm9kZSB9XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Manager/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fcb706mngZPXIeAjofYaIuT', 'UIManager');
// frame/scripts/Manager/UIManager.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EPANEL_ZORDER = exports.UIManager = void 0;
var BaseUI_1 = require("../UI/BaseUI");
var UIManagerClass = /** @class */ (function () {
    function UIManagerClass() {
        this.uiList = [];
        this.uiRoot = null;
        this.stateList = new Object();
        this.isGameShowing = true;
        // this.uiRoot = cc.find("Canvas");
    }
    UIManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new UIManagerClass();
        }
        return this._instance;
    };
    UIManagerClass.prototype.loadUI = function (uiClass, callback, onProgress) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            var progressFunc = function (completedCount, totalCount, item) {
                if (onProgress) {
                    onProgress(completedCount, totalCount, item);
                }
            };
            var completeFunc = function (error, asset) {
                if (error) {
                    cc.log(error);
                    return reject(null);
                }
                if (callback) {
                    callback(asset);
                }
                return resolve(asset);
            };
            if (uiClass.isFramePanel) {
                cc.assetManager.loadBundle('frameRes', function (err, bundle) {
                    if (err) {
                        cc.error(err);
                        return reject(null);
                    }
                    bundle.load(uiClass.getUrl(), progressFunc, completeFunc);
                });
            }
            else {
                cc.resources.load(uiClass.getUrl(), progressFunc, completeFunc);
            }
        });
    };
    UIManagerClass.prototype.openUI = function (uiClass, data, zOrder, callback, onProgress) {
        var args = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            args[_i - 5] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var prefab, uiNode, ui;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.uiRoot) {
                            this.uiRoot = cc.find('Canvas');
                        }
                        if (this.getUI(uiClass)) {
                            return [2 /*return*/, true];
                        }
                        this.stateList[uiClass.className] = true;
                        return [4 /*yield*/, this.loadUI(uiClass, function (asset) { }, onProgress)];
                    case 1:
                        prefab = _a.sent();
                        if (prefab) {
                            if (this.getUI(uiClass)) {
                                return [2 /*return*/, true];
                            }
                            if (!this.stateList[uiClass.className]) {
                                return [2 /*return*/, false];
                            }
                            uiNode = cc.instantiate(prefab);
                            uiNode.parent = this.uiRoot;
                            if (zOrder) {
                                uiNode.zIndex = zOrder;
                            }
                            ui = uiNode.getComponent(BaseUI_1.BaseUI);
                            ui.data = data;
                            ui.tag = uiClass;
                            this.uiList.push(ui);
                            if (callback) {
                                callback(args);
                            }
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManagerClass.prototype.closeUI = function (uiClass) {
        this.stateList[uiClass.className] = false;
        for (var i = 0; i < this.uiList.length; ++i) {
            if (this.uiList[i].tag === uiClass) {
                this.uiList[i].node.destroy();
                this.uiList.splice(i, 1);
                return;
            }
        }
    };
    UIManagerClass.prototype.closeAllUI = function () {
        for (var i = 0; i < this.uiList.length; ++i) {
            var uiClass = this.uiList[i];
            this.stateList[uiClass.name] = false;
            uiClass.node.destroy();
        }
        this.uiList = [];
    };
    UIManagerClass.prototype.showUI = function (uiClass, data, zOrder, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var ui, isOpen, ui_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ui = this.getUI(uiClass);
                        if (!ui) return [3 /*break*/, 1];
                        this.stateList[uiClass.className] = true;
                        ui.data = data;
                        ui.node.active = true;
                        ui.onShow();
                        if (callback) {
                            callback();
                        }
                        return [2 /*return*/, true];
                    case 1: return [4 /*yield*/, this.openUI(uiClass, data, zOrder)];
                    case 2:
                        isOpen = _a.sent();
                        if (isOpen) {
                            callback && callback();
                            ui_1 = this.getUI(uiClass);
                            ui_1.onShow();
                        }
                        return [2 /*return*/, isOpen];
                }
            });
        });
    };
    UIManagerClass.prototype.hideUI = function (uiClass) {
        var ui = this.getUI(uiClass);
        if (ui) {
            this.stateList[uiClass.className] = false;
            ui.node.active = false;
        }
    };
    UIManagerClass.prototype.getUI = function (uiClass) {
        for (var i = 0; i < this.uiList.length; ++i) {
            if (this.uiList[i].tag === uiClass) {
                return this.uiList[i];
            }
        }
        return null;
    };
    /**
     * 动态加载并获取resources目录中的资源
     * @param path resources下的资源路径
     * @param type
     * @param callback
     * @returns asset
     */
    UIManagerClass.prototype.getRes = function (path, type, callback) {
        return new Promise(function (resolve, reject) {
            cc.resources.load(path, type, function (error, asset) {
                if (error) {
                    cc.log(error);
                    return reject(error);
                }
                else {
                    callback && callback(asset);
                    return resolve(asset);
                }
            });
        });
    };
    /**
     * 动态加载并获取自定义bundle目录中的资源
     * @param bundleName 自定义bundle名字
     * @param path bundle下的资源路径
     * @param type
     * @param callback
     * @returns asset
     */
    UIManagerClass.prototype.getBundleRes = function (bundleName, path, type, callback) {
        return new Promise(function (resolve, reject) {
            cc.assetManager.loadBundle(bundleName, function (err, bundle) {
                if (err) {
                    cc.error(err);
                    return reject(err);
                }
                bundle.load(path, type, function (error, asset) {
                    if (error) {
                        cc.log(error);
                        return reject(error);
                    }
                    else {
                        callback && callback(asset);
                        return resolve(asset);
                    }
                });
            });
        });
    };
    UIManagerClass._instance = null;
    return UIManagerClass;
}());
exports.UIManager = UIManagerClass.getInstance();
var EPANEL_ZORDER;
(function (EPANEL_ZORDER) {
    EPANEL_ZORDER[EPANEL_ZORDER["NORMAL"] = 1] = "NORMAL";
    EPANEL_ZORDER[EPANEL_ZORDER["POPUP"] = 10] = "POPUP";
    EPANEL_ZORDER[EPANEL_ZORDER["MASK"] = 15] = "MASK";
    EPANEL_ZORDER[EPANEL_ZORDER["TIPS"] = 20] = "TIPS";
    EPANEL_ZORDER[EPANEL_ZORDER["ERROR"] = 30] = "ERROR";
    EPANEL_ZORDER[EPANEL_ZORDER["SUBMISSION"] = 40] = "SUBMISSION";
})(EPANEL_ZORDER = exports.EPANEL_ZORDER || (exports.EPANEL_ZORDER = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXE1hbmFnZXJcXFVJTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBK0M7QUFFL0M7SUFjSTtRQVpRLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixjQUFTLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUMxQixrQkFBYSxHQUFZLElBQUksQ0FBQztRQVVqQyxtQ0FBbUM7SUFDdkMsQ0FBQztJQVRhLDBCQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7U0FDekM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQU1NLCtCQUFNLEdBQWIsVUFBZ0MsT0FBbUIsRUFBRSxRQUFtQixFQUFFLFVBQXFCO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDM0csT0FBTyxJQUFJLE9BQU8sQ0FBWSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQzFDLElBQUksWUFBWSxHQUFHLFVBQUMsY0FBc0IsRUFBRSxVQUFrQixFQUFFLElBQVM7Z0JBQ3JFLElBQUksVUFBVSxFQUFFO29CQUNaLFVBQVUsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNoRDtZQUNMLENBQUMsQ0FBQztZQUVGLElBQUksWUFBWSxHQUFHLFVBQUMsS0FBWSxFQUFFLEtBQWdCO2dCQUM5QyxJQUFJLEtBQUssRUFBRTtvQkFDUCxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNkLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN2QjtnQkFDRCxJQUFJLFFBQVEsRUFBRTtvQkFDVixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ25CO2dCQUNELE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQztZQUVGLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtnQkFDdEIsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFVBQUMsR0FBVSxFQUFFLE1BQThCO29CQUM5RSxJQUFJLEdBQUcsRUFBRTt3QkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNkLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUN2QjtvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQzlELENBQUMsQ0FBQyxDQUFDO2FBQ047aUJBQU07Z0JBQ0gsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNuRTtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVZLCtCQUFNLEdBQW5CLFVBQ0ksT0FBbUIsRUFDbkIsSUFBVSxFQUNWLE1BQWUsRUFDZixRQUFtQixFQUNuQixVQUFxQjtRQUNyQixjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOzs7Ozs7O3dCQUVkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFOzRCQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDbkM7d0JBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUNyQixzQkFBTyxJQUFJLEVBQUM7eUJBQ2Y7d0JBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUU1QixxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQWdCLElBQU0sQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFBOzt3QkFBekUsTUFBTSxHQUFHLFNBQWdFO3dCQUM3RSxJQUFJLE1BQU0sRUFBRTs0QkFDUixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0NBQ3JCLHNCQUFPLElBQUksRUFBQzs2QkFDZjs0QkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0NBQ3BDLHNCQUFPLEtBQUssRUFBQzs2QkFDaEI7NEJBRUcsTUFBTSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQzdDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzs0QkFDNUIsSUFBSSxNQUFNLEVBQUU7Z0NBQ1IsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7NkJBQzFCOzRCQUNHLEVBQUUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQU0sQ0FBQyxDQUFDOzRCQUNyQyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs0QkFDZixFQUFFLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQzs0QkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ3JCLElBQUksUUFBUSxFQUFFO2dDQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDbEI7NEJBQ0Qsc0JBQU8sSUFBSSxFQUFDO3lCQUNmOzZCQUFNOzRCQUNILHNCQUFPLEtBQUssRUFBQzt5QkFDaEI7Ozs7O0tBQ0o7SUFFTSxnQ0FBTyxHQUFkLFVBQWlDLE9BQW1CO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDekMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE9BQU87YUFDVjtTQUNKO0lBQ0wsQ0FBQztJQUVNLG1DQUFVLEdBQWpCO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3pDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRVksK0JBQU0sR0FBbkIsVUFBc0MsT0FBbUIsRUFBRSxJQUFVLEVBQUUsTUFBZSxFQUFFLFFBQW1COzs7Ozs7d0JBQ25HLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzZCQUN6QixFQUFFLEVBQUYsd0JBQUU7d0JBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUN6QyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzt3QkFDZixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ3RCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDWixJQUFJLFFBQVEsRUFBRTs0QkFDVixRQUFRLEVBQUUsQ0FBQzt5QkFDZDt3QkFDRCxzQkFBTyxJQUFJLEVBQUM7NEJBRUcscUJBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFBOzt3QkFBakQsTUFBTSxHQUFHLFNBQXdDO3dCQUN2RCxJQUFJLE1BQU0sRUFBRTs0QkFDUixRQUFRLElBQUksUUFBUSxFQUFFLENBQUM7NEJBQ25CLE9BQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDN0IsSUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO3lCQUNmO3dCQUNELHNCQUFPLE1BQU0sRUFBQzs7OztLQUVyQjtJQUVNLCtCQUFNLEdBQWIsVUFBZ0MsT0FBbUI7UUFDL0MsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLEVBQUUsRUFBRTtZQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUMxQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRU0sOEJBQUssR0FBWixVQUErQixPQUFtQjtRQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDekMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQU0sQ0FBQzthQUM5QjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLCtCQUFNLEdBQWIsVUFBa0MsSUFBWSxFQUFFLElBQXFCLEVBQUUsUUFBNkI7UUFDaEcsT0FBTyxJQUFJLE9BQU8sQ0FBSSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2xDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBQyxLQUFZLEVBQUUsS0FBUTtnQkFDakQsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDZCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0gsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3pCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0kscUNBQVksR0FBbkIsVUFDSSxVQUFrQixFQUNsQixJQUFZLEVBQ1osSUFBcUIsRUFDckIsUUFBNkI7UUFFN0IsT0FBTyxJQUFJLE9BQU8sQ0FBSSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2xDLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFDLEdBQVUsRUFBRSxNQUE4QjtnQkFDOUUsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDZCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQUMsS0FBWSxFQUFFLEtBQVE7b0JBQzNDLElBQUksS0FBSyxFQUFFO3dCQUNQLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2QsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3hCO3lCQUFNO3dCQUNILFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzVCLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN6QjtnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBOU1jLHdCQUFTLEdBQW1CLElBQUksQ0FBQztJQStNcEQscUJBQUM7Q0FoTkQsQUFnTkMsSUFBQTtBQUVZLFFBQUEsU0FBUyxHQUFHLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUV0RCxJQUFZLGFBT1g7QUFQRCxXQUFZLGFBQWE7SUFDckIscURBQVUsQ0FBQTtJQUNWLG9EQUFVLENBQUE7SUFDVixrREFBUyxDQUFBO0lBQ1Qsa0RBQVMsQ0FBQTtJQUNULG9EQUFVLENBQUE7SUFDViw4REFBZSxDQUFBO0FBQ25CLENBQUMsRUFQVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQU94QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VVSSwgVUlDbGFzcyB9IGZyb20gJy4uL1VJL0Jhc2VVSSc7XG5cbmNsYXNzIFVJTWFuYWdlckNsYXNzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFVJTWFuYWdlckNsYXNzID0gbnVsbDtcbiAgICBwcml2YXRlIHVpTGlzdDogQmFzZVVJW10gPSBbXTtcbiAgICBwcml2YXRlIHVpUm9vdDogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBzdGF0ZUxpc3QgPSBuZXcgT2JqZWN0KCk7XG4gICAgcHVibGljIGlzR2FtZVNob3dpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBVSU1hbmFnZXJDbGFzcyB7XG4gICAgICAgIGlmIChudWxsID09PSB0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVUlNYW5hZ2VyQ2xhc3MoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHRoaXMudWlSb290ID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFVJPFQgZXh0ZW5kcyBCYXNlVUk+KHVpQ2xhc3M6IFVJQ2xhc3M8VD4sIGNhbGxiYWNrPzogRnVuY3Rpb24sIG9uUHJvZ3Jlc3M/OiBGdW5jdGlvbiwgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGNjLlByZWZhYj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzRnVuYyA9IChjb21wbGV0ZWRDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MoY29tcGxldGVkQ291bnQsIHRvdGFsQ291bnQsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCBjb21wbGV0ZUZ1bmMgPSAoZXJyb3I6IEVycm9yLCBhc3NldDogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhhc3NldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGFzc2V0KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh1aUNsYXNzLmlzRnJhbWVQYW5lbCkge1xuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKCdmcmFtZVJlcycsIChlcnI6IEVycm9yLCBidW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnVuZGxlLmxvYWQodWlDbGFzcy5nZXRVcmwoKSwgcHJvZ3Jlc3NGdW5jLCBjb21wbGV0ZUZ1bmMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1aUNsYXNzLmdldFVybCgpLCBwcm9ncmVzc0Z1bmMsIGNvbXBsZXRlRnVuYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBvcGVuVUk8VCBleHRlbmRzIEJhc2VVST4oXG4gICAgICAgIHVpQ2xhc3M6IFVJQ2xhc3M8VD4sXG4gICAgICAgIGRhdGE/OiBhbnksXG4gICAgICAgIHpPcmRlcj86IG51bWJlcixcbiAgICAgICAgY2FsbGJhY2s/OiBGdW5jdGlvbixcbiAgICAgICAgb25Qcm9ncmVzcz86IEZ1bmN0aW9uLFxuICAgICAgICAuLi5hcmdzOiBhbnlbXVxuICAgICkge1xuICAgICAgICBpZiAoIXRoaXMudWlSb290KSB7XG4gICAgICAgICAgICB0aGlzLnVpUm9vdCA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0VUkodWlDbGFzcykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZUxpc3RbdWlDbGFzcy5jbGFzc05hbWVdID0gdHJ1ZTtcblxuICAgICAgICBsZXQgcHJlZmFiID0gYXdhaXQgdGhpcy5sb2FkVUkodWlDbGFzcywgKGFzc2V0OiBjYy5QcmVmYWIpID0+IHt9LCBvblByb2dyZXNzKTtcbiAgICAgICAgaWYgKHByZWZhYikge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0VUkodWlDbGFzcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZUxpc3RbdWlDbGFzcy5jbGFzc05hbWVdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdWlOb2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIHVpTm9kZS5wYXJlbnQgPSB0aGlzLnVpUm9vdDtcbiAgICAgICAgICAgIGlmICh6T3JkZXIpIHtcbiAgICAgICAgICAgICAgICB1aU5vZGUuekluZGV4ID0gek9yZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHVpID0gdWlOb2RlLmdldENvbXBvbmVudChCYXNlVUkpO1xuICAgICAgICAgICAgdWkuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICB1aS50YWcgPSB1aUNsYXNzO1xuICAgICAgICAgICAgdGhpcy51aUxpc3QucHVzaCh1aSk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlVUk8VCBleHRlbmRzIEJhc2VVST4odWlDbGFzczogVUlDbGFzczxUPikge1xuICAgICAgICB0aGlzLnN0YXRlTGlzdFt1aUNsYXNzLmNsYXNzTmFtZV0gPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudWlMaXN0W2ldLnRhZyA9PT0gdWlDbGFzcykge1xuICAgICAgICAgICAgICAgIHRoaXMudWlMaXN0W2ldLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudWlMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VBbGxVSSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IHVpQ2xhc3MgPSB0aGlzLnVpTGlzdFtpXTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVMaXN0W3VpQ2xhc3MubmFtZV0gPSBmYWxzZTtcbiAgICAgICAgICAgIHVpQ2xhc3Mubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aUxpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2hvd1VJPFQgZXh0ZW5kcyBCYXNlVUk+KHVpQ2xhc3M6IFVJQ2xhc3M8VD4sIGRhdGE/OiBhbnksIHpPcmRlcj86IG51bWJlciwgY2FsbGJhY2s/OiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgdWkgPSB0aGlzLmdldFVJKHVpQ2xhc3MpO1xuICAgICAgICBpZiAodWkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVMaXN0W3VpQ2xhc3MuY2xhc3NOYW1lXSA9IHRydWU7XG4gICAgICAgICAgICB1aS5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgIHVpLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHVpLm9uU2hvdygpO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaXNPcGVuID0gYXdhaXQgdGhpcy5vcGVuVUkodWlDbGFzcywgZGF0YSwgek9yZGVyKTtcbiAgICAgICAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIGxldCB1aSA9IHRoaXMuZ2V0VUkodWlDbGFzcyk7XG4gICAgICAgICAgICAgICAgdWkub25TaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXNPcGVuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGVVSTxUIGV4dGVuZHMgQmFzZVVJPih1aUNsYXNzOiBVSUNsYXNzPFQ+KSB7XG4gICAgICAgIGxldCB1aSA9IHRoaXMuZ2V0VUkodWlDbGFzcyk7XG4gICAgICAgIGlmICh1aSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZUxpc3RbdWlDbGFzcy5jbGFzc05hbWVdID0gZmFsc2U7XG4gICAgICAgICAgICB1aS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldFVJPFQgZXh0ZW5kcyBCYXNlVUk+KHVpQ2xhc3M6IFVJQ2xhc3M8VD4pOiBUIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudWlMaXN0W2ldLnRhZyA9PT0gdWlDbGFzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVpTGlzdFtpXSBhcyBUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKqOaAgeWKoOi9veW5tuiOt+WPlnJlc291cmNlc+ebruW9leS4reeahOi1hOa6kFxuICAgICAqIEBwYXJhbSBwYXRoIHJlc291cmNlc+S4i+eahOi1hOa6kOi3r+W+hFxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMgYXNzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UmVzPFQgZXh0ZW5kcyBjYy5Bc3NldD4ocGF0aDogc3RyaW5nLCB0eXBlOiB0eXBlb2YgY2MuQXNzZXQsIGNhbGxiYWNrPzogKGFzc2V0OiBUKSA9PiB2b2lkKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCB0eXBlLCAoZXJyb3I6IEVycm9yLCBhc3NldDogVCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhhc3NldCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGFzc2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqo5oCB5Yqg6L295bm26I635Y+W6Ieq5a6a5LmJYnVuZGxl55uu5b2V5Lit55qE6LWE5rqQXG4gICAgICogQHBhcmFtIGJ1bmRsZU5hbWUg6Ieq5a6a5LmJYnVuZGxl5ZCN5a2XXG4gICAgICogQHBhcmFtIHBhdGggYnVuZGxl5LiL55qE6LWE5rqQ6Lev5b6EXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyBhc3NldFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRCdW5kbGVSZXM8VCBleHRlbmRzIGNjLkFzc2V0PihcbiAgICAgICAgYnVuZGxlTmFtZTogc3RyaW5nLFxuICAgICAgICBwYXRoOiBzdHJpbmcsXG4gICAgICAgIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCxcbiAgICAgICAgY2FsbGJhY2s/OiAoYXNzZXQ6IFQpID0+IHZvaWQsXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShidW5kbGVOYW1lLCAoZXJyOiBFcnJvciwgYnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1bmRsZS5sb2FkKHBhdGgsIHR5cGUsIChlcnJvcjogRXJyb3IsIGFzc2V0OiBUKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soYXNzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoYXNzZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgVUlNYW5hZ2VyID0gVUlNYW5hZ2VyQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcblxuZXhwb3J0IGVudW0gRVBBTkVMX1pPUkRFUiB7XG4gICAgTk9STUFMID0gMSwgLy/muLjmiI/nlYzpnaJcbiAgICBQT1BVUCA9IDEwLCAvL+W8ueeql1xuICAgIE1BU0sgPSAxNSwgLy/pga7nvalcbiAgICBUSVBTID0gMjAsIC8v5o+Q56S65qGGXG4gICAgRVJST1IgPSAzMCwgLy/plJnor6/mj5DnpLpcbiAgICBTVUJNSVNTSU9OID0gNDAsIC8v5o+Q5Lqk562U5qGIXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Manager/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0cd2sRJnFGkbmE879tvukm', 'SoundManager');
// frame/scripts/Manager/SoundManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundManager = exports.MusicType = void 0;
var FrameConstValue_1 = require("../Data/FrameConstValue");
var FrameMsgType_1 = require("../Data/FrameMsgType");
var NetWork_1 = require("../Http/NetWork");
var GameMsg_1 = require("../SDK/GameMsg");
var ListenerManager_1 = require("./ListenerManager");
var UIManager_1 = require("./UIManager");
/** 音乐的资源名称枚举 */
var MusicType;
(function (MusicType) {
    /** 背景音乐 */
    MusicType["BGM_MUSIC"] = "BGM_MUSIC";
    /** 题干语音 */
    MusicType["TITLE_AUDIO"] = "TITLE_AUDIO";
    /** 音效 */
    MusicType["GAME_EFFECT"] = "GAME_EFFECT";
    /** 语音 */
    MusicType["GAME_AUDIO"] = "GAME_AUDIO";
})(MusicType = exports.MusicType || (exports.MusicType = {}));
var SoundManagerClass = /** @class */ (function () {
    function SoundManagerClass() {
        this.playing_sound = new Object();
        // 缓存背景音乐名字
        this.bgm = '';
        this.bgmIndex = -1;
        // 语音列表
        this._audioList = new Map();
        // 音效列表
        this._effectList = new Map();
        // 音效统一的引用计数
        this._referenceList = new Map();
        // 题干语音
        this._titleID = null;
        /** 存放音频资源的 Map */
        this._audioClipMap = new Map();
        this.MUSIC_BGM = 'bgm';
        this.AUDIO_TITLE = 'audio_sound';
    }
    SoundManagerClass.prototype.start = function () {
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.PLAYBGM, this.playBGM.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.RESUMEBGM, this.resumeBGM.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOPBGM, this.stopBGM.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.PLAYAUDIOTITLE, this.playAudioTitle.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOPAUDIOTITLE, this.stopAudioTitle.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOPALLAUDIO, this.stopAllAudio.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOPALLEFFECT, this.stopAllEffect.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOPALL, this.stopAll.bind(this));
    };
    SoundManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new SoundManagerClass();
        }
        return this._instance;
    };
    // 获取音频资源
    SoundManagerClass.prototype.getAudioClip = function (clipName) {
        if (!this._audioClipMap.has(clipName)) {
            cc.log("\u672A\u7F13\u5B58\u7684\u97F3\u9891\u8D44\u6E90: " + clipName);
            return null;
        }
        else {
            return this._audioClipMap.get(clipName);
        }
    };
    // 加载resource里的音效资源
    SoundManagerClass.prototype.preLoadResAudio = function (callback) {
        var _this = this;
        var path = FrameConstValue_1.FrameConstValue.GAME_AUDIO_DIR;
        cc.resources.loadDir(path, cc.AudioClip, function (error, audioClips) {
            // 错误处理
            if (error) {
                cc.error(error);
                callback(false);
                return;
            }
            // 获取完毕后装入 Map
            audioClips.forEach(function (ele) {
                // cc.log('缓存完毕! ele.name == ' + ele.name);
                _this._audioClipMap.set(ele.name, ele);
                _this._referenceList.set(ele.name, 0);
            });
            // 执行回调返回进度
            callback(true);
        });
    };
    // 加载frameRes里的音效资源
    SoundManagerClass.prototype.preLoadFrameAudio = function (callback) {
        var _this = this;
        var path = FrameConstValue_1.FrameConstValue.FRAME_AUDIO_DIR;
        cc.assetManager.loadBundle('frameRes', function (err, bundle) {
            if (err) {
                cc.error(err);
                callback(false);
                return;
            }
            bundle.loadDir(path, cc.AudioClip, function (error, audioClips) {
                if (error) {
                    cc.error(error);
                    callback(false);
                    return;
                }
                audioClips.forEach(function (ele) {
                    // cc.log('缓存完毕! ele.name == ' + ele.name);
                    _this._audioClipMap.set(ele.name, ele);
                    _this._referenceList.set(ele.name, 0);
                });
                callback(true);
            });
        });
    };
    // 缓存所有音频资源
    SoundManagerClass.prototype.preLoadAllAudioClips = function (callback) {
        /** 加载代码，参数为 url，资源类型，进度回调，完成回调 */
        var isCompletedLoadResAudio = false;
        var isCompletedLoadFrameAudio = false;
        this.preLoadResAudio(function (isCompleted) {
            if (isCompleted) {
                cc.log('缓存完毕! preLoadResAudio ');
            }
            isCompletedLoadResAudio = true;
            if (isCompletedLoadResAudio && isCompletedLoadFrameAudio) {
                callback(true);
            }
        });
        this.preLoadFrameAudio(function (isCompleted) {
            if (isCompleted) {
                cc.log('缓存完毕! preLoadFrameAudio ');
            }
            isCompletedLoadFrameAudio = true;
            if (isCompletedLoadResAudio && isCompletedLoadFrameAudio) {
                callback(true);
            }
        });
    };
    // 单独缓存某一个音频
    SoundManagerClass.prototype.preloadAudioClipName = function (clipName, callback) {
        var _this = this;
        var path = FrameConstValue_1.FrameConstValue.GAME_AUDIO_DIR + clipName;
        cc.log('preloadAudioClipName path == ' + path);
        cc.resources.load(path, cc.AudioClip, function (error, asset) {
            if (error) {
                cc.error(error);
                return;
            }
            var clip = asset;
            _this._audioClipMap.set(clipName, clip);
            _this._referenceList.set(clipName, 0);
            cc.log('缓存完毕!');
            callback();
        });
    };
    /**
     * 播放背景音乐
     * @param soundName 背景音乐文件名
     */
    SoundManagerClass.prototype.playBGM = function (soundName) {
        var _this = this;
        if (soundName === void 0) { soundName = ''; }
        if (!UIManager_1.UIManager.isGameShowing) {
            cc.warn("\u4E0D\u8981\u5728GamePanel\u7684onLoad\u548Cstart\u91CC\u64AD\u653E\u97F3\u9891\uFF01");
            return;
        }
        if (NetWork_1.NetWork.channel == 'blackboard') {
            return;
        }
        if (soundName == '') {
            soundName = this.MUSIC_BGM;
        }
        this.bgm = soundName;
        this.bgmIndex = -1;
        cc.audioEngine.stopMusic();
        var path = FrameConstValue_1.FrameConstValue.GAME_AUDIO_DIR + soundName;
        cc.resources.load(path, cc.AudioClip, function (err, asset) {
            if (err) {
                cc.error(err);
                return;
            }
            var clip = asset;
            _this.bgmIndex = cc.audioEngine.playMusic(clip, true);
        });
    };
    //重新开始播放背景音乐
    SoundManagerClass.prototype.resumeBGM = function () {
        cc.audioEngine.stopMusic();
        var path = FrameConstValue_1.FrameConstValue.GAME_AUDIO_DIR + this.bgm;
        cc.resources.load(path, cc.AudioClip, function (err, asset) {
            if (err) {
                cc.error(err);
                return;
            }
            var clip = asset;
            cc.audioEngine.playMusic(clip, true);
        });
    };
    // 重新开始播放背景音乐
    SoundManagerClass.prototype.stopBGM = function () {
        this.bgm = '';
        this.bgmIndex = -1;
        cc.audioEngine.stopMusic();
    };
    // 设置背景音音量
    SoundManagerClass.prototype.setMusicVolume = function (volume, tweenDur) {
        var _this = this;
        if (tweenDur === void 0) { tweenDur = 0; }
        if (this.bgmIndex != -1) {
            volume = cc.misc.clamp01(volume);
            if (tweenDur == 0) {
                cc.audioEngine.setVolume(this.bgmIndex, volume);
            }
            else {
                var obj = { v: cc.audioEngine.getVolume(this.bgmIndex) };
                cc.tween(obj)
                    .to(tweenDur, { v: volume }, {
                    progress: function (start, end, current, ratio) {
                        var v = start + (end - start) * ratio;
                        cc.audioEngine.setVolume(_this.bgmIndex, v);
                    },
                })
                    .start();
            }
        }
    };
    /**
     * 播放题干语音
     *
     * @param {string} clipName 语音clip文件
     * @param {boolean} bLoop 是否循环
     * @param {boolean} [bInterupt=true] 是否打断其他语音,默认true
     * @param {boolean} [bMutex=false] 是否互斥（指音效和语音）,默认false
     * @memberof SoundManagerClass
     */
    SoundManagerClass.prototype.playAudioTitle = function (clipName, bLoop, bInterupt, bMutex, endCb) {
        if (bLoop === void 0) { bLoop = false; }
        if (bInterupt === void 0) { bInterupt = true; }
        if (bMutex === void 0) { bMutex = false; }
        if (endCb === void 0) { endCb = null; }
        // if (clipName == '') {
        //     clipName = this.AUDIO_TITLE;
        // }
        this.playAudio(clipName, bLoop, bInterupt, bMutex, endCb, true);
    };
    // ting zhi
    SoundManagerClass.prototype.stopAudioTitle = function () {
        var _this = this;
        this._audioList.forEach(function (value, key) {
            // cc.log("this._audioList value == "+value)
            // cc.log("this._audioList key == "+key)
            if (null != _this._titleID && _this._titleID === value) {
                _this._audioList.delete(key);
                cc.audioEngine.stopEffect(value);
            }
        });
        this._titleID = null;
        // 题干语音播放完回调
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.COMPLETE_TRUMPET);
    };
    /**
     * 播放语音
     *
     * @param {string} clipName 语音clip文件
     * @param {boolean} bLoop 是否循环
     * @param {boolean} [bInterupt=true] 是否打断其他语音,默认true
     * @param {boolean} [bMutex=false] 是否互斥（指音效和语音）,默认false
     * @memberof SoundManagerClass
     */
    SoundManagerClass.prototype.playAudio = function (clipName, bLoop, bInterupt, bMutex, onFinished, isTitleAudio) {
        var _this = this;
        if (bInterupt === void 0) { bInterupt = true; }
        if (bMutex === void 0) { bMutex = false; }
        if (onFinished === void 0) { onFinished = null; }
        if (isTitleAudio === void 0) { isTitleAudio = false; }
        if (!UIManager_1.UIManager.isGameShowing) {
            cc.warn("\u4E0D\u8981\u5728GamePanel\u7684onLoad\u548Cstart\u91CC\u64AD\u653E\u97F3\u9891\uFF01");
            return;
        }
        if (!clipName)
            return;
        bInterupt && this.stopAllAudio();
        bMutex && this.stopAllEffect();
        var clip = null;
        if (typeof clipName === 'string') {
            clip = this.getAudioClip(clipName);
            if (clip == null) {
                exports.SoundManager.preloadAudioClipName(clipName, function () {
                    clip = this._audioClipMap.get(clipName);
                    this.playAudio(clip, bLoop, bInterupt, bMutex, onFinished, isTitleAudio);
                }.bind(this));
                return;
            }
        }
        else {
            clip = clipName;
        }
        var id = cc.audioEngine.playEffect(clip, bLoop);
        // 赋值titleId
        if (isTitleAudio) {
            this._titleID = id;
            cc.log('this._titleID == ' + this._titleID);
        }
        this._audioList.set(clip.name, id);
        //播放引用计数加1
        var referenceCount = this._referenceList.get(clip.name);
        this._referenceList.set(clip.name, referenceCount++);
        cc.audioEngine.setFinishCallback(id, function () {
            //引用计数为0删除资源
            var referenceCount = _this._referenceList.get(clip.name);
            if (referenceCount-- <= 0) {
                _this.stopSoundByName(clip.name);
            }
            _this._referenceList.set(clip.name, referenceCount < 0 ? 0 : referenceCount);
            setTimeout(function () {
                onFinished && onFinished();
            }, 100);
        });
    };
    /**
     * 播放音效
     *
     * @param {string} clipName 音效clip文件
     * @param {boolean} bLoop 是否循环
     * @param {boolean} [bInterupt=true] 是否打断其他音效,默认true
     * @param {boolean} [bMutex=false] 是否互斥（指音效和语音）,默认false
     * @memberof SoundManagerClass
     */
    SoundManagerClass.prototype.playEffect = function (clipName, bLoop, bInterupt, bMutex, onFinished) {
        var _this = this;
        if (bInterupt === void 0) { bInterupt = true; }
        if (bMutex === void 0) { bMutex = false; }
        if (onFinished === void 0) { onFinished = null; }
        if (!UIManager_1.UIManager.isGameShowing) {
            cc.warn("\u4E0D\u8981\u5728GamePanel\u7684onLoad\u548Cstart\u91CC\u64AD\u653E\u97F3\u9891\uFF01");
            return;
        }
        if (!clipName)
            return;
        bInterupt && this.stopAllEffect();
        bMutex && this.stopAllAudio();
        var clip = null;
        if (typeof clipName === 'string') {
            clip = this.getAudioClip(clipName);
            if (clip == null) {
                exports.SoundManager.preloadAudioClipName(clipName, function () {
                    clip = this._audioClipMap.get(clipName);
                    this.playEffect(clip, bLoop, bInterupt, bMutex, onFinished);
                }.bind(this));
                return;
            }
        }
        else {
            clip = clipName;
        }
        var id = cc.audioEngine.playEffect(clip, bLoop);
        this._effectList.set(clip.name, id);
        //播放引用计数加1
        var referenceCount = this._referenceList.get(clip.name);
        this._referenceList.set(clip.name, referenceCount++);
        cc.audioEngine.setFinishCallback(id, function () {
            //引用计数为0删除资源
            var referenceCount = _this._referenceList.get(clip.name);
            if (referenceCount-- <= 0) {
                _this.stopSoundByName(clip.name);
            }
            _this._referenceList.set(clip.name, referenceCount < 0 ? 0 : referenceCount);
            setTimeout(function () {
                onFinished && onFinished();
            }, 100);
        });
    };
    // 设置音效大小
    SoundManagerClass.prototype.setEffectVolume = function (volume) {
        volume = cc.misc.clamp01(volume);
        this._audioList.forEach(function (value, key) {
            cc.audioEngine.setVolume(value, volume);
        });
    };
    // 停止语音
    SoundManagerClass.prototype.stopAllAudio = function () {
        var _this = this;
        this._audioList.forEach(function (value, key) {
            if (null != _this._titleID && _this._titleID === value) {
                // 题干语音播放完回调
                ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.COMPLETE_TRUMPET);
            }
            _this._referenceList.set(key, 0);
            cc.audioEngine.stopEffect(value);
        });
        this._audioList = new Map();
        this._titleID = null;
    };
    // 停止音效
    SoundManagerClass.prototype.stopAllEffect = function () {
        var _this = this;
        this._effectList.forEach(function (value, key) {
            _this._referenceList.set(key, 0);
            cc.audioEngine.stopEffect(value);
        });
        this._effectList = new Map();
    };
    // 停止播放指定的音频通过名字
    SoundManagerClass.prototype.stopSoundByName = function (clipName) {
        this._referenceList.set(clipName, 0);
        var id = this._audioList.get(clipName);
        if (id != null && id != -1) {
            cc.audioEngine.stop(id);
            this._audioList.delete(clipName);
        }
        id = this._effectList.get(clipName);
        if (id != null && id != -1) {
            cc.audioEngine.stop(id);
            this._effectList.delete(clipName);
        }
    };
    // 停止正在播放的所有音频
    SoundManagerClass.prototype.stopAll = function () {
        this.stopAllAudio();
        this.stopAllEffect();
        cc.audioEngine.stopAll();
    };
    // 某个音效是否正在播放
    SoundManagerClass.prototype.isPlaying = function (clipName) {
        var id = this._audioList.get(clipName);
        if (id != null && id != -1) {
            return true;
        }
        id = this._effectList.get(clipName);
        if (id != null && id != -1) {
            return true;
        }
        return false;
    };
    SoundManagerClass._instance = null;
    return SoundManagerClass;
}());
exports.SoundManager = SoundManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXE1hbmFnZXJcXFNvdW5kTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQscURBQW9EO0FBQ3BELDJDQUEwQztBQUMxQywwQ0FBcUM7QUFDckMscURBQW9EO0FBQ3BELHlDQUF3QztBQUV4QyxnQkFBZ0I7QUFDaEIsSUFBWSxTQVNYO0FBVEQsV0FBWSxTQUFTO0lBQ2pCLFdBQVc7SUFDWCxvQ0FBdUIsQ0FBQTtJQUN2QixXQUFXO0lBQ1gsd0NBQTJCLENBQUE7SUFDM0IsU0FBUztJQUNULHdDQUEyQixDQUFBO0lBQzNCLFNBQVM7SUFDVCxzQ0FBeUIsQ0FBQTtBQUM3QixDQUFDLEVBVFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFTcEI7QUFFRDtJQUFBO1FBRVksa0JBQWEsR0FBVyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQzdDLFdBQVc7UUFDSCxRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUM5QixPQUFPO1FBQ0MsZUFBVSxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3BELE9BQU87UUFDQyxnQkFBVyxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3JELFlBQVk7UUFDSixtQkFBYyxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3hELE9BQU87UUFDQyxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ2hDLGtCQUFrQjtRQUNYLGtCQUFhLEdBQThCLElBQUksR0FBRyxFQUFFLENBQUM7UUFFckQsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVyxHQUFHLGFBQWEsQ0FBQztJQTJhdkMsQ0FBQztJQXphRyxpQ0FBSyxHQUFMO1FBQ0ksaUJBQU8sQ0FBQyxRQUFRLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMs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WUFDeEIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBM2JjLDJCQUFTLEdBQXNCLElBQUksQ0FBQztJQTRidkQsd0JBQUM7Q0E3YkQsQUE2YkMsSUFBQTtBQUVZLFFBQUEsWUFBWSxHQUFHLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhbWVDb25zdFZhbHVlIH0gZnJvbSAnLi4vRGF0YS9GcmFtZUNvbnN0VmFsdWUnO1xuaW1wb3J0IHsgRnJhbWVNc2dUeXBlIH0gZnJvbSAnLi4vRGF0YS9GcmFtZU1zZ1R5cGUnO1xuaW1wb3J0IHsgTmV0V29yayB9IGZyb20gJy4uL0h0dHAvTmV0V29yayc7XG5pbXBvcnQgR2FtZU1zZyBmcm9tICcuLi9TREsvR2FtZU1zZyc7XG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tICcuL1VJTWFuYWdlcic7XG5cbi8qKiDpn7PkuZDnmoTotYTmupDlkI3np7DmnprkuL4gKi9cbmV4cG9ydCBlbnVtIE11c2ljVHlwZSB7XG4gICAgLyoqIOiDjOaZr+mfs+S5kCAqL1xuICAgIEJHTV9NVVNJQyA9ICdCR01fTVVTSUMnLFxuICAgIC8qKiDpopjlubLor63pn7MgKi9cbiAgICBUSVRMRV9BVURJTyA9ICdUSVRMRV9BVURJTycsXG4gICAgLyoqIOmfs+aViCAqL1xuICAgIEdBTUVfRUZGRUNUID0gJ0dBTUVfRUZGRUNUJyxcbiAgICAvKiog6K+t6Z+zICovXG4gICAgR0FNRV9BVURJTyA9ICdHQU1FX0FVRElPJyxcbn1cblxuY2xhc3MgU291bmRNYW5hZ2VyQ2xhc3Mge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogU291bmRNYW5hZ2VyQ2xhc3MgPSBudWxsO1xuICAgIHByaXZhdGUgcGxheWluZ19zb3VuZDogT2JqZWN0ID0gbmV3IE9iamVjdCgpO1xuICAgIC8vIOe8k+WtmOiDjOaZr+mfs+S5kOWQjeWtl1xuICAgIHByaXZhdGUgYmdtOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIGJnbUluZGV4OiBudW1iZXIgPSAtMTtcbiAgICAvLyDor63pn7PliJfooahcbiAgICBwcml2YXRlIF9hdWRpb0xpc3Q6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwKCk7XG4gICAgLy8g6Z+z5pWI5YiX6KGoXG4gICAgcHJpdmF0ZSBfZWZmZWN0TGlzdDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKTtcbiAgICAvLyDpn7PmlYjnu5/kuIDnmoTlvJXnlKjorqHmlbBcbiAgICBwcml2YXRlIF9yZWZlcmVuY2VMaXN0OiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xuICAgIC8vIOmimOW5suivremfs1xuICAgIHByaXZhdGUgX3RpdGxlSUQ6IG51bWJlciA9IG51bGw7XG4gICAgLyoqIOWtmOaUvumfs+mikei1hOa6kOeahCBNYXAgKi9cbiAgICBwdWJsaWMgX2F1ZGlvQ2xpcE1hcDogTWFwPHN0cmluZywgY2MuQXVkaW9DbGlwPiA9IG5ldyBNYXAoKTtcblxuICAgIHB1YmxpYyBNVVNJQ19CR00gPSAnYmdtJztcbiAgICBwdWJsaWMgQVVESU9fVElUTEUgPSAnYXVkaW9fc291bmQnO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIEdhbWVNc2cuYWRkRXZlbnQoRnJhbWVNc2dUeXBlLlBMQVlCR00sIHRoaXMucGxheUJHTS5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5hZGRFdmVudChGcmFtZU1zZ1R5cGUuUkVTVU1FQkdNLCB0aGlzLnJlc3VtZUJHTS5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5hZGRFdmVudChGcmFtZU1zZ1R5cGUuU1RPUEJHTSwgdGhpcy5zdG9wQkdNLmJpbmQodGhpcykpO1xuICAgICAgICBHYW1lTXNnLmFkZEV2ZW50KEZyYW1lTXNnVHlwZS5QTEFZQVVESU9USVRMRSwgdGhpcy5wbGF5QXVkaW9UaXRsZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5hZGRFdmVudChGcmFtZU1zZ1R5cGUuU1RPUEFVRElPVElUTEUsIHRoaXMuc3RvcEF1ZGlvVGl0bGUuYmluZCh0aGlzKSk7XG4gICAgICAgIEdhbWVNc2cuYWRkRXZlbnQoRnJhbWVNc2dUeXBlLlNUT1BBTExBVURJTywgdGhpcy5zdG9wQWxsQXVkaW8uYmluZCh0aGlzKSk7XG4gICAgICAgIEdhbWVNc2cuYWRkRXZlbnQoRnJhbWVNc2dUeXBlLlNUT1BBTExFRkZFQ1QsIHRoaXMuc3RvcEFsbEVmZmVjdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5hZGRFdmVudChGcmFtZU1zZ1R5cGUuU1RPUEFMTCwgdGhpcy5zdG9wQWxsLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogU291bmRNYW5hZ2VyQ2xhc3Mge1xuICAgICAgICBpZiAobnVsbCA9PT0gdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFNvdW5kTWFuYWdlckNsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIC8vIOiOt+WPlumfs+mikei1hOa6kFxuICAgIHB1YmxpYyBnZXRBdWRpb0NsaXAoY2xpcE5hbWU6IHN0cmluZyk6IGNjLkF1ZGlvQ2xpcCB7XG4gICAgICAgIGlmICghdGhpcy5fYXVkaW9DbGlwTWFwLmhhcyhjbGlwTmFtZSkpIHtcbiAgICAgICAgICAgIGNjLmxvZyhg5pyq57yT5a2Y55qE6Z+z6aKR6LWE5rqQOiAke2NsaXBOYW1lfWApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXVkaW9DbGlwTWFwLmdldChjbGlwTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDliqDovb1yZXNvdXJjZemHjOeahOmfs+aViOi1hOa6kFxuICAgIHB1YmxpYyBwcmVMb2FkUmVzQXVkaW8oY2FsbGJhY2s6IChpc0NvbXBsZXRlZDogYm9vbGVhbikgPT4gdm9pZCkge1xuICAgICAgICBsZXQgcGF0aCA9IEZyYW1lQ29uc3RWYWx1ZS5HQU1FX0FVRElPX0RJUjtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIocGF0aCwgY2MuQXVkaW9DbGlwLCAoZXJyb3IsIGF1ZGlvQ2xpcHM6IGNjLkF1ZGlvQ2xpcFtdKSA9PiB7XG4gICAgICAgICAgICAvLyDplJnor6/lpITnkIZcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6I635Y+W5a6M5q+V5ZCO6KOF5YWlIE1hcFxuICAgICAgICAgICAgYXVkaW9DbGlwcy5mb3JFYWNoKChlbGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ+e8k+WtmOWujOavlSEgZWxlLm5hbWUgPT0gJyArIGVsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hdWRpb0NsaXBNYXAuc2V0KGVsZS5uYW1lLCBlbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUxpc3Quc2V0KGVsZS5uYW1lLCAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8g5omn6KGM5Zue6LCD6L+U5Zue6L+b5bqmXG4gICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g5Yqg6L29ZnJhbWVSZXPph4znmoTpn7PmlYjotYTmupBcbiAgICBwdWJsaWMgcHJlTG9hZEZyYW1lQXVkaW8oY2FsbGJhY2s6IChpc0NvbXBsZXRlZDogYm9vbGVhbikgPT4gdm9pZCkge1xuICAgICAgICBsZXQgcGF0aCA9IEZyYW1lQ29uc3RWYWx1ZS5GUkFNRV9BVURJT19ESVI7XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKCdmcmFtZVJlcycsIChlcnI6IEVycm9yLCBidW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidW5kbGUubG9hZERpcihwYXRoLCBjYy5BdWRpb0NsaXAsIChlcnJvcjogRXJyb3IsIGF1ZGlvQ2xpcHM6IGNjLkF1ZGlvQ2xpcFtdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF1ZGlvQ2xpcHMuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZygn57yT5a2Y5a6M5q+VISBlbGUubmFtZSA9PSAnICsgZWxlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hdWRpb0NsaXBNYXAuc2V0KGVsZS5uYW1lLCBlbGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWZlcmVuY2VMaXN0LnNldChlbGUubmFtZSwgMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g57yT5a2Y5omA5pyJ6Z+z6aKR6LWE5rqQXG4gICAgcHVibGljIHByZUxvYWRBbGxBdWRpb0NsaXBzKGNhbGxiYWNrOiAoaXNDb21wbGV0ZWQ6IGJvb2xlYW4pID0+IHZvaWQpIHtcbiAgICAgICAgLyoqIOWKoOi9veS7o+egge+8jOWPguaVsOS4uiB1cmzvvIzotYTmupDnsbvlnovvvIzov5vluqblm57osIPvvIzlrozmiJDlm57osIMgKi9cbiAgICAgICAgbGV0IGlzQ29tcGxldGVkTG9hZFJlc0F1ZGlvID0gZmFsc2U7XG4gICAgICAgIGxldCBpc0NvbXBsZXRlZExvYWRGcmFtZUF1ZGlvID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJlTG9hZFJlc0F1ZGlvKChpc0NvbXBsZXRlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgaWYgKGlzQ29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKCfnvJPlrZjlrozmr5UhIHByZUxvYWRSZXNBdWRpbyAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzQ29tcGxldGVkTG9hZFJlc0F1ZGlvID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpc0NvbXBsZXRlZExvYWRSZXNBdWRpbyAmJiBpc0NvbXBsZXRlZExvYWRGcmFtZUF1ZGlvKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJlTG9hZEZyYW1lQXVkaW8oKGlzQ29tcGxldGVkOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coJ+e8k+WtmOWujOavlSEgcHJlTG9hZEZyYW1lQXVkaW8gJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc0NvbXBsZXRlZExvYWRGcmFtZUF1ZGlvID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpc0NvbXBsZXRlZExvYWRSZXNBdWRpbyAmJiBpc0NvbXBsZXRlZExvYWRGcmFtZUF1ZGlvKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIOWNleeLrOe8k+WtmOafkOS4gOS4qumfs+mikVxuICAgIHB1YmxpYyBwcmVsb2FkQXVkaW9DbGlwTmFtZShjbGlwTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgICAgICBsZXQgcGF0aCA9IEZyYW1lQ29uc3RWYWx1ZS5HQU1FX0FVRElPX0RJUiArIGNsaXBOYW1lO1xuICAgICAgICBjYy5sb2coJ3ByZWxvYWRBdWRpb0NsaXBOYW1lIHBhdGggPT0gJyArIHBhdGgpO1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5BdWRpb0NsaXAsIChlcnJvciwgYXNzZXQ6IGNjLkFzc2V0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNsaXAgPSBhc3NldCBhcyBjYy5BdWRpb0NsaXA7XG4gICAgICAgICAgICB0aGlzLl9hdWRpb0NsaXBNYXAuc2V0KGNsaXBOYW1lLCBjbGlwKTtcbiAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUxpc3Quc2V0KGNsaXBOYW1lLCAwKTtcbiAgICAgICAgICAgIGNjLmxvZygn57yT5a2Y5a6M5q+VIScpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pKt5pS+6IOM5pmv6Z+z5LmQXG4gICAgICogQHBhcmFtIHNvdW5kTmFtZSDog4zmma/pn7PkuZDmlofku7blkI1cbiAgICAgKi9cbiAgICBwdWJsaWMgcGxheUJHTShzb3VuZE5hbWU6IHN0cmluZyA9ICcnKSB7XG4gICAgICAgIGlmICghVUlNYW5hZ2VyLmlzR2FtZVNob3dpbmcpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYOS4jeimgeWcqEdhbWVQYW5lbOeahG9uTG9hZOWSjHN0YXJ06YeM5pKt5pS+6Z+z6aKR77yBYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTmV0V29yay5jaGFubmVsID09ICdibGFja2JvYXJkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3VuZE5hbWUgPT0gJycpIHtcbiAgICAgICAgICAgIHNvdW5kTmFtZSA9IHRoaXMuTVVTSUNfQkdNO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iZ20gPSBzb3VuZE5hbWU7XG4gICAgICAgIHRoaXMuYmdtSW5kZXggPSAtMTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgICAgIGxldCBwYXRoID0gRnJhbWVDb25zdFZhbHVlLkdBTUVfQVVESU9fRElSICsgc291bmROYW1lO1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5BdWRpb0NsaXAsIChlcnIsIGFzc2V0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY2xpcCA9IGFzc2V0IGFzIGNjLkF1ZGlvQ2xpcDtcbiAgICAgICAgICAgIHRoaXMuYmdtSW5kZXggPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8v6YeN5paw5byA5aeL5pKt5pS+6IOM5pmv6Z+z5LmQXG4gICAgcHVibGljIHJlc3VtZUJHTSgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgICAgIGxldCBwYXRoID0gRnJhbWVDb25zdFZhbHVlLkdBTUVfQVVESU9fRElSICsgdGhpcy5iZ207XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgYXNzZXQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjbGlwID0gYXNzZXQgYXMgY2MuQXVkaW9DbGlwO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKGNsaXAsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDph43mlrDlvIDlp4vmkq3mlL7og4zmma/pn7PkuZBcbiAgICBwdWJsaWMgc3RvcEJHTSgpIHtcbiAgICAgICAgdGhpcy5iZ20gPSAnJztcbiAgICAgICAgdGhpcy5iZ21JbmRleCA9IC0xO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcbiAgICB9XG5cbiAgICAvLyDorr7nva7og4zmma/pn7Ppn7Pph49cbiAgICBwdWJsaWMgc2V0TXVzaWNWb2x1bWUodm9sdW1lOiBudW1iZXIsIHR3ZWVuRHVyID0gMCkge1xuICAgICAgICBpZiAodGhpcy5iZ21JbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgdm9sdW1lID0gY2MubWlzYy5jbGFtcDAxKHZvbHVtZSk7XG4gICAgICAgICAgICBpZiAodHdlZW5EdXIgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLmJnbUluZGV4LCB2b2x1bWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0geyB2OiBjYy5hdWRpb0VuZ2luZS5nZXRWb2x1bWUodGhpcy5iZ21JbmRleCkgfTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihvYmopXG4gICAgICAgICAgICAgICAgICAgIC50byhcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuRHVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB2OiB2b2x1bWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ID0gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogcmF0aW87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLmJnbUluZGV4LCB2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaSreaUvumimOW5suivremfs1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsaXBOYW1lIOivremfs2NsaXDmlofku7ZcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJMb29wIOaYr+WQpuW+queOr1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2JJbnRlcnVwdD10cnVlXSDmmK/lkKbmiZPmlq3lhbbku5bor63pn7Ms6buY6K6kdHJ1ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2JNdXRleD1mYWxzZV0g5piv5ZCm5LqS5pal77yI5oyH6Z+z5pWI5ZKM6K+t6Z+z77yJLOm7mOiupGZhbHNlXG4gICAgICogQG1lbWJlcm9mIFNvdW5kTWFuYWdlckNsYXNzXG4gICAgICovXG4gICAgcHVibGljIHBsYXlBdWRpb1RpdGxlKFxuICAgICAgICBjbGlwTmFtZTogc3RyaW5nIHwgY2MuQXVkaW9DbGlwLFxuICAgICAgICBiTG9vcDogYm9vbGVhbiA9IGZhbHNlLFxuICAgICAgICBiSW50ZXJ1cHQ6IGJvb2xlYW4gPSB0cnVlLFxuICAgICAgICBiTXV0ZXg6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgICAgZW5kQ2I6IEZ1bmN0aW9uID0gbnVsbCxcbiAgICApIHtcbiAgICAgICAgLy8gaWYgKGNsaXBOYW1lID09ICcnKSB7XG4gICAgICAgIC8vICAgICBjbGlwTmFtZSA9IHRoaXMuQVVESU9fVElUTEU7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5wbGF5QXVkaW8oY2xpcE5hbWUsIGJMb29wLCBiSW50ZXJ1cHQsIGJNdXRleCwgZW5kQ2IsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIHRpbmcgemhpXG4gICAgcHVibGljIHN0b3BBdWRpb1RpdGxlKCkge1xuICAgICAgICB0aGlzLl9hdWRpb0xpc3QuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgLy8gY2MubG9nKFwidGhpcy5fYXVkaW9MaXN0IHZhbHVlID09IFwiK3ZhbHVlKVxuICAgICAgICAgICAgLy8gY2MubG9nKFwidGhpcy5fYXVkaW9MaXN0IGtleSA9PSBcIitrZXkpXG4gICAgICAgICAgICBpZiAobnVsbCAhPSB0aGlzLl90aXRsZUlEICYmIHRoaXMuX3RpdGxlSUQgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXVkaW9MaXN0LmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fdGl0bGVJRCA9IG51bGw7XG4gICAgICAgIC8vIOmimOW5suivremfs+aSreaUvuWujOWbnuiwg1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLkNPTVBMRVRFX1RSVU1QRVQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmkq3mlL7or63pn7NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGlwTmFtZSDor63pn7NjbGlw5paH5Lu2XG4gICAgICogQHBhcmFtIHtib29sZWFufSBiTG9vcCDmmK/lkKblvqrnjq9cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtiSW50ZXJ1cHQ9dHJ1ZV0g5piv5ZCm5omT5pat5YW25LuW6K+t6Z+zLOm7mOiupHRydWVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtiTXV0ZXg9ZmFsc2VdIOaYr+WQpuS6kuaWpe+8iOaMh+mfs+aViOWSjOivremfs++8iSzpu5jorqRmYWxzZVxuICAgICAqIEBtZW1iZXJvZiBTb3VuZE1hbmFnZXJDbGFzc1xuICAgICAqL1xuXG4gICAgcHVibGljIHBsYXlBdWRpbyhcbiAgICAgICAgY2xpcE5hbWU6IHN0cmluZyB8IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgYkxvb3A6IGJvb2xlYW4sXG4gICAgICAgIGJJbnRlcnVwdDogYm9vbGVhbiA9IHRydWUsXG4gICAgICAgIGJNdXRleDogYm9vbGVhbiA9IGZhbHNlLFxuICAgICAgICBvbkZpbmlzaGVkOiBGdW5jdGlvbiA9IG51bGwsXG4gICAgICAgIGlzVGl0bGVBdWRpbzogYm9vbGVhbiA9IGZhbHNlLFxuICAgICkge1xuICAgICAgICBpZiAoIVVJTWFuYWdlci5pc0dhbWVTaG93aW5nKSB7XG4gICAgICAgICAgICBjYy53YXJuKGDkuI3opoHlnKhHYW1lUGFuZWznmoRvbkxvYWTlkoxzdGFydOmHjOaSreaUvumfs+mike+8gWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjbGlwTmFtZSkgcmV0dXJuO1xuXG4gICAgICAgIGJJbnRlcnVwdCAmJiB0aGlzLnN0b3BBbGxBdWRpbygpO1xuICAgICAgICBiTXV0ZXggJiYgdGhpcy5zdG9wQWxsRWZmZWN0KCk7XG5cbiAgICAgICAgbGV0IGNsaXAgPSBudWxsO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2xpcE5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjbGlwID0gdGhpcy5nZXRBdWRpb0NsaXAoY2xpcE5hbWUpO1xuICAgICAgICAgICAgaWYgKGNsaXAgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wcmVsb2FkQXVkaW9DbGlwTmFtZShcbiAgICAgICAgICAgICAgICAgICAgY2xpcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAgPSB0aGlzLl9hdWRpb0NsaXBNYXAuZ2V0KGNsaXBOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUF1ZGlvKGNsaXAsIGJMb29wLCBiSW50ZXJ1cHQsIGJNdXRleCwgb25GaW5pc2hlZCwgaXNUaXRsZUF1ZGlvKTtcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xpcCA9IGNsaXBOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBiTG9vcCk7XG4gICAgICAgIC8vIOi1i+WAvHRpdGxlSWRcbiAgICAgICAgaWYgKGlzVGl0bGVBdWRpbykge1xuICAgICAgICAgICAgdGhpcy5fdGl0bGVJRCA9IGlkO1xuICAgICAgICAgICAgY2MubG9nKCd0aGlzLl90aXRsZUlEID09ICcgKyB0aGlzLl90aXRsZUlEKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hdWRpb0xpc3Quc2V0KGNsaXAubmFtZSwgaWQpO1xuICAgICAgICAvL+aSreaUvuW8leeUqOiuoeaVsOWKoDFcbiAgICAgICAgbGV0IHJlZmVyZW5jZUNvdW50ID0gdGhpcy5fcmVmZXJlbmNlTGlzdC5nZXQoY2xpcC5uYW1lKTtcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlTGlzdC5zZXQoY2xpcC5uYW1lLCByZWZlcmVuY2VDb3VudCsrKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soaWQsICgpID0+IHtcbiAgICAgICAgICAgIC8v5byV55So6K6h5pWw5Li6MOWIoOmZpOi1hOa6kFxuICAgICAgICAgICAgbGV0IHJlZmVyZW5jZUNvdW50ID0gdGhpcy5fcmVmZXJlbmNlTGlzdC5nZXQoY2xpcC5uYW1lKTtcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VDb3VudC0tIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BTb3VuZEJ5TmFtZShjbGlwLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcmVmZXJlbmNlTGlzdC5zZXQoY2xpcC5uYW1lLCByZWZlcmVuY2VDb3VudCA8IDAgPyAwIDogcmVmZXJlbmNlQ291bnQpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25GaW5pc2hlZCAmJiBvbkZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5pKt5pS+6Z+z5pWIXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpcE5hbWUg6Z+z5pWIY2xpcOaWh+S7tlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYkxvb3Ag5piv5ZCm5b6q546vXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYkludGVydXB0PXRydWVdIOaYr+WQpuaJk+aWreWFtuS7lumfs+aViCzpu5jorqR0cnVlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYk11dGV4PWZhbHNlXSDmmK/lkKbkupLmlqXvvIjmjIfpn7PmlYjlkozor63pn7PvvIks6buY6K6kZmFsc2VcbiAgICAgKiBAbWVtYmVyb2YgU291bmRNYW5hZ2VyQ2xhc3NcbiAgICAgKi9cblxuICAgIHB1YmxpYyBwbGF5RWZmZWN0KFxuICAgICAgICBjbGlwTmFtZTogc3RyaW5nIHwgY2MuQXVkaW9DbGlwLFxuICAgICAgICBiTG9vcDogYm9vbGVhbixcbiAgICAgICAgYkludGVydXB0OiBib29sZWFuID0gdHJ1ZSxcbiAgICAgICAgYk11dGV4OiBib29sZWFuID0gZmFsc2UsXG4gICAgICAgIG9uRmluaXNoZWQ6IEZ1bmN0aW9uID0gbnVsbCxcbiAgICApIHtcbiAgICAgICAgaWYgKCFVSU1hbmFnZXIuaXNHYW1lU2hvd2luZykge1xuICAgICAgICAgICAgY2Mud2Fybihg5LiN6KaB5ZyoR2FtZVBhbmVs55qEb25Mb2Fk5ZKMc3RhcnTph4zmkq3mlL7pn7PpopHvvIFgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2xpcE5hbWUpIHJldHVybjtcblxuICAgICAgICBiSW50ZXJ1cHQgJiYgdGhpcy5zdG9wQWxsRWZmZWN0KCk7XG4gICAgICAgIGJNdXRleCAmJiB0aGlzLnN0b3BBbGxBdWRpbygpO1xuXG4gICAgICAgIGxldCBjbGlwID0gbnVsbDtcblxuICAgICAgICBpZiAodHlwZW9mIGNsaXBOYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY2xpcCA9IHRoaXMuZ2V0QXVkaW9DbGlwKGNsaXBOYW1lKTtcbiAgICAgICAgICAgIGlmIChjbGlwID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucHJlbG9hZEF1ZGlvQ2xpcE5hbWUoXG4gICAgICAgICAgICAgICAgICAgIGNsaXBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwID0gdGhpcy5fYXVkaW9DbGlwTWFwLmdldChjbGlwTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlFZmZlY3QoY2xpcCwgYkxvb3AsIGJJbnRlcnVwdCwgYk11dGV4LCBvbkZpbmlzaGVkKTtcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xpcCA9IGNsaXBOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBiTG9vcCk7XG4gICAgICAgIHRoaXMuX2VmZmVjdExpc3Quc2V0KGNsaXAubmFtZSwgaWQpO1xuICAgICAgICAvL+aSreaUvuW8leeUqOiuoeaVsOWKoDFcbiAgICAgICAgbGV0IHJlZmVyZW5jZUNvdW50ID0gdGhpcy5fcmVmZXJlbmNlTGlzdC5nZXQoY2xpcC5uYW1lKTtcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlTGlzdC5zZXQoY2xpcC5uYW1lLCByZWZlcmVuY2VDb3VudCsrKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soaWQsICgpID0+IHtcbiAgICAgICAgICAgIC8v5byV55So6K6h5pWw5Li6MOWIoOmZpOi1hOa6kFxuICAgICAgICAgICAgbGV0IHJlZmVyZW5jZUNvdW50ID0gdGhpcy5fcmVmZXJlbmNlTGlzdC5nZXQoY2xpcC5uYW1lKTtcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VDb3VudC0tIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BTb3VuZEJ5TmFtZShjbGlwLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcmVmZXJlbmNlTGlzdC5zZXQoY2xpcC5uYW1lLCByZWZlcmVuY2VDb3VudCA8IDAgPyAwIDogcmVmZXJlbmNlQ291bnQpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25GaW5pc2hlZCAmJiBvbkZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDorr7nva7pn7PmlYjlpKflsI9cbiAgICBwdWJsaWMgc2V0RWZmZWN0Vm9sdW1lKHZvbHVtZTogbnVtYmVyKSB7XG4gICAgICAgIHZvbHVtZSA9IGNjLm1pc2MuY2xhbXAwMSh2b2x1bWUpO1xuICAgICAgICB0aGlzLl9hdWRpb0xpc3QuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKHZhbHVlLCB2b2x1bWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDlgZzmraLor63pn7NcbiAgICBwdWJsaWMgc3RvcEFsbEF1ZGlvKCkge1xuICAgICAgICB0aGlzLl9hdWRpb0xpc3QuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKG51bGwgIT0gdGhpcy5fdGl0bGVJRCAmJiB0aGlzLl90aXRsZUlEID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIOmimOW5suivremfs+aSreaUvuWujOWbnuiwg1xuICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuQ09NUExFVEVfVFJVTVBFVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9yZWZlcmVuY2VMaXN0LnNldChrZXksIDApO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9hdWRpb0xpc3QgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX3RpdGxlSUQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIOWBnOatoumfs+aViFxuICAgIHB1YmxpYyBzdG9wQWxsRWZmZWN0KCkge1xuICAgICAgICB0aGlzLl9lZmZlY3RMaXN0LmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUxpc3Quc2V0KGtleSwgMCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VmZmVjdExpc3QgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgLy8g5YGc5q2i5pKt5pS+5oyH5a6a55qE6Z+z6aKR6YCa6L+H5ZCN5a2XXG4gICAgcHVibGljIHN0b3BTb3VuZEJ5TmFtZShjbGlwTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3JlZmVyZW5jZUxpc3Quc2V0KGNsaXBOYW1lLCAwKTtcbiAgICAgICAgbGV0IGlkID0gdGhpcy5fYXVkaW9MaXN0LmdldChjbGlwTmFtZSk7XG4gICAgICAgIGlmIChpZCAhPSBudWxsICYmIGlkICE9IC0xKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGlkKTtcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvTGlzdC5kZWxldGUoY2xpcE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlkID0gdGhpcy5fZWZmZWN0TGlzdC5nZXQoY2xpcE5hbWUpO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCAmJiBpZCAhPSAtMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChpZCk7XG4gICAgICAgICAgICB0aGlzLl9lZmZlY3RMaXN0LmRlbGV0ZShjbGlwTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlgZzmraLmraPlnKjmkq3mlL7nmoTmiYDmnInpn7PpopFcbiAgICBwdWJsaWMgc3RvcEFsbCgpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsQXVkaW8oKTtcbiAgICAgICAgdGhpcy5zdG9wQWxsRWZmZWN0KCk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICB9XG5cbiAgICAvLyDmn5DkuKrpn7PmlYjmmK/lkKbmraPlnKjmkq3mlL5cbiAgICBwdWJsaWMgaXNQbGF5aW5nKGNsaXBOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGlkID0gdGhpcy5fYXVkaW9MaXN0LmdldChjbGlwTmFtZSk7XG4gICAgICAgIGlmIChpZCAhPSBudWxsICYmIGlkICE9IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZCA9IHRoaXMuX2VmZmVjdExpc3QuZ2V0KGNsaXBOYW1lKTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwgJiYgaWQgIT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBTb3VuZE1hbmFnZXIgPSBTb3VuZE1hbmFnZXJDbGFzcy5nZXRJbnN0YW5jZSgpO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Manager/ReportManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1c64g+oUJINqZmXJU6GCDp', 'ReportManager');
// frame/scripts/Manager/ReportManager.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportData = exports.AdditionalData = exports.AdditionalOver = exports.AdditionalLevelData = exports.ExtraData = exports.ExtraGameOverData = exports.GameOverData = exports.ExtraLevelData = exports.LevelData = exports.AnswerResult = exports.ReportManager = void 0;
var ConstValue_1 = require("../../../game/scripts/Data/ConstValue");
var EditorManager_1 = require("../../../game/scripts/Manager/EditorManager");
var GameMsg_1 = require("../SDK/GameMsg");
/**
 * 作答数据管理类
 */
var ReportManagerClass = /** @class */ (function () {
    function ReportManagerClass() {
        /** 星级标准 */
        this._startLevelConfig = [80, 50, 0];
        /** ---------------------------必需参数--------------------------- */
        this._type = 'txt';
        this._result = [];
        /** 附加题数据 */
        this._additionalResult = [];
        // public _gameOver: GameOverData = null;
        /** 第几次作答 */
        this._playIndex = 0;
        /** ---------------------------辅助参数--------------------------- */
        /** 每关开始时间 */
        this._levelStartTime = 0;
        /** 每关作答耗时 */
        this._coastTimeArr = [];
        /** 附加题每关作答耗时 */
        this._additionalCoastTimeArr = [];
        /** 每关作答次数 */
        this._tryCounts = [];
        /** 附加题每关作答次数 */
        this._additionalTryCounts = [];
        /** 实际作答正确次数 */
        this._correctCounts = [];
        /** 实际作答正确次数 */
        this._additionalCorrectCounts = [];
        /** 每关作答状态 */
        this._AnswerResults = [];
        /** 附加题每关作答状态 */
        this._additionalAnswerRes = [];
        /** 总关卡数目 */
        this._levelCount = 0;
        /** 当前关卡id  从0开始*/
        this._curLevelId = 0;
        /** 总附加题关卡数目 */
        this._additionalCount = 0;
        /** 当前附加题关卡id，从0开始 */
        this._curAdditionalId = 0;
        /** 实际作答正确次数 */
        // public _correctCount: number = 0;
        /** 是否全部关卡通关 */
        this.isAllOver = false;
        /** 是否整体未操作 */
        // public _isUndo: boolean = true;
        /**
         * 是否 当前步骤/关卡 未操作，
         * 只要用户有操作就修改此值
         * */
        // public _isCurLevelUndo: boolean = true;
        /** 是否已经上报过game_over */
        this._isReportedGameOver = false;
        /** 需要判断正误的总步数 */
        this._stepCount = 0;
    }
    ReportManagerClass.getInstance = function () {
        if (!this._instance) {
            this._instance = new ReportManagerClass();
        }
        return this._instance;
    };
    /** 添加 关/步骤 时间 */
    ReportManagerClass.prototype.addCoastTime = function (tm) {
        var time = tm - this._levelStartTime;
        time = Math.ceil(time / 1000) * 1000; //时间取整
        this._coastTimeArr[this._curLevelId] = time;
    };
    /** 获取总耗时 */
    ReportManagerClass.prototype.getCoastTimes = function () {
        return this._coastTimeArr;
    };
    ReportManagerClass.prototype.setCoastTimes = function (arr) {
        this._coastTimeArr = arr;
    };
    ReportManagerClass.prototype.addAdditionalCoastTime = function (tm) {
        var time = tm - this._levelStartTime;
        time = Math.ceil(time / 1000) * 1000; //时间取整
        this._additionalCoastTimeArr[this._curAdditionalId] = time;
    };
    ReportManagerClass.prototype.getAdditionalCoastTime = function () {
        return this._additionalCoastTimeArr;
    };
    ReportManagerClass.prototype.setAdditionalCoastTimes = function (arr) {
        this._additionalCoastTimeArr = arr;
    };
    /** 获取总次数 */
    ReportManagerClass.prototype.getTryCounts = function () {
        return this._tryCounts;
    };
    ReportManagerClass.prototype.setTryCounts = function (arr) {
        this._tryCounts = arr;
    };
    /** 添加 关/步骤 次数 */
    ReportManagerClass.prototype.addTryCount = function (bCorrect) {
        if (this._tryCounts[this._curLevelId]) {
            this._tryCounts[this._curLevelId] += 1;
        }
        else {
            this._tryCounts[this._curLevelId] = 1;
        }
        if (void 0 === this._correctCounts[this._curLevelId]) {
            this._correctCounts[this._curLevelId] = 0;
        }
        if (bCorrect) {
            this._correctCounts[this._curLevelId] += 1;
        }
    };
    /** 附加题获取总次数 */
    ReportManagerClass.prototype.getAdditionalTryCounts = function () {
        return this._additionalTryCounts;
    };
    ReportManagerClass.prototype.setAdditionalTryCounts = function (arr) {
        this._additionalTryCounts = arr;
    };
    /** 添加 关/步骤 次数 */
    ReportManagerClass.prototype.addAdditionalTryCount = function (bCorrect) {
        if (this._additionalTryCounts[this._curAdditionalId]) {
            this._additionalTryCounts[this._curAdditionalId] += 1;
        }
        else {
            this._additionalTryCounts[this._curAdditionalId] = 1;
        }
        if (void 0 === this._additionalCorrectCounts[this._curAdditionalId]) {
            this._additionalCorrectCounts[this._curAdditionalId] = 0;
        }
        if (bCorrect) {
            this._additionalCorrectCounts[this._curAdditionalId] += 1;
        }
    };
    ReportManagerClass.prototype.getCorrectCounts = function () {
        return this._correctCounts;
    };
    ReportManagerClass.prototype.setCorrectCounts = function (arr) {
        this._correctCounts = arr;
    };
    ReportManagerClass.prototype.getAdditionalCorrectCounts = function () {
        return this._additionalCorrectCounts;
    };
    ReportManagerClass.prototype.setAdditionalCorrectCounts = function (arr) {
        this._additionalCorrectCounts = arr;
    };
    /** 获取总次数 */
    ReportManagerClass.prototype.getAnswerResults = function () {
        return this._AnswerResults;
    };
    ReportManagerClass.prototype.setAnswerResults = function (arr) {
        this._AnswerResults = arr;
    };
    ReportManagerClass.prototype.setAnswerResultByLevel = function (level, answer) {
        this._AnswerResults[level] = answer;
    };
    /** 获取附加题总次数 */
    ReportManagerClass.prototype.getadditionalAnswerRes = function () {
        return this._additionalAnswerRes;
    };
    ReportManagerClass.prototype.setAdditionalAnswerRes = function (arr) {
        this._additionalAnswerRes = arr;
    };
    ReportManagerClass.prototype.setAdditionalAnswerResultByLevel = function (level, answer) {
        this._additionalAnswerRes[level] = answer;
    };
    /**
     * 初始化要上报的数据
     *
     * @param {number} levelCount 关卡总数
     */
    ReportManagerClass.prototype.initReportData = function (levelCount) {
        this._playIndex = 1;
        this._levelCount = levelCount;
        this._additionalCount = EditorManager_1.EditorManager.editorData.additional.length;
        this.resetData();
        if (EditorManager_1.EditorManager['getStepCount']) {
            this._stepCount = EditorManager_1.EditorManager['getStepCount']();
        }
        else {
            this._stepCount = levelCount;
        }
        GameMsg_1.default.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
    };
    /**
     * 通关之后的重玩
     *  只有外层index自增   其余数据恢复初始状态
     *
     * @memberof DataReportMgr
     */
    ReportManagerClass.prototype.replayGame = function () {
        ++this._playIndex;
        this.resetData();
        GameMsg_1.default.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
    };
    /**
     * 重置数据
     */
    ReportManagerClass.prototype.resetData = function () {
        this._curLevelId = 0;
        this._curAdditionalId = 0;
        this.isAllOver = false;
        this._isReportedGameOver = false;
        this._result = [];
        for (var i = 0; i < this._levelCount; i++) {
            var levelInfo = this._levelCount > 1 ? ConstValue_1.ConstValue.GameName + "_\u7B2C" + (i + 1) + "\u5173" : ConstValue_1.ConstValue.GameName;
            var _levelData = new ExtraLevelData();
            _levelData.id = i + 1;
            _levelData.question_info = levelInfo;
            this._result.push(_levelData);
        }
        /**获取附附加题关卡数量 */
        this._curAdditionalId = 0;
        this._additionalResult = [];
        for (var i = 0; i < this._additionalCount; i++) {
            var info = "\u9644\u52A0\u9898_\u7B2C" + (i + 1) + "\u5173";
            var data = new AdditionalLevelData();
            data.id = i + 1;
            data.question_info = info;
            this._additionalResult.push(data);
        }
        this._levelStartTime = Date.now();
        this.setTryCounts([]);
        this.setCorrectCounts([]);
        this.setCoastTimes([]);
        this.setAnswerResults([]);
        this.setAdditionalTryCounts([]);
        this.setAdditionalCorrectCounts([]);
        this.setAdditionalCoastTimes([]);
        this.setAdditionalAnswerRes([]);
    };
    // public setFirstTouch() {
    //     this._isCurLevelUndo = false;
    //     this._isUndo = false;
    // }
    /**
     * 更新关卡作答数据
     *
     * @param {boolean} bCorrect 是否作答正确
     * @param {boolean} bCurLevelFinish 当前关卡是否已完成 用于按步骤上报时状态设置为half，默认为true
     */
    ReportManagerClass.prototype.reportLevelResult = function (bCorrect, bCurLevelFinish) {
        if (bCurLevelFinish === void 0) { bCurLevelFinish = true; }
        var curTime = Date.now();
        if (this._curLevelId >= this._levelCount) {
            if (void 0 === this._additionalResult[this._curAdditionalId])
                return;
            this.addAdditionalCoastTime(curTime);
            this.addAdditionalTryCount(bCorrect);
            var answerRes = AnswerResult.NoAnswer;
            if (bCorrect) {
                answerRes = bCurLevelFinish ? AnswerResult.AnswerRight : AnswerResult.AnswerHalf;
            }
            else {
                answerRes = AnswerResult.AnswerError;
            }
            this.setAdditionalAnswerResultByLevel(this._curAdditionalId, answerRes);
            var _reportData = this.getReportData();
            console.log("additional report level data: ", _reportData);
            GameMsg_1.default.additionalAnswerSyncSend(_reportData);
            if (bCurLevelFinish) {
                ++this._curAdditionalId;
                this._levelStartTime = Date.now();
                if (this._curAdditionalId === this._additionalCount) {
                    this.isAllOver = true;
                    this.reportGameOver();
                }
                // else {
                //     GameMsg.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
                // }
            }
        }
        else {
            if (void 0 === this._result[this._curLevelId])
                return;
            this.addCoastTime(curTime);
            this.addTryCount(bCorrect);
            var answerRes = AnswerResult.NoAnswer;
            if (bCorrect) {
                answerRes = bCurLevelFinish ? AnswerResult.AnswerRight : AnswerResult.AnswerHalf;
            }
            else {
                answerRes = AnswerResult.AnswerError;
            }
            this.setAnswerResultByLevel(this._curLevelId, answerRes);
            var _reportData = this.getReportData();
            _reportData.gameOver = null;
            console.log(_reportData);
            GameMsg_1.default.answerSyncSend(_reportData);
            if (bCurLevelFinish) {
                ++this._curLevelId;
                this._levelStartTime = Date.now();
                if (this._curLevelId === this._levelCount) {
                    this.isAllOver = true;
                    this.reportGameOver();
                }
                else {
                    GameMsg_1.default.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
                }
            }
        }
    };
    /**
     * 作答结束/端上收题 数据上报
     *
     * @memberof DataReportMgr
     */
    ReportManagerClass.prototype.reportGameOver = function () {
        if (this._isReportedGameOver) {
            return;
        }
        var _reporGameOvertData = this.getReportData();
        console.log(_reporGameOvertData);
        if (this._curLevelId === this._levelCount && this._additionalCount > 0 && this._curAdditionalId === this._additionalCount) {
            GameMsg_1.default.additionalOver(_reporGameOvertData);
        }
        else {
            GameMsg_1.default.gameOver(_reporGameOvertData);
        }
        GameMsg_1.default.gameStatisticData(_reporGameOvertData.ext);
        /** 上报game_over数据之后修改状态 */
        this._isReportedGameOver = true;
    };
    /**
     * 获取关卡数据
     */
    ReportManagerClass.prototype.getResultData = function (isExtra) {
        for (var i = 0; i < this._result.length; ++i) {
            var levelData = this._result[i];
            var levelIndex = levelData.id - 1;
            var answerResult = this.getAnswerResults()[levelIndex] || AnswerResult.NoAnswer;
            var answerNum = this.getTryCounts()[levelIndex] || 0;
            var answerCorrect = this.getCorrectCounts()[levelIndex] || 0;
            var answerWrong = answerNum - answerCorrect;
            var answerTime = Math.ceil((this.getCoastTimes()[levelIndex] || 0) / 1000);
            levelData.answer_res = answerResult;
            levelData.answer_num = answerNum;
            levelData.correct_num = answerCorrect;
            levelData.wrong_num = answerWrong;
            levelData.answer_time = answerTime;
            levelData.has_res = EditorManager_1.EditorManager.hasResult;
        }
        if (isExtra) {
            return this._result;
        }
        else {
            var result_1 = [];
            this._result.forEach(function (info) {
                var extraLevelData = new LevelData();
                extraLevelData.id = info.id;
                extraLevelData.question_info = info.question_info;
                extraLevelData.answer_res = info.answer_res;
                extraLevelData.answer_num = info.answer_num;
                extraLevelData.answer_time = info.answer_time;
                result_1.push(extraLevelData);
            });
            return result_1;
        }
    };
    /**
     * 获取附加题数据
     */
    ReportManagerClass.prototype.getAdditionalResultData = function () {
        for (var i = 0, l = this._additionalResult.length; i < l; i++) {
            var levelData = this._additionalResult[i];
            var levelIndex = levelData.id - 1;
            var answerResult = this.getadditionalAnswerRes()[levelIndex] || AnswerResult.NoAnswer;
            var answerNum = this.getAdditionalTryCounts()[levelIndex] || 0;
            var answerCorrect = this.getAdditionalCorrectCounts()[levelIndex] || 0;
            var answerWrong = answerNum - answerCorrect;
            var answerTime = Math.ceil((this.getAdditionalCoastTime()[levelIndex] || 0) / 1000);
            levelData.answer_res = answerResult;
            levelData.answer_num = answerNum;
            levelData.correct_num = answerCorrect;
            levelData.wrong_num = answerWrong;
            levelData.answer_time = answerTime;
        }
        var addRes = new AdditionalOver();
        addRes.pass = false;
        if (this._curAdditionalId == this._additionalCount) {
            addRes.pass = true;
        }
        var addData = new AdditionalData();
        addData.gameOver = addRes;
        addData.result = this._additionalResult;
        return addData;
    };
    /**
     * 获取gameOver数据
     */
    ReportManagerClass.prototype.getGameOverData = function (isExtra) {
        var totalTryCount = eval(this.getTryCounts().join('+'));
        totalTryCount = totalTryCount ? totalTryCount : 0;
        var totalCorrectCount = eval(this.getCorrectCounts().join('+'));
        totalCorrectCount = totalCorrectCount ? totalCorrectCount : 0;
        var totalWrongCount = totalTryCount - totalCorrectCount;
        var totalTimes = eval(this.getCoastTimes().join('+'));
        totalTimes = totalTimes ? totalTimes : 0;
        var gameOver = null;
        if (isExtra) {
            gameOver = new ExtraGameOverData();
            gameOver.game_correct_num = totalCorrectCount;
            gameOver.game_wrong_num = totalWrongCount;
            gameOver.cur_level_id = Math.min(this._curLevelId + 1, this._levelCount);
            gameOver.total_level_num = this._levelCount;
            gameOver.star_num = this.getStarCount();
            gameOver.step_count = this._stepCount;
        }
        else {
            gameOver = new GameOverData();
        }
        gameOver.percentage = this.isAllOver ? Math.round((totalCorrectCount / totalTryCount) * 100) : 0;
        gameOver.answer_all_time = Math.ceil(totalTimes / 1000);
        gameOver.complete_degree = this.isAllOver ? 100 : Math.ceil((totalCorrectCount / this._stepCount) * 100);
        gameOver.answer_all_state =
            0 === totalTryCount
                ? AnswerResult.NoAnswer
                : this.isAllOver
                    ? AnswerResult.AnswerRight
                    : AnswerResult.AnswerHalf;
        return gameOver;
    };
    ReportManagerClass.prototype.getExtraData = function () {
        var extraData = new ExtraData();
        extraData.type = this._type;
        extraData.index = this._playIndex;
        extraData.result = this.getResultData(true);
        extraData.gameOver = this.getGameOverData(true);
        return extraData;
    };
    ReportManagerClass.prototype.getReportData = function () {
        var reportData = new ReportData();
        reportData.type = this._type;
        reportData.index = this._playIndex;
        reportData.result = this.getResultData(false);
        reportData.gameOver = this.getGameOverData(false);
        reportData.ext = this.getExtraData();
        reportData.additional = this.getAdditionalResultData();
        return reportData;
    };
    /**
     * 获取星数
     */
    ReportManagerClass.prototype.getStarCount = function () {
        var gameOverData = this.getGameOverData(false);
        var starCount = 0;
        /** 计算星级 */
        if (gameOverData.percentage >= this._startLevelConfig[0]) {
            starCount = 3;
        }
        else if (gameOverData.percentage >= this._startLevelConfig[1]) {
            starCount = 2;
        }
        else if (gameOverData.percentage > this._startLevelConfig[2]) {
            starCount = 1;
        }
        else {
            starCount = 0;
        }
        return starCount;
    };
    /**
     * 需要同步的数据
     *
     * @memberof DataReportMgr
     */
    ReportManagerClass.prototype.getSyncData = function () {
        var _data = {
            bReportedGameOver: this._isReportedGameOver,
            playCount: this._playIndex,
            startTime: this._levelStartTime,
            coastTimes: this.getCoastTimes(),
            tryCounts: this.getTryCounts(),
            correctCounts: this.getCorrectCounts(),
            curLevelId: this._curLevelId,
            curAdditionalId: this._curAdditionalId,
            bFinished: this.isAllOver,
            answerResults: this.getAnswerResults(),
            additionalRes: this.getadditionalAnswerRes() //附加题每关作答状态
        };
        return _data;
    };
    /**
     * 设置接收到的作答状态到本地
     *
     * @param {*} data
     * @memberof DataReportMgr
     */
    ReportManagerClass.prototype.setSyncData = function (data) {
        this._isReportedGameOver = data.bReportedGameOver;
        this._playIndex = data.playCount;
        this._levelStartTime = data.startTime;
        this.setCoastTimes(data.coastTimes);
        this.setTryCounts(data.tryCounts);
        this.setCorrectCounts(data.correctCounts);
        this._curLevelId = data.curLevelId;
        this._curAdditionalId = data.curAdditionalId;
        this.isAllOver = data.bFinished;
        this.setAnswerResults(data.answerResults);
        this.setAdditionalAnswerRes(data.additionalRes);
        GameMsg_1.default.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
    };
    ReportManagerClass.prototype.isPassGame = function () {
        console.log("curLevelId and levelCount", this._curLevelId, this._levelCount);
        return this._curLevelId === this._levelCount;
    };
    ReportManagerClass.prototype.isPassAdditonal = function () {
        console.log("_curAdditionalId and _additionalCount", this._curAdditionalId, this._additionalCount);
        return this._curAdditionalId === this._additionalCount;
    };
    ReportManagerClass._instance = null;
    return ReportManagerClass;
}());
exports.ReportManager = ReportManagerClass.getInstance();
var AnswerResult;
(function (AnswerResult) {
    AnswerResult["AnswerError"] = "answer_error";
    AnswerResult["AnswerRight"] = "answer_right";
    AnswerResult["AnswerHalf"] = "answer_half";
    AnswerResult["NoAnswer"] = "no_answer";
})(AnswerResult = exports.AnswerResult || (exports.AnswerResult = {}));
/**
 * 单关作答数据
 */
var LevelData = /** @class */ (function () {
    function LevelData() {
        /** 关卡ID */
        this.id = 0;
        /** 题目信息 */
        this.question_info = '';
        /** 关卡作答结果  answer_error/answer_right/answer_half/no_answer */
        this.answer_res = AnswerResult.NoAnswer;
        /** 关卡作答次数 */
        this.answer_num = 0;
        /** 关卡作答时间 */
        this.answer_time = 0;
    }
    return LevelData;
}());
exports.LevelData = LevelData;
/**
 * 单关作答数据(额外上报)
 */
var ExtraLevelData = /** @class */ (function (_super) {
    __extends(ExtraLevelData, _super);
    function ExtraLevelData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 关卡作答正确步数 */
        _this.correct_num = 0;
        /** 关卡作答错误步数 */
        _this.wrong_num = 0;
        /** 是否有结果 */
        _this.has_res = true;
        return _this;
    }
    return ExtraLevelData;
}(LevelData));
exports.ExtraLevelData = ExtraLevelData;
/**
 * gameOver字段内容
 * 其中 percentage 字段在 未通关 的时候，数值为0
 */
var GameOverData = /** @class */ (function () {
    function GameOverData() {
        /** 正确率 */
        this.percentage = 0;
        /** 总作答状态 */
        this.answer_all_state = AnswerResult.NoAnswer;
        /** 总作答时间 */
        this.answer_all_time = 0;
        /** 完成度 */
        this.complete_degree = 0;
    }
    return GameOverData;
}());
exports.GameOverData = GameOverData;
/**
 * gameOver字段内容(额外上报)
 */
var ExtraGameOverData = /** @class */ (function (_super) {
    __extends(ExtraGameOverData, _super);
    function ExtraGameOverData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 总作答正确步数 */
        _this.game_correct_num = 0;
        /** 总作答错误步数 */
        _this.game_wrong_num = 0;
        /** 当前关卡id */
        _this.cur_level_id = 1;
        /** 总关卡数 */
        _this.total_level_num = 0;
        /** 星级 */
        _this.star_num = 0;
        /** 总步数 */
        _this.step_count = 0;
        return _this;
    }
    return ExtraGameOverData;
}(GameOverData));
exports.ExtraGameOverData = ExtraGameOverData;
/**
 * 额外数据上报
 * */
var ExtraData = /** @class */ (function () {
    function ExtraData() {
        /** 格式类型 */
        this.type = 'txt';
        /** 第几次作答 */
        this.index = 1;
        /** 关卡作答结果 */
        this.result = [];
        /** gameOver数据 */
        this.gameOver = new ExtraGameOverData();
    }
    return ExtraData;
}());
exports.ExtraData = ExtraData;
var AdditionalLevelData = /** @class */ (function (_super) {
    __extends(AdditionalLevelData, _super);
    function AdditionalLevelData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 关卡作答正确步数 */
        _this.correct_num = 0;
        /** 关卡作答错误步数 */
        _this.wrong_num = 0;
        return _this;
    }
    return AdditionalLevelData;
}(LevelData));
exports.AdditionalLevelData = AdditionalLevelData;
var AdditionalOver = /** @class */ (function () {
    function AdditionalOver() {
        this.pass = false;
    }
    return AdditionalOver;
}());
exports.AdditionalOver = AdditionalOver;
var AdditionalData = /** @class */ (function () {
    function AdditionalData() {
        this.gameOver = new AdditionalOver();
        this.result = [];
    }
    return AdditionalData;
}());
exports.AdditionalData = AdditionalData;
var ReportData = /** @class */ (function () {
    function ReportData() {
        /** 格式类型 */
        this.type = 'txt';
        /** 第几次作答 */
        this.index = 1;
        /** 关卡作答结果 */
        this.result = [];
        /** gameOver数据 */
        this.gameOver = new GameOverData();
        /** 额外数据上报 */
        this.ext = new ExtraData();
        /**附加题数据 */
        this.additional = new AdditionalData();
    }
    return ReportData;
}());
exports.ReportData = ReportData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXE1hbmFnZXJcXFJlcG9ydE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUFtRTtBQUNuRSw2RUFBNEU7QUFDNUUsMENBQXFDO0FBRXJDOztHQUVHO0FBQ0g7SUFBQTtRQVNJLFdBQVc7UUFDSixzQkFBaUIsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsaUVBQWlFO1FBQzFELFVBQUssR0FBVyxLQUFLLENBQUM7UUFDdEIsWUFBTyxHQUEwQixFQUFFLENBQUM7UUFDM0MsWUFBWTtRQUNMLHNCQUFpQixHQUErQixFQUFFLENBQUM7UUFDMUQseUNBQXlDO1FBQ3pDLFlBQVk7UUFDTCxlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLGlFQUFpRTtRQUNqRSxhQUFhO1FBQ04sb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFFbkMsYUFBYTtRQUNOLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBZXBDLGdCQUFnQjtRQUNULDRCQUF1QixHQUFhLEVBQUUsQ0FBQztRQWE5QyxhQUFhO1FBQ04sZUFBVSxHQUFhLEVBQUUsQ0FBQztRQXdCakMsZ0JBQWdCO1FBQ1QseUJBQW9CLEdBQWEsRUFBRSxDQUFDO1FBd0IzQyxlQUFlO1FBQ1IsbUJBQWMsR0FBYSxFQUFFLENBQUM7UUFRckMsZUFBZTtRQUNSLDZCQUF3QixHQUFhLEVBQUUsQ0FBQztRQVEvQyxhQUFhO1FBQ04sbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBWTNDLGdCQUFnQjtRQUNULHlCQUFvQixHQUFtQixFQUFFLENBQUM7UUFZakQsWUFBWTtRQUNMLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRS9CLGtCQUFrQjtRQUNYLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRS9CLGVBQWU7UUFDUixxQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFFcEMscUJBQXFCO1FB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QztJQUFELGdCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSw4QkFBUztBQVd0QjtJQUF5Qyx1Q0FBUztJQUFsRDtRQUFBLHFFQUtDO1FBSkcsZUFBZTtRQUNmLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGVBQWU7UUFDZixlQUFTLEdBQVcsQ0FBQyxDQUFDOztJQUMxQixDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUxBLEFBS0MsQ0FMd0MsU0FBUyxHQUtqRDtBQUxZLGtEQUFtQjtBQU9oQztJQUFBO1FBQ0ksU0FBSSxHQUFZLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHdDQUFjO0FBSTNCO0lBQUE7UUFDSSxhQUFRLEdBQW1CLElBQUksY0FBYyxFQUFFLENBQUM7UUFDaEQsV0FBTSxHQUEwQixFQUFFLENBQUE7SUFDdEMsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSx3Q0FBYztBQUszQjtJQUFBO1FBQ0ksV0FBVztRQUNYLFNBQUksR0FBVyxLQUFLLENBQUM7UUFDckIsWUFBWTtRQUNaLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsYUFBYTtRQUNiLFdBQU0sR0FBZ0IsRUFBRSxDQUFDO1FBQ3pCLGlCQUFpQjtRQUNqQixhQUFRLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUMsYUFBYTtRQUNiLFFBQUcsR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBRWpDLFdBQVc7UUFDWCxlQUFVLEdBQW1CLElBQUksY0FBYyxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0VmFsdWUgfSBmcm9tICcuLi8uLi8uLi9nYW1lL3NjcmlwdHMvRGF0YS9Db25zdFZhbHVlJztcbmltcG9ydCB7IEVkaXRvck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi9nYW1lL3NjcmlwdHMvTWFuYWdlci9FZGl0b3JNYW5hZ2VyJztcbmltcG9ydCBHYW1lTXNnIGZyb20gJy4uL1NESy9HYW1lTXNnJztcblxuLyoqXG4gKiDkvZznrZTmlbDmja7nrqHnkIbnsbtcbiAqL1xuY2xhc3MgUmVwb3J0TWFuYWdlckNsYXNzIHtcbiAgICBwdWJsaWMgc3RhdGljIF9pbnN0YW5jZTogUmVwb3J0TWFuYWdlckNsYXNzID0gbnVsbDtcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBSZXBvcnRNYW5hZ2VyQ2xhc3MoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqIOaYn+e6p+agh+WHhiAqL1xuICAgIHB1YmxpYyBfc3RhcnRMZXZlbENvbmZpZzogbnVtYmVyW10gPSBbODAsIDUwLCAwXTtcbiAgICAvKiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5b+F6ZyA5Y+C5pWwLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmcgPSAndHh0JztcbiAgICBwdWJsaWMgX3Jlc3VsdDogQXJyYXk8RXh0cmFMZXZlbERhdGE+ID0gW107XG4gICAgLyoqIOmZhOWKoOmimOaVsOaNriAqL1xuICAgIHB1YmxpYyBfYWRkaXRpb25hbFJlc3VsdDogQXJyYXk8QWRkaXRpb25hbExldmVsRGF0YT4gPSBbXTtcbiAgICAvLyBwdWJsaWMgX2dhbWVPdmVyOiBHYW1lT3ZlckRhdGEgPSBudWxsO1xuICAgIC8qKiDnrKzlh6DmrKHkvZznrZQgKi9cbiAgICBwdWJsaWMgX3BsYXlJbmRleDogbnVtYmVyID0gMDtcblxuICAgIC8qKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3ovoXliqnlj4LmlbAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAvKiog5q+P5YWz5byA5aeL5pe26Ze0ICovXG4gICAgcHVibGljIF9sZXZlbFN0YXJ0VGltZTogbnVtYmVyID0gMDtcblxuICAgIC8qKiDmr4/lhbPkvZznrZTogJfml7YgKi9cbiAgICBwdWJsaWMgX2NvYXN0VGltZUFycjogbnVtYmVyW10gPSBbXTtcbiAgICAvKiog5re75YqgIOWFsy/mraXpqqQg5pe26Ze0ICovXG4gICAgcHVibGljIGFkZENvYXN0VGltZSh0bTogbnVtYmVyKSB7XG4gICAgICAgIGxldCB0aW1lID0gdG0gLSB0aGlzLl9sZXZlbFN0YXJ0VGltZTtcbiAgICAgICAgdGltZSA9IE1hdGguY2VpbCh0aW1lIC8gMTAwMCkgKiAxMDAwOyAvL+aXtumXtOWPluaVtFxuICAgICAgICB0aGlzLl9jb2FzdFRpbWVBcnJbdGhpcy5fY3VyTGV2ZWxJZF0gPSB0aW1lO1xuICAgIH1cbiAgICAvKiog6I635Y+W5oC76ICX5pe2ICovXG4gICAgcHVibGljIGdldENvYXN0VGltZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2FzdFRpbWVBcnI7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRDb2FzdFRpbWVzKGFycjogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5fY29hc3RUaW1lQXJyID0gYXJyO1xuICAgIH1cblxuICAgIC8qKiDpmYTliqDpopjmr4/lhbPkvZznrZTogJfml7YgKi9cbiAgICBwdWJsaWMgX2FkZGl0aW9uYWxDb2FzdFRpbWVBcnI6IG51bWJlcltdID0gW107XG4gICAgcHVibGljIGFkZEFkZGl0aW9uYWxDb2FzdFRpbWUodG06IG51bWJlcikge1xuICAgICAgICBsZXQgdGltZSA9IHRtIC0gdGhpcy5fbGV2ZWxTdGFydFRpbWU7XG4gICAgICAgIHRpbWUgPSBNYXRoLmNlaWwodGltZSAvIDEwMDApICogMTAwMDsgLy/ml7bpl7Tlj5bmlbRcbiAgICAgICAgdGhpcy5fYWRkaXRpb25hbENvYXN0VGltZUFyclt0aGlzLl9jdXJBZGRpdGlvbmFsSWRdID0gdGltZTtcbiAgICB9XG4gICAgcHVibGljIGdldEFkZGl0aW9uYWxDb2FzdFRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRpdGlvbmFsQ29hc3RUaW1lQXJyO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0QWRkaXRpb25hbENvYXN0VGltZXMoYXJyOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLl9hZGRpdGlvbmFsQ29hc3RUaW1lQXJyID0gYXJyO1xuICAgIH1cblxuICAgIC8qKiDmr4/lhbPkvZznrZTmrKHmlbAgKi9cbiAgICBwdWJsaWMgX3RyeUNvdW50czogbnVtYmVyW10gPSBbXTtcbiAgICAvKiog6I635Y+W5oC75qyh5pWwICovXG4gICAgcHVibGljIGdldFRyeUNvdW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeUNvdW50cztcbiAgICB9XG4gICAgcHVibGljIHNldFRyeUNvdW50cyhhcnI6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMuX3RyeUNvdW50cyA9IGFycjtcbiAgICB9XG4gICAgLyoqIOa3u+WKoCDlhbMv5q2l6aqkIOasoeaVsCAqL1xuICAgIHB1YmxpYyBhZGRUcnlDb3VudChiQ29ycmVjdDogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5fdHJ5Q291bnRzW3RoaXMuX2N1ckxldmVsSWRdKSB7XG4gICAgICAgICAgICB0aGlzLl90cnlDb3VudHNbdGhpcy5fY3VyTGV2ZWxJZF0gKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3RyeUNvdW50c1t0aGlzLl9jdXJMZXZlbElkXSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodm9pZCAwID09PSB0aGlzLl9jb3JyZWN0Q291bnRzW3RoaXMuX2N1ckxldmVsSWRdKSB7XG4gICAgICAgICAgICB0aGlzLl9jb3JyZWN0Q291bnRzW3RoaXMuX2N1ckxldmVsSWRdID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYkNvcnJlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvcnJlY3RDb3VudHNbdGhpcy5fY3VyTGV2ZWxJZF0gKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDpmYTliqDpopjmr4/lhbPkvZznrZTmrKHmlbAgKi9cbiAgICBwdWJsaWMgX2FkZGl0aW9uYWxUcnlDb3VudHM6IG51bWJlcltdID0gW107XG4gICAgLyoqIOmZhOWKoOmimOiOt+WPluaAu+asoeaVsCAqL1xuICAgIHB1YmxpYyBnZXRBZGRpdGlvbmFsVHJ5Q291bnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkaXRpb25hbFRyeUNvdW50cztcbiAgICB9XG4gICAgcHVibGljIHNldEFkZGl0aW9uYWxUcnlDb3VudHMoYXJyOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLl9hZGRpdGlvbmFsVHJ5Q291bnRzID0gYXJyO1xuICAgIH1cbiAgICAvKiog5re75YqgIOWFsy/mraXpqqQg5qyh5pWwICovXG4gICAgcHVibGljIGFkZEFkZGl0aW9uYWxUcnlDb3VudChiQ29ycmVjdDogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5fYWRkaXRpb25hbFRyeUNvdW50c1t0aGlzLl9jdXJBZGRpdGlvbmFsSWRdKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRpdGlvbmFsVHJ5Q291bnRzW3RoaXMuX2N1ckFkZGl0aW9uYWxJZF0gKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZGl0aW9uYWxUcnlDb3VudHNbdGhpcy5fY3VyQWRkaXRpb25hbElkXSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodm9pZCAwID09PSB0aGlzLl9hZGRpdGlvbmFsQ29ycmVjdENvdW50c1t0aGlzLl9jdXJBZGRpdGlvbmFsSWRdKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRpdGlvbmFsQ29ycmVjdENvdW50c1t0aGlzLl9jdXJBZGRpdGlvbmFsSWRdID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYkNvcnJlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZGl0aW9uYWxDb3JyZWN0Q291bnRzW3RoaXMuX2N1ckFkZGl0aW9uYWxJZF0gKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDlrp7pmYXkvZznrZTmraPnoa7mrKHmlbAgKi9cbiAgICBwdWJsaWMgX2NvcnJlY3RDb3VudHM6IG51bWJlcltdID0gW107XG4gICAgcHVibGljIGdldENvcnJlY3RDb3VudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3JyZWN0Q291bnRzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0Q29ycmVjdENvdW50cyhhcnI6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMuX2NvcnJlY3RDb3VudHMgPSBhcnI7XG4gICAgfVxuXG4gICAgLyoqIOWunumZheS9nOetlOato+ehruasoeaVsCAqL1xuICAgIHB1YmxpYyBfYWRkaXRpb25hbENvcnJlY3RDb3VudHM6IG51bWJlcltdID0gW107XG4gICAgcHVibGljIGdldEFkZGl0aW9uYWxDb3JyZWN0Q291bnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkaXRpb25hbENvcnJlY3RDb3VudHM7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRBZGRpdGlvbmFsQ29ycmVjdENvdW50cyhhcnI6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMuX2FkZGl0aW9uYWxDb3JyZWN0Q291bnRzID0gYXJyO1xuICAgIH1cblxuICAgIC8qKiDmr4/lhbPkvZznrZTnirbmgIEgKi9cbiAgICBwdWJsaWMgX0Fuc3dlclJlc3VsdHM6IEFuc3dlclJlc3VsdFtdID0gW107XG4gICAgLyoqIOiOt+WPluaAu+asoeaVsCAqL1xuICAgIHB1YmxpYyBnZXRBbnN3ZXJSZXN1bHRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fQW5zd2VyUmVzdWx0cztcbiAgICB9XG4gICAgcHVibGljIHNldEFuc3dlclJlc3VsdHMoYXJyOiBBbnN3ZXJSZXN1bHRbXSkge1xuICAgICAgICB0aGlzLl9BbnN3ZXJSZXN1bHRzID0gYXJyO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0QW5zd2VyUmVzdWx0QnlMZXZlbChsZXZlbDogbnVtYmVyLCBhbnN3ZXI6IEFuc3dlclJlc3VsdCkge1xuICAgICAgICB0aGlzLl9BbnN3ZXJSZXN1bHRzW2xldmVsXSA9IGFuc3dlcjtcbiAgICB9XG5cbiAgICAvKiog6ZmE5Yqg6aKY5q+P5YWz5L2c562U54q25oCBICovXG4gICAgcHVibGljIF9hZGRpdGlvbmFsQW5zd2VyUmVzOiBBbnN3ZXJSZXN1bHRbXSA9IFtdO1xuICAgIC8qKiDojrflj5bpmYTliqDpopjmgLvmrKHmlbAgKi9cbiAgICBwdWJsaWMgZ2V0YWRkaXRpb25hbEFuc3dlclJlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZGl0aW9uYWxBbnN3ZXJSZXM7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRBZGRpdGlvbmFsQW5zd2VyUmVzKGFycjogQW5zd2VyUmVzdWx0W10pIHtcbiAgICAgICAgdGhpcy5fYWRkaXRpb25hbEFuc3dlclJlcyA9IGFycjtcbiAgICB9XG4gICAgcHVibGljIHNldEFkZGl0aW9uYWxBbnN3ZXJSZXN1bHRCeUxldmVsKGxldmVsOiBudW1iZXIsIGFuc3dlcjogQW5zd2VyUmVzdWx0KSB7XG4gICAgICAgIHRoaXMuX2FkZGl0aW9uYWxBbnN3ZXJSZXNbbGV2ZWxdID0gYW5zd2VyO1xuICAgIH1cblxuICAgIC8qKiDmgLvlhbPljaHmlbDnm64gKi9cbiAgICBwdWJsaWMgX2xldmVsQ291bnQ6IG51bWJlciA9IDA7XG5cbiAgICAvKiog5b2T5YmN5YWz5Y2haWQgIOS7jjDlvIDlp4sqL1xuICAgIHB1YmxpYyBfY3VyTGV2ZWxJZDogbnVtYmVyID0gMDtcblxuICAgIC8qKiDmgLvpmYTliqDpopjlhbPljaHmlbDnm64gKi9cbiAgICBwdWJsaWMgX2FkZGl0aW9uYWxDb3VudDogbnVtYmVyID0gMDtcblxuICAgIC8qKiDlvZPliY3pmYTliqDpopjlhbPljaFpZO+8jOS7jjDlvIDlp4sgKi9cbiAgICBwdWJsaWMgX2N1ckFkZGl0aW9uYWxJZDogbnVtYmVyID0gMDtcblxuICAgIC8qKiDlrp7pmYXkvZznrZTmraPnoa7mrKHmlbAgKi9cbiAgICAvLyBwdWJsaWMgX2NvcnJlY3RDb3VudDogbnVtYmVyID0gMDtcblxuICAgIC8qKiDmmK/lkKblhajpg6jlhbPljaHpgJrlhbMgKi9cbiAgICBwdWJsaWMgaXNBbGxPdmVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKiog5piv5ZCm5pW05L2T5pyq5pON5L2cICovXG4gICAgLy8gcHVibGljIF9pc1VuZG86IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICog5piv5ZCmIOW9k+WJjeatpemqpC/lhbPljaEg5pyq5pON5L2c77yMXG4gICAgICog5Y+q6KaB55So5oi35pyJ5pON5L2c5bCx5L+u5pS55q2k5YC8XG4gICAgICogKi9cbiAgICAvLyBwdWJsaWMgX2lzQ3VyTGV2ZWxVbmRvOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKiDmmK/lkKblt7Lnu4/kuIrmiqXov4dnYW1lX292ZXIgKi9cbiAgICBwdWJsaWMgX2lzUmVwb3J0ZWRHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqIOmcgOimgeWIpOaWreato+ivr+eahOaAu+atpeaVsCAqL1xuICAgIHB1YmxpYyBfc3RlcENvdW50OiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW6KaB5LiK5oql55qE5pWw5o2uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxDb3VudCDlhbPljaHmgLvmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdFJlcG9ydERhdGEobGV2ZWxDb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3BsYXlJbmRleCA9IDE7XG5cbiAgICAgICAgdGhpcy5fbGV2ZWxDb3VudCA9IGxldmVsQ291bnQ7XG4gICAgICAgIHRoaXMuX2FkZGl0aW9uYWxDb3VudCA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5hZGRpdGlvbmFsLmxlbmd0aDtcblxuICAgICAgICB0aGlzLnJlc2V0RGF0YSgpO1xuXG4gICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyWydnZXRTdGVwQ291bnQnXSkge1xuICAgICAgICAgICAgdGhpcy5fc3RlcENvdW50ID0gRWRpdG9yTWFuYWdlclsnZ2V0U3RlcENvdW50J10oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0ZXBDb3VudCA9IGxldmVsQ291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgR2FtZU1zZy5yZXF1ZXN0X2xldmVsX2luZm8oeyBsZXZlbENvdW50OiB0aGlzLl9sZXZlbENvdW50LCBjdXJMZXZlbDogdGhpcy5fY3VyTGV2ZWxJZCArIDEgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YCa5YWz5LmL5ZCO55qE6YeN546pXG4gICAgICogIOWPquacieWkluWxgmluZGV46Ieq5aKeICAg5YW25L2Z5pWw5o2u5oGi5aSN5Yid5aeL54q25oCBXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgRGF0YVJlcG9ydE1nclxuICAgICAqL1xuICAgIHB1YmxpYyByZXBsYXlHYW1lKCkge1xuICAgICAgICArK3RoaXMuX3BsYXlJbmRleDtcblxuICAgICAgICB0aGlzLnJlc2V0RGF0YSgpO1xuXG4gICAgICAgIEdhbWVNc2cucmVxdWVzdF9sZXZlbF9pbmZvKHsgbGV2ZWxDb3VudDogdGhpcy5fbGV2ZWxDb3VudCwgY3VyTGV2ZWw6IHRoaXMuX2N1ckxldmVsSWQgKyAxIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmHjee9ruaVsOaNrlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNldERhdGEoKSB7XG4gICAgICAgIHRoaXMuX2N1ckxldmVsSWQgPSAwO1xuICAgICAgICB0aGlzLl9jdXJBZGRpdGlvbmFsSWQgPSAwO1xuICAgICAgICB0aGlzLmlzQWxsT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1JlcG9ydGVkR2FtZU92ZXIgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9yZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9sZXZlbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsZXZlbEluZm8gPSB0aGlzLl9sZXZlbENvdW50ID4gMSA/IGAke0NvbnN0VmFsdWUuR2FtZU5hbWV9X+esrCR7aSArIDF95YWzYCA6IENvbnN0VmFsdWUuR2FtZU5hbWU7XG4gICAgICAgICAgICBsZXQgX2xldmVsRGF0YSA9IG5ldyBFeHRyYUxldmVsRGF0YSgpO1xuICAgICAgICAgICAgX2xldmVsRGF0YS5pZCA9IGkgKyAxO1xuICAgICAgICAgICAgX2xldmVsRGF0YS5xdWVzdGlvbl9pbmZvID0gbGV2ZWxJbmZvO1xuICAgICAgICAgICAgdGhpcy5fcmVzdWx0LnB1c2goX2xldmVsRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKirojrflj5bpmYTpmYTliqDpopjlhbPljaHmlbDph48gKi9cbiAgICAgICAgdGhpcy5fY3VyQWRkaXRpb25hbElkID0gMDtcbiAgICAgICAgdGhpcy5fYWRkaXRpb25hbFJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2FkZGl0aW9uYWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaW5mbyA9IGDpmYTliqDpophf56ysJHtpICsgMX3lhbNgXG4gICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBBZGRpdGlvbmFsTGV2ZWxEYXRhKCk7XG4gICAgICAgICAgICBkYXRhLmlkID0gaSArIDE7XG4gICAgICAgICAgICBkYXRhLnF1ZXN0aW9uX2luZm8gPSBpbmZvO1xuICAgICAgICAgICAgdGhpcy5fYWRkaXRpb25hbFJlc3VsdC5wdXNoKGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGV2ZWxTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIHRoaXMuc2V0VHJ5Q291bnRzKFtdKTtcbiAgICAgICAgdGhpcy5zZXRDb3JyZWN0Q291bnRzKFtdKTtcbiAgICAgICAgdGhpcy5zZXRDb2FzdFRpbWVzKFtdKTtcbiAgICAgICAgdGhpcy5zZXRBbnN3ZXJSZXN1bHRzKFtdKTtcblxuICAgICAgICB0aGlzLnNldEFkZGl0aW9uYWxUcnlDb3VudHMoW10pO1xuICAgICAgICB0aGlzLnNldEFkZGl0aW9uYWxDb3JyZWN0Q291bnRzKFtdKTtcbiAgICAgICAgdGhpcy5zZXRBZGRpdGlvbmFsQ29hc3RUaW1lcyhbXSk7XG4gICAgICAgIHRoaXMuc2V0QWRkaXRpb25hbEFuc3dlclJlcyhbXSk7XG4gICAgfVxuXG4gICAgLy8gcHVibGljIHNldEZpcnN0VG91Y2goKSB7XG4gICAgLy8gICAgIHRoaXMuX2lzQ3VyTGV2ZWxVbmRvID0gZmFsc2U7XG4gICAgLy8gICAgIHRoaXMuX2lzVW5kbyA9IGZhbHNlO1xuICAgIC8vIH1cblxuICAgIC8qKlxuICAgICAqIOabtOaWsOWFs+WNoeS9nOetlOaVsOaNrlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBiQ29ycmVjdCDmmK/lkKbkvZznrZTmraPnoa5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJDdXJMZXZlbEZpbmlzaCDlvZPliY3lhbPljaHmmK/lkKblt7LlrozmiJAg55So5LqO5oyJ5q2l6aqk5LiK5oql5pe254q25oCB6K6+572u5Li6aGFsZu+8jOm7mOiupOS4unRydWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwb3J0TGV2ZWxSZXN1bHQoYkNvcnJlY3Q6IGJvb2xlYW4sIGJDdXJMZXZlbEZpbmlzaDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgbGV0IGN1clRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAodGhpcy5fY3VyTGV2ZWxJZCA+PSB0aGlzLl9sZXZlbENvdW50KSB7XG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSB0aGlzLl9hZGRpdGlvbmFsUmVzdWx0W3RoaXMuX2N1ckFkZGl0aW9uYWxJZF0pIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuYWRkQWRkaXRpb25hbENvYXN0VGltZShjdXJUaW1lKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQWRkaXRpb25hbFRyeUNvdW50KGJDb3JyZWN0KTtcbiAgICAgICAgICAgIGxldCBhbnN3ZXJSZXMgPSBBbnN3ZXJSZXN1bHQuTm9BbnN3ZXI7XG4gICAgICAgICAgICBpZiAoYkNvcnJlY3QpIHtcbiAgICAgICAgICAgICAgICBhbnN3ZXJSZXMgPSBiQ3VyTGV2ZWxGaW5pc2ggPyBBbnN3ZXJSZXN1bHQuQW5zd2VyUmlnaHQgOiBBbnN3ZXJSZXN1bHQuQW5zd2VySGFsZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5zd2VyUmVzID0gQW5zd2VyUmVzdWx0LkFuc3dlckVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRBZGRpdGlvbmFsQW5zd2VyUmVzdWx0QnlMZXZlbCh0aGlzLl9jdXJBZGRpdGlvbmFsSWQsIGFuc3dlclJlcyk7XG4gICAgICAgICAgICBsZXQgX3JlcG9ydERhdGEgPSB0aGlzLmdldFJlcG9ydERhdGEoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkaXRpb25hbCByZXBvcnQgbGV2ZWwgZGF0YTogXCIsIF9yZXBvcnREYXRhKTtcbiAgICAgICAgICAgIEdhbWVNc2cuYWRkaXRpb25hbEFuc3dlclN5bmNTZW5kKF9yZXBvcnREYXRhKTtcblxuICAgICAgICAgICAgaWYgKGJDdXJMZXZlbEZpbmlzaCkge1xuICAgICAgICAgICAgICAgICsrdGhpcy5fY3VyQWRkaXRpb25hbElkO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xldmVsU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VyQWRkaXRpb25hbElkID09PSB0aGlzLl9hZGRpdGlvbmFsQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FsbE92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcG9ydEdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICBHYW1lTXNnLnJlcXVlc3RfbGV2ZWxfaW5mbyh7IGxldmVsQ291bnQ6IHRoaXMuX2xldmVsQ291bnQsIGN1ckxldmVsOiB0aGlzLl9jdXJMZXZlbElkICsgMSB9KTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSB0aGlzLl9yZXN1bHRbdGhpcy5fY3VyTGV2ZWxJZF0pIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuYWRkQ29hc3RUaW1lKGN1clRpbWUpO1xuICAgICAgICAgICAgdGhpcy5hZGRUcnlDb3VudChiQ29ycmVjdCk7XG4gICAgICAgICAgICBsZXQgYW5zd2VyUmVzID0gQW5zd2VyUmVzdWx0Lk5vQW5zd2VyO1xuICAgICAgICAgICAgaWYgKGJDb3JyZWN0KSB7XG4gICAgICAgICAgICAgICAgYW5zd2VyUmVzID0gYkN1ckxldmVsRmluaXNoID8gQW5zd2VyUmVzdWx0LkFuc3dlclJpZ2h0IDogQW5zd2VyUmVzdWx0LkFuc3dlckhhbGY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuc3dlclJlcyA9IEFuc3dlclJlc3VsdC5BbnN3ZXJFcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0QW5zd2VyUmVzdWx0QnlMZXZlbCh0aGlzLl9jdXJMZXZlbElkLCBhbnN3ZXJSZXMpO1xuXG4gICAgICAgICAgICBsZXQgX3JlcG9ydERhdGEgPSB0aGlzLmdldFJlcG9ydERhdGEoKTtcbiAgICAgICAgICAgIF9yZXBvcnREYXRhLmdhbWVPdmVyID0gbnVsbDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKF9yZXBvcnREYXRhKTtcbiAgICAgICAgICAgIEdhbWVNc2cuYW5zd2VyU3luY1NlbmQoX3JlcG9ydERhdGEpO1xuXG4gICAgICAgICAgICBpZiAoYkN1ckxldmVsRmluaXNoKSB7XG4gICAgICAgICAgICAgICAgKyt0aGlzLl9jdXJMZXZlbElkO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xldmVsU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VyTGV2ZWxJZCA9PT0gdGhpcy5fbGV2ZWxDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWxsT3ZlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0R2FtZU92ZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBHYW1lTXNnLnJlcXVlc3RfbGV2ZWxfaW5mbyh7IGxldmVsQ291bnQ6IHRoaXMuX2xldmVsQ291bnQsIGN1ckxldmVsOiB0aGlzLl9jdXJMZXZlbElkICsgMSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkvZznrZTnu5PmnZ8v56uv5LiK5pS26aKYIOaVsOaNruS4iuaKpVxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIERhdGFSZXBvcnRNZ3JcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwb3J0R2FtZU92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1JlcG9ydGVkR2FtZU92ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfcmVwb3JHYW1lT3ZlcnREYXRhID0gdGhpcy5nZXRSZXBvcnREYXRhKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9yZXBvckdhbWVPdmVydERhdGEpO1xuICAgICAgICBpZiAodGhpcy5fY3VyTGV2ZWxJZCA9PT0gdGhpcy5fbGV2ZWxDb3VudCAmJiB0aGlzLl9hZGRpdGlvbmFsQ291bnQgPiAwICYmIHRoaXMuX2N1ckFkZGl0aW9uYWxJZCA9PT0gdGhpcy5fYWRkaXRpb25hbENvdW50KSB7XG4gICAgICAgICAgICBHYW1lTXNnLmFkZGl0aW9uYWxPdmVyKF9yZXBvckdhbWVPdmVydERhdGEpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBHYW1lTXNnLmdhbWVPdmVyKF9yZXBvckdhbWVPdmVydERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIEdhbWVNc2cuZ2FtZVN0YXRpc3RpY0RhdGEoX3JlcG9yR2FtZU92ZXJ0RGF0YS5leHQpO1xuXG4gICAgICAgIC8qKiDkuIrmiqVnYW1lX292ZXLmlbDmja7kuYvlkI7kv67mlLnnirbmgIEgKi9cbiAgICAgICAgdGhpcy5faXNSZXBvcnRlZEdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5blhbPljaHmlbDmja5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UmVzdWx0RGF0YShpc0V4dHJhOiBib29sZWFuKTogTGV2ZWxEYXRhW10gfCBFeHRyYUxldmVsRGF0YVtdIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9yZXN1bHQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBsZXZlbERhdGEgPSB0aGlzLl9yZXN1bHRbaV07XG4gICAgICAgICAgICBjb25zdCBsZXZlbEluZGV4ID0gbGV2ZWxEYXRhLmlkIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IGFuc3dlclJlc3VsdCA9IHRoaXMuZ2V0QW5zd2VyUmVzdWx0cygpW2xldmVsSW5kZXhdIHx8IEFuc3dlclJlc3VsdC5Ob0Fuc3dlcjtcbiAgICAgICAgICAgIGNvbnN0IGFuc3dlck51bSA9IHRoaXMuZ2V0VHJ5Q291bnRzKClbbGV2ZWxJbmRleF0gfHwgMDtcbiAgICAgICAgICAgIGNvbnN0IGFuc3dlckNvcnJlY3QgPSB0aGlzLmdldENvcnJlY3RDb3VudHMoKVtsZXZlbEluZGV4XSB8fCAwO1xuICAgICAgICAgICAgY29uc3QgYW5zd2VyV3JvbmcgPSBhbnN3ZXJOdW0gLSBhbnN3ZXJDb3JyZWN0O1xuICAgICAgICAgICAgY29uc3QgYW5zd2VyVGltZSA9IE1hdGguY2VpbCgodGhpcy5nZXRDb2FzdFRpbWVzKClbbGV2ZWxJbmRleF0gfHwgMCkgLyAxMDAwKTtcbiAgICAgICAgICAgIGxldmVsRGF0YS5hbnN3ZXJfcmVzID0gYW5zd2VyUmVzdWx0O1xuICAgICAgICAgICAgbGV2ZWxEYXRhLmFuc3dlcl9udW0gPSBhbnN3ZXJOdW07XG4gICAgICAgICAgICBsZXZlbERhdGEuY29ycmVjdF9udW0gPSBhbnN3ZXJDb3JyZWN0O1xuICAgICAgICAgICAgbGV2ZWxEYXRhLndyb25nX251bSA9IGFuc3dlcldyb25nO1xuICAgICAgICAgICAgbGV2ZWxEYXRhLmFuc3dlcl90aW1lID0gYW5zd2VyVGltZTtcbiAgICAgICAgICAgIGxldmVsRGF0YS5oYXNfcmVzID0gRWRpdG9yTWFuYWdlci5oYXNSZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFeHRyYSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Jlc3VsdC5mb3JFYWNoKChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGV4dHJhTGV2ZWxEYXRhID0gbmV3IExldmVsRGF0YSgpO1xuICAgICAgICAgICAgICAgIGV4dHJhTGV2ZWxEYXRhLmlkID0gaW5mby5pZDtcbiAgICAgICAgICAgICAgICBleHRyYUxldmVsRGF0YS5xdWVzdGlvbl9pbmZvID0gaW5mby5xdWVzdGlvbl9pbmZvO1xuICAgICAgICAgICAgICAgIGV4dHJhTGV2ZWxEYXRhLmFuc3dlcl9yZXMgPSBpbmZvLmFuc3dlcl9yZXM7XG4gICAgICAgICAgICAgICAgZXh0cmFMZXZlbERhdGEuYW5zd2VyX251bSA9IGluZm8uYW5zd2VyX251bTtcbiAgICAgICAgICAgICAgICBleHRyYUxldmVsRGF0YS5hbnN3ZXJfdGltZSA9IGluZm8uYW5zd2VyX3RpbWU7XG5cbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChleHRyYUxldmVsRGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPlumZhOWKoOmimOaVsOaNrlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBZGRpdGlvbmFsUmVzdWx0RGF0YSgpOiBBZGRpdGlvbmFsRGF0YSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fYWRkaXRpb25hbFJlc3VsdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsZXZlbERhdGEgPSB0aGlzLl9hZGRpdGlvbmFsUmVzdWx0W2ldO1xuICAgICAgICAgICAgY29uc3QgbGV2ZWxJbmRleCA9IGxldmVsRGF0YS5pZCAtIDE7XG4gICAgICAgICAgICBjb25zdCBhbnN3ZXJSZXN1bHQgPSB0aGlzLmdldGFkZGl0aW9uYWxBbnN3ZXJSZXMoKVtsZXZlbEluZGV4XSB8fCBBbnN3ZXJSZXN1bHQuTm9BbnN3ZXI7XG4gICAgICAgICAgICBjb25zdCBhbnN3ZXJOdW0gPSB0aGlzLmdldEFkZGl0aW9uYWxUcnlDb3VudHMoKVtsZXZlbEluZGV4XSB8fCAwO1xuICAgICAgICAgICAgY29uc3QgYW5zd2VyQ29ycmVjdCA9IHRoaXMuZ2V0QWRkaXRpb25hbENvcnJlY3RDb3VudHMoKVtsZXZlbEluZGV4XSB8fCAwO1xuICAgICAgICAgICAgY29uc3QgYW5zd2VyV3JvbmcgPSBhbnN3ZXJOdW0gLSBhbnN3ZXJDb3JyZWN0O1xuICAgICAgICAgICAgY29uc3QgYW5zd2VyVGltZSA9IE1hdGguY2VpbCgodGhpcy5nZXRBZGRpdGlvbmFsQ29hc3RUaW1lKClbbGV2ZWxJbmRleF0gfHwgMCkgLyAxMDAwKTtcbiAgICAgICAgICAgIGxldmVsRGF0YS5hbnN3ZXJfcmVzID0gYW5zd2VyUmVzdWx0O1xuICAgICAgICAgICAgbGV2ZWxEYXRhLmFuc3dlcl9udW0gPSBhbnN3ZXJOdW07XG4gICAgICAgICAgICBsZXZlbERhdGEuY29ycmVjdF9udW0gPSBhbnN3ZXJDb3JyZWN0O1xuICAgICAgICAgICAgbGV2ZWxEYXRhLndyb25nX251bSA9IGFuc3dlcldyb25nO1xuICAgICAgICAgICAgbGV2ZWxEYXRhLmFuc3dlcl90aW1lID0gYW5zd2VyVGltZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWRkUmVzID0gbmV3IEFkZGl0aW9uYWxPdmVyKCk7XG4gICAgICAgIGFkZFJlcy5wYXNzID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLl9jdXJBZGRpdGlvbmFsSWQgPT0gdGhpcy5fYWRkaXRpb25hbENvdW50KSB7XG4gICAgICAgICAgICBhZGRSZXMucGFzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFkZERhdGEgPSBuZXcgQWRkaXRpb25hbERhdGEoKTtcbiAgICAgICAgYWRkRGF0YS5nYW1lT3ZlciA9IGFkZFJlcztcbiAgICAgICAgYWRkRGF0YS5yZXN1bHQgPSB0aGlzLl9hZGRpdGlvbmFsUmVzdWx0O1xuICAgICAgICByZXR1cm4gYWRkRGF0YTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOiOt+WPlmdhbWVPdmVy5pWw5o2uXG4gICAgICovXG4gICAgcHVibGljIGdldEdhbWVPdmVyRGF0YShpc0V4dHJhOiBib29sZWFuKTogR2FtZU92ZXJEYXRhIHwgRXh0cmFHYW1lT3ZlckRhdGEge1xuICAgICAgICBsZXQgdG90YWxUcnlDb3VudCA9IGV2YWwodGhpcy5nZXRUcnlDb3VudHMoKS5qb2luKCcrJykpO1xuICAgICAgICB0b3RhbFRyeUNvdW50ID0gdG90YWxUcnlDb3VudCA/IHRvdGFsVHJ5Q291bnQgOiAwO1xuICAgICAgICBsZXQgdG90YWxDb3JyZWN0Q291bnQgPSBldmFsKHRoaXMuZ2V0Q29ycmVjdENvdW50cygpLmpvaW4oJysnKSk7XG4gICAgICAgIHRvdGFsQ29ycmVjdENvdW50ID0gdG90YWxDb3JyZWN0Q291bnQgPyB0b3RhbENvcnJlY3RDb3VudCA6IDA7XG4gICAgICAgIGNvbnN0IHRvdGFsV3JvbmdDb3VudCA9IHRvdGFsVHJ5Q291bnQgLSB0b3RhbENvcnJlY3RDb3VudDtcbiAgICAgICAgbGV0IHRvdGFsVGltZXMgPSBldmFsKHRoaXMuZ2V0Q29hc3RUaW1lcygpLmpvaW4oJysnKSk7XG4gICAgICAgIHRvdGFsVGltZXMgPSB0b3RhbFRpbWVzID8gdG90YWxUaW1lcyA6IDA7XG5cbiAgICAgICAgbGV0IGdhbWVPdmVyOiBHYW1lT3ZlckRhdGEgfCBFeHRyYUdhbWVPdmVyRGF0YSA9IG51bGw7XG4gICAgICAgIGlmIChpc0V4dHJhKSB7XG4gICAgICAgICAgICBnYW1lT3ZlciA9IG5ldyBFeHRyYUdhbWVPdmVyRGF0YSgpO1xuICAgICAgICAgICAgKGdhbWVPdmVyIGFzIEV4dHJhR2FtZU92ZXJEYXRhKS5nYW1lX2NvcnJlY3RfbnVtID0gdG90YWxDb3JyZWN0Q291bnQ7XG4gICAgICAgICAgICAoZ2FtZU92ZXIgYXMgRXh0cmFHYW1lT3ZlckRhdGEpLmdhbWVfd3JvbmdfbnVtID0gdG90YWxXcm9uZ0NvdW50O1xuICAgICAgICAgICAgKGdhbWVPdmVyIGFzIEV4dHJhR2FtZU92ZXJEYXRhKS5jdXJfbGV2ZWxfaWQgPSBNYXRoLm1pbih0aGlzLl9jdXJMZXZlbElkICsgMSwgdGhpcy5fbGV2ZWxDb3VudCk7XG4gICAgICAgICAgICAoZ2FtZU92ZXIgYXMgRXh0cmFHYW1lT3ZlckRhdGEpLnRvdGFsX2xldmVsX251bSA9IHRoaXMuX2xldmVsQ291bnQ7XG4gICAgICAgICAgICAoZ2FtZU92ZXIgYXMgRXh0cmFHYW1lT3ZlckRhdGEpLnN0YXJfbnVtID0gdGhpcy5nZXRTdGFyQ291bnQoKTtcbiAgICAgICAgICAgIChnYW1lT3ZlciBhcyBFeHRyYUdhbWVPdmVyRGF0YSkuc3RlcF9jb3VudCA9IHRoaXMuX3N0ZXBDb3VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdhbWVPdmVyID0gbmV3IEdhbWVPdmVyRGF0YSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2FtZU92ZXIucGVyY2VudGFnZSA9IHRoaXMuaXNBbGxPdmVyID8gTWF0aC5yb3VuZCgodG90YWxDb3JyZWN0Q291bnQgLyB0b3RhbFRyeUNvdW50KSAqIDEwMCkgOiAwO1xuICAgICAgICBnYW1lT3Zlci5hbnN3ZXJfYWxsX3RpbWUgPSBNYXRoLmNlaWwodG90YWxUaW1lcyAvIDEwMDApO1xuICAgICAgICBnYW1lT3Zlci5jb21wbGV0ZV9kZWdyZWUgPSB0aGlzLmlzQWxsT3ZlciA/IDEwMCA6IE1hdGguY2VpbCgodG90YWxDb3JyZWN0Q291bnQgLyB0aGlzLl9zdGVwQ291bnQpICogMTAwKTtcbiAgICAgICAgZ2FtZU92ZXIuYW5zd2VyX2FsbF9zdGF0ZSA9XG4gICAgICAgICAgICAwID09PSB0b3RhbFRyeUNvdW50XG4gICAgICAgICAgICAgICAgPyBBbnN3ZXJSZXN1bHQuTm9BbnN3ZXJcbiAgICAgICAgICAgICAgICA6IHRoaXMuaXNBbGxPdmVyXG4gICAgICAgICAgICAgICAgICAgID8gQW5zd2VyUmVzdWx0LkFuc3dlclJpZ2h0XG4gICAgICAgICAgICAgICAgICAgIDogQW5zd2VyUmVzdWx0LkFuc3dlckhhbGY7XG5cbiAgICAgICAgcmV0dXJuIGdhbWVPdmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFeHRyYURhdGEoKTogRXh0cmFEYXRhIHtcbiAgICAgICAgbGV0IGV4dHJhRGF0YTogRXh0cmFEYXRhID0gbmV3IEV4dHJhRGF0YSgpO1xuICAgICAgICBleHRyYURhdGEudHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgICAgIGV4dHJhRGF0YS5pbmRleCA9IHRoaXMuX3BsYXlJbmRleDtcbiAgICAgICAgZXh0cmFEYXRhLnJlc3VsdCA9IHRoaXMuZ2V0UmVzdWx0RGF0YSh0cnVlKSBhcyBFeHRyYUxldmVsRGF0YVtdO1xuICAgICAgICBleHRyYURhdGEuZ2FtZU92ZXIgPSB0aGlzLmdldEdhbWVPdmVyRGF0YSh0cnVlKSBhcyBFeHRyYUdhbWVPdmVyRGF0YTtcblxuICAgICAgICByZXR1cm4gZXh0cmFEYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZXBvcnREYXRhKCk6IFJlcG9ydERhdGEge1xuICAgICAgICBsZXQgcmVwb3J0RGF0YTogUmVwb3J0RGF0YSA9IG5ldyBSZXBvcnREYXRhKCk7XG4gICAgICAgIHJlcG9ydERhdGEudHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgICAgIHJlcG9ydERhdGEuaW5kZXggPSB0aGlzLl9wbGF5SW5kZXg7XG4gICAgICAgIHJlcG9ydERhdGEucmVzdWx0ID0gdGhpcy5nZXRSZXN1bHREYXRhKGZhbHNlKSBhcyBMZXZlbERhdGFbXTtcbiAgICAgICAgcmVwb3J0RGF0YS5nYW1lT3ZlciA9IHRoaXMuZ2V0R2FtZU92ZXJEYXRhKGZhbHNlKSBhcyBHYW1lT3ZlckRhdGE7XG4gICAgICAgIHJlcG9ydERhdGEuZXh0ID0gdGhpcy5nZXRFeHRyYURhdGEoKTtcbiAgICAgICAgcmVwb3J0RGF0YS5hZGRpdGlvbmFsID0gdGhpcy5nZXRBZGRpdGlvbmFsUmVzdWx0RGF0YSgpO1xuXG4gICAgICAgIHJldHVybiByZXBvcnREYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluaYn+aVsFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTdGFyQ291bnQoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVPdmVyRGF0YSA9IHRoaXMuZ2V0R2FtZU92ZXJEYXRhKGZhbHNlKTtcbiAgICAgICAgbGV0IHN0YXJDb3VudCA9IDA7XG4gICAgICAgIC8qKiDorqHnrpfmmJ/nuqcgKi9cbiAgICAgICAgaWYgKGdhbWVPdmVyRGF0YS5wZXJjZW50YWdlID49IHRoaXMuX3N0YXJ0TGV2ZWxDb25maWdbMF0pIHtcbiAgICAgICAgICAgIHN0YXJDb3VudCA9IDM7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZU92ZXJEYXRhLnBlcmNlbnRhZ2UgPj0gdGhpcy5fc3RhcnRMZXZlbENvbmZpZ1sxXSkge1xuICAgICAgICAgICAgc3RhckNvdW50ID0gMjtcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lT3ZlckRhdGEucGVyY2VudGFnZSA+IHRoaXMuX3N0YXJ0TGV2ZWxDb25maWdbMl0pIHtcbiAgICAgICAgICAgIHN0YXJDb3VudCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFyQ291bnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXJDb3VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpnIDopoHlkIzmraXnmoTmlbDmja5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBEYXRhUmVwb3J0TWdyXG4gICAgICovXG4gICAgcHVibGljIGdldFN5bmNEYXRhKCkge1xuICAgICAgICBsZXQgX2RhdGEgPSB7XG4gICAgICAgICAgICBiUmVwb3J0ZWRHYW1lT3ZlcjogdGhpcy5faXNSZXBvcnRlZEdhbWVPdmVyLCAvL+aYr+WQpuW3sue7j+S4iuaKpei/h2dhbWVfb3ZlclxuICAgICAgICAgICAgcGxheUNvdW50OiB0aGlzLl9wbGF5SW5kZXgsIC8v57uf6K6h5L2c562U5qyh5pWwICDku6XpgJrlhbPkuLrnu7TluqZcbiAgICAgICAgICAgIHN0YXJ0VGltZTogdGhpcy5fbGV2ZWxTdGFydFRpbWUsIC8v5q+P5YWz5byA5aeL5pe26Ze0XG4gICAgICAgICAgICBjb2FzdFRpbWVzOiB0aGlzLmdldENvYXN0VGltZXMoKSwgLy/mr4/lhbPkvZznrZTogJfml7ZcbiAgICAgICAgICAgIHRyeUNvdW50czogdGhpcy5nZXRUcnlDb3VudHMoKSwgLy/mr4/lhbPlsJ3or5XmrKHmlbBcbiAgICAgICAgICAgIGNvcnJlY3RDb3VudHM6IHRoaXMuZ2V0Q29ycmVjdENvdW50cygpLCAvL+avj+WFs+S9nOetlOato+ehruasoeaVsFxuICAgICAgICAgICAgY3VyTGV2ZWxJZDogdGhpcy5fY3VyTGV2ZWxJZCwgLy/lvZPliY3lhbPljaFcbiAgICAgICAgICAgIGN1ckFkZGl0aW9uYWxJZDogdGhpcy5fY3VyQWRkaXRpb25hbElkLFxuICAgICAgICAgICAgYkZpbmlzaGVkOiB0aGlzLmlzQWxsT3ZlcixcbiAgICAgICAgICAgIGFuc3dlclJlc3VsdHM6IHRoaXMuZ2V0QW5zd2VyUmVzdWx0cygpLCAvL+avj+WFs+S9nOetlOeKtuaAgVxuICAgICAgICAgICAgYWRkaXRpb25hbFJlczogdGhpcy5nZXRhZGRpdGlvbmFsQW5zd2VyUmVzKCkgLy/pmYTliqDpopjmr4/lhbPkvZznrZTnirbmgIFcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF9kYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9ruaOpeaUtuWIsOeahOS9nOetlOeKtuaAgeWIsOacrOWcsFxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSBkYXRhXG4gICAgICogQG1lbWJlcm9mIERhdGFSZXBvcnRNZ3JcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U3luY0RhdGEoZGF0YTogYW55KSB7XG4gICAgICAgIHRoaXMuX2lzUmVwb3J0ZWRHYW1lT3ZlciA9IGRhdGEuYlJlcG9ydGVkR2FtZU92ZXI7XG4gICAgICAgIHRoaXMuX3BsYXlJbmRleCA9IGRhdGEucGxheUNvdW50O1xuICAgICAgICB0aGlzLl9sZXZlbFN0YXJ0VGltZSA9IGRhdGEuc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLnNldENvYXN0VGltZXMoZGF0YS5jb2FzdFRpbWVzKTtcbiAgICAgICAgdGhpcy5zZXRUcnlDb3VudHMoZGF0YS50cnlDb3VudHMpO1xuICAgICAgICB0aGlzLnNldENvcnJlY3RDb3VudHMoZGF0YS5jb3JyZWN0Q291bnRzKTtcbiAgICAgICAgdGhpcy5fY3VyTGV2ZWxJZCA9IGRhdGEuY3VyTGV2ZWxJZDtcbiAgICAgICAgdGhpcy5fY3VyQWRkaXRpb25hbElkID0gZGF0YS5jdXJBZGRpdGlvbmFsSWQ7XG4gICAgICAgIHRoaXMuaXNBbGxPdmVyID0gZGF0YS5iRmluaXNoZWQ7XG4gICAgICAgIHRoaXMuc2V0QW5zd2VyUmVzdWx0cyhkYXRhLmFuc3dlclJlc3VsdHMpO1xuICAgICAgICB0aGlzLnNldEFkZGl0aW9uYWxBbnN3ZXJSZXMoZGF0YS5hZGRpdGlvbmFsUmVzKTtcblxuICAgICAgICBHYW1lTXNnLnJlcXVlc3RfbGV2ZWxfaW5mbyh7IGxldmVsQ291bnQ6IHRoaXMuX2xldmVsQ291bnQsIGN1ckxldmVsOiB0aGlzLl9jdXJMZXZlbElkICsgMSB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNQYXNzR2FtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJMZXZlbElkIGFuZCBsZXZlbENvdW50XCIsIHRoaXMuX2N1ckxldmVsSWQsIHRoaXMuX2xldmVsQ291bnQpO1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VyTGV2ZWxJZCA9PT0gdGhpcy5fbGV2ZWxDb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNQYXNzQWRkaXRvbmFsKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIl9jdXJBZGRpdGlvbmFsSWQgYW5kIF9hZGRpdGlvbmFsQ291bnRcIiwgdGhpcy5fY3VyQWRkaXRpb25hbElkLCB0aGlzLl9hZGRpdGlvbmFsQ291bnQpO1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VyQWRkaXRpb25hbElkID09PSB0aGlzLl9hZGRpdGlvbmFsQ291bnQ7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IFJlcG9ydE1hbmFnZXIgPSBSZXBvcnRNYW5hZ2VyQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcblxuZXhwb3J0IGVudW0gQW5zd2VyUmVzdWx0IHtcbiAgICBBbnN3ZXJFcnJvciA9ICdhbnN3ZXJfZXJyb3InLCAvL+etlOmUmVxuICAgIEFuc3dlclJpZ2h0ID0gJ2Fuc3dlcl9yaWdodCcsIC8v562U5a+5XG4gICAgQW5zd2VySGFsZiA9ICdhbnN3ZXJfaGFsZicsIC8v5pyq562U5a6MXG4gICAgTm9BbnN3ZXIgPSAnbm9fYW5zd2VyJywgLy/mnKrkvZznrZRcbn1cblxuLyoqXG4gKiDljZXlhbPkvZznrZTmlbDmja5cbiAqL1xuZXhwb3J0IGNsYXNzIExldmVsRGF0YSB7XG4gICAgLyoqIOWFs+WNoUlEICovXG4gICAgaWQ6IG51bWJlciA9IDA7XG4gICAgLyoqIOmimOebruS/oeaBryAqL1xuICAgIHF1ZXN0aW9uX2luZm86IHN0cmluZyA9ICcnO1xuICAgIC8qKiDlhbPljaHkvZznrZTnu5PmnpwgIGFuc3dlcl9lcnJvci9hbnN3ZXJfcmlnaHQvYW5zd2VyX2hhbGYvbm9fYW5zd2VyICovXG4gICAgYW5zd2VyX3JlczogQW5zd2VyUmVzdWx0ID0gQW5zd2VyUmVzdWx0Lk5vQW5zd2VyO1xuICAgIC8qKiDlhbPljaHkvZznrZTmrKHmlbAgKi9cbiAgICBhbnN3ZXJfbnVtOiBudW1iZXIgPSAwO1xuICAgIC8qKiDlhbPljaHkvZznrZTml7bpl7QgKi9cbiAgICBhbnN3ZXJfdGltZTogbnVtYmVyID0gMDtcbn1cblxuLyoqXG4gKiDljZXlhbPkvZznrZTmlbDmja4o6aKd5aSW5LiK5oqlKVxuICovXG5leHBvcnQgY2xhc3MgRXh0cmFMZXZlbERhdGEgZXh0ZW5kcyBMZXZlbERhdGEge1xuICAgIC8qKiDlhbPljaHkvZznrZTmraPnoa7mraXmlbAgKi9cbiAgICBjb3JyZWN0X251bTogbnVtYmVyID0gMDtcbiAgICAvKiog5YWz5Y2h5L2c562U6ZSZ6K+v5q2l5pWwICovXG4gICAgd3JvbmdfbnVtOiBudW1iZXIgPSAwO1xuICAgIC8qKiDmmK/lkKbmnInnu5PmnpwgKi9cbiAgICBoYXNfcmVzOiBib29sZWFuID0gdHJ1ZTtcbn1cblxuLyoqXG4gKiBnYW1lT3ZlcuWtl+auteWGheWuuVxuICog5YW25LitIHBlcmNlbnRhZ2Ug5a2X5q615ZyoIOacqumAmuWFsyDnmoTml7blgJnvvIzmlbDlgLzkuLowXG4gKi9cbmV4cG9ydCBjbGFzcyBHYW1lT3ZlckRhdGEge1xuICAgIC8qKiDmraPnoa7njocgKi9cbiAgICBwZXJjZW50YWdlID0gMDtcbiAgICAvKiog5oC75L2c562U54q25oCBICovXG4gICAgYW5zd2VyX2FsbF9zdGF0ZSA9IEFuc3dlclJlc3VsdC5Ob0Fuc3dlcjtcbiAgICAvKiog5oC75L2c562U5pe26Ze0ICovXG4gICAgYW5zd2VyX2FsbF90aW1lID0gMDtcbiAgICAvKiog5a6M5oiQ5bqmICovXG4gICAgY29tcGxldGVfZGVncmVlID0gMDtcbn1cblxuLyoqXG4gKiBnYW1lT3ZlcuWtl+auteWGheWuuSjpop3lpJbkuIrmiqUpXG4gKi9cbmV4cG9ydCBjbGFzcyBFeHRyYUdhbWVPdmVyRGF0YSBleHRlbmRzIEdhbWVPdmVyRGF0YSB7XG4gICAgLyoqIOaAu+S9nOetlOato+ehruatpeaVsCAqL1xuICAgIGdhbWVfY29ycmVjdF9udW06IG51bWJlciA9IDA7XG4gICAgLyoqIOaAu+S9nOetlOmUmeivr+atpeaVsCAqL1xuICAgIGdhbWVfd3JvbmdfbnVtOiBudW1iZXIgPSAwO1xuICAgIC8qKiDlvZPliY3lhbPljaFpZCAqL1xuICAgIGN1cl9sZXZlbF9pZDogbnVtYmVyID0gMTtcbiAgICAvKiog5oC75YWz5Y2h5pWwICovXG4gICAgdG90YWxfbGV2ZWxfbnVtOiBudW1iZXIgPSAwO1xuICAgIC8qKiDmmJ/nuqcgKi9cbiAgICBzdGFyX251bTogbnVtYmVyID0gMDtcbiAgICAvKiog5oC75q2l5pWwICovXG4gICAgc3RlcF9jb3VudDogbnVtYmVyID0gMDtcbn1cblxuLyoqXG4gKiDpop3lpJbmlbDmja7kuIrmiqVcbiAqICovXG5leHBvcnQgY2xhc3MgRXh0cmFEYXRhIHtcbiAgICAvKiog5qC85byP57G75Z6LICovXG4gICAgdHlwZTogc3RyaW5nID0gJ3R4dCc7XG4gICAgLyoqIOesrOWHoOasoeS9nOetlCAqL1xuICAgIGluZGV4OiBudW1iZXIgPSAxO1xuICAgIC8qKiDlhbPljaHkvZznrZTnu5PmnpwgKi9cbiAgICByZXN1bHQ6IEV4dHJhTGV2ZWxEYXRhW10gPSBbXTtcbiAgICAvKiogZ2FtZU92ZXLmlbDmja4gKi9cbiAgICBnYW1lT3ZlcjogRXh0cmFHYW1lT3ZlckRhdGEgPSBuZXcgRXh0cmFHYW1lT3ZlckRhdGEoKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFkZGl0aW9uYWxMZXZlbERhdGEgZXh0ZW5kcyBMZXZlbERhdGEge1xuICAgIC8qKiDlhbPljaHkvZznrZTmraPnoa7mraXmlbAgKi9cbiAgICBjb3JyZWN0X251bTogbnVtYmVyID0gMDtcbiAgICAvKiog5YWz5Y2h5L2c562U6ZSZ6K+v5q2l5pWwICovXG4gICAgd3JvbmdfbnVtOiBudW1iZXIgPSAwO1xufVxuXG5leHBvcnQgY2xhc3MgQWRkaXRpb25hbE92ZXIge1xuICAgIHBhc3M6IGJvb2xlYW4gPSBmYWxzZTtcbn1cblxuZXhwb3J0IGNsYXNzIEFkZGl0aW9uYWxEYXRhIHtcbiAgICBnYW1lT3ZlcjogQWRkaXRpb25hbE92ZXIgPSBuZXcgQWRkaXRpb25hbE92ZXIoKTtcbiAgICByZXN1bHQ6IEFkZGl0aW9uYWxMZXZlbERhdGFbXSA9IFtdXG59XG5cbmV4cG9ydCBjbGFzcyBSZXBvcnREYXRhIHtcbiAgICAvKiog5qC85byP57G75Z6LICovXG4gICAgdHlwZTogc3RyaW5nID0gJ3R4dCc7XG4gICAgLyoqIOesrOWHoOasoeS9nOetlCAqL1xuICAgIGluZGV4OiBudW1iZXIgPSAxO1xuICAgIC8qKiDlhbPljaHkvZznrZTnu5PmnpwgKi9cbiAgICByZXN1bHQ6IExldmVsRGF0YVtdID0gW107XG4gICAgLyoqIGdhbWVPdmVy5pWw5o2uICovXG4gICAgZ2FtZU92ZXI6IEdhbWVPdmVyRGF0YSA9IG5ldyBHYW1lT3ZlckRhdGEoKTtcbiAgICAvKiog6aKd5aSW5pWw5o2u5LiK5oqlICovXG4gICAgZXh0OiBFeHRyYURhdGEgPSBuZXcgRXh0cmFEYXRhKCk7XG5cbiAgICAvKirpmYTliqDpopjmlbDmja4gKi9cbiAgICBhZGRpdGlvbmFsOiBBZGRpdGlvbmFsRGF0YSA9IG5ldyBBZGRpdGlvbmFsRGF0YSgpO1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6fa1aRp8dNq6gX3GwD9kTX', 'BaseFrameUI');
// frame/scripts/UI/BaseFrameUI.ts

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
var FrameConstValue_1 = require("../Data/FrameConstValue");
var BaseUI_1 = require("./BaseUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseFrameUI = /** @class */ (function (_super) {
    __extends(BaseFrameUI, _super);
    function BaseFrameUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseFrameUI.getUrl = function () {
        cc.log(this.className);
        return FrameConstValue_1.FrameConstValue.FRAME_PREFAB_PANEL_DIR + this.className;
    };
    BaseFrameUI.isFramePanel = true;
    BaseFrameUI = __decorate([
        ccclass
    ], BaseFrameUI);
    return BaseFrameUI;
}(BaseUI_1.BaseUI));
exports.default = BaseFrameUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxCYXNlRnJhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsbUNBQWtDO0FBRTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFNO0lBQS9DOztJQU9BLENBQUM7SUFKaUIsa0JBQU0sR0FBcEI7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixPQUFPLGlDQUFlLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNuRSxDQUFDO0lBTGEsd0JBQVksR0FBWSxJQUFJLENBQUM7SUFEMUIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQU8vQjtJQUFELGtCQUFDO0NBUEQsQUFPQyxDQVB3QyxlQUFNLEdBTzlDO2tCQVBvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhbWVDb25zdFZhbHVlIH0gZnJvbSAnLi4vRGF0YS9GcmFtZUNvbnN0VmFsdWUnO1xuaW1wb3J0IHsgQmFzZVVJIH0gZnJvbSAnLi9CYXNlVUknO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUZyYW1lVUkgZXh0ZW5kcyBCYXNlVUkge1xuICAgIHB1YmxpYyBzdGF0aWMgaXNGcmFtZVBhbmVsOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VXJsKCk6IHN0cmluZyB7XG4gICAgICAgIGNjLmxvZyh0aGlzLmNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiBGcmFtZUNvbnN0VmFsdWUuRlJBTUVfUFJFRkFCX1BBTkVMX0RJUiArIHRoaXMuY2xhc3NOYW1lO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/BaseUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6da4j3MGhPfIxwls9tY6iS', 'BaseUI');
// frame/scripts/UI/BaseUI.ts

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
exports.BaseUI = void 0;
var FrameConstValue_1 = require("../Data/FrameConstValue");
var ListenerManager_1 = require("../Manager/ListenerManager");
var BindNode_1 = require("./BindNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseUI = /** @class */ (function (_super) {
    __extends(BaseUI, _super);
    function BaseUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BaseUI.prototype, "data", {
        get: function () {
            return this.mData;
        },
        set: function (value) {
            this.mData = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseUI.prototype, "tag", {
        get: function () {
            return this.mTag;
        },
        set: function (value) {
            this.mTag = value;
        },
        enumerable: false,
        configurable: true
    });
    BaseUI.getUrl = function () {
        cc.log(this.className);
        return FrameConstValue_1.FrameConstValue.PREFAB_PANEL_DIR + this.className;
    };
    BaseUI.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.removeAll(this);
    };
    BaseUI.prototype.onShow = function () {
        cc.log('BaseUI onShow');
    };
    BaseUI.className = 'BaseUI';
    BaseUI.isFramePanel = false;
    BaseUI = __decorate([
        ccclass
    ], BaseUI);
    return BaseUI;
}(BindNode_1.default));
exports.BaseUI = BaseUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxCYXNlVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUMxRCw4REFBNkQ7QUFDN0QsdUNBQWtDO0FBUzVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXFDLDBCQUFRO0lBQTdDOztJQStCQSxDQUFDO0lBM0JHLHNCQUFXLHdCQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQWdCLEtBQVU7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBVyx1QkFBRzthQUFkO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFDRCxVQUFlLEtBQVU7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BSEE7SUFLYSxhQUFNLEdBQXBCO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsT0FBTyxpQ0FBZSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDN0QsQ0FBQztJQUVELDBCQUFTLEdBQVQ7UUFDSSxpQ0FBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsdUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQTdCYSxnQkFBUyxHQUFHLFFBQVEsQ0FBQztJQUNyQixtQkFBWSxHQUFZLEtBQUssQ0FBQztJQUYxQixNQUFNO1FBRDNCLE9BQU87T0FDYyxNQUFNLENBK0IzQjtJQUFELGFBQUM7Q0EvQkQsQUErQkMsQ0EvQm9DLGtCQUFRLEdBK0I1QztBQS9CcUIsd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZUNvbnN0VmFsdWUgfSBmcm9tICcuLi9EYXRhL0ZyYW1lQ29uc3RWYWx1ZSc7XG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgQmluZE5vZGUgZnJvbSAnLi9CaW5kTm9kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVUlDbGFzczxUIGV4dGVuZHMgQmFzZVVJPiB7XG4gICAgbmV3ICgpOiBUO1xuICAgIGdldFVybCgpOiBzdHJpbmc7XG4gICAgaXNGcmFtZVBhbmVsOiBib29sZWFuO1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVUkgZXh0ZW5kcyBCaW5kTm9kZSB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnQmFzZVVJJztcbiAgICBwdWJsaWMgc3RhdGljIGlzRnJhbWVQYW5lbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBtRGF0YTogYW55O1xuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5tRGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRhdGEodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLm1EYXRhID0gdmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBtVGFnOiBhbnk7XG4gICAgcHVibGljIGdldCB0YWcoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubVRhZztcbiAgICB9XG4gICAgcHVibGljIHNldCB0YWcodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLm1UYWcgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldFVybCgpOiBzdHJpbmcge1xuICAgICAgICBjYy5sb2codGhpcy5jbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gRnJhbWVDb25zdFZhbHVlLlBSRUZBQl9QQU5FTF9ESVIgKyB0aGlzLmNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5yZW1vdmVBbGwodGhpcyk7XG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgICBjYy5sb2coJ0Jhc2VVSSBvblNob3cnKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/BindNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65374G80ONGaJ+/vbcxCejv', 'BindNode');
// frame/scripts/UI/BindNode.ts

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
var ccclass = cc._decorator.ccclass;
var BindNode = /** @class */ (function (_super) {
    __extends(BindNode, _super);
    function BindNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BindNode_1 = BindNode;
    BindNode.prototype.__preload = function () {
        this.bindNode(this.node, this);
    };
    //遍历全部节点，绑定节点名字（重名的只会绑定第一个符合条件的节点）
    BindNode.prototype.bindNode = function (node, target) {
        if (!node || !target) {
            return;
        }
        var _nameTag = '_'; //名字以 '_' 开头的节点才会被绑定
        var nodeList = [node];
        var i = 0;
        while (node) {
            var nodeName = node.name;
            if (_nameTag === nodeName[0] && !target[nodeName]) {
                target[nodeName] = node;
                // cc.log('bindNode:  ', nodeName);
            }
            var bindComp = node.getComponent(BindNode_1);
            if (0 === i || !bindComp) {
                nodeList = nodeList.concat(node.children); //节点有脚本继承了BindNode，就不再绑定其子节点
            }
            node = nodeList[++i];
        }
    };
    var BindNode_1;
    BindNode = BindNode_1 = __decorate([
        ccclass
    ], BindNode);
    return BindNode;
}(cc.Component));
exports.default = BindNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxCaW5kTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUFzQyw0QkFBWTtJQUFsRDs7SUE4QkEsQ0FBQztpQkE5Qm9CLFFBQVE7SUFDekIsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsa0NBQWtDO0lBQ2xDLDJCQUFRLEdBQVIsVUFBUyxJQUFhLEVBQUUsTUFBVztRQUMvQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2xCLE9BQU87U0FDVjtRQUVELElBQUksUUFBUSxHQUFXLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQjtRQUVoRCxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLE9BQU8sSUFBSSxFQUFFO1lBQ1QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQy9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLG1DQUFtQzthQUN0QztZQUVELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBUSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN0QixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7YUFDMUU7WUFFRCxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEI7SUFDTCxDQUFDOztJQTdCZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThCNUI7SUFBRCxlQUFDO0NBOUJELEFBOEJDLENBOUJxQyxFQUFFLENBQUMsU0FBUyxHQThCakQ7a0JBOUJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluZE5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIF9fcHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5iaW5kTm9kZSh0aGlzLm5vZGUsIHRoaXMpO1xuICAgIH1cblxuICAgIC8v6YGN5Y6G5YWo6YOo6IqC54K577yM57uR5a6a6IqC54K55ZCN5a2X77yI6YeN5ZCN55qE5Y+q5Lya57uR5a6a56ys5LiA5Liq56ym5ZCI5p2h5Lu255qE6IqC54K577yJXG4gICAgYmluZE5vZGUobm9kZTogY2MuTm9kZSwgdGFyZ2V0OiBhbnkpIHtcbiAgICAgICAgaWYgKCFub2RlIHx8ICF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfbmFtZVRhZzogc3RyaW5nID0gJ18nOyAvL+WQjeWtl+S7pSAnXycg5byA5aS055qE6IqC54K55omN5Lya6KKr57uR5a6aXG5cbiAgICAgICAgbGV0IG5vZGVMaXN0ID0gW25vZGVdO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICBsZXQgbm9kZU5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgICAgICBpZiAoX25hbWVUYWcgPT09IG5vZGVOYW1lWzBdICYmICF0YXJnZXRbbm9kZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25vZGVOYW1lXSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCdiaW5kTm9kZTogICcsIG5vZGVOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYmluZENvbXAgPSBub2RlLmdldENvbXBvbmVudChCaW5kTm9kZSk7XG4gICAgICAgICAgICBpZiAoMCA9PT0gaSB8fCAhYmluZENvbXApIHtcbiAgICAgICAgICAgICAgICBub2RlTGlzdCA9IG5vZGVMaXN0LmNvbmNhdChub2RlLmNoaWxkcmVuKTsgLy/oioLngrnmnInohJrmnKznu6fmib/kuoZCaW5kTm9kZe+8jOWwseS4jeWGjee7keWumuWFtuWtkOiKgueCuVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlID0gbm9kZUxpc3RbKytpXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/SDK/GameMsg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '835ffTMXMRIv6YdlX4iSt2f', 'GameMsg');
// frame/scripts/SDK/GameMsg.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameMsg = /** @class */ (function () {
    function GameMsg() {
    }
    /************************************可调用接口**************************************/
    /**
     * 监听课堂端发出的事件
     * @param key 事件名字
     * @param callBack 响应函数
     */
    GameMsg.addEvent = function (key, callBack) {
        window['gameMsg'].on_client_event(key, callBack);
    };
    /**
     * 资源加载开始
     * @param type 课件类型
     * @param protocol_version 交互课件版本
     */
    GameMsg.resLoadStart = function (type, protocol_version) {
        window['gameMsg'].res_load_start('courseware_game', '1.1.8');
        GameMsg.resLoadStartLog();
        GameMsg.request_res_load_start('');
    };
    /**
     * 资源加载中
     * @param percent 加载百分比
     */
    GameMsg.resLoading = function (percent) {
        window['gameMsg'].res_load_process(percent);
        GameMsg.res_load_process(percent);
    };
    /**
     * 资源加载完成
     */
    GameMsg.resLoadEnd = function () {
        window['gameMsg'].res_load_complete();
        GameMsg.resLoadEndLog();
        GameMsg.request_res_load_end('');
    };
    /**
     * 游戏开始
     */
    GameMsg.gameStart = function (isResult) {
        if (isResult === void 0) { isResult = false; }
        window['gameMsg'].game_start({ isResult: isResult });
        GameMsg.gameMsg_gameStart(isResult);
        GameMsg.iframe_game_start(isResult);
    };
    /**
     * 游戏操作过程数据上报
     * @param answer_data 操作过程数据/全量数据
     */
    GameMsg.answerSyncSend = function (answer_data) {
        window['gameMsg'].answer_sync_send(answer_data);
        window['iframeMsg'].answer_sync_send(answer_data);
        GameMsg.gameLevelReport(answer_data);
    };
    /**
     * 游戏完成时用于数据上报的全量数据
     * @param data 游戏全量数据
     */
    GameMsg.gameOver = function (data) {
        window['gameMsg'].game_over(data);
        window['iframeMsg'].game_over(data);
        GameMsg.gameOverReport(data);
    };
    /**
     * 上报统计数据
     */
    GameMsg.gameStatisticData = function (data) {
        var sendData = { type: 'courseware_game_answer', data: data };
        window['gameMsg'].game_statistic_data(sendData);
        window['iframeMsg'].game_statistic_data(sendData);
    };
    /**
     * 游戏结束，收到stop消息后发送
     */
    GameMsg.finished = function () {
        window['gameMsg'].finished();
    };
    /**
     * 附加题关卡操作数据发送
     * @param data
     */
    GameMsg.additionalAnswerSyncSend = function (data) {
        window['gameMsg'].additional_answer_sync_send(data);
        window['iframeMsg'].answer_sync_send(data);
    };
    /**
     * 附加题过关事件发送
     * @param data
     */
    GameMsg.additionalOver = function (data) {
        window['gameMsg'].additional_over(data);
    };
    /**
     * 同步发送
     * @param 同步数据
     */
    GameMsg.send_sync_data = function (msg) {
        window['iframeMsg'].send_sync_data(msg);
    };
    /**
     * 同步接收
     * @param cb 回调
     */
    GameMsg.recv_sync_data = function (cb) {
        window['iframeMsg'].recv_sync_data(cb);
    };
    /**
     * 获取是否同步
     * @param cb 回调
     */
    GameMsg.get_is_sync = function (cb) {
        window['iframeMsg'].get_is_sync(cb);
    };
    /**
     * 获取角色信息
     * @param cb 回调
     */
    GameMsg.get_role = function (cb) {
        window['iframeMsg'].get_role(cb);
    };
    // 离线模式监听json消息
    GameMsg.recv_json_data = function (cb) {
        window['iframeMsg'].recv_json_data(cb);
    };
    // 离线模式请求json数据
    GameMsg.request_json_data = function (data) {
        window['iframeMsg'].request_json_data(data);
    };
    // 正常日志
    GameMsg.info = function (msg) {
        var _a;
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        (_a = window['aliLogMsg']).info.apply(_a, __spreadArrays([msg], data));
    };
    // 警告日志
    GameMsg.warn = function (msg) {
        var _a;
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        (_a = window['aliLogMsg']).warn.apply(_a, __spreadArrays([msg], data));
    };
    // 报错日志
    GameMsg.error = function (msg) {
        var _a;
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        (_a = window['aliLogMsg']).error.apply(_a, __spreadArrays([msg], data));
    };
    /**
     * URL参数不全报错
     * @param data url参数
     */
    GameMsg.URLError = function (data) {
        window['aliLogMsg'].URLError(data);
    };
    // 网络请求超时
    GameMsg.httpTimeOut = function (msg) {
        window['aliLogMsg'].httpTimeOut(msg);
    };
    // 网络请求错误
    GameMsg.httpError = function (msg) {
        window['aliLogMsg'].httpError(msg);
    };
    // coursewareKey不同
    GameMsg.differntKey = function (msg) {
        window['aliLogMsg'].differntKey(msg);
    };
    // 游戏收到结束游戏上报
    GameMsg.gameStop = function () {
        window['aliLogMsg'].gameStop();
    };
    /*************************************接着玩、重新玩*********************************/
    /**
     * 发送3S心跳
     * @param data
     */
    GameMsg.send_sync_3s_data = function (data) {
        window['iframeMsg'].send_sync_3s_data(data);
    };
    /**
     * 监听3S心跳
     * @param cb
     */
    GameMsg.recv_sync_3s_data = function (cb) {
        window['iframeMsg'].recv_sync_3s_data(cb);
    };
    /**
     * 监听接着玩
     * @param cb
     */
    GameMsg.recv_keep_playing = function (cb) {
        window['iframeMsg'].recv_keep_playing(cb);
    };
    /**
     * 接着玩回调
     * @param data  3s心跳数据
     */
    GameMsg.request_keep_playing = function (data) {
        window['iframeMsg'].request_keep_playing(data);
    };
    /**
     * 监听取消接着玩
     * @param cb
     */
    GameMsg.recv_cancel_keep_playing = function (cb) {
        window['iframeMsg'].recv_cancel_keep_playing(cb);
    };
    /**
     * 监听重新玩
     * @param cb
     */
    GameMsg.recv_restart = function (cb) {
        window['iframeMsg'].recv_restart(cb);
    };
    /**
     * 发送重新玩成功回调
     * @param data
     */
    GameMsg.request_restart_over = function (data) {
        if (data === void 0) { data = ''; }
        window['iframeMsg'].request_restart_over(data);
    };
    /**
     * 发送准备就绪
     * @param data
     */
    GameMsg.request_event_ready = function (data) {
        if (data === void 0) { data = ''; }
        window['iframeMsg'].request_event_ready(data);
    };
    /**
     * 监听是否为主动发送心跳的一端
     * @param cb 回调
     */
    GameMsg.recv_is_master = function (cb) {
        window['iframeMsg'].recv_is_master(cb);
    };
    /**
     * 发送同步事件监听初始化完成
     * @param data
     */
    GameMsg.request_sync_init = function (data) {
        if (data === void 0) { data = ''; }
        window['iframeMsg'].request_sync_init(data);
    };
    /**
     * 发送关卡信息
     * @param data
     */
    GameMsg.request_level_info = function (data) {
        window['iframeMsg'].request_level_info(data);
    };
    /**
     * 获取是否支持接着玩
     * @param cb 回调
     */
    GameMsg.get_is_supportKeepAndRestart = function (cb) {
        window['iframeMsg'].get_is_supportKeepAndRestart(cb);
    };
    /*************************************预加载*********************************/
    /**
     * 获取是否支持预加载
     * @param cb 回调
     */
    GameMsg.get_is_preload = function (cb) {
        window['iframeMsg'].get_is_preload(cb);
    };
    /**
     * 监听窗口打开
     * @param cb
     */
    GameMsg.recv_show_gamePanel = function (cb) {
        window['iframeMsg'].recv_show_gamePanel(cb);
    };
    /**
     * 监听窗口关闭
     * @param cb
     */
    GameMsg.recv_hide_gamePanel = function (cb) {
        window['iframeMsg'].recv_hide_gamePanel(cb);
    };
    /**
     * 发送资源加载开始
     * @param data
     */
    GameMsg.request_res_load_start = function (data) {
        window['iframeMsg'].request_res_load_start(data);
    };
    /**
     * 发送加载进度
     * @param percent 加载百分比
     */
    GameMsg.res_load_process = function (percent) {
        window['iframeMsg'].res_load_process(percent);
    };
    /**
     * 发送资源加载结束
     * @param data
     */
    GameMsg.request_res_load_end = function (data) {
        window['iframeMsg'].request_res_load_end(data);
    };
    /**
     * 发送引擎加载开始
     * @param data
     */
    GameMsg.request_engine_load_start = function (data) {
        window['iframeMsg'].request_engine_load_start(data);
    };
    /**
     * 发送引擎加载结束
     * @param data
     */
    GameMsg.request_engine_load_end = function (data) {
        window['iframeMsg'].request_engine_load_end(data);
    };
    /**
     * 加载完成
     */
    GameMsg.iframe_game_start = function (isResult) {
        if (this.b_init) {
            return;
        }
        this.b_init = true;
        window['iframeMsg'].game_start({ isResult: isResult });
        GameMsg.iframeMsg_gameStart(isResult);
    };
    // 资源加载开始
    GameMsg.resLoadStartLog = function () {
        window['aliLogMsg'].resLoadStart();
    };
    // 资源加载结束
    GameMsg.resLoadEndLog = function () {
        window['aliLogMsg'].resLoadEnd();
    };
    // gameMsg调用gameStart
    GameMsg.gameMsg_gameStart = function (isResult) {
        window['aliLogMsg'].gameMsg_gameStart({ isResult: isResult });
    };
    // iframeMsg调用gameStart
    GameMsg.iframeMsg_gameStart = function (isResult) {
        window['aliLogMsg'].iframeMsg_gameStart({ isResult: isResult });
    };
    // 游戏单关/单步上报
    GameMsg.gameLevelReport = function (data) {
        window['aliLogMsg'].gameLevelReport(data);
    };
    // 游戏GameOver上报
    GameMsg.gameOverReport = function (data) {
        window['aliLogMsg'].gameOverReport(data);
    };
    /**********************************************************************************/
    /************************************私有接口**************************************/
    GameMsg.b_init = false; // 防止在自测试时多次发送start
    return GameMsg;
}());
exports.default = GameMsg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFNES1xcR2FtZU1zZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBZ1lBLENBQUM7SUEvWEcsaUZBQWlGO0lBQ2pGOzs7O09BSUc7SUFDVyxnQkFBUSxHQUF0QixVQUF1QixHQUFHLEVBQUUsUUFBUTtRQUNoQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNXLG9CQUFZLEdBQTFCLFVBQTJCLElBQUssRUFBRSxnQkFBaUI7UUFDL0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3RCxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDMUIsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7O09BR0c7SUFDVyxrQkFBVSxHQUF4QixVQUF5QixPQUFPO1FBQzVCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOztPQUVHO0lBQ1csa0JBQVUsR0FBeEI7UUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN0QyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNXLGlCQUFTLEdBQXZCLFVBQXdCLFFBQWdCO1FBQWhCLHlCQUFBLEVBQUEsZ0JBQWdCO1FBQ3BDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMs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LFdBQVcsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxTQUFTO0lBQ00scUJBQWEsR0FBNUI7UUFDSSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUNELHFCQUFxQjtJQUNOLHlCQUFpQixHQUFoQyxVQUFpQyxRQUFRO1FBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDRCx1QkFBdUI7SUFDUiwyQkFBbUIsR0FBbEMsVUFBbUMsUUFBUTtRQUN2QyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsWUFBWTtJQUNHLHVCQUFlLEdBQTlCLFVBQStCLElBQUk7UUFDL0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsZUFBZTtJQUNBLHNCQUFjLEdBQTdCLFVBQThCLElBQUk7UUFDOUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBdkNELG9GQUFvRjtJQUVwRixnRkFBZ0Y7SUFDakUsY0FBTSxHQUFZLEtBQUssQ0FBQyxDQUFDLG1CQUFtQjtJQXNDL0QsY0FBQztDQWhZRCxBQWdZQyxJQUFBO2tCQWhZb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNc2cge1xyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWPr+iwg+eUqOaOpeWPoyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLyoqXHJcbiAgICAgKiDnm5HlkKzor77loILnq6/lj5Hlh7rnmoTkuovku7ZcclxuICAgICAqIEBwYXJhbSBrZXkg5LqL5Lu25ZCN5a2XXHJcbiAgICAgKiBAcGFyYW0gY2FsbEJhY2sg5ZON5bqU5Ye95pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkRXZlbnQoa2V5LCBjYWxsQmFjaykge1xyXG4gICAgICAgIHdpbmRvd1snZ2FtZU1zZyddLm9uX2NsaWVudF9ldmVudChrZXksIGNhbGxCYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi1hOa6kOWKoOi9veW8gOWni1xyXG4gICAgICogQHBhcmFtIHR5cGUg6K++5Lu257G75Z6LXHJcbiAgICAgKiBAcGFyYW0gcHJvdG9jb2xfdmVyc2lvbiDkuqTkupLor77ku7bniYjmnKxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZXNMb2FkU3RhcnQodHlwZT8sIHByb3RvY29sX3ZlcnNpb24/KSB7XHJcbiAgICAgICAgd2luZG93WydnYW1lTXNnJ10ucmVzX2xvYWRfc3RhcnQoJ2NvdXJzZXdhcmVfZ2FtZScsICcxLjEuOCcpO1xyXG4gICAgICAgIEdhbWVNc2cucmVzTG9hZFN0YXJ0TG9nKCk7XHJcbiAgICAgICAgR2FtZU1zZy5yZXF1ZXN0X3Jlc19sb2FkX3N0YXJ0KCcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi1hOa6kOWKoOi9veS4rVxyXG4gICAgICogQHBhcmFtIHBlcmNlbnQg5Yqg6L2955m+5YiG5q+UXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVzTG9hZGluZyhwZXJjZW50KSB7XHJcbiAgICAgICAgd2luZG93WydnYW1lTXNnJ10ucmVzX2xvYWRfcHJvY2VzcyhwZXJjZW50KTtcclxuICAgICAgICBHYW1lTXNnLnJlc19sb2FkX3Byb2Nlc3MocGVyY2VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDotYTmupDliqDovb3lrozmiJBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZXNMb2FkRW5kKCkge1xyXG4gICAgICAgIHdpbmRvd1snZ2FtZU1zZyddLnJlc19sb2FkX2NvbXBsZXRlKCk7XHJcbiAgICAgICAgR2FtZU1zZy5yZXNMb2FkRW5kTG9nKCk7XHJcbiAgICAgICAgR2FtZU1zZy5yZXF1ZXN0X3Jlc19sb2FkX2VuZCgnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/lvIDlp4tcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnYW1lU3RhcnQoaXNSZXN1bHQgPSBmYWxzZSkge1xyXG4gICAgICAgIHdpbmRvd1snZ2FtZU1zZyddLmdhbWVfc3RhcnQoeyBpc1Jlc3VsdDogaXNSZXN1bHQgfSk7XHJcbiAgICAgICAgR2FtZU1zZy5nYW1lTXNnX2dhbWVTdGFydChpc1Jlc3VsdCk7XHJcbiAgICAgICAgR2FtZU1zZy5pZnJhbWVfZ2FtZV9zdGFydChpc1Jlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/mk43kvZzov4fnqIvmlbDmja7kuIrmiqVcclxuICAgICAqIEBwYXJhbSBhbnN3ZXJfZGF0YSDmk43kvZzov4fnqIvmlbDmja4v5YWo6YeP5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYW5zd2VyU3luY1NlbmQoYW5zd2VyX2RhdGEpIHtcclxuICAgICAgICB3aW5kb3dbJ2dhbWVNc2cnXS5hbnN3ZXJfc3luY19zZW5kKGFuc3dlcl9kYXRhKTtcclxuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLmFuc3dlcl9zeW5jX3NlbmQoYW5zd2VyX2RhdGEpO1xyXG4gICAgICAgIEdhbWVNc2cuZ2FtZUxldmVsUmVwb3J0KGFuc3dlcl9kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIj+WujOaIkOaXtueUqOS6juaVsOaNruS4iuaKpeeahOWFqOmHj+aVsOaNrlxyXG4gICAgICogQHBhcmFtIGRhdGEg5ri45oiP5YWo6YeP5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2FtZU92ZXIoZGF0YSkge1xyXG4gICAgICAgIHdpbmRvd1snZ2FtZU1zZyddLmdhbWVfb3ZlcihkYXRhKTtcclxuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLmdhbWVfb3ZlcihkYXRhKTtcclxuICAgICAgICBHYW1lTXNnLmdhbWVPdmVyUmVwb3J0KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LiK5oql57uf6K6h5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2FtZVN0YXRpc3RpY0RhdGEoZGF0YTogYW55KSB7XHJcbiAgICAgICAgY29uc3Qgc2VuZERhdGEgPSB7IHR5cGU6ICdjb3Vyc2V3YXJlX2dhbWVfYW5zd2VyJywgZGF0YTogZGF0YSB9O1xyXG4gICAgICAgIHdpbmRvd1snZ2FtZU1zZyddLmdhbWVfc3RhdGlzdGljX2RhdGEoc2VuZERhdGEpO1xyXG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10uZ2FtZV9zdGF0aXN0aWNfZGF0YShzZW5kRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuLjmiI/nu5PmnZ/vvIzmlLbliLBzdG9w5raI5oGv5ZCO5Y+R6YCBXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZmluaXNoZWQoKSB7XHJcbiAgICAgICAgd2luZG93WydnYW1lTXNnJ10uZmluaXNoZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmZhOWKoOmimOWFs+WNoeaTjeS9nOaVsOaNruWPkemAgVxyXG4gICAgICogQHBhcmFtIGRhdGEgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkaXRpb25hbEFuc3dlclN5bmNTZW5kKGRhdGEpIHtcclxuICAgICAgICB3aW5kb3dbJ2dhbWVNc2cnXS5hZGRpdGlvbmFsX2Fuc3dlcl9zeW5jX3NlbmQoZGF0YSlcclxuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLmFuc3dlcl9zeW5jX3NlbmQoZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmZhOWKoOmimOi/h+WFs+S6i+S7tuWPkemAgVxyXG4gICAgICogQHBhcmFtIGRhdGEgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkaXRpb25hbE92ZXIoZGF0YSkge1xyXG4gICAgICAgIHdpbmRvd1snZ2FtZU1zZyddLmFkZGl0aW9uYWxfb3ZlcihkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ZCM5q2l5Y+R6YCBXHJcbiAgICAgKiBAcGFyYW0g5ZCM5q2l5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VuZF9zeW5jX2RhdGEobXNnOiBhbnkpIHtcclxuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnNlbmRfc3luY19kYXRhKG1zZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlkIzmraXmjqXmlLZcclxuICAgICAqIEBwYXJhbSBjYiDlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWN2X3N5bmNfZGF0YShjYikge1xyXG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10ucmVjdl9zeW5jX2RhdGEoY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5piv5ZCm5ZCM5q2lXHJcbiAgICAgKiBAcGFyYW0gY2Ig5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0X2lzX3N5bmMoY2IpIHtcclxuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLmdldF9pc19zeW5jKGNiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluinkuiJsuS/oeaBr1xyXG4gICAgICogQHBhcmFtIGNiIOWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldF9yb2xlKGNiKSB7XHJcbiAgICAgICAgd2luZG93WydpZnJhbWVNc2cnXS5nZXRfcm9sZShjYik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g56a757q/5qih5byP55uR5ZCsanNvbua2iOaBr1xyXG4gICAgcHVibGljIHN0YXRpYyByZWN2X2pzb25fZGF0YShjYikge1xyXG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10ucmVjdl9qc29uX2RhdGEoY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOemu+e6v+aooeW8j+ivt+axgmpzb27mlbDmja5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdF9qc29uX2RhdGEoZGF0YSkge1xyXG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10ucmVxdWVzdF9qc29uX2RhdGEoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5q2j5bi45pel5b+XXHJcbiAgICBwdWJsaWMgc3RhdGljIGluZm8obXNnLCAuLi5kYXRhKSB7XHJcbiAgICAgICAgd2luZG93WydhbGlMb2dNc2cnXS5pbmZvKG1zZywgLi4uZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvLyDorablkYrml6Xlv5dcclxuICAgIHB1YmxpYyBzdGF0aWMgd2Fybihtc2csIC4uLmRhdGEpIHtcclxuICAgICAgICB3aW5kb3dbJ2FsaUxvZ01zZyddLndhcm4obXNnLCAuLi5kYXRhKTtcclxuICAgIH1cclxuICAgIC8vIOaKpemUmeaXpeW/l1xyXG4gICAgcHVibGljIHN0YXRpYyBlcnJvcihtc2csIC4uLmRhdGEpIHtcclxuICAgICAgICB3aW5kb3dbJ2FsaUxvZ01zZyddLmVycm9yKG1zZywgLi4uZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVSTOWPguaVsOS4jeWFqOaKpemUmVxyXG4gICAgICogQHBhcmFtIGRhdGEgdXJs5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVVJMRXJyb3IoZGF0YSkge1xyXG4gICAgICAgIHdpbmRvd1snYWxpTG9nTXNnJ10uVVJMRXJyb3IoZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvLyDnvZHnu5zor7fmsYLotoXml7ZcclxuICAgIHB1YmxpYyBzdGF0aWMgaHR0cFRpbWVPdXQobXNnKSB7XHJcbiAgICAgICAgd2luZG93WydhbGlMb2dNc2cnXS5odHRwVGltZU91dChtc2cpO1xyXG4gICAgfVxyXG4gICAgLy8g572R57uc6K+35rGC6ZSZ6K+vXHJcbiAgICBwdWJsaWMgc3RhdGljIGh0dHBFcnJvcihtc2cpIHtcclxuICAgICAgICB3aW5kb3dbJ2FsaUxvZ01zZyddLmh0dHBFcnJvcihtc2cpO1xyXG4gICAgfVxyXG4gICAgLy8gY291cnNld2FyZUtleeS4jeWQjFxyXG4gICAgcHVibGljIHN0YXRpYyBkaWZmZXJudEtleShtc2cpIHtcclxuICAgICAgICB3aW5kb3dbJ2FsaUxvZ01zZyddLmRpZmZlcm50S2V5KG1zZyk7XHJcbiAgICB9XHJcbiAgICAvLyDmuLjmiI/mlLbliLDnu5PmnZ/muLjmiI/kuIrmiqVcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2FtZVN0b3AoKSB7XHJcbiAgICAgICAgd2luZG93WydhbGlMb2dNc2cnXS5nYW1lU3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5o6l552A546p44CB6YeN5paw546pKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+R6YCBM1Plv4Pot7NcclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VuZF9zeW5jXzNzX2RhdGEoZGF0YTogYW55KSB7XHJcbiAgICAgICAgd2luZG93WydpZnJhbWVNc2cnXS5zZW5kX3N5bmNfM3NfZGF0YShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOebkeWQrDNT5b+D6LezXHJcbiAgICAgKiBAcGFyYW0gY2JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWN2X3N5bmNfM3NfZGF0YShjYjogRnVuY3Rpb24pIHtcclxuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlY3Zfc3luY18zc19kYXRhKGNiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOebkeWQrOaOpeedgOeOqVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVjdl9rZWVwX3BsYXlpbmcoY2I6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgd2luZG93WydpZnJhbWVNc2cnXS5yZWN2X2tlZXBfcGxheWluZyhjYik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjqXnnYDnjqnlm57osINcclxuICAgICAqIEBwYXJhbSBkYXRhICAzc+W/g+i3s+aVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcXVlc3Rfa2VlcF9wbGF5aW5nKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10ucmVxdWVzdF9rZWVwX3BsYXlpbmcoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnm5HlkKzlj5bmtojmjqXnnYDnjqlcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlY3ZfY2FuY2VsX2tlZXBfcGxheWluZyhjYjogRnVuY3Rpb24pIHtcclxuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlY3ZfY2FuY2VsX2tlZXBfcGxheWluZyhjYik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnm5HlkKzph43mlrDnjqlcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlY3ZfcmVzdGFydChjYjogRnVuY3Rpb24pIHtcclxuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlY3ZfcmVzdGFydChjYik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5HpgIHph43mlrDnjqnmiJDlip/lm57osINcclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdF9yZXN0YXJ0X292ZXIoZGF0YSA9ICcnKSB7XHJcbiAgICAgICAgd2luZG93WydpZnJhbWVNc2cnXS5yZXF1ZXN0X3Jlc3RhcnRfb3ZlcihkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPkemAgeWHhuWkh+Wwsee7qlxyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZXF1ZXN0X2V2ZW50X3JlYWR5KGRhdGEgPSAnJykge1xyXG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10ucmVxdWVzdF9ldmVudF9yZWFkeShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOebkeWQrOaYr+WQpuS4uuS4u+WKqOWPkemAgeW/g+i3s+eahOS4gOerr1xyXG4gICAgICogQHBhcmFtIGNiIOWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlY3ZfaXNfbWFzdGVyKGNiOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10ucmVjdl9pc19tYXN0ZXIoY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+R6YCB5ZCM5q2l5LqL5Lu255uR5ZCs5Yid5aeL5YyW5a6M5oiQXHJcbiAgICAgKiBAcGFyYW0gZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcXVlc3Rfc3luY19pbml0KGRhdGEgPSAnJykge1xyXG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10ucmVxdWVzdF9zeW5jX2luaXQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5HpgIHlhbPljaHkv6Hmga9cclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdF9sZXZlbF9pbmZvKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10ucmVxdWVzdF9sZXZlbF9pbmZvKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5piv5ZCm5pSv5oyB5o6l552A546pXHJcbiAgICAgKiBAcGFyYW0gY2Ig5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0X2lzX3N1cHBvcnRLZWVwQW5kUmVzdGFydChjYjogRnVuY3Rpb24pIHtcclxuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLmdldF9pc19zdXBwb3J0S2VlcEFuZFJlc3RhcnQoY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq6aKE5Yqg6L29KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5piv5ZCm5pSv5oyB6aKE5Yqg6L29XHJcbiAgICAgKiBAcGFyYW0gY2Ig5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0X2lzX3ByZWxvYWQoY2I6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgd2luZG93WydpZnJhbWVNc2cnXS5nZXRfaXNfcHJlbG9hZChjYik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnm5HlkKznqpflj6PmiZPlvIBcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlY3Zfc2hvd19nYW1lUGFuZWwoY2I6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgd2luZG93WydpZnJhbWVNc2cnXS5yZWN2X3Nob3dfZ2FtZVBhbmVsKGNiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOebkeWQrOeql+WPo+WFs+mXrVxyXG4gICAgICogQHBhcmFtIGNiXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVjdl9oaWRlX2dhbWVQYW5lbChjYjogRnVuY3Rpb24pIHtcclxuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlY3ZfaGlkZV9nYW1lUGFuZWwoY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+R6YCB6LWE5rqQ5Yqg6L295byA5aeLXHJcbiAgICAgKiBAcGFyYW0gZGF0YVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZXF1ZXN0X3Jlc19sb2FkX3N0YXJ0KGRhdGEpIHtcclxuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlcXVlc3RfcmVzX2xvYWRfc3RhcnQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5HpgIHliqDovb3ov5vluqZcclxuICAgICAqIEBwYXJhbSBwZXJjZW50IOWKoOi9veeZvuWIhuavlFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZXNfbG9hZF9wcm9jZXNzKHBlcmNlbnQpIHtcclxuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlc19sb2FkX3Byb2Nlc3MocGVyY2VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5HpgIHotYTmupDliqDovb3nu5PmnZ9cclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHJlcXVlc3RfcmVzX2xvYWRfZW5kKGRhdGEpIHtcclxuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlcXVlc3RfcmVzX2xvYWRfZW5kKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+R6YCB5byV5pOO5Yqg6L295byA5aeLXHJcbiAgICAgKiBAcGFyYW0gZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcXVlc3RfZW5naW5lX2xvYWRfc3RhcnQoZGF0YSkge1xyXG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10ucmVxdWVzdF9lbmdpbmVfbG9hZF9zdGFydChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPkemAgeW8leaTjuWKoOi9vee7k+adn1xyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZXF1ZXN0X2VuZ2luZV9sb2FkX2VuZChkYXRhKSB7XHJcbiAgICAgICAgd2luZG93WydpZnJhbWVNc2cnXS5yZXF1ZXN0X2VuZ2luZV9sb2FkX2VuZChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq56eB5pyJ5o6l5Y+jKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBiX2luaXQ6IGJvb2xlYW4gPSBmYWxzZTsgLy8g6Ziy5q2i5Zyo6Ieq5rWL6K+V5pe25aSa5qyh5Y+R6YCBc3RhcnRcclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295a6M5oiQXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGlmcmFtZV9nYW1lX3N0YXJ0KGlzUmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYl9pbml0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iX2luaXQgPSB0cnVlO1xyXG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10uZ2FtZV9zdGFydCh7aXNSZXN1bHQ6IGlzUmVzdWx0fSk7XHJcbiAgICAgICAgR2FtZU1zZy5pZnJhbWVNc2dfZ2FtZVN0YXJ0KGlzUmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDotYTmupDliqDovb3lvIDlp4tcclxuICAgIHByaXZhdGUgc3RhdGljIHJlc0xvYWRTdGFydExvZygpIHtcclxuICAgICAgICB3aW5kb3dbJ2FsaUxvZ01zZyddLnJlc0xvYWRTdGFydCgpO1xyXG4gICAgfVxyXG4gICAgLy8g6LWE5rqQ5Yqg6L2957uT5p2fXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZXNMb2FkRW5kTG9nKCkge1xyXG4gICAgICAgIHdpbmRvd1snYWxpTG9nTXNnJ10ucmVzTG9hZEVuZCgpO1xyXG4gICAgfVxyXG4gICAgLy8gZ2FtZU1zZ+iwg+eUqGdhbWVTdGFydFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2FtZU1zZ19nYW1lU3RhcnQoaXNSZXN1bHQpIHtcclxuICAgICAgICB3aW5kb3dbJ2FsaUxvZ01zZyddLmdhbWVNc2dfZ2FtZVN0YXJ0KHtpc1Jlc3VsdDogaXNSZXN1bHR9KTtcclxuICAgIH1cclxuICAgIC8vIGlmcmFtZU1zZ+iwg+eUqGdhbWVTdGFydFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaWZyYW1lTXNnX2dhbWVTdGFydChpc1Jlc3VsdCkge1xyXG4gICAgICAgIHdpbmRvd1snYWxpTG9nTXNnJ10uaWZyYW1lTXNnX2dhbWVTdGFydCh7aXNSZXN1bHQ6IGlzUmVzdWx0fSk7XHJcbiAgICB9XHJcbiAgICAvLyDmuLjmiI/ljZXlhbMv5Y2V5q2l5LiK5oqlXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnYW1lTGV2ZWxSZXBvcnQoZGF0YSkge1xyXG4gICAgICAgIHdpbmRvd1snYWxpTG9nTXNnJ10uZ2FtZUxldmVsUmVwb3J0KGRhdGEpO1xyXG4gICAgfVxyXG4gICAgLy8g5ri45oiPR2FtZU92ZXLkuIrmiqVcclxuICAgIHByaXZhdGUgc3RhdGljIGdhbWVPdmVyUmVwb3J0KGRhdGEpIHtcclxuICAgICAgICB3aW5kb3dbJ2FsaUxvZ01zZyddLmdhbWVPdmVyUmVwb3J0KGRhdGEpO1xyXG4gICAgfVxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75b2dk5WVVO7LtxMPb6Uw7K', 'TeacherPanelLoading');
// frame/scripts/UI/Item/TeacherPanelLoading.ts

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
var ListenerManager_1 = require("../../Manager/ListenerManager");
var BindNode_1 = require("../BindNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TeacherPanelLoading = /** @class */ (function (_super) {
    __extends(TeacherPanelLoading, _super);
    function TeacherPanelLoading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nd_panel = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    TeacherPanelLoading.prototype.start = function () {
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.TEACHER_PANEL_LOADING, this.onEnableEvent, this);
    };
    TeacherPanelLoading.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.removeAll(this);
    };
    TeacherPanelLoading.prototype.onEnableEvent = function (isShow) {
        this._nd_panel.active = isShow;
    };
    TeacherPanelLoading = __decorate([
        ccclass
    ], TeacherPanelLoading);
    return TeacherPanelLoading;
}(BindNode_1.default));
exports.default = TeacherPanelLoading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxUZWFjaGVyUGFuZWxMb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUF1RDtBQUN2RCxpRUFBZ0U7QUFDaEUsd0NBQW1DO0FBRTdCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFRO0lBQXpEO1FBQUEscUVBb0JDO1FBbkJXLGVBQVMsR0FBWSxJQUFJLENBQUM7O1FBa0JsQyxpQkFBaUI7SUFDckIsQ0FBQztJQWpCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLG1DQUFLLEdBQUw7UUFDSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQywyQkFBWSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELHVDQUFTLEdBQVQ7UUFDSSxpQ0FBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsMkNBQWEsR0FBYixVQUFjLE1BQWU7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFqQmdCLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBb0J2QztJQUFELDBCQUFDO0NBcEJELEFBb0JDLENBcEJnRCxrQkFBUSxHQW9CeEQ7a0JBcEJvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi8uLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgQmluZE5vZGUgZnJvbSAnLi4vQmluZE5vZGUnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhY2hlclBhbmVsTG9hZGluZyBleHRlbmRzIEJpbmROb2RlIHtcbiAgICBwcml2YXRlIF9uZF9wYW5lbDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihGcmFtZU1zZ1R5cGUuVEVBQ0hFUl9QQU5FTF9MT0FESU5HLCB0aGlzLm9uRW5hYmxlRXZlbnQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLnJlbW92ZUFsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZUV2ZW50KGlzU2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9uZF9wYW5lbC5hY3RpdmUgPSBpc1Nob3c7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '858970ZsXNOcpzdwRAxST5n', 'MaskGlobal');
// frame/scripts/UI/Item/MaskGlobal.ts

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
var ListenerManager_1 = require("../../Manager/ListenerManager");
var UIManager_1 = require("../../Manager/UIManager");
var UIHelp_1 = require("../../Utils/UIHelp");
var BindNode_1 = require("../BindNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MaskGlobal = /** @class */ (function (_super) {
    __extends(MaskGlobal, _super);
    function MaskGlobal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nd_mask = null;
        _this._nd_loading = null;
        _this.isShowLoading = false;
        return _this;
    }
    MaskGlobal.prototype.onLoad = function () {
        //设置最层级
        this.node.zIndex = UIManager_1.EPANEL_ZORDER.MASK;
    };
    MaskGlobal.prototype.start = function () {
        /**
         * 适用方法
         * ListenerManager.dispatch(FrameMsgType.ON_MASK,true,true);
         */
        this._nd_mask.on(cc.Node.EventType.TOUCH_START, this.on_touchStart, this);
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.ON_MASK, this.onMask, this);
        this._nd_loading.active = false;
        this._nd_mask.active = false;
    };
    MaskGlobal.prototype.onMask = function (isState, isShowLoading) {
        if (isShowLoading === void 0) { isShowLoading = false; }
        this._nd_mask.active = isState;
        this.isShowLoading = isShowLoading;
        this.SetLoading(this.isShowLoading);
    };
    MaskGlobal.prototype.on_touchStart = function () {
        if (this.isShowLoading) {
            return;
        }
        UIHelp_1.UIHelp.showTip('请稍后再操作');
    };
    MaskGlobal.prototype.SetLoading = function (isShowLoading) {
        this._nd_loading.active = isShowLoading;
    };
    MaskGlobal = __decorate([
        ccclass
    ], MaskGlobal);
    return MaskGlobal;
}(BindNode_1.default));
exports.default = MaskGlobal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxNYXNrR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUF1RDtBQUN2RCxpRUFBZ0U7QUFDaEUscURBQXdEO0FBQ3hELDZDQUE0QztBQUM1Qyx3Q0FBbUM7QUFFN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVE7SUFBaEQ7UUFBQSxxRUFxQ0M7UUFwQ1UsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixtQkFBYSxHQUFZLEtBQUssQ0FBQzs7SUFrQzFDLENBQUM7SUFoQ0csMkJBQU0sR0FBTjtRQUNJLE9BQU87UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBYSxDQUFDLElBQUksQ0FBQztJQUMxQyxDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJOzs7V0FHRztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFFLGlDQUFlLENBQUMsRUFBRSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLE9BQWdCLEVBQUUsYUFBOEI7UUFBOUIsOEJBQUEsRUFBQSxxQkFBOEI7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxrQ0FBYSxHQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLE9BQU87U0FDVjtRQUNELGVBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxhQUFzQjtRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7SUFDNUMsQ0FBQztJQXBDZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXFDOUI7SUFBRCxpQkFBQztDQXJDRCxBQXFDQyxDQXJDdUMsa0JBQVEsR0FxQy9DO2tCQXJDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRnJhbWVNc2dUeXBlJztcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcbmltcG9ydCB7IEVQQU5FTF9aT1JERVIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL1VJTWFuYWdlcic7XG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IEJpbmROb2RlIGZyb20gJy4uL0JpbmROb2RlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tHbG9iYWwgZXh0ZW5kcyBCaW5kTm9kZSB7XG4gICAgcHVibGljIF9uZF9tYXNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwdWJsaWMgX25kX2xvYWRpbmc6IGNjLk5vZGUgPSBudWxsO1xuICAgIHB1YmxpYyBpc1Nob3dMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8v6K6+572u5pyA5bGC57qnXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBFUEFORUxfWk9SREVSLk1BU0s7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDpgILnlKjmlrnms5VcbiAgICAgICAgICogTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5PTl9NQVNLLHRydWUsdHJ1ZSk7XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9uZF9tYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uX3RvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRnJhbWVNc2dUeXBlLk9OX01BU0ssIHRoaXMub25NYXNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fbmRfbG9hZGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbmRfbWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbk1hc2soaXNTdGF0ZTogYm9vbGVhbiwgaXNTaG93TG9hZGluZzogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX25kX21hc2suYWN0aXZlID0gaXNTdGF0ZTtcbiAgICAgICAgdGhpcy5pc1Nob3dMb2FkaW5nID0gaXNTaG93TG9hZGluZztcbiAgICAgICAgdGhpcy5TZXRMb2FkaW5nKHRoaXMuaXNTaG93TG9hZGluZyk7XG4gICAgfVxuXG4gICAgb25fdG91Y2hTdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93TG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFVJSGVscC5zaG93VGlwKCfor7fnqI3lkI7lho3mk43kvZwnKTtcbiAgICB9XG5cbiAgICBTZXRMb2FkaW5nKGlzU2hvd0xvYWRpbmc6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fbmRfbG9hZGluZy5hY3RpdmUgPSBpc1Nob3dMb2FkaW5nO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba00bud/zlDiY6tClWPdHIa', 'AdaptiveScreen');
// frame/scripts/UI/AdaptiveScreen.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 自适应代码
 */
var AdaptiveScreen = /** @class */ (function (_super) {
    __extends(AdaptiveScreen, _super);
    function AdaptiveScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 全屏背景图片，用于自适应
         */
        _this.bgNode = null;
        /**舞台设计宽度 */
        _this.viewWidth = 640;
        /**舞台设计高度 */
        _this.viewHeight = 1136;
        return _this;
        // update (dt) {}
    }
    AdaptiveScreen.prototype.onLoad = function () {
        this.screenAdapter();
    };
    AdaptiveScreen.prototype.start = function () {
        this.viewUp();
    };
    /**
     * 自适应
     */
    AdaptiveScreen.prototype.screenAdapter = function () {
        if (cc.Canvas.instance) {
            this.stage = cc.Canvas.instance.node;
            var canvas = cc.Canvas.instance;
            var winSize = cc.view.getFrameSize();
            // console.log(cc.winSize);
            // console.log(cc.view.getCanvasSize());
            // console.log(cc.view.getFrameSize());
            // console.log(cc.view.getVisibleSize());
            if (winSize.width / winSize.height < canvas.designResolution.width / canvas.designResolution.height) {
                canvas.fitWidth = true;
                canvas.fitHeight = false;
            }
            else {
                canvas.fitHeight = true;
                canvas.fitWidth = false;
            }
        }
    };
    AdaptiveScreen.prototype.viewUp = function () {
        var winSize = cc.winSize;
        var scaleX = winSize.width / this.viewWidth;
        var scaleY = winSize.height / this.viewHeight;
        this.bgNode.scale = 1 * Math.max(scaleX, scaleY);
    };
    __decorate([
        property({
            type: cc.Node,
            tooltip: '全屏背景图片，用于自适应',
        })
    ], AdaptiveScreen.prototype, "bgNode", void 0);
    __decorate([
        property
    ], AdaptiveScreen.prototype, "viewWidth", void 0);
    __decorate([
        property
    ], AdaptiveScreen.prototype, "viewHeight", void 0);
    AdaptiveScreen = __decorate([
        ccclass
    ], AdaptiveScreen);
    return AdaptiveScreen;
}(cc.Component));
exports.default = AdaptiveScreen;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxBZGFwdGl2ZVNjcmVlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qzs7R0FFRztBQUVIO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBcURDO1FBcERHOztXQUVHO1FBS0gsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFZO1FBRUwsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUMvQixZQUFZO1FBRUwsZ0JBQVUsR0FBVyxJQUFJLENBQUM7O1FBc0NqQyxpQkFBaUI7SUFDckIsQ0FBQztJQW5DRywrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRDs7T0FFRztJQUNJLHNDQUFhLEdBQXBCO1FBQ0ksSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNyQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLE9BQU8sR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzlDLDJCQUEyQjtZQUMzQix3Q0FBd0M7WUFDeEMsdUNBQXVDO1lBQ3ZDLHlDQUF5QztZQUN6QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pHLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUM1QjtpQkFBTTtnQkFDSCxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDM0I7U0FDSjtJQUNMLENBQUM7SUFDRCwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxPQUFPLEdBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDNUMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRTlDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBM0NEO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO1lBQ2IsT0FBTyxFQUFFLGNBQWM7U0FDMUIsQ0FBQztrREFDcUI7SUFHdkI7UUFEQyxRQUFRO3FEQUNzQjtJQUcvQjtRQURDLFFBQVE7c0RBQ3dCO0lBZGhCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FxRGxDO0lBQUQscUJBQUM7Q0FyREQsQUFxREMsQ0FyRDJDLEVBQUUsQ0FBQyxTQUFTLEdBcUR2RDtrQkFyRG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuLyoqXG4gKiDoh6rpgILlupTku6PnoIFcbiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkYXB0aXZlU2NyZWVuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiDlhajlsY/og4zmma/lm77niYfvvIznlKjkuo7oh6rpgILlupRcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICB0b29sdGlwOiAn5YWo5bGP6IOM5pmv5Zu+54mH77yM55So5LqO6Ieq6YCC5bqUJyxcbiAgICB9KVxuICAgIGJnTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgLyoq6Iie5Y+w6K6+6K6h5a695bqmICovXG4gICAgQHByb3BlcnR5XG4gICAgcHVibGljIHZpZXdXaWR0aDogbnVtYmVyID0gNjQwO1xuICAgIC8qKuiInuWPsOiuvuiuoemrmOW6piAqL1xuICAgIEBwcm9wZXJ0eVxuICAgIHB1YmxpYyB2aWV3SGVpZ2h0OiBudW1iZXIgPSAxMTM2O1xuXG4gICAgLyoq5b2T5YmN5Zy65pmvIOiInuWPsCAqL1xuICAgIHB1YmxpYyBzdGFnZTogY2MuTm9kZTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuQWRhcHRlcigpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy52aWV3VXAoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6Ieq6YCC5bqUXG4gICAgICovXG4gICAgcHVibGljIHNjcmVlbkFkYXB0ZXIoKSB7XG4gICAgICAgIGlmIChjYy5DYW52YXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcbiAgICAgICAgICAgIGxldCBjYW52YXMgPSBjYy5DYW52YXMuaW5zdGFuY2U7XG4gICAgICAgICAgICBsZXQgd2luU2l6ZTogY2MuU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjYy53aW5TaXplKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpKTtcbiAgICAgICAgICAgIGlmICh3aW5TaXplLndpZHRoIC8gd2luU2l6ZS5oZWlnaHQgPCBjYW52YXMuZGVzaWduUmVzb2x1dGlvbi53aWR0aCAvIGNhbnZhcy5kZXNpZ25SZXNvbHV0aW9uLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB2aWV3VXAoKSB7XG4gICAgICAgIGxldCB3aW5TaXplOiBjYy5TaXplID0gY2Mud2luU2l6ZTtcbiAgICAgICAgbGV0IHNjYWxlWCA9IHdpblNpemUud2lkdGggLyB0aGlzLnZpZXdXaWR0aDtcbiAgICAgICAgbGV0IHNjYWxlWSA9IHdpblNpemUuaGVpZ2h0IC8gdGhpcy52aWV3SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuYmdOb2RlLnNjYWxlID0gMSAqIE1hdGgubWF4KHNjYWxlWCwgc2NhbGVZKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/GameMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df13ad6CdtFhp9uucAXsIC/', 'GameMain');
// frame/scripts/UI/GameMain.ts

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
exports.GameMain = void 0;
var EditorManager_1 = require("../../../game/scripts/Manager/EditorManager");
var FrameMsgType_1 = require("../Data/FrameMsgType");
var NetWork_1 = require("../Http/NetWork");
var ListenerManager_1 = require("../Manager/ListenerManager");
var ReportManager_1 = require("../Manager/ReportManager");
var SoundManager_1 = require("../Manager/SoundManager");
var SyncDataManager_1 = require("../Manager/SyncDataManager");
var UIManager_1 = require("../Manager/UIManager");
var GameMsg_1 = require("../SDK/GameMsg");
var T2M_1 = require("../SDK/T2M");
var UIHelp_1 = require("../Utils/UIHelp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// 开启抗锯齿
cc.macro.ENABLE_WEBGL_ANTIALIAS = true;
var GameMain = /** @class */ (function (_super) {
    __extends(GameMain, _super);
    function GameMain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameMain.prototype.onLoad = function () {
        var loading = document.getElementById('loading-full');
        if (loading) {
            loading.style.display = 'none';
        }
        cc.macro.ENABLE_MULTI_TOUCH = false;
        this.addSDKEventListener();
        GameMsg_1.default.get_is_preload(NetWork_1.NetWork.setIsPreload);
        GameMsg_1.default.get_is_sync(NetWork_1.NetWork.setIsSync);
        GameMsg_1.default.get_role(NetWork_1.NetWork.setIsTeacher);
        GameMsg_1.default.get_is_supportKeepAndRestart(NetWork_1.NetWork.setIsSupportKeepPlay);
    };
    GameMain.prototype.addSDKEventListener = function () {
        GameMsg_1.default.recv_show_gamePanel(this.onReceiveGameShow.bind(this));
        GameMsg_1.default.recv_hide_gamePanel(this.onReceiveGameHide.bind(this));
        GameMsg_1.default.recv_keep_playing(this.onReceiveKeepPlaying.bind(this));
        GameMsg_1.default.recv_cancel_keep_playing(this.onReceiveCancellKeepPlaying.bind(this));
        GameMsg_1.default.recv_restart(this.onReceiveRestart.bind(this));
        GameMsg_1.default.recv_is_master(this.onReceiveIsMaster.bind(this));
        //发送准备就绪，可以接收消息了
        GameMsg_1.default.request_event_ready();
    };
    /**
     * 监听接着玩
     */
    GameMain.prototype.onReceiveKeepPlaying = function () {
        console.log('onReceiveKeepPlaying');
        if (!UIManager_1.UIManager.isGameShowing)
            return;
        //发送接着玩数据
        var syncAction = new T2M_1.Action();
        syncAction.type = FrameMsgType_1.FrameMsgType.ON_HEART_BREAK;
        // syncAction.syncData.frameSyncData.actionId = -1;
        var sendData = new T2M_1.SendData(true, [syncAction]);
        GameMsg_1.default.request_keep_playing(sendData);
        // UIHelp.showRecoverMask();
    };
    /**
     * 监听取消接着玩
     */
    GameMain.prototype.onReceiveCancellKeepPlaying = function () {
        console.log('onReceiveCancellKeepPlaying');
        if (!UIManager_1.UIManager.isGameShowing)
            return;
        T2M_1.T2M.setFastHeartBreakState();
    };
    /**
     * 监听重新玩
     */
    GameMain.prototype.onReceiveRestart = function () {
        console.log('onReceiveRestart');
        if (!UIManager_1.UIManager.isGameShowing)
            return;
        //发送重新玩成功回调
        GameMsg_1.default.request_restart_over();
        UIManager_1.UIManager.closeAllUI();
        SoundManager_1.SoundManager.stopAll();
        SyncDataManager_1.SyncDataManager.initSyncData();
        ReportManager_1.ReportManager.initReportData(EditorManager_1.EditorManager.getLevelCount());
        this.scheduleOnce(function () {
            UIHelp_1.UIHelp.showGamePanel();
        });
    };
    /**
     * 监听窗口打开
     */
    GameMain.prototype.onReceiveGameShow = function () {
        console.log('onReceiveGameShow');
        if (UIManager_1.UIManager.isGameShowing)
            return;
        UIManager_1.UIManager.isGameShowing = true;
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.PRELOAD_GAME_SHOW);
    };
    /**
     * 监听窗口关闭
     */
    GameMain.prototype.onReceiveGameHide = function () {
        console.log('onReceiveGameHide');
        if (!UIManager_1.UIManager.isGameShowing)
            return;
        UIManager_1.UIManager.isGameShowing = false;
        UIManager_1.UIManager.closeAllUI();
        SoundManager_1.SoundManager.stopAll();
        SyncDataManager_1.SyncDataManager.initSyncData();
        ReportManager_1.ReportManager.initReportData(EditorManager_1.EditorManager.getLevelCount());
        T2M_1.T2M.isRecover = false;
        this.scheduleOnce(function () {
            UIHelp_1.UIHelp.showGamePanel();
        });
    };
    /**
     * 监听是否为主动发送心跳的一端
     */
    GameMain.prototype.onReceiveIsMaster = function (data) {
        NetWork_1.NetWork.isMaster = data.data;
        if (!NetWork_1.NetWork.isMaster) {
            T2M_1.T2M.isRecover = false;
            UIHelp_1.UIHelp.showRecoverMask();
            if (0 !== SyncDataManager_1.SyncDataManager.syncData.frameSyncData.actionId) {
                SyncDataManager_1.SyncDataManager.syncData.frameSyncData.actionId = -999;
            }
        }
        else {
            UIHelp_1.UIHelp.closeRecoverMask();
        }
        console.log("onReceiveIsMaster isMaster: " + NetWork_1.NetWork.isMaster);
    };
    GameMain = __decorate([
        ccclass
    ], GameMain);
    return GameMain;
}(cc.Component));
exports.GameMain = GameMain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxHYW1lTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQTRFO0FBQzVFLHFEQUFvRDtBQUNwRCwyQ0FBMEM7QUFDMUMsOERBQTZEO0FBQzdELDBEQUF5RDtBQUN6RCx3REFBdUQ7QUFDdkQsOERBQXVFO0FBQ3ZFLGtEQUFpRDtBQUNqRCwwQ0FBcUM7QUFDckMsa0NBQW1EO0FBQ25ELDBDQUF5QztBQUVuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxRQUFRO0FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7QUFFdkM7SUFBOEIsNEJBQVk7SUFBMUM7O0lBcUhBLENBQUM7SUFwSEcseUJBQU0sR0FBTjtRQUNJLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEQsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDbEM7UUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUVwQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixpQkFBTyxDQUFDLGNBQWMsQ0FBQyxpQkFBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdDLGlCQUFPLENBQUMsV0FBVyxDQUFDLGlCQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkMsaUJBQU8sQ0FBQyxRQUFRLENBQUMsaUJBQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxpQkFBTyxDQUFDLDRCQUE0QixDQUFDLGlCQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsc0NBQW1CLEdBQW5C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YW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XG5pbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBOZXRXb3JrIH0gZnJvbSAnLi4vSHR0cC9OZXRXb3JrJztcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcbmltcG9ydCB7IFJlcG9ydE1hbmFnZXIgfSBmcm9tICcuLi9NYW5hZ2VyL1JlcG9ydE1hbmFnZXInO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IHsgU3luY0RhdGEsIFN5bmNEYXRhTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyJztcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvVUlNYW5hZ2VyJztcbmltcG9ydCBHYW1lTXNnIGZyb20gJy4uL1NESy9HYW1lTXNnJztcbmltcG9ydCB7IEFjdGlvbiwgU2VuZERhdGEsIFQyTSB9IGZyb20gJy4uL1NESy9UMk0nO1xuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSAnLi4vVXRpbHMvVUlIZWxwJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLy8g5byA5ZCv5oqX6ZSv6b2/XG5jYy5tYWNyby5FTkFCTEVfV0VCR0xfQU5USUFMSUFTID0gdHJ1ZTtcbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgR2FtZU1haW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgbGV0IGxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZy1mdWxsJyk7XG4gICAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgICAgICBsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgY2MubWFjcm8uRU5BQkxFX01VTFRJX1RPVUNIID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5hZGRTREtFdmVudExpc3RlbmVyKCk7XG4gICAgICAgIEdhbWVNc2cuZ2V0X2lzX3ByZWxvYWQoTmV0V29yay5zZXRJc1ByZWxvYWQpO1xuICAgICAgICBHYW1lTXNnLmdldF9pc19zeW5jKE5ldFdvcmsuc2V0SXNTeW5jKTtcbiAgICAgICAgR2FtZU1zZy5nZXRfcm9sZShOZXRXb3JrLnNldElzVGVhY2hlcik7XG4gICAgICAgIEdhbWVNc2cuZ2V0X2lzX3N1cHBvcnRLZWVwQW5kUmVzdGFydChOZXRXb3JrLnNldElzU3VwcG9ydEtlZXBQbGF5KTtcbiAgICB9XG5cbiAgICBhZGRTREtFdmVudExpc3RlbmVyKCkge1xuICAgICAgICBHYW1lTXNnLnJlY3Zfc2hvd19nYW1lUGFuZWwodGhpcy5vblJlY2VpdmVHYW1lU2hvdy5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5yZWN2X2hpZGVfZ2FtZVBhbmVsKHRoaXMub25SZWNlaXZlR2FtZUhpZGUuYmluZCh0aGlzKSk7XG4gICAgICAgIEdhbWVNc2cucmVjdl9rZWVwX3BsYXlpbmcodGhpcy5vblJlY2VpdmVLZWVwUGxheWluZy5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5yZWN2X2NhbmNlbF9rZWVwX3BsYXlpbmcodGhpcy5vblJlY2VpdmVDYW5jZWxsS2VlcFBsYXlpbmcuYmluZCh0aGlzKSk7XG4gICAgICAgIEdhbWVNc2cucmVjdl9yZXN0YXJ0KHRoaXMub25SZWNlaXZlUmVzdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5yZWN2X2lzX21hc3Rlcih0aGlzLm9uUmVjZWl2ZUlzTWFzdGVyLmJpbmQodGhpcykpO1xuICAgICAgICAvL+WPkemAgeWHhuWkh+Wwsee7qu+8jOWPr+S7peaOpeaUtua2iOaBr+S6hlxuICAgICAgICBHYW1lTXNnLnJlcXVlc3RfZXZlbnRfcmVhZHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnm5HlkKzmjqXnnYDnjqlcbiAgICAgKi9cbiAgICBvblJlY2VpdmVLZWVwUGxheWluZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uUmVjZWl2ZUtlZXBQbGF5aW5nJyk7XG4gICAgICAgIGlmICghVUlNYW5hZ2VyLmlzR2FtZVNob3dpbmcpIHJldHVybjtcblxuICAgICAgICAvL+WPkemAgeaOpeedgOeOqeaVsOaNrlxuICAgICAgICBsZXQgc3luY0FjdGlvbiA9IG5ldyBBY3Rpb24oKTtcbiAgICAgICAgc3luY0FjdGlvbi50eXBlID0gRnJhbWVNc2dUeXBlLk9OX0hFQVJUX0JSRUFLO1xuICAgICAgICAvLyBzeW5jQWN0aW9uLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuYWN0aW9uSWQgPSAtMTtcbiAgICAgICAgbGV0IHNlbmREYXRhID0gbmV3IFNlbmREYXRhKHRydWUsIFtzeW5jQWN0aW9uXSk7XG4gICAgICAgIEdhbWVNc2cucmVxdWVzdF9rZWVwX3BsYXlpbmcoc2VuZERhdGEpO1xuICAgICAgICAvLyBVSUhlbHAuc2hvd1JlY292ZXJNYXNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55uR5ZCs5Y+W5raI5o6l552A546pXG4gICAgICovXG4gICAgb25SZWNlaXZlQ2FuY2VsbEtlZXBQbGF5aW5nKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25SZWNlaXZlQ2FuY2VsbEtlZXBQbGF5aW5nJyk7XG4gICAgICAgIGlmICghVUlNYW5hZ2VyLmlzR2FtZVNob3dpbmcpIHJldHVybjtcblxuICAgICAgICBUMk0uc2V0RmFzdEhlYXJ0QnJlYWtTdGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebkeWQrOmHjeaWsOeOqVxuICAgICAqL1xuICAgIG9uUmVjZWl2ZVJlc3RhcnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvblJlY2VpdmVSZXN0YXJ0Jyk7XG4gICAgICAgIGlmICghVUlNYW5hZ2VyLmlzR2FtZVNob3dpbmcpIHJldHVybjtcblxuICAgICAgICAvL+WPkemAgemHjeaWsOeOqeaIkOWKn+Wbnuiwg1xuICAgICAgICBHYW1lTXNnLnJlcXVlc3RfcmVzdGFydF9vdmVyKCk7XG4gICAgICAgIFVJTWFuYWdlci5jbG9zZUFsbFVJKCk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5zdG9wQWxsKCk7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5pbml0U3luY0RhdGEoKTtcbiAgICAgICAgUmVwb3J0TWFuYWdlci5pbml0UmVwb3J0RGF0YShFZGl0b3JNYW5hZ2VyLmdldExldmVsQ291bnQoKSk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dHYW1lUGFuZWwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55uR5ZCs56qX5Y+j5omT5byAXG4gICAgICovXG4gICAgb25SZWNlaXZlR2FtZVNob3coKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvblJlY2VpdmVHYW1lU2hvdycpO1xuICAgICAgICBpZiAoVUlNYW5hZ2VyLmlzR2FtZVNob3dpbmcpIHJldHVybjtcblxuICAgICAgICBVSU1hbmFnZXIuaXNHYW1lU2hvd2luZyA9IHRydWU7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuUFJFTE9BRF9HQU1FX1NIT1cpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebkeWQrOeql+WPo+WFs+mXrVxuICAgICAqL1xuICAgIG9uUmVjZWl2ZUdhbWVIaWRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25SZWNlaXZlR2FtZUhpZGUnKTtcbiAgICAgICAgaWYgKCFVSU1hbmFnZXIuaXNHYW1lU2hvd2luZykgcmV0dXJuO1xuXG4gICAgICAgIFVJTWFuYWdlci5pc0dhbWVTaG93aW5nID0gZmFsc2U7XG4gICAgICAgIFVJTWFuYWdlci5jbG9zZUFsbFVJKCk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5zdG9wQWxsKCk7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5pbml0U3luY0RhdGEoKTtcbiAgICAgICAgUmVwb3J0TWFuYWdlci5pbml0UmVwb3J0RGF0YShFZGl0b3JNYW5hZ2VyLmdldExldmVsQ291bnQoKSk7XG4gICAgICAgIFQyTS5pc1JlY292ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dHYW1lUGFuZWwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55uR5ZCs5piv5ZCm5Li65Li75Yqo5Y+R6YCB5b+D6Lez55qE5LiA56uvXG4gICAgICovXG4gICAgb25SZWNlaXZlSXNNYXN0ZXIoZGF0YTogYW55KSB7XG4gICAgICAgIE5ldFdvcmsuaXNNYXN0ZXIgPSBkYXRhLmRhdGE7XG4gICAgICAgIGlmICghTmV0V29yay5pc01hc3Rlcikge1xuICAgICAgICAgICAgVDJNLmlzUmVjb3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgVUlIZWxwLnNob3dSZWNvdmVyTWFzaygpO1xuICAgICAgICAgICAgaWYgKDAgIT09IFN5bmNEYXRhTWFuYWdlci5zeW5jRGF0YS5mcmFtZVN5bmNEYXRhLmFjdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuYWN0aW9uSWQgPSAtOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVUlIZWxwLmNsb3NlUmVjb3Zlck1hc2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBvblJlY2VpdmVJc01hc3RlciBpc01hc3RlcjogJHtOZXRXb3JrLmlzTWFzdGVyfWApO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b276fOW8MRNTqj/bpy0hngz', 'TitleNode');
// frame/scripts/UI/Item/TitleNode.ts

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
var ListenerManager_1 = require("../../Manager/ListenerManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TitileNode = /** @class */ (function (_super) {
    __extends(TitileNode, _super);
    function TitileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bianJiLabel = null;
        _this.jianYanLabel = null;
        _this.tiaoNode = null;
        _this.heiSe = cc.color(0, 0, 0);
        _this.huiSe = cc.color(127, 127, 127);
        return _this;
    }
    TitileNode.prototype.start = function () {
        this.bianJiLabel.node.color = this.heiSe;
        this.jianYanLabel.node.color = this.huiSe;
        this.tiaoNode.color = this.huiSe;
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.ON_EDIT_STATE_SWITCHING, this.onStateSwitching, this);
    };
    TitileNode.prototype.onStateSwitching = function (state) {
        if (0 === state) {
            this.jianYanLabel.node.color = this.huiSe;
            this.tiaoNode.color = this.huiSe;
        }
        else {
            this.jianYanLabel.node.color = this.heiSe;
            this.tiaoNode.color = this.heiSe;
        }
    };
    __decorate([
        property(cc.Label)
    ], TitileNode.prototype, "bianJiLabel", void 0);
    __decorate([
        property(cc.Label)
    ], TitileNode.prototype, "jianYanLabel", void 0);
    __decorate([
        property(cc.Node)
    ], TitileNode.prototype, "tiaoNode", void 0);
    TitileNode = __decorate([
        ccclass
    ], TitileNode);
    return TitileNode;
}(cc.Component));
exports.default = TitileNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxUaXRsZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQXVEO0FBQ3ZELGlFQUFnRTtBQUUxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTJCQztRQXpCRyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsV0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFrQnBDLENBQUM7SUFoQkcsMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDakMsaUNBQWUsQ0FBQyxFQUFFLENBQUMsMkJBQVksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVELHFDQUFnQixHQUFoQixVQUFpQixLQUFhO1FBQzFCLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDcEM7YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBeEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDVztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNPO0lBTlIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTJCOUI7SUFBRCxpQkFBQztDQTNCRCxBQTJCQyxDQTNCdUMsRUFBRSxDQUFDLFNBQVMsR0EyQm5EO2tCQTNCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRnJhbWVNc2dUeXBlJztcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGlsZU5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBiaWFuSmlMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBqaWFuWWFuTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0aWFvTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBoZWlTZSA9IGNjLmNvbG9yKDAsIDAsIDApO1xuICAgIGh1aVNlID0gY2MuY29sb3IoMTI3LCAxMjcsIDEyNyk7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5iaWFuSmlMYWJlbC5ub2RlLmNvbG9yID0gdGhpcy5oZWlTZTtcbiAgICAgICAgdGhpcy5qaWFuWWFuTGFiZWwubm9kZS5jb2xvciA9IHRoaXMuaHVpU2U7XG4gICAgICAgIHRoaXMudGlhb05vZGUuY29sb3IgPSB0aGlzLmh1aVNlO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRnJhbWVNc2dUeXBlLk9OX0VESVRfU1RBVEVfU1dJVENISU5HLCB0aGlzLm9uU3RhdGVTd2l0Y2hpbmcsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uU3RhdGVTd2l0Y2hpbmcoc3RhdGU6IG51bWJlcikge1xuICAgICAgICBpZiAoMCA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuamlhbllhbkxhYmVsLm5vZGUuY29sb3IgPSB0aGlzLmh1aVNlO1xuICAgICAgICAgICAgdGhpcy50aWFvTm9kZS5jb2xvciA9IHRoaXMuaHVpU2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmppYW5ZYW5MYWJlbC5ub2RlLmNvbG9yID0gdGhpcy5oZWlTZTtcbiAgICAgICAgICAgIHRoaXMudGlhb05vZGUuY29sb3IgPSB0aGlzLmhlaVNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/Tip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7373SoEY5LDIC2BLTSmOq3', 'Tip');
// frame/scripts/UI/Item/Tip.ts

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
exports.Tip = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Tip = /** @class */ (function (_super) {
    __extends(Tip, _super);
    function Tip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.neiRongNode = null;
        _this.tipLabel = null;
        _this.ready = true;
        return _this;
    }
    Tip.prototype.playTip = function (message) {
        var _this = this;
        this.neiRongNode.active = true;
        this.node.stopAllActions();
        this.ready = false;
        this.tipLabel.string = message;
        this.reset();
        cc.tween(this.node)
            .delay(1)
            .to(0.5, { y: 128, opacity: 0 })
            .call(function () {
            _this.ready = true;
        })
            .start();
    };
    Tip.prototype.isReady = function () {
        return this.ready;
    };
    Tip.prototype.reset = function () {
        this.node.setPosition(0, 0);
        this.node.opacity = 255;
    };
    __decorate([
        property(cc.Node)
    ], Tip.prototype, "neiRongNode", void 0);
    __decorate([
        property(cc.Label)
    ], Tip.prototype, "tipLabel", void 0);
    Tip = __decorate([
        ccclass
    ], Tip);
    return Tip;
}(cc.Component));
exports.Tip = Tip;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxUaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlCLHVCQUFZO0lBQXJDO1FBQUEscUVBZ0NDO1FBOUJXLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFDMUIsV0FBSyxHQUFZLElBQUksQ0FBQzs7SUEwQmxDLENBQUM7SUF4QlUscUJBQU8sR0FBZCxVQUFlLE9BQWU7UUFBOUIsaUJBY0M7UUFiRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNSLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUMvQixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0scUJBQU8sR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0sbUJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDNUIsQ0FBQztJQTdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNrQjtJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lDQUNlO0lBTHpCLEdBQUc7UUFEZixPQUFPO09BQ0ssR0FBRyxDQWdDZjtJQUFELFVBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ3dCLEVBQUUsQ0FBQyxTQUFTLEdBZ0NwQztBQWhDWSxrQkFBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgVGlwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIG5laVJvbmdOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIHRpcExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgcHJpdmF0ZSByZWFkeTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwdWJsaWMgcGxheVRpcChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uZWlSb25nTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpcExhYmVsLnN0cmluZyA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAuZGVsYXkoMSlcbiAgICAgICAgICAgIC50bygwLjUsIHsgeTogMTI4LCBvcGFjaXR5OiAwIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzUmVhZHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWR5O1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd402btyepNJObcDSUkLUQcr', 'OverTips');
// frame/scripts/UI/Panel/OverTips.ts

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
exports.OverTips = exports.Type_Tile = void 0;
var SoundManager_1 = require("./../../Manager/SoundManager");
var Tools_1 = require("../../Utils/Tools");
var BaseFrameUI_1 = require("../BaseFrameUI");
var UIHelp_1 = require("../../Utils/UIHelp");
var T2M_1 = require("../../SDK/T2M");
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var EditorManager_1 = require("../../../../game/scripts/Manager/EditorManager");
var ReportManager_1 = require("../../Manager/ReportManager");
var Type_Tile;
(function (Type_Tile) {
    Type_Tile[Type_Tile["ZuoDaJieShu"] = 0] = "ZuoDaJieShu";
    Type_Tile[Type_Tile["ChuangGuanChengGong"] = 1] = "ChuangGuanChengGong";
    Type_Tile[Type_Tile["TiaoZhanJieShu"] = 2] = "TiaoZhanJieShu";
    Type_Tile[Type_Tile["TiaoZhanChengGong"] = 3] = "TiaoZhanChengGong";
    Type_Tile[Type_Tile["ChuangGuanJieShu"] = 4] = "ChuangGuanJieShu";
})(Type_Tile = exports.Type_Tile || (exports.Type_Tile = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OverTips = /** @class */ (function (_super) {
    __extends(OverTips, _super);
    function OverTips() {
        var _this = _super.call(this) || this;
        _this.btn_additional = null;
        _this._lb_tips = null;
        _this._sp_complete = null;
        _this._btn_close = null;
        _this._btn_replay = null;
        _this.callback = null;
        return _this;
    }
    OverTips.prototype.onLoad = function () {
    };
    OverTips.prototype.start = function () {
        this._btn_close.on(cc.Node.EventType.TOUCH_END, this.onClickClose, this);
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.OVERTIPS_CLOSE, this.doClickClose.bind(this));
    };
    OverTips.prototype.onDisable = function () {
        this._btn_close.off(cc.Node.EventType.TOUCH_END, this.onClickClose, this);
    };
    /**
     设置显示内容
     @param {number} type          0: 错误  1：答对了  2：闯关成功(一直显示不会关闭)
     @param {string} str           提示内容
     @param {Function} callback    回调函数
     @param {string} endTitle      end动效提示文字
     @param {boolean} isShowReplay     是否显示重玩按钮
     @param {boolean} isShowClose     是否显示关闭按钮
     @param {boolean} autoOff     是否自动关闭
     */
    OverTips.prototype.init = function (type, str, callback, endTitle, isShowReplay, isShowClose, autoOff) {
        var _this = this;
        if (str === void 0) { str = ''; }
        if (isShowClose === void 0) { isShowClose = false; }
        if (autoOff === void 0) { autoOff = true; }
        this.callback = callback;
        this._sp_complete.active = true;
        this._lb_tips.active = type != 2;
        this._lb_tips.getComponent(cc.Label).string = str;
        this._btn_close.active = isShowClose && (0 === type || 1 === type);
        var btnNode = null;
        if (EditorManager_1.EditorManager.editorData.additional.length > 0 && ReportManager_1.ReportManager.isPassGame() && !ReportManager_1.ReportManager.isPassAdditonal()) {
            this.btn_additional.active = true;
            this.btn_additional.setScale(0.01);
            btnNode = this.btn_additional;
        }
        else if (ReportManager_1.ReportManager.isPassGame() && ReportManager_1.ReportManager.isPassAdditonal()) {
            this._btn_replay.active = isShowReplay;
            this._btn_replay.setScale(0.01);
            btnNode = this._btn_replay;
        }
        SoundManager_1.SoundManager.playEffect("settle_star0", false);
        Tools_1.Tools.playSpine(this._sp_complete.getComponent(sp.Skeleton), 'tiaozhan_kaishi', false, function () {
            if (btnNode && btnNode.active) {
                cc.tween(btnNode)
                    .to(0.5, { scale: 1 }, { easing: 'backOut' })
                    .start();
            }
            Tools_1.Tools.playSpine(_this._sp_complete.getComponent(sp.Skeleton), 'tiaozhan_xunhuan', true);
        });
        this.playTipsAction();
        UIHelp_1.UIHelp.closeMask();
    };
    OverTips.prototype.delayClose = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.doClickClose();
        }, 0);
    };
    OverTips.prototype.playTipsAction = function () {
        if (this._lb_tips.active) {
            var endPos = cc.v2(this._lb_tips.position.x, this._lb_tips.position.y);
            var framePos_1 = cc.v2(endPos.x, endPos.y - 72.8);
            var framePos_2 = cc.v2(endPos.x, endPos.y + 12);
            var framePos_3 = cc.v2(endPos.x, endPos.y - 8);
            var framePos_4 = cc.v2(endPos.x, endPos.y + 7.3);
            this._lb_tips.position = cc.v3(framePos_1.x, framePos_1.y);
            cc.tween(this._lb_tips)
                .to(0.08, { x: framePos_2.x, y: framePos_2.y })
                .to(0.08, { x: framePos_3.x, y: framePos_3.y })
                .to(0.08, { x: framePos_4.x, y: framePos_4.y })
                .to(0.06, { x: endPos.x, y: endPos.y })
                .start();
        }
    };
    OverTips.prototype.onClickClose = function (event, customEventData) {
        T2M_1.T2M.dispatch(FrameMsgType_1.FrameMsgType.OVERTIPS_CLOSE, null);
    };
    OverTips.prototype.doClickClose = function () {
        if (this.callback)
            this.callback();
        UIHelp_1.UIHelp.closeOverTips();
    };
    OverTips.className = 'OverTips';
    __decorate([
        property(cc.Node)
    ], OverTips.prototype, "btn_additional", void 0);
    OverTips = __decorate([
        ccclass
    ], OverTips);
    return OverTips;
}(BaseFrameUI_1.default));
exports.OverTips = OverTips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcT3ZlclRpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE0RDtBQUM1RCwyQ0FBMEM7QUFDMUMsOENBQXlDO0FBQ3pDLDZDQUE0QztBQUU1QyxxQ0FBb0M7QUFDcEMsd0RBQXVEO0FBRXZELGdGQUErRTtBQUMvRSw2REFBNEQ7QUFFNUQsSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ2pCLHVEQUFXLENBQUE7SUFDWCx1RUFBbUIsQ0FBQTtJQUNuQiw2REFBYyxDQUFBO0lBQ2QsbUVBQWlCLENBQUE7SUFDakIsaUVBQWdCLENBQUE7QUFDcEIsQ0FBQyxFQU5XLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBTXBCO0FBRUssSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBOEIsNEJBQVc7SUFhckM7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUFYTyxvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBRyxJQUFJLENBQUM7O0lBSXhCLENBQUM7SUFFRCx5QkFBTSxHQUFOO0lBQ0EsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV6RSxTQUFHLENBQUMsb0JBQW9CLENBQUMsMkJBQVksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFlB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QyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDbEQsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDaEQsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7aUJBQ2xCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDO2lCQUM5QyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztpQkFDOUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUM7aUJBQzlDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO2lCQUN0QyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFFRCwrQkFBWSxHQUFaLFVBQWEsS0FBTSxFQUFFLGVBQWdCO1FBQ2pDLFNBQUcsQ0FBQyxRQUFRLENBQUMsMkJBQVksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25DLGVBQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBOUdhLGtCQUFTLEdBQUcsVUFBVSxDQUFDO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ3FCO0lBSjlCLFFBQVE7UUFEcEIsT0FBTztPQUNLLFFBQVEsQ0FnSHBCO0lBQUQsZUFBQztDQWhIRCxBQWdIQyxDQWhINkIscUJBQVcsR0FnSHhDO0FBaEhZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi8uLi8uLi9NYW5hZ2VyL1NvdW5kTWFuYWdlcic7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSAnLi4vLi4vVXRpbHMvVG9vbHMnO1xyXG5pbXBvcnQgQmFzZUZyYW1lVUkgZnJvbSAnLi4vQmFzZUZyYW1lVUknO1xyXG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xyXG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL1VJTWFuYWdlcic7XHJcbmltcG9ydCB7IFQyTSB9IGZyb20gJy4uLy4uL1NESy9UMk0nO1xyXG5pbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi8uLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XHJcbmltcG9ydCB7IENvbnN0VmFsdWUgfSBmcm9tICcuLi8uLi8uLi8uLi9nYW1lL3NjcmlwdHMvRGF0YS9Db25zdFZhbHVlJztcclxuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9NYW5hZ2VyL0VkaXRvck1hbmFnZXInO1xyXG5pbXBvcnQgeyBSZXBvcnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9SZXBvcnRNYW5hZ2VyJztcclxuXHJcbmV4cG9ydCBlbnVtIFR5cGVfVGlsZSB7XHJcbiAgICBadW9EYUppZVNodSxcclxuICAgIENodWFuZ0d1YW5DaGVuZ0dvbmcsXHJcbiAgICBUaWFvWmhhbkppZVNodSxcclxuICAgIFRpYW9aaGFuQ2hlbmdHb25nLFxyXG4gICAgQ2h1YW5nR3VhbkppZVNodSxcclxufVxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIE92ZXJUaXBzIGV4dGVuZHMgQmFzZUZyYW1lVUkge1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnT3ZlclRpcHMnO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBidG5fYWRkaXRpb25hbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGJfdGlwczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9zcF9jb21wbGV0ZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9idG5fY2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYnRuX3JlcGxheTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsYmFjayA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5fYnRuX2Nsb3NlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsaWNrQ2xvc2UsIHRoaXMpO1xyXG5cclxuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoRnJhbWVNc2dUeXBlLk9WRVJUSVBTX0NMT1NFLCB0aGlzLmRvQ2xpY2tDbG9zZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5fYnRuX2Nsb3NlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbGlja0Nsb3NlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICDorr7nva7mmL7npLrlhoXlrrlcclxuICAgICBAcGFyYW0ge251bWJlcn0gdHlwZSAgICAgICAgICAwOiDplJnor68gIDHvvJrnrZTlr7nkuoYgIDLvvJrpl6/lhbPmiJDlip8o5LiA55u05pi+56S65LiN5Lya5YWz6ZetKVxyXG4gICAgIEBwYXJhbSB7c3RyaW5nfSBzdHIgICAgICAgICAgIOaPkOekuuWGheWuuVxyXG4gICAgIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrICAgIOWbnuiwg+WHveaVsFxyXG4gICAgIEBwYXJhbSB7c3RyaW5nfSBlbmRUaXRsZSAgICAgIGVuZOWKqOaViOaPkOekuuaWh+Wtl1xyXG4gICAgIEBwYXJhbSB7Ym9vbGVhbn0gaXNTaG93UmVwbGF5ICAgICDmmK/lkKbmmL7npLrph43njqnmjInpkq5cclxuICAgICBAcGFyYW0ge2Jvb2xlYW59IGlzU2hvd0Nsb3NlICAgICDmmK/lkKbmmL7npLrlhbPpl63mjInpkq5cclxuICAgICBAcGFyYW0ge2Jvb2xlYW59IGF1dG9PZmYgICAgIOaYr+WQpuiHquWKqOWFs+mXrVxyXG4gICAgICovXHJcbiAgICBpbml0KFxyXG4gICAgICAgIHR5cGU6IG51bWJlcixcclxuICAgICAgICBzdHI6IHN0cmluZyA9ICcnLFxyXG4gICAgICAgIGNhbGxiYWNrOiBGdW5jdGlvbixcclxuICAgICAgICBlbmRUaXRsZT86IHN0cmluZyxcclxuICAgICAgICBpc1Nob3dSZXBsYXk/OiBib29sZWFuLFxyXG4gICAgICAgIGlzU2hvd0Nsb3NlOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgYXV0b09mZjogYm9vbGVhbiA9IHRydWUsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5fc3BfY29tcGxldGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9sYl90aXBzLmFjdGl2ZSA9IHR5cGUgIT0gMjtcclxuICAgICAgICB0aGlzLl9sYl90aXBzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RyO1xyXG4gICAgICAgIHRoaXMuX2J0bl9jbG9zZS5hY3RpdmUgPSBpc1Nob3dDbG9zZSAmJiAoMCA9PT0gdHlwZSB8fCAxID09PSB0eXBlKTtcclxuXHJcbiAgICAgICAgbGV0IGJ0bk5vZGUgPSBudWxsXHJcbiAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5hZGRpdGlvbmFsLmxlbmd0aCA+IDAgJiYgUmVwb3J0TWFuYWdlci5pc1Bhc3NHYW1lKCkgJiYgIVJlcG9ydE1hbmFnZXIuaXNQYXNzQWRkaXRvbmFsKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5fYWRkaXRpb25hbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bl9hZGRpdGlvbmFsLnNldFNjYWxlKDAuMDEpO1xyXG4gICAgICAgICAgICBidG5Ob2RlID0gdGhpcy5idG5fYWRkaXRpb25hbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoUmVwb3J0TWFuYWdlci5pc1Bhc3NHYW1lKCkgJiYgUmVwb3J0TWFuYWdlci5pc1Bhc3NBZGRpdG9uYWwoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9idG5fcmVwbGF5LmFjdGl2ZSA9IGlzU2hvd1JlcGxheTtcclxuICAgICAgICAgICAgdGhpcy5fYnRuX3JlcGxheS5zZXRTY2FsZSgwLjAxKTtcclxuICAgICAgICAgICAgYnRuTm9kZSA9IHRoaXMuX2J0bl9yZXBsYXlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwic2V0dGxlX3N0YXIwXCIsIGZhbHNlKTtcclxuICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5fc3BfY29tcGxldGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgJ3RpYW96aGFuX2thaXNoaScsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidG5Ob2RlICYmIGJ0bk5vZGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihidG5Ob2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLl9zcF9jb21wbGV0ZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCAndGlhb3poYW5feHVuaHVhbicsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXlUaXBzQWN0aW9uKCk7XHJcbiAgICAgICAgVUlIZWxwLmNsb3NlTWFzaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGF5Q2xvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRvQ2xpY2tDbG9zZSgpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlUaXBzQWN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9sYl90aXBzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gY2MudjIodGhpcy5fbGJfdGlwcy5wb3NpdGlvbi54LCB0aGlzLl9sYl90aXBzLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgICBsZXQgZnJhbWVQb3NfMSA9IGNjLnYyKGVuZFBvcy54LCBlbmRQb3MueSAtIDcyLjgpO1xyXG4gICAgICAgICAgICBsZXQgZnJhbWVQb3NfMiA9IGNjLnYyKGVuZFBvcy54LCBlbmRQb3MueSArIDEyKTtcclxuICAgICAgICAgICAgbGV0IGZyYW1lUG9zXzMgPSBjYy52MihlbmRQb3MueCwgZW5kUG9zLnkgLSA4KTtcclxuICAgICAgICAgICAgbGV0IGZyYW1lUG9zXzQgPSBjYy52MihlbmRQb3MueCwgZW5kUG9zLnkgKyA3LjMpO1xyXG4gICAgICAgICAgICB0aGlzLl9sYl90aXBzLnBvc2l0aW9uID0gY2MudjMoZnJhbWVQb3NfMS54LCBmcmFtZVBvc18xLnkpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLl9sYl90aXBzKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMDgsIHsgeDogZnJhbWVQb3NfMi54LCB5OiBmcmFtZVBvc18yLnkgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjA4LCB7IHg6IGZyYW1lUG9zXzMueCwgeTogZnJhbWVQb3NfMy55IH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4wOCwgeyB4OiBmcmFtZVBvc180LngsIHk6IGZyYW1lUG9zXzQueSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMDYsIHsgeDogZW5kUG9zLngsIHk6IGVuZFBvcy55IH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGlja0Nsb3NlKGV2ZW50PywgY3VzdG9tRXZlbnREYXRhPyk6IHZvaWQge1xyXG4gICAgICAgIFQyTS5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuT1ZFUlRJUFNfQ0xPU0UsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvQ2xpY2tDbG9zZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgICAgIFVJSGVscC5jbG9zZU92ZXJUaXBzKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78373xfPadEJ5IFn4sizh3z', 'ErrorPanel');
// frame/scripts/UI/Panel/ErrorPanel.ts

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
var UIHelp_1 = require("../../Utils/UIHelp");
var SoundManager_1 = require("./../../Manager/SoundManager");
var GameMsg_1 = require("./../../SDK/GameMsg");
var BaseFrameUI_1 = require("./../BaseFrameUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ErrorPanel = /** @class */ (function (_super) {
    __extends(ErrorPanel, _super);
    function ErrorPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.biaoTi = null;
        _this.shuoMing = null;
        _this.tiShi = null;
        _this.btnLab = null;
        _this.btn = null;
        _this.isClose = false;
        return _this;
    }
    ErrorPanel.prototype.start = function () {
        // cc.director.pause();
    };
    ErrorPanel.prototype.onLoad = function () { };
    /**
     * 设置错误弹窗数据
     * @param shuoMing 错误说明
     * @param biaoTi 标题文字
     * @param tiShi 提示文字
     * @param btnLab 按钮文字
     * @param callBack 回调函数
     * @param isClose 是否可关闭
     */
    ErrorPanel.prototype.setPanel = function (shuoMing, biaoTi, tiShi, btnLab, callBack, isClose) {
        if (isClose === void 0) { isClose = false; }
        var data = {
            shuoMing: shuoMing,
            biaoTi: biaoTi,
            tiShi: tiShi,
        };
        GameMsg_1.default.warn('ErrorPanelLog', data);
        SoundManager_1.SoundManager.playEffect('sfx_error', false);
        this.shuoMing.string = shuoMing;
        this.isClose = isClose;
        this.callback = callBack;
        this.biaoTi.string = biaoTi ? biaoTi : this.biaoTi.string;
        this.tiShi.string = tiShi ? tiShi : this.tiShi.string;
        this.btnLab.string = btnLab ? btnLab : this.btnLab.string;
        this.btn.interactable = this.isClose;
    };
    ErrorPanel.prototype.onBtnClick = function () {
        SoundManager_1.SoundManager.playEffect('sfx_buttn', false);
        if (this.callback) {
            this.callback();
        }
        if (this.isClose) {
            UIHelp_1.UIHelp.closeErrorPanel();
        }
    };
    ErrorPanel.className = 'ErrorPanel';
    __decorate([
        property(cc.Label)
    ], ErrorPanel.prototype, "biaoTi", void 0);
    __decorate([
        property(cc.Label)
    ], ErrorPanel.prototype, "shuoMing", void 0);
    __decorate([
        property(cc.Label)
    ], ErrorPanel.prototype, "tiShi", void 0);
    __decorate([
        property(cc.Label)
    ], ErrorPanel.prototype, "btnLab", void 0);
    __decorate([
        property(cc.Button)
    ], ErrorPanel.prototype, "btn", void 0);
    ErrorPanel = __decorate([
        ccclass
    ], ErrorPanel);
    return ErrorPanel;
}(BaseFrameUI_1.default));
exports.default = ErrorPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcRXJyb3JQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFDNUMsNkRBQTREO0FBQzVELCtDQUEwQztBQUMxQyxnREFBMkM7QUFFckMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVc7SUFBbkQ7UUFBQSxxRUErREM7UUE1REcsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixTQUFHLEdBQWMsSUFBSSxDQUFDO1FBRXRCLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBa0Q3QixDQUFDO0lBaERHLDBCQUFLLEdBQUw7UUFDSSx1QkFBdUI7SUFDM0IsQ0FBQztJQUVELDJCQUFNLEdBQU4sY0FBVSxDQUFDO0lBQ1g7Ozs7Ozs7O09BUUc7SUFDSCw2QkFBUSxHQUFSLFVBQ0ksUUFBZ0IsRUFDaEIsTUFBZSxFQUNmLEtBQWMsRUFDZCxNQUFlLEVBQ2YsUUFBbUIsRUFDbkIsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtRQUV4QixJQUFJLElBQUksR0FBRztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDO1FBRUYsaUJBQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLDJCQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN6QyxDQUFDO0lBRUQsK0JBQVUsR0FBVjtRQUNJLDJCQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxlQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBN0RhLG9CQUFTLEdBQUcsWUFBWSxDQUFDO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNJO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDRTtJQVhMLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0ErRDlCO0lBQUQsaUJBQUM7Q0EvREQsQUErREMsQ0EvRHVDLHFCQUFXLEdBK0RsRDtrQkEvRG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi8uLi8uLi9NYW5hZ2VyL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgR2FtZU1zZyBmcm9tICcuLy4uLy4uL1NESy9HYW1lTXNnJztcbmltcG9ydCBCYXNlRnJhbWVVSSBmcm9tICcuLy4uL0Jhc2VGcmFtZVVJJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yUGFuZWwgZXh0ZW5kcyBCYXNlRnJhbWVVSSB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnRXJyb3JQYW5lbCc7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGJpYW9UaTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBzaHVvTWluZzogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0aVNoaTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBidG5MYWI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIGlzQ2xvc2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjYWxsYmFjazogRnVuY3Rpb247XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge31cbiAgICAvKipcbiAgICAgKiDorr7nva7plJnor6/lvLnnqpfmlbDmja5cbiAgICAgKiBAcGFyYW0gc2h1b01pbmcg6ZSZ6K+v6K+05piOXG4gICAgICogQHBhcmFtIGJpYW9UaSDmoIfpopjmloflrZdcbiAgICAgKiBAcGFyYW0gdGlTaGkg5o+Q56S65paH5a2XXG4gICAgICogQHBhcmFtIGJ0bkxhYiDmjInpkq7mloflrZdcbiAgICAgKiBAcGFyYW0gY2FsbEJhY2sg5Zue6LCD5Ye95pWwXG4gICAgICogQHBhcmFtIGlzQ2xvc2Ug5piv5ZCm5Y+v5YWz6ZetXG4gICAgICovXG4gICAgc2V0UGFuZWwoXG4gICAgICAgIHNodW9NaW5nOiBzdHJpbmcsXG4gICAgICAgIGJpYW9UaT86IHN0cmluZyxcbiAgICAgICAgdGlTaGk/OiBzdHJpbmcsXG4gICAgICAgIGJ0bkxhYj86IHN0cmluZyxcbiAgICAgICAgY2FsbEJhY2s/OiBGdW5jdGlvbixcbiAgICAgICAgaXNDbG9zZTogYm9vbGVhbiA9IGZhbHNlLFxuICAgICkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIHNodW9NaW5nOiBzaHVvTWluZyxcbiAgICAgICAgICAgIGJpYW9UaTogYmlhb1RpLFxuICAgICAgICAgICAgdGlTaGk6IHRpU2hpLFxuICAgICAgICB9O1xuXG4gICAgICAgIEdhbWVNc2cud2FybignRXJyb3JQYW5lbExvZycsIGRhdGEpO1xuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdCgnc2Z4X2Vycm9yJywgZmFsc2UpO1xuICAgICAgICB0aGlzLnNodW9NaW5nLnN0cmluZyA9IHNodW9NaW5nO1xuICAgICAgICB0aGlzLmlzQ2xvc2UgPSBpc0Nsb3NlO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbEJhY2s7XG4gICAgICAgIHRoaXMuYmlhb1RpLnN0cmluZyA9IGJpYW9UaSA/IGJpYW9UaSA6IHRoaXMuYmlhb1RpLnN0cmluZztcbiAgICAgICAgdGhpcy50aVNoaS5zdHJpbmcgPSB0aVNoaSA/IHRpU2hpIDogdGhpcy50aVNoaS5zdHJpbmc7XG4gICAgICAgIHRoaXMuYnRuTGFiLnN0cmluZyA9IGJ0bkxhYiA/IGJ0bkxhYiA6IHRoaXMuYnRuTGFiLnN0cmluZztcbiAgICAgICAgdGhpcy5idG4uaW50ZXJhY3RhYmxlID0gdGhpcy5pc0Nsb3NlO1xuICAgIH1cblxuICAgIG9uQnRuQ2xpY2soKSB7XG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KCdzZnhfYnV0dG4nLCBmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNDbG9zZSkge1xuICAgICAgICAgICAgVUlIZWxwLmNsb3NlRXJyb3JQYW5lbCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f496fZ+e7dBKotK1z+dphJ7', 'replayBtn');
// frame/scripts/UI/Item/replayBtn.ts

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
var replayBtn = /** @class */ (function (_super) {
    __extends(replayBtn, _super);
    function replayBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._touchEnable = true;
        return _this;
    }
    replayBtn.prototype.start = function () {
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
            T2M_1.T2M.dispatch(FrameMsgType_1.FrameMsgType.REPLAY_START, null);
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
            _this.node.scale = 1;
        }, this);
    };
    replayBtn.prototype.onEnable = function () {
        this._touchEnable = true;
    };
    replayBtn = __decorate([
        ccclass
    ], replayBtn);
    return replayBtn;
}(cc.Component));
exports.default = replayBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxyZXBsYXlCdG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQXVEO0FBQ3ZELHFDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQW1DQztRQWxDVyxrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUFrQ3pDLENBQUM7SUFqQ0cseUJBQUssR0FBTDtRQUFBLGlCQTRCQztRQTNCRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDUixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQzdCO1lBQ0ksSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZO2dCQUFFLE9BQU87WUFDL0IsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQzFCLENBQUMsRUFDRCxJQUFJLENBQ1AsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNSLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFDM0I7WUFDSSxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVk7Z0JBQUUsT0FBTztZQUMvQixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDcEIsU0FBRyxDQUFDLFFBQVEsQ0FBQywyQkFBWSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxDQUFDLEVBQ0QsSUFBSSxDQUNQLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDUixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQzlCO1lBQ0ksS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFDRCxJQUFJLENBQ1AsQ0FBQztJQUNOLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQWxDZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW1DN0I7SUFBRCxnQkFBQztDQW5DRCxBQW1DQyxDQW5Dc0MsRUFBRSxDQUFDLFNBQVMsR0FtQ2xEO2tCQW5Db0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRnJhbWVNc2dUeXBlJztcbmltcG9ydCB7IFQyTSB9IGZyb20gJy4uLy4uL1NESy9UMk0nO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlcGxheUJ0biBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfdG91Y2hFbmFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLm5vZGUub24oXG4gICAgICAgICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3RvdWNoRW5hYmxlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMS4xO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ub2RlLm9uKFxuICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fdG91Y2hFbmFibGUpIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLl90b3VjaEVuYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgVDJNLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5SRVBMQVlfU1RBUlQsIG51bGwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ub2RlLm9uKFxuICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fdG91Y2hFbmFibGUgPSB0cnVlO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87818Dli8JHk4taZSHeRBG9', 'BaseTeacherPanel');
// frame/scripts/UI/Panel/BaseTeacherPanel.ts

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
var ConstValue_1 = require("../../../../game/scripts/Data/ConstValue");
var EditorManager_1 = require("../../../../game/scripts/Manager/EditorManager");
var NetWork_1 = require("../../Http/NetWork");
var UIHelp_1 = require("../../Utils/UIHelp");
var BaseUI_1 = require("../BaseUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseTeacherPanel = /** @class */ (function (_super) {
    __extends(BaseTeacherPanel, _super);
    function BaseTeacherPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseTeacherPanel.prototype.onLoad = function () { };
    BaseTeacherPanel.prototype.start = function () {
        var loading = document.getElementById('loading-full');
        if (loading) {
            loading.style.display = 'none';
        }
        this.data.node.parent.removeChild(this.data.node);
        this.getNet();
        UIHelp_1.UIHelp.closeRecoverMask();
    };
    BaseTeacherPanel.prototype.setPanel = function () { };
    BaseTeacherPanel.prototype.getNet = function () {
        var _this = this;
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.GET_TITLE + '?title_id=' + NetWork_1.NetWork.titleId, 'GET', 'application/json;charset=utf-8', function (err, response) {
            console.log('消息返回' + response);
            if (!err) {
                var res = response;
                if (Array.isArray(res.data)) {
                    _this.setPanel();
                    return;
                }
                var content = JSON.parse(res.data.courseware_content);
                NetWork_1.NetWork.coursewareId = res.data.courseware_id;
                if (NetWork_1.NetWork.empty) {
                    //如果URL里面带了empty参数 并且为true  就立刻清除数据
                    _this.ClearNet();
                }
                else {
                    if (content != null) {
                        if (content.CoursewareKey != ConstValue_1.ConstValue.CoursewareKey) {
                            UIHelp_1.UIHelp.showErrorPanel('该titleId已被使用,请联系技术老师解决！\ntitleId=' + NetWork_1.NetWork.titleId, '', '', '确定');
                            return;
                        }
                        // 如果编辑器数据修改 先注释掉此行
                        EditorManager_1.EditorManager.setData(content.data);
                        _this.setPanel();
                    }
                    else {
                        _this.setPanel();
                    }
                }
            }
        }, null);
    };
    //删除课件数据  一般为脏数据清理
    BaseTeacherPanel.prototype.ClearNet = function () {
        var jsonData = { courseware_id: NetWork_1.NetWork.coursewareId };
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.CLEAR, 'POST', 'application/json;charset=utf-8', function (err, response) {
            if (!err) {
                UIHelp_1.UIHelp.showTip('答案删除成功');
            }
        }, JSON.stringify(jsonData));
    };
    BaseTeacherPanel.className = 'BaseTeacherPanel';
    BaseTeacherPanel = __decorate([
        ccclass
    ], BaseTeacherPanel);
    return BaseTeacherPanel;
}(BaseUI_1.BaseUI));
exports.default = BaseTeacherPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcQmFzZVRlYWNoZXJQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBc0U7QUFDdEUsZ0ZBQStFO0FBQy9FLDhDQUE2QztBQUM3Qyw2Q0FBNEM7QUFDNUMsb0NBQW1DO0FBRTdCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFNO0lBQXBEOztJQTBFQSxDQUFDO0lBeEVHLGlDQUFNLEdBQU4sY0FBVSxDQUFDO0lBRVgsZ0NBQUssR0FBTDtRQUNJLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEQsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDbEM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsZUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLG1DQUFRLEdBQWYsY0FBbUIsQ0FBQztJQUVaLGlDQUFNLEdBQWQ7UUFBQSxpQkF3Q0M7UUF2Q0csaUJBQU8sQ0FBQyxXQUFXLENBQ2YsaUJBQU8sQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLGlCQUFPLENBQUMsT0FBTyxFQUNsRCxLQUFLLEVBQ0wsZ0NBQWdDLEVBQ2hDLFVBQUMsR0FBRyxFQUFFLFFBQVE7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNOLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQztnQkFDbkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDekIsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNoQixPQUFPO2lCQUNWO2dCQUNELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUN0RCxpQkFBTyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDOUMsSUFBSSxpQkFBTyxDQUFDLEtBQUssRUFBRTtvQkFDZixtQ0FBbUM7b0JBQ25DLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDbkI7cUJBQU07b0JBQ0gsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO3dCQUNqQixJQUFJLE9BQU8sQ0FBQyxhQUFhLElBQUksdUJBQVUsQ0FBQyxhQUFhLEVBQUU7NEJBQ25ELGVBQU0sQ0FBQyxjQUFjLENBQ2pCLG1DQUFtQyxHQUFHLGlCQUFPLENBQUMsT0FBTyxFQUNyRCxFQUFFLEVBQ0YsRUFBRSxFQUNGLElBQUksQ0FDUCxDQUFDOzRCQUNGLE9BQU87eUJBQ1Y7d0JBQ0QsbUJBQW1CO3dCQUNuQiw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BDLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDbkI7eUJBQU07d0JBQ0gsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUNuQjtpQkFDSjthQUNKO1FBQ0wsQ0FBQyxFQUNELElBQUksQ0FDUCxDQUFDO0lBQ04sQ0FBQztJQUVELGtCQUFrQjtJQUNsQixtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxRQUFRLEdBQUcsRUFBRSxhQUFhLEVBQUUsaUJBQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2RCxpQkFBTyxDQUFDLFdBQVcsQ0FDZixpQkFBTyxDQUFDLEtBQUssRUFDYixNQUFNLEVBQ04sZ0NBQWdDLEVBQ2hDLFVBQUMsR0FBRyxFQUFFLFFBQVE7WUFDVixJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNOLGVBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDNUI7UUFDTCxDQUFDLEVBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FDM0IsQ0FBQztJQUNOLENBQUM7SUF2RWEsMEJBQVMsR0FBRyxrQkFBa0IsQ0FBQztJQUQ1QixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQTBFcEM7SUFBRCx1QkFBQztDQTFFRCxBQTBFQyxDQTFFNkMsZUFBTSxHQTBFbkQ7a0JBMUVvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdFZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL0RhdGEvQ29uc3RWYWx1ZSc7XHJcbmltcG9ydCB7IEVkaXRvck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9nYW1lL3NjcmlwdHMvTWFuYWdlci9FZGl0b3JNYW5hZ2VyJztcclxuaW1wb3J0IHsgTmV0V29yayB9IGZyb20gJy4uLy4uL0h0dHAvTmV0V29yayc7XHJcbmltcG9ydCB7IFVJSGVscCB9IGZyb20gJy4uLy4uL1V0aWxzL1VJSGVscCc7XHJcbmltcG9ydCB7IEJhc2VVSSB9IGZyb20gJy4uL0Jhc2VVSSc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVRlYWNoZXJQYW5lbCBleHRlbmRzIEJhc2VVSSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdCYXNlVGVhY2hlclBhbmVsJztcclxuICAgIG9uTG9hZCgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IGxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZy1mdWxsJyk7XHJcbiAgICAgICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICAgICAgbG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGEubm9kZS5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5kYXRhLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuZ2V0TmV0KCk7XHJcbiAgICAgICAgVUlIZWxwLmNsb3NlUmVjb3Zlck1hc2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UGFuZWwoKSB7fVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TmV0KCkge1xyXG4gICAgICAgIE5ldFdvcmsuaHR0cFJlcXVlc3QoXHJcbiAgICAgICAgICAgIE5ldFdvcmsuR0VUX1RJVExFICsgJz90aXRsZV9pZD0nICsgTmV0V29yay50aXRsZUlkLFxyXG4gICAgICAgICAgICAnR0VUJyxcclxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcsXHJcbiAgICAgICAgICAgIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5raI5oGv6L+U5ZueJyArIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlcy5kYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhbmVsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBKU09OLnBhcnNlKHJlcy5kYXRhLmNvdXJzZXdhcmVfY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgTmV0V29yay5jb3Vyc2V3YXJlSWQgPSByZXMuZGF0YS5jb3Vyc2V3YXJlX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChOZXRXb3JrLmVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5aaC5p6cVVJM6YeM6Z2i5bim5LqGZW1wdHnlj4LmlbAg5bm25LiU5Li6dHJ1ZSAg5bCx56uL5Yi75riF6Zmk5pWw5o2uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2xlYXJOZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudC5Db3Vyc2V3YXJlS2V5ICE9IENvbnN0VmFsdWUuQ291cnNld2FyZUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVJSGVscC5zaG93RXJyb3JQYW5lbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+ivpXRpdGxlSWTlt7Looqvkvb/nlKgs6K+36IGU57O75oqA5pyv6ICB5biI6Kej5Yaz77yBXFxudGl0bGVJZD0nICsgTmV0V29yay50aXRsZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfnoa7lrponLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c57yW6L6R5Zmo5pWw5o2u5L+u5pS5IOWFiOazqOmHiuaOieatpOihjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdG9yTWFuYWdlci5zZXREYXRhKGNvbnRlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhbmVsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhbmVsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIoOmZpOivvuS7tuaVsOaNriAg5LiA6Iis5Li66ISP5pWw5o2u5riF55CGXHJcbiAgICBDbGVhck5ldCgpIHtcclxuICAgICAgICBsZXQganNvbkRhdGEgPSB7IGNvdXJzZXdhcmVfaWQ6IE5ldFdvcmsuY291cnNld2FyZUlkIH07XHJcbiAgICAgICAgTmV0V29yay5odHRwUmVxdWVzdChcclxuICAgICAgICAgICAgTmV0V29yay5DTEVBUixcclxuICAgICAgICAgICAgJ1BPU1QnLFxyXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04JyxcclxuICAgICAgICAgICAgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVUlIZWxwLnNob3dUaXAoJ+etlOahiOWIoOmZpOaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShqc29uRGF0YSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf8a66RO2hJWJN7q1dt4/zn', 'LoadingUI');
// frame/scripts/UI/Panel/LoadingUI.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingUI = void 0;
var ConstValue_1 = require("../../../../game/scripts/Data/ConstValue");
var GamePanel_1 = require("../../../../game/scripts/UI/panel/GamePanel");
var TeacherPanel_1 = require("../../../../game/scripts/UI/panel/TeacherPanel");
var NetWork_1 = require("../../Http/NetWork");
var SoundManager_1 = require("../../Manager/SoundManager");
var UIManager_1 = require("../../Manager/UIManager");
var GameMsg_1 = require("../../SDK/GameMsg");
var BaseFrameUI_1 = require("../BaseFrameUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isLoadStart = false;
        _this._resProgress = 20;
        _this._audioProgress = 10;
        return _this;
    }
    LoadingUI.prototype.onLoad = function () {
        NetWork_1.NetWork.GetRequest();
        this.initPanelBySubject();
        this.init();
    };
    LoadingUI.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadPreloadDir()];
                    case 1:
                        _a.sent();
                        this.setLoadingProgressUI(this._resProgress);
                        this.loadAudio();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 根据学科设置界面
    LoadingUI.prototype.initPanelBySubject = function () {
        var subject = ConstValue_1.ConstValue.Subject || 1;
    };
    // 预加载音频
    LoadingUI.prototype.loadAudio = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                SoundManager_1.SoundManager.preLoadAllAudioClips(function () {
                    _this.setLoadingProgressUI(_this._resProgress + _this._audioProgress);
                    _this.openPanel();
                });
                return [2 /*return*/];
            });
        });
    };
    // 预加载 'resources/preload' 目录下的资源
    LoadingUI.prototype.loadPreloadDir = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cc.resources.loadDir('preload', cc.Asset, function (error, assets) {
                            resolve();
                        });
                    })];
            });
        });
    };
    // 打开界面
    LoadingUI.prototype.openPanel = function () {
        var _this = this;
        var onProgress = function (completedCount, totalCount, item) {
            if (!_this.isLoadStart) {
                _this.isLoadStart = true;
                //新课堂上报
                GameMsg_1.default.resLoadStart();
            }
            var finishProgress = _this._resProgress + _this._audioProgress;
            var value = finishProgress + Math.round((completedCount / totalCount) * (100 - finishProgress));
            _this.setLoadingProgressUI(value);
        };
        var openPanel = ConstValue_1.ConstValue.IS_TEACHER ? TeacherPanel_1.default : GamePanel_1.default;
        UIManager_1.UIManager.openUI(openPanel, this, 0, function () {
            //新课堂上报
            GameMsg_1.default.resLoadEnd();
        }, onProgress);
    };
    LoadingUI.prototype.setLoadingProgressUI = function (value) {
        //新课堂上报
        GameMsg_1.default.resLoading(value);
        window.postMessage({
            type: 'cocos_load_res_progress',
            progress: value
        }, '*');
    };
    LoadingUI.className = 'LoadingUI';
    LoadingUI = __decorate([
        ccclass
    ], LoadingUI);
    return LoadingUI;
}(BaseFrameUI_1.default));
exports.LoadingUI = LoadingUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcTG9hZGluZ1VJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBc0U7QUFDdEUseUVBQW9FO0FBQ3BFLCtFQUEwRTtBQUMxRSw4Q0FBNkM7QUFDN0MsMkRBQTBEO0FBQzFELHFEQUFvRDtBQUNwRCw2Q0FBd0M7QUFDeEMsOENBQXlDO0FBR25DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStCLDZCQUFXO0lBQTFDO1FBQUEscUVBK0VDO1FBNUVXLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ1gsa0JBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsb0JBQWMsR0FBVyxFQUFFLENBQUM7O0lBMEVqRCxDQUFDO0lBeEVHLDBCQUFNLEdBQU47UUFDSSxpQkFBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUssd0JBQUksR0FBVjs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUE7O3dCQUEzQixTQUEyQixDQUFDO3dCQUM1QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUM3QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Ozs7O0tBQ3BCO0lBRUQsV0FBVztJQUNYLHNDQUFrQixHQUFsQjtRQUNJLElBQU0sT0FBTyxHQUFXLHVCQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsUUFBUTtJQUNGLDZCQUFTLEdBQWY7Ozs7Z0JBQ0ksMkJBQVksQ0FBQyxvQkFBb0IsQ0FBQztvQkFDOUIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNuRSxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxDQUFDOzs7O0tBQ047SUFFRCxpQ0FBaUM7SUFDM0Isa0NBQWMsR0FBcEI7OztnQkFDSSxzQkFBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUNyQyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLEtBQVksRUFBRSxNQUFrQjs0QkFDdkUsT0FBTyxFQUFFLENBQUM7d0JBQ2QsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDLEVBQUM7OztLQUNOO0lBRUQsT0FBTztJQUNQLDZCQUFTLEdBQVQ7UUFBQSxpQkF5QkM7UUF4QkcsSUFBSSxVQUFVLEdBQUcsVUFBQyxjQUFzQixFQUFFLFVBQWtCLEVBQUUsSUFBUztZQUNuRSxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbkIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBRXhCLE9BQU87Z0JBQ1AsaUJBQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUMxQjtZQUNELElBQU0sY0FBYyxHQUFHLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQztZQUMvRCxJQUFJLEtBQUssR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ2hHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUM7UUFFRixJQUFJLFNBQVMsR0FBb0IsdUJBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLHNCQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFTLENBQUM7UUFFbEYscUJBQVMsQ0FBQyxNQUFNLENBQ1osU0FBUyxFQUNULElBQUksRUFDSixDQUFDLEVBQ0Q7WUFDSSxPQUFPO1lBQ1AsaUJBQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQ0QsVUFBVSxDQUNiLENBQUM7SUFDTixDQUFDO0lBRUQsd0NBQW9CLEdBQXBCLFVBQXFCLEtBQWE7UUFDOUIsT0FBTztRQUNQLGlCQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFCLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDZixJQUFJLEVBQUUseUJBQXlCO1lBQy9CLFFBQVEsRUFBRSxLQUFLO1NBQ2xCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBN0VhLG1CQUFTLEdBQUcsV0FBVyxDQUFDO0lBRDdCLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0ErRXJCO0lBQUQsZ0JBQUM7Q0EvRUQsQUErRUMsQ0EvRThCLHFCQUFXLEdBK0V6QztBQS9FWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0VmFsdWUgfSBmcm9tICcuLi8uLi8uLi8uLi9nYW1lL3NjcmlwdHMvRGF0YS9Db25zdFZhbHVlJztcbmltcG9ydCBHYW1lUGFuZWwgZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL1VJL3BhbmVsL0dhbWVQYW5lbCc7XG5pbXBvcnQgVGVhY2hlclBhbmVsIGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9VSS9wYW5lbC9UZWFjaGVyUGFuZWwnO1xuaW1wb3J0IHsgTmV0V29yayB9IGZyb20gJy4uLy4uL0h0dHAvTmV0V29yayc7XG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL1VJTWFuYWdlcic7XG5pbXBvcnQgR2FtZU1zZyBmcm9tICcuLi8uLi9TREsvR2FtZU1zZyc7XG5pbXBvcnQgQmFzZUZyYW1lVUkgZnJvbSAnLi4vQmFzZUZyYW1lVUknO1xuaW1wb3J0IHsgQmFzZVVJLCBVSUNsYXNzIH0gZnJvbSAnLi4vQmFzZVVJJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBMb2FkaW5nVUkgZXh0ZW5kcyBCYXNlRnJhbWVVSSB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnTG9hZGluZ1VJJztcblxuICAgIHByaXZhdGUgaXNMb2FkU3RhcnQgPSBmYWxzZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9yZXNQcm9ncmVzczogbnVtYmVyID0gMjA7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXVkaW9Qcm9ncmVzczogbnVtYmVyID0gMTA7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIE5ldFdvcmsuR2V0UmVxdWVzdCgpO1xuXG4gICAgICAgIHRoaXMuaW5pdFBhbmVsQnlTdWJqZWN0KCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXQoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZFByZWxvYWREaXIoKTtcbiAgICAgICAgdGhpcy5zZXRMb2FkaW5nUHJvZ3Jlc3NVSSh0aGlzLl9yZXNQcm9ncmVzcyk7XG4gICAgICAgIHRoaXMubG9hZEF1ZGlvKCk7XG4gICAgfVxuXG4gICAgLy8g5qC55o2u5a2m56eR6K6+572u55WM6Z2iXG4gICAgaW5pdFBhbmVsQnlTdWJqZWN0KCkge1xuICAgICAgICBjb25zdCBzdWJqZWN0OiBudW1iZXIgPSBDb25zdFZhbHVlLlN1YmplY3QgfHwgMTtcbiAgICB9XG5cbiAgICAvLyDpooTliqDovb3pn7PpopFcbiAgICBhc3luYyBsb2FkQXVkaW8oKSB7XG4gICAgICAgIFNvdW5kTWFuYWdlci5wcmVMb2FkQWxsQXVkaW9DbGlwcygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldExvYWRpbmdQcm9ncmVzc1VJKHRoaXMuX3Jlc1Byb2dyZXNzICsgdGhpcy5fYXVkaW9Qcm9ncmVzcyk7XG4gICAgICAgICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDpooTliqDovb0gJ3Jlc291cmNlcy9wcmVsb2FkJyDnm67lvZXkuIvnmoTotYTmupBcbiAgICBhc3luYyBsb2FkUHJlbG9hZERpcigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKCdwcmVsb2FkJywgY2MuQXNzZXQsIChlcnJvcjogRXJyb3IsIGFzc2V0czogY2MuQXNzZXRbXSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDmiZPlvIDnlYzpnaJcbiAgICBvcGVuUGFuZWwoKSB7XG4gICAgICAgIGxldCBvblByb2dyZXNzID0gKGNvbXBsZXRlZENvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlciwgaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNMb2FkU3RhcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZFN0YXJ0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8v5paw6K++5aCC5LiK5oqlXG4gICAgICAgICAgICAgICAgR2FtZU1zZy5yZXNMb2FkU3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZpbmlzaFByb2dyZXNzID0gdGhpcy5fcmVzUHJvZ3Jlc3MgKyB0aGlzLl9hdWRpb1Byb2dyZXNzO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gZmluaXNoUHJvZ3Jlc3MgKyBNYXRoLnJvdW5kKChjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQpICogKDEwMCAtIGZpbmlzaFByb2dyZXNzKSk7XG4gICAgICAgICAgICB0aGlzLnNldExvYWRpbmdQcm9ncmVzc1VJKHZhbHVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgb3BlblBhbmVsOiBVSUNsYXNzPEJhc2VVST4gPSBDb25zdFZhbHVlLklTX1RFQUNIRVIgPyBUZWFjaGVyUGFuZWwgOiBHYW1lUGFuZWw7XG5cbiAgICAgICAgVUlNYW5hZ2VyLm9wZW5VSShcbiAgICAgICAgICAgIG9wZW5QYW5lbCxcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8v5paw6K++5aCC5LiK5oqlXG4gICAgICAgICAgICAgICAgR2FtZU1zZy5yZXNMb2FkRW5kKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Qcm9ncmVzcyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nUHJvZ3Jlc3NVSSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIC8v5paw6K++5aCC5LiK5oqlXG4gICAgICAgIEdhbWVNc2cucmVzTG9hZGluZyh2YWx1ZSk7XG5cbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6ICdjb2Nvc19sb2FkX3Jlc19wcm9ncmVzcycsXG4gICAgICAgICAgICBwcm9ncmVzczogdmFsdWVcbiAgICAgICAgfSwgJyonKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c61c0OGRkxGBqEB0icrBo6y', 'MaskRecover');
// frame/scripts/UI/Item/MaskRecover.ts

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
var ListenerManager_1 = require("../../Manager/ListenerManager");
var UIManager_1 = require("../../Manager/UIManager");
var BindNode_1 = require("../BindNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MaskRecover = /** @class */ (function (_super) {
    __extends(MaskRecover, _super);
    function MaskRecover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nd_mask = null;
        _this._nd_loading = null;
        _this.isShowLoading = false;
        return _this;
    }
    MaskRecover.prototype.onLoad = function () {
        //设置最层级
        this.node.zIndex = UIManager_1.EPANEL_ZORDER.MASK;
    };
    MaskRecover.prototype.start = function () {
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.MASK_RECOVER, this.onMask, this);
        this._nd_loading.active = false;
        this._nd_mask.active = false;
    };
    MaskRecover.prototype.onMask = function (isState) {
        this._nd_mask.active = isState;
    };
    MaskRecover = __decorate([
        ccclass
    ], MaskRecover);
    return MaskRecover;
}(BindNode_1.default));
exports.default = MaskRecover;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxNYXNrUmVjb3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBdUQ7QUFDdkQsaUVBQWdFO0FBQ2hFLHFEQUF3RDtBQUV4RCx3Q0FBbUM7QUFFN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVE7SUFBakQ7UUFBQSxxRUFtQkM7UUFsQlUsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixtQkFBYSxHQUFZLEtBQUssQ0FBQzs7SUFnQjFDLENBQUM7SUFkRyw0QkFBTSxHQUFOO1FBQ0ksT0FBTztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLHlCQUFhLENBQUMsSUFBSSxDQUFDO0lBQzFDLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0ksaUNBQWUsQ0FBQyxFQUFFLENBQUMsMkJBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sT0FBZ0I7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBQ25DLENBQUM7SUFsQmdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FtQi9CO0lBQUQsa0JBQUM7Q0FuQkQsQUFtQkMsQ0FuQndDLGtCQUFRLEdBbUJoRDtrQkFuQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi8uLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBFUEFORUxfWk9SREVSIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9VSU1hbmFnZXInO1xuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSAnLi4vLi4vVXRpbHMvVUlIZWxwJztcbmltcG9ydCBCaW5kTm9kZSBmcm9tICcuLi9CaW5kTm9kZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNrUmVjb3ZlciBleHRlbmRzIEJpbmROb2RlIHtcbiAgICBwdWJsaWMgX25kX21hc2s6IGNjLk5vZGUgPSBudWxsO1xuICAgIHB1YmxpYyBfbmRfbG9hZGluZzogY2MuTm9kZSA9IG51bGw7XG4gICAgcHVibGljIGlzU2hvd0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy/orr7nva7mnIDlsYLnuqdcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IEVQQU5FTF9aT1JERVIuTUFTSztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEZyYW1lTXNnVHlwZS5NQVNLX1JFQ09WRVIsIHRoaXMub25NYXNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fbmRfbG9hZGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbmRfbWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbk1hc2soaXNTdGF0ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9uZF9tYXNrLmFjdGl2ZSA9IGlzU3RhdGU7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd28fa0BmSFGwY3HLHVIrT8f', 'BoundingBoxHelp');
// frame/scripts/Utils/BoundingBoxHelp.ts

"use strict";
/**
 * Author: kouyaqi
 * Email: kouyaqi@100tal.com
 */
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 处理sp.Skeleton的边界框的方法；
 * 将此脚本挂载到含有spine资源的节点；
 * 资源顶点越多，贴合越好，性能越低。
 * */
var BoundingBoxHelp = /** @class */ (function (_super) {
    __extends(BoundingBoxHelp, _super);
    function BoundingBoxHelp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skeleton = null;
        /**插槽的顶点数据 */
        _this.vertices = [];
        /**转换得到的坐标 */
        _this.positions = [];
        return _this;
    }
    BoundingBoxHelp.prototype.getSkeleton = function () {
        if (this.skeleton == null) {
            this.skeleton = this.node.getComponent(sp.Skeleton);
        }
        return this.skeleton;
    };
    /**
     * 获取插槽所绑定的边界框的世界坐标
     * @param slotName 插槽名称
     */
    BoundingBoxHelp.prototype.getBoundingBoxWorldPositions = function (slotName) {
        var skeleton = this.getSkeleton();
        if (skeleton == null) {
            console.warn('没有Spine资源！');
            return this.positions;
        }
        var boundingBoxSlot = skeleton.findSlot(slotName);
        if (!boundingBoxSlot) {
            console.warn("\u6CA1\u6709\u627E\u5230\u63D2\u69FD\uFF1A " + slotName);
            return this.positions;
        }
        var attachment = boundingBoxSlot.attachment;
        /** http://zh.esotericsoftware.com/spine-api-reference#BoundingBoxAttachment
         * Transforms the attachment's local vertices to world coordinates. If the slot has attachmentVertices, they are used to deform the vertices.
         *   See World transforms in the Spine Runtimes Guide.
         */
        attachment.computeWorldVertices(boundingBoxSlot, 0, attachment.worldVerticesLength, this.vertices, 0, 2);
        for (var i = 0; i < this.vertices.length; i += 2) {
            if (!this.positions[i / 2]) {
                this.positions[i / 2] = cc.Vec2.ZERO;
            }
            this.positions[i / 2].x = this.vertices[i];
            this.positions[i / 2].y = this.vertices[i + 1];
        }
        //此时的世界坐标是Spine内部的世界坐标，需要转换为Cocos里的世界坐标
        for (var i = 0; i < this.positions.length; i++) {
            this.positions[i] = this.node.convertToWorldSpaceAR(this.positions[i]);
        }
        return this.positions;
    };
    /**
     * 获取插槽所绑定的边界框相对于节点的坐标
     * @param slotName 插槽名称
     * @param node 相对节点
     */
    BoundingBoxHelp.prototype.getBoundingBoxRelativePositions = function (slotName, node) {
        var positions = this.getBoundingBoxWorldPositions(slotName);
        for (var i = 0; i < positions.length; i++) {
            positions[i] = node.convertToNodeSpaceAR(positions[i]);
        }
        return positions;
    };
    BoundingBoxHelp = __decorate([
        ccclass
    ], BoundingBoxHelp);
    return BoundingBoxHelp;
}(cc.Component));
exports.default = BoundingBoxHelp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxCb3VuZGluZ0JveEhlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7R0FHRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7Ozs7S0FJSztBQUVMO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBb0VDO1FBbkVXLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRXJDLGFBQWE7UUFDTCxjQUFRLEdBQWEsRUFBRSxDQUFDO1FBRWhDLGFBQWE7UUFDTCxlQUFTLEdBQWMsRUFBRSxDQUFDOztJQTZEdEMsQ0FBQztJQTNEVyxxQ0FBVyxHQUFuQjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHNEQUE0QixHQUFuQyxVQUFvQyxRQUFnQjtRQUNoRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0RBQVcsUUFBVSxDQUFDLENBQUM7WUFDcEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxVQUFVLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM1Qzs7O1dBR0c7UUFDSCxVQUFVLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFekcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN4QztZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsRDtRQUVELHVDQUF1QztRQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRTtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHlEQUErQixHQUF0QyxVQUF1QyxRQUFnQixFQUFFLElBQWE7UUFDbEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBbkVnQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBb0VuQztJQUFELHNCQUFDO0NBcEVELEFBb0VDLENBcEU0QyxFQUFFLENBQUMsU0FBUyxHQW9FeEQ7a0JBcEVvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBdXRob3I6IGtvdXlhcWlcbiAqIEVtYWlsOiBrb3V5YXFpQDEwMHRhbC5jb21cbiAqL1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIOWkhOeQhnNwLlNrZWxldG9u55qE6L6555WM5qGG55qE5pa55rOV77ybXG4gKiDlsIbmraTohJrmnKzmjILovb3liLDlkKvmnIlzcGluZei1hOa6kOeahOiKgueCue+8m1xuICog6LWE5rqQ6aG254K56LaK5aSa77yM6LS05ZCI6LaK5aW977yM5oCn6IO96LaK5L2O44CCXG4gKiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kaW5nQm94SGVscCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBza2VsZXRvbjogc3AuU2tlbGV0b24gPSBudWxsO1xuXG4gICAgLyoq5o+S5qe955qE6aG254K55pWw5o2uICovXG4gICAgcHJpdmF0ZSB2ZXJ0aWNlczogbnVtYmVyW10gPSBbXTtcblxuICAgIC8qKui9rOaNouW+l+WIsOeahOWdkOaghyAqL1xuICAgIHByaXZhdGUgcG9zaXRpb25zOiBjYy5WZWMyW10gPSBbXTtcblxuICAgIHByaXZhdGUgZ2V0U2tlbGV0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLnNrZWxldG9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2tlbGV0b24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5za2VsZXRvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmj5Lmp73miYDnu5HlrprnmoTovrnnlYzmoYbnmoTkuJbnlYzlnZDmoIdcbiAgICAgKiBAcGFyYW0gc2xvdE5hbWUg5o+S5qe95ZCN56ewXG4gICAgICovXG4gICAgcHVibGljIGdldEJvdW5kaW5nQm94V29ybGRQb3NpdGlvbnMoc2xvdE5hbWU6IHN0cmluZyk6IGNjLlZlYzJbXSB7XG4gICAgICAgIGxldCBza2VsZXRvbiA9IHRoaXMuZ2V0U2tlbGV0b24oKTtcbiAgICAgICAgaWYgKHNrZWxldG9uID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign5rKh5pyJU3BpbmXotYTmupDvvIEnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9ucztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBib3VuZGluZ0JveFNsb3QgPSBza2VsZXRvbi5maW5kU2xvdChzbG90TmFtZSk7XG4gICAgICAgIGlmICghYm91bmRpbmdCb3hTbG90KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYOayoeacieaJvuWIsOaPkuanve+8miAke3Nsb3ROYW1lfWApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGF0dGFjaG1lbnQgPSBib3VuZGluZ0JveFNsb3QuYXR0YWNobWVudDtcbiAgICAgICAgLyoqIGh0dHA6Ly96aC5lc290ZXJpY3NvZnR3YXJlLmNvbS9zcGluZS1hcGktcmVmZXJlbmNlI0JvdW5kaW5nQm94QXR0YWNobWVudFxuICAgICAgICAgKiBUcmFuc2Zvcm1zIHRoZSBhdHRhY2htZW50J3MgbG9jYWwgdmVydGljZXMgdG8gd29ybGQgY29vcmRpbmF0ZXMuIElmIHRoZSBzbG90IGhhcyBhdHRhY2htZW50VmVydGljZXMsIHRoZXkgYXJlIHVzZWQgdG8gZGVmb3JtIHRoZSB2ZXJ0aWNlcy5cbiAgICAgICAgICogICBTZWUgV29ybGQgdHJhbnNmb3JtcyBpbiB0aGUgU3BpbmUgUnVudGltZXMgR3VpZGUuXG4gICAgICAgICAqL1xuICAgICAgICBhdHRhY2htZW50LmNvbXB1dGVXb3JsZFZlcnRpY2VzKGJvdW5kaW5nQm94U2xvdCwgMCwgYXR0YWNobWVudC53b3JsZFZlcnRpY2VzTGVuZ3RoLCB0aGlzLnZlcnRpY2VzLCAwLCAyKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wb3NpdGlvbnNbaSAvIDJdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaSAvIDJdID0gY2MuVmVjMi5aRVJPO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaSAvIDJdLnggPSB0aGlzLnZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaSAvIDJdLnkgPSB0aGlzLnZlcnRpY2VzW2kgKyAxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5q2k5pe255qE5LiW55WM5Z2Q5qCH5pivU3BpbmXlhoXpg6jnmoTkuJbnlYzlnZDmoIfvvIzpnIDopoHovazmjaLkuLpDb2Nvc+mHjOeahOS4lueVjOWdkOagh1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1tpXSA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wb3NpdGlvbnNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluaPkuanveaJgOe7keWumueahOi+ueeVjOahhuebuOWvueS6juiKgueCueeahOWdkOagh1xuICAgICAqIEBwYXJhbSBzbG90TmFtZSDmj5Lmp73lkI3np7BcbiAgICAgKiBAcGFyYW0gbm9kZSDnm7jlr7noioLngrlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Qm91bmRpbmdCb3hSZWxhdGl2ZVBvc2l0aW9ucyhzbG90TmFtZTogc3RyaW5nLCBub2RlOiBjYy5Ob2RlKTogY2MuVmVjMltdIHtcbiAgICAgICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuZ2V0Qm91bmRpbmdCb3hXb3JsZFBvc2l0aW9ucyhzbG90TmFtZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbnNbaV0gPSBub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc2l0aW9uc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdbeagD9lJH1p1yPQBbNwPK', 'SubmissionPanel');
// frame/scripts/UI/Panel/SubmissionPanel.ts

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
var NetWork_1 = require("../../Http/NetWork");
var BaseFrameUI_1 = require("../BaseFrameUI");
var UIHelp_1 = require("../../Utils/UIHelp");
var ConstValue_1 = require("../../../../game/scripts/Data/ConstValue");
var EditorManager_1 = require("../../../../game/scripts/Manager/EditorManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SubmissionPanel = /** @class */ (function (_super) {
    __extends(SubmissionPanel, _super);
    function SubmissionPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubmissionPanel.prototype.start = function () { };
    SubmissionPanel.prototype.onQueDingBtnClick = function (event) {
        this.DetectionNet();
    };
    SubmissionPanel.prototype.onQuXiaoBtnClick = function (event) {
        UIHelp_1.UIHelp.closeSubmissionPanel();
    };
    //提交或者修改答案
    SubmissionPanel.prototype.DetectionNet = function () {
        var _this = this;
        if (!NetWork_1.NetWork.titleId) {
            UIHelp_1.UIHelp.showErrorPanel('titleId为空,请联系技术老师解决！\ntitleId=' + NetWork_1.NetWork.titleId, '', '', '确定');
            return;
        }
        var data = JSON.stringify({
            CoursewareKey: ConstValue_1.ConstValue.CoursewareKey,
            data: EditorManager_1.EditorManager.getData(),
        });
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.GET_TITLE + '?title_id=' + NetWork_1.NetWork.titleId, 'GET', 'application/json;charset=utf-8', function (err, response) {
            if (!err) {
                if (response.data.courseware_content == null || response.data.courseware_content == '') {
                    _this.AddNet(data);
                }
                else {
                    NetWork_1.NetWork.coursewareId = response.data.courseware_id;
                    var res = JSON.parse(response.data.courseware_content);
                    if (!NetWork_1.NetWork.empty) {
                        if (res.CoursewareKey == ConstValue_1.ConstValue.CoursewareKey) {
                            _this.ModifyNet(data);
                        }
                        else {
                            UIHelp_1.UIHelp.showErrorPanel('该titleId已被使用,请联系技术老师解决！\ntitleId=' + NetWork_1.NetWork.titleId, '', '', '确定');
                        }
                    }
                }
            }
        }, null);
    };
    //添加答案信息
    SubmissionPanel.prototype.AddNet = function (gameDataJson) {
        var data = {
            title_id: NetWork_1.NetWork.titleId,
            courseware_content: gameDataJson,
            is_result: 1,
            is_lavel: 1,
            lavel_num: EditorManager_1.EditorManager.getLevelCount(),
        };
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.ADD, 'POST', 'application/json;charset=utf-8', function (err, response) {
            if (!err) {
                UIHelp_1.UIHelp.showTip('答案提交成功');
                UIHelp_1.UIHelp.closeSubmissionPanel();
            }
        }, JSON.stringify(data));
    };
    //修改课件
    SubmissionPanel.prototype.ModifyNet = function (gameDataJson) {
        var jsonData = {
            courseware_id: NetWork_1.NetWork.coursewareId,
            courseware_content: gameDataJson,
            is_result: 1,
            is_lavel: 1,
            lavel_num: EditorManager_1.EditorManager.getLevelCount(),
        };
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.MODIFY, 'POST', 'application/json;charset=utf-8', function (err, response) {
            if (!err) {
                UIHelp_1.UIHelp.showTip('答案修改成功');
                UIHelp_1.UIHelp.closeSubmissionPanel();
            }
        }, JSON.stringify(jsonData));
    };
    SubmissionPanel.className = 'SubmissionPanel';
    SubmissionPanel = __decorate([
        ccclass
    ], SubmissionPanel);
    return SubmissionPanel;
}(BaseFrameUI_1.default));
exports.default = SubmissionPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcU3VibWlzc2lvblBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3Qyw4Q0FBeUM7QUFDekMsNkNBQTRDO0FBQzVDLHVFQUFzRTtBQUN0RSxnRkFBK0U7QUFFekUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVc7SUFBeEQ7O0lBaUdBLENBQUM7SUEvRkcsK0JBQUssR0FBTCxjQUFTLENBQUM7SUFFViwyQ0FBaUIsR0FBakIsVUFBa0IsS0FBSztRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDBDQUFnQixHQUFoQixVQUFpQixLQUFLO1FBQ2xCLGVBQU0sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxVQUFVO0lBQ1Ysc0NBQVksR0FBWjtRQUFBLGlCQXFDQztRQXBDRyxJQUFJLENBQUMsaUJBQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbEIsZUFBTSxDQUFDLGNBQWMsQ0FBQyxnQ0FBZ0MsR0FBRyxpQkFBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hGLE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEIsYUFBYSxFQUFFLHVCQUFVLENBQUMsYUFBYTtZQUN2QyxJQUFJLEVBQUUsNkJBQWEsQ0FBQyxPQUFPLEVBQUU7U0FDaEMsQ0FBQyxDQUFDO1FBQ0gsaUJBQU8sQ0FBQyxXQUFXLENBQ2YsaUJBQU8sQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLGlCQUFPLENBQUMsT0FBTyxFQUNsRCxLQUFLLEVBQ0wsZ0NBQWdDLEVBQ2hDLFVBQUMsR0FBRyxFQUFFLFFBQVE7WUFDVixJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNOLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLEVBQUU7b0JBQ3BGLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNILGlCQUFPLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUNuRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxDQUFDLGlCQUFPLENBQUMsS0FBSyxFQUFFO3dCQUNoQixJQUFJLEdBQUcsQ0FBQyxhQUFhLElBQUksdUJBQVUsQ0FBQyxhQUFhLEVBQUU7NEJBQy9DLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ3hCOzZCQUFNOzRCQUNILGVBQU0sQ0FBQyxjQUFjLENBQ2pCLG1DQUFtQyxHQUFHLGlCQUFPLENBQUMsT0FBTyxFQUNyRCxFQUFFLEVBQ0YsRUFBRSxFQUNGLElBQUksQ0FDUCxDQUFDO3lCQUNMO3FCQUNKO2lCQUNKO2FBQ0o7UUFDTCxDQUFDLEVBQ0QsSUFBSSxDQUNQLENBQUM7SUFDTixDQUFDO0lBRUQsUUFBUTtJQUNSLGdDQUFNLEdBQU4sVUFBTyxZQUFZO1FBQ2YsSUFBSSxJQUFJLEdBQUc7WUFDUCxRQUFRLEVBQUUsaUJBQU8sQ0FBQyxPQUFPO1lBQ3pCLGtCQUFrQixFQUFFLFlBQVk7WUFDaEMsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQztZQUNYLFNBQVMsRUFBRSw2QkFBYSxDQUFDLGFBQWEsRUFBRTtTQUMzQyxDQUFDO1FBQ0YsaUJBQU8sQ0FBQyxXQUFXLENBQ2YsaUJBQU8sQ0FBQyxHQUFHLEVBQ1gsTUFBTSxFQUNOLGdDQUFnQyxFQUNoQyxVQUFDLEdBQUcsRUFBRSxRQUFRO1lBQ1YsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDTixlQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QixlQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUNqQztRQUNMLENBQUMsRUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUN2QixDQUFDO0lBQ04sQ0FBQztJQUVELE1BQU07SUFDTixtQ0FBUyxHQUFULFVBQVUsWUFBWTtRQUNsQixJQUFJLFFBQVEsR0FBRztZQUNYLGFBQWEsRUFBRSxpQkFBTyxDQUFDLFlBQVk7WUFDbkMsa0JBQWtCLEVBQUUsWUFBWTtZQUNoQyxTQUFTLEVBQUUsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDO1lBQ1gsU0FBUyxFQUFFLDZCQUFhLENBQUMsYUFBYSxFQUFFO1NBQzNDLENBQUM7UUFDRixpQkFBTyxDQUFDLFdBQVcsQ0FDZixpQkFBTyxDQUFDLE1BQU0sRUFDZCxNQUFNLEVBQ04sZ0NBQWdDLEVBQ2hDLFVBQUMsR0FBRyxFQUFFLFFBQVE7WUFDVixJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNOLGVBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pCLGVBQU0sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQ2pDO1FBQ0wsQ0FBQyxFQUNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQzNCLENBQUM7SUFDTixDQUFDO0lBL0ZhLHlCQUFTLEdBQUcsaUJBQWlCLENBQUM7SUFEM0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQWlHbkM7SUFBRCxzQkFBQztDQWpHRCxBQWlHQyxDQWpHNEMscUJBQVcsR0FpR3ZEO2tCQWpHb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5ldFdvcmsgfSBmcm9tICcuLi8uLi9IdHRwL05ldFdvcmsnO1xuaW1wb3J0IEJhc2VGcmFtZVVJIGZyb20gJy4uL0Jhc2VGcmFtZVVJJztcbmltcG9ydCB7IFVJSGVscCB9IGZyb20gJy4uLy4uL1V0aWxzL1VJSGVscCc7XG5pbXBvcnQgeyBDb25zdFZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL0RhdGEvQ29uc3RWYWx1ZSc7XG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJtaXNzaW9uUGFuZWwgZXh0ZW5kcyBCYXNlRnJhbWVVSSB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnU3VibWlzc2lvblBhbmVsJztcbiAgICBzdGFydCgpIHt9XG5cbiAgICBvblF1ZURpbmdCdG5DbGljayhldmVudCkge1xuICAgICAgICB0aGlzLkRldGVjdGlvbk5ldCgpO1xuICAgIH1cblxuICAgIG9uUXVYaWFvQnRuQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgVUlIZWxwLmNsb3NlU3VibWlzc2lvblBhbmVsKCk7XG4gICAgfVxuXG4gICAgLy/mj5DkuqTmiJbogIXkv67mlLnnrZTmoYhcbiAgICBEZXRlY3Rpb25OZXQoKSB7XG4gICAgICAgIGlmICghTmV0V29yay50aXRsZUlkKSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd0Vycm9yUGFuZWwoJ3RpdGxlSWTkuLrnqbos6K+36IGU57O75oqA5pyv6ICB5biI6Kej5Yaz77yBXFxudGl0bGVJZD0nICsgTmV0V29yay50aXRsZUlkLCAnJywgJycsICfnoa7lrponKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIENvdXJzZXdhcmVLZXk6IENvbnN0VmFsdWUuQ291cnNld2FyZUtleSxcbiAgICAgICAgICAgIGRhdGE6IEVkaXRvck1hbmFnZXIuZ2V0RGF0YSgpLFxuICAgICAgICB9KTtcbiAgICAgICAgTmV0V29yay5odHRwUmVxdWVzdChcbiAgICAgICAgICAgIE5ldFdvcmsuR0VUX1RJVExFICsgJz90aXRsZV9pZD0nICsgTmV0V29yay50aXRsZUlkLFxuICAgICAgICAgICAgJ0dFVCcsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04JyxcbiAgICAgICAgICAgIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY291cnNld2FyZV9jb250ZW50ID09IG51bGwgfHwgcmVzcG9uc2UuZGF0YS5jb3Vyc2V3YXJlX2NvbnRlbnQgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQWRkTmV0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgTmV0V29yay5jb3Vyc2V3YXJlSWQgPSByZXNwb25zZS5kYXRhLmNvdXJzZXdhcmVfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhLmNvdXJzZXdhcmVfY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIU5ldFdvcmsuZW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLkNvdXJzZXdhcmVLZXkgPT0gQ29uc3RWYWx1ZS5Db3Vyc2V3YXJlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTW9kaWZ5TmV0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVJSGVscC5zaG93RXJyb3JQYW5lbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfor6V0aXRsZUlk5bey6KKr5L2/55SoLOivt+iBlOezu+aKgOacr+iAgeW4iOino+WGs++8gVxcbnRpdGxlSWQ9JyArIE5ldFdvcmsudGl0bGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAn56Gu5a6aJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvL+a3u+WKoOetlOahiOS/oeaBr1xuICAgIEFkZE5ldChnYW1lRGF0YUpzb24pIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICB0aXRsZV9pZDogTmV0V29yay50aXRsZUlkLFxuICAgICAgICAgICAgY291cnNld2FyZV9jb250ZW50OiBnYW1lRGF0YUpzb24sXG4gICAgICAgICAgICBpc19yZXN1bHQ6IDEsXG4gICAgICAgICAgICBpc19sYXZlbDogMSxcbiAgICAgICAgICAgIGxhdmVsX251bTogRWRpdG9yTWFuYWdlci5nZXRMZXZlbENvdW50KCksXG4gICAgICAgIH07XG4gICAgICAgIE5ldFdvcmsuaHR0cFJlcXVlc3QoXG4gICAgICAgICAgICBOZXRXb3JrLkFERCxcbiAgICAgICAgICAgICdQT1NUJyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgICAgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICBVSUhlbHAuc2hvd1RpcCgn562U5qGI5o+Q5Lqk5oiQ5YqfJyk7XG4gICAgICAgICAgICAgICAgICAgIFVJSGVscC5jbG9zZVN1Ym1pc3Npb25QYW5lbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvL+S/ruaUueivvuS7tlxuICAgIE1vZGlmeU5ldChnYW1lRGF0YUpzb24pIHtcbiAgICAgICAgbGV0IGpzb25EYXRhID0ge1xuICAgICAgICAgICAgY291cnNld2FyZV9pZDogTmV0V29yay5jb3Vyc2V3YXJlSWQsXG4gICAgICAgICAgICBjb3Vyc2V3YXJlX2NvbnRlbnQ6IGdhbWVEYXRhSnNvbixcbiAgICAgICAgICAgIGlzX3Jlc3VsdDogMSxcbiAgICAgICAgICAgIGlzX2xhdmVsOiAxLFxuICAgICAgICAgICAgbGF2ZWxfbnVtOiBFZGl0b3JNYW5hZ2VyLmdldExldmVsQ291bnQoKSxcbiAgICAgICAgfTtcbiAgICAgICAgTmV0V29yay5odHRwUmVxdWVzdChcbiAgICAgICAgICAgIE5ldFdvcmsuTU9ESUZZLFxuICAgICAgICAgICAgJ1BPU1QnLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcsXG4gICAgICAgICAgICAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIFVJSGVscC5zaG93VGlwKCfnrZTmoYjkv67mlLnmiJDlip8nKTtcbiAgICAgICAgICAgICAgICAgICAgVUlIZWxwLmNsb3NlU3VibWlzc2lvblBhbmVsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKSxcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04f62OpblhMYb6+AOI+oOHr', 'TipUI');
// frame/scripts/UI/Panel/TipUI.ts

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
exports.TipUI = void 0;
var BaseFrameUI_1 = require("../BaseFrameUI");
var Tip_1 = require("../Item/Tip");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TipUI = /** @class */ (function (_super) {
    __extends(TipUI, _super);
    function TipUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipPrefab = null;
        _this.tipPool = [];
        return _this;
    }
    TipUI.prototype.showTip = function (message) {
        for (var j = 0; j < this.tipPool.length; j++) {
            if (!this.tipPool[j].isReady()) {
                this.tipPool[j].reset();
                this.tipPool[j].playTip(message);
                return;
            }
        }
        for (var i = 0; i < this.tipPool.length; ++i) {
            if (this.tipPool[i] != null && this.tipPool[i].isReady()) {
                this.tipPool[i].node.setSiblingIndex(200);
                this.tipPool[i].playTip(message);
                return;
            }
        }
        // cc.log("create tip");
        var TipNode = cc.instantiate(this.tipPrefab);
        TipNode.parent = this.node;
        var tip = TipNode.getComponent(Tip_1.Tip);
        this.tipPool.push(tip);
        tip.playTip(message);
    };
    TipUI.className = 'TipUI';
    __decorate([
        property(cc.Prefab)
    ], TipUI.prototype, "tipPrefab", void 0);
    TipUI = __decorate([
        ccclass
    ], TipUI);
    return TipUI;
}(BaseFrameUI_1.default));
exports.TipUI = TipUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcVGlwVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUF5QztBQUN6QyxtQ0FBa0M7QUFFNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkIseUJBQVc7SUFBdEM7UUFBQSxxRUE2QkM7UUF6QlcsZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1QixhQUFPLEdBQVUsRUFBRSxDQUFDOztJQXdCaEMsQ0FBQztJQXRCRyx1QkFBTyxHQUFQLFVBQVEsT0FBZTtRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxPQUFPO2FBQ1Y7U0FDSjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU87YUFDVjtTQUNKO1FBQ0Qsd0JBQXdCO1FBQ3hCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQTNCYSxlQUFTLEdBQUcsT0FBTyxDQUFDO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ2dCO0lBSjNCLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0E2QmpCO0lBQUQsWUFBQztDQTdCRCxBQTZCQyxDQTdCMEIscUJBQVcsR0E2QnJDO0FBN0JZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VGcmFtZVVJIGZyb20gJy4uL0Jhc2VGcmFtZVVJJztcbmltcG9ydCB7IFRpcCB9IGZyb20gJy4uL0l0ZW0vVGlwJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBUaXBVSSBleHRlbmRzIEJhc2VGcmFtZVVJIHtcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdUaXBVSSc7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgdGlwUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIHByaXZhdGUgdGlwUG9vbDogVGlwW10gPSBbXTtcblxuICAgIHNob3dUaXAobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy50aXBQb29sLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGlwUG9vbFtqXS5pc1JlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcFBvb2xbal0ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcFBvb2xbal0ucGxheVRpcChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRpcFBvb2wubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpcFBvb2xbaV0gIT0gbnVsbCAmJiB0aGlzLnRpcFBvb2xbaV0uaXNSZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBQb29sW2ldLm5vZGUuc2V0U2libGluZ0luZGV4KDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBQb29sW2ldLnBsYXlUaXAobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNjLmxvZyhcImNyZWF0ZSB0aXBcIik7XG4gICAgICAgIGxldCBUaXBOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aXBQcmVmYWIpO1xuICAgICAgICBUaXBOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgbGV0IHRpcCA9IFRpcE5vZGUuZ2V0Q29tcG9uZW50KFRpcCk7XG4gICAgICAgIHRoaXMudGlwUG9vbC5wdXNoKHRpcCk7XG4gICAgICAgIHRpcC5wbGF5VGlwKG1lc3NhZ2UpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a2a4ho4VlCloJCvzPCR9a/', 'UploadAndReturnPanel');
// frame/scripts/UI/Panel/UploadAndReturnPanel.ts

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
var ListenerManager_1 = require("./../../Manager/ListenerManager");
var BaseFrameUI_1 = require("../BaseFrameUI");
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var UIHelp_1 = require("../../Utils/UIHelp");
var ReportManager_1 = require("../../Manager/ReportManager");
var SoundManager_1 = require("../../Manager/SoundManager");
var T2M_1 = require("../../SDK/T2M");
var EditorManager_1 = require("../../../../game/scripts/Manager/EditorManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UploadAndReturnPanel = /** @class */ (function (_super) {
    __extends(UploadAndReturnPanel, _super);
    function UploadAndReturnPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UploadAndReturnPanel.prototype.onLoad = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.POSITION_CHANGED, function () {
            _this.adjustWidget();
        });
    };
    UploadAndReturnPanel.prototype.start = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_EDIT_STATE_SWITCHING, 1);
    };
    UploadAndReturnPanel.prototype.onFanHui = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_EDIT_STATE_SWITCHING, 0);
        UIHelp_1.UIHelp.closeStarCount();
        UIHelp_1.UIHelp.closeGamePanel();
        UIHelp_1.UIHelp.closeUploadAndReturnPanel();
        UIHelp_1.UIHelp.closeSubmissionPanel();
        UIHelp_1.UIHelp.closeOverTips();
        UIHelp_1.UIHelp.closeAffirmTip();
        ReportManager_1.ReportManager.reportGameOver();
        SoundManager_1.SoundManager.stopAll();
        T2M_1.T2M.onReturnToTeacherPanel();
    };
    UploadAndReturnPanel.prototype.onTiJiao = function () {
        var isEdit = EditorManager_1.EditorManager.isSupportEdit();
        // if (!isEdit || ReportManager.isAllOver) {
        UIHelp_1.UIHelp.showSubmissionPanel();
        // } else {
        //     UIHelp.showTip('请先完成一遍题目');
        // }
    };
    UploadAndReturnPanel.prototype.adjustWidget = function () {
        var scenceHeight = cc.winSize.height;
        var widget = this.getComponent(cc.Widget);
        if (widget) {
            if (scenceHeight > this.node.height) {
                widget.bottom = (scenceHeight - this.node.height) / 2;
            }
            else {
                widget.bottom = 0;
            }
            widget.updateAlignment();
        }
    };
    UploadAndReturnPanel.className = 'UploadAndReturnPanel';
    UploadAndReturnPanel = __decorate([
        ccclass
    ], UploadAndReturnPanel);
    return UploadAndReturnPanel;
}(BaseFrameUI_1.default));
exports.default = UploadAndReturnPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcVXBsb2FkQW5kUmV0dXJuUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQWtFO0FBQ2xFLDhDQUF5QztBQUN6Qyx3REFBdUQ7QUFDdkQsNkNBQTRDO0FBQzVDLDZEQUE0RDtBQUM1RCwyREFBMEQ7QUFDMUQscUNBQW9DO0FBQ3BDLGdGQUErRTtBQUV6RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrRCx3Q0FBVztJQUE3RDs7SUErQ0EsQ0FBQztJQTVDRyxxQ0FBTSxHQUFOO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM3QyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsb0NBQUssR0FBTDtRQUNJLGlDQUFlLENBQUMsUUFBUSxDQUFDLDJCQUFZLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSxpQ0FBZSxDQUFDLFFBQVEsQ0FBQywyQkFBWSxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLGVBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixlQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsZUFBTSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDbkMsZUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDOUIsZUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLGVBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4Qiw2QkFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQy9CLDJCQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkIsU0FBRyxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSxJQUFNLE1BQU0sR0FBRyw2QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzdDLDRDQUE0QztRQUM1QyxlQUFNLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM3QixXQUFXO1FBQ1gsa0NBQWtDO1FBQ2xDLElBQUk7SUFDUixDQUFDO0lBRUQsMkNBQVksR0FBWjtRQUNJLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekQ7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDckI7WUFDRCxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBN0NhLDhCQUFTLEdBQUcsc0JBQXNCLENBQUM7SUFEaEMsb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0ErQ3hDO0lBQUQsMkJBQUM7Q0EvQ0QsQUErQ0MsQ0EvQ2lELHFCQUFXLEdBK0M1RDtrQkEvQ29CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4vLi4vLi4vTWFuYWdlci9MaXN0ZW5lck1hbmFnZXInO1xuaW1wb3J0IEJhc2VGcmFtZVVJIGZyb20gJy4uL0Jhc2VGcmFtZVVJJztcbmltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRnJhbWVNc2dUeXBlJztcbmltcG9ydCB7IFVJSGVscCB9IGZyb20gJy4uLy4uL1V0aWxzL1VJSGVscCc7XG5pbXBvcnQgeyBSZXBvcnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9SZXBvcnRNYW5hZ2VyJztcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvU291bmRNYW5hZ2VyJztcbmltcG9ydCB7IFQyTSB9IGZyb20gJy4uLy4uL1NESy9UMk0nO1xuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9NYW5hZ2VyL0VkaXRvck1hbmFnZXInO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsb2FkQW5kUmV0dXJuUGFuZWwgZXh0ZW5kcyBCYXNlRnJhbWVVSSB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnVXBsb2FkQW5kUmV0dXJuUGFuZWwnO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuUE9TSVRJT05fQ0hBTkdFRCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGp1c3RXaWRnZXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuT05fRURJVF9TVEFURV9TV0lUQ0hJTkcsIDEpO1xuICAgIH1cblxuICAgIG9uRmFuSHVpKCkge1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLk9OX0VESVRfU1RBVEVfU1dJVENISU5HLCAwKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlU3RhckNvdW50KCk7XG4gICAgICAgIFVJSGVscC5jbG9zZUdhbWVQYW5lbCgpO1xuICAgICAgICBVSUhlbHAuY2xvc2VVcGxvYWRBbmRSZXR1cm5QYW5lbCgpO1xuICAgICAgICBVSUhlbHAuY2xvc2VTdWJtaXNzaW9uUGFuZWwoKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlT3ZlclRpcHMoKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlQWZmaXJtVGlwKCk7XG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwb3J0R2FtZU92ZXIoKTtcbiAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BBbGwoKTtcbiAgICAgICAgVDJNLm9uUmV0dXJuVG9UZWFjaGVyUGFuZWwoKTtcbiAgICB9XG5cbiAgICBvblRpSmlhbygpIHtcbiAgICAgICAgY29uc3QgaXNFZGl0ID0gRWRpdG9yTWFuYWdlci5pc1N1cHBvcnRFZGl0KCk7XG4gICAgICAgIC8vIGlmICghaXNFZGl0IHx8IFJlcG9ydE1hbmFnZXIuaXNBbGxPdmVyKSB7XG4gICAgICAgIFVJSGVscC5zaG93U3VibWlzc2lvblBhbmVsKCk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBVSUhlbHAuc2hvd1RpcCgn6K+35YWI5a6M5oiQ5LiA6YGN6aKY55uuJyk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBhZGp1c3RXaWRnZXQoKSB7XG4gICAgICAgIGxldCBzY2VuY2VIZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodDtcbiAgICAgICAgbGV0IHdpZGdldCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICAgIGlmICh3aWRnZXQpIHtcbiAgICAgICAgICAgIGlmIChzY2VuY2VIZWlnaHQgPiB0aGlzLm5vZGUuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmJvdHRvbSA9IChzY2VuY2VIZWlnaHQgLSB0aGlzLm5vZGUuaGVpZ2h0KSAvIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpZGdldC5ib3R0b20gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2lkZ2V0LnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67e25WAGoRADq1zkpxqqwdF', 'AffirmTips');
// frame/scripts/UI/Panel/AffirmTips.ts

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
exports.AffirmTips = void 0;
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var T2M_1 = require("../../SDK/T2M");
var UIHelp_1 = require("../../Utils/UIHelp");
var BaseFrameUI_1 = require("../BaseFrameUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AffirmTips = /** @class */ (function (_super) {
    __extends(AffirmTips, _super);
    function AffirmTips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodeDes = null; //描述节点
        _this.title = null;
        _this.des = null;
        _this.close = null;
        _this.ok = null;
        _this.btnCloseLabel = null;
        _this.btnOkLabel = null;
        _this.win = null; //描述节点
        _this.fail = null; //描述节点
        _this.callback = null;
        return _this;
        // update (dt) {}
    }
    AffirmTips.prototype.start = function () {
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.AFFIRMTIPS_SURE, this.disposeOk.bind(this));
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.AFFIRMTIPS_CANCEL, this.disposeCancel.bind(this));
    };
    //type 成功 1 失败 2
    AffirmTips.prototype.init = function (type, des, callback, btnCloselDes, btnOkDes) {
        this.title.node.active = false;
        this.des.node.active = true;
        this.win.active = type == 1;
        this.fail.active = type == 2;
        this.type = type;
        this.callback = callback;
        //console.log("到了初始化");
        //Tools.playSpine(this.sp_BgAnimator, "fault", false);
        this.des.string = des;
        if (btnCloselDes) {
            btnCloselDes == '' ? '取消' : btnCloselDes;
            this.btnCloseLabel.string = btnCloselDes;
        }
        if (btnOkDes) {
            btnOkDes == '' ? '确定' : btnOkDes;
            this.btnOkLabel.string = btnOkDes;
        }
    };
    AffirmTips.prototype.setOnlyOneBtnType = function (btnOkDes) {
        this.close.node.active = false;
        this.ok.node.active = true;
        this.ok.node.position = cc.v3(0, this.ok.node.position.y, 0);
        if (btnOkDes) {
            btnOkDes == '' ? '确定' : btnOkDes;
            this.btnOkLabel.string = btnOkDes;
            if (btnOkDes.length > 4)
                this.btnOkLabel.fontSize = 40;
        }
    };
    AffirmTips.prototype.OnClickClose = function () {
        //console.log("关闭");
    };
    //通用动画
    AffirmTips.prototype.TipsAnimatorScale = function (nodeObj) {
        nodeObj.stopAllActions();
        var seq = cc.sequence(cc.delayTime(1), cc.scaleTo(0.2, 1, 1));
        nodeObj.runAction(seq);
        // nodeObj.runAction(cc.scaleTo(0.2, 1, 1));
    };
    //ok 1 确认 0 取消
    AffirmTips.prototype.OnClickOk = function () {
        console.log('确认');
        T2M_1.T2M.dispatch(FrameMsgType_1.FrameMsgType.AFFIRMTIPS_SURE, null);
    };
    AffirmTips.prototype.OnClickCancel = function () {
        console.log('取消');
        T2M_1.T2M.dispatch(FrameMsgType_1.FrameMsgType.AFFIRMTIPS_CANCEL, null);
    };
    AffirmTips.prototype.disposeOk = function () {
        UIHelp_1.UIHelp.closeAffirmTip();
        this.callback && this.callback(1);
    };
    AffirmTips.prototype.disposeCancel = function () {
        UIHelp_1.UIHelp.closeAffirmTip();
        this.callback && this.callback(0);
    };
    AffirmTips.className = 'AffirmTips';
    __decorate([
        property(cc.Node)
    ], AffirmTips.prototype, "NodeDes", void 0);
    __decorate([
        property(cc.Label)
    ], AffirmTips.prototype, "title", void 0);
    __decorate([
        property(cc.Label)
    ], AffirmTips.prototype, "des", void 0);
    __decorate([
        property(cc.Button)
    ], AffirmTips.prototype, "close", void 0);
    __decorate([
        property(cc.Button)
    ], AffirmTips.prototype, "ok", void 0);
    __decorate([
        property(cc.Label)
    ], AffirmTips.prototype, "btnCloseLabel", void 0);
    __decorate([
        property(cc.Label)
    ], AffirmTips.prototype, "btnOkLabel", void 0);
    __decorate([
        property(cc.Node)
    ], AffirmTips.prototype, "win", void 0);
    __decorate([
        property(cc.Node)
    ], AffirmTips.prototype, "fail", void 0);
    AffirmTips = __decorate([
        ccclass
    ], AffirmTips);
    return AffirmTips;
}(BaseFrameUI_1.default));
exports.AffirmTips = AffirmTips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcQWZmaXJtVGlwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQXVEO0FBQ3ZELHFDQUFvQztBQUNwQyw2Q0FBNEM7QUFDNUMsOENBQXlDO0FBRW5DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWdDLDhCQUFXO0lBQTNDO1FBQUEscUVBK0ZDO1FBM0ZXLGFBQU8sR0FBWSxJQUFJLENBQUMsQ0FBQyxNQUFNO1FBRS9CLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsU0FBRyxHQUFhLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFFBQUUsR0FBYyxJQUFJLENBQUM7UUFFckIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsU0FBRyxHQUFZLElBQUksQ0FBQyxDQUFDLE1BQU07UUFFM0IsVUFBSSxHQUFZLElBQUksQ0FBQyxDQUFDLE1BQU07UUFFNUIsY0FBUSxHQUFHLElBQUksQ0FBQzs7UUF3RXhCLGlCQUFpQjtJQUNyQixDQUFDO0lBdkVHLDBCQUFLLEdBQUw7UUFDSSxTQUFHLENBQUMsb0JBQW9CLENBQUMsMkJBQVksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRixTQUFHLENBQUMsb0JBQW9CLENBQUMsMkJBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIseUJBQUksR0FBSixVQUFLLElBQVksRUFBRSxHQUFXLEVBQUUsUUFBYSxFQUFF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LEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGtDQUFhLEdBQWI7UUFDSSxlQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUEzRmEsb0JBQVMsR0FBRyxZQUFZLENBQUM7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNZO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDWTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ29CO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ2lCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDVztJQXBCcEIsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQStGdEI7SUFBRCxpQkFBQztDQS9GRCxBQStGQyxDQS9GK0IscUJBQVcsR0ErRjFDO0FBL0ZZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhbWVNc2dUeXBlIH0gZnJvbSAnLi4vLi4vRGF0YS9GcmFtZU1zZ1R5cGUnO1xuaW1wb3J0IHsgVDJNIH0gZnJvbSAnLi4vLi4vU0RLL1QyTSc7XG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IEJhc2VGcmFtZVVJIGZyb20gJy4uL0Jhc2VGcmFtZVVJJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQWZmaXJtVGlwcyBleHRlbmRzIEJhc2VGcmFtZVVJIHtcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdBZmZpcm1UaXBzJztcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgTm9kZURlczogY2MuTm9kZSA9IG51bGw7IC8v5o+P6L+w6IqC54K5XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgdGl0bGU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBkZXM6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgY2xvc2U6IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIG9rOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIGJ0bkNsb3NlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBidG5Pa0xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSB3aW46IGNjLk5vZGUgPSBudWxsOyAvL+aPj+i/sOiKgueCuVxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgZmFpbDogY2MuTm9kZSA9IG51bGw7IC8v5o+P6L+w6IqC54K5XG5cbiAgICBwcml2YXRlIGNhbGxiYWNrID0gbnVsbDtcbiAgICBwcml2YXRlIHR5cGU6IG51bWJlcjtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKEZyYW1lTXNnVHlwZS5BRkZJUk1USVBTX1NVUkUsIHRoaXMuZGlzcG9zZU9rLmJpbmQodGhpcykpO1xuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoRnJhbWVNc2dUeXBlLkFGRklSTVRJUFNfQ0FOQ0VMLCB0aGlzLmRpc3Bvc2VDYW5jZWwuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLy90eXBlIOaIkOWKnyAxIOWksei0pSAyXG4gICAgaW5pdCh0eXBlOiBudW1iZXIsIGRlczogc3RyaW5nLCBjYWxsYmFjazogYW55LCBidG5DbG9zZWxEZXM/OiBzdHJpbmcsIGJ0bk9rRGVzPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGl0bGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLndpbi5hY3RpdmUgPSB0eXBlID09IDE7XG4gICAgICAgIHRoaXMuZmFpbC5hY3RpdmUgPSB0eXBlID09IDI7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIuWIsOS6huWIneWni+WMllwiKTtcbiAgICAgICAgLy9Ub29scy5wbGF5U3BpbmUodGhpcy5zcF9CZ0FuaW1hdG9yLCBcImZhdWx0XCIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5kZXMuc3RyaW5nID0gZGVzO1xuICAgICAgICBpZiAoYnRuQ2xvc2VsRGVzKSB7XG4gICAgICAgICAgICBidG5DbG9zZWxEZXMgPT0gJycgPyAn5Y+W5raIJyA6IGJ0bkNsb3NlbERlcztcbiAgICAgICAgICAgIHRoaXMuYnRuQ2xvc2VMYWJlbC5zdHJpbmcgPSBidG5DbG9zZWxEZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ0bk9rRGVzKSB7XG4gICAgICAgICAgICBidG5Pa0RlcyA9PSAnJyA/ICfnoa7lrponIDogYnRuT2tEZXM7XG4gICAgICAgICAgICB0aGlzLmJ0bk9rTGFiZWwuc3RyaW5nID0gYnRuT2tEZXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRPbmx5T25lQnRuVHlwZShidG5Pa0Rlcz86IHN0cmluZykge1xuICAgICAgICB0aGlzLmNsb3NlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2subm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9rLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCB0aGlzLm9rLm5vZGUucG9zaXRpb24ueSwgMCk7XG4gICAgICAgIGlmIChidG5Pa0Rlcykge1xuICAgICAgICAgICAgYnRuT2tEZXMgPT0gJycgPyAn56Gu5a6aJyA6IGJ0bk9rRGVzO1xuICAgICAgICAgICAgdGhpcy5idG5Pa0xhYmVsLnN0cmluZyA9IGJ0bk9rRGVzO1xuICAgICAgICAgICAgaWYgKGJ0bk9rRGVzLmxlbmd0aCA+IDQpIHRoaXMuYnRuT2tMYWJlbC5mb250U2l6ZSA9IDQwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgT25DbGlja0Nsb3NlKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwi5YWz6ZetXCIpO1xuICAgIH1cblxuICAgIC8v6YCa55So5Yqo55S7XG4gICAgVGlwc0FuaW1hdG9yU2NhbGUobm9kZU9iajogY2MuTm9kZSkge1xuICAgICAgICBub2RlT2JqLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMSksIGNjLnNjYWxlVG8oMC4yLCAxLCAxKSk7XG4gICAgICAgIG5vZGVPYmoucnVuQWN0aW9uKHNlcSk7XG4gICAgICAgIC8vIG5vZGVPYmoucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC4yLCAxLCAxKSk7XG4gICAgfVxuXG4gICAgLy9vayAxIOehruiupCAwIOWPlua2iFxuICAgIE9uQ2xpY2tPaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+ehruiupCcpO1xuICAgICAgICBUMk0uZGlzcGF0Y2goRnJhbWVNc2dUeXBlLkFGRklSTVRJUFNfU1VSRSwgbnVsbCk7XG4gICAgfVxuXG4gICAgT25DbGlja0NhbmNlbCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+WPlua2iCcpO1xuICAgICAgICBUMk0uZGlzcGF0Y2goRnJhbWVNc2dUeXBlLkFGRklSTVRJUFNfQ0FOQ0VMLCBudWxsKTtcbiAgICB9XG5cbiAgICBkaXNwb3NlT2soKSB7XG4gICAgICAgIFVJSGVscC5jbG9zZUFmZmlybVRpcCgpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soMSk7XG4gICAgfVxuXG4gICAgZGlzcG9zZUNhbmNlbCgpIHtcbiAgICAgICAgVUlIZWxwLmNsb3NlQWZmaXJtVGlwKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygwKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/UIHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c44e6cLg85JzaIFNvBdsH7x', 'UIHelp');
// frame/scripts/Utils/UIHelp.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIHelp = void 0;
var GamePanel_1 = require("../../../game/scripts/UI/panel/GamePanel");
var TeacherPanel_1 = require("../../../game/scripts/UI/panel/TeacherPanel");
var FrameMsgType_1 = require("../Data/FrameMsgType");
var ListenerManager_1 = require("../Manager/ListenerManager");
var SyncDataManager_1 = require("../Manager/SyncDataManager");
var UIManager_1 = require("../Manager/UIManager");
var AffirmTips_1 = require("../UI/Panel/AffirmTips");
var ErrorPanel_1 = require("../UI/Panel/ErrorPanel");
var OverTips_1 = require("../UI/Panel/OverTips");
var StarCount_1 = require("../UI/Panel/StarCount");
var SubmissionPanel_1 = require("../UI/Panel/SubmissionPanel");
var TipUI_1 = require("../UI/Panel/TipUI");
var UploadAndReturnPanel_1 = require("../UI/Panel/UploadAndReturnPanel");
var UIHelpClass = /** @class */ (function () {
    function UIHelpClass() {
    }
    UIHelpClass.getInstance = function () {
        if (!this._instance) {
            this._instance = new UIHelpClass();
        }
        return this._instance;
    };
    /**
     *
     * @param message tips文字内容
     */
    UIHelpClass.prototype.showTip = function (message) {
        var _this = this;
        var tipUI = UIManager_1.UIManager.getUI(TipUI_1.TipUI);
        if (!tipUI) {
            UIManager_1.UIManager.openUI(TipUI_1.TipUI, null, UIManager_1.EPANEL_ZORDER.TIPS, function () {
                _this.showTip(message);
            });
        }
        else {
            tipUI.showTip(message);
        }
    };
    /**
     * 结束tip
     * @param type tips类型   0: 错误  1：答对了  2：闯关成功(一直显示不会关闭)
     * @param {string} str           提示内容
     * @param {Function} callback    回调函数
     * @param {string} endTitle      end动效提示文字
     * @param {boolean} isShowReplay     是否显示重玩按钮
     * @param {boolean} isShowClose     是否显示关闭按钮
     * @param {boolean} autoOff     是否自动关闭
     */
    UIHelpClass.prototype.showOverTips = function (type, str, callback, endTitle, isShowReplay, isShowClose, autoOff) {
        var _this = this;
        if (str === void 0) { str = ''; }
        if (callback === void 0) { callback = null; }
        if (isShowClose === void 0) { isShowClose = false; }
        if (autoOff === void 0) { autoOff = true; }
        var overTips = UIManager_1.UIManager.getUI(OverTips_1.OverTips);
        if (!overTips) {
            UIManager_1.UIManager.openUI(OverTips_1.OverTips, null, UIManager_1.EPANEL_ZORDER.POPUP, function () {
                _this.showOverTips(type, str, callback, endTitle, isShowReplay, autoOff);
            });
        }
        else {
            overTips.init(type, str, callback, endTitle, isShowReplay, isShowClose, autoOff);
        }
    };
    UIHelpClass.prototype.closeOverTips = function () {
        UIManager_1.UIManager.closeUI(OverTips_1.OverTips);
    };
    /**
     * 星级评测页面(学生自己可GameData StudentData数据自动刷新，同步则需要传参)
     * @param isShowReplay 是否显示重玩按钮
     * @param starNum 星数 (不传参数则从ReportManager里取值)
     */
    UIHelpClass.prototype.showStarCount = function (isShowReplay, starNum) {
        var _this = this;
        var starCount = UIManager_1.UIManager.getUI(StarCount_1.default);
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answerTimes > 2) {
            starNum = 1;
        }
        else if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answerTimes > 0) {
            starNum = 2;
        }
        else {
            starNum = 3;
        }
        if (!starCount) {
            UIManager_1.UIManager.openUI(StarCount_1.default, null, UIManager_1.EPANEL_ZORDER.POPUP, function () {
                _this.showStarCount(isShowReplay, starNum);
            });
        }
        else {
            starCount.showStars(isShowReplay, starNum);
        }
    };
    UIHelpClass.prototype.closeStarCount = function () {
        UIManager_1.UIManager.closeUI(StarCount_1.default);
    };
    /**
     * 二次确认框
     * @param type tips类型  0:内容tips   1:系统tips
     * @param des tips文字内容
     * @param callback 按钮回调
     * @param btnCloselDes 关闭按钮文字描述
     * @param btnOkDes OK按钮文字描述
     */
    UIHelpClass.prototype.showAffirmTip = function (type, des, callback, btnCloselDes, btnOkDes) {
        var _this = this;
        var overTips = UIManager_1.UIManager.getUI(AffirmTips_1.AffirmTips);
        if (!overTips) {
            UIManager_1.UIManager.openUI(AffirmTips_1.AffirmTips, null, UIManager_1.EPANEL_ZORDER.POPUP, function () {
                _this.showAffirmTip(type, des, callback, btnCloselDes, btnOkDes);
            });
        }
        else {
            overTips.init(type, des, callback, btnCloselDes, btnOkDes);
        }
    };
    UIHelpClass.prototype.closeAffirmTip = function () {
        UIManager_1.UIManager.closeUI(AffirmTips_1.AffirmTips);
    };
    /**
     * 错误弹窗
     * @param shuoMing 错误说明
     * @param biaoTi 标题文字
     * @param tiShi 提示文字
     * @param btnLab 按钮文字
     * @param callBack 回调函数
     * @param isClose 是否可关闭
     */
    UIHelpClass.prototype.showErrorPanel = function (shuoMing, biaoTi, tiShi, btnLab, callBack, isClose) {
        var _this = this;
        if (isClose === void 0) { isClose = false; }
        var errorPanel = UIManager_1.UIManager.getUI(ErrorPanel_1.default);
        if (!errorPanel) {
            UIManager_1.UIManager.openUI(ErrorPanel_1.default, null, UIManager_1.EPANEL_ZORDER.ERROR, function () {
                _this.showErrorPanel(shuoMing, biaoTi, tiShi, btnLab, callBack, isClose);
            });
        }
        else {
            errorPanel.setPanel(shuoMing, biaoTi, tiShi, btnLab, callBack, isClose);
        }
    };
    UIHelpClass.prototype.closeErrorPanel = function () {
        UIManager_1.UIManager.closeUI(ErrorPanel_1.default);
    };
    /**
     * 提交、返回
     */
    UIHelpClass.prototype.showUploadAndReturnPanel = function () {
        UIManager_1.UIManager.showUI(UploadAndReturnPanel_1.default, null, UIManager_1.EPANEL_ZORDER.SUBMISSION);
    };
    UIHelpClass.prototype.closeUploadAndReturnPanel = function () {
        UIManager_1.UIManager.closeUI(UploadAndReturnPanel_1.default);
    };
    UIHelpClass.prototype.showSubmissionPanel = function () {
        UIManager_1.UIManager.showUI(SubmissionPanel_1.default, null, UIManager_1.EPANEL_ZORDER.SUBMISSION);
    };
    UIHelpClass.prototype.closeSubmissionPanel = function () {
        UIManager_1.UIManager.closeUI(SubmissionPanel_1.default);
    };
    UIHelpClass.prototype.showGamePanel = function (callback) {
        UIManager_1.UIManager.openUI(GamePanel_1.default, null, UIManager_1.EPANEL_ZORDER.NORMAL, callback);
    };
    UIHelpClass.prototype.closeGamePanel = function () {
        UIManager_1.UIManager.closeUI(GamePanel_1.default);
    };
    UIHelpClass.prototype.showTeacherPanel = function (callback) {
        UIManager_1.UIManager.openUI(TeacherPanel_1.default, null, UIManager_1.EPANEL_ZORDER.NORMAL, callback);
    };
    UIHelpClass.prototype.closeTeacherPanel = function () {
        UIManager_1.UIManager.closeUI(TeacherPanel_1.default);
    };
    /**
     * 显示遮罩
     * @param isShowLoading 是否显示Loading
     */
    UIHelpClass.prototype.showMask = function (isShowLoading) {
        if (isShowLoading === void 0) { isShowLoading = false; }
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_MASK, true, isShowLoading);
    };
    /**
     * 隐藏遮罩
     */
    UIHelpClass.prototype.closeMask = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_MASK, false);
    };
    /**
     * 显示数据恢复遮罩
     */
    UIHelpClass.prototype.showRecoverMask = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.MASK_RECOVER, true);
    };
    /**
     * 隐藏数据恢复遮罩
     */
    UIHelpClass.prototype.closeRecoverMask = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.MASK_RECOVER, false);
    };
    UIHelpClass._instance = null;
    return UIHelpClass;
}());
exports.UIHelp = UIHelpClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxVSUhlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQWlFO0FBQ2pFLDRFQUF1RTtBQUN2RSxxREFBb0Q7QUFDcEQsOERBQTZEO0FBQzdELDhEQUE2RDtBQUM3RCxrREFBZ0U7QUFDaEUscURBQW9EO0FBQ3BELHFEQUFnRDtBQUNoRCxpREFBZ0Q7QUFDaEQsbURBQThDO0FBQzlDLCtEQUEwRDtBQUMxRCwyQ0FBMEM7QUFDMUMseUVBQW9FO0FBRXBFO0lBQUE7SUFnTkEsQ0FBQztJQTdNaUIsdUJBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDZCQUFPLEdBQWQsVUFBZSxPQUFlO1FBQTlCLGlCQVNDO1FBUkcsSUFBSSxLQUFLLEdBQUcscUJBQVMsQ0FBQyxLQUFLLENBQUMsYUFBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLHFCQUFTLENBQUMsTUFBTSxDQUFDLGFBQUssRUFBRSxJQUFJLEVBQUUseUJBQWEsQ0FBQyxJQUFJLEVBQUU7Z0JBQzlDLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxrQ0FBWSxHQUFuQixVQUNJLElBQVksRUFDWixHQUFnQixFQUNoQixRQUF5QixFQUN6QixRQUFpQixFQUNqQixZQUFzQixFQUN0QixXQUE0QixFQUM1QixPQUF1QjtRQVAzQixpQkFp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UUFBQSxNQUFNLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVQYW5lbCBmcm9tICcuLi8uLi8uLi9nYW1lL3NjcmlwdHMvVUkvcGFuZWwvR2FtZVBhbmVsJztcclxuaW1wb3J0IFRlYWNoZXJQYW5lbCBmcm9tICcuLi8uLi8uLi9nYW1lL3NjcmlwdHMvVUkvcGFuZWwvVGVhY2hlclBhbmVsJztcclxuaW1wb3J0IHsgRnJhbWVNc2dUeXBlIH0gZnJvbSAnLi4vRGF0YS9GcmFtZU1zZ1R5cGUnO1xyXG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XHJcbmltcG9ydCB7IFN5bmNEYXRhTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyJztcclxuaW1wb3J0IHsgRVBBTkVMX1pPUkRFUiwgVUlNYW5hZ2VyIH0gZnJvbSAnLi4vTWFuYWdlci9VSU1hbmFnZXInO1xyXG5pbXBvcnQgeyBBZmZpcm1UaXBzIH0gZnJvbSAnLi4vVUkvUGFuZWwvQWZmaXJtVGlwcyc7XHJcbmltcG9ydCBFcnJvclBhbmVsIGZyb20gJy4uL1VJL1BhbmVsL0Vycm9yUGFuZWwnO1xyXG5pbXBvcnQgeyBPdmVyVGlwcyB9IGZyb20gJy4uL1VJL1BhbmVsL092ZXJUaXBzJztcclxuaW1wb3J0IFN0YXJDb3VudCBmcm9tICcuLi9VSS9QYW5lbC9TdGFyQ291bnQnO1xyXG5pbXBvcnQgU3VibWlzc2lvblBhbmVsIGZyb20gJy4uL1VJL1BhbmVsL1N1Ym1pc3Npb25QYW5lbCc7XHJcbmltcG9ydCB7IFRpcFVJIH0gZnJvbSAnLi4vVUkvUGFuZWwvVGlwVUknO1xyXG5pbXBvcnQgVXBsb2FkQW5kUmV0dXJuUGFuZWwgZnJvbSAnLi4vVUkvUGFuZWwvVXBsb2FkQW5kUmV0dXJuUGFuZWwnO1xyXG5cclxuY2xhc3MgVUlIZWxwQ2xhc3Mge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBVSUhlbHBDbGFzcyA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBVSUhlbHBDbGFzcyB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBVSUhlbHBDbGFzcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgdGlwc+aWh+Wtl+WGheWuuVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1RpcChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdGlwVUkgPSBVSU1hbmFnZXIuZ2V0VUkoVGlwVUkpO1xyXG4gICAgICAgIGlmICghdGlwVUkpIHtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLm9wZW5VSShUaXBVSSwgbnVsbCwgRVBBTkVMX1pPUkRFUi5USVBTLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaXAobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRpcFVJLnNob3dUaXAobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uT5p2fdGlwXHJcbiAgICAgKiBAcGFyYW0gdHlwZSB0aXBz57G75Z6LICAgMDog6ZSZ6K+vICAx77ya562U5a+55LqGICAy77ya6Zev5YWz5oiQ5YqfKOS4gOebtOaYvuekuuS4jeS8muWFs+mXrSlcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgICAgICAgICAgIOaPkOekuuWGheWuuVxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgICAg5Zue6LCD5Ye95pWwXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW5kVGl0bGUgICAgICBlbmTliqjmlYjmj5DnpLrmloflrZdcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTaG93UmVwbGF5ICAgICDmmK/lkKbmmL7npLrph43njqnmjInpkq5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTaG93Q2xvc2UgICAgIOaYr+WQpuaYvuekuuWFs+mXreaMiemSrlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBhdXRvT2ZmICAgICDmmK/lkKboh6rliqjlhbPpl61cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dPdmVyVGlwcyhcclxuICAgICAgICB0eXBlOiBudW1iZXIsXHJcbiAgICAgICAgc3RyOiBzdHJpbmcgPSAnJyxcclxuICAgICAgICBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsLFxyXG4gICAgICAgIGVuZFRpdGxlPzogc3RyaW5nLFxyXG4gICAgICAgIGlzU2hvd1JlcGxheT86IGJvb2xlYW4sXHJcbiAgICAgICAgaXNTaG93Q2xvc2U6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBhdXRvT2ZmOiBib29sZWFuID0gdHJ1ZSxcclxuICAgICkge1xyXG4gICAgICAgIGxldCBvdmVyVGlwcyA9IFVJTWFuYWdlci5nZXRVSShPdmVyVGlwcyk7XHJcbiAgICAgICAgaWYgKCFvdmVyVGlwcykge1xyXG4gICAgICAgICAgICBVSU1hbmFnZXIub3BlblVJKE92ZXJUaXBzLCBudWxsLCBFUEFORUxfWk9SREVSLlBPUFVQLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dPdmVyVGlwcyh0eXBlLCBzdHIsIGNhbGxiYWNrLCBlbmRUaXRsZSwgaXNTaG93UmVwbGF5LCBhdXRvT2ZmKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3ZlclRpcHMuaW5pdCh0eXBlLCBzdHIsIGNhbGxiYWNrLCBlbmRUaXRsZSwgaXNTaG93UmVwbGF5LCBpc1Nob3dDbG9zZSwgYXV0b09mZik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZU92ZXJUaXBzKCkge1xyXG4gICAgICAgIFVJTWFuYWdlci5jbG9zZVVJKE92ZXJUaXBzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYn+e6p+ivhOa1i+mhtemdoijlrabnlJ/oh6rlt7Hlj69HYW1lRGF0YSBTdHVkZW50RGF0YeaVsOaNruiHquWKqOWIt+aWsO+8jOWQjOatpeWImemcgOimgeS8oOWPgilcclxuICAgICAqIEBwYXJhbSBpc1Nob3dSZXBsYXkg5piv5ZCm5pi+56S66YeN546p5oyJ6ZKuXHJcbiAgICAgKiBAcGFyYW0gc3Rhck51bSDmmJ/mlbAgKOS4jeS8oOWPguaVsOWImeS7jlJlcG9ydE1hbmFnZXLph4zlj5blgLwpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93U3RhckNvdW50KGlzU2hvd1JlcGxheT86IGJvb2xlYW4sIHN0YXJOdW0/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3RhckNvdW50ID0gVUlNYW5hZ2VyLmdldFVJKFN0YXJDb3VudCk7XHJcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuc3dlclRpbWVzID4gMikgIHtcclxuICAgICAgICAgICAgc3Rhck51bSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbnN3ZXJUaW1lcyA+IDApIHtcclxuICAgICAgICAgICAgc3Rhck51bSA9IDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3Rhck51bSA9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3RhckNvdW50KSB7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5vcGVuVUkoU3RhckNvdW50LCBudWxsLCBFUEFORUxfWk9SREVSLlBPUFVQLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdGFyQ291bnQoaXNTaG93UmVwbGF5LCBzdGFyTnVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhckNvdW50LnNob3dTdGFycyhpc1Nob3dSZXBsYXksIHN0YXJOdW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VTdGFyQ291bnQoKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmNsb3NlVUkoU3RhckNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS6jOasoeehruiupOahhlxyXG4gICAgICogQHBhcmFtIHR5cGUgdGlwc+exu+WeiyAgMDrlhoXlrrl0aXBzICAgMTrns7vnu590aXBzXHJcbiAgICAgKiBAcGFyYW0gZGVzIHRpcHPmloflrZflhoXlrrlcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayDmjInpkq7lm57osINcclxuICAgICAqIEBwYXJhbSBidG5DbG9zZWxEZXMg5YWz6Zet5oyJ6ZKu5paH5a2X5o+P6L+wXHJcbiAgICAgKiBAcGFyYW0gYnRuT2tEZXMgT0vmjInpkq7mloflrZfmj4/ov7BcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dBZmZpcm1UaXAoXHJcbiAgICAgICAgdHlwZTogbnVtYmVyLFxyXG4gICAgICAgIGRlczogc3RyaW5nLFxyXG4gICAgICAgIGNhbGxiYWNrOiAodHlwZTogbnVtYmVyKSA9PiB2b2lkLFxyXG4gICAgICAgIGJ0bkNsb3NlbERlcz86IHN0cmluZyxcclxuICAgICAgICBidG5Pa0Rlcz86IHN0cmluZyxcclxuICAgICkge1xyXG4gICAgICAgIGxldCBvdmVyVGlwcyA9IFVJTWFuYWdlci5nZXRVSShBZmZpcm1UaXBzKTtcclxuICAgICAgICBpZiAoIW92ZXJUaXBzKSB7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5vcGVuVUkoQWZmaXJtVGlwcywgbnVsbCwgRVBBTkVMX1pPUkRFUi5QT1BVUCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93QWZmaXJtVGlwKHR5cGUsIGRlcywgY2FsbGJhY2ssIGJ0bkNsb3NlbERlcywgYnRuT2tEZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvdmVyVGlwcy5pbml0KHR5cGUsIGRlcywgY2FsbGJhY2ssIGJ0bkNsb3NlbERlcywgYnRuT2tEZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VBZmZpcm1UaXAoKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmNsb3NlVUkoQWZmaXJtVGlwcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDplJnor6/lvLnnqpdcclxuICAgICAqIEBwYXJhbSBzaHVvTWluZyDplJnor6/or7TmmI5cclxuICAgICAqIEBwYXJhbSBiaWFvVGkg5qCH6aKY5paH5a2XXHJcbiAgICAgKiBAcGFyYW0gdGlTaGkg5o+Q56S65paH5a2XXHJcbiAgICAgKiBAcGFyYW0gYnRuTGFiIOaMiemSruaWh+Wtl1xyXG4gICAgICogQHBhcmFtIGNhbGxCYWNrIOWbnuiwg+WHveaVsFxyXG4gICAgICogQHBhcmFtIGlzQ2xvc2Ug5piv5ZCm5Y+v5YWz6ZetXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93RXJyb3JQYW5lbChcclxuICAgICAgICBzaHVvTWluZzogc3RyaW5nLFxyXG4gICAgICAgIGJpYW9UaT86IHN0cmluZyxcclxuICAgICAgICB0aVNoaT86IHN0cmluZyxcclxuICAgICAgICBidG5MYWI/OiBzdHJpbmcsXHJcbiAgICAgICAgY2FsbEJhY2s/OiBGdW5jdGlvbixcclxuICAgICAgICBpc0Nsb3NlOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgZXJyb3JQYW5lbCA9IFVJTWFuYWdlci5nZXRVSShFcnJvclBhbmVsKTtcclxuICAgICAgICBpZiAoIWVycm9yUGFuZWwpIHtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLm9wZW5VSShFcnJvclBhbmVsLCBudWxsLCBFUEFORUxfWk9SREVSLkVSUk9SLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvclBhbmVsKHNodW9NaW5nLCBiaWFvVGksIHRpU2hpLCBidG5MYWIsIGNhbGxCYWNrLCBpc0Nsb3NlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXJyb3JQYW5lbC5zZXRQYW5lbChzaHVvTWluZywgYmlhb1RpLCB0aVNoaSwgYnRuTGFiLCBjYWxsQmFjaywgaXNDbG9zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZUVycm9yUGFuZWwoKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmNsb3NlVUkoRXJyb3JQYW5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmj5DkuqTjgIHov5Tlm55cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dVcGxvYWRBbmRSZXR1cm5QYW5lbCgpIHtcclxuICAgICAgICBVSU1hbmFnZXIuc2hvd1VJKFVwbG9hZEFuZFJldHVyblBhbmVsLCBudWxsLCBFUEFORUxfWk9SREVSLlNVQk1JU1NJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZVVwbG9hZEFuZFJldHVyblBhbmVsKCkge1xyXG4gICAgICAgIFVJTWFuYWdlci5jbG9zZVVJKFVwbG9hZEFuZFJldHVyblBhbmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1N1Ym1pc3Npb25QYW5lbCgpIHtcclxuICAgICAgICBVSU1hbmFnZXIuc2hvd1VJKFN1Ym1pc3Npb25QYW5lbCwgbnVsbCwgRVBBTkVMX1pPUkRFUi5TVUJNSVNTSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VTdWJtaXNzaW9uUGFuZWwoKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmNsb3NlVUkoU3VibWlzc2lvblBhbmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0dhbWVQYW5lbChjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLm9wZW5VSShHYW1lUGFuZWwsIG51bGwsIEVQQU5FTF9aT1JERVIuTk9STUFMLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlR2FtZVBhbmVsKCkge1xyXG4gICAgICAgIFVJTWFuYWdlci5jbG9zZVVJKEdhbWVQYW5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dUZWFjaGVyUGFuZWwoY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIFVJTWFuYWdlci5vcGVuVUkoVGVhY2hlclBhbmVsLCBudWxsLCBFUEFORUxfWk9SREVSLk5PUk1BTCwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZVRlYWNoZXJQYW5lbCgpIHtcclxuICAgICAgICBVSU1hbmFnZXIuY2xvc2VVSShUZWFjaGVyUGFuZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S66YGu572pXHJcbiAgICAgKiBAcGFyYW0gaXNTaG93TG9hZGluZyDmmK/lkKbmmL7npLpMb2FkaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93TWFzayhpc1Nob3dMb2FkaW5nOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLk9OX01BU0ssIHRydWUsIGlzU2hvd0xvYWRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP6YGu572pXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbG9zZU1hc2soKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5PTl9NQVNLLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrmlbDmja7mgaLlpI3pga7nvalcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dSZWNvdmVyTWFzaygpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLk1BU0tfUkVDT1ZFUiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/mlbDmja7mgaLlpI3pga7nvalcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsb3NlUmVjb3Zlck1hc2soKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5NQVNLX1JFQ09WRVIsIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgVUlIZWxwID0gVUlIZWxwQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5f9dT/06tF45iF1u1hFPMw', 'BoundingBoxDemo');
// frame/scripts/Utils/BoundingBoxDemo.ts

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
var BoundingBoxHelp_1 = require("./BoundingBoxHelp");
/**
 * Author: kouyaqi
 * Email: kouyaqi@100tal.com
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * BoundingBoxHelp 的使用例子
 */
var BoundingboxDemo = /** @class */ (function (_super) {
    __extends(BoundingboxDemo, _super);
    function BoundingboxDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bbh = null;
        _this.grs = null;
        return _this;
    }
    BoundingboxDemo.prototype.update = function (dt) {
        this.grs.clear();
        //把边界框绘制出来
        var postions = this.bbh.getBoundingBoxWorldPositions('boundingBox');
        this.polygon(this.grs, postions);
        this.grs.stroke();
    };
    /**
     * 绘制多边形路径，至少3条边
     * @param poss
     */
    BoundingboxDemo.prototype.polygon = function (graphics, poss) {
        if (poss.length < 3)
            return;
        graphics.moveTo(poss[0].x, poss[0].y);
        for (var i = 1; i < poss.length; i++) {
            graphics.lineTo(poss[i].x, poss[i].y);
        }
        graphics.lineTo(poss[0].x, poss[0].y);
    };
    __decorate([
        property(BoundingBoxHelp_1.default)
    ], BoundingboxDemo.prototype, "bbh", void 0);
    __decorate([
        property(cc.Graphics)
    ], BoundingboxDemo.prototype, "grs", void 0);
    BoundingboxDemo = __decorate([
        ccclass
    ], BoundingboxDemo);
    return BoundingboxDemo;
}(cc.Component));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxCb3VuZGluZ0JveERlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBRWhEOzs7R0FHRztBQUVHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOztHQUVHO0FBRUg7SUFBOEIsbUNBQVk7SUFBMUM7UUFBQSxxRUE0QkM7UUExQlcsU0FBRyxHQUFvQixJQUFJLENBQUM7UUFHNUIsU0FBRyxHQUFnQixJQUFJLENBQUM7O0lBdUJwQyxDQUFDO0lBckJHLGdDQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVqQixVQUFVO1FBQ1YsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssaUNBQU8sR0FBZixVQUFnQixRQUFxQixFQUFFLElBQWU7UUFDbEQsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPO1FBQzVCLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNELFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQXpCRDtRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDO2dEQUNVO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0RBQ1U7SUFMOUIsZUFBZTtRQURwQixPQUFPO09BQ0YsZUFBZSxDQTRCcEI7SUFBRCxzQkFBQztDQTVCRCxBQTRCQyxDQTVCNkIsRUFBRSxDQUFDLFNBQVMsR0E0QnpDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvdW5kaW5nQm94SGVscCBmcm9tICcuL0JvdW5kaW5nQm94SGVscCc7XG5cbi8qKlxuICogQXV0aG9yOiBrb3V5YXFpXG4gKiBFbWFpbDoga291eWFxaUAxMDB0YWwuY29tXG4gKi9cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiBCb3VuZGluZ0JveEhlbHAg55qE5L2/55So5L6L5a2QXG4gKi9cbkBjY2NsYXNzXG5jbGFzcyBCb3VuZGluZ2JveERlbW8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShCb3VuZGluZ0JveEhlbHApXG4gICAgcHJpdmF0ZSBiYmg6IEJvdW5kaW5nQm94SGVscCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXG4gICAgcHJpdmF0ZSBncnM6IGNjLkdyYXBoaWNzID0gbnVsbDtcblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLmdycy5jbGVhcigpO1xuXG4gICAgICAgIC8v5oqK6L6555WM5qGG57uY5Yi25Ye65p2lXG4gICAgICAgIGxldCBwb3N0aW9ucyA9IHRoaXMuYmJoLmdldEJvdW5kaW5nQm94V29ybGRQb3NpdGlvbnMoJ2JvdW5kaW5nQm94Jyk7XG4gICAgICAgIHRoaXMucG9seWdvbih0aGlzLmdycywgcG9zdGlvbnMpO1xuICAgICAgICB0aGlzLmdycy5zdHJva2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnu5jliLblpJrovrnlvaLot6/lvoTvvIzoh7PlsJEz5p2h6L65XG4gICAgICogQHBhcmFtIHBvc3NcbiAgICAgKi9cbiAgICBwcml2YXRlIHBvbHlnb24oZ3JhcGhpY3M6IGNjLkdyYXBoaWNzLCBwb3NzOiBjYy5WZWMyW10pIHtcbiAgICAgICAgaWYgKHBvc3MubGVuZ3RoIDwgMykgcmV0dXJuO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocG9zc1swXS54LCBwb3NzWzBdLnkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhwb3NzW2ldLngsIHBvc3NbaV0ueSk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHBvc3NbMF0ueCwgcG9zc1swXS55KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/Tools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c9926FhnVH2Z4Gs2ZXOlDV', 'Tools');
// frame/scripts/Utils/Tools.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tools = exports.ArtMoveParam = void 0;
/**美术提供的位移动画参数 */
var ArtMoveParam = /** @class */ (function () {
    /**
     * @param t 时刻，ms
     * @param p 位置
     */
    function ArtMoveParam(t, p) {
        /**时刻，ms */
        this.time = 0;
        /**位置 */
        this.pos = cc.Vec3.ZERO;
        this.time = t;
        this.pos = p;
    }
    return ArtMoveParam;
}());
exports.ArtMoveParam = ArtMoveParam;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Tools = /** @class */ (function () {
    function Tools() {
    }
    /**
     * 播放spine动画
     * @param {*} sp_Skeleton 动画文件
     * @param {*} animName 动作名称
     * @param {*} loop 是否循环
     * @param {*} callback 播放完毕回调
     */
    Tools.playSpine = function (sp_Skeleton, animName, loop, callback) {
        // sp_Skeleton.premultipliedAlpha=false;//这样设置在cocos creator中才能有半透明效果
        if (callback === void 0) { callback = null; }
        // let spine = this.node.getComponent(sp.Skeleton);
        var track = sp_Skeleton.setAnimation(0, animName, loop);
        if (track) {
            // 注册动画的结束回调
            sp_Skeleton.setCompleteListener(function (trackEntry, loopCount) {
                var name = trackEntry.animation ? trackEntry.animation.name : '';
                if (name === animName && callback) {
                    callback(); // 动画结束后执行自己的逻辑
                }
            });
        }
    };
    //参数获取
    Tools.getQueryVariable = function (variable) {
        var query = window.location.href;
        var vars = query.split('?');
        if (vars.length < 2)
            return false;
        var vars = vars[1].split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return false;
    };
    /**
     * 使节点直接运行美术提供的位移动画参数，
     * (节点当前位置对应美术参数列表最后一个参数位置，
     * 函数内部会做相对位置的处理)
     * @param node
     * @param params
     * @param endCbk
     */
    Tools.runArtMoveSequence = function (node, params, endCbk) {
        if (endCbk === void 0) { endCbk = null; }
        var nodeOriPos = node.position;
        //节点实际坐标与美术参数坐标的差
        var gapPos = nodeOriPos.sub(params[params.length - 1].pos);
        function transArtPosToNodePos(artPos) {
            return artPos.add(gapPos);
        }
        node.setPosition(transArtPosToNodePos(params[0].pos));
        if (params.length <= 1) {
            if (endCbk)
                endCbk();
            return;
        }
        var actArray = [];
        for (var i = 1; i < params.length - 1; i++) {
            var duration = (params[i].time - params[i - 1].time) * 0.001;
            var p = transArtPosToNodePos(params[i].pos);
            actArray.push(cc.moveTo(duration, cc.v2(p.x, p.y)));
        }
        if (endCbk) {
            actArray.push(cc.callFunc(endCbk));
        }
        node.runAction(cc.sequence(actArray));
    };
    /**获取当前时间戳，毫秒 */
    Tools.getNowTimeMS = function () {
        return new Date().getTime();
    };
    /**获取当前时间戳，秒 */
    Tools.getNowTimeS = function () {
        return Math.floor(new Date().getTime() * 0.001);
    };
    /**
     * 格式化时间， eg: 100 ->  '01:40'
     * @param time 时长，秒
     */
    Tools.getFormatTime = function (time) {
        var min = Math.floor(time / 60);
        if (min < 10) {
            min = '0' + min;
        }
        var sec = time % 60;
        if (sec < 10) {
            sec = '0' + sec;
        }
        return min + ':' + sec;
    };
    Tools = __decorate([
        ccclass
    ], Tools);
    return Tools;
}());
exports.Tools = Tools;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxUb29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7Ozs7Ozs7OztBQUVuRyxpQkFBaUI7QUFDakI7SUFNSTs7O09BR0c7SUFDSCxzQkFBWSxDQUFTLEVBQUUsQ0FBVTtRQVRqQyxXQUFXO1FBQ1gsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixRQUFRO1FBQ1IsUUFBRyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBT3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSxvQ0FBWTtBQWdCbkIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtJQW9HQSxDQUFDO0lBbkdHOzs7Ozs7T0FNRztJQUNXLGVBQVMsR0FBdkIsVUFBd0IsV0FBd0IsRUFBRSxRQUFnQixFQUFFLElBQWEsRUFBRSxRQUF5QjtRQUN4RyxxRUFBcUU7UUFEVSx5QkFBQSxFQUFBLGVBQXlCO1FBR3hHLG1EQUFtRDtRQUNuRCxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEQsSUFBSSxLQUFLLEVBQUU7WUFDUCxZQUFZO1lBQ1osV0FBVyxDQUFDLG1CQUFtQixDQUFDLFVBQUMsVUFBVSxFQUFFLFNBQVM7Z0JBQ2xELElBQUksSUFBSSxHQUFHLFVBQVUs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SSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGdCQUFnQjtJQUNGLGtCQUFZLEdBQTFCO1FBQ0ksT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO0lBQ0QsaUJBQVcsR0FBekI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ1csbUJBQWEsR0FBM0IsVUFBNEIsSUFBWTtRQUNwQyxJQUFJLEdBQUcsR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLEdBQUcsR0FBRyxFQUFFLEVBQUU7WUFDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNuQjtRQUNELElBQUksR0FBRyxHQUFRLElBQUksR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxHQUFHLEdBQUcsRUFBRSxFQUFFO1lBQ1YsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDbkI7UUFDRCxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFuR1EsS0FBSztRQURqQixPQUFPO09BQ0ssS0FBSyxDQW9HakI7SUFBRCxZQUFDO0NBcEdELEFBb0dDLElBQUE7QUFwR1ksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG4vKirnvo7mnK/mj5DkvpvnmoTkvY3np7vliqjnlLvlj4LmlbAgKi9cbmV4cG9ydCBjbGFzcyBBcnRNb3ZlUGFyYW0ge1xuICAgIC8qKuaXtuWIu++8jG1zICovXG4gICAgdGltZTogbnVtYmVyID0gMDtcbiAgICAvKirkvY3nva4gKi9cbiAgICBwb3M6IGNjLlZlYzMgPSBjYy5WZWMzLlpFUk87XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdCDml7bliLvvvIxtc1xuICAgICAqIEBwYXJhbSBwIOS9jee9rlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHQ6IG51bWJlciwgcDogY2MuVmVjMykge1xuICAgICAgICB0aGlzLnRpbWUgPSB0O1xuICAgICAgICB0aGlzLnBvcyA9IHA7XG4gICAgfVxufVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFRvb2xzIHtcbiAgICAvKipcbiAgICAgKiDmkq3mlL5zcGluZeWKqOeUu1xuICAgICAqIEBwYXJhbSB7Kn0gc3BfU2tlbGV0b24g5Yqo55S75paH5Lu2XG4gICAgICogQHBhcmFtIHsqfSBhbmltTmFtZSDliqjkvZzlkI3np7BcbiAgICAgKiBAcGFyYW0geyp9IGxvb3Ag5piv5ZCm5b6q546vXG4gICAgICogQHBhcmFtIHsqfSBjYWxsYmFjayDmkq3mlL7lrozmr5Xlm57osINcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHBsYXlTcGluZShzcF9Ta2VsZXRvbjogc3AuU2tlbGV0b24sIGFuaW1OYW1lOiBzdHJpbmcsIGxvb3A6IGJvb2xlYW4sIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgLy8gc3BfU2tlbGV0b24ucHJlbXVsdGlwbGllZEFscGhhPWZhbHNlOy8v6L+Z5qC36K6+572u5ZyoY29jb3MgY3JlYXRvcuS4reaJjeiDveacieWNiumAj+aYjuaViOaenFxuXG4gICAgICAgIC8vIGxldCBzcGluZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICBsZXQgdHJhY2sgPSBzcF9Ta2VsZXRvbi5zZXRBbmltYXRpb24oMCwgYW5pbU5hbWUsIGxvb3ApO1xuICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICAgIC8vIOazqOWGjOWKqOeUu+eahOe7k+adn+Wbnuiwg1xuICAgICAgICAgICAgc3BfU2tlbGV0b24uc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2tFbnRyeSwgbG9vcENvdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSB0cmFja0VudHJ5LmFuaW1hdGlvbiA/IHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgOiAnJztcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gYW5pbU5hbWUgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTsgLy8g5Yqo55S757uT5p2f5ZCO5omn6KGM6Ieq5bex55qE6YC76L6RXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+WPguaVsOiOt+WPllxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UXVlcnlWYXJpYWJsZSh2YXJpYWJsZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgdmFycyA9IHF1ZXJ5LnNwbGl0KCc/Jyk7XG4gICAgICAgIGlmICh2YXJzLmxlbmd0aCA8IDIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHZhcnMgPSB2YXJzWzFdLnNwbGl0KCcmJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIGlmIChwYWlyWzBdID09IHZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhaXJbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS9v+iKgueCueebtOaOpei/kOihjOe+juacr+aPkOS+m+eahOS9jeenu+WKqOeUu+WPguaVsO+8jFxuICAgICAqICjoioLngrnlvZPliY3kvY3nva7lr7nlupTnvo7mnK/lj4LmlbDliJfooajmnIDlkI7kuIDkuKrlj4LmlbDkvY3nva7vvIxcbiAgICAgKiDlh73mlbDlhoXpg6jkvJrlgZrnm7jlr7nkvY3nva7nmoTlpITnkIYpXG4gICAgICogQHBhcmFtIG5vZGVcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHBhcmFtIGVuZENia1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcnVuQXJ0TW92ZVNlcXVlbmNlKG5vZGU6IGNjLk5vZGUsIHBhcmFtczogQXJyYXk8QXJ0TW92ZVBhcmFtPiwgZW5kQ2JrOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgbGV0IG5vZGVPcmlQb3MgPSBub2RlLnBvc2l0aW9uO1xuICAgICAgICAvL+iKgueCueWunumZheWdkOagh+S4jue+juacr+WPguaVsOWdkOagh+eahOW3rlxuICAgICAgICBsZXQgZ2FwUG9zID0gbm9kZU9yaVBvcy5zdWIocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXS5wb3MpO1xuICAgICAgICBmdW5jdGlvbiB0cmFuc0FydFBvc1RvTm9kZVBvcyhhcnRQb3M6IGNjLlZlYzMpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnRQb3MuYWRkKGdhcFBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih0cmFuc0FydFBvc1RvTm9kZVBvcyhwYXJhbXNbMF0ucG9zKSk7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgaWYgKGVuZENiaykgZW5kQ2JrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWN0QXJyYXk6IEFycmF5PGNjLkZpbml0ZVRpbWVBY3Rpb24+ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGFyYW1zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gKHBhcmFtc1tpXS50aW1lIC0gcGFyYW1zW2kgLSAxXS50aW1lKSAqIDAuMDAxO1xuICAgICAgICAgICAgbGV0IHAgPSB0cmFuc0FydFBvc1RvTm9kZVBvcyhwYXJhbXNbaV0ucG9zKTtcbiAgICAgICAgICAgIGFjdEFycmF5LnB1c2goY2MubW92ZVRvKGR1cmF0aW9uLCBjYy52MihwLngsIHAueSkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5kQ2JrKSB7XG4gICAgICAgICAgICBhY3RBcnJheS5wdXNoKGNjLmNhbGxGdW5jKGVuZENiaykpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0QXJyYXkpKTtcbiAgICB9XG5cbiAgICAvKirojrflj5blvZPliY3ml7bpl7TmiLPvvIzmr6vnp5IgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldE5vd1RpbWVNUygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIC8qKuiOt+WPluW9k+WJjeaXtumXtOaIs++8jOenkiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Tm93VGltZVMoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpICogMC4wMDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagvOW8j+WMluaXtumXtO+8jCBlZzogMTAwIC0+ICAnMDE6NDAnXG4gICAgICogQHBhcmFtIHRpbWUg5pe26ZW/77yM56eSXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRGb3JtYXRUaW1lKHRpbWU6IG51bWJlcikge1xuICAgICAgICBsZXQgbWluOiBhbnkgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XG4gICAgICAgIGlmIChtaW4gPCAxMCkge1xuICAgICAgICAgICAgbWluID0gJzAnICsgbWluO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWM6IGFueSA9IHRpbWUgJSA2MDtcbiAgICAgICAgaWYgKHNlYyA8IDEwKSB7XG4gICAgICAgICAgICBzZWMgPSAnMCcgKyBzZWM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbiArICc6JyArIHNlYztcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Data/FrameMsgType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '132eegjAf1ENIev+X8ptATq', 'FrameMsgType');
// frame/scripts/Data/FrameMsgType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameMsgType = void 0;
var FrameMsgType = /** @class */ (function () {
    function FrameMsgType() {
    }
    FrameMsgType.ON_EDIT_STATE_SWITCHING = 'ON_EDIT_STATE_SWITCHING';
    // 数据同步类型
    FrameMsgType.ON_TOUCH_CLICK = 'ON_TOUCH_CLICK';
    FrameMsgType.ON_TOUCH_START = 'ON_TOUCH_START';
    FrameMsgType.ON_TOUCH_MOVE = 'ON_TOUCH_MOVE';
    FrameMsgType.ON_TOUCH_END = 'ON_TOUCH_END';
    // 心跳
    FrameMsgType.ON_HEART_BREAK = 'ON_HEART_BREAK';
    // 数据恢复
    FrameMsgType.ON_RECOVERY_DATA = 'ON_RECOVERY_DATA';
    // 再玩一次
    FrameMsgType.REPLAY_START = 'REPLAY_START';
    // 进入附加题
    FrameMsgType.ENTER_ADDITION = 'ENTER_ADDITION';
    // 题干语音播放完成
    FrameMsgType.COMPLETE_TRUMPET = 'COMPLETE_TRUMPET';
    /**  全局遮罩 */
    FrameMsgType.ON_MASK = 'ON_MASK';
    // 数据恢复遮罩
    FrameMsgType.MASK_RECOVER = 'MASK_RECOVER';
    // OverTips关闭按钮
    FrameMsgType.OVERTIPS_CLOSE = 'OVERTIPS_CLOSE';
    // AffirmTips确认按钮
    FrameMsgType.AFFIRMTIPS_SURE = 'AFFIRMTIPS_SURE';
    // AffirmTips取消按钮
    FrameMsgType.AFFIRMTIPS_CANCEL = 'AFFIRMTIPS_CANCEL';
    // 第一次接收到心跳
    FrameMsgType.ON_FIRST_BREAK = 'ON_FIRST_BREAK';
    // TeacherPanel的loading层开关
    FrameMsgType.TEACHER_PANEL_LOADING = 'TEACHER_PANEL_LOADING';
    // 预加载-Panel Ready
    FrameMsgType.PRELOAD_GAME_SHOW = 'PRELOAD_GAME_SHOW';
    /*****************************************************************/
    /** SDK内部事件 */
    FrameMsgType.ACTION_SYNC_RECEIVE = 'action_sync_receive'; //游戏操作交互同步  //交互游戏暂不处理此消息
    FrameMsgType.DISABLED = 'disabled'; //是否可以操作游戏 0禁用 1开启 默认1  //交互游戏暂不处理此消息
    FrameMsgType.RELOAD = 'reload'; //重新加载游戏  //在index.html监听
    FrameMsgType.DATA_RECOVERY = 'data_recovery'; //游戏数据恢复
    FrameMsgType.STOP = 'stop'; //停止游戏（游戏需要返回finish）
    FrameMsgType.INIT = 'init'; //恢复游戏到初始化界面
    FrameMsgType.THRESHHOLD = 'threshhold'; //游戏消息频率（默认100ms/次）
    FrameMsgType.PLAYBGM = 'play_bgm'; //播放背景音
    FrameMsgType.RESUMEBGM = 'resume_bgm'; //恢复背景音
    FrameMsgType.STOPBGM = 'stop_bgm'; //停止背景音
    FrameMsgType.PLAYAUDIOTITLE = 'play_audio_title'; //播放题干音
    FrameMsgType.STOPAUDIOTITLE = 'stop_audio_title'; //停止题干音
    FrameMsgType.STOPALLAUDIO = 'stop_all_audio'; //停止语音（包括题干）
    FrameMsgType.STOPALLEFFECT = 'stop_all_effect'; //停止音效
    FrameMsgType.STOPALL = 'stop_all'; //停止所有（不包括背景）
    return FrameMsgType;
}());
exports.FrameMsgType = FrameMsgType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXERhdGFcXEZyYW1lTXNnVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBdURBLENBQUM7SUF0RDBCLG9DQUF1QixHQUFHLHlCQUF5QixDQUFDO0lBRTNFLFNBQVM7SUFDYywyQkFBYyxHQUFHLGdCQUFnQixDQUFDO0lBQ2xDLDJCQUFjLEdBQUcsZ0JBQWdCLENBQUM7SUFDbEMsMEJBQWEsR0FBRyxlQUFlLENBQUM7SUFDaEMseUJBQVksR0FBRyxjQUFjLENBQUM7SUFDckQsS0FBSztJQUNrQiwyQkFBYyxHQUFHLGdCQUFnQixDQUFDO0lBQ3pELE9BQU87SUFDZ0IsNkJBQWdCLEdBQUcsa0JBQWtCLENBQUM7SUFDN0QsT0FBTztJQUNnQix5QkFBWSxHQUFHLGNBQWMsQ0FBQztJQUNyRCxRQUFRO0lBQ2UsMkJBQWMsR0FBRyxnQkFBZ0IsQ0FBQztJQUN6RCxXQUFXO0lBQ1ksNkJBQWdCLEdBQUcsa0JBQWtCLENBQUM7SUFDN0QsWUFBWTtJQUNXLG9CQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNDLFNBQVM7SUFDYyx5QkFBWSxHQUFHLGNBQWMsQ0FBQztJQUNyRCxlQUFlO0lBQ1EsMkJBQWMsR0FBRyxnQkFBZ0IsQ0FBQztJQUN6RCxpQkFBaUI7SUFDTSw0QkFBZSxHQUFHLGlCQUFpQixDQUFDO0lBQzNELGlCQUFpQjtJQUNNLDhCQUFpQixHQUFHLG1CQUFtQixDQUFDO0lBQy9ELFdBQVc7SUFDWSwyQkFBYyxHQUFHLGdCQUFnQixDQUFDO0lBQ3pELDBCQUEwQjtJQUNILGtDQUFxQixHQUFHLHVCQUF1QixDQUFDO0lBQ3ZFLGtCQUFrQjtJQUNLLDhCQUFpQixHQUFHLG1CQUFtQixDQUFDO0lBRS9ELG1FQUFtRTtJQUNuRSxjQUFjO0lBQ1MsZ0NBQW1CLEdBQUcscUJBQXFCLENBQUMsQ0FBQyx5QkFBeUI7SUFDdEUscUJBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQyxxQ0FBcUM7SUFDNUQsbUJBQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyx5QkFBeUI7SUFDNUMsMEJBQWEsR0FBRyxlQUFlLENBQUMsQ0FBQyxRQUFRO0lBQ3pDLGlCQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsb0JBQW9CO0lBQ25DLGlCQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsWUFBWTtJQUMzQix1QkFBVSxHQUFHLFlBQVksQ0FBQyxDQUFDLG1CQUFtQjtJQUU5QyxvQkFBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLE9BQU87SUFDN0Isc0JBQVMsR0FBRyxZQUFZLENBQUMsQ0FBQyxPQUFPO0lBQ2pDLG9CQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsT0FBTztJQUM3QiwyQkFBYyxHQUFHLGtCQUFrQixDQUFDLENBQUMsT0FBTztJQUM1QywyQkFBYyxHQUFHLGtCQUFrQixDQUFDLENBQUMsT0FBTztJQUM1Qyx5QkFBWSxHQUFHLGdCQUFnQixDQUFDLENBQUMsWUFBWTtJQUM3QywwQkFBYSxHQUFHLGlCQUFpQixDQUFDLENBQUMsTUFBTTtJQUN6QyxvQkFBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLGFBQWE7SUFHOUQsbUJBQUM7Q0F2REQsQUF1REMsSUFBQTtBQXZEWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGcmFtZU1zZ1R5cGUge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT05fRURJVF9TVEFURV9TV0lUQ0hJTkcgPSAnT05fRURJVF9TVEFURV9TV0lUQ0hJTkcnO1xuXG4gICAgLy8g5pWw5o2u5ZCM5q2l57G75Z6LXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPTl9UT1VDSF9DTElDSyA9ICdPTl9UT1VDSF9DTElDSyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPTl9UT1VDSF9TVEFSVCA9ICdPTl9UT1VDSF9TVEFSVCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPTl9UT1VDSF9NT1ZFID0gJ09OX1RPVUNIX01PVkUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT05fVE9VQ0hfRU5EID0gJ09OX1RPVUNIX0VORCc7XG4gICAgLy8g5b+D6LezXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPTl9IRUFSVF9CUkVBSyA9ICdPTl9IRUFSVF9CUkVBSyc7XG4gICAgLy8g5pWw5o2u5oGi5aSNXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPTl9SRUNPVkVSWV9EQVRBID0gJ09OX1JFQ09WRVJZX0RBVEEnO1xuICAgIC8vIOWGjeeOqeS4gOasoVxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVQTEFZX1NUQVJUID0gJ1JFUExBWV9TVEFSVCc7XG4gICAgLy8g6L+b5YWl6ZmE5Yqg6aKYXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFTlRFUl9BRERJVElPTiA9ICdFTlRFUl9BRERJVElPTic7XG4gICAgLy8g6aKY5bmy6K+t6Z+z5pKt5pS+5a6M5oiQXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDT01QTEVURV9UUlVNUEVUID0gJ0NPTVBMRVRFX1RSVU1QRVQnO1xuICAgIC8qKiAg5YWo5bGA6YGu572pICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPTl9NQVNLID0gJ09OX01BU0snO1xuICAgIC8vIOaVsOaNruaBouWkjemBrue9qVxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTUFTS19SRUNPVkVSID0gJ01BU0tfUkVDT1ZFUic7XG4gICAgLy8gT3ZlclRpcHPlhbPpl63mjInpkq5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9WRVJUSVBTX0NMT1NFID0gJ09WRVJUSVBTX0NMT1NFJztcbiAgICAvLyBBZmZpcm1UaXBz56Gu6K6k5oyJ6ZKuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBRkZJUk1USVBTX1NVUkUgPSAnQUZGSVJNVElQU19TVVJFJztcbiAgICAvLyBBZmZpcm1UaXBz5Y+W5raI5oyJ6ZKuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBRkZJUk1USVBTX0NBTkNFTCA9ICdBRkZJUk1USVBTX0NBTkNFTCc7XG4gICAgLy8g56ys5LiA5qyh5o6l5pS25Yiw5b+D6LezXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPTl9GSVJTVF9CUkVBSyA9ICdPTl9GSVJTVF9CUkVBSyc7XG4gICAgLy8gVGVhY2hlclBhbmVs55qEbG9hZGluZ+WxguW8gOWFs1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEVBQ0hFUl9QQU5FTF9MT0FESU5HID0gJ1RFQUNIRVJfUEFORUxfTE9BRElORyc7XG4gICAgLy8g6aKE5Yqg6L29LVBhbmVsIFJlYWR5XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQUkVMT0FEX0dBTUVfU0hPVyA9ICdQUkVMT0FEX0dBTUVfU0hPVyc7XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoqIFNES+WGhemDqOS6i+S7tiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQUNUSU9OX1NZTkNfUkVDRUlWRSA9ICdhY3Rpb25fc3luY19yZWNlaXZlJzsgLy/muLjmiI/mk43kvZzkuqTkupLlkIzmraUgIC8v5Lqk5LqS5ri45oiP5pqC5LiN5aSE55CG5q2k5raI5oGvXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBESVNBQkxFRCA9ICdkaXNhYmxlZCc7IC8v5piv5ZCm5Y+v5Lul5pON5L2c5ri45oiPIDDnpoHnlKggMeW8gOWQryDpu5jorqQxICAvL+S6pOS6kua4uOaIj+aaguS4jeWkhOeQhuatpOa2iOaBr1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVMT0FEID0gJ3JlbG9hZCc7IC8v6YeN5paw5Yqg6L295ri45oiPICAvL+WcqGluZGV4Lmh0bWznm5HlkKxcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERBVEFfUkVDT1ZFUlkgPSAnZGF0YV9yZWNvdmVyeSc7IC8v5ri45oiP5pWw5o2u5oGi5aSNXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTVE9QID0gJ3N0b3AnOyAvL+WBnOatoua4uOaIj++8iOa4uOaIj+mcgOimgei/lOWbnmZpbmlzaO+8iVxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSU5JVCA9ICdpbml0JzsgLy/mgaLlpI3muLjmiI/liLDliJ3lp4vljJbnlYzpnaJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRIUkVTSEhPTEQgPSAndGhyZXNoaG9sZCc7IC8v5ri45oiP5raI5oGv6aKR546H77yI6buY6K6kMTAwbXMv5qyh77yJXG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBMQVlCR00gPSAncGxheV9iZ20nOyAvL+aSreaUvuiDjOaZr+mfs1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVTVU1FQkdNID0gJ3Jlc3VtZV9iZ20nOyAvL+aBouWkjeiDjOaZr+mfs1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1RPUEJHTSA9ICdzdG9wX2JnbSc7IC8v5YGc5q2i6IOM5pmv6Z+zXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQTEFZQVVESU9USVRMRSA9ICdwbGF5X2F1ZGlvX3RpdGxlJzsgLy/mkq3mlL7popjlubLpn7NcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNUT1BBVURJT1RJVExFID0gJ3N0b3BfYXVkaW9fdGl0bGUnOyAvL+WBnOatoumimOW5sumfs1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1RPUEFMTEFVRElPID0gJ3N0b3BfYWxsX2F1ZGlvJzsgLy/lgZzmraLor63pn7PvvIjljIXmi6zpopjlubLvvIlcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNUT1BBTExFRkZFQ1QgPSAnc3RvcF9hbGxfZWZmZWN0JzsgLy/lgZzmraLpn7PmlYhcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNUT1BBTEwgPSAnc3RvcF9hbGwnOyAvL+WBnOatouaJgOacie+8iOS4jeWMheaLrOiDjOaZr++8iVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/HitTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc84066lYNFeaHvvm4jg8ve', 'HitTest');
// frame/scripts/Utils/HitTest.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitTest = void 0;
var HitTest = /** @class */ (function () {
    function HitTest() {
    }
    /**
     * 点是否在图形内
     * @param pos 世界坐标
     * @param rect 碰撞节点
     */
    HitTest.posInRect = function (pos, rect) {
        var p = rect.parent.convertToWorldSpaceAR(rect.position);
        var lb = cc.v2(p.x - (rect.width * rect.scale) / 2, p.y - (rect.height * rect.scale) / 2);
        var rt = cc.v2(p.x + (rect.width * rect.scale) / 2, p.y + (rect.height * rect.scale) / 2);
        var b = pos.x >= lb.x && pos.y >= lb.y && pos.x <= rt.x && pos.y <= rt.y;
        return b;
    };
    /**
     * 图形点击检测, 锚点必须为左上角，或者中心。
     * 所检测的图片不可打包图集
     * @param posw 点击的世界坐标
     * @param sprite 点击的图片
     * @param accurate 是否开始像素精确判定
     */
    HitTest.imgHitTest = function (posw, sprite, accurate) {
        if (accurate === void 0) { accurate = false; }
        if (accurate) {
            var spf = sprite.spriteFrame;
            var pos = sprite.node.convertToNodeSpaceAR(posw);
            if (sprite.node.anchorX == 0 && sprite.node.anchorY == 1) {
                pos.y = -pos.y;
            }
            else if (sprite.node.anchorX == 0.5 && sprite.node.anchorY == 0.5) {
                var w = sprite.node.width;
                var h = sprite.node.height;
                pos.x = w / 2 + pos.x;
                if (pos.y > 0) {
                    pos.y = h / 2 - pos.y;
                }
                else {
                    pos.y = h / 2 + Math.abs(pos.y);
                }
            }
            var tex = spf.getTexture();
            var cvs = document.createElement('canvas');
            var ctx = cvs.getContext('2d');
            cvs.width = tex.width;
            cvs.height = tex.height;
            ctx.drawImage(tex.getHtmlElementObj(), 0, 0, tex.width, tex.height, 0, 0, tex.width / 1, tex.height / 1);
            var ctx = cvs.getContext('2d');
            var data = ctx.getImageData(pos.x, pos.y, 1, 1).data;
            console.log(data);
            return data[3] != 0;
        }
        else {
            this.posInRect(posw, sprite.node);
        }
    };
    /**
     * 点是否在多边形内
     */
    HitTest.polygonInside = function (point, polygon) {
        var b = false;
        var cn = 0;
        for (var i = 0, l = polygon.length - 1; i < l; i++) {
            var p1 = polygon[i];
            var p2 = polygon[i + 1];
            if ((p1.y < point.y && p2.y > point.y) || (p1.y > point.y && p2.y < point.y)) {
                var vt = (point.y - p1.y) / (p2.y - p1.y);
                if (point.x < p1.x + vt * (p2.x - p1.x)) {
                    ++cn;
                }
            }
        }
        // 判断交点个数是奇数还是偶数，奇数在图内，偶数在图外，如果有特殊图形，则需要特殊判断
        b = cn % 2 == 1;
        return b;
    };
    return HitTest;
}());
exports.HitTest = HitTest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxIaXRUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUF5RUEsQ0FBQztJQXhFRzs7OztPQUlHO0lBQ1csaUJBQVMsR0FBdkIsVUFBd0IsR0FBWSxFQUFFLElBQWE7UUFDL0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RSxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7O09BTUc7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TSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hELElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFFLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3JDLEVBQUUsRUFBRSxDQUFDO2lCQUNSO2FBQ0o7U0FDSjtRQUNELDRDQUE0QztRQUM1QyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0wsY0FBQztBQUFELENBekVBLEFBeUVDLElBQUE7QUF6RVksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSGl0VGVzdCB7XG4gICAgLyoqXG4gICAgICog54K55piv5ZCm5Zyo5Zu+5b2i5YaFXG4gICAgICogQHBhcmFtIHBvcyDkuJbnlYzlnZDmoIdcbiAgICAgKiBAcGFyYW0gcmVjdCDnorDmkp7oioLngrlcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHBvc0luUmVjdChwb3M6IGNjLlZlYzIsIHJlY3Q6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHAgPSByZWN0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocmVjdC5wb3NpdGlvbik7XG4gICAgICAgIGxldCBsYiA9IGNjLnYyKHAueCAtIChyZWN0LndpZHRoICogcmVjdC5zY2FsZSkgLyAyLCBwLnkgLSAocmVjdC5oZWlnaHQgKiByZWN0LnNjYWxlKSAvIDIpO1xuICAgICAgICBsZXQgcnQgPSBjYy52MihwLnggKyAocmVjdC53aWR0aCAqIHJlY3Quc2NhbGUpIC8gMiwgcC55ICsgKHJlY3QuaGVpZ2h0ICogcmVjdC5zY2FsZSkgLyAyKTtcbiAgICAgICAgbGV0IGIgPSBwb3MueCA+PSBsYi54ICYmIHBvcy55ID49IGxiLnkgJiYgcG9zLnggPD0gcnQueCAmJiBwb3MueSA8PSBydC55O1xuICAgICAgICByZXR1cm4gYjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlm77lvaLngrnlh7vmo4DmtYssIOmUmueCueW/hemhu+S4uuW3puS4iuinku+8jOaIluiAheS4reW/g+OAglxuICAgICAqIOaJgOajgOa1i+eahOWbvueJh+S4jeWPr+aJk+WMheWbvumbhlxuICAgICAqIEBwYXJhbSBwb3N3IOeCueWHu+eahOS4lueVjOWdkOagh1xuICAgICAqIEBwYXJhbSBzcHJpdGUg54K55Ye755qE5Zu+54mHXG4gICAgICogQHBhcmFtIGFjY3VyYXRlIOaYr+WQpuW8gOWni+WDj+e0oOeyvuehruWIpOWumlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgaW1nSGl0VGVzdChwb3N3OiBjYy5WZWMyLCBzcHJpdGU6IGNjLlNwcml0ZSwgYWNjdXJhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoYWNjdXJhdGUpIHtcbiAgICAgICAgICAgIGxldCBzcGYgPSBzcHJpdGUuc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICBsZXQgcG9zID0gc3ByaXRlLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zdyk7XG4gICAgICAgICAgICBpZiAoc3ByaXRlLm5vZGUuYW5jaG9yWCA9PSAwICYmIHNwcml0ZS5ub2RlLmFuY2hvclkgPT0gMSkge1xuICAgICAgICAgICAgICAgIHBvcy55ID0gLXBvcy55O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzcHJpdGUubm9kZS5hbmNob3JYID09IDAuNSAmJiBzcHJpdGUubm9kZS5hbmNob3JZID09IDAuNSkge1xuICAgICAgICAgICAgICAgIGxldCB3ID0gc3ByaXRlLm5vZGUud2lkdGg7XG4gICAgICAgICAgICAgICAgbGV0IGggPSBzcHJpdGUubm9kZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB3IC8gMiArIHBvcy54O1xuICAgICAgICAgICAgICAgIGlmIChwb3MueSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSBoIC8gMiAtIHBvcy55O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcy55ID0gaCAvIDIgKyBNYXRoLmFicyhwb3MueSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHRleCA9IHNwZi5nZXRUZXh0dXJlKCk7XG4gICAgICAgICAgICBsZXQgY3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICB2YXIgY3R4ID0gY3ZzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBjdnMud2lkdGggPSB0ZXgud2lkdGg7XG4gICAgICAgICAgICBjdnMuaGVpZ2h0ID0gdGV4LmhlaWdodDtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGV4LmdldEh0bWxFbGVtZW50T2JqKCksIDAsIDAsIHRleC53aWR0aCwgdGV4LmhlaWdodCwgMCwgMCwgdGV4LndpZHRoIC8gMSwgdGV4LmhlaWdodCAvIDEpO1xuICAgICAgICAgICAgdmFyIGN0eCA9IGN2cy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKHBvcy54LCBwb3MueSwgMSwgMSkuZGF0YTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGF0YVszXSAhPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NJblJlY3QocG9zdywgc3ByaXRlLm5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog54K55piv5ZCm5Zyo5aSa6L655b2i5YaFXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBwb2x5Z29uSW5zaWRlKHBvaW50OiBjYy5WZWMyLCBwb2x5Z29uOiBjYy5WZWMyW10pOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGIgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNuID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBwb2x5Z29uLmxlbmd0aCAtIDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwMSA9IHBvbHlnb25baV07XG4gICAgICAgICAgICBsZXQgcDIgPSBwb2x5Z29uW2kgKyAxXTtcbiAgICAgICAgICAgIGlmICgocDEueSA8IHBvaW50LnkgJiYgcDIueSA+IHBvaW50LnkpIHx8IChwMS55ID4gcG9pbnQueSAmJiBwMi55IDwgcG9pbnQueSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdnQgPSAocG9pbnQueSAtIHAxLnkpIC8gKHAyLnkgLSBwMS55KTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnQueCA8IHAxLnggKyB2dCAqIChwMi54IC0gcDEueCkpIHtcbiAgICAgICAgICAgICAgICAgICAgKytjbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Yik5pat5Lqk54K55Liq5pWw5piv5aWH5pWw6L+Y5piv5YG25pWw77yM5aWH5pWw5Zyo5Zu+5YaF77yM5YG25pWw5Zyo5Zu+5aSW77yM5aaC5p6c5pyJ54m55q6K5Zu+5b2i77yM5YiZ6ZyA6KaB54m55q6K5Yik5patXG4gICAgICAgIGIgPSBjbiAlIDIgPT0gMTtcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/MathUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa960SepSxHGal1p7xVIQi8', 'MathUtils');
// frame/scripts/Utils/MathUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtils = void 0;
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.getInstance = function () {
        if (this.instance == null) {
            this.instance = new MathUtils();
        }
        return this.instance;
    };
    /**
     弧度制转换为角度值
     @param radian 弧度制
     @returns {number}
     */
    MathUtils.prototype.getAngle = function (radian) {
        return (180 * radian) / Math.PI;
    };
    /**
     角度值转换为弧度制
     @param angle
     */
    MathUtils.prototype.getRadian = function (angle) {
        return (angle / 180) * Math.PI;
    };
    /**
     获取两点间弧度
     @param p1X
     @param p1Y
     @param p2X
     @param p2Y
     @returns {number}
     */
    MathUtils.prototype.getRadian2 = function (p1X, p1Y, p2X, p2Y) {
        var xdis = p2X - p1X;
        var ydis = p2Y - p1Y;
        return Math.atan2(ydis, xdis);
    };
    /**
     获取两点间距离
     @param p1
     @param p1
     * @returns {number}
     */
    MathUtils.prototype.getDistance = function (p1, p2) {
        var disX = p2.x - p1.x;
        var disY = p2.y - p1.y;
        var disQ = disX * disX + disY * disY;
        return Math.sqrt(disQ);
    };
    /**
     获取一个区间的随机数
     @param $from 最小值
     @param $end 最大值
     @returns {number}
     */
    MathUtils.prototype.limit = function ($from, $end) {
        $from = Math.min($from, $end);
        $end = Math.max($from, $end);
        var range = $end - $from;
        return $from + Math.random() * range;
    };
    /**
     获取一个区间的随机数(帧数)
     @param $from 最小值
     @param $end 最大值
     @returns {number}
     */
    MathUtils.prototype.limitInteger = function ($from, $end) {
        return Math.round(this.limit($from, $end));
    };
    /**
     在一个数组中随机获取一个元素
     @param arr 数组
     @returns {any} 随机出来的结果
     */
    MathUtils.prototype.randomArray = function (arr) {
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
    };
    /**
     点到直线的垂点
     */
    MathUtils.prototype.SagPoint = function (x, y, sp, ep) {
        var se = (sp.x - ep.x) * (sp.x - ep.x) + (sp.y - ep.y) * (sp.y - ep.y); //线段两点距离平方
        var p = (x - sp.x) * (ep.x - sp.x) + (y - sp.y) * (ep.y - sp.y); //向量点乘=|a|*|b|*cosA
        var r = p / se; //r即点到线段的投影长度与线段长度比
        var outx = sp.x + r * (ep.x - sp.x); //垂足x
        var outy = sp.y + r * (ep.y - sp.y); //垂足y
        var point = new cc.Vec3(outx, outy);
        return point;
    };
    /**
     求延长线上的某点，第一象限
     */
    MathUtils.prototype.extendedLinePoint = function (p1, p2, dis) {
        var lab = 0;
        var x;
        var y;
        // lab = Math.sqrt(Math.abs((p2.x - p1.x) * (p2.x - p1.x)) + Math.abs((p2.y - p1.y) * (p2.y - p1.y)));
        lab = this.getDistance(p1, p2);
        if (p2.x > p1.x && p2.y > p1.y) {
            x = (dis / lab) * Math.abs(p1.x - p2.x) + p2.x;
            y = (dis / lab) * Math.abs(p1.y - p2.y) + p2.y;
        }
        else if (p2.x < p1.x && p2.y > p1.y) {
            x = (-dis / lab) * Math.abs(p1.x - p2.x) + p2.x;
            y = (dis / lab) * Math.abs(p1.y - p2.y) + p2.y;
        }
        else if (p2.x < p1.x && p2.y < p1.y) {
            x = (-dis / lab) * Math.abs(p1.x - p2.x) + p2.x;
            y = (-dis / lab) * Math.abs(p1.y - p2.y) + p2.y;
        }
        else if (p2.x > p1.x && p2.y < p1.y) {
            x = (dis / lab) * Math.abs(p1.x - p2.x) + p2.x;
            y = (-dis / lab) * Math.abs(p1.y - p2.y) + p2.y;
        }
        var p = new cc.Vec3(x, y);
        return p;
    };
    /**
     获得两点的角度 1~4象限
     @param {cc.Vec3} p1
     @param {cc.Vec3} p2
     */
    MathUtils.prototype.getTwoPointsRadian1 = function (p1, p2) {
        var x = Math.abs(p1.x - p2.x);
        var y = Math.abs(p1.y - p2.y);
        var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        var cos = y / z;
        var radina = Math.acos(cos); //用反三角函数求弧度
        var angle = Math.floor(180 / (Math.PI / radina)); //将弧度转换成角度
        if (p2.x > p1.x && p2.y < p1.y) {
            //鼠标在第四象限
            angle = 180 - angle;
        }
        if (p2.x == p1.x && p2.y > p1.y) {
            //鼠标在y轴负方向上
            angle = 180;
        }
        if (p2.x > p1.x && p2.y == p1.y) {
            //鼠标在x轴正方向上
            angle = 90;
        }
        if (p2.x < p1.x && p2.y < p1.y) {
            //鼠标在第三象限
            angle = 180 + angle;
        }
        if (p2.x < p1.x && p2.y == p1.y) {
            //鼠标在x轴负方向
            angle = 270;
        }
        if (p2.x < p1.x && p2.y > p1.y) {
            //鼠标在第二象限
            angle = 360 - angle;
        }
        return angle;
    };
    /**
     获得两点的角度  无论正反旋转
     @param {cc.Vec3} p1
     @param {cc.Vec3} p2
     */
    MathUtils.prototype.getTwoPointsRadian2 = function (p1, p2) {
        var o = p1.x - p2.x;
        var a = p1.y - p2.y;
        var r = (Math.atan2(a, o) * -180) / Math.PI - 90;
        return r;
    };
    /**
     取两条直线的交点
     @param p1          // 直线1点1
     @param p2          // 直线1点2
     @param p3          // 直线2点1
     @param p4          // 直线2点2
     */
    MathUtils.prototype.fingCrossPoint = function (p1, p2, p3, p4) {
        var a1 = p2.y - p1.y;
        var b1 = p1.x - p2.x;
        var c1 = p1.x * p2.y - p2.x * p1.y;
        var a2 = p4.y - p3.y;
        var b2 = p3.x - p4.x;
        var c2 = p3.x * p4.y - p4.x * p3.y;
        var det = a1 * b2 - a2 * b1;
        if (det == 0) {
            return null;
        }
        var x = (c1 * b2 - c2 * b1) / det;
        var y = (a1 * c2 - a2 * c1) / det;
        var p = new cc.Vec3(Math.floor(x), Math.floor(y));
        return p;
    };
    /**
     * 用于浮点数相加  解决浮点数相加不准确问题
     * @param arg1
     * @param arg2
     */
    MathUtils.prototype.accAdd = function (arg1, arg2) {
        var r1 = 0, r2 = 0, m = 0, c = 0;
        try {
            r1 = arg1.toString().split('.')[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2));
        if (c > 0) {
            var cm = Math.pow(10, c);
            if (r1 > r2) {
                arg1 = Number(arg1.toString().replace('.', ''));
                arg2 = Number(arg2.toString().replace('.', '')) * cm;
            }
            else {
                arg1 = Number(arg1.toString().replace('.', '')) * cm;
                arg2 = Number(arg2.toString().replace('.', ''));
            }
        }
        else {
            arg1 = Number(arg1.toString().replace('.', ''));
            arg2 = Number(arg2.toString().replace('.', ''));
        }
        return (arg1 + arg2) / m;
    };
    /**
     * 浮点数相减
     * @param arg1
     * @param arg2
     */
    MathUtils.prototype.accSub = function (arg1, arg2) {
        var r1 = 0, r2 = 0, m = 0, n = 0;
        try {
            r1 = arg1.toString().split('.')[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
        n = r1 >= r2 ? r1 : r2;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    };
    /**
     * 浮点数相乘
     * @param arg1
     * @param arg2
     */
    MathUtils.prototype.accMul = function (arg1, arg2) {
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try {
            m += s1.split('.')[1].length;
        }
        catch (e) { }
        try {
            m += s2.split('.')[1].length;
        }
        catch (e) { }
        return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m);
    };
    /**
     * 浮点数相除
     * @param arg1
     * @param arg2
     */
    MathUtils.prototype.accDiv = function (arg1, arg2) {
        var t1 = 0, t2 = 0, r1 = 0, r2 = 0;
        try {
            t1 = arg1.toString().split('.')[1].length;
        }
        catch (e) { }
        try {
            t2 = arg2.toString().split('.')[1].length;
        }
        catch (e) { }
        r1 = Number(arg1.toString().replace('.', ''));
        r2 = Number(arg2.toString().replace('.', ''));
        return (r1 / r2) * Math.pow(10, t2 - t1);
    };
    /**
     线段中点
     * @param {cc.Vec3} p1
     * @param {cc.Vec3} p2
     * @returns {cc.Vec3}
     * @memberof MathUtils
     */
    MathUtils.prototype.getCenterPosition = function (p1, p2) {
        var pos = cc.v3((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
        return pos;
    };
    return MathUtils;
}());
exports.MathUtils = MathUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxNYXRoVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFVSTtJQUFlLENBQUM7SUFQVCxxQkFBVyxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFJRDs7OztPQUlHO0lBQ0ksNEJBQVEsR0FBZixVQUFnQixNQUFjO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsS0FBYTtRQUMxQixPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSw4QkFBVSxHQUFqQixVQUFrQixHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVcsRUFBRSxHQUFXO1FBQ2hFLElBQUksSUFBSSxHQUFXLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDN0IsSUFBSSxJQUFJLEdBQVcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLCtCQUFXLEdBQWxCLFVBQW1CLEVBQVcsRUFBRSxFQUFXO1FBQ3ZDLElBQUksSUFBSSxHQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLElBQUksR0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENB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QUUsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQzVCLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsRDthQUFNLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNuQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsRDthQUFNLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNuQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ25EO2FBQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ25DLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksdUNBQW1CLEdBQTFCLFVBQTJCLEVBQVcsRUFBRSxFQUFXO1FBQy9DLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5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R0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQzdDO1FBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtRQUNkLElBQUk7WUFDQSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDN0M7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO1FBQ2QsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0kscUNBQWlCLEdBQXhCLFVBQXlCLEVBQVcsRUFBRSxFQUFXO1FBQzdDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDTCxnQkFBQztBQUFELENBbFVBLEFBa1VDLElBQUE7QUFsVVksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWF0aFV0aWxzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTWF0aFV0aWxzO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1hdGhVdGlscygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIC8qKlxuICAgICDlvKfluqbliLbovazmjaLkuLrop5LluqblgLxcbiAgICAgQHBhcmFtIHJhZGlhbiDlvKfluqbliLZcbiAgICAgQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QW5nbGUocmFkaWFuOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKDE4MCAqIHJhZGlhbikgLyBNYXRoLlBJO1xuICAgIH1cblxuICAgIC8qKlxuICAgICDop5LluqblgLzovazmjaLkuLrlvKfluqbliLZcbiAgICAgQHBhcmFtIGFuZ2xlXG4gICAgICovXG4gICAgcHVibGljIGdldFJhZGlhbihhbmdsZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIChhbmdsZSAvIDE4MCkgKiBNYXRoLlBJO1xuICAgIH1cblxuICAgIC8qKlxuICAgICDojrflj5bkuKTngrnpl7TlvKfluqZcbiAgICAgQHBhcmFtIHAxWFxuICAgICBAcGFyYW0gcDFZXG4gICAgIEBwYXJhbSBwMlhcbiAgICAgQHBhcmFtIHAyWVxuICAgICBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRSYWRpYW4yKHAxWDogbnVtYmVyLCBwMVk6IG51bWJlciwgcDJYOiBudW1iZXIsIHAyWTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIHhkaXM6IG51bWJlciA9IHAyWCAtIHAxWDtcbiAgICAgICAgdmFyIHlkaXM6IG51bWJlciA9IHAyWSAtIHAxWTtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoeWRpcywgeGRpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOiOt+WPluS4pOeCuemXtOi3neemu1xuICAgICBAcGFyYW0gcDFcbiAgICAgQHBhcmFtIHAxXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RGlzdGFuY2UocDE6IGNjLlZlYzMsIHAyOiBjYy5WZWMzKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIGRpc1g6IG51bWJlciA9IHAyLnggLSBwMS54O1xuICAgICAgICB2YXIgZGlzWTogbnVtYmVyID0gcDIueSAtIHAxLnk7XG4gICAgICAgIHZhciBkaXNROiBudW1iZXIgPSBkaXNYICogZGlzWCArIGRpc1kgKiBkaXNZO1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGRpc1EpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICDojrflj5bkuIDkuKrljLrpl7TnmoTpmo/mnLrmlbBcbiAgICAgQHBhcmFtICRmcm9tIOacgOWwj+WAvFxuICAgICBAcGFyYW0gJGVuZCDmnIDlpKflgLxcbiAgICAgQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBwdWJsaWMgbGltaXQoJGZyb206IG51bWJlciwgJGVuZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgJGZyb20gPSBNYXRoLm1pbigkZnJvbSwgJGVuZCk7XG4gICAgICAgICRlbmQgPSBNYXRoLm1heCgkZnJvbSwgJGVuZCk7XG4gICAgICAgIHZhciByYW5nZTogbnVtYmVyID0gJGVuZCAtICRmcm9tO1xuICAgICAgICByZXR1cm4gJGZyb20gKyBNYXRoLnJhbmRvbSgpICogcmFuZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOiOt+WPluS4gOS4quWMuumXtOeahOmaj+acuuaVsCjluKfmlbApXG4gICAgIEBwYXJhbSAkZnJvbSDmnIDlsI/lgLxcbiAgICAgQHBhcmFtICRlbmQg5pyA5aSn5YC8XG4gICAgIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcHVibGljIGxpbWl0SW50ZWdlcigkZnJvbTogbnVtYmVyLCAkZW5kOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmxpbWl0KCRmcm9tLCAkZW5kKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOWcqOS4gOS4quaVsOe7hOS4remaj+acuuiOt+WPluS4gOS4quWFg+e0oFxuICAgICBAcGFyYW0gYXJyIOaVsOe7hFxuICAgICBAcmV0dXJucyB7YW55fSDpmo/mnLrlh7rmnaXnmoTnu5PmnpxcbiAgICAgKi9cbiAgICBwdWJsaWMgcmFuZG9tQXJyYXkoYXJyOiBBcnJheTxhbnk+KTogYW55IHtcbiAgICAgICAgdmFyIGluZGV4OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGFycltpbmRleF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOeCueWIsOebtOe6v+eahOWegueCuVxuICAgICAqL1xuICAgIHB1YmxpYyBTYWdQb2ludCh4LCB5LCBzcCwgZXApOiBjYy5WZWMzIHtcbiAgICAgICAgdmFyIHNlOiBudW1iZXIgPSAoc3AueCAtIGVwLngpICogKHNwLnggLSBlcC54KSArIChzcC55IC0gZXAueSkgKiAoc3AueSAtIGVwLnkpOyAvL+e6v+auteS4pOeCuei3neemu+W5s+aWuVxuICAgICAgICB2YXIgcDogbnVtYmVyID0gKHggLSBzcC54KSAqIChlcC54IC0gc3AueCkgKyAoeSAtIHNwLnkpICogKGVwLnkgLSBzcC55KTsgLy/lkJHph4/ngrnkuZg9fGF8KnxifCpjb3NBXG4gICAgICAgIHZhciByOiBudW1iZXIgPSBwIC8gc2U7IC8vcuWNs+eCueWIsOe6v+auteeahOaKleW9semVv+W6puS4jue6v+autemVv+W6puavlFxuICAgICAgICB2YXIgb3V0eDogbnVtYmVyID0gc3AueCArIHIgKiAoZXAueCAtIHNwLngpOyAvL+Wegui2s3hcbiAgICAgICAgdmFyIG91dHk6IG51bWJlciA9IHNwLnkgKyByICogKGVwLnkgLSBzcC55KTsgLy/lnoLotrN5XG4gICAgICAgIHZhciBwb2ludCA9IG5ldyBjYy5WZWMzKG91dHgsIG91dHkpO1xuICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOaxguW7tumVv+e6v+S4iueahOafkOeCue+8jOesrOS4gOixoemZkFxuICAgICAqL1xuICAgIHB1YmxpYyBleHRlbmRlZExpbmVQb2ludChwMTogY2MuVmVjMywgcDI6IGNjLlZlYzMsIGRpczogbnVtYmVyKTogY2MuVmVjMyB7XG4gICAgICAgIHZhciBsYWIgPSAwO1xuICAgICAgICB2YXIgeDogbnVtYmVyO1xuICAgICAgICB2YXIgeTogbnVtYmVyO1xuICAgICAgICAvLyBsYWIgPSBNYXRoLnNxcnQoTWF0aC5hYnMoKHAyLnggLSBwMS54KSAqIChwMi54IC0gcDEueCkpICsgTWF0aC5hYnMoKHAyLnkgLSBwMS55KSAqIChwMi55IC0gcDEueSkpKTtcbiAgICAgICAgbGFiID0gdGhpcy5nZXREaXN0YW5jZShwMSwgcDIpO1xuICAgICAgICBpZiAocDIueCA+IHAxLnggJiYgcDIueSA+IHAxLnkpIHtcbiAgICAgICAgICAgIHggPSAoZGlzIC8gbGFiKSAqIE1hdGguYWJzKHAxLnggLSBwMi54KSArIHAyLng7XG4gICAgICAgICAgICB5ID0gKGRpcyAvIGxhYikgKiBNYXRoLmFicyhwMS55IC0gcDIueSkgKyBwMi55O1xuICAgICAgICB9IGVsc2UgaWYgKHAyLnggPCBwMS54ICYmIHAyLnkgPiBwMS55KSB7XG4gICAgICAgICAgICB4ID0gKC1kaXMgLyBsYWIpICogTWF0aC5hYnMocDEueCAtIHAyLngpICsgcDIueDtcbiAgICAgICAgICAgIHkgPSAoZGlzIC8gbGFiKSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSArIHAyLnk7XG4gICAgICAgIH0gZWxzZSBpZiAocDIueCA8IHAxLnggJiYgcDIueSA8IHAxLnkpIHtcbiAgICAgICAgICAgIHggPSAoLWRpcyAvIGxhYikgKiBNYXRoLmFicyhwMS54IC0gcDIueCkgKyBwMi54O1xuICAgICAgICAgICAgeSA9ICgtZGlzIC8gbGFiKSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSArIHAyLnk7XG4gICAgICAgIH0gZWxzZSBpZiAocDIueCA+IHAxLnggJiYgcDIueSA8IHAxLnkpIHtcbiAgICAgICAgICAgIHggPSAoZGlzIC8gbGFiKSAqIE1hdGguYWJzKHAxLnggLSBwMi54KSArIHAyLng7XG4gICAgICAgICAgICB5ID0gKC1kaXMgLyBsYWIpICogTWF0aC5hYnMocDEueSAtIHAyLnkpICsgcDIueTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcCA9IG5ldyBjYy5WZWMzKHgsIHkpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAg6I635b6X5Lik54K555qE6KeS5bqmIDF+NOixoemZkFxuICAgICBAcGFyYW0ge2NjLlZlYzN9IHAxXG4gICAgIEBwYXJhbSB7Y2MuVmVjM30gcDIgXG4gICAgICovXG4gICAgcHVibGljIGdldFR3b1BvaW50c1JhZGlhbjEocDE6IGNjLlZlYzMsIHAyOiBjYy5WZWMzKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIHggPSBNYXRoLmFicyhwMS54IC0gcDIueCk7XG4gICAgICAgIHZhciB5ID0gTWF0aC5hYnMocDEueSAtIHAyLnkpO1xuICAgICAgICB2YXIgeiA9IE1hdGguc3FydChNYXRoLnBvdyh4LCAyKSArIE1hdGgucG93KHksIDIpKTtcbiAgICAgICAgdmFyIGNvcyA9IHkgLyB6O1xuICAgICAgICB2YXIgcmFkaW5hID0gTWF0aC5hY29zKGNvcyk7IC8v55So5Y+N5LiJ6KeS5Ye95pWw5rGC5byn5bqmXG4gICAgICAgIHZhciBhbmdsZSA9IE1hdGguZmxvb3IoMTgwIC8gKE1hdGguUEkgLyByYWRpbmEpKTsgLy/lsIblvKfluqbovazmjaLmiJDop5LluqZcblxuICAgICAgICBpZiAocDIueCA+IHAxLnggJiYgcDIueSA8IHAxLnkpIHtcbiAgICAgICAgICAgIC8v6byg5qCH5Zyo56ys5Zub6LGh6ZmQXG4gICAgICAgICAgICBhbmdsZSA9IDE4MCAtIGFuZ2xlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHAyLnggPT0gcDEueCAmJiBwMi55ID4gcDEueSkge1xuICAgICAgICAgICAgLy/pvKDmoIflnKh56L206LSf5pa55ZCR5LiKXG4gICAgICAgICAgICBhbmdsZSA9IDE4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwMi54ID4gcDEueCAmJiBwMi55ID09IHAxLnkpIHtcbiAgICAgICAgICAgIC8v6byg5qCH5ZyoeOi9tOato+aWueWQkeS4ilxuICAgICAgICAgICAgYW5nbGUgPSA5MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwMi54IDwgcDEueCAmJiBwMi55IDwgcDEueSkge1xuICAgICAgICAgICAgLy/pvKDmoIflnKjnrKzkuInosaHpmZBcbiAgICAgICAgICAgIGFuZ2xlID0gMTgwICsgYW5nbGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocDIueCA8IHAxLnggJiYgcDIueSA9PSBwMS55KSB7XG4gICAgICAgICAgICAvL+m8oOagh+WcqHjovbTotJ/mlrnlkJFcbiAgICAgICAgICAgIGFuZ2xlID0gMjcwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHAyLnggPCBwMS54ICYmIHAyLnkgPiBwMS55KSB7XG4gICAgICAgICAgICAvL+m8oOagh+WcqOesrOS6jOixoemZkFxuICAgICAgICAgICAgYW5nbGUgPSAzNjAgLSBhbmdsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYW5nbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOiOt+W+l+S4pOeCueeahOinkuW6piAg5peg6K665q2j5Y+N5peL6L2sXG4gICAgIEBwYXJhbSB7Y2MuVmVjM30gcDFcbiAgICAgQHBhcmFtIHtjYy5WZWMzfSBwMiBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0VHdvUG9pbnRzUmFkaWFuMihwMTogY2MuVmVjMywgcDI6IGNjLlZlYzMpOiBudW1iZXIge1xuICAgICAgICBsZXQgbyA9IHAxLnggLSBwMi54O1xuICAgICAgICBsZXQgYSA9IHAxLnkgLSBwMi55O1xuICAgICAgICBsZXQgciA9IChNYXRoLmF0YW4yKGEsIG8pICogLTE4MCkgLyBNYXRoLlBJIC0gOTA7XG4gICAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8qKlxuICAgICDlj5bkuKTmnaHnm7Tnur/nmoTkuqTngrlcbiAgICAgQHBhcmFtIHAxICAgICAgICAgIC8vIOebtOe6vzHngrkxXG4gICAgIEBwYXJhbSBwMiAgICAgICAgICAvLyDnm7Tnur8x54K5MlxuICAgICBAcGFyYW0gcDMgICAgICAgICAgLy8g55u057q/MueCuTFcbiAgICAgQHBhcmFtIHA0ICAgICAgICAgIC8vIOebtOe6vzLngrkyXG4gICAgICovXG4gICAgcHVibGljIGZpbmdDcm9zc1BvaW50KHAxOiBjYy5WZWMzLCBwMjogY2MuVmVjMywgcDM6IGNjLlZlYzMsIHA0OiBjYy5WZWMzKTogY2MuVmVjMyB7XG4gICAgICAgIHZhciBhMSA9IHAyLnkgLSBwMS55O1xuICAgICAgICB2YXIgYjEgPSBwMS54IC0gcDIueDtcbiAgICAgICAgdmFyIGMxID0gcDEueCAqIHAyLnkgLSBwMi54ICogcDEueTtcbiAgICAgICAgdmFyIGEyID0gcDQueSAtIHAzLnk7XG4gICAgICAgIHZhciBiMiA9IHAzLnggLSBwNC54O1xuICAgICAgICB2YXIgYzIgPSBwMy54ICogcDQueSAtIHA0LnggKiBwMy55O1xuICAgICAgICB2YXIgZGV0ID0gYTEgKiBiMiAtIGEyICogYjE7XG4gICAgICAgIGlmIChkZXQgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHggPSAoYzEgKiBiMiAtIGMyICogYjEpIC8gZGV0O1xuICAgICAgICB2YXIgeSA9IChhMSAqIGMyIC0gYTIgKiBjMSkgLyBkZXQ7XG4gICAgICAgIHZhciBwOiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoTWF0aC5mbG9vcih4KSwgTWF0aC5mbG9vcih5KSk7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeUqOS6jua1rueCueaVsOebuOWKoCAg6Kej5Yaz5rWu54K55pWw55u45Yqg5LiN5YeG56Gu6Zeu6aKYXG4gICAgICogQHBhcmFtIGFyZzFcbiAgICAgKiBAcGFyYW0gYXJnMlxuICAgICAqL1xuICAgIHB1YmxpYyBhY2NBZGQoYXJnMTogbnVtYmVyLCBhcmcyOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHIxID0gMCxcbiAgICAgICAgICAgIHIyID0gMCxcbiAgICAgICAgICAgIG0gPSAwLFxuICAgICAgICAgICAgYyA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByMSA9IGFyZzEudG9TdHJpbmcoKS5zcGxpdCgnLicpWzFdLmxlbmd0aDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcjEgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByMiA9IGFyZzIudG9TdHJpbmcoKS5zcGxpdCgnLicpWzFdLmxlbmd0aDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcjIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGMgPSBNYXRoLmFicyhyMSAtIHIyKTtcbiAgICAgICAgbSA9IE1hdGgucG93KDEwLCBNYXRoLm1heChyMSwgcjIpKTtcbiAgICAgICAgaWYgKGMgPiAwKSB7XG4gICAgICAgICAgICB2YXIgY20gPSBNYXRoLnBvdygxMCwgYyk7XG4gICAgICAgICAgICBpZiAocjEgPiByMikge1xuICAgICAgICAgICAgICAgIGFyZzEgPSBOdW1iZXIoYXJnMS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpO1xuICAgICAgICAgICAgICAgIGFyZzIgPSBOdW1iZXIoYXJnMi50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpICogY207XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFyZzEgPSBOdW1iZXIoYXJnMS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpICogY207XG4gICAgICAgICAgICAgICAgYXJnMiA9IE51bWJlcihhcmcyLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmcxID0gTnVtYmVyKGFyZzEudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJycpKTtcbiAgICAgICAgICAgIGFyZzIgPSBOdW1iZXIoYXJnMi50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYXJnMSArIGFyZzIpIC8gbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmta7ngrnmlbDnm7jlh49cbiAgICAgKiBAcGFyYW0gYXJnMVxuICAgICAqIEBwYXJhbSBhcmcyXG4gICAgICovXG4gICAgcHVibGljIGFjY1N1YihhcmcxOiBudW1iZXIsIGFyZzI6IG51bWJlcikge1xuICAgICAgICB2YXIgcjEgPSAwLFxuICAgICAgICAgICAgcjIgPSAwLFxuICAgICAgICAgICAgbSA9IDAsXG4gICAgICAgICAgICBuID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHIxID0gYXJnMS50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByMSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHIyID0gYXJnMi50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByMiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgbSA9IE1hdGgucG93KDEwLCBNYXRoLm1heChyMSwgcjIpKTsgLy9sYXN0IG1vZGlmeSBieSBkZWVrYSAvL+WKqOaAgeaOp+WItueyvuW6pumVv+W6plxuICAgICAgICBuID0gcjEgPj0gcjIgPyByMSA6IHIyO1xuICAgICAgICByZXR1cm4gKChhcmcxICogbSAtIGFyZzIgKiBtKSAvIG0pLnRvRml4ZWQobik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5rWu54K55pWw55u45LmYXG4gICAgICogQHBhcmFtIGFyZzFcbiAgICAgKiBAcGFyYW0gYXJnMlxuICAgICAqL1xuICAgIHB1YmxpYyBhY2NNdWwoYXJnMTogbnVtYmVyLCBhcmcyOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIG0gPSAwLFxuICAgICAgICAgICAgczEgPSBhcmcxLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBzMiA9IGFyZzIudG9TdHJpbmcoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG0gKz0gczEuc3BsaXQoJy4nKVsxXS5sZW5ndGg7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtICs9IHMyLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICByZXR1cm4gKE51bWJlcihzMS5yZXBsYWNlKCcuJywgJycpKSAqIE51bWJlcihzMi5yZXBsYWNlKCcuJywgJycpKSkgLyBNYXRoLnBvdygxMCwgbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5rWu54K55pWw55u46ZmkXG4gICAgICogQHBhcmFtIGFyZzFcbiAgICAgKiBAcGFyYW0gYXJnMlxuICAgICAqL1xuICAgIHB1YmxpYyBhY2NEaXYoYXJnMTogbnVtYmVyLCBhcmcyOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHQxID0gMCxcbiAgICAgICAgICAgIHQyID0gMCxcbiAgICAgICAgICAgIHIxID0gMCxcbiAgICAgICAgICAgIHIyID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHQxID0gYXJnMS50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdDIgPSBhcmcyLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXS5sZW5ndGg7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHIxID0gTnVtYmVyKGFyZzEudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJycpKTtcbiAgICAgICAgcjIgPSBOdW1iZXIoYXJnMi50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpO1xuICAgICAgICByZXR1cm4gKHIxIC8gcjIpICogTWF0aC5wb3coMTAsIHQyIC0gdDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICDnur/mrrXkuK3ngrlcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzN9IHAxXG4gICAgICogQHBhcmFtIHtjYy5WZWMzfSBwMlxuICAgICAqIEByZXR1cm5zIHtjYy5WZWMzfVxuICAgICAqIEBtZW1iZXJvZiBNYXRoVXRpbHNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q2VudGVyUG9zaXRpb24ocDE6IGNjLlZlYzMsIHAyOiBjYy5WZWMzKTogY2MuVmVjMyB7XG4gICAgICAgIGxldCBwb3MgPSBjYy52MygocDEueCArIHAyLngpIC8gMiwgKHAxLnkgKyBwMi55KSAvIDIpO1xuICAgICAgICByZXR1cm4gcG9zO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1fbe+gSexDOJnHjY6RnoVI', 'StarCount');
// frame/scripts/UI/Panel/StarCount.ts

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
var ConstValue_1 = require("../../../../game/scripts/Data/ConstValue");
var EditorManager_1 = require("../../../../game/scripts/Manager/EditorManager");
var ReportManager_1 = require("../../Manager/ReportManager");
var Tools_1 = require("../../Utils/Tools");
var UIHelp_1 = require("../../Utils/UIHelp");
var BaseFrameUI_1 = require("../BaseFrameUI");
var SoundManager_1 = require("./../../Manager/SoundManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StarCount = /** @class */ (function (_super) {
    __extends(StarCount, _super);
    function StarCount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sp_star1 = null;
        _this.sp_star2 = null;
        _this.sp_star3 = null;
        _this.sp_star_en1 = null;
        _this.sp_star_en2 = null;
        _this.sp_star_en3 = null;
        _this.btn_replay = null;
        _this.btn_additional = null;
        _this.audioList = ['settle_star1', 'settle_star1', 'settle_star2', 'settle_star3'];
        _this.ani_enter_list = ['1X_kaishi', '1X_kaishi', '2xing_kaishi', '3xing_kaishi'];
        _this.ani_idle_list = ['1X_xunhuan', '1X_xunhuan', '2xing_xunhuan', '3xing_xunhuan'];
        _this.ani_en_list = ['1xing_citiao', '1xing_citiao', '2xing_kaishi', '3xing_kaishi'];
        _this.btn_pos_list = [cc.v2(0, -399), cc.v2(0, -399), cc.v2(0, -364), cc.v2(0, -312)];
        return _this;
    }
    StarCount.prototype.onLoad = function () {
    };
    /**
     * @param isShowReplay 是否显示重玩按钮
     * @param starNum 星数 (不传参数则从ReportManager里取值)
     */
    StarCount.prototype.showStars = function (isShowReplay, starNum) {
        var _this = this;
        var star = 0;
        if (void 0 === starNum || null === starNum) {
            star = ReportManager_1.ReportManager.getStarCount();
        }
        else {
            star = starNum;
        }
        SoundManager_1.SoundManager.playEffect(this.audioList[star], false);
        UIHelp_1.UIHelp.closeMask();
        var btn_node = null;
        if (EditorManager_1.EditorManager.editorData.additional.length > 0 && ReportManager_1.ReportManager.isPassGame() && !ReportManager_1.ReportManager.isPassAdditonal()) {
            this.btn_additional.active = true;
            this.btn_additional.setPosition(this.btn_pos_list[star]);
            this.btn_additional.setScale(0.01);
            btn_node = this.btn_additional;
        }
        else if (ReportManager_1.ReportManager.isPassGame() && ReportManager_1.ReportManager.isPassAdditonal()) {
            this.btn_replay.active = isShowReplay;
            this.btn_replay.setPosition(this.btn_pos_list[star]);
            this.btn_replay.setScale(0.01);
            btn_node = this.btn_replay;
        }
        var subject = ConstValue_1.ConstValue.Subject || 1;
        var spine = null;
        var spine_en = null;
        switch (star) {
            case 3:
                spine = this.sp_star3 && this.sp_star3.getComponent(sp.Skeleton);
                spine_en = this.sp_star_en3.getComponent(sp.Skeleton);
                break;
            case 2:
                spine = this.sp_star2 && this.sp_star2.getComponent(sp.Skeleton);
                spine_en = this.sp_star_en2.getComponent(sp.Skeleton);
                break;
            default:
                spine = this.sp_star1 && this.sp_star1.getComponent(sp.Skeleton);
                spine_en = this.sp_star_en1.getComponent(sp.Skeleton);
                break;
        }
        if (spine) {
            spine.node.active = true;
            spine_en.node.active = true;
            Tools_1.Tools.playSpine(spine_en, this.ani_en_list[star], false, function () {
                spine_en.node.active = false;
            });
            Tools_1.Tools.playSpine(spine, this.ani_enter_list[star], false, function () {
                Tools_1.Tools.playSpine(spine, _this.ani_idle_list[star], true);
                if (btn_node && btn_node.active) {
                    cc.tween(btn_node)
                        .to(0.5, { scale: 1 }, { easing: 'backOut' })
                        .start();
                }
            });
        }
    };
    StarCount.className = 'StarCount';
    __decorate([
        property(cc.Node)
    ], StarCount.prototype, "sp_star1", void 0);
    __decorate([
        property(cc.Node)
    ], StarCount.prototype, "sp_star2", void 0);
    __decorate([
        property(cc.Node)
    ], StarCount.prototype, "sp_star3", void 0);
    __decorate([
        property(cc.Node)
    ], StarCount.prototype, "sp_star_en1", void 0);
    __decorate([
        property(cc.Node)
    ], StarCount.prototype, "sp_star_en2", void 0);
    __decorate([
        property(cc.Node)
    ], StarCount.prototype, "sp_star_en3", void 0);
    __decorate([
        property(cc.Node)
    ], StarCount.prototype, "btn_replay", void 0);
    __decorate([
        property(cc.Node)
    ], StarCount.prototype, "btn_additional", void 0);
    StarCount = __decorate([
        ccclass
    ], StarCount);
    return StarCount;
}(BaseFrameUI_1.default));
exports.default = StarCount;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcU3RhckNvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVFQUFzRTtBQUN0RSxnRkFBK0U7QUFDL0UsNkRBQTREO0FBQzVELDJDQUEwQztBQUMxQyw2Q0FBNEM7QUFDNUMsOENBQXlDO0FBQ3pDLDZEQUE0RDtBQUV0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBVztJQUFsRDtRQUFBLHFFQTRGQztRQXhGVyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixlQUFTLEdBQWEsQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUN2RixvQkFBYyxHQUFhLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDdEYsbUJBQWEsR0FBYSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ3pGLGlCQUFXLEdBQWEsQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUN6RixrQkFBWSxHQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFD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QUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2tCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2tCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2tCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ3FCO0lBbEJ0QixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBNEY3QjtJQUFELGdCQUFDO0NBNUZELEFBNEZDLENBNUZzQyxxQkFBVyxHQTRGakQ7a0JBNUZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RWYWx1ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9EYXRhL0NvbnN0VmFsdWUnO1xyXG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XHJcbmltcG9ydCB7IFJlcG9ydE1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL1JlcG9ydE1hbmFnZXInO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gJy4uLy4uL1V0aWxzL1Rvb2xzJztcclxuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSAnLi4vLi4vVXRpbHMvVUlIZWxwJztcclxuaW1wb3J0IEJhc2VGcmFtZVVJIGZyb20gJy4uL0Jhc2VGcmFtZVVJJztcclxuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi8uLi8uLi9NYW5hZ2VyL1NvdW5kTWFuYWdlcic7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhckNvdW50IGV4dGVuZHMgQmFzZUZyYW1lVUkge1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnU3RhckNvdW50JztcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgc3Bfc3RhcjE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHNwX3N0YXIyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBzcF9zdGFyMzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgc3Bfc3Rhcl9lbjE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHNwX3N0YXJfZW4yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBzcF9zdGFyX2VuMzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgYnRuX3JlcGxheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgYnRuX2FkZGl0aW9uYWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYXVkaW9MaXN0OiBzdHJpbmdbXSA9IFsnc2V0dGxlX3N0YXIxJywgJ3NldHRsZV9zdGFyMScsICdzZXR0bGVfc3RhcjInLCAnc2V0dGxlX3N0YXIzJ107XHJcbiAgICBwcml2YXRlIGFuaV9lbnRlcl9saXN0OiBzdHJpbmdbXSA9IFsnMVhfa2Fpc2hpJywgJzFYX2thaXNoaScsICcyeGluZ19rYWlzaGknLCAnM3hpbmdfa2Fpc2hpJ107XHJcbiAgICBwcml2YXRlIGFuaV9pZGxlX2xpc3Q6IHN0cmluZ1tdID0gWycxWF94dW5odWFuJywgJzFYX3h1bmh1YW4nLCAnMnhpbmdfeHVuaHVhbicsICczeGluZ194dW5odWFuJ107XHJcbiAgICBwcml2YXRlIGFuaV9lbl9saXN0OiBzdHJpbmdbXSA9IFsnMXhpbmdfY2l0aWFvJywgJzF4aW5nX2NpdGlhbycsICcyeGluZ19rYWlzaGknLCAnM3hpbmdfa2Fpc2hpJ107XHJcbiAgICBwcml2YXRlIGJ0bl9wb3NfbGlzdDogY2MuVmVjMltdID0gW2NjLnYyKDAsIC0zOTkpLCBjYy52MigwLCAtMzk5KSwgY2MudjIoMCwgLTM2NCksIGNjLnYyKDAsIC0zMTIpXTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGlzU2hvd1JlcGxheSDmmK/lkKbmmL7npLrph43njqnmjInpkq5cclxuICAgICAqIEBwYXJhbSBzdGFyTnVtIOaYn+aVsCAo5LiN5Lyg5Y+C5pWw5YiZ5LuOUmVwb3J0TWFuYWdlcumHjOWPluWAvClcclxuICAgICAqL1xyXG4gICAgc2hvd1N0YXJzKGlzU2hvd1JlcGxheT86IGJvb2xlYW4sIHN0YXJOdW0/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3RhciA9IDA7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gc3Rhck51bSB8fCBudWxsID09PSBzdGFyTnVtKSB7XHJcbiAgICAgICAgICAgIHN0YXIgPSBSZXBvcnRNYW5hZ2VyLmdldFN0YXJDb3VudCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXIgPSBzdGFyTnVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QodGhpcy5hdWRpb0xpc3Rbc3Rhcl0sIGZhbHNlKTtcclxuICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgIGxldCBidG5fbm9kZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5hZGRpdGlvbmFsLmxlbmd0aCA+IDAgJiYgUmVwb3J0TWFuYWdlci5pc1Bhc3NHYW1lKCkgJiYgIVJlcG9ydE1hbmFnZXIuaXNQYXNzQWRkaXRvbmFsKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5fYWRkaXRpb25hbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bl9hZGRpdGlvbmFsLnNldFBvc2l0aW9uKHRoaXMuYnRuX3Bvc19saXN0W3N0YXJdKTtcclxuICAgICAgICAgICAgdGhpcy5idG5fYWRkaXRpb25hbC5zZXRTY2FsZSgwLjAxKTtcclxuICAgICAgICAgICAgYnRuX25vZGUgPSB0aGlzLmJ0bl9hZGRpdGlvbmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChSZXBvcnRNYW5hZ2VyLmlzUGFzc0dhbWUoKSAmJiBSZXBvcnRNYW5hZ2VyLmlzUGFzc0FkZGl0b25hbCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX3JlcGxheS5hY3RpdmUgPSBpc1Nob3dSZXBsYXk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX3JlcGxheS5zZXRQb3NpdGlvbih0aGlzLmJ0bl9wb3NfbGlzdFtzdGFyXSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX3JlcGxheS5zZXRTY2FsZSgwLjAxKTtcclxuICAgICAgICAgICAgYnRuX25vZGUgPSB0aGlzLmJ0bl9yZXBsYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdWJqZWN0OiBudW1iZXIgPSBDb25zdFZhbHVlLlN1YmplY3QgfHwgMTtcclxuICAgICAgICBsZXQgc3BpbmU6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgICAgICBsZXQgc3BpbmVfZW46IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgICAgICBzd2l0Y2ggKHN0YXIpIHtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgc3BpbmUgPSB0aGlzLnNwX3N0YXIzICYmIHRoaXMuc3Bfc3RhcjMuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgIHNwaW5lX2VuID0gdGhpcy5zcF9zdGFyX2VuMy5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHNwaW5lID0gdGhpcy5zcF9zdGFyMiAmJiB0aGlzLnNwX3N0YXIyLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgICAgICAgICBzcGluZV9lbiA9IHRoaXMuc3Bfc3Rhcl9lbjIuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc3BpbmUgPSB0aGlzLnNwX3N0YXIxICYmIHRoaXMuc3Bfc3RhcjEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgIHNwaW5lX2VuID0gdGhpcy5zcF9zdGFyX2VuMS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzcGluZSkge1xyXG4gICAgICAgICAgICBzcGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNwaW5lX2VuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHNwaW5lX2VuLCB0aGlzLmFuaV9lbl9saXN0W3N0YXJdLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3BpbmVfZW4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShzcGluZSwgdGhpcy5hbmlfZW50ZXJfbGlzdFtzdGFyXSwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShzcGluZSwgdGhpcy5hbmlfaWRsZV9saXN0W3N0YXJdLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChidG5fbm9kZSAmJiBidG5fbm9kZS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihidG5fbm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/EventType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d48b48sqpEdozOnbOcVCAB', 'EventType');
// game/scripts/Data/EventType.ts

"use strict";
/**
 * 自定义事件类型
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var EventType;
(function (EventType) {
    // examp
    EventType["ON_BUTTON_CLICKED"] = "ON_BUTTON_CLICKED";
    EventType["GAME_RECONNECT"] = "GAME_RECONNECT";
    EventType["GAME_INIT"] = "GAME_INIT";
    EventType["GAME_START"] = "GAME_START";
    EventType["GAME_OVER"] = "GAME_OVER";
    EventType["REPORT_WRONG"] = "REPORT_WRONG";
    EventType["REPORT_RIGHT"] = "REPORT_RIGHT";
    EventType["ON_CLICK_ITEM"] = "ON_CLICK_ITEM";
})(EventType = exports.EventType || (exports.EventType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcRXZlbnRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRzs7O0FBRUgsSUFBWSxTQVlYO0FBWkQsV0FBWSxTQUFTO0lBQ2pCLFFBQVE7SUFDUixvREFBdUMsQ0FBQTtJQUN2Qyw4Q0FBaUMsQ0FBQTtJQUNqQyxvQ0FBdUIsQ0FBQTtJQUN2QixzQ0FBeUIsQ0FBQTtJQUN6QixvQ0FBdUIsQ0FBQTtJQUN2QiwwQ0FBNkIsQ0FBQTtJQUM3QiwwQ0FBNkIsQ0FBQTtJQUU3Qiw0Q0FBK0IsQ0FBQTtBQUVuQyxDQUFDLEVBWlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFZcEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOiHquWumuS5ieS6i+S7tuexu+Wei1xuICovXG5cbmV4cG9ydCBlbnVtIEV2ZW50VHlwZSB7XG4gICAgLy8gZXhhbXBcbiAgICBPTl9CVVRUT05fQ0xJQ0tFRCA9ICdPTl9CVVRUT05fQ0xJQ0tFRCcsXG4gICAgR0FNRV9SRUNPTk5FQ1QgPSBcIkdBTUVfUkVDT05ORUNUXCIsXG4gICAgR0FNRV9JTklUID0gXCJHQU1FX0lOSVRcIixcbiAgICBHQU1FX1NUQVJUID0gXCJHQU1FX1NUQVJUXCIsXG4gICAgR0FNRV9PVkVSID0gXCJHQU1FX09WRVJcIixcbiAgICBSRVBPUlRfV1JPTkcgPSBcIlJFUE9SVF9XUk9OR1wiLFxuICAgIFJFUE9SVF9SSUdIVCA9IFwiUkVQT1JUX1JJR0hUXCIsXG4gICAgXG4gICAgT05fQ0xJQ0tfSVRFTSA9IFwiT05fQ0xJQ0tfSVRFTVwiLFxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Manager/EditorManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64363RgvXdCJJdpexRQv89P', 'EditorManager');
// game/scripts/Manager/EditorManager.ts

"use strict";
/**编辑器数据类 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorManager = exports.ItemData = void 0;
/**
 * 编辑器数据，根据游戏自定义内部数据
 */
var EditorData = /** @class */ (function () {
    function EditorData() {
        // 是否开启星级评
        this.isStarCount = true;
        // 是否开启再玩一次
        this.isReplay = true;
        // 是否自动播放题干语音
        this.isPlayTitle = true;
        // 可重玩次数
        this.replayCount = 1;
        // 关卡总数
        this.levelCount = 1;
        // 总步数
        this.stepCount = 0;
        // 课件等级 0：幼小  1：小低  2：小高
        this.coursewareLevel = 0;
        // 新增属性，附加题，any根据实际情况自定义，但是必须为数组已关卡形式出现
        this.additional = [];
        // TODO 自定义数据
        this.countdown = 120;
        this.wrongTime = 5;
        this.itemData = [new ItemData()];
    }
    return EditorData;
}());
var ItemData = /** @class */ (function () {
    function ItemData() {
        this.type = 0;
        this.count = 1;
    }
    return ItemData;
}());
exports.ItemData = ItemData;
var EditorManagerClass = /** @class */ (function () {
    function EditorManagerClass() {
        /** 编辑器数据 */
        this.editorData = new EditorData();
        this._hasResult = true;
    }
    EditorManagerClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new EditorManagerClass();
        }
        return this._instance;
    };
    /**
     * 是否支持题目编辑
     */
    EditorManagerClass.prototype.isSupportEdit = function () {
        var keys = Object.getOwnPropertyNames(this.editorData);
        return keys.length > 7;
    };
    /**
     * 获取关卡总数
     */
    EditorManagerClass.prototype.getLevelCount = function () {
        return this.editorData.levelCount;
    };
    /**
     * 设置关卡总数
     */
    EditorManagerClass.prototype.setLevelCount = function (num) {
        this.editorData.levelCount = num;
    };
    /**
     * 获取总步数
     */
    EditorManagerClass.prototype.getStepCount = function () {
        return this.editorData.stepCount || this.getLevelCount();
    };
    /**
     * 设置总步数
     */
    EditorManagerClass.prototype.setStepCount = function (num) {
        this.editorData.stepCount = num;
    };
    /**
     * 获取课件等级
     * 需要各个游戏根据实际情况设置正确的数值
     * 课件等级 0：幼小  1：小低  2：小高
     */
    EditorManagerClass.prototype.getCoursewareLevel = function () {
        return this.editorData.coursewareLevel;
    };
    /**
     * 获取编辑器数据
     */
    EditorManagerClass.prototype.getData = function () {
        return this.editorData;
    };
    /**
     * 根据网络请求结果设置编辑器数据
     * @param {EditorData} data
     */
    EditorManagerClass.prototype.setData = function (data) {
        this.editorData = data;
    };
    Object.defineProperty(EditorManagerClass.prototype, "hasResult", {
        /**
         * @description: 获取是否有结算
         * @return {*}
         */
        get: function () {
            return this._hasResult;
        },
        /**
        * @description: 设置是否有结算
        * @param {boolean} value 是/否 true/false
        * @return {*}
        */
        set: function (value) {
            this._hasResult = value;
        },
        enumerable: false,
        configurable: true
    });
    return EditorManagerClass;
}());
exports.EditorManager = EditorManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcTWFuYWdlclxcRWRpdG9yTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWTs7O0FBRVo7O0dBRUc7QUFDSDtJQUFBO1FBQ0ksVUFBVTtRQUNILGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQ25DLFdBQVc7UUFDSixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGFBQWE7UUFDTixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUNuQyxRQUFRO1FBQ0QsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDL0IsT0FBTztRQUNBLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDOUIsTUFBTTtRQUNDLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDN0Isd0JBQXdCO1FBQ2pCLG9CQUFlLEdBQVcsQ0FBQyxDQUFDO1FBRW5DLHVDQUF1QztRQUNoQyxlQUFVLEdBQVUsRUFBRSxDQUFDO1FBRTlCLGFBQWE7UUFDTixjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsYUFBUSxHQUFlLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFBRCxpQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUFFRDtJQUFBO1FBQ0ksU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixVQUFLLEdBQVcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSw0QkFBUTtBQUtyQjtJQWNJO1FBSkEsWUFBWTtRQUNMLGVBQVUsR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3pDLGVBQVUsR0FBWSxJQUFJLENBQUM7SUFFbkIsQ0FBQztJQVhWLDhCQUFXLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztTQUM3QztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBUUQ7O09BRUc7SUFDSSwwQ0FBYSxHQUFwQjtRQUNJLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdkQsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSSwwQ0FBYSxHQUFwQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7SUFDdEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksMENBQWEsR0FBcEIsVUFBcUIsR0FBVztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7SUFDckMsQ0FBQztJQUVEOztPQUVHO0lBQ0kseUNBQVksR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7O09BRUc7SUFDSSx5Q0FBWSxHQUFuQixVQUFvQixHQUFXO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLCtDQUFrQixHQUF6QjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksb0NBQU8sR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksb0NBQU8sR0FBZCxVQUFlLElBQWdCO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFPRCxzQkFBVyx5Q0FBUztRQUlwQjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO1FBZkQ7Ozs7VUFJRTthQUNGLFVBQXFCLEtBQWM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFTTCx5QkFBQztBQUFELENBN0ZBLEFBNkZDLElBQUE7QUFFWSxRQUFBLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKue8lui+keWZqOaVsOaNruexuyAqL1xuXG4vKipcbiAqIOe8lui+keWZqOaVsOaNru+8jOagueaNrua4uOaIj+iHquWumuS5ieWGhemDqOaVsOaNrlxuICovXG5jbGFzcyBFZGl0b3JEYXRhIHtcbiAgICAvLyDmmK/lkKblvIDlkK/mmJ/nuqfor4RcbiAgICBwdWJsaWMgaXNTdGFyQ291bnQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8vIOaYr+WQpuW8gOWQr+WGjeeOqeS4gOasoVxuICAgIHB1YmxpYyBpc1JlcGxheTogYm9vbGVhbiA9IHRydWU7XG4gICAgLy8g5piv5ZCm6Ieq5Yqo5pKt5pS+6aKY5bmy6K+t6Z+zXG4gICAgcHVibGljIGlzUGxheVRpdGxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICAvLyDlj6/ph43njqnmrKHmlbBcbiAgICBwdWJsaWMgcmVwbGF5Q291bnQ6IG51bWJlciA9IDE7XG4gICAgLy8g5YWz5Y2h5oC75pWwXG4gICAgcHVibGljIGxldmVsQ291bnQ6IG51bWJlciA9IDE7XG4gICAgLy8g5oC75q2l5pWwXG4gICAgcHVibGljIHN0ZXBDb3VudDogbnVtYmVyID0gMDtcbiAgICAvLyDor77ku7bnrYnnuqcgMO+8muW5vOWwjyAgMe+8muWwj+S9jiAgMu+8muWwj+mrmFxuICAgIHB1YmxpYyBjb3Vyc2V3YXJlTGV2ZWw6IG51bWJlciA9IDA7XG5cbiAgICAvLyDmlrDlop7lsZ7mgKfvvIzpmYTliqDpopjvvIxhbnnmoLnmja7lrp7pmYXmg4XlhrXoh6rlrprkuYnvvIzkvYbmmK/lv4XpobvkuLrmlbDnu4Tlt7LlhbPljaHlvaLlvI/lh7rnjrBcbiAgICBwdWJsaWMgYWRkaXRpb25hbDogYW55W10gPSBbXTtcblxuICAgIC8vIFRPRE8g6Ieq5a6a5LmJ5pWw5o2uXG4gICAgcHVibGljIGNvdW50ZG93bjogbnVtYmVyID0gMTIwO1xuICAgIHB1YmxpYyB3cm9uZ1RpbWU6IG51bWJlciA9IDU7XG4gICAgcHVibGljIGl0ZW1EYXRhOiBJdGVtRGF0YVtdID0gW25ldyBJdGVtRGF0YSgpXTtcbn1cblxuZXhwb3J0IGNsYXNzIEl0ZW1EYXRhIHtcbiAgICB0eXBlOiBudW1iZXIgPSAwO1xuICAgIGNvdW50OiBudW1iZXIgPSAxO1xufVxuXG5jbGFzcyBFZGl0b3JNYW5hZ2VyQ2xhc3Mge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogRWRpdG9yTWFuYWdlckNsYXNzO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgRWRpdG9yTWFuYWdlckNsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKiDnvJbovpHlmajmlbDmja4gKi9cbiAgICBwdWJsaWMgZWRpdG9yRGF0YTogRWRpdG9yRGF0YSA9IG5ldyBFZGl0b3JEYXRhKCk7XG4gICAgcHJpdmF0ZSBfaGFzUmVzdWx0OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICAvKipcbiAgICAgKiDmmK/lkKbmlK/mjIHpopjnm67nvJbovpFcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNTdXBwb3J0RWRpdCgpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLmVkaXRvckRhdGEpO1xuXG4gICAgICAgIHJldHVybiBrZXlzLmxlbmd0aCA+IDc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5YWz5Y2h5oC75pWwXG4gICAgICovXG4gICAgcHVibGljIGdldExldmVsQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRvckRhdGEubGV2ZWxDb3VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7lhbPljaHmgLvmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0TGV2ZWxDb3VudChudW06IG51bWJlcikge1xuICAgICAgICB0aGlzLmVkaXRvckRhdGEubGV2ZWxDb3VudCA9IG51bTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmgLvmraXmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U3RlcENvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGl0b3JEYXRhLnN0ZXBDb3VudCB8fCB0aGlzLmdldExldmVsQ291bnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7mgLvmraXmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U3RlcENvdW50KG51bTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yRGF0YS5zdGVwQ291bnQgPSBudW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W6K++5Lu2562J57qnXG4gICAgICog6ZyA6KaB5ZCE5Liq5ri45oiP5qC55o2u5a6e6ZmF5oOF5Ya16K6+572u5q2j56Gu55qE5pWw5YC8XG4gICAgICog6K++5Lu2562J57qnIDDvvJrlubzlsI8gIDHvvJrlsI/kvY4gIDLvvJrlsI/pq5hcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q291cnNld2FyZUxldmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGl0b3JEYXRhLmNvdXJzZXdhcmVMZXZlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bnvJbovpHlmajmlbDmja5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RGF0YSgpOiBFZGl0b3JEYXRhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdG9yRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoLnmja7nvZHnu5zor7fmsYLnu5Pmnpzorr7nva7nvJbovpHlmajmlbDmja5cbiAgICAgKiBAcGFyYW0ge0VkaXRvckRhdGF9IGRhdGFcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0RGF0YShkYXRhOiBFZGl0b3JEYXRhKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yRGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAZGVzY3JpcHRpb246IOiuvue9ruaYr+WQpuaciee7k+eul1xuICAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZSDmmK8v5ZCmIHRydWUvZmFsc2VcbiAgICAqIEByZXR1cm4geyp9XG4gICAgKi9cbiAgICBwdWJsaWMgc2V0IGhhc1Jlc3VsdCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9oYXNSZXN1bHQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb246IOiOt+WPluaYr+WQpuaciee7k+eul1xuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgcHVibGljIGdldCBoYXNSZXN1bHQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNSZXN1bHQ7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRWRpdG9yTWFuYWdlciA9IEVkaXRvck1hbmFnZXJDbGFzcy5nZXRJbnN0YW5jZSgpO1xuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Http/NetWork.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9cd01aQNbFMUY4sUMN0yYH5', 'NetWork');
// frame/scripts/Http/NetWork.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetWork = exports.NetWorkClass = void 0;
var ConstValue_1 = require("../../../game/scripts/Data/ConstValue");
var UIManager_1 = require("../Manager/UIManager");
var GameMsg_1 = require("../SDK/GameMsg");
var UIHelp_1 = require("../Utils/UIHelp");
var NetWorkClass = /** @class */ (function () {
    function NetWorkClass() {
        //判断是否是线上   URL里不加参数则默认为测试环境
        this.isOnlineEnv = this.GetIsOnline() == 'online';
        // beijing
        //判断是否是pc预加载的协议    URL里不加参数则默认为非预加载
        this.isOwcr = this.GetBPreload();
        this.BASE = this.isOnlineEnv
            ? 'https://courseware-online.speiyou.com'
            : 'https://ceshi-courseware.speiyou.com';
        this.GET_QUESTION = this.BASE + '/get';
        this.GET_USER_PROGRESS = this.BASE + '/get/answer';
        this.GET_TITLE = this.BASE + '/get/title';
        this.ADD = this.BASE + '/add';
        this.MODIFY = this.BASE + '/modify';
        this.CLEAR = this.BASE + '/clear';
        // shanghai
        // public readonly BASE = this.isOnlineEnv ? 'https://courseware-online.saasp.vdyoo.com' : 'https://ceshi-courseware-online.saasp.vdyoo.com';
        // public readonly COS_URL = this.isOnlineEnv ?
        //     'https://classroom-api-online.saasp.vdyoo.com/micro-class/storage/v1/tencent/sts'
        //     : 'https://test-class-api-online.saasp.vdyoo.com/micro-class/storage/v1/tencent/sts';
        // public readonly COS_BASE_URL = this.isOnlineEnv ? 'https://micro-class.xuepeiyou.com' : 'https://micro-class-test.xuepeiyou.com';
        // public readonly GET_QUESTION = this.BASE + '/get';
        // public readonly GET_USER_PROGRESS = this.BASE + '/get/answer';
        // public readonly GET_TITLE = this.BASE + '/get/title';
        // public readonly ADD = this.BASE + '/add';
        // public readonly MODIFY = this.BASE + '/modify';
        // public readonly CLEAR = this.BASE + '/clear';
        this.empty = false; //清理脏数据的开关，在URL里面拼此参数 = true；
        //新课堂参数
        this.userId = null; //用户id
        this.chapterId = null; //直播讲id
        this.coursewareId = null; //题目信息   用于交互游戏自身查题目信息
        this.titleId = null; //交互游戏绑定id   绑定的时候用（监课平台）  学生端不传
        this.bLive = null; //是否是直播
        this.bPreload = null; //是否预加载  （cdn/zip)
        this.env = null; //运行环境（线上/测试）
        this.app = null; //App名称
        this.platform = null; //硬件平台信息（pc/iPad/android/androidPad/web）
        this.channel = null; //使用方(辅导端、学生端、未来黑板、配齐、教研云、……）
        this.browser = null; //浏览器信息（内核及版本）
        this.appVersion = null; //端的版本信息
        this.isTeacher = false; //是否为教师（通过同步的get_role返回的是否为'teacher'）
        this.isSync = false; //是否为同步（通过同步的get_is_sync返回是否为1/true）
        this.isOffline = 0; //是否为离线模式
        this.isMaster = null; //是否是主动发心跳的一方
        this.isSupportKeepPlay = false; //是否支持接着玩重新玩
        this.theRequest = null;
    }
    NetWorkClass.getInstance = function () {
        if (this.instance == null) {
            this.instance = new NetWorkClass();
        }
        return this.instance;
    };
    NetWorkClass.prototype.setIsSync = function (isSync) {
        isSync = isSync == null ? false : isSync;
        exports.NetWork.isSync = isSync;
    };
    NetWorkClass.prototype.setIsTeacher = function (role) {
        var isTeacher = role == 'teacher';
        exports.NetWork.isTeacher = isTeacher;
    };
    NetWorkClass.prototype.setIsPreload = function (isPreload) {
        isPreload = isPreload == null ? false : isPreload;
        UIManager_1.UIManager.isGameShowing = !isPreload;
    };
    NetWorkClass.prototype.setIsMaster = function (isMaster) {
        isMaster = isMaster == null ? false : isMaster;
        exports.NetWork.isMaster = isMaster;
    };
    NetWorkClass.prototype.setIsSupportKeepPlay = function (isSupportKeepPlay) {
        exports.NetWork.isSupportKeepPlay = isSupportKeepPlay;
        if (!isSupportKeepPlay) {
            exports.NetWork.isMaster = exports.NetWork.isTeacher;
        }
        console.log("isSupportKeepPlay: " + isSupportKeepPlay);
    };
    /**
     * 请求网络Post 0成功 1超时
     * @param url
     * @param openType
     * @param contentType
     * @param callback
     * @param params
     */
    NetWorkClass.prototype.httpRequest = function (url, openType, contentType, callback, params) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        if (params === void 0) { params = ''; }
        //------------------离线模式-------------------------
        if (this.isOffline && url.substring(0, this.GET_QUESTION.length) == this.GET_QUESTION) {
            GameMsg_1.default.recv_json_data(function (data) {
                console.log('recv_json_data:', data);
                if (callback && data.jsonData.errcode == 0) {
                    callback(false, data.jsonData);
                }
                else {
                    UIHelp_1.UIHelp.showErrorPanel(data.jsonData.errmsg + ',请联系客服！', '', '', '确定', function () {
                        _this.httpRequest(url, openType, contentType, callback, params);
                    }, false);
                }
            });
            GameMsg_1.default.request_json_data({ coursewareId: this.coursewareId });
            return;
        }
        if (ConstValue_1.ConstValue.IS_TEACHER) {
            if (!this.titleId) {
                //教师端没有titleId的情况
                UIHelp_1.UIHelp.showErrorPanel('URL参数错误,缺少titleId,请联系技术人员！', '', '', '确定');
                return;
            }
        }
        else {
            //新课堂学生端  判断所有参数
            if (!ConstValue_1.ConstValue.IS_TEACHER &&
                (!this.userId || !this.coursewareId || !this.env || !this.app || !this.channel || !this.browser)) {
                GameMsg_1.default.URLError(this.theRequest);
                UIHelp_1.UIHelp.showErrorPanel('URL参数错误,请联系客服！', '', '', '确定');
                return;
            }
        }
        var xhr = new XMLHttpRequest();
        xhr.open(openType, url);
        xhr.timeout = 10000;
        xhr.setRequestHeader('Content-Type', contentType);
        xhr.withCredentials = true;
        //回调
        xhr.onreadystatechange = function () {
            console.log('httpRequest rsp status', xhr.status, '        xhr.readyState', xhr.readyState, '        xhr.responseText', xhr.responseText);
            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status <= 400) {
                var response = JSON.parse(xhr.responseText);
                if (callback && response.errcode == 0) {
                    callback(false, response);
                }
                else {
                    GameMsg_1.default.httpError(response.errmsg);
                    if (ConstValue_1.ConstValue.IS_EDITIONS) {
                        UIHelp_1.UIHelp.showErrorPanel(response.errmsg + ',请联系客服！', '', '', '确定', function () {
                            _this.httpRequest(url, openType, contentType, callback, params);
                        }, false);
                    }
                }
            }
        };
        //超时回调
        xhr.ontimeout = function (event) {
            GameMsg_1.default.httpTimeOut('网络不佳，请稍后重试');
            if (ConstValue_1.ConstValue.IS_EDITIONS) {
                UIHelp_1.UIHelp.showErrorPanel('网络不佳，请稍后重试', '', '若重新连接无效，请联系客服', '重新连接', function () {
                    _this.httpRequest(url, openType, contentType, callback, params);
                }, true);
            }
            console.log('httpRequest timeout');
            callback && callback(true, null);
        };
        //出错
        xhr.onerror = function (error) {
            if (ConstValue_1.ConstValue.IS_EDITIONS) {
                UIHelp_1.UIHelp.showErrorPanel('网络出错，请稍后重试', '若重新连接无效，请联系客服', '', '重新连接', function () {
                    _this.httpRequest(url, openType, contentType, callback, params);
                }, true);
            }
            console.log('httpRequest error');
            callback && callback(true, null);
        };
        xhr.send(params);
    };
    /**
     * 获取url参数
     */
    NetWorkClass.prototype.GetRequest = function () {
        if (this.theRequest != null) {
            return this.theRequest;
        }
        this.theRequest = new Object();
        var url = location.search; //获取url中"?"符后的字串
        if (url.indexOf('?') != -1) {
            var str = url.substr(1);
            var strs = str.split('&');
            for (var i = 0; i < strs.length; i++) {
                this.theRequest[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1]);
            }
        }
        //新课堂url必需参数
        this.userId = this.theRequest['userId'];
        this.chapterId = this.theRequest['chapterId'];
        this.coursewareId = this.theRequest['coursewareId'];
        this.titleId = this.theRequest['titleId'];
        this.bLive = this.theRequest['bLive'];
        this.bPreload = this.theRequest['bPreload'];
        this.env = this.theRequest['env'];
        this.app = this.theRequest['app'];
        this.platform = this.theRequest['platform'];
        this.channel = this.theRequest['channel'];
        this.browser = this.theRequest['browser'];
        this.appVersion = this.theRequest['appVersion'];
        this.empty = this.theRequest['empty'];
        this.isOffline = parseInt(this.theRequest['isOffline']); //离线模式
        return this.theRequest;
    };
    NetWorkClass.prototype.GetBPreload = function () {
        var BPreload = 0;
        if (this.GetRequest()['bPreload']) {
            BPreload = this.GetRequest()['bPreload'];
        }
        return BPreload;
    };
    NetWorkClass.prototype.GetIsOnline = function () {
        var isOnline = 'test';
        if (this.GetRequest()['env']) {
            isOnline = this.GetRequest()['env'];
        }
        return isOnline;
    };
    return NetWorkClass;
}());
exports.NetWorkClass = NetWorkClass;
exports.NetWork = NetWorkClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXEh0dHBcXE5ldFdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW1FO0FBQ25FLGtEQUFpRDtBQUNqRCwwQ0FBcUM7QUFDckMsMENBQXlDO0FBQ3pDO0lBQUE7UUFHSSw0QkFBNEI7UUFDWixnQkFBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxRQUFRLENBQUM7UUFDN0QsVUFBVTtRQUNWLG1DQUFtQztRQUNuQixXQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLFNBQUksR0FBRyxJQUFJLENBQUMsV0FBVztZQUNuQyxDQUFDLENBQUMsdUNBQXVDO1lBQ3pDLENBQUMsQ0FBQyxzQ0FBc0MsQ0FBQztRQUU3QixpQkFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLHNCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQzlDLGNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztRQUNyQyxRQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDekIsV0FBTSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQy9CLFVBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUU3QyxXQUFXO1FBQ1gsNklBQTZJO1FBQzdJLCtDQUErQztRQUMvQyx3RkFBd0Y7UUFDeEYsNEZBQTRGO1FBQzVGLG9JQUFvSTtRQUNwSSxxREFBcUQ7UUFDckQsaUVBQWlFO1FBQ2pFLHdEQUF3RDtRQUN4RCw0Q0FBNEM7UUFDNUMsa0RBQWtEO1FBQ2xELGdEQUFnRDtRQUV6QyxVQUFLLEdBQVksS0FBSyxDQUFDLENBQUMsNkJBQTZCO1FBRTVELE9BQU87UUFDQSxXQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBTTtRQUNy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QUM7SUFDM0IsQ0FBQztJQUVNLGtDQUFXLEdBQWxCO1FBQ0ksSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQy9CLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDNUM7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRU0sa0NBQVcsR0FBbEI7UUFDSSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFDTCxtQkFBQztBQUFELENBOVFBLEFBOFFDLElBQUE7QUE5UVksb0NBQVk7QUFnUlosUUFBQSxPQUFPLEdBQUcsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RWYWx1ZSB9IGZyb20gJy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9EYXRhL0NvbnN0VmFsdWUnO1xuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSAnLi4vTWFuYWdlci9VSU1hbmFnZXInO1xuaW1wb3J0IEdhbWVNc2cgZnJvbSAnLi4vU0RLL0dhbWVNc2cnO1xuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSAnLi4vVXRpbHMvVUlIZWxwJztcbmV4cG9ydCBjbGFzcyBOZXRXb3JrQ2xhc3Mge1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBOZXRXb3JrQ2xhc3M7XG5cbiAgICAvL+WIpOaWreaYr+WQpuaYr+e6v+S4iiAgIFVSTOmHjOS4jeWKoOWPguaVsOWImem7mOiupOS4uua1i+ivleeOr+Wig1xuICAgIHB1YmxpYyByZWFkb25seSBpc09ubGluZUVudiA9IHRoaXMuR2V0SXNPbmxpbmUoKSA9PSAnb25saW5lJztcbiAgICAvLyBiZWlqaW5nXG4gICAgLy/liKTmlq3mmK/lkKbmmK9wY+mihOWKoOi9veeahOWNj+iuriAgICBVUkzph4zkuI3liqDlj4LmlbDliJnpu5jorqTkuLrpnZ7pooTliqDovb1cbiAgICBwdWJsaWMgcmVhZG9ubHkgaXNPd2NyID0gdGhpcy5HZXRCUHJlbG9hZCgpO1xuICAgIHB1YmxpYyByZWFkb25seSBCQVNFID0gdGhpcy5pc09ubGluZUVudlxuICAgICAgICA/ICdodHRwczovL2NvdXJzZXdhcmUtb25saW5lLnNwZWl5b3UuY29tJ1xuICAgICAgICA6ICdodHRwczovL2Nlc2hpLWNvdXJzZXdhcmUuc3BlaXlvdS5jb20nO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IEdFVF9RVUVTVElPTiA9IHRoaXMuQkFTRSArICcvZ2V0JztcbiAgICBwdWJsaWMgcmVhZG9ubHkgR0VUX1VTRVJfUFJPR1JFU1MgPSB0aGlzLkJBU0UgKyAnL2dldC9hbnN3ZXInO1xuICAgIHB1YmxpYyByZWFkb25seSBHRVRfVElUTEUgPSB0aGlzLkJBU0UgKyAnL2dldC90aXRsZSc7XG4gICAgcHVibGljIHJlYWRvbmx5IEFERCA9IHRoaXMuQkFTRSArICcvYWRkJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgTU9ESUZZID0gdGhpcy5CQVNFICsgJy9tb2RpZnknO1xuICAgIHB1YmxpYyByZWFkb25seSBDTEVBUiA9IHRoaXMuQkFTRSArICcvY2xlYXInO1xuXG4gICAgLy8gc2hhbmdoYWlcbiAgICAvLyBwdWJsaWMgcmVhZG9ubHkgQkFTRSA9IHRoaXMuaXNPbmxpbmVFbnYgPyAnaHR0cHM6Ly9jb3Vyc2V3YXJlLW9ubGluZS5zYWFzcC52ZHlvby5jb20nIDogJ2h0dHBzOi8vY2VzaGktY291cnNld2FyZS1vbmxpbmUuc2Fhc3AudmR5b28uY29tJztcbiAgICAvLyBwdWJsaWMgcmVhZG9ubHkgQ09TX1VSTCA9IHRoaXMuaXNPbmxpbmVFbnYgP1xuICAgIC8vICAgICAnaHR0cHM6Ly9jbGFzc3Jvb20tYXBpLW9ubGluZS5zYWFzcC52ZHlvby5jb20vbWljcm8tY2xhc3Mvc3RvcmFnZS92MS90ZW5jZW50L3N0cydcbiAgICAvLyAgICAgOiAnaHR0cHM6Ly90ZXN0LWNsYXNzLWFwaS1vbmxpbmUuc2Fhc3AudmR5b28uY29tL21pY3JvLWNsYXNzL3N0b3JhZ2UvdjEvdGVuY2VudC9zdHMnO1xuICAgIC8vIHB1YmxpYyByZWFkb25seSBDT1NfQkFTRV9VUkwgPSB0aGlzLmlzT25saW5lRW52ID8gJ2h0dHBzOi8vbWljcm8tY2xhc3MueHVlcGVpeW91LmNvbScgOiAnaHR0cHM6Ly9taWNyby1jbGFzcy10ZXN0Lnh1ZXBlaXlvdS5jb20nO1xuICAgIC8vIHB1YmxpYyByZWFkb25seSBHRVRfUVVFU1RJT04gPSB0aGlzLkJBU0UgKyAnL2dldCc7XG4gICAgLy8gcHVibGljIHJlYWRvbmx5IEdFVF9VU0VSX1BST0dSRVNTID0gdGhpcy5CQVNFICsgJy9nZXQvYW5zd2VyJztcbiAgICAvLyBwdWJsaWMgcmVhZG9ubHkgR0VUX1RJVExFID0gdGhpcy5CQVNFICsgJy9nZXQvdGl0bGUnO1xuICAgIC8vIHB1YmxpYyByZWFkb25seSBBREQgPSB0aGlzLkJBU0UgKyAnL2FkZCc7XG4gICAgLy8gcHVibGljIHJlYWRvbmx5IE1PRElGWSA9IHRoaXMuQkFTRSArICcvbW9kaWZ5JztcbiAgICAvLyBwdWJsaWMgcmVhZG9ubHkgQ0xFQVIgPSB0aGlzLkJBU0UgKyAnL2NsZWFyJztcblxuICAgIHB1YmxpYyBlbXB0eTogYm9vbGVhbiA9IGZhbHNlOyAvL+a4heeQhuiEj+aVsOaNrueahOW8gOWFs++8jOWcqFVSTOmHjOmdouaLvOatpOWPguaVsCA9IHRydWXvvJtcblxuICAgIC8v5paw6K++5aCC5Y+C5pWwXG4gICAgcHVibGljIHVzZXJJZCA9IG51bGw7IC8v55So5oi3aWRcbiAgICBwdWJsaWMgY2hhcHRlcklkID0gbnVsbDsgLy/nm7Tmkq3orrJpZFxuICAgIHB1YmxpYyBjb3Vyc2V3YXJlSWQgPSBudWxsOyAvL+mimOebruS/oeaBryAgIOeUqOS6juS6pOS6kua4uOaIj+iHqui6q+afpemimOebruS/oeaBr1xuICAgIHB1YmxpYyB0aXRsZUlkID0gbnVsbDsgLy/kuqTkupLmuLjmiI/nu5HlrpppZCAgIOe7keWumueahOaXtuWAmeeUqO+8iOebkeivvuW5s+WPsO+8iSAg5a2m55Sf56uv5LiN5LygXG4gICAgcHVibGljIGJMaXZlID0gbnVsbDsgLy/mmK/lkKbmmK/nm7Tmkq1cbiAgICBwdWJsaWMgYlByZWxvYWQgPSBudWxsOyAvL+aYr+WQpumihOWKoOi9vSAg77yIY2RuL3ppcClcbiAgICBwdWJsaWMgZW52ID0gbnVsbDsgLy/ov5DooYznjq/looPvvIjnur/kuIov5rWL6K+V77yJXG4gICAgcHVibGljIGFwcCA9IG51bGw7IC8vQXBw5ZCN56ewXG4gICAgcHVibGljIHBsYXRmb3JtID0gbnVsbDsgLy/noazku7blubPlj7Dkv6Hmga/vvIhwYy9pUGFkL2FuZHJvaWQvYW5kcm9pZFBhZC93ZWLvvIlcbiAgICBwdWJsaWMgY2hhbm5lbCA9IG51bGw7IC8v5L2/55So5pa5KOi+heWvvOerr+OAgeWtpueUn+err+OAgeacquadpem7keadv+OAgemFjem9kOOAgeaVmeeglOS6keOAgeKApuKApu+8iVxuICAgIHB1YmxpYyBicm93c2VyID0gbnVsbDsgLy/mtY/op4jlmajkv6Hmga/vvIjlhoXmoLjlj4rniYjmnKzvvIlcbiAgICBwdWJsaWMgYXBwVmVyc2lvbiA9IG51bGw7IC8v56uv55qE54mI5pys5L+h5oGvXG4gICAgcHVibGljIGlzVGVhY2hlciA9IGZhbHNlOyAvL+aYr+WQpuS4uuaVmeW4iO+8iOmAmui/h+WQjOatpeeahGdldF9yb2xl6L+U5Zue55qE5piv5ZCm5Li6J3RlYWNoZXIn77yJXG4gICAgcHVibGljIGlzU3luYyA9IGZhbHNlOyAvL+aYr+WQpuS4uuWQjOatpe+8iOmAmui/h+WQjOatpeeahGdldF9pc19zeW5j6L+U5Zue5piv5ZCm5Li6MS90cnVl77yJXG4gICAgcHVibGljIGlzT2ZmbGluZSA9IDA7IC8v5piv5ZCm5Li656a757q/5qih5byPXG4gICAgcHVibGljIGlzTWFzdGVyID0gbnVsbDsgLy/mmK/lkKbmmK/kuLvliqjlj5Hlv4Pot7PnmoTkuIDmlrlcbiAgICBwdWJsaWMgaXNTdXBwb3J0S2VlcFBsYXkgPSBmYWxzZTsgLy/mmK/lkKbmlK/mjIHmjqXnnYDnjqnph43mlrDnjqlcblxuICAgIHB1YmxpYyB0aGVSZXF1ZXN0ID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTmV0V29ya0NsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldElzU3luYyhpc1N5bmM6IGJvb2xlYW4pIHtcbiAgICAgICAgaXNTeW5jID0gaXNTeW5jID09IG51bGwgPyBmYWxzZSA6IGlzU3luYztcbiAgICAgICAgTmV0V29yay5pc1N5bmMgPSBpc1N5bmM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldElzVGVhY2hlcihyb2xlOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGlzVGVhY2hlciA9IHJvbGUgPT0gJ3RlYWNoZXInO1xuICAgICAgICBOZXRXb3JrLmlzVGVhY2hlciA9IGlzVGVhY2hlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SXNQcmVsb2FkKGlzUHJlbG9hZDogYm9vbGVhbikge1xuICAgICAgICBpc1ByZWxvYWQgPSBpc1ByZWxvYWQgPT0gbnVsbCA/IGZhbHNlIDogaXNQcmVsb2FkO1xuICAgICAgICBVSU1hbmFnZXIuaXNHYW1lU2hvd2luZyA9ICFpc1ByZWxvYWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldElzTWFzdGVyKGlzTWFzdGVyOiBib29sZWFuKSB7XG4gICAgICAgIGlzTWFzdGVyID0gaXNNYXN0ZXIgPT0gbnVsbCA/IGZhbHNlIDogaXNNYXN0ZXI7XG4gICAgICAgIE5ldFdvcmsuaXNNYXN0ZXIgPSBpc01hc3RlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SXNTdXBwb3J0S2VlcFBsYXkoaXNTdXBwb3J0S2VlcFBsYXk6IGJvb2xlYW4pIHtcbiAgICAgICAgTmV0V29yay5pc1N1cHBvcnRLZWVwUGxheSA9IGlzU3VwcG9ydEtlZXBQbGF5O1xuICAgICAgICBpZiAoIWlzU3VwcG9ydEtlZXBQbGF5KSB7XG4gICAgICAgICAgICBOZXRXb3JrLmlzTWFzdGVyID0gTmV0V29yay5pc1RlYWNoZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYGlzU3VwcG9ydEtlZXBQbGF5OiAke2lzU3VwcG9ydEtlZXBQbGF5fWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOivt+axgue9kee7nFBvc3QgMOaIkOWKnyAx6LaF5pe2XG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEBwYXJhbSBvcGVuVHlwZVxuICAgICAqIEBwYXJhbSBjb250ZW50VHlwZVxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBwdWJsaWMgaHR0cFJlcXVlc3QodXJsOiBzdHJpbmcsIG9wZW5UeXBlLCBjb250ZW50VHlwZSwgY2FsbGJhY2sgPSBudWxsLCBwYXJhbXMgPSAnJykge1xuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLeemu+e6v+aooeW8jy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYgKHRoaXMuaXNPZmZsaW5lICYmIHVybC5zdWJzdHJpbmcoMCwgdGhpcy5HRVRfUVVFU1RJT04ubGVuZ3RoKSA9PSB0aGlzLkdFVF9RVUVTVElPTikge1xuICAgICAgICAgICAgR2FtZU1zZy5yZWN2X2pzb25fZGF0YSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWN2X2pzb25fZGF0YTonLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgZGF0YS5qc29uRGF0YS5lcnJjb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UsIGRhdGEuanNvbkRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFVJSGVscC5zaG93RXJyb3JQYW5lbChcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuanNvbkRhdGEuZXJybXNnICsgJyzor7fogZTns7vlrqLmnI3vvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICfnoa7lrponLFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFJlcXVlc3QodXJsLCBvcGVuVHlwZSwgY29udGVudFR5cGUsIGNhbGxiYWNrLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgR2FtZU1zZy5yZXF1ZXN0X2pzb25fZGF0YSh7IGNvdXJzZXdhcmVJZDogdGhpcy5jb3Vyc2V3YXJlSWQgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29uc3RWYWx1ZS5JU19URUFDSEVSKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGl0bGVJZCkge1xuICAgICAgICAgICAgICAgIC8v5pWZ5biI56uv5rKh5pyJdGl0bGVJZOeahOaDheWGtVxuICAgICAgICAgICAgICAgIFVJSGVscC5zaG93RXJyb3JQYW5lbCgnVVJM5Y+C5pWw6ZSZ6K+vLOe8uuWwkXRpdGxlSWQs6K+36IGU57O75oqA5pyv5Lq65ZGY77yBJywgJycsICcnLCAn56Gu5a6aJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy/mlrDor77loILlrabnlJ/nq68gIOWIpOaWreaJgOacieWPguaVsFxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICFDb25zdFZhbHVlLklTX1RFQUNIRVIgJiZcbiAgICAgICAgICAgICAgICAoIXRoaXMudXNlcklkIHx8ICF0aGlzLmNvdXJzZXdhcmVJZCB8fCAhdGhpcy5lbnYgfHwgIXRoaXMuYXBwIHx8ICF0aGlzLmNoYW5uZWwgfHwgIXRoaXMuYnJvd3NlcilcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIEdhbWVNc2cuVVJMRXJyb3IodGhpcy50aGVSZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICBVSUhlbHAuc2hvd0Vycm9yUGFuZWwoJ1VSTOWPguaVsOmUmeivryzor7fogZTns7vlrqLmnI3vvIEnLCAnJywgJycsICfnoa7lrponKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKG9wZW5UeXBlLCB1cmwpO1xuICAgICAgICB4aHIudGltZW91dCA9IDEwMDAwO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpO1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuICAgICAgICAvL+Wbnuiwg1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgJ2h0dHBSZXF1ZXN0IHJzcCBzdGF0dXMnLFxuICAgICAgICAgICAgICAgIHhoci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgJyAgICAgICAgeGhyLnJlYWR5U3RhdGUnLFxuICAgICAgICAgICAgICAgIHhoci5yZWFkeVN0YXRlLFxuICAgICAgICAgICAgICAgICcgICAgICAgIHhoci5yZXNwb25zZVRleHQnLFxuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVRleHQsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8PSA0MDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiByZXNwb25zZS5lcnJjb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBHYW1lTXNnLmh0dHBFcnJvcihyZXNwb25zZS5lcnJtc2cpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQ29uc3RWYWx1ZS5JU19FRElUSU9OUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVUlIZWxwLnNob3dFcnJvclBhbmVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVycm1zZyArICcs6K+36IGU57O75a6i5pyN77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAn56Gu5a6aJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFJlcXVlc3QodXJsLCBvcGVuVHlwZSwgY29udGVudFR5cGUsIGNhbGxiYWNrLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8v6LaF5pe25Zue6LCDXG4gICAgICAgIHhoci5vbnRpbWVvdXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIEdhbWVNc2cuaHR0cFRpbWVPdXQoJ+e9kee7nOS4jeS9s++8jOivt+eojeWQjumHjeivlScpO1xuICAgICAgICAgICAgaWYgKENvbnN0VmFsdWUuSVNfRURJVElPTlMpIHtcbiAgICAgICAgICAgICAgICBVSUhlbHAuc2hvd0Vycm9yUGFuZWwoXG4gICAgICAgICAgICAgICAgICAgICfnvZHnu5zkuI3kvbPvvIzor7fnqI3lkI7ph43or5UnLFxuICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgJ+iLpemHjeaWsOi/nuaOpeaXoOaViO+8jOivt+iBlOezu+WuouacjScsXG4gICAgICAgICAgICAgICAgICAgICfph43mlrDov57mjqUnLFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHBSZXF1ZXN0KHVybCwgb3BlblR5cGUsIGNvbnRlbnRUeXBlLCBjYWxsYmFjaywgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2h0dHBSZXF1ZXN0IHRpbWVvdXQnKTtcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUsIG51bGwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8v5Ye66ZSZXG4gICAgICAgIHhoci5vbmVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoQ29uc3RWYWx1ZS5JU19FRElUSU9OUykge1xuICAgICAgICAgICAgICAgIFVJSGVscC5zaG93RXJyb3JQYW5lbChcbiAgICAgICAgICAgICAgICAgICAgJ+e9kee7nOWHuumUme+8jOivt+eojeWQjumHjeivlScsXG4gICAgICAgICAgICAgICAgICAgICfoi6Xph43mlrDov57mjqXml6DmlYjvvIzor7fogZTns7vlrqLmnI0nLFxuICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgJ+mHjeaWsOi/nuaOpScsXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFJlcXVlc3QodXJsLCBvcGVuVHlwZSwgY29udGVudFR5cGUsIGNhbGxiYWNrLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaHR0cFJlcXVlc3QgZXJyb3InKTtcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUsIG51bGwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHhoci5zZW5kKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+WdXJs5Y+C5pWwXG4gICAgICovXG4gICAgcHVibGljIEdldFJlcXVlc3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnRoZVJlcXVlc3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlUmVxdWVzdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRoZVJlcXVlc3QgPSBuZXcgT2JqZWN0KCk7XG4gICAgICAgIHZhciB1cmwgPSBsb2NhdGlvbi5zZWFyY2g7IC8v6I635Y+WdXJs5LitXCI/XCLnrKblkI7nmoTlrZfkuLJcblxuICAgICAgICBpZiAodXJsLmluZGV4T2YoJz8nKSAhPSAtMSkge1xuICAgICAgICAgICAgdmFyIHN0ciA9IHVybC5zdWJzdHIoMSk7XG4gICAgICAgICAgICB2YXIgc3RycyA9IHN0ci5zcGxpdCgnJicpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVSZXF1ZXN0W3N0cnNbaV0uc3BsaXQoJz0nKVswXV0gPSBkZWNvZGVVUklDb21wb25lbnQoc3Ryc1tpXS5zcGxpdCgnPScpWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8v5paw6K++5aCCdXJs5b+F6ZyA5Y+C5pWwXG4gICAgICAgIHRoaXMudXNlcklkID0gdGhpcy50aGVSZXF1ZXN0Wyd1c2VySWQnXTtcbiAgICAgICAgdGhpcy5jaGFwdGVySWQgPSB0aGlzLnRoZVJlcXVlc3RbJ2NoYXB0ZXJJZCddO1xuICAgICAgICB0aGlzLmNvdXJzZXdhcmVJZCA9IHRoaXMudGhlUmVxdWVzdFsnY291cnNld2FyZUlkJ107XG4gICAgICAgIHRoaXMudGl0bGVJZCA9IHRoaXMudGhlUmVxdWVzdFsndGl0bGVJZCddO1xuICAgICAgICB0aGlzLmJMaXZlID0gdGhpcy50aGVSZXF1ZXN0WydiTGl2ZSddO1xuICAgICAgICB0aGlzLmJQcmVsb2FkID0gdGhpcy50aGVSZXF1ZXN0WydiUHJlbG9hZCddO1xuICAgICAgICB0aGlzLmVudiA9IHRoaXMudGhlUmVxdWVzdFsnZW52J107XG4gICAgICAgIHRoaXMuYXBwID0gdGhpcy50aGVSZXF1ZXN0WydhcHAnXTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybSA9IHRoaXMudGhlUmVxdWVzdFsncGxhdGZvcm0nXTtcbiAgICAgICAgdGhpcy5jaGFubmVsID0gdGhpcy50aGVSZXF1ZXN0WydjaGFubmVsJ107XG4gICAgICAgIHRoaXMuYnJvd3NlciA9IHRoaXMudGhlUmVxdWVzdFsnYnJvd3NlciddO1xuICAgICAgICB0aGlzLmFwcFZlcnNpb24gPSB0aGlzLnRoZVJlcXVlc3RbJ2FwcFZlcnNpb24nXTtcbiAgICAgICAgdGhpcy5lbXB0eSA9IHRoaXMudGhlUmVxdWVzdFsnZW1wdHknXTtcbiAgICAgICAgdGhpcy5pc09mZmxpbmUgPSBwYXJzZUludCh0aGlzLnRoZVJlcXVlc3RbJ2lzT2ZmbGluZSddKTsgLy/nprvnur/mqKHlvI9cblxuICAgICAgICByZXR1cm4gdGhpcy50aGVSZXF1ZXN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBHZXRCUHJlbG9hZCgpIHtcbiAgICAgICAgbGV0IEJQcmVsb2FkID0gMDtcbiAgICAgICAgaWYgKHRoaXMuR2V0UmVxdWVzdCgpWydiUHJlbG9hZCddKSB7XG4gICAgICAgICAgICBCUHJlbG9hZCA9IHRoaXMuR2V0UmVxdWVzdCgpWydiUHJlbG9hZCddO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCUHJlbG9hZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0SXNPbmxpbmUoKSB7XG4gICAgICAgIGxldCBpc09ubGluZSA9ICd0ZXN0JztcbiAgICAgICAgaWYgKHRoaXMuR2V0UmVxdWVzdCgpWydlbnYnXSkge1xuICAgICAgICAgICAgaXNPbmxpbmUgPSB0aGlzLkdldFJlcXVlc3QoKVsnZW52J107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzT25saW5lO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5ldFdvcmsgPSBOZXRXb3JrQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Components/ButtonSync.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f150r3uJdDXYDw/eUhynln', 'ButtonSync');
// game/scripts/Components/ButtonSync.ts

"use strict";
/**
 * v2.0
 * Author: jinhailiang
 * Email: jinhailiang@tal.com
 */
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
var T2M_1 = require("../../../frame/scripts/SDK/T2M");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonSync = /** @class */ (function (_super) {
    __extends(ButtonSync, _super);
    function ButtonSync() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.normalSprite = null;
        _this.seclectSprite = null;
        _this.target = null;
        _this.touchStartEvents = [];
        _this.touchEndEvents = [];
        _this.isScale = 1;
        _this.isEnable = true;
        //是否已经点击
        _this.isTouched = false;
        return _this;
    }
    ButtonSync_1 = ButtonSync;
    Object.defineProperty(ButtonSync.prototype, "seclect", {
        set: function (boolean) {
            this.node.getComponent(cc.Sprite).spriteFrame = boolean ? this.seclectSprite : this.normalSprite;
        },
        enumerable: false,
        configurable: true
    });
    ButtonSync.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.tagId = this.node.name + this.node.parent.name + this.node.getSiblingIndex();
        this.addEventByT2M();
    };
    ButtonSync.prototype.setEnable = function (isEnable) {
        this.isEnable = isEnable;
    };
    ButtonSync.prototype.onEnable = function () {
        this.isTouched = false;
    };
    ButtonSync.prototype.addTouchEvent = function (target, component, handlers, isScale) {
        if (isScale === void 0) { isScale = 1; }
        this.touchStartEvents.push(new ButtonSync_1.EventHandler());
        this.touchStartEvents[0].target = target;
        this.touchStartEvents[0].component = component;
        this.touchStartEvents[0].handler = handlers[0];
        this.touchEndEvents.push(new ButtonSync_1.EventHandler());
        this.touchEndEvents[0].target = target;
        this.touchEndEvents[0].component = component;
        this.touchEndEvents[0].handler = handlers[1];
        this.isScale = isScale;
    };
    ButtonSync.prototype.touchStart = function (event) {
        if (!this.isEnable)
            return;
        if (this.isTouched) {
            return;
        }
        this.isTouched = true;
        var type = 'touchStart' + this.tagId;
        var pos = event.getLocation();
        var data = { pos: { x: pos.x, y: pos.y } };
        T2M_1.T2M.dispatch(type, data);
    };
    ButtonSync.prototype.touchEnd = function (event) {
        if (!this.isEnable)
            return;
        var type = 'touchEnd' + this.tagId;
        var pos = event.getLocation();
        var data = { pos: { x: pos.x, y: pos.y } };
        T2M_1.T2M.dispatch(type, data);
    };
    ButtonSync.prototype.addEventByT2M = function () {
        T2M_1.T2M.addSyncEventListener('touchStart' + this.tagId, this.touchStartHandler.bind(this));
        T2M_1.T2M.addSyncEventListener('touchEnd' + this.tagId, this.touchEndHandler.bind(this));
    };
    ButtonSync.prototype.touchStartHandler = function (data) {
        if (!this.target) {
            this.node.scale = this.isScale;
        }
        else {
            this.target.spriteFrame = this.seclectSprite;
        }
        this.isTouched = true;
        for (var _i = 0, _a = this.touchStartEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ target: this.node, pos: data.pos }]);
        }
    };
    ButtonSync.prototype.touchEndHandler = function (data) {
        if (!this.isTouched) {
            return;
        }
        if (!this.target) {
            this.node.scale = 1;
        }
        else {
            this.target.spriteFrame = this.normalSprite;
        }
        this.isTouched = false;
        for (var _i = 0, _a = this.touchEndEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ target: this.node, pos: data.pos }]);
        }
    };
    var ButtonSync_1;
    __decorate([
        property({ type: cc.SpriteFrame })
    ], ButtonSync.prototype, "normalSprite", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], ButtonSync.prototype, "seclectSprite", void 0);
    __decorate([
        property({ type: cc.Sprite })
    ], ButtonSync.prototype, "target", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], ButtonSync.prototype, "touchStartEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], ButtonSync.prototype, "touchEndEvents", void 0);
    __decorate([
        property
    ], ButtonSync.prototype, "isScale", void 0);
    ButtonSync = ButtonSync_1 = __decorate([
        ccclass
    ], ButtonSync);
    return ButtonSync;
}(cc.Component));
exports.default = ButtonSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcQ29tcG9uZW50c1xcQnV0dG9uU3luYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsc0RBQXFEO0FBRy9DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBK0dDO1FBNUdXLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUdwQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFHckMsWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixzQkFBZ0IsR0FBZ0MsRUFBRSxDQUFDO1FBRW5ELG9CQUFjLEdBQWdDLEVBQUUsQ0FBQztRQUVqRCxhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBR3BCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFakMsUUFBUTtRQUNBLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBeUZ2QyxDQUFDO21CQS9Hb0IsVUFBVTtJQXdCM0Isc0JBQVcsK0JBQU87YUFBbEIsVUFBbUIsT0FBZ0I7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDckcsQ0FBQzs7O09BQUE7SUFFRCwyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFT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ImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiB2Mi4wXHJcbiAqIEF1dGhvcjogamluaGFpbGlhbmdcclxuICogRW1haWw6IGppbmhhaWxpYW5nQHRhbC5jb21cclxuICovXHJcblxyXG5pbXBvcnQgeyBUMk0gfSBmcm9tICcuLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1NESy9UMk0nO1xyXG5pbXBvcnQgeyBHYW1lTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvR2FtZU1hbmFnZXInO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvblN5bmMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0pXHJcbiAgICBwcml2YXRlIG5vcm1hbFNwcml0ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNwcml0ZUZyYW1lIH0pXHJcbiAgICBwcml2YXRlIHNlY2xlY3RTcHJpdGU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5TcHJpdGUgfSlcclxuICAgIHByaXZhdGUgdGFyZ2V0OiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyXSB9KVxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0RXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyXSB9KVxyXG4gICAgcHJpdmF0ZSB0b3VjaEVuZEV2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgaXNTY2FsZTogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwcml2YXRlIHRhZ0lkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGlzRW5hYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvL+aYr+WQpuW3sue7j+eCueWHu1xyXG4gICAgcHJpdmF0ZSBpc1RvdWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgc2V0IHNlY2xlY3QoYm9vbGVhbjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGJvb2xlYW4gPyB0aGlzLnNlY2xlY3RTcHJpdGUgOiB0aGlzLm5vcm1hbFNwcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGFnSWQgPSB0aGlzLm5vZGUubmFtZSArIHRoaXMubm9kZS5wYXJlbnQubmFtZSArIHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50QnlUMk0oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RW5hYmxlKGlzRW5hYmxlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pc0VuYWJsZSA9IGlzRW5hYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzVG91Y2hlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUb3VjaEV2ZW50KHRhcmdldDogY2MuTm9kZSwgY29tcG9uZW50OiBzdHJpbmcsIGhhbmRsZXJzOiBzdHJpbmdbXSwgaXNTY2FsZTogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydEV2ZW50cy5wdXNoKG5ldyBCdXR0b25TeW5jLkV2ZW50SGFuZGxlcigpKTtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHNbMF0udGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydEV2ZW50c1swXS5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0RXZlbnRzWzBdLmhhbmRsZXIgPSBoYW5kbGVyc1swXTtcclxuXHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50cy5wdXNoKG5ldyBCdXR0b25TeW5jLkV2ZW50SGFuZGxlcigpKTtcclxuICAgICAgICB0aGlzLnRvdWNoRW5kRXZlbnRzWzBdLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnRvdWNoRW5kRXZlbnRzWzBdLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnRvdWNoRW5kRXZlbnRzWzBdLmhhbmRsZXIgPSBoYW5kbGVyc1sxXTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1NjYWxlID0gaXNTY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNFbmFibGUpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5pc1RvdWNoZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzVG91Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgbGV0IHR5cGUgPSAndG91Y2hTdGFydCcgKyB0aGlzLnRhZ0lkO1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIGxldCBkYXRhID0geyBwb3M6IHsgeDogcG9zLngsIHk6IHBvcy55IH0gfTtcclxuICAgICAgICBUMk0uZGlzcGF0Y2godHlwZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB0eXBlID0gJ3RvdWNoRW5kJyArIHRoaXMudGFnSWQ7XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7IHBvczogeyB4OiBwb3MueCwgeTogcG9zLnkgfSB9O1xyXG4gICAgICAgIFQyTS5kaXNwYXRjaCh0eXBlLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEV2ZW50QnlUMk0oKSB7XHJcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKCd0b3VjaFN0YXJ0JyArIHRoaXMudGFnSWQsIHRoaXMudG91Y2hTdGFydEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKCd0b3VjaEVuZCcgKyB0aGlzLnRhZ0lkLCB0aGlzLnRvdWNoRW5kSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnRIYW5kbGVyKGRhdGEpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSB0aGlzLmlzU2NhbGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQuc3ByaXRlRnJhbWUgPSB0aGlzLnNlY2xlY3RTcHJpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzVG91Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgZm9yIChsZXQgZXZlbnRIYW5kbGVyIG9mIHRoaXMudG91Y2hTdGFydEV2ZW50cykge1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIuZW1pdChbeyB0YXJnZXQ6IHRoaXMubm9kZSwgcG9zOiBkYXRhLnBvcyB9XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hFbmRIYW5kbGVyKGRhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNUb3VjaGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNwcml0ZUZyYW1lID0gdGhpcy5ub3JtYWxTcHJpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNUb3VjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgZXZlbnRIYW5kbGVyIG9mIHRoaXMudG91Y2hFbmRFdmVudHMpIHtcclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmVtaXQoW3sgdGFyZ2V0OiB0aGlzLm5vZGUsIHBvczogZGF0YS5wb3MgfV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/CustomSyncData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6665ym0IlJNYKq4da/THmw', 'CustomSyncData');
// game/scripts/Data/CustomSyncData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSyncData = void 0;
/**
 * 需要同步的自定义数据
 * 游戏业务层同步数据在这里添加
 */
var CustomSyncData = /** @class */ (function () {
    function CustomSyncData() {
        this.curLevel = 0; // 当前关卡(第一关为0)
        // TODO 自定义
        this.curStep = 0; // 步数
        this.allHideItem = []; // 隐藏的物品
        this.curHideItem = []; // 隐藏的物品
        this.isClickStart = false; // 是否点击开始
        this.countdown = 0; // 倒计时
        this.answerTimes = 0; // 答题次数
        this.enableClick = true; // 是否可以点击
    }
    return CustomSyncData;
}());
exports.CustomSyncData = CustomSyncData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ3VzdG9tU3luY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztHQUdHO0FBQ0g7SUFBQTtRQUNXLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjO1FBQzNDLFdBQVc7UUFDSixZQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUMxQixnQkFBVyxHQUFhLEVBQUUsQ0FBQyxDQUFDLFFBQVE7UUFDcEMsZ0JBQVcsR0FBYSxFQUFFLENBQUMsQ0FBQyxRQUFRO1FBQ3BDLGlCQUFZLEdBQVksS0FBSyxDQUFDLENBQUMsU0FBUztRQUN4QyxjQUFTLEdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUM3QixnQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU87UUFDaEMsZ0JBQVcsR0FBWSxJQUFJLENBQUMsQ0FBQyxTQUFTO0lBQ2pELENBQUM7SUFBRCxxQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOmcgOimgeWQjOatpeeahOiHquWumuS5ieaVsOaNrlxuICog5ri45oiP5Lia5Yqh5bGC5ZCM5q2l5pWw5o2u5Zyo6L+Z6YeM5re75YqgXG4gKi9cbmV4cG9ydCBjbGFzcyBDdXN0b21TeW5jRGF0YSB7XG4gICAgcHVibGljIGN1ckxldmVsOiBudW1iZXIgPSAwOyAvLyDlvZPliY3lhbPljaEo56ys5LiA5YWz5Li6MClcbiAgICAvLyBUT0RPIOiHquWumuS5iVxuICAgIHB1YmxpYyBjdXJTdGVwOiBudW1iZXIgPSAwOyAvLyDmraXmlbBcbiAgICBwdWJsaWMgYWxsSGlkZUl0ZW06IHN0cmluZ1tdID0gW107IC8vIOmakOiXj+eahOeJqeWTgVxuICAgIHB1YmxpYyBjdXJIaWRlSXRlbTogc3RyaW5nW10gPSBbXTsgLy8g6ZqQ6JeP55qE54mp5ZOBXG4gICAgcHVibGljIGlzQ2xpY2tTdGFydDogYm9vbGVhbiA9IGZhbHNlOyAvLyDmmK/lkKbngrnlh7vlvIDlp4tcbiAgICBwdWJsaWMgY291bnRkb3duOiBudW1iZXIgPSAwOyAvLyDlgJLorqHml7ZcbiAgICBwdWJsaWMgYW5zd2VyVGltZXM6IG51bWJlciA9IDA7IC8vIOetlOmimOasoeaVsFxuICAgIHB1YmxpYyBlbmFibGVDbGljazogYm9vbGVhbiA9IHRydWU7IC8vIOaYr+WQpuWPr+S7peeCueWHu1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Components/DragSyncNew.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '609994hKQlHnIUh2M+EMJUc', 'DragSyncNew');
// game/scripts/Components/DragSyncNew.ts

"use strict";
/**
 * v1.0
 * Author: jinhailiang
 * Email: jinhailiang@tal.com
 */
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
var T2M_1 = require("../../../frame/scripts/SDK/T2M");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DragSyncNew = /** @class */ (function (_super) {
    __extends(DragSyncNew, _super);
    function DragSyncNew() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isEdit = false;
        _this.touchStartEvents = [];
        _this.touchMovingEvents = [];
        _this.touchEndEvents = [];
        _this.isEnable = true;
        _this.isTouch = false;
        //是否已经点击
        _this.isTouched = false;
        //根据触摸时间判断是否为点击事件
        _this.isClickEvent = false;
        _this.touchStartData = null;
        //触摸开始位置
        _this.touchStartPos = null;
        return _this;
    }
    DragSyncNew_1 = DragSyncNew;
    DragSyncNew.prototype.onLoad = function () {
        var index = this.node.getSiblingIndex();
        this.node.attr({
            id: index,
            initParent: this.node.parent,
            initPos: { x: this.node.x, y: this.node.y },
            initSiblingIndex: index,
        });
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.tagId = this.node.name + this.node.parent.name + this.node.getSiblingIndex();
        this.addEventByT2M();
    };
    DragSyncNew.prototype.setEnable = function (isEnable) {
        this.isEnable = isEnable;
    };
    DragSyncNew.prototype.onEnable = function () {
        this.isTouched = false;
    };
    DragSyncNew.prototype.addTouchEvent = function (target, component, handlers) {
        this.touchStartEvents.push(new DragSyncNew_1.EventHandler());
        this.touchStartEvents[0].target = target;
        this.touchStartEvents[0].component = component;
        this.touchStartEvents[0].handler = handlers[0];
        this.touchMovingEvents.push(new DragSyncNew_1.EventHandler());
        this.touchMovingEvents[0].target = target;
        this.touchMovingEvents[0].component = component;
        this.touchMovingEvents[0].handler = handlers[1];
        this.touchEndEvents.push(new DragSyncNew_1.EventHandler());
        this.touchEndEvents[0].target = target;
        this.touchEndEvents[0].component = component;
        this.touchEndEvents[0].handler = handlers[2];
    };
    DragSyncNew.prototype.touchStart = function (event) {
        if (!this.isEnable)
            return;
        this.isTouched = true;
        this.isTouch = true;
        var pos = event.getLocation();
        var type = 'touchStart' + this.tagId;
        var data = { pos: { x: pos.x, y: pos.y }, isDrag: false };
        if (this.isEdit) {
            this.touchStartHandler(data);
        }
        else {
            T2M_1.T2M.dispatch(type, data);
        }
    };
    DragSyncNew.prototype.touchMove = function (event) {
        if (!this.isTouched) {
            return;
        }
        if (!this.isEnable)
            return;
        var pos = event.getLocation();
        var type = 'touchMove' + this.tagId;
        var data = { pos: { x: pos.x, y: pos.y } };
        if (this.isEdit) {
            this.touchMoveHandler(data);
        }
        else {
            T2M_1.T2M.dispatch(type, data, true);
        }
    };
    DragSyncNew.prototype.touchEnd = function (event) {
        if (!this.isTouched) {
            return;
        }
        if (!this.isEnable)
            return;
        this.isTouch = false;
        var pos = event.getLocation();
        var type = 'touchEnd' + this.tagId;
        var stertPos = event.getStartLocation();
        var endPos = event.getLocation();
        var data = {
            pos: { x: pos.x, y: pos.y },
            spos: { x: stertPos.x, y: stertPos.y },
            epos: { x: endPos.x, y: endPos.y }
        };
        if (this.isEdit) {
            this.touchEndHandler(data);
        }
        else {
            T2M_1.T2M.dispatch(type, data);
        }
    };
    DragSyncNew.prototype.addEventByT2M = function () {
        T2M_1.T2M.addSyncEventListener('touchStart' + this.tagId, this.touchStartHandler.bind(this));
        T2M_1.T2M.addSyncEventListener('touchMove' + this.tagId, this.touchMoveHandler.bind(this));
        T2M_1.T2M.addSyncEventListener('touchEnd' + this.tagId, this.touchEndHandler.bind(this));
    };
    DragSyncNew.prototype.touchStartHandler = function (data) {
        if (!this.isEnable)
            return;
        this.touchStartPos = cc.v2(data.pos.x, data.pos.y);
        this.isTouched = true;
        this.isClickEvent = true;
        this.touchStartData = data;
        // this.handleTouchStart(this.touchStartData);
    };
    DragSyncNew.prototype.handleTouchStart = function (data) {
        // this.node.parent = this.rootNode;
        // this.node.position = cc.v3(this.touchStartData.pos.x, this.touchStartData.pos.y);
        for (var _i = 0, _a = this.touchStartEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: this.touchStartData.pos, target: this.node, isDrag: this.touchStartData.isDrag }]);
        }
    };
    DragSyncNew.prototype.touchMoveHandler = function (data) {
        if (!this.isTouched)
            return;
        //判断当前位置与触摸开始位置的距离，如果超过一定距离，则不再判断为点击事件
        if (this.isClickEvent && this.touchStartPos) {
            var distance = this.touchStartPos.sub(cc.v2(data.pos.x, data.pos.y)).mag();
            if (distance > 10) {
                this.isClickEvent = false;
                this.touchStartData.isDrag = true;
                this.handleTouchStart(this.touchStartData);
                this.touchStartData = null;
            }
        }
        else {
            // this.node.position = cc.v3(data.pos.x, data.pos.y);
            for (var _i = 0, _a = this.touchMovingEvents; _i < _a.length; _i++) {
                var eventHandler = _a[_i];
                eventHandler.emit([{ pos: data.pos, target: this.node }]);
            }
        }
    };
    DragSyncNew.prototype.touchEndHandler = function (data) {
        if (!this.isTouched) {
            return;
        }
        this.isTouched = false;
        if (this.isClickEvent && this.touchStartPos) {
            var distance = this.touchStartPos.sub(cc.v2(data.pos.x, data.pos.y)).mag();
            if (distance <= 10) {
                this.isClickEvent = true;
            }
        }
        else {
            // this.node.position = cc.v3(data.pos.x, data.pos.y);
        }
        for (var _i = 0, _a = this.touchEndEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: data.pos, spos: data.spos, epos: data.epos, target: this.node, isClick: this.isClickEvent }]);
        }
    };
    var DragSyncNew_1;
    __decorate([
        property()
    ], DragSyncNew.prototype, "isEdit", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragSyncNew.prototype, "touchStartEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragSyncNew.prototype, "touchMovingEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragSyncNew.prototype, "touchEndEvents", void 0);
    DragSyncNew = DragSyncNew_1 = __decorate([
        ccclass
    ], DragSyncNew);
    return DragSyncNew;
}(cc.Component));
exports.default = DragSyncNew;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcQ29tcG9uZW50c1xcRHJhZ1N5bmNOZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0dBSUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILHNEQUFxRDtBQUkvQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXNMQztRQXBMVyxZQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsc0JBQWdCLEdBQWdDLEVBQUUsQ0FBQztRQUVuRCx1QkFBaUIsR0FBZ0MsRUFBRSxDQUFDO1FBRXBELG9CQUFjLEdBQWdDLEVBQUUsQ0FBQztRQUdqRCxjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDakMsUUFBUTtRQUNBLGVBQVMsR0FBWSxLQUFLLENBQUM7UUEwR25DLGlCQUFpQjtRQUNULGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG9CQUFjLEdBQVEsSUFBSSxDQUFDO1FBRW5DLFFBQVE7UUFDQSxtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUF5RDFDLENBQUM7b0JBdExvQixXQUFXO0lBZ0I1Qiw0QkFBTSxHQUFOO1FBRUksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNYLEVBQUUsRUFBRSxLQUFLO1lBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUM1QixPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQzNDLGdCQUFnQixFQUFFLEtBQUs7U0FDMUIsQ0FBQyxD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aWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIHYxLjBcclxuICogQXV0aG9yOiBqaW5oYWlsaWFuZ1xyXG4gKiBFbWFpbDogamluaGFpbGlhbmdAdGFsLmNvbVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFQyTSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1NESy9UMk1cIjtcclxuXHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdTeW5jTmV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwcml2YXRlIGlzRWRpdCA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJdIH0pXHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnRFdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJdIH0pXHJcbiAgICBwcml2YXRlIHRvdWNoTW92aW5nRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyXSB9KVxyXG4gICAgcHJpdmF0ZSB0b3VjaEVuZEV2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSB0YWdJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpc0VuYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8v5piv5ZCm5bey57uP54K55Ye7XHJcbiAgICBwcml2YXRlIGlzVG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hdHRyKHtcclxuICAgICAgICAgICAgaWQ6IGluZGV4LFxyXG4gICAgICAgICAgICBpbml0UGFyZW50OiB0aGlzLm5vZGUucGFyZW50LFxyXG4gICAgICAgICAgICBpbml0UG9zOiB7IHg6IHRoaXMubm9kZS54LCB5OiB0aGlzLm5vZGUueSB9LFxyXG4gICAgICAgICAgICBpbml0U2libGluZ0luZGV4OiBpbmRleCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnRhZ0lkID0gdGhpcy5ub2RlLm5hbWUgKyB0aGlzLm5vZGUucGFyZW50Lm5hbWUgKyB0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4KCk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudEJ5VDJNKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEVuYWJsZShpc0VuYWJsZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaXNFbmFibGUgPSBpc0VuYWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc1RvdWNoZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkVG91Y2hFdmVudCh0YXJnZXQ6IGNjLk5vZGUsIGNvbXBvbmVudDogc3RyaW5nLCBoYW5kbGVyczogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHMucHVzaChuZXcgRHJhZ1N5bmNOZXcuRXZlbnRIYW5kbGVyKCkpO1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydEV2ZW50c1swXS50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0RXZlbnRzWzBdLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHNbMF0uaGFuZGxlciA9IGhhbmRsZXJzWzBdO1xyXG5cclxuICAgICAgICB0aGlzLnRvdWNoTW92aW5nRXZlbnRzLnB1c2gobmV3IERyYWdTeW5jTmV3LkV2ZW50SGFuZGxlcigpKTtcclxuICAgICAgICB0aGlzLnRvdWNoTW92aW5nRXZlbnRzWzBdLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnRvdWNoTW92aW5nRXZlbnRzWzBdLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnRvdWNoTW92aW5nRXZlbnRzWzBdLmhhbmRsZXIgPSBoYW5kbGVyc1sxXTtcclxuXHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50cy5wdXNoKG5ldyBEcmFnU3luY05ldy5FdmVudEhhbmRsZXIoKSk7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS5oYW5kbGVyID0gaGFuZGxlcnNbMl07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRW5hYmxlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1RvdWNoZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgICAgICBsZXQgdHlwZSA9ICd0b3VjaFN0YXJ0JyArIHRoaXMudGFnSWQ7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7IHBvczogeyB4OiBwb3MueCwgeTogcG9zLnkgfSwgaXNEcmFnOiBmYWxzZSB9O1xyXG4gICAgICAgIGlmICh0aGlzLmlzRWRpdCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKGRhdGEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVDJNLmRpc3BhdGNoKHR5cGUsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNUb3VjaGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRW5hYmxlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSAndG91Y2hNb3ZlJyArIHRoaXMudGFnSWQ7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7IHBvczogeyB4OiBwb3MueCwgeTogcG9zLnkgfSB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0VkaXQpIHtcclxuICAgICAgICAgICAgdGhpcy50b3VjaE1vdmVIYW5kbGVyKGRhdGEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVDJNLmRpc3BhdGNoKHR5cGUsIGRhdGEsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVG91Y2hlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgbGV0IHR5cGUgPSAndG91Y2hFbmQnICsgdGhpcy50YWdJZDtcclxuXHJcbiAgICAgICAgbGV0IHN0ZXJ0UG9zID0gZXZlbnQuZ2V0U3RhcnRMb2NhdGlvbigpXHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgcG9zOiB7IHg6IHBvcy54LCB5OiBwb3MueSB9LFxyXG4gICAgICAgICAgICBzcG9zOiB7IHg6IHN0ZXJ0UG9zLngsIHk6IHN0ZXJ0UG9zLnkgfSxcclxuICAgICAgICAgICAgZXBvczogeyB4OiBlbmRQb3MueCwgeTogZW5kUG9zLnkgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRWRpdCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvdWNoRW5kSGFuZGxlcihkYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUMk0uZGlzcGF0Y2godHlwZSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEV2ZW50QnlUMk0oKSB7XHJcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKCd0b3VjaFN0YXJ0JyArIHRoaXMudGFnSWQsIHRoaXMudG91Y2hTdGFydEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKCd0b3VjaE1vdmUnICsgdGhpcy50YWdJZCwgdGhpcy50b3VjaE1vdmVIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcigndG91Y2hFbmQnICsgdGhpcy50YWdJZCwgdGhpcy50b3VjaEVuZEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/moLnmja7op6bmkbjml7bpl7TliKTmlq3mmK/lkKbkuLrngrnlh7vkuovku7ZcclxuICAgIHByaXZhdGUgaXNDbGlja0V2ZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnREYXRhOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIC8v6Kem5pG45byA5aeL5L2N572uXHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdG91Y2hTdGFydEhhbmRsZXIoZGF0YSkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpO1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzQ2xpY2tFdmVudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0RGF0YSA9IGRhdGE7XHJcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVUb3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlVG91Y2hTdGFydChkYXRhKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBhcmVudCA9IHRoaXMucm9vdE5vZGU7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjModGhpcy50b3VjaFN0YXJ0RGF0YS5wb3MueCwgdGhpcy50b3VjaFN0YXJ0RGF0YS5wb3MueSk7XHJcbiAgICAgICAgZm9yIChsZXQgZXZlbnRIYW5kbGVyIG9mIHRoaXMudG91Y2hTdGFydEV2ZW50cykge1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIuZW1pdChbeyBwb3M6IHRoaXMudG91Y2hTdGFydERhdGEucG9zLCB0YXJnZXQ6IHRoaXMubm9kZSwgaXNEcmFnOiB0aGlzLnRvdWNoU3RhcnREYXRhLmlzRHJhZyB9XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hNb3ZlSGFuZGxlcihkYXRhKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVG91Y2hlZCkgcmV0dXJuO1xyXG4gICAgICAgIC8v5Yik5pat5b2T5YmN5L2N572u5LiO6Kem5pG45byA5aeL5L2N572u55qE6Led56a777yM5aaC5p6c6LaF6L+H5LiA5a6a6Led56a777yM5YiZ5LiN5YaN5Yik5pat5Li654K55Ye75LqL5Lu2XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDbGlja0V2ZW50ICYmIHRoaXMudG91Y2hTdGFydFBvcykge1xyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLnRvdWNoU3RhcnRQb3Muc3ViKGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpKS5tYWcoKTtcclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gMTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDbGlja0V2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnREYXRhLmlzRHJhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0RGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnREYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKGRhdGEucG9zLngsIGRhdGEucG9zLnkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBldmVudEhhbmRsZXIgb2YgdGhpcy50b3VjaE1vdmluZ0V2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmVtaXQoW3sgcG9zOiBkYXRhLnBvcywgdGFyZ2V0OiB0aGlzLm5vZGUgfV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hFbmRIYW5kbGVyKGRhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNUb3VjaGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1RvdWNoZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrRXZlbnQgJiYgdGhpcy50b3VjaFN0YXJ0UG9zKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMudG91Y2hTdGFydFBvcy5zdWIoY2MudjIoZGF0YS5wb3MueCwgZGF0YS5wb3MueSkpLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPD0gMTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDbGlja0V2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoZGF0YS5wb3MueCwgZGF0YS5wb3MueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBldmVudEhhbmRsZXIgb2YgdGhpcy50b3VjaEVuZEV2ZW50cykge1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIuZW1pdChbeyBwb3M6IGRhdGEucG9zLCBzcG9zOiBkYXRhLnNwb3MsIGVwb3M6IGRhdGEuZXBvcywgdGFyZ2V0OiB0aGlzLm5vZGUsIGlzQ2xpY2s6IHRoaXMuaXNDbGlja0V2ZW50IH1dKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/ConstValue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2ee0BC2l1Pp47nuM279OIO', 'ConstValue');
// game/scripts/Data/ConstValue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstValue = void 0;
var ConstValue = /** @class */ (function () {
    function ConstValue() {
    }
    ConstValue.IS_EDITIONS = true; //是否为发布版本，用于数据上报 及 log输出控制
    ConstValue.IS_TEACHER = true; //是否为教师端版本
    ConstValue.CoursewareKey = 'HuoYanJinJing'; //每个课件唯一的key 工程名+14位随机字符串。（脚本创建工程时自动生成）
    ConstValue.GameName = '火眼金睛'; //游戏名中文描述，用于数据上报  （脚本创建工程时输入）
    ConstValue.Subject = 1; //学科（1理科 2语文 3英语）
    return ConstValue;
}());
exports.ConstValue = ConstValue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ29uc3RWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBTUEsQ0FBQztJQUwwQixzQkFBVyxHQUFHLElBQUksQ0FBQyxDQUFDLDBCQUEwQjtJQUM5QyxxQkFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVU7SUFDN0Isd0JBQWEsR0FBRyxlQUFlLENBQUMsQ0FBQyx1Q0FBdUM7SUFDeEUsbUJBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyw2QkFBNkI7SUFDaEQsa0JBQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7SUFDekQsaUJBQUM7Q0FORCxBQU1DLElBQUE7QUFOWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb25zdFZhbHVlIHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElTX0VESVRJT05TID0gdHJ1ZTsgLy/mmK/lkKbkuLrlj5HluIPniYjmnKzvvIznlKjkuo7mlbDmja7kuIrmiqUg5Y+KIGxvZ+i+k+WHuuaOp+WItlxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSVNfVEVBQ0hFUiA9IHRydWU7IC8v5piv5ZCm5Li65pWZ5biI56uv54mI5pysXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDb3Vyc2V3YXJlS2V5ID0gJ0h1b1lhbkppbkppbmcnOyAvL+avj+S4quivvuS7tuWUr+S4gOeahGtleSDlt6XnqIvlkI0rMTTkvY3pmo/mnLrlrZfnrKbkuLLjgILvvIjohJrmnKzliJvlu7rlt6XnqIvml7boh6rliqjnlJ/miJDvvIlcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdhbWVOYW1lID0gJ+eBq+ecvOmHkeedmyc7IC8v5ri45oiP5ZCN5Lit5paH5o+P6L+w77yM55So5LqO5pWw5o2u5LiK5oqlICDvvIjohJrmnKzliJvlu7rlt6XnqIvml7bovpPlhaXvvIlcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFN1YmplY3QgPSAxOyAvL+Wtpuenke+8iDHnkIbnp5EgMuivreaWhyAz6Iux6K+t77yJXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Manager/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51cedVLm+hIt4MvfmM8Nj59', 'GameManager');
// game/scripts/Manager/GameManager.ts

"use strict";
/**
 * 游戏逻辑类
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
var GameManagerClass = /** @class */ (function () {
    function GameManagerClass() {
    }
    GameManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new GameManagerClass();
        }
        return this._instance;
    };
    GameManagerClass._instance = null;
    return GameManagerClass;
}());
exports.GameManager = GameManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcTWFuYWdlclxcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHOzs7QUFFSDtJQUFBO0lBU0EsQ0FBQztJQU5pQiw0QkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQVBjLDBCQUFTLEdBQXFCLElBQUksQ0FBQztJQVF0RCx1QkFBQztDQVRELEFBU0MsSUFBQTtBQUVZLFFBQUEsV0FBVyxHQUFHLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmuLjmiI/pgLvovpHnsbtcbiAqL1xuXG5jbGFzcyBHYW1lTWFuYWdlckNsYXNzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEdhbWVNYW5hZ2VyQ2xhc3MgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBHYW1lTWFuYWdlckNsYXNzIHtcbiAgICAgICAgaWYgKG51bGwgPT09IHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBHYW1lTWFuYWdlckNsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEdhbWVNYW5hZ2VyID0gR2FtZU1hbmFnZXJDbGFzcy5nZXRJbnN0YW5jZSgpO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Components/DragSync.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9c61afhzFG+qPfmNCaDKxC', 'DragSync');
// game/scripts/Components/DragSync.ts

"use strict";
/**
 * v1.0
 * Author: jinhailiang
 * Email: jinhailiang@tal.com
 */
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
var T2M_1 = require("../../../frame/scripts/SDK/T2M");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DragSync = /** @class */ (function (_super) {
    __extends(DragSync, _super);
    function DragSync() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.touchStartEvents = [];
        _this.touchMovingEvents = [];
        _this.touchEndEvents = [];
        _this.isEnable = true;
        _this.isTouch = false;
        //是否已经点击
        _this.isTouched = false;
        //根据触摸时间判断是否为点击事件
        _this.isClickEvent = false;
        _this.touchStartData = null;
        //触摸开始位置
        _this.touchStartPos = null;
        return _this;
    }
    DragSync_1 = DragSync;
    DragSync.prototype.onLoad = function () {
        this.rootNode = cc.find('Canvas/GamePanel');
        var index = this.node.getSiblingIndex();
        this.node.attr({
            id: index,
            initParent: this.node.parent,
            initPos: { x: this.node.x, y: this.node.y },
            initSiblingIndex: index,
        });
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.tagId = this.node.name + this.node.parent.name + this.node.getSiblingIndex();
        this.addEventByT2M();
    };
    DragSync.prototype.setEnable = function (isEnable) {
        this.isEnable = isEnable;
    };
    DragSync.prototype.onEnable = function () {
        this.isTouched = false;
    };
    DragSync.prototype.addTouchEvent = function (target, component, handlers) {
        this.touchStartEvents.push(new DragSync_1.EventHandler());
        this.touchStartEvents[0].target = target;
        this.touchStartEvents[0].component = component;
        this.touchStartEvents[0].handler = handlers[0];
        this.touchMovingEvents.push(new DragSync_1.EventHandler());
        this.touchMovingEvents[0].target = target;
        this.touchMovingEvents[0].component = component;
        this.touchMovingEvents[0].handler = handlers[1];
        this.touchEndEvents.push(new DragSync_1.EventHandler());
        this.touchEndEvents[0].target = target;
        this.touchEndEvents[0].component = component;
        this.touchEndEvents[0].handler = handlers[2];
    };
    DragSync.prototype.touchStart = function (event) {
        if (!this.isEnable)
            return;
        this.isTouched = true;
        this.isTouch = true;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var type = 'touchStart' + this.tagId;
        var data = { pos: { x: pos.x, y: pos.y }, isDrag: false };
        T2M_1.T2M.dispatch(type, data);
    };
    DragSync.prototype.touchMove = function (event) {
        if (!this.isTouched) {
            return;
        }
        if (!this.isEnable)
            return;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var type = 'touchMove' + this.tagId;
        var data = { pos: { x: pos.x, y: pos.y } };
        T2M_1.T2M.dispatch(type, data, true);
    };
    DragSync.prototype.touchEnd = function (event) {
        if (!this.isTouched) {
            return;
        }
        if (!this.isEnable)
            return;
        this.isTouch = false;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var type = 'touchEnd' + this.tagId;
        var stertPos = event.getStartLocation();
        var endPos = event.getLocation();
        var data = {
            pos: { x: pos.x, y: pos.y },
            spos: { x: stertPos.x, y: stertPos.y },
            epos: { x: endPos.x, y: endPos.y }
        };
        T2M_1.T2M.dispatch(type, data);
    };
    DragSync.prototype.addEventByT2M = function () {
        T2M_1.T2M.addSyncEventListener('touchStart' + this.tagId, this.touchStartHandler.bind(this));
        T2M_1.T2M.addSyncEventListener('touchMove' + this.tagId, this.touchMoveHandler.bind(this));
        T2M_1.T2M.addSyncEventListener('touchEnd' + this.tagId, this.touchEndHandler.bind(this));
    };
    DragSync.prototype.touchStartHandler = function (data) {
        if (!this.isEnable)
            return;
        this.touchStartPos = cc.v2(data.pos.x, data.pos.y);
        this.isTouched = true;
        this.isClickEvent = true;
        this.touchStartData = data;
        // this.handleTouchStart(this.touchStartData);
    };
    DragSync.prototype.handleTouchStart = function (data) {
        // this.node.parent = this.rootNode;
        // this.node.position = cc.v3(this.touchStartData.pos.x, this.touchStartData.pos.y);
        for (var _i = 0, _a = this.touchStartEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: this.touchStartData.pos, target: this.node, isDrag: this.touchStartData.isDrag }]);
        }
    };
    DragSync.prototype.touchMoveHandler = function (data) {
        if (!this.isTouched)
            return;
        //判断当前位置与触摸开始位置的距离，如果超过一定距离，则不再判断为点击事件
        if (this.isClickEvent && this.touchStartPos) {
            var distance = this.touchStartPos.sub(cc.v2(data.pos.x, data.pos.y)).mag();
            if (distance > 10) {
                this.isClickEvent = false;
                this.touchStartData.isDrag = true;
                this.handleTouchStart(this.touchStartData);
                this.touchStartData = null;
            }
            else {
                // this.isClickEvent = true;
                // this.handleTouchStart(this.touchStartData);
            }
        }
        else {
            // this.node.position = cc.v3(data.pos.x, data.pos.y);
            for (var _i = 0, _a = this.touchMovingEvents; _i < _a.length; _i++) {
                var eventHandler = _a[_i];
                eventHandler.emit([{ pos: data.pos, target: this.node }]);
            }
        }
    };
    DragSync.prototype.touchEndHandler = function (data) {
        if (!this.isTouched) {
            return;
        }
        this.isTouched = false;
        if (this.isClickEvent && this.touchStartPos) {
            var distance = this.touchStartPos.sub(cc.v2(data.pos.x, data.pos.y)).mag();
            if (distance <= 10) {
                this.isClickEvent = true;
            }
        }
        else {
            // this.node.position = cc.v3(data.pos.x, data.pos.y);
        }
        for (var _i = 0, _a = this.touchEndEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ pos: data.pos, spos: data.spos, epos: data.epos, target: this.node, isClick: this.isClickEvent }]);
        }
    };
    var DragSync_1;
    __decorate([
        property(cc.Node)
    ], DragSync.prototype, "rootNode", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragSync.prototype, "touchStartEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragSync.prototype, "touchMovingEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], DragSync.prototype, "touchEndEvents", void 0);
    DragSync = DragSync_1 = __decorate([
        ccclass
    ], DragSync);
    return DragSync;
}(cc.Component));
exports.default = DragSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcQ29tcG9uZW50c1xcRHJhZ1N5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0dBSUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILHNEQUFxRDtBQUkvQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBLQztRQXhLVyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLHNCQUFnQixHQUFnQyxFQUFFLENBQUM7UUFFbkQsdUJBQWlCLEdBQWdDLEVBQUUsQ0FBQztRQUVwRCxvQkFBYyxHQUFnQyxFQUFFLENBQUM7UUFHakQsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQVksS0FBSyxDQUFDO1FBQ2pDLFFBQVE7UUFDQSxlQUFTLEdBQVksS0FBSyxDQUFDO1FBMkZuQyxpQkFBaUI7UUFDVCxrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixvQkFBYyxHQUFRLElBQUksQ0FBQztRQUVuQyxRQUFRO1FBQ0EsbUJBQWEsR0FBWSxJQUFJLENBQUM7O0lBNEQxQyxDQUFDO2lCQTFLb0IsUUFBUTtJQWdCekIseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzVDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDWCxFQUFFLEVBQUUsS0FBSztZQUNULFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDNUIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJ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c0NvbnRlbnQiOlsiXHJcbi8qKlxyXG4gKiB2MS4wXHJcbiAqIEF1dGhvcjogamluaGFpbGlhbmdcclxuICogRW1haWw6IGppbmhhaWxpYW5nQHRhbC5jb21cclxuICovXHJcblxyXG5pbXBvcnQgeyBUMk0gfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9TREsvVDJNXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnU3luYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgcm9vdE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJdIH0pXHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnRFdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJdIH0pXHJcbiAgICBwcml2YXRlIHRvdWNoTW92aW5nRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFtjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyXSB9KVxyXG4gICAgcHJpdmF0ZSB0b3VjaEVuZEV2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSB0YWdJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpc0VuYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8v5piv5ZCm5bey57uP54K55Ye7XHJcbiAgICBwcml2YXRlIGlzVG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJvb3ROb2RlID0gY2MuZmluZCgnQ2FudmFzL0dhbWVQYW5lbCcpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKTtcclxuICAgICAgICB0aGlzLm5vZGUuYXR0cih7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCxcclxuICAgICAgICAgICAgaW5pdFBhcmVudDogdGhpcy5ub2RlLnBhcmVudCxcclxuICAgICAgICAgICAgaW5pdFBvczogeyB4OiB0aGlzLm5vZGUueCwgeTogdGhpcy5ub2RlLnkgfSxcclxuICAgICAgICAgICAgaW5pdFNpYmxpbmdJbmRleDogaW5kZXgsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy50YWdJZCA9IHRoaXMubm9kZS5uYW1lICsgdGhpcy5ub2RlLnBhcmVudC5uYW1lICsgdGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRCeVQyTSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRFbmFibGUoaXNFbmFibGU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmlzRW5hYmxlID0gaXNFbmFibGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzVG91Y2hlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUb3VjaEV2ZW50KHRhcmdldDogY2MuTm9kZSwgY29tcG9uZW50OiBzdHJpbmcsIGhhbmRsZXJzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydEV2ZW50cy5wdXNoKG5ldyBEcmFnU3luYy5FdmVudEhhbmRsZXIoKSk7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0RXZlbnRzWzBdLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHNbMF0uY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydEV2ZW50c1swXS5oYW5kbGVyID0gaGFuZGxlcnNbMF07XHJcblxyXG4gICAgICAgIHRoaXMudG91Y2hNb3ZpbmdFdmVudHMucHVzaChuZXcgRHJhZ1N5bmMuRXZlbnRIYW5kbGVyKCkpO1xyXG4gICAgICAgIHRoaXMudG91Y2hNb3ZpbmdFdmVudHNbMF0udGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMudG91Y2hNb3ZpbmdFdmVudHNbMF0uY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMudG91Y2hNb3ZpbmdFdmVudHNbMF0uaGFuZGxlciA9IGhhbmRsZXJzWzFdO1xyXG5cclxuICAgICAgICB0aGlzLnRvdWNoRW5kRXZlbnRzLnB1c2gobmV3IERyYWdTeW5jLkV2ZW50SGFuZGxlcigpKTtcclxuICAgICAgICB0aGlzLnRvdWNoRW5kRXZlbnRzWzBdLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnRvdWNoRW5kRXZlbnRzWzBdLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnRvdWNoRW5kRXZlbnRzWzBdLmhhbmRsZXIgPSBoYW5kbGVyc1syXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNFbmFibGUpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzVG91Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5yb290Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBsZXQgdHlwZSA9ICd0b3VjaFN0YXJ0JyArIHRoaXMudGFnSWQ7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7IHBvczogeyB4OiBwb3MueCwgeTogcG9zLnkgfSwgaXNEcmFnOiBmYWxzZSB9O1xyXG4gICAgICAgIFQyTS5kaXNwYXRjaCh0eXBlLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1RvdWNoZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaXNFbmFibGUpIHJldHVybjtcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5yb290Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBsZXQgdHlwZSA9ICd0b3VjaE1vdmUnICsgdGhpcy50YWdJZDtcclxuICAgICAgICBsZXQgZGF0YSA9IHsgcG9zOiB7IHg6IHBvcy54LCB5OiBwb3MueSB9IH07XHJcbiAgICAgICAgVDJNLmRpc3BhdGNoKHR5cGUsIGRhdGEsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNUb3VjaGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRW5hYmxlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMucm9vdE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgbGV0IHR5cGUgPSAndG91Y2hFbmQnICsgdGhpcy50YWdJZDtcclxuXHJcbiAgICAgICAgbGV0IHN0ZXJ0UG9zID0gZXZlbnQuZ2V0U3RhcnRMb2NhdGlvbigpXHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgcG9zOiB7IHg6IHBvcy54LCB5OiBwb3MueSB9LFxyXG4gICAgICAgICAgICBzcG9zOiB7IHg6IHN0ZXJ0UG9zLngsIHk6IHN0ZXJ0UG9zLnkgfSxcclxuICAgICAgICAgICAgZXBvczogeyB4OiBlbmRQb3MueCwgeTogZW5kUG9zLnkgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVDJNLmRpc3BhdGNoKHR5cGUsIGRhdGEpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEV2ZW50QnlUMk0oKSB7XHJcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKCd0b3VjaFN0YXJ0JyArIHRoaXMudGFnSWQsIHRoaXMudG91Y2hTdGFydEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKCd0b3VjaE1vdmUnICsgdGhpcy50YWdJZCwgdGhpcy50b3VjaE1vdmVIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcigndG91Y2hFbmQnICsgdGhpcy50YWdJZCwgdGhpcy50b3VjaEVuZEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/moLnmja7op6bmkbjml7bpl7TliKTmlq3mmK/lkKbkuLrngrnlh7vkuovku7ZcclxuICAgIHByaXZhdGUgaXNDbGlja0V2ZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnREYXRhOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIC8v6Kem5pG45byA5aeL5L2N572uXHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdG91Y2hTdGFydEhhbmRsZXIoZGF0YSkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0VuYWJsZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFBvcyA9IGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpO1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzQ2xpY2tFdmVudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0RGF0YSA9IGRhdGE7XHJcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVUb3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlVG91Y2hTdGFydChkYXRhKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBhcmVudCA9IHRoaXMucm9vdE5vZGU7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjModGhpcy50b3VjaFN0YXJ0RGF0YS5wb3MueCwgdGhpcy50b3VjaFN0YXJ0RGF0YS5wb3MueSk7XHJcbiAgICAgICAgZm9yIChsZXQgZXZlbnRIYW5kbGVyIG9mIHRoaXMudG91Y2hTdGFydEV2ZW50cykge1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIuZW1pdChbeyBwb3M6IHRoaXMudG91Y2hTdGFydERhdGEucG9zLCB0YXJnZXQ6IHRoaXMubm9kZSwgaXNEcmFnOiB0aGlzLnRvdWNoU3RhcnREYXRhLmlzRHJhZyB9XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hNb3ZlSGFuZGxlcihkYXRhKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVG91Y2hlZCkgcmV0dXJuO1xyXG4gICAgICAgIC8v5Yik5pat5b2T5YmN5L2N572u5LiO6Kem5pG45byA5aeL5L2N572u55qE6Led56a777yM5aaC5p6c6LaF6L+H5LiA5a6a6Led56a777yM5YiZ5LiN5YaN5Yik5pat5Li654K55Ye75LqL5Lu2XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDbGlja0V2ZW50ICYmIHRoaXMudG91Y2hTdGFydFBvcykge1xyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSB0aGlzLnRvdWNoU3RhcnRQb3Muc3ViKGNjLnYyKGRhdGEucG9zLngsIGRhdGEucG9zLnkpKS5tYWcoKTtcclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gMTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDbGlja0V2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnREYXRhLmlzRHJhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0RGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnREYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaXNDbGlja0V2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaGFuZGxlVG91Y2hTdGFydCh0aGlzLnRvdWNoU3RhcnREYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKGRhdGEucG9zLngsIGRhdGEucG9zLnkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBldmVudEhhbmRsZXIgb2YgdGhpcy50b3VjaE1vdmluZ0V2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmVtaXQoW3sgcG9zOiBkYXRhLnBvcywgdGFyZ2V0OiB0aGlzLm5vZGUgfV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hFbmRIYW5kbGVyKGRhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNUb3VjaGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1RvdWNoZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrRXZlbnQgJiYgdGhpcy50b3VjaFN0YXJ0UG9zKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRoaXMudG91Y2hTdGFydFBvcy5zdWIoY2MudjIoZGF0YS5wb3MueCwgZGF0YS5wb3MueSkpLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPD0gMTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDbGlja0V2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoZGF0YS5wb3MueCwgZGF0YS5wb3MueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBldmVudEhhbmRsZXIgb2YgdGhpcy50b3VjaEVuZEV2ZW50cykge1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIuZW1pdChbeyBwb3M6IGRhdGEucG9zLCBzcG9zOiBkYXRhLnNwb3MsIGVwb3M6IGRhdGEuZXBvcywgdGFyZ2V0OiB0aGlzLm5vZGUsIGlzQ2xpY2s6IHRoaXMuaXNDbGlja0V2ZW50IH1dKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Data/FrameConstValue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '431c7WvXqpPsYjqV8+W1/t4', 'FrameConstValue');
// frame/scripts/Data/FrameConstValue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameConstValue = void 0;
var FrameConstValue = /** @class */ (function () {
    function FrameConstValue() {
    }
    FrameConstValue.FRAME_PREFAB_PANEL_DIR = 'prefab/panel/';
    FrameConstValue.FRAME_AUDIO_DIR = 'audios/';
    FrameConstValue.CONFIG_FILE_DIR = 'config/';
    FrameConstValue.PREFAB_PANEL_DIR = 'prefab/ui/panel/';
    FrameConstValue.GAME_AUDIO_DIR = 'audios/';
    return FrameConstValue;
}());
exports.FrameConstValue = FrameConstValue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXERhdGFcXEZyYW1lQ29uc3RWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBTUEsQ0FBQztJQUwwQixzQ0FBc0IsR0FBRyxlQUFlLENBQUM7SUFDekMsK0JBQWUsR0FBRyxTQUFTLENBQUM7SUFDNUIsK0JBQWUsR0FBRyxTQUFTLENBQUM7SUFDNUIsZ0NBQWdCLEdBQUcsa0JBQWtCLENBQUM7SUFDdEMsOEJBQWMsR0FBRyxTQUFTLENBQUM7SUFDdEQsc0JBQUM7Q0FORCxBQU1DLElBQUE7QUFOWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGcmFtZUNvbnN0VmFsdWUge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRlJBTUVfUFJFRkFCX1BBTkVMX0RJUiA9ICdwcmVmYWIvcGFuZWwvJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZSQU1FX0FVRElPX0RJUiA9ICdhdWRpb3MvJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTkZJR19GSUxFX0RJUiA9ICdjb25maWcvJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBSRUZBQl9QQU5FTF9ESVIgPSAncHJlZmFiL3VpL3BhbmVsLyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHQU1FX0FVRElPX0RJUiA9ICdhdWRpb3MvJztcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Manager/ListenerManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05dc2tRAiFMobMbxaPK4NIf', 'ListenerManager');
// frame/scripts/Manager/ListenerManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerManager = void 0;
var ListenerManagerClass = /** @class */ (function () {
    function ListenerManagerClass() {
        this.handle = {};
    }
    ListenerManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new ListenerManagerClass();
        }
        return this._instance;
    };
    ListenerManagerClass.prototype.on = function (eventName, cb, target) {
        if (this.hasEvent(eventName, cb, target)) {
            return;
        }
        if (!this.handle[eventName]) {
            this.handle[eventName] = [];
        }
        var data = { func: cb, target: target };
        this.handle[eventName].push(data);
    };
    ListenerManagerClass.prototype.off = function (eventName, cb, target) {
        var list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return;
        }
        for (var i = 0; i < list.length; i++) {
            var event = list[i];
            if (cb == event.func && (!target || target == event.target)) {
                list.splice(i, 1);
                break;
            }
        }
    };
    ListenerManagerClass.prototype.dispatch = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return;
        }
        for (var i = 0; i < list.length; i++) {
            var event = list[i];
            event.func.apply(event.target, args);
        }
    };
    ListenerManagerClass.prototype.removeAll = function (target) {
        if (target) {
            for (var key in this.handle) {
                var list = this.handle[key];
                for (var i = 0, l = list.length; i < l; i++) {
                    var event = list[i];
                    if (event.target == target) {
                        list.splice(i, 1);
                        if (l > 0) {
                            l--;
                        }
                        i--;
                    }
                }
            }
        }
        else {
            for (var key in this.handle) {
                var list = this.handle[key];
                while (list.length > 0) {
                    list.pop();
                }
            }
        }
    };
    ListenerManagerClass.prototype.hasEvent = function (eventName, cb, target) {
        var list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return false;
        }
        for (var i = 0; i < list.length; i++) {
            var event = list[i];
            if (cb == event.func && (!target || target == event.target)) {
                return true;
            }
        }
        return false;
    };
    ListenerManagerClass._instance = null;
    return ListenerManagerClass;
}());
exports.ListenerManager = ListenerManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXE1hbmFnZXJcXExpc3RlbmVyTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTtJQUFBO1FBRVksV0FBTSxHQUFXLEVBQUUsQ0FBQztJQW9GaEMsQ0FBQztJQWxGaUIsZ0NBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTSxpQ0FBRSxHQUFULFVBQVUsU0FBaUIsRUFBRSxFQUFZLEVBQUUsTUFBVztRQUNsRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUMvQjtRQUNELElBQU0sSUFBSSxHQUFlLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxrQ0FBRyxHQUFWLFVBQVcsU0FBaUIsRUFBRSxFQUFZLEVBQUUsTUFBWTtRQUNwRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDM0IsT0FBTztTQUNWO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxD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QUFNLENBQUMsRUFBRTtnQkFDekQsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQXBGYyw4QkFBUyxHQUF5QixJQUFJLENBQUM7SUFxRjFELDJCQUFDO0NBdEZELEFBc0ZDLElBQUE7QUFFWSxRQUFBLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJRXZlbnREYXRhIHtcbiAgICBmdW5jOiBGdW5jdGlvbjtcbiAgICB0YXJnZXQ6IGFueTtcbn1cblxuaW50ZXJmYWNlIElFdmVudCB7XG4gICAgW2V2ZW50TmFtZTogc3RyaW5nXTogSUV2ZW50RGF0YVtdO1xufVxuXG5jbGFzcyBMaXN0ZW5lck1hbmFnZXJDbGFzcyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBMaXN0ZW5lck1hbmFnZXJDbGFzcyA9IG51bGw7XG4gICAgcHJpdmF0ZSBoYW5kbGU6IElFdmVudCA9IHt9O1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBMaXN0ZW5lck1hbmFnZXJDbGFzcyB7XG4gICAgICAgIGlmIChudWxsID09PSB0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgTGlzdGVuZXJNYW5hZ2VyQ2xhc3MoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHVibGljIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYjogRnVuY3Rpb24sIHRhcmdldDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0V2ZW50KGV2ZW50TmFtZSwgY2IsIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5oYW5kbGVbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGE6IElFdmVudERhdGEgPSB7IGZ1bmM6IGNiLCB0YXJnZXQgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVbZXZlbnROYW1lXS5wdXNoKGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvZmYoZXZlbnROYW1lOiBzdHJpbmcsIGNiOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmhhbmRsZVtldmVudE5hbWVdO1xuICAgICAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBsaXN0W2ldO1xuICAgICAgICAgICAgaWYgKGNiID09IGV2ZW50LmZ1bmMgJiYgKCF0YXJnZXQgfHwgdGFyZ2V0ID09IGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwYXRjaChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczogYW55KSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmhhbmRsZVtldmVudE5hbWVdO1xuICAgICAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBsaXN0W2ldO1xuICAgICAgICAgICAgZXZlbnQuZnVuYy5hcHBseShldmVudC50YXJnZXQsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUFsbCh0YXJnZXQ/OiBhbnkpIHtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmhhbmRsZVtrZXldO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gbGlzdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuaGFuZGxlW2tleV07XG4gICAgICAgICAgICAgICAgd2hpbGUgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBoYXNFdmVudChldmVudE5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuaGFuZGxlW2V2ZW50TmFtZV07XG4gICAgICAgIGlmICghbGlzdCB8fCBsaXN0Lmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGxpc3RbaV07XG4gICAgICAgICAgICBpZiAoY2IgPT0gZXZlbnQuZnVuYyAmJiAoIXRhcmdldCB8fCB0YXJnZXQgPT0gZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBMaXN0ZW5lck1hbmFnZXIgPSBMaXN0ZW5lck1hbmFnZXJDbGFzcy5nZXRJbnN0YW5jZSgpO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/panel/GamePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '246c2OOkGlKHoa6ZJOVEHI+', 'GamePanel');
// game/scripts/UI/panel/GamePanel.ts

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
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var BaseGamePanel_1 = require("../../../../frame/scripts/UI/Panel/BaseGamePanel");
var CustomSyncData_1 = require("../../Data/CustomSyncData");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var GameLayer_1 = require("../layer/GameLayer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePanel = /** @class */ (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GamePanel.prototype.start = function () {
        _super.prototype.start.call(this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_OVER, this.gameOver, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.REPORT_RIGHT, this.answerRight, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.REPORT_WRONG, this.answerWrong, this);
    };
    GamePanel.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_OVER, this.gameOver, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.REPORT_RIGHT, this.answerRight, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.REPORT_WRONG, this.answerWrong, this);
    };
    /**
     * 游戏入口
     * 这里已经拿到数据
     */
    GamePanel.prototype.setPanel = function () {
        _super.prototype.setPanel.call(this);
        // TODO 业务逻辑
        console.log("EditorManager.editorData.itemData", EditorManager_1.EditorManager.editorData.itemData);
        this.node.getComponent(GameLayer_1.default).init();
    };
    /**
     * 心跳回调（当actionId不相等时才会触发）
     * @param recovery
     */
    GamePanel.prototype.onRecoveryData = function (recovery) {
        _super.prototype.onRecoveryData.call(this, recovery);
        console.log("==========重连=============");
        this.node.getComponent(GameLayer_1.default).init();
    };
    /**
     * 作答正确
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    GamePanel.prototype.answerRight = function (isCurLevelFinish) {
        _super.prototype.answerRight.call(this, isCurLevelFinish);
    };
    /**
     * 作答错误
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    GamePanel.prototype.answerWrong = function (isCurLevelFinish) {
        if (isCurLevelFinish === void 0) { isCurLevelFinish = false; }
        _super.prototype.answerWrong.call(this, isCurLevelFinish);
    };
    /**
     * 游戏结束
     * 父类实现了结算界面（游戏结束或星级评判）的弹出
     */
    GamePanel.prototype.gameOver = function () {
        _super.prototype.gameOver.call(this);
    };
    /**
     * 重玩
     */
    GamePanel.prototype.onReplay = function () {
        _super.prototype.onReplay.call(this);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData = new CustomSyncData_1.CustomSyncData();
        this.node.getComponent(GameLayer_1.default).init();
    };
    // /**
    // * 附加题
    // */
    // protected onEnterAdditional() {
    //     super.onEnterAdditional();
    //     console.log("=========进入附加题============");
    //     SyncDataManager.getSyncData().customSyncData = new CustomSyncData();
    //     this.gamelayer._initData();
    // }
    GamePanel.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    GamePanel.className = 'GamePanel';
    GamePanel = __decorate([
        ccclass
    ], GamePanel);
    return GamePanel;
}(BaseGamePanel_1.default));
exports.default = GamePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxHYW1lUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLHFGQUE4RjtBQUM5RixrRkFBNkU7QUFDN0UsNERBQTJEO0FBQzNELGtEQUFpRDtBQUNqRCw2REFBNEQ7QUFDNUQsZ0RBQTJDO0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFhO0lBQXBEOztJQXNGQSxDQUFDO0lBbkZHLHlCQUFLLEdBQUw7UUFDSSxpQkFBTSxLQUFLLFdBQUUsQ0FBQztRQUNkLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0QsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksaUJBQU0sU0FBUyxXQUFFLENBQUM7UUFDbEIsaUNBQWUsQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BFLGlDQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOzs7T0FHRztJQUNPLDRCQUFRLEdBQWxCO1FBQ0ksaUJBQU0sUUFBUSxXQUFFLENBQUM7UUFDakIsWUFBWTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsNkJBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRDs7O09BR0c7SUFDTyxrQ0FBYyxHQUF4QixVQUF5QixRQUFrQjtRQUN2QyxpQkFBTSxjQUFjLFlBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLCtCQUFXLEdBQXJCLFVBQXNCLGdCQUF5QjtRQUMzQyxpQkFBTSxXQUFXLFlBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLCtCQUFXLEdBQXJCLFVBQXNCLGdCQUFpQztRQUFqQyxpQ0FBQSxFQUFBLHdCQUFpQztRQUNuRCxpQkFBTSxXQUFXLFlBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sNEJBQVEsR0FBbEI7UUFDSSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDTyw0QkFBUSxHQUFsQjtRQUNJLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBQ2pCLGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsTUFBTTtJQUNOLFFBQVE7SUFDUixLQUFLO0lBQ0wsa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxpREFBaUQ7SUFDakQsMkVBQTJFO0lBQzNFLGtDQUFrQztJQUNsQyxJQUFJO0lBRUosMEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxpQkFBTSxNQUFNLFlBQUMsRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQXBGYSxtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQURyQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBc0Y3QjtJQUFELGdCQUFDO0NBdEZELEFBc0ZDLENBdEZzQyx1QkFBYSxHQXNGbkQ7a0JBdEZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBTeW5jRGF0YSwgU3luY0RhdGFNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlcic7XG5pbXBvcnQgQmFzZUdhbWVQYW5lbCBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1VJL1BhbmVsL0Jhc2VHYW1lUGFuZWwnO1xuaW1wb3J0IHsgQ3VzdG9tU3luY0RhdGEgfSBmcm9tICcuLi8uLi9EYXRhL0N1c3RvbVN5bmNEYXRhJztcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRXZlbnRUeXBlJztcbmltcG9ydCB7IEVkaXRvck1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL0VkaXRvck1hbmFnZXInO1xuaW1wb3J0IEdhbWVMYXllciBmcm9tICcuLi9sYXllci9HYW1lTGF5ZXInO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBhbmVsIGV4dGVuZHMgQmFzZUdhbWVQYW5lbCB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnR2FtZVBhbmVsJztcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkdBTUVfT1ZFUiwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuUkVQT1JUX1JJR0hULCB0aGlzLmFuc3dlclJpZ2h0LCB0aGlzKTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5SRVBPUlRfV1JPTkcsIHRoaXMuYW5zd2VyV3JvbmcsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkdBTUVfT1ZFUiwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLlJFUE9SVF9SSUdIVCwgdGhpcy5hbnN3ZXJSaWdodCwgdGhpcyk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLlJFUE9SVF9XUk9ORywgdGhpcy5hbnN3ZXJXcm9uZywgdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ri45oiP5YWl5Y+jXG4gICAgICog6L+Z6YeM5bey57uP5ou/5Yiw5pWw5o2uXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldFBhbmVsKCkge1xuICAgICAgICBzdXBlci5zZXRQYW5lbCgpO1xuICAgICAgICAvLyBUT0RPIOS4muWKoemAu+i+kVxuICAgICAgICBjb25zb2xlLmxvZyhcIkVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pdGVtRGF0YVwiLCBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXRlbURhdGEpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVMYXllcikuaW5pdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOW/g+i3s+Wbnuiwg++8iOW9k2FjdGlvbklk5LiN55u4562J5pe25omN5Lya6Kem5Y+R77yJXG4gICAgICogQHBhcmFtIHJlY292ZXJ5XG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uUmVjb3ZlcnlEYXRhKHJlY292ZXJ5OiBTeW5jRGF0YSk6IHZvaWQge1xuICAgICAgICBzdXBlci5vblJlY292ZXJ5RGF0YShyZWNvdmVyeSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PemHjei/nj09PT09PT09PT09PT1cIik7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoR2FtZUxheWVyKS5pbml0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5L2c562U5q2j56GuXG4gICAgICog54i257G75a6e546w5LqG5pWw5o2u5LiK5oqlXG4gICAgICogQHBhcmFtIGlzQ3VyTGV2ZWxGaW5pc2gg5pys5YWz5piv5ZCm5a6M5oiQXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFuc3dlclJpZ2h0KGlzQ3VyTGV2ZWxGaW5pc2g6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIuYW5zd2VyUmlnaHQoaXNDdXJMZXZlbEZpbmlzaCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5L2c562U6ZSZ6K+vXG4gICAgICog54i257G75a6e546w5LqG5pWw5o2u5LiK5oqlXG4gICAgICogQHBhcmFtIGlzQ3VyTGV2ZWxGaW5pc2gg5pys5YWz5piv5ZCm5a6M5oiQXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFuc3dlcldyb25nKGlzQ3VyTGV2ZWxGaW5pc2g6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBzdXBlci5hbnN3ZXJXcm9uZyhpc0N1ckxldmVsRmluaXNoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuLjmiI/nu5PmnZ9cbiAgICAgKiDniLbnsbvlrp7njrDkuobnu5PnrpfnlYzpnaLvvIjmuLjmiI/nu5PmnZ/miJbmmJ/nuqfor4TliKTvvInnmoTlvLnlh7pcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2FtZU92ZXIoKSB7XG4gICAgICAgIHN1cGVyLmdhbWVPdmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YeN546pXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uUmVwbGF5KCkge1xuICAgICAgICBzdXBlci5vblJlcGxheSgpO1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YSA9IG5ldyBDdXN0b21TeW5jRGF0YSgpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVMYXllcikuaW5pdCgpO1xuICAgIH1cblxuICAgIC8vIC8qKlxuICAgIC8vICog6ZmE5Yqg6aKYXG4gICAgLy8gKi9cbiAgICAvLyBwcm90ZWN0ZWQgb25FbnRlckFkZGl0aW9uYWwoKSB7XG4gICAgLy8gICAgIHN1cGVyLm9uRW50ZXJBZGRpdGlvbmFsKCk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT096L+b5YWl6ZmE5Yqg6aKYPT09PT09PT09PT09XCIpO1xuICAgIC8vICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YSA9IG5ldyBDdXN0b21TeW5jRGF0YSgpO1xuICAgIC8vICAgICB0aGlzLmdhbWVsYXllci5faW5pdERhdGEoKTtcbiAgICAvLyB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKGR0KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
