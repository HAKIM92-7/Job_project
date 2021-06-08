import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { registerCompany } from '../../redux/actions/auth_company_actions'
const RegisterCompany = () => {


const dispatch = useDispatch()
const [formData , setFormData] = useState ({

    nom :"",
    email:"" ,
    password :"" ,
    password2 :"",
     matricule_fiscale :"" , 
     forme_juridique :"", 
     secteur:"" ,
      nbre_employes :""
})


const onChange = (e) => {


    setFormData({...formData , [e.target.name] : e.target.value})
    
    
    }






const onSubmit = (e) => {

    e.preventDefault() ;
    
    dispatch(registerCompany(formData))
    
    setFormData({
        nom : "" ,
        email : "" ,
        password : "" ,
        password2 : "" , 
        matricule_fiscale :"" , 
         forme_juridique :"", 
        secteur:"" ,
        nbre_employes :""

    
    
    })
    
    
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
                <label for="nom">Nom</label>
                <input type="text"  name="nom" value={formData.nom} onChange={onChange} class="form-control" id="fullname"/>

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
                <label for="fullname">Matricule fiscale</label>
                <input type="text"  name="matricule_fiscale" value={formData.matricule_fiscale} onChange={onChange} class="form-control" id="fullname"/>

              </div>


              <div class="form-group ">
                <label for="fullname">Forme juridique</label>
                <input type="text"  name="forme_juridique" value={formData.forme_juridique} onChange={onChange} class="form-control" id="fullname"/>

              </div>


              <div class="form-group ">
                <label for="fullname">Secteur</label>
                <input type="text"  name="secteur" value={formData.secteur} onChange={onChange} class="form-control" id="fullname"/>

              </div>


              <div class="form-group ">
                <label for="fullname">Nombre d'Employés</label>
                <input type="text"  name="nbre_employes" value={formData.nbre_employes} onChange={onChange} class="form-control" id="fullname"/>

              </div>










              
              <div class="d-flex mb-5 align-items-center">
                <label class="control control--checkbox mb-0"><span class="caption">Already have an account? <Link to="/login/company"> Login</Link> here  </span>
              
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

export default RegisterCompany
