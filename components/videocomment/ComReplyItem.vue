<template>
    <div class="reply-item">
        <div class="root-reply-container">
            <div class="root-reply-avatar-wrap">
                <a href="" class="root-reply-avatar" target="_blank" ref="replyAvatarRef"
                    @mouseenter="handleMouseEnter('avatar')" @mouseleave="handleMouseLeave">
                    <AvatarVAvatar />
                </a>
            </div>
            <div class="content-wrap">
                <div class="user-info">
                    <a href="" target="_blank" class="user-name" ref="replyNameRef"
                        @mouseenter="handleMouseEnter('name')" @mouseleave="handleMouseLeave">
                        Admin
                    </a>
                    <!-- UP主标识 -->
                    <IconsUserUp />
                </div>
                <div class="root-reply">
                    <span class="reply-content-container">
                        <span class="reply-content">哈哈,不错不错哟</span>
                    </span>
                    <div class="reply-info">
                        <span class="reply-time">刚刚</span>
                        <!-- 点赞 -->
                        <span class="reply-like">
                            <i class="svg-icon like-icon">
                                <IconsLike v-if="false" />
                                <IconsLikeActive v-else />
                            </i>
                            <span>7</span>
                        </span>
                        <!-- 点踩 -->
                        <span class="reply-dislike">
                            <i class="svg-icon dislike-icon" style="width: 16px; height: 16px;">
                                <IconsDisLike v-if="false" />
                                <IconsDisLikeActive v-else />
                            </i>
                        </span>
                        <span class="reply-btn">回复</span>
                        <div class="reply-operation-wrap">
                            <div class="reply-operation">
                                <i class="svg-icon operation-icon">
                                    <IconsMore />
                                </i>
                                <div class="operation-list">
                                    <div class="operation-option">
                                        <span class="option-title">
                                            加入黑名单
                                        </span>
                                    </div>
                                    <div class="operation-option">
                                        <span class="option-title">
                                            删除
                                        </span>
                                    </div>
                                    <div class="operation-option">
                                        <span class="option-title">
                                            举报
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="reply-tag-list">
                        <div class="reply-tag-item"
                            style="background-color: rgb(255, 236, 241); color: rgb(255, 102, 153);">
                            热评
                        </div>
                        <div class="reply-tag-item"
                            style="background-color: rgb(244, 244, 244); color: rgb(117, 117, 117);">
                            UP主觉得很赞
                        </div>
                    </div>
                </div>
                <VideocommentSubComment />
                <div class="view-more">
                    <div class="view-more-default">
                        <span>共</span>
                        <span>456</span>
                        <span>条回复, </span>
                        <span class="view-more-btn">点击查看</span>
                    </div>
                </div>
            </div>
            <div v-if="isShowUserCard" class="teleport is-hidden">
                <Teleport to="#userProfileWrap" :disabled="isDisabledTeleport">
                    <UsercardUserCard />
                </Teleport>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
let usercardWrap: HTMLElement | null;
const replyAvatarRef = ref<HTMLDivElement | null>(null);
const replyNameRef = ref<HTMLDivElement | null>(null);
const isShowUserCard = ref<boolean>(false);
const isDisabledTeleport = ref<boolean>(true);
let inTimer: ReturnType<typeof setTimeout>;
interface Props {
    uid?: string;
}

const props = withDefaults(defineProps<Props>(), {
    uid: "",
});
const mouseEnter = () => {
    clearTimeout(inTimer);
    usercardWrap?.addEventListener('mouseleave', mouseLeave);
}

const mouseLeave = () => {
    usercardWrap?.removeEventListener('mouseenter', mouseEnter);
    usercardWrap?.removeEventListener('mouseleave', mouseLeave);
    inTimer = setTimeout(() => {
        hideUserCard();
    }, 200);
}
const handleMouseEnter = (element: string) => {
    clearTimeout(inTimer);
    if (element === 'avatar') {
        showAvatarUserCard();
    } else if (element === 'name') {
        showNameUserCard();
    }
    usercardWrap?.addEventListener('mouseenter', mouseEnter);
    setTimeout(() => {
        if (usercardWrap?.style.display === 'none') {
            if (element === 'avatar') {
                showAvatarUserCard();
            } else if (element === 'name') {
                showNameUserCard();
            }
        }
    }, 200);
};

const handleMouseLeave = () => {
    inTimer = setTimeout(() => {
        hideUserCard();
    }, 200);

};

const showAvatarUserCard = () => {
    if (replyAvatarRef.value && usercardWrap) {
        const rect = replyAvatarRef.value.getBoundingClientRect();
        usercardWrap.style.left = (rect.left + 24) + 'px';
        if (rect.top > 321) {
            usercardWrap.style.top = (rect.top - 260) + 'px';
        } else {
            usercardWrap.style.top = (rect.top + 51) + 'px';
        }
        isDisabledTeleport.value = false;
        usercardWrap.style.removeProperty('display');
        usercardWrap.addEventListener('mouseenter', mouseEnter);
    }
}

const showNameUserCard = () => {
    if (replyNameRef.value && usercardWrap) {
        const rect = replyNameRef.value.getBoundingClientRect();
        usercardWrap.style.left = (rect.left + rect.width/2) + 'px';
        if (rect.top > 321) {
            usercardWrap.style.top = (rect.top - 260) + 'px';
        } else {
            usercardWrap.style.top = (rect.top + rect.height + 3) + 'px';
        }
        isDisabledTeleport.value = false;
        usercardWrap.style.removeProperty('display');
        usercardWrap.addEventListener('mouseenter', mouseEnter);
    }
}

const hideUserCard = () => {
    if (replyAvatarRef.value && usercardWrap) {
        usercardWrap.style.removeProperty('top');
        usercardWrap.style.removeProperty('bottom');
        usercardWrap.style.removeProperty('right');
        usercardWrap.style.left = '0px';
        usercardWrap.style.top = '0px';
        usercardWrap.style.display = 'none';
    }
    isDisabledTeleport.value = true;
}
onMounted(async () => {
    usercardWrap = document.getElementById('userProfileWrap');
    if (!usercardWrap) {
        usercardWrap = document.createElement('div');
        document.body.appendChild(usercardWrap);
    }
    usercardWrap.id = 'userProfileWrap';
    usercardWrap.className = 'userprofile-wrap';
    usercardWrap.style.top = '0px';
    usercardWrap.style.left = '0px';
    usercardWrap.style.display = 'none';
    isShowUserCard.value = true;

});
onUnmounted(() => {
    usercardWrap?.removeEventListener('mouseenter', mouseEnter);
    usercardWrap?.removeEventListener('mouseleave', mouseLeave);
});
</script>
<style lang="scss" scoped>
.reply-item {
    position: relative;

    .root-reply-container {
        padding: 22px 0 0 80px;

        .root-reply-avatar-wrap {
            display: flex;
            justify-content: center;
            position: absolute;
            left: 0;
            width: 80px;

            .root-reply-avatar {
                cursor: pointer;
            }
        }

        .content-wrap {
            flex: 1;
            position: relative;
            padding: 0 0 14px;
            border-bottom: 1px solid var(--v_graph_bg_thick);
            font-size: 15px;
            line-height: 24px;

            .user-info {
                display: flex;
                align-items: center;
                margin-bottom: 4px;

                .user-name {
                    font-weight: 500;
                    margin-right: 7px;
                    color: var(--text2);
                    cursor: pointer;
                }
            }

            .root-reply {
                position: relative;
                padding: 2px 0;
                font-size: 16px;
                line-height: 26px;

                .reply-content-container {
                    display: block;
                    overflow: hidden;
                    width: 100%;
                    position: relative;
                    padding: 2px 0;

                    .reply-content {
                        color: var(--text1);
                        overflow: hidden;
                        word-wrap: break-word;
                        word-break: break-word;
                        white-space: pre-wrap;
                        line-height: 24px;
                        vertical-align: baseline;
                    }
                }

                .reply-info {
                    display: flex;
                    align-items: center;
                    position: relative;
                    margin-top: 2px;
                    font-size: 13px;
                    color: var(--text3);

                    .reply-time {
                        margin-right: 20px;
                    }

                    .reply-like,
                    .reply-dislike,
                    .reply-operation-wrap {

                        .svg-icon {
                            display: inline-flex;
                            justify-content: center;
                            align-items: center;
                            width: 16px;
                            height: 16px;
                        }
                    }

                    .reply-like {
                        display: flex;
                        align-items: center;
                        margin-right: 19px;
                        cursor: pointer;

                        .like-icon {
                            margin-right: 5px;
                            color: #9499a0;
                            fill: #9499a0;

                            &:hover {
                                fill: var(--brand_blue);
                            }
                        }
                    }

                    .reply-dislike {
                        display: flex;
                        align-items: center;
                        margin-right: 19px;

                        .dislike-icon {
                            color: #9499a0;
                            cursor: pointer;
                            fill: #9499a0;
                            width: 100%;
                            height: 100%;
                        }

                        &:hover {
                            fill: var(--brand_blue);
                        }
                    }

                    .reply-btn {
                        cursor: pointer;
                    }

                    .reply-operation-wrap {
                        position: absolute;
                        right: 20px;
                        height: 20px;
                        opacity: 0;
                        transition: opacity 0.5s ease-in-out;

                        .reply-operation {
                            display: inline-flex;
                            position: relative;
                            height: 100%;
                            align-items: center;

                            .operation-icon {
                                color: #9499a0;
                                cursor: pointer;

                                &:hover {
                                    color: var(--brand_blue);
                                }
                            }

                            .operation-list {
                                display: flex;
                                flex-direction: column;
                                position: absolute;
                                top: 10px;
                                right: 0;
                                z-index: 10;
                                width: 120px;
                                justify-content: center;
                                border-radius: 4px;
                                font-size: 14px;
                                color: var(--v_text1);
                                background-color: var(--bg1);
                                box-shadow: 0 0 5px #0003;
                                opacity: 0;
                                transition: opacity 0.5s ease-in-out;

                                .operation-option {
                                    display: flex;
                                    align-items: center;
                                    justify-content: flex-start;
                                    height: 36px;
                                    padding: 0 15px;
                                    cursor: pointer;

                                    &:hover {
                                        background-color: var(--bg3);
                                    }
                                }
                            }

                            &:hover {
                                .operation-list {
                                    opacity: 1;
                                }
                            }
                        }
                    }
                }

                .reply-tag-list {
                    display: flex;
                    align-items: center;
                    margin-top: 6px;
                    font-size: 12px;
                    line-height: 17px;

                    .reply-tag-item {
                        padding: 2px 6px;
                        border-radius: 2px;
                        margin-right: 10px;
                    }
                }
            }

            .view-more {
                padding-left: 8px;
                font-size: 13px;
                color: var(--text3);

                .view-more-btn {
                    cursor: pointer;
                }

            }

        }

        .is-hidden {
            display: none;
        }
    }

    &:hover {
        .content-wrap .reply-operation-wrap {
            opacity: 1;
        }
    }
}
</style>