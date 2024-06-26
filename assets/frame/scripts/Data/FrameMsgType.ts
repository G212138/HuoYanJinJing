export class FrameMsgType {
    public static readonly ON_EDIT_STATE_SWITCHING = 'ON_EDIT_STATE_SWITCHING';

    // 数据同步类型
    public static readonly ON_TOUCH_CLICK = 'ON_TOUCH_CLICK';
    public static readonly ON_TOUCH_START = 'ON_TOUCH_START';
    public static readonly ON_TOUCH_MOVE = 'ON_TOUCH_MOVE';
    public static readonly ON_TOUCH_END = 'ON_TOUCH_END';
    // 心跳
    public static readonly ON_HEART_BREAK = 'ON_HEART_BREAK';
    // 数据恢复
    public static readonly ON_RECOVERY_DATA = 'ON_RECOVERY_DATA';
    // 再玩一次
    public static readonly REPLAY_START = 'REPLAY_START';
    // 进入附加题
    public static readonly ENTER_ADDITION = 'ENTER_ADDITION';
    // 题干语音播放完成
    public static readonly COMPLETE_TRUMPET = 'COMPLETE_TRUMPET';
    /**  全局遮罩 */
    public static readonly ON_MASK = 'ON_MASK';
    // 数据恢复遮罩
    public static readonly MASK_RECOVER = 'MASK_RECOVER';
    // OverTips关闭按钮
    public static readonly OVERTIPS_CLOSE = 'OVERTIPS_CLOSE';
    // AffirmTips确认按钮
    public static readonly AFFIRMTIPS_SURE = 'AFFIRMTIPS_SURE';
    // AffirmTips取消按钮
    public static readonly AFFIRMTIPS_CANCEL = 'AFFIRMTIPS_CANCEL';
    // 第一次接收到心跳
    public static readonly ON_FIRST_BREAK = 'ON_FIRST_BREAK';
    // TeacherPanel的loading层开关
    public static readonly TEACHER_PANEL_LOADING = 'TEACHER_PANEL_LOADING';
    // 预加载-Panel Ready
    public static readonly PRELOAD_GAME_SHOW = 'PRELOAD_GAME_SHOW';

    /*****************************************************************/
    /** SDK内部事件 */
    public static readonly ACTION_SYNC_RECEIVE = 'action_sync_receive'; //游戏操作交互同步  //交互游戏暂不处理此消息
    public static readonly DISABLED = 'disabled'; //是否可以操作游戏 0禁用 1开启 默认1  //交互游戏暂不处理此消息
    public static readonly RELOAD = 'reload'; //重新加载游戏  //在index.html监听
    public static readonly DATA_RECOVERY = 'data_recovery'; //游戏数据恢复
    public static readonly STOP = 'stop'; //停止游戏（游戏需要返回finish）
    public static readonly INIT = 'init'; //恢复游戏到初始化界面
    public static readonly THRESHHOLD = 'threshhold'; //游戏消息频率（默认100ms/次）

    public static readonly PLAYBGM = 'play_bgm'; //播放背景音
    public static readonly RESUMEBGM = 'resume_bgm'; //恢复背景音
    public static readonly STOPBGM = 'stop_bgm'; //停止背景音
    public static readonly PLAYAUDIOTITLE = 'play_audio_title'; //播放题干音
    public static readonly STOPAUDIOTITLE = 'stop_audio_title'; //停止题干音
    public static readonly STOPALLAUDIO = 'stop_all_audio'; //停止语音（包括题干）
    public static readonly STOPALLEFFECT = 'stop_all_effect'; //停止音效
    public static readonly STOPALL = 'stop_all'; //停止所有（不包括背景）

    /*****************************************************************/
}
