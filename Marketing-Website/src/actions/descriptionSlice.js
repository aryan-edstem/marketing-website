
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFeatures = createAsyncThunk('description/fetchFeatures', async(_, {rejectWithValue}) =>{
    try{
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const response= await axios.get(`${apiUrl}/description/short`);
    return response.data;
    } catch(error){
        return rejectWithValue(error.response.data)
    }
});

export const fetchData = createAsyncThunk('description/fetchData', async (id, { rejectWithValue }) => {
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const response = await axios.get(`${apiUrl}/description/detailed/${id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchImage = createAsyncThunk('description/fetchImage', async (_, { rejectWithValue }) => {
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const response = await axios.get(`${apiUrl}/image`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const descriptionSlice = createSlice({
  name: 'description',
  initialState: {
    detailedData: null,
    imageData: null,
    featureData:null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFeatures.pending,(state)=>{
        state.loading = true;
        state.error=null;
    });
    builder.addCase(fetchFeatures.fulfilled,(state,action)=>{
        state.loading=false;
        state.featureData=action.payload;
    });
    builder.addCase(fetchFeatures.rejected,(state,action)=> {
        state.loading=false;
        state.error=action.payload;
    });
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.detailedData = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchImage.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchImage.fulfilled, (state, action) => {
      state.loading = false;
      state.imageData = action.payload;
    });
    builder.addCase(fetchImage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default descriptionSlice.reducer;
