
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
    EventType["TISHI"] = "TISHI";
    EventType["SET_GAMEINGTIP"] = "SET_GAMEINGTIP";
    EventType["NEXTTI"] = "NEXTTI";
    EventType["QINGQIU_COUNTDOWN"] = "QINGQIU_COUNTDOWN";
    EventType["GET_COUNTDOWN"] = "GET_COUNTDOWN";
    EventType["DAOJISHI_OVER"] = "DAOJISHI_OVER";
    EventType["clickSave"] = "clickSave";
    EventType["CLICK_START"] = "CLICK_START";
    EventType["CLICK_END"] = "CLICK_END";
    EventType["AGE_SLIDER"] = "AGE_SLIDER";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcRXZlbnRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRzs7O0FBRUgsSUFBWSxTQXdCWDtBQXhCRCxXQUFZLFNBQVM7SUFDakIsUUFBUTtJQUNSLG9EQUF1QyxDQUFBO0lBQ3ZDLDhDQUFpQyxDQUFBO0lBQ2pDLG9DQUF1QixDQUFBO0lBQ3ZCLHNDQUF5QixDQUFBO0lBQ3pCLG9DQUF1QixDQUFBO0lBQ3ZCLDBDQUE2QixDQUFBO0lBQzdCLDBDQUE2QixDQUFBO0lBQzdCLDRCQUFlLENBQUE7SUFDZiw4Q0FBaUMsQ0FBQTtJQUNqQyw4QkFBaUIsQ0FBQTtJQUVqQixvREFBdUMsQ0FBQTtJQUN2Qyw0Q0FBK0IsQ0FBQTtJQUMvQiw0Q0FBK0IsQ0FBQTtJQUUvQixvQ0FBdUIsQ0FBQTtJQUN2Qix3Q0FBMkIsQ0FBQTtJQUMzQixvQ0FBdUIsQ0FBQTtJQUd2QixzQ0FBeUIsQ0FBQTtBQUU3QixDQUFDLEVBeEJXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBd0JwQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6Ieq5a6a5LmJ5LqL5Lu257G75Z6LXG4gKi9cblxuZXhwb3J0IGVudW0gRXZlbnRUeXBlIHtcbiAgICAvLyBleGFtcFxuICAgIE9OX0JVVFRPTl9DTElDS0VEID0gJ09OX0JVVFRPTl9DTElDS0VEJyxcbiAgICBHQU1FX1JFQ09OTkVDVCA9IFwiR0FNRV9SRUNPTk5FQ1RcIixcbiAgICBHQU1FX0lOSVQgPSBcIkdBTUVfSU5JVFwiLFxuICAgIEdBTUVfU1RBUlQgPSBcIkdBTUVfU1RBUlRcIixcbiAgICBHQU1FX09WRVIgPSBcIkdBTUVfT1ZFUlwiLFxuICAgIFJFUE9SVF9XUk9ORyA9IFwiUkVQT1JUX1dST05HXCIsXG4gICAgUkVQT1JUX1JJR0hUID0gXCJSRVBPUlRfUklHSFRcIixcbiAgICBUSVNISSA9IFwiVElTSElcIixcbiAgICBTRVRfR0FNRUlOR1RJUCA9IFwiU0VUX0dBTUVJTkdUSVBcIixcbiAgICBORVhUVEkgPSBcIk5FWFRUSVwiLFxuXG4gICAgUUlOR1FJVV9DT1VOVERPV04gPSBcIlFJTkdRSVVfQ09VTlRET1dOXCIsXG4gICAgR0VUX0NPVU5URE9XTiA9IFwiR0VUX0NPVU5URE9XTlwiLFxuICAgIERBT0pJU0hJX09WRVIgPSBcIkRBT0pJU0hJX09WRVJcIixcblxuICAgIGNsaWNrU2F2ZSA9IFwiY2xpY2tTYXZlXCIsXG4gICAgQ0xJQ0tfU1RBUlQgPSBcIkNMSUNLX1NUQVJUXCIsXG4gICAgQ0xJQ0tfRU5EID0gXCJDTElDS19FTkRcIixcblxuXG4gICAgQUdFX1NMSURFUiA9IFwiQUdFX1NMSURFUlwiLFxuXG59XG4iXX0=