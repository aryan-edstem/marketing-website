import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createContact } from '../actions/contactActions';
import { useNavigate } from 'react-router-dom';



const ContactPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [contactData, setContactData] = useState({
    first_name: '',
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
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!contactData.first_name) {
      newErrors.first_name = 'Name is required';
    }
    if (!contactData.email) {
      newErrors.email = 'Email is required';
    }
    if (!contactData.requirement) {
      newErrors.requirement = 'Please Specify Your Requirement';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      dispatch(createContact(contactData,navigate));
      dispatch 
    }
  };

    return(
        <div className="bg-gray-100 h-screen pt-10">
            <div className="h-auto flex items-center justify-center">
                <div className="bg-white p-8 rounded-3xl shadow-md w-[500px]">
            <form>
          <div className="mb-4 flex flex-col justify-center">
            <label name="first_name" className="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="firstName"
              name="first_name"
              value={contactData.first_name}
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
              value={contactData.email}
              onChange={handleChange}
              className="w-96 px-3 py-2 border rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label name="phone_no" className="block text-gray-700">Phone No</label>
            <input
              type="tel"
              id="phone_no"
              name="phone_no"
              value={contactData.phone_no}
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
              value={contactData.requirement}
              onChange={handleChange}
              className="w-96 h-20 px-3 py-2 border rounded-md"
              rows="5"
            />
            {errors.requirement && <p className="text-red-500 text-sm mt-1">{errors.requirement}</p>}
          </div>
          <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Contact Us
          </button>
        </form>
             </div>
            </div>

        </div>
    )
}

export default ContactPage