<template>
    <div class="material-video-card_warp">
        <!-- 骨架屏 -->
        <div class="material-video-card__skeleton" 
         :class="isImgDownLoad ? 
         'hide' : 'loading_animation'">
            <div class="material-video-card-skeleton-cover"></div>
            <div class="material-video-card-skeleton-info">
                <div class="material-video-card-skeleton-item top"></div>
                <div class="bottom">
                    <div class="material-video-card-skeleton-item avatar"></div>
                    <div class="material-video-card-skeleton-item text"></div>
                </div>
            </div>
         </div>
        <div class="material-video-card-main" :style="isImgDownLoad ? '' : 'display: none;'">
            <a  href="" target="_blank" class="img">
                <img src="https://haliyunoss.oss-cn-chengdu.aliyuncs.com/img/carousel/672w_373h_1c-web-home-common-cover.avif" alt="封面" ref="videoCardImg"/>
                <div class="date" style="position: absolute; bottom: 8px; right: 10px; color: #ffffff; font-size: 13px; font-family: 'HarmonyOS_Sans_SC_Medium'; cursor: pointer;">
                    <span style="vertical-align: 3px;">4:45</span>
                </div>
            </a>
            <div class="material-video-info">
                <a  href="" target="_blank">
                    <span class="title">哈喽哈喽弹幕网站素材11111111111111</span>
                </a>
                <a  href="" target="_blank" class="author">
                    <div class="author-avatar">
                        <img src="@/assets/img/defaultAvatar.svg" alt="视频素材提供者头像">
                    </div>
                    <div class="name">
                        <span>必剪</span>
                    </div>
                    <div class="usage">
                        <span>使用量&nbsp;<span>980</span></span>
                    </div>
                </a>
            </div>
        </div>    
    </div>
</template>
<script setup lang="ts">
const imageUrl = 'https://haliyunoss.oss-cn-chengdu.aliyuncs.com/img/carousel/672w_373h_1c-web-home-common-cover.avif';
const isImgDownLoad = ref(false);
onMounted(() => {
    loadImage(imageUrl, () => {
        isImgDownLoad.value = true; // 所有图片加载成功后隐藏骨架屏
        }, (error) => {
        console.error('图片加载失败:', error.message);
        });
    
})

</script>
<style scoped lang="scss">
.material-video-card_warp {
    position: relative;
    width: 100%;
    height: 100%;
}
.material-video-card__skeleton {
    width: 100%;
    height: auto;
    display: block;
    position: relative;
    z-index: 3;
    background-color: #ffffff;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    .material-video-card-skeleton-cover {
        position: relative;
        width: auto; 
        height: 0; 
        border-radius: 4px; 
        display: block;
        padding-top: 56.25%; /* 16:9 = 9 / 16 * 100% = 56.25% */
        overflow: hidden;
    }
    .material-video-card-skeleton-cover::before {
        content: "";
        display: block;
    }

    .material-video-card-skeleton-cover > * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        object-fit: cover; /* 内容会被缩放或裁剪以填充整个容器 */
    }
    .material-video-card-skeleton-info {
        padding-top: 8px; 
        height: 76px;
        box-sizing: border-box;
        .material-video-card-skeleton-item {
            box-sizing: border-box;
            margin-top: 4px;
            margin-bottom: 4px;

        }
        .top {
            width: 98%;
            height: 18px;
            border-radius: 4px;
        }
        .bottom {
            margin-top: 10px;
            display: flex;
            display: -webkit-flex;
            align-items: center;
            .avatar {
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }
            .text {
                margin-left: 10px;
                width: 20%;
                height: 18px;
                border-radius: 4px;
            }
        }
    }

}
.loading_animation {
    .material-video-card-skeleton-cover {
        background: linear-gradient(
            -45deg,
            #F1F2F3 25%,
            #FFFFFF 45%,
            #F1F2F3 65%
        );
        background-size: 400% 100%;
        animation: skeleton-loading 1.2s ease-in-out infinite;
    }
    .material-video-card-skeleton-info { 
        .material-video-card-skeleton-item {
            background: linear-gradient(
                -45deg,
                #F1F2F3 25%,
                #FFFFFF 45%,
                #F1F2F3 65%
            );
            background-size: 400% 100%;
            animation: skeleton-loading 1.2s ease-in-out infinite;
        }
    }
}
.hide {
    visibility: hidden;
    display: none;
}

.material-video-card-main {
    width: 100%;
    height: auto;
    
}
.material-video-card-main .img {
    text-decoration: none;
    display: block;
    position: relative;
    width: 100%; /* 或者指定一个具体的宽度 */
    height: 0; /* 高度设为0，通过padding-top来控制比例 */
    padding-top: 56.25%; /* 16:9比例，9 / 16 * 100% = 56.25% */
    overflow: hidden;
    border-radius: 4px;

    &::before {
        content: "";
        display: block;
    }
}
.material-video-card-main .img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* 内容会被缩放或裁剪以填充整个容器 */
    cursor: pointer;
}
.material-video-card-main .material-video-info {
    margin-top: 8px;
    width: 100%;

    a {
        display: block;
        height: 30px;
        width: 100%;
    }
}
.material-video-card-main .material-video-info .title {
    display: block;
    height: 30px;
    color: #18191c;
    padding-right: 14px;
    font-size: 14px;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #212121;
    max-width: 16em;
    
}
.material-video-card-main .material-video-info .author {
    position: relative;
    justify-content: center;
    font-size: 13px;
    display: block;
    text-decoration: none;
    color: $item-color;
    margin-top: 4px;
    height: 30px;
    cursor: pointer;   

}
.material-video-card-main .material-video-info .author .author-avatar {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    line-height: 30px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
    }
}

.material-video-card-main .material-video-info .author .name {
    position: absolute;
    left: 38px;
    margin-left: 8px;
    line-height: 30px;
    display: inline-block;

    
}    
.material-video-card-main .material-video-info .author .usage {
    position: absolute;
    line-height: 30px;
    display: inline-block;
    right: 0;
}
// 骨架屏动画
@keyframes skeleton-loading {
    0% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0 50%;
    }
}
</style>