import React,{useState} from "react";
import Navbar from "../components/Navbar";
import {useNavigate} from "react-router-dom";


const ContactPage = () => {
    const navigate=useNavigate();
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
      // Submit the form or perform other actions
      navigate('/home')
      console.log('Form submitted:', formData);
    }
  };
    return(
        <div className="bg-gray-100">
            <Navbar />
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
            <label name="requirements" className="block text-gray-700">Requirements</label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              className="w-96 h-20 px-3 py-2 border rounded-md"
              rows="5"
            />
            {errors.requirements && <p className="text-red-500 text-sm mt-1">{errors.requirements}</p>}
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