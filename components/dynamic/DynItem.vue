<template>
    <div class="dyn-list__item">
        <div class="dyn-item">
            <div class="dyn-item__main">
                <div class="dyn-item__avatar">
                    <AvatarVAvatar class="avatar" :avatarStyle="{ width: '48px', height: '48px' }" />
                </div>
                <div class="dyn-item__header">
                    <div class="dyn-title">
                        <span class="dyn-title__text dyn-title__text fs-large default">
                            南国小豆豆
                        </span>
                    </div>
                    <div class="dyn-item__desc">
                        <div data-module="time" class="dyn-time fs-small ellipsis">
                            55分钟前
                        </div>
                    </div>
                    <div class="dyn-item__more">
                        <div class="dyn-more">
                            <div class="tp dyn-more__btn">
                                <IconsMore />
                                <div class="cascader dyn-more__cascader"
                                    style="flex-direction: row-reverse; z-index: 2020; display: none;">
                                    <div class="cascader__list" style="margin-right: -3px; z-index: 1;">
                                        <div class="cascader-options">
                                            <div class="cascader-options__item">
                                                <div class="cascader-options__item-custom">
                                                    <div>
                                                        <div class="cascader-options__item-label">取消关注</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cascader-options__item">
                                                <div class="cascader-options__item-custom">
                                                    <div>
                                                        <div class="cascader-options__item-label">举报</div>
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
                <div class="dyn-item__body">
                    <div class="dyn-content">
                        <div class="dyn-content__orig">
                            <div class="dyn-content__orig__major suit-video-card">
                                <div class="dyn-card-opus" v-if="props.type === 'image'">
                                    <div class="dyn-card-opus__summary">
                                        <div class="rich-text" style="font-size: 15px;">
                                            <div class="rich-text__content folded line--6"
                                                style="line-height: 25px; max-height: 171px;">
                                                <span class="virturl-start"></span>
                                                <span>PDD真猛，红牛补贴后79元18罐
                                                    是红牛牛磺酸功能饮料，线下5.5至少
                                                    官方旗舰店！官方旗舰店！放心冲！
                                                    平均4元/罐，这个价格买了就是赚

                                                    旗舰店产品，不仅价格低，而且品质保证
                                                    熬夜加班，上学，提前备一箱，活力满满
                                                    库存有限，价格超实惠！
                                                </span>
                                            </div>
                                            <div class="rich-text__action">展开</div>
                                        </div>
                                    </div>
                                    <div class="dyn-card-opus__pics">
                                        <div class="album">
                                            <div class="album__preview grid3" style="">
                                                <div class="album__preview__picture">
                                                    <div class="album__preview__picture__img h-img">
                                                        <picture class="h-img__inner">
                                                            <source type="image/avif" srcset="">
                                                            <source type="image/webp" srcset="">
                                                            <img src="" loading="lazy" onload="" onerror="">
                                                        </picture>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="album__watch" style="display: none;">
                                                <div class="album__watch__control">
                                                    <div class="album__watch__control__option zoom-out">
                                                        <svg-icon name="zoom-out" color="#9499a0"></svg-icon>
                                                        <span>收起</span>
                                                    </div>
                                                    <div class="album__watch__control__option full-screen">
                                                        <svg-icon name="full-screen" color="#9499a0"></svg-icon>
                                                        <span>查看大图</span>
                                                    </div>
                                                    <div class="album__watch__control__option ccw-rotation">
                                                        <svg-icon name="ccw-rotation" color="#9499a0"></svg-icon>
                                                        <span>向左旋转</span>
                                                    </div>
                                                    <div class="album__watch__control__option cw-rotation">
                                                        <svg-icon name="cw-rotation" color="#9499a0"></svg-icon>
                                                        <span>向右旋转</span>
                                                    </div>
                                                </div>
                                                <div class="album__watch__content">
                                                    <img
                                                        src="//i0.hdslb.com/bfs/new_dyn/d6a9ad26062f7fa2b0f10993ff6e8ac610518076.jpg@1052w_!web-dynamic.avif">
                                                    <div class="album__watch__content__next"></div>
                                                </div>
                                                <div class="album__watch__track">
                                                    <div class="album__watch__track__activeitemborder"
                                                        style="left: 0px;">
                                                    </div>
                                                    <div class="album__watch__track__slider">
                                                        <div class="album__watch__track__list"
                                                            style="transform: translateX(calc(0px));">
                                                            <div class="album__watch__track__item active">
                                                                <img
                                                                    src="//i0.hdslb.com/bfs/new_dyn/d6a9ad26062f7fa2b0f10993ff6e8ac610518076.jpg@264w_264h_1e_1c.avif">
                                                            </div>
                                                            <div class="album__watch__track__item">
                                                                <img
                                                                    src="//i0.hdslb.com/bfs/new_dyn/33ea9702f431df619ee8eac6f3c991cc10518076.jpg@264w_264h_1e_1c.avif">
                                                            </div>
                                                            <div class="album__watch__track__item">
                                                                <img
                                                                    src="//i0.hdslb.com/bfs/new_dyn/91a7cba32d5d7e1c95774600165bae5a10518076.jpg@264w_264h_1e_1c.avif">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="" target="_blank" class="dyn-card-video" v-else>
                                    <div class="dyn-card-video__header">
                                        <div class="dyn-card-video__cover">
                                            <div class="h-img">
                                                <picture class="h-img__inner">
                                                    <source type="image/avif" srcset="">
                                                    <source type="image/webp" srcset="">
                                                    <img src="" loading="lazy" onload="" onerror="">
                                                </picture>
                                            </div>
                                            <div class="dyn-card-video__cover__mask">
                                                <div class="dyn-video-preview">

                                                </div>
                                                <div class="dyn-card-video__mark"></div>
                                            </div>
                                            <div class="dyn-card-video__cover-shadow">
                                                <div class="duration-time">02:18</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dyn-card-video__body">
                                        <div class="dyn-card-video__title ellipsis fs-medium">一杆长枪定天下！抗日神级人物打鬼子</div>
                                        <div class="dyn-card-video__desc ellipsis fs-small">国产神剧</div>
                                        <div class="dyn-card-video__stat fs-small">
                                            <div class="dyn-card-video__stat__item">
                                                <IconsVideocardPlayer class="play-icon" />
                                                <span>1265</span>
                                            </div>
                                            <div class="dyn-card-video__stat__item danmaku">
                                                <IconsVideocardDanMu class="danmaku-icon" />
                                                <span>1765</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dyn-item__footer">
                    <div class="dyn-item__action">
                        <div class="dyn-action forward">
                            <svg-icon name="forward"></svg-icon>
                            转发
                        </div>
                    </div>
                    <div class="dyn-item__action">
                        <div class="dyn-action comment">
                            <svg-icon name="comment"></svg-icon>
                            3
                        </div>
                    </div>
                    <div class="dyn-item__action">
                        <div class="dyn-action like">
                            <svg-icon name="like"></svg-icon>
                            82
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
interface Props {
    type?: string;
}
const props = withDefaults(defineProps<Props>(), {
    type: 'image',
});
</script>
<style lang="scss" scoped>
.fs-small {
    font-size: 13px;
    line-height: 18px;
}

.fs-large {
    font-size: 17px;
    line-height: 32px;
}

.ellipsis {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
}

.dyn-list__item {
    margin-bottom: 8px;
    
    .dyn-item {
        -webkit-font-smoothing: antialiased;
        background-color: var(--bg1);
        border-radius: 6px;
        box-sizing: border-box;
        font-weight: 400;
        letter-spacing: 0;
        min-width: 556px;
        position: relative;

        .dyn-item__main {
            padding: 0 20px 0 88px;
            position: relative;

            .dyn-item__avatar {
                align-items: center;
                display: flex;
                height: 86.4px;
                justify-content: center;
                left: 0;
                position: absolute;
                top: 0;
                width: 86.4px;
            }

            .dyn-item__header {
                height: 62px;
                padding-top: 16px;

                .dyn-title {
                    align-items: center;
                    display: flex;
                    height: 22px;
                    margin: 1px 0 2px;
                    width: -moz-max-content;
                    width: -webkit-max-content;
                    width: max-content;

                    .dyn-title__text {
                        color: var(--text1);
                        cursor: pointer;
                        font-weight: 600;
                        line-height: 22px;
                        transition: all .2s;
                    }
                }

                .dyn-item__desc {
                    align-items: center;
                    display: flex;
                    padding-right: 120px;
                    padding-top: 4px;

                    .dyn-time {
                        -webkit-line-clamp: 1;
                        line-clamp: 1;
                        color: var(--text3);
                        cursor: pointer;
                        line-height: 18px;
                        transition: color .3s ease;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        user-select: none;
                        width: -moz-fit-content;
                        width: -webkit-fit-content;
                        width: fit-content;
                    }
                }

                .dyn-item__more {
                    position: absolute;
                    right: 16px;
                    top: 30px;

                    .dyn-more {
                        border-radius: 4px;
                        height: 24px;
                        width: 24px;

                        .dyn-more__btn {
                            cursor: pointer;
                            position: absolute;
                            right: 0;
                            top: 0;

                            svg {
                                height: 24px;
                                pointer-events: none;
                                width: 24px;
                            }

                            .cascader {
                                display: flex;
                                position: absolute;
                            }

                            .dyn-more__cascader {
                                right: 0;
                                top: 32px;

                                .cascader__list {
                                    position: relative;

                                    .cascader-options {
                                        background: var(--bg1_float);
                                        border: 1px solid var(--line_regular);
                                        border-radius: 8px;
                                        box-shadow: 0 0 30px rgba(0, 0, 0, .1);
                                        max-height: 500px;
                                        min-width: 142px;
                                        overflow-y: auto;
                                        padding: 12px 0;

                                        .cascader-options__item {
                                            box-sizing: border-box;
                                            color: var(--text2);
                                            cursor: pointer;
                                            display: flex;
                                            flex-direction: column;
                                            font-size: 13px;
                                            justify-content: center;
                                            letter-spacing: 0;
                                            line-height: 18px;
                                            min-height: 40px;
                                            padding: 8px 27px;
                                            -webkit-user-select: none;
                                            -moz-user-select: none;
                                            user-select: none;
                                            white-space: nowrap;

                                            .cascader-options__item-custom {
                                                align-items: center;
                                                display: flex;
                                                flex-wrap: nowrap;
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        .dyn-more__btn.tp {
                            color: var(--graph_weak);
                            height: 24px;
                            right: -4px;
                            top: -3px;
                            width: 24px;
                        }
                    }
                }
            }

            .dyn-item__body {
                margin-top: 8px;

                .dyn-content {
                    -webkit-font-smoothing: antialiased;
                    font-weight: 400;

                    .dyn-content__orig {
                        .dyn-card-opus {
                            margin-top: -6px;

                            .dyn-card-opus__summary {
                                cursor: pointer;

                                .rich-text {
                                    -webkit-font-smoothing: antialiased;
                                    font-weight: 400;
                                    white-space: pre-wrap;
                                    word-break: break-word;

                                    .rich-text__content.folded {
                                        -webkit-box-orient: vertical;
                                        display: -webkit-box;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                    }

                                    .rich-text__content.line--6 {
                                        -webkit-line-clamp: 6;
                                        line-clamp: 6;
                                    }

                                    .rich-text__action {
                                        color: var(--text_link);
                                        cursor: pointer;
                                        display: inline-block;
                                        -webkit-user-select: none;
                                        -moz-user-select: none;
                                        user-select: none;
                                    }
                                }
                            }

                            .dyn-card-opus__pics {
                                margin-top: 12px;

                                .album {

                                    .album__preview {
                                        .album__preview__picture {
                                            background-color: #fff;
                                            border-radius: 6px;
                                            overflow: hidden;

                                            .album__preview__picture__img {
                                                border-radius: 6px;
                                                cursor: zoom-in;
                                                height: 100%;
                                                width: 100%;
                                            }

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
                                        }

                                    }

                                    .album__preview.grid3 {
                                        display: grid;
                                        grid-gap: 4px;
                                        gap: 4px;
                                        grid-template-columns: repeat(3, 1fr);
                                        width: 404px;

                                        .album__preview__picture {
                                            height: 132px;
                                            width: 132px;
                                        }
                                    }

                                    .album__watch {
                                        .svg-icon {
                                            width: 14px;
                                            height: 14px;
                                        }

                                        .album__watch__control {
                                            background: var(--bg2);
                                            border-radius: 4px 4px 0 0;
                                            display: flex;
                                            height: 32px;

                                            .album__watch__control__option {
                                                align-items: center;
                                                color: var(--text2);
                                                cursor: pointer;
                                                display: flex;
                                                font-size: 12px;
                                                height: 100%;
                                                padding: 0 16px;
                                                -webkit-user-select: none;
                                                -moz-user-select: none;
                                                user-select: none;
                                            }
                                        }

                                        .album__watch__content {
                                            background: var(--bg2);
                                            position: relative;
                                            text-align: center;
                                            width: 100%;

                                            img {
                                                cursor: zoom-out;
                                                max-width: 100%;
                                                -webkit-user-select: none;
                                                -moz-user-select: none;
                                                user-select: none;
                                                height: 100%;
                                                width: 100%;
                                                object-fit: cover;
                                            }

                                            .album__watch__content__prev {
                                                cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA8CAYAAAADm2gpAAAAAXNSR0IArs4c6QAAAsVJREFUaAXtmUur2kAUx5NYUXtFiwtx0UU30iLcRWlx4aa4E8W29wv0G/QLlO5vP0BpN1210G0X9YlQC4ILKYLQhctaaF0IPrjx/Uj/I02ITXI1cSZCyUBwPJnM+eU/J5k5GZ6zsRSLxbs8z7/dbDYPXS5Xb7VaXWYymXc2InBcLpdLAkTsdDrr+XwuDQYDqVqtXhUKhRcEhLeDhkBAgc/xePwsFAopLmezGQeYWTgcDgiKlVHFCIK483q9nNvtXnS73TtMQa6DICCLxYIcHqj18wYxsCj7ICRJ4prN5hjB+zqdTs+ZKHIIRKPRmIxGo68+n+8lEYJ6sB4KMRwOqx6P52kymVxRB7EKQRXkGAhqIMdCUAGhAXE0CC2Io0BoQlgGoQ1hCYQFhGkQVhCmQFhCHAzCGoKA7J30TEB8Uc8dpHMz5dpJzyTEhTyBmQGQ2xqC2AlBYHRB7IbQBTkFhAbkVBA7IKeEUEAOhBj/Xd4d9XQQp3qFL5fL95ACfvs3+ZEbk9U2FrpMIYgvAY7exGIxnzoDsxtiCwI1HkQiEd03LPKOYb/f/443JpPhkG94CyIIQm8ymahtSj0ajd5CAnSO8xnFyKgirNfrV61WS4QyGheBQIBLJBI3AfsRAf1Y04C2AZ8LPtRqNRFQCBltQUYmoc2YOQxc8w6M3vA6yuipQmyOMo4yRgoY2Z2Y+e+UyefzT4xuiordTMw4MFBrp8hLCEeZHVnwx1Fm37LTiRmjmMGe3iMqLzejTuB474K81+uR7OA36UP3Q41R52btBKZUKr33+/0XyI/OkB9puqhUKiSNOdee0TS1bkCWKKVSqWeiKH6q1+tjvSQOe78ubDBeWfdi4kr1MGEzUQmXdru9hGI10hXToVGzEhh8ArnE7/NgMLiYTqfCcrn8gSOdzWZ/2QYiQ+EpuY36fQB1sbvZxPBtk+4/aTj+WpXZtpcAAAAASUVORK5CYII=), pointer;
                                                left: 0;
                                            }

                                            .album__watch__content__next {
                                                cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA8CAYAAAADm2gpAAAAAXNSR0IArs4c6QAAAhNJREFUaAXtmb9OwlAUxttLiYkV0plB4sgLODC5QRTiYqIbcXDyHXwMEyMMbg7GBfmzEBISIDHdGYU3KLQQEwp4LvHE5oJJIfTS4XQ5vdDe+/V3Ttp+PaoCW7PZ1BzHuY1Go2fz+bwfiUSKmUzmi/8na1Or1eoBY8w0DOMkkUjo4/HY7ff737PZrJDL5d5lCVFAyINpms7Csw2Hw0W9Xh+Xy+UrWUIYpOEimUzq3gXj8biSTqcPIVUvssQwVVWt6XTq1bHcj8ViUsUwEPHY6/UcqIm9i1FqtdpTq9VyXNf1VMrf7mg0klMzsKQKxVkiMWJREBmRCI6JDJIQI5ERieA4dGTgDlwMzU2PxGCdeCOvGSLjJYL7RAZJiJHIiERwTGSQhBg3JHPOz1fFSXY15mLghfxZ1/UbMGs6GLmVqS3LUrrdrgWG7pit/LujH8C4LbLZ7B146dd2uz1c55vAbyvcyNm2fRqYEH49XIzf69L8HrjNcfx5BKm5htQc/ZcaoKFAaj63md/XOb8PRduHe1wWq69JNz1oAxHBffYgEZg2IkEkkABGqgkigQQwUk0QCSSAkWqCSCABjGGpCd4m8fOiG9w7ZqVSuWw0GvsVAWlhmqbdp1Kptb6De45OpzOBLlchn8+/YRqDiLynZ0ATcWVumSL44gwM0MdgMJh4lcgWwdcOTQN6+VlCaMl/gU8tyW7J/wCJLeOSU2dAQgAAAABJRU5ErkJggg==), pointer;
                                                right: 0;
                                            }

                                            .album__watch__content__next,
                                            .album__watch__content__prev {
                                                height: 100%;
                                                position: absolute;
                                                top: 0;
                                                width: 33%;
                                            }
                                        }

                                        .album__watch__track {
                                            margin-top: 6px;
                                            position: relative;
                                            -webkit-user-select: none;
                                            -moz-user-select: none;
                                            user-select: none;

                                            .album__watch__track__activeitemborder {
                                                border: 1px solid #fb7299;
                                                border-radius: 4px;
                                                box-sizing: border-box;
                                                height: 58px;
                                                left: 0;
                                                position: absolute;
                                                top: 0;
                                                transform: translate(-2px, -2px);
                                                transition: left .18s cubic-bezier(.22, .58, .12, .98);
                                                width: 58px;
                                            }

                                            .album__watch__track__slider {
                                                overflow: hidden;
                                                width: 100%;

                                                .album__watch__track__list {
                                                    display: flex;
                                                    transition: all .18s cubic-bezier(.22, .58, .12, .98);
                                                    width: 100%;

                                                    .album__watch__track__item {
                                                        cursor: pointer;
                                                        flex-shrink: 0;
                                                        height: 54px;
                                                        position: relative;
                                                        width: 54px;

                                                        &:before {
                                                            border: 1px solid #fb7299;
                                                            border-radius: 6px;
                                                            box-sizing: border-box;
                                                            content: "";
                                                            height: 58px;
                                                            left: 0;
                                                            opacity: 0;
                                                            position: absolute;
                                                            top: 0;
                                                            transform: translate(-2px, -2px);
                                                            transition: opacity .18s cubic-bezier(.22, .58, .12, .98);
                                                            width: 58px;
                                                        }

                                                        img {
                                                            border-radius: 6px;
                                                            height: 100%;
                                                            opacity: .5;
                                                            transition: opacity .18s cubic-bezier(.22, .58, .12, .98);
                                                            width: 100%;
                                                        }
                                                    }

                                                    .album__watch__track__item:not(:first-child) {
                                                        margin-left: 4px;
                                                    }

                                                    .album__watch__track__item.active img,
                                                    .album__watch__track__item:hover img {
                                                        opacity: 1;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        .dyn-card-video {
                            border-radius: 6px;
                            box-sizing: border-box;
                            cursor: pointer;
                            display: flex;
                            height: 132px;
                            overflow: hidden;

                            .dyn-card-video__header {
                                flex-shrink: 0;
                                height: 100%;
                                position: relative;
                                width: 236px;

                                .dyn-card-video__cover {
                                    border-radius: 6px 0 0 6px;
                                    height: 100%;
                                    position: relative;
                                    width: 100%;

                                    .h-img {
                                        background-color: var(--bg3);
                                        height: 100%;
                                        position: relative;

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

                                    .dyn-card-video__cover__mask {
                                        background: rgba(0, 0, 0, .5);
                                        border-radius: 6px 0 0 6px;
                                        font-size: 14px;
                                        height: 100%;
                                        left: 0;
                                        opacity: 0;
                                        position: absolute;
                                        top: 0;
                                        transition: opacity .2s cubic-bezier(.22, .58, .12, .98);
                                        width: 100%;

                                        .dyn-video-preview {
                                            bottom: 0;
                                            height: 100%;
                                            left: 0;
                                            overflow: hidden;
                                            pointer-events: none;
                                            position: absolute;
                                            width: 100%;
                                        }

                                        .dyn-card-video__mark {
                                            background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNyIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIgNC45MjlBNy4wNzEgNy4wNzEgMCAxMDE3IDE3YS42NDMuNjQzIDAgMDEuOTA4LjkxIDguMzU3IDguMzU3IDAgMTEyLjQ0NS02LjE3MmwuNjIxLS42MjJhLjY0My42NDMgMCAxMS45MS45MWwtMS43MTUgMS43MTRhLjY0My42NDMgMCAwMS0uOTEgMGwtMS43MTQtMS43MTVhLjY0My42NDMgMCAxMS45MS0uOTA5bC42MTEuNjEyQTcuMDcyIDcuMDcyIDAgMDAxMiA0LjkyOXptMi41NzEgNy44MTNhLjg1Ny44NTcgMCAwMDAtMS40ODVsLTMuMjE1LTEuODU2YS44NTcuODU3IDAgMDAtMS4yODYuNzQydjMuNzEzYS44NTcuODU3IDAgMDAxLjI4Ni43NDJsMy4yMTUtMS44NTZ6IiBmaWxsPSIjZmZmIi8+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzMzMyIgZmlsbC1vcGFjaXR5PSIuOCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIgNC45MjlBNy4wNzEgNy4wNzEgMCAxMDE3IDE3YS42NDMuNjQzIDAgMDEuOTA4LjkxIDguMzU3IDguMzU3IDAgMTEyLjQ0NS02LjE3MmwuNjIxLS42MjJhLjY0My42NDMgMCAxMS45MS45MWwtMS43MTUgMS43MTRhLjY0My42NDMgMCAwMS0uOTEgMGwtMS43MTQtMS43MTVhLjY0My42NDMgMCAxMS45MS0uOTA5bC42MTEuNjEyQTcuMDcyIDcuMDcyIDAgMDAxMiA0LjkyOXptMi41NzEgNy44MTNhLjg1Ny44NTcgMCAwMDAtMS40ODVsLTMuMjE1LTEuODU2YS44NTcuODU3IDAgMDAtMS4yODYuNzQydjMuNzEzYS44NTcuODU3IDAgMDAxLjI4Ni43NDJsMy4yMTUtMS44NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+);
                                            background-position: 50%;
                                            background-repeat: no-repeat;
                                            background-size: cover;
                                            height: 28px;
                                            position: absolute;
                                            right: 6px;
                                            top: 6px;
                                            width: 28px;
                                        }
                                    }

                                    .dyn-card-video__cover-shadow {
                                        background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .5) 99.32%);
                                        border-bottom-left-radius: 6px;
                                        bottom: 0;
                                        height: 46px;
                                        left: 0;
                                        position: absolute;
                                        right: 0;

                                        .duration-time {
                                            bottom: 11px;
                                            color: var(--text_white);
                                            font-size: 13px;
                                            font-style: normal;
                                            font-weight: 400;
                                            line-height: 18px;
                                            position: absolute;
                                            right: 8px;
                                        }
                                    }

                                    .dyn-card-video__cover__mask .dyn-video-preview,
                                    .dyn-card-video__cover__mask .dyn-video-preview__shot {
                                        border-radius: 6px 0 0 6px;
                                    }
                                }
                            }

                            .dyn-card-video__body {
                                background-color: var(--bg1);
                                border: 1px solid var(--line_regular);
                                border-left: unset;
                                border-radius: 0 6px 6px 0;
                                display: flex;
                                flex: 1;
                                flex-direction: column;
                                padding: 12px 16px 10px;
                                position: relative;

                                .dyn-card-video__title {
                                    -webkit-line-clamp: 2;
                                    line-clamp: 2;
                                    color: var(--text1);
                                    line-height: 21px !important;
                                    transition: color .2s;
                                }

                                .dyn-card-video__desc {
                                    -webkit-line-clamp: 2;
                                    line-clamp: 2;
                                    color: var(--text3);
                                    height: 34px;
                                    line-height: 17px;
                                    margin-top: 6px;
                                }

                                .dyn-card-video__stat {
                                    align-items: center;
                                    bottom: 10px;
                                    color: var(--text3);
                                    display: flex;
                                    height: 18px;
                                    left: 16px;
                                    line-height: 16px;
                                    position: absolute;

                                    .dyn-card-video__stat__item {
                                        align-items: center;
                                        display: flex;
                                        margin-right: 8px;
                                        width: 80px;

                                        .play-icon,
                                        .danmaku-icon {
                                            width: 16px;
                                            height: 16px;
                                        }
                                    }
                                }

                                @media screen and (max-width: 1319px) {
                                    .dyn-card-video__desc {
                                        margin-top: 4px;
                                        -webkit-line-clamp: 1;
                                        line-clamp: 1;
                                        height: 17px;
                                    }
                                }

                                @media screen and (max-width: 1319px) {
                                    .dyn-card-video__stat {
                                        bottom: 6px;
                                    }
                                }
                            }

                            @media screen and (max-width: 1319px) {
                                .dyn-card-video__header {
                                    width: 200px;
                                }
                            }

                            @media screen and (max-width: 1319px) {
                                .dyn-card-video__body {
                                    padding: 10px 12px 8px;
                                }
                            }
                        }

                        @media screen and (max-width: 1319px) {
                            .dyn-card-video {
                                height: 112px;
                            }
                        }
                    }

                    .dyn-content__orig__additional,
                    .dyn-content__orig__major.gap,
                    .dyn-content__orig__major.suit-video-card {
                        margin-top: 12px;
                    }
                }
            }

            .dyn-item__footer {
                display: flex;
                height: 50px;
                justify-content: space-between;
                padding-right: 20px;

                .dyn-item__action {
                    position: relative;

                    .dyn-action {
                        align-items: center;
                        color: var(--text2);
                        cursor: pointer;
                        display: flex;
                        font-size: 13px;
                        height: 100%;
                        position: relative;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        user-select: none;
                        width: 104px;

                        .svg-icon {
                            width: 18px;
                            height: 18px;
                        }
                    }

                    .dyn-action:hover {
                        color: var(--brand_blue);

                        .svg-icon {
                            color: var(--brand_blue);
                            fill: var(--brand_blue);
                        }
                    }
                }
            }
        }
    }
}
</style>