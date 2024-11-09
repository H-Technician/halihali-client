// 服务端返回的登录数据
export interface LoginData {
    device: string;
    loginType: string;
    hl_ticket: string;
    hl_ticket_expires: number;
    uid: string;
}
// 登录请求参数
export interface LoginReq {
    captchaId: string;
    loginType: string;
    device: string;
    uid: string;
    phone: string;
    mail: string;
    password: string;
}  
// 注册请求参数
export interface RegisterReq {
    registerType: string;
    device: string;
    phone: string;
    mail: string;
    verifyCode: string;
}
// 获取验证码参数
export interface GetCodeReq {
    codeType: string;
    phone: string;
    mail: string;
}