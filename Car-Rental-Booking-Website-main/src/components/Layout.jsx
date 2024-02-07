import React, { useEffect, useRef, useState } from 'react';
import { doLogout, getCurrentUserDetails, isLoggedIn } from '../auth';
import Routes from '../routes/Routes';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import Cart from '../components/Cart';
const Layout = () => {
  const cartUi = useSelector(state => state.cartUi.cartIsVisible);
  return (
    <div>
      <div>
        <Header/>
        <Routes />
      </div>
      {cartUi && <Cart />}
      <Footer />
    </div>
  );
};

export default Layout;
