import React from 'react'

export default function BITBoResidentTopbar() {
  return (
    <React.Fragment>
          <div className="navbar-custom">
              <ul className="list-unstyled topbar-menu float-end mb-0">
                  <li className="dropdown notification-list d-lg-none">
                      <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                          <i className="dripicons-search noti-icon" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                          <form className="p-3">
                              <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                          </form>
                      </div>
                  </li>
                  <li className="dropdown notification-list">
                      <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                          <i className="dripicons-bell noti-icon" />
                          <span className="noti-icon-badge" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg">
                          {/* item*/}
                          <div className="dropdown-item noti-title">
                              <h5 className="m-0">
                                  <span className="float-end">
                                      <a href="javascript: void(0);" className="text-dark">
                                          <small>Clear All</small>
                                      </a>
                                  </span>Notification
                              </h5>
                          </div>
                          <div style={{ maxHeight: 230 }} data-simplebar>
                              {/* item*/}
                              <a href="blotter.html" className="dropdown-item notify-item">
                                  <div className="notify-icon">
                                      <img src="../../assets/images/bitbo.png" className="img-fluid rounded-circle" alt /> </div>
                                  <p className="notify-details">Blotter Approved</p>
                                  <p className="text-muted mb-0 user-msg">
                                      <small>Your requested blotter is on review.</small>
                                  </p>
                              </a>
                              {/* item*/}
                              <a href="blotter.html" className="dropdown-item notify-item">
                                  <div className="notify-icon">
                                      <img src="../../assets/images/bitbo.png" className="img-fluid rounded-circle" alt /> </div>
                                  <p className="notify-details">Brgy. ID</p>
                                  <p className="text-muted mb-0 user-msg">
                                      <small>Your requested Brgy. ID is approved.</small>
                                  </p>
                              </a>
                              {/* item*/}
                              <a href="blotter.html" className="dropdown-item notify-item">
                                  <div className="notify-icon">
                                      <img src="../../assets/images/bitbo.png" className="img-fluid rounded-circle" alt /> </div>
                                  <p className="notify-details">Certificate Request</p>
                                  <p className="text-muted mb-0 user-msg">
                                      <small>Your requested certificate for residency is approved.</small>
                                  </p>
                              </a>
                          </div>
                          {/* All*/}
                          <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
                              View All
                          </a>
                      </div>
                  </li>
                  <li className="notification-list">
                      <a className="nav-link" href="../../iHealth/resident/index.html">
                          <i className="noti-icon"><button type="button" className="btn btn-info"><strong>iHealth</strong></button></i>
                      </a>
                  </li>
                  <li className="dropdown notification-list">
                      <a className="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                          <span className="account-user-avatar">
                              <img src="../../assets/images/users/profile1.png" alt="user-image" className="rounded-circle" />
                          </span>
                          <span>
                              <span className="account-user-name">Juan Dela Cruz</span>
                              <span className="account-position">Resident</span>
                          </span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                          {/* item*/}
                          <div className=" dropdown-header noti-title">
                              <h6 className="text-overflow m-0">Welcome !</h6>
                          </div>
                          {/* item*/}
                          <a href="account.html" className="dropdown-item notify-item">
                              <i className="mdi mdi-account-circle me-1" />
                              <span>My Account</span>
                          </a>
                          {/* item*/}
                          <a href="../../login-resident.html" className="dropdown-item notify-item">
                              <i className="mdi mdi-logout me-1" />
                              <span>Logout</span>
                          </a>
                      </div>
                  </li>
              </ul>
              <button className="button-menu-mobile open-left">
                  <i className="mdi mdi-menu" />
              </button>
          </div>
          {/* end Topbar */}

    </React.Fragment>

  )
}
