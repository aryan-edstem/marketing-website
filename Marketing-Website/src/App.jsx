import React from 'react';
import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import SignUpPage from './pages/SignUpPage';
import FeatureOne from './pages/FeatureOne';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Success from './pages/Succes';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="Sign-up" element={<SignUpPage />} />
        <Route path="Feature-one" element={<FeatureOne />} />
        <Route path='Contact' element={<ContactPage />} />
        <Route path='success' element={<Success />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;