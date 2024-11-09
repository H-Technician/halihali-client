<script setup lang="ts">
const router = useRouter();
useHead({
    title: '',
    link: [
        { rel: '', href: '' }
    ]
})
const props = defineProps({
  error: Object
})

const handleError = () => {
    clearError();
    router.go(-1);
}

</script>

<template>
    <Title>出错啦! - v.hblog.top</Title>
    <NuxtLayout name="publiclayout">
        <div class="error-body">
            <img src="~/assets/img/error.png">
            <div class="error-body-content">
                <div class="error-massage">
                    <h3>休息一下吧，或者看看别的吧！</h3>
                </div>
                <div class="error-body-content-button">
                    <button @click="handleError">返回上一页</button>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
.error-body {
    position: relative;
    top: 80px;
    width: 980px;
    height: 600px;
    margin: 0 auto;
    background: #fffefe;
    padding-bottom: 20px;
    display: flow-root;
    img {
        width: 100%;
        width: 100%;
    }
    .error-body-content {

        .error-massage {
            display: flex;
            justify-content: center;
            h3 {
                align-items: center;
                color: var(--text2);
                font-family: "HarmonyOS_Sans_SC_Medium";
            }
        }
        
        .error-body-content-button {
            position: relative;
            top: 20px;
            display: flex;
            justify-content: center;
            border-top: 4px dashed var(--brand_blue);
            button {
                position: relative;
                top: 40px;
                height: 40px;
                width: 160px;
                border-radius: 6px;
                border: none;
                color: #ffffff;
                background-color: var(--brand_blue);
                cursor: pointer;
                font-family: "HarmonyOS_Sans_SC_Medium";
            }

            button:hover {
                background-color: var(-v_brand_blue_hover);
            }
        }
        
    }

}
</style>