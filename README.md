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

## 属性（Props）

| 属性名         | 类型           | 说明                         | 默认值    |
| -------------- | -------------- | ---------------------------- | --------- |
| visible        | boolean        | 是否显示预览框               | false     |
| fileList       | FileInfo[]     | 文件信息列表                 | []        |
| initialIndex   | number         | 初始显示文件的索引           | 0         |
| teleport       | boolean        | 是否使用 teleport            | true      |

**FileInfo 类型说明：**

| 字段  | 类型   | 说明     |
| ----- | ------ | -------- |
| url   | string | 文件URL  |
| name  | string | 文件名   |

---

## 方法（通过 `defineExpose` 暴露）

| 方法名        | 说明               | 参数         |
| ------------- | ------------------ | ------------ |
| handleClose   | 关闭预览框         | 无           |
| prevFile      | 切换到上一个文件   | 无           |
| nextFile      | 切换到下一个文件   | 无           |

---

## 事件（Emits）

| 事件名 | 说明         | 回调参数 |
| ------ | ------------ | -------- |
| close  | 关闭预览框时 | 无       |