<template>
    <div id="page-channel">
        <div class="wrapper">
            <div class="col-full">
                <div class="channel-index section">
                    <div class="breadcrumb">
                        <p class="item cur">TA的合集和视频列表</p>
                        <div class="item style">
                            <span class="icon cube active"></span>
                            <span class="icon list"></span>
                        </div>
                    </div>
                    <div class="content">
                        <div class="channel-list">
                            <div class="channel-item" v-for="item in 9" :key="item">
                                <div class="cover">
                                    <div class="v-img">
                                        <picture class="v-img__inner">
                                            <source type="image/avif" srcset="">
                                            <source type="image/webp" srcset="">
                                            <img src="" loading="lazy" onload="" onerror="">
                                        </picture>
                                    </div>
                                    <div class="video-num">
                                        <span>42</span>
                                        <em class="iconfont icon-heji"></em>
                                    </div>
                                </div>
                                <span class="playall">
                                    <i class="iconfont icon-bofang"></i>
                                </span>
                                <div data-v-493154f0="" class="channel-meta">
                                    <h4 class="channel-name">
                                        合集·国风合集
                                    </h4>
                                    <div class="channel-update-time">
                                        10-27
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

</script>
<style scoped lang="scss">
#page-channel {
    .icon {
        cursor: pointer;
        display: block;
        width: 18px;
        height: 18px;
        background-repeat: no-repeat;
        display: inline-block;
        background-image: url(@/assets/img/icons.png);
    }

    .wrapper {
        width: 1101px;
        margin: 0 auto;
        position: relative;

        .col-full {
            background: #fff;
            box-shadow: 0 0 0 1px #eee;
            border-radius: 4px;
            padding: 20px;

            .section {
                border-bottom: 1px solid #eee;
                margin-bottom: 17px;
                position: relative;

                .breadcrumb {
                    line-height: 24px;
                    font-size: 0;
                    vertical-align: middle;
                    position: relative;
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-flow: row;
                    flex-flow: row;
                    -ms-flex-pack: justify;
                    justify-content: space-between;

                    .item {
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-flow: row;
                        flex-flow: row;
                        font-size: 18px;
                        color: #6d757a;
                        vertical-align: middle;
                    }

                    .item.cur {
                        color: #222;
                    }

                    .item.style {
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

                .content {
                    .channel-list {
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-flow: row;
                        flex-flow: row;
                        -ms-flex-wrap: wrap;
                        flex-wrap: wrap;
                        -ms-flex-pack: start;
                        justify-content: flex-start;
                        width: 100%;

                        .channel-item {
                            -ms-flex: 0 0 auto;
                            flex: 0 0 auto;
                            width: 190px;
                            margin: 20px 20px 0 0;
                            position: relative;

                            .cover {
                                position: relative;
                                display: block;
                                width: 100%;
                                height: 120px;
                                border-radius: 3px;
                                overflow: hidden;
                                background-image: url(@/assets/img/video-placeholder.png);
                                background-position: 50%;
                                background-size: cover;
                                cursor: pointer;

                                .v-img {
                                    background-color: transparent !important;
                                    height: 100%;

                                    .v-img__inner {
                                        width: 100%;
                                        height: 100%;
                                        display: inline-block;
                                        vertical-align: middle;

                                        img {
                                            display: block;
                                            width: 100%;
                                            height: 100%;
                                            object-fit: inherit;
                                            border-radius: inherit;
                                        }
                                    }
                                }

                                .video-num {
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                    width: 70px;
                                    height: 100%;
                                    color: #e5e9ef;
                                    text-align: center;
                                    font-size: 12px;
                                    box-sizing: border-box;
                                    background-color: rgba(0, 0, 0, .5);

                                    span {
                                        margin-top: 38px;
                                        display: block;
                                        line-height: 20px;
                                        font-size: 18px;
                                        color: #fff;
                                        font-weight: 400;
                                        font-family: Arial;
                                    }

                                    .icon-heji {
                                        font-size: 25px;
                                        color: #ffffff;
                                    }
                                }
                            }

                            .playall {
                                position: absolute;
                                right: 4px;
                                top: 92px;
                                color: #fff;
                                background-color: rgba(0, 0, 0, .5);
                                width: 24px;
                                height: 24px;
                                border-radius: 4px;
                                text-align: center;
                                cursor: pointer;

                                .icon-bofang {
                                    font-size: 12px;
                                    line-height: 24px;
                                    transform: scale(.9);
                                }
                            }

                            .channel-meta {
                                height: 55px;

                                .channel-name {
                                    max-height: 36px;
                                    line-height: 18px;
                                    margin-top: 5px;
                                    color: #222;
                                    overflow: hidden;
                                    font-weight: 300;
                                }

                                .channel-update-time {
                                    line-height: 14px;
                                    height: 14px;
                                    margin-top: 5px;
                                    color: #999;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                            }
                        }

                        @media (max-width: 1420px) {
                            .channel-item {
                                width: 190px;

                                .cover {
                                    height: 119px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 1420px) {
        .wrapper {
            width: 1283px !important;
        }
    }
}
</style>