// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedin: false,
  loading: false,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    AuthStart: (state) => {
      state.isLoggedin = false;
      state.loading = true;
      state.userData = null;
    },
    login: (state, action) => {
      state.isLoggedin = true;
      state.loading = false;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      // Reset state directly in logout action
      state.isLoggedin = false;
      state.loading = false;
      state.userData = null;
    },
  },
});

export const authStatus = (state) => state.auth;
export const { AuthStart, login, logout } = authSlice.actions;
export default authSlice.reducer;
