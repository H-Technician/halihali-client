<template>
    <div class="player-ctrl-volume-box">
        <div class="player-ctrl-volume-number">{{ props.isMuted ? 0 : Math.round(props.volume * 100) }}</div>
        <div class="player-ctrl-volume-progress">
            <div class="volume-progress-slider" ref="volumeSlider">
                <div class="bui-bar-wrap">
                    <div class="bui-bar" 
                    :style="{ height: `${props.volume === 0 || 
                        props.isMuted ? 0 : props.volume * 100}%` }">
                    </div>
                </div>
                <div class="bui-thumb">
                    <div class="bui-thumb-dot" 
                    :style="{ bottom: `calc(${props.volume === 0 || 
                        props.isMuted ? 0 : props.volume * 100}% - 6px)` }">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const volumeSlider = ref<HTMLDivElement | null>(null);
const isDragging = ref(false);
const emit = defineEmits(['updateVolume']);
interface Props {
    volume?: number, // 音量
    isMuted?: boolean // 是否静音
}
const props = withDefaults(defineProps<Props>(), {
    volume: 0,
    isMuted: false,
});
// 鼠标按下事件处理程序
const handleMouseDown = (e: MouseEvent) => {
    if (!volumeSlider.value) return;
    isDragging.value = true;
    const offsetY = volumeSlider.value.getBoundingClientRect().bottom - e.clientY;
    const currPer = offsetY / volumeSlider.value.getBoundingClientRect().height;
    // 边界值判定
    const clampedCurrPer = Math.max(0, Math.min(1, currPer));
    emit('updateVolume', clampedCurrPer);
    addMouseMoveListeners();
};
// 移动端 触摸事件处理程序
const handleTouchStart = (e: TouchEvent) => {
    if (!volumeSlider.value) return;
    isDragging.value = true;
    const offsetY = volumeSlider.value.getBoundingClientRect().bottom - e.touches[0].clientY;
    const currPer = offsetY / volumeSlider.value.getBoundingClientRect().height;
    // 边界值判定
    const clampedCurrPer = Math.max(0, Math.min(1,currPer));
    emit('updateVolume', clampedCurrPer);
    addMouseMoveListeners();
};

// 鼠标移动事件处理程序
const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.value) return;
    if (!volumeSlider.value) return;
    const offsetY = volumeSlider.value.getBoundingClientRect().bottom - e.clientY;
    const currPer = offsetY / volumeSlider.value.getBoundingClientRect().height;
    // 边界值判定
    const clampedCurrPer = Math.max(0, Math.min(1, currPer));
    emit('updateVolume', clampedCurrPer);
};
// 移动端 触摸事件处理程序
const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.value) return;
    if (!volumeSlider.value) return;
    const offsetY = volumeSlider.value.getBoundingClientRect().bottom - e.touches[0].clientY;
    const currPer = offsetY / volumeSlider.value.getBoundingClientRect().height;
    // 边界值判定
    const clampedCurrPer = Math.max(0, Math.min(1, currPer));
    emit('updateVolume', clampedCurrPer);
};
// 鼠标释放事件处理程序
const handleMouseUp = () => {
    isDragging.value = false;
    removeMouseMoveListeners();
};

// 移动端 释放事件处理程序
const handleTouchEnd = () => {
    isDragging.value = false;
    removeMouseMoveListeners();
};

// 添加鼠标移动监听
const addMouseMoveListeners = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleTouchEnd, { passive: true });
};

// 移除鼠标移动监听
const removeMouseMoveListeners = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("touchend", handleTouchEnd);
};

onMounted(() => {
  if (volumeSlider.value) {
    volumeSlider.value.addEventListener("mousedown", handleMouseDown);
    volumeSlider.value.addEventListener("touchstart", handleTouchStart, { passive: true });
  }
});

onBeforeUnmount(() => {
  if (volumeSlider.value) {
    volumeSlider.value.removeEventListener("mousedown", handleMouseDown);
    volumeSlider.value.removeEventListener("touchstart", handleTouchStart);
    removeMouseMoveListeners();
  }
});
</script>
<style scoped lang="scss">
.player-ctrl-volume-box {
    height: 120px;
    width: 38px;
    background: hsla(0, 0%, 8%, .9);
    border-radius: 2px;
    .player-ctrl-volume-number {
        color: #FFFFFF;
        font-size: 13px;
        height: 32px;
        line-height: 28px;
        margin-bottom: 2px;
        text-align: center;
        width: 100%;
    }
    .player-ctrl-volume-progress {
        height: 70px;
        margin: 0 auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        .volume-progress-slider {
            height: 100%;
            width: 2px;
            position: relative;
            .bui-bar-wrap {
                position: absolute;
                width: 100%;
                bottom: 0;
                height: 100%;
                background: #FFFFFF;
                border-radius: 2px;
                .bui-bar {
                    position: absolute;
                    width: 100%;
                    bottom: 0;
                    background: var(--brand_blue);
                }
            }
            .bui-thumb {
                position: absolute;
                width: 100%;
                bottom: 0;
                height: 100%;
                cursor: pointer;
                .bui-thumb-dot {
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    background: var(--brand_blue);
                    border-radius: 50%;
                    left: -5px;
                    cursor: pointer;
                    //transform: translateX(-42%);
                }
            }
        }
    }
}
</style>