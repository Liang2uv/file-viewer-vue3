import LbFileViewer from './dist/FileViewer/src/index.vue'

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    LbFileViewer: typeof LbFileViewer
  }
}

export {}
