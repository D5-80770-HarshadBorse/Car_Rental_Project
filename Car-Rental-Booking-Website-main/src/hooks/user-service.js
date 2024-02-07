import { myAxios } from "./helper";

export const signup = (user)=>{
    return myAxios.post('/api/v1/auth/register',user).then((Response)=>Response.data);
}

export const signin = (user)=>{
    return myAxios.post('/api/v1/auth/login',user).then((response)=>response.data)
}