<template>
    <Title>{{ keyword }}-哈喽哈喽_halihali</Title>
    <NuxtLayout name="searchlayout">
        <div class="search-header">
            <div class="search-input">
                <div class="search-input-container" ref="searchInputContainerRef">
                    <div class="flex_center" :class="isFixedInput ? 'search-fixed-header search-sticky-header' : ''">
                        <img src="@/assets/img/header-logo.png" class="search-logo p_center_y" :style="isFixedInput ? '' : 'display: none;'">
                        <div ref="searchWrapRef" class="search-input-wrap flex_between"
                            :class="isSearchPopShow ? 'search-input-active' : ''">
                            <IconsSearch class="search-icon" />
                            <IconsClose class="clear-icon" :style="searchInput == '' ? 'display: none;' : ''"
                                @click.stop="searchInput = ''" />
                            <input type="text" placeholder="输入关键字搜索" class="search-input-el" v-model="searchInput"
                                @focus="searchPopShow" @input="" @blur="">
                            <button class="vui_button vui_button--blue vui_button--lg search-button">
                                搜索
                            </button>
                            <div class="search-panel search-panel-popover"
                                :style="isSearchPopShow ? '' : 'display: none;'">
                                <div class="history" v-if="searchInput == ''">
                                    <div class="header">
                                        <div class="title">搜索历史</div>
                                        <div class="clear">清空</div>
                                    </div>
                                    <div class="histories-wrap"
                                        :style="isHistoryOpen ? 'max-height: 172px;' : 'max-height: 92px;'">
                                        <div class="histories">
                                            <div class="history-item">
                                                <div class="history-text">西游记</div>
                                                <div class="close">
                                                    <IconsClose class="icon-close" />
                                                </div>
                                            </div>
                                            <div class="history-item" v-for="(item, index) in histories" :key="index">
                                                <div class="history-text">{{ item }}</div>
                                                <div class="close">
                                                    <IconsClose class="icon-close" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="history-fold" @click.stop="isHistoryOpen = !isHistoryOpen;">
                                        <div class="fold-text">{{ isHistoryOpen ? '收起' : '展开更多' }}</div>
                                        <span class="icon-history-arrowdown"
                                            :style="isHistoryOpen ? 'transform: rotate(180deg);' : ''">
                                            <IconsArrowDownBold />
                                        </span>
                                    </div>
                                </div>
                                <div class="trending" v-if="searchInput == ''">
                                    <div class="header">
                                        <div class="title">
                                            halihali热搜
                                        </div>
                                    </div>
                                    <div class="trendings-double">
                                        <div class="trendings-col"
                                            style="max-width: calc(50% - 5px); margin-right: 10px;">
                                            <div class="trending-item" v-for="(item, index) in histories" :key="index">
                                                <div class="trending-wrap">
                                                    <div class="trendings-rank" :class="index < 2 ? 'topThree' : ''">{{
                                                        index * 2 + 1 }}</div>
                                                    <div class="trendings-text">{{ item }}</div>
                                                    <img src="@/assets/img/icon_new.png" class="trending-mark"
                                                        v-if="true">
                                                    <img src="@/assets/img/icon_hot.png" class="trending-mark"
                                                        v-if="false">
                                                    <img src="@/assets/img/living.gif" class="trending-mark"
                                                        v-if="false">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="trendings-col" style="max-width: calc(50% - 5px);">
                                            <div class="trending-item" v-for="(item, index) in histories" :key="index">
                                                <div class="trending-wrap">
                                                    <div class="trendings-rank" :class="index < 1 ? 'topThree' : ''">{{
                                                        index * 2 + 2 }}</div>
                                                    <div class="trendings-text">{{ item }}</div>
                                                    <img src="@/assets/img/icon_new.png" class="trending-mark"
                                                        v-if="false">
                                                    <img src="@/assets/img/icon_hot.png" class="trending-mark"
                                                        v-if="true">
                                                    <img src="@/assets/img/living.gif" class="trending-mark"
                                                        v-if="false">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="suggestions" v-if="searchInput != ''">
                                    <div class="suggest-item" v-for="(item, index) in histories" :key="index">
                                        {{ item }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-tabs i_wrapper">
                <div class="vui_tabs">
                    <div class="vui_tabs--navbar">
                        <ul class="vui_tabs--nav vui_tabs--nav-pl0">
                            <li class="vui_tabs--nav-item vui_tabs--nav-item-active" v-for="item in 5" :key="item">
                                <span class="vui_tabs--nav-link">
                                    <span class="vui_tabs--nav-text">综合</span>
                                    <span class="vui_tabs--nav-num">99+</span>
                                </span>
                            </li>
                        </ul>
                        <div class="vui_tabs--nav-slider vui_tabs--nav-animation" style="left: 36px; width: 32px;">
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-line"></div>
            <div class="search-filter all">
                <div class="search-conditions mt_lg">
                    <div class="conditions-order flex_between">
                        <div class="search-condition-row">
                            <button class="vui_button vui_button--tab vui_button--active mr_sm">
                                综合排序
                            </button>
                            <button class="vui_button vui_button--tab mr_sm">
                                最多播放
                            </button>
                            <button class="vui_button vui_button--tab mr_sm">
                                最近发布
                            </button>
                            <button class="vui_button vui_button--tab mr_sm">
                                最多弹幕
                            </button>
                            <button class="vui_button vui_button--tab mr_sm">
                                最多收藏
                            </button>
                        </div>
                        <button class="vui_button vui_button--active-shrink i_button_more">
                            更多筛选
                            <IconsArrowDown class="i_icon_more ts_all_fast rotate_90" />
                        </button>
                    </div>
                    <div class="more-conditions ov_hidden" style="height: auto; transition: height 0.2s;">
                        <div class="search-condition-row">
                            <button class="vui_button vui_button--tab vui_button--active mt_sm mr_sm">全部日期</button>
                            <button class="vui_button vui_button--tab mt_sm mr_sm">最近一天</button>
                            <button class="vui_button vui_button--tab mt_sm mr_sm">最近一周</button>
                            <button class="vui_button vui_button--tab mt_sm mr_sm">最近半年</button>
                            <div class="mt_sm mr_sm"></div>
                        </div>
                        <div class="search-condition-row">
                            <button class="vui_button vui_button--tab vui_button--active mt_sm mr_sm">全部时长</button>
                            <button class="vui_button vui_button--tab mt_sm mr_sm">10分钟以下</button>
                            <button class="vui_button vui_button--tab mt_sm mr_sm">10-30分钟</button>
                            <button class="vui_button vui_button--tab mt_sm mr_sm">30-60分钟</button>
                            <button class="vui_button vui_button--tab mt_sm mr_sm">60分钟以上</button>
                        </div>
                        <div class="search-condition-row">
                            <div class="search-channel-item mt_sm">
                                <button class="vui_button vui_button--tab vui_button--active mr_sm">全部分区</button>
                                <div class="search-sub-wrapper pt_xs invisible" style="left: 50%;">
                                    <ul class="search-sub-channel flex_start">
                                        <li class="sub-channel-item">

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="search-channel-item mt_sm" v-for="item in channelJson" :key="item.title">
                                <button class="vui_button vui_button--tab mr_sm">{{ item.title }}</button>
                                <div class="search-sub-wrapper pt_xs invisible" style="left: 50%;">
                                    <ul class="search-sub-channel flex_start">
                                        <li class="sub-channel-item">

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="search-content--gray search-content">
            <div class="search-page-wrapper">
                <div class="search-page search-page-all">
                    <div class="bangumi-pgc-list i_wrapper search-all-list">
                        <div class="row media-item">
                            <div class="col media-item-col">
                                <VideocardsMediaCard />
                            </div>
                            <div class="col media-item-col">
                                <VideocardsMediaCard />
                            </div>
                        </div>
                        <div class="show-more-text">
                            <button class="vui_button vui_button--link p_center">查看全部 6 部相关影视作品
                                <IconsArrowRight class="i_icon_more" />
                            </button>
                        </div>
                    </div>
                    <div class="video i_wrapper search-all-list">
                        <div class="video-list row">
                            <div class="col col_3 mb_x40" v-for="item in 9" :key="item">
                                <VideocardsVideoCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
import channelJson from 'assets/json/channel.json';
const searchWrapRef = ref<HTMLDivElement | null>(null);
const searchInputContainerRef = ref<HTMLDivElement | null>(null);
const isHistoryOpen = ref<boolean>(true);
const isFixedInput = ref<boolean>(false);
const searchInput = ref("");
const keyword = ref('这是测试搜索关键词');
let histories = ref(['这是第一条历史记录这是第一条热搜记录', '第二条', '历史记录', '第四条记录', '第五条历史记录']);
const isSearchPopShow = ref(false);
// 显示搜索气泡框
const searchPopShow = () => {
    isSearchPopShow.value = true;

}

// 关闭搜索气泡框
const closesearchPopShow = () => {
    isSearchPopShow.value = false;

}

const handleOutsideClick = (event: { target: MouseEvent | HTMLElement | any }) => {
    // 点击了搜索框以外的区域，关闭搜索框
    if (!searchWrapRef.value) return;
    if (!searchWrapRef.value.contains(event.target)) {
        closesearchPopShow();
    }
};

// 搜索
const onSerch = (e: Event) => {
    e.preventDefault();
    // 搜索
    console.log('搜索了关键词', searchInput.value);
    // 关闭搜索框
}

const handleScroll = () => {
    if (searchInputContainerRef.value) {
        if ((searchInputContainerRef.value.getBoundingClientRect().top + 60) <= 0) {
            if (!isFixedInput.value) {
                isFixedInput.value = true;
            }
        } else {
            if (isFixedInput.value) {
                isFixedInput.value = false;
            }
        }
    }
}

// 在组件挂载后开始监听
onMounted(() => {
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener('scroll', handleScroll);
});

// 组件卸载时移除监听器
onUnmounted(() => {
    window.removeEventListener("click", handleOutsideClick);
    window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped lang="scss">
.search-header {
    .search-input {
        margin: 30px 0 20px;

        .search-input-container {
            --search_input_width: 640px;
            --search_input_height: 48px;
            --search_panel_top: 52px;
            --search_input_max_h: auto;
            --search_button_height: 38px;
            height: var(--search_input_height);

            .flex_center {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;

                .search-logo {
                    left: 24px;
                    width: 60px;
                }

                .p_center_y {
                    position: absolute;
                }

                .search-input-wrap {
                    position: relative;
                    width: var(--search_input_width);
                    height: var(--search_input_height);
                    max-height: var(--search_input_max_h);
                    margin: 0 auto;
                    padding: 5px;
                    background: var(--bg2);
                    border: 1px solid var(--line_light);
                    border-radius: 6px;
                    transition: all .2s;
                    box-sizing: border-box;

                    .search-icon {
                        width: 20px;
                        color: var(--brand_blue);
                        margin-left: 15px;
                        margin-right: 10px;
                    }

                    .clear-icon {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        right: 115px;
                        width: 20px;
                        height: 20px;
                        cursor: pointer;
                        background: var(--bg1);
                        border-radius: 50%;
                        // opacity: 0;
                        transition: all .2s;
                        // opacity: .5;
                        color: silver;
                    }

                    .search-input-el {
                        width: calc(100% - 160px);
                        height: 36px;
                        font-size: 18px;
                        color: var(--text1);
                        margin-right: 15px;
                        border: none;
                        outline: none;
                        background: transparent;
                    }

                    .vui_button {

                        &:hover {
                            background: rgba(var(--brand_blue_rgb), 0.7);
                            border-color: rgba(var(--brand_blue_rgb), 0.5);
                        }
                    }

                    .vui_button--blue {
                        color: var(--v_text_white);
                        background: var(--v_brand_blue);
                        border: 1px solid var(--v_brand_blue);
                    }

                    .search-button {
                        width: 100px;
                        height: var(--search_button_height);
                    }

                    .search-panel {
                        position: absolute;
                        left: 0;
                        z-index: 99;
                        width: 100%;
                        max-height: 612px;
                        overflow-y: auto;
                        background: var(--bg1);
                        border: 1px solid var(--line_regular);
                        border-top: none;
                        border-radius: 0 0 8px 8px;
                        padding: 13px 0 16px;
                        -webkit-font-smoothing: antialiased;
                        box-sizing: border-box;

                        .history {
                            .header {
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                padding: 0 16px;

                                .title {
                                    height: 24px;
                                    font-size: 16px;
                                    line-height: 24px;
                                    font-weight: 500;
                                }

                                .clear {
                                    font-size: 12px;
                                    line-height: 15px;
                                    height: 15px;
                                    color: var(--text3);
                                    cursor: pointer;

                                    &:hover {
                                        color: var(--brand_blue);
                                    }
                                }
                            }

                            .histories-wrap {
                                padding: 0 16px;
                                overflow: hidden;

                                .histories {
                                    display: flex;
                                    flex-wrap: wrap;
                                    margin-top: 12px;
                                    margin-right: -10px;
                                    margin-bottom: 4px;

                                    .history-item {
                                        position: relative;
                                        box-sizing: border-box;
                                        height: 30px;
                                        padding: 7px 10px 8px;
                                        font-size: 12px;
                                        line-height: 15px;
                                        background: var(--graph_bg_thin);
                                        border-radius: 4px;
                                        margin-right: 10px;
                                        margin-bottom: 10px;
                                        cursor: pointer;

                                        .history-text {
                                            white-space: nowrap;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                            max-width: 96px;
                                            color: var(--text2);
                                        }

                                        .close {
                                            display: none;
                                            box-sizing: border-box;
                                            position: absolute;
                                            width: 16px;
                                            height: 16px;
                                            top: -6px;
                                            right: -6px;
                                            padding: 2px;

                                            .icon-close {
                                                height: 14px;
                                                width: 14px;
                                                color: silver;
                                            }
                                        }

                                        &:hover {
                                            .history-text {
                                                color: var(--brand_blue);
                                            }

                                            .close {
                                                display: block;
                                            }
                                        }
                                    }
                                }
                            }

                            .history-fold {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                width: 70px;
                                margin: 0 auto 14px;
                                color: var(--text3);
                                fill: var(--text3);
                                cursor: pointer;
                                height: 16px;

                                .fold-text {
                                    font-size: 12px;
                                    line-height: 16px;
                                    height: 16px;
                                }

                                .icon-history-arrowdown {
                                    width: 16px;
                                    height: 16px;
                                    line-height: 16px;
                                    margin-left: 2px;
                                }

                                &:hover {
                                    color: var(--brand_blue);
                                    fill: var(--brand_blue);
                                }
                            }
                        }

                        .trending {
                            .header {
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                padding: 0 16px;

                                .title {
                                    height: 24px;
                                    font-size: 16px;
                                    line-height: 24px;
                                }
                            }

                            .trendings-double {
                                display: flex;

                                .trendings-col {
                                    flex: 1;

                                    .trending-item {
                                        .trending-wrap {
                                            box-sizing: border-box;
                                            height: 38px;
                                            display: flex;
                                            align-items: center;
                                            cursor: pointer;
                                            padding-left: 16px;

                                            .trendings-rank {
                                                width: 15px;
                                                min-width: 15px;
                                                height: 17px;
                                                line-height: 17px;
                                                text-align: center;
                                                font-size: 14px;
                                                margin-right: 7px;
                                                color: var(--text3);
                                            }

                                            .topThree {
                                                color: #121212;
                                            }

                                            .trendings-text {
                                                font-size: 14px;
                                                line-height: 17px;
                                                height: 17px;
                                                margin-right: 6px;
                                                white-space: nowrap;
                                                overflow: hidden;
                                                text-overflow: ellipsis;
                                                letter-spacing: 0;
                                                color: var(--text2);
                                            }

                                            .trending-mark {
                                                height: 14px;
                                                margin-right: 16px;
                                            }

                                        }

                                        :hover {
                                            background-color: #e3e6e8;
                                        }
                                    }
                                }
                            }
                        }

                        .suggestions {
                            margin-top: -6px;
                            margin-bottom: -6px;
                            overflow: hidden;
                            width: 100%;

                            .suggest-item {
                                height: 32px;
                                display: block;
                                line-height: 32px;
                                font-size: 13px;
                                position: relative;
                                text-align: left;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                cursor: pointer;
                                padding: 0 16px;
                                margin-bottom: 4px;
                                flex: 1;
                                width: 100%;
                                color: var(--text2);

                                &:hover {
                                    background-color: #e3e6e8;
                                }
                            }
                        }
                    }

                    .search-panel-popover {
                        top: var(--search_panel_top);
                        box-shadow: 0 10px 30px rgba(0, 0, 0, .1);
                    }
                }

                .flex_between {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: justify;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                }

                .search-input-active {
                    border-color: var(--brand_blue);
                    background: var(--bg1);
                }
            }

            .search-sticky-header {
                margin-top: 64px;
            }

            .search-fixed-header {
                position: fixed !important;
                top: -64px;
                left: 0;
                width: 100vw;
                min-width: 1100px;
                max-width: 2560px;
                height: 64px;
                background: var(--bg1_float);
                z-index: 1001;
                box-shadow: 0 2px 4px rgba(0, 0, 0, .08);
                transition: margin-top .5s;
                --search_input_max_h: 48px;
                --search_panel_top: 52px;
            }
        }
    }

    .search-tabs {
        width: 100%;
        max-width: 2200px;
        margin: 0 auto;
        padding: 0 56px;

        .vui_tabs {
            .vui_tabs--navbar {
                position: relative;

                .vui_tabs--nav {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: start;
                    -ms-flex-pack: start;
                    justify-content: flex-start;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    list-style: none;
                    position: relative;

                    .vui_tabs--nav-item {
                        .vui_tabs--nav-link {
                            padding: var(--v_sm) 24px;
                            font-size: var(--v_fs_3);
                            cursor: pointer;
                            display: -webkit-box;
                            display: -ms-flexbox;
                            display: flex;
                            -webkit-box-pack: start;
                            -ms-flex-pack: start;
                            justify-content: flex-start;
                            -webkit-box-align: center;
                            -ms-flex-align: center;
                            align-items: center;
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            -ms-user-select: none;
                            user-select: none;

                            .vui_tabs--nav-text {
                                color: var(--v_text2);
                                white-space: nowrap;
                                margin-right: var(--v_xsx);
                                font-weight: 500;
                                -webkit-transition: color .2s;
                                transition: color .2s;
                            }

                            .vui_tabs--nav-num {
                                padding: 1px var(--v_xxs);
                                border-radius: var(--v_xxs);
                                font-size: var(--v_fs_6);
                                color: var(--v_text2);
                                background: var(--v_graph_bg_regular);
                            }
                        }
                    }

                    .vui_tabs--nav-item:first-child .vui_tabs--nav-link {
                        padding-left: 0 !important;
                    }

                    .vui_tabs--nav-item-active .vui_tabs--nav-text {
                        color: var(--v_brand_blue) !important;
                    }
                }

                .vui_tabs--nav-slider {
                    position: absolute;
                    bottom: 0;
                    height: 4px;
                    border-radius: 2px;
                    background: var(--v_brand_blue);

                    &::after {
                        content: "";
                        display: block;
                        height: 4px;
                    }
                }

                .vui_tabs--nav-slider.vui_tabs--nav-animation {
                    -webkit-transition: all .35s ease;
                    transition: all .35s ease;
                }
            }
        }
    }

    .search-line {
        margin-top: 3px;
        border: none;
        border-top: 1px solid var(--line_light);
    }

    .search-filter.all {
        .search-conditions {
            width: 100%;
            max-width: 2200px;
            margin: 0 auto;
            padding: 0 56px;

            .conditions-order {
                .search-condition-row {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    flex-wrap: wrap;

                    .vui_button--tab:active,
                    .vui_button--active,
                    .vui_button--active:hover {
                        color: var(--v_brand_blue);
                        background: var(--v_brand_blue_thin);
                        border: none;
                    }
                }

                .i_button_more {
                    padding: 0 10px !important;
                    height: 34px !important;
                    font-size: 14px !important;

                    .i_icon_more {
                        width: 13px;
                        height: 13px;
                        margin-top: -3px;
                    }

                    .ts_all_fast {
                        -webkit-transition: all .2s !important;
                        transition: all .2s !important;
                    }

                    .rotate_90 {
                        -webkit-transform: rotate(180deg) !important;
                        transform: rotate(180deg) !important;
                    }
                }
            }

            .flex_between {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
            }

            .more-conditions {
                .search-condition-row {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    flex-wrap: wrap;

                    .vui_button--tab:active,
                    .vui_button--tab.vui_button--active,
                    .vui_button--tab.vui_button--active:hover {
                        color: var(--v_brand_blue);
                        background: var(--v_brand_blue_thin);
                        border: none;
                    }

                    .search-channel-item {
                        position: relative;

                        .search-sub-wrapper {
                            position: absolute;
                            left: 50%;
                            transform: translate(-50%);
                            bottom: -45px;
                            z-index: 998;
                            display: none;
                            opacity: 0;
                            transition: opacity .2s;

                            .search-sub-channel {
                                padding: 10px 20px;
                                background: var(--bg1);
                                border: 1px solid var(--line_regular);
                                box-shadow: 0 0 30px rgba(0, 0, 0, .1);
                                border-radius: 8px;

                                .sub-channel-item {
                                    cursor: pointer;

                                    &:not(:last-child) {
                                        margin-right: 10px;
                                    }

                                    a {
                                        transition: color .2s;

                                        &:hover {
                                            color: var(--brand_blue);
                                        }
                                    }
                                }

                            }

                            .flex_start {
                                display: -webkit-box;
                                display: -ms-flexbox;
                                display: flex;
                                -webkit-box-pack: start;
                                -ms-flex-pack: start;
                                justify-content: flex-start;
                                -webkit-box-align: center;
                                -ms-flex-align: center;
                                align-items: center;
                            }
                        }
                    }
                }
            }
        }
    }
}

.search-content {
    min-height: 200px;

    .search-page-wrapper {
        .search-page-all {
            --list_padding: 30px;
            --list_first_padding: 20px;

            .search-all-list {
                width: 100%;
                max-width: 2200px;
                margin: 0 auto;
                padding: 0 56px;
                padding-top: var(--list_padding);

                .row {
                    display: flex;
                    flex-wrap: wrap;
                    margin-left: calc(var(--b_gutter)* .5* -1);
                    margin-right: calc(var(--b_gutter)* .5* -1);

                    .col {
                        position: relative;
                        width: 100%;
                        padding-right: calc(var(--b_gutter)* .5);
                        padding-left: calc(var(--b_gutter)* .5);
                        flex: 0 0 50%;
                        max-width: 50%;
                    }

                    .media-item-col {
                        margin-bottom: var(--list_padding);
                    }

                    .mb_x40 {
                        margin-bottom: 40px;
                    }

                    .col_3 {
                        flex: 0 0 25%;
                        max-width: 25%;
                    }

                    @media (min-width: 1100px) {
                        .col_3 {
                            flex: 0 0 20%;
                            max-width: 20%;
                        }
                    }

                    @media (min-width: 1700px) {
                        .col_3 {
                            flex: 0 0 16.66666666%;
                            max-width: 16.66666666%;
                        }
                    }

                    @media (min-width: 2200px) {
                        .col_3 {
                            flex: 0 0 14.28571428%;
                            max-width: 14.28571428%;
                        }
                    }
                }

                .media-item {
                    padding-top: var(--list_padding);
                    overflow: hidden;

                    &.media-item:first-child {
                        padding-top: 0;
                    }
                }

                .show-more-text {
                    height: 1px;
                    width: 100%;
                    background: var(--line_light);
                    position: relative;
                    z-index: 2;

                    .p_center {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        -webkit-transform: translate(-50%, -50%);
                        transform: translate(-50%, -50%);

                        .i_icon_more {
                            width: 16px;
                            height: 16px;
                            vertical-align: -3px;
                            fill: var(--brand_blue);
                        }
                    }

                    .vui_button--link:hover,
                    .vui_button--link:active,
                    .vui_button--link.vui_button--active,
                    .vui_button--link.vui_button--active:hover {
                        color: var(--v_brand_blue);
                        background: var(--v_brand_blue_thin);
                        border: none;
                    }
                }
            }
        }
    }
}

@media (max-width: 1439.9px) {
    .search-header .search-input {
        margin: 25px 0 15px !important;

        .search-input-container {
            --search_input_width: 480px;
            --search_input_height: 44px;
            --search_panel_top: 46px;
            --search_button_height: 34px;
        }
    }

    .search-header .search-tabs .vui_tabs--nav-item .vui_tabs--nav-link {
        padding-left: 20px;
        padding-right: 20px;
    }
}

@media (min-width: 1700px) {
    .search-header .search-input {
        .search-input-container {
            --search_input_height: 54px;
            --search_panel_top: 58px;
            --search_button_height: 40px;
        }
    }
}

@media (min-width: 1700px) {
    .search-header .search-input {
        .search-input-container {
            --search_input_height: 54px;
            --search_panel_top: 58px;
            --search_button_height: 40px;
        }
    }
}
</style>