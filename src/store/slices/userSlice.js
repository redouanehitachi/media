import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunk/fetchUsers";
import { addUser } from "../thunk/AddUser";
import { removeUser } from "../thunk/removeUser";



const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        data: [],
        error: null
    },

    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, actions) => {
            state.isLoading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        // add user
        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(addUser.rejected, (state, action) => {

            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(removeUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(removeUser.fulfilled, (state, action) => {
            state.isLoading = false;
            // state.data = action.payload;
            state.data = state.data.filter(user => {
                return user.id !== action.payload.id
            })

        });
        builder.addCase(removeUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const usersReducer = userSlice.reducer;