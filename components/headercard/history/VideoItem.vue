<template>
    <a class="header-history-card header-history-video" href="" target="_blank">
        <div class="header-history-video__image">
            <picture class="v-img">
                <source srcset="" type="image/avif">
                <source srcset="" type="image/webp">
                <img src="" alt="" loading="lazy" onload="" onerror="">
            </picture>
            <div class="header-history-video__duration">
                <span class="header-history-video__duration--text">10:08/01:10:27</span>
            </div>
            <div class="header-history-video__progress">
                <div class="header-history-video__progress--inner" style="width: 14.3635%; border-radius: 0px;"></div>
            </div>
        </div>
        <div class="header-history-card__info">
            <div title="现代化CSS方案与Vite的完美结合" class="header-history-card__info--title">现代化CSS方案与Vite的完美结合</div>
            <div class="header-history-card__info--date">
                <svg-icon class="device-icon" name="device-pc" v-if="true"></svg-icon>
                <svg-icon class="device-icon" name="device-mobile" v-else></svg-icon>
                <span>今天 11:08</span>
            </div>
            <div class="header-history-card__info--name" title="程序媛小糖">
                <IconsVideocardUp />
                <span>程序媛小糖</span>
            </div>
        </div>
    </a>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.header-history-video {
    display: flex;
    padding: 10px 20px;
    transition: background-color .3s;

    &:hover {
        background-color: var(--graph_bg_thick);
    }

    .header-history-video__image {
        .header-history-video__duration {
            position: absolute;
            right: 4px;
            bottom: 4px;
            padding: 0;
            border-radius: 2px;
            background: rgba(0, 0, 0, .4);
            line-height: 17px;

            .header-history-video__duration--text {
                display: inline-block;
                color: #fff;
                font-size: 12px;
                line-height: 14px;
                transform: scale(.85);
                transform-origin: center top;
            }
        }

        .header-history-video__progress {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 3px;
            border-radius: 0 0 4px 4px;
            background: rgba(0, 0, 0, .7);

            .header-history-video__progress--inner {
                position: absolute;
                bottom: 0;
                height: 3px;
                background: var(--brand_pink);
            }
        }
    }

    .header-history-card__info {
        display: flex;
        flex: 1 auto;
        flex-direction: column;
        justify-content: space-between;

        .header-history-card__info--title {
            margin-bottom: 4px;
            height: 36px;
            color: var(--text1);
            font-size: 14px;
            line-height: 18px;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            text-overflow: -o-ellipsis-lastline;
            text-overflow: ellipsis;
            word-break: break-word !important;
            word-break: break-all;
            line-break: anywhere;
            -webkit-line-clamp: 2;
            line-clamp: 2;
        }

        .header-history-card__info--date {
            .icon-device-mobile {
                width: 16px;
                height: 16px;
            }

            .icon-device-pc {
                width: 16px;
                height: 16px;
            }

            .device-icon {
                margin-right: 3px;
            }
        }

        .header-history-card__info--name {
            .icon-up {
                width: 16px;
                height: 16px;
                fill: var(--text3);
            }

            span {
                display: inline-block;
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                text-overflow: -o-ellipsis-lastline;
                text-overflow: ellipsis;
                word-break: break-word !important;
                word-break: break-all;
                line-break: anywhere;
                -webkit-line-clamp: 1;
                line-clamp: 1;
            }
        }

        .header-history-card__info--date,
        .header-history-card__info--name {
            display: flex;
            align-items: center;
            color: var(--text3);
            font-size: 12px;
            line-height: 16px;
        }
    }
}

.header-history-video__image,
.header-history-video__image .v-img {
    position: relative;
    flex-shrink: 0;
    margin-right: 10px;
    width: 128px;
    height: 72px;
    border-radius: 4px;
}
</style>