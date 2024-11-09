import type { CaptchaReq, CaptchaData, CheckCaptchaData } from '@/types/captcha'
import Http from '@/composables/useRequest'
// 获取行为验证码接口
export async function getCaptchaApi(param: CaptchaReq) {
    return await Http.get<CaptchaData>('/captcha/get', param);
}
// 随机获取行为验证码接口
export async function getRandomCaptchaApi(param: CaptchaReq) {
    return await Http.get<CaptchaData>('/captcha/get', param);
}
// 验证行为验证码接口
export async function checkCaptchaApi(data: CheckCaptchaData) {
    return await Http.post<CaptchaData>('/captcha/check', data);
}
export async function check2CaptchaApi(param: object) {
    return await Http.get<CaptchaData>('/captcha/check2', param);
}
