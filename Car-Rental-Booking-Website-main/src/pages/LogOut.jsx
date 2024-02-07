import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../styles/header.css';
import { toast } from 'react-toastify'
import { doLogout, getCurrentUserDetails, isLoggedIn } from '../auth';
import Helmet from '../components/Helmet';
import { ToastContainer } from 'react-toastify';

const LogOut = () => {
    const navigate = useNavigate();
    const [login, setlogin] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        setlogin(isLoggedIn());
        setUser(getCurrentUserDetails());
    }, [login])

    const logout = () => {
        localStorage.removeItem("data");
        console.log("Logout success")
        toast.success('Logout Successful', {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 1000,
            hideProgressBar: true,
            theme: "dark",
        });
        navigate("/");
        window.location.reload(false);
    }
    return (
        <Helmet title="Login">
            <section className="p-0">
            </section>
            <section>
                <ToastContainer />
                <Container>
                    <Row>
                        <Col lg="4" md="6" sm="8" xs="10" className="m-auto" >
                            <h4 className=" d-flex align-items-center gap-2 justify-content-center mb-5">
                                Do You Really Want Logout?
                            </h4>
                                <button className="login__btn " onClick={logout} style={{marginLeft:'70px', backgroundColor:'orange'}}>
                                    Confirm
                                </button>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <a>
                                <button className="login__btn ">
                                    Cancel
                                </button>
                                </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default LogOut;
