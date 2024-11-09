import { createVNode, render } from 'vue';
import type { VNode } from 'vue';

// 定义挂载和卸载动态组件的函数
class DanmuList {
  private vDanmuListnode: VNode | null = null;
  private danmuListWrap: HTMLElement | null = null;
  private unmountListener: (() => void) | null = null;

  public async initDmList(danmuWrapElement: string, onChangWebFullScreen?: (value: boolean) => void) {
    this.danmuListWrap = document.querySelector(danmuWrapElement);
    if (!this.danmuListWrap) {
    //   console.error(`Element with id ${danmuWrapElement} not found`);
      return;
    }

    try {
      const danmuList = await import('@/components/videoplayer/danmaku/DanmakuList.vue');
      if (danmuList) {
        this.vDanmuListnode = createVNode(danmuList.default, {});
        render(this.vDanmuListnode, this.danmuListWrap);
        // 注册页面卸载事件监听器
        this.unmountListener = () => this.unmountDmList();
        window.addEventListener('beforeunload', this.unmountListener);
      }
    } catch (error) {
      console.error('加载 danmuList 组件失败', error);
    }
  }

  public unmountDmList() {
    if (this.vDanmuListnode && this.danmuListWrap) {
      render(null, this.danmuListWrap);
      this.vDanmuListnode = null;

      // 移除页面卸载事件监听器
      if (this.unmountListener) {
        window.removeEventListener('beforeunload', this.unmountListener);
        this.unmountListener = null;
      }
    }
  }
}

export default new DanmuList();