import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedin : false,
    isRegistered : false,
    userData: null, 
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login : (state, action) => (
            state.isLoggedin = true,
            state.isRegistered = true,
            state.userData = action.payload
        ),
        logout: (state, action) => (
            state.isLoggedin = false,
            state.isRegistered = false,
            state.userData = null
        )
    }
})

export const authStatus = (state) => state.auth;
export const {login, logout} = authSlice.actions;
export default authSlice.reducer;