<template>
  <div class="hl-layout">
      <HeaderBar 
      :isFixedHeader="true" 
      :isShadow="true"/>
    <slot />
  </div>
</template>
<script setup lang="ts">
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