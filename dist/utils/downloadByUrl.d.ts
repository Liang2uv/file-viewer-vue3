declare const downloadByUrl: {
    pdf: (url: string, fileName: string) => void;
    excel: (url: string, fileName: string) => void;
    word: (url: string, fileName: string) => void;
    zip: (url: string, fileName: string) => void;
    html: (url: string, fileName: string) => void;
    markdown: (url: string, fileName: string) => void;
    image: (url: string, fileName: string) => void;
    common: (url: string, fileName: string) => void;
};
export default downloadByUrl;
