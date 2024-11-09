<template>
    <div class="center-search-container" :class="props.isFixedHeaderCenter
        ? 'search-slide-down' : ''" ref="centerSearchContainer">
        <div class="center-search__bar" :class="isSearchPopShow ? 'is-focus' : ''" ref="searchBar">
            <!-- 输入框 -->
            <form id="nav-searchform" :class="isSearchPopShow ? 'nav-searchform-active' : ''" ref="searchForm"
                @submit="onSerch">
                <div class="nav-search-content" :class="isSearchPopShow ? 'nav-search-content-active' : ''">
                    <input type="text" class="nav-search-input" v-model="searchInput" placeholder="请输入搜索内容"
                        @focus="searchPopShow" @input="handleInput" @blur="">
                    </input>
                    <div class="nav-search-clean" :style="searchInput == '' ? 'display: none;' : ''"
                        @click.stop="searchInput = ''">
                        <IconsClose />
                    </div>
                </div>
                <div class="nav-search-btn" @click="onSerch">
                    <IconsSearch />
                </div>
            </form>
            <!-- 气泡框 -->
            <div class="search-panel" :style="isSearchPopShow ? '' : 'display: none;'" ref="searchPop">
                <div class="history" v-if="searchInput == ''">
                    <div class="header">
                        <div class="title">搜索历史</div>
                        <div class="clear">清空</div>
                    </div>
                    <div class="histories-wrap" :style="isHistoryOpen ? 'max-height: 171px;' : 'max-height: 91px;'">
                        <div class="histories">
                            <div class="history-item" v-for="(item, index) in histories" :key="index">
                                <div class="history-text">
                                    {{ item }}
                                </div>
                                <div class="close">
                                    <IconsClose class="icon-close" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="history-fold" @click.stop="isHistoryOpen = !isHistoryOpen;">
                        <div class="fold-text">{{ isHistoryOpen ? '收起' : '展开更多' }}</div>
                        <span class="icon-history-arrowdown" :style="isHistoryOpen ? 'transform: rotate(180deg);' : ''">
                            <IconsArrowDownBold />
                        </span>
                    </div>
                </div>
                <div class="trending" v-if="searchInput == ''">
                    <div class="header">
                        <div class="title">halohalo热搜</div>
                    </div>
                    <div class="trendings-double" v-if="searchBarWidth >= 400">
                        <div class="trendings-col" style="max-width: calc(50% - 5px); margin-right: 10px;">
                            <div class="trending-item" v-for="(item, index) in histories" :key="index">
                                <div class="trending-wrap">
                                    <div class="trendings-rank" :class="index < 2 ? 'topThree' : ''">{{ index * 2 + 1 }}
                                    </div>
                                    <div class="trendings-text">{{ item }}</div>
                                    <img src="@/assets/img/icon_new.png" class="trending-mark" v-if="true">
                                    <img src="@/assets/img/icon_hot.png" class="trending-mark" v-if="false">
                                    <img src="@/assets/img/living.gif" class="trending-mark" v-if="false">
                                </div>
                            </div>
                        </div>
                        <div class="trendings-col" style="max-width: calc(50% - 5px);">
                            <div class="trending-item" v-for="(item, index) in histories" :key="index">
                                <div class="trending-wrap">
                                    <div class="trendings-rank" :class="index < 1 ? 'topThree' : ''">{{ index * 2 + 2 }}
                                    </div>
                                    <div class="trendings-text">{{ item }}</div>
                                    <img src="@/assets/img/icon_new.png" class="trending-mark" v-if="false">
                                    <img src="@/assets/img/icon_hot.png" class="trending-mark" v-if="true">
                                    <img src="@/assets/img/living.gif" class="trending-mark" v-if="false">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="trendings-double" v-else>
                        <div class="trendings-col" style="max-width: 100%;">
                            <div class="trending-item" v-for="(item, index) in histories" :key="index">
                                <div class="trending-wrap">
                                    <div class="trendings-rank" :class="index < 3 ? 'topThree' : ''">{{ index + 1 }}
                                    </div>
                                    <div class="trendings-text">{{ item }}</div>
                                    <img src="@/assets/img/icon_new.png" class="trending-mark" v-if="true">
                                    <img src="@/assets/img/icon_hot.png" class="trending-mark" v-if="false">
                                    <img src="@/assets/img/living.gif" class="trending-mark" v-if="false">
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
</template>

<script lang="ts" setup>
let isSearchPopShow = ref(false);
const handleInput = ref();
const searchInput = ref("");
const isComposite = ref(false);
const matchingWord: any[] = [];
const isHistoryOpen = ref(true);
const centerSearchContainer = ref<HTMLElement | null>(null);
const searchBar = ref<HTMLElement | null>(null);
const searchForm = ref<HTMLElement | null>(null);

// 浏览器宽度
const screenWidth = ref<number>(0);
const centerSearchWidth = ref<number>(0);
const searchBarWidth = ref<number>(0);
interface Props {
    isFixedHeaderCenter?: boolean // 是否固定显示
}
const props = withDefaults(defineProps<Props>(), {
    isFixedHeaderCenter: false,
});

let histories = ref(['这是第一条历史记录这是第一条热搜记录', '第二条', '历史记录', '第四条记录', '第五条历史记录'])
// 显示搜索气泡框
const searchPopShow = () => {
    isSearchPopShow.value = true;

}
// 关闭搜索气泡框
const closesearchPopShow = () => {
    isSearchPopShow.value = false;

}
// 初始化ResizeObserver
let resizeObserver: ResizeObserver | null = null;
const handleOutsideClick = (event: { target: MouseEvent | HTMLElement | any }) => {
    // 点击了搜索框以外的区域，关闭搜索框
    if (!searchBar.value) return;
    if (!searchBar.value.contains(event.target)) {
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

// 在组件挂载后开始监听
onMounted(() => {
    window.addEventListener("click", handleOutsideClick);
    if (centerSearchContainer.value) {
        resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
            const entry = entries[0];
            searchBarWidth.value = entry.contentRect.width;
        });
        resizeObserver.observe(centerSearchContainer.value);
    }
});

// 组件卸载时移除监听器
onUnmounted(() => {
    window.removeEventListener("click", handleOutsideClick);
    if (searchBar.value && resizeObserver) {
        resizeObserver.unobserve(searchBar.value);
    }
});

</script>
<style scoped lang="scss">
.center-search-container {
    flex: 1 auto;
    /* 宽度占80% 居中*/
    height: 40px;
    max-width: 500px;
    min-width: 181px;

    .center-search__bar {
        position: relative;
        margin: 0 auto;
        font-size: 18px;
        box-sizing: border-box;
        min-width: 181px;
        max-width: 500px;

        #nav-searchform {
            width: auto;
            display: flex;
            align-items: center;
            padding: 0 48px 0 4px;
            position: relative;
            z-index: 0;
            overflow: hidden;
            border: 1px solid var(--line_regular);
            height: 40px;
            line-height: 38px;
            border-radius: 8px;
            background-color: #f2f3f4;
            opacity: .9;
            transition: background-color .3s;
            flex: 1;
            min-width: 160px;

            &:hover {
                background-color: #fff;
            }

            .nav-search-content {
                box-sizing: border-box;
                flex: 1;
                display: -webkit-flex;
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: relative;
                padding: 0 8px;
                width: 100%;
                height: 32px;
                border: 2px solid transparent;
                border-radius: 6px;

                .nav-search-input {
                    flex: 1;
                    overflow: hidden;
                    padding-right: 8px;
                    border: none;
                    background-color: transparent;
                    box-shadow: none;
                    color: var(--text2);
                    font-size: 14px;
                    line-height: 20px;
                }

                .nav-search-clean {
                    box-sizing: border-box;
                    display: block;
                    width: 16px;
                    height: 16px;
                    cursor: pointer;
                    opacity: 0.4;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    line-height: 16px;

                    &:hover {
                        opacity: 0.7;
                    }
                }
            }

            .nav-search-content-active {
                background-color: var(--graph_bg_thick);
            }

            .nav-search-btn {
                position: absolute;
                right: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 32px;
                border-radius: 6px;
                fill: #000000;
                line-height: 32px;
                cursor: pointer;
                transition: background-color .3s;
                opacity: 0.9;

                &:hover {
                    background-color: #d3d5d8;
                }
            }
        }

        .nav-searchform-active {
            transition: background-color 0s !important;
            background-color: #fff !important;
            border-radius: 8px 8px 0 0 !important;
        }

        .search-panel {
            min-width: 160px;
            max-height: 612px;
            width: 100%;
            overflow-y: auto;
            background: #fff;
            border: 1px solid var(--line_regular);
            border-top: none;
            border-radius: 0 0 8px 8px;
            padding: 13px 0 13px;
            -webkit-font-smoothing: antialiased;
            margin: 0;
            flex: 1;
            box-sizing: border-box;

            .trending,
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
                    }

                    .clear {
                        font-size: 12px;
                        line-height: 12px;
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
                            border-radius: 4px;
                            margin-right: 10px;
                            margin-bottom: 10px;
                            cursor: pointer;
                            background-color: var(--graph_bg_thin);

                            .history-text {
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                max-width: 96px;
                                color: var(--text2);
                                max-width: 7em;
                                text-overflow: ellipsis;
                                white-space: nowrap;

                            }

                            .close {
                                display: none;
                                box-sizing: border-box;
                                position: absolute;
                                width: 12px;
                                height: 12px;
                                top: -6px;
                                right: -3px;
                                padding: 2px;
                                opacity: 0.3;
                                fill: #ccc;

                                .icon-close {
                                    height: 14px;
                                    width: 14px;
                                    fill: #fff;
                                }
                            }

                            &:hover {
                                .close {
                                    display: block;
                                }

                                .history-text {
                                    color: var(--brand_blue);
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

                .trendings-double {
                    display: flex;
                    justify-content: space-between;

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
    }

    .is-focus {
        box-shadow: 0 0 30px rgba(0, 0, 0, .1);
        border-radius: 8px;

        #nav-searchform {
            background-color: #fff;
            border-bottom: none;
        }
    }
}

.search-slide-down {
    margin: 0 10px;
}
</style>