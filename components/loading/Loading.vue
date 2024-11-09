<template>
    <div class="loading_mask">
        <div class="loading_wrp">
            <div class="loading-spinner">
                <span class="loading-area"></span>
            </div>
            <span>登录中....</span>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.loading_mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .1);
    height: 100%;
    width: 100%;
    z-index: 9999;
    overflow-x: auto;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .loading_wrp {
        width: auto;
        height: 34px;
        border-radius: 6px;
        background: hsla(0, 0%, 8%, .6);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        
        .loading-spinner {
            width: 18px;
            height: 18px;
            margin: 0 6px 0 0;

            .loading-area {
                box-sizing: border-box;
                animation: loader 1s infinite linear;
                border-radius: 100%;
                border: 3px solid #ffffff;
                border-left-color: transparent;
                color: transparent;
                display: inline-block;
                line-height: 1.2;
                width: 18px;
                height: 18px;

            }

        }

        span {
            line-height: 34px;
            color: #ffffff;
        }

        // 旋转加载动画
        @keyframes loader {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    }
}
</style>