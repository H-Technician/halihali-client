<template>
  <div class="dialog-warp" v-if="showDialog">
    <div class="dialog-overlay" :class="[showDialogStyle && props.duration != 0 ? 'dialog-overlay-show' : '',
    !showDialogStyle && props.duration != 0 ? 'dialog-overlay-hide' : ''
    ]"></div>
    <div class="dialog-area" :class="[showDialogStyle && props.duration != 0 ? 'dialog-show' : '',
    !showDialogStyle && props.duration != 0 ? 'dialog-hide' : ''
    ]" :style="{ width: `${props.width}px`, height: `${props.height}px` }">
      <div class="dialog-title">
        <div class="title-text">
          <span>{{ props.title }}</span>
          <div class="title-close" v-if="showClose">
            <IconsDialogClose class="icon-close" @click="close" />
          </div>
        </div>
      </div>
      <div class="dialog-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { rafTimeout } from '@/utils/rafTimeout';
const showDialog = ref(false);
const showDialogStyle = ref(false);
interface Props {
  showDialog?: boolean // 弹框的显示隐藏
  width?: string | number // popover的宽度
  height?: string | number // popover的高度
  showClose?: boolean // 是否显示右上角的关闭按钮
  title?: string // 弹框标题
  duration?: number // 动画时长
}
const props = withDefaults(defineProps<Props>(), {
  showDialog: false,
  width: 'auto',
  height: 'auto',
  showClose: true,
  title: '',
  duration: 0,
});
const emit = defineEmits(['isShowDialog']);
watch(
  () => props.showDialog,
  (newVal) => {
    showDialogStyle.value = newVal;
    if (process.client) {
      rafTimeout(() => {
        showDialog.value = newVal;
      }, props.duration);
    }
  },
  { immediate: true }
);
const close = () => {
  showDialogStyle.value = false;
  if (process.client) {
    rafTimeout(() => {
      showDialog.value = false;
      emit('isShowDialog', showDialog.value);
    }, props.duration);
  }
}

</script>
<style scoped lang="scss">
.dialog-overlay {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: rgba(0, 0, 0, 0.4);
}

.dialog-area {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: fit-content;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  min-width: 400px;
  overflow: hidden;
  background: #fff;
  z-index: 999;
  border-radius: 6px;
  transform: none;
  transition: all 0.5s ease-in-out;

  .dialog-title {
    position: relative;
    height: 32px;
    text-align: center;
    overflow: hidden;
    line-height: 36px;
    width: 100%;
    color: #000000;
    font-size: 18px;

    .title-text {
      position: relative;
      z-index: 1000;
    }

    .title-close {
      position: absolute;
      right: 16px;
      top: 16px;
      height: 18px;
      width: 18px;
      line-height: 36px;
      fill: $item-color;
      cursor: pointer;

      &:hover {
        fill: var(--brand_blue);
      }

      .icon-close {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }

  .dialog-content {
    min-height: 2rem;
    height: calc(100% - 32px);
  }
}

.dialog-show {
  animation: fadeIn 0.6s ease-out forwards;
  transform-origin: top;
}

.dialog-hide {
  animation: fadeOut 0.6s ease-out forwards;
  transform-origin: top;
  /* 设置动画的旋转点为顶部 */
}

.dialog-overlay-show {
  animation: fadeIn 0.6s ease-out forwards;
  transform-origin: top;
}

.dialog-overlay-hide {
  animation: fadeOut 0.6s ease-out forwards;
  transform-origin: top;
  /* 设置动画的旋转点为顶部 */
}
</style>