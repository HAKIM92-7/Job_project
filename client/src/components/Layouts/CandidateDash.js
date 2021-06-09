import React,{useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import moment from 'moment'


const CandidateDash = () => {

const dispatch = useDispatch()
const candidat = useSelector(state => state.authCandidate.candidate)




    return (
        <div>
          { candidat ?
             
          <div className="container bootstrap snippets bootdey">
            <div className="row">
              <div className="profile-nav col-md-3">
                <div className="panel">
                  <div className="user-heading round">
                    <a href="#">
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                    </a>
                    <h1>{candidat.nom} {candidat.prénom}</h1>
                    <p>{candidat.email}</p>
                  </div>
                  <ul className="nav nav-pills nav-stacked">
                    <li className="active">
                      <a href="#"> <i className="fa fa-user" /> Profile</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-calendar" /> Activités récentes
                        <span className="label label-warning pull-right r-activity">9</span></a>
                    </li>
                    <li>
                      <a href="#"> <i className="fa fa-edit" /> Edit profile</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="profile-info col-md-9">
                <div className="panel">
                </div>
                <div className="panel">
                  <div className="bio-graph-heading">
                    Hello sur Job Board - {candidat.prénom}
                  </div>
                  <div className="panel-body bio-graph-info">
                   
                    <div className="row">
                      <div className="bio-row">
                        <p><span>Prénom </span>:  {candidat.prénom}</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Nom </span>: {candidat.nom}</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Date de naissance</span>:{moment(candidat.date_de_naissance).format("LL")} </p>
                      </div>
                      <div className="bio-row">
                        <p><span>Numéro de téléphone </span></p>
                      </div>
                      <div className="bio-row">
                        <p><span>Adresse Email </span>: {candidat.email}</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Country </span>:</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Genre </span>: {candidat.sexe}</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Adresse Domicile </span>: </p>
                      </div>
                      <div className="bio-row">
                        <p><span>Ville </span>: </p>
                      </div>
                      <div className="bio-row">
                        <p><span>Dérnier diplôme obtenue </span>:</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Dérnier emploi </span>: </p>
                      </div>
                      <div className="bio-row">
                        <p><span>Date du clôture du contrat </span>:</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="panel">
                        <div className="panel-body">
                          <div className="bio-chart">
                            <div style={{display: 'inline', width: '100px', height: '100px'}}>
                              <canvas width={100} height="100px" />
                              /&gt;
                            </div>
                          </div>
                          <div className="bio-desk">
                            <h4 className="red">Langues</h4>
                            <p></p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="panel">
                        <div className="panel-body">
                          <div className="bio-chart">
                            <div style={{display: 'inline', width: '100px', height: '100px'}}>
                              <canvas width={100} height="100px" />
                              /&gt;
                            </div>
                          </div>
                          <div className="bio-desk">
                            <h4 className="terques">Autres éxpériences professionel</h4>
                            <p>Emploi 1 : X entreprise</p>
                            <p>Emploi 2 : Y entreprise</p>
                            <p>Emploi 3 : Z entreprise</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="panel">
                        <div className="panel-body">
                          <div className="bio-chart">
                            <div style={{display: 'inline', width: '100px', height: '100px'}}>
                              <canvas width={100} height="100px" />
                              /&gt;
                            </div>
                          </div>
                          <div className="bio-desk">
                            <h4 className="green">Commentaire</h4>
                            <p>.....</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> : <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>}
        </div>
    )
}

export default CandidateDash
