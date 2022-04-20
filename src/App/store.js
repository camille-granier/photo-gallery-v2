import { configureStore } from "@reduxjs/toolkit";
import picturesReducer from '../Feature/pictures.slice';

export default configureStore({
    reducer: {
        pictures: picturesReducer,
    },
});