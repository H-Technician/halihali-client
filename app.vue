<template>
    <NuxtPage />
</template>
<script setup lang="ts">
import { init } from '@/utils/log'
//SEO 优化信息
// useSeoMeta({
//     //网站标题
//     title: 'halohalo-弹幕网',
//     //网站描述
//     description: 'halohalo-弹幕网',
//     //网站关键词
//     keywords: 'halohalo-弹幕网',
//     charset: 'utf-8',
//     viewport: 'width=device-width, initial-scale=1',
//     ogLocale: 'zh_CN',
//     ogType: 'website',
//     ogTitle: 'halohalo-弹幕网',
// });
const detectOSAndAddClass = () => {
    const userAgent = navigator.userAgent;
    let osClass = '';

    if (userAgent.indexOf('Win') !== -1) {
        osClass = 'os-windows';
    } else if (userAgent.indexOf('Mac') !== -1) {
        osClass = 'os-mac';
    } else if (userAgent.indexOf('Linux') !== -1) {
        osClass = 'os-linux';
    } else if (userAgent.indexOf('Android') !== -1) {
        osClass = 'os-android';
    } else if (userAgent.indexOf('iPhone') !== -1 || userAgent.indexOf('iPad') !== -1) {
        osClass = 'os-ios';
    } else {
        osClass = 'os';
    }

    document.body.classList.add(osClass);
};
onMounted(() => {
    detectOSAndAddClass();
    init();
})
</script>
