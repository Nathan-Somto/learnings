export type UploadedImage ={
    id: string;
    url: string;
}
export type AppProps = {
    onUploadImage?: (file: File) => Promise<UploadedImage>;
    onLoadUnsplashImages?: () => Promise<string[]>;
}