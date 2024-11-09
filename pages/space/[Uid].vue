<template>
    <NuxtLayout name="spacelayout">
        <Title>_淡-定-的个人空间-_淡-定-个人主页-哈哩哈哩</Title>
        <div class="user-space_wrap">
            <div class="user-inner-container">
                <div class="inner-wrapper">
                    <div class="ban-forbid" style="display: none;">
                        <div class="ban-wrap">
                            <i class="ban-icon"></i>
                            <span class="ban-txt">该账号封禁中</span>
                        </div>
                    </div>
                    <div class="user-inner" :style="`background-image: url(${bagUrl});`">
                        <div class="inner-gradient"></div>
                        <div class="hl-userInfo">
                            <div class="hl-info">
                                <div class="avatar-container">
                                    <AvatarVAvatar :avatarStyle="{ width: '60px', height: '60px' }" />
                                    <a target="_blank" href="" class="avatar-cover">更换头像</a>
                                </div>
                                <div class="hl-basic">
                                    <div class="info">
                                        <span class="hl-name">_淡-定-</span>
                                        <span class="hl-ceritification icon"></span>
                                        <span class="icon gender"></span>
                                        <a href="" target="_blank" class="hl-level">
                                            <svg-icon name="level5" color="#ffffff"></svg-icon>
                                        </a>
                                        <div class="hl-vipType disable">大会员</div>
                                    </div>
                                    <div class="hl-basic-spacing">
                                        <h4 class="hl-sign" style="display: none;">

                                        </h4>
                                        <input placeholder-style="color: #ffffff" type="text" placeholder="编辑个性签名"
                                            maxlength="60" class="hl-sign space_input">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="space-theme-trigger icon" @click="showThemePanel"></div>
                        <div class="hl-action">
                            <span class="hl-f-btn hl-follow">关注</span>
                            <a href="" target="_blank" class="hl-f-btn hl-message">发消息</a>
                        </div>
                        <div class="hl-dropdown">
                            <div class="hl-v-btn popup-select">
                                视角：
                                <span class="hl-state">我自己</span>
                                <span class="icon d-arrow d-arrow-dark"></span>
                            </div>
                            <ul class="hl-dropdown-menu" style="display: none;">
                                <li class="hl-dropdown-item">
                                    新访客
                                </li>
                                <li class="hl-dropdown-item">
                                    我的粉丝
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="space-theme" :class="isShowThemePanel ? 'show-space-theme' : ''">
                    <div class="theme-header">
                        <div class="theme-wrapper">
                            <div class="theme-right">
                                <i class="iconfont icon-close" @click="closeThemePanel"></i>
                            </div>
                            <div class="theme-left">
                                <span class="theme-tab">头图</span>
                            </div>
                        </div>
                    </div>
                    <div class="theme-panel">
                        <div class="wrapper theme-panel-inner">
                            <div class="theme-list">
                                <ul class="theme-list-inner">
                                    <li class="item toutu-item" v-for="item in 9" :key="item"
                                        :style="`background-image: url(${bagUrl});`">
                                        <div class="toutu-detail">
                                            <div class="toutu-meta">
                                                <div class="toutu-title">bilibili春</div>
                                                <div class="toutu-price">免费</div>
                                                <div class="toutu-action">
                                                    <span class="toutu-btn use">使用</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="selected-icon"></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navigator" ref="navigatorRef">
                <div class="navigator_wrapper">
                    <div class="navigator-inner">
                        <div class="navigator-tab-links" @mouseleave="hoverIdx = -1">
                            <NuxtLink to="/space/242455990210" class="navigator-btn active" @mouseenter="hoverIdx = 0">
                                <svg-icon class="icon-ic_home" name="home" color="#00c091"></svg-icon>
                                <span class="navigator-text">主页</span>
                            </NuxtLink>
                            <NuxtLink to="/space/242455990210/dynamic" class="navigator-btn" @mouseenter="hoverIdx = 1">
                                <svg-icon class="icon-ic_following" name="dynamic" color="#fb7299"></svg-icon>
                                <span class="navigator-text">动态</span>
                            </NuxtLink>
                            <NuxtLink to="/space/242455990210/upload/video" class="navigator-btn"
                                @mouseenter="hoverIdx = 2">
                                <svg-icon class="icon-ic_video" name="up-video" color="#02b5da"></svg-icon>
                                <span class="navigator-text">投稿</span>
                                <span class="navigator-num">4</span>
                            </NuxtLink>
                            <NuxtLink to="/space/242455990210/channel" class="navigator-btn" @mouseenter="hoverIdx = 3">
                                <svg-icon class="icon-ic_channel" name="channel" color="#23c9ed"></svg-icon>
                                <span class="navigator-text">视频和列表</span>
                                <span class="navigator-num">0</span>
                            </NuxtLink>
                            <NuxtLink to="/space/242455990210/favlist" class="navigator-btn" @mouseenter="hoverIdx = 4">
                                <svg-icon class="icon-ic_collect" name="favlist" color="#f3a034"></svg-icon>
                                <span class="navigator-text">收藏</span>
                                <span class="navigator-num">4</span>
                            </NuxtLink>
                            <NuxtLink to="/space/242455990210/setting" class="navigator-btn" @mouseenter="hoverIdx = 5">
                                <svg-icon class="icon-ic_setting" name="setting" color="#23c9ed"></svg-icon>
                                <span class="navigator-text">设置</span>
                            </NuxtLink>
                        </div>
                        <div class="search-container">
                            <input type="text" placeholder="搜索视频、动态" class="space_input">
                            <IconsSearch class="search-icon" />
                        </div>
                        <div class="navigator-statistics">
                            <NuxtLink to="" class="navigator-data navigator-gz" title="42">
                                <p class="navigator-data-k">关注数</p>
                                <p id="navigator-gz" class="navigator-data-v space-attention">
                                    42
                                </p>
                            </NuxtLink>
                            <NuxtLink to="" class="navigator-data navigator-fs" title="3">
                                <p class="navigator-data-k">粉丝数</p>
                                <p id="navigator-fs" class="navigator-data-v space-fans">
                                    3
                                </p>
                            </NuxtLink>
                            <div title="截至2024.11.03, 视频、动态、专栏累计获赞1" class="navigator-data navigator-bf">
                                <p class="navigator-data-k">获赞数</p>
                                <p id="navigator-bf" class="navigator-data-v">1</p>
                            </div>
                            <div title="截止昨天，播放数总计为0" class="navigator-data navigator-bf">
                                <p class="navigator-data-k">播放数</p>
                                <p id="navigator-bf" class="navigator-data-v">0</p>
                            </div>
                        </div>
                    </div>
                    <div class="navigator-cursor" style="width: 50px; left: 20px;"></div>
                </div>
            </div>
            <div class="navigator-fixed" :class="isFixedNavigator ? 'fixed' : ''">
                <div class="navigator_wrapper">
                    <div class="navigator-inner">
                        <div class="navigator-tab-links" @mouseleave="hoverIdx = -1">
                            <NuxtLink to="/space/242455990210" class="navigator-btn active" @mouseenter="hoverIdx = 0">
                                <AvatarVAvatar
                                    :avatarStyle="{ width: '24px', height: '24px', display: 'inline-block', marginRight: '5px', verticalAlign: 'middle' }" />
                                <span title="_淡-定-" class="navigator-text" style="display: inline-block;">_淡-定-</span>
                            </NuxtLink>
                            <NuxtLink to="/space/242455990210/dynamic" class="navigator-btn" @mouseenter="hoverIdx = 1">
                                <svg-icon class="icon-ic_following" name="dynamic" color="#fb7299"></svg-icon>
                                <span class="navigator-text">动态</span>
                            </NuxtLink>
                            <NuxtLink to="/space/242455990210/upload/video" class="navigator-btn"
                                @mouseenter="hoverIdx = 2">
                                <svg-icon class="icon-ic_video" name="up-video" color="#02b5da"></svg-icon>
                                <span class="navigator-text">投稿</span>
                                <span class="navigator-num">4</span>
                            </NuxtLink>
                            <NuxtLink to="/space/242455990210/channel" class="navigator-btn" @mouseenter="hoverIdx = 3">
                                <svg-icon class="icon-ic_channel" name="channel" color="#23c9ed"></svg-icon>
                                <span class="navigator-text">视频和列表</span>
                                <span class="navigator-num">0</span>
                            </NuxtLink>
                            <NuxtLink to="/space/242455990210/favlist" class="navigator-btn" @mouseenter="hoverIdx = 4">
                                <svg-icon class="icon-ic_collect" name="favlist" color="#f3a034"></svg-icon>
                                <span class="navigator-text">收藏</span>
                                <span class="navigator-num">4</span>
                            </NuxtLink>
                            <NuxtLink to="/space/242455990210/setting" class="navigator-btn" @mouseenter="hoverIdx = 5">
                                <svg-icon class="icon-ic_setting" name="setting" color="#23c9ed"></svg-icon>
                                <span class="navigator-text">设置</span>
                            </NuxtLink>
                        </div>
                        <div class="search-container">
                            <input type="text" placeholder="搜索视频、动态" class="space_input">
                            <IconsSearch class="search-icon" />
                        </div>
                        <div class="navigator-statistics">
                            <NuxtLink to="" class="navigator-data navigator-gz" title="42">
                                <p class="navigator-data-k">关注数</p>
                                <p id="navigator-gz" class="navigator-data-v space-attention">
                                    42
                                </p>
                            </NuxtLink>
                            <NuxtLink to="" class="navigator-data navigator-fs" title="3">
                                <p class="navigator-data-k">粉丝数</p>
                                <p id="navigator-fs" class="navigator-data-v space-fans">
                                    3
                                </p>
                            </NuxtLink>
                            <div title="截至2024.11.03, 视频、动态、专栏累计获赞1" class="navigator-data navigator-bf">
                                <p class="navigator-data-k">获赞数</p>
                                <p id="navigator-bf" class="navigator-data-v">1</p>
                            </div>
                            <div title="截止昨天，播放数总计为0" class="navigator-data navigator-bf">
                                <p class="navigator-data-k">播放数</p>
                                <p id="navigator-bf" class="navigator-data-v">0</p>
                            </div>
                        </div>
                    </div>
                    <div class="navigator-cursor" style="width: 50px; left: 20px;"></div>
                </div>
            </div>
            <div class="hl-space-container">
                <NuxtPage />
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
const navigatorRef = ref<HTMLDivElement | null>(null);
const bagUrl = '//io.v.hblog.top/hfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png@2560w_400h_100q_1o.webp';
const isShowThemePanel = ref<boolean>(false);
const isFixedNavigator = ref<boolean>(false);
interface NavigatorItem {
    left: number;
    width: number;
    fixedLeft: number;
    fixedWidth: number;
    isActiveIndex: number;
}
const hoverIdx = ref<number>(0);
const navigatorLeft = ref<number>(0);
const navigatorWidth = ref<number>(0);
const navigatorActive = reactive<NavigatorItem>({
    left: 0,
    width: 0,
    fixedLeft: 0,
    fixedWidth: 0,
    isActiveIndex: 0
});

const showThemePanel = () => {
    isShowThemePanel.value = true;
}
const closeThemePanel = () => {
    isShowThemePanel.value = false;
}
const handleScroll = () => {
    if (navigatorRef.value) {
        if ((navigatorRef.value.getBoundingClientRect().top + 70) <= 0) {
            if (!isFixedNavigator.value) {
                isFixedNavigator.value = true;
            }
        } else {
            if (isFixedNavigator.value) {
                isFixedNavigator.value = false;
            }
        }
    }
}

const hoverActive = (idex: number) => {
    switch (idex) {
        case -1:

    }
}

watch(() => hoverIdx.value, (newVal) => {

});

onMounted(async () => {
    window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped lang="scss">
.user-space_wrap {
    position: relative;

    .space_input {
        line-height: 28px;
        height: 28px;
        padding: 0 10px;
        transition: all .3s ease;
        vertical-align: top;
        border: 1px solid #ccd0d7;
        border-radius: 0;
    }

    .icon {
        vertical-align: middle;
        background-repeat: no-repeat;
        display: inline-block;
        background-image: url(@/assets/img/icons.png);
    }

    .user-inner-container {
        position: relative;
        z-index: 10;

        .inner-wrapper {
            width: 1101px;
            margin: 0 auto;
            position: relative;

            .ban-forbid {
                height: 42px;
                margin-bottom: 10px;
                background-color: #e5e9ef;
                border-radius: 4px;

                .ban-wrap {
                    width: 203px;
                    margin: 0 auto;

                    .ban-icon {
                        background-image: url(@/assets/img/icons.png);
                        background-position: -664px -458px;
                        display: inline-block;
                        width: 80px;
                        height: 42px;
                        margin-right: 20px;
                    }

                    .ban-txt {
                        font-size: 14px;
                        color: #222;
                        line-height: 42px;
                        display: inline-block;
                        vertical-align: top;
                    }
                }
            }

            .user-inner {
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAEElEQVR4AWP48vU7MqKUDwA7qkfh9iF73wAAAABJRU5ErkJggg==);
                background-position: 50%;
                background-size: cover;
                transition: background-image .2s ease, background-size 1s ease;
                padding-top: 116px;
                position: relative;

                .inner-gradient {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 84px;
                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAABdCAMAAADNEjtLAAABEVBMVEUDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAACnjvHuAAAAW3RSTlMBAgMEBQYHCAkKCwwNDxAREhQVFhgZGxweHyEiJCUnKSosLS8xMjQ2ODk7PT5AQkNFR0hKTE5PUVNUVldZW1xeX2FiZGVnaGprbG5vcHFzdHV2d3h5ent8fX5/XoZ4lgAAAPVJREFUeAHt1AERADAQAiDdrX/mDyKEIAAAjGkDsOk3AAIEECCAAAEECCBAAAECCBBAgAACBBAggAABBAggQAABAggQQIAAAgQQIIAAAQQIIEAAAQIIEECAAAIEECCAAAEECAgQQIAAAgQQIIAAAQQIIEAAAQIIEECAAAIEECCAAAEECCBAAAECCBBAgAACBBAggAABBAggQAABAggQQIAAAgQQIIAAAQECCBBAgAACBBAggAABBAggQAABAggQQIAAAgQQIIAAAQQIIEAAAQIIEECAAAIEECCAAAEECCBAAAECCBBAgAACBAQIIEAAAQIseAEYdZ9sAcJDX4ICAAAAAElFTkSuQmCC);
                    background-repeat: repeat-x;
                }

                .hl-userInfo {
                    position: relative;
                    z-index: 1;


                    .hl-info {
                        margin-left: 20px;
                        padding-bottom: 16px;
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-align: center;
                        align-items: center;

                        &::before {
                            content: " ";
                            display: table;
                        }

                        .avatar-container {
                            position: relative;

                            .avatar-cover {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 60px;
                                height: 60px;
                                background: rgba(0, 0, 0, .6);
                                font-size: 12px;
                                color: #fff;
                                line-height: 60px;
                                text-align: center;
                                opacity: 0;
                                border-radius: 50%;
                                transition: opacity .2s;
                            }

                            &:hover .avatar-cover {
                                opacity: 1;
                            }
                        }

                        .hl-basic {
                            color: #fff;
                            font-size: 0;
                            margin-left: 22px;

                            .info {
                                .hl-name {
                                    display: inline-block;
                                    margin-right: 5px;
                                    font-weight: 700;
                                    line-height: 18px;
                                    font-size: 18px;
                                    vertical-align: middle;
                                }

                                .hl-ceritification {
                                    background-position: -217px -792px;
                                    display: none;
                                    width: 11px;
                                    height: 18px;
                                    margin: 0 1px 0 6px;
                                    vertical-align: middle;
                                }

                                .gender {
                                    display: none;
                                    width: 21px;
                                    height: 18px;
                                    margin-right: 5px;
                                    vertical-align: middle;
                                    background-position: -212px -922px;
                                }

                                .hl-level {
                                    display: inline-block;
                                    width: 25px;
                                    height: 14px;
                                    margin-right: 5px;

                                    .svg-icon {
                                        width: 25px;
                                        height: 14px;
                                    }
                                }

                                .hl-vipType {
                                    display: inline-block;
                                    height: 16px;
                                    line-height: 16px;
                                    border-radius: 4px;
                                    font-size: 12px;
                                    color: #fff;
                                    padding: 0 5px;
                                    background-color: #f45a8d;
                                    vertical-align: middle;
                                    margin-right: 5px;
                                    cursor: pointer;
                                }

                                .disable {
                                    background-color: #ccd0d7;
                                    color: #99a2aa;
                                }

                            }

                            .hl-basic-spacing {
                                margin-top: 6px;

                                .hl-sign {
                                    background: transparent;
                                    border-radius: 4px;
                                    border: none;
                                    box-shadow: none;
                                    color: hsla(0, 0%, 100%, .8);
                                    font-size: 12px;
                                    font-family: Microsoft Yahei;
                                    line-height: 26px;
                                    height: 26px;
                                    margin-left: -5px;
                                    padding: 0 5px;
                                    position: relative;
                                    top: -1px;
                                    width: 730px;

                                    &:hover {
                                        background: hsla(0, 0%, 100%, .2);
                                        box-shadow: 0 0 0 1px hsla(0, 0%, 100%, .5);
                                    }

                                    &:focus {
                                        background: #fff;
                                        box-shadow: inset 0 2px 4px rgba(35, 54, 86, .3);
                                        color: #6d757a;
                                    }
                                }

                                input[type="text"]:-moz-placeholder {
                                    color: #fff;
                                }

                                input[type="text"]:-ms-input-placeholder {
                                    color: #fff;
                                }

                                input[type="text"]::-webkit-input-placeholder {
                                    color: #fff;
                                }

                            }
                        }
                    }
                }

                .space-theme-trigger {
                    background-image: url(@/assets/img/theme-trigger-new.png);
                    background-position: 0 0;
                    border-radius: 0 4px 0 0;
                    cursor: pointer;
                    width: 58px;
                    height: 49px;
                    transition: opacity .2s ease;
                    position: absolute;
                    top: 0;
                    right: 0;
                }

                .hl-action {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    z-index: 1;

                    .hl-f-btn {
                        background: rgba(0, 0, 0, .45);
                        box-shadow: 0 0 0 2px hsla(0, 0%, 100%, .3);
                        border-radius: 4px;
                        color: #fff;
                        cursor: pointer;
                        display: inline-block;
                        font-size: 14px;
                        text-align: center;
                        margin: 0 20px 17px 0;
                        width: 76px;
                        line-height: 30px;
                    }

                    .hl-follow {
                        background: var(--brand_pink);
                        box-shadow: 0 0 0 2px #fff;
                        color: #fff;
                    }

                }

                .hl-dropdown {
                    display: inline-block;
                    cursor: pointer;
                    position: absolute;
                    top: 15px;
                    right: 57px;

                    .hl-v-btn {
                        background: rgba(0, 0, 0, .45);
                        border-radius: 4px;
                        color: #fff;
                        cursor: pointer;
                        font-size: 12px;
                        line-height: 30px;
                        transition: all .1s ease;
                        padding: 0 10px;
                    }

                    .d-arrow-dark {
                        background-position: -1371px -221px;
                        margin-left: 5px;
                        width: 11px;
                        height: 8px;
                    }

                    .hl-dropdown-menu {
                        position: absolute;
                        left: 8px;
                        top: 22px;
                        transform-origin: center top;
                        z-index: 10;
                        padding: 6px 0;
                        background-color: #fff;
                        border: 1px solid #e5e9ef;
                        border-radius: 4px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, .14);

                        .hl-dropdown-item {
                            height: 40px;
                            padding: 0 20px;
                            line-height: 40px;
                            text-align: center;
                            font-size: 14px;
                            color: #222;
                            box-sizing: border-box;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            transition: background-color .2s ease;
                            cursor: pointer;

                            &:hover {
                                color: var(--brand_blue);
                                background-color: #e5e9ef;
                            }
                        }
                    }
                }

            }
        }

        .space-theme {
            transition: bottom .4s ease;
            position: fixed;
            left: 0;
            bottom: -600px;
            width: 100%;
            z-index: 1000;
            background: rgba(0, 0, 0, .8);
            color: #fff;

            .theme-header {
                .theme-wrapper {
                    width: 1101px;
                    margin: 0 auto;
                    position: relative;

                    .theme-right {
                        float: right;
                        margin-top: 10px;

                        .icon-close {
                            cursor: pointer;
                            font-size: 22px;

                            &:hover {
                                color: var(--brand_blue);
                            }
                        }
                    }

                    .theme-left {
                        &::before {
                            content: " ";
                            display: table;
                        }

                        .theme-tab {
                            display: block;
                            float: left;
                            font-size: 18px;
                            margin-right: 10px;
                            line-height: 52px;
                            width: 130px;
                            text-align: center;
                            background-color: #111;
                        }
                    }
                }
            }

            .theme-panel {
                background: #111;
                margin-top: 52px;
                padding: 25px 0 15px;
                position: relative;

                .theme-panel-inner {
                    width: 1101px;
                    margin: 0 auto;
                    position: relative;
                    display: block;

                    &:before {
                        content: " ";
                        display: table;
                    }

                    .theme-list {
                        padding-left: 45px;
                        position: relative;
                        height: 280px;
                        overflow-y: scroll;
                        overflow-anchor: none;
                        touch-action: auto;
                        scrollbar-width: none;
                        -ms-overflow-style: none;

                        &::-webkit-scrollbar {
                            display: none;
                        }

                        .theme-list-inner {
                            padding-bottom: 40px;
                            display: block;
                            zoom: 1;

                            &:before {
                                content: " ";
                                display: table;
                            }

                            .toutu-item {
                                border: 3px solid #555;
                                border-radius: 12px;
                                cursor: pointer;
                                float: left;
                                width: 310px;
                                height: 96px;
                                position: relative;
                                margin: 0 25px 20px 0;
                                background-size: cover;
                                background-position: 50%;

                                .toutu-detail {
                                    background-repeat: no-repeat;
                                    border: 3px solid #555;
                                    border-radius: 12px;
                                    opacity: 0;
                                    transition: opacity .2s ease;
                                    overflow: hidden;
                                    position: absolute;
                                    top: -3px;
                                    left: -9999px;
                                    width: 100%;
                                    box-sizing: content-box;

                                    .toutu-meta {
                                        background: #333;
                                        line-height: 1em;
                                        margin-top: 93px;
                                        padding: 10px;
                                        position: relative;

                                        .toutu-title {
                                            color: #fff;
                                            margin-bottom: 10px;
                                        }

                                        .toutu-price {
                                            color: #ccd0d7;
                                        }

                                        .toutu-action {
                                            position: absolute;
                                            bottom: 10px;
                                            right: 10px;

                                            .toutu-btn {
                                                border-radius: 4px;
                                                display: inline-block;
                                                text-align: center;
                                                line-height: 24px;
                                                margin-left: 7px;
                                                width: 54px;
                                                background: #00a1d6;
                                            }
                                        }
                                    }
                                }

                                &:hover {
                                    z-index: 3;
                                    border-bottom-left-radius: 0;
                                    border-bottom-right-radius: 0;

                                    .toutu-detail {
                                        left: -3px;
                                        opacity: 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        .show-space-theme {
            bottom: 0;
        }
    }

    .navigator {
        margin-bottom: 10px;
    }

    .navigator-fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 111;
        transform: translateY(-70px);
        transition: transform .3s ease;
    }

    .fixed {
        transform: translateY(0);
    }

    .navigator,
    .navigator-fixed {


        .navigator_wrapper {
            width: 1101px;
            margin: 0 auto;
            position: relative;

            .navigator-inner {
                display: block;
                zoom: 1;
                height: 66px;
                background: #fff;
                box-shadow: 0 0 0 1px #eee;
                border-radius: 0 0 4px 4px;
                padding: 0 20px;
                font-size: 0;

                .navigator-tab-links {
                    display: inline-block;
                    font-size: 0;
                    vertical-align: middle;

                    .navigator-btn {
                        display: inline-block;
                        font-size: 0;
                        line-height: 66px;
                        margin-right: 16px;
                        position: relative;

                        .icon-ic_home,
                        .icon-ic_following,
                        .icon-ic_video,
                        .icon-ic_channel,
                        .icon-ic_collect,
                        .icon-ic_setting {
                            width: 20px;
                            height: 20px;
                            margin-right: 4px;
                            vertical-align: middle;
                        }

                        .navigator-text {
                            font-size: 13px;
                            vertical-align: middle;
                        }

                        .navigator-num {
                            margin-left: 2px;
                            font-size: 12px;
                            color: #99a2aa;
                            vertical-align: middle;
                        }

                    }

                    .active {
                        color: var(--brand_blue);
                    }
                }

                .search-container {
                    position: relative;
                    display: inline-block;
                    width: 134px;
                    height: 30px;
                    vertical-align: middle;


                    .space_input {
                        position: absolute;
                        height: 30px;
                        width: 134px;
                        padding: 0 29px 0 10px;
                        line-height: 30px;
                        color: #222;
                        font-size: 12px;
                        border: 1px solid #ccd0d7;
                        border-radius: 15px;
                        box-shadow: none;
                        box-sizing: border-box;
                    }

                    .search-icon {
                        position: absolute;
                        right: 8px;
                        top: 0;
                        width: 18px;
                        height: 30px;
                        cursor: pointer;
                        color: #ccd0d7;
                    }
                }

                .navigator-statistics {
                    float: right;
                    height: 66px;

                    .navigator-data {
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-direction: column;
                        flex-direction: column;
                        -ms-flex-pack: center;
                        justify-content: center;
                        float: left;
                        height: 66px;
                        padding: 10px 5px;
                        text-align: center;
                        box-sizing: border-box;

                        .navigator-data-k {
                            line-height: 14px;
                            font-size: 12px;
                            color: #99a2aa;
                        }

                        .navigator-data-v {
                            line-height: 16px;
                            margin-top: 5px;
                            color: #222;
                            font-size: 12px;
                        }
                    }

                    .navigator-gz,
                    .navigator-fs {
                        &:hover {

                            .navigator-data-k,
                            .navigator-data-v {
                                color: var(--brand_blue);
                            }
                        }
                    }
                }
            }

            .navigator-cursor {
                background: #00a1d6;
                width: 0;
                height: 3px;
                transition: all .2s ease;
                position: absolute;
                bottom: -1px;
                left: 0;
            }
        }
    }

    .hl-space-container {
        display: block;
    }
}

@media (min-width: 1420px) {

    .inner-wrapper,
    .navigator_wrapper,
    .hl-space_wrapper {
        width: 1283px !important;

        .col-1 {
            width: 880px !important;
        }
    }
}
</style>