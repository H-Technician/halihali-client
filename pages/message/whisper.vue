<template>
    <div id="im" class="d-im">
        <div class="hl-im">
            <div class="left">
                <div title="如果您的消息展示异常，请按住 alt 按键，然后单击这里进行修复" class="title">
                    <span>近期消息</span>
                </div>
                <div class="list-container ps ps--active-y">
                    <div class="list">
                        <div class="list-item" :class="index === 0 ? 'active' : ''" v-for="(item, index) in 9"
                            :key="index">
                            <div class="avatar"
                                style="background-image: url(https://io.v.hblog.top/hfs/face/706353e46fe1c390d6d2cb72a704818a.jpg@240w_240h_1c_1s_!web-avatar-nav.webp);">
                            </div>
                            <div class="verify-box">
                                <div class="single"></div>
                            </div>
                            <div class="name-box">
                                <div class="name">
                                    <div class="name-value">浅影阿_</div>
                                </div>
                                <div class="last-word">
                                    呔！抓住你啦！微博/网易云/Q音/酷狗：浅影阿欢迎来听歌！
                                </div>
                            </div>
                            <div class="close-box">
                                <svg-icon class="css-1dtzbno" name="close" color="#999"></svg-icon>
                            </div>
                        </div>
                    </div>
                    <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                        <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                    </div>
                    <div class="ps__rail-y" style="top: 0px; right: 0px; height: 564px;">
                        <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 110px;"></div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="dialog">
                    <div class="title">
                        <div class="is-limit" style="display: none;">
                            该用户已被封禁～</div>
                        <div class="is-black" style="display: none;">
                            (&gt;﹏&lt; )该用户已经被你加入黑名单</div>
                        <span>浅影阿_</span>
                        <div class="action-menu" style="top: 3px; right: 0px;">

                        </div>
                    </div>
                    <div class="message-list">
                        <div class="message-list-content min_h_100">
                            <div class="msg-more">
                                <span class="load-more" style="display: none;">
                                    <span class="icon"></span>
                                    查看和他的历史私信消息
                                </span>
                                <span class="no-more" style="">没有更多消息了～</span>
                                <span class="error" style="display: none;">
                                    消息加载失败，
                                    <span class="btn">点击重新加载</span>
                                </span>
                            </div>
                            <div class="msg-time">
                                <span class="time">2024年11月6日 09:35</span>
                            </div>
                            <div class="msg-item not-me">
                                <a href="//space.bilibili.com/651386960" title="浅影阿_" target="_blank" class="avatar"
                                    style="background-image: url(https://io.v.hblog.top/hfs/face/706353e46fe1c390d6d2cb72a704818a.jpg@240w_240h_1c_1s_!web-avatar-nav.webp);"></a>
                                <div class="message">
                                    <div data-key="7433973780165063447" class="message-content">
                                        呔！抓住你啦！<br>
                                        微博/网易云/Q音/酷狗：浅影阿<br>
                                        欢迎来听歌！
                                        <div class="split-line"></div>
                                        <div class="msg-tips">此条消息为自动回复</div>
                                    </div>
                                </div>
                            </div>
                            <div class="msg-item is-me">
                                <a href="//space.bilibili.com/651386960" title="浅影阿_" target="_blank" class="avatar"
                                    style="background-image: url(https://io.v.hblog.top/hfs/face/706353e46fe1c390d6d2cb72a704818a.jpg@240w_240h_1c_1s_!web-avatar-nav.webp);"></a>
                                <div class="message">
                                    <div data-key="7393878301922297686" class="message-content is-me">
                                        我设置z-index为1000都不行，全屏过后的一秒还是能显示的，他会自己隐藏，之后就不见了，就很奇怪
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="new-message-tip" style="display: none;">
                        <div class="text">您有 0 条新消息</div>
                    </div>
                    <div class="send-box">
                        <div class="row">
                            <div class="space-margin">
                                <label class="image-upload-btn"></label>
                            </div>
                            <div class="space-margin emoji-container">
                                <button title="表情" class="emotion-btn-box"></button>
                            </div>
                        </div>
                        <div placeholder="回复一下吧～" class="input-box">
                            <div id="editor" class="core-style" contenteditable="true" style="height: 60px;">‍
                            </div>
                            <div class="indicator" style="bottom: -30px; right: 100px;">
                                <span class="">0</span>/<span>500</span>
                            </div>
                        </div>
                        <div class="row right">
                            <button class="btn-box send-btn" title="enter发送shift + enter 换行">发送</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.icon {
    display: inline-block;
    width: 16px;
    height: 12px;
    margin-right: 3px;
}

.d-im {
    height: calc(100vh - 138px);

    .hl-im {
        font-size: 12px;
        color: #666;
        background-color: #fff;
        -webkit-box-shadow: 0 2px 4px 0 rgba(121, 146, 185, 0.54);
        box-shadow: 0 2px 4px 0 rgba(121, 146, 185, 0.54);
        border-radius: 4px;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        position: relative;

        .left {
            width: 240px;
            border-right: 1px solid #e9eaec;
            position: relative;

            .title {
                padding-left: 24px;
                line-height: 35px;
                height: 36px;
                border-bottom: 1px solid #e9eaec;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                overflow: hidden;
            }

            .list-container {
                height: calc(100% - 36px);
                position: relative;
                overflow: hidden;

                .list {
                    position: relative;
                    height: 100%;
                    overflow-y: scroll;
                    overflow-x: hidden;
                    scrollbar-width: none;
                    -ms-overflow-style: none;

                    &::-webkit-scrollbar {
                        display: none;
                    }

                    // &::-webkit-scrollbar {
                    //     width: 8px;
                    //     position: absolute;
                    //     z-index: 1;
                    // }

                    // &::-webkit-scrollbar-thumb {
                    //     border-radius: 10px;
                    //     background-color: #ccc;
                    //     position: absolute;
                    //     z-index: 1;
                    //     right: 0;
                    // }

                    .list-item {
                        width: 100%;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-orient: horizontal;
                        -webkit-box-direction: normal;
                        -ms-flex-direction: row;
                        flex-direction: row;
                        padding: 19px 24px;
                        position: relative;
                        cursor: pointer;

                        .avatar {
                            display: block;
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            -ms-flex-negative: 0;
                            flex-shrink: 0;
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                            background-image: url(//static.hdslb.com/images/member/noface.gif);
                            margin-right: 8px;
                            position: relative;
                        }

                        .verify-box {
                            width: 14px;
                            height: 14px;
                            position: absolute;
                            bottom: 18px;
                            left: 51px;
                            display: -webkit-box;
                            display: -ms-flexbox;
                            display: flex;
                            -webkit-box-pack: center;
                            -ms-flex-pack: center;
                            justify-content: center;
                            -webkit-box-align: center;
                            -ms-flex-align: center;
                            align-items: center;

                            .single,
                            .company,
                            .group {
                                width: 100%;
                                height: 100%;
                                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA+klEQVR4AXSSA26FQRzEv4v0TrWNK/QWdU/QGLVtxbVt233v9zLBJvvt7iTrmf0zigPI4u+tk9/XLQ3tdReFAKTx9zHH2/Er662wVKuB9rrTmziuKPHzzE7bHyMZmDFVbvZ6E8cS8/cx74hmauBmWXtLLMsmJrliEaYr4eMKrhd1toe4ilnBKw7LvfdzBI46HKG40kTKnJKgSyZL4e0Eg8d1OO6Go05YrRcHcaWxhWtNcNILp/3wcYnBywFMllhCx1UzZE143oWJItdVb3I0vp/gaRPGC/3J8ZZDFh5WYSw/XA5vA0g4lueKxPF1jyynhifJHUXWRHYiBwD+2SkDN/McZAAAAABJRU5ErkJggg==) center / contain no-repeat;
                            }
                        }

                        .name-box {
                            display: -webkit-box;
                            display: -ms-flexbox;
                            display: flex;
                            -webkit-box-orient: vertical;
                            -webkit-box-direction: normal;
                            -ms-flex-direction: column;
                            flex-direction: column;
                            -webkit-box-pack: center;
                            -ms-flex-pack: center;
                            justify-content: center;

                            .name {
                                width: 155px;
                                display: -webkit-box;
                                display: -ms-flexbox;
                                display: flex;
                                -webkit-box-align: center;
                                -ms-flex-align: center;
                                align-items: center;
                                color: #333;
                                font-size: 14px;
                                min-height: 16px;
                                line-height: 1;

                                .name-value {
                                    -webkit-box-flex: 1;
                                    -ms-flex: 1;
                                    flex: 1;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                            }

                            .last-word {
                                color: #999;
                                padding: 8px 0;
                                margin-bottom: -6px;
                                overflow: hidden;
                                width: 155px;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }

                        .close-box {
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            display: -webkit-box;
                            display: -ms-flexbox;
                            display: flex;
                            -webkit-box-pack: center;
                            -ms-flex-pack: center;
                            justify-content: center;
                            -webkit-box-align: center;
                            -ms-flex-align: center;
                            align-items: center;
                            width: 24px;
                            -webkit-transform: translateX(-100%);
                            transform: translateX(-100%);
                            opacity: 0;
                            -webkit-transition: 300ms;
                            transition: 300ms;
                            color: #999;
                        }

                        &:hover {
                            background-color: #e4e5e6;

                            .close-box {
                                -webkit-transform: translateX(0);
                                transform: translateX(0);
                                opacity: 1;
                            }
                        }
                    }

                    .active {
                        background-color: #e4e5e6;
                    }
                }
            }
        }

        .right {
            width: calc(100% - 240px);
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;

            .dialog {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-box-align: stretch;
                -ms-flex-align: stretch;
                align-items: stretch;
                height: 100%;

                .title {
                    height: 36px;
                    -ms-flex-negative: 0;
                    flex-shrink: 0;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    border-bottom: 1px solid #e9eaec;
                    position: relative;
                    text-align: center;
                    color: #333;

                    span {
                        font-size: 14px;
                    }

                    .is-black,
                    .is-limit {
                        position: absolute;
                        top: 36px;
                        left: 0;
                        z-index: 2;
                        width: 100%;
                        height: 32px;
                        line-height: 32px;
                        background-color: #fff;
                        color: #fb7299;
                        text-align: left;
                        padding: 0 17px;
                    }

                    .action-menu {
                        position: absolute;
                        top: 26px;
                        right: 10px;
                        z-index: 2;
                    }
                }

                .message-list {
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    position: relative;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    background-color: #f4f5f7;

                    &::-webkit-scrollbar {
                        width: 6px;
                    }

                    &::-webkit-scrollbar-thumb {
                        border-radius: 10px;
                        background-color: #6d7f7a;
                        cursor: pointer;
                    }

                    &::-ms-scrollbar {
                        width: 6px;
                    }

                    &::-ms-scrollbar-thumb {
                        border-radius: 10px;
                        background-color: #6d7f7a;
                        cursor: pointer;
                    }

                    .message-list-content {
                        overflow: auto;

                        .msg-more {
                            padding: 16px 0 0;
                            text-align: center;
                            color: #23ade5;
                            min-height: 38px;

                            .load-more {
                                cursor: pointer;

                                .icon {
                                    background: url(@/assets/img/icons_personalmessage.png) -50px -175px no-repeat;
                                    vertical-align: middle;
                                }
                            }

                            .no-more {
                                color: #999;
                            }

                            .error {
                                .btn {
                                    color: #1389bf;
                                    cursor: pointer;
                                }
                            }
                        }

                        .msg-time {
                            padding: 16px 0 16px;
                            text-align: center;

                            .time {
                                color: #999;
                                font-size: 12px;
                                line-height: 22px;
                                margin: 0 10px;
                            }
                        }

                        .msg-item {
                            min-height: 48px;
                            padding: 0 16px 16px;
                            overflow: hidden;
                            position: relative;

                            .avatar {
                                display: block;
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                                -ms-flex-negative: 0;
                                flex-shrink: 0;
                                background-size: cover;
                                background-position: center;
                                background-repeat: no-repeat;
                                background-image: url(data:image/gif;base64,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);
                                float: left;
                            }

                            .message {
                                float: left;
                                max-width: 480px;
                                margin: 0 10px;
                                position: relative;
                                overflow: hidden;
                                color: #333;

                                .message-content {
                                    line-height: 1.5;
                                    font-size: 14px;
                                    min-height: 37px;
                                    padding: 8px 16px;
                                    word-wrap: break-word;
                                    word-break: break-word;
                                    border-radius: 0 16px 16px 16px;
                                    overflow: hidden;
                                    background: #fff;

                                    &:not(.is-img) {
                                        position: relative;
                                        z-index: 1;
                                    }

                                    .split-line {
                                        height: 0.5px;
                                        width: 100%;
                                        margin: 8px 0;
                                        background: #e3e5e7;
                                    }

                                    .msg-tips {
                                        font-size: 12px;
                                        color: #9499a0;
                                    }
                                }

                                .is-me {
                                    background: #80b9f2;
                                    border-radius: 16px 0 16px 16px;
                                    color: #fff;
                                }
                            }
                        }

                        .msg-item .avatar,
                        .msg-item .message {
                            float: left;
                        }

                        .is-me .avatar {
                            float: right;
                        }

                        .is-me .message {
                            position: relative;
                            float: right;
                            color: #fff;
                        }
                    }

                    .min_h_100 {
                        min-height: 100% !important;
                    }
                }

                .new-message-tip {
                    height: 0;
                    width: 100%;
                    position: relative;
                    overflow: visible;

                    .text {
                        position: absolute;
                        bottom: 20px;
                        right: 16px;
                        background-color: #fff;
                        padding: 10px;
                        border-radius: 4px;
                        line-height: 19px;
                    }
                }

                .send-box {
                    height: 162px;
                    border-top: 1px solid #d8d8d8;
                    border-bottom-right-radius: 4px;
                    background-color: #f4f5f7;
                    -ms-flex-negative: 0;
                    flex-shrink: 0;
                    padding: 0 16px;
                    position: relative;
                    z-index: 2;

                    .row {
                        height: 48px;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-orient: horizontal;
                        -webkit-box-direction: normal;
                        -ms-flex-direction: row;
                        flex-direction: row;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;

                        .space-margin {
                            margin-right: 16px;

                            .image-upload-btn {
                                display: block;
                                width: 22px;
                                height: 21px;
                                cursor: pointer;
                                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAAAXNSR0IArs4c6QAAAjFJREFUOBG1lUtrU0EUgHMfSX5AkEINSOmii4JuigihFERpoIgrsykEal6bLgQ34h8oXZUiCnlgaRZSshErhZQWAn24sEUFoSRIQQlEEZJNaRpoHn7n0gupN2mTWx04mTkz53znzJm5E8Vx1pLJ5P1mszmpKMqgOddP32q1SqqqrkcikQ3xU+UnHo8vAs0CHRPdThNfYQhL/JVEInGPaOuapk2Fw+GsHajpk0ql/I1GY43M/SpQP9G2rwoVuDCEJSVVGUhNS2ZU6YnsQx4Q1ChV+1oP45IwLY6UJsB2dpBVDnSuB1BHEwuYLNsPsH3cEdBt0gLGMI4cIL8Q2xnrOJ9rsVjskInRc5M2lE4Z28BYXf4b2FIKa2zrDLdlgFszyUHfZPUU+ezxeN4HAoET07ovcC6X0wuFwvN6vf4MwE/kI3dWo58pl8uvuKqP+wYLNJ/Pr+B4m0/2EYe8ZkIymYxWqVRm2UWGta8E+yZvxRsx8Hq9M8Vi8Snbm0YdQRrIF2TZ7Xa/rtVq84wfOp3OCT7dH4wtjQdoCv93LGwZYBQducHENfp5HqRPRHeh+5BZMpDaDZGNLxqN7jHu2oB/YPHUqDGPxh2U3y6X61YoFDpq89pNp9Mvq9XqAvCly6Dih9136XWg0l9ni3f/gsq8IxgMHtNFDaW3n0F2va/quv6WLToIMNybX3creY+BjpN1VhGzs1dfarmNWurueuGKZCrQF5TsiQEW83/xnyeZAt0U3h+pCu2ZMB0nRQAAAABJRU5ErkJggg==) no-repeat;
                                background-size: 22px;
                            }
                        }

                        .emoji-container {
                            position: relative;

                            .emotion-btn-box {
                                display: block;
                                width: 24px;
                                height: 24px;
                                cursor: pointer;
                                outline: none;
                                border: none;
                                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB5UlEQVR4AWIYMDBz5kzH2bNnOxGhzmbOnDnWJFswa9asSYDWygCigSgO41YAJQAoWSMgAIQASQoUQJbEZAGM0aRERQAEuAFgAkIpAVXDUAzAKLBEQWptcf0+Hp6zd3fPGp+z//u+7/9/9+67Q/wWBMGoi1Or1UbgvMI99W5QrVYnEHfYxV7M9LvisIPJ1MaaCtMVpiojvpcBOAb7EajWgfcgrjTSxppD2kT0jqANrsEleKZ2wfXchmrgRRzDbUsrD9c9L4FPCBthGA753lJppJWHvKLm03Tvcl0c9OmTB149edqHdULh6r8ecXnJ0y7cgLJ9FvwvehgW7XsvL3nahAaEgtVgntoHOGOSMZex1sQRVxpLX5Cns4HJwZTqoAUWouaqmbWGuKp5NdCPFK8y5Rfr9T4N6loTR/+9Guj1QC0wQSr1e2xV05rhBNKkbsD/I4SPYCbpgMWB/8T1MHUDIj/MhBmPkGWk8T4DQ55TCEFoA82P4zXt1wCzHOu/Mo2ghyabtoGSV4kJ0pYMLfOuguXiy0ueduGAwm3CYeYw3TapzSYk+06e9pbGKX5zXRv0PSQP5UOe0QnXdXAs7CR+ONyfz4rxyLu2tgxaJjxN0EiJpjRGu5T44SCVs5oCFFIiL02/xP8BToUvO6m2Rg4AAAAASUVORK5CYII=) center / 24px no-repeat;
                            }
                        }
                    }

                    .input-box {
                        position: relative;

                        .core-style {
                            width: 100%;
                            min-height: 22px;
                            max-height: 300px;
                            letter-spacing: 1px;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            white-space: pre-wrap;
                            overflow-x: hidden;
                            overflow-y: auto;
                            color: #222;
                            background-color: transparent;
                            font-size: 14px;
                            vertical-align: baseline;
                            outline: none;
                            line-height: normal;
                            border-radius: 4px;
                            word-break: break-word;
                            word-wrap: break-word;
                        }

                        .indicator {
                            color: #c0c0c0;
                            position: absolute;
                            right: 5px;
                            bottom: 0;
                            padding: 1px;
                            font-size: 12px;
                        }
                    }

                    .row.right {
                        -webkit-box-pack: end;
                        -ms-flex-pack: end;
                        justify-content: flex-end;
                        height: 46px;
                        width: 100%;

                        .btn-box {
                            cursor: pointer;
                            margin: 0;
                            position: relative;
                            width: 88px;
                            height: 30px;
                            text-align: center;
                            border: 1px solid #e7e7e7;
                        }

                        .send-btn {
                            background-color: #fff;
                            border-radius: 4px;
                        }
                    }
                }
            }
        }
    }

    .hl-im * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
}
</style>