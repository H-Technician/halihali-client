<template>
    <div class="history-panel-popover">
        <div class="header-tabs-panel">
            <div class="header-tabs-panel__item--active header-tabs-panel__item">视频</div>
            <div class="header-tabs-panel__item">直播</div>
            <div class="header-tabs-panel__item">专栏</div>
        </div>
        <div class="header-tabs-panel__content">
            <div>
                <p class="header-tabs-panel__content--date">今天</p>
                <HeadercardHistoryVideoItem v-for="(item, index) in 7" :key="item + 6"/>
            </div>
            <div>
                <p class="header-tabs-panel__content--date">昨天</p>
                <HeadercardHistoryLiveItem v-for="(item, index) in 7" :key="item + 6"/>
            </div>
            <div>
                <p class="header-tabs-panel__content--date">昨天</p>
                <HeadercardHistoryArticleItem v-for="(item, index) in 7" :key="item + 6"/>
            </div>
            <a href="/account/history" target="_blank" class="view-all-history-btn"> 查看全部 </a>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.history-panel-popover {
    width: 370px;
    height: 540px;

    .header-tabs-panel {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid var(--line_regular);

        .header-tabs-panel__item {
            flex: 1 auto;
            padding: 15px 0;
            border-bottom: 3px solid transparent;
            text-align: center;
            font-size: 14px;
            cursor: pointer;
            color: var(--text1);
        }

        .header-tabs-panel__item--active {
            border-bottom: 3px solid var(--brand_blue);
            color: var(--brand_blue);
        }
    }

    .header-tabs-panel__content {
        overflow-y: auto;
        height: 480px;
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

        .header-tabs-panel__content--date {
            margin-top: 12px;
            margin-bottom: 5px;
            padding: 0 20px;
            color: var(--text1);
            font-size: 14px;
            line-height: 16px;
        }

        .view-all-history-btn {
            display: block;
            margin: 16px auto;
            width: 330px;
            height: 36px;
            border-radius: 8px;
            background: var(--bg2);
            color: var(--text2);
            text-align: center;
            font-size: 14px;
            line-height: 36px;
            cursor: pointer;
            transition: color .3s;

            &:hover {
                color: var(--text1);
            }
        }
    }
}
</style>