import { createVNode, render } from 'vue';
import MessageComponent from './MessageBox.vue'; // 假设 MessageComponent.vue 是现有组件的路径

const Message = {
  info: (content: string | undefined) => {
    createMessage(content, 'info');
  },
  success: (content: string | undefined) => {
    createMessage(content, 'success');
  },
  error: (content: string | undefined) => {
    createMessage(content, 'error');
  },
  warning: (content: string | undefined) => {
    createMessage(content, 'warning');
  },
  loading: (content: string | undefined) => {
    createMessage(content, 'loading');
  },
};

function createMessage(content: string | undefined, mode: string) {
  let container: Element | ShadowRoot; 
  container = document.querySelector(".hui-message-wrap")!;
  if (!container) {
    container = document.createElement('div');
    container.className = "hui-message-wrap";
  } else {
    render(null, container);
  }
  const onClose = () => {
    render(null, container);
    // console.log("关闭");
    document.body.removeChild(container);
  }
  const vnode = createVNode(MessageComponent, { content, mode, onClose });

  document.body.appendChild(container);
  render(vnode, container);
}

export default Message;