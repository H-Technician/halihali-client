<template>
    <div class="eplist_ep_list_wrapper">
        <div class="eplist_list_title">
            <div class="eplist_left_wrap">
                <h4>正片</h4>
                <span class="eplist_ep_list_progress">
                    (12/25)
                </span>
            </div>
            <div class="eplist_right_wrap">
                <div class="modeChangeBtn_wrap" @click="changeMode">
                    <IconsModeGrid v-if="isNumberList" />
                    <IconsModeList v-else />
                </div>
                <div class="eplist_ep_list_order">
                    <IconsOrderDown />
                </div>
            </div>
        </div>
        <div class="numberList_wrapper" v-if="isNumberList">
            <div class="numberListItem_number_list_item" v-for="item in 25" :key="item"
                :class="item == 2 ? 'umberListItem_select' : ''">
                <NuxtLink to="">
                    <span class="numberListItem_title">{{ item }}</span>
                </NuxtLink>
            </div>
        </div>
        <div class="imageList_wrap" v-else>
            <div class="imageListItem_wrap" v-for="item in 25" :key="item">
                <NuxtLink to="">
                    <div class="imageListItem_coverWrap">
                        <picture class="v-img">
                            <source type="image/webp"
                                srcset="//io.v.hblog.top/hfs/bangumi/d9d8f7b6f0a9da020d2bc9dd4f044de16b0fe1c4.jpg@212w_120h.webp">
                            <img src="//io.v.hblog.top/hfs/bangumi/d9d8f7b6f0a9da020d2bc9dd4f044de16b0fe1c4.jpg"
                                class="image_ogv_weslie_common_image" alt="第1集 猴王初问世" loading="lazy">
                        </picture>
                    </div>
                    <div class="imageListItem_titleWrap" :class="item == 2 ? 'imageListItem_active' : ''">
                        <div class="imageListItem_title imageListItem_shortTitle">第1集</div>
                        <div class="imageListItem_title imageListItem_longTitle">猴王初问世</div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const isNumberList = ref<boolean>(true);
// 切换模式
const changeMode = () => {
    isNumberList.value = !isNumberList.value;
}
</script>
<style lang="scss" scoped>
.eplist_ep_list_wrapper {
    position: relative;
    background-color: var(--graph_bg_regular);
    border-radius: 6px;
    margin-bottom: 15px;

    .eplist_list_title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 44px;
        padding: 0 16px;

        .eplist_left_wrap {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 100%;

            h4 {
                padding: 0;
                font-size: 16px;
                color: var(--text1);
                font-weight: 500;
                overflow: hidden;
                white-space: nowrap;
                margin-right: 9px;
            }

            .eplist_ep_list_progress {
                display: block;
                font-size: 12px;
                color: var(--text2);
            }
        }

        .eplist_right_wrap {
            display: flex;
            flex-direction: row;

            .modeChangeBtn_wrap {
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                .mode-icon {
                    fill: var(--text2);
                    transition: all .2s ease-in;
                }
            }

            .eplist_ep_list_order {
                width: 24px;
                height: 24px;
                margin-left: 17px;
                cursor: pointer;
                fill: var(--text2);
                stroke: var(--text2);
            }
        }
    }

    .numberList_wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        padding: 6px 10px 6px 16px;
        overflow-y: auto;
        max-height: 350px;

        .numberListItem_number_list_item {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 56px;
            height: 56px;
            border-radius: 6px;
            margin-right: calc(20% - 56px);
            margin-bottom: calc(20% - 56px);
            background-color: var(--bg1);
            text-align: center;
            cursor: pointer;
            box-sizing: border-box;
            padding: 0 4px;
            border: 1px solid transparent;

            a {
                width: 100%;
                height: 100%;
                line-height: 56px;
                text-align: center;
                color: inherit;
                text-decoration: none;

                .numberListItem_title {
                    display: block;
                    font-size: 16px;
                    color: var(--text1);
                    font-family: xx-bin, sans-serif;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    color: inherit;
                }
            }
        }

        .umberListItem_select {
            background-color: var(--brand_blue);
            color: var(--text_white);
        }
    }

    .imageList_wrap {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        padding: 6px 10px 2px 16px;
        max-height: 350px;
        overflow: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }

        .imageListItem_wrap {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            margin-bottom: 12px;
            height: 59px;
            cursor: pointer;
            color: var(--text1);

            a {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                width: 100%;
                height: 100%;

                .imageListItem_coverWrap {
                    position: relative;
                    margin-right: 10px;
                    width: 106px;
                    height: 60px;
                    border-radius: 4px;
                    overflow: hidden;
                    background: var(--graph_weak);
                    flex-shrink: 0;

                    .v-img {
                        .image_ogv_weslie_common_image {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }

                .imageListItem_titleWrap {

                    .imageListItem_title {
                        font-size: 14px;
                        line-height: 18px;
                        min-height: 18px;
                        max-height: 36px;
                        font-weight: 500;
                        margin-bottom: 5px;
                        align-self: flex-start;
                        display: -webkit-box;
                        white-space: normal;
                        word-wrap: break-word;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        line-clamp: 2;
                        transition: color .3s ease;
                    }

                    .imageListItem_shortTitle {
                        margin-bottom: 0;
                        display: -webkit-box;
                        white-space: normal;
                        word-wrap: break-word;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        line-clamp: 1;
                    }

                    .imageListItem_longTitle {
                        margin-bottom: 0;
                        display: -webkit-box;
                        white-space: normal;
                        word-wrap: break-word;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        line-clamp: 1;
                        margin-top: 5px;
                    }

                }

                .imageListItem_active {
                    color: var(--brand_blue);
                }
            }
        }
    }
}
</style>