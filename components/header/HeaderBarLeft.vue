<template>
    <div class="header-bar-left" :class="props.isFixedHeaderLeft ? 'header-bar-left-fixed' : ''">
        <a href="/" target="_self" class="entry-logo" :style="props.isFixedHeaderLeft ? '' : 'display: none'">
            <picture class="logo">
                <source srcset="@/assets/img/header-logo.webp" type="images/webp">
                <img src="@/assets/img/header-logo.png" alt="网站logo">
            </picture>
        </a>
        <Popover @isShowPopover="isOpenxiajiantou" popStyle="padding-top: 4px; transform:translateX(-15%);" 
        :style="props.isFixedHeaderLeft ? '' : 'display: none'">
            <template #reference>
                <a href="/" target="_self" class="title-entry" :style="props.isFixedHeaderLeft ? '' : 'display: none'">
                    <span>首页</span>
                    <IconsArrowDown 
                    class="icon-arrowdown"
                    :style="[{transform:isOpentitleMenu ? 'rotate(180deg)' : ''}]"/>
                </a>
            </template>
            <template #content>
                <HeadercardTitleCard />
            </template>
        </Popover>
        <a href="/" target="_self" class="home-title-entry" :style="props.isFixedHeaderLeft ? 'display: none' : ''">
            <IconsHeaderbarTitleLogo class="home-title-icon"/>
            <span>首页</span>
        </a>
        <a href="/" target="_blank" class="default-entry">
            <span>番剧</span>
        </a>
        <a href="/" target="_blank" class="default-entry">
            <span>直播</span>
        </a>
        <a href="/" target="_blank" class="default-entry">
            <span>游戏中心</span>
        </a>
        <a href="/" target="_blank" class="default-entry">
            <span>会员购</span>
        </a>
        <a href="/" target="_blank" class="default-entry">
            <span>漫画</span>
        </a>
        <a href="/" target="_blank" class="default-entry">
            <span>赛事</span>
        </a>
        <a href="/" target="_blank" class="left-loc-entry">
            <HeaderScroll :isDarkColor="props.isFixedHeaderLeft"/>
        </a>
        <a href="/" target="_blank" 
        class="download-entry"
        :class="props.isShowCenter ? 'download-client-trigger' : ''" >
            <IconsHeaderbarDownLoad class='download-icon'/>
            <span>下载客户端</span>
        </a>
    </div>
</template>

<script lang="ts" setup>
const scrollWidth = ref<number>(0);
interface Props {
    isFixedHeaderLeft?: boolean // 是否固定显示
    isShowCenter?: boolean // 是否显示中间搜索框
}
const props = withDefaults(defineProps<Props>(), {
    isFixedHeaderLeft: false,
    isShowCenter: true,
});
const isOpentitleMenu = ref(false);
const isOpenxiajiantou = (isOpenxiajiantou: boolean) => {
    if (isOpenxiajiantou) {
        isOpentitleMenu.value = true;
    } else {
        isOpentitleMenu.value = false;
    }
}

</script>
<style scoped lang="scss">
.header-bar-left {
    display: flex;
    align-items: center;
    flex-shrink: 0;     /*容器空间不足时不缩小，即固定大小*/
    margin-right: 30px;
    border: 0;
    font-family: inherit;
    font-size: 100%;
    font-weight: 400;
    font-style: normal;
    line-height: 1.25;
    color: #ffffff;
    fill: #ffffff;

    .entry-logo {
        display: flex;
        text-decoration: none;
        align-items: center;
        height: 64px;
        transition: transform .3s;
        transform: rotate(0);
        font-weight: 600;
        margin: 0 10px 0 0;

        .logo {
            height: 100%;
            width: 60px;
            display: flex;
            align-items: center;
            cursor: pointer;

            img {
                width: 60px;
                height: 30px;
            }
        }
    }

    .title-entry {
        height: 64px;
        line-height: 64px;
        text-decoration: none;
        color: #000000;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        display: -webkit-flex;
        align-items: center;

        .icon-arrowdown {
            margin-left: 5px;
            transition:transform 0.2s linear;
            display: block;
            height: 10px;
            width: 10px;
            box-sizing: border-box;
        }
    }

    .home-title-entry {
        height: 64px;
        line-height: 64px;
        text-decoration: none;
        color: #ffffff;
        font-size: 14px;
        cursor: pointer;

        .home-title-icon {
            width: 18px;
            height: 18px;
            line-height: 64px;
            vertical-align: -5%;
            fill: #ffffff;
            color: #ffffff;
            margin-right: 6px;
        }
    }

    .default-entry,
    .download-entry {
        height: 64px;
        line-height: 64px;
        text-decoration: none;
        font-size: 14px;
        cursor: pointer;
    }

    .default-entry span {
        display: inline-block;
        position: relative;
    }

    .download-entry span {
        margin-left: 4px;
        display: inline-block;
        position: relative;
    }

    .download-entry .download-icon {
        width: 16px;
        height: 16px;
        line-height: 64px;
        vertical-align: -4%;
    }

    .left-loc-entry {
        height: 64px;
        display: flex;
        cursor: pointer;
        align-items: center;
    }

    .default-entry {
        &:hover span {
            animation: jump 0.3s; /* 应用跳动动画效果 */
        }
    }
}

.header-bar-left-fixed {
    color: #000000;
    fill: #000000;
    margin-right: 5px;
}

@media (max-width: 1279.9px) {
    .header-bar-left {
        .left-loc-entry {
            display: none !important;
        }
    }
}

@media (min-width: 2200px) {
    .home-title-entry,
    .title-entry,
    .left-loc-entry,
    .default-entry {
        font-size: 16px !important;
        margin-right: 20px;
    }
}

@media (min-width: 1701px) and (max-width: 2199.9px) {
    .home-title-entry,
    .title-entry,
    .left-loc-entry,
    .default-entry {
        margin-right: 20px;
    }
}

@media (min-width: 1367px) and (max-width: 1700.9px) {
    .home-title-entry,
    .title-entry,
    .left-loc-entry,
    .default-entry {
        margin-right: 15px;
    }
}
@media (min-width: 1100px) and (max-width: 1366.9px) {
    .header-bar-left,
    .home-title-entry,
    .title-entry,
    .left-loc-entry,
    .default-entry {
        margin-right: 10px;
    }
}
@media (max-width: 1099.9px) {
    .header-bar-left,
    .home-title-entry,
    .title-entry,
    .left-loc-entry,
    .default-entry {
        margin-right: 10px;
    }
}

/* 跳动效果 */
@keyframes jump {
  0%, 100% {
    transform: translateY(0); /* 起始和结束状态，图标回到原位 */
  }
  50% {
    transform: translateY(-5px); /* 中间状态，图标向上跳动 20px */
  }
}
</style>
  