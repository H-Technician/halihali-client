import type { CSSProperties } from 'vue'
export interface ImgOriginal {
    width: number,
    height: number,
    cropImg: cropImg;
}
export interface cropImg {
    width: number,
    height: number,
}
export interface Preview {
    width: number;
    height: number;
}
export interface ImgPreview {
    style: CSSProperties;
    preview: Preview;
}