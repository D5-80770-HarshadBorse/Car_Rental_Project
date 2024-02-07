import React, { useState } from 'react';
import CommonSection from '../components/CommonSection';
import { Container,Col,Row } from 'reactstrap';
import Helmet from '../components/Helmet';
import '../styles/signup.css';
import { Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../hooks/user-service';
import{toast} from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();
  const[data, setData] = useState({
    fname:'',
    lname:'',
    username:'',
    email:'',
    password:'',
    phone_no:'',
    dl_no:'',
    address:''
  })
  const [error,setError] = useState({
    errors:{},
    isError:false
  })

  const handleChange = (event,property)=>{
    setData({...data, [property]:event.target.value})

  }
  const submitForm = (event)=>{
    event.preventDefault();
    if(error.isError){
      toast.error("Somthing Went Wrong !!!");
      return;
    }
    signup(data).then((resp)=>{
      toast.success("User Registered Successfully !!!");
      setData({
        fname:'',
        lname:'',
        username:'',
        email:'',
        password:'',
        phone_no:'',
        dl_no:'',
        address:''
      })
      navigate("/signin")
      
    }).catch((error)=>{
      setError({
        errors:error,
        isError:true
      })
    })
  }
  return (
    <Helmet title="Signup">
      <section className="p-0">
        <CommonSection title="Register Page" />
      </section>
      <section className="pt-0">
        <Container outline = "true">
          <Row>
            <Col lg="6" md="10" className="m-auto">
              <h4 className="d-flex align-items-center gap-2 justify-content-center mb-5">
                <i class="ri-key-2-line"></i> Sign Up
              </h4>
              <Form onSubmit={submitForm}>
      <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i class="ri-user-line"></i>
          </span>
          <input onChange={(e)=>handleChange(e,'fname')} id ="fname" type="text" value = {data.fname} placeholder="First name" required />
        </FormGroup>
        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i class="ri-user-line"></i>
          </span>
          <input onChange={(e)=>handleChange(e,'lname')} id ="lname" type="text" value = {data.lname} placeholder="Last name" required />
        </FormGroup>
        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i class="ri-user-line"></i>
          </span>
          <input onChange={(e)=>handleChange(e,'username')} id ="username" type="text" value = {data.username} placeholder="Username" required />
        </FormGroup>
        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i class="ri-mail-line"></i>
          </span>
          <input onChange={(e)=>handleChange(e,'email')} id ="email" type="email" value = {data.email} placeholder="Email" required />
        </FormGroup>

        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i class="ri-lock-2-line"></i>
          </span>
          <input onChange={(e)=>handleChange(e,'password')} id = 'password' type="password" value = {data.password} placeholder="Password" required />
        </FormGroup>
        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i class="ri-lock-2-line"></i>
          </span>
          <input type="password" placeholder="Confirm Password" required />
        </FormGroup>
        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i class="ri-user-line"></i>
          </span>
          <input onChange={(e)=>handleChange(e,'phone_no')} id ="phone_no" type="number" value = {data.phone_no} placeholder="Phone Number" required />
        </FormGroup>
        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i class="ri-user-line"></i>
          </span>
          <input onChange={(e)=>handleChange(e,'dl_no')} id ="dl_no" type="text" value = {data.dl_no} placeholder="Driving Liecence Number" required />
        </FormGroup>
        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i class="ri-user-line"></i>
          </span>
          <input onChange={(e)=>handleChange(e,'address')} id ="address" type="text" value = {data.address} placeholder="Address" required />
        </FormGroup>
        <h6 className="fs-6  text-center">
          <label htmlFor="">
            <input type="checkbox" /> Accept Terms & Conditions
          </label>
        </h6>
        <button className="login__btn " type="submit">
          Register Now
        </button>
      </Form>
      <h6 className="fs-6 text-center mt-4">
        <Link to="/signin">Already Have an Account?</Link>
      </h6>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SignUp;
