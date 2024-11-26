import Http from '@/composables/useRequest'
import type { LoginData, LoginReq, GetCodeReq, RegisterReq } from '@/types/login'
// 登录接口
export async function loginApi(data: LoginReq) {
    return await Http.post<LoginData>('/user/account/login', data);
}
// 注册接口
export async function registerApi(data: RegisterReq) {
    return await Http.post<LoginData>('/user/account/register', data);
}
// 获取第三方授权接口
export async function authLoginApi(type: string) {
    return await Http.get<string>(`/oauth/render/${type}`);
}
// 第三方账号绑定接口
export async function authBindApi(params:object) {
    return await Http.get('/oauth/web/snsBind', params);
}
// 获取验证码接口
export async function getCodeApi(param: GetCodeReq) {
    return await Http.get('/verifyCode/get', param);
}
// 退出登录接口
export async function logoutApi() {
    return await Http.get('/user/account/logout');
}