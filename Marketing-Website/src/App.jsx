import React from 'react';
import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NoPage from './pages/NoPage';
import SignUpPage from './pages/SignUpPage';
import FeatureOne from './pages/FeatureOne';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Success from './pages/Succes';
import Products from './components/Products'
import Wishlist from './components/wishList';
import LoginPage from './pages/LoginPage';
import { useDispatch} from "react-redux";
import { fetchImage } from "./actions/imageAction";
import { fetchText } from "./actions/textActions";
import { fetchProduct } from './actions/productsAction';


  const App = () => {
  const dispatch=useDispatch();
  dispatch(fetchText());
  dispatch(fetchImage());
  dispatch(fetchProduct());
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="Sign-up" element={<SignUpPage />} />
        <Route path="Feature-one" element={<FeatureOne />} />
        <Route path="1" element={<FeatureOne id="1"/>} />
        <Route path="2" element={<FeatureOne id="2"/>} />
        <Route path="3" element={<FeatureOne id="3"/>} />
        <Route path='Contact' element={<ContactPage />} />
        <Route path='products' element={<Products />} />
        <Route path='wishlist' element={<Wishlist />} />
        <Route path='success' element={<Success />} />
        <Route path='login' element={<LoginPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;