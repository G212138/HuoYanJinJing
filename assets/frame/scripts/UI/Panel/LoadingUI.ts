import { ConstValue } from '../../../../game/scripts/Data/ConstValue';
import GamePanel from '../../../../game/scripts/UI/panel/GamePanel';
import TeacherPanel from '../../../../game/scripts/UI/panel/TeacherPanel';
import { NetWork } from '../../Http/NetWork';
import { SoundManager } from '../../Manager/SoundManager';
import { UIManager } from '../../Manager/UIManager';
import GameMsg from '../../SDK/GameMsg';
import BaseFrameUI from '../BaseFrameUI';
import { BaseUI, UIClass } from '../BaseUI';

const { ccclass, property } = cc._decorator;

@ccclass
export class LoadingUI extends BaseFrameUI {
    public static className = 'LoadingUI';

    private isLoadStart = false;
    private readonly _resProgress: number = 20;
    private readonly _audioProgress: number = 10;

    onLoad() {
        NetWork.GetRequest();

        this.initPanelBySubject();
        this.init();
    }

    async init() {
        await this.loadPreloadDir();
        this.setLoadingProgressUI(this._resProgress);
        this.loadAudio();
    }

    // 根据学科设置界面
    initPanelBySubject() {
        const subject: number = ConstValue.Subject || 1;
    }

    // 预加载音频
    async loadAudio() {
        SoundManager.preLoadAllAudioClips(() => {
            this.setLoadingProgressUI(this._resProgress + this._audioProgress);
            this.openPanel();
        });
    }

    // 预加载 'resources/preload' 目录下的资源
    async loadPreloadDir() {
        return new Promise<void>((resolve, reject) => {
            cc.resources.loadDir('preload', cc.Asset, (error: Error, assets: cc.Asset[]) => {
                resolve();
            });
        });
    }

    // 打开界面
    openPanel() {
        let onProgress = (completedCount: number, totalCount: number, item: any) => {
            if (!this.isLoadStart) {
                this.isLoadStart = true;

                //新课堂上报
                GameMsg.resLoadStart();
            }
            const finishProgress = this._resProgress + this._audioProgress;
            let value = finishProgress + Math.round((completedCount / totalCount) * (100 - finishProgress));
            this.setLoadingProgressUI(value);
        };

        let openPanel: UIClass<BaseUI> = ConstValue.IS_TEACHER ? TeacherPanel : GamePanel;

        UIManager.openUI(
            openPanel,
            this,
            0,
            () => {
                //新课堂上报
                GameMsg.resLoadEnd();
            },
            onProgress,
        );
    }

    setLoadingProgressUI(value: number) {
        //新课堂上报
        GameMsg.resLoading(value);

        window.postMessage({
            type: 'cocos_load_res_progress',
            progress: value
        }, '*');
    }
}
