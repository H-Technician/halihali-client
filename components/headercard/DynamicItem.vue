<template>
    <a class="top_right_bar_window_dynamic" href="" target="_blank">
        <div class="header-dynamic-list-item">
            <div class="header-dynamic-container">
                <div class="header-dynamic__box--left">
                    <a class="header-dynamic-avatar" href="">
                        <AvatarVAvatar :avatar-style="{ width: '100%', height: '100%', }" />
                    </a>
                </div>
                <div class="header-dynamic__box--center">
                    <div class="dynamic-name-line">
                        <div class="user-name">
                            <a href="" title="二女婿小七" target="_blank">二女婿小七</a>
                        </div>
                    </div>
                    <div class="dynamic-info-content">
                        <div class="all-in-one-article-title">今天做个小时候的零食</div>
                    </div>
                    <span class="publish-time">昨天 22:18</span>
                </div>
                <a class="header-dynamic__box--right" href="" target="_blank">
                    <div class="cover">
                        <picture class="v-img">
                            <source srcset="" type="image/avif">
                            <source srcset="" type="image/webp">
                            <img src="" alt="" loading="lazy" onload="" onerror="">
                        </picture>
                        <div class="watch-later">
                            <svg-icon name="widget-watch-later" color="#ffffff"></svg-icon>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </a>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.top_right_bar_window_dynamic {
    text-indent: inherit;

    .header-dynamic-list-item {
        padding: 12px 20px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        transition: .3s;

        .header-dynamic-container {
            display: flex;
            flex-direction: row;

            .header-dynamic__box--left,
            .header-dynamic__box--right {
                width: 36px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                position: relative;
            }

            .header-dynamic-avatar {
                z-index: 2;
                position: relative;
                display: block;
                width: 38px;
                height: 38px;
                border: 2px solid var(--graph_bg_thick);
                border-radius: 50%;

                :deep(.v-img) {
                    border: none;
                }
            }

            .header-dynamic__box--center {
                width: 260px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                padding: 0 12px;

                .dynamic-name-line {
                    display: inline-block;
                    font-size: 13px;
                    color: var(--text2);

                    .user-name {
                        display: flex;
                        align-items: center;

                        a {
                            display: -webkit-box;
                            overflow: hidden;
                            -webkit-box-orient: vertical;
                            text-overflow: -o-ellipsis-lastline;
                            text-overflow: ellipsis;
                            word-break: break-word !important;
                            word-break: break-all;
                            line-break: anywhere;
                            -webkit-line-clamp: 1;
                            line-clamp: 1;
                        }
                    }
                }

                .dynamic-info-content {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    line-clamp: 3;
                    -webkit-box-orient: vertical;
                    word-break: break-all;
                    margin-top: 4px;
                    font-size: 14px;
                    color: var(--text1);
                    font-weight: 500;
                    max-width: 200px;

                    .all-in-one-article-title {
                        overflow: inherit;
                        text-overflow: inherit;
                        display: inherit;
                        font-size: 14px;
                        line-height: 20px;
                        color: var(--text1);
                        -webkit-line-clamp: inherit;
                        line-clamp: inherit;
                        -webkit-box-orient: inherit;
                    }
                }

                .publish-time {
                    color: var(--text3);
                    display: inline-block;
                    font-size: 12px;
                }
            }

            .header-dynamic__box--right {
                width: 64px;
                position: relative;
                top: 20px;
                margin-bottom: 20px;

                .cover {
                    width: 82px;
                    height: 46px;
                    border-radius: 4px;
                    background: var(--raph_bg_thick) center / cover no-repeat;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;

                    .watch-later {
                        display: none;
                        position: absolute;
                        width: 28px;
                        height: 28px;
                        padding-top: 3px;
                        padding-left: 3px;
                        border-radius: 6px;
                        background-color: rgba(33, 33, 33, .8);

                        .svg-widget-watch-later {
                            color: #fff;
                            width: 22px;
                            height: 22px;
                        }
                    }
                }
            }
        }

        &:hover {
            background-color: var(--graph_bg_thick);
        }
    }

}
</style>