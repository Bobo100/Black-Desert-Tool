import { AddImageCacheAction, ImageActionTypes, ImageCache } from "../action/imageCacheActions";

// reducer
const imageCacheReducer = (state: ImageCache = {}, action: AddImageCacheAction) => {
    switch (action.type) {
        case ImageActionTypes.ADD_IMAGE_CACHE:
            // console.log("Adding image cache:", action.payload);
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default imageCacheReducer;
