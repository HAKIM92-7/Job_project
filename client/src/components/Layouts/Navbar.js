import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
             <nav class="navbar navbar-default" role="navigation" data-spy="affix" data-offset-top="50">
              <div class="container">
            
                <div class="navbar-header">
                
                  <a class="navbar-brand logo" href="index.html"><img src="assets/img/logo.png" alt=""/></a>
                </div>

                <div style={{display : "flex"}} class="collapse navbar-collapse" id="navbar">              
                
                <ul class="nav navbar-nav">
                  <li>
                    <Link class="active" to="/">
                    Home
                    </Link>
                    
                  </li>
                  <li>
                  <Link class="active" to="/entreprises">
                    Entreprises
                    </Link>
                    
                  </li>
                  </ul>
                <ul class="nav navbar-nav navbar-right float-right">
                  {/* <li class="left"><a  class="active" href="post-job.html"><i class="ti-pencil-alt"></i> Post A Job</a></li> */}

                  <li class="right"><Link class="active" to="/login/company"><i class="ti-lock"></i>Espace Entreprise</Link></li>
                  <li class="right"><Link class="active" to="/login/candidate"><i class="ti-lock"></i>Espace Candidat</Link></li>
                </ul>
              </div>                           
            </div>
            
            
          </nav>
        </div>
    )
}

export default Navbar
