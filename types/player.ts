// 用户播放器个性化信息
export interface PlayerProfile {
    /**
     * 弹幕发送设置
     */
    danmuSendSetting: DanmuSendSetting;
    /**
     * 弹幕设置
     */
    danMuSetting: DanmuSetting;
    /**
     * 播放器设置
     */
    playerSetting: PlayerSetting;
}
// 弹幕屏蔽设置
// 弹幕屏蔽位置
export interface DanmuShield {
    /**
     * 滚动模式
     */
    scroll: boolean;
    /**
     * 顶部
     */
    top: boolean;
    /**
     * 底部
     */
    bottom: boolean;
    /**
     * 颜色
     */
    color: boolean;
};
// 弹幕设置
export interface DanmuSetting {
    /**
     * 弹幕位置屏蔽设置
     */
    danmuShield: DanmuShield;
    /**
     * 弹幕透明度
     */
    opacity: number;
    /**
     * 弹幕显示占屏幕区域
     */
    area: number; // 25 占屏幕的1/4 50 占屏幕的1/2/半屏 75 占屏幕的3/4 100 不重叠 0 不限
    /**
     * 弹幕屏幕缩放
     */
    fullscreensync: boolean;
    /**
     * 弹幕字体大小
     */
    fontsize: number;
    /**
     * 弹幕播放速度
     */
    speed: number;
};
// 播放器设置
export interface PlayerSetting {
    /**
     * 音量
     */
    volume: number;
    /**
     * 是否打开弹幕
     */
    displayDanmu: boolean;
    /**
     * 是否开启镜像画面
     */
    mirrorImage: boolean;
    /**
     * 是否开始循环播放
     */
    loop: boolean;
    /**
     * 自动播放
     */
    autoPlay: boolean;
    /**
     * 播放方式
     */
    playMode: 'autoNextEpisode' | 'pauseOnEnd '; // 自动切集 播完暂停
    /**
     * 视频比例
     */
    videoRatio: 'auto' | '4:3' | '16:9';

};
// 弹幕发送设置
export interface DanmuSendSetting {
    /**
     * 弹幕发送字体大小
     */
    fontSize: number;
    /**
     * 弹幕模式
     */
    mode: string; // scroll 滚动 top 顶部 bottom 底部
    /**
     * 弹幕颜色
     */
    color: string; // 默认白色  #FFFFFF
}