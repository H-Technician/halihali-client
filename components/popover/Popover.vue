<template>
    <div @mouseleave="handleMouseLeave" class="popover_wrap">
        <div @mouseenter="handleMouseEnter"  class="popover-area" @click="handleClick" ref="PopRef">
            <slot name="reference"></slot>
        </div>
        <div class="popover-area-box" :class="'to-' + placement" :style="props.popStyle">
            <div
                class="popover-area-content"
                ref="PopCon"
                :class="isPopoverShow ? 'popShow-' + placement : 'popHide-' + placement"
                :style="popoverDisplay ? 'display: block;' : 'display: none;'"
            >
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
let inTimer: ReturnType<typeof setTimeout>;  // 节流计时器
// 气泡框的显隐
const popoverDisplay = ref<boolean>(false);
const isPopoverShow = ref(false);
const PopRef = ref<HTMLElement | null>(null);
const PopCon = ref<HTMLElement | null>(null);
//定义popover显示回调
const emit = defineEmits(['isShowPopover']);

interface Props {
    placement?: string // 显示方向
    trigger?: 'hover' | 'click' // 触发方式 目前支持悬停hover、点击click
    popStyle?: string // 弹框样式
    isShowPopover?: boolean // 默认显示
}
const props = withDefaults(defineProps<Props>(), {
    placement: 'bottom',
    trigger: 'hover',
    popStyle: '',
    isShowPopover: false
});

const show = () => {
    popoverDisplay.value = true;
    isPopoverShow.value = true;
    emit('isShowPopover', true);
}
const hide = () => {
    isPopoverShow.value = false;
    emit('isShowPopover', false);
    setTimeout(() => {
        popoverDisplay.value = false;
    }, 200);
}

const handleMouseEnter = () => {
    if (props.trigger === "hover") {
        inTimer = setTimeout(() => {
            show();
        }, 100);
    }
}
const handleMouseLeave = () => {
    if (props.trigger === "hover") {
        clearTimeout(inTimer);
        hide();
    }
}
const handleClick = () =>{
    if (props.trigger === "click") {
        if (isPopoverShow.value) {
            hide();
        } else {
            show();
        }
    }
}
    // 点击空白处关闭气泡
const handleOutsideClick = (event: { target: MouseEvent | HTMLElement | any }) => {
    if (PopRef.value && PopCon.value) {
        if (!PopRef.value.contains(event.target) && !PopCon.value.contains(event.target)) {
            hide();
        }
    }
}
watch( () => props.isShowPopover, (newValue) => {
    if (!newValue) {
        hide();
    }
});

onMounted(() => {
    if (props.trigger === 'click') {
        window.addEventListener("click", handleOutsideClick);
    }
});

onBeforeUnmount(() => {
    if (props.trigger === 'click') {
        window.removeEventListener("click", handleOutsideClick);
    }
});

</script>

<style scoped lang="scss">
.popover_wrap {
    position: relative;
    .popover-area {
        position: relative;
    }
}
.popover-area-box {
    position: absolute;
    transition: .3s;
    z-index: 100;
}

.popover-area-content {
    background-color: #ffffff;
    border-radius: 10px;
    transform: translateZ(2px);
    box-shadow:
        0 6px 16px 0 rgba(0, 0, 0, 0.08),
        0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 9px 28px 8px rgba(0, 0, 0, 0.05);
}

.to-bottom {
    top: 100%;
    left: 50%;
}

.to-right {
    top: 50%;
    left: 200%;
}

.to-top {
    bottom: 100%;
    left: 50%;
}

.to-left {
    top: 50%;
    right: 100%;
}

.to-top, .to-bottom {
    transform: translate3d(-50%,0,0);   /* 水平左移半个元素身位，使其水平与父元素居中 */
}

.to-left, .to-right {
    transform: translate3d(0,-50%,0);   /* 垂直上移半个元素身位，使其垂直与父元素居中 */
}

.popHide-bottom {
    animation: fade-out-bottom 0.2s ease-out forwards;
    transform-origin: top; /* 设置动画的旋转点为顶部 */
}

.popShow-bottom {
    animation: fade-in-bottom 0.6s ease-out forwards;
    transform-origin: top;
}

/* 淡入动画 */
@keyframes fade-in-bottom {
    0% {
        opacity: 0; /* 初始状态透明 */
        transform: translateY(-1px); /* 向上平移 1px，将元素隐藏在顶部 */
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
        transform: translateY(-1px); /* 向上平移 1px，将元素隐藏在顶部 */
    }
}

.popHide-right {
    animation: fade-out-right 0.2s ease-out forwards;
    transform-origin: left;
}

.popShow-right {
    animation: fade-in-right 0.6s ease-out forwards;
    transform-origin: left;
}

/* 淡入动画 */
@keyframes fade-in-right {
    0% {
        opacity: 0;
        transform: translateX(-1px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

/* 淡出动画 */
@keyframes fade-out-right {
    0% {
        opacity: 1;
        transform: translateX(0);
    }
    100% {
        opacity: 0;
        transform: translateX(-1px);
    }
}

.popHide-top {
    animation: fade-out-top 0.2s ease-out forwards;
    transform-origin: bottom;
}

.popShow-top {
    animation: fade-in-top 0.6s ease-out forwards;
    transform-origin: bottom;
}

/* 淡入动画 */
@keyframes fade-in-top {
    0% {
        opacity: 0;
        transform: translateY(1px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 淡出动画 */
@keyframes fade-out-top {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(1px);
    }
}

.popHide-left {
    animation: fade-out-left 0.2s ease-out forwards;
    transform-origin: right;
}

.popShow-left {
    animation: fade-in-left 0.6s ease-out forwards;
    transform-origin: right;
}

/* 淡入动画 */
@keyframes fade-in-left {
    0% {
        opacity: 0;
        transform: translateX(1px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

/* 淡出动画 */
@keyframes fade-out-left {
    0% {
        opacity: 1;
        transform: translateX(0);
    }
    100% {
        opacity: 0;
        transform: translateX(1px);
    }
}
</style>