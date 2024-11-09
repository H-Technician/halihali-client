<template>
    <div class="header-bar" 
    :class="[props.isFixedHeader ? 'header-bar-slide-down' : '', 
    props.isDisplayHeader ? '' : 'hide-header-bar', 
    LazyloadingModule && props.isindex ? 'header-bar-index-lazyloading' : '',
    LazyloadingModule && !props.isindex ? 'header-bar-lazyloading' : '']" 
    :style="props.isShadow 
    ? 'box-shadow: 0 0 30px rgba(0,0,0,.1);' : ''">
        <HeaderBarLeft 
        :isFixedHeaderLeft="props.isFixedHeader" 
        :isShowCenter="props.isShowCenter"/>
        <HeaderBarCenter 
        :isFixedHeaderCenter="props.isFixedHeader" 
        :style="props.isShowCenter ? '' 
        : ' display: none;'" />
        <HeaderBarRight 
        :isFixedHeaderRight="props.isFixedHeader" 
        @lazyload="lazyload"/>
        
    </div>
</template>

<script lang="ts" setup>
const LazyloadingModule = ref<boolean>(true);// 用户信息模块延迟加载
interface Props{
    isindex?: boolean // 是否是首页
    isFixedHeader?: boolean // 是否固定头部
    isShadow?: boolean // 是否显示阴影
    isShowCenter?: boolean // 是否显示中间内容
    isDisplayHeader?: boolean // 是否显示头部
}
const props = withDefaults(defineProps<Props>(), {
    isindex: false,
    isFixedHeader: false,
    isShadow: false,
    isShowCenter: true,
    isDisplayHeader: true,
});
const lazyload = () => {
    LazyloadingModule.value = false;
}
</script>
<style scoped lang="scss">
.header-bar {
    box-sizing: border-box; /* 让内边距不增加宽度 */
    position: absolute;
    margin: 0;
    padding: 0 24px;
    top: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 2560px;
    width: 100%;
    height: 64px;
    min-width: 1058px;
}

.header-bar-slide-down {
    position: fixed;
    top: 0;
    // animation: headerSlideDown .3s linear forwards;
    border-bottom: 1px solid rgba(0,0,0,.1);
    background-color: #ffffff;
    // z-index: 3;
}

.hide-header-bar {
    visibility: hidden;
}

.header-bar-index-lazyloading {
    justify-content: flex-start;

    :deep(.right-entry) {
        display: none;
    }
    
    :deep(.center-search-container) {
        max-width: 32%;
    }
}

.header-bar-lazyloading {

    :deep(.right-entry) {
        .header-avater {
            display: none;
        }
        
        .right-entry-item {
            .right-entry-item-vip,
            .right-entry-item-message,
            .right-entry-item-dynamic,
            .right-entry-item-collection,
            .right-entry-item-history,
            .right-entry-item-creation {
                display: none;
            }
        } 
        
    }
    
    :deep(.center-search-container) {
        display: none;
    }
}

@media (max-width: 1099.9px) {
    .header-bar {
        padding: 0 15px;
    }
}

@media (min-width: 1100px) and (max-width: 1366.9px) {
    .header-bar {
        padding: 0 15px;
    }
}

@media (max-width: 1200px) {
    .header-bar-slide-down {
        :deep(.header-bar-left-fixed) {
            .download-client-trigger {
                display: none;
            }
        }
    }
}

</style>
  