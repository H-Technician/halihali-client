<template>
    <Title>账号登录</Title>
    <div class="login-content_warp">
        <div class="login-content-top-area">
            <div class="login-content-top">
                <img src="@/assets/img/rl_top.png" alt="">
            </div>
        </div>
          <div class="login-content-area">
              <div class="login-content-box">
                    <div class="login-card">
                        <div class="login-left">
                            <div class="qrcode-login">
                                <div class="qrcode-con">
                                    <i class="tv-icon" :style = "isMousemove ? 'display: none;' : ''"></i>
                                    <div class="qrcode-box">
                                        <div class="qrcode-img">
                                            <img src="@/assets/img/qr-code.png" alt="">
                                        </div>
                                        <div class="login_qrcode_tip">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAARVBMVEUAAAAAruwArusAruwAruwArewAq+sArusAresAr+sAruwAr+8Aru8AruwAruwAr+cArewAr+0AruwArewAr98ArusAruy8BWrbAAAAFnRSTlMA76DfcL9AMJBAgCAQz68gYI9fUBDPY12YwgAAAUZJREFUOMuNlFuShCAMRcNTQEBbp9n/UkcTuhnKKHN/rIqHXBII0MvrrEQpIuXg4VYxHEyTkjOPvcpFHKpFYaQ2OLQb813x+vxx626t1VLVwOvwOj6p2hoMCmebxSSJTNGeHwq+MWQW6LQQahBsvkIzGyfyA67ITcBoohIJnHHfyHFkA3EnmsV8COkLzthZPl1pqgkXFnSNUwDqNiGsDdzAPlQC2pCkBQiUd6xMzmMl7M1AMQKcDfUDLpzFlBFInRb/AKkxaL2PQYH9Xp8wumwJ2+OeMDrkDHrYcDQNYIfVTJUQI2+JnnTYYr7F2n2NOD/3YLuvrjwdt24DEAUO4UMlaqmLRuO69bOhWd++J4Z95GYKv6EppkLoH38vKWZ+2MlUUnvvd+1UDbjLaKrCiHu5FnnlHNoyqOqyBcR42ZCTOBiVtYVOvw1hKHrM5JK6AAAAAElFTkSuQmCC">
                                            <span>二维码已过期</span>
                                            <span>请点击刷新</span>
                                        </div>
                                        <div class="qrcode-tips" @mousemove="isMousemove = true" @mouseleave="isMousemove = false"></div>
                                    </div>
                                </div>
                                <div class="qrcode-footer">
                                    <p class="app-link">
                                        请使用
                                        <a href="" style="text-decoration: none;">
                                            哈喽哈喽客户端
                                        </a>
                                        <br>
                                        扫码登陆
                                        <br>
                                        或扫码下载APP
    
                                    </p>
                                </div>
                            </div>
    
                        </div>
                        <div class="Vertical-line">
                        </div>
                        <div class="login-register-container">
                            <div class="login-register_header">
                                <div class="navs">
                                    <div class="navs-item" @click="switchLoginCard($event, 'password')" :class="isCardActive === 'password' ? 'active' : ''">
                                        密码登录
                                    </div>
                                    <div class="navs-item" @click="switchLoginCard($event, 'verificationCode')" :class="isCardActive === 'verificationCode' ? 'active' : ''">
                                        验证码登录
                                    </div>
                                </div>
                            </div>
                            <div class="login-register_content">
                                <form class="login-box" v-show="isCardActive === 'password'">
                                    <div class="input-box input-box-top">
                                        <span>账号</span>
                                        <input type="text" placeholder="请输入账号" v-model="usernameLogin" maxlength="32">
                                    </div>
                                    <div class="input-box input-box-bottom">
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
                                                    <div @click="switchLoginCard($event, 'verificationCode')">
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
                                    </div>
                                    <div class="submit-box">
                                        <button class="submit-register" @click="switchLoginCard($event, 'verificationCode')">没有账号？立即注册</button>
                                        <button class="submit" @click="login">登录</button>
                                    </div>
                                </form>
                                <form class="register-box" v-show="isCardActive === 'verificationCode'">
                                    <div class="input-box input-box-top">
                                        <!-- <span>手机号</span> -->
                                        <LoginreisterLoginTypeSelect @select="selectRegisterType"/>
                                        <input type="text" :placeholder="registerPlaceholder" :maxlength="inputMaxLength" :clearable="true" v-model="registerNumber">
                                        <button class="yzm" @click="getYzm" v-bind:disabled="isBtnDisabled" :style="isBtnDisabled ? 'cursor: not-allowed; color: #808385;' : 'color: #00aeec;'">{{ yzmTimeText }}</button>
                                    </div>
                                    <div class="input-box input-box-bottom">
                                        <span>验证码</span>
                                        <input type="text" placeholder="请输入验证码" maxlength="6" v-model="verificationCode">
                                    </div>
                                    <button  class="submit" @click="register">登录/注册</button>
                                </form>
                            </div>
                            <div class="login-oauth">
                                <div class="divider">
                                    <div class="liner"></div>
                                    <div class="divider-text">
                                        <span>其它登录方式</span>
                                    </div>
                                </div>
                                <div class="list">
                                    <a class="item" title="QQ登录" @click="authLogin('qq')">
                                        <IconsLoginreistetQQ class="icon" />
                                        <span class="text">QQ登录</span>
                                    </a>
                                    <!-- <a class="item" title="Gitee账号登录" @click="authLogin('gitee')">
                                        <IconsLoginreistetGitee class="icon" />
                                        <span class="text">Gitee账号登录</span>
                                    </a> -->
                                    <a class="item" title="微博登录" @click="authLogin('weibo')">
                                        <IconsLoginreistetWeiBo class="icon" />
                                        <span class="text">微博登录</span>
                                    </a>
                                    <a class="item" title="支付宝登录" @click="authLogin('alipay')">
                                        <IconsLoginreistetAlipay class="icon" />
                                        <span class="text">支付宝登录</span>
                                    </a>
                                    <!-- <a class="item" title="华为账号登录" @click="authLogin('huawei')">
                                        <IconsLoginreistetHuawei class="icon" />
                                        <span class="text">华为账号登录</span>
                                    </a> -->
                                </div>   
                            </div>
                        </div>
                    </div>    
                    <div class="tips" >未注册过哈哩哈哩的手机号，我们将自动帮你注册账号</div>
                    <div class="tips" >登录代表你同意<span class="agreement">用户协议</span>&nbsp;和&nbsp;<span class="agreement">隐私政策</span></div>                 
              </div>
          </div>
          <Footer></Footer>
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
const router = useRouter();
// 定义正则表达式用于判断登录类型
const uidRegex = /^[1-9]\d{11}$/; // 18位数字，首位不能为0
const phoneRegex = /^1[3-9]\d{9}$/; // 11位数字
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 常见的邮箱格式
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
            Message.error("邮箱地址不能为空");
        } else {
            Message.error("邮箱地址格式不正确");
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
const switchLoginCard = (event: MouseEvent, loginType: string) => {
    event.preventDefault();
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
const login = async (event: MouseEvent) => {
    event.preventDefault();
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
const register = async (event: MouseEvent) => {
    event.preventDefault();
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
// 第三方登录
const authLogin = async (type: string) => {
    const data = { pageIdentifier: 'platform'};
    const response = await authLoginApi(type);
    if (response.code === 200 && response.data) {
        window.location.href = response.data;
    } else {
        Message.error(response.msg);
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
    // console.log(count);
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
.login-content_warp {
    width: 100%;
    background-size:cover ;
    justify-content: center;
    align-items: center;
    position: relative;
    min-width: 1058px;
}

.login-content-top-area {
    position: absolute;
    display: flex;
    width: 100%;
    height: 70px;
    background: linear-gradient(#2ca0d8, #2ca0d8 86px, #fff 0, #fff);
}


.login-content-top {
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

.login-content-area {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    min-height: 524px;
}

.login-content-box {
    height: 350px;
    width: 900px;
}

.login-card {
    display: flex;
    width: 100%;
    height: 100%;
}
.login-card .login-left {
    width: 376px;
}
 
.qrcode-login {
    position: relative;
    width: 376px;
}
 
.qrcode-login .qrcode-con {
    padding-top: 32px;
}
 
.tv-icon {
    /*图片第一个就是需要的图标，不需要设置背景图片位置*/
    background: url(@/assets/img/tv.gif) no-repeat;
    position: absolute;
    width: 70px;
    height: 70px;
    left: 120px;
    top: -30px;
}
 
.qrcode-login .qrcode-con .qrcode-box {
    width: 160px;
    height: 160px;
    margin: 0 auto;
    background: #ffffff;
    position: relative;
    padding: 6px;
    border-radius: 6px;
    border: 1px solid #e3e6e8;
    box-sizing: content-box;
}
 
.qrcode-img {
    width: 160px;
    height: 160px;
}
 
.qrcode-img>img {
    width: 100%;
    height: 100%;
    display: block;
}

.login_qrcode_tip {
    position: absolute;
    top: 1px;
    left: 1px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 168px;
    height: 168px;
    background: hsla(0, 0%, 100%, .9);
    z-index: 1;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    img {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin-bottom: 10px;
        padding: 16px;
        width: 56px;
        height: 56px;
        background: #fff;
        border-radius: 50%;
    }
    span {
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 19px;
        color: #61666d;
    }
}
 
.qrcode-tips {
    position: absolute;
    width: 330px;
    height: 192px;
    top: -19px;
    left: -80px;
    // margin-left: -240px;
    background: url(@/assets/img/qr-tips.png) no-repeat;
    /*规定把背景图片拓展至足够大，完全覆盖背景区域*/
    background-size: cover;
    background-color: #fff;
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
    z-index: 2;
}
 
.qrcode-tips:hover {
    opacity: 1.0;
}
 
.qrcode-login .qrcode-footer {
    width: 372px;
    height: 155px;
    background: url(@/assets/img/2233pic.png) -12px -7px no-repeat;
}
 
.app-link {
    text-align: center;
    color: #717171;
    font-size: 14px;
}
 
.app-link a {
    color: #00a1d6;
}
.Vertical-line {
    height: 240px;
    border-right: 1px solid #e3e6e8;
}
.login-register-container {
    display: block;
    width: 250px;
    height: 300px;
    flex: 10;
    padding: 0 40px;

    .login-register_header {
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
    margin-left: 10px;
    font-size: 15px;
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

.login-oauth {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    .divider {
            width: 260px;
            height: 16px;
            position: relative;
            margin: 10px auto;
             
        }
        .liner {
            width: 100%;
            height: 1px;
            background-color: #ccc;
            position: relative;
            top: 50%;
        }
        .divider-text {
            text-align: center;
            width: 90px;
            height: 20px;
            line-height: 20px;
            margin:0 auto;
            background-color: #fff;
            position: relative;
            color: var(--text2);
            font-size: 13px;
        }

    .list {
        align-items: center;
        display: flex;
        justify-content: center;
        width: 100%;
        .item {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 12px;
            margin-right: 12px;
            .icon {
                height: 32px;
                width: 32px;
                margin: 0 auto;
                cursor: pointer;
            }

            .text {
                font-size: 13px;
                margin-left: 8px;
                color: #000;
                cursor: pointer;
            }
        }
    }
}

.tips {
    margin-top: 10px;
    color: var(--text2);
    font-size: 14px;
    text-align: center;
    .agreement {
        color: var(--brand_blue);
        margin-left: 4px;
        cursor: pointer;
    }
}
</style>
