import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { registerCandidate } from '../../redux/actions/auth_candidate_actions'

const RegisterCandidate = () => {


const dispatch = useDispatch()
const [formData , setFormData] = useState ({

    nom :"", 
    prénom :"", 
    email:"" ,
    password :"" ,
    password2 :"",
    date_de_naissance :"", 
    sexe :"" 
})


const onChange = (e) => {


    setFormData({...formData , [e.target.name] : e.target.value})
    
    
    }


const onSubmit = (e) => {

    e.preventDefault() ;
    
    dispatch(registerCandidate(formData))
    
    // setFormData({
    //     nom : "" ,
    //     email : "" ,
    //     password : "" ,
    //     password2 : "" , 
    //     date_de_naissance:"" , 
    //     sexe:"" 

    
    
    // })
    
    
    }


    return (
        <div>
             <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="https://cdn.hipwallpaper.com/i/40/15/kWu2yJ.jpg" alt="Image" class="img-fluid"/>
        </div>
        <div class="col-md-6 contents">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="mb-4">
              <h4>Sign Up</h4>
        
            </div>
            <form onSubmit={onSubmit}>
              <div class="form-group first">
                <label for="nom">Nom </label>
                <input type="text" name="nom" value={formData.nom} onChange={onChange} class="form-control" id="fullname"/>

              </div>

              <div class="form-group first">
                <label for="nom">Prénom </label>
                <input type="text" name="prénom" value={formData.prénom} onChange={onChange} class="form-control" id="fullname"/>

              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" value={formData.email} onChange={onChange} class="form-control" id="email"/>

              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" value={formData.password} onChange={onChange} class="form-control" id="password"/>
                
              </div>
              <div class="form-group last mb-4">
                <label for="re-password">Re-type Password</label>
                <input type="password" name="password2" value={formData.password2} onChange={onChange}class="form-control" id="re-password"/>
                
              </div>



              <div class="form-group ">
                <label for="fullname">date de naissance</label>
                <input type="date"  placeholder="date de naissance" name="date_de_naissance" value={formData.date_de_naissance} onChange={onChange} class="form-control" id="fullname"/>

              </div>


              <div class="form-group ">
                <label for="fullname">sexe</label>
                <input type="text"  name="sexe" value={formData.sexe} onChange={onChange} class="form-control" id="fullname"/>

              </div>


              <div class="d-flex mb-5 align-items-center">
                <label class="control control--checkbox mb-0"><span class="caption">Already have an account? <Link to="/login/candidate"> Login</Link> here  </span>
              
                  <div class="control__indicator"></div>
                </label>
                
              </div>

              <input type="submit" value="Register" class="btn btn-block btn-primary"/>
            </form>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
        </div>
    )
}

export default RegisterCandidate
