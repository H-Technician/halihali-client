<template>
    <div class="video-card__warp">
        <!-- 骨架屏 -->
        <div class="video-card__skeleton" :class="isImgDownLoad ?
            'hide' : 'loading_animation'">
            <div class="video-card__skeleton-cover"></div>
            <div class="video-card__skeleton-info">
                <div class="video-card__skeleton-item top"></div>
                <div class="video-card__skeleton-item bottom"></div>
                <div class="video-card__skeleton-item user"></div>
            </div>
        </div>
        <!-- 视频卡片主体 -->
        <div class="video-card__link" :style="isImgDownLoad ? '' : 'display: none;'">
            <a class="video-card__images-warp" :href="url" target="_blank" @mouseover="handleMouseOver"
                @mouseout="handleMouseOut">
                <div class="video-card__cover_warp">
                    <picture class="video-card__cover">
                        <source :srcset="imageUrl3" type="image/webp">
                        </source>
                        <source :srcset="imageUrl" type="image/jpg">
                        </source>
                        <img class="v-img" :class="imgRef?.complete || !isHide || !isClient ? '' : 'v-img-hide'" @load="onImageLoad" @error="onImageError" :src="imageUrl3" alt="封面" ref="imgRef"/>
                        <!-- <img class="v-img" :class="isHide ? 'v-img-hide' : ''" @load="onImageLoad" @error="onImageError" :src="imageUrl3" alt="封面" ref="imgRef"/> -->
                    </picture>
                </div>
                <div class="v-inline-player" :style="isPlayer ? '' :
                    'visibility: hidden;'" :class="isPlayer ? 'v-show' : 'v-hide'">
                    <div class="player-video-wrap">
                        <video ref="videoPlayer" loop muted @loadedmetadata="onLoadedMetadata"
                            @timeupdate="onTimeUpdate">
                        </video>
                    </div>
                </div>
                <div class="video-card__mask">
                    <div class="video-card__stats" :style="isPlayer ? 'visibility: hidden;' : ''">
                        <div class="play-danmu_warp">
                            <div class="play-number">
                                <IconsVideocardPlayer class="icon" />
                                <span>4.2万</span>
                            </div>
                            <div class="danmu-number">
                                <IconsVideocardDanMu class="icon" />
                                <span>800</span>
                            </div>
                        </div>
                        <div class="video-duration_warp">
                            <span>02:15</span>
                        </div>
                    </div>
                    <div class="video-card__progress" :style="isPlayer ? '' : 'visibility: hidden;'">
                        <div class="video-progress">
                            <span>{{ formattedCurrentTime }}</span>
                            <span>/</span>
                            <span>{{ formattedTotalTime }}</span>
                        </div>
                    </div>
                </div>
                <div class="video-card__watch-later_wrap" :style="isPlayer ? '' : 'visibility: hidden;'"
                    :class="isPlayer ? 'v-show' : 'v-hide'">
                    <div class="video-card__watch-later" @click="handleWatchLater">
                        <IconsVideocardSeeLater class="watch-later-icon" />
                        <span>添加至稍后再看</span>
                    </div>
                </div>
            </a>
            <!-- 视频卡片底部信息 -->
            <div class="video-card__info_warp">
                <a class="video-title-link" title="这是一个测试视频，欢迎走进哈哩哈哩弹幕网站" :href="url" target="_blank">
                    这是一个测试视频，欢迎走进哈哩哈哩弹幕网站
                </a>
                <div class="video-card__info--no-interest"></div>
                <a class="video-author_warp" href="" target="_blank">
                    <div class="video-author-icon" v-if="true">
                        <IconsVideocardUp />
                    </div>
                    <div class="video-author-icon-text" v-else>已关注</div>
                    <div class="video-user-date_warp">
                        <span class="user">admin</span>
                        <span> · </span>
                        <span>4-26</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { formatTime } from '@/utils/formatTime';
import { rafTimeout, cancelRaf } from '@/utils/rafTimeout';
// https://haliyunoss.oss-cn-chengdu.aliyuncs.com/img/carousel/672w_373h_1c-web-home-common-cover.avif
const imageUrl = '//io.v.hblog.top/hfs/archive/0d962f2725a461b628d441dcda33eca7.jpg@672w_378h_1c_!web-home-common-cover.jpg';
const imageUrl3 = '//io.v.hblog.top/hfs/archive/0d962f2725a461b628d441dcda33eca7.jpg@672w_378h_1c_!web-home-common-cover.webp';
const videoUrl = 'https://io.v.hblog.top/hfs/video/159748237287362560/159748237287362560.mpd';
const url = '/video/HVBZ262xBSfC?spm_id_from=333.1007.tianma.4-2-12.click&vd_source=630c72d5a1c2c47b04d936fc3a32b878';
const isImgDownLoad = ref(true);
const imgRef = ref<HTMLImageElement | null>(null);
const dashPlayer = ref<any | null>(null); // dashjs实例
const videoPlayer = ref<HTMLVideoElement | null>(null);
let inTimer: ReturnType<typeof rafTimeout>; // 节流计时器
const videoDuration = ref(0);
const formattedCurrentTime = ref('00:00');
const formattedTotalTime = ref('00:00');
const isPlayer = ref(false);
const isLoadedVideo = ref(false);
const isHide = ref<boolean>(true);
interface Props {
    isClient?: boolean // 是否是客户端渲染
}
const props = withDefaults(defineProps<Props>(), {
    isClient: false,
});

// 鼠标移入
const handleMouseOver = async () => {
    // console.log('鼠标移入');
    cancelRaf(inTimer);
    if (!isLoadedVideo.value) {
        await initPlayer();
        isLoadedVideo.value = true;
    }
    inTimer = rafTimeout(() => {
        isPlayer.value = true;
        videoPlayer.value?.play();
    }, 500);

}
// 鼠标移出
const handleMouseOut = () => {
    // console.log('鼠标移出');
    cancelRaf(inTimer);
    inTimer = rafTimeout(() => {
        isPlayer.value = false;
        videoPlayer.value?.pause();
    }, 100);
}
// dash 配置
const dashConfig = {
    live: false, // 设置为false表示点播模式
    autoStart: true, // 自动开始播放
    autoPlay: true, // 自动播放
    autoPauseOnLowBuffer: false, // 禁止自动暂停以防止缓冲不足
    bufferingGoal: 5, // 缓冲目标，单位为秒
    minBufferLevel: 3, // 最小缓冲级别，单位为秒
    maxBufferLevel: 10, // 最大缓冲级别，单位为秒
    maxBufferLength: 10000, // 最大缓冲长度，单位为毫秒
};
// 准备视频dash实例
const initPlayer = async () => {
    if (!videoPlayer.value) return;
    // 导入dashjs
    const dashjs = await import('dashjs');
    // 创建dash播放器实例
    dashPlayer.value = dashjs.MediaPlayer().create();
    dashPlayer.value.setAutoPlay(true); // 自动播放
    dashPlayer.value.setConfig(dashConfig);

    // 监听缓冲变化
    dashPlayer.value.on(dashjs.MediaPlayer.events.BUFFER_LEVEL_UPDATED, () => {
    });

    dashPlayer.value.on(dashjs.MediaPlayer.events.BUFFER_EMPTY, () => {
        console.log('Buffer is empty.');
    });
    if (!videoPlayer.value) return;
    dashPlayer.value.initialize(videoPlayer.value, videoUrl, true);
}
// 获取当前播放时间
const onTimeUpdate = () => {
    if (!videoPlayer.value) return;
    formattedCurrentTime.value = formatTime(videoPlayer.value.currentTime)
};
// 获取视频时长
const onLoadedMetadata = () => {
    if (!videoPlayer.value) return;
    videoDuration.value = videoPlayer.value.duration;
    formattedTotalTime.value = formatTime(videoDuration.value);
};

// 稍后观看
const handleWatchLater = (event: Event) => {
    event.preventDefault();
    console.log('稍后观看');
}
const onImageLoad = () => {
    // console.log("图片加载成功")
    isHide.value = false;
}
const onImageError = (event: Event) => {
    console.error('图像加载失败', event);
};
onMounted(async () => {
    // await loadImage(imageUrl, () => {
    //     isImgDownLoad.value = true; // 所有图片加载成功后隐藏骨架屏
    //     //initPlayer();
    //     // console.log('所有图片加载完成');
    // }, (error) => {
    //     console.error('图片加载失败:', error.message);
    // });

});
onUnmounted(() => {
    // 清理dash实例
    if (dashPlayer.value) {
        dashPlayer.value.off();
        dashPlayer.value.destroy();
    }
});

</script>
<style scoped lang="scss">
.video-card__warp {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
    transition: all 0.5s ease;
}

.video-card__skeleton {
    width: 100%;
    height: auto;
    display: block;
    position: relative;
    z-index: 3;
    background-color: #ffffff;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    .video-card__skeleton-cover {
        position: relative;
        width: auto;
        height: 0;
        border-radius: 6px;
        display: block;
        padding-top: 56.25%;
        /* 16:9 = 9 / 16 * 100% = 56.25% */
        overflow: hidden;
    }

    .video-card__skeleton-cover>* {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        object-fit: cover;
        /* 内容会被缩放或裁剪以填充整个容器 */
    }

    .video-card__skeleton-info {
        padding-top: 8px;
        height: 76px;
        box-sizing: border-box;

        .video-card__skeleton-item {
            box-sizing: border-box;
            margin-top: 4px;
            margin-bottom: 4px;
            border-radius: 4px;

        }

        .top {
            width: 98%;
            height: 18px;
        }

        .bottom {
            width: 60%;
            height: 18px;
        }

        .user {
            width: 50%;
            height: 16px;
            margin-top: 2px;
        }
    }

}

.loading_animation {
    .video-card__skeleton-cover {
        background: linear-gradient(-45deg,
                #F1F2F3 25%,
                #FFFFFF 45%,
                #F1F2F3 65%);
        background-size: 400% 100%;
        animation: skeleton-loading 1.2s ease-in-out infinite;
    }

    .video-card__skeleton-info {
        .video-card__skeleton-item {
            background: linear-gradient(-45deg,
                    #F1F2F3 25%,
                    #FFFFFF 45%,
                    #F1F2F3 65%);
            background-size: 400% 100%;
            animation: skeleton-loading 1.2s ease-in-out infinite;
        }
    }
}

.hide {
    display: none;
}

.video-card__link {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    transition: all .2s ease-in-out;

    .video-card__images-warp {
        width: 100%;
        height: auto;
        position: relative;
        overflow: hidden;
        display: block;
        text-decoration: none;
        background: #f1f2f3;
        border-radius: 6px;

        .video-card__cover_warp {
            position: relative;
            width: 100%;
            /* 或者指定一个具体的宽度 */
            height: 100%;
            /* 高度设为0，通过padding-top来控制比例 */
            padding-top: 56.25%;
            /* 16:9比例，9 / 16 * 100% = 56.25% */
            overflow: hidden;

            img {
                transition: all .2s ease-in-out;
            }
        }

        .v-inline-player {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 1;
            transition: all .5s ease-in-out;

            .player-video-wrap {
                width: 100%;
                height: 100%;

                video {
                    // width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

        .v-show {
            animation: fadeIn .5s ease-in-out;
        }

        .v-hide {
            animation: fadeOut .5s ease-in-out;
        }

        .video-card__mask {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;

            .video-card__stats {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 24%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .8) 100%);
                opacity: 1;
                transition: all .5s linear;

                .play-danmu_warp {
                    padding-left: 10px;
                    color: #ffffff;
                    font-size: 13px;
                    align-items: center;
                    display: flex;
                    height: 16px;
                    cursor: pointer;
                    padding: 0 10px;

                    .play-number {
                        display: flex;
                        align-items: center;
                        margin-right: 16px;

                        .icon {
                            width: 18px;
                            height: 18px;
                        }

                        span {
                            margin-left: 2px;
                        }

                    }

                    .danmu-number {
                        display: flex;
                        align-items: center;

                        .icon {
                            width: 18px;
                            height: 18px;
                        }

                        span {
                            margin-left: 2px;
                        }
                    }
                }

                .video-duration_warp {
                    padding-left: 10px;
                    color: #ffffff;
                    font-size: 13px;
                    align-items: center;
                    display: flex;
                    height: 16px;
                    cursor: pointer;
                    padding: 0 10px;

                }
            }

            .video-card__progress {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 24%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                opacity: 1;
                transition: all .5s linear .5s;

                .video-progress {
                    display: flex;
                    align-items: center;
                    margin-right: 10px;

                    span {
                        color: #ffffff;
                        font-size: 13px;
                    }
                }

            }
        }

        .video-card__watch-later_wrap {
            position: absolute;
            height: 28px;
            display: flex;
            top: 8px;
            right: 8px;
            fill: #ffffff;
            color: #ffffff;
            font-size: 14px;

            .video-card__watch-later {
                height: 28px;
                display: flex;
                align-items: center;
                padding: 0 3px;
                cursor: pointer;
                background-color: rgba(33, 33, 33, .8);
                border-radius: 6px;
                position: relative;
                /* 添加相对定位 */
                overflow: hidden;
                /* 隐藏超出部分 */
                width: 22px;
                transition: width 1s ease;

                /* 添加宽度过渡效果 */
                .watch-later-icon {
                    position: absolute;
                    left: 3px;
                    width: 22px;
                    height: 22px;
                }

                span {
                    display: inline-block;
                    /* 修改为inline-block以便于定位 */
                    margin-left: 8px;
                    margin-right: 2px;
                    white-space: nowrap;
                    /* 防止文字换行 */
                    transform: translateX(22px);
                    font-size: 13px;
                }

                &:hover {
                    width: 128px;
                }
            }

        }

        .video-card__cover_warp>.video-card__cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            min-height: 130px;
            // max-height: 170px;
            cursor: pointer;
            //background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0UCIZXAAAALHRSTlMAoJDx4OYL/DcGF+6+JNi4ycSIT2k6LPeWfRzTVPXPszEQrV0hpo12cEZAZFpRNIQAAAJVSURBVFjD7dbZcpswGIbhHwwSi81q8Ib33fnu//oatRIpmliDhQ/aaZ+TKInnjVgkhb4RJMhP9Fzo8PiD+vEA+JPnqS0+1dRHBJhibAzh2HNeekxP9Z8XBSMZM6SmRBYx65QeM6XsY3rKPqanLGMWqeDmOh0b/Io9+YHi3gKtdExgLznSlyjFMGnUphIMlcgY22C4DSPBxTu4IrXDe+yI6IDWbPSqGVoHoohDyip6XZVB4hFN1TgPyUaYQ5rSWQ0nZGcC6UyJukKypa4yIXX3HLLlqCdHX++HLRfS/9bbWvvHLSLNR3N6tRXdFwdxejekiYF4fDnWYa/WqSm2PqRCSy0hrbP5RxAaW8141N17tVbZ+S1fFYbWFF2+1lqg62BoBdAsqWOLroWhxTh+M8vmWuuaxp1WaWjRSn43yl35sHTLUjxiaWlqnYE4LZoJme3v13MibqepFZRL6otV5V+/Hv+xVvi+FsvZG1qh/LQ7uFXnF/HlwcEfYlDktW2r5EARUiXWc1xRWAC8tGwxsdJ9dcRnYrddMdtrjDZyAy3kXrSJ7O89u8zEZAIKxBRnFzbonWD3ZkfCrrmzP+6979nicjAnW3NZ4OS1R6GtVBa8drTek539up3NAgMvcv51WNZQitCiFBZQaqIMSrx1XrWNoWTy/w1r+hk+xjuMSVjGGC6WZ3S1xlDriqTKxzB+Ra3I4bDHne62drqmied57QR9z0D94dHnOEmvJ/pWAMm4ovL2TTcJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=) 50% no-repeat;

            .v-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                /* 内容会被缩放或裁剪以填充整个容器 */
                opacity: 1;
            }

            .v-img-hide {
                opacity: 0;
            }
        }
    }

    .video-card__info_warp {
        box-sizing: border-box;
        height: 76px;
        padding-top: 8px;

        .video-title-link {
            height: 44px;
            color: #18191c;
            padding-right: 20px;
            font-size: 15px;
            line-height: 22px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            font-weight: 500;
            cursor: pointer;

            &:hover {
                color: var(--brand_blue);
            }
        }

        .video-author_warp {
            align-items: center;
            justify-content: left;
            font-size: 13px;
            color: var(--text2);
            fill: var(--text2);
            margin-top: 4px;
            cursor: pointer;
            text-decoration: none;
            display: flex;
            width: auto;

            .video-author-icon {
                display: inline-block;
                width: 17px;
                height: 17px;
            }

            .video-author-icon-text {
                flex-shrink: 0;
                display: inline-block;
                color: #ff7f24;
                background-color: #fff0e3;
                border-radius: 4px;
                margin-right: 4px;
                font-size: 12px;
                line-height: 17px;
                height: 17px;
                padding: 0 4px;
                cursor: default;
            }

            .video-user-date_warp {
                margin-left: 2px;
                display: inline-block;
                vertical-align: 4px;
            }

            &:hover {
                color: var(--brand_blue);
                fill: var(--brand_blue);
            }

        }
    }
}
</style>