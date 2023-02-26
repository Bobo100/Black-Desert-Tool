import { createStore } from 'redux';
import imageCacheReducer from './reducers/imageCacheReducer';

export const store = createStore(imageCacheReducer);
