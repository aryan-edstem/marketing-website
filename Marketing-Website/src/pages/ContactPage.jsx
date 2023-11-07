import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createContact } from '../actions/contactActions';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ContactPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    email: '',
    requirement: '',
    phone_no:''
  });

  const [errors, setErrors] = useState({
    first_name: '',
    email: '',
    requirement: '',
    phone_no:''
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

    if (!formData.first_name) {
      newErrors.first_name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.requirement) {
      newErrors.requirement = 'Please Specify Your Requirement';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      dispatch(createContact(formData)); 
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
            <label name="first_name" className="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-96 px-3 py-2 border rounded-md"
            />
            {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>}
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
            <label name="phone_no" className="block text-gray-700">Phone No</label>
            <input
              type="number"
              id="phone_no"
              name="phone_no"
              value={formData.phone_no}
              onChange={handleChange}
              className="w-96 px-3 py-2 border rounded-md"
            />
            {errors.phone_no && <p className="text-red-500 text-sm mt-1">{errors.phone_no}</p>}
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