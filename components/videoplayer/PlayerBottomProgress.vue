<template>
    <div class="player-progress-schedule" :style="`height: ${props.height}px;`">
        <div class="player-progress-schedule player-progress-schedule-buffer" :style="`transform: scaleX(${props.bufferPer * 100}%);`"></div>
        <div class="player-progress-schedule player-progress-schedule-current" :style="`transform: scaleX(${props.currentPer * 100}%);`"></div>
    </div>
</template>
<script setup lang="ts">
interface Props {
    bufferPer?: number; // 缓冲进度百分比 小数0~1
    currentPer?: number; // 当前进度百分比 小数0~1
    height?: number; // 进度条高度
}
const props = withDefaults(defineProps<Props>(), {
    bufferPer: 0.00001,
    currentPer: 0.00001,
    height: 2
});
</script>
<style scoped lang="scss">
.player-progress-schedule {
    width: 100%;
    // height: 2px;
    background-color: hsla(0,0%,100%,.2);
    overflow: hidden;;
    border-radius: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    .player-progress-schedule {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
    }
    .player-progress-schedule-buffer {
        background-color: hsla(0,0%,100%,.3);
    }
    .player-progress-schedule-current {
        background-color: var(--brand_blue);
    }

}
</style>