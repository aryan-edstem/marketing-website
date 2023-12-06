import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createContact = createAsyncThunk('contact/create', async (contactData) => {
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const response = await axios.post(`${apiUrl}/contact`, contactData);
    await axios.post(`${apiUrl}/email`, contactData);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createContactSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    createContactFailure: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createContact.fulfilled, (state, action) => {
      state.data = action.payload;
      // handle createContact success if needed
    });
    builder.addCase(createContact.rejected, (state, action) => {
      // handle createContact failure if needed
    });
  },
});

export const { createContactSuccess, createContactFailure } = contactSlice.actions;
export default contactSlice.reducer;
