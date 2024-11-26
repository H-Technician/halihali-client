<template>
    <div class="reply-list">
        <VideocommentComReplyItem v-for="item in 3" :key="item" />
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.reply-list {
    padding-bottom: 100px;
}
</style>