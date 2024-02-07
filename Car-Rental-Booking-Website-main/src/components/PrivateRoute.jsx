import React from 'react'
import { isLoggedIn } from '../auth'
import {Outlet,Navigate} from 'react-router-dom'

const Privateroute=()=>{
  return isLoggedIn() ? <Outlet/> :<Navigate to={"home"}/>
}

export default Privateroute