<template>
    <NuxtLayout name="publiclayout">
        <Title>西游记-电视剧-全集-高清正版在线观看-halihali-哈哩哈哩</Title>
        <div class="home-container" :class="isWideScreen ? 'wide' : ''">
            <div class="main-container">
                <div id="playerWrap" class="video_player"
                    :class="[isWideScreen ? 'wide-video_player' : '', , isLoading ? 'player-loading' : '']">
                    <div class="player-sendBar_skeleton" v-if="isLoading">
                        <div class="skeleton-loading video-info"></div>
                        <div class="skeleton-loading video-info-online"></div>
                        <div class="skeleton-loading dm-setting"></div>
                        <div class="skeleton-loading dm-send"></div>
                    </div>
                </div>
                <div class="plp-l sticky">
                    <div class="player-left-components">
                        <VideoinfoVideoToolbar />
                        <VideoinfoMediainfo />
                        <div class="comment_comment_wrapper" ref="commentWrapRef">
                            <ClientOnly>
                                <VideocommentComment :isWideScreen="isWideScreen" />
                            </ClientOnly>
                        </div>
                    </div>
                </div>
                <div class="plp-r sticky"
                    :style="isWideScreen ? 'top: calc(var(--containerWidth)* .5625 + var(--danmu-bar-height) + 8px);' : ''">
                    <div id="danmukuBox" class="danmaku-box"></div>
                    <VideoinfoEplisList />
                    <VideoinfoRecommendList />
                </div>
            </div>

        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
import type { InteractionCard } from '@/types/interaction';
const commentWrapRef = ref<HTMLDivElement | null>(null);
const isDisplayHeader = ref(true);
const isWideScreen = ref<boolean>(false);
const dashUrl = ref<string>('https://io.v.hblog.top/hfs/video/159748237287362560/159748237287362560.mpd');
const conOffsetLeft = ref<number>(0);
const isLoading = ref<boolean>(true);
const onLoadedChange = () => {
    isLoading.value = false;
}
const ontoggleWide = (isWide: boolean) => {
    isWideScreen.value = isWide;
}
const interactionCard = reactive<InteractionCard>({
    likeList: [
        {
            id: 1,
            vid: 1,
            uid: 1,
            left: 60,
            top: 60,
            type: 1, // 1 三连加关注 2 仅三连 3 仅关注
            timeStart: 10,
            timeEnd: 24,
            className: 'hl-card-hide',
            isShow: false,
        }
    ],
    linkList: [
        {
            id: 1,
            vid: 1,
            uid: 1,
            left: 50,
            top: 50,
            timeStart: 28,
            timeEnd: 40,
            link_url: 'https://www.bilibili.com/',
            link_content: 'bilibili',
            className: 'hl-card-hide',
            isShow: false,
            isClose: false,
            isCloseTime: 0,
            closeProgress: 0,

        }
    ],
    voteList: [
        {
            id: 1,
            vid: 1,
            uid: 1,
            left: 40,
            top: 40,
            timeStart: 60,
            timeEnd: 80,
            question: '老吴帅吗？',
            className: 'hl-card-hide',
            isShow: false,
            isClose: false,
            isCloseTime: 0,
            closeProgress: 0,
            VoteOptions: [
                {
                    id: 0,
                    voteid: 0,
                    option_text: '老吴帅',
                    anvote_count: 0,
                },
                {
                    id: 0,
                    voteid: 0,
                    option_text: '老吴很帅',
                    anvote_count: 0,
                },
                {
                    id: 0,
                    voteid: 0,
                    option_text: '老吴一般',
                    anvote_count: 0,
                },
                {
                    id: 0,
                    voteid: 0,
                    option_text: '其他，请补充',
                    anvote_count: 0,
                }
            ]
        },
        {
            id: 1,
            vid: 1,
            uid: 1,
            left: 30,
            top: 70,
            timeStart: 90,
            timeEnd: 130,
            question: '老吴真帅吗？',
            className: '',
            isShow: false,
            isClose: false,
            isCloseTime: 0,
            closeProgress: 0,
            VoteOptions: [
                {
                    id: 0,
                    voteid: 0,
                    option_text: '老吴非常帅',
                    anvote_count: 0,
                },
                {
                    id: 0,
                    voteid: 0,
                    option_text: '老吴超级很帅',
                    anvote_count: 0,
                },
                {
                    id: 0,
                    voteid: 0,
                    option_text: '老吴一般',
                    anvote_count: 0,
                },
                {
                    id: 0,
                    voteid: 0,
                    option_text: '其他，请补充',
                    anvote_count: 0,
                }
            ]
        },
        {
            id: 1,
            vid: 1,
            uid: 1,
            left: 30,
            top: 70,
            timeStart: 140,
            timeEnd: 160,
            question: '张帅帅吗？',
            className: '',
            isShow: false,
            isClose: false,
            isCloseTime: 0,
            closeProgress: 0,
            VoteOptions: [
                {
                    id: 0,
                    voteid: 0,
                    option_text: '张帅非常帅',
                    anvote_count: 0,
                },
                {
                    id: 0,
                    voteid: 0,
                    option_text: '张帅超级很帅',
                    anvote_count: 0,
                },
                {
                    id: 0,
                    voteid: 0,
                    option_text: '一看名字就知道了',
                    anvote_count: 0,
                },
            ]
        }
    ],
});
const handleResize = () => {
    if (commentWrapRef.value) {
        conOffsetLeft.value = commentWrapRef.value.getBoundingClientRect().left;
        console.log(conOffsetLeft.value);
    }
};
onMounted(async () => {
    const { Player } = await import('@/components/videoplayer/HaliPlayer');
    const player = new Player('#playerWrap', dashUrl.value, interactionCard, '#danmukuBox', ontoggleWide, onLoadedChange);
    player.mountPlayer();
    handleResize(); // 初始时获取一次宽度
    window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>
<style scoped lang="scss">
.home-container {
    --containerWidth: calc(var(--video-width) + 30px + var(--right-bar-width));

    .main-container {
        position: relative;
        margin: 94px auto 30px;
        box-sizing: initial;
        padding: 0 10px 10px;
        border-radius: 6px;
        width: var(--containerWidth);
        background-color: var(--bg1);

        .video_player {
            box-sizing: border-box;
            width: 100%;
            position: relative;
            padding-right: calc(var(--right-bar-width) + 30px);
            height: calc(var(--video-width)* .5625 + var(--danmu-bar-height));
        }

        .player-loading {
            background: #000;
            width: var(--video-width);
            .player-sendBar_skeleton {
                height: var(--danmu-bar-height);
                width: var(--video-width);
                position: absolute;
                bottom: 0;
                background: #fff;
                z-index: 0;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                display: flex;
                align-items: center;
                justify-content: center;


                .skeleton-loading {
                    border-radius: 4px;
                }

                .video-info {
                    margin-left: 20px;
                }

                .video-info,
                .video-info-online {
                    margin-right: 6px;
                    min-width: 100px;
                    height: calc(var(--danmu-bar-height) * 0.3);

                }

                .dm-setting {
                    min-width: 100px;
                    margin-right: 6px;
                }

                .dm-send {
                    width: 100%;
                    margin-right: 12px;
                }

                .dm-setting,
                .dm-send {
                    height: calc(var(--danmu-bar-height) * 0.6);
                }



            }
        }

        .wide-video_player {
            padding-right: 0;
            height: calc(var(--containerWidth)* .5625 + var(--danmu-bar-height));
        }

        .plp-l {
            width: 100%;

            .player-left-components {
                padding-right: calc(var(--right-bar-width) + 30px);

                .comment_comment_wrapper {
                    padding-top: 18px;

                    :deep(.comment) {
                        .browser-pc {
                            .comment-container {
                                .reply-wrap {
                                    .main-reply-box {
                                        .main-reply-fixed {
                                            width: calc(var(--containerWidth) - (var(--right-bar-width) + 30px));
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }

        .plp-l.sticky {
            position: -webkit-sticky;
            position: sticky;
            height: -webkit-fit-content;
            height: -moz-fit-content;
            height: fit-content;
            z-index: 1;
        }

        .plp-r {
            position: absolute;
            top: 10px;
            top: 0;
            right: 10px;
            width: var(--right-bar-width);
            z-index: 2;

            .danmaku-box {
                display: block;
                position: relative;
                margin-bottom: 14px;
                width: 100%;
                min-height: 44px;
                background-color: var(--graph_bg_regular);
                border-radius: 6px;
            }
        }

        // .plp-r.sticky {
        //     position: -webkit-sticky;
        //     position: sticky;
        //     bottom: calc(var(--video-width)* 0.5625 + var(--danmu-bar-height) + 60px);
        //     bottom: 0;
        //     top: unset;
        //     left: calc(50vw + var(--containerWidth) / 2 - var(--right-bar-width));
        // }

        // @media screen and (max-width: 1100px) {
        //     .plp-r.sticky {
        //         left: calc(var(--containerWidth) - 30px);
        //     }
        // }
    }

}

.wide {
    --video-width: max(668px, min(calc(177.778vh - 650px), var(--max-vw), 2039px));
}
</style>