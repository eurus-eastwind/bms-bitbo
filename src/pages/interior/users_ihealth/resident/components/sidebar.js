import React from 'react'

export default function IHealthResidentSidebar() {
  return (
    <React.Fragment>
        
        <link href="../../assets/css/app-i.min.css" rel="stylesheet" type="text/css" id="light-style" />
        
          <div className="leftside-menu">
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
                          <a href="healthcertificates.html" className="side-nav-link">
                              <i className="uil-clipboard-alt" />
                              <span> Health Certificates </span>
                          </a>
                      </li>
                      <li className="side-nav-item">
                          <a href="generalservices.html" className="side-nav-link">
                              <i className="uil-clipboard-alt" />
                              <span> General Services </span>
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
