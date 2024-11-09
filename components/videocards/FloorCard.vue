<template>
    <div class="floor-card" :class="isLoading ? '' : 'single-card'">
        <div class="floor-card-inner">
            <div class="cover-container">
                <div class="cover-container__skeleton" :class="isLoading ? '' : 'skeleton-hide'"></div>
                <a href="" target="_blank" :class="isLoading ? 'skeleton-hide' : ''">
                    <div class="cover-shim">
                        <picture class="cover">
                            <source :srcset="imageUrl3" type="image/webp">
                            </source>
                            <source :srcset="imageUrl" type="image/jpg">
                            </source>
                            <img :src="imageUrl3" alt="封面" ref="videoCardImg" />
                        </picture>
                    </div>
                    <div class="badge">
                        <svg-icon name="live" color="#ffffff"></svg-icon>
                        <span class="floor-title">直播</span>
                    </div>
                    <div class="video-card__mask">
                        <div class="video-card__stats">
                            <div class="video-card__stats--left">
                                <span class="video-card__stats--item">
                                    <IconsVideocardView />
                                    <span>509</span>
                                </span>
                            </div>
                            <div class="video-card__stats--right">
                                <span class="video-card__stats--item">
                                    <span>科技</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="info-container">
                <div class="title">
                    <div class="title__skeleton" :class="isLoading ? '' : 'skeleton-hide'">
                        <div class="text__skeleton"></div>
                        <div class="text__skeleton text-bottom"></div>
                    </div>
                    <a href="" target="_blank" class="info__link" :class="isLoading ? 'skeleton-hide' : ''">
                        <div class="living">
                            <img src="@/assets/img/live.gif" />
                            <span>直播中</span>
                        </div>
                        <span class="title-text">没有老公 所以打工</span>
                    </a>
                </div>
                <div class="sub-title__skeleton" :class="isLoading ? '' : 'skeleton-hide'"></div>
                <a class="sub-title" target="_blank" :class="isLoading ? 'skeleton-hide' : ''">
                    <IconsVideocardUp />
                    <span>你的猫猫Ada11月1周年庆</span>
                </a>
            </div>
            <div class="layer"></div>
            <div class="layer tiny"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
const imageUrl = '//io.v.hblog.top/hfs/archive/0c257ae61fc66f1962a273e78beda7e7.jpg@672w_378h_1c_!web-home-common-cover.jpg';
const imageUrl3 = '//io.v.hblog.top/hfs/archive/f55e65c7fa2b58f1b591cbb85d1d55c5a6a3b4bc.png@672w_378h_1c.webp';
const isLoading = ref(false);
</script>
<style lang="scss" scoped>
.floor-card {
    padding: 0;
    position: relative;
    z-index: 1;
    border: 1px solid var(--line_regular);
    --info-margin-bottom: 8px;
    --title-line-height: 22px;
    --subtitle-line-height: 17px;
    --title-font-size: 15px;
    --subtitle-font-size: 13px;
    display: flex;
    flex-direction: column;
    // border: 1px solid #e3e5e7;
    background: var(--bg1);
    box-shadow: 0 0 40px rgba(0, 0, 0, .03);
    max-width: 380px;
    border-radius: 6px;
    transition: all 0.5s ease;
    // padding: 12px;

    .floor-card-inner {
        background: var(--bg1_float);
        border-radius: 6px;
        transition: background-color .2s;

        .cover-container {
            position: relative;
            width: 100%;
            height: 100%;
            margin-bottom: var(--info-margin-bottom);
            border-radius: 5px;
            overflow: hidden;

            .cover-shim {
                background: #f1f2f3;
                padding-top: var(--cover-radio);
                position: relative;
                width: 100%;
                height: 100%;

                &::before {
                    content: "";
                    display: block;
                    width: 100%;
                    /* 或者指定一个具体的宽度 */
                    height: 0;
                    /* 高度设为0，通过padding-top来控制比例 */
                    padding-top: 56.25%;
                    overflow: hidden;
                }

                .cover {
                    position: absolute;
                    top: 0;
                    z-index: 3;
                    object-fit: cover;
                    display: inline-block;
                    line-height: 1;
                    width: 100%;
                    height: 100%;
                    vertical-align: middle;
                    background-color: var(--graph_bg_regular);

                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: inherit;
                    }
                }
            }

            .badge {
                position: absolute;
                left: 6px;
                top: 6px;
                height: 27px;
                z-index: 3;
                background: white;
                padding: 0 6px;
                cursor: pointer;
                display: flex;
                align-items: center;
                border-radius: 6px;

                .icon-live {
                    width: 18px;
                    height: 18px;
                }

                .floor-title {
                    color: #18191c;
                    font-weight: 500;
                    line-height: 17px;
                    letter-spacing: 0;
                    text-align: left;
                    font-size: 14px;
                }
            }

            .video-card__mask {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 3;
                width: 100%;
                height: 100%;
                opacity: 1;
                transition: all .2s linear .2s;
                pointer-events: none;

                .video-card__stats {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    z-index: 2;
                    box-sizing: border-box;
                    padding: 16px 8px 6px;
                    width: 100%;
                    height: 38px;
                    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .8) 100%);
                    color: #fff;
                    opacity: 1;

                    .video-card__stats--left {
                        display: flex;
                        align-items: center;
                        font-size: 13px;
                    }

                    .bili-video-card__stats--right {
                        display: flex;
                        align-items: center;
                        font-size: 13px;
                    }

                    .video-card__stats--item {
                        display: flex;
                        align-items: center;
                        margin-right: 12px;

                        :deep(.icon-view) {
                            width: 18px;
                            height: 18px;
                            margin-right: 2px;
                        }
                    }
                }
            }

            .cover-container__skeleton {
                position: relative;
                width: auto;
                height: 0;
                display: block;
                padding-top: 56.25%;
                /* 16:9 = 9 / 16 * 100% = 56.25% */
                overflow: hidden;
                background: linear-gradient(-45deg,
                        #F1F2F3 25%,
                        #FFFFFF 45%,
                        #F1F2F3 65%);
                background-size: 400% 100%;
                animation: skeleton-loading 1.2s ease-in-out infinite;
            }
        }

        .info-container {
            display: flex;
            flex-direction: column;
            align-items: start;
            padding: 0 12px;
            padding-bottom: 16px;

            .title {
                word-break: break-word !important;
                word-break: break-all;
                line-break: anywhere;
                display: -webkit-inline-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                text-overflow: -o-ellipsis-lastline;
                text-overflow: ellipsis;
                text-indent: initial;
                line-clamp: 2;
                -webkit-line-clamp: 2;
                width: 100%;
                margin-bottom: 3px;
                font-size: var(--title-font-size);
                font-weight: 500;
                line-height: 22px;
                height: calc(var(--title-line-height)* 2);

                .info__link {
                    font-weight: 500;

                    .living {
                        display: -webkit-flex;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        display: -webkit-inline-flex;
                        display: inline-flex;
                        margin-right: 4px;
                        padding-right: 4px;
                        height: 18px;
                        font-size: 12px;
                        cursor: pointer;
                        line-height: 16px;
                        font-weight: 400;
                        color: var(--brand_pink);
                        border: 1px solid var(--brand_pink);
                        border-radius: 4px;
                        box-sizing: border-box;
                        user-select: none;
                        transform: translateY(1px);

                        img {
                            width: 12px;
                            height: 12px;
                            margin-left: 4px;
                            margin-right: 3px;
                            transform: translateZ(0);
                        }
                    }

                    .title-text {
                        font-size: 15px;
                        line-height: 18px;

                        &:hover {
                            color: var(--brand_blue);
                        }
                    }
                }

                .title__skeleton {
                    height: 42px;
                    width: 100%;

                    .text__skeleton {
                        height: 20px;
                        width: 100%;
                        border-radius: 4px;
                        background: linear-gradient(-45deg,
                                #F1F2F3 25%,
                                #FFFFFF 45%,
                                #F1F2F3 65%);
                        background-size: 400% 100%;
                        animation: skeleton-loading 1.2s ease-in-out infinite;
                    }

                    .text-bottom {
                        width: 70%;
                        margin-top: 2px;
                    }
                }
            }

            .sub-title {
                cursor: pointer;
                font-weight: 400;
                letter-spacing: 0;
                color: var(--text3);
                font-size: 13px;
                line-height: var(--subtitle-line-height);
                transition: all .3s;
                display: flex;
                justify-content: center;

                :deep(.icon-up) {
                    margin-right: 2px;
                    width: var(--subtitle-line-height);
                    height: var(--subtitle-line-height);
                    fill: var(--text3);
                }

                span {
                    line-height: var(--subtitle-line-height);
                }

                &:hover {
                    :deep(.icon-up) {
                        fill: var(--brand_blue);
                    }

                    color: var(--brand_blue);
                }
            }

            .sub-title__skeleton {
                height: 18px;
                width: 60%;
                border-radius: 4px;
                background: linear-gradient(-45deg,
                        #F1F2F3 25%,
                        #FFFFFF 45%,
                        #F1F2F3 65%);
                background-size: 400% 100%;
                animation: skeleton-loading 1.2s ease-in-out infinite;
            }

        }

        .layer {
            width: 90%;
            height: 100%;
            z-index: -1;
            left: 50%;
            transform: translate(-50%, 6px);
            top: 0;
            position: absolute;
            background: var(--graph_bg_thick);
            border-radius: 6px;
        }

        .tiny {
            z-index: -2;
            width: 80%;
            transform: translate(-50%, 12px);
            background: var(--graph_bg_regular);
        }
    }

    .skeleton-hide {
        display: none !important;
    }
}

.single-card {
    .floor-card-inner:hover {
        background: var(--bg2_float);
    }
}

// @media (min-width: 1367px) and (max-width: 1700.9px) {
//     .single-card.floor-card {
//         --info-margin-bottom: 10px;
//     }
// }
</style>