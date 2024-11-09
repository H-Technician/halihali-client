<template>
    <div class="media-card">
        <a href="" class="media-card-image" target="_blank">
            <picture class="v-img">
                <source :srcset="imageUrl3" type="image/webp">
                <img :src="imageUrl3" loading="lazy">
            </picture>
            <div class="media-card-image-tag">会员专享</div>
            <svg-icon name="play" color="#ffffff" class="media-card-image-play"></svg-icon>
        </a>
        <div class="media-card-content">
            <div class="media-card-content-head">
                <div class="media-card-content-head-title">
                    <div class="tag tag-primary media-card-content-head-title-tag">国创</div>
                    <a href="" class="text_ellipsis" target="_blank">
                        <span class="keyword">西游记</span>
                    </a>
                </div>
                <div class="media-card-content-head-text media-card-content-head-label">
                    <span>热血/奇幻/搞笑/智斗 <span> · </span></span>
                    <span>1997-07-23 <span> · </span></span>
                    <span>全52话</span>
                </div>
                <div class="media-card-content-head-text media-card-content-head-desc">
                    <div>简介:</div>
                    <span>
                        本片重现了孙悟空和他的两个师弟猪八戒和沙僧共同保护师傅唐僧，由东土大唐去西天取经的过程。师徒四人沿途历尽千辛万苦、斗妖降魔、披荆斩棘，经历九九八十一难取回真经，终于修成正果，为孩子们展示了一个充满想象的东西
                    </span>
                </div>
            </div>
            <div class="media-card-content-footer">
                <div class="score media-card-content-footer-score">
                    <span class="score-text">
                        704人评分
                    </span>
                    <span class="score-value">
                        9.7
                        <span>分</span>
                    </span>
                </div>
                <div class="media-card-content-footer-btns">
                    <a href="" target="_blank">
                        <button class="vui_button vui_button--blue media-card-btn pgc_btn_size">
                            立即观看
                        </button>
                    </a>
                    <div class="media-footer">
                        <a href="" target="_blank" class="p_relative" v-for="item in 2" :key="item">
                            <button class="vui_button media-footer-btn">{{ item }}</button>
                        </a>
                        <a href="" target="_blank" class="p_relative">
                            <button class="vui_button media-footer-btn">...</button>
                        </a>
                        <a href="" target="_blank" class="p_relative">
                            <button class="vui_button media-footer-btn">52</button>
                            <span class="media-footer-badge" style="background-color: rgb(251, 114, 153); 
                            border-color: rgb(251, 114, 153); 
                            color: rgb(255, 255, 255);">会员</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const imageUrl = '//io.v.hblog.top/hfs/archive/0c257ae61fc66f1962a273e78beda7e7.jpg@672w_378h_1c_!web-home-common-cover.jpg';
const imageUrl3 = '//io.v.hblog.top/hfs/bangumi/image/f9b7d89acb62d2ed385381ebcf5ac80b65fadd73.jpg@362w_482h_1c_!web-search-media-cover.webp';
const isLoading = ref(false);
</script>
<style lang="scss" scoped>
.media-card {
    display: flex;
    margin-right: 16px;

    .media-card-image {
        position: relative;
        min-width: var(--image-width);
        width: var(--image-width);
        height: var(--image-height);
        margin-right: var(--image-mg-r);
        border-radius: var(--image-border-radius);
        overflow: hidden;

        .v-img img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: inherit;
        }

        .media-card-image-tag {
            min-width: 40px;
            height: 22px;
            line-height: 22px;
            padding: 0 3px 0 5px;
            position: absolute;
            border-radius: 12px 0 0 12px;
            right: 0;
            top: var(--image-tag-top);
            text-align: right;
            background-color: #FB7299;
            border-color: #FB7299;
            color: #FFFFFF;
        }

        .media-card-image-play {
            position: absolute;
            opacity: 0;
            right: 10px;
            bottom: 10px;
            color: #fff;
            transition: all .2s linear;
            width: var(--image-play-wh);
            height: var(--image-play-wh);
        }

        &::after {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            bottom: 0;
            transition: all .2s linear;
            right: 0;
            background: rgba(0, 0, 0, 0);
        }

    }

    .media-card-content {
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 645px;

        .media-card-content-head {
            .media-card-content-head-title {
                margin-bottom: var(--content-title-mg-b);
                line-height: var(--content-head-title-lh);
                display: flex;
                align-items: center;

                .media-card-content-head-title-tag {
                    margin-right: 6px;
                }

                .tag {
                    line-height: 16px;
                    display: inline-block;
                    white-space: nowrap;
                    padding: 0 5px;
                    font-size: 12px;
                    text-align: center;
                    border-radius: 4px;
                    color: var(--graph_medium);
                    border: 1px solid var(--graph_medium);
                }

                .tag-primary {
                    color: var(--brand_blue);
                    border: 1px solid var(--brand_blue);
                }

                a {
                    font-weight: 600;
                    font-size: var(--content-head-title-size);
                }

                .text_ellipsis {
                    max-width: 100%;
                    display: block;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    width: auto;

                    .keyword {
                        color: #f25d8e;
                    }
                }
            }

            .media-card-content-head-text {
                font-size: 13px;
                line-height: 18px;
                margin-bottom: var(--content-text-mg-b);
                color: var(--text3);

                div {
                    width: 39px;
                    display: inline-block;
                }
            }

            .media-card-content-head-desc {
                max-width: 100%;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                line-clamp: 3;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
        }

        .media-card-content-footer {
            .score {
                line-height: 18px;
                font-size: 13px;

                .score-text {
                    color: var(--text2);
                    margin-right: 6px;
                }

                .score-value {
                    color: #ffa058;
                    font-size: 20px;
                    line-height: 17px;
                    font-weight: 600;

                    span {
                        font-size: 13px;
                    }
                }
            }

            .media-card-content-footer-score {
                margin-bottom: var(--content-title-mg-b);
            }

            .media-card-content-footer-btns {
                display: flex;
                height: var(--pgc_btn_h);

                .media-card-btn {
                    margin-right: 8px;
                }

                .vui_button--blue {
                    color: var(--v_text_white);
                    background: var(--v_brand_blue);
                    border: 1px solid var(--v_brand_blue);

                    &:hover {
                        color: var(--v_text_white);
                        background: var(--v_brand_blue_hover);
                        border: 1px solid var(--v_brand_blue_hover);
                    }
                }

                .media-footer {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    position: relative;

                    a {
                        margin-right: 8px;

                        .media-footer-btn {
                            position: relative;
                            padding: 0 4px;
                            min-width: var(--pgc_btn_h);
                            height: var(--pgc_btn_h);
                            font-size: var(--pgc_btn_size);
                            color: var(--text2);
                        }

                        .media-footer-badge {
                            position: absolute;
                            line-height: 28px;
                            padding: 0 4px;
                            font-size: 20px;
                            border-radius: 8px;
                            right: -3px;
                            top: -5px;
                            white-space: nowrap;
                            transform: scale(.5);
                            transform-origin: top right;
                        }
                    }
                }

            }
        }
    }
}

.media-card,
.media-card-skeleton {
    --image-width: 181px;
    --image-height: 241px;
    --image-mg-r: 16px;
    --image-border-radius: 6px;
    --image-follow-wh: 88px;
    --image-play-wh: 44px;
    --image-tag-top: 12px;
    --content-head-title-lh: 25px;
    --content-head-title-size: 18px;
    --content-title-mg-b: 8px;
    --content-text-mg-b: 4px;
}

@media (max-width: 1919.9px) {

    .media-card,
    .media-card-skeleton {
        --image-width: 148px;
        --image-height: 198px;
        --image-mg-r: 16px;
        --image-border-radius: 6px;
        --image-follow-wh: 73px;
        --image-tag-top: 10px;
        --content-head-title-lh: 22px;
        --content-head-title-size: 16px;
    }
}
</style>