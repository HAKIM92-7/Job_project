import React from 'react'

const CompanyDash = () => {
    return (
        <div>
            <div className="container bootstrap snippets bootdey">
            <div className="row">
              <div className="profile-nav col-md-3">
                <div className="panel">
                  <div className="user-heading round">
                    <a href="#">
                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                    </a>
                    <h1>Candidat 1</h1>
                    <p>candidat1@gmail.com</p>
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
                    Hello sur K! recrutement - Profil du candidat 1
                  </div>
                  <div className="panel-body bio-graph-info">
                    <h1>Bio Graph</h1>
                    <div className="row">
                      <div className="bio-row">
                        <p><span>Prénom </span>: Candidat 1</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Nom </span>: cd</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Date de naissance</span>: 13 July 1983</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Numéro de téléphone </span>: +216 1236547</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Adresse Email </span>: candidat@gmail.com</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Country </span>: Australia</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Genre </span>: Femelle</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Adresse Domicile </span>: Tunis</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Ville </span>: Tunis</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Dérnier diplôme obtenue </span>: license</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Dérnier emploi </span>: Financiére</p>
                      </div>
                      <div className="bio-row">
                        <p><span>Date du clôture du contrat </span>: 12 janv 2021</p>
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
                            <p>Français : Niveau 3</p>
                            <p>Anglais : Niveau 2</p>
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
          </div>
        </div>
    )
}

export default CompanyDash
