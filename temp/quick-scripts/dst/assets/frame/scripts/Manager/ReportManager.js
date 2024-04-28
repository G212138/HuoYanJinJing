
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