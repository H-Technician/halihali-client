<template>
    <div class="dyn-up-list">
        <div class="dyn-up-list__nav prev" style="display: none;">
            <div class="dyn-up-list__nav__shim"></div>
            <div class="dyn-up-list__nav__shadow">
                <div class="dyn-up-list__nav__btn">
                    <svg-icon name="arr-left" color="#9499a0"></svg-icon>
                </div>
            </div>
        </div>
        <div class="dyn-up-list__window">
            <div class="dyn-up-list__content">
                <div class="shim"></div>
                <div class="dyn-up-list__item active">
                    <div class="dyn-up-list__item__face all"></div>
                    <div class="dyn-up-list__item__name">全部动态</div>
                </div>
                <div class="dyn-up-list__item" v-for="item in 9" :key="item">
                    <div class="dyn-up-list__item__face">
                        <div class="dyn-up-list__item__face__img h-img--face h-img">
                            <picture class="h-img__inner">
                                <source type="image/avif"
                                    srcset="//io.v.hblog.top/hfs/face/706353e46fe1c390d6d2cb72a704818a.jpg@240w_240h_1c_1s_!web-avatar-nav.webp">
                                <source type="image/webp"
                                    srcset="//io.v.hblog.top/hfs/face/706353e46fe1c390d6d2cb72a704818a.jpg@240w_240h_1c_1s_!web-avatar-nav.webp">
                                <img src="//io.v.hblog.top/hfs/face/706353e46fe1c390d6d2cb72a704818a.jpg@240w_240h_1c_1s_!web-avatar-nav.webp"
                                    loading="lazy" onload="" onerror="">
                            </picture>
                            <span></span>
                        </div>
                    </div>
                    <div class="dyn-up-list__item__name ellipsis">发光的三极管yoyo</div>
                </div>
            </div>
        </div>
        <div class="dyn-up-list__nav next" style="">
            <div class="dyn-up-list__nav__shim"></div>
            <div class="dyn-up-list__nav__shadow">
                <div class="dyn-up-list__nav__btn">
                    <svg-icon name="arr-right" color="#9499a0"></svg-icon>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.dyn-up-list {
    width: 100%;
    align-items: center;
    background: var(--bg1);
    border-radius: 6px;
    box-sizing: border-box;
    display: flex;
    position: relative;

    .dyn-up-list__nav {
        display: flex;
        height: 100%;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        transition: opacity .35s;
        z-index: 1;

        .dyn-up-list__nav__shim {
            background: var(--bg1);
            height: 100%;
            width: 8px;
        }

        .dyn-up-list__nav__shadow {
            align-items: center;
            display: flex;
            height: 100%;
            pointer-events: none;

            .dyn-up-list__nav__btn {
                align-items: center;
                background-color: var(--bg1);
                border: 1px solid var(--line_regular);
                border-radius: 50%;
                color: var(--graph_medium);
                cursor: pointer;
                display: flex;
                height: 24px;
                justify-content: center;
                pointer-events: all;
                width: 24px;
            }
        }

        .svg-icon {
            width: 12px;
            height: 12px;
        }
    }

    .dyn-up-list__nav.prev {
        left: 0;
    }

    .dyn-up-list__nav.next {
        flex-direction: row-reverse;
        right: 0;
    }

    .dyn-up-list__nav.prev .dyn-up-list__nav__shim {
        border-bottom-left-radius: 6px;
        border-top-left-radius: 6px;
    }

    .dyn-up-list__nav.prev .dyn-up-list__nav__shadow {
        background: linear-gradient(270deg, hsla(0, 0%, 100%, 0), var(--bg1));
    }

    .dyn-up-list__nav.next .dyn-up-list__nav__shim {
        border-bottom-right-radius: 6px;
        border-top-right-radius: 6px;
    }

    .dyn-up-list__nav.next .dyn-up-list__nav__shadow {
        background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), var(--bg1));
    }

    .dyn-up-list__window {
        flex: 1;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 9px 0 10px;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }

        .dyn-up-list__content {
            display: flex;
            transition: transform .35s;

            .shim {
                flex-shrink: 0;
                width: 8px;
            }

            .dyn-up-list__item {
                align-items: center;
                box-sizing: border-box;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                flex-shrink: 0;
                height: 100px;
                margin-right: 6px;
                padding-top: 8px;
                width: 68px;

                .dyn-up-list__item__face {
                    border: 1px solid var(--bg1);
                    border-radius: 50%;
                    box-shadow: 0 0 0 1px var(--bg1);
                    flex-shrink: 0;
                    height: 48px;
                    margin: 1px;
                    position: relative;
                    width: 48px;

                    .h-img {
                        background-color: var(--bg3);
                        position: relative;
                        height: 100%;

                        .h-img__inner {
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
                    }

                    .dyn-up-list__item__face__img {
                        border-radius: 50%;
                    }

                    .h-img img,
                    .h-img picture {
                        border-radius: inherit;
                    }

                    span {
                        background-color: var(--brand_blue);
                        border: 2px solid var(--bg1);
                        border-radius: 50%;
                        bottom: 0;
                        height: 8px;
                        position: absolute;
                        right: 0;
                        width: 8px;
                        box-sizing: content-box;
                    }
                }

                .dyn-up-list__item__face.all {
                    align-items: center;
                    background-color: #b9e9f9;
                    background-image: url(data:image/png;base64,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);
                    background-position: 50%;
                    background-repeat: no-repeat;
                    background-size: cover;
                    display: flex;
                    justify-content: center;
                }

                .dyn-up-list__item__name {
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    color: #6d757a;
                    font-size: 13px;
                    letter-spacing: 0;
                    line-height: 18px;
                    margin-top: 4px;
                    text-align: center;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    user-select: none;
                }

                .ellipsis {
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-break: break-all;
                }
            }

            .dyn-up-list__item:hover .dyn-up-list__item__face,
            .dyn-up-list__item.active .dyn-up-list__item__face {
                box-shadow: 0 0 0 1px var(--brand_blue);
            }

            .dyn-up-list__item:hover .dyn-up-list__item__name,
            .dyn-up-list__item.active .dyn-up-list__item__name {
                color: var(--brand_blue);
            }
        }
    }
}
</style>