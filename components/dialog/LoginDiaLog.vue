<template>
    <div class="login-dialog-warp" v-if="showDialog">
        <div class="login-dialog-overlay" :class="showDialogStyle ? 'dialog-overlay-show' : 'dialog-overlay-hide'"></div>
        <div class="login-dialog-area" :class="showDialogStyle ? 'dialog-show' : 'dialog-hide'" :style="{ width: `${props.width}px`, height: `${props.height}px` }">
          <div class="login-dialog-header-area">
            <div class="login-dialog-close">
                <IconsDialogClose class="icon-close" @click="close" />
            </div>
          </div>
          <div class="login-dialog-content">
            <slot name="content"></slot>
          </div>
        </div>
    </div>
</template>
<script setup  lang="ts">
const showDialog =ref(false)
const showDialogStyle = ref(false);
interface Props {
  showDialog?: boolean // 弹框的显示隐藏
  width?: string | number // popover的宽度
  height?: string | number // popover的高度
}
const props = withDefaults(defineProps<Props>(), {
  showDialog: false,
  width: 'auto',
  height: 'auto',
});
const emit = defineEmits(['isShowDialog']);
watch(
  () => props.showDialog,
  (newVal) => {
    showDialogStyle.value = newVal;
    setTimeout(() => {
        showDialog.value = newVal;
    }, 600);
  },
  { immediate: true }
);
const close = () => {
    showDialogStyle.value = false;
    setTimeout(() => {
        showDialog.value = false;
        emit('isShowDialog', showDialog.value);
    }, 600)
}

</script>
<style scoped lang="scss">
.login-dialog-overlay {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    background: rgba(0, 0, 0, 0.4);    
}

.login-dialog-area {
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

    .login-dialog-header-area {
        position: relative;
        height: 36px;
        text-align: center;
        overflow: hidden;
        line-height: 36px;
        width: 100%;
        color: #000000;
        font-size: 18px;

        .login-dialog-close {
            position: absolute;
            right: 14px;
            top: 16px;
            height: 20px;
            width: 20px;
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

    .login-dialog-content {
        min-height: 2rem;
        height: calc(100% - 36px);
    }
}

.dialog-show {
    animation: fadeIn 0.6s ease-out forwards;
    transform-origin: top;
}
.dialog-hide {
    animation: fadeOut 0.6s ease-out forwards;
    transform-origin: top; /* 设置动画的旋转点为顶部 */
}

.dialog-overlay-show {
    animation: fadeIn 0.6s ease-out forwards;
    transform-origin: top;
}
.dialog-overlay-hide {
    animation: fadeOut 0.6s ease-out forwards;
    transform-origin: top; /* 设置动画的旋转点为顶部 */
}
</style>