<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import type { Slot } from 'vue'
import { useSlotsExist } from '@/utils/useSlotsExist'
interface Props {
  icon?: Slot // 自定义图标 slot
  description?: string // 文字描述 string | slot
  tooltip?: string // 文字提示内容 string | slot
  type?: 'default' | 'primary' // 设置按钮类型
  shape?: 'circle' | 'square' // 设置按钮形状
  bottom?: number | string // BackTop 距离页面底部的高度，单位 px
  right?: number | string // BackTop 距离页面右侧的宽度，单位 px
  zIndex?: number // 设置 BackTop 的 z-index
  visibilityHeight?: number // 滚动时触发显示回到顶部按钮的高度，单位 px
  to?: string | HTMLElement // BackTop 渲染的容器节点，可选：元素标签名 (例如 'body') 或者元素本身，下同
  listenTo?: string | HTMLElement // 监听滚动的元素，如果为 undefined 会监听距离最近的一个可滚动的祖先节点
}
const props = withDefaults(defineProps<Props>(), {
  icon: undefined,
  description: undefined,
  tooltip: undefined,
  type: 'default',
  shape: 'square',
  bottom: 40,
  right: 40,
  zIndex: 9,
  visibilityHeight: 180,
  to: 'body',
  listenTo: undefined
})
const backtopRef = ref<HTMLElement | null>(null)
const scrollTop = ref<number>(0) // 滚动距离
const scrollTarget = ref<HTMLElement | null>(null) // 滚动目标元素
const targetElement = ref<HTMLElement | null>(null) // 渲染容器元素
const emits = defineEmits(['click', 'show'])
const slotsExist = useSlotsExist(['tooltip', 'icon', 'description'])
// 观察器的配置
const config = { childList: true, attributes: true, subtree: true }
// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(() => {
  scrollTop.value = scrollTarget.value?.scrollTop ?? 0
});
const backTopStyle = computed(() => {
  return {
    bottom: typeof props.bottom === 'number' ? props.bottom + 'px' : props.bottom,
    right: typeof props.right === 'number' ? props.right + 'px' : props.right,
    zIndex: props.zIndex
  }
});
const backTopShow = computed(() => {
  return scrollTop.value >= props.visibilityHeight
});
const showDescription = computed(() => {
  return slotsExist.description || props.description
});
watch(
  () => props.listenTo,
  () => {
    observer.disconnect()
    removeEventListener()
    observeScroll()
  },
  {
    flush: 'post' // 在侦听器回调中访问被 Vue 更新之后的 DOM
  }
);
watch(
  () => props.to,
  () => {
    appendBackTop()
  },
  {
    flush: 'post' // 在侦听器回调中访问被 Vue 更新之后的 DOM
  }
);
watch(backTopShow, (to) => {
  emits('show', to)
});
onMounted(() => {
  observeScroll()
  appendBackTop()
});
onBeforeUnmount(() => {
  observer.disconnect() // 停止观察
  removeEventListener()
  backtopRef.value?.remove()
});
function scrollEvent(e: Event) {
  scrollTop.value = (e.target as HTMLElement).scrollTop
}
function resizeEvent() {
  scrollTop.value = scrollTarget.value?.scrollTop ?? 0
}
function removeEventListener() {
  // 移除监听事件
  if (scrollTarget.value) {
    scrollTarget.value.removeEventListener('scroll', scrollEvent)
    window.removeEventListener('resize', resizeEvent)
  }
}
function observeScroll() {
  // 监听滚动的元素
  if (props.listenTo === undefined) {
    scrollTarget.value = getScrollParentElement(backtopRef.value?.parentElement)
  } else if (typeof props.listenTo === 'string') {
    scrollTarget.value = document.getElementsByTagName(props.listenTo)[0] as HTMLElement
  } else if (props.listenTo instanceof HTMLElement) {
    scrollTarget.value = props.listenTo
  }
  if (scrollTarget.value) {
    observer.observe(scrollTarget.value, config)
    scrollTarget.value.addEventListener('scroll', scrollEvent)
    window.addEventListener('resize', resizeEvent)
  }
}
function appendBackTop() {
  // 渲染容器节点
  if (typeof props.to === 'string') {
    targetElement.value = document.getElementsByTagName(props.to)[0] as HTMLElement
  } else if (props.to instanceof HTMLElement) {
    targetElement.value = props.to
  }
  targetElement.value?.appendChild(backtopRef.value!) // 保证 backtop 节点只存在一个
}
function getScrollParentElement(el: any) {
  if (el) {
    if (el.scrollHeight > el.clientHeight) {
      return el
    } else {
      return getScrollParentElement(el.parentElement)
    }
  }
  return null
}
function onBackTop() {
  scrollTarget.value &&
    scrollTarget.value.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滚动并产生过渡效果
    })
  emits('click')
}
</script>
<template>
  <Transition name="zoom">
    <div v-show="backTopShow" ref="backtopRef" class="hui-backtop-wrap" :style="backTopStyle" @click="onBackTop">
        <div class="hui-backtop" :class="`backtop-${type} backtop-${shape}`">
          <slot>
            <span class="backtop-icon" :class="{ 'icon-description': showDescription }">
              <slot name="icon">
                <IconsTop />
              </slot>
            </span>
            <span v-if="showDescription" class="backtop-description">
              <slot name="description">{{ description }}</slot>
            </span>
          </slot>
        </div>
    </div>
  </Transition>
</template>
<style lang="scss" scoped>
.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.zoom-enter-from,
.zoom-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.hui-backtop-wrap {
  position: fixed;
  z-index: var(--z-index);
  .hui-backtop {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 44px;
    min-width: 44px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    .backtop-icon {
      display: inline-flex;
      font-size: 26px;
      :deep(top-icon) {
        pointer-events: none;
        fill: currentColor;
        transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
    }
    .icon-description {
      font-size: 24px;
    }
    .backtop-description {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      pointer-events: none;
      transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
  .backtop-default {
    color: rgba(0, 0, 0, 0.88);
    background-color: rgba(255, 255, 255, 0.88);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
    .backtop-icon,
    .backtop-description {
      color: rgba(0, 0, 0, 0.88);
    }
    &:hover {
      background-color: rgba(255, 255, 255);
      box-shadow: 0 2px 8px 3px rgba(0, 0, 0, 0.12);
    }
  }
  .backtop-primary {
    color: #fff;
    background-color: var(--brand_blue);
    box-shadow: 0 2px 8px 0 rgba(9, 88, 217, 0.32);
    &:hover {
      background-color: #4096ff;
      box-shadow: 0 2px 8px 3px rgba(9, 88, 217, 0.32);
    }
  }
  .backtop-circle {
    border-radius: 22px;
  }
  .backtop-square {
    border-radius: 8px;
  }
}
</style>
