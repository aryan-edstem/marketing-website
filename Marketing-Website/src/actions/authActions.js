// import axios from 'axios';

// export const signUp = (formData, navigate) => async (dispatch) => {
//   try {
//     const apiUrl = import.meta.env.VITE_API_BASE_URL
//     const response = await axios.post(`${apiUrl}/signup`, formData);
//     dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data });
//     navigate('/login');
//   } catch (error) {
//     dispatch({ type: 'SIGNUP_FAILURE', error });
//   }
// };

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const signUp= createAsyncThunk('auth/signup', async (formData) => {
//     try {
//       const apiUrl = import.meta.env.VITE_API_BASE_URL;
//       const response = await axios.post(`${apiUrl}/signup`,formData);
//       return response.data;
//     } catch (error) {
//     throw error;
//     }
//   });

// export const login = createAsyncThunk('auth/login',async(formData,
//   {navigate},{dispatch}) {
//   try {
//     const apiUrl = import.meta.env.VITE_API_BASE_URL
//     const response = await axios.post(`${apiUrl}/login`, formData);
//     dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
//     dispatch({ type: 'SET_AUTHENTICATED', payload: true });
//     navigate('/products');
//   } catch (error) {
//     dispatch({ type: 'LOGIN_FAILURE', error });
//   }
// });

// export const createContact = (contactData,navigate) => async (dispatch) => {
//   try {
//     const apiUrl = import.meta.env.VITE_API_BASE_URL
//     const response = await axios.post(`${apiUrl}/contact`, contactData);
//     await axios.post(`${apiUrl}/email`, contactData)
//     dispatch({ type: 'CREATE_CONTACT_SUCCESS', payload: response.data });
//     navigate('/success');
//   } catch (error) {
//     dispatch({ type: 'CREATE_CONTACT_FAILURE', error });
//   }
// };

