<template>
    <div class="cropper-comp">
        <!-- 导航栏 -->
        <div class="cropper-tabs">
            <ul>
                <li v-for="(item, index) in tabList" :key="index" @click="activeUploadTab(index)"
                    :class="isActiveUploadTab === index ? 'is_active_tab' : ''">
                    {{ item.name }}
                </li>
                <li v-if="false">修改封面</li>
            </ul>
        </div>
        <div class="cropper-content">
            <div class="cover-select-content-pick" :style="isActiveUploadTab === 0 ? '' : 'display: none;'">
                <div class="cover-select-content-warp">
                    <div class="cover-select-content-left">
                        <div class="cover-cropper-left-text">
                            <span>拖拽选框裁剪</span>
                            <div class="refresh-text" @mouseenter="mouseRefresh = true"
                                @mouseleave="mouseRefresh = false" @click="selectCover" v-if="isActiveUploadTab === 1">
                                <svg-icon name="refresh" color="#00aeec"
                                    :style="[{ transform: mouseRefresh ? 'rotate(90deg)' : '' }]"></svg-icon>
                                <span>重换封面</span>
                            </div>
                        </div>
                        <!-- 图片裁剪 -->
                        <div class="cover-cropper-left-img">
                            <CropperCoverCropper 
                            ref="coverCropperRef"
                            v-if="coverUrl" 
                            :src="coverUrl" 
                            @updateImgPreview="updateImgPreview" />
                        </div>
                        <div class="cover-cropper-left-tips">
                            <span class="tip">
                                *封面小tips：请尽量将封面关键信息放置在红色方框区域内
                            </span>
                            <span class="size">
                                已截取分辨率：{{ cropSize.cropImg.width.toFixed(0) }}
                                * {{ cropSize.cropImg.height.toFixed(0) }}
                            </span>
                        </div>
                    </div>
                    <div class="cover-select-content-right">
                        <div class="cover-cropper-right-text">
                            <span>点击预览封面</span>
                        </div>
                        <div class="cover-cropper-right-preview-item">
                            <span class="title">4:3封面</span>
                            <span class="tag highlight">APP首页</span>
                            <div class="cover-cropper-right-img-preview" style="width: 146px; height: 109.5px">
                                <img :src="coverUrl" :style="preview4_3.style" alt="视频4_3预览图">
                            </div>
                        </div>
                        <div class="cover-cropper-right-preview-item">
                            <span class="title">16:9封面</span>
                            <span class="tag">个人空间、相关推荐</span>
                            <div class="cover-cropper-right-img-preview" style="width: 146px; height: 82.125px">
                                <img :src="coverUrl" :style="preview16_9.style" alt="视频16_9预览图">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cover-select-content-pick-bar" :style="{ display: showPickBar ? '' : 'none' }">
                    <div class="cover-slider">
                        <div class="cover-slider-list">
                            <div class="cover-slider-image" v-for="(item, index) in coverUrls" :key="index"
                                :style="`background: url(${item}) center center / cover no-repeat;`">
                            </div>
                        </div>
                        <div class="slider-container" ref="sliderContainerRef" @mouseenter="showTooltip = true"
                            @mouseleave="showTooltip = false">
                            <div class="slider-dot" :style="{ left: sliderPosition + '%' }"
                                @mousedown.prevent="startDrag($event)" @touchstart="startDrag($event, 'touch')">
                                <div class="slider-dot-hover"></div>
                                <div class="time-line-tooltip" :class="showTooltip ? 'show-tooltip' : ''">
                                    {{ formattedCurrentTime }}
                                    <div class="tooltip-arrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cover-select-footer-pick" :style="{ display: isLoading ? 'none' : '' }">
                    <div class="cover-select-footer-pick-btn">
                        <div class="button" @click="complete('video')">
                            <span>完成</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cropper-loading" :style="{ display: isLoading && coverUrls.length !== 7 ? '' : 'none' }">
                <div class="loading-bg"></div>
            </div>
            <div class="cover-select-content-upload-wrap" :style="isActiveUploadTab === 1 ? '' : 'display: none;'">
                <div class="cover-select-content-upload-box" :style="isActiveUploadTab === 1
                    && uploadImg.uploadImgUrl === ''
                    ? '' : 'display: none;'" @dragover.prevent @dragenter.prevent @dragleave.prevent @drop.prevent
                    @drop="handleDrop" @click="selectCover">
                    <img src="@/assets/img/upload_cloud.png" alt="上传图片">
                    <div class="upload-text-main">拖拽图片到此或点击上传</div>
                    <div class="upload-text-sub">建议上传4:3比例高清图片，尺寸≥1200*900</div>
                    <input type="file" ref="coverInput" @change="handleCoverChange" style="display: none;">
                </div>
                <div class="cover-select-footer-upload-btn" :style="isActiveUploadTab === 1
                    && uploadImg.uploadImgUrl === ''
                    ? '' : 'display: none;'">
                    <div class="button" @click="selectCover">
                        <span>上传图片</span>
                    </div>
                </div>
                <div class="cover-select-content-warp" :style="isActiveUploadTab === 1
                    && uploadImg.uploadImgUrl !== ''
                    ? '' : 'display: none;'">
                    <div class="cover-select-content-left">
                        <div class="cover-cropper-left-text">
                            <span>拖拽选框裁剪</span>
                            <div class="refresh-text" @mouseenter="mouseRefresh = true"
                                @mouseleave="mouseRefresh = false" @click="selectCover" v-if="isActiveUploadTab === 1">
                                <svg-icon name="refresh" color="#00aeec"
                                    :style="[{ transform: mouseRefresh ? 'rotate(90deg)' : '' }]"></svg-icon>
                                <span>重换封面</span>
                            </div>
                        </div>
                        <!-- 图片裁剪 -->
                        <div class="cover-cropper-left-img">
                            <CropperCoverCropper 
                            ref="uploadCoverCropperRef"
                            v-if="uploadImg.uploadImgUrl" 
                            :src="uploadImg.uploadImgUrl"
                            coverType="upload" 
                            @updateImgPreview="updateUploadImgPreview" />
                        </div>
                        <div class="cover-cropper-left-tips">
                            <span class="tip">
                                *封面小tips：请尽量将封面关键信息放置在红色方框区域内
                            </span>
                            <span class="size">
                                已截取分辨率：
                                {{ uploadCropSize.cropImg.width.toFixed(0) }}
                                * {{ uploadCropSize.cropImg.height.toFixed(0) }}
                            </span>
                        </div>
                    </div>
                    <div class="cover-select-content-right">
                        <div class="cover-cropper-right-text">
                            <span>点击预览封面</span>
                        </div>
                        <div class="cover-cropper-right-preview-item">
                            <span class="title">4:3封面</span>
                            <span class="tag highlight">APP首页</span>
                            <div class="cover-cropper-right-img-preview" style="width: 146px; height: 109.5px">
                                <img :src="uploadImg.uploadImgUrl" :style="uploadPreview4_3.style" alt="视频4_3预览图">
                            </div>
                        </div>
                        <div class="cover-cropper-right-preview-item">
                            <span class="title">16:9封面</span>
                            <span class="tag">个人空间、相关推荐</span>
                            <div class="cover-cropper-right-img-preview" style="width: 146px; height: 82.125px">
                                <img :src="uploadImg.uploadImgUrl" :style="uploadPreview16_9.style" alt="视频16_9预览图">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cover-select-footer-pick" :style="isActiveUploadTab === 1
                    && uploadImg.uploadImgUrl !== ''
                    ? '' : 'display: none;'">
                    <div class="cover-select-footer-pick-btn">
                        <div class="button" @click="complete('upload')">
                            <span>完成</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <video id="cropperVideo" muted crossorigin="anonymous" ref="uploadVideoElement"></video>
        <canvas id="cropperCanvas" ref="canvasElement"></canvas>
    </div>
</template>
<script setup lang="ts">
import { uploadCoverBase64Api } from '@/api/upload';
import type { UploadBase64Cover } from '@/types/upload';
import type { ImgOriginal, ImgPreview } from "@/types/cropper";
import { calculateBase64MD5 } from '@/utils/md5'
import { isCoverFile } from '@/utils/imgType';
import Message from '@/components/message/Message';
import { formatTime } from '@/utils/formatTime';
import CropperCoverCropper from '@/components/cropper/CoverCropper.vue';
const videoFileUrl = ref<string>();
const isActiveUploadTab = ref<number>(0);
const isLoading = ref(true);
const sliderPosition = ref(0); // 初始位置，可以根据需要调整
const uploadVideoElement = ref<HTMLVideoElement | null>(null);
const canvasElement = ref<HTMLCanvasElement | null>(null);
const sliderContainerRef = ref<HTMLDivElement | null>(null);
const coverUrls = ref<string[]>([]); // 定义一个数组来保存封面图片URL
const coverUrl = ref<string>(); // 封面预览
const coverInput = ref<HTMLInputElement | null>(null); // 封面上传input
const showPickBar = ref(false); // 是否显示滑动条
let startX = 0;
let initialSliderX = 0;
const mouseRefresh = ref(false); // 鼠标是否移动到
const context = ref<CanvasRenderingContext2D | null>(null);
const formattedCurrentTime = ref('00:00');
const showTooltip = ref<boolean>(false);
let inTimer: string | number | NodeJS.Timeout | undefined;  // 节流计时器
const coverCropperRef = ref<InstanceType<typeof CropperCoverCropper> | null>(null);
const uploadCoverCropperRef = ref<InstanceType<typeof CropperCoverCropper> | null>(null);
const emit = defineEmits(['CropperCover']); // 裁剪封面完成回调
interface UploadImg {
    uploadImgUrl: string;
    uploadImgFile: File | undefined;
}
const uploadImg = reactive<UploadImg>({
    uploadImgUrl: "",
    uploadImgFile: undefined,

});
const preview4_3 = reactive<ImgPreview>({
    style: {
        display: 'block',
        width: 0,
        height: 0,
        transform: ""
    },
    preview: {
        width: 0,
        height: 0,
    }
});
const uploadPreview4_3 = reactive<ImgPreview>({
    style: {
        display: 'block',
        width: 0,
        height: 0,
        transform: ""
    },
    preview: {
        width: 0,
        height: 0,
    }
});
const preview16_9 = reactive<ImgPreview>({
    style: {
        display: 'block',
        width: 0,
        height: 0,
        transform: ""
    },
    preview: {
        width: 0,
        height: 0,
    }
});
const uploadPreview16_9 = reactive<ImgPreview>({
    style: {
        display: 'block',
        width: 0,
        height: 0,
        transform: ""
    },
    preview: {
        width: 0,
        height: 0,
    }
});
const cropSize = reactive<ImgOriginal>({
    width: 0,
    height: 0,
    cropImg: {
        width: 0,
        height: 0,
    }
});
const uploadCropSize = reactive<ImgOriginal>({
    width: 0,
    height: 0,
    cropImg: {
        width: 0,
        height: 0,
    }
});
interface Props {
    videoFile?: File // 视频文件对象
}
const props = withDefaults(defineProps<Props>(), {
    videoFile: undefined,
});
const activeUploadTab = (index: number) => {
    if (isActiveUploadTab.value !== index) {
        isActiveUploadTab.value = index;
        if (index === 0) {
            if (!isLoading.value) {
                showPickBar.value = true;
            } else {
                showPickBar.value = false;
            }
        }
    }
};
const tabList = ref([
    {
        id: 0,
        name: '截取封面'
    },
    {
        id: 1,
        name: '上传封面'
    }
]);

// 拖拽封面文件
const handleDrop = async (event: DragEvent) => {
    event.preventDefault();
    if (!event.dataTransfer || !event.dataTransfer.files.length) return; // 添加类型断言
    const file = event.dataTransfer.files[0];
    if (!isCoverFile(file)) {
        Message.error('请上传图片文件');
        clearFileInput();
        return;
    }
    if (file.size > 1024 * 1024 * 5) {
        Message.warning('图片大小不能超过5MB');
        clearFileInput();
        return;
    }
    uploadImg.uploadImgFile = file;
    if (uploadImg.uploadImgUrl) {
        destroyBlobUrl(uploadImg.uploadImgUrl);
    }
    uploadImg.uploadImgUrl = createImageURL(file);
};
// 选择图片
const selectCover = () => {
    if (coverInput.value) {
        coverInput.value.click();
    }
};
const updateImgPreview = (
    imgPreview4_3: ImgPreview,
    imgPreview16_9: ImgPreview,
    imgOriginal: ImgOriginal) => {
    preview4_3.style = imgPreview4_3.style;
    preview16_9.style = imgPreview16_9.style;
    cropSize.cropImg = imgOriginal.cropImg;
}

const updateUploadImgPreview = (
    imgPreview4_3: ImgPreview,
    imgPreview16_9: ImgPreview,
    imgOriginal: ImgOriginal) => {
    uploadPreview4_3.style = imgPreview4_3.style;
    uploadPreview16_9.style = imgPreview16_9.style;
    uploadCropSize.cropImg = imgOriginal.cropImg;
}
// 输入图片文件获取
const handleCoverChange = async (event: Event) => {
    if (!event.target) return; // 添加类型断言
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) return;
    const file = fileInput.files[0];
    if (!isCoverFile(file)) {
        Message.error('请上传图片文件');
        clearFileInput();
        return;
    }
    if (file.size > 1024 * 1024 * 5) {
        Message.warning('图片大小不能超过5MB');
        clearFileInput();
        return;
    }
    uploadImg.uploadImgFile = file;
    if (uploadImg.uploadImgUrl) {
        destroyBlobUrl(uploadImg.uploadImgUrl);
    }
    uploadImg.uploadImgUrl = createImageURL(file);
};
// 清除文件输入的值
const clearFileInput = () => {
    if (coverInput.value) {
        coverInput.value.value = ''; // 清除文件输入框的值
    }
};
// 初始化封面，并截取视频中的几张图片
const initCover = async (url: string, totalFramesToCapture: number) => {
    if (!uploadVideoElement.value || !canvasElement.value) return;

    uploadVideoElement.value.src = url;
    uploadVideoElement.value.onloadedmetadata = async () => {
        if (!uploadVideoElement.value || !canvasElement.value) return;
        const videoDuration = uploadVideoElement.value.duration; // 视频总时长
        if (isNaN(videoDuration)) {
            return; // 获取时长失败
        }

        // 计算每张截图之间的时间间隔，确保在有效时间段内均匀分布
        const intervalTime = videoDuration / totalFramesToCapture;
        let currentTime = 0; // 从第1s秒开始截图
        canvasElement.value.width = uploadVideoElement.value.videoWidth;
        canvasElement.value.height = uploadVideoElement.value.videoHeight;
        context.value = canvasElement.value.getContext('2d')!;
        for (let i = 0; i < totalFramesToCapture; i++) {
            await new Promise<void>(resolve => {
                if (!uploadVideoElement.value) return;
                uploadVideoElement.value.currentTime = currentTime;
                uploadVideoElement.value.onseeked = async () => {
                    requestAnimationFrame( async () => {
                        if (!uploadVideoElement.value || !canvasElement.value || !context.value) return;
                        context.value.drawImage(uploadVideoElement.value, 0, 0);
                        // 直接输出 Blob 并存入数组
                        canvasElement.value.toBlob( async blob => {
                            if (!blob) return;
                            coverUrls.value.push(createImageURL(blob));
                            if (coverUrls.value.length === 1) {
                                coverUrl.value = coverUrls.value[0];
                            }
                        }, 'image/jpeg');
                        currentTime += intervalTime; // 更新下次截图的时间点
                        resolve(); // 解决Promise，继续下一次循环
                    });
                };
            });
        }
        isLoading.value = false;
        showPickBar.value = true;
    };
};
const createImageURL = (blob: Blob | File | undefined) => {
    if (!blob) return '';
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
};
const startDrag = (e: MouseEvent | TouchEvent, eventType?: string) => {
    startX = eventType === 'touch' ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    initialSliderX = sliderPosition.value;
    window.addEventListener('mousemove', dragging);
    window.addEventListener('mouseup', stopDrag);
}
const dragging = async (e: MouseEvent | TouchEvent, eventType?: string) => {
    if (!sliderContainerRef.value) return;
    const sliderRect = sliderContainerRef.value.getBoundingClientRect();
    const newX = eventType === 'touch' ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;

    const newPosition = Math.max(0, Math.min(100,
        ((newX - startX + initialSliderX / 100 * sliderRect.width) / sliderRect.width) * 100
    ));
    sliderPosition.value = newPosition;
    clearTimeout(inTimer);
    inTimer = setTimeout(async () => {
        if (!uploadVideoElement.value) return;
        const videoDuration = uploadVideoElement.value.duration; // 视频总时长
        const timeInSeconds = videoDuration * (sliderPosition.value / 100);
        await captureImageAtTime(timeInSeconds);
    }, 200);
}

const stopDrag = async () => {
    window.removeEventListener('mousemove', dragging);
    window.removeEventListener('mouseup', stopDrag);
}

const captureImageAtTime = async (timeInSeconds: number) => {
    formattedCurrentTime.value = formatTime(timeInSeconds);
    if (!uploadVideoElement.value || !canvasElement.value) return;
    uploadVideoElement.value.currentTime = timeInSeconds;
    uploadVideoElement.value.onseeked = async () => {
        requestAnimationFrame( async () => {
            if (!uploadVideoElement.value || !canvasElement.value || !context.value) return;
            context.value.drawImage(uploadVideoElement.value, 0, 0);
            canvasElement.value.toBlob( async blob => {
                if (!blob) return;
                if (coverUrl.value) {
                    destroyBlobUrl(coverUrl.value);
                }
                coverUrl.value = createImageURL(blob);
            }, 'image/jpeg');
        });
    };
};
// 销毁bloburl 防止内存泄漏
const destroyBlobUrl = (url: string) => {
    URL.revokeObjectURL(url);
}
const complete = async (imageSrc: string) => {
    let dataUrl = undefined;
    if (imageSrc === 'video') {
        dataUrl = await coverCropperRef.value?.getDataURL();
    } else if (imageSrc === 'upload') {
        dataUrl = await uploadCoverCropperRef.value?.getDataURL();
    }
    if (dataUrl === undefined) return;
    const imageMd5 = await calculateBase64MD5(dataUrl);
    await uploadCover(imageMd5, dataUrl);
}

// 通过base64上传视频封面图片
const uploadCover = async (imageMd5: string, dataUrl: string) => {
    const upBase64Data: UploadBase64Cover = {
        identifier: imageMd5,
        base64Str: dataUrl
    }
    const response = await uploadCoverBase64Api(upBase64Data);
    if (response.code === 200) {
        response.data as UploadBase64Cover;
        emit('CropperCover', response.data?.url, false);
    }
}

onUnmounted(() => {
    window.removeEventListener('mousemove', dragging); // 移除事件监听
    window.removeEventListener('mouseup', stopDrag); // 移除事件监听
    if (videoFileUrl.value) {
        URL.revokeObjectURL(videoFileUrl.value); // 释放内存 销毁URL
    }
    if (coverUrls.value.length !== 0) {
        coverUrls.value.forEach(url => {
            destroyBlobUrl(url);
        });
    }
    if (coverUrl.value) {
        destroyBlobUrl(coverUrl.value);
    }
});
onMounted(async () => {
    if (props.videoFile) {
        videoFileUrl.value = createImageURL(props.videoFile);
        await initCover(videoFileUrl.value, 7);
    }
});
</script>

<style scoped lang="scss">
.cropper-comp {
    height: auto;

    .cropper-tabs {
        border-bottom: 1px solid #E3E6E8;

        ul {
            list-style: none;
            display: flex;
            padding: 0;
            margin: 0;
            height: 30px;

            li {
                display: block;
                cursor: pointer;
                margin-left: 40px;
            }

            .is_active_tab {
                color: var(--brand_blue);
                border-bottom: 3px solid var(--brand_blue);
            }
        }
    }

    .cropper-content {
        width: 100%;
        box-sizing: border-box;
        padding: 0 32px;
        position: relative;

        .cover-select-content-pick {
            width: 100%;
            height: auto;

            .cover-select-content-warp {
                display: flex;
                justify-content: space-between;
                margin: 24px 0 0;

                .cover-select-content-left {
                    width: 530px;
                    height: 100%;

                    .cover-cropper-left-text {
                        font-size: 14px;
                        margin: 0 0 17px;
                        height: 20px;
                        display: flex;

                        .refresh-text {
                            line-height: 20px;
                            height: 20px;
                            margin-left: 20px;
                            display: flex;
                            align-items: center;
                            cursor: pointer;
                            color: var(--brand_blue);

                            :deep(.icon-refresh) {
                                transition: transform 0.2s linear;
                                height: 18px;
                                width: 18px;
                            }

                            span {
                                margin-left: 6px;
                                font-size: 12px;
                            }
                        }
                    }

                    .cover-cropper-left-img {
                        align-self: center;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 298px;
                        position: relative;

                    }

                    .cover-cropper-left-tips {
                        display: flex;
                        align-items: center;
                        margin-top: 15px;
                        justify-content: space-between;

                        span {
                            font-size: 12px;
                        }

                        .tip {
                            color: #bbb;
                        }

                        .size {
                            color: #6a6a6a;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 16px;
                        }
                    }
                }

                .cover-select-content-right {
                    width: 166px;
                    height: 100%;

                    .cover-cropper-right-text {
                        font-size: 14px;
                        margin: 0 0 17px;
                    }

                    .cover-cropper-right-preview-item {
                        box-sizing: border-box;
                        width: 166px;
                        margin: 18px 0 0;
                        padding: 10px;
                        background: #f5f5f5;
                        border-radius: 6px;
                        cursor: pointer;

                        .title {
                            color: #18191c;
                            font-size: 12px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: normal;
                        }

                        .tag {
                            transform: scale(.83);
                            transform-origin: 0 center;
                            font-size: 10px;
                            font-style: normal;
                            line-height: 16px;
                            height: 16px;
                            margin-left: 4px;
                            color: #757575;
                            font-weight: 500;
                            white-space: nowrap;
                            max-width: 80px;
                            align-self: flex-end;
                        }

                        .highlight {
                            color: #fff;
                            background: #00a1d6;
                            border-radius: 2.40964px;
                            padding: 1px 4px;
                            vertical-align: 3px;
                            font-weight: 600;
                            align-self: center;
                        }

                        .cover-cropper-right-img-preview {
                            width: 146px;
                            overflow: hidden;
                            border-radius: 4px;
                            transition: all .5s ease-in-out;

                        }

                        &:hover {
                            background-color: #e5f5fb;
                        }
                    }
                }
            }

            .cover-select-content-pick-bar {
                box-sizing: border-box;

                .cover-slider {
                    margin: 67px 18px 0 18px;
                    height: 60px;
                    position: relative;

                    .cover-slider-list {
                        box-sizing: border-box;
                        display: flex;
                        width: 100%;
                        height: 60px;
                        overflow: hidden;

                        .cover-slider-image {
                            height: 60px;
                            width: 100px;
                        }
                    }

                    .slider-container {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 60px;
                        width: 100%;

                        .slider-dot {
                            position: absolute;
                            box-sizing: border-box;
                            bottom: -2px;
                            width: 12px;
                            height: 66px;
                            background-color: #ffffff;
                            border: 2px solid var(--brand_blue);
                            border-radius: 3px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            cursor: pointer;

                            .slider-dot-hover {
                                box-sizing: border-box;
                                width: 4px;
                                height: 30%;
                                border-left: 2px solid var(--brand_blue_hover);
                                border-right: 2px solid var(--brand_blue_hover);
                            }

                            .time-line-tooltip {
                                position: absolute;
                                display: inline-block;
                                padding: 4px 8px;
                                font-size: 13px;
                                font-family: 'HarmonyOS_Sans_SC_Medium';
                                color: #fff;
                                line-height: 20px;
                                text-align: center;
                                min-width: 32px;
                                border-radius: 8px;
                                transform: translate(-50%, -50%) scale(0.8);
                                top: -18px;
                                left: 50%;
                                background: rgba(0, 0, 0, 0.85);
                                box-shadow:
                                    0 6px 16px 0 rgba(0, 0, 0, 0.08),
                                    0 3px 6px -4px rgba(0, 0, 0, 0.12),
                                    0 9px 28px 8px rgba(0, 0, 0, 0.05);
                                pointer-events: none;
                                user-select: none;
                                outline: none;
                                opacity: 0;
                                z-index: 1;
                                transition:
                                    transform 0.25s cubic-bezier(0.78, 0.14, 0.15, 0.86),
                                    opacity 0.25s cubic-bezier(0.78, 0.14, 0.15, 0.86);

                                .tooltip-arrow {
                                    position: absolute;
                                    z-index: 9;
                                    left: 50%;
                                    bottom: 0;
                                    transform: translateX(-50%) translateY(100%) rotate(180deg);
                                    display: block;
                                    pointer-events: none;
                                    width: 16px;
                                    height: 16px;
                                    overflow: hidden;

                                    &::before {
                                        position: absolute;
                                        bottom: 0;
                                        inset-inline-start: 0;
                                        width: 16px;
                                        height: 8px;
                                        background-color: rgba(0, 0, 0, 0.85);
                                        clip-path: path('M 0 8 A 4 4 0 0 0 2.82842712474619 6.82842712474619 L 6.585786437626905 3.0710678118654755 A 2 2 0 0 1 9.414213562373096 3.0710678118654755 L 13.17157287525381 6.82842712474619 A 4 4 0 0 0 16 8 Z'
                                            );
                                        content: '';
                                    }

                                    &::after {
                                        position: absolute;
                                        width: 8.970562748477143px;
                                        height: 8.970562748477143px;
                                        bottom: 0;
                                        inset-inline: 0;
                                        margin: auto;
                                        border-radius: 0 0 2px 0;
                                        transform: translateY(50%) rotate(-135deg);
                                        box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.1);
                                        z-index: 0;
                                        background: transparent;
                                        content: '';
                                    }
                                }
                            }

                            .show-tooltip {
                                pointer-events: auto;
                                opacity: 1;
                            }
                        }
                    }

                }
            }

            .cover-select-footer-pick {
                width: 100%;
                height: 66px;
                margin: 32px 0 0 0;

                .cover-select-footer-pick-btn {
                    display: flex;
                    justify-content: center;

                    .button {
                        height: 40px;
                        width: 128px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 6px;
                        background-color: var(--brand_blue);
                        color: #ffffff;
                        cursor: pointer;

                        &:hover {
                            background-color: var(--brand_blue_hover);
                        }
                    }
                }
            }

        }

        .cropper-loading {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 366px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
            background-color: #ffffff;

            .loading-bg {
                width: 36px;
                height: 36px;
                background-size: 100% 100%;
                background-position: 50%;
                background-repeat: no-repeat;
                background-image: url(@/assets/img/platform/cover_loading.webp);
                margin: 30px auto;
            }

        }

        .cover-select-content-upload-wrap {
            width: 100%;
            height: auto;

            .cover-select-content-upload-box {
                width: 500px;
                height: 260px;
                margin: 67px 118px 51px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: center;
                border: .5px dashed var(--brand_blue);
                border-radius: 4px;
                cursor: pointer;

                img {
                    width: 105px;
                    height: 77px;
                    margin-top: 55px;
                }

                .upload-text-main {
                    font-size: 13px;
                    color: var(--brand_blue);
                    margin: 16px 0 8px;
                }

                .upload-text-sub {
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 17px;
                    color: #9499a0;
                }
            }

            .cover-select-content-warp {
                display: flex;
                justify-content: space-between;
                margin: 24px 0 0;

                .cover-select-content-left {
                    width: 530px;
                    height: 100%;

                    .cover-cropper-left-text {
                        font-size: 14px;
                        margin: 0 0 17px;
                        height: 20px;
                        display: flex;

                        .refresh-text {
                            line-height: 20px;
                            height: 20px;
                            margin-left: 20px;
                            display: flex;
                            align-items: center;
                            cursor: pointer;
                            color: var(--brand_blue);

                            :deep(.icon-refresh) {
                                transition: transform 0.2s linear;
                                height: 18px;
                                width: 18px;
                            }

                            span {
                                margin-left: 6px;
                                font-size: 12px;
                            }
                        }
                    }

                    .cover-cropper-left-img {
                        align-self: center;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 298px;
                        position: relative;

                    }

                    .cover-cropper-left-tips {
                        display: flex;
                        align-items: center;
                        margin-top: 15px;
                        justify-content: space-between;

                        span {
                            font-size: 12px;
                        }

                        .tip {
                            color: #bbb;
                        }

                        .size {
                            color: #6a6a6a;
                            font-style: normal;
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 16px;
                        }
                    }
                }

                .cover-select-content-right {
                    width: 166px;
                    height: 100%;

                    .cover-cropper-right-text {
                        font-size: 14px;
                        margin: 0 0 17px;
                    }

                    .cover-cropper-right-preview-item {
                        box-sizing: border-box;
                        width: 166px;
                        margin: 18px 0 0;
                        padding: 10px;
                        background: #f5f5f5;
                        border-radius: 6px;
                        cursor: pointer;

                        .title {
                            color: #18191c;
                            font-size: 12px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: normal;
                        }

                        .tag {
                            transform: scale(.83);
                            transform-origin: 0 center;
                            font-size: 10px;
                            font-style: normal;
                            line-height: 16px;
                            height: 16px;
                            margin-left: 4px;
                            color: #757575;
                            font-weight: 500;
                            white-space: nowrap;
                            max-width: 80px;
                            align-self: flex-end;
                        }

                        .highlight {
                            color: #fff;
                            background: #00a1d6;
                            border-radius: 2.40964px;
                            padding: 1px 4px;
                            font-weight: 600;
                            vertical-align: 3px;
                            align-self: center;
                        }

                        .cover-cropper-right-img-preview {
                            width: 146px;
                            overflow: hidden;
                            border-radius: 4px;
                            transition: all .5s ease-in-out;

                        }

                        &:hover {
                            background-color: #e5f5fb;
                        }
                    }
                }
            }

            .cover-select-footer-upload-btn {
                display: flex;
                justify-content: center;
                margin-bottom: 40px;

                .button {
                    height: 40px;
                    width: 128px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 6px;
                    background-color: var(--brand_blue);
                    color: #ffffff;
                    cursor: pointer;

                    &:hover {
                        background-color: var(--brand_blue_hover);
                    }
                }
            }

            .cover-select-footer-pick {
                width: 100%;
                height: 66px;
                margin: 32px 0 0 0;

                .cover-select-footer-pick-btn {
                    display: flex;
                    justify-content: center;

                    .button {
                        height: 40px;
                        width: 128px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 6px;
                        background-color: var(--brand_blue);
                        color: #ffffff;
                        cursor: pointer;

                        &:hover {
                            background-color: var(--brand_blue_hover);
                        }
                    }
                }
            }
        }
    }

    #cropperCanvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        pointer-events: none;
        /* 开启硬件加速 */
        transform: translateZ(0);
        backface-visibility: hidden;
        visibility: hidden;

        /* 可选：预期属性的变化 */
        will-change: transform;

    }

    #cropperVideo {
        position: absolute;
        width: 0;
        height: 0;
        top: 0;
        left: 0;
        overflow: hidden;
        opacity: 0;
        pointer-events: none;
        transform: translateZ(0);
        /* 触发硬件加速 */
        backface-visibility: hidden;
        /* 结合使用以增强效果 */
    }
}
</style>