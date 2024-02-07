import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ServiceDetails from '../pages/ServiceDetails';
import CarRental from '../pages/CarRental';
import CarBooking from '../pages/CarBooking';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';

import Checkout from '../pages/Checkout';
import Blogs from '../pages/Blogs';
import BlogDetails from '../pages/BlogDetails';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Privateroute from '../components/PrivateRoute';
import LogOut from '../pages/LogOut';
import Profile from '../pages/Profile';
const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />

      <Route path="/about" element={<About />} />
     
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog-details/:id" element={<BlogDetails />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/car-listing" element={<CarRental />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/user" element={<Privateroute />}>
          <Route path="services" element={<Services />} />
          <Route path="service-details/:id" element={<ServiceDetails />} />
          <Route path="car-listing" element={<CarRental />} />
          <Route path="car-details/:id" element={<CarBooking />} />
          <Route path="products" element={<Products />} />
          <Route path="product-details/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="profile" element={<Profile/>}/>
          </Route>
    </Routes>
  );
};

export default routes;
