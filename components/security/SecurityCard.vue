<template>
    <div class="home-card-wp">
        <div type="success" class="home-card-icon"></div>
        <div type="warning-middle" class="home-card-icon"></div>
        <div type="warning-low" class="home-card-icon"></div>
        <div class="home-card-content">
            <div class="home-card-content-title">绑定邮箱</div>
            <div class="home-card-content-info">未绑定邮箱</div>
        </div>
        <div type="warning-middle" class="hom-card-btn">去绑定</div>
        <div type="warning-low" class="hom-card-btn">去设置</div>
        <div type="success" class="hom-card-btn">修改密码</div>
    </div>
</template>
<script lang="ts">
</script>
<style lang="scss" scoped>
.home-card-wp {
    margin-top: 20px;
    position: relative;
    box-sizing: border-box;
    height: 87px;
    background: #fff;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, .06);

    .home-card-icon {
        width: 24px;
        height: 24px;
    }

    .home-card-icon[type="success"] {
        background: url(//s1.hdslb.com/bfs/static/jinkela/account-security-pc/assets/warning_success.png) no-repeat;
        background-size: 100% 100%;
    }

    .home-card-icon[type="warning-middle"] {
        background: url(//s1.hdslb.com/bfs/static/jinkela/account-security-pc/assets/warning_middle.png) no-repeat;
        background-size: 100% 100%;
    }

    .home-card-icon[type="warning-low"] {
        background: url(//s1.hdslb.com/bfs/static/jinkela/account-security-pc/assets/warning_low.png) no-repeat;
        background-size: 100% 100%;
    }

    .home-card-content {
        margin-left: 12px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .home-card-content-title {
            font-family: PingFang SC;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #18191c;
            margin-bottom: 2px;
        }

        .home-card-content-info {
            font-family: PingFang SC;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;
            color: #9499a0;
        }
    }

    .hom-card-btn {
        width: 88px;
        height: 30px;
        box-sizing: border-box;
        text-align: center;
        line-height: 30px;
        font-weight: 400;
        font-size: 14px;
        cursor: pointer;
        border-radius: 15px;
        color: #61666d;
        border: 1px solid #c9ccd0;
    }

    .hom-card-btn[type="warning-middle"] {
        color: #f69;
        border-color: #f69;
    }
}
</style>