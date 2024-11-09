<template>
    <div class="dyn-topic-box">
        <div class="topic-panel">
            <div class="topic-panel__nav">
                <span class="topic-panel__nav-title fs-large">话题</span>
            </div>
            <div class="relevant-topic-container" v-for="item in 10" :key="item">
                <div class="relevant-topic-container__item">
                    <div class="relevant-topic">
                        <svg-icon name="topic" class="relevant-topic__prefix"></svg-icon>
                        <div class="relevant-topic__title bili-ellipsis">黑神话悟空获金摇杆年度提名</div>
                        <div class="relevant-topic__exposed">
                            <span class="bili-ellipsis">196.3万浏览·6817讨论</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.fs-large {
    font-size: 17px;
    line-height: 32px;
}

.ellipsis {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
}

.dyn-topic-box {
    overflow-y: auto;
    border-radius: 6px;

    .topic-panel {
        -webkit-font-smoothing: antialiased;
        background: var(--bg1);
        border-radius: 6px;
        font-style: normal;
        font-weight: 400;
        padding: 16px 4px 8px;

        .topic-panel__nav {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin: 0 12px 0 7px;

            .topic-panel__nav-title {
                color: var(--text1);
                font-weight: 600;
            }
        }

        .relevant-topic-container {
            align-items: center;
            display: flex;
            height: 63px;

            .relevant-topic-container__item {
                align-items: center;
                border-radius: 6px;
                cursor: pointer;
                display: flex;
                height: 55px;
                margin: 4px 0;
                width: 100%;

                .relevant-topic {
                    cursor: pointer;
                    margin: 3px 12px 0 32px;
                    position: relative;

                    .relevant-topic__prefix {
                        color: var(--brand_blue);
                        left: -24px;
                        position: absolute;
                        top: 2px;
                    }

                    .relevant-topic__title {
                        -webkit-line-clamp: 1;
                        line-clamp: 1;
                        color: var(--text1);
                        font-size: 15px;
                        line-height: 21px;
                        position: relative;
                    }

                    .relevant-topic__exposed {
                        align-items: center;
                        color: var(--text3);
                        display: flex;
                        font-size: 13px;
                        height: 18px;
                        line-height: 18px;
                        margin: 2px 0;

                        span {
                            -webkit-line-clamp: 1;
                            line-clamp: 1;
                        }
                    }
                }
            }
        }
    }
}
</style>
