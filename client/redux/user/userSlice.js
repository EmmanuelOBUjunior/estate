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
            state.loading = true
        },
        signinSuccess: (state,action) =>{
            state.currentUser = action.payload;
            state.loading = false,
            state.error = null
        },
        signinFailure: (state,action) =>{
            state.error = action.payload;
            state.loading = false
        }
    }

})