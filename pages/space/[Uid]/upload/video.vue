<template>
    <div class="row page-head">
        <div class="page-head__left">
            <p class="item cur video-title">我的视频</p>
            <div class="be-tab">
                <ul class="be-tab-inner">
                    <li class="be-tab-item is-active">
                        <span>最新发布</span>
                    </li>
                    <li class="be-tab-item">
                        <span>最多播放</span>
                    </li>
                    <li class="be-tab-item">
                        <span>最多收藏</span>
                    </li>
                </ul>
                <div class="be-tab-cursor" style="transform: translateX(0px); width: 48px;"></div>
            </div>
        </div>
        <div class="v-filter-line page-head__right">
            <div class="item style">
                <span class="icon cube active"></span>
                <span class="icon list"></span>
            </div>
        </div>
    </div>
    <div id="submit-video" class="section">
        <div class="list">
            <div class="content">
                <ul class="cube-list">
                    <li class="small-item fakeDanmu-item" v-for="item in 6" :key="item">
                        <a href="" target="_blank" class="cover">
                            <div class="v-img">
                                <picture class="v-img__inner">
                                    <source type="image/avif" srcset="">
                                    <source type="image/webp" srcset="">
                                    <img src="" alt="《鸳鸯戏》老师，我真的太想进步了！" loading="lazy" onload="" onerror="">
                                </picture>
                            </div>
                            <div class="playback-progress-bar __small">
                                <div class="playback-progress-bar-fill __full" style="width: 100%;"></div>
                            </div>
                            <span class="length">03:31</span>
                        </a>
                        <a href="" target="_blank" title="《鸳鸯戏》老师，我真的太想进步了！" class="title">《鸳鸯戏》老师，我真的太想进步了！
                        </a>
                        <div class="meta">
                            <span class="play">
                                <IconsVideocardPlayer class="svg-icon-next play" />
                                <span>42万</span>
                            </span>
                            <span class="time">
                                10-27
                            </span>
                        </div>
                    </li>
                </ul>
                <ul class="list-list">
                    <li class="list-item" v-for="item in 6" :key="item">
                        <a href="" target="_blank" class="cover">
                            <div class="h-img">
                                <picture class="h-img__inner">
                                    <source type="image/avif" srcset="">
                                    <source type="image/webp" srcset="">
                                    <img src="" alt="《鸳鸯戏》老师，我真的太想进步了！" loading="lazy" onload="" onerror="">
                                </picture>
                            </div>
                            <div class="playback-progress-bar __small">
                                <div class="playback-progress-bar-fill __full" style="width: 100%;"></div>
                            </div>
                            <span class="length">03:31</span>
                        </a>
                        <div class="c">
                            <div class="title-row">
                                <a href="" target="_blank" title="《鸳鸯戏》老师，我真的太想进步了！" class="title">《鸳鸯戏》老师，我真的太想进步了！</a>
                            </div>
                            <div class="desc">
                                作品：《鸳鸯戏》
                                原唱：Babystop_山竹 /伊笑

                                迟到得更新来啦！！
                            </div>
                            <div class="meta">
                                <span title="播放数" class="play">
                                    <IconsVideocardPlayer class="svg-icon-next play" />
                                    <span>40.8万</span>
                                </span>
                                <span title="弹幕数" class="comments">
                                    <IconsVideocardDanMu class="svg-icon-next" />
                                    439
                                </span>
                                <span title="创建时间" class="time">
                                    10-27
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
onMounted(async () => {

});
</script>
<style scoped lang="scss">
.icon {
    cursor: pointer;
    display: block;
    width: 18px;
    height: 18px;
    background-repeat: no-repeat;
    display: inline-block;
    background-image: url(@/assets/img/icons.png);
}

.title {
    font-size: 14px;
}

.svg-icon-next {
    width: 16px;
    height: 16px;
}

.meta>span.play,
.meta>span.comments,
.meta>span.time {
    display: inline-flex;
    align-items: center;
}

.meta>span {
    float: left;
    width: 100px;
    line-height: 18px;
}

span {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
}

.page-head {
    display: inline-block;

    .page-head__left {
        display: -ms-flexbox;
        display: flex;

        .video-title {
            font-size: 20px;
            line-height: 26px;
            height: 26px;
            color: #222;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
        }

        .be-tab {
            float: left;
            margin-left: 20px;
            position: relative;

            .be-tab-inner {
                display: inline-block;

                .be-tab-item {
                    font-size: 12px;
                    float: left;
                    font-size: 14px;
                    margin-right: 20px;
                    line-height: 28px;
                    vertical-align: top;
                    cursor: pointer;
                    position: relative;
                    height: 24px;
                }

                .is-active {
                    color: var(--brand_blue);
                }
            }

            .be-tab-cursor {
                position: absolute;
                bottom: 0;
                height: 0;
                left: 0;
                border-bottom: 1px solid var(--brand_blue);
                transform: translateX(0);
                transition: width .2s ease, transform .2s ease;
            }

            .be-tab-cursor:after {
                position: absolute;
                bottom: 0;
                height: 0;
                width: 0;
            }
        }
    }

    .page-head__right {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        margin-right: 20px;
    }

    .v-filter-line {
        position: absolute;
        top: 20px;
        right: 0;
        height: 28px;

        .item {
            float: left;
            margin-left: 16px;

            .cube {
                background-position: -342px -151px;
                margin-right: 15px;
                vertical-align: middle;
                background-repeat: no-repeat;

            }

            .cube.active,
            .cube:hover {
                background-position: -469px -151px;
            }

            .list {
                background-position: -341px -217px;
                margin-right: 15px;
                vertical-align: middle;
                background-repeat: no-repeat;
            }

            .list.active,
            .list:hover {
                background-position: -468px -217px;
            }
        }

    }
}

.section {
    border-bottom: 1px solid #eee;
    margin-bottom: 17px;
    position: relative;
    width: 100%;

    .list {
        .content {
            max-height: none;

            @media (min-width: 1420px) {
                .cube-list {
                    width: 1070px !important;
                }
            }

            .cube-list {
                width: 900px;
                margin-top: 20px;
                display: inline-block;

                @media (min-width: 1420px) {
                    .small-item {
                        width: 190px !important;
                    }

                    .list-item .cover .b-img,
                    .small-item .cover,
                    .small-item img {
                        width: 190px !important;
                        height: 119px !important;
                    }
                }

                .small-item {
                    display: block;
                    float: left;
                    width: 160px;
                    position: relative;
                    margin: 0 0 3px;
                    padding: 10px;
                    box-sizing: content-box;

                    .cover {
                        background: url(@/assets/img/video-placeholder.png) 50%;
                        background-size: cover;
                        border-radius: 4px;
                        display: block;
                        width: 160px;
                        height: 100px;
                        overflow: hidden;
                        position: relative;

                        .v-img {
                            background-color: transparent !important;
                        }

                        .v-img__inner {
                            width: 100%;
                            height: 100%;
                            display: inline-block;
                            vertical-align: middle;

                            img {
                                box-shadow: 0 0 0 1px #edf2f9;
                                border-radius: 4px;
                                width: 100%;
                                height: 100%;
                                display: block;
                                object-fit: cover;
                            }
                        }

                        .playback-progress-bar {
                            position: absolute;
                            width: 100%;
                            height: 6px;
                            border-radius: 4px;
                            background-color: rgba(0, 0, 0, 0.5);
                            clip-path: polygon(0px 50%, 100% 50%, 100% 100%, 0px 100%);
                            bottom: 0px;

                            .playback-progress-bar-fill {
                                position: absolute;
                                left: 0px;
                                top: 50%;
                                height: 50%;
                                border-radius: 0px 2px 2px 0px;
                                background-color: rgb(255, 102, 153);
                                width: 60%;
                            }
                        }

                        .length {
                            background: #111;
                            background: rgba(0, 0, 0, .5);
                            border-radius: 5px 0 0 0;
                            color: #fff;
                            line-height: 20px;
                            transition: top .2s ease;
                            padding: 0 6px;
                            position: absolute;
                            right: 0;
                            bottom: 0;
                        }
                    }

                    .title {
                        display: block;
                        line-height: 20px;
                        height: 38px;
                        margin-top: 6px;
                        overflow: hidden;
                    }

                    .meta {
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-align: center;
                        align-items: center;
                        color: #999;
                        white-space: nowrap;
                        font-size: 0;
                        margin-top: 5px;
                        height: 16px;
                        line-height: 16px;
                    }
                }
            }

            .list-list {
                display: inline-block;
                width: 100%;

                .list-item {
                    margin: 0px 10px;
                    border-bottom: 1px solid #eee;
                    display: block;
                    padding: 20px 0;
                    position: relative;
                    line-height: 1;

                    .cover {
                        background-size: cover;
                        border-radius: 4px;
                        display: block;
                        float: left;
                        overflow: hidden;
                        position: relative;

                        .h-img {
                            width: 160px;
                            height: 100px;
                            position: relative;
                            background-color: #f1f2f3;

                            .h-img__inner {
                                border-radius: inherit;
                                width: 100%;
                                height: 100%;
                                display: inline-block;
                                vertical-align: middle;

                                img {
                                    box-shadow: 0 0 0 1px #edf2f9;
                                    border-radius: 4px;
                                    width: 100%;
                                    height: 100%;
                                    display: block;
                                    object-fit: cover;
                                }
                            }
                        }

                        .playback-progress-bar {
                            position: absolute;
                            width: 100%;
                            height: 6px;
                            border-radius: 4px;
                            background-color: rgba(0, 0, 0, 0.5);
                            clip-path: polygon(0px 50%, 100% 50%, 100% 100%, 0px 100%);
                            bottom: 0px;

                            .playback-progress-bar-fill {
                                position: absolute;
                                left: 0px;
                                top: 50%;
                                height: 50%;
                                border-radius: 0px 2px 2px 0px;
                                background-color: rgb(255, 102, 153);
                                width: 60%;
                            }
                        }

                        .length {
                            background: #111;
                            background: rgba(0, 0, 0, .5);
                            border-radius: 5px 0 0 0;
                            color: #fff;
                            line-height: 20px;
                            transition: top .2s ease;
                            padding: 0 6px;
                            position: absolute;
                            right: 0;
                            bottom: 0;
                        }
                    }

                    .c {
                        margin-right: 10px;
                        margin-left: 180px;

                        .title-row {
                            .title {
                                font-size: 18px;
                                height: 20px;
                                margin-bottom: 10px;
                                display: inline-block;
                                max-width: 680px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                        }

                        .desc {
                            height: 40px;
                            margin-bottom: 17px;
                            color: #777;
                            line-height: 20px;
                            overflow: hidden;
                        }

                        .meta {
                            display: flex;
                            align-items: center;
                            color: #aaa;
                        }


                    }
                }
            }
        }

        &:after {
            content: "\7A7A\95F4\4E3B\4EBA\8FD8\6CA1\6709\6295\8FC7\89C6\9891\54E6~~";
            background-image: url(@/assets/img/nodata02.png);
            background-position: 50%;
            background-repeat: no-repeat;
            border-radius: 4px;
            color: #6d757a;
            content: "\6570\636E\4E3A\7A7A";
            display: block;
            font-size: 14px;
            height: 450px;
            overflow: hidden;
            line-height: 640px;
            text-align: center;
        }
    }
}

.section:last-child {
    border-bottom: none;
    margin-bottom: 0;
}
</style>
