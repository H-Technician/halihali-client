<template>
    <NuxtLayout name="publiclayout">
        <Title>3600公里安全抵达….一个不小的挑战！_哈哩哈哩-halihali</Title>
        <div class="video-container" :class="isWideScreen ? 'wide' : ''">
            <div class="left-container" ref="leftRef">
                <!-- 标题 -->
                <div class="video-info-container">
                    <h1 title="test" class="video-title">3600公里安全抵达….一个不小的挑战！</h1>
                    <div class="video-info-detail">
                        <div class="video-info-detail-list">
                            <a href="" target="_blank" class="honor item honor-rank" v-if="true">
                                <IconsVideoCharts class="icon-charts" />
                                <span class="honor-text">全站排行榜最高第1名</span>
                                <IconsArrowRight />
                            </a>
                            <!-- 播放量 -->
                            <span class="view item">
                                <IconsVideoPlayer class="icon-player" />
                                &nbsp;12万&nbsp;
                            </span>
                            <!-- 弹幕 -->
                            <span class="danmu item">
                                <IconsVideoDanMu class="icon-danmu" />
                                &nbsp;124&nbsp;
                            </span>
                            <!-- 上传日期 -->
                            <span class="date item">
                                2024-05-01 12:12
                            </span>
                            <span class="auth item" v-if="false">
                                <IconsVideoAuth class="icon-auth" />
                                作者声明:你们有什么看法吗？
                            </span>
                            <span class="copyright item" v-if="true">
                                <IconsVideoProhibit class="icon-prohibit" />
                                未经作者授权，禁止转载
                            </span>
                        </div>
                    </div>
                </div>
                <div id="playerWrap" class="player-wrap"
                    :class="[isWideScreen ? 'wide-player-wrap' : '', isLoading ? 'player-loading' : '']">
                    <div class="player-sendBar_skeleton" v-if="isLoading">
                        <div class="skeleton-loading video-info"></div>
                        <div class="skeleton-loading video-info-online"></div>
                        <div class="skeleton-loading dm-setting"></div>
                        <div class="skeleton-loading dm-send"></div>
                    </div>
                </div>
                <VideoinfoVideoToolbar />
                <VideoinfoVideoDesc />
                <VideoinfoVideoTag />
                <ClientOnly>
                    <VideocommentComment :isWideScreen="isWideScreen" />
                </ClientOnly>
            </div>
            <div class="right-container is-in-large-ab">
                <div class="right-container-inner scroll-sticky">
                    <div class="up-panel-container">
                        <div class="up-info-container">
                            <div class="up-info--left">
                                <div class="up-avatar-wrap">
                                    <a class="up-avatar" @mouseenter="handleMouseEnter('avatar')"
                                        @mouseleave="handleMouseLeave" ref="upAvatarRef">
                                        <AvatarVAvatar />
                                    </a>
                                </div>
                            </div>
                            <div class="up-info--right">
                                <div class="up-info__detail">
                                    <div class="up-detail">
                                        <div class="up-detail-top">
                                            <a href="" target="_blank" class="up-name"
                                                @mouseenter="handleMouseEnter('name')" @mouseleave="handleMouseLeave"
                                                ref="upNameRef">
                                                _货运小趴菜_
                                            </a>
                                            <a href="" target="_blank" class="send-msg">
                                                <i
                                                    class="iconfont icon-message icon-message van-icon-videodetails_messag"></i>
                                                发消息
                                            </a>
                                        </div>
                                        <div class="up-description up-detail-bottom">
                                            一个98年的货运司机 关注一下交流经验 梦想明年在杭州建个司机之家。
                                        </div>
                                    </div>
                                </div>
                                <div class="up-info__btn-panel">
                                    <div class="upinfo-btn-panel">
                                        <div class="default-btn old-charge-btn not-follow-charge-btn" v-if="false">
                                            <span>充电</span>
                                        </div>
                                        <div class="default-btn new-charge-btn charge-btn-loaded" v-else>
                                            <div class="charge-btn-icon">
                                                <img src="@/assets/img/electricity.webp">
                                            </div>
                                            <span>充电</span>
                                        </div>
                                        <div class="default-btn follow-btn b-gz not-follow">
                                            <span class="follow-btn-inner">
                                                <IconsPlus class="follow-btn-icon" />
                                                关注 1.7万
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="danmukuBox" class="danmaku-box" :class="isWideScreen ? 'wide-danmaku-box' : ''"></div>
                    <VideoinfoVideoPod />
                    <div class="recommend-list">
                        <div class="rec-list">
                            <VideocardsVideoSmallCard v-for="item in 6" :key="item" />
                        </div>
                        <div class="rec-footer">
                            展开
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
import type { InteractionCard } from '@/types/interaction';
import { createVNode, render } from 'vue';
import type { VNode } from 'vue';
const leftRef = ref<HTMLDivElement | null>(null);
const isWideScreen = ref<boolean>(false);
const upAvatarRef = ref<HTMLDivElement | null>(null);
const upNameRef = ref<HTMLLinkElement | null>(null);
const isLoading = ref<boolean>(true);
let vUserCardnode: VNode | null;
let usercardWrap: HTMLDivElement;
const dashUrl = ref<string>('https://io.v.hblog.top/hfs/video/159748237287362560/159748237287362560.mpd');
let inTimer: ReturnType<typeof setTimeout>;

const ontoggleWideScreen = (isWide: boolean) => {
    isWideScreen.value = isWide;
    handleResize();
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
};
const mouseEnter = () => {
    clearTimeout(inTimer);
    usercardWrap.addEventListener('mouseleave', mouseLeave);
}

const mouseLeave = () => {
    usercardWrap.removeEventListener('mouseenter', mouseEnter);
    usercardWrap.removeEventListener('mouseleave', mouseLeave);
    inTimer = setTimeout(() => {
        hideUserCard();
    }, 300);
}

const handleMouseEnter = (element: string) => {
    clearTimeout(inTimer);
    if (element === 'avatar') {
        showAvatarUserCard();
    } else if (element === 'name') {
        showNameUserCard();
    }
    if (!vUserCardnode) {
        initUserCard();
    }
    usercardWrap.addEventListener('mouseenter', mouseEnter);
};

const handleMouseLeave = () => {
    inTimer = setTimeout(() => {
        hideUserCard();
    }, 300);

};

const showAvatarUserCard = () => {
    if (upAvatarRef.value) {
        const rect = upAvatarRef.value.getBoundingClientRect();
        usercardWrap.style.removeProperty('right');
        usercardWrap.style.removeProperty('bottom');
        usercardWrap.style.left = (rect.left - 159) + 'px';
        usercardWrap.style.top = (rect.top + 78) + 'px';
        usercardWrap.style.removeProperty('display');
        usercardWrap.addEventListener('mouseenter', mouseEnter);
    }
}

const showNameUserCard = () => {
    if (upNameRef.value) {
        const rect = upNameRef.value.getBoundingClientRect();
        usercardWrap.style.removeProperty('right');
        usercardWrap.style.removeProperty('bottom');
        usercardWrap.style.left = (rect.left - (366 - rect.width) / 2) + 'px';
        usercardWrap.style.top = (rect.top + rect.height + 30) + 'px';
        usercardWrap.style.removeProperty('display');
        usercardWrap.addEventListener('mouseenter', mouseEnter);
    }
}

const hideUserCard = () => {
    if (upAvatarRef.value) {
        usercardWrap.style.removeProperty('right');
        usercardWrap.style.removeProperty('bottom');
        usercardWrap.style.top = '0px';
        usercardWrap.style.left = '0px';
        usercardWrap.style.right = '0px';
        usercardWrap.style.display = 'none';
    }
}

const initUserCard = async () => {
    const userCard = await import('@/components/usercard/UserCard.vue');
    if (userCard) {
        vUserCardnode = createVNode(userCard.default);
        render(vUserCardnode, usercardWrap);
    }
}
const desUserCard = () => {
    render(null, usercardWrap);
    vUserCardnode = null;
}
const onLoadedChange = () => {
    isLoading.value = false;
}
onMounted(async () => {
    const route = useRoute();
    const videoId = route.params.HvideoId;
    console.log(videoId);
    const { Player } = await import('@/components/videoplayer/HaliPlayer');
    const player = new Player('#playerWrap', dashUrl.value, interactionCard, '#danmukuBox', ontoggleWideScreen, onLoadedChange);
    player.mountPlayer();
    handleResize(); // 初始时获取一次宽度
    window.addEventListener('resize', handleResize);
    usercardWrap = document.createElement('div');
    usercardWrap.id = 'usercardWrap';
    usercardWrap.className = 'usercard-wrap';
    usercardWrap.style.top = '0px';
    usercardWrap.style.left = '0px';
    usercardWrap.style.display = 'none';
    document.body.appendChild(usercardWrap);
    // initUserCard();
});
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    usercardWrap?.removeEventListener('mouseenter', mouseEnter);
    usercardWrap?.removeEventListener('mouseleave', mouseLeave);
    desUserCard();
});
</script>
<style scoped lang="scss">
.video-container {
    width: auto;
    height: 100%;
    padding: 64px 10px 0px;
    max-width: 2540px;
    min-width: 1054px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    box-sizing: content-box;
    position: relative;
    --video-width: max(648px, min(calc(177.778vh - 540px), var(--max-vw), 2039px));
    --containerWidth: calc(var(--video-width) + 30px + var(--right-bar-width));

    .left-container {
        position: relative;
        height: fit-content;
        width: var(--video-width);

        .video-info-container {
            height: 104px;
            box-sizing: border-box;
            padding-top: 22px;

            .video-title {
                font-size: 20px;
                font-weight: 500;
                -webkit-font-smoothing: antialiased;
                color: #000000;
                line-height: 28px;
                margin-top: 0;
                margin-bottom: 6px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .video-info-detail {
                font-size: 13px;
                color: #000000;
                display: flex;
                align-items: center;
                height: 24px;
                line-height: 18px;
                position: relative;
                overflow: hidden;

                .video-info-detail-list {
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    box-sizing: border-box;

                    .item {
                        flex-shrink: 0;
                        margin-right: 12px;
                        overflow: hidden;
                    }

                    .item:last-child {
                        margin-right: 0;
                    }

                    .honor {
                        display: inline-flex;
                        align-items: center;
                        font-size: 13px;
                        height: 24px;
                        border-radius: 2px;
                        padding: 0px 6px;

                        .icon-charts {
                            font-size: 14px;
                            width: 14px;
                            height: 14px;
                            margin: 0 5px 0 3px;
                        }
                    }

                    .honor-rank {
                        text-decoration: none;
                        color: var(--brand_pink);
                        fill: var(--brand_pink);
                        background-color: rgba(255, 102, 153, 0.1);
                    }

                    .view,
                    .danmu,
                    .date,
                    .auth,
                    .copyright {
                        display: inline-flex;
                        align-items: center;
                        color: #9499a0;

                        .icon-prohibit {
                            width: 16px !important;
                            height: 16px !important;
                            fill: #fd676f;
                        }

                        .icon-auth {
                            width: 16px !important;
                            height: 16px !important;
                        }
                    }
                }
            }
        }

        .player-wrap {
            height: calc(var(--video-width)* .5625 + var(--danmu-bar-height));
            width: var(--video-width);
            position: relative;
        }

        .player-loading {
            background: #000;
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

        .wide-player-wrap {
            height: calc(var(--containerWidth)* .5625 + var(--danmu-bar-height));
            width: var(--containerWidth);
        }

        :deep(.comment) {
            .browser-pc {
                .comment-container {
                    .reply-wrap {
                        .main-reply-box {
                            .main-reply-fixed {
                                width: var(--video-width);
                            }
                        }
                    }
                }
            }
        }
    }

    .right-container {
        width: var(--right-bar-width);
        flex: none;
        margin-left: 30px;
        position: relative;
        pointer-events: none;

        .right-container-inner {
            padding-bottom: 250px;

            .up-panel-container {
                pointer-events: all;

                .up-info-container {
                    box-sizing: border-box;
                    height: 104px;
                    display: flex;
                    align-items: center;

                    .up-info--left {
                        .up-avatar-wrap {
                            width: 48px;
                            height: 48px;
                            flex-shrink: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            .up-avatar {
                                display: block;
                                width: 100%;
                                height: 100%;
                                border-radius: 50%;
                                background-color: var(--graph_weak);
                                background-color: var(--graph_weak);

                                :deep(.hl-avatar) {
                                    width: 48px;
                                    height: 48px;
                                    transform: translate(0px, 0px);
                                    display: block;
                                    position: relative;
                                    background-image: url(data:image/gif;base64,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);
                                    background-size: cover;
                                    border-radius: 50%;
                                    margin: 0;
                                    padding: 0;

                                    .v-img {
                                        border: none;
                                    }

                                    .hl-avatar-icon {
                                        width: 18px;
                                        height: 18px;
                                        bottom: -1px;
                                    }

                                }
                            }
                        }
                    }

                    .up-info--right {
                        margin-left: 12px;
                        flex: 1;
                        overflow: auto;

                        .up-info__detail {
                            margin-bottom: 5px;

                            .up-detail {
                                .up-detail-top {
                                    display: flex;
                                    align-items: center;

                                    .up-name {
                                        font-size: 15px;
                                        color: var(--text1);
                                        font-weight: 500;
                                        position: relative;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                        overflow: hidden;
                                        margin-right: 12px;
                                        max-width: calc(100% - 12px - 56px);
                                        transition: color 0.3s;

                                        &:hover {
                                            color: var(--brand_blue);
                                        }
                                    }

                                    .send-msg {
                                        color: var(--text2);
                                        font-size: 13px;
                                        transition: color 0.3s;
                                        flex-shrink: 0;

                                        .van-icon-videodetails_messag {
                                            font-size: 13px;
                                            color: inherit;
                                        }

                                        &:hover {
                                            color: var(--brand_blue);
                                        }
                                    }
                                }

                                .up-description {
                                    margin-top: 2px;
                                    font-size: 13px;
                                    line-height: 16px;
                                    height: 16px;
                                    color: var(--text3);
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                            }
                        }

                        .up-info__btn-panel {
                            .upinfo-btn-panel {
                                clear: both;
                                display: flex;
                                margin-top: 5px;
                                white-space: nowrap;

                                .default-btn {
                                    box-sizing: border-box;
                                    padding: 0;
                                    line-height: 30px;
                                    height: 30px;
                                    border-radius: 6px;
                                    font-size: 14px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    cursor: pointer;
                                    background: var(--graph_weak);
                                    position: relative;
                                    transition: 0.3s all;
                                }

                                .old-charge-btn {
                                    margin-right: 12px;
                                    flex-shrink: 0;
                                    width: 78px;
                                }

                                .new-charge-btn {
                                    margin-right: 12px;
                                    flex-shrink: 0;
                                    width: 109px;
                                    color: var(--brand_pink);

                                    .charge-btn-icon {
                                        width: 20px;
                                        height: 20px;
                                        margin-right: 4px;
                                        display: flex;
                                    }
                                }

                                .charge-btn-loaded {
                                    background-color: transparent;
                                    border: 1px solid var(--brand_pink);

                                    img {
                                        width: 100%;
                                        height: 100%;
                                    }

                                    &:hover {
                                        background-color: var(--brand_pink_thin);
                                    }
                                }

                                .follow-btn {
                                    flex: 1 1 auto;
                                    max-width: 200px;

                                    .follow-btn-inner {
                                        display: inline-flex;
                                        align-items: center;
                                        justify-content: center;
                                        flex: 1;

                                        .follow-btn-icon {
                                            width: 16px;
                                            height: 16px;
                                            margin-right: 4px;
                                        }
                                    }
                                }

                                .not-follow-charge-btn {
                                    border: 1px solid var(--brand_blue);
                                    background: var(--bg1);
                                    color: var(--brand_blue);
                                }

                                .not-follow {
                                    background: var(--brand_blue);
                                    color: var(--text_white);

                                    &:hover {
                                        background: #00b8f6;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            #danmukuBox {
                margin-top: 0;
            }

            .danmaku-box {
                display: block;
                position: relative;
                margin-bottom: 14px;
                width: 100%;
                min-height: 44px;
                background-color: var(--graph_bg_regular);
                border-radius: 6px;
            }

            .wide-danmaku-box {
                margin-top: calc(var(--containerWidth)* .5625 + var(--danmu-bar-height) + 8px) !important;
            }

            .danmaku-box {
                margin-bottom: 18px;
                position: relative;
            }

            .recommend-list {
                margin-top: 18px;
                pointer-events: all;

                .rec-footer {
                    height: 42px;
                    background: var(--graph_bg_regular);
                    color: var(--text1);
                    margin-top: 10px;
                    text-align: center;
                    line-height: 42px;
                    cursor: pointer;
                    border-radius: 6px;
                    user-select: none;
                    transition: background-color 0.3s;
                }

            }
        }

        .scroll-sticky {
            position: sticky;
        }
    }

}

.wide {
    --video-width: max(608px, min(calc(177.778vh - 740px), var(--max-vw), 2039px));
    // --containerWidth: calc(var(--video-width) + 30px + var(--right-bar-width));
    // --video-width: max(668px, min(calc(177.778vh - 650px), var(--max-vw), 2039px));
    // --containerWidth: calc(var(--video-width) + 30px + var(--right-bar-width));
}
</style>