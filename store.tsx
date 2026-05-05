import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './components/slices/apiSlice';
import counterReducer from './components/slices/counterSlice';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer //[apiSlice.reducerPath] ~ 'api'
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
});

export type Store = ReturnType<typeof store.getState>
