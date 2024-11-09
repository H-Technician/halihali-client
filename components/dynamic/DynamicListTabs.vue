<template>
    <div class="dyn-list-tabs">
        <div class="dyn-list-tabs__list">
            <div class="dyn-list-tabs__item fs-medium active">
                全部
            </div>
            <div class="dyn-list-tabs__item fs-medium">
                视频投稿
            </div>
            <div class="dyn-list-tabs__item fs-medium">
                追番追剧
            </div>
            <div class="dyn-list-tabs__item fs-medium">
                专栏
            </div>
        </div>
        <div class="dyn-list-tabs__highlight" style="transform: translateX(28px);"></div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.dyn-list-tabs {
    background-color: var(--bg1);
    border-radius: 6px;
    height: 48px;
    position: relative;
    width: 100%;

    .dyn-list-tabs__list {
        display: flex;
        height: 100%;
        padding-left: 20px;

        .dyn-list-tabs__item {
            align-items: center;
            color: var(--text2);
            cursor: pointer;
            display: flex;
            font-weight: 400;
            height: 100%;
            justify-content: center;
            margin-right: 32px;
            position: relative;
        }

        .fs-medium {
            font-size: 15px;
            line-height: 25px;
        }

        .dyn-list-tabs__item.active {
            color: var(--brand_blue);
            font-weight: 600;
        }
    }

    .dyn-list-tabs__highlight {
        background-color: var(--brand_blue);
        border-radius: 1px;
        bottom: 8px;
        height: 2px;
        left: 0;
        position: absolute;
        transition: transform .2s;
        width: 14px;
    }
}
</style>
