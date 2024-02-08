import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../styles/header.css';
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { cartUiAction } from '../store/cartUi-Slice';
import { doLogout, getCurrentUserDetails, isLoggedIn } from '../auth';
import Profile from '../pages/Profile';

const HOME_NAV_MENU = [

  {
    text: 'Home',
    path: '/home',
  },
  {
    text: 'About',
    path: '/about',
  },
  {
    text: 'Blog',
    path: '/blogs',
  },
  {
    text: 'Contact',
    path: '/contact',
  },
];

const USER_NAV_MENU = [
  {
    text: 'Home',
    path: 'user/car-listing',
  },

  {
    text: 'MyBookings',
    path: 'user/bookings',
  },

  {
    text: 'Products',
    path: 'user/products',
  }
]

const NAV__MENU = isLoggedIn() ? USER_NAV_MENU : HOME_NAV_MENU;

const Header = () => {
  const navigate = useNavigate();
  const menuRef = useRef();
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const cartShowToggle = () => {
    dispatch(cartUiAction.toggle());
  };

  const menuToggle = () => menuRef.current.classList.toggle('menu__active');


  const [login, setlogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setlogin(isLoggedIn());
    setUser(getCurrentUserDetails());
  }, [login])

  return (
    <header>
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top-left">
                <span>Need Help?</span>
                <span className="header__top-help">
                  <i class="ri-phone-fill"></i> Call: +91 9665334034
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6" className="text-end">
              <div className="header__top-right">
                {
                  login && (
                    <>
                      <Link to="/logout">
                        <i class="ri-login-circle-line"></i>Logout
                      </Link>
                    </>
                  )
                }
                {
                  !login && (
                    <>
                      <Link to="/signin">
                        <i class="ri-login-circle-line"></i> Login
                      </Link>
                      <Link to="/signup">
                        <i class="ri-user-line"></i> Register
                      </Link>
                    </>
                  )
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="main__header">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home">
                    <i class="ri-car-line"></i>{' '}
                    <span>
                      <strong>CarWala</strong> <br /> <h6><small>Rent Car Service</small></h6>
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4> Pune</h4>
                  <h6>Hinjewadi Phase III</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="text-end d-flex align-items-center justify-content-end"
            >
              <Button className="header__btn btn">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="header__bottom">
        <Container>
          <div className="menu__container d-flex justify-content-between align-items-center">
            <span className="menu__bar">
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
            <div className="menu__list" ref={menuRef} onClick={menuToggle}>
              <div className="menu__left">
                {NAV__MENU.map((item, index) => (
                  <NavLink
                    className={navClass =>
                      navClass.isActive ? 'active me-4 ' : 'me-4'
                    }
                    key={index}
                    to={item.path}
                  >
                    {item.text}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="menu__right d-flex gap-4 align-items-center  ">
              {
                login && (
                  <Link to="user/profile">{JSON.parse(localStorage.getItem("data")).user.username}</Link>
                )
              }
              {
                !login && (
                  <div className="search">
                    <input type="text" placeholder="search" />
                    <span>
                      <i class="ri-search-line" style={{ color: 'black' }}></i>
                    </span>
                  </div>
                )
              }</div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
