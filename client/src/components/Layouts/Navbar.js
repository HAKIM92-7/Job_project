import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import { logoutCandidate } from '../../redux/actions/auth_candidate_actions'

const Navbar = () => {
  const dispatch = useDispatch()
  const candidat = useSelector(state=> state.authCandidate.candidate)
    return (
        <div>
             <nav class="navbar navbar-default" role="navigation" data-spy="affix" data-offset-top="50">
              <div class="container">
            
                <div class="navbar-header">
                
                  <a class="navbar-brand logo" href="index.html"><img src="assets/img/logo.png"  alt=""/></a>
                </div>

                <div style={{display : "flex"}} class="collapse navbar-collapse" id="navbar">              
                
                <ul class="nav navbar-nav">
                  <li>
                    <Link class="active" style={{backgroundColor:"blue"}}  to="/">
                    Home
                    </Link>
                    
                  </li>
                  {/* <li>
                  <Link class="active" style={{backgroundColor:"blue"}} to="/entreprises">
                    Entreprises
                    </Link>
                    
                  </li> */}
{
  candidat ? 
                  <li>
                  <Link class="active" style={{backgroundColor:"blue"}} to="/dashboard/candidate">
                    Mon Profil
                    </Link>
                    
                  </li> : ""

}
                  </ul>
                <ul class="nav navbar-nav navbar-right float-right">
                  {/* <li class="left"><a  class="active" href="post-job.html"><i class="ti-pencil-alt"></i> Post A Job</a></li> */}

                  <li class="right"><Link class="active" style={{backgroundColor:"blue"}}  to="/login/company"><i class="ti-lock"></i>Espace Entreprise</Link></li>
                  
                  {  candidat ? <li class="right"><Link class="active"  style={{backgroundColor:"blue"}} to="/" onClick={()=>dispatch( logoutCandidate() )}><i class="ti-lock"></i>LOGOUT</Link></li>:
                  <li class="right"><Link class="active"  style={{backgroundColor:"blue"}} to="/login/candidate"><i class="ti-lock"></i>Espace Candidat</Link></li>
                  }
                </ul>
              </div>                           
            </div>
            
            
          </nav>
        </div>
    )
}

export default Navbar
