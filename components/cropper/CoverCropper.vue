<template>
    <div class="cropper-box_wrap" 
    zoomontouch="false" 
    :style="cropCropStyle">
        <img class="cropper__img cropper-hidden" :src="props.src">
        <div class="cropper-container" touch-action="none" 
        :style="cropCropStyle" 
        ref="cropContainerRef">
            <div class="cropper-wrap-box" 
            :style="cropCropStyle">
                <div class="cropper-canvas">
                    <img :src="props.src">
                </div>
            </div>
            <div class="cropper-drag-box cropper-modal"></div>
            <div class="cropper-crop-box"
            ref="cropCropRef"
            v-if="cropBoxHeight !== 0 && cropBoxWidth !== 0"
            @mousedown.stop="handlePointMouseDown('crop', $event)"
            :style="computedCropBoxStyle">
                <span class="cropper-view-box">
                    <img :src="props.src" 
                    :style="computedCropPreviewStyle" alt="中间框预览图片">
                </span>
                <span class="cropper-point point-ne" 
                @mousedown.stop="handlePointMouseDown('ne', $event)"
                ></span>
                <span class="cropper-point point-nw" 
                @mousedown.stop="handlePointMouseDown('nw', $event)"
                ></span>
                <span class="cropper-point point-sw" 
                @mousedown.stop="handlePointMouseDown('sw', $event)"
                ></span>
                <span class="cropper-point point-se" 
                @mousedown.stop="handlePointMouseDown('se', $event)"
                ></span>
            </div>
        </div>
        <canvas id="cropCanvas" ref="canvasElement"></canvas>
    </div>
</template>
<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { ImgOriginal, ImgPreview } from "@/types/cropper";
const cropContainerRef = ref<HTMLDivElement | null>(null); 
const cropCropRef = ref<HTMLDivElement | null>(null);
const canvasElement = ref<HTMLCanvasElement | null>(null);
const isDragging = ref<boolean>(false);
const dragPoint = ref<string>('ne');
const mouseStartX = ref<number>(0);
const mouseStartY = ref<number>(0);
const cropBoxHeight = ref<number>(0);
const cropBoxWidth = ref<number>(0);
const cropBoxTranslateX = ref<number>(0);
const cropBoxTranslateY = ref<number>(0);
const cropCropWidth = ref<number>(0);
const cropCropHeight = ref<number>(0);
const ratio = 16 / 9;
interface Props {
    width?: number;
    height?: number;
    src?: string;
    coverType?: "video" | "upload";
    backgroundColor?: string;
    aspectRatio?: number;
}
const props = withDefaults(defineProps<Props>(), {
    width: 530,
    height: 298,
    src: '',
    coverType: "video",
    backgroundColor: '#000',
    aspectRatio: 4 / 3,
});
const cropCropStyle = reactive<CSSProperties>({
    width: "0px",
    height: "298px",
});
const imgOriginal = reactive<ImgOriginal>({
    width: 0,
    height: 0,
    cropImg: {
        width: 0,
        height: 0,
    }
});
const cropBoxStyle = reactive<CSSProperties>({
    width: 0,
    height: 0,
    transform: ""
});
const cropPreviewStyle = reactive<CSSProperties>({
    width: "0px",
    height: "298px",
    transform: ""
});
const imgPreview4_3 = reactive<ImgPreview>({
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
const imgPreview16_9 = reactive<ImgPreview>({
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
const emits = defineEmits(['updateImgPreview']);
const computedCropBoxStyle = computed(() => {
    if (cropBoxTranslateX.value === 0 && cropBoxTranslateY.value === 0) {
        const { transform, ...otherStyles } = cropBoxStyle;
        return otherStyles;
    } 
    return {
        ...cropBoxStyle,
        transform: getTransform(cropBoxTranslateX.value, cropBoxTranslateY.value),
    }
});
const computedCropPreviewStyle = computed(() => {
    if (cropBoxTranslateX.value === 0 && cropBoxTranslateY.value === 0) {
        const { transform, ...otherStyles } = cropPreviewStyle;
        return otherStyles;
    } 
    return {
        ...cropPreviewStyle,
        transform: getTransform(- cropBoxTranslateX.value, - cropBoxTranslateY.value),
    }
});
const getTransform = (translateX: number, translateY: number) => {
    let transformString = '';
    if (translateX !== 0) {
        transformString += `translateX(${translateX}px) `;
    }
    if (translateY !== 0) {
        transformString += `translateY(${translateY}px)`;
    }
    return transformString.trim();
}
const getPreviewTransform = (): { preview4_3Tr: string; preview16_9Tr: string;} => {
    let preview4_3Tr = '';
    let preview16_9Tr = '';
    let transformString = `translateX(${ - (cropBoxTranslateX.value / cropCropWidth.value) * imgPreview4_3.preview.width}px) `;
    preview16_9Tr += transformString;
    if (cropBoxTranslateX.value !== 0) {
        preview4_3Tr += transformString;
    }
    preview16_9Tr += `translateY(${ - ((cropBoxTranslateY.value + (cropBoxHeight.value - (cropBoxWidth.value / ratio)) / 2 ) / cropCropHeight.value) * imgPreview4_3.preview.height}px)`;
    if (cropBoxTranslateY.value !== 0) {
        preview4_3Tr += `translateY(${ - (cropBoxTranslateY.value / cropCropHeight.value) * imgPreview4_3.preview.height}px)`;
    }
    preview4_3Tr.trim();
    preview16_9Tr.trim();
    return { preview4_3Tr, preview16_9Tr };
}

const handlePointMouseDown = (point: string, event: MouseEvent) =>{
    event.preventDefault();
    isDragging.value = true;
    dragPoint.value = point;
    const { clientX, clientY } = event;
    if (!cropContainerRef.value) return;
    mouseStartX.value = clientX;
    mouseStartY.value = clientY;
    cropContainerRef.value?.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
}
const  handleMouseMove = (event: MouseEvent) => {
    if (!isDragging.value) return;
    const { clientX, clientY } = event;
    if (!cropContainerRef.value) return;
    let deltaX = clientX - mouseStartX.value;
    let deltaY = clientY - mouseStartY.value;
    if (dragPoint.value !== 'crop') {
        deltaX = deltaY * props.aspectRatio;
    }
    mouseStartX.value = clientX;
    mouseStartY.value = clientY;
    switch (dragPoint.value) {
        case 'ne':  
            if (cropBoxTranslateY.value === 0 && (deltaY < 0)) break;
            if (cropBoxWidth.value === cropCropWidth.value && (deltaY < 0)) break;
            adjustSize(-deltaY, deltaX);
            cropBoxTranslateY.value = Math.min(Math.max(0.0000, cropBoxTranslateY.value + deltaY), (cropCropHeight.value - 60.0000));
            updateImgPreview();
            emits('updateImgPreview', imgPreview4_3, imgPreview16_9, imgOriginal);
            break;
        case 'nw':  
            if (cropBoxTranslateY.value === 0 && (deltaY < 0 || deltaX < 0)) break;
            if (cropBoxWidth.value === cropCropWidth.value && (deltaY < 0 || deltaX < 0)) break;
            adjustSize(-deltaY, -deltaX);
            cropBoxTranslateX.value = Math.min(Math.max(0.0000, cropBoxTranslateX.value + deltaX), (cropCropWidth.value - 80.0000));
            cropBoxTranslateY.value = Math.min(Math.max(0.0000, cropBoxTranslateY.value + deltaY), (cropCropHeight.value - 60.0000));
            updateImgPreview();
            emits('updateImgPreview', imgPreview4_3, imgPreview16_9, imgOriginal);
            break;
        case 'sw': 
            if (cropBoxTranslateX.value === 0 && deltaY > 0) break;
            if ((cropBoxHeight.value === (cropCropHeight.value - cropBoxTranslateY.value)) && deltaY > 0) break;
            cropBoxTranslateX.value = Math.min(Math.max(0.0000, cropBoxTranslateX.value - deltaX), (cropCropWidth.value - 80.0000));
            adjustSize(deltaY, -deltaX);
            updateImgPreview();
            emits('updateImgPreview', imgPreview4_3, imgPreview16_9, imgOriginal);
            break;
        case 'se': 
            if ((cropBoxTranslateX.value === (cropCropWidth.value - cropBoxWidth.value)) && deltaY > 0) break;
            adjustSize(deltaY, deltaX);
            updateImgPreview();
            emits('updateImgPreview', imgPreview4_3, imgPreview16_9, imgOriginal);
            break;
        case 'crop':
            cropBoxTranslateX.value = Math.min(Math.max(0.0000, cropBoxTranslateX.value + deltaX), cropCropWidth.value - cropBoxWidth.value);
            cropBoxTranslateY.value = Math.min(Math.max(0.0000, cropBoxTranslateY.value + deltaY), cropCropHeight.value - cropBoxHeight.value);
            updateImgPreview();
            emits('updateImgPreview', imgPreview4_3, imgPreview16_9, imgOriginal);
            break;
    }
}
const handleMouseUp = () => {
    isDragging.value = false;
    dragPoint.value = '';
    cropContainerRef.value?.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
}
const adjustSize = (deltaHeight: number, deltaWidth: number) => {
    let newHeight = cropBoxHeight.value + deltaHeight;
    let newWidth = cropBoxWidth.value + deltaWidth;
     
    // 宽度增加过多，调整高度以保持比例
    if (newWidth - newWidth >= 1 || newWidth - newWidth <= 1) {
        newWidth = newHeight * props.aspectRatio;
    }
    // newWidth = newHeight * props.aspectRatio;
    cropBoxHeight.value = Math.min(Math.max(60, newHeight), cropCropHeight.value - cropBoxTranslateY.value);
    cropBoxStyle.height = cropBoxHeight.value + "px";
    const cropPro = cropBoxHeight.value / cropCropHeight.value;
    const imgPreviewHeight = 109.5 / cropPro;
    imgPreview4_3.preview.height = imgPreviewHeight;
    imgPreview4_3.style.height = imgPreviewHeight + "px";
    imgPreview16_9.preview.height = imgPreviewHeight;
    imgPreview16_9.style.height = imgPreviewHeight + "px";
    imgOriginal.cropImg.height = imgOriginal.height * cropPro;
    imgOriginal.cropImg.width = imgOriginal.cropImg.height * props.aspectRatio;
    
    if (cropBoxHeight.value === cropCropHeight.value) {
        cropBoxWidth.value = cropBoxHeight.value * props.aspectRatio;
        cropBoxStyle.width = cropBoxWidth.value + "px";
        const cropRatio = cropBoxWidth.value / cropCropWidth.value;
        const imgPreviewWidth = 146 / cropRatio;
        imgPreview4_3.preview.width = imgPreviewWidth;
        imgPreview4_3.style.width = imgPreviewWidth + "px";
        imgPreview16_9.preview.width = imgPreviewWidth;
        imgPreview16_9.style.width = imgPreviewWidth + "px";
        return;
    }
    cropBoxWidth.value = Math.min(Math.max(80.0000, newWidth), cropCropWidth.value - cropBoxTranslateX.value);
    cropBoxStyle.width = cropBoxWidth.value + "px";
    const cropRatio = cropBoxWidth.value / cropCropWidth.value;
    const imgPreviewWidth = 146 / cropRatio;
    imgPreview4_3.preview.width = imgPreviewWidth;
    imgPreview4_3.style.width = imgPreviewWidth + "px";
    imgPreview16_9.preview.width = imgPreviewWidth;
    imgPreview16_9.style.width = imgPreviewWidth + "px";
}
const updateImgPreview = () => {
    const { preview4_3Tr, preview16_9Tr } = getPreviewTransform();
    imgPreview16_9.style.transform = preview16_9Tr;
    if (cropBoxTranslateX.value === 0 && cropBoxTranslateY.value === 0) {
        const review4_3 = imgPreview4_3;
        const { transform, ...pr4_3Styles } = review4_3.style;
        imgPreview4_3.style = pr4_3Styles;
        return;
    }
    imgPreview4_3.style.transform = preview4_3Tr;
}
// 初始化
const init = async (src: string) => {
    const image = new Image();
    image.src = src;
    image.onload = async () => {
        // 图片加载完成，设置容器大小
        const imageWidth = image.width;
        const imageHeight = image.height;
        imgOriginal.width = imageWidth;
        imgOriginal.height = imageHeight;
        const imageRatio = imageWidth / imageHeight;
        if (imageRatio > ratio) {
            const imgHeight = props.width / imageRatio;
            const imgWidth = props.width;
            cropCropStyle.width = imgWidth + "px";
            cropCropStyle.height = imgHeight + "px";
            cropPreviewStyle.height = imgHeight + "px";
            cropPreviewStyle.width = imgWidth + "px";
            cropCropWidth.value = imgWidth;
            cropCropHeight.value = imgHeight;
            cropBoxHeight.value = imgHeight;
            cropBoxStyle.height = imgHeight + "px";
            const cropWidth = imgHeight * props.aspectRatio;
            cropBoxWidth.value = cropWidth;
            cropBoxStyle.width = cropWidth + "px";
            cropBoxTranslateX.value = (props.width - cropWidth) / 2;
            cropBoxTranslateY.value = 0;
        } else if (imageRatio <= ratio ) {
            const imgWidth = imageRatio * props.height;
            const imgHeight = props.height;
            cropCropStyle.width = imgWidth + "px";
            cropCropStyle.height = imgHeight + "px";
            cropPreviewStyle.height = imgHeight + "px";
            cropPreviewStyle.width = imgWidth + "px";
            cropCropWidth.value = imgWidth;
            cropCropHeight.value = imgHeight;
            if (imageRatio <= props.aspectRatio) {
                cropBoxHeight.value = imgWidth / props.aspectRatio;
                cropBoxWidth.value = imgWidth;
                cropBoxStyle.height = cropBoxHeight.value + "px";
                cropBoxStyle.width = imgWidth + "px";
                cropBoxTranslateX.value = 0;
                cropBoxTranslateY.value = (props.height - cropBoxHeight.value) / 2;
            } else {
                cropBoxHeight.value = imgHeight;
                const cropWidth = imgHeight * props.aspectRatio;
                cropBoxWidth.value = cropWidth;
                cropBoxStyle.height = imgHeight + "px";
                cropBoxStyle.width = cropWidth + "px";
                cropBoxTranslateX.value = (imgWidth - cropWidth) / 2;
                cropBoxTranslateY.value = 0;
            }
        }
        const imgPreviewHeight = 109.5 / (cropBoxHeight.value / cropCropHeight.value);
        imgPreview4_3.preview.height = imgPreviewHeight;
        imgPreview4_3.style.height = imgPreviewHeight + "px";
        imgPreview16_9.preview.height = imgPreviewHeight;
        imgPreview16_9.style.height = imgPreviewHeight + "px";
        if (cropBoxHeight.value === cropCropHeight.value) {
            const cropRatio = cropBoxWidth.value / cropCropWidth.value;
            const imgPreviewWidth = 146 / cropRatio;
            imgPreview4_3.preview.width = imgPreviewWidth;
            imgPreview4_3.style.width = imgPreviewWidth + "px";
            imgPreview16_9.style.width = imgPreviewWidth + "px";
            imgPreview16_9.preview.width = imgPreviewWidth;
            updateImgPreview();
            imgOriginal.cropImg.height = imgOriginal.height * (cropBoxHeight.value / cropCropHeight.value);
            imgOriginal.cropImg.width = imgOriginal.cropImg.height * props.aspectRatio;
            emits('updateImgPreview', imgPreview4_3, imgPreview16_9, imgOriginal);
            return;
        }
        const cropRatio = cropBoxWidth.value / cropCropWidth.value;
        const imgPreviewWidth = 146 / cropRatio;
        imgPreview4_3.preview.width = imgPreviewWidth;
        imgPreview4_3.style.width = imgPreviewWidth + "px";
        imgPreview16_9.style.width = imgPreviewWidth + "px";
        imgPreview16_9.preview.width = imgPreviewWidth;
        updateImgPreview();
        imgOriginal.cropImg.height = imgOriginal.height * (cropBoxHeight.value / cropCropHeight.value);
        imgOriginal.cropImg.width = imgOriginal.cropImg.height * props.aspectRatio;
        emits('updateImgPreview', imgPreview4_3, imgPreview16_9, imgOriginal);
    }
}
const getDataURL = async () => {
    if (!canvasElement.value) return;
    canvasElement.value.width = imgOriginal.cropImg.width;
    canvasElement.value.height = imgOriginal.cropImg.height;
    const image = new Image();
    image.src = props.src;
    return new Promise<string>((resolve, reject) => {
        image.onload = async () => {
            try {
                if (!canvasElement.value) return;
                const context = canvasElement.value.getContext('2d')!;
                context.drawImage(
                image,
                (cropBoxTranslateX.value / cropCropWidth.value) * imgOriginal.width,
                (cropBoxTranslateY.value / cropCropHeight.value) * imgOriginal.height,
                imgOriginal.cropImg.width,
                imgOriginal.cropImg.height,
                0, 0, imgOriginal.cropImg.width, imgOriginal.cropImg.height);

                const imageUrl = canvasElement.value.toDataURL('image/jpeg');
                resolve(imageUrl);
            } catch (error) {
                reject(error);
            }
        
        }
        image.onerror = (error) => {
            reject(error);
        };
    }); 
}
defineExpose({
    getDataURL
});
watch(() => props.src, (newsrc) =>{
    if (props.coverType === 'upload') {
        init(newsrc);
    }
});
onMounted(async() => {
    await init(props.src);
});
onUnmounted(() => {
    cropContainerRef.value?.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
});
</script>
<style scoped lang="scss">
.cropper-box_wrap {
    align-self: center;
    max-height: 298px;
    max-width: 530px;
    background-color: #000;
    text-align: center;
    position: relative;

    .cropper__img {
        display: block;
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        
    }

    .cropper-hidden {
        display: none !important;
    }

    .cropper-container {
        direction: ltr;
        font-size: 0;
        line-height: 0;
        position: relative;
        touch-action: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        .cropper-wrap-box {

            .cropper-canvas {
                overflow: hidden;

                img {
                    backface-visibility: hidden;
                    display: block;
                    height: 100%;
                    image-orientation: 0deg;
                    max-height: none !important;
                    max-width: none !important;
                    min-height: 0 !important;
                    min-width: 0 !important;
                    width: 100%;
                }
            }
        }

        .cropper-modal {
            background-color: #000;
            opacity: .5;
        }

        .cropper-crop-box {
            box-sizing: border-box;
            cursor: move;
            
            .cropper-view-box {
                display: block;
                height: 100%;
                overflow: hidden;
                width: 100%;
                outline: 2px solid #f69;

                img {
                    display: block;
                    height: 100%;
                    image-orientation: 0deg;
                    max-height: none !important;
                    max-width: none !important;
                    min-height: 0 !important;
                    min-width: 0 !important;
                    width: 100%;
                }
            }

            .cropper-point {
                position: absolute;
                display: block;
                border-radius: 50%;
                background: #f69;
                width: 16px;
                height: 16px;

            }

            .point-ne {
                cursor: nesw-resize;
                right: -8.5px;
                top: -7px;
            }

            .point-nw {
                cursor: nwse-resize;
                left: -8px;
                top: -7px;
            }

            .point-sw {
                bottom: -7px;
                cursor: nesw-resize;
                left: -8px;
            }

            .point-se {
                bottom: -7px;
                cursor: nwse-resize;
                right: -8.5px;

                &::before {
                    background-color: #f69;
                    opacity: 0;
                    bottom: -50%;
                    content: " ";
                    display: block;
                    height: 200%;
                    opacity: 0;
                    position: absolute;
                    right: -50%;
                    width: 200%;
                }
            }
        }
    }

    #cropCanvas {
        width: 0;
        pointer-events: none;
        /* 开启硬件加速 */
        transform: translateZ(0);
        backface-visibility: hidden;
        visibility: hidden;

        /* 可选：预期属性的变化 */
        will-change: transform;
    }
}

.cropper-wrap-box,
.cropper-canvas,
.cropper-drag-box,
.cropper-crop-box {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}
</style>