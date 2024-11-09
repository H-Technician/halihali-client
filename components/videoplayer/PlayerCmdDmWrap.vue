<template>
    <!-- 互动容器 -->
    <div class="player-cmd-dm-wrap" ref="playerCmdDmWrapRef">
        <div class="hl-line-horizontal" :class="lineHorizontalClasses" v-if="props.isUpload"></div>
        <div class="hl-line-vertical" :class="lineVerticalClasses" v-if="props.isUpload"></div>
        <div class="hl-editor" v-for="(item, index) in interactCard.likeList" :class="item.className"
            :style="` --top: ${item.top}%; --left: ${item.left}%; `" :key="index" :id="`hl-like-${index}`"
            @mousedown.passive="props.isUpload ? mouseDown($event, 'like', index) : null">
            <div class="hl-guide-three" v-if="item.type === 1
                || item.type === 2">
                <span class="hl-guide-three-like is_active">
                    <IconsPlayLike class="hl-icon" />
                </span>
                <span class="hl-guide-three-coin">
                    <IconsPlayCoin class="hl-icon" />
                </span>
                <span class="hl-guide-three-collect">
                    <IconsPlayCollect class="hl-icon" />
                </span>
            </div>
            <div class="hl-guide-follow" v-if="item.type === 1
                || item.type === 3">
                <span class="hl-guide-follow-0" v-if="true">
                    <IconsPlus class="icon-plus" />
                    <span>关注</span>
                </span>
                <span class="hl-guide-follow-1" v-else>已关注</span>
            </div>
        </div>
        <div class="hl-link" v-for="(item, index) in interactCard.linkList" :class="item.className"
            :style="` --top: ${item.top}%; --left: ${item.left}%; `" :key="index" :id="`hl-link-${index}`"
            @mousedown.passive="props.isUpload ? mouseDown($event, 'link', index) : null">
            <span class="hl-circle" @click="props.isUpload ? null : closeCard('link', index)">
                <IconsPlayClose :progress="item.closeProgress" />
            </span>
            <div class="hl-link-left">
                <div class="hl-link-icon"></div>
                <div class="hl-link-msg">
                    {{ item.link_content }}
                </div>
            </div>
            <div class="hl-link-line"></div>
            <div class="hl-link-right">
                <div class="hl-link-watchlater">
                    <span class="hl-link-watchlater-icon">
                        <IconsVideocardSeeLater class="hl-icon" />
                    </span>
                    <span>稍后再看</span>
                </div>
            </div>
        </div>
        <div class="hl-vote" v-for="(item, index) in interactCard.voteList" :class="item.className"
            :style="` --top: ${item.top}%; --left: ${item.left}%; `" :key="index" :id="`hl-vote-${index}`"
            @mousedown.passive="props.isUpload ? mouseDown($event, 'vote', index) : null">
            <span class="hl-circle" @click="props.isUpload ? null : closeCard('vote', index)">
                <IconsPlayClose :progress="item.closeProgress" />
            </span>
            <div class="hl-vote-question">
                {{ item.question }}
            </div>
            <div class="hl-vote-an hl-vote-flag-1 " v-for="(voteItem, index) in item.VoteOptions" :key="index">
                <div class="hl-vote-an-bg">
                    <div class="hl-vote-an-bg-buffer">

                    </div>
                </div>
                <div class="hl-vote-an-text">
                    <div class="hl-vote-an-text-index"></div>
                    <div class="hl-vote-an-text-doc">{{ voteItem.option_text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { InteractionLike, InteractionLink, InteractionVote, InteractionCard } from '@/types/interaction';
const playerCmdDmWrapRef = ref<HTMLDivElement | null>(null); // 互动容器
const lineTopShow = ref(false); // 上边界线段显示
const lineBottomShow = ref(false); // 下边界线段显示
const lineLeftShow = ref(false); // 左边界线段显示
const lineRightShow = ref(false); // 右边界线段显示
const emit = defineEmits(['update']);
interface Props {
    isUpload?: boolean; // 是否为投稿模式 投稿模式下互动引导可以鼠标拖动，视频播放模式无法拖动
    currentTime?: number; // 当前视频播放时间
    interactionCard?: InteractionCard; // 互动卡片数据
}
const props = withDefaults(defineProps<Props>(), {
    isUpload: false,
    currentTime: 0,
    interactionCard: undefined,
});
// 上下左右四条边界线段显示
let interactCard = reactive<InteractionCard>({
    likeList: [],
    linkList: [],
    voteList: [],
});

const lineHorizontalClasses = computed(() => {
    return [
        lineTopShow.value ? 'hl-line-show-0' : '',
        lineBottomShow.value ? 'hl-line-show-1' : ''
    ].filter(Boolean);
});
const lineVerticalClasses = computed(() => {
    return [
        lineLeftShow.value ? 'hl-line-show-0' : '',
        lineRightShow.value ? 'hl-line-show-1' : ''
    ].filter(Boolean);
});

// 显示关注点赞
const displayLike = (currTimePoint: number) => {
    interactCard.likeList.forEach((item, index) => {
        if (item.timeStart !== undefined && item.timeEnd !== undefined) {
            if (currTimePoint < item.timeEnd && item.timeStart <= currTimePoint) {
                interactCard.likeList[index].isShow = true;
                if (interactCard.likeList[index].className !== '') {
                    interactCard.likeList[index].className = '';
                }
            } else if (item.timeEnd <= currTimePoint && (item.timeEnd + 0.6) > currTimePoint) {
                interactCard.likeList[index].isShow = false;
                if (interactCard.likeList[index].className !== 'hl-hide') {
                    interactCard.likeList[index].className = 'hl-hide';
                }
            } else if (currTimePoint < item.timeStart || (item.timeEnd + 0.6) < currTimePoint) {
                interactCard.likeList[index].isShow = false;
                if (interactCard.likeList[index].className !== 'hl-card-hide') {
                    interactCard.likeList[index].className = 'hl-card-hide';
                }
            }
        }
    });
};
// 显示视频链接链接
const displayLink = (currTimePoint: number) => {
    interactCard.linkList.forEach((item, index) => {
        if (item.isCloseTime > currTimePoint) {
            interactCard.linkList[index].isClose = false;       
        }
        if (item.isCloseTime <= currTimePoint && item.isClose === true) return;
        if (item.timeStart !== undefined && item.timeEnd !== undefined) {
            if (currTimePoint < item.timeEnd && item.timeStart <= currTimePoint) {
                interactCard.linkList[index].isShow = true;
                if (interactCard.linkList[index].className !== '') {
                    interactCard.linkList[index].className = '';
                }
            } else if (item.timeEnd <= currTimePoint && (item.timeEnd + 0.6) > currTimePoint) {
                interactCard.linkList[index].isShow = false;
                if (interactCard.linkList[index].className !== 'hl-hide') {
                    interactCard.linkList[index].className = 'hl-hide';
                }
            } else if (currTimePoint < item.timeStart || (item.timeEnd + 0.6) < currTimePoint) {
                interactCard.linkList[index].isShow = false;
                if (interactCard.linkList[index].className !== 'hl-card-hide') {
                    interactCard.linkList[index].className = 'hl-card-hide';
                }
            }
            if (interactCard.linkList[index].isShow) {
                interactCard.linkList[index].closeProgress = (currTimePoint - item.timeStart) / (item.timeEnd - item.timeStart);
            }
        }
    });
};
// 显示投票
const displayVote = (currTimePoint: number) => {
    interactCard.voteList.forEach((item, index) => {
        if (item.isCloseTime > currTimePoint) {
            interactCard.voteList[index].isClose = false;       
        }
        if (item.isCloseTime <= currTimePoint && item.isClose === true) return;
        if (item.timeStart !== undefined && item.timeEnd !== undefined) {
            if (currTimePoint < item.timeEnd && item.timeStart <= currTimePoint) {
                interactCard.voteList[index].isShow = true;
                if (interactCard.voteList[index].className !== '') {
                    interactCard.voteList[index].className = '';
                }
            } else if (item.timeEnd <= currTimePoint && (item.timeEnd + 0.6) > currTimePoint) {
                interactCard.voteList[index].isShow = false;
                if (interactCard.voteList[index].className !== 'hl-hide') {
                    interactCard.voteList[index].className = 'hl-hide';
                }
            } else if (currTimePoint < item.timeStart || (item.timeEnd + 0.6) < currTimePoint) {
                interactCard.voteList[index].isShow = false;
                if (interactCard.voteList[index].className !== 'hl-card-hide') {
                    interactCard.voteList[index].className = 'hl-card-hide';
                }
            }
            if (interactCard.voteList[index].isShow) {
                interactCard.voteList[index].closeProgress = (currTimePoint - item.timeStart) / (item.timeEnd - item.timeStart);
            }
        }
    });
};

const closeCard = (type: string, index: number) => {
    switch (type) {
        case 'link':
            interactCard.linkList[index].isClose = true;
            interactCard.linkList[index].isCloseTime = props.currentTime;
            interactCard.linkList[index].className = 'hl-hide';
            setTimeout(() => {
                interactCard.linkList[index].className = 'hl-card-hide';
            }, 600);
            break;
        case 'vote':
            interactCard.voteList[index].isClose = true;
            interactCard.voteList[index].isCloseTime = props.currentTime;
            interactCard.voteList[index].className = 'hl-hide';
            setTimeout(() => {
                interactCard.voteList[index].className = 'hl-card-hide';
            }, 600);
            break;
    };
}

//  鼠标按下时拖动事件
const mouseDown = (e: MouseEvent, type: string, index: number) => {
    if (!playerCmdDmWrapRef.value) return;
    let divElement;
    switch (type) {
        case 'like':
            divElement = document.getElementById(`hl-like-${index}`);
            break;
        case 'link':
            divElement = document.getElementById(`hl-link-${index}`);
            break;
        case 'vote':
            divElement = document.getElementById(`hl-vote-${index}`);
            break;
    };
    if (!divElement) return;
    const disX = e.clientX;
    const disY = e.clientY;
    const startX = divElement.offsetLeft; // 元素到窗口左边的距离
    const startY = divElement.offsetTop; // 元素到窗口上边的距离
    //console.log(divElement.offsetLeft, divElement.offsetTop);
    const parentWidth = playerCmdDmWrapRef.value.clientWidth;
    const parentHeight = playerCmdDmWrapRef.value.clientHeight;
    const offsetX = divElement.clientWidth / (2 * parentWidth);
    const offsetY = divElement.clientHeight / (2 * parentHeight);
    const minLeft = offsetX * 100 + 5;
    const minTop = offsetY * 100 + 5;
    const maxLeft = 100 - offsetX * 100 - 5;
    const maxTop = 100 - offsetY * 100 - 15;
    let divElementLeft;
    let divElementTop
    //鼠标移动时
    document.onmousemove = (e: MouseEvent) => {
        const x = e.clientX - disX;
        const y = e.clientY - disY;
        // 边界值判定
        divElementLeft = (startX + x) / parentWidth * 100;
        divElementTop = (startY + y) / parentHeight * 100;
        divElementLeft = Math.min(Math.max(minLeft, divElementLeft), maxLeft);
        divElementTop = Math.min(Math.max(minTop, divElementTop), maxTop);
        if (type === 'vote') {
            interactCard.voteList[index].top = divElementTop;
            interactCard.voteList[index].left = divElementLeft;
        } else if (type === 'link') {
            interactCard.linkList[index].top = divElementTop;
            interactCard.linkList[index].left = divElementLeft;
        } else if (type === 'like') {
            interactCard.likeList[index].top = divElementTop;
            interactCard.likeList[index].left = divElementLeft;
        }
        // 当拖动触碰到边界后线段显示
        switch (divElementTop) {
            case minTop:
                lineTopShow.value = true;
                break;
            case maxTop:
                lineBottomShow.value = true;
                break;
            default:
                lineTopShow.value = false;
                lineBottomShow.value = false;
        };
        switch (divElementLeft) {
            case minLeft:
                lineLeftShow.value = true;
                break;
            case maxLeft:
                lineRightShow.value = true;
                break;
            default:
                lineLeftShow.value = false;
                lineRightShow.value = false;
        };
    }
    //鼠标抬起 清除移动和鼠标抬起事件
    document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        // 将拖动的坐标传给父组件
        emit('update', type, index);
    }

};

// 监听视频播放当前时间点
watch(() => props.currentTime, (currTimePoint) => {
    if (interactCard.likeList.length !== 0) {
        displayLike(currTimePoint);
    }
    if (interactCard.linkList.length !== 0) {
        displayLink(currTimePoint);
    }
    if (interactCard.voteList.length !== 0) {
        displayVote(currTimePoint);
    }
});
// 监听互动卡片数组长度变化
watch(() => props.interactionCard?.likeList, (newLikeList) => {
    if (!props.isUpload) return;
    if (newLikeList) {
        interactCard.likeList = newLikeList;
        displayLike(props.currentTime);
        // console.log(newLikeList);
    } else {
        interactCard.likeList = [];
    }
}, { deep: true });

watch(() => props.interactionCard?.linkList, (newLinkList) => {
    if (!props.isUpload) return;
    if (newLinkList) {
        interactCard.linkList = newLinkList;
        displayLink(props.currentTime);
        // console.log(newLinkList);
    } else {
        interactCard.linkList = [];
    }
}, { deep: true });

watch(() => props.interactionCard?.voteList, (newVoteList) => {
    if (!props.isUpload) return;
    if (newVoteList) {
        interactCard.voteList = newVoteList;
        displayVote(props.currentTime);
        // console.log(newVoteList);
    } else {
        interactCard.voteList = [];
    }
}, { deep: true });

const getLikeCard = (index: number): InteractionLike => {
    return interactCard.likeList[index];
}
const getLinkCard = (index: number): InteractionLink => {
    return interactCard.linkList[index];
}
const getVoteCard = (index: number): InteractionVote => {
    return interactCard.voteList[index];
}
onMounted(() => {
    if ((props.interactionCard?.likeList?.length !== 0
        || props.interactionCard?.linkList?.length !== 0
        || props.interactionCard?.voteList?.length !== 0)
        && props.interactionCard) {
        interactCard = props.interactionCard;
        // console.log(props.interactionCard);
    }
});
defineExpose({
    getLikeCard,
    getLinkCard,
    getVoteCard
});
</script>
<style lang="scss" scoped>
.player-cmd-dm-wrap {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 12;
    background: transparent;

    .hl-line-horizontal {
        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 1px;
            left: 0;
            top: 5%;
            background: #858688;
            z-index: 100;
            display: none;
        }

        &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 1px;
            left: 0;
            bottom: 15%;
            background: #858688;
            z-index: 100;
            display: none;
        }
    }

    .hl-line-vertical {
        &::before {
            content: "";
            position: absolute;
            width: 1px;
            height: 100%;
            left: 5%;
            top: 0;
            background: #858688;
            z-index: 100;
            display: none;
        }

        &::after {
            content: "";
            position: absolute;
            width: 1px;
            height: 100%;
            right: 5%;
            top: 0;
            background: #858688;
            z-index: 100;
            display: none;
        }
    }

    .hl-line-show-0::before {
        display: block;
    }

    .hl-line-show-1::after {
        display: block;
    }

    .hl-editor {
        width: auto;
        height: 36px;
        top: var(--top);
        left: var(--left);
        background: rgba(24, 25, 28, .8);
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 8px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        cursor: pointer;
        pointer-events: auto;
        -webkit-transform: translate(-50%, -50%) scale(1);
        transform: translate(-50%, -50%) scale(1);
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transition: opacity .35s;
        transition: opacity .35s;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        position: absolute;
        color: #FFFFFF;
        fill: #FFFFFF;
        animation: hl-fade-in .6s forwards;


        .hl-guide-three {
            border-radius: 8px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            font-size: 0;
            padding: 0 3px;
            width: 142px;
            height: 36px;

            span {
                display: inline-block;
                height: 38px;
                padding: 8px 12.5px;
                width: 44px;
            }

            .is_active {
                fill: var(--brand_blue);
            }

            // 275 45 142 36 78 36
        }

        .hl-guide-follow {
            font-size: 12px;
            height: 24px;
            margin: 0 6px;
            padding: 0;
            width: 66px;
            border-radius: 4px;
            background: var(--brand_blue);
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;

            .hl-guide-follow-0 {
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;

                span {
                    font-size: 14px;
                }

                .icon-plus {
                    width: 16px;
                    height: 16px;
                }
            }

            .hl-guide-follow-1 {
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;

                span {
                    font-size: 14px;
                }
            }
        }
    }

    .hl-link {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: rgba(33, 33, 33, .8);
        border-radius: 10px 8px 8px 10px;
        color: #fff;
        cursor: pointer;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-size: 12px;
        height: 50px;
        top: var(--top);
        left: var(--left);
        pointer-events: auto;
        position: absolute;
        -webkit-transform: translate(-50%, -50%) scale(1);
        transform: translate(-50%, -50%) scale(1);
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transition: opacity .35s;
        transition: opacity .35s;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: auto;
        z-index: 1;
        animation: hl-fade-in .6s forwards;

        // 290 50
        .hl-circle {
            width: 20px;
            height: 20px;
            position: absolute;
            right: -16px;
            top: -16px;
        }

        .hl-link-left {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            height: 100%;
            width: 232px;

            .hl-link-icon {
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0UCIZXAAAALHRSTlMAoJDx4OYL/DcGF+6+JNi4ycSIT2k6LPeWfRzTVPXPszEQrV0hpo12cEZAZFpRNIQAAAJVSURBVFjD7dbZcpswGIbhHwwSi81q8Ib33fnu//oatRIpmliDhQ/aaZ+TKInnjVgkhb4RJMhP9Fzo8PiD+vEA+JPnqS0+1dRHBJhibAzh2HNeekxP9Z8XBSMZM6SmRBYx65QeM6XsY3rKPqanLGMWqeDmOh0b/Io9+YHi3gKtdExgLznSlyjFMGnUphIMlcgY22C4DSPBxTu4IrXDe+yI6IDWbPSqGVoHoohDyip6XZVB4hFN1TgPyUaYQ5rSWQ0nZGcC6UyJukKypa4yIXX3HLLlqCdHX++HLRfS/9bbWvvHLSLNR3N6tRXdFwdxejekiYF4fDnWYa/WqSm2PqRCSy0hrbP5RxAaW8141N17tVbZ+S1fFYbWFF2+1lqg62BoBdAsqWOLroWhxTh+M8vmWuuaxp1WaWjRSn43yl35sHTLUjxiaWlqnYE4LZoJme3v13MibqepFZRL6otV5V+/Hv+xVvi+FsvZG1qh/LQ7uFXnF/HlwcEfYlDktW2r5EARUiXWc1xRWAC8tGwxsdJ9dcRnYrddMdtrjDZyAy3kXrSJ7O89u8zEZAIKxBRnFzbonWD3ZkfCrrmzP+6979nicjAnW3NZ4OS1R6GtVBa8drTek539up3NAgMvcv51WNZQitCiFBZQaqIMSrx1XrWNoWTy/w1r+hk+xjuMSVjGGC6WZ3S1xlDriqTKxzB+Ra3I4bDHne62drqmied57QR9z0D94dHnOEmvJ/pWAMm4ovL2TTcJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=) no-repeat;
                background-position: 50%;
                background-size: 40px;
                border-radius: 8px 0 0 8px;
                height: 50px;
                overflow: hidden;
                position: relative;
                width: 90px;
            }

            .hl-link-msg {
                -webkit-box-orient: vertical;
                display: -webkit-box;
                line-height: 17px;
                margin-left: 8px;
                max-height: 34px;
                overflow: hidden;
                pointer-events: none;
                text-overflow: ellipsis;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                white-space: normal;
                width: 134px;
                word-break: break-all;
            }
        }

        .hl-link-line {
            background: hsla(0, 0%, 100%, .5);
            height: 36px;
            margin: 0 8px 0 0;
            width: 1px;
        }

        .hl-link-right {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            height: 100%;
            font-size: 10px;
            width: 45px;

            .hl-link-watchlater {
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                align-items: center;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-direction: column;
                flex-direction: column;
                justify-content: center;

                .hl-link-watchlater-icon {
                    width: 24px;
                    height: 24px;

                    .hl-icon {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }

    .hl-vote {
        background: rgba(24, 25, 28, .8);
        border-radius: 8px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        font-size: 12px;
        padding: 12px 10px 4px;
        pointer-events: auto;
        position: absolute;
        -webkit-transform: translate(-50%, -50%) scale(1);
        transform: translate(-50%, -50%) scale(1);
        -webkit-transform-origin: center;
        transform-origin: center;
        width: auto;
        height: auto;
        top: var(--top);
        left: var(--left);
        animation: hl-fade-in .6s forwards;

        .hl-circle {
            width: 20px;
            height: 20px;
            position: absolute;
            right: -16px;
            top: -16px;
        }

        .hl-vote-question {
            height: 14px;
            line-height: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 157px;
            font-size: 12px;
        }

        .hl-vote-an {
            color: #fff;
            cursor: pointer;
            position: relative;
            width: 157px;
            height: 26px;
            margin-top: 6px;
            margin-bottom: 6px;

            .hl-vote-an-bg {
                background: hsla(0, 0%, 100%, .2);
                border-radius: 4px;
                top: 0;
                height: 100%;
                left: 0;
                position: absolute;
                width: 100%;

                .hl-vote-an-bg-buffer {
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0;
                    -webkit-transition: width 1s;
                    transition: width 1s;
                    width: 26px;
                }
            }

            .hl-vote-an-text {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                height: 26px;
                line-height: 26px;
                margin: 6px 0;
                padding-right: 20px;
                position: relative;
                width: 100%;
                font-size: 12px;

                .hl-vote-an-text-index {
                    -webkit-box-flex: 0;
                    border-radius: 4px;
                    -ms-flex: none;
                    flex: none;
                    text-align: center;
                    width: 10px;
                }

                .hl-vote-an-text-doc {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 100px;
                }
            }
        }
    }

    .hl-hide {
        animation: hl-fade-out .6s forwards;
    }

    .hl-card-hide {
        opacity: 0;
        display: none;
    }
}
</style>