<template>
    <div id="reply" class="reply">
        <div class="card reply-card">
            <div class="reply-item" v-for="item in 9" :key="item">
                <div class="basic-list-item">
                    <div class="left-box count-1">
                        <a href="" target="_blank" title="彼此彼此77" class="avatar"
                            style="background-image: url(https://io.v.hblog.top/hfs/face/706353e46fe1c390d6d2cb72a704818a.jpg@240w_240h_1c_1s_!web-avatar-nav.webp);"></a>
                    </div>
                    <div class="center-box">
                        <div class="line-1">
                            <span class="name-field">
                                <a href="" target="_blank" title="彼此彼此77">彼此彼此77</a>
                            </span>
                            <span class="desc-field">
                                回复了我的评论
                            </span>
                        </div>
                        <div class="line-2">
                            <div class="real-reply">
                                <div class="content-list">
                                    <span class="text string">
                                        <span>个人爱好而已。。</span>
                                    </span>
                                </div>
                            </div>
                            <div class="orginal-reply">_淡-定- : 回复 @因口欠死挺
                                :我想问，你要那么多软件干什么？主流的就那么几十个就够用了，哪个手机里面有10万个软件，你都知道是小软件了，也是可以不用的，没有小软件就不用不行吗？不开放侧载是为了用户安全防止用户自己乱装来历不明的软件出问题又要华为背锅，不常用的软件可以在要用的时候用虚拟机用一下没什么问题，从你的评论可以看出你小子不简单，手机中一定又见不得人的东西，我懂，不就是那个垃圾感叹号软件无法使用嘛？这硬是把你急的，苹果从一开始不就是封闭的吗？，安卓是一开始到现在就是开放的，苹果越狱又不是官方的，你这个什么都不懂的就不要发这些了，那些东西不用最好，再说自己开发的app可以用开发者工具devecostudio安装调试，也是可以用的，来历不明的软件我是不敢安装，还是有正规渠道官方商店安装，更安全
                            </div>
                        </div>
                        <div class="line-3">
                            <span class="time-filed">
                                <span class="time time-span">
                                    2024年10月21日
                                    08:29
                                </span>
                            </span>
                            <div class="action-field">
                                <button class="action-button">
                                    <svg viewBox="0 0 40 40" class="action-icon css-1dtzbno">
                                        <path
                                            d="M14.46,3.33H25.58c7.64,0,13.9,6,13.9,13.33S33.22,30,25.58,30h-.76l-7.28,6.67-2-6.67H14.46C6.81,30,.56,24,.56,16.67S6.81,3.33,14.46,3.33ZM36.7,16.67A10.91,10.91,0,0,0,25.58,6H14.46A10.91,10.91,0,0,0,3.34,16.67,10.91,10.91,0,0,0,14.46,27.33h3.19l.58,1.93.72,2.42,4-3.62.81-.74h1.88A10.91,10.91,0,0,0,36.7,16.67Z">
                                        </path>
                                    </svg>
                                    回复
                                </button>
                                <button class="action-button"><svg viewBox="0 0 40 40" class="action-icon css-9slmkq">
                                        <title>点赞</title>
                                        <path class="fill"
                                            d="m 35.140937,15.170116 h -12.92 l 0.28,-2.92 0.42,-5.1400001 a 1.28,1.28 0 0 0 -1,-1.53 1.12,1.12 0 0 0 -1.25,0.42 l -6.36,8.1700001 -0.83,1.11 h -8.34 a 2,2 0 0 0 -0.83,0.28 2.29,2.29 0 0 0 -1.25,2.08 v 14.88 a 2,2 0 0 0 0.42,1.25 2,2 0 0 0 2.08,1.11 h 23.33 a 2.36,2.36 0 0 0 1.39,-0.41 3.6,3.6 0 0 0 2.08,-2.78 l 4.44,-14.59 2.5,0.56 -2.5,-0.56 a 2.4,2.4 0 0 0 -0.14,-1.39 2.91,2.91 0 0 0 -1.52,-0.54 l 0.28,-2.5 z">
                                        </path>
                                        <path class="border"
                                            d="M 21.402578,2.9572256 A 3.91,3.91 0 0 0 18.609609,4.1701163 L 11.810781,12.66035 H 5.5607807 a 8.43,8.43 0 0 0 -2.5,0.689454 4.91,4.91 0 0 0 -2.49999999,4.310546 v 14.859375 a 5.66,5.66 0 0 0 0.68945299,2.5 4.52,4.52 0 0 0 4.310547,2.361329 H 28.859609 a 6.37,6.37 0 0 0 6,-4.861329 l 4.451172,-14.71875 A 4.38,4.38 0 0 0 38.750234,14.330272 4.14,4.14 0 0 0 35.420156,12.66035 H 25.000234 l 0.25,-5.5605462 a 3.91,3.91 0 0 0 -1.25,-3.1894531 3.91,3.91 0 0 0 -2.597656,-0.9531251 z m 0.1875,2.5703126 a 1.12,1.12 0 0 1 0.330078,0.052734 1.28,1.28 0 0 1 1,1.5292969 l -0.419922,5.1406259 -0.279297,2.919921 h 12.919922 a 2.91,2.91 0 0 1 1.519531,0.539062 2.4,2.4 0 0 1 0.140625,1.390626 l -4.441406,14.589843 a 3.6,3.6 0 0 1 -2.080078,2.78125 2.36,2.36 0 0 1 -1.388672,0.410157 H 5.5607807 a 2,2 0 0 1 -2.080078,-1.111329 2,2 0 0 1 -0.419922,-1.25 V 17.640819 a 2.29,2.29 0 0 1 1.25,-2.080078 2,2 0 0 1 0.830078,-0.28125 h 5.8398443 v 19.580078 h 2.5 V 15.279491 l 0.830078,-1.109375 6.359375,-8.1699216 a 1.12,1.12 0 0 1 0.919922,-0.4726562 z">
                                        </path>
                                    </svg>
                                    点赞
                                </button>
                                <button class="action-button del-button">
                                    <svg viewBox="0 0 16 16" class="action-icon css-x5loxn">
                                        <g fill-rule="nonzero">
                                            <rect id="Rectangle" opacity="0" x="0" y="0" width="16" height="16"></rect>
                                            <path
                                                d="M12.5146059,5.54590692 L12.5146059,12.5459069 C12.5146059,13.6504764 11.6191754,14.5459069 10.5146059,14.5459069 L5.51460589,14.5459069 C4.41003639,14.5459069 3.51460589,13.6504764 3.51460589,12.5459069 L3.51460589,5.54590692 L3.51460589,5.54590692"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <line x1="6" y1="1.85714286" x2="9.5" y2="1.85714286" id="Line"
                                                stroke-linecap="round" stroke-linejoin="round"></line>
                                            <line x1="1.88309006" y1="3.6900534" x2="14.0338156" y2="3.6900534"
                                                stroke-linecap="round" stroke-linejoin="round"></line>
                                            <line x1="5.71428571" y1="7.63739248" x2="5.71428571" y2="11.230495"
                                                stroke-linecap="round" stroke-linejoin="round"></line>
                                            <line x1="8.01783774" y1="7.62825381" x2="8.01783774" y2="11.2213564"
                                                stroke-linecap="round" stroke-linejoin="round"></line>
                                            <line x1="10.3396003" y1="7.63344062" x2="10.3396003" y2="11.2265432"
                                                stroke-linecap="round" stroke-linejoin="round"></line>
                                        </g>
                                    </svg>
                                    删除该通知
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="right-box">
                        <div title="我真不知道这样折腾到底是图个啥，我本人不玩游戏，所以我不懂到底是为了啥" class="text-box">
                            我真不知道这样折腾到底是图个啥，我本人不玩游戏，所以我不懂到底是为了啥
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
.reply {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    .card {
        padding: 24px 16px;
        background-color: #fff;
        -webkit-box-shadow: 0 2px 4px 0 rgba(121, 146, 185, 0.54);
        box-shadow: 0 2px 4px 0 rgba(121, 146, 185, 0.54);
        margin-bottom: 10px;
        border-radius: 4px;

        .reply-item {
            padding-top: 24px;
            padding-bottom: 24px;
            position: relative;
            cursor: pointer;
            border-bottom: 1px solid #e5e9ef;

            &:first-child {
                padding-top: 0;
            }

            .basic-list-item {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: horizontal;
                -webkit-box-direction: normal;
                -ms-flex-direction: row;
                flex-direction: row;

                .left-box {
                    width: 60px;
                    height: 46px;
                    -ms-flex-negative: 0;
                    flex-shrink: 0;

                    .avatar {
                        display: block;
                        width: 46px;
                        height: 46px;
                        border-radius: 50%;
                        -ms-flex-negative: 0;
                        flex-shrink: 0;
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-image: url(//static.hdslb.com/images/member/noface.gif);
                    }
                }

                .center-box {
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;

                    .line-1 {
                        color: #505050;
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-direction: row;
                        flex-direction: row;
                        -ms-flex-wrap: wrap;
                        flex-wrap: wrap;
                        margin-bottom: 10px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        word-break: break-word;
                        display: -webkit-box;
                        -webkit-line-clamp: 4;
                        line-clamp: 4;
                        -webkit-box-orient: vertical;
                        font-size: 14px;
                        line-height: 15px;
                        max-height: 4.285714285714286em;

                        .name-field {
                            color: #222;
                            margin-right: 8px;
                            font-weight: bold;
                        }
                    }

                    .line-2 {
                        margin-bottom: 10px;
                        margin-right: 14px;
                        font-size: 14px;
                        color: #222;

                        .real-reply {
                            .content-list {
                                line-height: 18px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                word-break: break-word;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                line-clamp: 2;
                                -webkit-box-orient: vertical;
                                font-size: 14px;
                                line-height: 18px;
                                max-height: 2.571428571428572em;

                                .text {
                                    word-break: break-word;
                                }
                            }
                        }

                        .orginal-reply {
                            color: #999;
                            border-left: 2px solid #e7e7e7;
                            margin: 8px 0 10px;
                            padding-left: 4px;
                            font-size: 12px;
                            line-height: 16px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            word-break: break-word;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            line-clamp: 2;
                            -webkit-box-orient: vertical;
                            font-size: 12px;
                            line-height: 16px;
                            max-height: 2.666666666666667em;
                        }
                    }

                    .line-3 {
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-orient: horizontal;
                        -webkit-box-direction: normal;
                        -ms-flex-direction: row;
                        flex-direction: row;
                        -webkit-box-pack: start;
                        -ms-flex-pack: start;
                        justify-content: flex-start;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        color: #999;
                        font-size: 12px;
                        line-height: 22px;

                        .time-filed {
                            .time-span {
                                color: #999;
                                font-size: 12px;
                                line-height: 22px;
                                margin: 0 10px;
                                margin: 0 15px 0 0;
                            }
                        }

                        .action-field {
                            .action-button {
                                cursor: pointer;
                                margin-right: 14px;
                                color: inherit;
                                background: transparent;

                                .action-icon {
                                    border: none;
                                    width: 16px;
                                    height: 16px;
                                    vertical-align: text-top;
                                    fill: #999;
                                }
                            }


                            .del-button {
                                display: none;
                            }

                        }
                    }
                }

                .right-box {
                    min-width: 60px;
                    margin: -7px 0;

                    .text-box {
                        width: 60px;
                        height: 60px;
                        color: #999;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        word-break: break-word;
                        display: -webkit-box;
                        -webkit-line-clamp: 4;
                        line-clamp: 4;
                        -webkit-box-orient: vertical;
                        font-size: 14px;
                        line-height: 15px;
                        max-height: 4.285714285714286em;
                    }
                }
            }
        }
    }

}
</style>
