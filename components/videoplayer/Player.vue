<template>
  <!-- 播放器主体 -->
  <div id="halihali-player" class="player-container" aria-label="哈哩哈哩视频播放器">
    <div class="player-primary-area">
      <!-- 视频播放区域 -->
      <div class="player-video-area" id="video-area" :class="isWebFullScreen ?
        'web-full-screen player-video-area-web-full' : ''" ref="videoPlayerRef" @mouseleave="hideControls"
        :style="isShowCursor ? '' : 'cursor: none;'">
        <!-- 视频 -->
        <Teleport to="#player-mini-warp" :disabled="!isShowMinPlayer" v-if="!props.isUpload && isLoaded">
          <div class="player-video-perch" @mousemove="showControls('video')" @click="clickPlayPause"
            @dblclick="dblclickFullscreen">
            <div class="player-video-wrap" :class="isMirror ? 'state-mirror' : ''"
              :style="videoRatio === '4:3' ? 'width: 75.0499%; height: 100%;' : ''">
              <video ref="videoPlayer" crossorigin="anonymous" preload="auto"
                :style="videoRatio === '4:3' ? 'object-fit: fill;' : ''" :autoplay="!props.isUpload"
                @loadedmetadata="onLoadedMetadata" @timeupdate="onTimeUpdate" @progress="onProgress"
                @ended="onVideoEnded" @waiting="onWaiting" @playing="onPlaying">
              </video>
            </div>
          </div>
        </Teleport>
        <div class="player-video-perch" v-else @mousemove="showControls('video')" @click="clickPlayPause"
          @dblclick="dblclickFullscreen">
          <div class="player-video-wrap" :class="isMirror ? 'state-mirror' : ''"
            :style="videoRatio === '4:3' ? 'width: 75.0499%; height: 100%;' : ''">
            <video ref="videoPlayer" crossorigin="anonymous" preload="auto"
              :style="videoRatio === '4:3' ? 'object-fit: fill;' : ''" :autoplay="!props.isUpload"
              @loadedmetadata="onLoadedMetadata" @timeupdate="onTimeUpdate" @progress="onProgress" @ended="onVideoEnded"
              @waiting="onWaiting" @playing="onPlaying">
            </video>
          </div>
        </div>
        <div class="player-video-poster"></div>
        <Teleport to="#player-mini-dm-warp" :disabled="!isShowMinPlayer" v-if="!props.isUpload && isLoaded">
          <VideoplayerPlayerDmWrap :currentTime="currentProgress" :isplaying="isPlaying" :displayDanmu="displayDanmu"
            :isLoading="isLoading" />
        </Teleport>
        <VideoplayerPlayerCmdDmWrap ref="playerPlayerCmdDmWrapRef" :isUpload="props.isUpload"
          :currentTime="currentProgress" :interactionCard="props.interactionCard" @update="changUpdateCard" />
        <div class="player-top-wrap" v-show="!props.isUpload" :style="controlsShowVisibility ?
          'visibility: visible;' :
          'visibility: hidden;'" :class="controlsVisibility ?
            'show' : 'hide'">
          <div class="player-top-left">
            <div class="player-top-left-title" :style="isFullscreen || isWebFullScreen ?
              '' : 'display: none;'">
              这是一个有趣且丰富多彩的测试视频
            </div>
            <div class="player-top-left-follow">
              <div class="player-follow">
                <img class="player-follow-face" :src="testAvatar" alt="用户头像">
                <span class="player-follow-icon">
                  <IconsPlus class="icon-plus" />
                </span>
                <span class="player-follow-text">关注</span>
              </div>
            </div>
          </div>
        </div>
        <div class="player-state-wrap" v-show="!props.isUpload">
          <div class="player-state-wrap-play" :style="isPlaying ? 'display: none;' : ''"></div>
          <div class="player-state-buff-icon" :style="isLoading ? '' : 'display: none;'"></div>
          <div class="player-state-buff-text" :style="isLoading ? '' : 'display: none;'">
            正在缓冲
          </div>
        </div>
        <div class="player-loading-panel" :class="isLoading ? '' : 'hidden'" v-show="!props.isUpload">
          <div class="player-loading-panel-blur">
            <div class="player-loading-panel-blur-detail"></div>
          </div>
        </div>
        <!-- 底部进度条 -->
        <VideoplayerPlayerBottomProgress :bufferPer="buffer / videoDuration" :currentPer="progressPercentage"
          :style="controlsShowVisibility || isFullscreen ? 'visibility: hidden;' : 'visibility: visible;'" />
        <!-- 底部控制栏 -->
        <VideoplayerPlayerControls :style="controlsShowVisibility ? 'visibility: visible;' : 'visibility: hidden;'"
          :class="controlsVisibility ? 'show' : 'hide'" :fullscreen="isFullscreen" :currentTime="currentProgress"
          :duration="videoDuration" :playing="isPlaying" :volume="volume" :isMuted="isMuted"
          :inPictureInPicture="isInPictureInPicture" :buffer="buffer" :webFullScreen="isWebFullScreen"
          :displayDanmu="displayDanmu" :isUpload="props.isUpload" :isWideScreen="isWideScreen"
          @changDisplayDanmu="changDisplayDanmu" @toggleFullscreen="toggleFullscreen" @togglePlayPause="togglePlayPause"
          @changeCurrent="changeCurrent" @mousemove="showControls('controls')" @updateVolume="updateVolume"
          @toggleMute="toggleMute" @togglePiP="togglePiP" @changeBackrate="changeBackrate"
          @toggleWebFullscreen="toggleWebFullscreen" @toggleWideScreen="toggleWideScreen" />
        <!-- MINI播放器容器 -->
        <div class="player-mini-warp" id="player-mini-warp" :class="isShowMinPlayer ? 'show-min-player' : ''"
          :style="`right: ${minPlayerRight}px; bottom: ${minPlayerBottom}px;`" ref="minPlayerRef">
          <div class="player-mini-dm_wrp" id="player-mini-dm-warp"></div>
          <div class="player-mini-close" @click="isShowMinPlayer = false">
            <IconsDialogClose class="player-mini-close-icon" />
          </div>
          <!-- MINI播放器状态容器 -->
          <div class="player-mini-state">
            <div class="player-mini-state-play" :style="isPlaying ? 'display: none;' : ''" @click="togglePlayPause">
            </div>
            <div class="player-mini-state-pause" :style="isPlaying ? '' : 'display: none;'" @click="togglePlayPause">
            </div>
          </div>
          <!-- MINI播放器底部进度条 -->
          <div class="player-mini-progress">
            <VideoplayerPlayerBottomProgress :bufferPer="buffer / videoDuration" :currentPer="progressPercentage"
              :height="3" />
          </div>
        </div>
        <!-- 全屏音量显示 -->
        <div class="player-volume-hint" :style="showVibiVoHint ? 'visibility: hidden;' : ''" :class="volumeHint ?
          '' : 'player-volume-hint-hide'">
          <span class="player-volume-hint-icon">
            <IconsPlayVolume :style="volume === 0 ? 'display: none;' : ''" />
            <IconsPlayMute :style="volume !== 0 ? 'display: none;' : ''" />
          </span>
          <span class="player-volume-hint-text">
            {{ volume === 0 || isMuted ? '静音' : (volume * 100).toFixed(0) + '%' }}
          </span>
        </div>
        <div class="player-toast-wrap">
          <div class="player-toast-close">
            <i class="iconfont icon-close"></i>
          </div>
          <span class="player-toast-text">记忆你上次看到</span>
          <span class="player-toast-time">07:06</span>
          <span class="player-toast-jump">跳转</span>
        </div>
      </div>
      <!-- 底部弹幕发送栏 -->
      <VideoplayerPlayerSendDmBar v-show="props.isShowDmBar" :fullscreen="isFullscreen" :displayDanmu="displayDanmu"
        :isWebFullScreen="isWebFullScreen" @changDisplayDanmu="changDisplayDanmu" />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { PlayerProfile } from '@/types/player';
import { getPlayerProfile, setPlayerProfile } from '@/utils/localStoragePlayer';
import type { InteractionLike, InteractionLink, InteractionVote, InteractionCard } from '@/types/interaction';
import VideoplayerPlayerCmdDmWrap from '@/components/videoplayer/PlayerCmdDmWrap.vue';
import DanmuList from '@/components/videoplayer/danmaku/DmList';
const playerPlayerCmdDmWrapRef = ref<InstanceType<typeof VideoplayerPlayerCmdDmWrap> | null>(null);
const videoPlayerRef = ref<HTMLDivElement | null>(null); // 播放器容器
const videoPlayer = ref<HTMLVideoElement | null>(null); // 视频
const minPlayerRef = ref<HTMLDivElement | null>(null); // 小播放器容器
const isFullscreen = ref(false); // 全屏状态
const progressPercentage = ref(0); // 进度条百分比
const videoDuration = ref<number>(0); // 视频时长
const currentProgress = ref<number>(0); // 当前播放时间
const isPlaying = ref(false); // 播放状态
const controlsVisibility = ref(true); // 控制条是否显示
const controlsShowVisibility = ref(false); // 控制条显示隐藏
let inCtrlTimer: ReturnType<typeof setTimeout>; // 节流计时器
let inCtrlShowTimer: ReturnType<typeof setTimeout>; // 控制条显示隐藏节流计时器
let clickTimer: ReturnType<typeof setTimeout>; // 点击节流计时器
let volumeHintTimer: ReturnType<typeof setTimeout>; // 音量提示节流计时器
const isShowCursor = ref(true); // 鼠标是否显示
const isLoading = ref(true); // 加载状态
const volume = ref(0.25); // 初始音量
const isMuted = ref(false); // 是否静音
const isInPictureInPicture = ref(false); // 是否处于画中画模式
const isWideScreen = ref(false); // 是否处于宽屏模式
const dashPlayer = ref<any | null>(null); // dashjs实例
const buffer = ref(0); // 缓冲
const isShowMinPlayer = ref(false); // 是否显示小播放器
const observer = ref<IntersectionObserver | null>(null); // 监听是否在视窗内
const minPlayerRight = ref(100); // 小播放器距离右
const minPlayerBottom = ref(100); // 小播放器距离下
const isWebFullScreen = ref(false); // 是否处于网页全屏
const volumeHint = ref(false); // 音量提示
const showVibiVoHint = ref(true);
const displayDanmu = ref(true); // 弹幕开关
const originalVolume = ref(0); // 在静音模式下，记录当前音量
const isMirror = ref(false); // 是否镜像
const videoRatio = ref('auto'); // 视频比例 auto 4:3 16:9
const playerConfig = ref<PlayerProfile>(); // 播放器本地个性化信息
const testAvatar = ref('https://static.v.hblog.top/images/avatar/706353e46fe1c390d6d2cb72a704818a/706353e46fe1c390d6d2cb72a704818a.webp');
const emit = defineEmits([
  'changWebFullScreen',
  'videoDuration',
  'videocurRentTime',
  'updateCard',
  'toggleWideScreen']);
const isLoaded = ref(false); // dom是否挂载
interface Props {
  videoUrl: string; // 视频地址
  protocol?: "mp4" | "dash"; // 视频协议 mp4 dash
  isUpload?: boolean; // 是否是投稿模式
  isShowDmBar?: boolean // 是否显示弹幕发送栏
  currentTimes?: number;
  interactionCard?: InteractionCard;
  danmakuElement?: string; // 弹幕挂载点
}
const props = withDefaults(defineProps<Props>(), {
  videoUrl: '',
  protocol: 'mp4',
  isUpload: false,
  isShowDmBar: true,
  currentTimes: 0,
  interactionCard: undefined,
});
// 点击视频播放器区域播放暂停事件
const clickPlayPause = () => {
  clearTimeout(clickTimer);
  clickTimer = setTimeout(() => {
    togglePlayPause();
  }, 400);
};
// 双击视频播放器区域全屏或退出全屏事件
const dblclickFullscreen = () => {
  clearTimeout(clickTimer);
  toggleFullscreen();
};
// 切换播放状态
const togglePlayPause = () => {
  if (videoPlayer.value) {
    if (videoPlayer.value.paused) {
      videoPlayer.value.play();
      isPlaying.value = true;
      if (isLoading.value) {
        isLoading.value = false;
      }
    } else {
      videoPlayer.value.pause();
      isPlaying.value = false;
    }
  }
  showControls('video');
};
// 获取视频时长
const onLoadedMetadata = () => {
  if (!videoPlayer.value) return;
  if (videoPlayer.value.duration !== 0) {
    videoDuration.value = videoPlayer.value.duration;
    emit('videoDuration', videoDuration.value);
  }
};
// 获取当前播放时间
const onTimeUpdate = () => {
  if (!videoPlayer.value) return;
  currentProgress.value = videoPlayer.value.currentTime;
  progressPercentage.value = (currentProgress.value / videoDuration.value);
  emit('videocurRentTime', currentProgress.value, false);
};
// 缓冲
const onProgress = () => {
  if (!videoPlayer.value) return;
  if (videoPlayer.value.buffered.length > 0) {
    // buffer.value = videoPlayer.value.buffered.end(0);
    for (let i = 0; i < videoPlayer.value.buffered.length; i++) {
      if (videoPlayer.value.buffered.start(videoPlayer.value.buffered.length - 1 - i) < videoPlayer.value.currentTime) {
        // console.log('缓冲进度：' + videoPlayer.value.buffered.end(i));
        buffer.value = videoPlayer.value.buffered.end(videoPlayer.value.buffered.length - 1 - i);
        // console.log('缓冲进度：' + videoPlayer.value.buffered.end(videoPlayer.value.buffered.length - 1 - i));
        break;
      }
    }
  }
};
// 播放结束
const onVideoEnded = () => {
  if (!videoPlayer.value) return;
  if (props.isUpload) {
    isPlaying.value = false;
    return;
  }
  // 在这里执行你的逻辑，例如重置播放状态
  isPlaying.value = false;
  videoPlayer.value.currentTime = 0;
};
// 静音/解除静音
const toggleMute = () => {
  if (!videoPlayer.value) return;
  if (isMuted.value) {
    isMuted.value = false;
    videoPlayer.value.muted = false;
  } else {
    isMuted.value = true;
    videoPlayer.value.muted = true;
  }
};
// 进入画中画
const togglePiP = async () => {
  if (!videoPlayer.value) return;
  if (videoPlayer.value && document.pictureInPictureEnabled) {
    if (isInPictureInPicture.value) {
      isInPictureInPicture.value = false;
      await document.exitPictureInPicture();
    } else {
      isInPictureInPicture.value = true;
      await videoPlayer.value.requestPictureInPicture();
    }
  }
}
// 切换全屏状态
const toggleFullscreen = () => {
  if (!videoPlayerRef.value) return;
  if (!isFullscreen.value) {
    enterFullscreen(videoPlayerRef.value);
  } else {
    exitFullscreen();
  }
};
// 改变当前播放进度
const changeCurrent = (currPer: number) => {
  if (!videoPlayer.value) return;
  const videoCurTi = currPer * videoDuration.value;
  videoPlayer.value.currentTime = videoCurTi;
  emit('videocurRentTime', videoCurTi, true);
  // 如果当前不是播放状态，则播放
  if (!isPlaying.value) {
    togglePlayPause();
  }
};
// 更新声音
const updateVolume = (updateVolume: number) => {
  if (!videoPlayer.value) return;
  // 限制音量范围0-1
  updateVolume = Math.max(0, updateVolume);
  updateVolume = Math.min(1, updateVolume);
  // 如果静音，则取消静音
  if (isMuted.value) {
    toggleMute();
  }
  volume.value = updateVolume;
  videoPlayer.value.volume = updateVolume;
};
// 切换播放速度
const changeBackrate = (backrate: number) => {
  if (!videoPlayer.value) return;
  videoPlayer.value.playbackRate = backrate;
};
// 进入/退出网页样式全屏
const toggleWebFullscreen = () => {
  if (!isWebFullScreen.value) {
    isWebFullScreen.value = true;
    emit('changWebFullScreen', isWebFullScreen.value);
    document.body.classList.add('webscreen-fix');
  } else {
    isWebFullScreen.value = false;
    emit('changWebFullScreen', isWebFullScreen.value);
    document.body.classList.remove('webscreen-fix');
  }
};
// 显示控制条
const showControls = (position: string) => {
  clearTimeout(inCtrlTimer);
  clearTimeout(inCtrlShowTimer);
  if (position === 'video') {
    controlsVisibility.value = true;
    controlsShowVisibility.value = true;
    isShowCursor.value = true;
    inCtrlTimer = setTimeout(() => {
      controlsVisibility.value = false;
      inCtrlShowTimer = setTimeout(() => {
        controlsShowVisibility.value = false;
        isShowCursor.value = false;
      }, 150);
    }, 3000); // 控制栏显示2秒后自动隐藏
  } else if (position === 'controls') {
    controlsVisibility.value = true;
    controlsShowVisibility.value = true;
    isShowCursor.value = true;
  }
};
// 隐藏控制条
const hideControls = () => {
  clearTimeout(inCtrlTimer);
  clearTimeout(inCtrlShowTimer);
  controlsVisibility.value = false;
  inCtrlTimer = setTimeout(() => {
    controlsShowVisibility.value = false;
    isShowCursor.value = true;
  }, 150);
};
// 视频播放等待
const onWaiting = () => {
  if (buffer.value < currentProgress.value) {
    isLoading.value = true;
  }
};
// 视频播放开始
const onPlaying = () => {
  if (isLoading.value) {
    isLoading.value = false;
  }
};
//  拖拽小播放器窗口
//  鼠标按下时
const fnDown = (e: MouseEvent) => {
  let startX = e.clientX; // 元素到窗口右边的距离
  let startY = e.clientY;
  //鼠标移动时
  document.onmousemove = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    let newX = startX - x;
    let newY = startY - y;
    minPlayerRight.value = minPlayerRight.value + newX;
    minPlayerBottom.value = minPlayerBottom.value + newY;
    startX = x;
    startY = y;
  }
  //鼠标抬起 清除移动和鼠标抬起事件
  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
  }

};
// 打开/关闭弹幕
const changDisplayDanmu = (showDanmu: boolean) => {
  displayDanmu.value = showDanmu;
};
// 进入宽屏模式
const toggleWideScreen = () => {
  isWideScreen.value = !isWideScreen.value;
  emit('toggleWideScreen', isWideScreen.value);
}
// 退出全屏
const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if ((document as any).mozCancelFullScreen) { // 兼容Firefox浏览器
    (document as any).mozCancelFullScreen();
  } else if ((document as any).webkitExitFullscreen) { // 兼容Chrome, Safari 和 Opera 浏览器
    (document as any).webkitExitFullscreen();
  } else if ((document as any).msExitFullscreen) { // 兼容IE/Edge 浏览器
    (document as any).msExitFullscreen();
  }
  isFullscreen.value = false;
};
// 进入全屏
const enterFullscreen = (element: HTMLDivElement) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if ((element as any).mozRequestFullScreen) { // 兼容Firefox浏览器
    (element as any).mozRequestFullScreen();
  } else if ((element as any).webkitRequestFullscreen) { // 兼容Chrome, Safari 和 Opera 浏览器
    (element as any).webkitRequestFullscreen();
  } else if ((element as any).msRequestFullscreen) { // 兼容IE/Edge 浏览器
    (element as any).msRequestFullscreen();
  }
  isFullscreen.value = true;
};
// 监听全屏状态变化
const handleFullscreenChange = () => {
  isFullscreen.value = document.fullscreenElement !== null;
  if (isWebFullScreen.value) {
    isWebFullScreen.value = false;
    emit('changWebFullScreen', false);
    document.body.classList.remove('webscreen-fix');
  }
  showControls('video');
};
// 监听画中画状态改变
const handlePiPChange = () => {
  isInPictureInPicture.value = document.pictureInPictureElement !== null;
};
// 监听键盘事件
const handleKeyboard = (event: KeyboardEvent) => {
  // 检查当前焦点元素
  const activeElement = document.activeElement as HTMLElement;
  const isInputField = ['INPUT', 'TEXTAREA'].includes(activeElement.tagName);

  if (isInputField) return;

  switch (event.key) {
    case ' ': // 空格键 播放
      event.preventDefault();
      togglePlayPause();
      break;
    case 'f': // F键 全屏
    case 'F':
      toggleFullscreen();
      break;
    case 'd': // D键 弹幕
    case 'D':
      displayDanmu.value = !displayDanmu.value;
      break;
    case 'm': // M键 静音
    case 'M':
      if (volume.value !== 0) {
        originalVolume.value = volume.value;
        toggleMute();
      } else {
        toggleMute();
      }
      break;
    case 'ArrowRight': // →键 快进5秒
      event.preventDefault();
      videoPlayer.value!.currentTime += 5;
      break;
    case 'ArrowLeft': // ←键 回退5秒
      event.preventDefault();
      videoPlayer.value!.currentTime -= 5;
      break;
    case 'ArrowUp': // ↑键 音量+10
      event.preventDefault();
      clearTimeout(volumeHintTimer);
      volumeHint.value = true;
      volumeHintTimer = setTimeout(() => {
        volumeHint.value = false;
      }, 3000);
      updateVolume(volume.value + 0.1);
      break;
    case 'ArrowDown': // ↓键 音量-10
      event.preventDefault();
      clearTimeout(volumeHintTimer);
      volumeHint.value = true;
      volumeHintTimer = setTimeout(() => {
        volumeHint.value = false;
      }, 3000);
      updateVolume(volume.value - 0.1);
      break;
    default:
      break;
  }
};
const handleVolumeChangeWithWheel = (event: WheelEvent) => {
  if (isFullscreen.value || isWebFullScreen.value) {
    clearTimeout(volumeHintTimer);
    volumeHint.value = true;
    volumeHintTimer = setTimeout(() => {
      volumeHint.value = false;
    }, 3000);
  }
  // 滚轮事件处理
  if (event.deltaY < 0) {
    // 向上滚动，增加音量
    updateVolume(volume.value + 0.02);
  } else if (event.deltaY > 0) {
    if (!isMuted.value) {
      // 向下滚动，减少音量
      updateVolume(volume.value - 0.02);
    }
  }
};
// 获取本地存储的播放器用户个性化信息
const getPlayerConfig = () => {
  playerConfig.value = getPlayerProfile();
  volume.value = playerConfig.value?.playerSetting.volume;
};
// 将用户的播放器用户个性化信息保存到本地
const setPlayerConfig = () => {

};
const getLikeCard = (index: number): InteractionLike | null => {
  if (playerPlayerCmdDmWrapRef.value) {
    return playerPlayerCmdDmWrapRef.value.getLikeCard(index);
  }
  return null;
}
const getLinkCard = (index: number): InteractionLink | null => {
  if (playerPlayerCmdDmWrapRef.value) {
    return playerPlayerCmdDmWrapRef.value.getLinkCard(index);
  }
  return null;
}
const getVoteCard = (index: number): InteractionVote | null => {
  if (playerPlayerCmdDmWrapRef.value) {
    return playerPlayerCmdDmWrapRef.value.getVoteCard(index);
  }
  return null;
}
const handlePlay = () => {
  isPlaying.value = true;
}

const handlePause = () => {
  isPlaying.value = false;
}
watch(() => volumeHint.value, (newValue) => {
  if (newValue && showVibiVoHint.value) {
    showVibiVoHint.value = false;
  }
});
// 监听props传过来的时间变化
watch(() => props.currentTimes, (newValue) => {
  if (!videoPlayer.value) return;
  videoPlayer.value.currentTime = newValue;
  currentProgress.value = newValue;
});
// 监听视频缓url地址
watch(() => props.videoUrl, (newValue) => {
  destroyPlayer();
  initPlayer(newValue);
});
// 监听全屏状态变化 监听滚轮从而音量
watch(() => isWebFullScreen.value || isFullscreen.value, (newValue) => {
  if (newValue) {
    // 开始监听整个页面的滚轮事件
    document.addEventListener('wheel', handleVolumeChangeWithWheel, { passive: false });
  } else {
    // 停止监听整个页面的滚轮事件
    document.removeEventListener('wheel', handleVolumeChangeWithWheel);
  }
});
// 初始化MP4播放器
const initMp4Player = (videoUrl: string) => {
  if (videoPlayer.value) {
    videoPlayer.value.src = videoUrl;
  }
};
// 判断是否为苹果设备
const isAppleDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return (
    /iphone|ipad|ipod/.test(userAgent) ||
    (userAgent.includes('mac') && userAgent.includes('safari'))
  );
};
// dash 配置
const dashConfig = {
  live: false, // 设置为false表示点播模式
  autoStart: true, // 自动开始播放
  autoPlay: true, // 自动播放
  autoPauseOnLowBuffer: false, // 禁止自动暂停以防止缓冲不足
  bufferingGoal: 5, // 缓冲目标，单位为秒
  minBufferLevel: 3, // 最小缓冲级别，单位为秒
  maxBufferLevel: 10, // 最大缓冲级别，单位为秒
  maxBufferLength: 10000, // 最大缓冲长度，单位为毫秒
};

// 初始化dash
const initDash = async (videoUrl: string) => {
  // 导入dashjs
  const dashjs = await import('dashjs');
  // 创建dash播放器实例
  dashPlayer.value = dashjs.MediaPlayer().create();
  dashPlayer.value.setAutoPlay(true); // 自动播放
  dashPlayer.value.setConfig(dashConfig);

  // 监听缓冲变化
  dashPlayer.value.on(dashjs.MediaPlayer.events.BUFFER_LEVEL_UPDATED, () => {
    onProgress();
  });

  dashPlayer.value.on(dashjs.MediaPlayer.events.BUFFER_EMPTY, () => {
    console.log('Buffer is empty.');
  });
  if (!videoPlayer.value) return;
  dashPlayer.value.initialize(videoPlayer.value, videoUrl, true);
  videoPlayer.value.play()
    .then(() => {

    })
    .catch((error) => {
      if (!videoPlayer.value) return;
      // 静音
      toggleMute();
      videoPlayer.value.play();
    });
};
// 监听元素是否进入可视区域
// if (process.client) {
observer.value = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (props.isUpload) return;
    if (entry.isIntersecting) {
      // 元素进入可视区域
      isShowMinPlayer.value = false;
    } else {
      // 元素离开可视区域
      if (!isInPictureInPicture.value) {
        isShowMinPlayer.value = true;
        if (!minPlayerRef.value) return;
        minPlayerRef.value.onmousedown = fnDown
      }
    }
  });
}, { threshold: 0.5 });
// }
// 初始化视频播放器
const initPlayer = async (videoUrl: string) => {
  switch (props.protocol) {
    case 'mp4':
      initMp4Player(videoUrl);
      break;
    case 'dash':
      await initDash(videoUrl);
      break;
  }
}
// 销毁视频播放器
const destroyPlayer = () => {
  // 清理dash实例
  if (dashPlayer.value) {
    dashPlayer.value.off();
    dashPlayer.value.destroy();
  }
}
const getVideoCurTime = () => {
  if (videoPlayer.value) {
    return videoPlayer.value.currentTime;
  }
  return 0;
}
const changUpdateCard = (type: string, index: number) => {
  emit('updateCard', type, index);
}

onMounted(async () => {
  isLoaded.value = true;
  if (props.isUpload) {
    isLoading.value = false;
  }
  if (!videoPlayer.value) return;
  // 获取播放器配置
  videoPlayer.value.volume = volume.value;
  if (props.danmakuElement) {
    await DanmuList.initDmList(props.danmakuElement);
  }
  await initPlayer(props.videoUrl);
  document.addEventListener('fullscreenchange', handleFullscreenChange);
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
  document.addEventListener('enterpictureinpicture', handlePiPChange);
  document.addEventListener('leavepictureinpicture', handlePiPChange);
  document.addEventListener('keydown', handleKeyboard);
  // 监听播放事件
  videoPlayer.value.addEventListener('play', handlePlay);

  // 监听暂停事件
  videoPlayer.value.addEventListener('pause', handlePause);
  if (videoPlayerRef.value && observer.value) {
    observer.value.observe(videoPlayerRef.value);
  }
});
onBeforeUnmount(() => {
  // 移除事件监听
  document.removeEventListener('fullscreenchange', handleFullscreenChange);
  document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
  document.removeEventListener('enterpictureinpicture', handlePiPChange);
  document.removeEventListener('leavepictureinpicture', handlePiPChange);
  document.removeEventListener('keydown', handleKeyboard);
  document.removeEventListener('wheel', handleVolumeChangeWithWheel);
  videoPlayer.value?.removeEventListener('play', handlePlay);
  videoPlayer.value?.removeEventListener('pause', handlePause);
  videoPlayerRef.value && observer.value?.unobserve(videoPlayerRef.value);
  observer.value?.disconnect();
  observer.value = null;
  // 销毁播放器
  destroyPlayer();
});
defineExpose({
  getVideoCurTime,
  getLikeCard,
  getLinkCard,
  getVoteCard
});
</script>
<style scoped lang="scss">
.player-container {
  position: relative;
  height: 100%;
  width: 100%;

  .player-primary-area {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    height: 100%;
    width: 100%;

    .player-video-area {
      -webkit-box-flex: 1;
      background-color: #000;
      -ms-flex: 1;
      flex: 1;
      overflow: hidden;
      position: relative;
      height: 100%;
      width: 100%;

      .player-video-perch {
        -webkit-box-flex: 0;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex: none;
        flex: none;
        height: 100%;
        justify-content: center;
        position: absolute;
        width: 100%;
        z-index: 0;

        .player-video-wrap {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          display: block;
          height: 100%;
          width: 100%;

          video {
            content-visibility: visible;
            display: block;
            height: 100%;
            margin: auto;
            width: 100%;
          }
        }

        .state-mirror {
          video {
            -webkit-transform: rotateX(.001deg) rotateY(180.001deg);
            transform: rotateX(.001deg) rotateY(180.001deg);
          }
        }
      }

      .player-video-poster {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        pointer-events: none;
      }

      .show {
        -webkit-animation: fadeIn 0.2s ease-in-out;
        animation: fadeIn 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        transition: opacity 0.2s ease-in-out;
        opacity: 1;
      }

      .hide {
        -webkit-animation: fadeOut 0.2s ease-in-out;
        animation: fadeOut 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        transition: opacity 0.2s ease-in-out;
        opacity: 0;
      }

      .player-top-wrap {
        color: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 45;

        .player-top-left {
          left: 12px;
          margin-top: 18px;
          position: absolute;

          .player-top-left-title {
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            margin-bottom: 18px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100% !important;
          }

          .player-top-left-follow {
            .player-follow {
              -webkit-box-align: center;
              -ms-flex-align: center;
              -webkit-box-flex: 0;
              align-items: center;
              background-color: rgba(0, 0, 0, .4);
              border-radius: 26px;
              cursor: pointer;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -ms-flex: 0;
              flex: 0;
              font-size: 12px;
              font-weight: 400;
              height: 32px;
              line-height: 32px;
              margin-bottom: 8px;
              pointer-events: all;
              text-align: center;
              align-items: center;
              width: 89px;

              .player-follow-face {
                -webkit-box-flex: 0;
                border-radius: 50%;
                -ms-flex: none;
                flex: none;
                height: 24px;
                margin-left: 4px;
                vertical-align: bottom;
                width: 24px;
              }

              .player-follow-icon {
                fill: #fff;
                -webkit-box-flex: 0;
                -ms-flex: none;
                flex: none;
                height: 14px;
                line-height: 14px;
                margin-left: 8px;
                width: 14px;

                .icon-plus {
                  width: 100%;
                  height: 100%;
                }
              }

              .player-follow-text {
                -webkit-box-flex: 0;
                -ms-flex: none;
                flex: none;
                margin-left: 5px;
              }

            }
          }
        }
      }

      .player-state-wrap {
        display: flex;
        position: absolute;
        z-index: 48;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        flex-direction: column;
        justify-content: center;

        .player-state-wrap-play {
          display: block;
          position: absolute;
          bottom: 68px;
          cursor: pointer;
          pointer-events: none;
          position: absolute;
          right: 34px;
          background: url(@/assets/img/player/state.svg);
          height: 64px;
          width: 64px;
        }

        .player-state-buff-icon {
          display: block;
          width: 32px;
          height: 32px;
          background-size: 100% 100%;
          background-position: 50%;
          background-repeat: no-repeat;
          background-image: url(@/assets/img/platform/cover_loading.webp);
          margin: 0 auto;

        }

        .player-state-buff-text {
          padding-top: 10px;
          display: block;
          font-size: 16px;
          color: #ffffff;
          line-height: 18px;
          margin: 0 auto;
        }

      }

      .player-loading-panel {
        background-color: #000;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 57;

        .player-loading-panel-blur {
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          align-items: center;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          height: 100%;
          justify-content: center;
          pointer-events: none;
          position: relative;
          width: 100%;

          .player-loading-panel-blur-detail {
            -webkit-animation: bpx-animation-loading .94s steps(1) infinite;
            animation: animation-loading .94s steps(1) infinite;
            background: url(@/assets/img/ploading.png) no-repeat;
            height: 184px;
            -webkit-transform: scale(.5);
            transform: scale(.5);
            width: 320px;
          }
        }
      }

      .hidden {
        display: none;
      }

      .player-mini-warp {
        cursor: move;
        position: fixed;
        width: 320px;
        height: 180px;
        background-color: #000;
        z-index: 80;
        border-radius: 6px;
        display: none;
        opacity: 0;
        overflow: hidden;
        -webkit-transition: opacity 0.5s ease-in-out;
        transition: opacity 0.5s ease-in-out;

        .player-video-perch {
          pointer-events: none;
          top: 0;
        }

        .player-mini-dm_wrp {
          width: 320px;
          height: 180px;
          pointer-events: none;
        }

        .player-mini-close {
          fill: #ffffff;
          height: 20px;
          right: 8px;
          top: 8px;
          width: 20px;
          cursor: pointer;
          visibility: hidden;
          position: absolute;
          z-index: 5;

          .player-mini-close-icon {
            width: 100%;
            height: 100%;
            transition: all 0.3s ease;
          }
        }

        .player-mini-state {
          height: 100px;
          left: 50%;
          margin: -50px 0 0 -50px;
          position: absolute;
          top: 50%;
          width: 100px;
          visibility: hidden;
          z-index: 5;

          .player-mini-state-play {
            background: url(@/assets/img/player/play.svg);
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: 80px 80px;
            bottom: 0;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .player-mini-state-pause {
            background: url(@/assets/img/player/pause.svg);
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: 80px 80px;
            bottom: 0;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
            transition: all 0.3s ease;
          }
        }

        .player-mini-progress {
          position: absolute;
          height: 2px;
          width: 100%;
          left: 0;
          bottom: 0;
          z-index: 4;
        }

        &:hover {

          .player-mini-state,
          .player-mini-close {
            visibility: visible;
          }
        }

        // 用于小屏播放器 
        // dom传送后的css样式
        .player-video-wrap {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          display: block;
          height: 100%;
          width: 100%;

          video {
            content-visibility: visible;
            display: block;
            height: 100%;
            margin: auto;
            width: 100%;
          }
        }
      }

      .show-min-player {
        display: block;
        opacity: 1;
      }

      .player-volume-hint {
        box-sizing: content-box;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background: hsla(0, 0%, 100%, .8);
        border-radius: 4px;
        color: #000;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-size: 20px;
        height: 32px;
        left: 50%;
        min-width: 84px;
        padding: 8px;
        position: absolute;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        z-index: 77;
        pointer-events: none;
        animation: hl-fade-in .3s forwards;

        .player-volume-hint-icon {
          -webkit-box-flex: 0;
          -ms-flex: none;
          flex: none;
          height: 34px;
          width: 34px;

        }

        .player-volume-hint-text {
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          line-height: 34px;
          padding: 0 2px;
          text-align: center;
        }
      }

      .player-volume-hint-hide {
        animation: hl-fade-out .3s forwards;
      }

      .player-toast-wrap {
        background-color: rgba(0, 0, 0, .8);
        border-radius: 4px;
        bottom: 68px;
        font-size: 14px;
        left: 10px;
        line-height: 36px;
        pointer-events: none;
        position: absolute;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        z-index: 65;
        opacity: 0;
        color: #fff;
        padding: 0 8px 0 12px;
        -webkit-transition: opacity .3s;
        transition: opacity .3s;
        visibility: hidden;

        .player-toast-close {
          fill: #fff;
          float: left;
          height: 100%;
          margin-right: 4px;
          position: relative;
          top: 1px;
          width: auto;

          i {
            line-height: 36px;
            pointer-events: all;
            cursor: pointer;
          }
        }

        .player-toast-jump {
          color: var(--brand_pink);
          margin: 0 6px 0 6px;
          text-decoration: none;
          cursor: pointer;
          pointer-events: all;
        }
      }

    }

    .player-video-area * {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .web-full-screen {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 100000;
    }
  }
}

// }

// 全屏后的样式
// 使用scss定义一个混合来处理全屏样式
@mixin fullscreen-style() {
  .player-video-area:fullscreen {
    // 全屏模式下的样式
    @content;
  }

  // 兼容不同浏览器的前缀
  .player-video-area:-webkit-full-screen {
    @content;
  }

  .player-video-area:-moz-full-screen {
    @content;
  }

  .player-video-area:-ms-fullscreen {
    @content;
  }

  // 网页全屏样式
  .player-video-area-web-full {
    @content;
  }
}

@include fullscreen-style() {
  .player-top-wrap {
    .player-top-left {
      left: 24px !important;
      margin-top: 24px !important;

      @media screen and (min-width: 750px) {
        .player-top-left-title {
          font-size: 20px !important;
        }
      }

      .player-top-left-follow {
        @media screen and (min-width: 750px) {
          .player-follow {
            height: 40px !important;
            line-height: 40px !important;
            width: 97px !important;

            .player-follow-face {
              height: 32px !important;
              width: 32px !important;
            }

            .player-follow-icon {
              line-height: 40px;
            }

          }
        }
      }
    }
  }

  .player-state-wrap {
    .player-state-wrap-play {
      bottom: 100px !important;
    }
  }

  :deep(.player-controls) {
    height: 90px !important;
    min-width: 750px !important;

    .player-controls-bottom {
      height: 70px;

      .player-controls-left {
        padding-left: 30px;

        .player-controls-icon {
          width: 60px;
          height: 24px;
        }

        .player-controls-play-time {
          margin-left: 20px;
          height: 26px;

          .player-play-time {
            line-height: 26px;
            font-size: 14px;
          }
        }

        .player-controls-play-icon {
          width: 28px;
          height: 28px;
        }
      }

      .player-controls-center {
        display: block;
      }

      .player-controls-right {
        padding-right: 30px;

        .player-controls-item {
          height: 30px;

          span {
            line-height: 24px;
            font-size: 16px;
          }
        }

        .controls-icon {
          width: 48px;
        }

        .controls-backrate {
          width: 44px;
        }

        .eplist-result {
          width: 40px;
        }

        .controls-quality {
          margin-right: 14px;
        }
      }
    }
  }

  :deep(.player-cmd-dm-wrap) {
    @media (min-width: 1366.9px) {
      .hl-editor {
        height: 45px;

        .hl-guide-three {
          height: 45px;
          width: 177.5px;

          span {
            box-sizing: border-box;
            width: 56.25px;
            height: 45px;

            .hl-icon {
              width: 100%;
              height: 100%;
            }
          }
        }

        .hl-guide-follow {
          width: 82.5px;
          height: 30px;
        }
      }

      .hl-link {
        height: 62.5px;

        .hl-link-left {
          width: 290px;
          height: 62.5px;

          .hl-link-icon {
            width: 112.5px;
            height: 62.5px;
          }

          .hl-link-msg {
            width: 177.5px;
          }
        }

        .hl-link-line {
          width: 1.25px;
          height: 45px;
        }

        .hl-link-right {
          width: 56.25px;
          height: 62.5px;

          .hl-link-watchlater {
            .hl-link-watchlater-icon {
              width: 25px;
              height: 25px;
            }
          }
        }
      }

      .hl-vote {
        .hl-vote-question {
          width: 196.25px;
          height: 17.5px;
          line-height: 17.5px;
          font-size: 13px;
        }

        .hl-vote-an {
          width: 196.25px;
          height: 32.5px;

          .hl-vote-an-bg {
            .hl-vote-an-bg-buffer {
              width: 32.5px;
            }
          }

          .hl-vote-an-text {
            height: 32.5px;
            line-height: 32.5px;
            font-size: 13px;

            .hl-vote-an-text-index {
              width: 13.5px;
            }

            .hl-vote-an-text-doc {
              width: 120px;
            }
          }
        }
      }
    }
  }

  .player-volume-hint-show {
    opacity: 1;
  }

  .player-toast-wrap {
    bottom: 94px !important;
  }
}

// 加载动画
@keyframes animation-loading {
  0% {
    background-position: 0 0;
  }

  6.25% {
    background-position: -320px 0;
  }

  12.5% {
    background-position: -640px 0;
  }

  18.75% {
    background-position: -960px 0;
  }

  25% {
    background-position: -1280px 0;
  }

  31.25% {
    background-position: -1600px 0;
  }

  37.5% {
    background-position: -1920px 0;
  }

  43.75% {
    background-position: -2240px 0;
  }

  50% {
    background-position: -2560px 0;
  }

  56.25% {
    background-position: -2880px 0;
  }

  62.5% {
    background-position: -3200px 0;
  }

  68.75% {
    background-position: -3520px 0;
  }

  75% {
    background-position: -3840px 0;
  }

  81.25% {
    background-position: -4160px 0;
  }

  87.5% {
    background-position: -4480px 0;
  }

  93.75% {
    background-position: 0 -184px;
  }

  100% {
    background-position: -320px -184px;
  }
}
</style>