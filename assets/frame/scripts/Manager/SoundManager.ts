import { FrameConstValue } from '../Data/FrameConstValue';
import { FrameMsgType } from '../Data/FrameMsgType';
import { NetWork } from '../Http/NetWork';
import GameMsg from '../SDK/GameMsg';
import { ListenerManager } from './ListenerManager';
import { UIManager } from './UIManager';

/** 音乐的资源名称枚举 */
export enum MusicType {
    /** 背景音乐 */
    BGM_MUSIC = 'BGM_MUSIC',
    /** 题干语音 */
    TITLE_AUDIO = 'TITLE_AUDIO',
    /** 音效 */
    GAME_EFFECT = 'GAME_EFFECT',
    /** 语音 */
    GAME_AUDIO = 'GAME_AUDIO',
}

class SoundManagerClass {
    private static _instance: SoundManagerClass = null;
    private playing_sound: Object = new Object();
    // 缓存背景音乐名字
    private bgm: string = '';
    private bgmIndex: number = -1;
    // 语音列表
    private _audioList: Map<string, number> = new Map();
    // 音效列表
    private _effectList: Map<string, number> = new Map();
    // 音效统一的引用计数
    private _referenceList: Map<string, number> = new Map();
    // 题干语音
    private _titleID: number = null;
    /** 存放音频资源的 Map */
    public _audioClipMap: Map<string, cc.AudioClip> = new Map();

    public MUSIC_BGM = 'bgm';
    public AUDIO_TITLE = 'audio_sound';

    start() {
        GameMsg.addEvent(FrameMsgType.PLAYBGM, this.playBGM.bind(this));
        GameMsg.addEvent(FrameMsgType.RESUMEBGM, this.resumeBGM.bind(this));
        GameMsg.addEvent(FrameMsgType.STOPBGM, this.stopBGM.bind(this));
        GameMsg.addEvent(FrameMsgType.PLAYAUDIOTITLE, this.playAudioTitle.bind(this));
        GameMsg.addEvent(FrameMsgType.STOPAUDIOTITLE, this.stopAudioTitle.bind(this));
        GameMsg.addEvent(FrameMsgType.STOPALLAUDIO, this.stopAllAudio.bind(this));
        GameMsg.addEvent(FrameMsgType.STOPALLEFFECT, this.stopAllEffect.bind(this));
        GameMsg.addEvent(FrameMsgType.STOPALL, this.stopAll.bind(this));
    }

    public static getInstance(): SoundManagerClass {
        if (null === this._instance) {
            this._instance = new SoundManagerClass();
        }
        return this._instance;
    }

    // 获取音频资源
    public getAudioClip(clipName: string): cc.AudioClip {
        if (!this._audioClipMap.has(clipName)) {
            cc.log(`未缓存的音频资源: ${clipName}`);
            return null;
        } else {
            return this._audioClipMap.get(clipName);
        }
    }

    // 加载resource里的音效资源
    public preLoadResAudio(callback: (isCompleted: boolean) => void) {
        let path = FrameConstValue.GAME_AUDIO_DIR;
        cc.resources.loadDir(path, cc.AudioClip, (error, audioClips: cc.AudioClip[]) => {
            // 错误处理
            if (error) {
                cc.error(error);
                callback(false);
                return;
            }
            // 获取完毕后装入 Map
            audioClips.forEach((ele) => {
                // cc.log('缓存完毕! ele.name == ' + ele.name);
                this._audioClipMap.set(ele.name, ele);
                this._referenceList.set(ele.name, 0);
            });
            // 执行回调返回进度
            callback(true);
        });
    }

    // 加载frameRes里的音效资源
    public preLoadFrameAudio(callback: (isCompleted: boolean) => void) {
        let path = FrameConstValue.FRAME_AUDIO_DIR;
        cc.assetManager.loadBundle('frameRes', (err: Error, bundle: cc.AssetManager.Bundle) => {
            if (err) {
                cc.error(err);
                callback(false);
                return;
            }
            bundle.loadDir(path, cc.AudioClip, (error: Error, audioClips: cc.AudioClip[]) => {
                if (error) {
                    cc.error(error);
                    callback(false);
                    return;
                }
                audioClips.forEach((ele) => {
                    // cc.log('缓存完毕! ele.name == ' + ele.name);
                    this._audioClipMap.set(ele.name, ele);
                    this._referenceList.set(ele.name, 0);
                });
                callback(true);
            });
        });
    }

    // 缓存所有音频资源
    public preLoadAllAudioClips(callback: (isCompleted: boolean) => void) {
        /** 加载代码，参数为 url，资源类型，进度回调，完成回调 */
        let isCompletedLoadResAudio = false;
        let isCompletedLoadFrameAudio = false;
        this.preLoadResAudio((isCompleted: boolean) => {
            if (isCompleted) {
                cc.log('缓存完毕! preLoadResAudio ');
            }
            isCompletedLoadResAudio = true;
            if (isCompletedLoadResAudio && isCompletedLoadFrameAudio) {
                callback(true);
            }
        });

        this.preLoadFrameAudio((isCompleted: boolean) => {
            if (isCompleted) {
                cc.log('缓存完毕! preLoadFrameAudio ');
            }
            isCompletedLoadFrameAudio = true;
            if (isCompletedLoadResAudio && isCompletedLoadFrameAudio) {
                callback(true);
            }
        });
    }

    // 单独缓存某一个音频
    public preloadAudioClipName(clipName: string, callback: () => void) {
        let path = FrameConstValue.GAME_AUDIO_DIR + clipName;
        cc.log('preloadAudioClipName path == ' + path);
        cc.resources.load(path, cc.AudioClip, (error, asset: cc.Asset) => {
            if (error) {
                cc.error(error);
                return;
            }
            let clip = asset as cc.AudioClip;
            this._audioClipMap.set(clipName, clip);
            this._referenceList.set(clipName, 0);
            cc.log('缓存完毕!');
            callback();
        });
    }

    /**
     * 播放背景音乐
     * @param soundName 背景音乐文件名
     */
    public playBGM(soundName: string = '') {
        if (!UIManager.isGameShowing) {
            cc.warn(`不要在GamePanel的onLoad和start里播放音频！`);
            return;
        }

        if (NetWork.channel == 'blackboard') {
            return;
        }
        if (soundName == '') {
            soundName = this.MUSIC_BGM;
        }

        this.bgm = soundName;
        this.bgmIndex = -1;
        cc.audioEngine.stopMusic();
        let path = FrameConstValue.GAME_AUDIO_DIR + soundName;
        cc.resources.load(path, cc.AudioClip, (err, asset) => {
            if (err) {
                cc.error(err);
                return;
            }
            let clip = asset as cc.AudioClip;
            this.bgmIndex = cc.audioEngine.playMusic(clip, true);
        });
    }

    //重新开始播放背景音乐
    public resumeBGM() {
        cc.audioEngine.stopMusic();
        let path = FrameConstValue.GAME_AUDIO_DIR + this.bgm;
        cc.resources.load(path, cc.AudioClip, (err, asset) => {
            if (err) {
                cc.error(err);
                return;
            }
            let clip = asset as cc.AudioClip;
            cc.audioEngine.playMusic(clip, true);
        });
    }

    // 重新开始播放背景音乐
    public stopBGM() {
        this.bgm = '';
        this.bgmIndex = -1;
        cc.audioEngine.stopMusic();
    }

    // 设置背景音音量
    public setMusicVolume(volume: number, tweenDur = 0) {
        if (this.bgmIndex != -1) {
            volume = cc.misc.clamp01(volume);
            if (tweenDur == 0) {
                cc.audioEngine.setVolume(this.bgmIndex, volume);
            } else {
                let obj = { v: cc.audioEngine.getVolume(this.bgmIndex) };
                cc.tween(obj)
                    .to(
                        tweenDur,
                        { v: volume },
                        {
                            progress: (start, end, current, ratio) => {
                                let v = start + (end - start) * ratio;
                                cc.audioEngine.setVolume(this.bgmIndex, v);
                            },
                        },
                    )
                    .start();
            }
        }
    }

    /**
     * 播放题干语音
     *
     * @param {string} clipName 语音clip文件
     * @param {boolean} bLoop 是否循环
     * @param {boolean} [bInterupt=true] 是否打断其他语音,默认true
     * @param {boolean} [bMutex=false] 是否互斥（指音效和语音）,默认false
     * @memberof SoundManagerClass
     */
    public playAudioTitle(
        clipName: string | cc.AudioClip,
        bLoop: boolean = false,
        bInterupt: boolean = true,
        bMutex: boolean = false,
        endCb: Function = null,
    ) {
        // if (clipName == '') {
        //     clipName = this.AUDIO_TITLE;
        // }
        this.playAudio(clipName, bLoop, bInterupt, bMutex, endCb, true);
    }

    // ting zhi
    public stopAudioTitle() {
        this._audioList.forEach((value, key) => {
            // cc.log("this._audioList value == "+value)
            // cc.log("this._audioList key == "+key)
            if (null != this._titleID && this._titleID === value) {
                this._audioList.delete(key);
                cc.audioEngine.stopEffect(value);
            }
        });
        this._titleID = null;
        // 题干语音播放完回调
        ListenerManager.dispatch(FrameMsgType.COMPLETE_TRUMPET);
    }
    /**
     * 播放语音
     *
     * @param {string} clipName 语音clip文件
     * @param {boolean} bLoop 是否循环
     * @param {boolean} [bInterupt=true] 是否打断其他语音,默认true
     * @param {boolean} [bMutex=false] 是否互斥（指音效和语音）,默认false
     * @memberof SoundManagerClass
     */

    public playAudio(
        clipName: string | cc.AudioClip,
        bLoop: boolean,
        bInterupt: boolean = true,
        bMutex: boolean = false,
        onFinished: Function = null,
        isTitleAudio: boolean = false,
    ) {
        if (!UIManager.isGameShowing) {
            cc.warn(`不要在GamePanel的onLoad和start里播放音频！`);
            return;
        }

        if (!clipName) return;

        bInterupt && this.stopAllAudio();
        bMutex && this.stopAllEffect();

        let clip = null;

        if (typeof clipName === 'string') {
            clip = this.getAudioClip(clipName);
            if (clip == null) {
                SoundManager.preloadAudioClipName(
                    clipName,
                    function () {
                        clip = this._audioClipMap.get(clipName);
                        this.playAudio(clip, bLoop, bInterupt, bMutex, onFinished, isTitleAudio);
                    }.bind(this),
                );
                return;
            }
        } else {
            clip = clipName;
        }

        let id = cc.audioEngine.playEffect(clip, bLoop);
        // 赋值titleId
        if (isTitleAudio) {
            this._titleID = id;
            cc.log('this._titleID == ' + this._titleID);
        }
        this._audioList.set(clip.name, id);
        //播放引用计数加1
        let referenceCount = this._referenceList.get(clip.name);
        this._referenceList.set(clip.name, referenceCount++);
        cc.audioEngine.setFinishCallback(id, () => {
            //引用计数为0删除资源
            let referenceCount = this._referenceList.get(clip.name);
            if (referenceCount-- <= 0) {
                this.stopSoundByName(clip.name);
            }
            this._referenceList.set(clip.name, referenceCount < 0 ? 0 : referenceCount);
            setTimeout(() => {
                onFinished && onFinished();
            }, 100);
        });
    }
    /**
     * 播放音效
     *
     * @param {string} clipName 音效clip文件
     * @param {boolean} bLoop 是否循环
     * @param {boolean} [bInterupt=true] 是否打断其他音效,默认true
     * @param {boolean} [bMutex=false] 是否互斥（指音效和语音）,默认false
     * @memberof SoundManagerClass
     */

    public playEffect(
        clipName: string | cc.AudioClip,
        bLoop: boolean,
        bInterupt: boolean = true,
        bMutex: boolean = false,
        onFinished: Function = null,
    ) {
        if (!UIManager.isGameShowing) {
            cc.warn(`不要在GamePanel的onLoad和start里播放音频！`);
            return;
        }

        if (!clipName) return;

        bInterupt && this.stopAllEffect();
        bMutex && this.stopAllAudio();

        let clip = null;

        if (typeof clipName === 'string') {
            clip = this.getAudioClip(clipName);
            if (clip == null) {
                SoundManager.preloadAudioClipName(
                    clipName,
                    function () {
                        clip = this._audioClipMap.get(clipName);
                        this.playEffect(clip, bLoop, bInterupt, bMutex, onFinished);
                    }.bind(this),
                );
                return;
            }
        } else {
            clip = clipName;
        }

        let id = cc.audioEngine.playEffect(clip, bLoop);
        this._effectList.set(clip.name, id);
        //播放引用计数加1
        let referenceCount = this._referenceList.get(clip.name);
        this._referenceList.set(clip.name, referenceCount++);
        cc.audioEngine.setFinishCallback(id, () => {
            //引用计数为0删除资源
            let referenceCount = this._referenceList.get(clip.name);
            if (referenceCount-- <= 0) {
                this.stopSoundByName(clip.name);
            }
            this._referenceList.set(clip.name, referenceCount < 0 ? 0 : referenceCount);
            setTimeout(() => {
                onFinished && onFinished();
            }, 100);
        });
    }

    // 设置音效大小
    public setEffectVolume(volume: number) {
        volume = cc.misc.clamp01(volume);
        this._audioList.forEach((value, key) => {
            cc.audioEngine.setVolume(value, volume);
        });
    }

    // 停止语音
    public stopAllAudio() {
        this._audioList.forEach((value, key) => {
            if (null != this._titleID && this._titleID === value) {
                // 题干语音播放完回调
                ListenerManager.dispatch(FrameMsgType.COMPLETE_TRUMPET);
            }
            this._referenceList.set(key, 0);
            cc.audioEngine.stopEffect(value);
        });
        this._audioList = new Map();
        this._titleID = null;
    }

    // 停止音效
    public stopAllEffect() {
        this._effectList.forEach((value, key) => {
            this._referenceList.set(key, 0);
            cc.audioEngine.stopEffect(value);
        });
        this._effectList = new Map();
    }

    // 停止播放指定的音频通过名字
    public stopSoundByName(clipName: string) {
        this._referenceList.set(clipName, 0);
        let id = this._audioList.get(clipName);
        if (id != null && id != -1) {
            cc.audioEngine.stop(id);
            this._audioList.delete(clipName);
        }
        id = this._effectList.get(clipName);
        if (id != null && id != -1) {
            cc.audioEngine.stop(id);
            this._effectList.delete(clipName);
        }
    }

    // 停止正在播放的所有音频
    public stopAll() {
        this.stopAllAudio();
        this.stopAllEffect();
        cc.audioEngine.stopAll();
    }

    // 某个音效是否正在播放
    public isPlaying(clipName: string): boolean {
        let id = this._audioList.get(clipName);
        if (id != null && id != -1) {
            return true;
        }
        id = this._effectList.get(clipName);
        if (id != null && id != -1) {
            return true;
        }
        return false;
    }
}

export const SoundManager = SoundManagerClass.getInstance();
