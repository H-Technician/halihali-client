<template>
    <NuxtLayout name="searchlayout">
        <Title>哈哩哈哩 (゜-゜)つロ 干杯~-halohalo-测试页面1-{{ title }}</Title>
        <div class="test">
            <span style="display: block; height: 200px; width: 200px;">
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 22 22" viewBox="0 0 22 22">
                    <path d="M10.188 4.65 6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39V5.04a.498.498 0 0 0-.812-.39zM14.446 3.778a1 1 0 0 0-.862 1.804 6.002 6.002 0 0 1-.007 10.838 1 1 0 0 0 .86 1.806A8.001 8.001 0 0 0 19 11a8.001 8.001 0 0 0-4.554-7.222z"></path>
                    <path d="M15 11a3.998 3.998 0 0 0-2-3.465v6.93A3.998 3.998 0 0 0 15 11z"></path>
                </svg>
            </span>
            <span style="display: block; height: 200px; width: 200px;">
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="" viewBox="0 0 22 22">
                    <path d="M15 11a3.998 3.998 0 0 0-2-3.465v2.636l1.865 1.865A4.02 4.02 0 0 0 15 11z"></path>
                    <path d="M13.583 5.583A5.998 5.998 0 0 1 17 11a6 6 0 0 1-.585 2.587l1.477 1.477a8.001 8.001 0 0 0-3.446-11.286 1 1 0 0 0-.863 1.805zM18.778 18.778l-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 1 0-1.414 1.414L5.172 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39v-3.131l2.587 2.587-.01.005a1 1 0 0 0 .86 1.806c.215-.102.424-.214.627-.333l2.3 2.3a1.001 1.001 0 0 0 1.414-1.416zM11 5.04a.5.5 0 0 0-.813-.39L8.682 5.854 11 8.172V5.04z"></path>
                </svg>
            </span>
            <div class="tooltip-test">
                <div class="text-test">
                    真好呀,不错不错哟
                    <div class="ui-tip ui-tip-arrow ui-tip-arrow-up ui-theme-black hl_dm_tip"  id="tip_1">
                        <div class="hl_dam_like">
                            <span>10</span>
                        </div>
                        <div class="hl_dam_copy"></div>
                        <div class="hl_dam_withdraw"></div>
                    </div>
                </div>
                <!-- <div class="ui-tip ui-tip-arrow ui-tip-arrow-up ui-theme-black"  id="tip_1">箭头向上的tip层</div> -->
                <!-- <div class="ui-tip ui-tip-arrow ui-tip-arrow-down ui-theme-black"  id="tip_2">just code it!</div> -->
            </div>
            <div style="width: 150px; height: 150px;">
                <!-- <svg width="150" height="150" viewBox="0 0 150 150"> -->
                    <!-- 设置背景 -->
                    <!-- <circle cx="75" cy="75" r="60" fill="#000" />
                    <circle cx="75" cy="75" r="60" fill="none" stroke="#ddd" stroke-width="8" />
                    <circle ref="progressCircle" id="progressCircle" cx="75" cy="75" r="60" fill="none" stroke="#fff" stroke-width="8" stroke-dasharray="377" stroke-dashoffset="0"></circle> -->
                    <!-- 叉符号 -->
                    <!-- <path d="M 50,50 L 100,100 M 50,100 L 100,50" stroke="#fff" stroke-width="4" fill="none" />
                </svg> -->
                <IconsPlayClose />
            </div>
            <!-- <svg t="1722476693366" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4300" width="48" height="48">
                <path d="M801.856 734.016 579.904 512l222.016-222.016c18.816-18.816 18.88-49.152 0.064-67.968-18.752-18.752-49.216-18.752-67.904 0L512 444.032 289.92 222.016c-18.688-18.752-49.088-18.752-67.904 0C203.328 240.768 203.328 271.232 222.144 290.048L444.096 512l-222.016 221.952c-18.816 18.752-18.816 49.152-0.064 67.968C231.424 811.392 243.84 816 256 816s24.576-4.608 33.92-14.016L512 579.968l222.08 222.016c9.408 9.344 21.696 14.016 33.92 14.016 12.288 0 24.576-4.608 33.92-14.016C820.672 783.104 820.736 752.768 801.856 734.016z" p-id="4301"></path>
            </svg> -->
            <!-- <div style="background-color: black;">
                <div class="player-loading-panel-blur-detail"></div>
            </div> -->
            <!-- <Loading></Loading> -->
            <Button type="danger" @click="test9">打开</Button>
            <!-- <Popconfirm
            :arrow="false"
            description="确定要删除吗？"
            >
            <Button type="danger">Delete Confirm</Button>
            </Popconfirm> -->
            <!-- <Message ref="message" :top="70" @close="onClose" /> -->
            <!-- <Textarea :showCount="true" :maxlength="100" :value="videoUrl"></Textarea> -->
            <!-- <Input :showCount="true" :maxlength="100" v-model="videoUrl" @change="test6" placeholder="清晰明了表明内容亮点的标题会更受观众欢迎哟！"/> -->
             <!-- <el-switch v-model="test"/>
            <div style="width: atuo; height: 22px;">
                <Switch v-model="test"/>
            </div> -->
            <!-- <div style="width: 600px; height: 160px;">
                <Editor width="700px" height="160px" :disabled="true" placeholder="填写更全面的相关信息，让更多的人能找到你的视频吧(:" v-model:model-value="videoUrl"/>
            </div> -->
            <input
                type="file"
                ref="videoInput"
                @change="handleImagesChange"
                style="height: 40px; width: 900px;"
            >
            <!-- <DialogDiaLog :showDialog="showCaptchaBox" width="800">
                <template #content>
                    <CropperComp :videoFile="file1" v-if="showCaptchaBox"/>
                </template>
            </DialogDiaLog> -->
            <DialogDiaLog :showDialog="showCaptchaBox" width="1030" @isShowDialog="isShowDialog4">
                <template #content>
                    <PlatformCardUploadVideoCard :file="file1" />
                </template>
            </DialogDiaLog>
            <Radio :options="options" v-model:value="value"/>
            <div class="test-before"></div>
            <!-- <Loading /> -->
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
import type { PlayerProfile } from '@/types/player';
import { getPlayerProfile } from '@/utils/localStoragePlayer'; 
import type { UserInfo } from '@/types/user';
import Message from '@/components/message/Message';
import Popconfirm from '@/components/popconfirm/hl-Popconfirm.vue';
// import Message from '@/components/message/Message'
const UserInfoUpdata = ref<UserInfo>();
import Http  from '@/composables/useRequest'
const videoUrl = ref<string>('https://haliyunoss.oss-cn-chengdu.aliyuncs.com/ordinaryDay/output.m3u8');
const title = ref<string>('平凡的日子');
const progressCircle = ref<HTMLElement | null>(null);
const test = ref<boolean>(true);
const message = ref();
const file1 = ref<File>();
const showCaptchaBox = ref(false);
const value = ref(1);
interface Radio {
    label: string;
    value: number;
}
const options = ref<Radio[]>([
  {
    label: '三连+关注',
    value: 1
  },
  {
    label: '仅三连',
    value: 2
  },
  {
    label: '仅关注',
    value: 3
  }
]);
// const NewTokenStore = useNewTokenStore();// 正确访问类型为string的全局变量
// const NewRefreshToken = useNewTokenStore();
// console.log(NewTokenStore.newAccessToken);
// console.log(NewTokenStore.newRefreshToken);
// const CookiesTokentest = useCookie("halohaloToken");
// if (CookiesTokentest.value) {
//     NewTokenStore.setNewAccesstoken(CookiesTokentest.value); // 修改全局变量，参数类型需为string
//     console.log('测试' + NewTokenStore.newAccesstoken);
// }
const test6 = (val: string) => {
    // videoUrl.value = val;
}
const isShowDialog4 = (is: boolean) => {
    showCaptchaBox.value = is;
}
watch(() => videoUrl.value, (val) => {
    console.log(val)
})
const test9 = () => {
    // message.value?.info("打开消息弹窗");
    // Message();
    // for (let i = 0; i < 9; i++){
    //     Message.info(`这是${i}条测试信息`);
    // }
    // Message.info("这是一条测试信息");
    showCaptchaBox.value = true;
}
const handleImagesChange = async (event: Event) => {
    if (!event.target) return; // 添加类型断言
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) return;
    const file = fileInput.files[0];
    // url.value = URL.createObjectURL(file);
    file1.value = file;
    showCaptchaBox.value = true;
    // url.value = file;
    // const imageUrl = await readFileAsDataURL(file);
    // url.value = imageUrl;
    // const md5 = getFileMD5(file);
    // console.log(md5);
};
const onClose = () => {
    console.log('close')
}
const test8 = (val: boolean) => {
    test.value = val;
}
const handleVideoChange = () => {
    console.log('change')
}
const test4 = ref<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); 
const test5 = () => {
    const url = 'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=102141520&redirect_uri=https://v.hblog.top/qq/callback&state=ddad51449e53179cf0b34de00ee9141c&scope=get_user_info'; // 替换为第三方应用授权的URL
    const width = 800;
    const height = 500;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);

    window.open(url, 'popup', `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`);
}

const getUserInfo = async () => {
    console.log('获取用户信息')
    //const userId = localStorage.getItem('halohaloUid');
  const res = await Http.get('/user/account/getUserInfo')
  if (res.code === 200) {
    // 获取用户信息成功
    //console.log(userinfo.data)
    // userInfo.value = userinfo.data
    //isLogin.value = true
    UserInfoUpdata.value = res.data as UserInfo;
    console.log(UserInfoUpdata.value)
  } else {
    // 获取用户信息失败
    // console.log(userinfo.data)
  }
}
// const { data: data2 } = useAsyncData('uniqueKey2', async () => {   
//     try {  
//     // 调用你自己封装的方法  
//     const result1 = await Http.get('/user/account/test')  
//     return result1 // 返回的数据将被赋值给 `data`  
//   } catch (err) {  
//     throw err // 如果有错误，抛出错误以便 Nuxt 可以处理它  
//   } 
// })

const isshow = ref(false)
const show = () => {
    isshow.value = true
}
const isShowDialog = (msg: any) => {
    // console.log(msg.value)
    if (msg.value) {
        isshow.value = true;
    } else {
        isshow.value = false;
    }
}

let animationPaused = false;

function toggleAnimation() {
    if (!progressCircle.value) return;
    if (animationPaused) {
        progressCircle.value.style.animationPlayState = 'running';
        animationPaused = false;
    } else {
        progressCircle.value.style.animationPlayState = 'paused';
        animationPaused = true;
    }
}
onMounted(async () => { 
    console.log(getPlayerProfile());
})

</script>
<style scoped lang="scss">
.test {
    margin-top: 64px;
    width: 800px;
    height: 660px;
    display: flex;
    justify-content: center;

    #img {
        width: 320px;
        height: 180px;
    }
}

.text-container {
    width: 200px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
}
.text-container:empty { /* 内容区域空状态时的样式 */
    background-color: #F2F2F2;
}
.text-container:empty::after { /* 内容区域空状态时追加骨架屏样式 */
    content: '';
    display: block;
    width: 200px;
    height: 30px;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, rgba(225, 225, 225, 0.753), transparent);
    animation: loading 1.5s infinite;
}
.tooltip-test {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
}
.text-test {
    position: relative;
    width: auto;
    height: 24px;
    font-size: 16px;
}
/* tips */
.ui-tip{
    top: 120%;
    width: auto;
    height: 28px;
    padding: .3rem;
    margin: 0 auto;
    position: absolute;
    text-align: center;
    border-radius: 28px;
    border: 1px solid #FFFFFF;
    line-height: 28px;
}
/* tip with arrow */
.ui-tip-arrow::before,.ui-tip-arrow::after{
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0px;
    border-width: .25rem;
    border-style: solid;
}
/* arrow up */
.ui-tip-arrow.ui-tip-arrow-up::after{ 
    border-left-color: transparent;
    border-top-color: transparent;
    bottom: 100%;
    right: 50%;
}
.ui-tip-arrow.ui-tip-arrow-up::before{
    border-right-color: transparent;
    border-top-color: transparent;
    bottom: 100%;
    left: 50%;
}
/* arrow down */
.ui-tip-arrow.ui-tip-arrow-down::after{ 
    border-left-color: transparent;
    border-bottom-color: transparent;
    right: 50%;
    top: 100%;
}
.ui-tip-arrow.ui-tip-arrow-down::before{
    border-right-color: transparent;
    border-bottom-color:transparent;
    left: 50%;
    top: 100%;
}
/* a black background theme */
.ui-theme-black{
    background-color:hsla(0, 0%, 8%, .9);
    color: #FFFFFF;
}
.ui-theme-black::after,.ui-theme-black::before {
    border-color: hsla(0, 0%, 8%, .9);
}
.hl_dm_tip {
    display: flex;
    align-items: center;
    justify-content: center;
}
.hl_dam_like {
    width: 24px;
    height: 24px;
    cursor: pointer;
    background: url(@/assets/img/like.svg) no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0 8px;
    position: relative;
    span {
        font-size: 10px;
        position: absolute;
        top: -10px;
        color: #FFFFFF;
        right: -10px;
    }
}
.hl_dam_copy {
    width: 24px;
    height: 24px;
    cursor: pointer;
    background: url(@/assets/img/copy.svg) no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0 8px;
}
.hl_dam_withdraw {
    width: 24px;
    height: 24px;
    cursor: pointer;
    background: url(@/assets/img/withdraw.svg) no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0 8px;
}
@keyframes loading{ /* 骨架屏的动画 */
    100% {
        transform: translateX(100%);
    }
}
#progressCircle {
    -webkit-transform: stroke-dashoffset 5s ease-in-out;
    transition: stroke-dashoffset 5s ease-in-out;
    -webkit-animation: progressAnimation 5s linear infinite;
    animation: progressAnimation 5s linear infinite;
    -webkit-transform-origin: center;
    transform-origin: center;
    transform: rotate(-90deg);
}

.test-before {
    width: 36px;
    height: 36px;
    font-size: 18px;
    color: #99a2aa;
    &::before {
        content: "\E636";
    }
}

@keyframes progressAnimation {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 377; }
}
.player-loading-panel-blur-detail {
    -webkit-animation: bpx-animation-loading .94s steps(1) infinite;
    animation: animation-loading .94s steps(1) infinite; 
    background: url(@/assets/img/ploading.png) no-repeat;
    height: 184px;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    width: 320px;
}
@keyframes animation-loading {
    0% {
        background-position: 0 0;
    }

    6.25% {
        background-position: -320px 0;
    }

    12.5% {
        background-position: -640px 0;
    }

    18.75% {
        background-position: -960px 0;
    }

    25% {
        background-position: -1280px 0;
    }

    31.25% {
        background-position: -1600px 0;
    }

    37.5% {
        background-position: -1920px 0;
    }

    43.75% {
        background-position: -2240px 0;
    }

    50% {
        background-position: -2560px 0;
    }

    56.25% {
        background-position: -2880px 0;
    }

    62.5% {
        background-position: -3200px 0;
    }

    68.75% {
        background-position: -3520px 0;
    }

    75% {
        background-position: -3840px 0;
    }

    81.25% {
        background-position: -4160px 0;
    }

    87.5% {
        background-position: -4480px 0;
    }

    93.75% {
        background-position: 0 -184px;
    }

    100% {
        background-position: -320px -184px;
    }
}
.cover-select-content {
    display: flex;

    .cover-select-content-right {
        width: 166px;
        height: 100%;
        .cover-cropper-right-text {
            font-size: 14px;
            margin: 0 0 17px;
        }
        .cover-cropper-right-preview-wrap {
            box-sizing: border-box;
            width: 166px;
            margin: 18px 0 0;
            padding: 10px;
            background: #f5f5f5;
            border-radius: 6px;
            cursor: pointer;
            span {
                display: flex;
                font-size: 12px;
                margin: 0 0 9px;
            }
            .cover-cropper-right-img-preview {
                width: 146px;
                overflow: hidden;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                // .cover-cropper-right-img-preview {
                //     width: 100%;
                //     height: 109.5px;
                //     overflow: hidden;
                // }

            }
            .cover-cropper-right-img-preview-4_3 {
                height: 109.5px;
            }

            .cover-cropper-right-img-preview-16_9 {
                height: 82.1px;
            }

            &:hover {
                background-color: #e5f5fb;
            }
        }
    }
}
</style>
