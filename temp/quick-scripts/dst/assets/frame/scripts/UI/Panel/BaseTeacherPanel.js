
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