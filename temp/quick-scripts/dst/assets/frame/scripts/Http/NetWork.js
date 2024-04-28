
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