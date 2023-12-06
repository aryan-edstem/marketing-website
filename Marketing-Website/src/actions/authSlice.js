import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk('auth/signup', async (formData) => {
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const response = await axios.post(`${apiUrl}/signup`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const login = createAsyncThunk('auth/login', async (formData, { dispatch }) => {
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const response = await axios.post(`${apiUrl}/login`, formData);
    dispatch(authSlice.actions.loginSuccess(response.data));
    dispatch(authSlice.actions.setAuthenticated(true));
  } catch (error) {
    dispatch(authSlice.actions.loginFailure(error));
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authenticated: false,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.authenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    setAuthenticated: (state, action) => {
      state.authenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      // handle signUp success if needed
    });
    builder.addCase(signUp.rejected, (state, action) => {
      // handle signUp failure if needed
    });
  },
});

export const { loginSuccess, loginFailure, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
