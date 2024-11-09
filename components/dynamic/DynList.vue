<template>
    <div class="dyn-list">
        <div class="dyn-list__notification">
            <div class="dyn-list-notification fs-small">
                有新动态，点击查看
            </div>
        </div>
        <div class="dyn-list__items">
            <!-- <div class="dyn-list__item"> -->
                <DynamicDynItem />
                <DynamicDynItem type="video"/>
            <!-- </div> -->
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.dyn-list {
    .dyn-list__notification {
        height: 48px;

        .dyn-list-notification {
            align-items: center;
            background: var(--bg1);
            border-radius: 6px;
            color: var(--brand_blue);
            cursor: pointer;
            display: flex;
            height: 42px;
            justify-content: center;
            letter-spacing: 0;
            line-height: 42px !important;
            position: relative;
            text-align: center;
        }

        .fs-small {
            font-size: 13px;
            line-height: 18px;
        }
    }

    // .dyn-list__items {
    //     .dyn-list__item {
    //         margin-bottom: 8px;
    //     }
    // }
}
</style>
