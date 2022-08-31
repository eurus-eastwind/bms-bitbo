import React from 'react'

export default function BITBoPurokLeaderTopbar() {
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
                              <a href="javascript:void(0);" className="dropdown-item notify-item">
                                  <div className="notify-icon bg-info">
                                      <i className="mdi mdi-account-plus" />
                                  </div>
                                  <p className="notify-details">New user registered.
                                      <small className="text-muted">5 hours ago</small>
                                  </p>
                              </a>
                              {/* item*/}
                              <a href="blotter.html" className="dropdown-item notify-item">
                                  <div className="notify-icon">
                                      <img src="../../assets/images/users/profile1.png" className="img-fluid rounded-circle" alt />
                                  </div>
                                  <p className="notify-details">Juan Dela Cruz</p>
                                  <p className="text-muted mb-0 user-msg">
                                      <small>Requested a blotter.</small>
                                  </p>
                              </a>
                              {/* item*/}
                              <a href="blotter.html" className="dropdown-item notify-item">
                                  <div className="notify-icon">
                                      <img src="../../assets/images/users/profile2.png" className="img-fluid rounded-circle" alt />
                                  </div>
                                  <p className="notify-details">Maria Clara</p>
                                  <p className="text-muted mb-0 user-msg">
                                      <small>Requested a business permit.</small>
                                  </p>
                              </a>
                              {/* item*/}
                              <a href="javascript:void(0);" className="dropdown-item notify-item">
                                  <div className="notify-icon">
                                      <img src="../../assets/images/users/profile3.png" className="img-fluid rounded-circle" alt />
                                  </div>
                                  <p className="notify-details">Sisa Usisa</p>
                                  <p className="text-muted mb-0 user-msg">
                                      <small>Requested a Brgy. Indigency.</small>
                                  </p>
                              </a>
                          </div>
                          {/* All*/}
                          <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
                              View All
                          </a>
                      </div>
                  </li>
                  <li className="dropdown notification-list">
                      <a className="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                          <span className="account-user-avatar">
                              <img src="../../assets/images/users/profile1.png" alt="user-image" className="rounded-circle" />
                          </span>
                          <span>
                              <span className="account-user-name">Juan Dela Cruz</span>
                              <span className="account-position">Purok Leader</span>
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
                          <a href="../../login-purokleader.html" className="dropdown-item notify-item">
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
