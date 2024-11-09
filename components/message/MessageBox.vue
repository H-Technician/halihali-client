<template>
  <TransitionGroup name="slide-fade">
    <div class="hui-message" v-if="showMessage">
      <div class="hui-message-content">
        <svg v-if="props.mode === 'info'" class="icon-svg icon-info" focusable="false" data-icon="info-circle"
          width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896">
          <path
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z">
          </path>
        </svg>
        <svg v-if="props.mode === 'success'" class="icon-svg icon-success" focusable="false" data-icon="check-circle"
          width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896">
          <path
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z">
          </path>
        </svg>
        <svg v-if="props.mode === 'error'" class="icon-svg icon-error" focusable="false" data-icon="close-circle"
          width="1em" height="1em" fill="currentColor" aria-hidden="true" fill-rule="evenodd" viewBox="64 64 896 896">
          <path
            d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z">
          </path>
        </svg>
        <svg v-if="props.mode === 'warning'" class="icon-svg icon-warning" focusable="false"
          data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"
          viewBox="64 64 896 896">
          <path
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z">
          </path>
        </svg>
        <svg v-if="props.mode === 'loading'" width="1em" height="1em" fill="currentColor"
          class="icon-svg icon-loading circle" viewBox="0 0 50 50">
          <circle class="path" cx="25" cy="25" r="20" fill="none"></circle>
        </svg>
        <p class="message-content">{{ props.content }}</p>
      </div>
    </div>
  </TransitionGroup>
</template>
<script setup lang="ts">
import { ref } from 'vue'
interface Props {
  duration?: number // 自动关闭的延时，单位 ms
  top?: string | number // 消息距离顶部的位置，单位 px
  content: string | undefined;
  mode: string
}
const props = withDefaults(defineProps<Props>(), {
  duration: 2000,
  top: 30
});
const showMessage = ref<boolean>(false);
const emit = defineEmits(['close']);
const show = () => {
  showMessage.value = true
  setTimeout(() => {
    showMessage.value = false
    setTimeout(() => {
      emit('close');
    }, 300);
  }, props.duration)
}
onMounted(() => {
  show();
});
</script>
<style lang="scss" scoped>
// 滑动渐变过渡效果
.slide-fade-move,
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-30px);
  -ms-transform: translateY(-30px);
  /* IE 9 */
  -webkit-transform: translateY(-30px);
  /* Safari and Chrome */
  opacity: 0;
}

.slide-fade-leave-active {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.hui-message {
  text-align: center;

  .hui-message-content {
    display: inline-flex;
    align-items: center;
    padding: 9px 12px;
    background: #fff;
    border-radius: 4px;
    height: 24px;
    box-shadow:
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05);
    pointer-events: auto; // 保证内容区域部分可以正常响应鼠标事件

    .icon-svg {
      display: inline-block;
      font-size: 16px;
      fill: currentColor;
      margin-right: 8px;
    }

    .icon-info {
      color: var(--brand_blue);
    }

    .icon-success {
      color: #52c41a;
    }

    .icon-warning {
      color: #faad14;
    }

    .icon-error {
      color: #ff4d4f;
    }

    .icon-loading {
      color: var(--brand_blue);
    }

    .circle {
      display: inline-block;
      stroke: currentColor;
      animation: loading-rotate 2s linear infinite;

      @keyframes loading-rotate {
        100% {
          transform: rotate(360deg);
        }
      }

      .path {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: 0;
        stroke-width: 5;
        stroke-linecap: round;
        animation: loading-dash 1.5s ease-in-out infinite;

        @keyframes loading-dash {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }

          50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -40px;
          }

          100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -120px;
          }
        }
      }
    }

    .message-content {
      display: inline-block;
      font-size: 14px;
      color: #999;
      font-weight: 100;
      line-height: 24px;
      height: 24px;
      padding: 0;
      margin: 0;

    }
  }
}
</style>