// 鼠标轨迹数据
export interface TempPoints {
    x: number;
    y: number;
    t: number;
    type: string;
}
// 获取验证码请求数据
export interface CaptchaReq {
    // 验证码类型
    type: string;
}
// 服务端响应返回验证码数据
export interface CaptchaData {
    id: string;
    captcha: Captcha;
}
export interface Captcha {
    type: string;
    backgroundImage: string;
    templateImage: string;
    backgroundImageTag: string;
    templateImageTag: string;
    backgroundImageWidth: number;
    backgroundImageHeight: number;
    templateImageWidth: number;
    templateImageHeight: number;
    data: Data;
}
export interface Data {
    randomY: number;
}
// 验证码回传检查数据
export interface CheckCaptchaData {
    id: string;
    data: CheckCaptcha;
}
export interface CheckCaptcha {
    bgImageWidth: number; // 背景图片宽度
    bgImageHeight: number; // 背景图片高度
    templateImageWidth: number; // 模板图片宽度
    templateImageHeight: number; //模板图片高度
    startTime: number; // 验证码开始时间
    stopTime: number; // 验证码结束时间
    left: number; // 滑块移动距离
    trackList: TempPoints[],
}