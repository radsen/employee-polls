import logger from 'redux-logger';

import userReducer from "../features/userSlice";

import { configureStore } from "@reduxjs/toolkit";

const configStore = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(logger),
});

export default configStore;