<template>
    <div class="captcha-mask_wrap">
        <div class="captcha-box_warp">
            <!-- 验证码容器 -->
            <div class="captcha-loading" :style="loading ? '' : 'display: none;'"></div>
            <div class="captcha-img_wrap" :style="loading ? 'display: none;' : ''">
                <div class="click-tip">
                    <span class="captcha-click-track-font">{{ captchaType }}</span>
                    <img :src="captchaData.captcha.templateImage" alt="" v-if="captchaData.captcha.type === 'WORD_IMAGE_CLICK'">
                </div>
                <div class="captcha-img-out">
                    <div class="captcha-img-panel">
                        <img :src="captchaData.captcha.backgroundImage" alt="验证码图片" class="captcha-img" ref="captchaImgRef">
                        <div class="captcha-sub-block" :style="`left: ${left}px;`" v-if="captchaData.captcha.type === 'SLIDER'">
                            <img :src="captchaData.captcha.templateImage" alt="验证码滑动图片">
                        </div>
                        <div class="captcha-slider-concat-img" 
                        :style="`height: ${((captchaData.captcha.backgroundImageHeight - captchaData.captcha.data.randomY) / captchaData.captcha.backgroundImageHeight) * 216}px;
                        background-image: url('${captchaData.captcha.backgroundImage}');
                        left: ${left}px;`"
                        v-if="captchaData.captcha.type === 'CONCAT'"></div>
                        <div class="captcha-rotate-img" v-if="captchaData.captcha.type === 'ROTATE'">
                            <img :src="captchaData.captcha.templateImage"
                            alt="验证码旋转图片"
                            :style = "`transform: rotate(${rotate}deg);`">
                        </div>
                        <div v-for="(tempPoint, index) in tempPoints" :key="index" class="point-area" :style="{
                            top: tempPoint.y + 'px',
                            left: tempPoint.x + 'px',
                        }">
                            {{ index + 1 }}
                        </div>
                        <div class="captcha-msg-area" :class="[showMsg ? 'show' : '', success ? 'success' : 'error']">
                            <div class="captcha-msg-area-inner">{{ msg }}</div>
                        </div>
                    </div>
                </div>
                <div class="captcha-slider-move" ref="sliderMoveRef" :style="captchaData.captcha.type !== 'WORD_IMAGE_CLICK' ? '' : 'display: none;'">
                    <div class="captcha-slider-move-track">
                        <div class="captcha-slider-move-track-mask" :style="`width: ${left + 12}px;`"></div>
                        <div class="slider-move-shadow"></div>
                    </div>
                    <div class="slider-move-btn" ref="sliderMoveBtnRef" :style="`left: ${left}px;`"></div>
                </div>
                <div class="slider-bottom">
                    <img class="logo" src="@/assets/img/captcha/captcha-logo.png">
                    <div class="slider-bottom-btn">
                        <div class="refresh-btn" @click="refresh"></div>
                        <div class="close-btn" @click="close"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { rafTimeout } from '@/utils/rafTimeout';
import type { CaptchaReq, TempPoints, CaptchaData, CheckCaptchaData } from '@/types/captcha'
import { getRandomCaptchaApi, checkCaptchaApi } from '@/api/captcha'
const sliderMoveRef = ref<HTMLDivElement | null>(null);
const captchaImgRef = ref<HTMLImageElement | null>(null);
const sliderMoveBtnRef = ref<HTMLDivElement | null>(null);
const tempPoints = ref<TempPoints[]>([]);
const pointsArr = ref<TempPoints[]>([]);
const msg = ref<string>();
let startTime: number = 0;
const left = ref(0);
const rotate = ref(0);
const showMsg = ref<boolean>(false);
const success = ref<boolean>(false);
let startX: number;
let sliderMoveWidth: number;
const loading = ref(true);
const emit = defineEmits(['isshowCaptcha']);
// 验证码数据
const captchaData = reactive<CaptchaData>({
    id: '',
    captcha: {
        type: '',
        backgroundImage: '',
        templateImage: '',
        backgroundImageWidth: 0,
        backgroundImageHeight: 0,
        templateImageHeight: 0,
        templateImageWidth: 0,
        backgroundImageTag: '',
        templateImageTag: '',
        data: {
            randomY: 0,
        },
    },
});
// 验证码验证回传对象数据
const checkCaptchaData = reactive<CheckCaptchaData>({
    id: '',
    data: {
        bgImageWidth: 0, // 背景图片宽度
        bgImageHeight: 0, // 背景图片高度
        templateImageWidth: 0, // 模板图片宽度
        templateImageHeight: 0, //模板图片高度
        startTime: 0, // 验证码开始时间
        stopTime: 0, // 验证码结束时间
        left: 0, // 滑块移动距离
        trackList: [],
    }
});
// 关闭
const close = () => {
    emit('isshowCaptcha', '');
}
// 初始化验证码鼠标监听
const initCaptcha = (type: string) => {
    if (type === 'WORD_IMAGE_CLICK') {
        // 初始化文字点选鼠标点击事件
        if (captchaImgRef.value) {
            captchaImgRef.value.addEventListener('click', handleClick);
        }
    } else {
        // 初始化拖动
        if (sliderMoveBtnRef.value) {
            sliderMoveBtnRef.value.addEventListener('mousedown', handleMouseDown);
            sliderMoveBtnRef.value.addEventListener('touchstart', handleTouchStart);
        }
    }
}
// 验证码操作提示
const captchaType = computed(() => {
    switch (captchaData.captcha.type) {
        case "WORD_IMAGE_CLICK":
            return "请依次点击:";
        case "CONCAT":
            return "拖动滑块完成还原图片";
        case "ROTATE":
            return "拖动滑块完成旋转拼图";
        case "SLIDER":
            return "拖动滑块完成拼图";
    }
});

const handleClick = async (event: MouseEvent) => {
    if (tempPoints.value.length === 0) {
        startTime = Date.now();
    }
    // 获取点击事件相对于容器的位置
    const canvas = event.currentTarget as HTMLElement;
    const containerRect = canvas.getBoundingClientRect();                                                        
    const x = Math.round(captchaData.captcha.backgroundImageWidth * (event.clientX - containerRect.left) / 360 ); // x坐标
    const y = Math.round(captchaData.captcha.backgroundImageHeight * (event.clientY - containerRect.top) / 216 );  // y坐标
    const tempPoint: TempPoints = {
        x: event.clientX - containerRect.left,
        y: event.clientY - containerRect.top,
        t: Date.now(),
        type: 'click',
    };
    const pointArr: TempPoints = {
        x: x,
        y: y,
        t: Date.now(),
        type: 'click',
    }
    tempPoints.value.push(tempPoint);
    pointsArr.value.push(pointArr);
    if (tempPoints.value.length === 4) {
        await checkCaptcha();
    }
};
// 获取验证码
const getCaptcha = async () => {
    if (captchaData.captcha.type === 'WORD_IMAGE_CLICK') {
        captchaImgRef.value?.removeEventListener('click', handleClick);
    } else if (captchaData.captcha.type !== 'WORD_IMAGE_CLICK' && captchaData.captcha.type !== '') {
        sliderMoveBtnRef.value?.removeEventListener("mousedown", handleMouseDown);
        sliderMoveBtnRef.value?.removeEventListener("touchstart", handleTouchStart);
    }
    removeMouseMoveListeners();
    loading.value = true;
    showMsg.value = false;
    left.value = 0;
    rotate.value = 0;
    tempPoints.value = [];
    pointsArr.value = [];
    msg.value = '';
    success.value = false;
    const param: CaptchaReq = {
        type: "RANDOM",
    }
    const response = await getRandomCaptchaApi(param);
    if (response.code === 200) {
        const responseData = response.data as CaptchaData;
        captchaData.id = responseData.id;
        captchaData.captcha = responseData.captcha;
        initCaptcha(captchaData.captcha.type);
        rafTimeout(() => {
            loading.value = false;
        }, 200);
    } else {
        console.error("验证码获取错误");
    }
}
//检查验证结果
const checkCaptcha = async () => {
    checkCaptchaData.id = captchaData.id;
    checkCaptchaData.data.bgImageWidth = captchaData.captcha.backgroundImageWidth;
    checkCaptchaData.data.bgImageHeight = captchaData.captcha.backgroundImageHeight;
    checkCaptchaData.data.templateImageWidth = captchaData.captcha.templateImageWidth;
    checkCaptchaData.data.templateImageHeight = captchaData.captcha.templateImageHeight;
    checkCaptchaData.data.startTime = startTime;
    checkCaptchaData.data.startTime = Date.now();
    checkCaptchaData.data.trackList = pointsArr.value;
    const response = await checkCaptchaApi(checkCaptchaData);
    if (response.code === 200) {
        msg.value = "验证成功，耗时" + (Date.now() - startTime) / 1000 + '秒';
        showMsg.value = true;
        success.value = true;
        rafTimeout(() => {
            emit('isshowCaptcha', captchaData.id);
        }, 700);
    } else if (response.code === 6111) {
        msg.value = "验证失败，请重新尝试"
        showMsg.value = true;
        rafTimeout( async () => {
            await getCaptcha();
        }, 700);
    } else {
        msg.value = "验证错误，请重新尝试"
        showMsg.value = true;
        rafTimeout( async () => {
            await getCaptcha();
        }, 700);  
    }
}
// 刷新验证码
const refresh = async () => {
    await getCaptcha();
}
// 鼠标按下事件处理程序
const handleMouseDown = (e: MouseEvent) => {
    if (!sliderMoveRef.value) return;
    startX = e.clientX - sliderMoveRef.value.getBoundingClientRect().left;
    sliderMoveWidth = sliderMoveRef.value.getBoundingClientRect().width;
    const pointArr: TempPoints = {
        x: 0,
        y: 0,
        t: Date.now(),
        type: 'down',
    }
    pointsArr.value.push(pointArr);
    addMouseMoveListeners();
    startTime = Date.now(); // 记录开始时间
    
};
// 移动端 触摸事件处理程序
const handleTouchStart = (e: TouchEvent) => {
    e.preventDefault();
    if (!sliderMoveRef.value) return;
    startX = e.touches[0].clientX - sliderMoveRef.value.getBoundingClientRect().left;
    sliderMoveWidth = sliderMoveRef.value.getBoundingClientRect().width;
    const pointArr: TempPoints = {
        x: 0,
        y: 0,
        t: Date.now(),
        type: 'down',
    }
    pointsArr.value.push(pointArr);
    startTime = Date.now(); // 记录开始时间
    addMouseMoveListeners();
};
// 鼠标移动事件处理程序
const handleMouseMove = (e: MouseEvent) => {
    if (!sliderMoveRef.value) return;
    const offsetX = e.clientX - sliderMoveRef.value.getBoundingClientRect().left;
    left.value = Math.max(0, Math.min(sliderMoveWidth - 66, offsetX - startX));
    let pointArr: TempPoints = {
        x: 0,
        y: 0,
        t: 0,
        type: 'move',
    }
    if (captchaData.captcha.type === 'ROTATE') {
        const x = Math.max(0, Math.min(1, (offsetX - startX) / (sliderMoveWidth - 66)));
        rotate.value = x * 360;
        pointArr = {
            x: Math.floor(x  * captchaData.captcha.backgroundImageWidth),
            y: 0,
            t: Date.now(),
            type: 'move',
        }
    } else {
        const moveLeftDistance = Math.floor(left.value * captchaData.captcha.backgroundImageWidth / 360);
        pointArr = {
            x: moveLeftDistance,
            y: 0,
            t: Date.now(),
            type: 'move',
        }
    }
    pointsArr.value.push(pointArr);
};
// 移动端 触摸事件处理程序
const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    if (!sliderMoveRef.value) return;
    const offsetX = e.touches[0].clientX - sliderMoveRef.value.getBoundingClientRect().left;
    left.value = Math.max(0, Math.min(sliderMoveWidth - 66, offsetX - startX));
    let pointArr: TempPoints = {
        x: 0,
        y: 0,
        t: 0,
        type: 'move',
    }
    if (captchaData.captcha.type === 'ROTATE') {
        const x = Math.max(0, Math.min(1, (offsetX - startX) / (sliderMoveWidth - 66)));
        rotate.value = x * 360;
        pointArr = {
            x: Math.floor(x  * captchaData.captcha.backgroundImageWidth),
            y: 0,
            t: Date.now(),
            type: 'move',
        }
    } else {
        const moveLeftDistance = Math.floor(left.value * captchaData.captcha.backgroundImageWidth / 360);
        pointArr = {
            x: moveLeftDistance,
            y: 0,
            t: Date.now(),
            type: 'move',
        }
    }
    pointsArr.value.push(pointArr);
};
// 鼠标释放事件处理程序
const handleMouseUp = () => {
    checkCaptcha();
    removeMouseMoveListeners();
};

// 移动端 释放事件处理程序
const handleTouchEnd = (e: TouchEvent) => {
    e.preventDefault();
    checkCaptcha();
    removeMouseMoveListeners();
};

// 添加鼠标移动监听
const addMouseMoveListeners = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleTouchEnd);
};

// 移除鼠标移动监听
const removeMouseMoveListeners = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("touchend", handleTouchEnd);
};

onMounted( async() => {
    await getCaptcha();
});
onUnmounted(() => {
    // 移除事件监听
    if (captchaData.captcha.type === 'WORD_IMAGE_CLICK') {
        captchaImgRef.value?.removeEventListener('click', handleClick);
    } else if (captchaData.captcha.type !== 'WORD_IMAGE_CLICK' && captchaData.captcha.type !== '') {
        sliderMoveBtnRef.value?.removeEventListener("mousedown", handleMouseDown);
        sliderMoveBtnRef.value?.removeEventListener("touchstart", handleTouchStart);
    }
    removeMouseMoveListeners();
});
</script>
<style scoped lang="scss">
.captcha-mask_wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    transition: all .5s;

    .captcha-box_warp {
        position: relative;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 6px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, .3);
        left: 50%;
        top: 50%;
        transform-origin: center;
        transform: translate(-50%, -50%);
        width: 380px;
        animation: loading 0.3s ease-in;
        background: url(@/assets/img/captcha/bg.jpg);
        background-size: 380px auto;

        .captcha-loading {
            margin-bottom: 1px;
            overflow: hidden;
            width: 120px;
            height: 20px;
            mask: linear-gradient(90deg, #000 70%, rgba(0, 0, 0, 0) 0) 0 / 20%;
            -webkit-mask: linear-gradient(90deg, #000 70%, rgba(0, 0, 0, 0) 0) 0 / 20%;
            background: linear-gradient(#f7b645 0 0) 0 / 0% no-repeat rgba(221, 221, 221, .4196078431);
            animation: cartoon 1s infinite steps(6);
            margin: 120px auto;
        }

        .captcha-img_wrap {
            position: relative;
            display: block;
            .click-tip {
                position: relative;
                height: 36px;
                width: 100%;
                .captcha-click-track-font {
                    font-size: 16px;
                    display: inline-block;
                    height: 36px;
                    line-height: 36px;
                    position: absolute;
                }
                img {
                    width: 110px;
                    position: absolute;
                    right: 15px;
                }
            }
            .captcha-img-out {
                display: block;
                .captcha-img-panel {
                    margin: 0;
                    -webkit-box-sizing: content-box;
                    -moz-box-sizing: content-box;
                    box-sizing: content-box;
                    border-radius: 4px;
                    position: relative;
                    width: 360px;
                    height: 216px;
                    background-size: 360px 216px;
                    margin-bottom: 1px;
                    overflow: hidden;

                    .captcha-img {
                        width: 100%;
                        height: 100%;
                        display: block; 
                        cursor: pointer; 
                        border-radius: inherit;
                    }
                    .point-area {
                        background-color: #409eff;
                        color: #fff;
                        cursor: pointer;
                        z-index: 9999;
                        width: 20px;
                        height: 20px;
                        text-align: center;
                        line-height: 20px;
                        border-radius: 50%;
                        position: absolute;
                        border: 2px solid #fff;
                        transform: translate(-50%, -50%);
                        transform-origin: center;
                        animation: pointShow .3s ease-out forwards;

                    }

                    .captcha-sub-block {
                        width: 66px;
                        height: 216px;
                        top: 0;
                        background-size: 360px 216px;
                        position: absolute;
                        text-align: center;
                        z-index: 3;
                        box-sizing: border-box;
                        left: 0;
                        img {
                            height: 100%;
                            width: 100%;
                            display: block;
                        }
                    }

                    .captcha-slider-concat-img {
                        position: absolute;
                        z-index: 3;
                        top: 0;
                        width: 720px;
                        background-repeat: repeat-x; /* 水平重复 */
                        background-size: 360px 216px; /* 设置图片的大小，可选 */
                        transform: translateX(-360px);
                    }

                    .captcha-rotate-img {
                        width: 100%;
                        height: 216px;
                        text-align: center;
                        position: absolute;
                        top: 0;
                        img {
                            height: 100%;
                            display: inline-block;
                        }
                    }

                    .captcha-msg-area {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 26px;
                        width: 100%;
                        background-color: #4cae4c;
                        opacity: .6;
                        display: none;
                        z-index: 10;
                        .captcha-msg-area-inner {
                            color: #fff;
                            font-size: 14px;
                            line-height: 26px;
                            text-align: center;
                        }
                    }
                    .show {
                        display: block;
                        animation: fadeInUp .3s ease-out forwards;
                    }
                    .success {
                        background-color: #4cae4c;
                    }
                    .error {
                        background-color: #d9534f;
                    }

                }
            }

            .captcha-slider-move {
                position: relative;
                font-size: 14px;
                text-align: center;
                white-space: nowrap;
                color: #88949d;
                -moz-user-select: none;
                -webkit-user-select: none;
                user-select: none;
                filter: opacity(0.8);
                height: 34px;
                width: 100%;
                margin: 16px 0 0 0;
                position: relative;

                .captcha-slider-move-track {
                    position: relative;
                    height: 28px;
                    line-height: 24px;
                    text-align: center;
                    background: #f5f5f5;
                    color: #999;
                    transition: 0s;
                    font-size: 14px;
                    box-sizing: content-box;
                    overflow: hidden;
                    border: 1px solid #f5f5f5;
                    border-radius: 12px;
                    .captcha-slider-move-track-mask {
                        box-sizing: border-box;
                        border-width: 1px;
                        border-style: solid;
                        height: 28px;
                        opacity: .5;
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        border-radius: 12px 0 0 12px;
                        border-color: rgb(2, 152, 248);
                        background-color: rgb(137, 210, 255);
                    }
                    .slider-move-shadow {
                        animation: slidermove 3s infinite;
                        height: 100%;
                        width: 5px;
                        background-color: #fff;
                        position: absolute;
                        top: 0;
                        left: 0;
                        filter: opacity(0.5);
                        box-shadow: 1px 1px 1px #fff;
                        border-radius: 50%;
                    }
                    
                }

                .slider-move-btn {
                    transform: translate(0px, 0px);
                    position: absolute;
                    top: -6px;
                    width: 66px;
                    height: 40px;
                    background-color: #fff;
                    background-repeat: no-repeat;
                    background-size: contain;
                    border-radius: 18px;
                    box-shadow: 0 0 11px 0 #999;
                    cursor: pointer;
                    background-image: url(data:image/png;base64,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);
                }

            }

            .slider-bottom {
                display: flex;
                align-items: center;
                height: 40px;
                width: 100%;
                margin: 16px 0 0;
                justify-content: space-between;
                .logo {
                    height: 30px;
                    width: 30px;
                }
                .slider-bottom-btn {
                    display: flex;
                    .refresh-btn {
                        display: block;
                        width: 20px;
                        height: 20px;
                        background-image: url(@/assets/img/captcha/icon.png);
                        background-position: 0 -167px;
                        background-repeat: no-repeat;
                        margin-right: 10px;
                        cursor: pointer;
                    }
                    .close-btn {
                        display: block;
                        width: 20px;
                        height: 20px;
                        background-image: url(@/assets/img/captcha/icon.png);
                        background-repeat: no-repeat;
                        background-position: 0 -14px;
                        margin-right: 2px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
@keyframes loading {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0); /* 初始状态 */
    }
    100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1); /* 缩放至原本大小 */
    }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pointShow {
    from {
        transform: translate(-50%, -50%) scale(0);
    }
    to {
        transform: translate(-50%, -50%) scale(1);
    }
}

@keyframes slidermove {
    0% {
        left: 0;
    }

    100% {
        left: 355px;
    }
}

@keyframes cartoon {
    100% {
        background-size: 120%;
    }
}
</style>