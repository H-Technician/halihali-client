<template>
    <NuxtLayout name="searchlayout">
        <Title>哈哩哈哩 (゜-゜)つロ 干杯~-halohalo-测试页面</Title>
        <div class="test">
            <div class="test-box">
                <VideoplayerDanmakuList />
            </div>
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.test {
    margin-top: 80px;
    width: 800px;
    height: 660px;
    display: flex;
    justify-content: center;

    .test-box {
        width: 350px;
        height: auto;
    }
}

</style>
