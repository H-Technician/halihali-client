<template>
    <!-- 头部 -->
    <div class="platform-header">
        <div class="header-content">
            <div class="left-block">
                <div class="logo-container">
                    <picture class="img-box">
                        <source src="@/assets/img/header-logo.webp" type="images/webp">
                        <img src="@/assets/img/header-logo.png" alt="网站logo">
                    </picture>
                    <span>创作中心</span>
                </div>
                <a href="/" target="_blank" class="platform-entry">
                    <IconsHeaderbarTitleLogo class="index-iconfont" />
                    <span>主站</span>
                </a>
            </div>
            <div class="right-block">
                <!-- 头像 -->
                <Popover popStyle="padding-top: 8px;">
                    <template #reference>
                        <a href="/" target="_blank" class="avatar-box">
                            <picture class="avatar">
                                <source :srcset="userInfo?.avatar?.avatar_225?.webp_url" type="image/webp">
                                <source :srcset="userInfo?.avatar?.avatar_225?.jpg_url" type="image/jpg">
                                <img :src="userInfo?.avatar?.avatar_225?.webp_url" :alt="userInfo?.uid + '头像'" />
                            </picture>
                        </a>
                        <div class="avatar"></div>
                    </template>
                    <template #content>
                        <PlatformAvatarPopover />
                    </template>
                </Popover>
                <div class="tips">
                    成为UP主的第1145天
                    <IconsArrowRight class="icon-right" />
                </div>
                <div class="line-divid"></div>
                <Popover popStyle="padding-top: 18px;">
                    <template #reference>
                        <a href="" target="_blank" class="message">
                            <div class="num">13</div>
                            <IconsPlatformXinFeng class="icon-message" />
                        </a>
                    </template>
                    <template #content>
                        <div><span>测试</span></div>
                    </template>
                </Popover>
                <div class="download">
                    <IconsPlatformXiaZai class="icon-download" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { UserInfo } from '@/types/user'
import { getUserInfoApi } from '@/api/user'
import { removeLocalStoragejwt } from '@/utils/localStorageJwt';
const isLogin = useIsLogin();
const isloadImg = ref(false); // 是否加载头像图片
const userInfo = ref<UserInfo>();

// 登录后获取用户信息
const getUserInfo = async () => {
    const response = await getUserInfoApi(); // 获取用户信息
    if (response.code === 200) {
        userInfo.value = response.data as UserInfo;
        // const avatarUrl = userInfo.value.avatar;
        // await loadImage("https://static.v.hblog.top" + avatarUrl, () => {
        //     isloadImg.value = true;
        // }, (error) => {
        //     console.error('图片加载失败:', error.message);
        // });
    } else if (response.code === 401) {
        isLogin.value = false;
        removeLocalStoragejwt();
        history.replaceState({}, document.title, "/passport/login"); // 刷新页面 清除浏览器历史 防止用户返回到登录页
        window.open('/passport/login', '_self'); // 跳转登录页保证刷新页面
    } else {
        throw new Error('获取用户信息失败');
    }

}

onBeforeMount(async () => {
    if (isLogin.value) {
        await getUserInfo(); // 获取用户信息
    }
});
</script>
<style scoped>
.platform-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    z-index: 100;
    min-width: 1236px;
}

.platform-header .header-content {
    height: 60px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 100px 0 32px;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .05);
    margin-right: calc(-100vw + 100%);
    min-width: 800px;
    width: 100%;
}

.platform-header .header-content .left-block {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 100%;
}

.platform-header .header-content .left-block .logo-container {
    height: 28px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
}

.platform-header .header-content .left-block .logo-container .img-box {
    height: 100%;
    width: auto;
    margin-right: 4px;
}

.platform-header .header-content .left-block .logo-container .img-box img {
    height: 100%;
    width: auto;
    margin-right: 4px;
}

.platform-header .header-content .left-block .logo-container span {
    font-size: 21px;
    font-weight: 600;
    color: #00a1d6;
}

.platform-header .header-content .left-block .platform-entry {
    margin-left: 20px;
    display: block;
    text-decoration: none;
    color: #757575;
    font-size: 14px;
    cursor: pointer;
}

.platform-header .header-content .left-block .platform-entry .index-iconfont {
    height: 18px;
    width: 18px;
    margin-right: 5px;
    font-weight: 600;
    vertical-align: -4px;
    fill: #757575;
}

.platform-header .header-content .right-block {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    font-size: 16px;
    color: #757575;
    height: 100%;
}

.platform-header .header-content .right-block .avatar-box {
    position: relative;
    line-height: 1;
    height: 30px;
    width: 30px;
    display: block;
    text-decoration: none;
    background: #cdd0d6;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
}

.platform-header .header-content .right-block .avatar-box .avatar {
    height: 100%;
    width: 100%;
}

.platform-header .header-content .right-block .avatar-box .avatar img {
    height: 100%;
    width: 100%;
    transition: all 0.1s linear;
}

.platform-header .header-content .right-block .tips {
    display: flex;
    align-items: center;
    background: rgba(250, 142, 87, .1);
    border: 1px solid rgba(250, 142, 87, .43);
    border-radius: 15px;
    padding: 5px 12px 5px 16px;
    font-size: 12px;
    color: #fa8e57;
    text-align: center;
    margin-right: 32px;
    margin-left: 12px;
    cursor: pointer;
}

.platform-header .header-content .right-block .tips .icon-right {
    fill: #fa8e57;
}

.platform-header .header-content .right-block .line-divid {
    width: 1px;
    height: 16px;
    background: #e7e7e7;
    margin-right: 32px;
}

.right-block .message {
    cursor: pointer;
    display: block;
    text-decoration: none;
}

.right-block .message .num {
    min-width: 16px;
    height: 16px;
    padding: 0 2px;
    border-radius: 8px;
    line-height: 16px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    position: absolute;
    top: -7px;
    right: -10px;
    z-index: 30;
    background-color: #FA5A57;
}

.message .icon-message {
    font-size: 22px;
    font-weight: 600;
    fill: #757575;
    color: #757575;
}

.platform-header .header-content .right-block .download {
    margin-left: 30px;
    cursor: pointer;
}

.platform-header .header-content .right-block .download .icon-download {
    font-size: 32px;
    font-weight: 600;
    color: #757575;
    fill: #757575;
}
</style>