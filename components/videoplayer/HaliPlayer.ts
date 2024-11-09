import { createVNode, render } from 'vue';
import type { VNode } from 'vue';
import type { InteractionCard } from '@/types/interaction';

// 定义挂载和卸载动态组件的函数
class Player {
  private vPlayernode: VNode | null = null;
  private playerWrap: HTMLElement | null = null;
  private unmountListener: (() => void) | null = null;

  public async mountPlayer(playerWrapElement: string, dashUrl: string, interactionCard: InteractionCard, danmakuElement: string, onChangWebFullScreen: (value: boolean) => void, onToggleWideScreen: (value: boolean) => void) {
    this.playerWrap = document.querySelector(playerWrapElement);
    if (!this.playerWrap) {
      console.error(`Element with id ${playerWrapElement} not found`);
      return;
    }

    try {
      const player = await import('@/components/videoplayer/Player.vue');
      if (player) {
        this.vPlayernode = createVNode(player.default, { videoUrl: dashUrl, protocol: 'dash', interactionCard, danmakuElement, onChangWebFullScreen, onToggleWideScreen });
        render(this.vPlayernode, this.playerWrap);
        // 注册页面卸载事件监听器
        this.unmountListener = () => this.unmountPlayer();
        window.addEventListener('beforeunload', this.unmountListener);
      }
    } catch (error) {
      console.error('加载 Player 组件失败', error);
    }
  }

  public unmountPlayer() {
    if (this.vPlayernode && this.playerWrap) {
      render(null, this.playerWrap);
      this.vPlayernode = null;

      // 移除页面卸载事件监听器
      if (this.unmountListener) {
        window.removeEventListener('beforeunload', this.unmountListener);
        this.unmountListener = null;
      }
    }
  }
}

export default new Player();