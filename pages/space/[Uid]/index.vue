<template>
    <div class="hl-space_wrapper">
        <div class="col-1">
            <div class="section i-pin-v">
                <h3 class="section-title">代表作</h3>
                <div class="section-tab">
                    <ul class="section-tab-inner">
                        <li class="section-tab-item is-active">
                            <span>我的粉丝会看到</span>
                        </li>
                        <li class="section-tab-item">
                            <span>新访客会看到</span>
                        </li>
                    </ul>
                    <div class="section-tab-cursor" style="transform: translateX(0px); width: 84px;"></div>
                </div>
                <div id="i-masterpiece">
                    <div class="content i-mp-multi">
                        <div class="small-item fakeDanmu-item" v-for="item in 6" :key="item">
                            <a href="" target="_blank" class="cover cover-big">
                                <div class="v-img">
                                    <picture class="h-img__inner">
                                        <source type="image/avif"
                                            srcset="//i1.hdslb.com/bfs/archive/8d458ab94066690313fd1c14ddc5bb0fc203df6c.jpg@440w_276h_1c_!web-space-index-topvideo.avif">
                                        <source type="image/webp"
                                            srcset="//i1.hdslb.com/bfs/archive/8d458ab94066690313fd1c14ddc5bb0fc203df6c.jpg@440w_276h_1c_!web-space-index-topvideo.webp">
                                        <img src="" alt="全网播放三千万的《声声慢》翻唱来啦！国语&amp;粤语你更想听哪个呢？" loading="lazy"
                                            onload="" onerror="">
                                    </picture>
                                </div>
                                <span class="length">01:19</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="section-pin-part" v-if="false">
                    <div class="i-pin-empty-set list-create">
                        <div class="create-covers-meta">
                            <div class="icon bold"></div>
                            <div class="text">设置置顶视频</div>
                        </div>
                    </div>
                </div>
                <div class="section-mp-empty" v-else>
                    <div class="i-pin-empty-set list-create">
                        <div class="create-covers-meta">
                            <div class="icon bold"></div>
                            <div class="text">设置代表作</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="pin-wrapper" style="display: none;">
                <div id="pin-layer">
                    <div class="pin-layer-header">
                        <p class="pin-layer-header-text">请选择置顶视频</p>
                        <span class="pin-layer-close icon"></span>
                    </div>
                    <div class="pin-layer-body">
                        <div class="pin-layer-search">
                            <input type="text" id="pin-layer-search" placeholder="搜索我上传的视频" class="space_input">
                            <span id="pin-layer-search-btn" class="icon"></span>
                        </div>
                        <div class="pin-layer-order">
                            <p class="pin-layer-order-tip">未添加视频列表</p>
                        </div>
                        <div class="pin-layer-video">
                            <div class="pin-layer-video-empty" style="">
                                还没有上传过视频哦，
                                <a href="" target="_blank">立即上传
                                    &gt;</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="section video empty full-rows host">
                <h3 class="section-title">
                    <a href="/1218132566/video" class="t">我的视频</a>
                    <span class="count">0</span>
                    <div class="sec-empty-hint sec-empty-hint-host">
                        还没有上传过视频哦~
                        <a href="//member.bilibili.com/v/video/submit.html" target="_blank">
                            立即上传
                        </a>
                    </div>
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
                </h3>
                <div class="content">
                    <div class="small-item fakeDanmu-item" v-for="item in 10" :key="item">
                        <a href="" target="_blank" class="cover cover-big">
                            <div class="v-img">
                                <picture class="h-img__inner">
                                    <source type="image/avif"
                                        srcset="//i1.hdslb.com/bfs/archive/8d458ab94066690313fd1c14ddc5bb0fc203df6c.jpg@440w_276h_1c_!web-space-index-topvideo.avif">
                                    <source type="image/webp"
                                        srcset="//i1.hdslb.com/bfs/archive/8d458ab94066690313fd1c14ddc5bb0fc203df6c.jpg@440w_276h_1c_!web-space-index-topvideo.webp">
                                    <img src="" alt="全网播放三千万的《声声慢》翻唱来啦！国语&amp;粤语你更想听哪个呢？" loading="lazy"
                                        onload="" onerror="">
                                </picture>
                            </div>
                            <div class="playback-progress-bar __small">
                                <div class="playback-progress-bar-fill __full" style="width: 100%;"></div>
                            </div>
                            <span class="length">01:19</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="section fav">
                <h3 class="section-title">
                    <a href="/1218132566/favlist" class="t">我的收藏夹</a>
                    <span class="count">1</span>
                    <a href="/1218132566/favlist" class="more">更多</a>
                    <span class="private-hint" style="display: none;">
                        <span class="icon"></span>
                        <span>仅自己可见</span>
                    </span>
                </h3>
                <div class="content clearfix">
                    <div data-count="http://i2.hdslb.com/bfs/archive/93c7ddad7e69b137cd85d70e7226187477a2f0b4.jpg"
                        class="fav-item">
                        <a href="/1218132566/favlist?fid=1321777266&amp;ftype=create" class="fav-covers">
                            <div class="h-img">
                                <picture class="h-img__inner">
                                    <source type="image/avif"
                                        srcset="//i2.hdslb.com/bfs/archive/93c7ddad7e69b137cd85d70e7226187477a2f0b4.jpg@304w_304h_1c_!web-space-index-myfav.avif">
                                    <source type="image/webp"
                                        srcset="//i2.hdslb.com/bfs/archive/93c7ddad7e69b137cd85d70e7226187477a2f0b4.jpg@304w_304h_1c_!web-space-index-myfav.webp">
                                    <img src="" alt="默认收藏夹" loading="lazy" onload="bmgOnLoad(this)"
                                        onerror="">
                                </picture>
                            </div>
                        </a>
                        <span class="fav-count">1</span>
                        <div class="m">
                            <span class="state">
                                私有
                            </span>
                            <a href="/1218132566/favlist?fid=1321777266&amp;ftype=create" class="name" title="默认收藏夹">
                                默认收藏夹
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section channel series empty host">
                <h3 class="section-title">
                    <a href="/1218132566/channel/series" class="t">我的合集和视频列表</a>
                </h3>
                <div class="empty-state">
                    <p>投稿视频可以分类展示了</p>
                    <div data-v-1ea3cefa="" class="btn-container btn-center">
                        <a class="btn primary btn-large">
                            <span class="btn-content">
                                创建视频列表
                            </span>
                        </a>
                    </div>
                </div>
                <div class="content">
                    <div class="channel-item" v-for="item in 3" :key="item">
                        <div class="channel-title">
                            <div title="合集·国风合集" class="channel-name">
                                合集·国风合集
                            </div>
                            <span class="count">
                                42
                            </span>
                            <div class="section-right-options">
                                <div class="more operation">
                                    更多
                                </div>
                            </div>
                        </div>
                        <div class="channel-video">
                            <div class="small-item fakeDanmu-item" v-for="item in 5" :key="item">
                                <a href="" target="_blank" class="cover cover-big">
                                    <div class="v-img">
                                        <picture class="h-img__inner">
                                            <source type="image/avif"
                                                srcset="//i1.hdslb.com/bfs/archive/8d458ab94066690313fd1c14ddc5bb0fc203df6c.jpg@440w_276h_1c_!web-space-index-topvideo.avif">
                                            <source type="image/webp"
                                                srcset="//i1.hdslb.com/bfs/archive/8d458ab94066690313fd1c14ddc5bb0fc203df6c.jpg@440w_276h_1c_!web-space-index-topvideo.webp">
                                            <img src="" alt="全网播放三千万的《声声慢》翻唱来啦！国语&amp;粤语你更想听哪个呢？" loading="lazy"
                                                onload="" onerror="">
                                        </picture>
                                    </div>
                                    <div class="playback-progress-bar __small">
                                        <div class="playback-progress-bar-fill __full" style="width: 100%;"></div>
                                    </div>
                                    <span class="length">01:19</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-2">
            <div class="section i-m">
                <div class="i-m-r1">
                    <a href="/platform/home" target="_blank" class="i-m-title">
                        <span class="icon-i-title"></span><span class="icon-m-ra"></span>
                    </a>
                </div>
                <div class="i-m-r2">
                    <a href="/platform/upload/video/frame" target="_blank"
                        class="i-m-btn i-m-upload">
                        <span class="i-m-u-icon icon"></span>
                        <span class="i-m-text">视频投稿</span>
                    </a>
                    <a href="/platform/upload-manager/article" target="_blank"
                        class="i-m-btn i-m-v">
                        <span class="i-m-v-icon icon"></span>
                        <span class="i-m-text">内容管理</span>
                    </a>
                </div>
            </div>
            <div class="section i-live hidden">
                <h3 class="section-title">直播间</h3>
                <div class="content">
                    <div class="i-live-off i-live-off-host">
                        <a href="" target="_blank" class="i-live-link">
                            <span class="i-live-icon icon"></span>
                            <span class="i-live-host-text">前往我的直播间</span>
                            <span class="r-arrow icon i-live-arrow"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="section user-info" privacy="1">
                <p class="user-info-title">
                    <span class="info-title">个人资料</span>
                    <a data-v-31d5659a="" href="//account.bilibili.com/account/setting" target="_blank">
                        <span class="change-info-btn">修改资料</span>
                    </a>
                </p>
                <div class="info-content">
                    <div class="info-personal">
                        <div class="info-wrap">
                            <span class="info-command">UID</span>
                            <span class="info-value">1218132566</span>
                        </div>
                        <div class="info-wrap">
                            <span class="info-command">生日</span>
                            <span class="info-value">01-01</span>
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
.btn {
    display: inline-block;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    padding: 0 10px;
    margin-right: 20px;
    line-height: 30px;
    min-width: 70px;
    transition: all .2s ease;
    font-size: 0;
    color: #666;
    text-align: center;
    vertical-align: middle;
    outline: none;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;
    box-sizing: border-box;
}

.btn-large {
    width: 140px;
    height: 40px;
    line-height: 40px;

    .btn-content {
        font-size: 14px;
        vertical-align: top;
    }
}

.primary {
    color: #fff;
    background-color: var(--brand_blue);
    border-color: var(--brand_blue);

    &:hover {
        background-color: #00b5e5;
        color: #fff;
        border-color: #00b5e5;
    }
}

.r-arrow {
    background-image: url(@/assets/img/icons.png);
    display: inline-block;
    vertical-align: middle;
    background-position: -349px -410px;
    width: 6px;
    height: 11px;
}

#pin-wrapper {
    background: rgba(0, 0, 0, .5);
    position: fixed;
    z-index: 10001;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    #pin-layer {
        background: #fff;
        border-radius: 4px;
        width: 570px;
        height: 540px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        transition: all .2s ease;

        .pin-layer-header {
            height: 50px;
            line-height: 50px;
            padding: 0 25px;
            font-size: 0;
            border-bottom: 1px solid #e5e9ef;
            box-sizing: border-box;

            .pin-layer-header-text {
                display: inline-block;
                font-size: 16px;
                vertical-align: bottom;
            }

            .pin-layer-close {
                position: absolute;
                top: 20px;
                right: 25px;
                background-position: -533px -279px;
                cursor: pointer;
                width: 20px;
                height: 14px;

                &:hover {
                    background-position: -597px -279px;
                }
            }
        }

        .pin-layer-body {
            margin: 10px 25px 22px;

            .pin-layer-search {
                margin-top: 10px;
                position: relative;

                #pin-layer-search {
                    border: 1px solid #d6dce5;
                    border-radius: 15px;
                    box-shadow: none;
                    width: 470px;
                    line-height: 32px;
                    padding: 0 40px 0 10px;
                }

                #pin-layer-search-btn {
                    background-position: -1111px -87px;
                    cursor: pointer;
                    width: 18px;
                    height: 18px;
                    position: absolute;
                    top: 6px;
                    right: 10px;
                }
            }

            .pin-layer-order {
                display: block;
                margin-top: 20px;
                height: 20px;

                .pin-layer-order-tip {
                    float: left;
                    line-height: 20px;
                    font-size: 12px;
                    color: #222;
                }
            }

            .pin-layer-video {
                position: relative;
                margin-top: 5px;
                height: 300px;
                width: 544px;
                background-image: url(@/assets/img/nodata02.png);
                background-position: 147px;
                background-repeat: no-repeat;

                .pin-layer-video-empty {
                    color: #99a2aa;
                    padding: 270px 0 0;
                    padding-right: 22px;
                    text-align: center;

                    a {
                        color: var(--brand_blue);
                    }
                }
            }
        }
    }
}

.icon {
    vertical-align: middle;
    background-repeat: no-repeat;
    display: inline-block;
    background-image: url(@/assets/img/icons.png);
}

.hl-space_wrapper {
    width: 1101px;
    margin: 0 auto;
    position: relative;
    display: block;

    .col-1 {
        background: #fff;
        border: 1px solid #eee;
        border-radius: 4px;
        float: left;
        padding: 15px 20px;
        width: 700px;
        box-sizing: content-box;

        .i-pin-v {
            padding-bottom: 20px;

            #i-masterpiece {
                margin-left: -9px;

                .content {
                    width: 900px;
                }

                .i-mp-multi {
                    display: block;
                    height: 182px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;

                    .small-item {
                        width: 220px;
                        height: 172px;
                        overflow: hidden;
                        padding-top: 0;
                        display: block;
                        float: left;
                        position: relative;
                        margin: 0 0 3px;
                        padding: 10px;
                        box-sizing: content-box;

                        .cover {
                            background: url(@/assets/img/video-placeholder.png) 50%;
                            background-size: cover;
                            border-radius: 4px;
                            display: block;
                            width: 220px;
                            height: 138px;
                            overflow: hidden;
                            position: relative;

                            .v-img {
                                background-color: transparent !important;
                            }

                            .length {
                                right: 4px;
                                bottom: 7px;
                                color: #fff;
                                border-radius: 2px;
                                line-height: 20px;
                                border-radius: var(--radius-xxs, 2px);
                                transition: bottom .2s ease;
                                padding: 0 6px;
                                position: absolute;
                                background: rgba(0, 0, 0, .5);
                            }
                        }

                    }

                    @media (min-width: 1420px) {

                        .small-item,
                        .cover,
                        .cover img {
                            width: 280px !important;
                            height: 175px !important;
                        }
                    }
                }
            }

            #i-masterpiece .small-item .cover,
            #i-masterpiece .small-item .cover img {
                width: 220px;
                height: 138px;
            }
        }

        .section {
            border-bottom: 1px solid #eee;
            margin-bottom: 17px;
            position: relative;


            .section-tab {
                position: relative;
                border-bottom: 1px solid #eee;
                margin-bottom: 15px;
                height: 25px;

                .section-tab-inner {
                    display: block;
                    height: 100%;

                    .section-tab-item {
                        float: left;
                        line-height: 28px;
                        vertical-align: top;
                        cursor: pointer;
                        padding-bottom: 5px;
                        margin-right: 30px;
                        font-size: 12px;
                    }

                    .is-active {
                        color: var(--brand_blue);
                    }
                }

                .section-tab-cursor {
                    position: absolute;
                    bottom: 0;
                    height: 0;
                    left: 0;
                    border-bottom: 1px solid #00a1d6;
                    transform: translateX(0);
                    transition: width .2s ease, transform .2s ease;

                }
            }

            .section-pin-part,
            .section-mp-empty {
                background: url(@/assets/img/dbz-hint-33.png) 250px bottom no-repeat;
                display: block;

                .i-pin-empty-set {
                    text-align: center;
                    width: 215px;
                    height: 138px;
                }

                .list-create {
                    cursor: pointer;
                    position: relative;
                    background: #fff;
                    border: 2px dashed #b8c0cc;
                    border-radius: 4px;
                    transition: border .2s ease;
                    box-sizing: border-box;

                    .create-covers-meta {
                        position: absolute;
                        top: 50%;
                        width: 100%;
                        transform: translateY(-50%);

                        .bold {
                            display: block;
                            width: 40px;
                            height: 40px;
                            margin: 0 auto;
                            transition: background .2s ease;
                            background-position: -716px -332px;
                        }

                        .text {
                            line-height: 16px;
                            margin-top: 8px;
                            text-align: center;
                            color: #666;
                            font-size: 12px;
                        }
                    }

                    &:hover {
                        border-color: var(--brand_blue);

                        .bold {
                            background-position: -716px -396px;
                        }
                    }
                }
            }

            .section-pin-part {
                background: url(@/assets/img/dbz-hint-33.png) 250px bottom no-repeat;
                display: block;

            }

            .section-mp-empty {
                background: url(@/assets/img/dbz-hint-22.png) 260px bottom no-repeat;
                display: block;
            }

            .section-title {
                color: #000;
                font-size: 20px;
                font-weight: 400;
                line-height: 33px;
                padding: 0 0 15px;
                position: relative;

                .t {
                    display: inline-block;
                    vertical-align: middle;
                }

                .sec-empty-hint {
                    color: #99a2aa;
                    font-size: 12px;
                    position: absolute;
                    top: 0;
                    left: 300px;
                }

                .more {
                    border: 1px solid #b8c0cc;
                    border-radius: 4px;
                    color: #6d757a;
                    font-size: 12px;
                    line-height: 22px;
                    transition: border .2s ease;
                    padding: 0 19px 0 10px;
                    top: 6px;
                    right: 0;
                    background-position: -310px -405px;
                    background-image: url(@/assets/img/icons.png);
                    position: absolute;
                }

                .icon {
                    width: 33px;
                    height: 33px;
                    vertical-align: middle;
                    margin-right: 10px;
                }

                .private-hint {
                    display: inline-block;
                    color: #6d757a;
                    cursor: default;
                    font-size: 12px;
                    vertical-align: middle;

                    .icon {
                        background-position: -203px -724px;
                        margin: 0 0 0 15px;
                    }
                }

                .be-tab {
                    display: inline-block;
                    line-height: 18px;
                    vertical-align: middle;
                    margin-left: 10px;
                    position: relative;

                    .be-tab-inner {
                        display: block;

                        .be-tab-item {
                            float: left;
                            line-height: 28px;
                            vertical-align: top;
                            cursor: pointer;
                            padding: 0 0 3px;
                            margin-right: 15px;
                            font-size: 12px;
                        }

                        .is-active {
                            color: var(--brand_blue);
                        }
                    }

                    .be-tab-cursor,
                    .be-tab-cursor:after {
                        position: absolute;
                        bottom: 0;
                        height: 0;
                        width: 0;
                    }

                    .be-tab-cursor {
                        left: 0;
                        border-bottom: 1px solid var(--brand_blue);
                        transform: translateX(0);
                        transition: width .2s ease, transform .2s ease;
                    }
                }

            }

            .empty-state {
                padding-bottom: 30px;
                margin-top: 7px;
                text-align: center;

                p {
                    line-height: 14px;
                    font-size: 12px;
                    color: #6d757a;
                }



                .btn-container {
                    font-size: 0;
                    white-space: nowrap;
                    margin-top: 12px;
                    text-align: center;

                    &:last-of-type {
                        margin-right: 0;
                    }
                }
            }

            .count {
                background: #f6fafb;
                border: 1px solid #ddd;
                border-radius: 3px;
                color: #777;
                display: inline-block;
                font-size: 12px;
                line-height: 18px;
                height: 18px;
                margin-left: 11px;
                padding: 0 5px;
                position: relative;
                vertical-align: middle;
            }

            .content {
                max-height: 935px;
                overflow: hidden;
            }
        }

        .channel .content {
            // width: 700px;
            max-height: none;
            overflow: hidden;

            .channel-item {
                margin-bottom: 20px;
                padding-bottom: 4px;
                border-bottom: 1px solid #e5e9ef;

                .channel-title {
                    position: relative;
                    height: 24px;
                    line-height: 24px;
                    font-size: 0;

                    .channel-name {
                        display: inline-block;
                        font-size: 20px;
                        color: #000;
                        max-width: 500px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        cursor: pointer;
                        vertical-align: middle;
                    }

                    .count {
                        background: #f6fafb;
                        border: 1px solid #ddd;
                        border-radius: 3px;
                        color: #777;
                        display: inline-block;
                        font-size: 12px;
                        line-height: 18px;
                        height: 18px;
                        margin-left: 11px;
                        padding: 0 5px;
                        position: relative;
                        vertical-align: middle;
                    }

                    .section-right-options {
                        float: right;
                        height: 24px;
                        display: -ms-flexbox;
                        display: flex;

                        .more {
                            position: static;
                            top: auto;
                            right: auto;
                            cursor: pointer;
                            background-position: -310px -405px;
                        }

                        .operation {
                            display: inline-block;
                            background-image: url(@/assets/img/icons.png);
                            border: 1px solid #b8c0cc;
                            border-radius: 4px;
                            color: #6d757a;
                            font-size: 12px;
                            line-height: 22px;
                            transition: border .2s ease;
                            padding: 0 19px 0 10px;
                        }
                    }
                }

                .channel-video {
                    display: block;
                    white-space: nowrap;
                    overflow: hidden;

                    .small-item:first-child {
                        padding-left: 0;
                    }

                    @media (max-width: 1420px) {
                        .small-item:nth-child(4n+4) {
                            padding-right: 0;
                        }

                        .small-item:nth-child(4n+1) {
                            padding-left: 0;
                        }
                    }

                    .small-item {
                        width: 160px;
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

                            .length {
                                right: 4px;
                                bottom: 7px;
                                color: #fff;
                                border-radius: 2px;
                                line-height: 20px;
                                transition: bottom .2s ease;
                                padding: 0 6px;
                                position: absolute;
                                background: rgba(0, 0, 0, .5);
                            }

                            .playback-progress-bar {
                                position: absolute;
                                width: 100%;
                                height: 8px;
                                border-radius: 4px;
                                background-color: rgba(0, 0, 0, .5);
                                clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
                                bottom: 0;

                                .playback-progress-bar-fill {
                                    position: absolute;
                                    left: 0;
                                    top: 50%;
                                    height: 50%;
                                    border-radius: 0 2px 2px 0;
                                    background-color: var(--brand_pink);
                                }
                            }

                            .playback-progress-bar.__small {
                                height: 6px;
                            }


                        }


                    }

                    @media (min-width: 1420px) {
                        .small-item:nth-child(5n+5) {
                            padding-right: 0;
                        }

                        .small-item:nth-child(5n+1) {
                            padding-left: 0;
                        }
                    }
                }
            }
        }

        .video .content {
            max-height: 380px;
            overflow: hidden;

            @media (max-width: 1420px) {
                .small-item:nth-child(4n+4) {
                    padding-right: 0;
                }

                .small-item:nth-child(4n+1) {
                    padding-left: 0;
                }
            }

            .small-item:first-child {
                padding-left: 0;
            }

            .small-item {
                width: 160px;
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

                    .length {
                        right: 4px;
                        bottom: 7px;
                        color: #fff;
                        border-radius: 2px;
                        line-height: 20px;
                        border-radius: var(--radius-xxs, 2px);
                        transition: bottom .2s ease;
                        padding: 0 6px;
                        position: absolute;
                        background: rgba(0, 0, 0, .5);
                    }

                    .playback-progress-bar {
                        position: absolute;
                        width: 100%;
                        height: 8px;
                        border-radius: 4px;
                        background-color: rgba(0, 0, 0, .5);
                        clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
                        bottom: 0;

                        .playback-progress-bar-fill {
                            position: absolute;
                            left: 0;
                            top: 50%;
                            height: 50%;
                            border-radius: 0 2px 2px 0;
                            background-color: var(--brand_pink);
                        }
                    }

                    .playback-progress-bar.__small {
                        height: 6px;
                    }


                }


            }

            @media (min-width: 1420px) {
                .small-item:nth-child(5n+5) {
                    padding-right: 0;
                }

                .small-item:nth-child(5n+1) {
                    padding-left: 0;
                }
            }

        }
    }

    .col-2 {
        float: right;
        width: 350px;

        .section.i-m {
            padding-top: 15px;

            .i-m-r1 {
                text-align: center;
                padding: 0 10px 13px;

                .i-m-title {
                    display: inline-block;

                    .icon-i-title {
                        display: block;
                        width: 120px;
                        height: 34px;
                        background: url(@/assets/img/icon_createCenters.png) no-repeat;
                        background-size: 100% 100%;
                        float: left;
                    }

                    .icon-m-ra {
                        display: block;
                        width: 28px;
                        height: 28px;
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAY5JREFUaAXtmb9KA0EQh2eSWGjjE1gbQYgS7UVbn8UXCFoo+gK+im1EaxM0xCIBK4sUthYi5lh3SXGkCCwyszPgb4v7wy1z8327x83tEaHBAAzAAAzAAAzAAAzAAAzAgAsDIYTGePy25SKZmERDMpHBbLYxHE3739XP++Blci4Z+6+xRAHp4/OMKBwtkgmXHiBFAZst6hPxV23bHlIUcH93+4mZTj1Bcm1b7mg4mhyHQHdxuq7XUfniYK99VZ+XOVIBTKl7gVQD9AKpCugBUh3QGrIIoCVkMUAryKKAFpDFAVdBxgKh1+3s3KTrkk20kslNrNtp3xPz0ks/Fga9+CXSzI2R288EMBUBFMLS10YcwWtmrnITz+3Xyu0o1W9VhRNHVXx6ppyLPoOr4DRr1GKAFnDFRtAKrgigJZw6oDWcKqAHODVAL3AqgJ7gxAGfX6eH1Tw8eliLSXCpiZZq1ZxOPMGJA67x5m0sjh5S4Lg3WUVb3Ftx6+3fhCIqQsMADMAADMAADMAADMDA/zbwC+qC2/i4tVKPAAAAAElFTkSuQmCC) no-repeat;
                        background-size: 100% 100%;
                        float: right;
                        position: relative;
                        top: 6px;
                    }
                }

            }

            .i-m-r2 {
                border: 1px solid #e5e9ef;
                border-radius: 4px;
                padding: 7px 0;
                position: relative;
                display: block;
                height: 37px;

                .i-m-upload {
                    border-right: 1px solid #e5e9ef;
                }

                .i-m-btn {
                    color: #6d757a;
                    float: left;
                    text-align: center;
                    width: 152px;
                    line-height: 20px;
                    position: relative;

                    .i-m-u-icon {
                        background-position: -1111px -151px;
                        width: 18px;
                        height: 18px;
                        margin-right: 6px;
                    }

                    .i-m-v-icon {
                        background-position: -1111px -215px;
                        width: 18px;
                        height: 19px;
                        margin-right: 6px;
                        vertical-align: middle;
                    }

                    .i-m-text,
                    .i-m-u-icon {
                        vertical-align: middle;
                    }
                }
            }
        }

        .user-info {
            .user-info-title {
                display: -ms-flexbox;
                display: flex;
                -ms-flex-pack: justify;
                justify-content: space-between;
                box-sizing: border-box;
                padding-bottom: 18px;
                border-bottom: 1px solid #e5e9ef;
                margin-bottom: 10px;

                .info-title {
                    line-height: 23px;
                    font-size: 14px;
                    color: #222;
                    font-family: Microsoft YaHei;
                }

                a {
                    .change-info-btn {
                        display: inline-block;
                        width: 56px;
                        height: 22px;
                        color: #9499a0;
                        border: .5px solid #c0c9d4;
                        text-align: center;
                        font-size: 12px;
                        line-height: 22px;
                        border-radius: 4px;
                    }
                }
            }

            .info-content {
                .info-personal {
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
                    width: 100%;

                    .info-wrap {
                        -ms-flex-negative: 0;
                        flex-shrink: 0;
                        width: 139px;
                        margin: 10px 0;
                        white-space: nowrap;

                        .info-command {
                            display: inline-block;
                            min-width: 24px;
                            font-size: 12px;
                            font-family: Microsoft YaHei;
                            line-height: 16px;
                            color: #9499a0;
                            margin-right: 6px;
                        }

                        .info-value {
                            color: #6d757a;
                            font-family: Microsoft YaHei;
                            font-size: 12px;
                            line-height: 16px;
                            padding-right: 6px;
                        }
                    }
                }
            }
        }

        .section {
            background: #fff;
            border: 1px solid #eee;
            border-radius: 4px;
            padding: 15px 20px 18px;
            margin-bottom: 10px;
            position: relative;

            .section-title {
                border-bottom: 1px solid #e5e9ef;
                font-size: 14px;
                font-weight: 300;
                padding: 0;
                margin: -15px 0 10px;
                height: 45px;
                line-height: 45px;
            }

        }

        .i-live {
            .i-live-off {
                margin: 30px 0 15px;
                text-align: center;
            }

            .i-live-link {
                display: block;
            }

            .i-live-icon {
                background-position: -600px -533px;
                width: 16px;
                height: 16px;
                margin-right: 3px;
            }

            .i-live-host-text,
            .i-live-icon {
                vertical-align: middle;
            }

            .i-live-arrow {
                margin-left: 8px;
            }
        }
    }

    .fav-item {
        position: relative;
        float: left;
        margin: 0 20px 28px 0;

        .state {
            color: #99a2aa;
            float: right;
            line-height: 24px;
        }

        .name {
            display: block;
            font-size: 18px;
            font-family: Microsoft Yahei UI Light, Microsoft Yahei Light;
            line-height: 24px;
            width: 7em;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    .fav-covers {
        border: 1px solid #ccd0d7;
        border-radius: 4px;
        display: block;
        width: 152px;
        height: 152px;
        margin-bottom: 11px;
        overflow: hidden;
        position: relative;
    }

    .fav-count {
        position: absolute;
        top: 10px;
        right: 10px;
        min-width: 12px;
        padding: 0 9px;
        line-height: 18px;
        text-align: center;
        font-family: Arial;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background: rgba(0, 0, 0, .5);
        border-radius: 9px;
    }

    .h-img {
        position: relative;
        background-color: var(--bg3);
        height: 100%;
    }

    .h-img__inner {
        border-radius: inherit;
        width: 100%;
        height: 100%;
        display: inline-block;
        vertical-align: middle;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: inherit;
        }
    }

    @media (min-width: 1420px) {

        .col-1 .section.empty:after,
        .col-1 .section .sec-empty-hint {
            left: 400px;
        }
    }
}

@media (min-width: 1420px) {
    .hl-space_wrapper {
        width: 1283px !important;

        .col-1 {
            width: 880px !important;
        }
    }
}
</style>