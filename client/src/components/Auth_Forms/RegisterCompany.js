import React, { useState } from 'react'
import { Link , useHistory } from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { registerCompany } from '../../redux/actions/auth_company_actions'
const RegisterCompany = () => {

const history = useHistory()
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
    history.push('/dashboard/company')
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
        <div className="register">

         
             <div class="content"> 
             <h1 style={{marginBottom:"20px"}}>Inscription Entreprise</h1>
    <div class="container">
      <div class="row">
        
        <div class="contents">
          <div class="row justify-content-center">
            <div style={{marginLeft:"65%", marginTop:"20px"}} class="col-md-8">
             
            <form  onSubmit={onSubmit}>
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
                <label class="control control--checkbox mb-0"><span style={{color:"white"}} class="caption">Already have an account? <Link to="/login/company"> Login</Link> here  </span>
              
                  {/* <div class="control__indicator"></div> */}
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
