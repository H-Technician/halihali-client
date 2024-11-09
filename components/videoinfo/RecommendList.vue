<template>
    <div class="recommend_wrap">
        <div class="recommend_title">相关推荐</div>
        <div class="recommend_list">
            <div class="recommendItem_wrap" v-for="item in 10" :key="item">
                <NuxtLink to="">
                    <div class="recommendItem_cover">
                        <picture class="v-img">
                            <source type="image/webp"
                                srcset="//io.v.hblog.top/hfs/bangumi/d9d8f7b6f0a9da020d2bc9dd4f044de16b0fe1c4.jpg@212w_120h.webp">
                            <img src="//io.v.hblog.top/hfs/bangumi/d9d8f7b6f0a9da020d2bc9dd4f044de16b0fe1c4.jpg"
                                class="image_ogv_weslie_common_image" alt="第1集 猴王初问世" loading="lazy">
                        </picture>
                    </div>
                    <div class="recommendItem_right_wrap">
                        <div class="recommendItem_title">三国演义</div>
                        <div style="flex-grow: 1;"></div>
                        <div class="recommendItem_sub_wrap">
                            <div class="recommendItem_showindex">全84集</div>
                            <div class="recommendItem_data">
                                <IconsVideocardPlayer class="icon" />
                                <span>6.2亿</span>
                                <IconsVideocardDanMu class="icon" />
                                <span>912.7万</span>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.recommend_wrap {
    width: 100%;
    border-top: 1px solid var(--line_regular);
    padding-top: 14px;

    .recommend_title {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        color: var(--text1);
        margin-bottom: 13px;
        font-weight: 500;
    }

    .recommend_list {
        .recommendItem_wrap {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            width: 100%;
            align-items: center;
            margin-bottom: 12px;
            cursor: pointer;

            a {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                width: 100%;
                height: 100%;

                .recommendItem_cover {
                    width: 141px;
                    height: 80px;
                    background: var(--graph_weak);
                    border-radius: 6px;
                    overflow: hidden;
                    margin-right: 10px;

                    .v-img {

                        .image_ogv_weslie_common_image {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }

                }

                .recommendItem_right_wrap {
                    display: flex;
                    flex: 1 1;
                    flex-direction: column;
                    justify-content: space-between;

                    .recommendItem_title {
                        display: -webkit-box;
                        margin-bottom: 8px;
                        width: 100%;
                        height: 36px;
                        color: var(--text1);
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 18px;
                        white-space: normal;
                        word-wrap: break-word;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        line-clamp: 2;
                        transition: color .3s ease;
                        cursor: pointer;
                    }

                    .recommendItem_sub_wrap {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: flex-start;

                        .recommendItem_showindex {
                            color: var(--text3);
                            font-size: 12px;
                            margin-bottom: 4px;
                            height: 15px;
                        }

                        .recommendItem_data {
                            display: flex;
                            align-items: center;
                            color: var(--text3);
                            font-size: 12px;

                            .icon {
                                width: 18px;
                                height: 18px;
                                margin-right: 2px;

                                &:nth-child(3) {
                                    margin-left: 8px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>