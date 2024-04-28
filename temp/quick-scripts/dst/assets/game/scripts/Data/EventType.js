
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