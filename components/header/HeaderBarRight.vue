<template>
    <!-- 登录弹窗 -->
    <DialogLoginDiaLog :showDialog="dialogVisible" width="820" height="440" @isShowDialog="isShowLoginDialog">
        <template #content>
            <LoginreisterLoginReister @closeLoginDialog="closeLoginDialog" />
        </template>
    </DialogLoginDiaLog>
    <div class="right-entry" :class="[props.isFixedHeaderRight ? 'right-entry-fixed' : '']">
        <!-- 头像 -->
        <div class="header-avater" v-if="isLogin">
            <PopoverAvatarPopover popStyle="padding-top: 14px; margin-left: -15px;"
                @isShowPopover="isShowAvatarPopover">
                <template #reference>
                    <!-- 登录后显示头像 -->
                    <div class="header-avatar-wrap">
                        <a href="https://www.hblog.top" target="_blank"
                            class="header-avatar-wrap--container mini-avatar--small"
                            :class="showAvatarPopover ? 'big-avatar--small' : ''">
                            <picture class="v-img" :style="userInfo ? '' : 'display: none;'">
                                <source
                                    srcset="//io.v.hblog.top/hfs/face/706353e46fe1c390d6d2cb72a704818a.jpg@240w_240h_1c_1s_!web-avatar-nav.webp"
                                    type="image/webp">
                                <source
                                    srcset="//io.v.hblog.top/hfs/face/706353e46fe1c390d6d2cb72a704818a.jpg@240w_240h_1c_1s_!web-avatar-nav.jpg"
                                    type="image/jpg">
                                <img class="avatar-img"
                                    src="//io.v.hblog.top/hfs/face/706353e46fe1c390d6d2cb72a704818a.jpg@240w_240h_1c_1s_!web-avatar-nav.webp"
                                    :alt="userInfo?.uid + '头像'" v-if="isloadImg" />
                                <!-- <img class="avatar-img" src="@/assets/img/defaultAvatar.svg" alt="默认头像" style="position: absolute;" :style="isloadImg ? 'display: none;' : ''"/> -->
                                <!-- <img class="avatar-img" :src="`https://static.v.hblog.top${userInfo?.avatar}`" :alt="userInfo?.uid+'头像'" v-if="isloadImg"/> -->
                            </picture>
                        </a>
                    </div>
                </template>
                <template #content>
                    <HeadercardAvatar @islogout="isLogout" :userInfo="userInfo ? userInfo : null" />
                </template>
            </PopoverAvatarPopover>
        </div>
        <div class="header-avater" v-else>
            <Popover popStyle="padding-top: 14px;" :isShowPopover="isShowPopover"
                @isShowPopover="(isShow) => { if (isShow) isShowPopover = isShow; }">
                <template #reference>
                    <!-- 未登录显示登录 -->
                    <div class="header-avatar-wrap">
                        <div class="default-login" @click="dialogVisible = true; isShowPopover = false;">
                            <span class="nologin-text">登录</span>
                        </div>
                    </div>
                </template>
                <template #content>
                    <HeadercardNoLogin @isLogin="isLoginDialog" />
                </template>
            </Popover>
        </div>
        <!-- 大会员 -->
        <div class="right-entry-item">
            <div class="right-entry-item-vip">
                <Popover :popStyle="popoverStyle">
                    <template #reference>
                        <!-- 未读信息数量 -->
                        <div class="red-num-message">12</div>
                        <a href="/test" target="_blank" class="right-entry--outside">
                            <IconsHeaderbarDaHuiyuan />
                            <span>大会员</span>
                        </a>
                    </template>
                    <template #content>
                        <span>测试</span>
                    </template>
                </Popover>
            </div>
        </div>
        <!-- 消息 -->
        <div class="right-entry-item">
            <div class="right-entry-item-message" v-if="isLogin">
                <!-- 未读信息数量 -->
                <div class="red-num-message">12</div>
                <a href="/test" target="_blank" class="right-entry--outside">
                    <IconsHeaderbarXioaXi />
                    <span>消息</span>
                </a>
            </div>
            <div class="right-entry-item-message" v-else>
                <Popover :popStyle="popoverStyle">
                    <template #reference>
                        <div class="right-entry--outside">
                            <IconsHeaderbarXioaXi />
                            <span>消息</span>
                        </div>
                    </template>
                    <template #content>
                        <HeadercardNoLoginCard content="登录即可查看消息记录" @isLogin="isLoginDialog" />
                    </template>
                </Popover>
            </div>
        </div>
        <!-- 动态 -->
        <div class="right-entry-item">
            <div class="right-entry-item-dynamic" v-if="isLogin">
                <!-- 未读信息数量 -->
                <div class="red-num-message">12</div>
                <a href="/test" target="_blank" class="right-entry--outside">
                    <IconsHeaderbarDongTai />
                    <span>动态</span>
                </a>
            </div>
            <div class="right-entry-item-dynamic" v-else>
                <Popover :popStyle="popoverStyle">
                    <template #reference>
                        <div class="right-entry--outside">
                            <IconsHeaderbarDongTai />
                            <span>动态</span>
                        </div>
                    </template>
                    <template #content>
                        <HeadercardNoLoginCard content="登录即可查看关注动态" @isLogin="isLoginDialog" />
                    </template>
                </Popover>
            </div>
        </div>
        <!-- 收藏 -->
        <div class="right-entry-item">
            <div class="right-entry-item-collection" v-if="isLogin">
                <a href="/test" target="_blank" class="right-entry--outside">
                    <IconsHeaderbarShiouCang />
                    <span>收藏</span>
                </a>
            </div>
            <div class="right-entry-item-collection" v-else>
                <Popover :popStyle="popoverStyle">
                    <template #reference>
                        <div class="right-entry--outside">
                            <IconsHeaderbarShiouCang />
                            <span>收藏</span>
                        </div>
                    </template>
                    <template #content>
                        <HeadercardNoLoginCard content="登录即可查看我的收藏" @isLogin="isLoginDialog" />
                    </template>
                </Popover>
            </div>
        </div>
        <!-- 历史 -->
        <div class="right-entry-item">
            <div class="right-entry-item-history" v-if="isLogin">
                <a href="/test" target="_blank" class="right-entry--outside">
                    <IconsHeaderbarLiSHi />
                    <span>历史</span>
                </a>
            </div>
            <div class="right-entry-item-history" v-else>
                <Popover :popStyle="popoverStyle">
                    <template #reference>
                        <div class="right-entry--outside">
                            <IconsHeaderbarLiSHi />
                            <span>历史</span>
                        </div>
                    </template>
                    <template #content>
                        <HeadercardNoLoginCard content="登录即可查看历史记录" @isLogin="isLoginDialog" />
                    </template>
                </Popover>
            </div>
        </div>
        <!-- 创作中心 -->
        <div class="right-entry-item">
            <div class="right-entry-item-creation" v-if="isLogin">
                <a href="/platform/upload/video/frame?spm_id_from=333.1007.0.0" target="_blank"
                    class="right-entry--outside">
                    <IconsHeaderbarChiuangZuo />
                    <span>创作中心</span>
                </a>
            </div>
            <div class="right-entry-item-creation" v-else>
                <div class="right-entry--outside">
                    <IconsHeaderbarChiuangZuo />
                    <span>创作中心</span>
                </div>
            </div>
        </div>
        <!-- 投稿按钮 -->
        <div class="right-entry-item right-entry-item--upload" v-if="isLogin">
            <Popover :popStyle=uploadoffsetStyle>
                <template #reference>
                    <a class="upload-buttom" href="/platform/upload/video/frame" target="_blank">
                        <IconsHeaderbarUpLoad />
                        <span style="margin-left: 2px;">投稿</span>
                    </a>
                </template>
                <template #content>
                    <HeadercardUpload :isLogin="isLogin" />
                </template>
            </Popover>
        </div>
        <div class="right-entry-item right-entry-item--upload" v-else>
            <Popover :popStyle=uploadoffsetStyle>
                <template #reference>
                    <div class="upload-buttom" @click="gotoUpload">
                        <IconsHeaderbarUpLoad />
                        <span style="margin-left: 2px;">投稿</span>
                    </div>
                </template>
                <template #content>
                    <HeadercardUpload @isLogin="isShowLoginDialog" />
                </template>
            </Popover>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { UserInfo } from '@/types/user'
import { getUserInfoApi } from '@/api/user';
const dialogVisible = ref(false);
const showAvatarPopover = ref(false);
// const isLogin = useIsLogin();
const isLogin = ref<boolean>(false);
const screenWidth = ref<number>(0); //屏幕宽度
const uploadoffsetStyle = ref<string>("");
const popoverStyle = ref<string>("");
const userInfo = ref<UserInfo>();
const isShowPopover = ref(false);
const isloadImg = ref(false); // 是否加载头像图片

interface Props {
    isFixedHeaderRight?: boolean // 是否固定显示
}
const props = withDefaults(defineProps<Props>(), {
    isFixedHeaderRight: false,
});
const emit = defineEmits(['lazyload']);
const isShowLoginDialog = (isShowLoginDialog: boolean) => {
    dialogVisible.value = isShowLoginDialog;
}
const closeLoginDialog = async (closeLoginDialog: boolean) => {
    await getUserInfo();
    if (closeLoginDialog === true) {
        showAvatarPopover.value = false;
        dialogVisible.value = false;
        isLogin.value = true;
    }
}
const isLogout = (isLogout: boolean) => {
    if (isLogout) {
        isLogin.value = true;
    } else {
        isLogin.value = false;
    }
}
const gotoUpload = () => {
    dialogVisible.value = true;
}

const isShowAvatarPopover = (isShowAvatarPopover: boolean) => {
    if (isShowAvatarPopover) {
        showAvatarPopover.value = true;
    } else {
        showAvatarPopover.value = false;
    }
}

const isLoginDialog = (isLoginDialog: boolean) => {
    if (isLoginDialog) {
        dialogVisible.value = true;
    } else {
        dialogVisible.value = false;
    }
}
// 更新屏幕宽度的函数
const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
}
// 登录后获取用户信息
const getUserInfo = async () => {
    const response = await getUserInfoApi(); // 获取用户信息
    if (response.code === 200) {
        userInfo.value = response.data as UserInfo;
        const avatarUrl = userInfo.value.avatar;
        await loadImage("https://static.v.hblog.top" + avatarUrl, () => {
            isloadImg.value = true;
            isLogin.value = true;
        }, (error) => {
            console.error('图片加载失败:', error.message);
        });
    } else if (response.code === 401) {
        isLogin.value = false;
    } else {
        throw new Error('获取用户信息失败');
    }
}
watchEffect(() => {
    if (screenWidth.value < 1279.9) {
        uploadoffsetStyle.value = "padding-top: 20px; margin-left: -144px";
        popoverStyle.value = "padding-top: 26px;";
        // console.log(uploadoffsetStyle.value)
    } else {
        uploadoffsetStyle.value = "padding-top: 20px; margin-left: -114px";
        popoverStyle.value = "padding-top: 18px;";
        // console.log(uploadoffsetStyle.value)
    }
});

onMounted(async () => {
    // 监听窗口大小变化
    window.addEventListener('resize', updateScreenWidth);
    // 初始化屏幕宽度
    updateScreenWidth();
    await getUserInfo(); // 获取用户信息
    emit("lazyload");
});
onBeforeUnmount(() => {
    // 移除窗口大小变化监听
    window.removeEventListener('resize', updateScreenWidth);
});
</script>
<style scoped lang="scss">
.right-entry {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    /*容器空间不足时不缩小，即固定大小*/
    fill: #ffffff;
    color: #ffffff;
    // opacity: 1;
    // transition: opacity 0.5s ease;
    // transition: all 0.5s ease;
    // transition: 0.5s allow-discrete;
    // opacity: 1;
    // @starting-style {
    //     opacity: 0;
    // }
    animation: fadeIn 0.5s ease forwards;

    .header-avater {
        position: relative;
        box-sizing: border-box;
        width: 50px;
        height: 45px;
        margin: 0 10px 0 0;

        .header-avatar-wrap {
            position: relative;
            box-sizing: border-box;
            width: 50px;
            height: 45px;
            text-align: center;

            .header-avatar-wrap--container {
                position: relative;
                z-index: 2;
                background: #cdd0d6;
                transition: all 0.4s ease-out;
                cursor: pointer;

                .v-img {
                    position: relative;
                    display: inline-block;
                    line-height: 1;
                    width: 100%;
                    height: 100%;
                    vertical-align: middle;
                    border-radius: 50%;
                    // background-color: #ffffff; 
                    background-image: url(data:image/gif;base64,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);
                    background-size: cover;
                }

                .v-img .avatar-img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: inherit;
                    border-radius: 50%;
                    image-rendering: -webkit-optimize-contrast;
                    transition: all 0.1s linear;

                }
            }

            .mini-avatar--small {
                position: absolute;
                top: 2px;
                left: 10px;
                z-index: 2;
                display: block;
                width: 38px;
                height: 38px;
                border-radius: 50%;
                box-sizing: border-box;
                border: 2px solid #fff;
                transition: width 0.3 ease-in, height 0.3s ease-in, top 0.3s ease-out, left 0.3s ease-in;
                /* 添加平滑过渡效果 */
                animation: shrink 0.3 both;
                /* 初始状态为缩小 */
                transform: translateZ(0px);
            }

            .big-avatar--small {
                top: 15px;
                left: -35px;
                width: 90px;
                height: 90px;
                transition: big-avatar 0.4s ease-out;
                transition: width 0.4s ease-in, height 0.4s ease-in, top 0.4s ease-out, left 0.4s ease-in;
                /* 添加平滑过渡效果 */
                animation: shrink 0.4s both;
                /* 初始状态为缩小 */
                transform: translateZ(0px);
            }

            .default-login {
                position: absolute;
                top: 2px;
                left: 10px;
                z-index: 2;
                display: block;
                width: 38px;
                height: 38px;
                border-radius: 50%;
                background-color: var(--brand_blue);
                ;
                text-align: center;
                line-height: 38px;
                color: rgba(255, 255, 255, 0.9);
                cursor: pointer;

                .nologin-text {
                    font-size: 15px;
                    text-align: center;
                    justify-content: center;
                    display: block;
                }
            }
        }
    }

    .right-entry-item {
        position: relative;
        display: block;

        .right-entry-item-vip,
        .right-entry-item-message,
        .right-entry-item-dynamic,
        .right-entry-item-collection,
        .right-entry-item-history,
        .right-entry-item-creation {
            display: block;
            position: relative;

            .red-num-message {
                position: absolute;
                top: -6px;
                z-index: 1;
                padding: 0 3px;
                min-width: 15px;
                border-radius: 10px;
                background-color: #fa5a57;
                color: #fff;
                font-size: 12px;
                line-height: 15px;
            }

            .right-entry--outside {
                display: flex;
                align-items: center;
                flex-direction: column;
                text-decoration: none;
                flex-shrink: 0;
                margin-right: 0;
                min-width: 50px;
                text-align: center;
                font-size: 13px;
                cursor: pointer;

                &:hover {
                    svg {
                        animation: jump 0.3s;
                        /* 应用跳动动画效果 */
                    }
                }
            }

        }
    }

    .right-entry-item--upload {
        margin-left: 15px;

        .upload-buttom {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 90px;
            height: 34px;
            border-radius: 8px;
            background: #fb7299;
            color: #fff;
            text-align: center;
            font-size: 14px;
            line-height: 34px;
            cursor: pointer;
            transition: background-color .3s;
            text-decoration: none;

            &:hover {
                background-color: #f992af;
            }
        }
    }
}

.right-entry-fixed {
    fill: #000000;
    color: #000000;
}

@media (max-width: 1099.9px) {
    .right-entry {
        margin-left: 10px;
    }
}

@media (min-width: 1100px) and (max-width: 1366.9px) {
    .right-entry {
        margin-left: 10px;

        .right-entry-item {

            .right-entry-item-vip,
            .right-entry-item-message,
            .right-entry-item-dynamic,
            .right-entry-item-collection,
            .right-entry-item-history,
            .right-entry-item-creation {
                .right-entry--outside {
                    margin: 0 5px !important;
                    min-width: 25px !important;
                }
            }

        }

        .right-entry-item--upload {
            margin-left: 8px;
        }
    }
}

@media (min-width: 1367px) and (max-width: 1700.9px) {
    .right-entry {
        margin-left: 10px;
    }
}

@media (min-width: 1701px) and (max-width: 2199.9px) {
    .right-entry {
        margin-left: 20px;
    }
}

@media (min-width: 1280px) {
    .red-num-message {
        left: 25px;
    }
}

@media (max-width: 1279.9px) {
    .right-entry {

        .right-entry-item {

            .right-entry-item-vip,
            .right-entry-item-message,
            .right-entry-item-dynamic,
            .right-entry-item-collection,
            .right-entry-item-history,
            .right-entry-item-creation {
                .right-entry--outside {
                    margin: 0 5px !important;
                    min-width: 25px !important;
                }
            }

            .upload-buttom {
                width: 34px !important;
                height: 34px !important;
                margin-left: 0 !important;
            }
        }
    }

    .right-entry--outside span,
    .upload-buttom span {
        display: none;
    }

    .red-num-message {
        left: 17px;
    }
}

@keyframes big-avatar {
    0% {
        top: 0px;
        left: 0px;
        width: 38px;
        height: 38px;
    }

    100% {
        top: 15px;
        left: -35px;
        width: 90px;
        height: 90px;
    }
}

@keyframes shrink {
    to {
        transform: scale(1);
        /* 缩小到原始大小 */
    }
}

/* 跳动效果 */
@keyframes jump {

    0%,
    100% {
        transform: translateY(0);
        /* 起始和结束状态，图标回到原位 */
    }

    50% {
        transform: translateY(-5px);
        /* 中间状态，图标向上跳动 20px */
    }
}
</style>