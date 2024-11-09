<template>
    <div class="avatar-popover_warp" @mouseleave="handleMouseLeave">
        <div class="avatar-popover-box" @mouseenter="handleMouseEnter">
            <slot name="reference"></slot>
        </div>
        <div class="avatar-popover-area" :style="props.popStyle">
            <div
                class="avatar-popover-content"
                ref="PopCon"
                :class="isPopoverShow ? 'avatar-popover-show' : 'avatar-popover-hide'"
                :style="popoverDisplay ? 'display: block;' : 'display: none;' "
            >
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
let inTimer: ReturnType<typeof setTimeout>;  // 节流计时器
// 气泡框的显隐
const popoverDisplay = ref(false);
const isPopoverShow = ref(false);
//定义popover显示回调
const emit = defineEmits(['isShowPopover']);
interface Props {
    popStyle?: string // 是否固定显示
}
const props = withDefaults(defineProps<Props>(), {
    popStyle: '',
});

const show = () => {
    popoverDisplay.value = true;
    isPopoverShow.value = true;
    emit('isShowPopover', true);
}
const hide = () => {
    isPopoverShow.value = false;
    setTimeout(() => {
        popoverDisplay.value = false;
    }, 300);
}

const handleMouseEnter = () => {
    inTimer = setTimeout(() => {
        show();
    }, 300);
}
const handleMouseLeave = () => {
    clearTimeout(inTimer);
    emit('isShowPopover', false);
    hide();
}

</script>

<style scoped lang="scss">
.avatar-popover_warp {
    position: relative;
}
.avatar-popover-box {
    position: relative;
}
.avatar-popover-area {
    position: absolute;
    transition: .3s;
    z-index: 1;
    top: 100%;
    left: 50%;
    transform: translate3d(-50%,0,0);   /* 水平左移半个元素身位，使其水平与父元素居中 */
}

.avatar-popover-content {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow:
        0 6px 16px 0 rgba(0, 0, 0, 0.08),
        0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 9px 28px 8px rgba(0, 0, 0, 0.05);
    transform: translateZ(2px);
    transition: all 0.3s ease-out;
}

.avatar-popover-hide {
    animation: fade-out-bottom 0.5s ease forwards;
    transform-origin: top; /* 设置动画的旋转点为顶部 */
}

.avatar-popover-show {
    animation: fade-in-bottom 0.5s ease-in-out forwards;
    transform-origin: top;
}

/* 淡入动画 */
@keyframes fade-in-bottom {
    0% {
        opacity: 0; /* 初始状态透明 */
        transform: translateY(-4px); /* 向上平移 4px，将元素隐藏在顶部 */
    }
    100% {
        opacity: 1; /* 最终状态不透明 */
        transform: translateY(0); /* 平移恢复到原始位置 */
    }
}

/* 淡出动画 */
@keyframes fade-out-bottom {
    0% {
        opacity: 1; /* 初始状态不透明 */
        transform: translateY(0);   /* 原始位置 */
    }
    100% {
        opacity: 0; /* 最终状态透明 */
        transform: translateY(-4px); /* 向上平移 4px，将元素隐藏在顶部 */
    }
}
</style>