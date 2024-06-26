import { ConstValue } from '../../../game/scripts/Data/ConstValue';
import { EditorManager } from '../../../game/scripts/Manager/EditorManager';
import GameMsg from '../SDK/GameMsg';

/**
 * 作答数据管理类
 */
class ReportManagerClass {
    public static _instance: ReportManagerClass = null;
    public static getInstance() {
        if (!this._instance) {
            this._instance = new ReportManagerClass();
        }
        return this._instance;
    }

    /** 星级标准 */
    public _startLevelConfig: number[] = [80, 50, 0];
    /** ---------------------------必需参数--------------------------- */
    public _type: string = 'txt';
    public _result: Array<ExtraLevelData> = [];
    /** 附加题数据 */
    public _additionalResult: Array<AdditionalLevelData> = [];
    // public _gameOver: GameOverData = null;
    /** 第几次作答 */
    public _playIndex: number = 0;

    /** ---------------------------辅助参数--------------------------- */
    /** 每关开始时间 */
    public _levelStartTime: number = 0;

    /** 每关作答耗时 */
    public _coastTimeArr: number[] = [];
    /** 添加 关/步骤 时间 */
    public addCoastTime(tm: number) {
        let time = tm - this._levelStartTime;
        time = Math.ceil(time / 1000) * 1000; //时间取整
        this._coastTimeArr[this._curLevelId] = time;
    }
    /** 获取总耗时 */
    public getCoastTimes() {
        return this._coastTimeArr;
    }
    public setCoastTimes(arr: number[]) {
        this._coastTimeArr = arr;
    }

    /** 附加题每关作答耗时 */
    public _additionalCoastTimeArr: number[] = [];
    public addAdditionalCoastTime(tm: number) {
        let time = tm - this._levelStartTime;
        time = Math.ceil(time / 1000) * 1000; //时间取整
        this._additionalCoastTimeArr[this._curAdditionalId] = time;
    }
    public getAdditionalCoastTime() {
        return this._additionalCoastTimeArr;
    }
    public setAdditionalCoastTimes(arr: number[]) {
        this._additionalCoastTimeArr = arr;
    }

    /** 每关作答次数 */
    public _tryCounts: number[] = [];
    /** 获取总次数 */
    public getTryCounts() {
        return this._tryCounts;
    }
    public setTryCounts(arr: number[]) {
        this._tryCounts = arr;
    }
    /** 添加 关/步骤 次数 */
    public addTryCount(bCorrect: boolean) {
        if (this._tryCounts[this._curLevelId]) {
            this._tryCounts[this._curLevelId] += 1;
        } else {
            this._tryCounts[this._curLevelId] = 1;
        }

        if (void 0 === this._correctCounts[this._curLevelId]) {
            this._correctCounts[this._curLevelId] = 0;
        }
        if (bCorrect) {
            this._correctCounts[this._curLevelId] += 1;
        }
    }

    /** 附加题每关作答次数 */
    public _additionalTryCounts: number[] = [];
    /** 附加题获取总次数 */
    public getAdditionalTryCounts() {
        return this._additionalTryCounts;
    }
    public setAdditionalTryCounts(arr: number[]) {
        this._additionalTryCounts = arr;
    }
    /** 添加 关/步骤 次数 */
    public addAdditionalTryCount(bCorrect: boolean) {
        if (this._additionalTryCounts[this._curAdditionalId]) {
            this._additionalTryCounts[this._curAdditionalId] += 1;
        } else {
            this._additionalTryCounts[this._curAdditionalId] = 1;
        }

        if (void 0 === this._additionalCorrectCounts[this._curAdditionalId]) {
            this._additionalCorrectCounts[this._curAdditionalId] = 0;
        }
        if (bCorrect) {
            this._additionalCorrectCounts[this._curAdditionalId] += 1;
        }
    }

    /** 实际作答正确次数 */
    public _correctCounts: number[] = [];
    public getCorrectCounts() {
        return this._correctCounts;
    }
    public setCorrectCounts(arr: number[]) {
        this._correctCounts = arr;
    }

    /** 实际作答正确次数 */
    public _additionalCorrectCounts: number[] = [];
    public getAdditionalCorrectCounts() {
        return this._additionalCorrectCounts;
    }
    public setAdditionalCorrectCounts(arr: number[]) {
        this._additionalCorrectCounts = arr;
    }

    /** 每关作答状态 */
    public _AnswerResults: AnswerResult[] = [];
    /** 获取总次数 */
    public getAnswerResults() {
        return this._AnswerResults;
    }
    public setAnswerResults(arr: AnswerResult[]) {
        this._AnswerResults = arr;
    }
    public setAnswerResultByLevel(level: number, answer: AnswerResult) {
        this._AnswerResults[level] = answer;
    }

    /** 附加题每关作答状态 */
    public _additionalAnswerRes: AnswerResult[] = [];
    /** 获取附加题总次数 */
    public getadditionalAnswerRes() {
        return this._additionalAnswerRes;
    }
    public setAdditionalAnswerRes(arr: AnswerResult[]) {
        this._additionalAnswerRes = arr;
    }
    public setAdditionalAnswerResultByLevel(level: number, answer: AnswerResult) {
        this._additionalAnswerRes[level] = answer;
    }

    /** 总关卡数目 */
    public _levelCount: number = 0;

    /** 当前关卡id  从0开始*/
    public _curLevelId: number = 0;

    /** 总附加题关卡数目 */
    public _additionalCount: number = 0;

    /** 当前附加题关卡id，从0开始 */
    public _curAdditionalId: number = 0;

    /** 实际作答正确次数 */
    // public _correctCount: number = 0;

    /** 是否全部关卡通关 */
    public isAllOver: boolean = false;

    /** 是否整体未操作 */
    // public _isUndo: boolean = true;

    /**
     * 是否 当前步骤/关卡 未操作，
     * 只要用户有操作就修改此值
     * */
    // public _isCurLevelUndo: boolean = true;

    /** 是否已经上报过game_over */
    public _isReportedGameOver: boolean = false;

    /** 需要判断正误的总步数 */
    public _stepCount: number = 0;

    /**
     * 初始化要上报的数据
     *
     * @param {number} levelCount 关卡总数
     */
    public initReportData(levelCount: number) {
        this._playIndex = 1;

        this._levelCount = levelCount;
        this._additionalCount = EditorManager.editorData.additional.length;

        this.resetData();

        if (EditorManager['getStepCount']) {
            this._stepCount = EditorManager['getStepCount']();
        } else {
            this._stepCount = levelCount;
        }
        GameMsg.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
    }

    /**
     * 通关之后的重玩
     *  只有外层index自增   其余数据恢复初始状态
     *
     * @memberof DataReportMgr
     */
    public replayGame() {
        ++this._playIndex;

        this.resetData();

        GameMsg.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
    }

    /**
     * 重置数据
     */
    public resetData() {
        this._curLevelId = 0;
        this._curAdditionalId = 0;
        this.isAllOver = false;
        this._isReportedGameOver = false;

        this._result = [];
        for (let i = 0; i < this._levelCount; i++) {
            let levelInfo = this._levelCount > 1 ? `${ConstValue.GameName}_第${i + 1}关` : ConstValue.GameName;
            let _levelData = new ExtraLevelData();
            _levelData.id = i + 1;
            _levelData.question_info = levelInfo;
            this._result.push(_levelData);
        }

        /**获取附附加题关卡数量 */
        this._curAdditionalId = 0;
        this._additionalResult = [];
        for (let i = 0; i < this._additionalCount; i++) {
            let info = `附加题_第${i + 1}关`
            let data = new AdditionalLevelData();
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
    }

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
    public reportLevelResult(bCorrect: boolean, bCurLevelFinish: boolean = true) {
        let curTime = Date.now();
        if (this._curLevelId >= this._levelCount) {
            if (void 0 === this._additionalResult[this._curAdditionalId]) return;
            this.addAdditionalCoastTime(curTime);
            this.addAdditionalTryCount(bCorrect);
            let answerRes = AnswerResult.NoAnswer;
            if (bCorrect) {
                answerRes = bCurLevelFinish ? AnswerResult.AnswerRight : AnswerResult.AnswerHalf;
            } else {
                answerRes = AnswerResult.AnswerError;
            }
            this.setAdditionalAnswerResultByLevel(this._curAdditionalId, answerRes);
            let _reportData = this.getReportData();
            console.log("additional report level data: ", _reportData);
            GameMsg.additionalAnswerSyncSend(_reportData);

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
            if (void 0 === this._result[this._curLevelId]) return;
            this.addCoastTime(curTime);
            this.addTryCount(bCorrect);
            let answerRes = AnswerResult.NoAnswer;
            if (bCorrect) {
                answerRes = bCurLevelFinish ? AnswerResult.AnswerRight : AnswerResult.AnswerHalf;
            } else {
                answerRes = AnswerResult.AnswerError;
            }
            this.setAnswerResultByLevel(this._curLevelId, answerRes);

            let _reportData = this.getReportData();
            _reportData.gameOver = null;
            console.log(_reportData);
            GameMsg.answerSyncSend(_reportData);

            if (bCurLevelFinish) {
                ++this._curLevelId;
                this._levelStartTime = Date.now();
                if (this._curLevelId === this._levelCount) {
                    this.isAllOver = true;
                    this.reportGameOver();
                } else {
                    GameMsg.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
                }
            }
        }
    }

    /**
     * 作答结束/端上收题 数据上报
     *
     * @memberof DataReportMgr
     */
    public reportGameOver() {
        if (this._isReportedGameOver) {
            return;
        }

        let _reporGameOvertData = this.getReportData();
        console.log(_reporGameOvertData);
        if (this._curLevelId === this._levelCount && this._additionalCount > 0 && this._curAdditionalId === this._additionalCount) {
            GameMsg.additionalOver(_reporGameOvertData)
        }
        else {
            GameMsg.gameOver(_reporGameOvertData);
        }
        GameMsg.gameStatisticData(_reporGameOvertData.ext);

        /** 上报game_over数据之后修改状态 */
        this._isReportedGameOver = true;
    }

    /**
     * 获取关卡数据
     */
    public getResultData(isExtra: boolean): LevelData[] | ExtraLevelData[] {
        for (let i = 0; i < this._result.length; ++i) {
            let levelData = this._result[i];
            const levelIndex = levelData.id - 1;
            const answerResult = this.getAnswerResults()[levelIndex] || AnswerResult.NoAnswer;
            const answerNum = this.getTryCounts()[levelIndex] || 0;
            const answerCorrect = this.getCorrectCounts()[levelIndex] || 0;
            const answerWrong = answerNum - answerCorrect;
            const answerTime = Math.ceil((this.getCoastTimes()[levelIndex] || 0) / 1000);
            levelData.answer_res = answerResult;
            levelData.answer_num = answerNum;
            levelData.correct_num = answerCorrect;
            levelData.wrong_num = answerWrong;
            levelData.answer_time = answerTime;
            levelData.has_res = EditorManager.hasResult;
        }

        if (isExtra) {
            return this._result;
        } else {
            let result = [];
            this._result.forEach((info) => {
                let extraLevelData = new LevelData();
                extraLevelData.id = info.id;
                extraLevelData.question_info = info.question_info;
                extraLevelData.answer_res = info.answer_res;
                extraLevelData.answer_num = info.answer_num;
                extraLevelData.answer_time = info.answer_time;

                result.push(extraLevelData);
            });

            return result;
        }
    }

    /**
     * 获取附加题数据
     */
    public getAdditionalResultData(): AdditionalData {
        for (let i = 0, l = this._additionalResult.length; i < l; i++) {
            let levelData = this._additionalResult[i];
            const levelIndex = levelData.id - 1;
            const answerResult = this.getadditionalAnswerRes()[levelIndex] || AnswerResult.NoAnswer;
            const answerNum = this.getAdditionalTryCounts()[levelIndex] || 0;
            const answerCorrect = this.getAdditionalCorrectCounts()[levelIndex] || 0;
            const answerWrong = answerNum - answerCorrect;
            const answerTime = Math.ceil((this.getAdditionalCoastTime()[levelIndex] || 0) / 1000);
            levelData.answer_res = answerResult;
            levelData.answer_num = answerNum;
            levelData.correct_num = answerCorrect;
            levelData.wrong_num = answerWrong;
            levelData.answer_time = answerTime;
        }
        let addRes = new AdditionalOver();
        addRes.pass = false;
        if (this._curAdditionalId == this._additionalCount) {
            addRes.pass = true;
        }
        let addData = new AdditionalData();
        addData.gameOver = addRes;
        addData.result = this._additionalResult;
        return addData;
    }


    /**
     * 获取gameOver数据
     */
    public getGameOverData(isExtra: boolean): GameOverData | ExtraGameOverData {
        let totalTryCount = eval(this.getTryCounts().join('+'));
        totalTryCount = totalTryCount ? totalTryCount : 0;
        let totalCorrectCount = eval(this.getCorrectCounts().join('+'));
        totalCorrectCount = totalCorrectCount ? totalCorrectCount : 0;
        const totalWrongCount = totalTryCount - totalCorrectCount;
        let totalTimes = eval(this.getCoastTimes().join('+'));
        totalTimes = totalTimes ? totalTimes : 0;

        let gameOver: GameOverData | ExtraGameOverData = null;
        if (isExtra) {
            gameOver = new ExtraGameOverData();
            (gameOver as ExtraGameOverData).game_correct_num = totalCorrectCount;
            (gameOver as ExtraGameOverData).game_wrong_num = totalWrongCount;
            (gameOver as ExtraGameOverData).cur_level_id = Math.min(this._curLevelId + 1, this._levelCount);
            (gameOver as ExtraGameOverData).total_level_num = this._levelCount;
            (gameOver as ExtraGameOverData).star_num = this.getStarCount();
            (gameOver as ExtraGameOverData).step_count = this._stepCount;
        } else {
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
    }

    public getExtraData(): ExtraData {
        let extraData: ExtraData = new ExtraData();
        extraData.type = this._type;
        extraData.index = this._playIndex;
        extraData.result = this.getResultData(true) as ExtraLevelData[];
        extraData.gameOver = this.getGameOverData(true) as ExtraGameOverData;

        return extraData;
    }

    public getReportData(): ReportData {
        let reportData: ReportData = new ReportData();
        reportData.type = this._type;
        reportData.index = this._playIndex;
        reportData.result = this.getResultData(false) as LevelData[];
        reportData.gameOver = this.getGameOverData(false) as GameOverData;
        reportData.ext = this.getExtraData();
        reportData.additional = this.getAdditionalResultData();

        return reportData;
    }

    /**
     * 获取星数
     */
    public getStarCount() {
        const gameOverData = this.getGameOverData(false);
        let starCount = 0;
        /** 计算星级 */
        if (gameOverData.percentage >= this._startLevelConfig[0]) {
            starCount = 3;
        } else if (gameOverData.percentage >= this._startLevelConfig[1]) {
            starCount = 2;
        } else if (gameOverData.percentage > this._startLevelConfig[2]) {
            starCount = 1;
        } else {
            starCount = 0;
        }

        return starCount;
    }

    /**
     * 需要同步的数据
     *
     * @memberof DataReportMgr
     */
    public getSyncData() {
        let _data = {
            bReportedGameOver: this._isReportedGameOver, //是否已经上报过game_over
            playCount: this._playIndex, //统计作答次数  以通关为维度
            startTime: this._levelStartTime, //每关开始时间
            coastTimes: this.getCoastTimes(), //每关作答耗时
            tryCounts: this.getTryCounts(), //每关尝试次数
            correctCounts: this.getCorrectCounts(), //每关作答正确次数
            curLevelId: this._curLevelId, //当前关卡
            curAdditionalId: this._curAdditionalId,
            bFinished: this.isAllOver,
            answerResults: this.getAnswerResults(), //每关作答状态
            additionalRes: this.getadditionalAnswerRes() //附加题每关作答状态
        };
        return _data;
    }

    /**
     * 设置接收到的作答状态到本地
     *
     * @param {*} data
     * @memberof DataReportMgr
     */
    public setSyncData(data: any) {
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

        GameMsg.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
    }

    public isPassGame() {
        console.log("curLevelId and levelCount", this._curLevelId, this._levelCount);
        return this._curLevelId === this._levelCount;
    }

    public isPassAdditonal() {
        console.log("_curAdditionalId and _additionalCount", this._curAdditionalId, this._additionalCount);
        return this._curAdditionalId === this._additionalCount;
    }
}
export const ReportManager = ReportManagerClass.getInstance();

export enum AnswerResult {
    AnswerError = 'answer_error', //答错
    AnswerRight = 'answer_right', //答对
    AnswerHalf = 'answer_half', //未答完
    NoAnswer = 'no_answer', //未作答
}

/**
 * 单关作答数据
 */
export class LevelData {
    /** 关卡ID */
    id: number = 0;
    /** 题目信息 */
    question_info: string = '';
    /** 关卡作答结果  answer_error/answer_right/answer_half/no_answer */
    answer_res: AnswerResult = AnswerResult.NoAnswer;
    /** 关卡作答次数 */
    answer_num: number = 0;
    /** 关卡作答时间 */
    answer_time: number = 0;
}

/**
 * 单关作答数据(额外上报)
 */
export class ExtraLevelData extends LevelData {
    /** 关卡作答正确步数 */
    correct_num: number = 0;
    /** 关卡作答错误步数 */
    wrong_num: number = 0;
    /** 是否有结果 */
    has_res: boolean = true;
}

/**
 * gameOver字段内容
 * 其中 percentage 字段在 未通关 的时候，数值为0
 */
export class GameOverData {
    /** 正确率 */
    percentage = 0;
    /** 总作答状态 */
    answer_all_state = AnswerResult.NoAnswer;
    /** 总作答时间 */
    answer_all_time = 0;
    /** 完成度 */
    complete_degree = 0;
}

/**
 * gameOver字段内容(额外上报)
 */
export class ExtraGameOverData extends GameOverData {
    /** 总作答正确步数 */
    game_correct_num: number = 0;
    /** 总作答错误步数 */
    game_wrong_num: number = 0;
    /** 当前关卡id */
    cur_level_id: number = 1;
    /** 总关卡数 */
    total_level_num: number = 0;
    /** 星级 */
    star_num: number = 0;
    /** 总步数 */
    step_count: number = 0;
}

/**
 * 额外数据上报
 * */
export class ExtraData {
    /** 格式类型 */
    type: string = 'txt';
    /** 第几次作答 */
    index: number = 1;
    /** 关卡作答结果 */
    result: ExtraLevelData[] = [];
    /** gameOver数据 */
    gameOver: ExtraGameOverData = new ExtraGameOverData();
}

export class AdditionalLevelData extends LevelData {
    /** 关卡作答正确步数 */
    correct_num: number = 0;
    /** 关卡作答错误步数 */
    wrong_num: number = 0;
}

export class AdditionalOver {
    pass: boolean = false;
}

export class AdditionalData {
    gameOver: AdditionalOver = new AdditionalOver();
    result: AdditionalLevelData[] = []
}

export class ReportData {
    /** 格式类型 */
    type: string = 'txt';
    /** 第几次作答 */
    index: number = 1;
    /** 关卡作答结果 */
    result: LevelData[] = [];
    /** gameOver数据 */
    gameOver: GameOverData = new GameOverData();
    /** 额外数据上报 */
    ext: ExtraData = new ExtraData();

    /**附加题数据 */
    additional: AdditionalData = new AdditionalData();
}
