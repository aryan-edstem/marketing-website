import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createContact } from '../actions/contactActions';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ContactPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: '',
    password: '',
    email: '',
    requirement: '',
  });

  const [errors, setErrors] = useState({
    full_name: '',
    password: '',
    email: '',
    requirement: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const newErrors = {};

    if (!formData.full_name) {
      newErrors.full_name = 'Name is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.requirement) {
      newErrors.requirement = 'Please Specify Your Requirement';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      dispatch(createContact(formData)); // Dispatch the Redux action
      navigate('/home');
    }
  };

    return(
        <div className="bg-gray-100">
            <Navbar />
            <div className="h-auto flex items-center justify-center mt-10">
                <div className="bg-white p-8 rounded-3xl shadow-md w-[500px]">
            <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col justify-center">
            <label name="username" className="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-96 px-3 py-2 border rounded-md"
            />
            {errors.full_name && <p className="text-red-500 text-sm mt-1">{errors.full_name}</p>}
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

          <div className="mb-4 flex flex-col justify-center">
            <label name="requirement" className="block text-gray-700">Requirements</label>
            <textarea
              id="requirement"
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              className="w-96 h-20 px-3 py-2 border rounded-md"
              rows="5"
            />
            {errors.requirement && <p className="text-red-500 text-sm mt-1">{errors.requirement}</p>}
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Contact Us
          </button>
        </form>
             </div>
            </div>
        </div>
    )
}

export default ContactPage