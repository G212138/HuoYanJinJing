
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