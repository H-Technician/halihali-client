<template>
    <div class="platform-carousel_warp">
        <div class="platform-carousel-skeleton_warp" :style="isImgsDownLoad ? 'display: none;' : ''">
            <div class="platform-carousel-skeleton-box"></div>
        </div>
        <div class="carousel_warp"  :style="isImgsDownLoad ? '' : 'display: none;'">
            <a  href="" target="_blank" class="carousel-container"
                :style="`width: ${data.containerWidth}%;transition: ${data.transition};transform: ${data.transform}`"
                @mouseover="manualSwitching(null, false)" @mouseleave="manualSwitching(null, true)">
                <div class="carousel-item" :style="`width: ${data.itemWidth}% `" v-for="(item, index) in data.playList" v-if="carouselList">
                    <img class="carousel-img" :src="item.url" :alt="item.title"/>
                    <div class="carousel-mask"></div>
                </div>
            </a>
            <div class="carousel-footer">
                <div class="tool">
                    <a href="" target="_blank" class="title" v-if="carouselList[data.currentIndex]">
                        <button>征稿</button>
                        {{ carouselList[data.currentIndex].title || "" }}
                    </a>
                    <div class="dots">
                        <div class="dot" v-for="index of data.carouselCount" :key="index"
                            @click="changeCurrentIndex(index - 1)">
                            <div class="dot-item" :style="data.currentIndex === index - 1 ? 'display: none;' : '' "></div>
                            <div :class="isreverse ? 'dot-active-reverse' : 'dot-active'">
                                <img src="@/assets/img/platform/dot-trig.png" alt="dot-trig" v-if="data.currentIndex === index - 1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Carousel } from "@/types/carousel";
const data = reactive<{
    carouselCount: number
    itemWidth: number
    containerWidth: number
    currentIndex: number
    carouselTimer: NodeJS.Timeout | null;
    playList: Array<Carousel>
    transition: string
    transform: string
}>({
    carouselCount: 0,//轮播图数量
    itemWidth: 100,
    containerWidth: 100,
    currentIndex: 0,
    carouselTimer: null,//自动切换计时器
    playList: [{
    title: '看视频学舞赢大礼！',
    url: 'https://haliyunoss.oss-cn-chengdu.aliyuncs.com/img/platform/21db0.jpg' ,
    color: '#6a4336' ,
    type: 'video' ,
    id: 1 ,
},
{
    title: '邀你分享宝藏游戏！' ,
    url: 'https://haliyunoss.oss-cn-chengdu.aliyuncs.com/img/platform/1bb1.jpg' ,
    color: '' ,
    type: 'video' ,
    id: 2 ,
},
{
    title: '原神UP主激励计划' ,
    url: 'https://haliyunoss.oss-cn-chengdu.aliyuncs.com/img/platform/065e.jpg' ,
    color: '' ,
    type: 'video' ,
    id: 3 ,
},
{
    title: '明星安利尽在B站，投稿娱乐区瓜分近20W奖励金！' ,
    url: 'https://haliyunoss.oss-cn-chengdu.aliyuncs.com/img/platform/fcc6.png' ,
    color: '' ,
    type: 'video' ,
    id: 4 ,
},
{
    title: '分享科学科普内容，赢丰厚奖金！' ,
    url: 'https://haliyunoss.oss-cn-chengdu.aliyuncs.com/img/platform/474f.jpg' ,
    color: '' ,
    type: 'video' ,
    id: 4 ,
}],//播放列表
    transition: "",
    transform: ""
});

const isImgsDownLoad =ref(false);
const carouselList = ref<Array<Carousel>>([]);
const carouselContainer = ref<HTMLElement | null>(null);
const urls: string[] = data.playList.map((item: { url: any; }) => item.url);
const isreverse = ref(false);

//初始化轮播图
const initCarousel = () => {
    data.carouselCount = carouselList.value.length;
    data.itemWidth = 100 / data.carouselCount;
    data.containerWidth = 100 * data.carouselCount;

    // 将最后一张图挪到最前面
    data.playList = handelSequence(carouselList.value, data.carouselCount - 1);

    //设置初始状态
    nextTick(() => {
        //设置初始偏移量
        if (carouselContainer.value) {
            carouselContainer.value.style.transform = `translateX(-${data.itemWidth}%)`;
        }
    })
}

// 开启定期切换
const startInterval = () => {
    data.carouselTimer = setInterval(() => {
        changeCurrentImg(true);
    }, 2500)
}

//切换当前图片
const changeCurrentImg = (isNext: boolean) => {
    let translateX = 0;
    if (isNext) {
        translateX = -data.itemWidth * 2;
        data.currentIndex = data.currentIndex + 1 >= data.carouselCount ? 0 : data.currentIndex + 1;
    } else {
        //如果点击的是左边按钮 isreverse.value 的值变成 true;
        isreverse.value = true
        data.currentIndex = data.currentIndex - 1 < 0 ? data.carouselCount - 1 : data.currentIndex - 1;
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
            data.playList = handelSequence(data.playList, data.carouselCount - 1);
        }

    }, 300)
    //定时800ms后吃人豆方向恢复向右
    //isreverse.value 的值变成 false;
    if (isreverse.value){
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
            data.playList = handelSequence(carouselList.value, data.carouselCount - 1);
        } else {
            if (i < data.currentIndex){
                isreverse.value = true;
            }else if ( i > data.currentIndex){
                isreverse.value = false;
            }
            // 当前图片前一张在最前面，其他图片依次排列
            data.playList = handelSequence(carouselList.value, i - 1);
        }
        data.currentIndex = i;
        if (isreverse.value){
            setTimeout(() => {
                isreverse.value = false;
            }, 600);
        }
    });
}

//手动切换
const manualSwitching = (fn: null | (() => void), recoverable = true) => {
    if (data.carouselTimer) {
        clearInterval(data.carouselTimer);
        data.carouselTimer = null;
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

onMounted(() => {  
    carouselList.value = data.playList;
    initCarousel();
    loadImages(urls, () => {
        isImgsDownLoad.value = true; // 所有图片加载成功后隐藏骨架屏
    // console.log('所有图片加载完成');
    }, (error) => {
        console.error('图片加载失败:', error.message);
    });
    startInterval();
});
</script>
  
<style scoped lang="scss">
.platform-carousel_warp {
    height: 100%;
    width: 100%;
    position: relative;
}

.platform-carousel_warp .platform-carousel-skeleton_warp {
    width: 100%; 
    height: 100%; 
    border-radius: 6px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    .platform-carousel-skeleton-box { 
        border-radius: 6px;  
        display: block;
        position: relative;
        top: 0;
        z-index: 3;
        left: 0;
        width: 100%;  
        height: 100%;  
        display: block;
        background: linear-gradient(
            -45deg,
            #F1F2F3 25%,
            #FFFFFF 45%,
            #F1F2F3 65%
        );
        background-size: 400% 100%;
        animation: skeleton-loading 1.2s ease-in-out infinite;

        &::before {
            content: "";
            display: block;
        }
    }
}
.platform-carousel_warp .carousel_warp {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 6px;
}

.platform-carousel_warp .carousel_warp .carousel-container {
    height: 100%;
    width: 100%;
    text-decoration: none;
    display: block;
}

.platform-carousel_warp .carousel_warp .carousel-container .carousel-item {
    float: left;
    position: relative;
    height: 100%;
    cursor: pointer;
    
}
.platform-carousel_warp .carousel_warp .carousel-container .carousel-item .carousel-img {
    width: 100%;
    height: auto;
    display: block;
}

.platform-carousel_warp .carousel_warp .carousel-container .carousel-item .carousel-mask {
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 36px;
    user-select: none;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(0, 0, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
}

.platform-carousel_warp .carousel_warp .carousel-footer {
    box-sizing: border-box;
    position: absolute;
    bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    height: 20px;
    padding: 0 16px;   
}

/* 标题 */
.platform-carousel_warp .carousel_warp .carousel-footer .tool .title {
    position: absolute;
    margin: 0;
    left: 10px;
    bottom: 0;
    height: 20px;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    font-family: "HarmonyOS_Sans_SC_Medium";
    cursor: pointer;
    /* 超出10个字隐藏，之所以设置11em是因为省略号占一个位置 */
    width: 25em;
    overflow: hidden;
    /* 显示省略符号来代表被修剪的文本。 */
    text-overflow:ellipsis; 
    /* 文本不换行 */
    white-space:nowrap;
    button {
        background-color: var(--brand_pink);
        border-radius: 3px;
        padding: 0 6px;
        line-height: 18px;
        border: none;
        font-size: 12px;
        height: 18px;
        color: #ffffff;
        cursor: pointer;
    }

}
.platform-carousel_warp .carousel_warp .carousel-footer .tool .dots {
    position: absolute;
    right: 10px;
    bottom: 0;
    height: 20px;
    display: flex;
    text-align: center;
    align-items: center;
}
/*指示点 */

.platform-carousel_warp .carousel_warp .carousel-footer .tool .dots .dot {
    position: relative;
    display: inline-block;
    height: 12.8px;
    width: 12.8px;
    margin: 0 3px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .5s;
}

.platform-carousel_warp .carousel_warp .carousel-footer .tool .dots .dot .dot-item {
    position: absolute;
    top: 0; 
    margin: 3px;
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background-color: #ffffff;
    &:hover {
        background-color: var(--brand_blue);
    }
}

.platform-carousel_warp .carousel_warp .carousel-footer .tool .dots .dot .dot-active {
    width: 16px;
    height: 16px;
    align-items: center;
    justify-content: center;
    line-height: 20px;
    img {
        width: 100%;
        height: 100%;
        line-height: 20px;
        display: block;
    }
}

.platform-carousel_warp .carousel_warp .carousel-footer .tool .dots .dot .dot-active div:nth-child(1) {
  /* 执行动画：动画名 时长 线性的 停留在最后一帧 */
  animation: dot-active1 0.75s linear forwards;
}

.platform-carousel_warp .carousel_warp .carousel-footer .tool .dots .dot .dot-active div:nth-child(2) {
  animation: dot-active2 0.75s linear forwards;
}

// 骨架屏动画
@keyframes skeleton-loading {
    0% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0 50%;
    }
}
</style>