<template>
    <Title>哈哩哈哩 (゜-゜)つロ 干杯~-halihali</Title>
    <div class="hl-index_wrap" ref="indexWrapRef">
        <div class="hl-header" ref="headerWrapRef" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
            <!-- 头部 -->
            <HeaderBar :isindex="true" :isFixedHeader="isFixedHeader" />
            <HomebannerBanner :isHovering="isHovering" />
            <IndexChannelFixed :style="isOPenChannelFixed ? ''
                : 'display: none;'" />
            <IndexChannel ref="channelRef" />
        </div>
        <!-- 主体布局 -->
        <div class="layout-container">
            <div class="feed_floor">
                <div class="recommended-container_floor-aside">
                    <div class="recommended-swipe">
                        <IndexSwiper />
                    </div>
                    <div class="feed-video__card" v-for="(item, index) in videoList?.slice(0, 13)" :key="item.id"
                        :title="item.id">
                        <VideocardsVideoCard />
                    </div>
                    <!-- <div class="floor-single-card" key="第一个卡片">
                <VideocardsFloorCard />
            </div> -->
                    <div class="floor-single-card" v-for="(item, index) in homeCardList"
                        :key="item?.cardType === 'video' ? item.VideoCardData?.id : item?.FloorCardData?.id + 'floor-card'"
                        :title="item?.cardType === 'video' ? item.VideoCardData?.title : item?.FloorCardData?.title">
                        <VideocardsVideoCard v-if="item?.cardType === 'video'" :isClient="true" />
                        <VideocardsFloorCard v-else />
                    </div>
                </div>
                <div class="fixed-roll-btn">
                    <div class="roll-btn" @click=" refreshTime++;">
                        <IconsVideocardRefresh :style="`transform: rotate(${refreshTime * 360}deg);`" :size="20"
                            class="refresh-icon" />
                        <span>换一换</span>
                    </div>
                </div>
                <Transition name="palette">
                    <div class="palette-button-wrap" v-show="showPalette">
                        <div class="flexible-roll-btn">
                            <div class="flexible-roll-btn-inner expand-btn">
                                <IconsTopBtn />
                                <div class="btn-text">
                                    <span class="btn-text-inner">
                                        刷新内容
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="backtop-btn-wrap" ref="backtopRef" @click="onBackTop">
                            <div class="hui-backtop">
                                <span class="backtop-icon">
                                    <IconsTop />
                                </span>
                                <span class="backtop-description">
                                    <span>顶部</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import type { VideoData, HomeCard } from '@/types/video';
import IndexChannel from '@/components/index/Channel.vue';
import videoListJson from '@/assets/json/homevideolist.json';
const oldScrollTop = ref<number>(0); // 记录上一次滚动结束后的滚动距离
const scrollTop = ref<number>(0); // 记录当前的滚动距离
const indexWrapRef = ref<HTMLDivElement | null>(null); // 获取滚动容器
const headerWrapRef = ref<HTMLDivElement | null>(null); // 获取滚动容器
const channelRef = ref<InstanceType<typeof IndexChannel> | null>(null);
const bodyScrollTopH = ref<number>(0);
const isFixedHeader = ref(false);
const refreshTime = ref(0);
const isOPenChannelFixed = ref(false);
const isHovering = ref(false);
const videoList = ref<VideoData[]>([]);
const homeCardList = ref<HomeCard[]>([]);
const screenWidth = ref<number>(0);
const itemColumn = ref<number>(0);
videoList.value = videoListJson;
const combinedVideoItems = () => {
    if (!videoList.value) return;
    let newHomeCardList = [];
    for (let flIndex = 0; flIndex < Math.floor(videoList.value.length / itemColumn.value); flIndex++) {
        const cardItem: HomeCard = {
            cardType: 'floor',
            FloorCardData: videoList.value[flIndex],
        }
        newHomeCardList.push(cardItem);
        for (let vIndex = 0; vIndex < itemColumn.value; vIndex++) {
            const cardItem: HomeCard = {
                cardType: 'video',
                VideoCardData: videoList.value[vIndex + flIndex * itemColumn.value],
            }
            newHomeCardList.push(cardItem);
        }
    }
    homeCardList.value = newHomeCardList;
}

const scrollHandle = () => {
    scrollTop.value = window.scrollY; //滚动条距离浏览器顶部高度
    if (!bodyScrollTopH.value && indexWrapRef.value) {
        bodyScrollTopH.value = indexWrapRef.value.offsetHeight;
    }
}
const onBackTop = () => {
    if (indexWrapRef.value) {
        indexWrapRef.value.scrollIntoView({ behavior: 'smooth' });
    }
}
const showPalette = computed(() => {
    return oldScrollTop.value >= 400;
});
const handleMouseOver = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (channelRef.value && headerWrapRef.value && channelRef.value.channelElementRef && !channelRef.value.channelElementRef.contains(target) &&
        headerWrapRef.value.contains(target) && !isHovering.value) {
        isHovering.value = true;
        // console.log('鼠标移入');
    }
};

const handleMouseOut = (event: MouseEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement | null;

    if (channelRef.value && channelRef.value.channelElementRef) {
        if (relatedTarget && channelRef.value.channelElementRef.contains(relatedTarget) && isHovering.value
            || event.currentTarget instanceof HTMLElement && !(event.currentTarget as HTMLElement).contains(relatedTarget) && isHovering.value) {
            isHovering.value = false;
            //   console.log('鼠标移出区域');
        }
    }
};
const handleResize = () => {
    screenWidth.value = window.innerWidth;
    if (window.innerWidth < 1367) {
        itemColumn.value = 3;
    } else if (window.innerWidth >= 1367 && window.innerWidth < 2200) {
        itemColumn.value = 4;
    } else {
        itemColumn.value = 5;
    }
};
watch(() => scrollTop.value,
    (newValue, oldValue) => {
        if (newValue === window.scrollY) {
            // 延时执行后当newValue等于window.scrollY，代表滚动结束
            oldScrollTop.value = newValue; // 每次滚动结束
            if (oldScrollTop.value > 80) {
                isFixedHeader.value = true;
                if (oldScrollTop.value > 200) {
                    isOPenChannelFixed.value = true;
                } else {
                    isOPenChannelFixed.value = false;
                }
            } else {
                isFixedHeader.value = false;
            }
        }
    }
);
watch(() => itemColumn.value, () => {
    combinedVideoItems();
});
onBeforeMount(() => {
    // window.scrollTo(0, 0);
});
onMounted(() => {
    document.addEventListener('scroll', scrollHandle);
    window.addEventListener('resize', handleResize);
    handleResize();
    combinedVideoItems();
});
onBeforeUnmount(() => {
    document.removeEventListener('scroll', scrollHandle)
    window.removeEventListener('resize', handleResize);
});
</script>
<style scoped lang="scss">
.hl-index_wrap {
    position: absolute;
    margin: 0 auto;
    width: 100%;
    max-width: 2560px;
    background-color: #ffffff;
    overflow: hidden;
    min-width: 1058px;
    scroll-behavior: smooth;
}

.hl-header {
    background-color: #fff;
    min-height: 64px;
    margin: 0 auto;
    width: 100%;
    color: #000;
    min-width: 1058px;
}

.layout-container {
    // display: grid;
    // box-sizing: border-box;
    margin: 0 auto;
    width: 100%;
    background-color: #ffffff;
    // gap: 20px;
    scroll-behavior: smooth;
    max-width: calc(1980px + 2 * var(--layout-padding));
    padding: 0 var(--layout-padding);
    // margin-bottom: 40px;
}

.layout-container .feed_floor {
    // position: relative;
    width: 100%;
    margin-bottom: 40px;
}

.recommended-container_floor-aside {
    display: grid;
    box-sizing: border-box;
    // margin: 0 auto;
    width: 100%;
    background-color: #ffffff;
    gap: 20px;
    // scroll-behavior: smooth;
    // max-width: calc(1980px + 2 * var(--layout-padding));
    // padding: 0 var(--layout-padding);
    // margin-bottom: 40px;
}

.recommended-container_floor-aside>*:nth-of-type(n + 16) {
    margin-top: 22px;
}


.recommended-container_floor-aside .recommended-swipe,
.recommended-container_floor-aside .feed-video__card,
.recommended-container_floor-aside .floor-single-card {
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin: 0;

}

// .floor-single-card {
//     &:nth-of-type(n + 6) {
//         margin-top: 40px;
//     }
// }

.recommended-swipe {
    grid-row: 1/3;
    grid-column: 1/3;

}

@media (max-width: 1099.9px) {
    .recommended-container_floor-aside {
        grid-template-columns: repeat(4, 1fr);
        width: 1020px
    }

    .recommended-container_floor-aside>*:nth-of-type(n + 6) {
        margin-top: 40px;
    }

    // .layout-container > *:nth-of-type(n + 16) {
    //     margin-top: 22px;
    // }

    // .layout-container .feed-video__card:nth-of-type(n + 6) {
    //     margin-top: 40px;
    // }

    // .layout-container .feed-video__card:nth-of-type(n + 10) {
    //     margin-top: 22px;
    // }

    .recommended-container_floor-aside .feed-video__card:nth-of-type(n + 9) {
        display: none;
    }

    .fixed-roll-btn {
        right: 15px;
        top: 255px;
    }

    .palette-button-wrap {
        right: 15px;
        bottom: 30px;
    }
}

@media (min-width: 1100px) and (max-width: 1366.9px) {
    .recommended-container_floor-aside {
        grid-template-columns: repeat(4, 1fr);
        // padding: 0 50px;
    }

    .recommended-container_floor-aside>*:nth-of-type(n + 6) {
        margin-top: 40px;
    }

    // .layout-container > *:nth-of-type(n + 10) {
    //     margin-top: 22px;
    // }

    // .layout-container > *:nth-of-type(n + 16) {
    //     margin-top: 22px;
    // }

    // .layout-container .feed-video__card:nth-of-type(n + 6) {
    //     margin-top: 40px;
    // }

    // .layout-container .feed-video__card:nth-of-type(n + 10) {
    //     margin-top: 22px;
    // }

    .recommended-container_floor-aside .feed-video__card:nth-of-type(n + 9) {
        display: none;
    }

    .fixed-roll-btn {
        right: 15px;
        top: 255px;
    }

    .palette-button-wrap {
        right: 15px;
        bottom: 30px;
    }
}

@media (min-width: 1367px) and (max-width: 1700.9px) {
    .recommended-container_floor-aside {
        grid-template-columns: repeat(5, 1fr);
        // padding: 0 60px;
    }

    .recommended-container_floor-aside>*:nth-of-type(n + 8) {
        margin-top: 40px;
    }

    // .layout-container > *:nth-of-type(n + 13) {
    //     margin-top: 22px;
    // }

    // .layout-container > *:nth-of-type(n + 16) {
    //     margin-top: 22px;
    // }

    // .layout-container .feed-video__card:nth-of-type(n + 8) {
    //     margin-top: 40px;
    // }

    // .layout-container .feed-video__card:nth-of-type(n + 13) {
    //     margin-top: 22px;
    // }

    .recommended-container_floor-aside .feed-video__card:nth-of-type(n + 12) {
        display: none;
    }

    .fixed-roll-btn {
        right: 20px;
        top: 265px;
    }

    .palette-button-wrap {
        right: 20px;
        bottom: 30px;
    }
}

@media (min-width: 1701px) and (max-width: 2199.9px) {
    .recommended-container_floor-aside {
        grid-template-columns: repeat(5, 1fr);
        // padding: 0 60px;
    }

    .recommended-container_floor-aside>*:nth-of-type(n + 8) {
        margin-top: 40px;
    }

    // .layout-container > *:nth-of-type(n + 13) {
    //     margin-top: 22px;
    // }

    // .layout-container > *:nth-of-type(n + 16) {
    //     margin-top: 22px;
    // }

    // .layout-container .feed-video__card:nth-of-type(n + 8) {
    //     margin-top: 40px;
    // }

    // .layout-container .feed-video__card:nth-of-type(n + 13) {
    //     margin-top: 22px;
    // }

    .recommended-container_floor-aside .feed-video__card:nth-of-type(n + 12) {
        display: none;
    }

    .fixed-roll-btn {
        right: 20px;
        top: 265px;
    }

    .palette-button-wrap {
        right: 20px;
        bottom: 30px;
    }
}

@media (min-width: 2200px) {
    .recommended-container_floor-aside {
        grid-template-columns: repeat(6, 1fr);
        // padding: 0 70px;
    }

    .recommended-container_floor-aside>*:nth-of-type(n + 10) {
        margin-top: 40px;
    }

    // .layout-container > *:nth-of-type(n + 16) {
    //     margin-top: 22px;
    // }

    // .layout-container > *:nth-of-type(n + 16) {
    //     margin-top: 22px;
    // }

    // .layout-container .feed-video__card:nth-of-type(n + 10) {
    //     margin-top: 40px;
    // }

    // .layout-container .feed-video__card:nth-of-type(n + 16) {
    //     margin-top: 22px;
    // }

    .recommended-container_floor-aside .feed-video__card:nth-of-type(n + 15) {
        display: none;
    }


    .fixed-roll-btn {
        right: 25px;
        top: 265px;
    }

    .palette-button-wrap {
        right: 25px;
        bottom: 30px;
    }
}

@media (min-width: 1300px) and (max-width: 1399.9px) {
    .hl-index_wrap .layout-container,
    .hl-index_wrap .recommended-container_floor-aside {
        width: 1180px;
    }
}

@media (max-width: 1139.9px) {
    .hl-index_wrap .layout-container,
    .hl-index_wrap .recommended-container_floor-aside {
        width: 1020px;
    }
}

.fixed-roll-btn {
    position: absolute;
    z-index: 1;
    transform: translate(10px);
}

.fixed-roll-btn .roll-btn {
    box-sizing: content-box;
    flex-direction: column;
    margin-left: 0;
    height: auto;
    width: 20px;
    padding: 9px;
    background-color: #fff;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 8px;
    font-size: 12px;
    border: 1px solid #e5e7e9;
    transform-origin: center;
    transition: .2s;
    cursor: pointer;
    line-height: 1.15;
    opacity: 0.8;
}

.fixed-roll-btn span {
    font-size: 14px;
}

.fixed-roll-btn .roll-btn:hover {
    background-color: #e1e3e5;
    transition: opacity .3s;
}

.fixed-roll-btn .roll-btn .refresh-icon {
    height: 16px;
    width: 16px;
    line-height: 18px;
    margin-bottom: 6px;
    transition: transform .5s ease;
    color: #000;
}

.palette-button-wrap {
    position: fixed;
    bottom: 30px;
    text-align: center;
    transform: translate(10px);
    pointer-events: auto;
    z-index: 9999;
}

.palette-button-wrap .flexible-roll-btn {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 6px;
    cursor: pointer;

    .flexible-roll-btn-inner {
        flex-shrink: 0;
        height: 40px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 8px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 400;
        color: var(--text_white);
        background: var(--brand_blue);

        :deep(.btn-icon) {
            transform: rotate(0);
            transition: all .5s linear;
        }

        .btn-text {
            display: flex;
            white-space: nowrap;
            overflow: hidden;
            max-width: 0px;
            opacity: 0;
            transition: all .5s linear;
        }
    }

    &:hover {
        .expand-btn {
            background: var(--brand_blue_hover);

            .btn-icon {
                transform: rotate(-360deg);
            }

            .btn-text {
                opacity: 1;
                max-width: 110px;
            }
        }

    }
}

.palette-button-wrap .backtop-btn-wrap {
    margin-top: 12px;
    opacity: 0.8;
}

.palette-button-wrap .backtop-btn-wrap .hui-backtop {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40px;
    min-width: 40px;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
    border: 1px solid #e5e7e9;
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    .backtop-icon {
        height: 12px;
        width: 12px;

        :deep(.top-icon) {
            height: 12px;
            width: 12px;
        }
    }

    .backtop-description {
        margin-top: 2px;
        text-align: center;
        font-size: 12px;
        line-height: 14px;
    }

    &:hover {
        background-color: #e1e3e5;
        transition: opacity .3s;
    }


}


// @media (max-width: 1120px) {
//     .fixed-roll-btn {
//         opacity: 0.8;
//     }

//     .palette-button-wrap {
//         opacity: 0.8;
//     }
// }

.palette-enter-active,
.palette-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.palette-enter-from,
.palette-leave-to {
    opacity: 0;
}
</style>
