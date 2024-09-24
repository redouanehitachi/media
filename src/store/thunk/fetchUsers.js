import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const fetchUsers = createAsyncThunk('user/fetch', async () => {
    const response = await axios.get("http://localhost:3005/users");
    return response.data;
}


);




export { fetchUsers };