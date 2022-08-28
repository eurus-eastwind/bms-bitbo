import React from 'react'

export default function BITBoPurokLeaderSidebar() {
  return (
    <React.Fragment>
          <div className="leftside-menu">
              {/* LOGO */}
              <a href="index.html" className="logo text-center logo-light">
                  <span className="logo-lg">
                      <img src="../../assets/images/bitbo-logo-with-text.png" alt height={40} />
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
                          <a href="users.html" className="side-nav-link">
                              <i className="uil-user-square" />
                              <span> Users </span>
                          </a>
                      </li>
                      <li className="side-nav-item">
                          <a href="households.html" className="side-nav-link">
                              <i className="uil-home-alt" />
                              <span> Households </span>
                          </a>
                      </li>
                      <li className="side-nav-item">
                          <a href="events.html" className="side-nav-link">
                              <i className="uil-trophy" />
                              <span> Events </span>
                          </a>
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
