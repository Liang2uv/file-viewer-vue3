# 文件预览

## 说明

vue3-仿微信的文件/图片预览组件，支持图片、txt、pdf、word、excel、ppt预览

## 安装

```bash
npm i @liang2uv/file-viewer-vue3 -S

# 或
pnpm i @liang2uv/file-viewer-vue3 -S
```

## 使用

```vue
<template> 
  <LbFileViewer
    :visible="filePreviewShow"
    :initial-index="filePreviewIndex"
    @close="onClose"
    :fileList="filePreviewList"
  />
</template>
```

```vue
<script lang="ts" setup>
  import { LbFileViewer } from '@liang2uv/file-viewer-vue3'
  // 建议全局(main.ts)引入样式
  import '@liang2uv/file-viewer-vue3/dist/style.css'

  interface FileInfo {
    /**
     * 文件URL
     */
    url: string
    /**
     * 文件名
     */
    name: string
  }

  const filePreviewShow = ref(false)
  const filePreviewIndex = ref(0)
  const filePreviewList = ref<FileInfo[]>([{
    url: 'https://xxx.pdf',
    name: '测试.pdf'
  }])

  function onClose() {
    filePreviewShow.value = false
  }
</script>
```