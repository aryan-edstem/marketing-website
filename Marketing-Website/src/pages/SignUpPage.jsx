  import React, { useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { signUp } from '../actions/authActions';
  import {useNavigate} from "react-router-dom";
  import { storeUsername } from '../actions/userAction';
  import LoginPage from './LoginPage';
  
  
  const SignUpPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, setLogin] = useState(false)
  
    const [formData, setFormData] = useState({
      username: '',
      password: '',
      email: '',
    });
  
    const [errors, setErrors] = useState({
      username: '',
      password: '',
      email: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleLogin = () => {
        setLogin(true);
    }
    
    if(login){
      return(
        <LoginPage/>
      )
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = {};
  
      if (!formData.username) {
        newErrors.username = 'Username is required';
      }
      if (!formData.password) {
        newErrors.password = 'Password is required';
      }
      if (!formData.email) {
        newErrors.email = 'Email is required';
      }
      setErrors(newErrors);
  
      if (Object.keys(newErrors).length === 0) {
        dispatch(signUp(formData, navigate));
        dispatch(storeUsername(formData.username));
      }
    };
  
    return(
        <div className="bg-gray-100 h-screen p-10 ">
            <div className="h-auto flex items-center justify-center mt-10">
                <div className="bg-white p-8 rounded-3xl shadow-md w-[500px]">
            <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col justify-center">
            <label name="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-96 px-3 py-2 border rounded-md"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>
          <div className="mb-4">
            <label name="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-96 px-3 py-2 border rounded-md"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label name="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-96 px-3 py-2 border rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          {/* <Link to="/home"> */}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSubmit}>
            Sign Up
          </button>
          {/* </Link> */}
        </form>
            <button className='text-rose-500 text-decoration-line: underline' onClick={handleLogin}>Already a customer? please login</button >
             </div>
            </div>
        </div>
    )
}

export default SignUpPage