<template>
    <div class="hl-layout">
        <HeaderBar 
        class="search-header-bar"
        :isFixedHeader="true" 
        :isShadow="true" 
        :isShowCenter="false"/>
        <slot />
    </div>
</template>
<script setup lang="ts">

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