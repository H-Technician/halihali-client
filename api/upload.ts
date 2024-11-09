import Http from '@/composables/useRequest'
import type { Auth } from '@/types/auth'
import type { FileChunk, UploadBase64Cover, UploadChunkData } from '@/types/upload';
// 获取创作者声明列表接口
export async function getAuthApi() {
    return await Http.get<Auth[]>('/upload/video/auth/get');
}
// 请求检查文件是否上传接口
export async function getChunkApi(data: UploadChunkData) {
    return await Http.get<FileChunk>('/upload/video/getChunk', data);
}
// 请求上传文件接口
export async function uploadChunkApi(formData: FormData, signal: AbortSignal) {
    return await Http.post('/upload/video/uploadChunk', formData, signal);
}
// 请求合并文件接口
export async function chunkMergeApi(data: object) {
    return await Http.post('/upload/video/chunkMerge', data);
}
// 请求上传封面文件接口
export async function uploadCoverBase64Api(uploadBase64Cover: UploadBase64Cover) {
    return await Http.post<UploadBase64Cover>('/image/web/cover/upload', uploadBase64Cover);
}
// 请求投稿接口
export async function contributeVideoApi(data: object) {
    return await Http.post('/upload/video/contribute', data);
}
// 请求保存为草稿接口
export async function draftVideoApi(data: object) {
    return await Http.post('/upload/video/draft', data);
}