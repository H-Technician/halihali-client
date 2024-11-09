<template>
    <div id="config-page" class="config-page">
        <div class="config">
            <div class="config-item">
                <div class="text">
                    <span>消息提醒</span>
                    <span class="tip">（关闭后，消息将不再进行提醒）</span>
                </div>
                <div class="radio-list">
                    <Radio :options="openOptions" v-model:value="active" />
                </div>
            </div>
        </div>
        <div class="config">
            <div class="config-item" v-for="(item, index) in configMessageList" :key="item.title">
                <div class="text">
                    <span>{{ item.title }}</span>
                    <span class="tip">{{ item.tip }}</span>
                </div>
                <div class="radio-list">
                    <Radio :options="item.labelList" v-model:value="active"/>
                </div>
            </div>
        </div>
        <div class="config">
            <div class="config-item">
                <div class="text">
                    <span>收起未关注人消息</span>
                    <span class="tip">（开启后，未关注人消息将被折叠起来）</span>
                </div>
                <div class="radio-list">
                    <Radio :options="followOptions" v-model:value="active"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Radio } from '@/types/radio';
const active = ref<number>(1);
interface ConfigItem {
    title: string;
    tip: string;
    labelList: Radio[];
}
const openOptions = ref<Radio[]>([
    {
        label: '开启',
        value: 1
    },
    {
        label: '关闭',
        value: 2
    }
]);
const followOptions = ref<Radio[]>([
    {
        label: '开启',
        value: 1
    },
    {
        label: '关闭',
        value: 2
    }
]);
const configMessageList = ref<ConfigItem[]>(
    [
        {
            title: '回复我的消息提醒',
            tip: '（接受谁的评论消息提醒）',
            labelList: [
                {
                    label: '所有人',
                    value: 1
                },
                {
                    label: '关注的人',
                    value: 2
                },
                {
                    label: '不接受任何消息提醒',
                    value: 3
                }
            ]
        },
        {
            title: '@我的消息提醒',
            tip: '（接受谁的@消息提醒）',
            labelList: [
            {
                    label: '所有人',
                    value: 1
                },
                {
                    label: '关注的人',
                    value: 2
                },
                {
                    label: '不接受任何消息提醒',
                    value: 3
                }
            ]
        },
        {
            title: '收到的赞消息提醒',
            tip: '',
            labelList: [
                {
                    label: '开启',
                    value: 1
                },
                {
                    label: '关闭',
                    value: 2
                }
            ]
        }
    ]

)
</script>
<style scoped lang="scss">
.config-page {
    .config {
        -webkit-box-shadow: 0 2px 4px 0 rgba(121, 146, 185, 0.54);
        box-shadow: 0 2px 4px 0 rgba(121, 146, 185, 0.54);
        margin-bottom: 10px;
        border-radius: 4px;
        background-color: #fff;
        width: 100%;
        min-height: 100px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        color: #333;
        font-size: 14px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;

        .config-item {
            position: relative;
            width: 100%;
            padding: 16px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;

            .text {
                line-height: 19px;

                .tip {
                    color: #999;
                }
            }

            .radio-list {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                height: 32px;
                align-items: flex-end;

                :deep(.hui-radio-wrap) {
                    padding-right: 40px;
                }
            }
        }

        &:nth-child(2) {
            .config-item:nth-child(1),
            .config-item:nth-child(2) {
                border-bottom: 1px solid #e5e9ef;
            }
        }
    }
}
</style>
