<template>
    <div class="player-controls">
        <div class="player-controls-wrap">
            <div class="player-controls-top">
                <div class="player-controls-progress">
                    <!-- 视频进度条 -->
                    <VideoplayerPlayerProgress 
                    :currentPer="props.currentTime / props.duration"
                    :bufferPer="props.buffer / props.duration"
                    :isUpload="props.isUpload"
                    @changeCurrent="handleChangeCurrent" />
                </div>
            </div>
            <div class="player-controls-bottom">
                <div class="player-controls-left">
                    <!-- 上一个 -->
                    <div class="player-controls-icon" v-if="false">
                        <IconsPlayNextPrev class="icon prev-icon"/>
                    </div>
                    <!-- 播放暂停按钮 -->
                    <div class="player-controls-play-icon" 
                    @click="togglePlayPause">
                        <IconsPlay class="icon" 
                        :style="props.playing ? 
                        'display: none;' : ''" />
                        <IconsPlaySuspend class="icon" 
                        :style="props.playing ? '' : 
                        'display: none;'" />
                    </div>
                    <!-- 下一个 -->
                    <div class="player-controls-icon" v-if="false">
                        <IconsPlayNextPrev class="icon"/>
                    </div>
                    <!-- 当前播放时间 -->
                    <div class="player-controls-play-time">
                        <div class="player-play-time">
                             <span>{{ formatTime(props.currentTime) }}</span>
                            <span> / </span>
                             <span>{{ formatTime(props.duration) }}</span>
                        </div>
                    </div>
                </div>
                <div class="player-controls-center" v-if="!props.isUpload">
                    <!-- 发送弹幕输入框 -->
                    <VideoplayerPlayerSendDmInput 
                    position="controls" 
                    :isFullscreen="props.fullscreen" 
                    :isWebFullScreen="props.webFullScreen"
                    :displayDanmu="props.displayDanmu"
                    @changDisplayDanmu="changDisplayDanmu" />
                </div>
                <div class="player-controls-right">
                    <!-- 清晰度切换 -->
                     <VideoplayerPanel 
                     v-if="!props.isUpload"
                     :panelStyle="props.fullscreen || props.webFullScreen ? 
                    'padding-bottom: 40px;' : 
                    'padding-bottom: 30px;'">
                        <template #reference>
                            <div class="player-controls-item controls-text controls-quality">
                                <span>1080P 60帧</span>
                            </div>
                        </template>
                        <template #content>
                            <VideoplayerCtrlmenuQuality />
                        </template>
                     </VideoplayerPanel>
                    <!-- 选集 -->
                    <div class="player-controls-item controls-text eplist-result" 
                    :style="props.fullscreen || props.webFullScreen ? '' : 
                    'display: none;'"
                    v-if="!props.isUpload">
                        <span>选集</span>
                    </div>
                    <!-- 倍速 -->
                    <VideoplayerPanel 
                    :isPanelShow="isShowPanelBackrat"
                    :panelStyle="props.fullscreen || props.webFullScreen ? 
                    'padding-bottom: 40px;' : 
                    'padding-bottom: 30px;'"
                    @isShowPanel="(isShowPanel: boolean) => {isShowPanelBackrat = isShowPanel}">
                        <template #reference>
                            <div class="player-controls-item controls-text controls-backrate">
                                <span>{{ backrateValue }}</span>
                            </div>
                        </template>
                        <template #content>
                            <VideoplayerCtrlmenuBackrate 
                            @selectedBackrate="handleSelectedBackrate"
                            @isShowMenu="(isShowPanel: boolean) => {isShowPanelBackrat = isShowPanel}"/>
                        </template>
                    </VideoplayerPanel>
                    <!-- 音量 -->
                    <VideoplayerPanel 
                    :panelStyle="props.fullscreen || props.webFullScreen ? 
                    'padding-bottom: 40px;' : 
                    'padding-bottom: 30px;'">
                        <template #reference>
                            <div class="player-controls-item controls-icon" 
                            @click="toggleMute">
                                <IconsPlayVolume class="icon" 
                                :style="props.volume === 0 || 
                                props.isMuted ? 'display: none;' : ''"/>
                                <IconsPlayMute class="icon" 
                                :style="props.volume === 0 || 
                                props.isMuted ? '' : 'display: none;'"/>
                            </div>
                        </template>
                        <template #content>
                            <VideoplayerCtrlmenuVolume 
                            :volume="props.volume"
                            :isMuted="props.isMuted"
                            @updateVolume="updateVolume"/>
                        </template>
                    </VideoplayerPanel>
                    <!-- 设置 -->
                     <VideoplayerPanel 
                     v-if="!props.isUpload"
                     :panelStyle="props.fullscreen || props.webFullScreen ? 
                     'padding-bottom: 40px;' : 
                     'padding-bottom: 30px;'"
                     @isShowPanel="handleIsShowSettingMorePanel">
                        <template #reference>
                            <div class="player-controls-item controls-icon">
                                <IconsPlaySetting class="icon"/>
                            </div>
                        </template>
                        <template #content>
                            <VideoplayerCtrlmenuSetting 
                            :isShowSettingMorePanel="hideSettingMorePanel"/>
                        </template>
                    </VideoplayerPanel>
                    <!-- 画中画 -->
                    <Tooltip 
                    v-if="!props.isUpload"
                    :overlayStyle="{ marginBottom: props.fullscreen || 
                        props.webFullScreen ? 36 + 'px' : 22 + 'px' }">
                        <template #tooltip>{{ props.inPictureInPicture ? '退出画中画' : '开启画中画'}}</template>
                        <div class="player-controls-item controls-icon" @click="togglePiP">
                            <IconsPlayCommon class="icon"/>
                        </div>
                    </Tooltip>
                    <!-- 宽屏 -->
                    <Tooltip 
                    v-if="!props.isUpload"
                    :overlayStyle="{ marginBottom: props.webFullScreen ? 
                        36 + 'px' : 22 + 'px' }"
                        :style="props.fullscreen ? 'display: none;' : ''">
                        <template #tooltip>{{ props.isWideScreen ? '退出宽屏' : '宽屏模式'}}</template>
                        <div class="player-controls-item controls-icon" @click="toggleWideScreen">
                            <IconsPlayWide class="icon"/>
                        </div>
                    </Tooltip>
                    <!-- 网页全屏 -->
                    <Tooltip 
                    v-if="!props.isUpload"
                    :overlayStyle="{ marginBottom: props.webFullScreen ? 
                        36 + 'px' : 22 + 'px' }" 
                    :style="props.fullscreen ? 'display: none;' : ''">
                        <template #tooltip>{{ props.webFullScreen ? '退出网页全屏' : '网页全屏'}}</template>
                        <div class="player-controls-item controls-icon" 
                        @click="toggleWebFullscreen">
                            <IconsPlayWebScreen class="icon"/>
                        </div>
                    </Tooltip>
                    <!-- 全屏 -->
                    <Tooltip 
                    :overlayStyle="{ marginBottom: props.fullscreen || 
                        props.webFullScreen ? 36 + 'px' : 22 + 'px', 
                        marginRight: props.fullscreen || 
                        props.webFullScreen ? 0 + 'px' : 20 + 'px' }">
                        <template #tooltip>{{ props.fullscreen ? '退出全屏(f)' : '进入全屏(f)'}}</template>
                        <div class="player-controls-item controls-icon" @click="toggleFullscreen">
                            <IconsPlayFullScreen class="icon"/>
                        </div>
                    </Tooltip>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { formatTime } from '@/utils/formatTime';
import type { PlayerSetting } from '@/types/player';
const hideSettingMorePanel = ref(false); // 关闭示弹幕设置面板
const backrateValue = ref<string>('倍速'); // 倍速
const quality = ref<string>(''); // 视频质量
const isShowPanelBackrat = ref(false);
const emit = defineEmits([
    'toggleFullscreen', 
    'togglePlayPause', 
    'changeCurrent', 
    'updateVolume', 
    'toggleMute', 
    'togglePiP',
    'toggleWideScreen',
    'changeBackrate',
    'toggleWebFullscreen',
    'changDisplayDanmu'
]);
interface Props {
    // 是否全屏
    fullscreen?: boolean;
    // 是否网页全屏
    webFullScreen?: boolean;
    // 播放进度时间
    currentTime?: number;
    // 视频时长
    duration?: number;
    // 播放状态
    playing?: boolean;
    // 音量
    volume?: number;
    // 是否静音
    isMuted?: boolean;
    // 是否处于画中画模式
    inPictureInPicture?: boolean;
    // 是否处于宽屏模式
    isWideScreen?: boolean;
    // 缓存
    buffer?: number;
    // 弹幕开启和关闭
    displayDanmu?: boolean;
    // 是否投稿模式
    isUpload?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    fullscreen: false,
    webFullScreen: false,
    currentTime: 0,
    duration: 0,
    playing: false,
    volume: 0,
    isMuted: false,
    inPictureInPicture: false,
    isWideScreen: false,
    buffer: 0.00001,
    displayDanmu: true,
    isUpload: false
});

// 播放暂停
const togglePlayPause = () => {
    emit('togglePlayPause');
};
// 静音/恢复
const toggleMute = () => {
    emit('toggleMute');
};
// 切换全屏状态
const toggleFullscreen = () => {
    emit('toggleFullscreen');
};
// 切换网页全屏状态
const toggleWebFullscreen = () => {
    emit('toggleWebFullscreen');
};
// 画中画
const togglePiP = () => {
    emit('togglePiP');
};
// 宽屏
const toggleWideScreen = () => {
    if (props.webFullScreen) {
        toggleWebFullscreen();
    }
    emit('toggleWideScreen');
};
// 改变当前播放进度
const handleChangeCurrent = (currPer: Number) => {
    emit('changeCurrent', currPer);
};
const updateVolume = (volume: number) => {
    emit('updateVolume', volume);
};
// 改变播放速度 
const handleSelectedBackrate = (backrate: number, val: string) => {
    if (val === '1.0X') {
        backrateValue.value = '倍速';
    } else {
        backrateValue.value = val;
    }
    emit('changeBackrate', backrate);
};
// 关闭设置面板
const handleIsShowSettingMorePanel = (isShow: boolean) => {
        hideSettingMorePanel.value = isShow;
};
// 打开关闭弹幕
const changDisplayDanmu = (val: boolean) => {
    if (props.fullscreen || props.webFullScreen) {
        emit('changDisplayDanmu', val);
    }
};
// 从本地获取播放器配置

</script>
<style scoped lang="scss">
.player-controls {
    display: block;
    position: absolute;
    height: 70px;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 80;
    background: linear-gradient(to bottom, rgba(0, 0, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
    .player-controls-wrap {
        width: 100%;
        height: 100%;
        .player-controls-top {
            width: 100%;
            height: 20px;
            .player-controls-progress {
                box-sizing: border-box;
                padding: 0 10px;
                width: 100%;
                height: 100%;
            }
        }
        .player-controls-bottom {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .player-controls-left {
                padding-left: 20px;
                display: flex;
                align-items: center;
                flex: 1;
                max-width: 240px;
                min-width: 180px;
                height: 22px;
                .player-controls-play-icon {
                    width: 22px;
                    height: 22px;
                    cursor: pointer;
                    fill: hsla(0, 0%, 100%, .8);
                    .icon {
                        width: 100%;
                        height: 100%;
                        &:hover {
                            fill: #ffffff;
                        }
                    }
                }

                .player-controls-icon {
                    width: 40px;
                    height: 22px;
                    cursor: pointer;
                    fill: hsla(0, 0%, 100%, .8);
                    .icon {
                        width: 100%;
                        height: 100%;
                        &:hover {
                            fill: #ffffff;
                        }
                    }

                    .prev-icon {
                        transform: rotate(180deg);
                        &:hover {
                            fill: #ffffff;
                        }
                    }
                }
                
                .player-controls-play-time {
                    width: auto;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    margin-left: 10px;
                    .player-play-time {
                        line-height: 24px;
                        color: hsla(0, 0%, 100%, .8);
                        font-size: 13px;
                        &:hover {
                            color: #ffffff;
                        }
                    }
                }
                
            }
            .player-controls-center {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                max-width: 540px;
                flex: 1; /* 这将允许中心元素伸缩 */
                display: none;
            }

            .player-controls-right {
                padding-right: 10px;
                display: flex;
                align-items: center;
                flex: 0 0 auto;

                .player-controls-item {
                    height: 26px;
                    cursor: pointer;
                    fill: hsla(0, 0%, 100%, .8);
                    color: hsla(0, 0%, 100%, .8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .icon {
                        width: 100%;
                        height: 100%;
                        &:hover {
                            fill: #ffffff;   
                        }
                    }
                    span {
                        line-height: 24px;
                        font-size: 14px;
                        &:hover {
                            color: #ffffff;
                        }
                    }
                }
                .controls-text {
                    margin-right: 8px;
                    margin-left: 8px;
                }
                .controls-icon {
                    width: 38px;
                }
                .controls-backrate {
                    width: 36px;
                }
                .eplist-result {
                    width: 32px;
                }
                .controls-quality {
                    width: auto;
                }
                
            }
        }

    }
}
</style>