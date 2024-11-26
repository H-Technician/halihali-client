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
                        <div class="reply-box" :class="isReplyFixed ? 'main-reply-fixed' : ''"
                            :style="`left: ${replyBoxLeft}px;`">
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
import { prototype } from 'spark-md5';

const replyBoxRef = ref<HTMLDivElement | null>(null);
const replyRef = ref<HTMLDivElement | null>(null);
const isReplyFixed = ref<boolean>(false);
const replyBoxLeft = ref<number>(0);
interface Props {
    isWideScreen?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    isWideScreen: false,
});
const handleResize = () => {
    if (replyBoxRef.value) {
        const rect = replyBoxRef.value.getBoundingClientRect();
        replyBoxLeft.value = rect.left;
    }
};

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

watch(() => props.isWideScreen, (newVal) => {
    handleResize();
});

onMounted(async () => {
    handleResize(); // 初始化时调用一次
    window.addEventListener('resize', handleResize);
    if (replyRef.value) {
        observer.observe(replyRef.value);
    }
    

});
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
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

                                        :deep(.hl-avatar) {
                                            width: 48px;
                                            height: 48px;
                                            transform: translate(0px, 0px);
                                            display: block;
                                            position: relative;
                                            background-image: url(data:image/gif;base64,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);
                                            background-size: cover;
                                            border-radius: 50%;
                                            margin: 0;
                                            padding: 0;

                                            .v-img {
                                                border: none;
                                            }

                                            .hl-avatar-icon {
                                                width: 18px;
                                                height: 18px;
                                                bottom: -1px;
                                            }

                                        }
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
                        left: calc((100% - var(--containerWidth)) / 2);
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