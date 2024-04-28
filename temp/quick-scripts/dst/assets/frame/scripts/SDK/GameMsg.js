
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