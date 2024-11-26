<template>
    <NuxtLayout name="searchlayout">
        <Title>哈哩哈哩 (゜-゜)つロ 干杯~-halohalo-测试页面</Title>
        <div class="test">
            <div class="test-box">
                <Pagination v-model:page="page" size="middle" :total="total" show-quick-jumper @change="onChange" />
                <Waterfall class="mt30" :images="images" :column-count="state.columnCount" :column-gap="state.columnGap"
                    :background-color="state.backgroundColor" :border-radius="state.borderRadius" />
                    <UsercardUserCard />
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
const page = ref(1);
const total = ref(98);

const images = ref<any[]>([
    {
        title: `image-`,
        link: '',
        src: `https://io.v.hblog.top/hfs/archive/7dc714975b21e1fe.jpg`
    }
]);
const state = reactive({
    columnCount: 3,
    columnGap: 20,
    backgroundColor: '#e1faeb',
    borderRadius: 12
})
function onChange(page: number, pageSize: number) {
    // 页码 page 或每页条数 pageSize 改变的回调
    console.log('change page', page)
}
function loadImages() {
    for (let i = 1; i <= 4; i++) {
        images.value.push({
            title: `image-${i}`,
            link: '',
            src: `https://io.v.hblog.top/hfs/archive/144bbbca2d45e7d7.jpg`
        })
    }
    for (let i = 1; i <= 4; i++) {
        images.value.push({
            title: `image-${i}-5`,
            link: '',
            src: `https://io.v.hblog.top/hfs/archive/51dac19e5ed57362a7cf93750e9a25de.jpg`
        })
    }
}
onBeforeMount(() => {
    // 组件已完成响应式状态设置，但未创建DOM节点
    loadImages()
})
</script>
<style scoped lang="scss">
.test {
    margin-top: 80px;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

    .test-box {
        width: 60%;
        height: auto;
    }
}
</style>
