// 视频上传请求数据
export interface FileChunk {
    identifier: string,
    skipUpload: boolean,
    uploaded: [],
}
// 上传进度
export interface UploadProgress {
    startTime: number;
    bytesUploaded: number;
    totalSize: number; // 文件总大小
}
// 视频数据
export interface UploadVideo {
    original: string;
    title: string;
    type: number;
    auth: string;
    duration: number;
    category_id: number;
    sub_category_id: number;
    tags: string;
    descr: string;
    cover_url4x3: string;
    cover_url16x9: string;
}
// 视频数据
export interface VideoData {
    videoFileData: VideoFileData; // 视频数据
    coverData: CoverData; // 封面数据
    videoFromData: VideoFromData; // 视频投稿信息
    
}
// 原始数据
export interface VideoFileData {
    file: File; // 视频文件对象
    url: string; // 视频本地地址
    identifier: string; // 唯一标识符 由后端返回
    videoName: string; // 视频文件名称
    duration: number; // 视频时长
    numberChunks: number; // 分片总数
    videoSize: number; // 视频大小
    uploaded: number[]; // 已经上传的分片集合
    isComplete: boolean; // 是否上传完成
    isMergeStatus: string; // 合并状态
    uploadSpeed: number; // 上传速度
    uploadRemainingTime: number; // 上传剩余时间
    progress: number; // 上传进度
    uploadVideoSize: number; // 已上传大小
    isPauseUpload: boolean; // 是否暂停上传
    uploadProgress: UploadProgress; // 上传进度
    abortControllerId: string; // 控制视频上传控制唯一标识符
}
// 封面数据
export interface CoverData {
    coverUrls: string[]; // 封面地址数组
    coverSelectedUrl: string; // 选中封面的地址
}
// 视频投稿信息
export interface VideoFromData {
    title: string; // 视频标题
    type: number; // 视频类型
    categoryId: number; // 主分类id
    subCategoryId: number; // 子分类id
    tags: string[]; // 标签
    descr: string; // 视频描述
}
// 上传封面数据
export interface UploadBase64Cover {
    identifier: string;
    base64Str: string;
    url?: string;
}
// 定时发布
export interface TimingPublish {
    isTiming: boolean; // 是否定时发布
    publishTime: string; // 定时发布时间
}
// 作者声明
export interface AuthorDeclaration {
    isAgree: boolean; // 是否同意
    isShow: boolean; // 是否显示
}
// 是否加入集合
export interface Collection {
    isCollection: boolean; // 是否加入集合
    collectionId: number; // 集合id
}
export interface UploadProgress {
    startTime: number; // 开始时间
    bytesUploaded: number; // 已上传大小
    bytesUploadedInWindow: number; // 上传窗口内已上传大小
    totalSize: number; // 总大小
}

export interface UploadChunkData {
    identifier?: String; // 唯一标识符
    filename: String; // 文件名
    file?: Blob | File; // 文件对象
    chunkNumber?: number | null; // 当前分片序号
    chunkSize : number; // 分片大小
    currentChunkSize?: number | null; // 当前分片大小
    totalChunks: number; // 分片总数
    totalSize: number; // 文件总大小
    success?: boolean | null; // 是否上传成功
}