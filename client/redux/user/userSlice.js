import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentUser: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signinStart: (state) =>{
            state.loading: false
        }
    }
})