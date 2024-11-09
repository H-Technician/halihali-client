<template>
    <NuxtLayout name="publiclayout">
        <Title>动态首页-哈哩哈哩</Title>
        <div class="dynamic-bgc"></div>
        <div class="dynamic-bg"></div>
        <div class="dyn-home--member">
            <aside class="left">
                <section>
                    <div class="dyn-my-info">
                        <div class="dyn-my-info__header">
                            <AvatarVAvatar class="avatar" :avatarStyle="{ width: '48px', height: '48px' }" />
                            <div class="info">
                                <div class="info__name default">_淡-定-</div>
                                <div class="info__icon">
                                    <span class="info__level adjust-position"
                                        style="background-image: url(&quot;//s1.hdslb.com/bfs/static/stone-free/dyn-home/assets/ic_tag_grade5.svg&quot;);"></span>
                                </div>
                            </div>
                        </div>
                        <div class="dyn-my-info__content">
                            <div class="dyn-my-info__stats">
                                <a href="" class="dyn-my-info__stat__item">
                                    <div class="item-num">42</div>
                                    <div class="item-desc">关注</div>
                                </a>
                                <a href="" class="dyn-my-info__stat__item">
                                    <div class="item-num">3</div>
                                    <div class="item-desc">粉丝</div>
                                </a>
                                <a href="" class="dyn-my-info__stat__item">
                                    <div class="item-num">0</div>
                                    <div class="item-desc">动态</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </aside>
            <main>
                <section>
                    <div class="dyn-publishing">
                        <div class="dyn-publishing__topic">

                        </div>
                        <div class="dyn-publishing__title">
                            <input maxlength="20" placeholder="标题（选填，建议20字以内）" class="dyn-publishing__title__input">
                            <div class="dyn-publishing__title__helper" style="display: none;">
                                <div class="dyn-publishing__title__clear">
                                    <div class="dyn-publishing__title__close">
                                        <IconsClose />
                                    </div>
                                </div>
                                <div class="dyn-publishing__title__indicator">0</div>
                            </div>
                        </div>
                        <div class="dyn-publishing__input">
                            <div class="rich-textarea" style="max-height: 180px;">
                                <div placeholder="有什么想和大家分享的？" contenteditable="true" class="rich-textarea__inner empty"
                                    style="font-size: 15px; line-height: 24px; min-height: 24px;">​
                                </div>
                            </div>
                            <div class="at-popup" style="left: 0px; top: 24px; display: none;">
                                <div class="at-popup__hint">选择或输入你想@的人</div>
                                <div class="at-popup__list"></div>
                            </div>
                        </div>
                        <div class="dyn-publishing__image-upload" style="display: none;">
                            <div class="pics-uploader">
                                <div class="pics-uploader__content">
                                    <div class="pics-uploader__add"></div>
                                </div>
                            </div>
                        </div>
                        <div class="dyn-publishing__datetime" style="display: none;">
                            <div class="dyn-publishing-timing-setting">
                                <label class="dyn-publishing-timing-setting__label">发布时间</label>
                                <div class="date-time-picker"></div>
                                <div class="dyn-publishing-timing-setting__close"></div>
                            </div>
                        </div>
                        <div class="dyn-publishing__control">
                            <div class="dyn-publishing__tools">
                                <div class="dyn-publishing__tools__item emoji">
                                    <svg-icon name="emoji" color="#9499a0"></svg-icon>
                                </div>
                                <div class="dyn-publishing__tools__item pic">
                                    <svg-icon name="image" color="#9499a0"></svg-icon>
                                </div>
                                <div class="dyn-publishing__tools__item at">
                                    <svg-icon name="at" color="#9499a0"></svg-icon>
                                </div>
                                <div class="dyn-publishing__tools__item poll">
                                    <svg-icon name="poll" color="#9499a0"></svg-icon>
                                </div>
                                <div class="dyn-publishing__tools__item live-reserve">
                                    <svg-icon name="live-reserve" color="#9499a0"></svg-icon>
                                </div>
                            </div>
                            <div class="dyn-publishing__headquarters">
                                <div title="全角字符计数为1半角字符计数为0.5，不足1时记为1" class="dyn-publishing__hint">
                                    0
                                </div>
                                <div class="dyn-publishing__settings">
                                    <div class="dyn-publishing__settings__btn">
                                        <svg-icon name="publishing__settings" color="#9499a0"></svg-icon>
                                    </div>
                                </div>
                                <div class="dyn-publishing__action launcher disabled">
                                    发布
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <DynamicList />
                </section>
                <section>
                    <DynamicListTabs />
                    <DynamicDynList />
                </section>
            </main>
            <aside class="right">
                <section>
                    <div class="dyn-banner">
                        <div title="点击进入" class="dyn-banner__img clickable">
                            <div class="h-img">
                                <picture class="h-img__inner">
                                    <source type="image/avif" srcset="">
                                    <source type="image/webp" srcset="">
                                    <img src="//io.v.hblog.top/hfs/vc/9c699f2acbcad00197e92c401b835d2c6aba8a55.png@616w_286h_!web-dynamic.webp"
                                        loading="lazy" onload="" onerror="">
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="sticky">
                    <DynamicTopic />
                </section>
            </aside>
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.dynamic-bg,
.dynamic-bgc {
    pointer-events: none;
    z-index: 0;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
}

.dynamic-bgc {
    top: 0;
    height: 100vh;
    background-color: #d3e9e8;
}

.dynamic-bg {
    bottom: 0;
    height: 56.25vw;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    transition: .3s;
    background-image: url(@/assets/img/bg.png@1c.avif);
}

.dyn-home--member {
    z-index: 2;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 72px;
    min-height: 150vh;
    position: relative;

    aside {
        flex-shrink: 0;
        position: relative;

        section {
            width: 100%;
            margin-bottom: 8px;

            .dyn-my-info {
                padding: 20px 16px;
                background: var(--bg1);
                border-radius: 6px;

                .dyn-my-info__header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 17px;

                    .avatar {
                        margin-right: 8px;
                    }

                    .info {
                        flex: 1;
                        min-width: 30px;
                        height: 48px;

                        .info__name {
                            cursor: pointer;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            font-size: 15px;
                            font-weight: 600;
                            margin-top: 4px;
                            color: var(--text1);
                        }

                        .info__icon {
                            display: flex;
                            align-items: center;

                            .info__level {
                                display: inline-block;
                                width: 24px;
                                height: 24px;
                                background-size: cover;
                                background-position: 50%;
                                background-repeat: no-repeat;
                                margin-left: 0;
                                cursor: pointer;
                            }

                        }
                    }
                }

                .dyn-my-info__content {
                    .dyn-my-info__stats {
                        display: flex;
                        justify-content: space-between;
                        text-align: center;

                        .dyn-my-info__stat__item {
                            max-width: 40%;
                            min-width: 40px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: flex-start;
                            cursor: pointer;

                            .item-num {
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                height: 20px;
                                font-weight: 600;
                                line-height: 20px;
                                font-size: 15px;
                                color: var(--text1);
                            }

                            .item-desc {
                                height: 17px;
                                line-height: 17px;
                                margin-top: 2px;
                                font-size: 13px;
                                color: var(--text3);
                            }

                            div {
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }

    aside.left {
        width: 194px;
        margin-right: 12px;
    }

    main {
        margin-right: 12px;
        width: 556px;
        position: relative;

        section {
            width: 100%;
            margin-bottom: 8px;

            .dyn-publishing {
                background-color: var(--bg1);
                border-radius: 6px;
                box-sizing: border-box;
                padding: 20px 20px 12px;
                position: relative;
                width: 100%;

                .dyn-publishing__title {
                    box-sizing: border-box;
                    height: 24px;
                    margin-top: 6px;
                    padding-right: 48px;
                    position: relative;
                    width: 100%;

                    .dyn-publishing__title__input {
                        background: var(--bg1);
                        border: none;
                        font-size: 15px;
                        font-weight: 500;
                        height: 24px;
                        line-height: 24px;
                        outline: none;
                        width: 100%;
                    }

                    .dyn-publishing__title__helper {
                        display: flex;
                        height: 100%;
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 48px;

                        .dyn-publishing__title__clear {
                            align-items: center;
                            cursor: pointer;
                            display: flex;
                            height: 100%;
                            justify-content: center;
                            width: 24px;

                            .dyn-publishing__title__close {
                                align-items: center;
                                background-color: var(--graph_weak);
                                border-radius: 50%;
                                color: var(--text_white);
                                display: flex;
                                height: 16px;
                                justify-content: center;
                                width: 16px;
                            }

                            .dyn-publishing__title__indicator {
                                color: var(--text3);
                                font-size: 13px;
                                line-height: 24px;
                                text-align: right;
                                width: 24px;
                            }
                        }
                    }
                }

                .dyn-publishing__input {
                    margin: 4px 14px 12px 0;
                    min-height: 40px;
                    padding-right: 4px;
                    position: relative;

                    .rich-textarea {
                        cursor: text;
                        height: 100%;
                        overflow-y: auto;
                        position: relative;
                        width: 100%;

                        .rich-textarea__inner {
                            word-wrap: break-word;
                            background-color: var(--bg1);
                            box-sizing: border-box;
                            color: var(--text1);
                            font-size: 14px;
                            letter-spacing: 1px;
                            outline: none;
                            padding-right: 5px;
                            position: relative;
                            vertical-align: baseline;
                            white-space: pre-wrap;
                            width: 100%;
                            word-break: break-all;
                        }

                        .rich-textarea__inner.empty:before {
                            color: var(--text3);
                            content: attr(placeholder);
                            font-size: inherit;
                            letter-spacing: inherit;
                            line-height: inherit;
                            pointer-events: none;
                            position: absolute;
                        }
                    }

                    .at-popup {
                        background-color: var(--bg1_float);
                        border: 1px solid var(--line_regular);
                        border-radius: 6px;
                        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .17);
                        font-size: 12px;
                        position: absolute;
                        width: 219px;
                        z-index: 10001;

                        .at-popup__hint {
                            color: var(--text2);
                            cursor: default;
                            font-size: 12px;
                            letter-spacing: 0;
                            line-height: 17px;
                            margin: 0;
                            padding: 12px;
                        }

                        .at-popup__list {
                            max-height: 282px;
                            overflow-y: overlay;
                            width: 100%;
                        }
                    }
                }

                .dyn-publishing__image-upload {
                    margin-top: 2px;

                    .pics-uploader {
                        width: 100%;

                        .pics-uploader__content {
                            display: flex;
                            flex-wrap: wrap;

                            .pics-uploader__add {
                                border: 2px dashed var(--line_regular);
                                border-radius: 4px;
                                cursor: pointer;
                                height: 92px;
                                margin-bottom: 10px;
                                position: relative;
                                transition: border-color .3s;
                                width: 92px;

                                &:hover {
                                    border-color: var(--Lb3);
                                }
                            }

                            .pics-uploader__add:before {
                                transform: translate3d(-50%, -50%, 0);
                            }

                            .pics-uploader__add:after {
                                transform: translate3d(-50%, -50%, 0) rotate(90deg);
                            }

                            .pics-uploader__add:after,
                            .pics-uploader__add:before {
                                background-color: var(--graph_bg_thick);
                                border-radius: 4px;
                                content: "";
                                height: 4px;
                                left: 50%;
                                position: absolute;
                                top: 50%;
                                transition: background-color .3s;
                                width: 28px;
                            }

                            .pics-uploader__add:hover:after,
                            .pics-uploader__add:hover:before {
                                background-color: var(--Lb3);
                            }
                        }
                    }
                }

                .dyn-publishing__datetime {
                    box-sizing: border-box;
                    height: 54px;

                    .dyn-publishing-timing-setting {
                        align-items: center;
                        background-color: var(--graph_bg_thin);
                        border-radius: 4px;
                        box-sizing: border-box;
                        display: flex;
                        height: 44px;
                        padding: 0 11px 0 6px;
                        position: relative;

                        .dyn-publishing-timing-setting__label {
                            color: var(--text2);
                            font-size: 12px;
                            padding: 0 12px 0 6px;
                        }

                        .date-time-picker {
                            display: flex;
                        }

                        .dyn-publishing-timing-setting__close {
                            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgB7ZXJDcIwEEX/hBRCCSAWKV3QAaEDOoEOCB1QBQES5BSEGJhDJA4GeSbm5neynfx5iuMFSCRiUNdufGncFkYkKzV8zzLfIOdYEdHudu8OUCIZydK7hipYt666th1rpPKuZCQLCxrpYJlGGk0WIo0u+yW1yAgKpHAGWhOhkj4zyif4WMynZWgNlfBTKm2tTMigZETEvnYoqi+Uf9ZPo/T76V3OJhvExrdALIeDWfY3acjSjybV7LPBUsumNkvlPrMeV730232a+wb5gRNyRrGY7qFEDoJz4zqSGolEDF758woxL568RAAAAABJRU5ErkJggg==);
                            background-position: 50%;
                            background-repeat: no-repeat;
                            background-size: cover;
                            cursor: pointer;
                            height: 14px;
                            position: absolute;
                            right: 4px;
                            top: 4px;
                            width: 14px;
                        }
                    }
                }

                .dyn-publishing__control {
                    align-items: center;
                    display: flex;
                    justify-content: space-between;

                    .dyn-publishing__tools {
                        align-items: center;
                        display: flex;
                        position: relative;

                        .dyn-publishing__tools__item {
                            background-repeat: no-repeat;
                            background-size: contain;
                            color: var(--text3);
                            cursor: pointer;
                            height: 24px;
                            margin-left: 16px;
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            user-select: none;
                            width: 24px;

                            .svg-icon {
                                width: 24px;
                                height: 24px;
                            }


                        }

                        .dyn-publishing__tools__item.emoji {
                            position: relative;
                            margin-left: 0;
                        }
                    }

                    .dyn-publishing__headquarters {
                        align-items: center;
                        display: flex;
                        justify-content: center;
                        margin-left: 20px;

                        .dyn-publishing__hint {
                            color: var(--text3);
                            font-size: 14px;
                            margin-right: 25px;
                            position: relative;
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            user-select: none;

                            &:after {
                                color: var(--line_regular);
                                content: "|";
                                position: absolute;
                                right: -14px;
                                top: 0;
                            }
                        }

                        .dyn-publishing__settings {
                            position: relative;

                            .dyn-publishing__settings__btn {
                                color: var(--text3);
                                cursor: pointer;
                                height: 24px;
                                margin-right: 12px;
                                width: 24px;

                                .svg-icon {
                                    width: 24px;
                                    height: 24px;
                                }
                            }
                        }

                        .dyn-publishing__action {
                            align-items: center;
                            background: var(--brand_blue);
                            border-radius: 6px;
                            box-sizing: border-box;
                            color: var(--text_white);
                            cursor: pointer;
                            display: flex;
                            font-size: 14px;
                            height: 32px;
                            justify-content: center;
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            user-select: none;
                            width: 70px;
                        }

                        .dyn-publishing__action.launcher {
                            min-width: 70px;
                        }

                        .dyn-publishing__action.disabled {
                            cursor: not-allowed;
                            opacity: .5;
                        }
                    }

                }
            }
        }

        section>div:not(:first-child) {
            margin-top: 8px;
        }
    }

    aside.right {
        width: 246px;

        section {
            width: 100%;
            margin-bottom: 8px;

            .dyn-banner {
                border-radius: 6px;
                width: 100%;
                box-sizing: border-box;
                background-color: var(--bg1);
                cursor: pointer;

                .dyn-banner__img {
                    overflow: hidden;
                    width: 100%;
                    height: 143px;
                    border-radius: 6px;
                    background: var(--bg1) 50% / cover no-repeat;

                    .h-img {
                        background-color: #f1f2f3;
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

                    .h-img img,
                    .h-img picture {
                        border-radius: inherit;
                    }
                }

                .dyn-banner__img.clickable {
                    cursor: pointer;
                }

                @media screen and (min-width: 1319px) {
                    .dyn-banner__img {
                        height: 160px;
                    }
                }
            }
        }

        section.sticky {
            position: sticky;
            top: 72px;
        }
    }

    @media screen and (min-width: 1140px) {
        aside.left {
            width: 194px;
        }
    }

    @media screen and (min-width: 1320px) {
        aside.left {
            width: 264px;
        }
    }

    @media screen and (min-width: 1140px) {
        main {
            width: 556px;
        }
    }

    @media screen and (min-width: 1320px) {
        main {
            width: 724px;
        }
    }

    @media screen and (min-width: 1140px) {
        aside.right {
            width: 246px;
        }
    }

    @media screen and (min-width: 1320px) {
        aside.right {
            width: 318px;
        }
    }
}
</style>
