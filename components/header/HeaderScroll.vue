<template>
     <div class="loc-mc-box">
        <div class="loc-mc-box_wrap">
            <div class="loc-mc-box_row">
                <img src="@/assets/img/c7a907390880bacb3a4600c632c4607f8b0f57e3.png" class="loc-mc-box__pic"></div>
            <div class="loc-mc-box_row">
                <span class="loc-mc-box__text" :class="props.isDarkColor ? 'loc-mc-box__text--down' : ''">S14</span></div>
            </div>
    </div>
</template>
<script setup lang="ts">
interface Props {
    isDarkColor?: boolean // 是否显示为黑色
}
const props = withDefaults(defineProps<Props>(), {
    isDarkColor: false,
});
</script>
<style scoped lang="scss">
.loc-mc-box {
    width: 55px;
    height: 64px;
    display: flex;
    align-items: center;

    .loc-mc-box_wrap {
        height: 38px;
        width: 55px;
        overflow: hidden;
        position: relative;
        flex: 1;

        .loc-mc-box_row {
            position: absolute;
            height: 100%;
            width: 100%;
            .loc-mc-box__pic {
                height: 100%;
                width: auto;
            }
            .loc-mc-box__text {
                display: flex;
                height: 100%;
                line-height: 38px;
                font-size: 14px;
                justify-content: center;
                cursor: pointer;
                color: #ffffff;
            }
            .loc-mc-box__text--down {
                color: #000000;
            }
        }
    }

    .loc-mc-box_row:nth-child(1) {
        animation: anim1 8s linear infinite;
    }

    .loc-mc-box_row:nth-child(2) {
        top: 25px;
        animation: anim2 8s linear infinite;
    }
}

// 上下滚动动画
@keyframes anim1 {
    0% {
        top: 0;
        opacity: 1;
    }

    45% {
        top: 0;
        opacity: 1;
    }

    50% {
        top: -100%;
        opacity: 0;
    }

    51% {
        top: 100%;
        opacity: 0;
    }

    95% {
        top: 100%;
        opacity: 1;
    }

    96% {
        opacity: 1;
    }

    100% {
        top: 0;
        opacity: 1;
    }
}

@keyframes anim2 {
    0% {
        top: 100%;
        opacity: 0;
    }

    45% {
        top: 100%;
        opacity: 0;
    }

    50% {
        top: 0;
        opacity: 1;
    }

    95% {
        top: 0;
        opacity: 1;
    }

    100% {
        top: -100%;
        opacity: 0;
    }
}

</style>