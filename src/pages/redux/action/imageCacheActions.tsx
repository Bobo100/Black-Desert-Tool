export interface ImageCache {
    [key: string]: string; // 缓存的图片 URL 映射
}

// export type ImageCache = Record<string, string>;


export enum ImageActionTypes {
    ADD_IMAGE_CACHE = 'ADD_IMAGE_CACHE',
}

export interface AddImageCacheAction {
    type: typeof ImageActionTypes.ADD_IMAGE_CACHE,
    payload: ImageCache,
}

export const addImageCache = (cache: ImageCache): AddImageCacheAction => ({
    type: ImageActionTypes.ADD_IMAGE_CACHE,
    payload: cache,
});
