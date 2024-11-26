<template>
    <div class="message-entry-popover">
        <div class="message-inner-list">
            <a class="message-inner-list__item" href="/message/reply" target="_blank">
                回复我的
            </a>
            <a class="message-inner-list__item" href="/message/at" target="_blank">
                @我的
            </a>
            <a class="message-inner-list__item" href="/message/love" target="_blank">
                收到的赞
            </a>
            <a class="message-inner-list__item" href="/message/system" target="_blank">
                系统消息
            </a>
            <a class="message-inner-list__item" href="/message/whisper" target="_blank">
                我的消息
            </a>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.message-entry-popover {
    overflow: hidden;
    width: 142px;
    border-radius: 8px;

    .message-inner-list {
        display: flex;
        flex-direction: column;
        padding: 12px 0;

        .message-inner-list__item {
            position: relative;
            display: flex;
            align-items: center;
            padding: 10px 0 10px 27px;
            color: var(--text2);
            text-align: left;
            font-size: 14px;
            transition: background-color .3s;

            &:hover {
                background-color: var(--graph_bg_thick);
            }
        }
    }
}
</style>