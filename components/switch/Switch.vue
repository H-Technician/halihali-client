<template>
  <div class="hui-switch" 
  :class="{
    'switch-loading': loading,
    'switch-small': size === 'small',
    'switch-large': size === 'large',
    'switch-checked': props.modelValue,
    'switch-disabled': props.disabled
  }">
    <input
      type="checkbox"
      :v-model="props.modelValue"
      @change="onSwitch"
    />
    <div class="switch-inner">
    </div>
    <div class="switch-circle">
      <svg v-if="loading" class="circular" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none"></circle>
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  loading?: boolean // 是否加载中
  disabled?: boolean // 是否禁用
  size?: 'small' | 'middle' | 'large' // 开关大小
  modelValue?: boolean // (v-model) 指定当前是否选中
}
const props = withDefaults(defineProps<Props>(), {
  loading: false,
  disabled: false,
  size: 'middle',
  modelValue: false
});
const emit = defineEmits(['update:modelValue']);
const onSwitch = () => {
  // console.log((event.target as HTMLInputElement).checked, !props.modelValue)
  emit('update:modelValue', !props.modelValue);
}
</script>
<style scoped lang="scss">
.hui-switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  min-width: 33px;
  height: 22px;
  color: #ccc;
  font-size: 14px;
  line-height: 22px;
  // background: rgba(0, 0, 0, 0.25);
  background: #ccc;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;

  input {
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    box-sizing: border-box;
  }

  input[type="checkbox"] {
    -webkit-appearance: none; /* 移除默认样式 */
    appearance: none;
    margin: 0;
    opacity: 0;
  }

  .switch-inner {
    display: block;
    overflow: hidden;
    border-radius: 100px;
    height: 100%;
    padding-left: 24px;
    padding-right: 9px;
    transition:
      padding-left 0.2s ease-in-out,
      padding-right 0.2s ease-in-out;
  }

  .switch-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 100%;
    transition: all 0.2s ease-in-out;

    .circular {
      position: absolute;
      inset: 0;
      margin: auto;
      width: 14px;
      height: 14px;
      animation: loading-rotate 2s linear infinite;
      -webkit-animation: loading-rotate 2s linear infinite;

      @keyframes loading-rotate {
        100% {
          transform: rotate(360deg);
        }
      }

      .path {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: 0;
        stroke: $theme-color;
        stroke-width: 5;
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
            stroke-dashoffset: -120px;
          }
        }
      }
    }
  }
}

.switch-loading {
  cursor: not-allowed;
  opacity: 0.65;
  .switch-inner,
  .switch-circle {
    box-shadow: none;
    cursor: not-allowed;
  }
}
.switch-small {
  min-width: 28px;
  height: 16px;
  line-height: 16px;
  .switch-inner {
    padding-left: 18px;
    padding-right: 6px;
  }
  .switch-circle {
    width: 12px;
    height: 12px;
    .circular {
      width: 10px;
      height: 10px;
      .path {
        stroke-width: 4;
      }
    }
  }
}
.switch-large {
  min-width: 60px;
  height: 28px;
  line-height: 28px;
  .switch-inner {
    padding-left: 30px;
    padding-right: 12px;
  }
  .switch-circle {
    width: 24px;
    height: 24px;
    .circular {
      width: 20px;
      height: 20px;
      .path {
        stroke-width: 6;
      }
    }
  }
}
.switch-checked {
  background: var(--brand_blue);

  .switch-inner {
    padding-left: 9px;
    padding-right: 24px;
  }
  .switch-circle {
    left: calc(100% - 20px);
  }
}
.switch-small.switch-checked {
  .switch-inner {
    padding-left: 6px;
    padding-right: 18px;
  }
  .switch-circle {
    left: calc(100% - 14px);
  }
}
.switch-large.switch-checked {
  .switch-inner {
    padding-left: 12px;
    padding-right: 30px;
  }
  .switch-circle {
    left: calc(100% - 26px);
  }
}
.switch-disabled {
  cursor: not-allowed;
  opacity: 0.65;
  .switch-circle {
    cursor: not-allowed;
  }
}
</style>