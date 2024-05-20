
(function () {
var scripts = [{"deps":{"./assets/game/scripts/SkeletonExt":4,"./assets/frame/scripts/Data/FrameSyncData":8,"./assets/frame/scripts/UI/BindNode":15,"./assets/frame/scripts/SDK/GameMsg":16,"./assets/frame/scripts/UI/AdaptiveScreen":19,"./assets/frame/scripts/UI/Item/Tip":22,"./assets/frame/scripts/Utils/BoundingBoxHelp":29,"./assets/frame/scripts/Utils/Tools":36,"./assets/frame/scripts/Data/FrameMsgType":37,"./assets/frame/scripts/Utils/HitTest":38,"./assets/frame/scripts/Utils/MathUtils":39,"./assets/game/scripts/Data/EventType":41,"./assets/game/scripts/Manager/EditorManager":42,"./assets/game/scripts/Data/CustomSyncData":47,"./assets/game/scripts/Data/ConstValue":49,"./assets/game/scripts/Manager/GameManager":50,"./assets/frame/scripts/Data/FrameConstValue":52,"./assets/frame/scripts/Manager/ListenerManager":53,"./assets/frame/scripts/Manager/SyncDataManager":2,"./assets/frame/scripts/UI/Item/MoreChallenge":1,"./assets/frame/scripts/SDK/T2M":5,"./assets/frame/scripts/Utils/AudioPlayExtension":7,"./assets/game/scripts/Components/DragGroupSync":9,"./assets/frame/scripts/Manager/UIManager":10,"./assets/game/scripts/UI/panel/TeacherPanel":3,"./assets/frame/scripts/Manager/SoundManager":11,"./assets/frame/scripts/Manager/ReportManager":12,"./assets/frame/scripts/UI/BaseFrameUI":13,"./assets/frame/scripts/UI/BaseUI":14,"./assets/frame/scripts/UI/GameMain":20,"./assets/frame/scripts/UI/Panel/BaseGamePanel":6,"./assets/frame/scripts/Utils/UIHelp":34,"./assets/frame/scripts/Utils/BoundingBoxDemo":35,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":17,"./assets/frame/scripts/UI/Item/MaskGlobal":18,"./assets/frame/scripts/UI/Item/TitleNode":21,"./assets/frame/scripts/UI/Panel/OverTips":23,"./assets/frame/scripts/UI/Panel/ErrorPanel":24,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":26,"./assets/frame/scripts/UI/Item/replayBtn":25,"./assets/frame/scripts/UI/Panel/LoadingUI":27,"./assets/frame/scripts/UI/Item/MaskRecover":28,"./assets/frame/scripts/UI/Panel/SubmissionPanel":30,"./assets/frame/scripts/UI/Panel/TipUI":31,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":32,"./assets/frame/scripts/UI/Panel/AffirmTips":33,"./assets/frame/scripts/UI/Panel/StarCount":40,"./assets/frame/scripts/Http/NetWork":44,"./assets/game/scripts/Components/ButtonSync":46,"./assets/game/scripts/Components/DragSyncNew":48,"./assets/game/scripts/Components/DragSync":51,"./assets/game/scripts/UI/Item/GameItem":43,"./assets/game/scripts/UI/layer/GameLayer":45,"./assets/game/scripts/UI/panel/GamePanel":54,"./assets/game/scripts/UI/Item/ConfigItem":55},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../SDK/T2M":5,"../../Data/FrameMsgType":37},"path":"preview-scripts/assets/frame/scripts/UI/Item/MoreChallenge.js"},{"deps":{"../../../frame/scripts/Data/FrameSyncData":8,"../../../frame/scripts/Manager/ReportManager":12,"../../../game/scripts/Data/CustomSyncData":47},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{"../../../../frame/scripts/Data/FrameMsgType":37,"../../../../frame/scripts/Manager/UIManager":10,"../../../../frame/scripts/Manager/ListenerManager":53,"../../../../frame/scripts/Utils/UIHelp":34,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":26,"../Item/ConfigItem":55,"../../Manager/EditorManager":42,"./GamePanel":54},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{"../Data/FrameMsgType":37,"../Http/NetWork":44,"../Manager/ListenerManager":53,"../Manager/SyncDataManager":2,"./GameMsg":16,"../Utils/UIHelp":34},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"../../../../game/scripts/Manager/EditorManager":42,"../../../../game/scripts/Data/ConstValue":49,"../../Http/NetWork":44,"../../Data/FrameMsgType":37,"../../Manager/ListenerManager":53,"../../Manager/SoundManager":11,"../../Manager/ReportManager":12,"../../Manager/SyncDataManager":2,"../../SDK/GameMsg":16,"../../Manager/UIManager":10,"../../Utils/UIHelp":34,"../BaseUI":14,"../../SDK/T2M":5},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"./../Manager/SoundManager":11},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{"../../../frame/scripts/SDK/T2M":5},"path":"preview-scripts/assets/game/scripts/Components/DragGroupSync.js"},{"deps":{"../UI/BaseUI":14},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{"../Data/FrameConstValue":52,"../Http/NetWork":44,"../SDK/GameMsg":16,"../Data/FrameMsgType":37,"./UIManager":10,"./ListenerManager":53},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{"../../../game/scripts/Data/ConstValue":49,"../../../game/scripts/Manager/EditorManager":42,"../SDK/GameMsg":16},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{"./BaseUI":14,"../Data/FrameConstValue":52},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{"../Manager/ListenerManager":53,"../Data/FrameConstValue":52,"./BindNode":15},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{"../../Data/FrameMsgType":37,"../../Manager/ListenerManager":53,"../BindNode":15},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{"../../Manager/ListenerManager":53,"../../Data/FrameMsgType":37,"../../Utils/UIHelp":34,"../../Manager/UIManager":10,"../BindNode":15},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":42,"../Data/FrameMsgType":37,"../Http/NetWork":44,"../Manager/ListenerManager":53,"../SDK/GameMsg":16,"../Manager/ReportManager":12,"../Manager/SoundManager":11,"../Manager/SyncDataManager":2,"../Manager/UIManager":10,"../SDK/T2M":5,"../Utils/UIHelp":34},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"../../Data/FrameMsgType":37,"../../Manager/ListenerManager":53},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"./../../Manager/SoundManager":11,"../../Utils/Tools":36,"../BaseFrameUI":13,"../../Utils/UIHelp":34,"../../SDK/T2M":5,"../../../../game/scripts/Manager/EditorManager":42,"../../Data/FrameMsgType":37,"../../Manager/ReportManager":12},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"../../Utils/UIHelp":34,"./../../Manager/SoundManager":11,"./../BaseFrameUI":13,"./../../SDK/GameMsg":16},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"../../Data/FrameMsgType":37,"../../SDK/T2M":5},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{"../../../../game/scripts/Manager/EditorManager":42,"../../../../game/scripts/Data/ConstValue":49,"../BaseUI":14,"../../Http/NetWork":44,"../../Utils/UIHelp":34},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{"../../../../game/scripts/UI/panel/GamePanel":54,"../../../../game/scripts/Data/ConstValue":49,"../../../../game/scripts/UI/panel/TeacherPanel":3,"../../Http/NetWork":44,"../../Manager/UIManager":10,"../../Manager/SoundManager":11,"../../SDK/GameMsg":16,"../BaseFrameUI":13},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"../../Data/FrameMsgType":37,"../BindNode":15,"../../Manager/UIManager":10,"../../Manager/ListenerManager":53},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{"../../Http/NetWork":44,"../../Utils/UIHelp":34,"../../../../game/scripts/Data/ConstValue":49,"../../../../game/scripts/Manager/EditorManager":42,"../BaseFrameUI":13},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"../Item/Tip":22,"../BaseFrameUI":13},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{"../BaseFrameUI":13,"./../../Manager/ListenerManager":53,"../../Data/FrameMsgType":37,"../../Utils/UIHelp":34,"../../Manager/ReportManager":12,"../../../../game/scripts/Manager/EditorManager":42,"../../SDK/T2M":5,"../../Manager/SoundManager":11},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{"../../SDK/T2M":5,"../../Data/FrameMsgType":37,"../BaseFrameUI":13,"../../Utils/UIHelp":34},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{"../../../game/scripts/UI/panel/TeacherPanel":3,"../../../game/scripts/UI/panel/GamePanel":54,"../Data/FrameMsgType":37,"../Manager/SyncDataManager":2,"../Manager/UIManager":10,"../UI/Panel/AffirmTips":33,"../Manager/ListenerManager":53,"../UI/Panel/OverTips":23,"../UI/Panel/ErrorPanel":24,"../UI/Panel/SubmissionPanel":30,"../UI/Panel/StarCount":40,"../UI/Panel/UploadAndReturnPanel":32,"../UI/Panel/TipUI":31},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{"./BoundingBoxHelp":29},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":49,"../../Utils/UIHelp":34,"../../../../game/scripts/Manager/EditorManager":42,"../../Utils/Tools":36,"../BaseFrameUI":13,"../../Manager/ReportManager":12,"./../../Manager/SoundManager":11},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{"../../../../frame/scripts/Manager/SoundManager":11,"../../Manager/EditorManager":42,"../../../../frame/scripts/Utils/Tools":36,"../../Data/EventType":41,"../../../../frame/scripts/Manager/SyncDataManager":2,"../../../../frame/scripts/Manager/ListenerManager":53},"path":"preview-scripts/assets/game/scripts/UI/Item/GameItem.js"},{"deps":{"../../../game/scripts/Data/ConstValue":49,"../Manager/UIManager":10,"../SDK/GameMsg":16,"../Utils/UIHelp":34},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{"../../../../frame/scripts/Utils/Tools":36,"../../../../frame/scripts/Manager/SyncDataManager":2,"../../../../frame/scripts/Manager/ListenerManager":53,"../../../../frame/scripts/Manager/SoundManager":11,"../../Data/EventType":41,"../../Manager/EditorManager":42,"../../../../frame/scripts/Utils/UIHelp":34},"path":"preview-scripts/assets/game/scripts/UI/layer/GameLayer.js"},{"deps":{"../../../frame/scripts/SDK/T2M":5},"path":"preview-scripts/assets/game/scripts/Components/ButtonSync.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{"../../../frame/scripts/SDK/T2M":5},"path":"preview-scripts/assets/game/scripts/Components/DragSyncNew.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{"../../../frame/scripts/SDK/T2M":5},"path":"preview-scripts/assets/game/scripts/Components/DragSync.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"../../Data/EventType":41,"../../../../frame/scripts/Manager/ListenerManager":53,"../../../../frame/scripts/UI/Panel/BaseGamePanel":6,"../../../../frame/scripts/Manager/SyncDataManager":2,"../../Data/CustomSyncData":47,"../../Manager/EditorManager":42,"../layer/GameLayer":45},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"},{"deps":{"../panel/TeacherPanel":3,"../../Manager/EditorManager":42},"path":"preview-scripts/assets/game/scripts/UI/Item/ConfigItem.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    