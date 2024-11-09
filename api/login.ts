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
// 第三方登录接口
export async function authLoginApi(data: object, type: string) {
    return await Http.get<string>(`/OauthLogin/${type}/render`, data);
}
// 获取验证码接口
export async function getCodeApi(param: GetCodeReq) {
    return await Http.get('/verifyCode/get', param);
}
// 退出登录接口
export async function logoutApi() {
    return await Http.get('/user/account/logout');
}