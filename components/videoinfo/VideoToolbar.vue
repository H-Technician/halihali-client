<template>
    <div class="video-toolbar-container">
        <div class="video-toolbar-left">
            <div class="video-toolbar-left-main">
                <div class="toolbar-left-item-wrap">
                    <div class="video-like video-toolbar-left-item">
                        <IconsPlayLike class="video-toolbar-item-icon" />
                        <span class="video-like-info video-toolbar-item-text">
                            309
                        </span>
                    </div>
                </div>
                <div class="toolbar-left-item-wrap">
                    <div class="video-coin video-toolbar-left-item">
                        <IconsPlayCoin class="video-toolbar-item-icon" />
                        <span class="video-like-info video-toolbar-item-text">
                            457
                        </span>
                    </div>
                </div>
                <div class="toolbar-left-item-wrap">
                    <div class="video-fav video-toolbar-left-item">
                        <IconsPlayCollect class="video-toolbar-item-icon" />
                        <span class="video-like-info video-toolbar-item-text">
                            909
                        </span>
                    </div>
                </div>
                <div class="toolbar-left-item-wrap">
                    <div class="video-like video-toolbar-left-item">
                        <IconsPlayShare class="video-toolbar-item-icon" />
                        <span class="video-like-info video-toolbar-item-text">
                            39
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="video-toolbar-right">
            <div class="video-tool-more video-toolbar-right-item">
                <span class="video-tool-more-reference">
                    <IconsMore class="video-toolbar-item-icon"/>
                </span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.video-toolbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    padding-bottom: 12px;
    line-height: 28px;
    border-bottom: 1px solid var(--line_regular);

    .video-toolbar-left {
        position: relative;
        display: flex;
        align-items: center;
        -webkit-user-select: none;
        user-select: none;

        .video-toolbar-left-main {
            position: relative;
            display: flex;
            align-items: center;
            -webkit-user-select: none;
            user-select: none;

            .toolbar-left-item-wrap {
                position: relative;
                margin-right: 8px;

                .video-toolbar-left-item {
                    position: relative;
                    display: flex;
                    align-items: center;
                    width: 92px;
                    white-space: nowrap;
                    transition: all .3s;
                    font-size: 13px;
                    color: var(--text2);
                    fill: var(--text2);
                    font-weight: 500;
                    cursor: pointer;

                    .video-toolbar-item-icon {
                        flex-shrink: 0;
                        width: 22px;
                        height: 22px;
                        margin-right: 8px;
                    }

                    .video-toolbar-item-text {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        word-break: break-word;
                        white-space: nowrap;
                    }
                }
            }
        }
    }

    .video-toolbar-right {
        display: flex;
        align-items: center;
        -webkit-user-select: none;
        user-select: none;

        .video-toolbar-right-item {
            display: inline-flex;
            align-items: center;
            font-size: 13px;
            color: var(--text2);
            transition: all .3s;
            cursor: pointer;

            .video-tool-more-reference {
                display: flex;

                .video-toolbar-item-icon {
                    flex-shrink: 0;
                    width: 24px;
                    height: 24px;
                    margin-right: 0;

                    &:hover {
                        color: var(--brand_blue);
                    }
                }
            }
        }
    }
}
</style>