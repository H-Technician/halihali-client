<template>
    <div class="vip-panel-popover">
        <div class="panel-v2">
            <div class="panel-v2-bottom">
                <div class="panel-v2-bottom-left">
                    <div class="big-vip-title">
                        <a href="//account.bilibili.com/big" target="_blank">大会员特权</a>
                    </div>
                    <div class="privilege-list">
                        <div class="privilege-item" v-for="item in privilegeList" :key="item.text">
                            <span class="icon-wrap">
                                <svg-icon :name="item.icon"></svg-icon>
                            </span>
                            <span class="text-wrap">{{ item.text }}</span>
                        </div>
                    </div>
                </div>
                <div class="panel-v2-bottom-right">
                    <div class="qrcode">
                        <div>
                            <canvas width="85" height="85"></canvas>
                        </div>
                        <div class="pay-methods"></div>
                    </div>
                </div>
            </div>
            <div class="btn-wrap">
                <div class="btn-desc">
                    <div class="btn-desc-title">您的大会员已过期</div>
                    <div class="btn-desc-content">立即开通继续享受大会员特权</div>
                </div>
                <div class="renew-btn">
                    成为大会员
                    <span class="btn-corner">限时特惠</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
interface PrivilegeList {
    icon: string;
    text: string;
}
const privilegeList: PrivilegeList[] = [
    {
        icon: 'vip-video',
        text: '热剧抢先看'
    },
    {
        icon: 'vip-free',
        text: '会员免费看'
    },
    {
        icon: 'hd-video',
        text: '4K超清画质'
    },
    {
        icon: 'vip-dress',
        text: '会员专属装扮'
    }
]
</script>
<style lang="scss" scoped>
.vip-panel-popover {

    .panel-v2 {
        box-sizing: border-box;
        min-width: 442px;
        background-color: var(--bg1);
        padding: 12px;
        border-radius: 8px;
        text-align: left;
        border: 1px solid var(--line_regular);

        .panel-v2-bottom {
            display: flex;
            justify-content: space-between;

            .panel-v2-bottom-left {
                max-width: 258px;
                padding-top: 9px;
                padding-left: 10px;

                .big-vip-title {
                    color: var(--text1);
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    margin-bottom: 10px;
                    transition: color .3s;

                    a {
                        font-weight: 600;
                    }
                }

                .privilege-list {
                    margin-bottom: 16px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    height: 67px;
                    align-content: space-between;

                    .privilege-item {
                        box-sizing: border-box;
                        display: flex;
                        align-items: center;
                        color: var(--text1);
                        font-size: 14px;
                        transition: color .3s;

                        .icon-wrap {
                            margin-right: 4px;

                            .svg-icon {
                                width: 30px;
                                height: 30px;
                            }
                        }

                        .text-wrap {
                            width: 85px;
                        }

                    }

                    .privilege-item:nth-child(odd) {
                        margin-right: 10px;
                    }
                }
            }

            .panel-v2-bottom-right {
                position: relative;
                flex-shrink: 0;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: space-between;
                width: 150px;
                height: 120px;

                .qrcode {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    width: 126px;
                    height: 97px;
                    display: flex;
                    border: 1px solid var(--Ga1_u);
                    background: var(--Ga0_u);
                    border-radius: 4px;
                    padding-top: 5px;
                    padding-left: 6px;

                    .pay-methods {
                        background: url(data:image/png;base64,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) center / 100% no-repeat;
                        width: 24px;
                        height: 84px;
                        flex-shrink: 0;
                        margin-left: 4px;
                        margin-top: 1px;
                    }
                }
            }
        }

        .btn-wrap {
            width: 418px;
            height: 72px;
            background: var(--Pi1);
            border-radius: 6px;
            position: relative;
            display: flex;
            padding: 14px 9px 13px;
            justify-content: space-between;
            align-items: center;

            .btn-desc {
                margin-left: 11px;

                .btn-desc-title {
                    font-size: 14px;
                    line-height: 20px;
                    font-weight: 500;
                    color: var(--brand_pink);
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    text-overflow: -o-ellipsis-lastline;
                    text-overflow: ellipsis;
                    word-break: break-word !important;
                    word-break: break-all;
                    line-break: anywhere;
                    -webkit-line-clamp: 1;
                    line-clamp: 1;
                }

                .btn-desc-content {
                    font-size: 12px;
                    line-height: 17px;
                    color: var(--brand_pink);
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    text-overflow: -o-ellipsis-lastline;
                    text-overflow: ellipsis;
                    word-break: break-word !important;
                    word-break: break-all;
                    line-break: anywhere;
                    -webkit-line-clamp: 1;
                    line-clamp: 1;
                }
            }

            .renew-btn {
                width: 140px;
                height: 44px;
                line-height: 44px;
                font-weight: 500;
                border-radius: 6px;
                cursor: pointer;
                text-align: center;
                background: linear-gradient(0deg, rgba(255, 255, 255, .05), rgba(255, 255, 255, .05)), linear-gradient(270deg, #eb6194 0%, #ff6699 100%);
                color: var(--text_white);
                font-size: 14px;
                position: relative;

                .btn-corner {
                    position: absolute;
                    right: 0px;
                    top: -7px;
                    box-sizing: border-box;
                    padding: 0 4px;
                    height: 14px;
                    line-height: 14px;
                    font-size: 10px;
                    font-weight: 400;
                    color: var(--Ye9);
                    background: linear-gradient(270deg, var(--Ye4) 0%, var(--Ye2) 100%);
                    border-radius: 2px;
                }
            }
        }
    }
}
</style>