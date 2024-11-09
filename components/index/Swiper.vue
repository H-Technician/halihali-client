<template>
    <div class="swiper_warp">
        <!-- <div class="swiper-skeleton_warp" :style="isImgsDownLoad ? 'display: none;' : ''">
            <div class="swiper-skeleton-box"></div>
        </div> -->
        <!-- :style="isImgsDownLoad && swiperList.length > 0 ? '' : 'display: none;'" -->
        <div class="swiper-box">
            <div class="swiper-container"
                :style="`width: ${data.containerWidth}%;transition: ${data.transition};transform: ${data.transform}`"
                ref="swiperContainer" @mouseover="manualSwitching(null, false)"
                @mouseleave="manualSwitching(null, true)">
                <a href="" target="_blank" class="swiper-item" :style="`width: ${data.itemWidth}% `"
                    v-for="(item, index) in data.playList" :key="index">
                    <picture class="swiper-img">
                        <source type="image/webp" srcset="">
                        </source>
                        <source type="image/jpg" srcset="">
                        </source>
                        <img :src="item.url" :alt="item.title + ' 轮播图'" :key="item.id" />
                    </picture>
                    <div class="swiper-mask" :style="`background-color: ${item.color}`"
                        v-if="data.playList.length === swiperList.length"></div>
                    <div class="swiper-mask swiper-mask-load" v-else></div>
                </a>
            </div>
            <div class="swiper-footer" :class="data.playList.length === swiperList.length ? '' : 'swiper-hide'">
                <div class="swiper-footer__tool">
                    <a href="/test" target="_blank">
                        <p class="swiper-footer__title" v-if="data.playList[data.currentIndex]">
                            {{ data.playList[data.currentIndex].title }}
                        </p>
                    </a>
                    <div class="dots">
                        <div class="dot" v-for="index of data.swiperCount" :key="index"
                            @click="changeCurrentIndex(index - 1)">
                            <!-- 吃豆人 -->
                            <div class="dot-item" :style="data.currentIndex === index - 1 ? 'display: none;' : ''">
                            </div>
                            <div class="dot-active" :class="isreverse ? 'dot-active-reverse' : ''">
                                <div class="before" v-show="data.currentIndex === index - 1"></div>
                                <div class="after" v-show="data.currentIndex === index - 1"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="arrow">
                    <button @click="arrowClick(false)">
                        <IconsArrowLeftBold />
                    </button>
                    <button @click="arrowClick(true)">
                        <IconsArrowLeftBold style="transform: rotate(180deg);" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Swiper } from "@/types/swiper";
const carouselLoadList = ref<number[]>([]);
const data = reactive<{
    swiperCount: number
    itemWidth: number
    containerWidth: number
    currentIndex: number
    swiperTimer: NodeJS.Timeout | null;
    playList: Array<Swiper>
    transition: string
    transform: string
}>({
    swiperCount: 0,//轮播图数量
    itemWidth: 100,
    containerWidth: 100,
    currentIndex: 0,
    swiperTimer: null,//自动切换计时器
    playList: [],//播放列表
    transition: "",
    transform: ""
});

const isImgsDownLoad = ref(true);
const swiperList: Array<Swiper> = [
    {
        title: '不是哥们，这么整是吧？！',
        url: '//io.v.hblog.top/hfs/banner/0674227ad2620041cb07456c71506826ba704064.png@800w_512h_!web-home-carousel-cover.webp',
        color: '#2b0d02',
        type: 'video',
        id: 1,
    },
    {
        title: '我会带领我的队伍走向胜利！',
        url: '//io.v.hblog.top/hfs/banner/649e19a07e2ad0f1fb5bb154977758da834c21a0.png@800w_512h_!web-home-carousel-cover.webp',
        color: '#2a2518',
        type: 'video',
        id: 2,
    },
    {
        title: '抓住秋天的尾巴，投稿秋日美食瓜分万元奖金',
        url: '//io.v.hblog.top/hfs/banner/9a58fb3f618529f2bb5c43c21bf0e74b17dc9cac.png@800w_512h_!web-home-carousel-cover.webp',
        color: '#cd9a68',
        type: 'video',
        id: 3,
    },
    {
        title: '今年获得诺奖的AI和神经网络究竟是啥？',
        url: '//io.v.hblog.top/hfs/banner/b47dcd9c30afaa2384f4bdad9f6d9bca4de882a4.jpg@800w_512h_!web-home-carousel-cover.webp',
        color: '#163449',
        type: 'video',
        id: 4,
    },
    {
        title: '分享秋日记录，赢万元奖金&限定周边',
        url: '//io.v.hblog.top/hfs/banner/1e7ccc41d29cbf785061712027a3b64382f4cca8.png@800w_512h_!web-home-carousel-cover.webp',
        color: '#785d50',
        type: 'video',
        id: 5,
    },
    {
        title: '时隔七年，全新超级小黄人登场！',
        url: '//io.v.hblog.top/hfs/banner/7587fc44e532eb2adab1bea0f752360c26116116.png@800w_512h_!web-home-carousel-cover.webp',
        color: '#301815',
        type: 'video',
        id: 6,
    },
    {
        title: '无 伤 速 通 唐 国 强？',
        url: '//io.v.hblog.top/hfs/banner/0109e9768e5c12245b51cc96cc3f06036afd403d.png@800w_512h_!web-home-carousel-cover.webp',
        color: '#5d5048',
        type: 'video',
        id: 7,
    },
    {
        title: '陈楚生惊喜献唱《牧神记》主题曲',
        url: '//io.v.hblog.top/hfs/banner/e0fe87f1186af819a45e0a71f01769274501cbe2.jpg@800w_512h_!web-home-carousel-cover.webp',
        color: '#1c1517',
        type: 'video',
        id: 8,
    }
];
data.playList.push(swiperList[0]);
const swiperContainer = ref<HTMLElement | null>(null);
const urls: string[] = data.playList.map((item: { url: any; }) => item.url);
const isreverse = ref(false);
//初始化轮播图
const initCarousel = () => {
    data.swiperCount = data.playList.length;
    data.itemWidth = 100 / data.swiperCount;
    data.containerWidth = 100 * data.swiperCount;

    // 将最后一张图挪到最前面
    data.playList = handelSequence(data.playList, data.swiperCount - 1);

    //设置初始状态
    nextTick(() => {
        //设置初始偏移量
        if (swiperContainer.value) {
            swiperContainer.value.style.transform = `translateX(-${data.itemWidth}%)`;
        }
    })
}

// 开启定期切换
const startInterval = () => {
    data.swiperTimer = setInterval(() => {
        changeCurrentImg(true);
    }, 2500)
}

//切换当前图片
const changeCurrentImg = (isNext: boolean) => {
    let translateX = 0;
    if (isNext) {
        translateX = -data.itemWidth * 2;
        data.currentIndex = data.currentIndex + 1 >= data.swiperCount ? 0 : data.currentIndex + 1;
    } else {
        //如果点击的是左边按钮 isreverse.value 的值变成 true;
        isreverse.value = true
        data.currentIndex = data.currentIndex - 1 < 0 ? data.swiperCount - 1 : data.currentIndex - 1;
    }
    data.transition = "transform 300ms ease 0s";
    data.transform = `translateX(${translateX}%)`;

    setTimeout(() => {
        data.transition = "transform 0ms ease 0s";
        data.transform = `translateX(-${data.itemWidth}%)`;
        if (isNext) {
            //将第一张房到最后
            data.playList = handelSequence(data.playList, 1);
        } else {
            //将最后一张放最前面
            data.playList = handelSequence(data.playList, data.swiperCount - 1);
        }

    }, 300)
    //定时800ms后吃人豆方向恢复向右
    //isreverse.value 的值变成 false;
    if (isreverse.value) {
        setTimeout(() => {
            isreverse.value = false;
        }, 800);
    }
}

//根据index切换图片
const changeCurrentIndex = (i: number) => {
    if (i === data.currentIndex) return;
    manualSwitching(() => {
        if (i === 0) {
            isreverse.value = true;
            // 将最后一张图挪到最前面
            data.playList = handelSequence(data.playList, data.swiperCount - 1);
        } else {
            if (i < data.currentIndex) {
                isreverse.value = true;
            } else if (i > data.currentIndex) {
                isreverse.value = false;
            }
            // 当前图片前一张在最前面，其他图片依次排列
            data.playList = handelSequence(data.playList, i - 1);
        }
        data.currentIndex = i;
        if (isreverse.value) {
            setTimeout(() => {
                isreverse.value = false;
            }, 600);
        }
    });
}

//点击切换按钮
const arrowClick = (() => {
    //节流
    var timer: NodeJS.Timeout | null = null;
    return (isNext: boolean) => {
        if (timer) return;

        manualSwitching(() => {
            changeCurrentImg(isNext);
        });

        timer = setTimeout(() => {
            timer = null;
        }, 300);
    }
})();

//手动切换
const manualSwitching = (fn: null | (() => void), recoverable = true) => {
    if (data.swiperTimer) {
        clearInterval(data.swiperTimer);
        data.swiperTimer = null;
    }
    if (typeof fn === "function") fn();
    //判断是否需要恢复计时
    if (!recoverable) return;
    startInterval();
}

//处理图片顺序
const handelSequence = (data: any[], start: number) => {
    const before = data.slice(0, start);
    return [...data.slice(start, data.length), ...before];
}
// 判断图片是否完全加载
const loadCarouselImgs = async (url: string, index: number) => {
    await loadImage(url, () => {
        // 将当前图片加载完成的index添加到数组中
        carouselLoadList.value.push(index);
        // console.log('所有图片加载完成');
    }, (error) => {
        console.error('图片加载失败:', error.message);
    });
}

onMounted(async () => {
    data.playList = swiperList;
    // await loadImage(carouselList.value[0].url, () => {
    //     carouselLoadList.value.push(carouselList.value[0].id);
    //     console.log(carouselLoadList.value);
    //     //isImgsDownLoad.value = false;// 所有图片加载成功后隐藏骨架屏
    // }, (error) => {
    //     console.error('图片加载失败:', error.message);
    // });
    // for (let i = 0; i < swiperList.value.length; i++) {
    //     await loadCarouselImgs(swiperList.value[i].url, swiperList.value[i].id);
    // }
    // isImgsDownLoad.value = true; // 所有图片加载成功后隐藏骨架屏
    // console.log(carouselLoadList.value);
    // await loadImages(urls, () => {
    //     isImgsDownLoad.value = false; // 所有图片加载成功后隐藏骨架屏
    // // console.log('所有图片加载完成');
    // }, (error) => {
    //     console.error('图片加载失败:', error.message);
    // });
    initCarousel();
    startInterval();
});
</script>

<style scoped lang="scss">
.swiper_warp {
    height: calc(100% - 76px);
    width: 100%;
    position: relative;
    background: #f1f2f3;
    border-radius: 6px;
    overflow: hidden;

    .swiper-skeleton_warp {
        width: 100%;
        height: 100%;
        // border-radius: 6px;
        position: absolute;
        top: 0;
        left: 0;
        // overflow: hidden;

        .swiper-skeleton-box {
            border-radius: 6px;
            display: block;
            position: relative;
            top: 0;
            z-index: 3;
            left: 0;
            width: 100%;
            height: 100%;
            display: block;
            background: linear-gradient(-45deg,
                    #F1F2F3 25%,
                    #FFFFFF 45%,
                    #F1F2F3 65%);
            background-size: 400% 100%;
            animation: skeleton-loading 1.2s ease-in-out infinite;

            &::before {
                content: "";
                display: block;
            }
        }
    }

    .swiper-box {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        border-radius: 6px;
        transition: all .2s ease-in-out;

        .swiper-container {
            height: 100%;
            width: 100%;
            display: flex;

            .swiper-item {
                position: relative;
                height: auto;
                width: 100%;
                cursor: pointer;
                background: #f1f2f3;

                .swiper-img {
                    width: 100%;
                    height: 100%;
                    display: block;

                    img {
                        width: 100%;
                        height: 100%;
                        display: block;
                        object-fit: cover;
                        opacity: 1;
                    }
                }

                .swiper-mask {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    user-select: none;
                    pointer-events: none;
                    mask-image: linear-gradient(0, #2f3238 100px, transparent 220px);
                    -webkit-mask-image: linear-gradient(0, #2f3238 100px, transparent 220px);
                    opacity: 1;
                }

                .swiper-mask-load {
                    background-color: #FFF;
                }

            }
        }

        .swiper-footer {
            box-sizing: border-box;
            position: absolute;
            bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            width: 100%;
            height: 70px;
            padding: 0 16px;
            opacity: 1;
            transition: all .5s ease;
            animation: fadeIn .5s ease forwards;

            .arrow {
                position: absolute;
                top: 20px;
                right: 20px;
                display: flex;
                flex-wrap: nowrap;

                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 28px;
                    height: 28px;
                    border-radius: 8px;
                    color: #fff;
                    font-size: 18px;
                    background-color: rgba(255, 255, 255, .2);
                    border: none;
                    outline: none;
                    cursor: pointer;
                    user-select: none;
                    -webkit-user-select: none;

                    &:first-child {
                        margin-right: 12px;
                    }

                    &:hover {
                        background-color: rgba(255, 255, 255, .3);
                    }
                }
            }

            .swiper-footer__tool {

                /* 标题 */
                .swiper-footer__title {
                    color: #fff;
                    font-size: 18px;
                    margin-bottom: 6px;
                    cursor: pointer;
                    /* 超出10个字隐藏，之所以设置11em是因为省略号占一个位置 */
                    width: 25em;
                    overflow: hidden;
                    /* 显示省略符号来代表被修剪的文本。 */
                    text-overflow: ellipsis;
                    /* 文本不换行 */
                    white-space: nowrap;

                }

                /*指示点 */
                .dots {
                    height: 20px;
                    display: flex;
                    align-items: center;

                    .dot {
                        position: relative;
                        display: flex;
                        height: 16px;
                        width: 16px;
                        margin: 0 2px;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        transition: .5s;

                        .dot-item {
                            position: absolute;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 9px;
                            width: 9px;
                            border-radius: 50%;
                            background-color: rgba(255, 255, 255, .3);
                        }

                        /* 吃豆人 */
                        .dot-active {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 16px;
                            height: 16px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background: none;

                            .before,
                            .after {
                                /* 绝对定位 两个重合 */
                                position: absolute;
                                width: 0;
                                height: 0;
                                border: 7.5px solid #fff;
                                border-radius: 50%;
                                border-right-width: 7.5px;
                                border-right-color: transparent;

                                &:nth-child(1) {
                                    /* 执行动画：动画名 时长 线性的 停留在最后一帧 */
                                    animation: dot-active1 0.75s ease-in-out forwards;
                                }

                                &:nth-child(2) {
                                    animation: dot-active2 0.75s ease-in-out forwards;
                                }
                            }
                        }

                        /* 根据左右切换求额定吃人豆是否反向 */
                        .dot-active-reverse {
                            transform: rotate(180deg);
                        }

                    }
                }
            }
        }

        .swiper-hide {
            display: none;
        }
    }
}

/* 定义吃豆人动画 */
@keyframes dot-active1 {
    0% {
        transform: rotate(360deg);
    }

    40% {
        transform: rotate(270deg);
    }

    60% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(270deg);
    }
}

@keyframes dot-active2 {
    0% {
        transform: rotate(0deg);
    }

    40% {
        transform: rotate(90deg);
    }

    60% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(90deg);
    }
}
</style>