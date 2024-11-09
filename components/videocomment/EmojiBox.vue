<template>
    <div class="emoji-box">
        <div class="static-popup">
            <div class="title">
                <span>表情</span>
            </div>
            <div class="content-ctnr">
                <div class="emoji-page">
                    <ul class="emoji-list">
                        <li class="emoji" v-for="(item, index) in EmojiJson" :key="index">
                            <div :title="item.name"
                                :style="`width: 100%; height: 100%; background-image: url('${item.url}'); background-size: cover;`">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import EmojiJson from '@/assets/json/emoji.json';
</script>
<style lang="scss" scoped>
.emoji-box {
    position: absolute;
    top: -257px;
    left: -10px;

    .static-popup {
        display: inline-block;
        position: relative;
        border: 1px solid #e5e9ef;
        border-radius: 8px;
        background-color: #fff;
        -webkit-box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.17);
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.17);
        opacity: 1;
        margin-top: 0;
        z-index: 20;
        width: 380px;

        .title {
            padding: 15px;
            font-size: 14px;
            color: #222;
            text-align: left;
        }

        .content-ctnr {
            .emoji-page {
                position: relative;
                height: 200px;
                padding: 0 7px 0 15px;
                overflow-x: hidden;
                overflow-y: auto;

                .emoji-list {
                    display: inline-block;
                    list-style: none;
                    padding: 0;
                    margin: 0 0 0 -12px;

                    .emoji {
                        margin: 0;
                        padding: 0;
                        width: 38px;
                        height: 38px;
                        padding: 3px;
                        margin-left: 12px;
                        margin-bottom: 12px;
                        line-height: 38px;
                        float: left;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        cursor: pointer;
                        font-size: 12px;
                        background-color: #fff;
                        -webkit-transition: background-color 0.2s ease;
                        transition: background-color 0.2s ease;
                    }
                }
            }
        }
    }
}
</style>