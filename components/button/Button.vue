<script setup lang="ts">
import { ref, nextTick, computed } from 'vue'
import type { Slot } from 'vue'
import { useSlotsExist } from '@/utils/useSlotsExist'
interface Props {
  type?: 'default' | 'reverse' | 'primary' | 'danger' | 'dashed' | 'text' | 'link' // 设置按钮类型
  shape?: 'default' | 'circle' | 'round' // 设置按钮形状
  icon?: Slot // 设置按钮图标
  size?: 'small' | 'middle' | 'large' // 设置按钮尺寸
  ghost?: boolean // 按钮背景是否透明，仅当 type: 'primary' | 'danger' 时生效
  buttonClass?: string // 设置按钮类名
  rippleColor?: string // 点击时的波纹颜色，一般不需要设置，默认会根据 type 自动匹配，主要用于自定义样式时且 type: 'default'
  disabled?: boolean // 是否禁用
  loading?: boolean // 是否加载中
  loadingType?: 'static' | 'dynamic' // 加载指示符类型
  block?: boolean // 是否将按钮宽度调整为其父宽度
}
withDefaults(defineProps<Props>(), {
  type: 'default',
  shape: 'default',
  icon: undefined,
  size: 'middle',
  ghost: false,
  rippleColor: undefined,
  buttonClass: undefined,
  href: undefined,
  target: '_self',
  disabled: false,
  loading: false,
  loadingType: 'dynamic',
  block: false
})
const presetRippleColors = {
  default: '#00aeec',
  reverse: '#00aeec',
  primary: '#00aeec',
  danger: '#ff4d4f',
  dashed: '#00aeec',
  text: 'transparent',
  link: 'transparent'
}
const wave = ref(false)
const emit = defineEmits(['click'])
const slotsExist = useSlotsExist(['icon', 'default'])
const showIconOnly = computed(() => {
  return slotsExist.icon && !slotsExist.default
})
function onClick(e: Event) {
  if (wave.value) {
    wave.value = false
    nextTick(() => {
      wave.value = true
    })
  } else {
    wave.value = true
  }
  emit('click', e)
}
function onKeyboard(e: KeyboardEvent) {
  onClick(e)
}
</script>
<template>
  <div class="hl-button_wrap" :class="[
    `hl-button-${type} hl-button-${size}`,
    {
      [`loading-${size}`]: loading,
      'hl-button-icon-only': showIconOnly,
      'hl-button-circle': shape === 'circle',
      'hl-button-round': shape === 'round',
      'hl-button-loading-blur': loading,
      'hl-button-ghost': ghost,
      'hl-button-block': block,
      'hl-button-disabled': disabled
    },
    buttonClass
  ]" :style="`--ripple-color: ${rippleColor || presetRippleColors[type]};`" :disabled="disabled" @click="onClick"
    @keydown.enter.prevent="onKeyboard">
    <div v-if="loading || !slotsExist.icon" class="hl-button-loading">
      <div v-if="loadingType === 'static'" class="hl-ring-circle">
        <svg class="circle" width="1em" height="1em" fill="currentColor" viewBox="0 0 100 100">
          <path d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90" stroke-linecap="round" class="path"
            fill-opacity="0"></path>
        </svg>
      </div>
      <div v-if="loadingType === 'dynamic'" class="hl-dynamic-circle">
        <svg class="circle" viewBox="0 0 50 50" width="1em" height="1em" fill="currentColor">
          <circle class="path" cx="25" cy="25" r="20" fill="none"></circle>
        </svg>
      </div>
    </div>
    <span v-if="!loading && slotsExist.icon" class="hl-button-icon">
      <slot name="icon"></slot>
    </span>
    <span v-if="slotsExist.default" class="hl-button-content">
      <slot></slot>
    </span>
  </div>
</template>
<style lang="scss" scoped>
.hl-button_wrap {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  line-height: 1.5714285714285714;
  color: rgba(0, 0, 0, 0.88);
  white-space: nowrap;
  text-align: center;
  background-color: transparent;
  border: 1px solid transparent;
  outline: none;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  .hl-button-loading {
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    opacity: 0;
    width: 0;
    transition:
      margin-right 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    .hl-ring-circle,
    .hl-dynamic-circle {
      display: inline-flex;
      justify-content: start;

      .circle {
        fill: currentColor;
      }
    }

    .hl-ring-circle {
      .circle {
        animation: spin-circle 0.8s linear infinite;
        -webkit-animation: spin-circle 0.8s linear infinite;

        .path {
          stroke-width: 10;
          stroke-dashoffset: 0;
          stroke-dasharray: 84.82px, 282.74px;
        }
      }
    }

    .hl-dynamic-circle {
      .circle {
        animation: spin-circle 2s linear infinite;
        -webkit-animation: spin-circle 2s linear infinite;

        .path {
          stroke: currentColor;
          stroke-width: 5;
          stroke-dasharray: 90, 150;
          stroke-dashoffset: 0;
          stroke-linecap: round;
          animation: loading-dash 1.5s ease-in-out infinite;
          -webkit-animation: loading-dash 1.5s ease-in-out infinite;

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
              stroke-dashoffset: -124px;
            }
          }
        }
      }
    }

    @keyframes spin-circle {
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .hl-button-icon,
  .hl-button-content {
    display: inline-flex;
    align-items: center;

    :deep(svg) {
      fill: currentColor;
    }
  }

  &>.hl-button-icon+.hl-button-content {
    margin-left: 8px;
  }
}

.hl-button-default {
  background-color: #ffffff;
  border-color: #d9d9d9;

  &:hover {
    // color: var(--brand_blue_hover) !important;
    border-color: var(--brand_blue_hover);
  }

  &:active {
    // color: var(--brand_blue_active) !important;
    border-color: var(--brand_blue_active);
  }

  .hl-button-icon {
    :deep(svg) {
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}

.hl-button-reverse {
  &:hover {
    color: #fff !important;
    background-color: var(--brand_blue_hover);
    border-color: var(--brand_blue_hover);
  }

  &:active {
    color: #fff !important;
    background-color: var(--brand_blue_active);
    border-color: var(--brand_blue_active);
  }
}

.hl-button-primary {
  color: #fff;
  background-color: var(--brand_blue);
  border-color: var(--brand_blue);

  &:hover {
    color: #fff;
    background-color: var(--brand_blue_hover);
    border-color: var(--brand_blue_hover);
  }

  &:active {
    color: #fff;
    background-color: var(--brand_blue_active);
    border-color: var(--brand_blue_active);
  }
}

.hl-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover {
    color: #fff;
    background-color: #ff7875;
    border-color: #ff7875;
  }

  &:active {
    color: #fff;
    background-color: #d9363e;
    border-color: #d9363e;
  }
}

.hl-button-dashed {
  border-style: dashed;
}

.hl-button-text {
  &:hover {
    color: rgba(0, 0, 0, 0.88);
    background-color: rgba(0, 0, 0, 0.06);
  }

  &:active {
    color: rgba(0, 0, 0, 0.88);
    background-color: rgba(0, 0, 0, 0.15);
  }
}

.hl-button-link {
  color: var(--brand_blue);

  &:hover {
    color: var(--brand_blue_hover);
  }

  &:active {
    color: var(--brand_blue_active);
  }

  .hl-button-icon {
    :deep(svg) {
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}

.hl-button-small {
  font-size: 14px;
  height: 24px;
  padding: 0 7px;
  border-radius: 4px;
}

.hl-button-middle {
  font-size: 14px;
  height: 32px;
  padding: 4px 15px;
  border-radius: 6px;
}

.hl-button-large {
  font-size: 16px;
  height: 40px;
  padding: 6.428571428571429px 15px;
  border-radius: 8px;
}

.loading-small,
.loading-middle {
  .hl-button-loading {
    margin-right: 8px;
    width: 1em;
    opacity: 1;
  }
}

.loading-large {
  .hl-button-loading {
    margin-right: 8px;
    width: 1em;
    opacity: 1;
  }
}

.hl-button-icon-only {
  width: 32px;
  padding-left: 0;
  padding-right: 0;

  .hl-button-loading,
  .hl-button-icon {
    transform: scale(1.143);
  }

  .hl-button-loading {
    margin-right: 0;
  }
}

.hl-button-small .hl-button-icon-only {
  width: 24px;
  padding-left: 0;
  padding-right: 0;
}

.hl-button-large .hl-button-icon-only {
  width: 40px;
  padding-left: 0;
  padding-right: 0;
}

.hl-button-circle {
  min-width: 32px;
  padding-left: 0;
  padding-right: 0;
  border-radius: 50%;
}

.hl-button-small .hl-button-circle {
  min-width: 24px;
  padding-left: 0;
  padding-left: 0;
  border-radius: 50%;
}

.hl-button-large .hl-button-circle {
  min-width: 40px;
  padding-left: 0;
  padding-right: 0;
  border-radius: 50%;
}

.hl-button-round {
  border-radius: 32px;
  padding-left: 16px;
  padding-right: 16px;
}

.hl-button-small .hl-button-round {
  border-radius: 24px;
  padding-left: 12px;
  padding-right: 12px;
}

.hl-button-large .hl-button-round {
  border-radius: 40px;
  padding-left: 20px;
  padding-right: 20px;
}

.hl-button-icon-only .hl-button-round,
.hl-button-small .hl-button-icon-only .hl-button-round,
.hl-button-large .btn-icon-only .hl-button-round {
  width: auto;
}

.hl-button-loading-blur {
  opacity: 0.65;
  pointer-events: none;
}

.hl-button-primary .btn-ghost:not(.hl-button-disabled) {
  color: var(--brand_blue);
  border-color: var(--brand_blue);
  background-color: transparent;

  &:hover {
    color: var(--brand_blue_hover);
    border-color: var(--brand_blue_hover);
  }

  &:active {
    color: var(--brand_blue_active);
    border-color: var(--brand_blue_active);
  }

  .btn-icon {
    :deep(svg) {
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}

.hl-button-danger .hl-button-ghost:not(.hl-button-disabled) {
  color: #f56c6c;
  border-color: #f56c6c;
  background-color: transparent;

  &:hover {
    color: #ff7875;
    border-color: #ff7875;
  }

  &:active {
    color: #d9363e;
    border-color: #d9363e;
  }

  .hl-button-icon {
    :deep(svg) {
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}

.hl-button-block {
  width: 100%;
}

.hl-button-disabled {
  border-color: #d9d9d9;
  color: rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.04);
  cursor: not-allowed;

  &:hover,
  &:active {
    border-color: #d9d9d9;
    color: rgba(0, 0, 0, 0.25) !important;
    background-color: rgba(0, 0, 0, 0.04);
  }

  &.hl-button-text,
  &.hl-button-link {
    background-color: transparent;
    border: none;
  }
}
</style>