<template>
    <div class="user-card_wrap" data-uid="167728316466466816">
        <div class="user-card-bg" :style="`background-image: url('${bg_url}')`"></div>
        <div class="user-info-wrapper">
            <a href="" target="_blank" class="user-info-left">
                <AvatarVAvatar :size="48"></AvatarVAvatar>
            </a>
            <div class="info">
                <div class="user">
                    <a href="" target="_blank" class="name" :class="true ? 'vip-name' : ''">超级管理员</a>
                    <div class="gender female"></div>
                    <div class="gender male"></div>
                    <div class="level"></div>
                    <span class="vip">
                        年度大会员
                    </span>
                </div>
                <p class="social">
                    <a href="" target="_blank">
                        <span class="num">9</span>
                        <span class="text">关注</span>
                    </a>
                    <a href="" target="_blank">
                        <span class="num">78</span>
                        <span class="text">粉丝</span>
                    </a>
                    <span>
                        <span class="num">67</span>
                        <span class="text">获赞</span>
                    </span>
                </p>
                <div class="official" v-if="true">
                    <svg t="1700121982187" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" width="14" height="14" p-id="3631">
                        <path d="M0 512a512 512 0 1 0 1024 0A512 512 0 1 0 0 512z" fill="#FFFFFF" p-id="3632"></path>
                        <path d="M93.09 512a418.91 418.91 0 1 0 837.82 0 418.91 418.91 0 1 0-837.82 0z" fill="#FFC62E"
                            p-id="3633"></path>
                        <path
                            d="M474.112 763.95a33.28 33.28 0 0 1-14.057 4.05 21.039 21.039 0 0 1-21.318-20.806 19.55 19.55 0 0 1 1.21-5.865l40.495-187.438-167.657 0.326a21.225 21.225 0 0 1-21.876-20.806 20.433 20.433 0 0 1 9.495-16.85l250.182-255.767c4.608-2.793 9.542-4.747 14.662-4.794a21.132 21.132 0 0 1 21.364 20.852 19.968 19.968 0 0 1-2.792 9.775l-40.216 184.32h167.843a21.178 21.178 0 0 1 21.644 20.852 20.294 20.294 0 0 1-9.495 16.943L474.112 763.95z"
                            fill="#FFFFFF" p-id="3634"></path>
                    </svg>
                    <svg t="1700122376038" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" width="14" height="14" p-id="3782">
                        <path d="M0 512a512 512 0 1 0 1024 0A512 512 0 1 0 0 512z" fill="#FFFFFF" p-id="3783"></path>
                        <path d="M93.09 512a418.91 418.91 0 1 0 837.82 0 418.91 418.91 0 1 0-837.82 0z" fill="#4AC7FF"
                            p-id="3784"></path>
                        <path
                            d="M474.112 763.95a33.28 33.28 0 0 1-14.057 4.05 21.039 21.039 0 0 1-21.318-20.806 19.55 19.55 0 0 1 1.21-5.865l40.495-187.438-167.657 0.326a21.225 21.225 0 0 1-21.876-20.806 20.433 20.433 0 0 1 9.495-16.85l250.182-255.767c4.608-2.793 9.542-4.747 14.662-4.794a21.132 21.132 0 0 1 21.364 20.852 19.968 19.968 0 0 1-2.792 9.775l-40.216 184.32h167.843a21.178 21.178 0 0 1 21.644 20.852 20.294 20.294 0 0 1-9.495 16.943L474.112 763.95z"
                            fill="#FFFFFF" p-id="3785"></path>
                    </svg>
                    <span>halihali个人认证：</span>
                </div>
                <p class="sign">这个人什么都没说</p>
                <div class="btn-box">
                    <a class="not-follow" v-if="true">关注</a>
                    <a class="following" v-else @mouseenter="mouseEnter = true" @mouseleave="mouseEnter = false">
                        {{ mouseEnter ? '取消关注' : '已关注' }}
                    </a>
                    <a class="message">发消息</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const mouseEnter = ref<boolean>(false);
const bg_url = '//io.v.hblog.top/hfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png@2560w_400h_100q_1o.webp';
</script>
<style lang="scss" scoped>
.user-card_wrap {
    font-size: 12px;
    border-radius: 8px;
    width: 366px;
    cursor: default;
    background: #ffffff;

    .user-card-bg {
        width: 100%;
        height: 85px;
        border-radius: 8px 8px 0 0;
        overflow: hidden;
        background-color: var(--graph_bg_regular);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .user-info-wrapper {
        position: relative;
        display: flex;
        padding: 0 20px 16px 10px;

        .user-info-left {
            position: relative;
            top: 10px;
            border-radius: 50%;
            width: 48px;
            height: 48px;
            background-color: var(--graph_weak);
            margin-right: 12px;
        }

        .info {
            p {
                color: var(--text1);
            }

            .user {
                margin-top: 12px;
                margin-bottom: 10px;
                display: flex;
                align-items: center;

                .name {
                    color: var(--text1);
                    max-width: 158px;
                    margin-right: 6px;
                    font-size: 16px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .gender {
                    height: 14px;
                    width: 14px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 6px;
                }

                .female {
                    background-color: var(--Pi2);
                    color: var(--Pi5);
                }

                .male {
                    background-color: var(--Lb2);
                    color: var(--Lb5_u);
                }

                .vip {
                    display: inline-block;
                    box-sizing: border-box;
                    max-width: 58px;
                    height: 16px;
                    color: #fff;
                    background: var(--brand_pink);
                    border-radius: 2px;
                    line-height: 16px;
                    font-size: 10px;
                    padding: 0 3px;
                    margin-left: 6px;
                    overflow: hidden;
                    white-space: nowrap;
                    font-weight: 400;
                    cursor: pointer;
                }
            }

            .social {
                margin-bottom: 10px;

                a {
                    color: var(--text1);
                    margin-right: 18px;
                }

                .text {
                    color: var(--text3);
                    margin-left: 3px;
                }
            }

            .official {
                height: 18px;
                margin-bottom: 8px;
                display: flex;
                align-items: center;

                span {
                    font-size: 12px;
                    color: var(--text3);
                    overflow: hidden;
                    text-overflow: -o-ellipsis-lastline;
                    text-overflow: ellipsis;
                    word-break: break-word;
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                }

                svg {
                    margin-right: 2px;
                }
            }

            .sign {
                line-height: 17px;
                color: var(--text3) !important;
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                text-overflow: -o-ellipsis-lastline;
                text-overflow: ellipsis;
                word-break: break-word;
                -webkit-line-clamp: 2;
                line-clamp: 2;
            }

            .btn-box {
                display: flex;
                margin-top: 16px;

                a {
                    box-sizing: border-box;
                    cursor: pointer;
                    text-decoration: none;
                    width: 100px;
                    height: 30px;
                    line-height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 8px;
                    border-radius: 4px;
                    transition: all 0.3s;
                    font-size: 14px;
                }

                .not-follow {
                    color: #fff;
                    background-color: var(--brand_blue);
                }

                .not-follow:hover {
                    background-color: var(--brand_blue_hover);
                }

                .following {
                    color: var(--text3);
                    background-color: var(--graph_bg_thick);
                }

                .following:hover {
                    background-color: var(--graph_bg_regular);
                }

                .message {
                    border: 1px solid var(--text3);
                    color: var(--text2);
                    background-color: transparent;
                }

                .message:hover {
                    color: var(--brand_blue);
                    border-color: var(--brand_blue);
                }
            }
        }
    }
}
</style>