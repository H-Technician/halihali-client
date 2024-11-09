<template>
    <div class="login-type-select-warp">
        <div class="select-controller"
            ref="selectController"
            @click="isShowPop = !isShowPop"
        >
            <p class="select-item">{{ selectMainText }}</p>
            <IconsArrowDownBold class="icon-arrowdown" :class="isShowPop ? 'selecting-icon' : ''"/>
        </div>
        <div class="drop-container" ref="selectPop" :style="isShowPop ? '' : 'display: none;'">
            <div class="drop-main">
                <div>
                    <div
                        class="drop-main-item"
                        :class="main == index ? 'drop-main-item-selected' : ''"
                        v-for="(item, index) in list"
                        :key="index"
                        @click="selectMain(index)"
                    ><span>{{ item.item }}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const isShowPop = ref(false);
const isSelected = ref(false);
const main = ref(0);
const emit = defineEmits(['select']);
const selectController = ref<HTMLElement | null>(null);
const selectPop = ref<HTMLElement | null>(null);
interface registerType {
    id: number;
    item: string;
}   // 登录方式列表
const list = ref<registerType[]>([
    { id: 1, item: '手机号' },
    { id: 2, item: '邮箱' },
]);
const selectMainText = ref(list.value[0].item);
// 点击空白处关闭气泡
const handleOutsideClick = (event: { target: any; }) => {
    if (selectController.value && selectPop.value) {
        if (
            !selectController.value.contains(event.target)
            && !selectPop.value.contains(event.target)
        ) {
            isShowPop.value = false;
        }
    }
};

// 点击选择
const selectMain = (mainIndex: number) => {
    if (!isSelected.value) {
        isSelected.value = true;
    }
    main.value = mainIndex;
    selectMainText.value = list.value[main.value].item;
    emit("select", list.value[main.value].id);
    isShowPop.value = false;
};

onMounted(async () => {      
    // 页面渲染后创建点击事件的监听器
    window.addEventListener("click", handleOutsideClick);
})
onBeforeUnmount(() => {
    // 关闭页面前清除点击事件的监听器
    window.removeEventListener("click", handleOutsideClick);
})

</script>

<style scoped lang="scss">
.login-type-select-warp {
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 80px;
    height: auto;
    box-sizing: border-box;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    padding-left: 14px;

    .select-controller {
        box-sizing: border-box;
        border-radius: 4px;
        width: 60px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: #000000;
        transition: border .3s ease;
        background: #fff;

        .select-item {
            color: #000000;
            line-height: 22px;
            height: 22px;
            font-size: 14px;
            display: inline-block;
            white-space: nowrap;
            margin: 0;
        }

        .selecting-icon {
            transform: rotate(180deg);
        }

        .icon-arrowdown {
            transition: transform 0.3s;
            width: 12px;
            height: 12px;
        }
    }

    .drop-container {
        background: #fff;
        border: 1px solid #e5e9ef;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.14);
        border-radius: 4px;
        position: absolute;
        left: 0;
        top: 40px;
        z-index: 10;
        display: flex;

        .drop-main {
            width: auto;
            height: auto;
            overflow-x: hidden;
            overflow-y: auto;

            .drop-main-item {
                padding: 10px 16px;
                width: 50px;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #000000;
                font-size: 14px;

                &:hover {
                    background-color: #f4f5f7;
                }
            }

            .drop-main-item-selected {
                color: var(--brand_blue);
            }
        }

    }
}
</style>