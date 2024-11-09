import type { PlayerProfile } from "@/types/player";
// 将用户个性化播放器信息存储到本地存储
export function setPlayerProfile(playerInfo: PlayerProfile) {
    localStorage.setItem('hl_player_profile', JSON.stringify(playerInfo));
}
// 读取用户个性化播放器信息
export function getPlayerProfile(): PlayerProfile {
    const localPlayerProfile = localStorage.getItem('hl_player_profile');
    if (localPlayerProfile === null) {
        setPlayerProfile(getDefaultPlayerProfile());
        return getDefaultPlayerProfile();
    } else {
        return JSON.parse(localPlayerProfile);
    }
}
// 默认视频播放器的配置信息
export function getDefaultPlayerProfile(): PlayerProfile {
    return {
        danmuSendSetting: {
            mode: 'scroll', // 默认弹幕模式为滚动
            color: '#ffffff', // 默认弹幕颜色为白色
            fontSize: 25, // 默认弹幕字体大小25
        },
        danMuSetting: {
            danmuShield: {
                scroll: false, // 默认关闭滚动弹幕屏蔽
                top: false, // 默认关闭顶部弹幕屏蔽
                bottom: false, // 默认关闭底部弹幕屏蔽
                color: false, // 默认关闭颜色弹幕屏蔽
            },
            area: 50, // 默认弹幕占屏幕一半区域
            fullscreensync: true, // 默认全屏缩放弹幕
            fontsize: 25, // 默认弹幕字体大小25
            opacity: 0.8, // 默认弹幕透明度0.8
            speed: 1 // 默认弹幕播放速度
        },
        playerSetting: {
            volume: 0.25, // 默认音量0.25
            autoPlay: true, // 默认自动播放
            displayDanmu: true, // 默认显示弹幕
            loop: false, // 默认循环播放
            mirrorImage: false, // 默认不镜像屏幕
            playMode: 'autoNextEpisode', // 默认自动切集
            videoRatio: 'auto' // 默认自动视频比例为自适应
        }
    }
}