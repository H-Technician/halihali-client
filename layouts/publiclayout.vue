<template>
  <div class="hl-layout">
      <HeaderBar 
      :isFixedHeader="true" 
      :isShadow="true"
      :isDisplayHeader="props.isDisplayHeader" />
    <slot />
  </div>
</template>
<script setup lang="ts">
interface Props {
    isDisplayHeader?: boolean // 是否显示头部
}
const props = withDefaults(defineProps<Props>(), {
    isDisplayHeader: true
});
</script>
<style scoped>
.hl-layout {
    position: absolute;
    margin: 0 auto;
    width: 100%;
    max-width: 2560px;
    background-color: #ffffff;
    overflow: hidden;
    min-width: 1058px;
}
</style>