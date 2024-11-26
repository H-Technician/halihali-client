<template>
    <div class="dynamic-panel-popover">
        <div class="header-tabs-panel__content">
            <div class="header-content-panel">
                <div class="dynamic-header">
                    <a class="dynamic-header__title" href="https://t.bilibili.com" target="_blank">动态</a>
                </div>
                <div class="dynamic-all">
                    <div class="split-line">
                        <div class="history-tip">历史动态</div>
                    </div>
                    <HeadercardDynamicItem v-for="(item, index) in 7" :key="item + 6" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.dynamic-panel-popover {
    width: 370px;

    .header-tabs-panel__content {
        min-height: 172px;
        max-height: 540px;
        overflow-y: auto;
        text-align: left;
        overscroll-behavior: none;
        scrollbar-width: 5px;

        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: var(--graph_bg_thick);
        }

        .dynamic-header {
            padding: 20px 20px 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--text1);

            .dynamic-header__title {
                font-size: 16px;
                line-height: 22px;
                font-weight: 600;
            }
        }

        .dynamic-all {
            .split-line {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                color: var(--text3);
                font-size: 12px;
                margin: 6px 20px;

                &::before {
                    content: "";
                    display: block;
                    width: 100%;
                    border-top: 1px solid var(--line_regular);
                    position: absolute;
                    top: 8px;
                    left: 0;
                }

                .history-tip {
                    background: var(--bg1_float);
                    padding: 0 10px;
                    z-index: 1;
                }
            }

        }
    }
}
</style>