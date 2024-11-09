<template>
    <div class="header-banner" ref="headerBanner">
        <!-- 动画效果头图，文件资源版权归bilibili官方所有，本项目仅用作学习，无商业用途！ -->
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/bg.webp" class="bg">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/cloud.webp" class="cloud">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/city.webp" class="city">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/mountains.webp" class="mountains">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/signboards.webp" class="signboards">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/bushes.webp" class="bushes">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/big-cat.webp" class="big-cat">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/big-cat-eyes.webp" class="big-cat-eyes">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/big-cat-no-eyes.webp" class="big-cat-no-eyes">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/kitten.webp" class="kitten">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/payphone.webp" class="payphone">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/pole01.webp" class="pole01">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/lawn01.webp" class="lawn01">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/big-bushes.webp" class="big-bushes">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/pole02.webp" class="pole02">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/girl-bicycle02.webp" class="girl-bicycle02">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/girl-bicycle01.webp" class="girl-bicycle01">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/flower02.webp" class="flower02">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/big-flower.webp" class="big-flower">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/lawn02.webp" class="lawn02">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/flower01.webp" class="flower01">
        </div>
        <div class="header-banner__inner">
            <video src="~assets/img/bilibili_banner_spring/video-butterfly.webm" class="video-butterfly" autoplay loop
                muted></video>
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/twig.webp" class="twig">
        </div>
        <div class="header-banner__inner">
            <img src="~assets/img/bilibili_banner_spring/butterfly.webp" class="butterfly">
        </div>
        <div class="header-banner__logo">
            <a href="" class="logo-box">
                <picture class="banner-logo-box">
                    <source src="@/assets/img/home-header_banner-logo.webp" type="images/webp">
                    <img src="@/assets/img/home-header_banner-logo.png" alt="首页logo">
                </picture>
            </a>
        </div>
    </div>

</template>
<script setup lang="ts">
const headerBanner = ref<HTMLElement | null>(null);
const percentage = ref(0);
const startX = ref(0);
let intervalId:string | number | NodeJS.Timeout | undefined;  // 节流计时器 = null;
let intervalX: number = 0;
const mouseMove =  (event: MouseEvent) => {
    percentage.value += (event.clientX - startX.value);
    headerBanner.value?.style.setProperty('--percentage', percentage.value * 0.2 + 'px');
    startX.value = event.clientX;
}
const mouseOver =  (event: MouseEvent) => {
    document.addEventListener('mousemove', mouseMove);
    if (headerBanner.value) {
       headerBanner.value.addEventListener('mouseout', handleMouseOut);
    }
    startX.value = event.clientX;
}
const handleMouseOut = () => {
    document.removeEventListener('mousemove', mouseMove);
    if (intervalId) return;
    intervalId = setInterval(() => {
    if ((percentage.value < 100 && percentage.value <= 200) || percentage.value < -200) {
        intervalX = 10;
    } else if (percentage.value > 200 || percentage.value < -200){
        intervalX = 20;
    }
    if (percentage.value < 0 && percentage.value <= -10) {
        percentage.value += 10; // 每次增加 1
    } else if (percentage.value > 0 && percentage.value >= 10) {
        percentage.value -= 10; // 每次增加 1
    } else {
        percentage.value = 0;
      stopCounting(); // 达到 0 后停止计数
    }
    headerBanner.value?.style.setProperty('--percentage', percentage.value * 0.2 + 'px');
  }, 1); // 每 100 毫秒执行一次
}
const stopCounting = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = undefined;
  }
};
onMounted(() => {
    if (headerBanner.value) {
        headerBanner.value.addEventListener('mouseover', mouseOver);
    }
});
onBeforeUnmount(() => {
    if (headerBanner.value) {
        headerBanner.value.removeEventListener('mouseover', mouseOver);
        headerBanner.value.removeEventListener('mouseout', handleMouseOut);
    }
    document.removeEventListener('mousemove', mouseMove);
})
</script>

<style scoped lang="scss">
.header-banner {
    position: relative;
    z-index: 0;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0 auto;
    min-height: 155px;
    height: 9.375vw;
    max-height: 240px;
    height: 100%;
    width: 100%;
    background-color: #e3e5e7;
    background-position: center 0;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    // --percentage: 0.1;
    // animation: resetAnimation 0.5s forwards ease;

    .header-banner__inner {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;

        .bg {
            width: 2000px;
            height: 187px;
            transform: translate(0px, 0px) rotate(0deg) scale(1);
        }

        .cloud {
            height: 187px;
            width: 2000px;
            transform: translate(0px, calc(var(--percentage) * 0.1)) rotate(0deg) scale(1);
        }

        .city {
            height: 224.4px;
            width: 2400px;
            transform: translate(calc(var(--percentage) + 300px), 24px) rotate(0deg) scale(1);
        }

        .mountains {
            height: 205.7px;
            width: 2200px;
            transform: translate(calc(var(--percentage) + 330px), 33px) rotate(0deg) scale(1);
        }

        .signboards {
            height: 187px;
            width: 2000px;
            transform: translate(var(--percentage), 15px) rotate(0deg) scale(1);
        }

        .bushes {
            height: 187px;
            width: 2000px;
            transform: translate(var(--percentage), 15px) rotate(0deg) scale(1);
        }

        .big-cat {
            height: 187px;
            width: 2000px;
            transform: translate(var(--percentage), 15px) rotate(0deg) scale(1);
        }

        .big-cat-eyes {
            height: 187px;
            width: 2000px;
            transform: translate(var(--percentage), 15px) rotate(0deg) scale(1);
        }

        .big-cat-no-eyes {
            height: 187px;
            width: 2000px;
            transform: translate(var(--percentage), 15px) rotate(0deg) scale(1);
        }

        .kitten {
            height: 187px;
            width: 2000px;
            transform: translate(var(--percentage), 15px) rotate(0deg) scale(1);
        }

        .payphone {
            height: 187px;
            width: 2000px;
            transform: translate(var(--percentage), 15px) rotate(0deg) scale(1);
        }

        .pole01 {
            height: 187px;
            width: 2000px;
            transform: translate(calc(var(--percentage) + 100px), 15px) rotate(0deg) scale(1);
        }

        .lawn01 {
            height: 187px;
            width: 2000px;
            transform: translate(var(--percentage), 15px) rotate(0deg) scale(1);
        }

        .big-bushes {
            height: 187px;
            width: 2000px;
            transform: translate(var(--percentage), 10px) rotate(0deg) scale(1);
        }

        .pole02 {
            height: 187px;
            width: 2000px;
            transform: translate(var(--percentage), 15px) rotate(0deg) scale(1);
        }

        .girl-bicycle02 {
            height: 187px;
            width: 2000px;
            transform: translate(var(--percentage), 15px) rotate(0deg) scale(1);
        }

        .girl-bicycle01 {
            height: 187px;
            width: 2000px;
            transform: translate(var(--percentage), 15px) rotate(0deg) scale(1);
        }

        .flower02 {
            height: 187px;
            width: 2000px;
            transform: translate(calc(var(--percentage) - 100px), 15px) rotate(0deg) scale(1);
        }

        .big-flower {
            height: 168.3px;
            width: 1800px;
            transform: translate(calc(var(--percentage) - 90px), 0px) rotate(0deg) scale(1);
        }

        .lawn02 {
            height: 187px;
            width: 2000px;
            transform: translate(var(--percentage), 0px) rotate(0deg) scale(1);
        }

        .flower01 {
            height: 187px;
            width: 2000px;
            transform: translate(var(--percentage), 0px) rotate(0deg) scale(1);
        }

        .video-butterfly {
            object-fit: cover;
            height: 100px;
            width: 180px;
            transform: translate(-245px, 15px) rotate(0deg) scale(1);
        }

        .twig {
            height: 205.7px;
            width: 2200px;
            transform: translate(var(--percentage), 0px) rotate(0deg) scale(1);
        }

        .butterfly {
            height: 187px;
            width: 2000px;
            transform: translate(var(--percentage), 15px) rotate(0deg) scale(1);
        }
    }

    .header-banner__logo {
        position: relative;
        width: 100%;
        max-width: 2078px;
        margin: 0 auto;
        display: flex;
        pointer-events: none;

        .logo-box {
            text-decoration: none;
            display: block;

            .banner-logo-box {
                position: absolute;
                height: 65px;
                width: auto;
                margin-top: 60px;
                margin-left: 50px;
                pointer-events: all;

                img {
                    height: 65px;
                    width: auto;
                    cursor: pointer;
                }

            }
        }
    }
}
</style>