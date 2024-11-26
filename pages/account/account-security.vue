<template>
    <NuxtLayout name="spacelayout">
        <Title>哈哩哈哩 (゜-゜)つロ 干杯~-halohalo-测试页面</Title>
        <div class="security-home_view">
            <div class="security-home-wp">
                <div class="security-top-header high">
                    <div class="security-top-header-content">
                        <div class="security-top-icon lv-high-icon">
                            <div class="security-header-lv-num">80</div>
                            <div class="security-header-lv-info">账号安全评分</div>
                        </div>
                        <div class="security-top-right">
                            <div class="right-title-txt" style="color: rgb(14, 179, 80);">账号安全情况极佳</div>
                            <div class="right-title-info">
                                <span>请继续保持哦</span>
                            </div>
                            <div class="right-title-middle-line"></div>
                            <div class="right-login-time">
                                最近于2024-11-17 16:57:35
                                <span class="right-login-location">
                                    <span>中国重庆移动</span>
                                    登录
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 12 12" width="12" height="12"
                                        style="width: 12px; height: 12px; vertical-align: middle;">
                                        <path
                                            d="M4.359835 1.609835C4.21339 1.756285 4.21339 1.99372 4.359835 2.140165L8.0429 5.823225C8.140525 5.920875 8.140525 6.079125 8.0429 6.176775L4.359835 9.859825C4.21339 10.006275 4.21339 10.243725 4.359835 10.390175C4.506285 10.5366 4.743725 10.5366 4.89017 10.390175L8.573225 6.7071C8.96375 6.316575 8.96375 5.683425 8.573225 5.2929L4.89017 1.609835C4.743725 1.46339 4.506285 1.46339 4.359835 1.609835z"
                                            fill="currentColor">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="security-home-content">
                    <div class="security-home-title">继续完善以下内容</div>
                    <SecurityCard />
                    <div class="security-home-title security-home-title-margin">已完成内容</div>
                    <SecurityCard />
                </div>
            </div>
            <Footer />
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.security-home_view {
    margin: 0 auto;
    min-width: 1100px;
    max-width: 2560px;
    min-height: calc(100vh - 540px);
    background-color: #fff;

    .security-home-wp {
        background: #fcfcfc;
        padding-bottom: 120px;

        .security-top-header {
            width: 100%;
            height: 272px;
            display: flex;
            justify-content: center;

            .security-top-header-content {
                box-sizing: border-box;
                margin-top: 60px;
                width: 600px;
                height: 180px;
                display: flex;
                align-items: center;
                padding-right: 50px;

                .security-top-icon {
                    width: 180px;
                    height: 180px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .security-header-lv-num {
                        margin-top: 40px;
                        font-weight: 500;
                        font-size: 50px;
                        line-height: 70px;
                        color: #fff;
                    }

                    .security-header-lv-info {
                        margin-top: -2px;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 16px;
                        color: #fff;
                    }
                }

                .lv-high-icon {
                    background: url(//s1.hdslb.com/bfs/static/jinkela/account-security-pc/assets/icon_high.png) no-repeat;
                    background-size: 100% 100%;
                }

                .lv-middle-icon {
                    background: url(//s1.hdslb.com/bfs/static/jinkela/account-security-pc/assets/icon_middle.png) no-repeat;
                    background-size: 100% 100%;
                }

                .security-top-right {
                    flex: 1;
                    margin-left: 32px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    .right-title-txt {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 32px;
                        line-height: 44px;
                    }

                    .right-title-info {
                        margin-top: 6px;
                        margin-bottom: 14px;
                        display: flex;
                        align-items: center;

                        span {
                            font-style: normal;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 20px;
                            color: #61666d;
                        }
                    }

                    .right-login-time {
                        margin-top: 12px;
                        font-family: PingFang SC;
                        font-style: normal;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 20px;
                        color: #61666d;

                        .right-login-location {
                            font-style: normal;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 20px;
                            cursor: pointer;
                            color: #61666d;

                            span {
                                padding: 0 3px;
                                font-weight: 500;
                                color: #18191c;
                            }
                        }
                    }
                }


            }
        }

        .high {
            background: linear-gradient(179.5deg, #e0ffeb .43%, rgba(224, 255, 235, 0) 94.03%);
        }

        .middle {
            background: linear-gradient(179.5deg, rgba(255, 231, 183, .4) .43%, rgba(255, 230, 182, 0) 94.03%);
        }

        .security-home-content {
            width: 600px;
            margin: 28px auto 0;

            .security-home-title {
                font-size: 16px;
                font-weight: 500;
                line-height: 22px;
            }

            .security-home-title-margin {
                margin-top: 48px;
            }
        }
    }
}
</style>