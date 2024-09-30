import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumApi } from "./apis/albumApi";
import { photoApi } from "./apis/PhotoApi";
export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumApi.reducerPath]: albumApi.reducer,
        [photoApi.reducerPath]: photoApi.reducer,
    },
    middleware: (getDefaultMiddlware) => {
        return getDefaultMiddlware()
            .concat(albumApi.middleware)
            .concat(photoApi.middleware)

    }
});
setupListeners(store.dispatch);
export * from "./thunk/fetchUsers";
export * from "./thunk/AddUser";
export * from "./thunk/removeUser";
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from "./apis/albumApi";
export { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } from "./apis/PhotoApi";
