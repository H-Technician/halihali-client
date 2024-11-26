<template>
    <div class="favorite-panel-popover">
        <div class="favorite-panel-popover__nav">
            <div class="tab-item tab-item--active">
                <span class="tab-item__title" title="默认收藏夹">默认收藏夹</span>
                <span class="tab-item__num">0</span>
            </div>
            <div class="tab-item">
                <span class="tab-item__title" title="稍后再看">稍后再看</span>
                <span class="tab-item__num">0</span>
            </div>
        </div>
        <div class="favorite-panel-popover__content">
            <div id="favorite-content-scroll" class="content-scroll">
                <div class="content-scroll--nothing">该收藏夹还没有视频哦~</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.favorite-panel-popover {
    display: flex;
    width: 520px;
    text-align: left;

    .favorite-panel-popover__nav {
        overflow-y: auto;
        flex-shrink: 0;
        box-sizing: border-box;
        padding: 12px 0;
        width: 150px;
        height: 540px;
        border-right: 1px solid var(--line_regular);
        overscroll-behavior: none;

        .tab-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 16px;
            height: 46px;
            color: var(--text1);
            font-size: 14px;
            line-height: 22px;
            cursor: pointer;
            transition: background-color .3s, color .3s;
        }

        .tab-item--active {
            background-color: var(--brand_blue);
            color: #fff;
        }
    }

    .favorite-panel-popover__content {
        position: relative;
        flex: 1 auto;
        box-sizing: border-box;
        height: 540px;
        overflow: hidden;

        .content-scroll {
            overflow-y: auto;
            height: 493px;
            padding: 12px 0;
            overscroll-behavior: none;

            .content-scroll--nothing {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 400px;
                color: var(--text3);
                font-size: 14px;
            }
        }
    }
}
</style>