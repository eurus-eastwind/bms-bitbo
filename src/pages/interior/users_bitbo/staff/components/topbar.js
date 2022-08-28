import React from 'react'

export default function BITBoStaffTopbar() {
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
                                      <img src="../../assets/images/users/profile1.png" className="img-fluid rounded-circle" alt /> </div>
                                  <p className="notify-details">Juan Dela Cruz</p>
                                  <p className="text-muted mb-0 user-msg">
                                      <small>Requested a blotter.</small>
                                  </p>
                              </a>
                              {/* item*/}
                              <a href="blotter.html" className="dropdown-item notify-item">
                                  <div className="notify-icon">
                                      <img src="../../assets/images/users/profile2.png" className="img-fluid rounded-circle" alt /> </div>
                                  <p className="notify-details">Maria Clara</p>
                                  <p className="text-muted mb-0 user-msg">
                                      <small>Requested a business permit.</small>
                                  </p>
                              </a>
                              {/* item*/}
                              <a href="javascript:void(0);" className="dropdown-item notify-item">
                                  <div className="notify-icon">
                                      <img src="../../assets/images/users/profile3.png" className="img-fluid rounded-circle" alt /> </div>
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
                              <span className="account-position">Staff</span>
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
                          <a href="../../login-staff.html" className="dropdown-item notify-item">
                              <i className="mdi mdi-logout me-1" />
                              <span>Logout</span>
                          </a>
                      </div>
                  </li>
              </ul>
              <button className="button-menu-mobile open-left">
                  <i className="mdi mdi-menu" />
              </button>
              <div className="app-search dropdown d-none d-lg-block">
                  <form>
                      <div className="input-group">
                          <input type="text" className="form-control dropdown-toggle" placeholder="Search..." id="top-search" />
                          <span className="mdi mdi-magnify search-icon" />
                          <button className="input-group-text btn-primary" type="submit">Search</button>
                      </div>
                  </form>
                  <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                      {/* item*/}
                      <div className="dropdown-header noti-title">
                          <h5 className="text-overflow mb-1">Found <span className="text-danger">17</span> results</h5>
                      </div>
                      {/* item*/}
                      <div className="dropdown-header noti-title">
                          <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                      </div>
                      <div className="notification-list">
                          {/* item*/}
                          <a href="javascript:void(0);" className="dropdown-item notify-item">
                              <div className="d-flex">
                                  <img className="d-flex me-2 rounded-circle" src="../../assets/images/users/profile1.png" alt="Generic placeholder image" height={32} />
                                  <div className="w-100">
                                      <h5 className="m-0 font-14">Juan Dela Cruz</h5>
                                      <span className="font-12 mb-0">Brgy. Official</span>
                                  </div>
                              </div>
                          </a>
                          {/* item*/}
                          <a href="javascript:void(0);" className="dropdown-item notify-item">
                              <div className="d-flex">
                                  <img className="d-flex me-2 rounded-circle" src="../../assets/images/users/profile2.png" alt="Generic placeholder image" height={32} />
                                  <div className="w-100">
                                      <h5 className="m-0 font-14">Maria Clara</h5>
                                      <span className="font-12 mb-0">Helpdesk</span>
                                  </div>
                              </div>
                          </a>
                          {/* item*/}
                          <a href="javascript:void(0);" className="dropdown-item notify-item">
                              <div className="d-flex">
                                  <img className="d-flex me-2 rounded-circle" src="../../assets/images/users/profile3.png" alt="Generic placeholder image" height={32} />
                                  <div className="w-100">
                                      <h5 className="m-0 font-14">Sisa Usisa</h5>
                                      <span className="font-12 mb-0">Staff</span>
                                  </div>
                              </div>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          {/* end Topbar */}

    </React.Fragment>
  )
}