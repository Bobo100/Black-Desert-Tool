import React, { useState, useEffect } from 'react';
import imagePaths from '../../../json/image_path.json';


interface ImageCache {
    [key: string]: string; // 缓存的图片 URL 映射
}

function ImageComponent() {
    const [imageCache, setImageCache] = useState<ImageCache>({});

    // 在组件挂载时，加载所有图片到内存中
    useEffect(() => {
        const cache: ImageCache = {};
        const paths = imagePaths as ImageCache;
        for (const imagePath of Object.keys(paths)) {
            cache[imagePath] = `${process.env.PUBLIC_URL}${paths[imagePath]}`;
        }
        setImageCache(cache);
    }, []);
    return (
        <div>
            {Object.keys(imageCache).map((imagePath) => (
                <img key={imagePath} src={imageCache[imagePath]} alt={imagePath} />
            ))}
        </div>
    );
}

export default ImageComponent;
