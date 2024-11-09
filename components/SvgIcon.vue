<template>
    <svg
      :class="svgClass"
      v-bind="$attrs"
      :style="{ color: color }"
      aria-hidden="true"
    >
      <use :xlink:href="iconName" />
    </svg>
</template>

<script setup lang="ts">
// 定义 props 接收
const props = defineProps<{
name: string;
color?: string;
}>();
const iconName = computed(() => `#icon-${props.name}`);
const svgClass = computed(() => {
if (props.name) {
    return `svg-icon icon-${props.name}`;
}
return "svg-icon";
});
</script>

<style lang="scss" scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    vertical-align: middle;
}
</style>