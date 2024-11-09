<template>
    <div class="sub-reply-list">
        <div class="sub-reply-item">
            <div class="sub-root-reply-container">
                <div class="sub-root-reply-avatar-wrap">
                    <a href="" class="sub-root-reply-avatar">
                        <AvatarVAvatar :avatarStyle="{ width: '24px', height: '24px' }" />
                    </a>
                </div>
                <div class="sub-content-wrap">
                    <div class="user-info">
                        <a href="" target="_blank" class="user-name">
                            Admin
                        </a>
                        <!-- UP主标识 -->
                        <IconsUserUp />
                    </div>
                    <span class="sub-reply-content-container">
                        <span class="sub-reply-content">
                            开放性只是表象，实际上安卓的优势是官方以及自发性组成的软件生态，iOS在软件生态上和安卓同时起步，这么多年一直有积累，有稳定的用户群体，才在今天能和安卓平分天下。
                        </span>
                    </span>
                    <div class="sub-root-reply">

                        <div class="sub-reply-info">
                            <span class="sub-reply-time">刚刚</span>
                            <!-- 点赞 -->
                            <span class="sub-reply-like">
                                <i class="svg-icon like-icon">
                                    <IconsLike v-if="false" />
                                    <IconsLikeActive v-else />
                                </i>
                                <span>7</span>
                            </span>
                            <!-- 点踩 -->
                            <span class="sub-reply-dislike">
                                <i class="svg-icon dislike-icon" style="width: 16px; height: 16px;">
                                    <IconsDisLike v-if="false" />
                                    <IconsDisLikeActive v-else />
                                </i>
                            </span>
                            <span class="sub-reply-btn">回复</span>
                            <div class="sub-reply-operation-wrap">
                                <div class="sub-reply-operation">
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
                        <div class="sub-reply-tag-list">
                            <div class="reply-tag-item"
                                style="background-color: rgb(255, 236, 241); color: rgb(255, 102, 153);">
                                热评
                            </div>
                            <div class="sub-reply-tag-item"
                                style="background-color: rgb(244, 244, 244); color: rgb(117, 117, 117);">
                                UP主觉得很赞
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
<style lang="scss" scoped>
.sub-reply-list {

    .sub-reply-item {
        position: relative;

        .sub-root-reply-container {
            padding: 8px 0 8px 34px;

            .sub-root-reply-avatar-wrap {
                display: flex;
                justify-content: flex-start;
                position: absolute;
                left: 0;
                width: 24px;

                .sub-root-reply-avatar {
                    cursor: pointer;
                }
            }

            .sub-content-wrap {
                flex: 1;
                position: relative;
                // padding: 0 0 14px;

                .user-info {
                    display: inline-flex;
                    align-items: center;
                    margin-right: 10px;

                    .user-name {
                        font-weight: 500;
                        margin-right: 7px;
                        color: var(--text2);
                        cursor: pointer;
                    }
                }

                .sub-reply-content-container {
                    display: inline;
                    overflow: hidden;
                    width: 100%;
                    position: relative;
                    padding: 2px 0;

                    .sub-reply-content {
                        color: var(--text1);
                        overflow: hidden;
                        word-wrap: break-word;
                        word-break: break-word;
                        white-space: pre-wrap;
                        line-height: 24px;
                        vertical-align: baseline;
                    }
                }

                .sub-root-reply {
                    position: relative;
                    padding: 2px 0;
                    font-size: 16px;
                    line-height: 26px;

                    .sub-reply-info {
                        display: flex;
                        align-items: center;
                        position: relative;
                        margin-top: 2px;
                        font-size: 13px;
                        color: var(--text3);

                        .sub-reply-time {
                            margin-right: 20px;
                        }

                        .sub-reply-like,
                        .sub-reply-dislike,
                        .sub-reply-operation-wrap {

                            .svg-icon {
                                display: inline-flex;
                                justify-content: center;
                                align-items: center;
                                width: 16px;
                                height: 16px;
                            }
                        }

                        .sub-reply-like {
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

                        .sub-reply-dislike {
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

                        .sub-reply-btn {
                            cursor: pointer;
                        }

                        .sub-reply-operation-wrap {
                            position: absolute;
                            right: 20px;
                            height: 20px;
                            opacity: 0;
                            transition: opacity 0.5s ease-in-out;

                            .sub-reply-operation {
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

                                .sub-operation-list {
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

                                    .sub-operation-option {
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
                                    .sub-operation-list {
                                        opacity: 1;
                                    }
                                }
                            }
                        }
                    }

                    .sub-reply-tag-list {
                        display: flex;
                        align-items: center;
                        margin-top: 6px;
                        font-size: 12px;
                        line-height: 17px;

                        .sub-reply-tag-item {
                            padding: 2px 6px;
                            border-radius: 2px;
                            margin-right: 10px;
                        }
                    }
                }

            }
        }

        &:hover {
            .content-wrap .reply-operation-wrap {
                opacity: 1;
            }
        }
    }

}
</style>