/**
 * 文件信息接口
 */
export interface FileInfo {
    /**
     * 文件URL
     */
    url: string;
    /**
     * 文件名
     */
    name: string;
}
/**
 * LbFileViewer组件选项接口
 */
export interface LbFileViewerOptions {
    /**
     * 是否显示预览框
     * @binding
     */
    visible: boolean;
    /**
     * 文件信息列表
     * @binding
     */
    fileList?: FileInfo[];
    /**
     * 初始显示图片的索引
     * @binding
     */
    initialIndex?: number;
    /**
     * 是否使用teleport，默认true
     * @binding
     */
    teleport?: boolean;
    /**
     * 是否使用pdf.js作为预览pdf的插件，默认false
     * @binding
     */
    usePdfjs?: boolean;
}
/**
 * LbFileViewer组件实例接口
 */
export interface LbFileViewerInstance {
    /**
     * 关闭预览框
     */
    handleClose: () => void;
    /**
     * 切换到上一个文件
     */
    prevFile: () => void;
    /**
     * 切换到下一个文件
     */
    nextFile: () => void;
}
/**
 * LbFileViewer组件emit事件类型
 */
export interface LbFileViewerEmits {
    /**
     * 关闭预览框事件
     */
    (e: 'close'): void;
}
declare const _default: import('vue').DefineComponent<LbFileViewerOptions, {
    /**
     * 关闭预览框
     */
    handleClose: () => void;
    /**
     * 切换到上一个文件
     */
    prevFile: () => void;
    /**
     * 切换到下一个文件
     */
    nextFile: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
}, string, import('vue').PublicProps, Readonly<LbFileViewerOptions> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    visible: boolean;
    fileList: FileInfo[];
    initialIndex: number;
    teleport: boolean;
    usePdfjs: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
