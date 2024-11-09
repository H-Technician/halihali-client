<template>
    <div class="hui-editor"
    :style="`height: ${props.height};width: ${props.width};`">
        <div
        class="editor-container_wrap"
        :class="`${disabled ? 'is-disabled' : ''}`"
        :style="`height: ${props.height};width: ${props.width};`">
        <div
            ref="displayContentRef"
            class="editor-content"
            :class="wordCount > 0 || props.modelValue.length > 0 ? '' : 'ql-blank'"
            v-html="displayContent"
            :contenteditable="!disabled"
            @blur="onDisplayContentBlur"
            @input="onDisplayContentInput"
            @keydown="onKeyDown"></div>
        </div>
        <div class="mention-max">
            <span>{{ wordCount }}</span><span>&nbsp;/&nbsp;{{ props.maxWords }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
const emits = defineEmits(['update:modelValue','addressInputs']);
interface Props {
    modelValue?: string; // 输入内容
    disabled?: boolean; // 是否禁用
    height?: string; // 高度
    upperCase?: boolean; // 大写
    width?: string; // 宽度
    placeholder?: string; // 提示文字
    maxWords?: number; // 最大字数限制
}
const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    disabled: false,
    height: '100%',
    upperCase: false,
    width: '100%', 
    placeholder: '',
    maxWords: 2000
});
const displayContentRef = ref<HTMLDivElement | null>(null);
const displayContent = ref('');
const wordCount = ref(0);

const onDisplayContentBlur = () => {
    if (!displayContentRef.value) return;
    let updateContent = displayContentRef.value.innerText.replace(/\n\n/gi, '\n');

    if (props.upperCase) {
        updateContent = updateContent.toUpperCase();
    }

    emits('update:modelValue', updateContent);
    };

const onDisplayContentInput = () => {
    if (!displayContentRef.value) return;
    const newContent = displayContentRef.value.innerText;

    // 更新字数
    wordCount.value = newContent.replace(/\n/gi, '').length;
    // 检查是否超过最大字数
    if (wordCount.value > props.maxWords) {
        displayContentRef.value.innerText = displayContentRef.value.innerText.slice(0, props.maxWords);
        wordCount.value = props.maxWords;
    }
};
const onKeyDown = (event: KeyboardEvent) => {
  if (wordCount.value >= props.maxWords && event.key !== 'Backspace') {
    event.preventDefault();
  }
};

const setDisplayContent = () => {
    displayContent.value = (props.modelValue || '')
        .split('\n')
        .map((lineContent) => {
        return `<p class="line-content">${lineContent}</p>`;
        })
        .join('');
};

const onPaste = (event: ClipboardEvent) => {
  event.preventDefault();

  if (!displayContentRef.value) return;

  const pasteContent = event.clipboardData?.getData('text/plain') || '';
  const selection = window.getSelection();

  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);

  // 保存当前选中的文本
  const selectedText = range.toString();

  // 删除选中的文本
  range.deleteContents();

  // 创建新的文本节点
  const newNode = document.createTextNode(pasteContent);

  // 将新文本插入到光标位置
  range.insertNode(newNode);

  // 如果有选中的文本，则重新插入
  if (selectedText) {
    const selectedTextNode = document.createTextNode(selectedText);
    range.insertNode(selectedTextNode);
  }

  // 更新光标位置
  range.setStartAfter(newNode);
  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);

  // 更新模型值
  emits('update:modelValue', displayContentRef.value.innerText);
  emits('addressInputs', displayContentRef.value.innerText);
};

onMounted(() => {
    wordCount.value = props.modelValue.replace(/\n/gi, '').length;
    if (!displayContentRef.value) return;
    displayContentRef.value.oncopy = (e) => {
        e.preventDefault();
        const copyText = document.getSelection()?.toString() || '';

        if (e.clipboardData) {
        e.clipboardData.setData('text/plain', copyText);
        }
    };

    displayContentRef.value.onpaste = (e) => {
        e.preventDefault();
        const selection = document.getSelection();
        if (!selection) return;
        let pasteContent = e.clipboardData?.getData('text') || '';
        pasteContent = pasteContent.replace(/\r\n/gi, '\n');

        const range = selection.getRangeAt(0);

        // 创建一个新的文本节点用于粘贴
        const textNode = document.createTextNode(pasteContent);

        // 插入新文本节点
        range.insertNode(textNode);

        // 调整选区
        const newSelection = document.createRange();
        newSelection.setStart(textNode, 0);
        newSelection.setEnd(textNode, pasteContent.length);
        const sel = window.getSelection();
        if (sel) {
        sel.removeAllRanges();
        sel.addRange(newSelection);
        }
        if (!displayContentRef.value) return;
        const newContent = displayContentRef.value.innerText;
        // 更新字数
        wordCount.value = newContent.replace(/\n/gi, '').length;
        emits('update:modelValue', displayContentRef.value.textContent || '');
        emits('addressInputs', displayContentRef.value.textContent || '');
    };
});

watch(
    [() => props.modelValue],
    () => {
        setDisplayContent();
    },
    { immediate: true }
);
</script>

<style scoped lang="scss">
.hui-editor {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
}
.editor-container_wrap {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: var(--text2);
    overflow-y: auto;
    background-color: var(--bg1);
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 8px;
    line-height: 1.42;
    font-size: 13px;

    :deep(.editor-content) {
        box-sizing: border-box;
        width: 100%;
        min-height: 100%;
        overflow-y: auto;
        padding: 12px 60px 12px 15px;
        -o-tab-size: 4;
        tab-size: 4;
        -moz-tab-size: 4;
        text-align: left;
        white-space: pre-wrap;
        word-wrap: break-word;
        .line-content {
            position: relative;
            min-height: 18px;
            margin: 0 -10px;
            padding: 0 18px 0 10px;
            font-size: inherit;
        }

        .line-content + .line-content {
            &::after {
                margin-top: 0;
                padding-top: 0;
            }
        }

        &:focus {
            outline: none;
            border-color: transparent;
        }

        &[data-has-content='true']::before {
            opacity: 0;
        }

    }

    :deep(.ql-blank) {
        &::before {
            content: '填写更全面的相关信息，让更多的人能找到你的视频吧(:';
            position: absolute;
            top: 12px;
            left: 15px;
            border-radius: inherit;
            pointer-events: none;
            font-size: 14px;
            transition: opacity 0.3s ease;
            opacity: 1;
        }
    }

    &.is-disabled {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #a8abb2;
        cursor: not-allowed;
    }

    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        margin-right: 2px;
        background-color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }
}

.mention-max {
    display: flex;
    color: #9ba4ac;
    font-size: 12px;
    position: absolute;
    bottom: 16px;
    right: 15px;
}
</style>