import React from 'react';
import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
// import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import SignUpPage from './pages/SignUpPage';
import FeatureOne from './pages/FeatureOne';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Success from './pages/Succes';
import Products from './components/Products'


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="home" element={<HomePage />} /> */}
        <Route path="Sign-up" element={<SignUpPage />} />
        <Route path="Feature-one" element={<FeatureOne />} />
        <Route path="1" element={<FeatureOne head="Reduce your electricity bills" id="1"/>} />
        <Route path="2" element={<FeatureOne head="Reduce your electricity bills" id="2"/>} />
        <Route path="3" element={<FeatureOne head="Reduce your electricity bills" id="3"/>} />
        <Route path='Contact' element={<ContactPage />} />
        <Route path='products' element={<Products />} />
        <Route path='success' element={<Success />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;