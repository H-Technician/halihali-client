<template>
    <div class="video-tag-container">
        <div class="tag-panel">
            <div class="btn-tag" v-for="item in 5" :key="item">
                <div class="tag">
                    <div class="ordinary-tag">
                        <a href="" target="_blank" class="tag-link">生活</a>
                    </div>
                </div>
            </div>
            <div class="btn-tag">
                <div class="show-more-btn">
                    <div class="ordinary-tag">
                        <IconsArrowDown width="12" height="12"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.video-tag-container {
    padding-bottom: 6px;
    margin: 16px 0 20px 0;
    border-bottom: 1px solid var(--line_regular);

    .tag-panel {
        transition: height 0.3s;
        overflow: hidden;

        .btn-tag {
            float: left;
            margin: 0 12px 8px 0;

            .tag {
                .ordinary-tag {
                    .tag-link {
                        color: var(--text2);
                        background: var(--graph_bg_regular);
                        height: 28px;
                        line-height: 28px;
                        border-radius: 14px;
                        font-size: 13px;
                        padding: 0 12px;
                        box-sizing: border-box;
                        transition: all .3s;
                        display: inline-flex;
                        align-items: center;
                        cursor: pointer;
                    }
                }
            }

            .show-more-btn {
                width: 28px;
                height: 28px;
                line-height: 28px;
                border-radius: 50%;
                background: var(--graph_bg_regular);
                text-align: center;
                cursor: pointer;
                transition: all 0.3s;
                color: var(--graph_icon);
            }
        }

    }
}
</style>