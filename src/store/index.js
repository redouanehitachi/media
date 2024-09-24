import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/userSlice";


export const store = configureStore({
    reducer: {
        users: usersReducer
    }
});
export * from "./thunk/fetchUsers";
export * from "./thunk/AddUser";
export * from "./thunk/removeUser"