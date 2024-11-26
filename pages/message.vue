<template>
    <NuxtLayout name="messagelayout">
        <Title>消息中心 - 哈哩哈哩弹幕视频网 - ( ゜- ゜)つロ 乾杯~ - halihali</Title>
        <div class="message-container">
            <div id="link-message-container">
                <div class="container">
                    <div class="space-left">
                        <div class="side-bar">
                            <div class="title">
                                <svg-icon class="air-craft css-1dtzbno" name="air-craft" color="#000"></svg-icon>
                                <div>消息中心</div>
                            </div>
                            <ul class="list">
                                <li class="item" v-for="(item, index) in sideLinkList"
                                    :class="index === isActiveIndex ? 'active' : ''" :key="item.title"
                                    :title="item.title">
                                    <NuxtLink :to="item.url" class="router-link-active">{{ item.title }}</NuxtLink>
                                </li>
                            </ul>
                            <div class="divided-line"></div>
                            <div class="setting item active">
                                <NuxtLink href="/message/config" class="router-link-exact-active router-link-active"
                                    title="消息设置">
                                    <IconsSetting />
                                    消息设置
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="space-right">
                        <div class="space-right-top">
                            <div class="title">
                                <span>我的消息</span>
                            </div>
                        </div>
                        <div class="space-right-bottom ps">
                            <div class="router-view">
                                <NuxtPage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
const isActiveIndex = ref<number>(0);
interface sideLinkItem {
    url: string;
    title: string;
}
const sideLinkList: sideLinkItem[] = [
    {
        url: '/message/whisper',
        title: '我的消息',
    },
    {
        url: '/message/reply',
        title: '回复我的',
    },
    {
        url: '/message/at',
        title: '@ 我的',
    },
    {
        url: '/message/love',
        title: '收到的赞',
    },
    {
        url: '/message/system',
        title: '系统通知',
    }
];
</script>
<style scoped lang="scss">
.css-1dtzbno {
    fill: currentcolor;
    width: 1em;
    height: 1em;
}

.ps {
    overflow: hidden !important;
    overflow-anchor: none;
    -ms-overflow-style: none;
    touch-action: auto;
    -ms-touch-action: auto;

    .ps__rail-x {
        display: none;
        opacity: 0;
        transition: background-color .2s linear, opacity .2s linear;
        -webkit-transition: background-color .2s linear, opacity .2s linear;
        height: 15px;
        bottom: 0px;
        position: absolute;
    }

    .ps__thumb-x {
        background-color: #aaa;
        border-radius: 6px;
        transition: background-color .2s linear, height .2s ease-in-out;
        -webkit-transition: background-color .2s linear, height .2s ease-in-out;
        height: 6px;
        bottom: 2px;
        position: absolute;
    }
}

.ps .ps__rail-x:hover,
.ps .ps__rail-y:hover,
.ps .ps__rail-x:focus,
.ps .ps__rail-y:focus,
.ps .ps__rail-x.ps--clicking,
.ps .ps__rail-y.ps--clicking {
    background-color: #eee;
    opacity: 0.9;
}

.ps__rail-x:hover>.ps__thumb-x,
.ps__rail-x:focus>.ps__thumb-x,
.ps__rail-x.ps--clicking .ps__thumb-x {
    background-color: #999;
    height: 11px;
}

.message-container {
    height: calc(100vh - 64px);
    margin: 0 auto;
    // margin-top: 64px;
    width: 1143px;
    max-width: 1143px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;

    #link-message-container {
        width: 100%;

        .container {
            height: calc(100vh - 56px);
            margin: 0 auto;
            max-width: 1143px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-align: stretch;
            -ms-flex-align: stretch;
            align-items: stretch;

            .space-left {
                width: 140px;
                min-width: 140px;
                background-color: rgba(255, 255, 255, 0.8);

                .side-bar {
                    width: 100%;
                    font-size: 14px;
                    font-weight: 700;
                    color: #666;

                    .title {
                        height: 62px;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-pack: center;
                        -ms-flex-pack: center;
                        justify-content: center;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        color: #333;

                        .air-craft {
                            margin-right: 10px;
                        }
                    }

                    .list,
                    .item {
                        font-weight: 300;
                    }

                    .list {
                        margin: 0;
                        padding: 0 0 0 20px;

                        .item {
                            height: 40px;
                            display: -webkit-box;
                            display: -ms-flexbox;
                            display: flex;
                            -webkit-box-align: center;
                            -ms-flex-align: center;
                            align-items: center;
                            position: relative;
                            color: #6b757b;
                            
                            &::before {
                                content: "\e608";
                                font-family: "iconfont" !important;
                                line-height: 20px;
                                width: 10px;
                                height: 20px;
                                text-align: center;
                                font-size: 20px;
                            }

                            a {
                                padding-left: 10px;
                                line-height: 40px;
                                -webkit-box-flex: 1;
                                -ms-flex: 1;
                                flex: 1;
                                color: inherit;
                            }
                        }

                        .item:hover,
                        .item.active {
                            color: var(--brand_blue);
                        }
                    }

                    .divided-line {
                        border-top: 1px solid #fff;
                        margin: 10px 0;
                    }

                    .setting {
                        padding-left: 20px;
                        position: relative;

                        .setting-icon {
                            display: inline-block;
                            position: relative;
                            top: 2px;
                            margin-right: 4px;
                        }
                    }

                    .item {
                        height: 40px;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        position: relative;
                        color: #6b757b;

                        a {
                            line-height: 40px;
                            -webkit-box-flex: 1;
                            -ms-flex: 1;
                            flex: 1;
                        }
                    }

                    .item:hover,
                    .item.active a {
                        color: var(--brand_blue);
                    }
                }
            }

            .space-right {
                width: calc(100% - 140px);
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                background-color: rgba(255, 255, 255, 0.5);

                .space-right-top {
                    padding: 10px 10px 0;
                    z-index: 11;

                    .title {
                        height: 42px;
                        background-color: #fff;
                        -webkit-box-shadow: 0 2px 4px 0 rgba(121, 146, 185, 0.54);
                        box-shadow: 0 2px 4px 0 rgba(121, 146, 185, 0.54);
                        -ms-flex-negative: 0;
                        flex-shrink: 0;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        -webkit-box-pack: justify;
                        -ms-flex-pack: justify;
                        justify-content: space-between;
                        padding: 0 16px;
                        font-size: 15px;
                        color: #666;
                        border-radius: 4px;
                    }
                }

                .space-right-bottom {
                    padding: 10px;
                    position: relative;
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    height: calc(100% - 66px);
                    overflow: hidden;

                    .router-view {
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                    }

                }

            }
        }

        @media screen and (max-width: 1400px) {
            .container {
                width: 980px;
            }
        }
    }

    #link-message-container * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
}

@media screen and (max-width: 1400px) {
    .message-container {
        width: 980px;
    }
}
</style>