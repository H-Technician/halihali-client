<template>
    <div class="video-upload">
        <!-- 导航栏 -->
        <div class="upload-tabs" :style="selectedVideo ? 'display: none' : ''">
            <ul>
                <li v-for="item in tabList" @click="activeUploadTab(item.path)"
                    :class="isActiveUploadTab === item.path ? 'is_active' : ''">
                    {{ item.name }}
                </li>
            </ul>
        </div>
        <!-- 选择文件界面 -->
        <div class="upload-body-container" :style="selectedVideo || isUploadVideoComplete ? 'display: none;' : ''">
            <div class="upload-wrp">
                <div class="video-input">
                    <div class="video-input-wrapper" @dragover.prevent @dragenter.prevent @dragleave.prevent
                        @drop.prevent @drop="handleDrop" @click="selectVideo">
                        <IconsPlatformUpload class="upload-icon" />
                        <div class="upload-tips-text">拖拽到此处也可上传</div>
                        <div class="upload-btn">上传视频</div>
                        <div class="upload-audit">
                            <span>当前审核队列</span>
                            <button
                                style="height: 24px; width: 40px; background-color: #45818e; border-radius: 2px; border: none; margin-left: 6px; color: #ffffff; font-family: 'HarmonyOS_Sans_SC_Medium'; cursor: pointer;">快速</button>
                        </div>
                        <input type="file" ref="videoInput" @change="handleVideoChange" style="display: none;">
                    </div>
                </div>
            </div>
            <div class="footer-item">
                <span class="i-list i-1">
                    <a target="_blank" class="title">禁止发布的视频内容</a>
                </span>
                <span class="i-list i-1">
                    <span class="title">视频大小</span>
                    <span class="title-block">
                        <span>网页端上传的文件大小上限为4G</span><br>
                        <span>视频内容时长最大4小时</span><br>
                    </span>
                </span>
                <span class="i-list i-1">
                    <span class="title">视频格式</span>
                    <span class="title-block">
                        <span>网页端、桌面客户端推荐上传的格式为：mp4</span><br>
                        <span>（推荐上传的格式在转码过程更有优势，审核过程更快哦！）</span><br>
                        <span>其他允许上传的格式：mp4，mov，mkv，m4v</span>
                    </span>
                </span>
                <span class="i-list i-1">
                    <span class="title">视频码率</span>
                    <span class="title-block">
                        <span>分辨率最大支持 3840*2160</span><br>
                        <span>推荐视频分辨率：1920*1080或者1280*720</span><br>
                        <span>推荐视频码率：1080p大于6000kbps；4k大于20000kbps；</span><br>
                        <span>网站提供转码、压制服务</span><br>
                        <span>音频采样率48000Hz</span><br>
                        <span>推荐音频码率：320kbps</span>
                    </span>
                </span>
            </div>
            <div class="footer-item">
                <span>上传视频，即表示您已同意
                    <a target="_blank">哈哩哈哩使用协议</a>
                    与
                    <a target="_blank">哈哩哈哩社区公约</a>
                    ，请勿上传色情，反动等违法视频。
                </span>
            </div>
            <div class="footer-item">
                <span class="i-list">第三方工具</span>
                <span class="i-list i-2">
                    <IconsDownload class="download-tool" />
                    <a class="zip" href="">视频压制工具</a>
                </span>
            </div>
        </div>
        <!-- 填写投稿信息界面 -->
        <div class="upload-video-basic-wrap" :style="selectedVideo ? '' : 'display: none;'">
            <div class="video-basic">
                <div class="video-upload">
                    <div class="upload-header">
                        <div class="upload-header-top">
                            <span class="upload-header-top-text">发布视频</span>
                        </div>
                    </div>
                    <div class="upload-queue">
                        <div class="task-list video-upload">
                            <div class="task-list-content" v-if="true">
                                <div class="task-list-content-item" v-for="(item, index) in uploadVideList"
                                    :key="index">
                                    <div class="task" :class="index === upVideoIndex ? ' task-selected' : ''"
                                        @click="selectedUpladVideo(index)">
                                        <div class="task-title">
                                            <div class="task-title-text">{{
                                                item.videoFileData.videoName.toString().replace(/\.[^\.]+$/, "") }}
                                            </div>
                                        </div>
                                        <div class="task-status"
                                            :class="item.videoFileData.isComplete ? 'task-status-success' : ''">
                                            <svg-icon name="selected" color="#43ce5b"
                                                :style="item.videoFileData.isComplete ? '' : 'display: none;'"></svg-icon>
                                            <span>{{ item.videoFileData.isComplete ? '上传完成' : '上传中...' }}</span>
                                        </div>
                                        <div class="task-delete" v-if="uploadVideList.length > 1">
                                            <Popconfirm :arrow="false"
                                                :popconfirmStyle="{ width: '160px', transform: 'translateY(50%)' }"
                                                description="确定要删除吗？" @ok="removeVideo(index)">
                                                <svg-icon name="close" color="#ffffff"></svg-icon>
                                            </Popconfirm>
                                        </div>
                                    </div>
                                </div>
                                <div class="task-list-content-btn" @click="addVideo">
                                    <svg-icon name="plus" color="#61666d"></svg-icon>
                                    <span>添加视频</span>
                                </div>
                                <!-- 用于添加视频 -->
                                <input type="file" ref="videoAddInput" @change="handleVideoAddChange"
                                    style="display: none;">
                            </div>
                            <div class="file-list">
                                <div class="drag-list">
                                    <div class="file-item">
                                        <IconsPlatformVideoFile class="file-item-icon" />
                                        <div class="file-item-content">
                                            <div class="file-item-content-detail">
                                                <div class="file-item-content-text" v-if="uploadVideList[upVideoIndex]">
                                                    <div class="title">{{
                                                        uploadVideList[upVideoIndex].videoFileData.videoName.toString().replace(/\.[^\.]+$/,
                                                            "") }}</div>
                                                    <div class="file-block-status-text"
                                                        v-if="!uploadVideList[upVideoIndex].videoFileData.isComplete">
                                                        <span class="process">已经上传：{{
                                                            (uploadVideList[upVideoIndex].videoFileData.uploadVideoSize
                                                                / (1024
                                                                    * 1024)) >= 1024 ?
                                                                (uploadVideList[upVideoIndex].videoFileData.uploadVideoSize
                                                                    / (1024
                                                                        * 1024 * 1024)).toFixed(2) :
                                                                (uploadVideList[upVideoIndex].videoFileData.uploadVideoSize / (1024
                                                                    * 1024)).toFixed(1) }}
                                                            {{
                                                                (uploadVideList[upVideoIndex].videoFileData.uploadVideoSize
                                                                    / (1024
                                                            * 1024)) >= 1024 ? 'GB' : 'MB' }}
                                                            /
                                                            {{
                                                                (uploadVideList[upVideoIndex].videoFileData.videoSize /
                                                                    (1024
                                                                        * 1024)) >= 1024 ?
                                                                    (uploadVideList[upVideoIndex].videoFileData.videoSize /
                                                                        (1024
                                                                            * 1024 * 1024)).toFixed(2) :
                                                                    (uploadVideList[upVideoIndex].videoFileData.videoSize / (1024
                                                                        * 1024)).toFixed(2) }}
                                                            {{
                                                                (uploadVideList[upVideoIndex].videoFileData.videoSize /
                                                                    (1024
                                                            * 1024)) >= 1024 ? 'GB' : 'MB' }}
                                                        </span>
                                                        <span class="process time">当前速度：{{
                                                            (uploadVideList[upVideoIndex].videoFileData.uploadSpeed /
                                                                (1024
                                                            * 1024)).toFixed(1) }}MB/S</span>
                                                        <span class="process time">剩余时间：{{
                                                            uploadVideList[upVideoIndex].videoFileData.uploadRemainingTime
                                                                > 60
                                                                ?
                                                                `${Math.floor(uploadVideList[upVideoIndex].videoFileData.uploadRemainingTime
                                                                    /
                                                                    60)}分${(uploadVideList[upVideoIndex].videoFileData.uploadRemainingTime
                                                                        % 60).toFixed(0)}秒`
                                                                :
                                                                `${uploadVideList[upVideoIndex].videoFileData.uploadRemainingTime.toFixed(0)}秒`
                                                        }}</span>
                                                    </div>
                                                    <div class="file-block-status-text"
                                                        v-if="uploadVideList[upVideoIndex].videoFileData.isComplete">
                                                        <IconsSuccessFilled class="icon-successfilled" />
                                                        <span class="status-text">{{
                                                            uploadVideList[upVideoIndex].videoFileData.isMergeStatus
                                                            }}</span>
                                                    </div>
                                                </div>
                                                <div class="file-item-content-operate"
                                                    v-if="uploadVideList[upVideoIndex]">
                                                    <div class="file-block-status-manage file-block-status-manage-refresh"
                                                        v-if="!uploadVideList[upVideoIndex].videoFileData.isComplete">
                                                        <span class="process percentage">{{
                                                            uploadVideList[upVideoIndex].videoFileData.progress
                                                            }}%</span>
                                                        <IconsPlatformSuspend class="file-block-status-manage-icon"
                                                            @click="pauseUpload"
                                                            v-if="!uploadVideList[upVideoIndex].videoFileData.isPauseUpload" />
                                                        <!-- 暂停 -->
                                                        <IconsPlatformPlay class="file-block-status-manage-icon"
                                                            @click="pauseUpload" v-else />
                                                        <!-- 继续 -->
                                                        <IconsPlatformRefreshSmall class="file-block-status-manage-icon"
                                                            @click="refreshUpload" />
                                                    </div>
                                                    <div class="file-block-status-manage file-block-status-manage-refresh"
                                                        @click="refreshVideo" v-else>
                                                        <IconsPlatformRefresh class="file-block-status-manage-icon" />
                                                        <span class="success">更换视频</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="file-item-content-progress" v-if="uploadVideList[upVideoIndex]">
                                                <div class="file-progress-inner"
                                                    :class="uploadVideList[upVideoIndex].videoFileData.isComplete ? 'success-bg' : 'doing-bg'"
                                                    :style="`width: ${uploadVideList[upVideoIndex].videoFileData.progress}%;`">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 投稿信息 -->
                <div class="upload-form">
                    <div class="form-title">基本设置</div>
                    <!-- 封面 -->
                    <div class="form-item">
                        <div class="cover">
                            <div class="section-title-container section-title">
                                <p class="section-title-deg">
                                    <span>*</span>
                                </p>
                                <span class="section-title-content-main">封面</span>
                            </div>
                            <div class="cover-content">
                                <div class="cover-upload" v-if="uploadVideList[upVideoIndex]
                                    && uploadVideList[upVideoIndex].coverData.coverUrls.length > 0">
                                    <div class="img"
                                        :style="`background: url(${uploadVideList[upVideoIndex].coverData.coverSelectedUrl}) center center / cover no-repeat rgb(244, 245, 247);`">
                                    </div>
                                    <div class="cover-upload-mask-btn cover-upload-mask">
                                    </div>
                                    <div class="cover-upload-mask-btn">
                                        <span @click="changeCover">更改封面</span>
                                        <!-- <span>封面模板</span> -->
                                    </div>
                                </div>
                                <div class="bcc-upload upload" v-else>
                                    <div class="bcc-upload-mask-btn" @click="selectCover">
                                        <IconsPlus class="upload-mask-btn-icon" />
                                        <span>上传封面</span>
                                        <input type="file" ref="coverInput" @change="handleCoverChange"
                                            style="display: none;">
                                    </div>
                                </div>
                                <div class="cover-preview"
                                    v-if="uploadVideList[upVideoIndex] && uploadVideList[upVideoIndex].coverData.coverUrls.length > 0">
                                    <div class="cover-preview-des">
                                        系统默认选中第一帧为视频封面，以下为更多智能推荐封面
                                    </div>
                                    <div class="cover-preview-list">
                                        <div class="cover-preview-item" :class="uploadVideList[upVideoIndex].coverData.coverUrls[index]
                                            === uploadVideList[upVideoIndex].coverData.coverSelectedUrl
                                            ? 'cover-preview-item-selected'
                                            : ''"
                                            v-for="(item, index) in uploadVideList[upVideoIndex].coverData.coverUrls"
                                            @click="selectedCover(index)"
                                            :style="`background: url(${item}) center center / cover no-repeat rgb(244, 245, 247);`">
                                            <div class="cover-preview-item-selected-mask" v-if="uploadVideList[upVideoIndex].coverData.coverUrls[index]
                                                === uploadVideList[upVideoIndex].coverData.coverSelectedUrl">
                                                <IconsPlatformSelect style=" width: 20px; 
                                                height: 20px; 
                                                position: absolute; 
                                                top: calc(50% - 10px); 
                                                left: calc(50% - 10px); 
                                                fill: #00aeec;" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 标题 -->
                    <div class="form-item-title">
                        <div class="section-title-container section-title">
                            <div class="section-title">
                                <span class="section-title-deg">*</span>
                                <span class="section-title-main">标题</span>
                            </div>
                            <Hinput class="section-title-input" v-if="uploadVideList[upVideoIndex]" :maxlength="80"
                                :showCount="true" placeholder="请输入稿件标题"
                                v-model="uploadVideList[upVideoIndex].videoFromData.title" />
                        </div>
                    </div>
                    <!-- 类型 -->
                    <div class="form-item-type">
                        <div class="section-type-container section-type">
                            <div class="section-type">
                                <span class="section-type-deg">*</span>
                                <span class="section-type-main">类型</span>
                            </div>
                            <Radio 
                             v-if="uploadVideList[upVideoIndex]"
                            :options="typeOptions"
                            v-model:value="uploadVideList[upVideoIndex].videoFromData.type" />
                        </div>
                    </div>
                    <!-- 分区 -->
                    <div class="form-item-category">
                        <div class="section-category-container section-category">
                            <div class="section-category">
                                <span class="section-category-deg">*</span>
                                <span class="section-category-main">分区</span>
                            </div>
                            <div class="section-category-select-box">
                                <CategoryselectCategorySelect @SelectCategory="SelectCategory" />
                            </div>
                        </div>
                    </div>
                    <!-- 标签 -->
                    <div class="form-item-tag">
                        <div class="section-tag-container-warp section-tag">
                            <div class="section-tag">
                                <span class="section-tag-deg">*</span>
                                <span class="section-tag-main">标签</span>
                            </div>
                            <div class="section-tag-container">
                                <TaginputTagInput :sendTag="sendTag" @updateTags="updateTags" />
                            </div>
                        </div>
                        <!-- 推荐标签 -->
                        <div class="tag-wrp" v-if="rcmTags.length !== 0">
                            <p class="tag-label">推荐标签:</p>
                            <div class="tag-list">
                                <div class="hot-tag-container"
                                    :class="tags.findIndex(curr => curr == item) != -1 ? 'isTagSelected' : ''"
                                    @click="sendTag = item" v-for="(item, index) in rcmTags" :key="index">
                                    <div class="hot-tag-item">
                                        <span>{{ item }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tag-wrp" v-if="rcmTags.length !== 0">
                            <p class="tag-label">参与话题:</p>
                            <div class="tag-list">
                                <div class="hot-tag-container"
                                    :class="tags.findIndex(curr => curr == item) != -1 ? 'isTagSelected' : ''"
                                    @click="sendTag = item" v-for="(item, index) in rcmTags" :key="index">
                                    <div class="hot-tag-item">
                                        <IconsPlatformTopic class="icon-topic" />
                                        <span>{{ item }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 简介 -->
                    <div class="form-item-descr">
                        <div class="section-descr-container section-descr">
                            <div class="section-descr">
                                <span class="section-descr-main">简介</span>
                            </div>
                            <Editor v-if="uploadVideList[upVideoIndex]" height="158px"
                                placeholder="填写更全面的相关信息，让更多的人能找到你的视频吧(:"
                                v-model:model-value="uploadVideList[upVideoIndex].videoFromData.descr" />
                        </div>
                    </div>
                    <!-- 定时发布 -->
                    <div class="form-item-timed" :class="scheduled ? 'is-timed' : ''">
                        <div class="section-timed-container-warp">
                            <div class="section-timed">
                                <span class="section-timed-main">定时发布</span>
                            </div>
                            <div class="section-timed-container">
                                <div class="section-timed-switch">
                                    <div class="switch-box">
                                        <Switch class="section-switch" v-model="scheduled" />
                                    </div>
                                    <span class="timed-switch-wrp-text">
                                        (当前+2小时 ≤ 可选时间 ≤ 当前+15天，花火稿件使用定时发布不支持修改/取消)
                                    </span>
                                </div>
                                <div class="time-picker">
                                    <div class="d-time-container">
                                        <div class="d-time-date-picker-wrp">
                                            <DatepickerDatePicker 
                                            placeholder="请选择日期" 
                                            v-model="dateValue" 
                                            show-today 
                                            format="yyyy-MM-dd" 
                                            />
                                            <DatepickerDatePicker
                                            placeholder="请选择时间"
                                            v-model="timeValue"
                                            mode="time"
                                            show-time
                                            mode-height="120"
                                            format="HH:mm"
                                            :width="120"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 加入合集 -->
                    <div class="form-item-season">
                        <div class="section-season-container-warp">
                            <div class="section-season">
                                <span class="section-season-main">加入合集</span>
                            </div>
                            <div class="section-season-container">
                                <div class="video-season-text">合集功能可用于收集整理系列性稿件</div>
                                <div class="video-season-button" @click="showCollection">
                                    <IconsPlus class="icon-season-plus" />添加集合
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-title" @click="isSettingMore = !isSettingMore">
                        更多设置
                        <span>（含声明与权益、视频元素、互动管理等）</span>
                        <IconsArrowDownBold class="icon-arrowdown" style="transition:transform 0.3s linear;"
                            :style="[{ transform: isSettingMore ? 'rotate(180deg)' : '' }]" />
                    </div>
                    <div class="video-setting-more" v-show="isSettingMore">
                        <div class="setting-card video-setting-card">
                            <div class="video-setting-title">
                                <span>声明与权益</span>
                            </div>
                            <div class="video-setting-content">
                                <div class="setting-label">
                                    <span class="setting-label-main" style="margin-right: 37px;">自制声明</span>
                                    <input type="checkbox" class="bcc-checkbox-checkbox">
                                    <span class="setting-label-main setting-text" style="margin-left: 10px;">未经作者授权
                                        禁止转载</span>
                                </div>
                                <div class="setting-label">
                                    <span class="setting-label-main" style="margin-right: 24px;">创作者声明</span>
                                    <div class="auth-select-box">
                                        <Select @SelectAuth="SelectAuth"></Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="setting-card video-setting-card">
                            <div class="video-setting-title">
                                <span>视频元素</span>
                            </div>
                            <div class="video-setting-content video-card_el">
                                <div class="setting-label">
                                    <span class="setting-label-main" style="margin-right: 37px;">卡片设置</span>
                                    <div class="button-blueLine" @click="isShowInteractiveCard = !isShowInteractiveCard">
                                        <IconsPlus class="icon-setting-plus" />个性化设置
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="setting-card video-setting-card">
                            <div class="video-setting-title">
                                <span>互动管理</span>
                            </div>
                            <div class="video-setting-content video-card_manage">
                                <div class="setting-label">
                                    <span class="setting-label-main" style="margin-right: 37px;">互动设置</span>
                                    <input type="checkbox" class="bcc-checkbox-checkbox">
                                    <span class="setting-label-main setting-text">关闭弹幕</span>
                                    <input type="checkbox" class="bcc-checkbox-checkbox">
                                    <span class="setting-label-main setting-text">关闭评论</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-item-submit">
                        <div class="submit-container submit-draft" @click="submitDraft">
                            <span>存草稿</span>
                        </div>
                        <div class="submit-container submit-publish" @click="submit">
                            <span>立即投稿</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 投稿完成 -->
        <div class="video-complete-wrap" :style="{ display: isUploadVideoComplete ? 'block' : 'none' }">
            <div class="video-complete-container">
                <div class="content-wrapper">
                    <div class="bg"></div>
                    <div class="step-des">
                        稿件投递成功
                    </div>
                    <div class="op-buttons">
                        <div class="left-wrapper">
                            <button class="btn-left">
                                <span>查看稿件</span>
                            </button>
                        </div>
                        <div class="right-wrapper">
                            <button class="btn-right">
                                <span>再投一个</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <video id="video" muted crossorigin="anonymous" ref="uploadVideoElement"></video>
        <canvas id="canvas" ref="canvasElement"></canvas>
        <!-- 封面裁剪弹层 -->
        <DialogDiaLog :showDialog="isShowChangeCover" @isShowDialog="isShowDialogEmit" width="800">
            <template #content>
                <CropperComp v-if="isShowChangeCover" :videoFile="uploadVideList[upVideoIndex]
                    ? uploadVideList[upVideoIndex].videoFileData.file as File
                    : undefined" @CropperCover="cropperCoverChang" />
            </template>
        </DialogDiaLog>
        <!-- 合集弹层 -->
        <DialogDiaLog :showDialog="isShowCollection" @isShowDialog="isShowCollectionEmit" width="600">
            <template #content>
                <span>集合弹层</span>
            </template>
        </DialogDiaLog>
        <!-- 个性互动卡片添加弹层 -->
        <DialogDiaLog  width="1060" :showDialog="isShowInteractiveCard" @isShowDialog="isShowInteractiveCardEmit">
            <template #content>
                <PlatformCardUploadVideoCard :file="uploadVideList[upVideoIndex].videoFileData.file" v-if="uploadVideList" />
            </template>
        </DialogDiaLog>
    </div>
</template>
<script setup lang="ts">
import type {
    FileChunk,
    UploadProgress,
    UploadBase64Cover,
    UploadVideo,
    VideoData,
    UploadChunkData
} from '@/types/upload';
import {
    getChunkApi,
    uploadChunkApi,
    chunkMergeApi,
    uploadCoverBase64Api,
    contributeVideoApi,
    draftVideoApi
} from '@/api/upload';
import { imgBlob } from '@/utils/imgBlob';
import { calculateBlobMD5 } from '@/utils/md5';
import Popconfirm from '@/components/popconfirm/hl-Popconfirm.vue';
import Hinput from '@/components/input/H-input.vue';
import Message from '@/components/message/Message';
import type { Radio } from '@/types/radio';

import { format } from 'date-fns'
// 获取路由实例
const router = useRouter();
const videoInput = ref<HTMLInputElement | null>(null); // 视频上传input
const coverInput = ref<HTMLInputElement | null>(null); // 封面上传input
const uploadVideoElement = ref<HTMLVideoElement | null>(null); // 原生video元素,用于播放视频截取封面图片
const videoAddInput = ref<HTMLInputElement | null>(null); // 添加视频input
const canvasElement = ref<HTMLCanvasElement | null>(null); // canvas元素
const isActiveUploadTab = ref('/platform/upload/video/frame');
// let chunkSize = 1024 * 1024 * 5; // 分片的大小
let chunkSize = 1024 * 1024; // 分片的大小
let timeWindow = 500; // 上传速度更新间隔 单位ms
const auth = ref(''); // 创作声明
const scheduled = ref(false); // 是否定时发布
const sendTag = ref(''); // 选中标签
const tags = ref<string[]>([]); // 标签
const rcmTags = ref(['学习', '生活', '记录', '娱乐', '幽默', '万恶之源', '搞笑', '记录', '原神', '吐槽', '新人', '直播', '原创']); // 初始化推荐标签
const updateTags = (updateTags: string[]) => { // 更新标签列表/选择标签回调
    tags.value = updateTags;
};
const categoryId = ref(1); // 初始分类id
const subCategoryId = ref(81); // 初始化子分类id
const selectedVideo = ref(false); // 是否选择视频
const isSettingMore = ref(false); // 是否显示更多设置
const isShowChangeCover = ref(false) // 是否显示更换封面弹层
const isShowCollection = ref(false) // 是否显示收藏弹层
const isShowInteractiveCard = ref<boolean>(false); // 是否显示互动卡片弹层
const uploadVideList = ref<VideoData[]>([]); // 待上传视频列表
const upVideoIndex = ref<number>(0); // 当前上传视频索引
const abortControllerList = ref(new Map<string, AbortController>());

const dateValue = ref(format(new Date(), 'yyyy-MM-dd'));
const typeOptions = ref<Radio[]>([
    {
        label: '自制',
        value: 1
    },
    {
        label: '转载',
        value: 2
    }
]);

const timeValue = ref({
  hours: new Date().getHours(),
  minutes: new Date().getMinutes()
});
// 从数组中移除视频
const removeVideo = async (index: number) => {
    if (index === uploadVideList.value.length - 1) {
        // upVideoIndex.value = index - 1;
        abortControllerList.value.delete(uploadVideList.value[index].videoFileData.abortControllerId);
        uploadVideList.value.splice(index, 1);
        setTimeout(async () => {
            upVideoIndex.value = uploadVideList.value.length > 0 ? index - 1 : 0;
            await checkCoverUrls(upVideoIndex.value);
        }, 0)
    } else {
        abortControllerList.value.delete(uploadVideList.value[index].videoFileData.abortControllerId);
        uploadVideList.value.splice(index, 1);
        await checkCoverUrls(index);
    }
}
// 检查是否已经截取封面图片
const checkCoverUrls = async (index: number) => {
    if (uploadVideList.value[index] &&
        (uploadVideList.value[index].coverData.coverUrls.length !== 4
            || uploadVideList.value[index].coverData.coverSelectedUrl === '')) {
        uploadVideList.value[index].coverData.coverUrls = [];
        uploadVideList.value[index].coverData.coverSelectedUrl = '';
        await initCover(uploadVideList.value[index].videoFileData.url, 4, index);
    }
}

// 选中上传正在上传的视频
const selectedUpladVideo = async (index: number) => {
    upVideoIndex.value = index;
    await checkCoverUrls(index);
}

// 生成唯一 ID
const generateUniqueId = (): string => {
    return crypto.randomUUID();
}
const isUploadVideoComplete = ref(false);
// 创建一个函数，用于处理图片
const handleShowImage = (blob: Blob | undefined) => {
    if (!blob) return '';
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
};
// 选择顶部tab栏
const activeUploadTab = (routerPath: string) => {
    if (isActiveUploadTab.value !== routerPath) {
        router.push(routerPath);
        isActiveUploadTab.value = routerPath;
    }
};
// 点击选择上传视频文件
const handleVideoChange = async (event: Event) => {
    if (!event.target) return; // 添加类型断言
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) return;
    const file = fileInput.files[0];
    if (file.size > 1024 * 1024 * 1024 * 4) {
        Message.warning('视频大小不能超过4GB');
        clearFileInput();
        return;
    }
    await uploadVideoChunks(file, false);

};

const handleCoverChange = () => {

}

// 点击添加视频
const addVideo = () => {
    if (videoAddInput.value) {
        clearAddVideInput();
        videoAddInput.value.click();
    }
};

// 添加视频
const handleVideoAddChange = async (event: Event) => {
    if (!event.target) return; // 添加类型断言
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) return;
    const file = fileInput.files[0];
    if (file.size > 1024 * 1024 * 1024 * 4) {
        Message.warning('视频大小不能超过4GB');
        clearFileInput();
        return;
    }
    await uploadVideoChunks(file, true);
};

// 拖拽上传文件
const handleDrop = async (event: DragEvent) => {
    event.preventDefault();
    if (!event.dataTransfer || !event.dataTransfer.files.length) return; // 添加类型断言
    const file = event.dataTransfer.files[0];
    if (file.size > 1024 * 1024 * 1024 * 4) {
        Message.warning('视频大小不能超过4GB');
        clearFileInput();
        return;
    }
    await uploadVideoChunks(file, false);
};

// 选择视频
const selectVideo = () => {
    if (videoInput.value) {
        clearFileInput();
        videoInput.value.click();
    }
};
// 选择视频封面
const selectCover = () => {
    if (coverInput.value) {
        coverInput.value.click();
    }
};
// 选中系统默认的图片
const selectedCover = async (index: number) => {
    uploadVideList.value[upVideoIndex.value].coverData.coverSelectedUrl =
        uploadVideList.value[upVideoIndex.value].coverData.coverUrls[index];
}
// 判断视频文件格式类型
const isVideoFile = (file: File): boolean => {
    const videoExtensions = ['mp4', 'm4v', 'mkv', 'mov']; // 支持的视频文件扩展名
    const fileExtension = file.name.toLowerCase().split('.').pop(); // 获取文件扩展名并转换为小写
    if (!fileExtension) {
        return false;
    }
    return videoExtensions.includes(fileExtension);
};

// 计算分片数量
const calculateChunkCount = (file: File, chunkSize: number): number => {
    // 计算分片数量，使用向上取整确保所有数据都被包含
    return Math.ceil(file.size / chunkSize);
}

// 获取文件信息并准备上传
const uploadVideoChunks = async (file: File, isAdd: boolean) => {
    const isVideo = isVideoFile(file);
    if (isVideo) {
        const index = init(file, isAdd); // 初始化上传视频列表并返回上传视频列表索引
        if (!selectedVideo.value) {
            selectedVideo.value = true;
        }
        abortControllerList.value.set(uploadVideList.value[index].videoFileData.abortControllerId, new AbortController());
        // 初始化内容
        if (index === upVideoIndex.value) {
            await initCover(uploadVideList.value[index].videoFileData.url, 4, index); // 获取视频封面
        }
        const data: UploadChunkData = {
            chunkSize: chunkSize,
            filename: uploadVideList.value[index].videoFileData.videoName, // 文件名
            totalChunks: uploadVideList.value[index].videoFileData.numberChunks, // 分片总数
            totalSize: uploadVideList.value[index].videoFileData.videoSize, // 文件大小
            success: null
        };
        const response = await getChunkApi(data);
        if (response.code === 200) {
            const resData = response.data as FileChunk
            if (resData.skipUpload) {
                uploadVideList.value[index].videoFileData.identifier = resData.identifier
                uploadVideList.value[index].videoFileData.isComplete = true;
                uploadVideList.value[index].videoFileData.progress = 100;
                uploadVideList.value[index].videoFileData.isMergeStatus = "视频上传成功";
                return;
            } else if (resData.uploaded && !resData.skipUpload) {
                uploadVideList.value[index].videoFileData.identifier = resData.identifier; // 获取上传标识符
                uploadVideList.value[index].videoFileData.uploaded = resData.uploaded;
                await continueUpload(index);
                return;
            }
            uploadVideList.value[index].videoFileData.identifier = resData.identifier;
            await uploadChunks(
                uploadVideList.value[index].videoFileData.file,
                uploadVideList.value[index].videoFileData.numberChunks,
                chunkSize,
                resData.identifier,
                index);
        }
    } else {
        Message.error('请选择正确的视频文件');
        clearFileInput();
    }
};
// 分片上传
const uploadVideo = async (
    chunkFile: Blob,  // 分片文件
    identifier: string, // 文件唯一标识符（MD5）
    numberOfChunks: number, // 当前分片索引
    totalChunks: number, // 分片总数
    totalSize: number, // 文件总大小
    filename: string, // 文件名
    signal: AbortSignal, // AbortSignal实例
) => {
    return new Promise(async (resolve, reject) => {
        try {
            const formData = new FormData();
            formData.append('identifier', identifier); // 文件唯一标识符（MD5）
            formData.append('chunkNumber', numberOfChunks.toString()); // 当前分片索引
            formData.append('file', chunkFile); //分片文件
            formData.append('totalChunks', totalChunks.toString());  // 分片总数
            formData.append('totalSize', totalSize.toString());    // 文件总大小
            formData.append('filename', filename);     // 文件名
            const response = await uploadChunkApi(formData, signal);
            if (response.code === 200 && response.data === "ok") {
                resolve(response.data);
            }
        } catch (error) {
            reject(error);
        }

    });
};

// 清除文件输入的值
const clearFileInput = () => {
    if (videoInput.value) {
        videoInput.value.value = ''; // 清除文件输入框的值
    }
};
const clearAddVideInput = () => {
    if (videoAddInput.value) {
        videoAddInput.value.value = '';
    }
};
// 计算文件上传进度
const calculateSpeedAndRemainingTime = (progress: UploadProgress): { speed: number, remainingTime: number } => {
    const elapsedTime = performance.now() - progress.startTime; // 单位：毫秒
    let speed = 0;
    if (elapsedTime >= timeWindow) {
        speed = (progress.bytesUploadedInWindow / elapsedTime) * 1024; // 转换为字节/秒
        uploadVideList.value[upVideoIndex.value].videoFileData.uploadProgress.bytesUploadedInWindow = 0;
        uploadVideList.value[upVideoIndex.value].videoFileData.uploadProgress.startTime = performance.now();
    } else {
        speed = uploadVideList.value[upVideoIndex.value].videoFileData.uploadSpeed;
    }
    const remainingBytes = progress.totalSize - progress.bytesUploaded;
    let remainingTime = 0;
    if (speed !== 0) {
        remainingTime = Math.ceil((remainingBytes / speed) * 10) / 10; // 剩余时间，向上取整为秒
    }
    return { speed, remainingTime };
}
// 更换视频
const refreshVideo = () => {
    selectVideo();

}

// 初始化封面，并截取视频中的几张图片
const initCover = async (url: string, totalFramesToCapture: number, index: number) => {
    if (!uploadVideoElement.value || !canvasElement.value) return;
    uploadVideoElement.value.src = url;
    uploadVideoElement.value.onloadedmetadata = async () => {
        if (!uploadVideoElement.value || !canvasElement.value) return;
        const videoDuration: number = uploadVideoElement.value.duration; // 视频总时长
        uploadVideList.value[index].videoFileData.duration = videoDuration;
        if (isNaN(videoDuration)) {
            return; // 获取时长失败
        }
        // 去掉视频的头尾各5秒
        const effectiveDuration = Math.max(0, videoDuration - 8);

        // 计算每张截图之间的时间间隔，确保在有效时间段内均匀分布
        const intervalTime = effectiveDuration / totalFramesToCapture;
        let currentTime = intervalTime; // 从第4秒开始截图
        // 设置 canvas 宽高
        canvasElement.value.height = uploadVideoElement.value.videoHeight;
        canvasElement.value.width = uploadVideoElement.value.videoWidth;
        const context = canvasElement.value.getContext('2d')!;
        for (let i = 0; i < totalFramesToCapture; i++) {
            await new Promise<void>(resolve => {
                if (!uploadVideoElement.value || !canvasElement.value) return;
                uploadVideoElement.value.currentTime = currentTime;
                uploadVideoElement.value.onseeked = async () => {
                    // 等待视频准备好再在画布上绘制
                    requestAnimationFrame(async () => {
                        if (!uploadVideoElement.value || !canvasElement.value) return;
                        context.drawImage(uploadVideoElement.value, 0, 0, uploadVideoElement.value.videoWidth, uploadVideoElement.value.videoHeight);
                        // 直接输出 Blob 并存入数组
                        canvasElement.value.toBlob(async blob => {
                            if (!blob) return;
                            if (uploadVideList.value[index].coverData.coverUrls.length === 4) {
                                uploadVideList.value[index].coverData.coverUrls = [];
                                uploadVideList.value[index].coverData.coverSelectedUrl = '';
                            }
                            const blobUrl = handleShowImage(blob);
                            if (!uploadVideList.value[index].coverData.coverSelectedUrl) {
                                uploadVideList.value[index].coverData.coverSelectedUrl = blobUrl;
                            }
                            uploadVideList.value[index].coverData.coverUrls.push(blobUrl);
                        }, 'image/jpeg');
                        currentTime += intervalTime; // 更新下次截图的时间点
                        resolve(); // 解决Promise，继续下一次循环
                    });
                };
            });
        }
    };
};
// 暂停上传
const pauseUpload = async () => {
    if (uploadVideList.value[upVideoIndex.value].videoFileData.isPauseUpload) {
        uploadVideList.value[upVideoIndex.value].videoFileData.isPauseUpload = false;
        abortControllerList.value.set(uploadVideList.value[upVideoIndex.value].videoFileData.abortControllerId, new AbortController());
        const data: UploadChunkData = {
            chunkSize: chunkSize,
            filename: uploadVideList.value[upVideoIndex.value].videoFileData.videoName, // 文件名
            totalChunks: uploadVideList.value[upVideoIndex.value].videoFileData.numberChunks, // 分片总数
            totalSize: uploadVideList.value[upVideoIndex.value].videoFileData.videoSize, // 文件大小
            success: null
        };
        const response = await getChunkApi(data);
        if (response.code === 200) {
            const resData = response.data as FileChunk
            if (resData.skipUpload) {
                uploadVideList.value[upVideoIndex.value].videoFileData.identifier = resData.identifier
                uploadVideList.value[upVideoIndex.value].videoFileData.isComplete = true;
                uploadVideList.value[upVideoIndex.value].videoFileData.progress = 100;
                return;
            } else if (resData.uploaded && !resData.skipUpload) {
                uploadVideList.value[upVideoIndex.value].videoFileData.identifier = resData.identifier; // 获取上传标识符
                uploadVideList.value[upVideoIndex.value].videoFileData.uploaded = resData.uploaded;
                await continueUpload(upVideoIndex.value);
                return;
            }
            uploadVideList.value[upVideoIndex.value].videoFileData.identifier = resData.identifier;
            await continueUpload(upVideoIndex.value); // 继续上传
        }
    } else {
        uploadVideList.value[upVideoIndex.value].videoFileData.isPauseUpload = true;
        // 取消请求
        abortControllerList.value.get(uploadVideList.value[upVideoIndex.value].videoFileData.abortControllerId)?.abort(); // 取消请求

    }
}
// 按顺序依次上传视频分片
const uploadChunks = async (file: File, // 文件对象
    numberOfChunks: number, // 分片总数
    chunkSize: number,  // 分片大小
    identifier: string, // 唯一标识符
    index: number, // 上传视频列表的索引
) => {
    // 初始化速度和进度条
    uploadVideList.value[index].videoFileData.progress = 0;
    uploadVideList.value[index].videoFileData.uploadProgress.bytesUploaded = 0;
    uploadVideList.value[index].videoFileData.uploadProgress.totalSize = uploadVideList.value[index].videoFileData.videoSize;
    uploadVideList.value[index].videoFileData.uploadProgress.startTime = performance.now();
    for (let i = 0; i < numberOfChunks && !uploadVideList.value[index].videoFileData.isPauseUpload; i++) {
        // 计算当前片的开始和结束位置
        const start = i * chunkSize;
        const end = Math.min(start + chunkSize, file.size);
        // 读取文件的当前片
        const chunk = file.slice(start, end);
        const controller = abortControllerList.value.get(uploadVideList.value[index].videoFileData.abortControllerId);
        if (!controller) return;
        const signal = controller.signal;
        await uploadVideo(chunk, identifier, i, numberOfChunks, file.size, file.name, signal)
            .then(resolve => {
                if (resolve === "ok") {
                    if (i < (numberOfChunks - 1)) {
                        uploadVideList.value[index].videoFileData.uploadProgress.bytesUploadedInWindow += chunkSize;
                        uploadVideList.value[index].videoFileData.uploadProgress.bytesUploaded += chunkSize;
                    } else {
                        // 计算所有完整分片的总大小
                        const fullChunksSize = (numberOfChunks - 1) * chunkSize;
                        // 最后一个分片的大小
                        const lastChunkSize = file.size - fullChunksSize;
                        uploadVideList.value[index].videoFileData.uploadProgress.bytesUploadedInWindow += lastChunkSize;
                        uploadVideList.value[index].videoFileData.uploadProgress.bytesUploaded = lastChunkSize;
                    }
                    const { speed, remainingTime } = calculateSpeedAndRemainingTime(uploadVideList.value[index].videoFileData.uploadProgress);
                    uploadVideList.value[index].videoFileData.progress = Math.ceil(uploadVideList.value[index].videoFileData.uploadProgress.bytesUploaded / file.size * 100);
                    uploadVideList.value[index].videoFileData.uploadVideoSize = uploadVideList.value[index].videoFileData.uploadProgress.bytesUploaded;
                    uploadVideList.value[index].videoFileData.uploadSpeed = speed;
                    uploadVideList.value[index].videoFileData.uploadRemainingTime = remainingTime;
                }
            }).catch(error => {
                console.error('视频分片上传错误', error);
            });
        if (uploadVideList.value[index].videoFileData.isPauseUpload) {
            return; // 暂停上传
        }
    }
    uploadVideList.value[index].videoFileData.progress = 100;
    uploadVideList.value[index].videoFileData.uploadVideoSize = file.size;
    uploadVideList.value[index].videoFileData.uploadRemainingTime = 0;
    uploadVideList.value[index].videoFileData.isComplete = true;
    const chunkMergeData = {
        identifier: identifier,
        filename: file.name,
        totalChunks: numberOfChunks
    };
    const re = await chunkMergeApi(chunkMergeData);
    if (re.code === 200) {
        uploadVideList.value[index].videoFileData.isMergeStatus = "视频上传成功";
    } else if (re.code === 500) {
        uploadVideList.value[index].videoFileData.isMergeStatus = "视频合并出现错误，请重新上传";
    }
};

// 继续上传
const continueUpload = async (index: number) => {
    if (uploadVideList.value[index].videoFileData.uploaded) {
        uploadVideList.value[index].videoFileData.uploadProgress.bytesUploaded = chunkSize * uploadVideList.value[index].videoFileData.uploaded?.length;
    }
    uploadVideList.value[index].videoFileData.uploadProgress.totalSize = uploadVideList.value[index].videoFileData.videoSize;
    let unuploadedChunks = Array.from({ length: uploadVideList.value[index].videoFileData.numberChunks }, (_, innerIndex) => innerIndex)
        .filter(innerIndex => !uploadVideList.value[index].videoFileData.uploaded.includes(innerIndex));
    uploadVideList.value[index].videoFileData.uploadProgress.bytesUploadedInWindow = 0;
    uploadVideList.value[index].videoFileData.uploadProgress.startTime = performance.now();
    for (const unuploadedIndex of unuploadedChunks) {
        const start = unuploadedIndex * chunkSize;
        const end = Math.min(start + chunkSize, uploadVideList.value[index].videoFileData.videoSize);
        if (!uploadVideList.value[index].videoFileData.file) return;
        const chunk = uploadVideList.value[index].videoFileData.file.slice(start, end);
        const controller = abortControllerList.value.get(uploadVideList.value[index].videoFileData.abortControllerId);
        if (!controller) return;
        const signal = controller.signal;
        await uploadVideo(chunk, uploadVideList.value[index].videoFileData.identifier, unuploadedIndex, uploadVideList.value[index].videoFileData.numberChunks, uploadVideList.value[index].videoFileData.videoSize, uploadVideList.value[index].videoFileData.videoName, signal)
            .then(resolve => {
                if (resolve === "ok") {
                    if (unuploadedIndex < (uploadVideList.value[index].videoFileData.numberChunks - 1)) {
                        uploadVideList.value[index].videoFileData.uploadProgress.bytesUploadedInWindow += chunkSize;
                        uploadVideList.value[index].videoFileData.uploadProgress.bytesUploaded += chunkSize;
                    } else if (unuploadedIndex === (uploadVideList.value[index].videoFileData.numberChunks - 1)) {
                        // 计算所有完整分片的总大小
                        const fullChunksSize = (uploadVideList.value[index].videoFileData.numberChunks - 1) * chunkSize;
                        // 最后一个分片的大小
                        const lastChunkSize = uploadVideList.value[index].videoFileData.videoSize - fullChunksSize;
                        uploadVideList.value[index].videoFileData.uploadProgress.bytesUploadedInWindow += lastChunkSize;
                        uploadVideList.value[index].videoFileData.uploadProgress.bytesUploaded = lastChunkSize;
                    }
                    // 更新上传进度状态
                    const { speed, remainingTime } = calculateSpeedAndRemainingTime(uploadVideList.value[index].videoFileData.uploadProgress);
                    uploadVideList.value[index].videoFileData.progress = Math.ceil(uploadVideList.value[index].videoFileData.uploadProgress.bytesUploaded / uploadVideList.value[index].videoFileData.videoSize * 100);
                    uploadVideList.value[index].videoFileData.uploadVideoSize = uploadVideList.value[index].videoFileData.uploadProgress.bytesUploaded;
                    uploadVideList.value[index].videoFileData.uploadSpeed = speed;
                    uploadVideList.value[index].videoFileData.uploadRemainingTime = remainingTime;
                }
            }).catch(error => {
                console.error('视频分片上传错误', error);
            });
        if (uploadVideList.value[index].videoFileData.isPauseUpload) {
            return; // 暂停上传   //////////////////////
        }
    }
    uploadVideList.value[index].videoFileData.progress = 100;
    uploadVideList.value[index].videoFileData.isComplete = true;
    const chunkMergeData = {
        identifier: uploadVideList.value[index].videoFileData.identifier,
        filename: uploadVideList.value[index].videoFileData.videoName,
        totalChunks: uploadVideList.value[index].videoFileData.numberChunks
    };
    const re = await chunkMergeApi(chunkMergeData);
    if (re.code === 200) {
        uploadVideList.value[index].videoFileData.isMergeStatus = "视频上传成功";
    } else if (re.code === 500) {
        uploadVideList.value[index].videoFileData.isMergeStatus = "视频合并出现错误，请重新上传";
    }
}

//重新上传视频
const refreshUpload = async () => {
    // 暂停正在的上传请求
    if (uploadVideList.value[upVideoIndex.value].videoFileData.isPauseUpload) {
        uploadVideList.value[upVideoIndex.value].videoFileData.isPauseUpload = true;
        // 取消请求
        abortControllerList.value.get(uploadVideList.value[upVideoIndex.value].videoFileData.abortControllerId)?.abort();
    }
    uploadVideList.value[upVideoIndex.value].videoFileData.isPauseUpload = false;
    abortControllerList.value.set(uploadVideList.value[upVideoIndex.value].videoFileData.abortControllerId, new AbortController());
    await uploadChunks(
        uploadVideList.value[upVideoIndex.value].videoFileData.file,
        uploadVideList.value[upVideoIndex.value].videoFileData.numberChunks,
        chunkSize,
        uploadVideList.value[upVideoIndex.value].videoFileData.identifier,
        upVideoIndex.value);
}
// 初始化内容
const init = (file: File, isAdd: boolean): number => {
    // 初始化数据
    const videoData = reactive<VideoData>({
        videoFileData: {
            file: file, // 视频文件对象
            url: URL.createObjectURL(file), // 视频文件url
            videoName: file.name, // 视频文件名
            videoSize: file.size, // 视频文件大小
            numberChunks: calculateChunkCount(file, chunkSize), // 视频分片数量
            identifier: '', // 视频分片标识
            uploaded: [], // 已上传分片索引列表
            isComplete: false, // 是否上传完成
            isMergeStatus: '正在合并视频', // 是否合并完成
            progress: 0, // 上传进度
            uploadVideoSize: 0, // 已经上传大小
            uploadSpeed: 0, // 上传速度
            uploadRemainingTime: 0, // 剩余时间
            duration: 0, // 视频时长
            isPauseUpload: false, // 是否暂停上传
            abortControllerId: generateUniqueId(), // 控制视频上传控制唯一标识符
            uploadProgress: {
                startTime: 0,
                bytesUploaded: 0,
                bytesUploadedInWindow: 0,
                totalSize: 0
            }
        },
        coverData: {
            coverUrls: [],
            coverSelectedUrl: ''
        },
        videoFromData: {
            categoryId: 1,
            subCategoryId: 81,
            title: file.name.toString().replace(/\.[^\.]+$/, ""), // 视频标题
            descr: '',
            tags: [],
            type: 1
        }
    });
    if (!isAdd) {
        if (uploadVideList.value[upVideoIndex.value]) {
            uploadVideList.value[upVideoIndex.value] = videoData;
            return upVideoIndex.value;
        }
    }
    uploadVideList.value.push(videoData);
    const index = uploadVideList.value.findIndex(element => element === videoData)
    //const index = uploadVideList.value.indexOf(videoData);
    return index;
};
// 选择作者声明
const SelectAuth = (authItem: string) => {
    auth.value = authItem;
}
// 上传视频封面
const uploadCover = async (index: number) => {
    
};

// 提交投稿
const submit = async () => {
    // if (uploadVideList[upVideoIndex.value].videoFromData.title === '' ) {
    //     Message.error('∑(°^°) 请输入稿件标题...') 
    //     return;
    // }
    if (tags.value.length === 0) {
        Message.error('∑(°^°) 至少填写一个标签吧...')
        return;
    }
    await submitVideo();
};
// 提交为草稿
const submitDraft = async () => {
    await submitDraftVideo();
};

// 投稿请求
const submitVideo = async () => {
    const data: UploadVideo = {
        original: '',
        title: '',
        type: 0,
        auth: auth.value,
        duration: 0,
        category_id: categoryId.value,
        sub_category_id: subCategoryId.value,
        tags: tags.value.join(','),
        descr: '',
        cover_url4x3: "",
        cover_url16x9: "",
    }
    const response = await contributeVideoApi(data);
    if (response.code === 200) {
        upDateUrl();
        selectedVideo.value = false;
        isUploadVideoComplete.value = true;
    }
    if (response.code === 201) {
        Message.error(response.msg + '噢...(´；ω；`), 请前往稿件中心修改');
    }
};
// 存为草稿稿件请求
const submitDraftVideo = async () => {
    const data = {
        original: '',
        title: '',
        type: 0,
        auth: auth.value,
        duration: 0,
        category_id: categoryId.value,
        sub_category_id: subCategoryId.value,
        tags: tags.value.join(','),
        descr: '',
        cover_url4x3: "",
        cover_url16x9: "",
    }
    const response = await draftVideoApi(data);
    if (response.code === 200) {
        // URL.revokeObjectURL(url.value);
        router.push('/platform/upload-manager/article');
    }
    if (response.code === 201) {
        Message.error(response.msg);
    }
};
// 更改封面
const changeCover = () => {
    isShowChangeCover.value = true;
};
// 打开集合弹层
const showCollection = () => {
    isShowCollection.value = true;
};
// 裁切封面弹窗回调
const isShowDialogEmit = (isShow: boolean) => {
    isShowChangeCover.value = isShow;
};
const isShowCollectionEmit = (isShow: boolean) => {
    isShowCollection.value = isShow;
};
const isShowInteractiveCardEmit = (isShow: boolean) => {
    isShowInteractiveCard.value = isShow;
};
// 选取分区信息
const SelectCategory = (categoryMain: number, categorySub: number, categorySubTag: string) => {
    let array = categorySubTag.split(",");
    rcmTags.value = array;
    categoryId.value = categoryMain;
    subCategoryId.value = categorySub;
};
// 封面裁切回调
const cropperCoverChang = (url: string, showDialog: boolean) => {
    isShowChangeCover.value = showDialog;
    uploadVideList.value[upVideoIndex.value].coverData.coverSelectedUrl = url;
}
// 顶部导航栏
const tabList = ref([
    {
        name: '视频投稿', // 导航栏名称
        path: '/platform/upload/video/frame' // 导航栏跳转路径
    },
    {
        name: '专栏投稿',
        path: '/platform/upload/text/edit'
    },
    {
        name: '音频投稿',
        path: '/platform/upload/audio/frame'
    },
    {
        name: '贴纸投稿',
        path: '/platform/upload/sticker'
    },
    {
        name: '视频素材投稿',
        path: '/platform/upload/videoMaterial'
    }
]);
// 在url上动态添加查询参数
function setMultipleQueryParameters(params: Record<string, string | number | boolean>) {
    // 创建URL对象
    const url = new URL(window.location.href);
    // 获取查询参数对象
    const searchParams = url.searchParams;

    // 遍历要设置的参数对象
    Object.entries(params).forEach(([key, value]) => {
        // 设置或更新每个查询参数，确保值被转换为字符串
        searchParams.set(key, value.toString());
    });

    // 使用replaceState更新当前URL，避免添加新的历史记录
    window.history.replaceState({ path: url.href }, '', url.href);
}
const upDateUrl = () => {
    setMultipleQueryParameters({
        page_from: 'creative_home_top_upload',
    });
};
onUnmounted(() => {
    //   if (url.value) {
    //     URL.revokeObjectURL(url.value); // 释放内存 销毁URL
    //   }
});
</script>
<style scoped lang="scss">
.video-upload {
    position: relative;

    .upload-tabs {
        margin-top: 16px;
        border-bottom: 1px solid #e3e6e8;

        ul {
            list-style: none;
            display: flex;
            padding: 0;
            margin: 0;
            height: 40px;

            li {
                display: block;
                cursor: pointer;
                margin-left: 40px;
            }

            .is_active {
                color: var(--brand_blue);
                border-bottom: 3px solid var(--brand_blue);
            }
        }
    }
}

.upload-body-container {
    max-width: 830px;
    margin: 0 auto;
    position: relative;
    width: 100%;
}

.upload-wrp {
    margin-top: 20px;
    position: relative;
    border: 2px dashed #ccc;
}

.video-input {
    margin-top: 62px;
    margin-bottom: 32px;
    display: flex;
    justify-content: center;
    position: relative;
    color: #999;
    font-size: 14px;
    text-align: center;
}

.pic-input {
    display: flex;
    justify-content: center;
    position: relative;
    color: #999;
    font-size: 14px;
    text-align: center;
}

.video-input-wrapper {
    flex: 1;
    cursor: pointer;
    padding-bottom: 20px;
    display: inline-block;
}

.pic-input-wrapper {
    flex: 1;
    cursor: pointer;
    padding: 70px 0;
    display: inline-block;
}

.icon-shangchuan {
    font-size: 40px;
}

.upload-tips-text {
    font-size: 13px;
    color: #999;
    margin-top: 6px;
}

.upload-btn {
    color: #fff;
    margin: 20px auto;
    width: 200px;
    height: 44px;
    cursor: pointer;
    background: var(--brand_blue);
    border-radius: 4px;
    text-align: center;
    line-height: 44px;
    white-space: nowrap;
}

.upload-body-container .footer-item {
    margin-top: 18px;
    text-align: center;
    color: var(--text2);
    fill: var(--text2);
    font-size: 12px;
    line-height: 20px;
}

.upload-body-container .footer-item a:not(.title):not(.zip) {
    color: var(--brand_blue);
    cursor: pointer;
}

.upload-body-container .footer-item a:not(.title):not(.zip):hover {
    color: var(--brand_blue);
}

.upload-body-container .footer-item .i-list {
    margin: 0 10px;
}

.upload-body-container .footer-item .i-1 {
    cursor: pointer;
    position: relative;
}

.upload-body-container .footer-item .i-1 a {
    color: #99a2aa;
}

.upload-body-container .footer-item .i-1 .title:hover {
    color: var(--brand_blue);
}

.upload-body-container .footer-item .i-2 .zip {
    color: #99a2aa;
    text-decoration: none;
}

.upload-body-container .footer-item .i-2:hover {

    .download-tool,
    .zip {
        color: var(--brand_blue);
        fill: var(--brand_blue);
        text-decoration: underline;
    }

}

.upload-body-container .footer-item .i-1 .title-block {
    position: absolute;
    font-size: 12px;
    border: 1px solid #f9d199;
    color: #666;
    text-align: left;
    padding: 20px;
    background-color: #fcfae0;
    white-space: nowrap;
    z-index: 10;
    bottom: 28px;
    right: -5px;
    display: none;
}

.upload-body-container .footer-item .i-1:hover .title-block {
    display: block;
}

.upload-body-container .footer-item .i-1 .title-block:after {
    position: absolute;
    width: 14px;
    height: 14px;
    transform: rotate(45deg);
    border: 1px solid;
    border-color: transparent #f9d199 #f9d199 transparent;
    background-color: #fcfae0;
    right: 10px;
    bottom: -8px;
}

.upload-body-container .footer-item .download-tool {
    width: 16px;
    height: 16px;
    transform: translateY(3px);
}

.video-upload {
    .upload-video-basic-wrap {
        animation: fadeIn .3s linear;
        transition: height 0.3s linear;

        .video-basic {

            .video-upload {
                .upload-header {
                    height: 100%;

                    .upload-header-top {
                        padding: 0 32px;
                        position: relative;
                        font-size: 16px;
                        line-height: 22px;
                        font-weight: 600;
                        color: #212121;
                        line-height: 28px;
                        height: 70px;
                        box-shadow: 0 1px 0 #e7e7e7;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        .upload-header-top-text {
                            color: inherit
                        }
                    }
                }

                .upload-queue {
                    .task-list {
                        height: 100%;
                        margin: 23px 32px 0;
                        border-radius: 10px;
                        position: relative;

                        .task-list-content {
                            display: flex;
                            align-items: center;
                            border-radius: 10px;
                            flex-wrap: wrap;

                            .task-list-content-item {
                                max-width: 218px;
                                position: relative;
                                width: 218px;
                                box-sizing: content-box;

                                .task {
                                    height: 40px;
                                    max-width: 100%;
                                    transition: all .2s ease-in-out;
                                    padding: 10px 20px 10px 12px;
                                    font-size: 12px;
                                    cursor: pointer;
                                    position: relative;
                                    border-radius: 8px;
                                    background: #fff;
                                    color: #18191c;
                                    margin-right: 10px;
                                    margin-bottom: 10px;
                                    box-sizing: content-box;

                                    .task-title {
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                        flex: 1;
                                        font-size: 14px;
                                        line-height: 16px;
                                        display: flex;
                                        align-items: center;

                                        .task-title-text {
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                            white-space: nowrap;
                                        }

                                    }

                                    .task-status {
                                        color: inherit;
                                        font-size: 12px;
                                        padding-top: 8px;
                                        display: flex;
                                        align-items: center;

                                        span {
                                            font-size: 8px;
                                        }

                                    }

                                    .task-status-success {
                                        color: #43ce5b;
                                    }

                                    .task-delete {
                                        position: absolute;
                                        right: 6px;
                                        top: 7px;
                                        height: 20px;
                                        font-size: 12px;
                                        text-align: center;
                                        line-height: 20px;
                                        z-index: 10;

                                    }
                                }

                                .task-selected {
                                    background: var(--brand_blue);
                                    color: #ffffff;
                                }
                            }

                            .task-list-content-btn {
                                cursor: pointer;
                                width: 98px;
                                height: 60px;
                                font-size: 12px;
                                border-radius: 8px;
                                background: #fff;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                color: #61666d;
                                margin-right: 10px;
                                margin-bottom: 10px;

                                :deep(.icon-plus) {
                                    width: 20px;
                                    height: 20px;
                                }

                            }
                        }

                        .file-list {
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 17px;
                            color: #18191c;
                            position: relative;

                            .drag-list {
                                transition: height .5s ease-in-out;
                                overflow: hidden;
                                height: 82px;

                                .file-item {
                                    display: flex;
                                    align-items: center;
                                    width: 838px;
                                    height: 76px;
                                    margin-bottom: 6px;

                                    .file-item-icon {
                                        box-sizing: border-box;
                                        height: 42px;
                                        width: 36px;
                                        margin: 0 10px 0 0;
                                    }

                                    .file-item-content {
                                        width: 794px;

                                        .file-item-content-detail {
                                            flex: 1;
                                            display: flex;
                                            justify-content: space-between;
                                            height: 44px;

                                            .file-item-content-text {
                                                font-weight: 400;
                                                font-size: 13px;
                                                line-height: 18px;
                                                color: #18191c;
                                                width: auto;
                                                overflow: hidden;
                                                text-overflow: ellipsis;
                                                margin-right: 10px;

                                                .title {
                                                    max-width: 645px;
                                                    white-space: nowrap;
                                                    overflow: hidden;
                                                    text-overflow: ellipsis;
                                                    height: 30px;
                                                    line-height: 30px;
                                                    margin-left: 10px;
                                                    font-size: 13px;
                                                }

                                                .file-block-status-text {
                                                    height: 14px;
                                                    display: flex;
                                                    align-items: center;
                                                    color: #909399;
                                                    margin-left: 10px;

                                                    .icon-successfilled {
                                                        width: 16px;
                                                        height: 16px;
                                                        fill: #43ce5b;
                                                    }

                                                    .status-text {
                                                        line-height: 14px;
                                                        font-size: 10px;
                                                        margin-left: 10px;
                                                        transition: all .2s ease-in-out;
                                                    }

                                                    .process {
                                                        line-height: 14px;
                                                        font-size: 10px;
                                                        transition: all .2s ease-in-out;
                                                    }

                                                    .time {
                                                        margin-left: 6px;
                                                    }
                                                }
                                            }

                                            .file-item-content-operate {
                                                display: flex;
                                                align-items: center;
                                                margin-top: 10px;

                                                .file-block-status-manage {
                                                    display: inline-flex;
                                                    align-items: center;

                                                    .file-block-status-manage-icon {
                                                        height: 22px;
                                                        width: 22px;
                                                        margin-left: 6px;
                                                        cursor: pointer;
                                                    }

                                                    .process {
                                                        line-height: 14px;
                                                        font-size: 12px;
                                                        color: #909399;
                                                    }

                                                    .success {
                                                        line-height: 28px;
                                                        font-size: 14px;
                                                        color: var(--brand_blue);
                                                        cursor: pointer;
                                                    }

                                                    .percentage {
                                                        margin-right: 6px;
                                                    }
                                                }
                                            }
                                        }

                                        .file-item-content-progress {
                                            margin-top: 6px;
                                            margin-left: 10px;
                                            overflow: hidden;
                                            height: 2px;
                                            width: 784px;
                                            border-radius: 4px;
                                            background-color: #e7e7e7;

                                            .file-progress-inner {
                                                height: 2px;
                                                border-radius: 4px;
                                                transition: all .2s ease-in-out;
                                            }

                                            .doing-bg {
                                                background-color: var(--brand_blue);
                                            }

                                            .success-bg {
                                                background-color: #43ce5b;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    .video-upload {
                        padding: 20px 12px;
                        background: #f6f7f8;
                    }
                }
            }

            .upload-form {
                box-sizing: border-box;
                width: 900px;
                height: auto;
                margin: 12px 30px 0 0;

                .form-title {
                    margin: 0 0 0 32px;
                    font-size: 18px;
                    cursor: pointer;

                    span {
                        font-size: 14px;
                        color: #9499a0;
                    }

                    .icon-arrowdown {
                        width: 14px;
                        height: 14px;
                        fill: #9499a0;
                        vertical-align: -2px;
                    }
                }

                .form-item {
                    height: 127px;
                    margin: 24px 0 0 20px;

                    .cover {
                        display: flex;

                        .section-title-container {
                            display: flex;
                            width: 134px;
                            height: 127px;

                            .section-title-deg {
                                display: inline-flex;
                                align-items: center;
                                color: #ff3b30;
                                width: 12px;
                            }

                            .section-title-content-main {
                                display: inline-flex;
                                align-items: center;
                                font-size: 14px;
                            }
                        }

                        .cover-content {
                            display: flex;
                            height: 127px;
                            width: 100%;

                            .cover-upload {
                                display: flex;
                                align-items: center;
                                height: 127px;
                                width: 169px;
                                border-radius: 4px;
                                overflow: hidden;
                                cursor: pointer;
                                position: relative;
                                background-color: #c9ccd0;

                                .img {
                                    width: 169px;
                                    height: 127px;
                                    border-radius: 4px;
                                    position: relative;
                                    cursor: pointer;
                                    transition: all .5s ease-in-out;
                                }

                                .cover-upload-mask-btn {
                                    position: absolute;
                                    bottom: 0;
                                    left: 0;
                                    height: 30px;
                                    width: 100%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;

                                    span {
                                        color: #fff;
                                        font-size: 13px;
                                        height: 18px;
                                        line-height: normal;
                                        opacity: 1;

                                        &:hover {
                                            opacity: 0.6;
                                        }
                                    }
                                }

                                .cover-upload-mask {
                                    background-color: #000;
                                    opacity: 0.6;
                                }

                            }

                            .bcc-upload {
                                box-sizing: border-box;
                                height: 127px;
                                width: 169px;
                                border: 1px dashed silver;
                                border-radius: 4px;
                                background-color: #fafafa;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                cursor: pointer;

                                .bcc-upload-mask-btn {
                                    display: flex;
                                    justify-content: center;
                                    flex-direction: column;

                                    span {
                                        font-size: 12px;
                                        color: silver;
                                    }

                                    .upload-mask-btn-icon {
                                        margin: 0 auto;
                                        width: 30px;
                                        height: 30px;
                                        color: silver;
                                    }
                                }
                            }

                            .cover-preview {
                                box-sizing: border-box;
                                padding: 4px 0 0 34px;

                                .cover-preview-des {
                                    height: 26px;
                                    font-size: 12px;
                                    line-height: 26px;
                                }

                                .cover-preview-list {
                                    display: flex;
                                    padding: 6px 0 0;
                                    box-sizing: border-box;

                                    .cover-preview-item {
                                        position: relative;
                                        display: flex;
                                        margin: 0 14px 0 0;
                                        width: 120px;
                                        height: 90px;
                                        border-radius: 4px;
                                        overflow: hidden;
                                        border: 2px solid #f6f7f8;
                                        cursor: pointer;
                                        transition: all .5s ease-in-out;

                                        &:hover {
                                            border: 2px solid var(--brand_blue);
                                        }

                                        .cover-preview-item-selected-mask {
                                            position: absolute;
                                            box-sizing: border-box;
                                            width: 100%;
                                            height: 100%;
                                            content: '';
                                            top: 0;
                                            right: 0;
                                            bottom: 0;
                                            left: 0;
                                            background: rgba(0, 0, 0, 0.4);
                                        }
                                    }

                                    .cover-preview-item-selected {
                                        border: 2px solid var(--brand_blue);
                                    }
                                }
                            }
                        }

                    }
                }

                .form-item-title {
                    box-sizing: border-box;
                    height: 40px;
                    margin: 24px 0 0 20px;

                    .section-title-container {
                        display: flex;
                        width: 100%;

                        .section-title {
                            display: flex;
                            width: 134px;

                            .section-title-deg {
                                display: inline-flex;
                                align-items: center;
                                color: #ff3b30;
                                width: 12px;
                            }

                            .section-title-main {
                                display: inline-flex;
                                align-items: center;
                                font-size: 14px;
                            }
                        }

                        .section-title-input {
                            height: 39px;
                        }

                        :deep(.hui-input-wrap) {
                            height: 39px;
                        }

                    }
                }

                .form-item-type {
                    box-sizing: border-box;
                    height: 40px;
                    margin: 24px 0 0 20px;

                    .section-type-container {
                        display: flex;

                        .section-type {
                            display: flex;
                            width: 116.9px;

                            .section-type-deg {
                                display: inline-flex;
                                align-items: center;
                                color: #ff3b30;
                                width: 12px;
                            }

                            .section-type-main {
                                display: inline-flex;
                                align-items: center;
                                font-size: 14px;
                            }
                        }

                    }
                }

                .form-item-category {
                    box-sizing: border-box;
                    height: 40px;
                    margin: 24px 0 0 20px;

                    .section-category-container {
                        display: flex;

                        .section-category {
                            display: flex;
                            width: 116.9px;

                            .section-category-deg {
                                display: inline-flex;
                                align-items: center;
                                color: #ff3b30;
                                width: 12px;
                            }

                            .section-category-main {
                                display: inline-flex;
                                align-items: center;
                                font-size: 14px;
                            }
                        }

                        .section-category-select-box {
                            .select-box-prefix {
                                display: flex;
                            }
                        }



                    }
                }

                .form-item-tag {
                    box-sizing: border-box;
                    height: auto;
                    margin: 24px 0 0 20px;

                    .section-tag-container-warp {
                        display: flex;

                        .section-tag {
                            display: flex;
                            width: 134px;

                            .section-tag-deg {
                                display: inline-flex;
                                align-items: center;
                                color: #ff3b30;
                                width: 12px;
                            }

                            .section-tag-main {
                                display: inline-flex;
                                align-items: center;
                                font-size: 14px;
                            }
                        }

                        .section-tag-container {
                            box-sizing: border-box;
                            width: 100%;
                        }
                    }

                    .tag-wrp {
                        display: flex;
                        margin-top: 15px;
                        width: 80%;

                        .tag-label {
                            font-size: 14px;
                            color: #222;
                            padding: 14px 0 0 134px;
                        }

                        .tag-list {
                            display: flex;
                            flex-wrap: wrap;
                            flex: 1;

                            .hot-tag-container {
                                text-align: center;
                                padding: 0 15px 0 16px;
                                margin: 6px 0 6px 12px;
                                height: 30px;
                                color: #6d757a;
                                cursor: pointer;
                                border-radius: 4px;
                                background: #f6f6f6;
                                font-size: 12px;
                                line-height: 14px;
                                border: none;

                                .hot-tag-item {
                                    font-size: 12px;
                                    line-height: 30px;
                                    display: inline-flex;
                                    align-items: center;

                                    .icon-topic {
                                        height: 12px;
                                        width: 12px;
                                        margin-right: 6px;
                                        fill: #6d757a;
                                    }
                                }
                            }

                            .isTagSelected {
                                background: #00a1d6;
                                color: #fff;
                                cursor: not-allowed;
                                border: 0;

                                .hot-tag-item {
                                    .icon-topic {
                                        fill: #ffffff;
                                    }
                                }
                            }
                        }
                    }

                }

                .form-item-descr {
                    box-sizing: border-box;
                    height: 182px;
                    margin: 24px 0 0 20px;

                    .section-descr-container {
                        display: flex;

                        .section-descr {
                            display: flex;
                            width: 134px;

                            .section-descr-main {
                                display: inline-flex;
                                align-items: center;
                                font-size: 14px;
                                margin-left: 12px;
                            }
                        }

                    }
                }

                .form-item-timed {
                    box-sizing: border-box;
                    height: 40px;
                    margin: 24px 0 0 20px;
                    transition: height .1s ease;

                    .section-timed-container-warp {
                        display: flex;

                        .section-timed {
                            display: inline-block;
                            line-height: 32px;
                            height: 32px;
                            width: 116.9px;

                            .section-timed-main {
                                display: inline-flex;
                                align-items: center;
                                font-size: 14px;
                                margin-left: 12px;
                            }
                        }

                        .section-timed-container {
                            display: flex;
                            justify-content: center;
                            flex: 1;
                            flex-wrap: wrap;
                            flex-direction: column;
                            color: #61666d;
                            font-size: 14px;

                            .section-timed-switch {
                                display: flex;
                                align-items: center;

                                .switch-box {
                                    display: flex;
                                    align-items: center;
                                }

                                .timed-switch-wrp-text {
                                    line-height: 32px;
                                    font-size: 14px;
                                    margin-left: 12px;
                                    color: #61666d;
                                }
                            }

                            .time-picker {
                                margin-top: 24px;
                                display: none;
                                opacity: 0;
                            
                                .d-time-container {
                                    .d-time-date-picker-wrp {
                                        display: flex;
                                        flex-wrap: wrap;
                                        align-items: center;

                                        :deep(.hui-datepicker) {
                                            &:nth-child(1) {
                                                margin-right: 10px;
                                            }
                                        }
                                    }
                                }
                            }

                        }

                    }
                }

                .is-timed {
                    height: 92px;

                    .section-timed-container-warp { 
                        .section-timed-container {
                            .time-picker {
                                display: block;
                                opacity: 1;
                                transition: opacity .6s linear;
                            }
                        }
                    }
                }

                .form-item-season {
                    box-sizing: border-box;
                    height: 40px;
                    margin: 24px 0 0 20px;
                    margin-bottom: 40px;

                    .section-season-container-warp {
                        display: flex;

                        .section-season {
                            display: flex;
                            width: 116.9px;

                            .section-season-main {
                                display: inline-flex;
                                align-items: center;
                                font-size: 14px;
                                margin-left: 12px;
                            }
                        }

                        .section-season-container {
                            display: flex;
                            align-items: center;

                            .video-season-text {
                                width: 100%;
                                height: 20px;
                                line-height: 20px;
                                font-size: 14px;
                            }

                            .video-season-button {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                width: 140px;
                                height: 30px;
                                border-radius: 6px;
                                font-size: 14px;
                                border: 1px solid var(--brand_blue);
                                line-height: 30px;
                                color: var(--brand_blue);
                                background-color: #fff;
                                box-sizing: border-box;
                                cursor: pointer;

                                .icon-season-plus {
                                    width: 16px;
                                    height: 16px;
                                    margin-right: 4px;
                                    fill: var(--brand_blue);
                                }

                            }

                        }



                    }
                }

                .setting-card {
                    width: 100%;
                    margin-top: 24px;
                    padding: 0 0 0 20px;
                    transition: all 0.2s linear;

                    .video-setting-title {
                        span {
                            font-size: 14px;
                            margin-left: 12px;
                        }
                    }

                    .video-setting-content {
                        margin-left: 134px;
                        height: 90px;

                        .setting-label {
                            display: flex;
                            align-items: center;
                            margin-top: 28px;

                            .bcc-checkbox-checkbox {
                                width: 14px;
                                height: 14px;
                                line-height: 14px;
                                border-radius: 2px;
                                border: 1px solid #bec3cc;
                                cursor: pointer;

                            }

                            .setting-label-main {
                                font-size: 14px;
                                margin-right: 20px;
                                margin-left: 10px;

                                .auth-select-box {
                                    width: auto;
                                }
                            }

                            .setting-text {
                                cursor: pointer;
                            }

                            .button-blueLine {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                width: 106px;
                                height: 30px;
                                border-radius: 6px;
                                font-size: 14px;
                                border: 1px solid var(--brand_blue);
                                line-height: 30px;
                                color: var(--brand_blue);
                                background-color: #fff;
                                box-sizing: border-box;
                                cursor: pointer;

                                .icon-setting-plus {
                                    width: 16px;
                                    height: 16px;
                                    fill: var(--brand_blue);
                                }
                            }

                        }
                    }

                    .video-card_el {
                        height: 30px;
                    }
                    
                    .video-card_manage {
                        height: 20px;
                    }
                }

                .form-item-submit {
                    box-sizing: border-box;
                    height: 110px;
                    margin: 24px 0 0 20px;
                    padding: 32px 0 32px 134px;
                    display: flex;

                    .submit-container {
                        box-sizing: border-box;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 120px;
                        height: 40px;
                        border-radius: 6px;
                        cursor: pointer;
                    }

                    .submit-draft {
                        border: 1px solid #ccc;
                    }

                    .submit-publish {
                        background-color: var(--brand_blue);
                        color: #ffffff;
                        margin-left: 20px;

                        &:hover {
                            background-color: var(--brand_blue_hover);
                        }
                    }
                }
            }
        }
    }

    .video-complete-wrap {
        width: 100%;
        animation: fadeIn .1s linear;
        transition: all 0.1s linear;

        .video-complete-container {
            width: 100%;

            .content-wrapper {
                .bg {
                    width: 366px;
                    height: 207px;
                    background-size: 100% 100%;
                    background-position: 50%;
                    background-repeat: no-repeat;
                    background-image: url(@/assets/img/platform/video_complete.png);
                    margin: 30px auto;
                }

                .step-des {
                    margin-top: 16px;
                    text-align: center;
                    font-size: 24px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, .85);
                    line-height: 32px;
                }

                .op-buttons {
                    margin-top: 82px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    margin-bottom: 50px;
                    font-size: 14px;

                    .left-wrapper {
                        position: relative;
                        margin-right: 10px;

                        .btn-left {
                            box-sizing: border-box;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 140px;
                            height: 40px;
                            background-color: #fff;
                            border: 1px solid #ccc;
                            border-radius: 6px;
                            cursor: pointer;

                            &:hover {
                                background-color: #e3e6e8;
                            }
                        }
                    }

                    .right-wrapper {
                        position: relative;
                        margin-right: 10px;

                        .btn-right {
                            box-sizing: border-box;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 140px;
                            height: 40px;
                            border-radius: 6px;
                            border: none;
                            cursor: pointer;

                            background-color: var(--brand_blue);
                            color: #ffffff;
                            margin-left: 20px;

                            &:hover {
                                background-color: var(--brand_blue_hover);
                            }
                        }
                    }
                }
            }
        }
    }
}

#canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    pointer-events: none;
    /* 开启硬件加速 */
    transform: translateZ(0);
    backface-visibility: hidden;
    visibility: hidden;

    /* 可选：预期属性的变化 */
    will-change: transform;

}

#video {
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 0;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    transform: translateZ(0);
    /* 触发硬件加速 */
    backface-visibility: hidden;
    /* 结合使用以增强效果 */
}
</style>