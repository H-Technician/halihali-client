<template>
    <div class="hl-header__banner" ref="headerBanner">
        <div class="animated-banner" :class="islazying ? 'islazying' : ''">
            <div class="layer">
                <img src="@/assets/img/hl_banner/18e14b236c8c0478b9f126b53dc149718c8277d6.png@1c.webp" :style="`height: ${layerHeight}px; 
                    width: ${layerWidth}px; 
                    transform: translate(0px, 0px) rotate(0deg) scale(1); 
                    opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/2c048730ce3449400cd657650f5f2e68e2fa5ef5.png@1c.webp" :style="`height: ${layerHeight}px; 
                    width: ${layerWidth}px; 
                    transform: translate(${percentage * 0.03}px, 0px) rotate(0deg) scale(1); 
                    opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/582b9609daf669327c460af63776f5f0c14b5c26.png@1c.webp" :style="`height: ${layerHeight}px; 
                    width: ${layerWidth}px; 
                    transform: translate(${percentage * 0.04}px, 0px) rotate(0deg) scale(1); 
                    opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/f5fcc108b811577571e3f54d6d46df58a9f553ed.png@1c.webp" :style="`height: ${layerBigHeight}px; 
                    width: ${layerBigWidth}px; 
                    transform: translate(${percentage * 0.08}px, 0px) rotate(0deg) scale(1); 
                    opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/4367bada261c826302101afa18fe41e86f545099.png@1c.webp" :style="`height: ${layerHeight}px; 
                    width: ${layerWidth}px; 
                    transform: translate(${percentage * 0.08}px, 0px) rotate(0deg) scale(1); 
                    opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/0ebcccd16a9fe9bb551e213de4eaf3cd5a24c8ff.png@1c.webp" :style="`height: ${layerHeight}px; 
                    width: ${layerWidth}px; 
                    transform: translate(${percentage * 0.08}px, 0px) rotate(0deg) scale(1); 
                    opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/21a613a7457891ed7daa559b03191df7bf551362.png@1c.webp" :style="`height: ${layerHeight}px; 
                    width: ${layerWidth}px; 
                    transform: translate(${percentage * 0.2 + 104}px, 0px) rotate(0deg) scale(1); 
                    opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/83b58af34fc683e529962449078a3ded7f1d2e80.png@1c.webp" :style="`height: ${layerHeight}px; 
                    width: ${layerWidth}px; 
                    transform: translate(${percentage * 0.08}px, 0px) rotate(0deg) scale(1); 
                    opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/6683112849dadee65749c4f7f72b83c9a9f8f537.png@1c.webp" :style="`height: ${layerHeight}px; 
                    width: ${layerWidth}px; 
                    transform: translate(${percentage * 0.08}px, 0px) rotate(0deg) scale(1); 
                    opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/93ab310ca3e2a24489aa1873865501adb3f81393.png@1c.webp" :style="`height: ${layerHeight}px; 
                    width: ${layerWidth}px; 
                    transform: translate(${percentage * 0.08 + 10.4}px, 0px) rotate(0deg) scale(1); 
                    opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/064a75156c568aa6a9982e2c983d2a30cb86ea94.png@1c.webp" :style="`height: ${layerHeight}px; 
                    width: ${layerWidth}px; 
                    transform: translate(${percentage * 0.08}px, 0px) rotate(0deg) scale(1); 
                    opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/7bb79a88a5c61724c7fd2ab009f462b744ba5b29.png@1c.webp" :style="`height: ${layerBigHeight}px; 
                    width: ${layerBigWidth}px; 
                    transform: translate(${percentage * 0.082}px, 0px) rotate(0deg) scale(1); 
                    opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/1b6718fe3996574889da7ef1b9c29a566fe963f4.png@1c.webp" :style="`height: ${layerMBigHeight}px; 
                    width: ${layerMBigWidth}px; 
                    transform: translate(${percentage * 0.082}px, 1.08px) rotate(0deg) scale(1); 
                    opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/c31995a7a80e459e165ae4ef60e323e27f497420.png@1c.webp" :style="`height: ${layerHeight}px; 
                    width: ${layerWidth}px; 
                    transform: translate(${percentage * 0.08}px, 0px) rotate(0deg) scale(1); 
                    opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/4a66f79212d4c6182a8e10a1eb0424f3d7c79120.png@1c.webp" :style="`height: ${layerHeight}px; 
                    width: ${layerWidth}px; 
                    transform: translate(${percentage * 0.08}px, 0px) rotate(0deg) scale(1); 
                    opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/30ccbdfe561bcd18a7ee457bd151b55da7a3dd3c.png@1c.webp" :style="`height: ${layerHeight}px; 
                    width: ${layerWidth}px; 
                    transform: translate(${percentage * 0.1}px, -10.4px) rotate(0deg) scale(1); 
                    opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/20ccfde3e5606d223ab230a78234e4f9ac140371.png@1c.webp"
                    :style="`height: ${layerHeight === 1664 ? 67.08 : (67.08 / 156) * layerHeight}px; 
                    width: ${layerHeight === 1664 ? 104 : (104 / 156) * layerHeight}px; 
                    transform: translate(${percentage * 0.15 + 260}px, ${-percentage * 0.002 + 10.4}px) 
                    rotate(${ percentage / layerWidth * 360 * 0.1}deg) scale(${-percentage * 0.0001 + 1}); opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/d562864113a6e6cce54b41745132a974b4576c3c.png@1c.webp"
                    :style="`height: ${layerHeight === 1664 ? 85.28 : (85.28 / 156) * layerHeight}px; 
                    width: ${layerHeight === 1664 ? 133.12 : (133.12 / 156) * layerHeight}px; 
                    transform: translate(${percentage * 0.15 + 104}px, 10.4px) rotate(0deg) scale(1); opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/ab4fbaed481d880a618e52f97e7e1f6e5c8b7f7c.png@1c.webp"
                    :style="`height: ${layerHeight}px; width: ${layerWidth}px; 
                    transform: translate(${percentage * 0.1}px, 0px) rotate(0deg) scale(1); opacity: 1;`">
            </div>
            <div class="layer">
                <video src="@/assets/img/hl_banner/3fb795f6-c494-4584-a448-4f6713d43211.webm" autoplay loop muted
                    :style="`object-fit: cover; height: ${layerHeight}px; width: ${layerWidth}px; 
                    transform: translate(${percentage * 0.1}px, 10.4px) rotate(0deg) scale(1); opacity: 1;`"></video>
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/57f20e919517fc784f1e03900140274cfea2cb85.png@1c.webp"
                    :style="`height: ${layerHeight}px; width: ${layerWidth}px; transform: 
                    translate(${percentage * 0.1}px, 0px) rotate(0deg) scale(1); opacity: 1;`">
            </div>
            <div class="layer">
                <img src="@/assets/img/hl_banner/670d70b0351582e5b53855ddbf50600c03425062.png@1c.webp"
                    :style="`height: ${layerHeight}px; width: ${layerWidth}px; 
                    transform: translate(${percentage * 0.1}px, 0px) rotate(0deg) scale(1); opacity: 1;`">
            </div>
        </div>
        <div class="header-banner__inner" :class="islazying ? 'islazying' : ''">
            <a href="" class="inner-logo">
                <img src="@/assets/img/home-header_banner-logo.png" alt="logo" class="logo-img">
            </a>
        </div>
    </div>
</template>
<script setup lang="ts">
const headerBanner = ref<HTMLElement | null>(null); // 头部banner容器
const startX = ref(0);
const percentage = ref(0);
const layerWidth = ref(1664);
const layerHeight = ref(156);
const layerBigWidth = ref(1696);
const layerBigHeight = ref(159);
const layerMBigWidth = ref(1728);
const layerMBigHeight = ref(162);
const observer = ref();
const islazying = ref(true);
interface Props {
    isHovering?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    isHovering: false,
});
const mouseMove = (event: MouseEvent) => {
    event.preventDefault();
    if (startX.value !== 0) {
        percentage.value += (event.clientX - startX.value);
    }
    startX.value = event.clientX;
}
// const mouseOver = (event: MouseEvent) => {
//     document.addEventListener('mousemove', mouseMove);
//     if (headerBanner.value) {
//         headerBanner.value.addEventListener('mouseout', handleMouseOut);
//     }
//     startX.value = event.clientX;
// }
// const handleMouseOut = (event: MouseEvent) => {
//     const target = event.relatedTarget as Node | null;
//     document.removeEventListener('mousemove', mouseMove);
//     smoothToZero(500);
// }
const handleResize = (entries: ResizeObserverEntry[]) => {
    const matchingEntry = entries.find(entry => entry.target === headerBanner.value);
    if (matchingEntry) {
        if (matchingEntry.contentRect.width > 1664) {
            layerWidth.value = matchingEntry.contentRect.width;
            layerHeight.value = matchingEntry.contentRect.height;
            layerBigWidth.value = 1696 / 1664 * matchingEntry.contentRect.width;
            layerBigHeight.value = 159 / 156 * matchingEntry.contentRect.height;
            layerMBigWidth.value = 1728 / 1664 * matchingEntry.contentRect.width;
            layerMBigHeight.value = 162 / 156 * matchingEntry.contentRect.height;
        } else {
            layerWidth.value = 1664;
            layerHeight.value = 156;
            layerBigWidth.value = 1696;
            layerBigHeight.value = 159;
            layerMBigWidth.value = 1728;
            layerMBigHeight.value = 162;
        }
    }
};
const smoothToZero = (duration: number) => {
  const startTime = performance.now();
  const startValue = percentage.value;

  const animate = () => {
    const currentTime = performance.now();
    const progress = Math.min((currentTime - startTime) / duration, 1);
    percentage.value = startValue * (1 - progress);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  animate();
};
watch(() => props.isHovering,
    (newValue, oldValue) => {
    if (newValue) {
        document.addEventListener('mousemove', mouseMove);
        startX.value = 0;
    } else {
        document.removeEventListener('mousemove', mouseMove);
        smoothToZero(300);
    }
});
onMounted(() => {
    // if (headerBanner.value) {
    //     headerBanner.value.addEventListener('mouseover', mouseOver);
    // }
    observer.value = new ResizeObserver(handleResize);
    if (headerBanner.value) {
        observer.value.observe(headerBanner.value);
    }
    islazying.value = false;
});
onBeforeUnmount(() => {
    // if (headerBanner.value) {
    //     headerBanner.value.removeEventListener('mouseover', mouseOver);
    //     headerBanner.value.removeEventListener('mouseout', handleMouseOut);
    // }
    document.removeEventListener('mousemove', mouseMove);
    observer.value.unobserve(headerBanner.value);
})
</script>
<style lang="scss" scoped>
.hl-header__banner {
    position: relative;
    z-index: 0;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0 auto;
    min-width: 1000px;
    min-height: 155px;
    height: 9.375vw;
    max-height: 240px;
    background-color: #e3e5e7;
    background-position: center 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(180deg,rgba(0, 0, 0, .7) 0%, rgba(0, 0, 0, 0)  100%);

    .animated-banner {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        opacity: 1;
        transition: opacity 0.5s ease;
        transition: all 0.5s ease;

        .layer {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .islazying {
        opacity: 0 !important;
    }

    .header-banner__inner {
        display: flex;
        align-items: flex-end;
        position: relative;
        width: 100%;
        max-width: 2078px;
        margin: 0 auto;
        opacity: 1;
        transition: opacity 0.5s ease;

        .inner-logo {
            margin-bottom: 10px;
            z-index: 1;
            display: inline-block;
            min-height: 60px;
            width: 180px;
            height: 50%;

            .logo-img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
}

@media (max-width: 1099.9px) {
    .hl-header__banner .header-banner__inner {
        padding: 0 56px;
    }
}

@media (min-width: 1100px) and (max-width: 1366.9px) {
    .hl-header__banner .header-banner__inner {
        padding: 0 56px;
    }
}

@media (min-width: 1367px) and (max-width: 1700.9px) {
    .hl-header__banner .header-banner__inner {
        padding: 0 64px;
    }
}

@media (min-width: 1701px) and (max-width: 2199.9px) {
    .hl-header__banner .header-banner__inner {
        padding: 0 96px;
        max-width: 2270px;
    }
}

@media (min-width: 2200px) {
    .hl-header__banner .header-banner__inner {
        max-width: 2078px;
    }
}
</style>