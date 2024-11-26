<template>
    <a class="header-history-card header-history-article" href="" target="_blank">
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
        <div class="header-history-article__image">
            <picture class="v-img">
                <source srcset="" type="image/avif">
                <source srcset="" type="image/webp">
                <img src="" alt="" loading="lazy" onload="" onerror="">
            </picture>
        </div>
    </a>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.header-history-article {
    display: flex;
    padding: 10px 20px;
    transition: background-color .3s;

    &:hover {
        background-color: var(--graph_bg_thick);
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

    .header-history-article__image {
        position: relative;
        flex-shrink: 0;
        margin-left: 10px;
        width: 96px;
        height: 72px;
        border-radius: 4px;

        .v-img {
            position: relative;
            flex-shrink: 0;
            margin-right: 10px;
            width: 96px;
            height: 72px;
            border-radius: 4px;
        }
    }
}
</style>