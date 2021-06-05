import React, { useState } from 'react'
import './LoginCompany.css'
import {useDispatch , useSelector} from 'react-redux'
import {loginCompany} from '../../redux/actions/auth_company_actions'
import { logoutCandidate } from '../../redux/actions/auth_candidate_actions'
const LoginCompany = () => {

const [email , setEmail] = useState('')
const [password , setPassword] = useState('')

const dispatch = useDispatch()

const onSubmit =(e) => {

e.preventDefault()

dispatch(loginCompany({email,password}))

if(localStorage.getItem('candidate-token')) {
  dispatch(logoutCandidate())
}

}



    return (
      <div >
        <h1 style={{margin:"50px" }}>Espace Entreprise</h1>
        <div style={{display:"flex" , border : "2px black solid" , margin : "5% 10%"}}>


            <form  style={{width:"40%" , margin:"10%"}} onSubmit={onSubmit} id="login_company_form" >

  <div class="form-outline mb-4">
    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} id="form1Example1" class="form-control" />
    <label class="form-label" for="form1Example1">Email address</label>
  </div>

 
  <div class="form-outline mb-4">
    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} id="form1Example2" class="form-control" />
    <label class="form-label" for="form1Example2">Password</label>
  </div>




  
  <button type="submit" class="btn btn-primary btn-block">Sign in</button>
</form>

<img style={{width : "50%" , height:"60vh"}} src="https://www.armytimes.com/resizer/M7nDeRXjePsT1Y2KsXspexCbOck=/1200x0/filters:quality(100)/cloudfront-us-east-1.images.arcpublishing.com/mco/FAFFC7SZDZFTTLDECOBOUU2GWA.jpg" alt="" />
        </div>
        </div>
    )
}

export default LoginCompany
