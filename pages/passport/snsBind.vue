<template>
    <Title>账号绑定</Title>
    <div class="sns-bind_warp"> 
        <HeaderBar :isFixedHeader="true" />
        <div class="sns-bind-top-warp">
            <div class="sns-bind-top-area">
                <img src="@/assets/img/rl_top.png" alt="">
            </div>
        </div>
        <div class="sns-bind-area">
            <div class="sns-bind-login">
                    <div class="sns-card">
                        <div class="sns-left">
                            <div class="sns_thrid_content">
                                <div class="sns_thrid_blok" v-if="snsBinType === 'qq'">
                                    <div class="sns_thrid_item sns_thrid_qq"></div>
                                    <div class="sns_thrid_name">QQ</div>
                                </div>
                                <div class="sns_thrid_blok" v-if="snsBinType === 'weibo'">
                                    <div class="sns_thrid_item sns_thrid_weibo"></div>
                                    <div class="sns_thrid_name">微博</div>
                                </div>
                                <div class="sns_thrid_blok" v-if="snsBinType === 'alipay'">
                                    <div class="sns_thrid_item sns_thrid_alipay"></div>
                                    <div class="sns_thrid_name">支付宝</div>
                                </div>
                                <div class="sns_thrid_arrow"></div>
                                <div class="sns_thrid_blok">
                                    <div class="sns_hl_logo"></div>
                                    <div class="sns_thrid_name">哈哩哈哩</div>
                                </div>
                            </div>
                            <div class="sns_thrid_info">已有哈哩哈哩账号？输入账号信息登录立即绑定</div>
    
                        </div>
                        <div class="Vertical-line">
                        </div>
                        <div class="sns-register-container">
                            <div class="sns-register_header">
                                <div class="navs">
                                    <div class="navs-item" @click="switchLoginCard('password')" :class="isCardActive === 'password' ? 'active' : ''">
                                        密码登录
                                    </div>
                                    <div class="navs-item" @click="switchLoginCard('verificationCode')" :class="isCardActive === 'verificationCode' ? 'active' : ''">
                                        验证码登录
                                    </div>
                                    <div class="navs-item" @click="switchLoginCard('scan')" :class="isCardActive === 'scan' ? 'active' : ''">
                                        扫码登录
                                    </div>
                                </div>
                            </div>
                            <div class="login-register_content">
                                <div class="login-box" v-if="isCardActive === 'password'">
                                    <form class="input-box input-box-top">
                                        <span>账号</span>
                                        <input type="text" placeholder="请输入账号" v-model="usernameLogin" maxlength="32">
                                    </form>
                                    <form class="input-box input-box-bottom">
                                        <span>密码</span>
                                        <input 
                                        :type="isxianshimima 
                                        ? 'text' 
                                        : 'password'" 
                                        placeholder="请输入密码" 
                                        v-model="passwordLogin" 
                                        maxlength="32"
                                        autocomplete="off">
                                        <IconsLoginreistetZhengYan class="xianshimima" v-if="isxianshimima" @click="YincangMima"/>
                                        <IconsLoginreistetBiYan class="yincangmima" v-else @click="XianshiMima"/>
                                        <Popover popStyle="padding-top: 14px;" placement="bottom" trigger="click">
                                            <template #reference>
                                                <button class="wjma" @click="(event) => {event.preventDefault();}">忘记密码？</button>
                                            </template>
                                            <template #content>
                                                <div class="wjma-box" style="width: 300px;">
                                                    <div @click="switchLoginCard('verificationCode')">
                                                        <div class="wjma-text">
                                                            <span>发送验证码快捷登录</span>
                                                        </div>
                                                        <div class="wjma-text text-tips">
                                                            <span>未注册或绑定哈哩哈哩的手机号或邮箱，将帮你注册新账号</span>
                                                        </div> 
                                                    </div>
                                                    <div style="margin-top: 10px;">
                                                        <div class="wjma-text">
                                                            <span>去找回密码</span>
                                                        </div>
                                                        <div class="wjma-text text-tips">
                                                            <span>发送验证码快捷登录</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                        </Popover>
                                    </form>
                                    <div class="submit-box">
                                        <button class="submit-register" @click="switchLoginCard('verificationCode')">没有账号？立即注册</button>
                                        <button class="submit" @click="login" :class="agreement ? '' : 'disabled'">授权并登录</button>
                                    </div>
                                </div>
                                <div class="register-box" v-if="isCardActive === 'verificationCode'">
                                    <form class="input-box input-box-top">
                                        <!-- <span>手机号</span> -->
                                        <LoginreisterLoginTypeSelect @select="selectRegisterType"/>
                                        <input type="text" :placeholder="registerPlaceholder" :maxlength="inputMaxLength" :clearable="true" v-model="registerNumber">
                                        <button class="yzm" @click="getYzm" v-bind:disabled="isBtnDisabled" :style="isBtnDisabled ? 'cursor: not-allowed; color: #808385;' : 'color: #00aeec;'">{{ yzmTimeText }}</button>
                                    </form>
                                    <form class="input-box input-box-bottom">
                                        <span>验证码</span>
                                        <input type="text" placeholder="请输入验证码" maxlength="6" v-model="verificationCode">
                                    </form>
                                    <button  class="submit" @click="register" :class="agreement ? '' : 'disabled'">授权并登录/注册</button>
                                </div>
                                <div class="scan-box" v-if="isCardActive === 'scan'">
                                    <div class="scan__qrcode">
                                        <div class="qrcode"></div>
                                        <div class="qrcode__tip" :style="agreement ? 'opacity: 0;' : ''">
                                            <img src="@/assets/img/qrcode-tip.png">
                                            <span>请先阅读并勾选</span>
                                            <span>同意下方协议</span>
                                        </div>
                                    </div>
                                    <p>使用手机 <a target="_blank" href="" class="clickable">哈哩哈哩客户端</a></p>
                                    <p>扫码登录立即绑定</p>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div class="tips" ><input type="checkbox" class="checkbox" v-model="agreement">我已阅读并同意<span class="agreement">用户协议</span>&nbsp;和&nbsp;<span class="agreement">隐私政策</span></div>                 
            </div>
        </div>
        <!-- Captcha验证码弹出框 -->
        <Captcha @isshowCaptcha="isshowCaptcha" v-if="showCaptchaBox"></Captcha>
    </div>
</template>
<script setup lang="ts">
import { loginApi, registerApi, authLoginApi, getCodeApi } from '@/api/login'
import type { LoginReq, GetCodeReq, RegisterReq } from '@/types/login';
import { localStoragejwt } from '@/utils/localStorageJwt';
import Message from '@/components/message/Message';
const registerPlaceholder = ref("请输入手机号");
const isxianshimima = ref(false);
const usernameLogin = ref("");
const passwordLogin = ref("");
const registerNumber = ref("");
const verificationCode = ref("");
const isBtnDisabled = ref(false);
const totalTime = 60;                // 倒计时时间
const countingDown = ref(false);     // 倒计时状态
const isMousemove = ref(false); // 鼠标是否移到二维码上
const isCardActive = ref("password");
const showCaptchaBox = ref(false);
const loginType = ref("");
const registerType = ref("phone");
const inputMaxLength = ref(11);
// 定义正则表达式用于判断登录类型
const uidRegex = /^[1-9]\d{17}$/; // 18位数字，首位不能为0
const phoneRegex = /^1[3-9]\d{9}$/; // 11位数字
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 常见的邮箱格式
const snsBinType = ref("weibo");
const agreement = ref(false);
// captcha验证回调
const isshowCaptcha = (captchaId: string) => {
    showCaptchaBox.value = false;
    if (captchaId !== '') {
        loginRequest(captchaId);
    }
}
// 登录请求数据对象
const loginReqData = reactive<LoginReq>({
    captchaId: "",
    loginType: "",
    uid: "",
    phone: "",
    mail: "",
    password: "",
    device: "web_client",
});
// 获取验证码数据对象
const getCodeReqData = reactive<GetCodeReq>({
    codeType: "",
    phone: "",
    mail: ""
});
// 注册请求数据对象
const registerReqData = reactive<RegisterReq>({
    registerType: "",
    device: "web_client",
    phone: "",
    mail: "",
    verifyCode: ""
});
// 倒计时剩余时间
const remainingTime = reactive ({
    seconds: totalTime
})
// 计时器变量
let timer: NodeJS.Timeout | null = null
 
// 倒计时
const startCountingDown = () => {
    if (!countingDown.value) {
        let clicktime = new Date().getTime() + 60000;   //未来60秒，这里也毫秒为单位
        sessionStorage.setItem('EndTime', JSON.stringify(clicktime));  //存入sessionStorage
        countingDown.value = true
        remainingTime.seconds = totalTime
    }
    timer = setInterval(() => {
        if (remainingTime.seconds > 0) {
            remainingTime.seconds--
        } else {
            stopCountingDown()
        }
    },1000)
}
 
// 倒计时停止
const stopCountingDown = () => {
    if (timer) {
        clearInterval(timer)
        timer = null
        countingDown.value = false
        sessionStorage.removeItem('EndTime')  //计时完后清除sessionStorage
    }
    
}
// 短信按钮文字切换
const yzmTimeText = computed (() => (countingDown.value ? remainingTime.seconds +"秒后重试" : "获取验证码"));
// 获取验证码
const getYzm = async (event: Event)  => {
    event.preventDefault();
    // 为了减小后端压力，首先对格式进行验证
    if (registerType.value === "phone") {
        if (phoneRegex.test(registerNumber.value)) {
            getCodeReqData.codeType = "phone";
            getCodeReqData.phone = registerNumber.value;
            await getVerificationCode(getCodeReqData);
            startCountingDown()
        } else if (registerNumber.value === "") {
            Message.error("手机号不能为空");
        } else {
            Message.error("手机号格式不正确");
        }
    } else if (registerType.value === "mail") {
        if (emailRegex.test(registerNumber.value)) {
            getCodeReqData.codeType = "mail";
            getCodeReqData.mail = registerNumber.value;
            await getVerificationCode(getCodeReqData);
            startCountingDown()
        } else if (registerNumber.value === "") {
            Message.error("邮箱不能为空");
        } else {
            Message.error("邮箱格式不正确");
        }
    }
};
// 请求验证码接口
const getVerificationCode = async (getCodeReqData: GetCodeReq) => {
    const response = await getCodeApi(getCodeReqData);
    if (response.code === 200) {
        Message.success(response.msg);
        resetCodeForm();
    } else {
        Message.error(response.msg);
        resetCodeForm();
    }
};
// 监听按钮是否倒数120s 实现按钮点击事件的禁用
watchEffect (() => {  
    // console.log(phoneNumber.value);
    if (countingDown.value) {
        isBtnDisabled.value=true;
    }else {
        isBtnDisabled.value=false;
    }
})

const YincangMima = () => {
    isxianshimima.value = false;
    // console.log(isxianshimima)
}
const XianshiMima = () => {
    isxianshimima.value = true;
    // console.log(isxianshimima)
}
const switchLoginCard = (loginType: string) => {
    if (loginType === isCardActive.value) {
        return;
    }
    isCardActive.value = loginType;
}

// 登录请求
const loginRequest = async (captchaId: string) => {
    switch (loginType.value) {
        case 'uid':
            loginReqData.uid = usernameLogin.value;
            break;
        case 'phone':
            loginReqData.phone = usernameLogin.value;
            break;
        case 'mail':
            loginReqData.mail = usernameLogin.value;
            break;
    }
    loginReqData.captchaId = captchaId;
    const response = await loginApi(loginReqData);
    if (response.code === 200 && response.data) {
        Message.success(response.msg);
        localStoragejwt(
            response.data.device, 
            response.data.loginType, 
            response.data.hl_ticket, 
            response.data.hl_ticket_expires,
            response.data.uid
        );
        resetLoginForm();
        history.replaceState({}, document.title, "/platform/home"); // 刷新页面 清除浏览器历史 防止用户返回到登录页
        window.open('/platform/home', '_self') // 跳转投稿中心页保证刷新页面
    } else {
        Message.error(response.msg);
        resetLoginForm();
    }
}

const determineInputType = (input: string): string => {
    if (uidRegex.test(input)) {
        return 'uid';
    } else if (phoneRegex.test(input)) {
        return 'phone';
    } else if (emailRegex.test(input)) {
        return 'mail';
    } else {
        return 'Unknown';
    }
}
// 登录
const login = async () => {
    if (usernameLogin.value === "") {
        Message.error("账号不能为空");
        return;
    } else if (passwordLogin.value === "") {
        Message.error("密码不能为空");
        return;
    }
    // 确定登录类型
    loginType.value = determineInputType(usernameLogin.value);
    if (loginType.value === 'Unknown') {
        Message.error("账号错误");
        return;
    }
    loginReqData.loginType = loginType.value;
    loginReqData.password = passwordLogin.value;
    // 打开行为验证码弹窗
    showCaptchaBox.value = true;
}
// 注册类型选择
const selectRegisterType = (registerTypeId: number) => {
    switch (registerTypeId) {
        case 1:
            inputMaxLength.value = 11;
            registerPlaceholder.value = '请输入手机号';
            registerType.value = 'phone';
            break;
        case 2:
            inputMaxLength.value = 32;
            registerPlaceholder.value = '请输入邮箱地址';
            registerType.value = 'mail';
            break;
    }
}
// 注册
const register = async () => {
    if (registerType.value === 'phone') {
        // 手机号注册
        if (registerNumber.value.length == 0){
            Message.error("手机号不能为空");
            return;
        } else if ( !phoneRegex.test(registerNumber.value)) {
            Message.error("手机号格式不正确");
            return;
        } else if (verificationCode.value.length == 0) {
            Message.error("验证码不能为空");
            return;
        } else if (verificationCode.value.length < 6) {
            Message.error("验证码错误");
            return;
        }
        registerReqData.registerType = registerType.value;
        registerReqData.phone = registerNumber.value;
    } else if (registerType.value === 'mail') {
        // 邮箱注册
        if (registerNumber.value.length == 0){
            Message.error("邮箱地址不能为空");
            return;
        } else if ( !emailRegex.test(registerNumber.value)) {
            Message.error("邮箱地址格式不正确");
            return;
        } else if (verificationCode.value.length == 0) {
            Message.error("验证码不能为空");
            return;
        } else if (verificationCode.value.length < 6) {
            Message.error("验证码错误");
            return;
        }
        registerReqData.registerType = registerType.value;
        registerReqData.mail = registerNumber.value;
    }
    registerReqData.verifyCode = verificationCode.value;
    const response = await registerApi(registerReqData);
    if (response.code === 200 && response.data) {
        Message.success(response.msg);
        localStoragejwt(
            response.data.device, 
            response.data.loginType, 
            response.data.hl_ticket, 
            response.data.hl_ticket_expires,
            response.data.uid
        );
        resetRegisterForm();
        history.replaceState({}, document.title, "/platform/home"); // 刷新页面 清除浏览器历史 防止用户返回到登录页
        window.open('/platform/home', '_self') // 跳转投稿中心页保证刷新页面
    } else {
        Message.error(response.msg);
        resetRegisterForm();
    }
    
}
// 重置登录表单数据
const resetLoginForm = () => {
    loginReqData.captchaId = "";
    loginReqData.loginType = "";
    loginReqData.uid = "";
    loginReqData.phone = "";
    loginReqData.mail = "";
    loginReqData.password = "";
}
// 重置注册表单数据
const resetRegisterForm = () => {
    registerReqData.registerType = "";
    registerReqData.phone = "";
    registerReqData.mail = "";
    registerReqData.verifyCode = "";
}
// 重置获取验证码表单数据
const resetCodeForm = () => {
    getCodeReqData.codeType = "";
    getCodeReqData.phone = "";
    getCodeReqData.mail = "";
}
onMounted(async () => {
    //刷新页面时重新取得计时并将计时
    const count = Math.ceil((JSON.parse(sessionStorage.getItem('EndTime') || '0') - new Date().getTime())/1000);  //取出计时
    if (count > 0) {
        countingDown.value = true;
        remainingTime.seconds = count;
        timer = setInterval(() => {
        if (remainingTime.seconds > 0) {
            remainingTime.seconds--
            } else {
                stopCountingDown()
            }
        },1000)
    }else {
        sessionStorage.removeItem('EndTime'); //如果读取的时间小于0则清除sessionStorage数据
    }

});
</script>
<style scoped lang="scss">
.sns-bind_warp {
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    min-width: 1058px;
    height: 100%;
}

.sns-bind-top-area {
    display: flex;
    width: 100%;
    position: absolute;
    img {
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 800px;
    }
}

.sns-bind-top-warp {
    position: absolute;
    display: flex;
    top: 64px;
    width: 100%;
    height: 70px;
    background: linear-gradient(#2ca0d8, #2ca0d8 86px, #fff 0, #fff);
}

.sns-bind-area {
    position: relative;
    top: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 64px);
    min-height: 448px;
}

.sns-bind-login{
    height: 240px;
    width: 900px;
}

.sns-card {
    display: flex;
    width: 100%;
    height: 100%;
}
.sns-card .sns-left {
    width: 376px;
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.sns_thrid_content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .sns_thrid_blok {
        display: flex;
        flex-direction: column;
        align-items: center;
        .sns_thrid_item {
            width: 108px;
            height: 73px;
        }

        .sns_thrid_qq {
            background: url(@/assets/img/sn_qq.png) no-repeat;
            background-size: 100% 100%;
        }

        .sns_thrid_weibo {
            background: url(@/assets/img/sn_weibo.png) no-repeat;
            background-size: 100% 100%;
        }

        .sns_thrid_alipay {
            background: url(@/assets/img/sn_alipay.png) no-repeat;
            background-size: 100% 100%;
        }

        .sns_hl_logo {
            width: 148px;
            height: 73px;
            background: url(@/assets/img/sn_hl.png) no-repeat;
            background-size: 100% 100%;
        }
        .sns_thrid_name {
            color: #61666d;
            font-weight: 400;
            font-size: 14px;
            margin-top: 10px;
            line-height: 18px;
        }
    }

    .sns_thrid_arrow {
        margin-top: -16px;
        width: 62px;
        height: 44px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAsCAYAAAA93wvUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAECSURBVHgB7djf0cFAFAXwc9dXwFdCNICMMehCB3RAB6QCOqAEqsj4k1kqoAQNJGtl8ELwaG7O720z+3KTm809AYiIiIiIfppAiXWyPyID3J8ZdcLa6tN+A00EgaTZcpPs57G1wbutagpvNxvVzLnIAWfnMJBU7DY5jIv2q2n1uzj2T7qCiTHSzy84nF61v7rC79Y724PI1BceXNciWKTGRd0wPOVrKBdv7UREhr7Q/+trUBGZtZr1SPLT8HZXSsO3v65TnYiISorf8bLJR9aisQ6KPWb1b1ONFk8h5VOq0aIwnWlv/7ex9FX7t1uNKhT4Ko8/2t//zNNSOBERERHRj7sAQ4xrLrd8ImEAAAAASUVORK5CYII=) no-repeat;
        background-size: 100% 100%;
    }
}

.sns_thrid_info {
    margin-top: 40px;
    line-height: 20px;
    text-align: center;
    font-size: 14px;
}
 
.Vertical-line {
    height: 240px;
    border-right: 1px solid #e3e6e8;
}
.sns-register-container {
    display: block;
    width: 250px;
    height: 240px;
    flex: 10;
    padding: 0 40px;

    .sns-register_header {
        .navs {
            display: flex;
            justify-content: center;
            .navs-item {
                display: block;
                cursor: pointer;
                font-size: 18px;
                color: var(--text2);
            }
            :nth-child(1) {
                padding-right: 20px;
                border-right: .5px solid #e3e6e8;
            }
            :nth-child(2) {
                padding-left: 20px;
                padding-right: 20px;
                border-right: .5px solid #e3e6e8;
            }
            :nth-child(3) {
                padding-left: 20px;
            }
            .active {
                color: var(--brand_blue);
            }
        }
    }
}


.login-box, .register-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    padding-top: 20px;
    padding-right: 2px;
    padding-left: 2px;
}

.scan-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-right: 2px;
    padding-left: 2px;
}

.login-box .submit-box {
    margin-top: 30px;
    width: 100%;
    height: 40px;
    font-size: 14px;
    display: flex;
}

.login-box .input-box, .register-box .input-box {
    width: 100%;
    height: 46px;
    font-size: 14px;
    border: 1px solid #e3e6e8;
    display: flex;
    align-items: center;
    box-sizing: border-box;

    span {
        margin-left: 24px;
        margin-right: 14px;
        font-size: 14px;
    }

    input {
        height: 30px;
        width: 220px;
        outline: none;
        margin: 0;
        color: #000000;
        padding-left: 10px;
        padding-bottom: 0;
        border: none;
        font-size: 14px;
    }

    input[type="text"] {
        letter-spacing: 0.1rem;
    }
    input[type="password"] {
        letter-spacing: 0.1rem;
    }

    input[type="password"]::-ms-reveal {
        display: none;
    }
}

.login-box .input-box-top, .register-box .input-box-top {
    border-radius: 10px 10px 0 0;
    border-bottom: none;
}
.login-box .input-box-bottom, .register-box .input-box-bottom {
    border-radius: 0 0 10px 10px;
}

.wjma-box {
    padding: 10px 20px;
    .wjma-text {
        margin: 0;
        cursor: pointer;
        span {
            margin: 0;
            font-size: 13px;
        }
    }

    .text-tips {
        span {
            font-size: 12px;
            color: var(--text2);
        }
    }
}

.register-box .submit{
    margin-top: 30px;
    width: 80%;
    height: 40px;
    font-size: 15px;
}

.xianshimima, .yincangmima {
    display: inline-block;
    height: 25px;
    width: 25px;
    cursor: pointer;
    vertical-align: -8px;
}
.xianshimima:hover, .yincangmima:hover {
    color: var(--brand_blue);
    fill: var(--brand_blue);
}

.yzm {
    border: none;
    height: 20px;
    width: 90px;
    background: none;
    cursor: pointer;
    text-align: center;
    border-left: 1px solid #e3e6e8;
}

.wjma {
    color: var(--brand_blue);
    border: none;
    height: 20px;
    width: 100px;
    background: none;
    cursor: pointer;
    text-align: center;
}
.submit {
    color: #fff;
    border: none;
    border-radius: 8px;
    background-color: var(--brand_blue);
    text-align: center;
    cursor: pointer;
    height: 40px;
    width: 50%;
    font-size: 15px;
    margin-left: 10px;
}

.submit-register {
    width: 50%;
    color: #000000;
    border: 1px solid #e3e6e8;
    border-radius: 8px;
    background-color: #ffffff;
    text-align: center;
    cursor: pointer;
    height: 40px;
    width: 50%;
    margin-right: 10px;
    font-size: 15px;
}

.submit:hover {
    background-color: var(--brand_blue_hover);
}

.submit-register:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #e3e6e8;
}

.scan__qrcode {
    position: relative;
    box-sizing: border-box;
    margin-bottom: 8px;
    width: 148px;
    height: 148px;
    padding: 8px;
    border: .855491px solid #e3e5e7;
    border-radius: 6.84393px;

    .qrcode {
        width: 130px;
        height: 130px;
        background: url(@/assets/img/qr-code.png);
        background-size: 100% 100%;
    }
    .qrcode__tip {
        position: absolute;
        top: 8px;
        left: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 130px;
        height: 130px;
        background: hsla(0, 0%, 100%, .9);
        img {
            margin-bottom: 8px;
            padding: 14px;
            width: 20px;
            height: 20px;
            background: #fff;
            border-radius: 30px;
        }
        span {
            font-style: normal;
            font-weight: 500;
            font-size: 11px;
            line-height: 16px;
            color: #61666d;
        }
    }
}

p {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    color: #61666d;
    margin: 0;
    padding: 0;
    border: 0;
    font-weight: 400;
    vertical-align: baseline;
    .clickable {
        color: #7e8c8d;
        text-decoration: none;
        cursor: pointer;
        color: var(--brand_blue);
    }
}

.tips {
    margin-top: 80px;
    color: var(--text1);
    font-size: 14px;
    text-align: center;
    .agreement {
        color: var(--brand_blue);
        margin-left: 4px;
        cursor: pointer;
    }
    .checkbox {
        width: 14px;
        height: 14px;
        line-height: 14px;
        border-radius: 2px;
        border: 1px solid #bec3cc;
        cursor: pointer;
        vertical-align: -5px;
        margin-right: 6px;
    }
}
input[type="checkbox"] {
    -webkit-appearance: none; /* 移除默认样式 */
    appearance: none;
    position: relative;
}
input[type="checkbox"]:checked {
    background-color: #00aeec;
}
input[type="checkbox"]:checked::after {
    position: absolute;
    content: "";
    display: flex;
    top: 1px;
    left: 1px;
    width: 10px;
    height: 10px;
    align-items: center;
    background-image: url(@/assets/img/selected.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

}
.disabled {
    pointer-events: none; /* 禁止鼠标事件 */
    opacity: 0.5;        /* 减淡颜色，表明禁用状态 */
    user-select: none;
    color: #ffffff;
    background: var(--brand_blue);
    cursor: not-allowed;
}
</style>
