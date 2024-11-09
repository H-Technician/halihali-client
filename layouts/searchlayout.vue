<template>
    <div class="hl-layout">
        <HeaderBar 
        class="search-header-bar"
        :isFixedHeader="true" 
        :isShadow="true" 
        :isShowCenter="false" 
        :isDisplayHeader="props.isDisplayHeader"/>
        <slot />
    </div>
</template>
<script setup lang="ts">
interface Props {
    isDisplayHeader?: boolean; // 是否显示头部
}
const props = withDefaults(defineProps<Props>(), {
    isDisplayHeader: true
});
</script>
<style scoped lang="scss">
.hl-layout {
    position: absolute;
    margin: 0 auto;
    width: 100%;
    max-width: 2560px;
    background-color: #ffffff;
    overflow: hidden;
    min-width: 1058px;

    .search-header-bar {
    position: relative !important;
    box-shadow: 0 2px 4px #00000014 !important;
}
}
</style>