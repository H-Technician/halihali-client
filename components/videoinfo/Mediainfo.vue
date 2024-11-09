<template>
    <div class="media-info_wrap">
        <a href="" class="mediainfo-media_cover" target="_blank">
            <picture class="v-img">
                <source :srcset="imageUrl3" type="image/webp">
                <img :src="imageUrl3" loading="lazy">
            </picture>
        </a>
        <div class="mediainfo_media_right">
            <a href="" class="mediainfo-media_title" target="_blank">西游记</a>
            <div class="mediainfo-media_desc" style="margin-bottom: 12px;">
                2.8亿播放&nbsp;&nbsp;·&nbsp;&nbsp;393.5万弹幕&nbsp;&nbsp;·&nbsp;&nbsp;546.6万系列追剧
            </div>
            <div class="mediainfo-media_desc">
                <span>奇幻 / 剧情 / 古装· </span>
                <span>2020·</span>
                <span>已完结, 全25集·</span>
                <span>
                    <span>
                        <a href="" style="text-decoration: none; transition: color 0.3s;"
                            target="_blank">BV1XC4y1h7Zz</a>
                    </span>
                </span>
            </div>
            <div class="mediainfo-media_desc">
                <span class="mediainfo-media_label">
                    出演演员：
                </span>
                六小龄童 迟重瑞 马德华 汪粤 徐少华 闫怀礼 朱龙广 左大玢 张志明 章玉善 王忠信 许晴
            </div>
            <a href="" class="mediainfo_media_desc_section" target="_blank">
                <div class="mediainfo_display_area">
                    <div class="mediainfo_placeholder"></div>
                    <p class="mediainfo_content">
                        <span>简介：
                        </span>东胜神州的傲来国花果山的一块巨石孕育出了一只灵明石猴（六小龄童
                        饰），石猴后来拜须菩提为师后习得了七十二变，具有了通天本领，于是占山为王，自称齐天大圣。玉帝派太白金星下凡招安大圣上了天庭，后来大圣因为嫌玉帝赐封的官职太低，大闹天宫，被太上老君困于炼丹炉内四十九天后，大圣踢翻炼丹炉，炼成了金睛火眼。如来佛祖见局势不可收拾，于是将大圣镇压于五指山下。一晃眼五百年过去了，唐僧被观世音菩萨选为西去取经普渡众生的人，大圣受观音指引，拜唐僧为师，师徒踏上了取经的路途。
                    </p>
                    <div class="mediainfo_ellipsis">展开</div>
                </div>
                <p class="mediainfo_content_placeholder">
                    东胜神州的傲来国花果山的一块巨石孕育出了一只灵明石猴（六小龄童
                    饰），石猴后来拜须菩提为师后习得了七十二变，具有了通天本领，于是占山为王，自称齐天大圣。玉帝派太白金星下凡招安大圣上了天庭，后来大圣因为嫌玉帝赐封的官职太低，大闹天宫，被太上老君困于炼丹炉内四十九天后，大圣踢翻炼丹炉，炼成了金睛火眼。如来佛祖见局势不可收拾，于是将大圣镇压于五指山下。一晃眼五百年过去了，唐僧被观世音菩萨选为西去取经普渡众生的人，大圣受观音指引，拜唐僧为师，师徒踏上了取经的路途。
                </p>
            </a>
            <div style="flex:1"></div>
            <div class="mediainfo_bottomBar">
                <div class="mediainfo_mediaRating">
                    <div class="mediainfo_score">
                        9.9
                        <span class="mediainfo_suffix">分</span>
                    </div>
                    <div class="mediainfo_ratingText">4.1万人评分</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const imageUrl3 = '//io.v.hblog.top/hfs/bangumi/image/f9b7d89acb62d2ed385381ebcf5ac80b65fadd73.jpg@362w_482h_1c_!web-search-media-cover.webp';
</script>
<style lang="scss" scoped>
.media-info_wrap {
    border-top: 1px solid var(--line_regular);
    padding: 20px 0 10px;
    display: flex;
    justify-content: flex-start;

    .mediainfo-media_cover {
        display: block;
        flex-shrink: 0;
        margin-right: 16px;
        width: 165px;
        height: 221px;
        border-radius: 6px;
        overflow: hidden;
        background: var(--graph_weak);

        .v-img {
            width: 165px;
            height: 221px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

    }

    .mediainfo_media_right {
        flex: 1 1;
        display: flex;
        flex-direction: column;
        position: relative;

        .mediainfo-media_title {
            height: 25px;
            line-height: 25px;
            font-size: 18px;
            color: var(--text1);
            margin-bottom: 10px;
            padding-right: 240px;
            transition: color .3s ease;
            display: -webkit-box;
            white-space: normal;
            word-wrap: break-word;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            font-weight: 500;
        }

        .mediainfo-media_desc {
            height: 18px;
            line-height: 18px;
            font-size: 14px;
            color: var(--text2);
            margin-bottom: 6px;
            display: -webkit-box;
            white-space: normal;
            word-wrap: break-word;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;

            .mediainfo-media_label {
                color: var(--text2);
            }
        }

        .mediainfo_media_desc_section {
            position: relative;
            display: block;
            color: var(--text1);
            height: 40px;
            line-height: 20px;
            word-break: break-all;
            display: -webkit-box;
            white-space: normal;
            word-wrap: break-word;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            font-size: 14px;
            margin-bottom: 6px;
            overflow: hidden;
            white-space: pre-wrap;

            .mediainfo_display_area {
                position: absolute;
                height: 100%;
                width: 100%;

                .mediainfo_placeholder {
                    float: left;
                    width: 1.5em;
                    content: "";
                    height: 100%;
                    max-height: 120px;
                }

                .mediainfo_content {
                    float: right;
                    margin-left: -3em;
                    width: 100%;
                }

                .mediainfo_ellipsis {
                    float: right;
                    height: 18px;
                    width: 3em;
                    position: relative;
                    left: 100%;
                    transform: translate(-100%, -100%);
                    text-align: right;
                    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), var(--bg1) 20%, var(--bg1));
                    color: var(--brand_blue);
                    cursor: pointer;
                }
            }

            .mediainfo_content_placeholder {
                opacity: 0;
                z-index: -1;
                pointer-events: none;
                max-height: 120px;
            }


        }

        .mediainfo_bottomBar {
            display: flex;
            align-items: center;

            .mediainfo_mediaRating {
                margin-right: 12px;

                .mediainfo_score {
                    font-size: 20px;
                    line-height: 17px;
                    height: 17px;
                    position: relative;
                    color: #ffa058;
                    font-family: Avenir, sans-serif;
                    padding-right: 14px;
                    display: inline-block;

                    .mediainfo_suffix {
                        display: inline-block;
                        height: 17px;
                        line-height: 17px;
                        font-size: 13px;
                        font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
                        font-weight: 400;
                    }
                }

                .mediainfo_ratingText {
                    margin-top: 2px;
                    height: 18px;
                    line-height: 18px;
                    font-size: 12px;
                    color: var(--text2);
                }
            }
        }

        @media screen and (max-width: 1100px) {

            .mediainfo-media_desc,
            .mediainfo_media_desc_section {
                font-size: 12px;
            }
        }
    }
}
</style>