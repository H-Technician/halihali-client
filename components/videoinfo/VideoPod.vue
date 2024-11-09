<template>
    <div class="video-pod">
        <div class="video-pod__header">
            <div class="header-top">
                <div class="left">
                    <a href="" target="_blank" class="title jumpable">
                        热门产品评测
                    </a>
                    <div class="amt">（43/43）</div>
                </div>
                <div class="right">
                    <div class="auto-play">
                        <div class="continuous-btn">
                            <div class="txt">自动连播</div>
                            <Switch v-model="value" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-bottom">
                <div class="left">
                    <div class="total-view">
                        796.4万播放
                    </div>
                    <span class="pod-description-reference">
                        <div class="description van-popover__reference">
                            <IconsVideocardView />
                            简介
                        </div>
                    </span>
                </div>
                <div class="right">
                    <div class="subscribe-btn">
                        订阅合集
                    </div>
                </div>
            </div>
        </div>
        <div class="video-pod__body">
            <div class="video-pod__list section">
                <div class="pod-item video-pod__item simple" v-for="item in 30" :key="item">
                    <div class="single-p">
                        <div class="simple-base-item" :class="item === 4 ? 'active' : ''">
                            <div class="title">
                                <div class="playing-gif"></div>
                                <div class="title-txt">我在2012年买的笔记本至今还能作为生产力，如何做到的？</div>
                            </div>
                            <div class="stats">
                                <div class="stat-item duration">05:35</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const value = ref<boolean>(true);

</script>
<style lang="scss" scoped>
.video-pod {
    line-height: 1;
    padding: 0 16px 8px;
    background-color: var(--graph_bg_regular);
    border-radius: 6px;
    margin-bottom: 20px;
    pointer-events: all;

    .video-pod__header {
        padding: 14px 0px 12px;

        .header-top {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .left {
                margin-right: 10px;
                display: flex;
                align-items: center;

                .title {
                    font-size: 16px;
                    font-weight: 500;
                    color: var(--text1);
                    color: var(--text1);
                    display: -webkit-box;
                    line-clamp: 1;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-break: break-all;
                    line-break: anywhere;
                }

                .jumpable {
                    cursor: pointer;
                    transition: color 0.3s;
                }

                .amt {
                    flex-shrink: 0;
                    font-size: 12px;
                    color: var(--text3);
                }
            }

            .right {
                flex-shrink: 0;
                display: flex;

                .auto-play {
                    flex-shrink: 0;

                    .continuous-btn {
                        cursor: pointer;
                        display: flex;
                        align-items: center;

                        .txt {
                            color: var(--text3);
                            font-size: 14px;
                            margin-right: 4px;
                        }
                    }
                }
            }
        }

        .header-bottom {
            padding: 10px 0 12px 0;
            border-bottom: 1px solid var(--line_regular);
            display: flex;
            align-items: center;
            justify-content: space-between;

            .left {
                display: flex;
                align-items: center;

                .total-view {
                    font-size: 14px;
                    color: var(--text3);
                    margin-right: 10px;
                }

                .pod-description-reference {
                    .description {
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                        color: var(--text3);

                        :deep(.icon-view) {
                            margin-right: 2px;
                        }
                    }
                }
            }

            .right {
                .subscribe-btn {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    color: var(--brand_blue);
                    width: 70px;
                    height: 24px;
                    border-radius: 2px;
                    border: 1px solid var(--brand_blue);
                    transition: all 0.3s;
                }
            }
        }
    }

    .video-pod__body {
        margin: 0 -16px;
        max-height: 250px;
        overflow: auto;
        scroll-behavior: smooth;
        overscroll-behavior: contain;

        .video-pod__list {
            position: relative;
            width: calc(100% - 12px);
            margin: 0 auto;
            box-sizing: border-box;

            .pod-item.simple {
                margin-bottom: 4px;

                .single-p {
                    .simple-base-item {
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        border-radius: 2px;
                        padding: 0 10px;

                        .title {
                            flex: 1;
                            display: flex;
                            align-items: center;
                            height: 31px;
                            color: var(--text1);
                            font-size: 14px;
                            transition: color 0.2s;

                            .playing-gif {
                                flex-shrink: 0;
                                display: inline-block;
                                width: 12px;
                                height: 12px;
                                margin-right: 5px;
                                background-image: url(@/assets/img/playing.gif);
                                background-repeat: no-repeat;
                                background-size: 12px 12px;
                                background-position-y: 1px;
                            }

                            .title-txt {
                                display: -webkit-box;
                                line-clamp: 1;
                                -webkit-line-clamp: 1;
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                word-break: break-all;
                                line-break: anywhere;
                                line-height: 31px;
                            }
                        }

                        .stats {
                            flex-shrink: 0;
                            margin-left: 10px;
                            font-size: 14px;
                            color: var(--text3);
                        }

                        &:hover {
                            .title {
                                color: var(--brand_blue);
                            }
                        }
                    }

                    .active {
                        background: var(--bg1);

                        .title {
                            color: var(--brand_blue);
                        }
                    }
                }

            }
        }

        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #6d7f7a;
            cursor: pointer;
        }

        &::-ms-scrollbar {
            width: 6px;
        }

        &::-ms-scrollbar-thumb {
            border-radius: 10px;
            background-color: #6d7f7a;
            cursor: pointer;
        }
    }
}
</style>