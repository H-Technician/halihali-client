<template>
    <div class="danmaku-wrap">
        <div class="danmaku-docker danmaku-docker-minor">
            <div class="player-auxiliary">
                <div class="player-collapse">
                    <div class="player-collapse-area">
                        <div class="collapse-wrap" :class="isExpandList ? 'collapse-wrap-folded' : ''">
                            <div class="collapse-header" @click="expandList">
                                <div class="player-filter">
                                    <div class="player-filter-area">
                                        <div class="dropdown-wrap">
                                            <div class="dropdown-display">
                                                <span class="dropdown-name">弹幕列表</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="collapse-arrow">
                                    <span class="collapse-arrow-text">
                                        <span class="arrow-icon">
                                            <i class="iconfont icon-arrowdown"></i>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div class="collapse-body" :style="isExpandList ? 'height: 380px;' : 'height: 0;'">
                                <div class="player-wraplist">
                                    <div class="player-filter-wrap">
                                        <div class="player-dm-function">
                                            <div class="player-dm-btn player-dm-btn-time">
                                                时间
                                            </div>
                                            <div class="player-dm-btn player-dm-btn-dm">
                                                弹幕内容
                                            </div>
                                            <div class="player-dm-btn player-dm-btn-date">
                                                发送时间
                                            </div>
                                        </div>
                                        <div class="player-dm-wrap">
                                            <div class="player-dm-container" :style="true ? '' : 'display: none;'">
                                                <div class="player-dm-list-wrap scroll-wrap" ref="dmListRef">
                                                    <ul class="player-dm-list" :style="`height: ${24 * 30}px;`">
                                                        <li class="player-dm-list-item" v-for="item in 30" :key="item"
                                                            :class="item % 10 === 3 ? 'active' : ''">
                                                            <div class="dm-info-row">
                                                                <span class="dm-info-time">00:58</span>
                                                                <span class="dm-info-dm">这个弹幕怎么样</span>
                                                                <span class="dm-info-date">10-03 18:20</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <!-- <div class="scroll-vertical-scrollbar">
                                                        <div class="scroll-indicator"></div>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <div class="player-dm-load-status" :style="true ? 'display: none;' : ''">
                                                弹幕列表填充中...
                                            </div>
                                        </div>
                                        <div class="player-dm-btn-footer">
                                            <div class="player-dm-btn-history">
                                                查看历史弹幕
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const isExpandList = ref<boolean>(false);
const dmListRef = ref<HTMLElement | null>(null);
const expandList = () => {
    isExpandList.value = !isExpandList.value;
} 
</script>
<style lang="scss" scoped>
.danmaku-wrap {
    min-height: 44px;
    background: var(--graph_bg_regular);
    border-radius: 6px;

    .danmaku-docker-minor {
        position: relative;
        width: 100%;

        &:not(:empty) {
            background-color: #fff;
        }
    }

    .danmaku-docker {
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        -webkit-box-sizing: initial;
        box-sizing: initial;
        font-size: 12px;
        font-style: normal;
        line-height: 1;

        .player-auxiliary {
            -ms-flex-negative: 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            flex-shrink: 0;
            height: 100%;
            position: relative;
            vertical-align: top;
            width: 100%;

            .player-collapse {
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-box-pack: start;
                -ms-flex-pack: start;
                align-items: center;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                justify-content: flex-start;
                vertical-align: middle;

                .player-collapse-area {
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    -webkit-box-pack: start;
                    -ms-flex-pack: start;
                    align-items: center;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    height: 100%;
                    justify-content: flex-start;
                    line-height: normal;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    vertical-align: middle;
                    width: 100%;

                    .collapse-wrap {
                        width: 100%;
                        pointer-events: none;

                        .collapse-header {
                            border-radius: 6px;
                            background: #f4f4f4;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            color: #222;
                            cursor: pointer;
                            height: 100%;
                            position: relative;
                            width: 100%;
                            pointer-events: all;

                            .player-filter {
                                border: none;
                                -webkit-box-sizing: border-box;
                                box-sizing: border-box;
                                font-size: 16px;
                                padding: 0 10px 0 16px;
                                z-index: 2;
                                border-radius: 6px;
                                font-size: 15px;
                                font-weight: 500;
                                height: 44px;
                                line-height: 44px;
                                display: inline-block;
                                position: relative;
                                -webkit-user-select: none;
                                -moz-user-select: none;
                                -ms-user-select: none;
                                user-select: none;
                                white-space: nowrap;
                                -webkit-box-align: center;
                                -ms-flex-align: center;
                                -webkit-box-pack: start;
                                -ms-flex-pack: start;
                                align-items: center;
                                justify-content: flex-start;
                                vertical-align: middle;

                                .player-filter-area {
                                    -webkit-box-align: center;
                                    -ms-flex-align: center;
                                    -webkit-box-pack: start;
                                    -ms-flex-pack: start;
                                    align-items: center;
                                    display: -webkit-box;
                                    display: -ms-flexbox;
                                    display: flex;
                                    height: 100%;
                                    justify-content: flex-start;
                                    line-height: normal;
                                    -webkit-user-select: none;
                                    -moz-user-select: none;
                                    -ms-user-select: none;
                                    user-select: none;
                                    vertical-align: middle;
                                    width: 100%;

                                    .dropdown-wrap {
                                        fill: #757575;

                                        .dropdown-display {
                                            .dropdown-name {
                                                vertical-align: middle;
                                            }
                                        }
                                    }
                                }
                            }

                            .collapse-arrow {
                                bottom: 0;
                                height: 14px;
                                margin: auto;
                                position: absolute;
                                right: 16px;
                                top: 0;
                                -webkit-box-align: center;
                                -ms-flex-align: center;
                                align-items: center;
                                display: -webkit-box;
                                display: -ms-flexbox;
                                display: flex;
                                vertical-align: middle;

                                .collapse-arrow-text {
                                    display: -webkit-inline-box;
                                    display: -ms-inline-flexbox;
                                    display: inline-flex;
                                    font-size: 12px;

                                    .arrow-icon {
                                        fill: #757575;
                                        height: 16px;
                                        -webkit-transform: rotate(0);
                                        transform: rotate(0);
                                        -webkit-transition: -webkit-transform .3s;
                                        transition: -webkit-transform .3s;
                                        transition: transform .3s;
                                        transition: transform .3s, -webkit-transform .3s;
                                        width: 16px;

                                        .icon-arrowdown {
                                            font-size: 14px;
                                            line-height: 16px;
                                        }
                                    }


                                }
                            }
                        }

                        .collapse-body {
                            background-color: #fff;
                            position: relative;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            overflow: hidden;
                            -webkit-transform: translateZ(0);
                            transform: translateZ(0);
                            -webkit-transition: height .3s;
                            transition: height .3s;
                            width: 100%;
                            height: 410px;

                            .player-wraplist {
                                -webkit-box-sizing: border-box;
                                box-sizing: border-box;
                                // display: none;
                                overflow: hidden;

                                .player-filter-wrap {
                                    display: block;
                                    height: 100%;

                                    .player-dm-function {
                                        background-color: #fff;
                                        display: -webkit-box;
                                        display: -ms-flexbox;
                                        display: flex;
                                        overflow: hidden;
                                        position: relative;
                                        z-index: 1;

                                        .player-dm-btn {
                                            border: 0;
                                            -webkit-box-sizing: border-box;
                                            box-sizing: border-box;
                                            color: #6d757a;
                                            cursor: pointer;
                                            display: inline-block;
                                            font-size: 12px;
                                            height: 32px;
                                            line-height: 32px;
                                            padding: 0 6px;
                                            position: relative;
                                        }

                                        .player-dm-btn-time {
                                            padding-left: 16px;
                                            padding-right: 0;
                                            text-align: left;
                                            width: 60px;
                                        }

                                        .player-dm-btn-dm {
                                            -webkit-box-flex: 1;
                                            -ms-flex: auto;
                                            flex: auto;
                                            text-align: left;
                                        }

                                        .player-dm-btn-date {
                                            text-align: left;
                                            width: 88px;
                                        }
                                    }

                                    .player-dm-wrap {
                                        height: 339px;
                                        background-color: #fff;
                                        position: relative;

                                        .player-dm-container {
                                            -webkit-box-align: center;
                                            -ms-flex-align: center;
                                            -webkit-box-pack: start;
                                            -ms-flex-pack: start;
                                            align-items: center;
                                            display: -webkit-box;
                                            display: -ms-flexbox;
                                            display: flex;
                                            height: 100%;
                                            justify-content: flex-start;
                                            line-height: normal;
                                            -webkit-user-select: none;
                                            -moz-user-select: none;
                                            -ms-user-select: none;
                                            user-select: none;
                                            vertical-align: middle;
                                            width: 100%;
                                            overflow: hidden;

                                            .player-dm-list-wrap {
                                                height: 100%;
                                                overflow-x: hidden;
                                                overflow-y: scroll;
                                                position: relative;
                                                width: 100%;
                                                pointer-events: all;

                                                .player-dm-list {
                                                    -webkit-box-sizing: border-box;
                                                    box-sizing: border-box;
                                                    cursor: pointer;
                                                    list-style-type: none;
                                                    margin: 0;
                                                    padding: 0;
                                                    width: 100%;
                                                    // height: 2448px;
                                                    height: calc(30 * 24px);
                                                    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
                                                    transition-duration: 0ms;
                                                    transform: translate(0px, 0px) scale(1) translateZ(0px);
                                                    padding-top: 0px;

                                                    .player-dm-list-item {
                                                        height: 24px;

                                                        .dm-info-row {
                                                            color: #6d757a;
                                                            cursor: pointer;
                                                            display: -webkit-box;
                                                            display: -ms-flexbox;
                                                            display: flex;
                                                            font-size: 12px;
                                                            height: 24px;
                                                            line-height: 24px;
                                                            position: relative;
                                                            -webkit-user-select: none;
                                                            -moz-user-select: none;
                                                            -ms-user-select: none;
                                                            user-select: none;

                                                            span {
                                                                -webkit-box-sizing: border-box;
                                                                box-sizing: border-box;
                                                                display: inline-block;
                                                                padding: 0 6px;
                                                                pointer-events: none;
                                                                vertical-align: top;
                                                            }

                                                            .dm-info-time {
                                                                -webkit-box-flex: 0;
                                                                -ms-flex: none;
                                                                flex: none;
                                                                overflow: hidden;
                                                                padding-left: 16px;
                                                                position: relative;
                                                                text-align: left;
                                                                width: 66px;
                                                            }

                                                            .dm-info-dm {
                                                                -webkit-box-flex: 1;
                                                                color: #222;
                                                                -ms-flex: auto;
                                                                flex: auto;
                                                                overflow: hidden;
                                                                pointer-events: auto;
                                                                text-overflow: ellipsis;
                                                                white-space: nowrap;
                                                            }

                                                            .dm-info-date {
                                                                -webkit-box-flex: 0;
                                                                -ms-flex: none;
                                                                flex: none;
                                                                overflow: hidden;
                                                                white-space: nowrap;
                                                                width: 88px;
                                                            }
                                                        }

                                                        &:hover {
                                                            background-color: #f4f4f4;
                                                        }

                                                    }

                                                    .active {
                                                        background-color: #f4f4f4;
                                                    }
                                                }

                                                // .scroll-vertical-scrollbar {
                                                //     position: absolute;
                                                //     z-index: 9999;
                                                //     width: 5px;
                                                //     bottom: 2px;
                                                //     top: 2px;
                                                //     right: 1px;
                                                //     overflow: hidden;
                                                //     // opacity: 0;
                                                //     transition-duration: 500ms;

                                                //     .scroll-indicator {
                                                //         box-sizing: border-box;
                                                //         position: absolute;
                                                //         border-radius: 3px;
                                                //         width: 100%;
                                                //         transition-duration: 0ms;
                                                //         height: 46px;
                                                //         transform: translateY(41px) translateZ(0px);
                                                //         transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
                                                //         background: #6d7f7a;
                                                //         cursor: pointer;
                                                //     }
                                                // }

                                            }

                                            .scroll-wrap {
                                                &::-webkit-scrollbar {
                                                    width: 5px;
                                                }

                                                &::-webkit-scrollbar-thumb {
                                                    border-radius: 10px;
                                                    background-color: #6d7f7a;
                                                    cursor: pointer;
                                                }

                                                &::-ms-scrollbar {
                                                    width: 5px;
                                                }

                                                &::-ms-scrollbar-thumb {
                                                    border-radius: 10px;
                                                    background-color: #6d7f7a;
                                                    cursor: pointer;
                                                }

                                            }
                                        }

                                        .player-dm-load-status {
                                            height: 339px;
                                            line-height: 339px;
                                            background: #fff;
                                            color: #222;
                                            height: 200px;
                                            left: 0;
                                            position: absolute;
                                            text-align: center;
                                            top: 0;
                                            width: 100%;
                                            z-index: 2;
                                        }
                                    }

                                    .player-dm-btn-footer {
                                        cursor: not-allowed;
                                        height: 31px;
                                        margin-top: 8px;
                                        position: relative;
                                        width: auto;
                                        z-index: 2;

                                        .player-dm-btn-history {
                                            background-color: #f4f4f4;
                                            color: #505050;
                                            cursor: pointer;
                                            // display: none;
                                            height: 31px;
                                            line-height: 31px;
                                            text-align: center;
                                            width: 100%;
                                            border-radius: 6px;
                                        }
                                    }
                                }

                            }
                        }
                    }

                    .collapse-wrap-folded {

                        .collapse-header {

                            .collapse-arrow {

                                .collapse-arrow-text {

                                    .arrow-icon {
                                        -webkit-transform: rotate(180deg);
                                        transform: rotate(180deg);
                                    }


                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>