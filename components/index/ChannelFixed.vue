<template>
    <!-- 固钉频道栏 -->
    <div class="home-channel-fixed"
    @mouseenter="isOpenChannelfixedDown = true"
    @mouseleave="isOpenChannelfixedDown = false"
    :class="isOpenChannelfixedDown ? 'home-channel-fixed-down' : ''"
    >
       <!-- 左边 -->
        <div class="channel-fixed-left">
            <div class="channel-fixed-icons">
                <a href="" target="_blank" class="channel-fixed-icons__item">
                    <IconsHomechannelDongTai class="icon-dongtai"/>
                    <span class="icon-title">动态</span>
                </a>
                <a href="" target="_blank" class="channel-fixed-icons__item">
                    <IconsHomechannelReMen class="icon-remen"/>
                    <span class="icon-title">热门</span>
                </a>
            </div>
            <div class="channel-fixed-center"></div>
        </div>
        <!-- 右边 -->
        <div class="right-channel-fixed-container">
            <!-- 中间频道 -->
            <div class="channel-fixed-items channel-fixed-items__left">
                <!-- 番剧 -->
                <a href="" target="_blank" class="channel-fixed-link" v-for="(item, index) in channel.slice(0, ChannelEndNum1)" :key="item.title">
                    <span>{{item.title}}</span>
                </a>
                <a href="" target="_blank" class="channel-fixed-link" v-for="(item, index) in channelfixed.slice(0, 3)" :key="item.title">
                    <span>{{item.title}}</span>
                </a>
                <a href="" target="_blank" class="channel-fixed-link" v-for="(item, index) in channel.slice(ChannelEndNum1, ChannelEndNum2)" :key="item.title">
                    <span>{{item.title}}</span>
                </a>
                <a href="" target="_blank" class="channel-fixed-link" v-for="(item, index) in channelfixed.slice(3, 6)" :key="item.title">
                    <span>{{item.title}}</span>
                </a>
                <a href="" target="_blank" class="channel-fixed-link" v-for="(item, index) in channel.slice(ChannelEndNum2)" :key="item.title">
                    <span>{{item.title}}</span>
                </a>
            </div>
            <div class="channel-fixed-right-icon">
                <IconsArrowDown 
                class="icon-arrowdown"
                :style="[{transform:isOpenChannelfixedDown ? 'rotate(180deg)' : ''}]" 
                style="transition:transform 0.3s linear;"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import channelJson from 'assets/json/channel.json';
import channelfixedJson from 'assets/json/channelfixed.json';
const isOpenChannelfixedDown = ref(false)
const channel = channelJson;
const channelfixed = channelfixedJson;
// 声明一个ref来存储浏览器宽度
const screenWidth = ref<number>(0);
const ChannelEndNum1 = ref<number>(0);
const ChannelEndNum2 = ref<number>(0);
// 监听窗口大小变化的处理函数
const handleResize = () => {
    screenWidth.value = window.innerWidth;
    if (1100 < screenWidth.value) {
        if (screenWidth.value <= 1367) {
            ChannelEndNum1.value = 10;
            ChannelEndNum2.value = 20;
        } else if (1367 < screenWidth.value) {
            if (screenWidth.value  <= 2200){
                ChannelEndNum1.value = 11;
                ChannelEndNum2.value = 22;
            } else if (2200 < screenWidth.value) {
                ChannelEndNum1.value = 12;
                ChannelEndNum2.value = 24;
            }    
        }
    } else if (screenWidth.value <= 1099) {
        ChannelEndNum1.value = 9;
        ChannelEndNum2.value = 18;
    }
};
// 在组件挂载后开始监听
onMounted(() => {
  handleResize(); // 初始时获取一次宽度
  window.addEventListener('resize', handleResize);
});

// 组件卸载时移除监听器
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
<style scoped lang="scss">
.home-channel-fixed {
    box-sizing: border-box;
    position: fixed;
    max-width: 2560px;
    max-height: 56px;
    width: 100%;
    min-width: 1058px;
    top: 64px;
    z-index: 2;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background: var(--bg1_float);
    animation: headerSlideDown .3s linear forwards;
    transition: max-height .2s linear;
    overflow: hidden;
    height: auto;
    padding: 14px var(--layout-padding, 60px);
}

.home-channel-fixed-down {
    max-height: 140px;
    transition: max-height .2s linear;
}

.channel-fixed-left {
    height: 100%;
    width: 150px;
    display: flex;
    align-items: center;
}

.channel-fixed-icons {
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-right: 10px;
}

.channel-fixed-left .channel-fixed-icons .channel-fixed-icons__item {
    display: inline;
    height: 28px;
    color: var(--text2);
    fill: var(--text2);
    cursor: pointer;
    text-decoration: none;
}

.channel-fixed-left .channel-fixed-icons .channel-fixed-icons__item:hover {
    color: var(--brand_blue);
    fill: var(--brand_blue);
}

.channel-fixed-left .channel-fixed-icons .channel-fixed-icons__item .icon-title {
    font-size: 14px;
    vertical-align: -1px;
}

.channel-fixed-left .channel-fixed-icons .channel-fixed-icons__item .icon-dongtai,
.channel-fixed-icons .channel-fixed-icons__item .icon-remen {
    width: 22px;
    height: 22px;
    margin-right: 4px;
    vertical-align: -5px;
}
.channel-fixed-left .channel-fixed-center {
    height: 14px;
    width: 1px;
    margin-right: 10px;
    background: #E3E5E7;
}

.right-channel-fixed-container {
    width: 100%;
    display: block;
}

.channel-fixed-items {
    position: relative;
    display: grid;     /* 网格布局 */
    width: 100%;  
    grid-column: span 4;    /* 元素应该跨越4个网格列 */
    grid-column-gap: 10px;
    grid-row-gap: 14px;
    scroll-behavior: smooth;
    transition: grid-template-rows 0.5s ease;
}

.channel-fixed-link {
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #f2f4f6;
    border-radius: 6px;
    background-color: #f6f7f8;
    color: $text-color;
    text-decoration: none;
    text-align: center;
    transition: background-color .3s, color .3s;
    font-size: 14px;
    cursor: pointer;
    height: 28px;
    line-height: 28px;

    &:hover {
        background-color: #E3E6E8;
    }
}

.channel-fixed-right-icon {
    position: absolute;
}

.channel-fixed-right-icon .icon-arrowdown {
    width: 10px;
    height: 10px;
    color: #000000;
}

@media (max-width: 1099.9px) {
    .home-channel-fixed {
        padding: 14px 20px;
    }

    .channel-fixed-items__left {
        grid-template-columns: repeat(12,3fr);
    }
    
    .channel-fixed-link {
        font-size: 13px;
    }
    .icon-title {
        font-size: 13px !important;
    }

    .channel-fixed-right-icon {
        right: 6px;
        top: 20px;
    }
}

@media (min-width: 1100px) and (max-width: 1366.9px) {
    .home-channel-fixed {
        padding: 14px 50px;
    }

    .channel-fixed-items__left {
        grid-template-columns: repeat(13,3fr);
    }

    .channel-fixed-right-icon {
        right: 25px;
        top: 20px;
    }
}

@media (min-width: 1367px) and (max-width: 1700.9px) {
    .home-channel-fixed {
        padding: 14px 60px;
    }

    .channel-fixed-items__left {
        grid-template-columns: repeat(14,3fr);
    }

    .channel-fixed-right-icon {
        right: 30px;
        top: 20px;
    }
}

@media (min-width: 1701px) and (max-width: 2199.9px) {
    .home-channel-fixed {
        padding: 14px 60px;
    }

    .channel-fixed-items__left {
        grid-template-columns: repeat(14,3fr);
    }

    .channel-fixed-right-icon {
        right: 30px;
        top: 20px;
    }
}

@media (min-width: 2200px) {
    .home-channel-fixed {
        padding: 14px 70px;
    }
    
    .channel-fixed-items__left {
        grid-template-columns: repeat(15,3fr);
    }

    .channel-fixed-right-icon {
        right: 35px;
        top: 20px;
    }
}
</style>