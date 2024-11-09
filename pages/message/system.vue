<template>
    <div id="system" class="system">
        <div class="card system-item im-fade-in-enter-to">
            <div class="top">
                <span class="title">正在直播S14总决赛：BLG vs T1！</span>
                <span class="time" data-v-fb77dc7a="">2024年11月2日 21:00</span>
            </div>
            <div class="bottom">
                <span class="text">
                    <span>BLG战队首度闯入S赛总决赛舞台，时隔11年，全华班再次与T1在决赛舞台相遇，谁将加冕为王？11月2日22点，上6号直播间看S14总决赛，天选好礼送不停，高能观赛团更是惊喜不断，25万现金红包等你来抽！主直播间&gt;&gt;
                        <a href="" target="_blank" class="im-dynamic-link">
                            <i class="iconfont icon-link"></i> 网页链接
                        </a>
                        高能观赛团&gt;&gt;
                        <a href="" target="_blank" class="im-dynamic-link">
                            <i class="iconfont icon-link"></i> 网页链接
                        </a>
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.system {
    .system-item {
        line-height: 24px;
        position: relative;

        .top {
            .title {
                color: #333;
                font-weight: 700;
            }

            .time {
                color: #999;
                font-size: 12px;
                line-height: 22px;
                margin: 0 10px;
            }
        }

        .bottom {
            color: #666;
            padding-left: 8px;

            .text {
                word-break: break-word;
                line-height: 19px;

                .im-dynamic-link,
                .im-topic-link {
                    color: #1389bf;
                    padding: 0 5px;
                    text-decoration: none;
                }
            }
        }
    }

    .card {
        padding: 24px 16px;
        background-color: #fff;
        -webkit-box-shadow: 0 2px 4px 0 rgba(121, 146, 185, 0.54);
        box-shadow: 0 2px 4px 0 rgba(121, 146, 185, 0.54);
        margin-bottom: 10px;
        border-radius: 4px;
    }

    .im-fade-in-enter-to,
    .im-fade-in-leave {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
