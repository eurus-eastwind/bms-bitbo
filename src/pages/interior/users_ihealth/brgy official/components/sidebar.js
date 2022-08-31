import React from 'react'

export default function IHealthBrgyOfficialSidebar() {
  return (
    <React.Fragment>
          <div className="leftside-menu">

            <link href="../../assets/css/app-i.min.css" rel="stylesheet" type="text/css" id="light-style" />
            
              {/* LOGO */}
              <a href="index.html" className="logo text-center logo-light">
                  <span className="logo-lg">
                      <img src="../../assets/images/ihealth-logo-with-text.png" alt height={40} />
                  </span>
              </a>
              <div className="h-100" id="leftside-menu-container" data-simplebar>
                  {/*- Sidemenu */}
                  <ul className="side-nav">
                      <li className="side-nav-title side-nav-item">Menu</li>
                      <li className="side-nav-item">
                          <a href="index.html" className="side-nav-link">
                              <i className="uil-chart-pie" />
                              <span> Dashboard </span>
                          </a>
                      </li>
                      <li className="side-nav-item">
                          <a href="patients.html" className="side-nav-link">
                              <i className="uil-user-square" />
                              <span> Patients </span>
                          </a>
                      </li>
                      <li className="side-nav-item">
                          <a href="healthcertificates.html" className="side-nav-link">
                              <i className="uil-user-square" />
                              <span> Health Certificates </span>
                          </a>
                      </li>
                      <li className="side-nav-item">
                          <a data-bs-toggle="collapse" href="#generalserv" aria-expanded="false" className="side-nav-link">
                              <i className="uil-file-medical-alt" />
                              <span>General Services</span>
                              <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="generalserv">
                              <ul className="side-nav-second-level">
                                  <li>
                                      <a href="covid_vaccination.html"><i className="mdi mdi-needle" /> COVID-19 Vaccine</a>
                                  </li>
                                  <li>
                                      <a href="dental_services.html"><i className="mdi mdi-tooth-outline" /> Dental Check-Up</a>
                                  </li>
                                  <li>
                                      <a href="infant_service.html"><i className="mdi mdi-baby" /> Infant Check-Up</a>
                                  </li>
                                  <li>
                                      <a href="medical_service.html"><i className="mdi mdi-stethoscope" /> Medical Check-Up</a>
                                  </li>
                                  <li>
                                      <a href="rabies_vaccination.html"><i className="mdi mdi-dog" /> Rabies Vaccination</a>
                                  </li>
                                  <li>
                                      <a href="seniorcitizen_service.html"> <i className="mdi mdi-account" /> Senior Citizen</a>
                                  </li>
                              </ul>
                          </div>
                      </li>
                      <li className="side-nav-item">
                          <a href="logs.html" className="side-nav-link">
                              <i className="uil-notes" />
                              <span> Logs </span>
                          </a>
                      </li>
                  </ul>
              </div>
              {/* Sidebar -left */}
          </div>
          {/* Left Sidebar End */}

    </React.Fragment>
  )
}
