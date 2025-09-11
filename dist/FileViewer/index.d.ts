declare const LbFileViewer: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/index.vue').LbFileViewerOptions> & Readonly<{
        onClose?: (() => any) | undefined;
    }>, {
        handleClose: () => void;
        prevFile: () => void;
        nextFile: () => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        close: () => any;
    }, import('vue').PublicProps, {
        visible: boolean;
        fileList: import('./src/index.vue').FileInfo[];
        initialIndex: number;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/index.vue').LbFileViewerOptions> & Readonly<{
        onClose?: (() => any) | undefined;
    }>, {
        handleClose: () => void;
        prevFile: () => void;
        nextFile: () => void;
    }, {}, {}, {}, {
        visible: boolean;
        fileList: import('./src/index.vue').FileInfo[];
        initialIndex: number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/index.vue').LbFileViewerOptions> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    handleClose: () => void;
    prevFile: () => void;
    nextFile: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
}, string, {
    visible: boolean;
    fileList: import('./src/index.vue').FileInfo[];
    initialIndex: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & {
    install: () => void;
};
export default LbFileViewer;
