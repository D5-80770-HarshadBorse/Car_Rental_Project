import React, { useEffect } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { signup } from '../hooks/user-service';
import {toast} from 'react-toastify'
const Register = () => {
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
   let dat = signup(data).then((resp)=>{
    }).catch((error)=>{
    })
    console.log(dat);
  }
  return (
    <>
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
    </>
  );
};

export default Register;
