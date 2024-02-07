import React, { useState } from 'react';
import CommonSection from '../components/CommonSection';
import { Container, Row, Col, Form, FormGroup, Toast } from 'reactstrap';
import Helmet from '../components/Helmet';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/sign-in.css';
import { signin } from '../hooks/user-service';
import { doLogin } from '../auth';

const SignIn = () => {
  const navigate = useNavigate();
  const[loginDetails, setLoginDetails]=useState({
    username:'',
    password:''
  })
const handleChange = (event,field)=>{
  let actualValue=event.target.value
  setLoginDetails({
    ...loginDetails,[field]:actualValue
  })
}
const handleFormSubmit = (event)=>{
  event.preventDefault();
  console.log(loginDetails);
  signin(loginDetails).then((data)=>{
    doLogin(data,()=>{
      setTimeout(()=>{navigate("/car-listing"); window.location.reload(false);},1000);
    })
    toast.success("Login Succesfull", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 1000,
      hideProgressBar: true,
      theme: "dark"
    })
  }).catch(error=>{
    toast.error('Incorrect Username Or Password', {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 1000,
      hideProgressBar: true,
      theme: "dark",
      });
  })
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
                <i class="ri-key-2-line"></i> Sign In
              </h4>
              <Form onSubmit={handleFormSubmit}>
                <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
                  <span>
                    <i class="ri-user-line"></i>
                  </span>
                  <input onChange={(e) => handleChange(e, 'username')} id ="username" type="text" value = {loginDetails.username} placeholder="Username or Email" required />
                </FormGroup>
                <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
                  <span>
                    <i class="ri-lock-2-line"></i>
                  </span>
                  <input onChange={(e) => handleChange(e, 'password')} id = "password" type="password" value = {loginDetails.password} placeholder="Password" required />
                </FormGroup>
                <h6 className="fs-6  text-end">
                  <Link to="#">Forgot Password?</Link>
                </h6>
                <button className="login__btn " type="submit">
                  Login
                </button>
              </Form>

              <h6 className="fs-6 text-center mt-4">
                <Link to="/signup">Do you need an Account?</Link>
              </h6>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SignIn;
