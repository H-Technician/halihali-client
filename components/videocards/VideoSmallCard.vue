<template>
    <div class="video-page-card-small">
        <div class="card-box">
            <div class="pic-box">
                <div class="pic">
                    <div class="framepreview-box">
                        <a href="" class="video-awesome-img">
                            <div class="h-img">
                                <picture class="h-img__inner">
                                    <source type="image/webp" srcset="">
                                    <source type="image/jpg"
                                        :srcset="imageUrl">
                                    <img :src="imageUrl3"
                                        alt="鸿蒙next动画卡成啥了，还好意思吹？" loading="lazy">
                                </picture>
                            </div>
                        </a>
                        <div class="mask-video"></div>
                        <span class="duration">04:34</span>
                    </div>
                </div>
            </div>
            <div class="info">
                <NuxtLink to="/video/HVBZ262xBSfr?spm_id_from=333.788.recommend_more_video.2&vd_source=630c72d5a1c2c47b04d936fc3a32b878">
                    <p class="title">Windows 7居然可以在2024年接收更新！</p>
                </NuxtLink>
                <div class="upname">
                    <a href="" target="_blank">
                        <IconsVideocardUp />
                        <span class="name">且使新火试新茶</span>
                    </a>
                </div>
                <div class="playinfo">
                    <IconsVideocardPlayer class="icon play" />
                    <span>4.2万</span>
                    <IconsVideocardDanMu class="icon dm" />
                    <span>800</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const imageUrl = '//io.v.hblog.top/hfs/archive/0d962f2725a461b628d441dcda33eca7.jpg@672w_378h_1c_!web-home-common-cover.jpg';
const imageUrl3 = '//io.v.hblog.top/hfs/archive/0d962f2725a461b628d441dcda33eca7.jpg@672w_378h_1c_!web-home-common-cover.webp';
</script>
<style lang="scss" scoped>
.video-page-card-small {
    margin-bottom: 12px;

    .card-box {
        display: flex;

        .pic-box {
            position: relative;
            width: 141px;
            height: 80px;
            border-radius: 6px;
            background: var(--graph_weak);
            flex: 0 0 auto;

            .pic {
                position: relative;
                overflow: hidden;
                border-radius: 6px;
                width: 100%;
                height: 100%;

                .framepreview-box {
                    height: calc(100% + 10px);
                    position: absolute;
                    width: 100%;
                    bottom: 0;

                    .video-awesome-img {
                        display: block;
                        position: absolute;
                        top: 10px;
                        width: 141px;
                        height: 80px;

                        .h-img {
                            width: 100%;
                            height: 100%;
                            background-color: #f1f2f3;
                            position: relative;

                            .h-img__inner {
                                width: 100%;
                                height: 100%;
                                display: inline-block;
                                vertical-align: middle;

                                img {
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                    display: block;
                                    margin: 0 auto;
                                }
                            }
                        }
                    }

                    .mask-video {
                        // opacity: 0;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.07);
                        transition: opacity 0.3s;
                        pointer-events: none;
                    }

                    .duration {
                        position: absolute;
                        bottom: 6px;
                        right: 6px;
                        color: var(--text_white);
                        height: 20px;
                        line-height: 20px;
                        transition: opacity 0.3s;
                        z-index: 5;
                        font-size: 13px;
                        background-color: rgba(0, 0, 0, 0.4);
                        border-radius: 2px;
                        padding: 0 4px;
                    }
                }
            }
        }

        .info {
            margin-left: 10px;
            flex: 1;
            font-size: 13px;
            line-height: 15px;
            width: calc(100% - 151px);

            a {
                .title {
                    color: var(--text1);
                    display: block;
                    font-size: 15px;
                    font-weight: 500;
                    line-height: 19px;
                    transition: color 0.3s;
                    display: -webkit-box;
                    line-clamp: 2;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-break: break-all;
                    line-break: anywhere;
                }
            }

            .upname {
                cursor: pointer;
                margin: 2px 0;
                height: 20px;

                a {
                    color: var(--text3);
                    fill: var(--text3);
                    transition: color 0.3s;
                    display: inline-flex;
                    align-items: center;
                    width: 100%;
                    height: 100%;

                    .name {
                        width: calc(100% - 24px);
                        display: -webkit-box;
                        line-clamp: 1;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        word-break: break-all;
                        line-break: anywhere;
                    }
                }
            }

            .playinfo {
                color: var(--text3);
                display: inline-flex;
                align-items: center;

                .icon {
                    width: 18px;
                    height: 18px;
                }

                .play {
                    margin-right: 4px;
                } 
                
                .dm {
                    margin-left: 8px;
                    margin-right: 4px;
                }
            }
        }
    }
}
</style>