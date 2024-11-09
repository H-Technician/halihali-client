<template>
    <div id="page-dynamic" class="wrapper">
        <div class="col-1">
            <div class="dyn-list">
                <div class="dyn-list__items">
                    <div class="dyn-list__item">
                        <div class="dyn-item">
                            <div class="dyn-item__main">
                                <div class="dyn-item__avatar">
                                    <AvatarVAvatar :avatarStyle="{ width: '48px', height: '48px' }" />
                                </div>
                                <div class="dyn-item__header">
                                    <div class="dyn-title">
                                        <span class="dyn-title__text normal-vip-color">
                                            浅影阿_
                                        </span>
                                    </div>
                                    <div class="dyn-item__desc">
                                        <div class="dyn-time fs-small">
                                            10月27日 · 投稿了视频
                                        </div>
                                    </div>
                                    <div class="dyn-item__more">
                                        <div class="dyn-more__container">
                                            <IconsMore class="dyn-more-icon" />
                                        </div>
                                    </div>
                                </div>
                                <div class="dyn-item__body">
                                    <div class="dyn-content">
                                        <div class="dyn-content__orig">
                                            <div class="dyn-content__orig__desc">
                                                <div class="rich-text">
                                                    <div class="rich-text__content">
                                                        <span>咕咕咕</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dyn-content__orig__major suit-video-card">
                                                <a href="" target="_blank" class="dyn-card-video">
                                                    <div class="dyn-card-video__header">
                                                        <div class="dyn-card-video__cover">
                                                            <div class="h-img">
                                                                <picture class="h-img__inner">
                                                                    <source type="image/avif"
                                                                        srcset="//i1.hdslb.com/bfs/archive/35f3eda10ecff6fdb9df28182c985d34fcefc368.jpg@472w_264h_1c_!web-dynamic.avif">
                                                                    <source type="image/webp"
                                                                        srcset="//i1.hdslb.com/bfs/archive/35f3eda10ecff6fdb9df28182c985d34fcefc368.jpg@472w_264h_1c_!web-dynamic.webp">
                                                                    <img src="" loading="lazy" onload="bmgOnLoad(this)"
                                                                        onerror="">
                                                                </picture>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="dyn-card-video__body">
                                                        <div class="dyn-card-video__title">
                                                            《鸳鸯戏》老师，我真的太想进步了！
                                                        </div>
                                                        <div class="dyn-card-video__desc">
                                                            作品：《鸳鸯戏》
                                                            原唱：Babystop_山竹 /伊笑
                                                            迟到得更新来啦！！
                                                        </div>
                                                        <div class="dyn-card-video__stat">
                                                            <div class="dyn-card-video__stat__item">
                                                                <IconsVideocardPlayer class="icon" />
                                                                <span>34</span>
                                                            </div>
                                                            <div class="dyn-card-video__stat__item">
                                                                <IconsVideocardDanMu class="icon" />
                                                                <span>45</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="dyn-item__footer">
                                    <div class="dyn-item__action">
                                        <div class="dyn-action">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18"
                                                width="18" height="18" style="width: 18px; height: 18px;">
                                                <path
                                                    d="M9.789075 2.2956175C8.97235 1.6308450000000003 7.74999 2.212005 7.74999 3.26506L7.74999 5.3915500000000005C6.642015000000001 5.5780325 5.3073725 6.040405 4.141735000000001 7.11143C2.809155 8.335825 1.751515 10.3041 1.45716 13.404099999999998C1.409905 13.9018 1.7595399999999999 14.22505 2.105415 14.317499999999999C2.442215 14.40755 2.8807175 14.314625 3.127745 13.92915C3.9664525 12.620249999999999 4.89282 11.894575 5.765827499999999 11.50585C6.4628049999999995 11.19545 7.14528 11.093125 7.74999 11.0959L7.74999 13.235025C7.74999 14.2881 8.97235 14.869250000000001 9.789075 14.2045L15.556199999999999 9.510425000000001C16.355075 8.860149999999999 16.355075 7.640124999999999 15.556199999999999 6.989840000000001L9.789075 2.2956175zM9.165099999999999 3.0768275000000003L14.895025 7.739050000000001C15.227975 7.980475 15.235775 8.468875 14.943874999999998 8.7142L9.17615 13.416800000000002C8.979474999999999 13.562024999999998 8.75 13.4269 8.75 13.227375000000002L8.75 10.638175C8.75 10.326975000000001 8.542125 10.134725 8.2544 10.1118C7.186765 10.02955 6.1563175 10.2037 5.150895 10.69295C4.14982 11.186925 3.2102250000000003 12.096525 2.573625 13.00995C2.54981 13.046975 2.52013 13.046025 2.5211725 12.986C2.8971525 10.0573 3.9373475 8.652125 4.807025 7.85305C5.87747 6.8694775 7.213197500000001 6.444867500000001 8.2272 6.33056C8.606525 6.287802500000001 8.74805 6.0849325 8.74805 5.7032275L8.74805 3.2615475C8.74805 3.0764875000000007 8.993175 2.9321925 9.165099999999999 3.0768275000000003z"
                                                    fill="currentColor"></path>
                                            </svg>
                                            456
                                        </div>
                                    </div>
                                    <div class="dyn-item__action">
                                        <div class="dyn-action">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18"
                                                width="18" height="18" style="width: 18px; height: 18px;">
                                                <path
                                                    d="M9.789075 2.2956175C8.97235 1.6308450000000003 7.74999 2.212005 7.74999 3.26506L7.74999 5.3915500000000005C6.642015000000001 5.5780325 5.3073725 6.040405 4.141735000000001 7.11143C2.809155 8.335825 1.751515 10.3041 1.45716 13.404099999999998C1.409905 13.9018 1.7595399999999999 14.22505 2.105415 14.317499999999999C2.442215 14.40755 2.8807175 14.314625 3.127745 13.92915C3.9664525 12.620249999999999 4.89282 11.894575 5.765827499999999 11.50585C6.4628049999999995 11.19545 7.14528 11.093125 7.74999 11.0959L7.74999 13.235025C7.74999 14.2881 8.97235 14.869250000000001 9.789075 14.2045L15.556199999999999 9.510425000000001C16.355075 8.860149999999999 16.355075 7.640124999999999 15.556199999999999 6.989840000000001L9.789075 2.2956175zM9.165099999999999 3.0768275000000003L14.895025 7.739050000000001C15.227975 7.980475 15.235775 8.468875 14.943874999999998 8.7142L9.17615 13.416800000000002C8.979474999999999 13.562024999999998 8.75 13.4269 8.75 13.227375000000002L8.75 10.638175C8.75 10.326975000000001 8.542125 10.134725 8.2544 10.1118C7.186765 10.02955 6.1563175 10.2037 5.150895 10.69295C4.14982 11.186925 3.2102250000000003 12.096525 2.573625 13.00995C2.54981 13.046975 2.52013 13.046025 2.5211725 12.986C2.8971525 10.0573 3.9373475 8.652125 4.807025 7.85305C5.87747 6.8694775 7.213197500000001 6.444867500000001 8.2272 6.33056C8.606525 6.287802500000001 8.74805 6.0849325 8.74805 5.7032275L8.74805 3.2615475C8.74805 3.0764875000000007 8.993175 2.9321925 9.165099999999999 3.0768275000000003z"
                                                    fill="currentColor"></path>
                                            </svg>
                                            456
                                        </div>
                                    </div>
                                    <div class="dyn-item__action">
                                        <div class="dyn-action">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18"
                                                width="18" height="18" style="width: 18px; height: 18px;">
                                                <path
                                                    d="M9.789075 2.2956175C8.97235 1.6308450000000003 7.74999 2.212005 7.74999 3.26506L7.74999 5.3915500000000005C6.642015000000001 5.5780325 5.3073725 6.040405 4.141735000000001 7.11143C2.809155 8.335825 1.751515 10.3041 1.45716 13.404099999999998C1.409905 13.9018 1.7595399999999999 14.22505 2.105415 14.317499999999999C2.442215 14.40755 2.8807175 14.314625 3.127745 13.92915C3.9664525 12.620249999999999 4.89282 11.894575 5.765827499999999 11.50585C6.4628049999999995 11.19545 7.14528 11.093125 7.74999 11.0959L7.74999 13.235025C7.74999 14.2881 8.97235 14.869250000000001 9.789075 14.2045L15.556199999999999 9.510425000000001C16.355075 8.860149999999999 16.355075 7.640124999999999 15.556199999999999 6.989840000000001L9.789075 2.2956175zM9.165099999999999 3.0768275000000003L14.895025 7.739050000000001C15.227975 7.980475 15.235775 8.468875 14.943874999999998 8.7142L9.17615 13.416800000000002C8.979474999999999 13.562024999999998 8.75 13.4269 8.75 13.227375000000002L8.75 10.638175C8.75 10.326975000000001 8.542125 10.134725 8.2544 10.1118C7.186765 10.02955 6.1563175 10.2037 5.150895 10.69295C4.14982 11.186925 3.2102250000000003 12.096525 2.573625 13.00995C2.54981 13.046975 2.52013 13.046025 2.5211725 12.986C2.8971525 10.0573 3.9373475 8.652125 4.807025 7.85305C5.87747 6.8694775 7.213197500000001 6.444867500000001 8.2272 6.33056C8.606525 6.287802500000001 8.74805 6.0849325 8.74805 5.7032275L8.74805 3.2615475C8.74805 3.0764875000000007 8.993175 2.9321925 9.165099999999999 3.0768275000000003z"
                                                    fill="currentColor"></path>
                                            </svg>
                                            456
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dyn-list-empty">
                    <div class="dyn-list-empty__inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="118" height="100" viewBox="0 0 118 100"
                            fill="none">
                            <g opacity="0.6">
                                <rect x="26" y="71" width="72" height="29" rx="14.5" fill="#C1C5CA"></rect>
                                <rect x="0.109375" y="24.0244" width="98.0342" height="73.0255" rx="8.00279"
                                    transform="rotate(-11.1891 0.109375 24.0244)" fill="#DEE1E5"></rect>
                                <rect x="6.33203" y="75.1777" width="105.679" height="21.6363" rx="4.32551"
                                    transform="rotate(-11.1891 6.33203 75.1777)" fill="#DEE1E5"></rect>
                                <rect x="46.7266" y="72.9278" width="25.5511" height="6.00209" rx="3.00105"
                                    transform="rotate(-11.1891 46.7266 72.9278)" fill="#C1C5CA"></rect>
                                <rect x="77" y="91" width="41" height="9" rx="4.5" fill="#C1C5CA"></rect>
                                <path d="M104.46 13.7973L116.186 9.92658L117.15 18.0336L104.46 16.3797L104.46 13.7973Z"
                                    fill="#C1C5CA"></path>
                                <path
                                    d="M101.489 10.4357L110.109 1.04482L114.728 5.92168L102.284 12.6185L101.489 10.4357Z"
                                    fill="#C1C5CA"></path>
                            </g>
                        </svg>
                        <div class="dyn-list-empty__text">
                            <span>好像没有东西诶</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-2">
            <div class="section user-info" privacy="1">
                <p class="user-info-title">
                    <span class="info-title">个人资料</span>
                    <a data-v-31d5659a="" href="//account.bilibili.com/account/setting" target="_blank">
                        <span class="change-info-btn">修改资料</span>
                    </a>
                </p>
                <div class="info-content">
                    <div class="info-personal">
                        <div class="info-wrap">
                            <span class="info-command">UID</span>
                            <span class="info-value">1218132566</span>
                        </div>
                        <div class="info-wrap">
                            <span class="info-command">生日</span>
                            <span class="info-value">01-01</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

onMounted(async () => {

});
onUnmounted(() => {

});
</script>
<style scoped lang="scss">
.wrapper {
    width: 1101px;
    margin: 0 auto;
    position: relative;
    display: block;

    .col-1 {
        float: left;
        width: 740px;

        .dyn-list {
            .dyn-list__items {
                .dyn-list__item {
                    margin-bottom: 8px;

                    .dyn-item {
                        border: 1px solid #eee;
                        -webkit-font-smoothing: antialiased;
                        background-color: var(--bg1);
                        border-radius: 6px;
                        box-sizing: border-box;
                        font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif !important;
                        font-weight: 400;
                        letter-spacing: 0;
                        min-width: 556px;
                        position: relative;

                        .dyn-item__main {
                            padding: 0 20px 0 88px;
                            position: relative;

                            .dyn-item__avatar {
                                -ms-flex-align: center;
                                align-items: center;
                                display: -ms-flexbox;
                                display: flex;
                                height: 86.4px;
                                -ms-flex-pack: center;
                                justify-content: center;
                                left: 0;
                                position: absolute;
                                top: 0;
                                width: 86.4px;
                            }

                            .dyn-item__header {
                                height: 62px;
                                padding-top: 16px;

                                .dyn-title {
                                    -ms-flex-align: center;
                                    align-items: center;
                                    display: -ms-flexbox;
                                    display: flex;
                                    height: 22px;
                                    margin: 1px 0 2px;
                                    width: max-content;

                                    .dyn-title__text {
                                        color: var(--text1);
                                        cursor: pointer;
                                        font-weight: 600;
                                        font-size: 17px;
                                        line-height: 32px;
                                        transition: all .2s;
                                    }

                                    .normal-vip-color {
                                        color: var(--brand_pink);
                                    }
                                }

                                .dyn-item__desc {
                                    -ms-flex-align: center;
                                    align-items: center;
                                    display: -ms-flexbox;
                                    display: flex;
                                    padding-top: 4px;

                                    .dyn-time {
                                        color: var(--text3);
                                        cursor: pointer;
                                        line-height: 18px;
                                        transition: color .3s ease;
                                        -ms-user-select: none;
                                        user-select: none;
                                        width: fit-content;
                                    }

                                    .fs-small {
                                        font-size: 13px;
                                        line-height: 18px;
                                    }
                                }

                                .dyn-item__more {
                                    position: absolute;
                                    right: 16px;
                                    top: 30px;

                                    .dyn-more__container {
                                        color: var(--graph_weak);
                                        height: 24px;
                                        right: -4px;
                                        top: -3px;
                                        width: 24px;
                                        border-radius: 4px;
                                        cursor: pointer;
                                        position: absolute;

                                        &:hover .dyn-more-icon {
                                            color: var(--brand_blue);
                                        }
                                    }
                                }
                            }

                            .dyn-item__body {
                                margin-top: 8px;

                                .dyn-content {
                                    -webkit-font-smoothing: antialiased;
                                    font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif !important;
                                    font-weight: 400;

                                    .dyn-content__orig {
                                        .dyn-content__orig__desc {
                                            cursor: pointer;
                                            padding-right: 10px;

                                            .rich-text {
                                                -webkit-font-smoothing: antialiased;
                                                font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif !important;
                                                font-weight: 400;
                                                white-space: pre-wrap;
                                                word-break: break-word;
                                                font-size: 15px;

                                                .rich-text__content {
                                                    color: var(--text1);
                                                    line-height: 25px;
                                                }
                                            }
                                        }

                                        .suit-video-card {
                                            margin-top: 12px;

                                            .dyn-card-video {
                                                border-radius: 6px;
                                                box-sizing: border-box;
                                                cursor: pointer;
                                                display: -ms-flexbox;
                                                display: flex;
                                                height: 132px;
                                                overflow: hidden;

                                                .dyn-card-video__header {
                                                    -ms-flex-negative: 0;
                                                    flex-shrink: 0;
                                                    height: 100%;
                                                    position: relative;
                                                    width: 236px;

                                                    .dyn-card-video__cover {
                                                        border-radius: 6px 0 0 6px;
                                                        height: 100%;
                                                        position: relative;
                                                        width: 100%;

                                                        .h-img {
                                                            position: relative;
                                                            height: 100%;
                                                            background-color: #f1f2f3;

                                                            .b-img__inner img {
                                                                display: block;
                                                                width: 100%;
                                                                height: 100%;

                                                            }

                                                        }
                                                    }
                                                }
                                            }

                                            .dyn-card-video__body {
                                                background-color: var(--bg1);
                                                border: 1px solid var(--line_regular);
                                                border-left: unset;
                                                border-radius: 0 6px 6px 0;
                                                display: -ms-flexbox;
                                                display: flex;
                                                -ms-flex: 1;
                                                flex: 1;
                                                -ms-flex-direction: column;
                                                flex-direction: column;
                                                padding: 12px 16px 10px;
                                                position: relative;

                                                .dyn-card-video__title {
                                                    font-size: 15px;
                                                    -webkit-box-orient: vertical;
                                                    display: -webkit-box;
                                                    overflow: hidden;
                                                    text-overflow: ellipsis;
                                                    word-break: break-all;
                                                    -webkit-line-clamp: 2;
                                                    line-clamp: 2;
                                                    color: var(--text1);
                                                    line-height: 21px !important;
                                                    transition: color .2s;
                                                }

                                                .dyn-card-video__desc {
                                                    font-size: 13px;
                                                    line-height: 18px;
                                                    -webkit-box-orient: vertical;
                                                    display: -webkit-box;
                                                    overflow: hidden;
                                                    text-overflow: ellipsis;
                                                    word-break: break-all;
                                                    -webkit-line-clamp: 2;
                                                    line-clamp: 2;
                                                    color: var(--text3);
                                                    height: 34px;
                                                    margin-top: 6px;
                                                }

                                                .dyn-card-video__stat {
                                                    font-size: 13px;
                                                    line-height: 18px;
                                                    -ms-flex-align: center;
                                                    align-items: center;
                                                    display: -ms-flexbox;
                                                    display: flex;
                                                    bottom: 10px;
                                                    color: var(--text3);
                                                    height: 18px;
                                                    left: 16px;
                                                    position: absolute;

                                                    .dyn-card-video__stat__item {
                                                        margin-right: 8px;
                                                        width: 80px;
                                                        -ms-flex-align: center;
                                                        align-items: center;
                                                        display: -ms-flexbox;
                                                        display: flex;

                                                        .icon {
                                                            width: 16px;
                                                            height: 16px;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            .dyn-item__footer {
                                display: -ms-flexbox;
                                display: flex;
                                height: 50px;
                                -ms-flex-pack: justify;
                                justify-content: space-between;
                                padding-right: 20px;

                                .dyn-item__action {
                                    position: relative;

                                    .dyn-action {
                                        -ms-flex-align: center;
                                        align-items: center;
                                        color: var(--text2);
                                        cursor: pointer;
                                        display: -ms-flexbox;
                                        display: flex;
                                        font-size: 13px;
                                        height: 100%;
                                        position: relative;
                                        -ms-user-select: none;
                                        user-select: none;
                                        width: 104px;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .dyn-list-empty {
                -ms-flex-align: center;
                align-items: center;
                display: -ms-flexbox;
                display: flex;
                background: var(--bg1);
                border-radius: 4px;
                height: 273px;
                -ms-flex-pack: center;
                justify-content: center;
                width: 100%;

                .dyn-list-empty__inner {
                    -ms-flex-direction: column;
                    flex-direction: column;
                    height: 166px;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    width: 280px;
                    -ms-flex-align: center;
                    align-items: center;
                    display: -ms-flexbox;
                    display: flex;

                    svg {
                        height: 100px;
                        margin-top: 15px;
                        width: 118px;
                    }

                    .dyn-list-empty__text {
                        color: var(--text3);
                        font-size: 14px;
                        height: 20px;
                        letter-spacing: 0;
                        line-height: 20px;
                    }
                }
            }
        }
    }

    .col-2 {
        float: right;
        width: 350px;

        .section {
            background: #fff;
            border: 1px solid #eee;
            border-radius: 4px;
            padding: 15px 20px 18px;
            margin-bottom: 10px;
            position: relative;

            .info-content {
                .info-personal {
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
                    width: 100%;

                    .info-wrap {
                        -ms-flex-negative: 0;
                        flex-shrink: 0;
                        width: 139px;
                        margin: 10px 0;
                        white-space: nowrap;

                        .info-command {
                            display: inline-block;
                            min-width: 24px;
                            font-size: 12px;
                            font-family: Microsoft YaHei;
                            line-height: 16px;
                            color: #9499a0;
                            margin-right: 6px;
                        }

                        .info-value {
                            color: #6d757a;
                            font-family: Microsoft YaHei;
                            font-size: 12px;
                            line-height: 16px;
                            padding-right: 6px;
                        }
                    }
                }
            }
        }
    }

}

@media (min-width: 1420px) {
    #page-dynamic {
        width: 1283px;
    }

    #page-dynamic .col-1 {
        width: 920px;
    }
}
</style>