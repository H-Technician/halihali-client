<template>
    <Title>历史记录</Title>
    <div class="hl-history_wrap">
        <div class="hl-header" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
            <!-- 头部 -->
            <HeaderBar />
            <HomebannerBanner :isHovering="isHovering" />
        </div>
        <div class="history-wrap">
            <div class="newlist_info">
                <div class="hl-head clearfix">
                    <div class="hl-head-c">
                        <i class="hl-icon hl-icon-history"></i>
                        <span class="hl-head-t">历史记录</span>
                    </div>
                    <div class="hl-head-search">
                        <IconsSearch class="search-icon" />
                        <input class="hl-head-search_input" placeholder="搜索历史记录" maxlength="50">
                        <div class="search-cancel">
                            <svg-icon name="close" color="#00aeec"></svg-icon>
                        </div>
                    </div>
                    <div class="history-btn">
                        <Button>清空历史</Button>
                    </div>
                </div>
            </div>
            <div class="list-contain">
                <div class="label-contain">
                    <div class="time-label todaylabel active" style="position: absolute; top: 18px;"> 今天 </div>
                    <div class="time-label lastdaylabel" style="position: fixed; top: inherit; bottom: 20px;"> 昨天 </div>
                    <div class="time-label lastweeklabel" style="display: none;"> 近1周 </div>
                    <div class="time-label lastmonthlabel" style="display: none;"> 1周前 </div>
                    <div class="time-label lastthreemonthlabel" style="display: none;"> 1个月前 </div>
                </div>
                <ul id="history_list" class="history-list">
                    <li class="history-record todayitem" v-for="item in 8" :key="item">
                        <div class="l-info">
                            <div class="lastplay-time">
                                <i class="history-red-round"></i>
                                <span class="lastplay-t">09:33</span>
                            </div>
                        </div>
                        <div class="r-info clearfix">
                            <div class="cover-contain">
                                <a class="preview" target="_blank" href="">
                                    <div class="lazy-img">
                                        <img src="">
                                    </div>
                                </a>
                                <div class="info"></div>
                                <div class="progress-c">
                                    <div class="progress" style="width: 94.5455px;"></div>
                                </div>
                            </div>
                            <div class="r-txt">
                                <a class="title" target="_blank" href="">色戒的最后一段“鸽子蛋”大的钻石 彻底让汤唯改变了主意</a>
                                <p class="subtitle">
                                    <span></span>
                                </p>
                                <div class="w-info">
                                    <div class="time-wrap">
                                        <i class="device iconfont icon-pc-monitor" v-if="true"></i>
                                        <i class="device iconfont icon-mobile" v-else></i>
                                        <span class="pro-txt progress">
                                            看到<span></span>&nbsp;&nbsp;03:54
                                        </span>
                                    </div>
                                    <span>
                                        <a href="">
                                            <div class="lazy-img userpic">
                                                <img src="">
                                            </div>
                                            <span class="username">小黄叔鸭</span>
                                        </a>
                                        <span class="name">影视剪辑</span>
                                    </span>
                                </div>
                                <i class="history-delete iconfont icon-delete"></i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const isHovering = ref<boolean>(false);
const handleMouseOver = () => {
    isHovering.value = true;
};

const handleMouseOut = () => {
    isHovering.value = false;
};
</script>
<style scoped lang="scss">
.hl-history_wrap {
    position: absolute;
    margin: 0 auto;
    width: 100%;
    max-width: 2560px;
    background-color: #ffffff;
    overflow: hidden;
    min-width: 1058px;
    scroll-behavior: smooth;

    .hl-header {
        background-color: #fff;
        min-height: 64px;
        margin: 0 auto;
        width: 100%;
        color: #000;
        min-width: 1058px;
    }

    .history-wrap {
        position: relative;
        min-height: 460px;
        padding: 30px 0 0;
        margin: 0 auto;
        font-size: 12px;

        .clearfix {
            overflow: hidden;
        }

        .newlist_info {
            position: relative;

            .hl-head {
                position: relative;
                height: 30px;

                .hl-head-c {
                    float: left;

                    .hl-icon-history {
                        background: url(@/assets/img/static-icons.png) -83px -850px no-repeat;
                        width: 28px;
                        height: 28px;
                        display: inline-block;
                        margin-right: 8px;
                        vertical-align: middle;
                    }

                    .hl-head-t {
                        vertical-align: middle;
                        display: inline-block;
                        font-size: 18px;
                        line-height: 24px;
                        color: #222;
                    }
                }

                .hl-head-search {
                    box-sizing: border-box;
                    display: -ms-flexbox;
                    display: flex;
                    position: absolute;
                    padding: 0 5px;
                    width: 188px;
                    height: 30px;
                    border: 1px solid #ccd0d7;
                    right: 212px;
                    top: 50%;
                    transform: translateY(-50%);
                    border-radius: 15px;
                    -ms-flex-align: center;
                    align-items: center;
                    -ms-flex-pack: justify;
                    justify-content: space-between;

                    .search-icon {
                        display: inline-block;
                        width: 18px;
                        height: 18px;
                        color: #99a2aa;
                    }

                    .hl-head-search_input {
                        width: 120px;
                        height: 17px;
                        line-height: 17px;
                        border: none;
                        outline: none;
                        font-size: 12px;
                    }

                    .search-cancel {
                        display: inline-block;
                        width: 24px;
                        height: 24px;
                        opacity: 0;

                        .icon-close {
                            width: 18px;
                            height: 24px;
                        }
                    }
                }

                .hl-head-search.input-active {
                    border: 1px solid var(--brand_blue);
                }

                .history-btn {
                    float: right;
                    width: 188px;
                    color: var(--brand_blue);

                    :deep(.hl-button_wrap) {
                        height: 30px;

                        .hl-button-content {
                            color: var(--brand_blue);
                            line-height: 18px;
                            font-size: 12px;
                        }
                    }

                    :deep(.hl-button-default) {
                        border-color: var(--brand_blue);

                        &:hover {
                            background-color: var(--brand_blue);

                            .hl-button-content {
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }

        .list-contain {
            position: relative;

            .label-contain {
                .todaylabel {
                    top: 18px;
                    position: absolute;
                    margin-left: 8px;
                }

                .time-label {
                    font-size: 14px;
                    text-align: center;
                    height: 34px;
                    line-height: 36px;
                    color: var(--brand_pink);
                    border-radius: 4px;
                    margin-bottom: 20px;
                    padding: 0 8px;
                    margin-right: 20px;
                    position: fixed;
                    border: 1px solid var(--brand_pink);
                    cursor: pointer;
                    z-index: 998;
                }

                .lastdaylabel {
                    margin-left: 8px;
                }

                .lastthreemonthlabel {
                    margin-left: -13px;
                }

                .time-label:before {
                    right: -6px;
                    border-left: 8px solid #fff;
                    z-index: 2;
                }

                .time-label:after {
                    right: -8px;
                    border-left: 8px solid var(--brand_pink);
                    z-index: 1;
                }

                .time-label:after,
                .time-label:before {
                    position: absolute;
                    top: 13px;
                    content: "";
                    border-bottom: 5px solid transparent;
                    border-top: 5px solid transparent;
                }

                .active {
                    background-color: var(--brand_pink);
                    color: #fff !important;
                }

                .active:before {
                    border-left: 8px solid var(--brand_pink) !important;
                }
            }

            .history-list {
                padding: 8px 0 10px;
                margin-top: 17px;

                .l-info {
                    width: 66px;
                    position: absolute;
                    top: 10px;
                    left: 0;
                    border-right: 1px solid #e5e9ef;
                    overflow: visible;
                    height: 143px;

                    .lastplay-time {
                        overflow: visible;
                        height: 120px;
                        font-size: 14px;

                        .history-red-round {
                            position: absolute;
                            right: -5px;
                            top: 48px;
                            border: 5px dashed #e5e9ef;
                            border-right-width: 0;
                            border-left-style: solid;
                            border-top-color: transparent;
                            border-bottom-color: transparent;
                        }

                        .lastplay-t {
                            color: #99a2aa;
                            position: absolute;
                            top: 43px;
                            left: 87px;
                            width: 80px;
                            font-size: 14px;
                        }
                    }
                }

                .r-info {
                    border: 1px solid transparent;
                    margin-left: 197px;
                    background: #fff;
                    padding: 10px 0;
                    margin-right: 5px;
                    position: relative;

                    .cover-contain {
                        float: left;
                        position: relative;
                        margin: 0 30px 0 0;

                        .preview {
                            cursor: pointer;
                            overflow: hidden;
                            display: block;
                            text-align: center;
                            float: left;
                            width: 160px;
                            height: 100px;
                            position: relative;
                            border-radius: 5px;

                            .lazy-img {
                                background: url(@/assets/img/img_loading.png) 50% no-repeat;
                                width: 100%;
                                height: 100%;
                                display: inline-block;

                                img {
                                    margin: 0 auto;
                                    display: block;
                                    height: 100px;
                                    width: 100%;
                                    max-width: 160px;
                                }
                            }
                        }

                        .info {
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            background: url(@/assets/img/video-mask.png);
                            width: 160px;
                            height: 39px;
                            cursor: pointer;
                        }

                        .progress-c {
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            width: 160px;
                            height: 6px;
                            border-bottom-right-radius: 5px;
                            border-bottom-left-radius: 5px;
                            background-color: #000;

                            .progress {
                                width: 80px;
                                height: 6px;
                                background-color: #ff74a5;
                                border-bottom-right-radius: 3px;
                                border-top-right-radius: 3px;
                                border-bottom-left-radius: 4px;
                            }
                        }
                    }

                    .r-txt {
                        height: 100px;
                        border-bottom: 1px solid #e5e9ef;
                        float: left;

                        .title {
                            cursor: pointer;
                            padding-top: 5.5px;
                            display: block;
                            font-size: 14px;
                            margin-bottom: 10px;
                            color: #222;
                            font-weight: 700;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;

                            &:hover {
                                color: var(--brand_blue);
                            }
                        }

                        .subtitle {
                            font-size: 12px;
                            color: #6d757a;
                            margin-bottom: 18px;
                            height: 16px;
                            padding-left: 3px;
                        }

                        .w-info {
                            font-family: microsoft yahei, simhei;
                            float: left;
                            line-height: 20px;

                            .time-wrap {
                                float: left;
                                min-width: 300px;

                                .device {
                                    font-size: 18px;
                                    color: #99a2aa;
                                    float: left;
                                }

                                .pro-txt {
                                    color: #99a2aa;
                                    font-size: 12px;
                                    float: left;
                                    margin-left: 10px;
                                }

                                .pro-txt.progress {
                                    margin-left: 6px;
                                    max-width: 177px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                            }

                            .lazy-img {
                                background-image: url(data:image/gif;base64,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);
                                background-size: cover;
                                width: 100%;
                                height: 100%;
                                display: inline-block;

                                img {
                                    display: block;
                                    width: 100%;
                                    height: 100%;
                                }
                            }

                            .userpic {
                                display: block;
                                width: 20px;
                                height: 20px;
                                border-radius: 100%;
                                float: left;
                                margin-right: 10px;
                                background-size: 100% 100%;
                                cursor: pointer;
                            }

                            .username {
                                float: left;
                                color: #6d757a;
                                padding-right: 10px;
                                height: 12px;
                                margin-top: 5px;
                                line-height: 11px;
                                font-size: 12px;
                                cursor: pointer;
                            }

                            .name {
                                color: #99a2aa;
                                font-size: 12px;
                                float: left;
                                padding-left: 10px;
                                border-left: 1px solid #e5e9ef;
                            }
                        }

                        .history-delete {
                            vertical-align: top;
                            margin-top: 7px;
                            color: #99a2aa;
                            position: absolute;
                            padding-left: 16px;
                            right: 0;
                            top: 44px;
                            cursor: pointer;
                            font-size: 22px;
                        }
                    }

                    @media screen and (max-width: 1414px) {
                        .r-txt {
                            width: 585px;

                            .title {
                                width: 400px;
                            }
                        }
                    }

                    @media screen and (min-width: 1415px) {
                        .r-txt {
                            width: 765px;

                            .title {
                                width: 580px;
                            }
                        }
                    }
                }
            }

            .history-list,
            .history-list .history-record {
                display: block;
                position: relative;
            }


        }


    }

    @media screen and (max-width: 1414px) {
        .history-wrap {
            width: 980px;
        }
    }

    @media screen and (min-width: 1415px) {
        .history-wrap {
            width: 1160px;
        }
    }
}
</style>