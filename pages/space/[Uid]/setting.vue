<template>
    <div id="page-setting" class="wrapper">
        <div class="col-full">
            <div id="setting-privacy" class="section">
                <h3 class="section-title">隐私设置</h3>
                <div class="setting-privacy">
                    <div class="setting-privacy_left">
                        <div name="fav_video" class="setting-privacy-item">
                            <span class="setting-privacy-name">公开我的收藏</span>
                            <div class="be-switch-container setting-privacy-switcher">
                                <Switch size="small" v-model="value" />
                                <div class="be-switch-label">
                                    <span>公开</span>
                                </div>
                            </div>
                        </div>
                        <div name="likes_video" class="setting-privacy-item">
                            <span class="setting-privacy-name">公开最近点赞的视频</span>
                            <div class="be-switch-container setting-privacy-switcher">
                                <Switch size="small" v-model="value" />
                                <div class="be-switch-label">
                                    <span>公开</span>
                                </div>
                            </div>
                        </div>
                        <div name="disable_following" class="setting-privacy-item">
                            <span class="setting-privacy-name">公开我的关注列表</span>
                            <div class="be-switch-container setting-privacy-switcher">
                                <Switch size="small" v-model="value" />
                                <div class="be-switch-label">
                                    <span>公开</span>
                                </div>
                            </div>
                        </div>
                        <div name="disable_show_fans" class="setting-privacy-item">
                            <span class="setting-privacy-name">公开我的粉丝列表</span>
                            <div class="be-switch-container setting-privacy-switcher">
                                <Switch size="small" v-model="value" />
                                <div class="be-switch-label">
                                    <span>公开</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="setting-privacy_center">
                        <div name="close_space_medal" class="setting-privacy-item">
                            <span class="setting-privacy-name">公开佩戴的粉丝勋章</span>
                            <div class="be-switch-container setting-privacy-switcher">
                                <Switch size="small" v-model="value" />
                                <div class="be-switch-label">
                                    <span>公开</span>
                                </div>
                            </div>
                        </div>
                        <div name="user_info" class="setting-privacy-item">
                            <span class="setting-privacy-name">公开我的生日、个人标签</span>
                            <div class="be-switch-container setting-privacy-switcher">
                                <Switch size="small" v-model="value" />
                                <div class="be-switch-label">
                                    <span>公开</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="setting-privacy_right">
                        <div name="live_playback" class="setting-privacy-item">
                            <span class="setting-privacy-name">投稿视频列表中展现直播回放</span>
                            <div class="be-switch-container setting-privacy-switcher">
                                <Switch size="small" v-model="value" />
                                <div class="be-switch-label">
                                    <span>公开</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const value = ref<boolean>(true);
</script>
<style scoped lang="scss">
#page-setting.wrapper {
    width: 1101px;
    margin: 0 auto;
    position: relative;

    .col-full {
        background: #fff;
        box-shadow: 0 0 0 1px #eee;
        border-radius: 4px;
        padding: 20px;

        #setting-privacy.section {
            border-bottom: 1px solid #eee;
            margin-bottom: 17px;
            position: relative;

            .section-title {
                color: #000;
                font-size: 20px;
                font-weight: 400;
                line-height: 33px;
                padding: 0 0 15px;
                position: relative;
            }

            .setting-privacy {
                display: -ms-flexbox;
                display: flex;

                .setting-privacy_left,
                .setting-privacy_center,
                .setting-privacy_right {
                    margin-right: 60px;

                    .setting-privacy-item {
                        margin: 15px 0;

                        .setting-privacy-name {
                            display: inline-block;
                            width: 194px;
                            font-size: 14px;
                            color: #222;
                        }

                        .be-switch-container {
                            position: relative;
                            display: inline-block;
                            height: 20px;
                            cursor: pointer;
                            white-space: nowrap;

                            .be-switch-label {
                                display: inline-block;
                                line-height: 20px;
                                font-size: 12px;
                                color: #99a2aa;
                                margin-left: 3px;
                                vertical-align: middle;
                            }
                        }
                    }


                }
            }
        }
    }
}
@media (min-width: 1420px) {
    .wrapper {
        width: 1283px !important;
    }
}
</style>