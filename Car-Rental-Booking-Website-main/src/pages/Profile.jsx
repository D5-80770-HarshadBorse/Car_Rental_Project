import { useState } from "react"
import { getCurrentUserDetails } from "../auth";
import CommonSection from '../components/CommonSection';
import Helmet from '../components/Helmet';
import { Container, Row } from 'reactstrap';
import { myAxios } from "../hooks/helper";
import { Axios } from "axios";
import { BASE_URL } from "../config/config";
const Profile = () => {
  const CurrentUser = JSON.parse(localStorage.getItem("data")).user;
  const [data, setData] = useState({
    fname:CurrentUser.fname,
    lname:CurrentUser.lname,
    username:CurrentUser.username,
    password:CurrentUser.password,
    dl_no:CurrentUser.dl_no,
    email: CurrentUser.email,
    phone_no: CurrentUser.phone_no,
    address: CurrentUser.address
  })
  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value })
    console.log(data)
  }

  const JWTtoken = JSON.parse(localStorage.getItem("data")).token;

  const config = {
    headers: { Authorization: `Bearer ${JWTtoken}` }
  };

  const bodyParameters = {
    phone_no: "9665334034"
  };

  const postUpdate = () => {
    console.log(JWTtoken);
    myAxios.put(`/api/v1/users/${CurrentUser.id}`, data, config)
      .then((res) => {
        console.log(res, "success");
      })
      .catch((error) => {
        console.log(error, "Error")
      })
    }

    return (
      <Helmet title="Profile">
        <section className="pt-0">
          <CommonSection title={`Welcome ${(CurrentUser.fname).toUpperCase()} ${CurrentUser.lname.toUpperCase()}`} />
        </section>
        <section className="pt-0">
          <div class="container">
            <div class="row gutters">
              <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="account-settings">
                      <div class="user-profile">
                        <div className="car__item-img ">
                          <img src="https://hamariweb.com/profiles/images/profile/4757-005-10130.jpg" alt="" className="w-100" />
                        </div>
                        <ul class="list-group">
                          <li class="list-group-item disabled" aria-disabled="true">Details</li>
                          <li class="list-group-item">Name :{CurrentUser.fname} {CurrentUser.lname}</li>
                          <li class="list-group-item">Email : {CurrentUser.email}</li>
                          <li class="list-group-item">Mobile : {CurrentUser.phone_no}</li>
                          <li class="list-group-item">DL_No :{CurrentUser.dl_no} </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="row gutters">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 class="mb-2 text-primary">Personal Details</h6>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group" style={{paddingTop:'20px'}}>
                          <label for="fullName">FIRST NAME</label>
                          <input type="text" class="form-control" id="fname" placeholder="First Name" disabled value={CurrentUser.fname} />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group" style={{paddingTop:'20px'}}>
                          <label for="eMail">LAST NAME</label>
                          <input type="text" class="form-control" id="lname" placeholder="Last Name" disabled value={CurrentUser.lname} />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group" style={{paddingTop:'20px'}}>
                          <label for="phone">USERNAME</label>
                          <input type="text" class="form-control" id="username" placeholder="Username" disabled value={CurrentUser.username} />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group" style={{paddingTop:'20px'}}>
                          <label for="website">EMAIL</label>
                          <input onChange={(e) => handleChange(e, 'email')} type="email" class="form-control" id="email" placeholder="Email" value={data.email} />
                        </div>
                      </div>
                    </div>
                    <div class="row gutters">
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group" style={{paddingTop:'20px'}}>
                          <label for="Street">PASSWORD</label>
                          <input type="password" class="form-control" id="password" placeholder="Password" disabled value={CurrentUser.password} />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group" style={{paddingTop:'20px'}}>
                          <label for="ciTy">PHONE NO</label>
                          <input onChange={(e) => handleChange(e, 'phone_no')} type="number" class="form-control" id="phone_no" placeholder="Phone No" value={data.phone_no} />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group" style={{paddingTop:'20px'}}>
                          <label for="sTate">DL_NO</label>
                          <input type="text" class="form-control" id="dl_no" placeholder="Driving Liecence" disabled value={CurrentUser.dl_no} />
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="form-group" style={{paddingTop:'20px'}}>
                          <label for="zIp">ADDRESS</label>
                          <input onChange={(e) => handleChange(e, 'address')} type="text" class="form-control" id="address" placeholder="Address" value={data.address} />
                        </div>
                      </div>
                    </div>
                    <div class="row gutters">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div style={{textAlign:'center', paddingTop:'30px'}}>
                          <button type="button" class="btn12 btn-primary" onClick={postUpdate}>UPDATE</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Helmet>
    );
  };
export default Profile;

