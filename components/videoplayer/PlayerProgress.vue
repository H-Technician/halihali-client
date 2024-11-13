<template>
    <div class="player-progress-area">
        <div class="player-progress-wrap" 
        @mouseenter="handleMouseEnter" 
        @mouseleave="handleMouseLeave" 
        ref="progress" 
        @mousemove="onMouseMove">
            <div class="player-progress" 
            :class="isActive ? 'state-active' : ''">
                <div class="player-progress-move-indicator" 
                :class="isActive ? 'is_active' : ''"
                :style="`left: calc(${distanceToLeft}px - 7px)`"
                v-if="!props.isUpload">
                    <div class="player-progress-move-indicator-down">
                        <IconsCaretBottom class="icon-caretbottom"/>
                    </div>
                    <div class="player-progress-move-indicator-up">
                        <IconsCaretBottom class="icon-carettop"/>
                    </div>
                </div>
                <div class="player-progress-schedule-wrap">
                    <div class="player-progress-schedule">
                        <div class="player-progress-schedule-buffer player-progress-schedule-centent" :style="`transform: scaleX(${props.bufferPer});`"></div>
                        <div class="player-progress-schedule-current player-progress-schedule-centent" :style="`transform: scaleX(${currentPer});`"></div>
                    </div>
                    <div class="player-progress-schedule-dot" :style="`left: calc(${currentPerDot}% - 8px)`" v-show="isShowDot" :class="isActive ? 'show' : 'hide'">
                        <IconsPlayProgressDot class="icon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const progress = ref<HTMLDivElement | null>(null);
const isActive = ref(false);
const isDragging = ref(false);
const currentPer = ref(0.00001);
let inTimer: ReturnType<typeof setTimeout>; // 节流计时器
let outTimer: ReturnType<typeof setTimeout>;
const currentPerDot = ref(0);
const isShowDot = ref(false);
const distanceToLeft = ref(0);
const progressWidth = ref<number>(0);
const emit = defineEmits(['changeCurrent']);
interface Props {
    bufferPer?: number; // 缓存百分比 小数0~1
    currentPer?: number; // 当前进度百分比 小数0~1
    activing?: boolean; // 外部控制进度条粗细 也就是鼠标移动到进度条上面触发
    isUpload?: boolean; // 是否投稿模式
}
const props = withDefaults(defineProps<Props>(), {
    bufferPer: 0.00001,
    currentPer: 0.00001,
    activing: false,
    isUpload: false,
});
// 悬浮时的效果
const handleMouseEnter = ()  =>{
    if (progress.value) {
        progressWidth.value = progress.value.clientWidth;
    }
    clearTimeout(outTimer);
    isActive.value = true;
    inTimer = setTimeout(() => {
        isShowDot.value = true;
    }, 200);
}
const handleMouseLeave = () => {
    clearTimeout(inTimer);    // 清除显示计时器防止快速经过时的闪烁
    if (!isDragging.value) {
        outTimer = setTimeout(() => {
            isActive.value = false;
        }, 50);   
        outTimer = setTimeout(() => {
            isShowDot.value = false;
        }, 200);             
    }            
}
// 鼠标移动指位置
const onMouseMove = (event: MouseEvent) => {
  if (progress.value) {
    const containerRect = progress.value.getBoundingClientRect();
    distanceToLeft.value = Math.min(Math.max(0.5, event.clientX - containerRect.left), progressWidth.value - 3);
  }
};
// 鼠标按下事件处理程序
const handleMouseDown = (e: MouseEvent) => {
    if (!progress.value) return;
    isDragging.value = true;
    isActive.value = true;
    const offsetX = e.clientX - progress.value.getBoundingClientRect().left;
    const currPer = offsetX / progress.value.getBoundingClientRect().width;
    currentPer.value = currPer;
    currentPerDot.value = currPer * 100;
    emit("changeCurrent", currPer);
    addMouseMoveListeners();
};

// 移动端 触碰事件处理程序
const handleTouchStart = (e: TouchEvent) => {
    if (!progress.value) return;
    isDragging.value = true;
    isActive.value = true;
    const offsetX = e.touches[0].clientX - progress.value.getBoundingClientRect().left;
    const currPer = offsetX / progress.value.getBoundingClientRect().width;
    currentPer.value = currPer;
    currentPerDot.value = currPer * 100;
    emit("changeCurrent", currPer);
    addMouseMoveListeners();
};

// 鼠标移动监听
const addMouseMoveListeners = () => {
    if (!progress.value) return;
    progress.value.addEventListener("mousemove", handleMouseMove);
    progress.value.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleTouchEnd, { passive: true });
};

// 鼠标移动事件处理程序
const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.value) return;
    if (!progress.value) return;
    const offsetX = e.clientX - progress.value.getBoundingClientRect().left;
    let currPer = Math.min(Math.max(0.00001, offsetX / progress.value.getBoundingClientRect().width), 0.99999);
    currentPer.value = currPer;
    currentPerDot.value = currPer * 100;
    emit("changeCurrent", currPer);
};

// 移动端 移动事件处理程序
const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.value) return;
    if (!progress.value) return;
    e.preventDefault();
    const offsetX = e.touches[0].clientX - progress.value.getBoundingClientRect().left;
    let currPer = Math.min(Math.max(0.00001, offsetX / progress.value.getBoundingClientRect().width), 0.99999);
    currentPerDot.value = currPer * 100;
    currentPer.value = currPer;
    emit("changeCurrent", currPer);
};

// 监听鼠标释放事件处理程序
const handleMouseUp = () => {
    isDragging.value = false;
    removeMouseMoveListeners();
};

// 移动端 释放事件处理程序
const handleTouchEnd = () => {
    isDragging.value = false;
    isActive.value = false;
    removeMouseMoveListeners();
};

// 移除鼠标移动监听
const removeMouseMoveListeners = () => {
    if (!progress.value) return;
    progress.value.removeEventListener("mousemove", handleMouseMove);
    progress.value.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("touchend", handleTouchEnd);
};

// 监听 activing 的变化
watch(() => props.activing, (newValue) => {
    clearTimeout(outTimer); // 清除计时器
    isDragging.value = newValue;
    isActive.value = newValue;
});

// 监听 currentPer 的变化
watch(() => props.currentPer, (newValue) => {
    clearTimeout(outTimer); // 清除计时器
    currentPer.value = newValue;
    currentPerDot.value = newValue * 100;
});
onMounted(() =>{
    if (progress.value) {
        progress.value.addEventListener("mousedown", handleMouseDown);
        progress.value.addEventListener("touchstart", handleTouchStart, { passive: true });
    }
})
onUnmounted(() => {
    // 移除事件监听
    if (progress.value) {
        progress.value.removeEventListener("mousedown", handleMouseDown);
        progress.value.removeEventListener("touchstart", handleTouchStart);
        removeMouseMoveListeners();
    }
});
</script>

<style scoped lang="scss">
.player-progress-area {
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    box-sizing: border-box;

    .player-progress-wrap {
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        cursor: pointer;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 20px;
        // padding-bottom: 10px;

        .player-progress {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            height: 3px;
            position: relative;
            width: 100%;
            transition: all .2s linear;

            .player-progress-schedule-wrap {
                position: absolute;
                height: 100%;
                width: 100%;

                .player-progress-schedule-dot {
                    position: absolute;
                    bottom: -6.5px;
                    width: 20px;
                    height: 20px;

                    .icon {
                        width: 100%;
                        height: 100%;
                    }
                }
                .show {
                    animation: dot-in 0.6s ease-out forwards;
                    transform-origin: center;
                }
                .hide {
                    animation: dot-out 0.6s ease-out forwards;
                    transform-origin: center;
                }

                .player-progress-schedule {
                    background-color: hsla(0,0%,100%,.2);
                    bottom: 0;
                    left: 0;
                    overflow: hidden;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    right: 0;
                    top: 0;
                    border-radius: 4px;

                    .player-progress-schedule-buffer {
                        background-color: hsla(0,0%,100%,.3);
                    }

                    .player-progress-schedule-current {
                        background-color: var(--brand_blue);
                    }

                    .player-progress-schedule-centent {
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        right: 0;
                        top: 0;
                        -webkit-transform: scaleX(0);
                        transform: scaleX(0);
                        -webkit-transform-origin: 0 0;
                        transform-origin: 0 0;
                        border-radius: 4px;
                    }

                }
            }
            .player-progress-move-indicator {
                position: absolute;
                left: 40%;
                width: 10px;
                height: 30px;
                color: var(--brand_blue);
                transform: translateY(-1px);
                display: none;
                .player-progress-move-indicator-down {
                    width: 16px;
                    height: 16px;
                    
                    .icon-caretbottom {
                        width: 16px;
                        height: 16px;
                        fill: var(--brand_blue);
                        transform: translateY(2px);
                    }
                }
                .player-progress-move-indicator-up {
                    width: 16px;
                    height: 16px;

                    .icon-carettop {
                        width: 16px;
                        height: 16px;
                        fill: var(--brand_blue);
                        transform: translateY(-2px) rotate(180deg);
                    }
                }
            }

            .is_active {
                display: block;
            }
        }

        .state-active {
            height: 6px;
        }
    }
}
/* 淡入动画 */
@keyframes dot-in {
    0% {
        transform: scale(0, 0); /* 初始状态缩放为0 */
        opacity: 0; /* 初始状态透明 */
    }
    100% {
        transform: scale(1, 1); /* 缩放至原始尺寸 */
        opacity: 1; /* 最终状态不透明 */
    }
}
/* 淡出动画 */
@keyframes dot-out {
    0% {
        transform: scale(1, 1); /* 缩放至原始尺寸 */
        transform: translateY(1px);
        opacity: 1; /* 初始状态不透明 */   
    }
    100% {
        transform: scale(0, 0); /* 初始状态缩放为0 */
        opacity: 0; /* 最终状态透明 */
    }
}
</style>