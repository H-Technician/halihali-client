import { createVNode, render } from 'vue';
import type { VNode } from 'vue';
import type { InteractionCard } from '@/types/interaction';

// 定义 Player 类
export class Player {
  private vPlayernode: VNode | null = null;
  private playerWrap: HTMLElement | null = null;
  private unmountListener: (() => void) | null = null;

  constructor(
    private playerWrapElement: string,
    private dashUrl: string,
    private interactionCard?: InteractionCard,
    private danmakuElement?: string,
    private onToggleWideScreen?: (value: boolean) => void,
    private onLoadedChange?: (value: boolean) => void
  ) {}

  public async mountPlayer() {
    this.playerWrap = document.querySelector(this.playerWrapElement);
    if (!this.playerWrap) {
      console.error(`Element with id ${this.playerWrapElement} not found`);
      return;
    }

    try {
      const player = await import('@/components/videoplayer/Player.vue');
      if (player) {
        this.vPlayernode = createVNode(player.default, {
          videoUrl: this.dashUrl,
          protocol: 'dash',
          interactionCard: this.interactionCard,
          danmakuElement: this.danmakuElement,
          onToggleWideScreen: this.onToggleWideScreen,
          onLoadedChange: this.onLoadedChange
        });
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