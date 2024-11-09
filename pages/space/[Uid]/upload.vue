<template>
    <div id="page-video" class="wrapper">
        <div class="col-full">
            <div class="contribution-sidenav">
                <div class="nav-container playlist-container">
                    <div class="contribution-list-container">
                        <ul class="contribution-list">
                            <li class="contribution-item cur" v-for="item in 2" :key="item">
                                <NuxtLink to="" class="router-link text">
                                    视频
                                </NuxtLink>
                                <span class="num">8</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="main-content">
                <NuxtPage />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.wrapper {
    width: 1101px;
    margin: 0 auto;
    position: relative;
    background: #ffffff;
    height: 100%;

    .col-full {
        padding: 0;
        background: #fff;
        box-shadow: 0 0 0 1px #eee;
        border-radius: 4px;
        display: inline-block;
        position: relative;

        .contribution-sidenav {
            position: relative;
            float: left;
            width: 180px;
            margin-right: -1px;
            font-size: 14px;
            color: #222;
            border-right: 1px solid #eee;
            box-sizing: border-box;

            .nav-container {
                .contribution-list-container {
                    position: relative;
                    max-height: 420px;
                    margin: 10px 0 20px;
                    overflow: hidden;

                    .contribution-list {
                        position: relative;

                        .contribution-item {
                            position: relative;
                            padding-left: 30px;
                            transition: background-color .3s ease;
                            white-space: nowrap;
                            font-size: 0;
                            overflow: hidden;

                            .router-link {
                                display: inline-block;
                                line-height: 44px;
                                width: 100px;
                                margin-right: 5px;
                                font-size: 14px;
                                vertical-align: middle;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }

                            .text {
                                color: #000000;
                            }

                            .num {
                                display: inline-block;
                                width: 32px;
                                font-size: 12px;
                                color: #99a2aa;
                                vertical-align: middle;
                                text-align: center;
                                font-family: Arial;
                            }

                        }

                        .cur {
                            background-color: var(--brand_blue);

                            .num {
                                color: #ffffff;
                            }

                            .text {
                                color: #ffffff;
                            }
                        }
                    }
                }
            }
        }

        @media (min-width: 1420px) {
            .main-content {
                width: 1104px !important;
            }
        }

        .main-content {
            float: left;
            width: 921px;
            padding: 20px;
            box-sizing: border-box;
            border-left: 1px solid #eee;

        }
    }
}

@media (min-width: 1420px) {
    .wrapper {
        width: 1283px !important;
    }
}
</style>