<template>
    <div class="comment">
        <div class="browser-pc">
            <div class="comment-container">
                <div class="reply-header">
                    <div class="reply-navigation">
                        <ul class="nav-bar">
                            <li class="nav-title">
                                <span class="nav-title-text">评论</span>
                                <span class="total-reply">45</span>
                            </li>
                            <li class="nav-sort">
                                <div class="sort-item active">最热</div>
                                <div class="part-symbol"></div>
                                <div class="sort-item">最新</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="reply-wrap" ref="replyBoxRef">
                    <div class="main-reply-box" ref="replyRef">
                        <div class="reply-box" :class="isReplyFixed ? 'main-reply-fixed' : ''">
                            <div class="comment-textarea">
                                <div class="box-normal">
                                    <div class="reply-box-avatar">
                                        <div class="user-avatar">
                                            <AvatarVAvatar :avatarStyle="{ width: '48px', height: '48px' }" />
                                        </div>
                                    </div>
                                    <div class="reply-box-wrap">
                                        <div class="textarea-wrap">
                                            <textarea class="reply-box-textarea"
                                                placeholder="与其赞同别人的话语，不如自己畅所欲言。"></textarea>
                                        </div>
                                        <div class="disable-mask" style="display:none;">
                                            <span>请先<span class="to-login-btn">登录</span>后发表评论 (・ω・)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-expand">
                                    <div class="box-left">
                                        <div class="reply-box-emoji">
                                            <div class="emoji-btn">
                                                <svg-icon name="emoji" color="#9499A0"></svg-icon>
                                            </div>
                                        </div>
                                        <div class="at-btn">@</div>
                                        <div class="reply-box-img">
                                            <div class="img-btn">
                                                <svg-icon name="image" color="#9499A0"></svg-icon>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="reply-box-send">
                                        <div class="send-text">发布</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <VideocommentCommentTree />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const replyBoxRef = ref<HTMLDivElement | null>(null);
const replyRef = ref<HTMLDivElement | null>(null);
const isReplyFixed = ref<boolean>(false);
interface Props {
    conOffsetLeft?: number;
}
const props = withDefaults(defineProps<Props>(), {
    conOffsetLeft: 0,
});
const handleScroll = () => {
    if (replyBoxRef.value) {
        if ((replyBoxRef.value.getBoundingClientRect().top + 27.6) <= 0) {
            if (!isReplyFixed.value) {
                isReplyFixed.value = true;
            }
        } else {
            if (isReplyFixed.value) {
                isReplyFixed.value = false;
            }
        }
    }
}
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // 元素进入可视区域
            if (isReplyFixed.value) {
                isReplyFixed.value = false;
            }
        } else {
            // 元素离开可视区域
            if (replyBoxRef.value && (replyBoxRef.value.getBoundingClientRect().top + 27.6) <= 0) {
                if (!isReplyFixed.value) {
                    isReplyFixed.value = true;
                }
            } else {
                if (isReplyFixed.value) {
                    isReplyFixed.value = false;
                }
            }

        }
    });
}, { threshold: 0.5 });
onMounted(async () => {
    // window.addEventListener('scroll', handleScroll);
    if (replyRef.value) {
        observer.observe(replyRef.value);
    }
});
onUnmounted(() => {
    // window.removeEventListener('scroll', handleScroll);
    replyRef.value && observer?.unobserve(replyRef.value);
    observer?.disconnect();
});
</script>
<style lang="scss" scoped>
.comment {
    margin-top: 24px;
    z-index: 0;
    position: relative;

    .browser-pc {
        background-color: #FFFFFF;

        .comment-container {
            animation-name: enterAnimation-commentContainer;
            animation-duration: 1s;
            animation-fill-mode: forwards;

            .reply-header {
                .reply-navigation {
                    margin-bottom: 22px;

                    .nav-bar {
                        display: flex;
                        align-items: center;
                        list-style: none;
                        margin: 0;
                        padding: 0;

                        .nav-title {
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            .nav-title-text {
                                color: #000000;
                                font-size: 20px;
                                font-weight: 500;
                            }

                            .total-reply {
                                margin: 0 36px 0 6px;
                                font-weight: 400;
                                color: var(--text2);
                                font-size: 14px;
                            }
                        }

                        .nav-sort {
                            display: flex;
                            align-items: center;

                            .sort-item {
                                color: var(--text3);
                                cursor: pointer;

                                &:hover {
                                    color: var(--brand_blue);
                                }
                            }

                            .part-symbol {
                                height: 11px;
                                margin: 0 12px;
                                border-left: solid 1px;
                            }
                        }

                        .active {
                            color: var(--text1) !important;
                        }
                    }
                }
            }

            .reply-wrap {
                position: relative;

                .main-reply-box {
                    height: 91.6px;
                    width: 100%;
                    // padding: 15px 0px;
                    // position: fixed;
                    // bottom: 0px;
                    // // left: 209.6px;
                    // // width: 720px;
                    // z-index: 1;
                    // background-color: #FFFFFF;
                    // border-top: 1px solid var(--v_graph_bg_thick);

                    .reply-box {
                        .comment-textarea {
                            .box-normal {
                                display: flex;
                                z-index: 2;

                                .reply-box-avatar {
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    width: 80px;
                                    height: 48px;

                                    .user-avatar {
                                        display: block;
                                        position: relative;
                                        background-size: cover;
                                        border-radius: 50%;
                                        margin: 0;
                                        padding: 0;
                                        image-rendering: -webkit-optimize-contrast;
                                    }
                                }

                                .reply-box-wrap {
                                    position: relative;
                                    flex: 1;
                                    transition: .2s;
                                    border: 1px solid #E3E5E7;
                                    border-radius: 6px;
                                    background-color: var(--bg3);
                                    overflow-x: hidden;

                                    .textarea-wrap {
                                        padding: 8px 0;
                                        display: flex;
                                        flex-direction: column;
                                        width: 100%;
                                        border-radius: 6px;
                                        cursor: text;
                                        overflow: hidden;
                                        transition: background-color 0.5s ease;

                                        .reply-box-textarea {
                                            padding: 0 8px;
                                            width: 100%;
                                            height: 32px;
                                            border: none;
                                            border-radius: 6px;
                                            background-color: transparent;
                                            font-family: inherit;
                                            font-size: 14px;
                                            line-height: 32px;
                                            color: #18191C;
                                            resize: none;
                                            outline: none;
                                            height: 32px;
                                            line-height: 32px;
                                            box-sizing: border-box;
                                        }
                                    }

                                    .disable-mask {
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        z-index: 1;
                                        width: 100%;
                                        height: 100%;
                                        border-radius: 6px;
                                        font-size: 12px;
                                        color: var(--text3);
                                        background-color: var(--bg3);

                                        .to-login-btn {
                                            padding: 3px 5px;
                                            border-radius: 4px;
                                            background-color: var(--brand_blue);
                                            color: #fff;
                                            margin: 0 3px;
                                            cursor: pointer;
                                        }
                                    }
                                }
                            }

                            .box-expand {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                margin-left: 80px;
                                margin-top: 10px;
                                z-index: 1;
                                height: 32px;
                                transition: all .2s ease-in-out;

                                .box-left {
                                    display: flex;
                                    align-items: center;

                                    .reply-box-emoji,
                                    .reply-box-img {
                                        width: 32px;
                                        height: 26px;
                                        margin-right: 6px;
                                        position: relative;

                                        .emoji-btn,
                                        .img-btn {
                                            box-sizing: border-box;
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            width: 100%;
                                            height: 100%;
                                            border: 1px solid #E7E7E7;
                                            border-radius: 4px;
                                            color: var(--text3);
                                            cursor: pointer;

                                            .icon-image {
                                                width: 16px;
                                                height: 16px;
                                            }
                                        }
                                    }

                                    .at-btn {
                                        box-sizing: border-box;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        position: relative;
                                        width: 32px;
                                        height: 26px;
                                        margin-right: 6px;
                                        border: 1px solid #E7E7E7;
                                        border-radius: 4px;
                                        color: var(--text3);
                                        cursor: pointer;
                                    }
                                }

                                .reply-box-send {
                                    float: right;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    position: relative;
                                    width: 70px;
                                    height: 32px;
                                    border-radius: 6px;
                                    cursor: pointer;
                                    background-color: rgba(var(--brand_blue_rgb), 0.5);

                                    .send-text {
                                        position: absolute;
                                        z-index: 1;
                                        font-size: 16px;
                                        color: var(--text_white);
                                    }

                                    &:hover {
                                        background-color: var(--brand_blue);
                                    }
                                }
                            }

                            .box-expand-hide {
                                margin-top: 0;
                                height: 0;
                                overflow: hidden;
                                transition: all .2s ease-in-out;
                            }
                        }
                    }

                    .main-reply-fixed {
                        padding: 15px 0px;
                        position: fixed;
                        bottom: 0px;
                        left: calc((100% - var(--containerWidth)) / 2 );
                        z-index: 1;
                        opacity: 1;
                        background-color: #FFFFFF;
                        border-top: 1px solid var(--v_graph_bg_thick);
                        -webkit-animation: fadeIn .1s linear;
                        animation: fadeIn .1s linear;
                        -webkit-transition: all .1s linear;
                        transition: all .1s linear;
                    }
                }
            }
        }
    }
}
</style>