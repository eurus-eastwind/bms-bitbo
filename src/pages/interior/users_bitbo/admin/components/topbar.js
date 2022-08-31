import React from 'react'

export default function BITBoAdminTopbar() {
    return (
        <React.Fragment>
            <div class="navbar-custom">
                <ul class="list-unstyled topbar-menu float-end mb-0">
                    <li class="dropdown notification-list d-lg-none">
                        <a class="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i class="dripicons-search noti-icon"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                            <form class="p-3">
                                <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                            </form>
                        </div>
                    </li>

                    <li class="dropdown notification-list">
                        <a class="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i class="dripicons-bell noti-icon"></i>
                            <span class="noti-icon-badge"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg">

                            <div class="dropdown-item noti-title">
                                <h5 class="m-0">
                                    <span class="float-end">
                                        <a href="javascript: void(0);" class="text-dark">
                                            <small>Clear All</small>
                                        </a>
                                    </span>Notification
                                </h5>
                            </div>

                            <div style="max-height: 230px;" data-simplebar="">

                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-info">
                                        <i class="mdi mdi-account-plus"></i>
                                    </div>
                                    <p class="notify-details">New user registered.
                                        <small class="text-muted">5 hours ago</small>
                                    </p>
                                </a>

                                <a href="blotter.html" class="dropdown-item notify-item">
                                    <div class="notify-icon">
                                        <img src="assets/images/users/profile1.png" class="img-fluid rounded-circle" alt=""/> </div>
                                    <p class="notify-details">Juan Dela Cruz</p>
                                    <p class="text-muted mb-0 user-msg">
                                        <small>Requested a blotter.</small>
                                    </p>
                                </a>

                                <a href="blotter.html" class="dropdown-item notify-item">
                                    <div class="notify-icon">
                                        <img src="assets/images/users/profile2.png" class="img-fluid rounded-circle" alt=""/> </div>
                                    <p class="notify-details">Maria Clara</p>
                                    <p class="text-muted mb-0 user-msg">
                                        <small>Requested a business permit.</small>
                                    </p>
                                </a>

                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon">
                                        <img src="assets/images/users/profile3.png" class="img-fluid rounded-circle" alt=""/> </div>
                                    <p class="notify-details">Sisa Usisa</p>
                                    <p class="text-muted mb-0 user-msg">
                                        <small>Requested a Brgy. Indigency.</small>
                                    </p>
                                </a>
                            </div>

                            <a href="javascript:void(0);" class="dropdown-item text-center text-primary notify-item notify-all">
                                View All
                            </a>

                        </div>
                    </li>

                    <li class="notification-list">
                        <a class="nav-link" href="iHealth/admin/ihealth-admin-index.html">
                            <i class="noti-icon"><button type="button" class="btn btn-info">Switch to <strong>iHealth</strong></button></i>
                        </a>
                    </li>

                    <li class="dropdown notification-list">
                        <a class="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <span class="account-user-avatar">
                                <img src="assets/images/users/profile1.png" alt="user-image" class="rounded-circle"/>
                            </span>
                            <span>
                                <span class="account-user-name">Juan Dela Cruz</span>
                                <span class="account-position">Admin</span>
                            </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                            <div class=" dropdown-header noti-title">
                                <h6 class="text-overflow m-0">Welcome !</h6>
                            </div>

                            <a href="account.html" class="dropdown-item notify-item">
                                <i class="mdi mdi-account-circle me-1"></i>
                                <span>My Account</span>
                            </a>

                            <a href="login-admin.html" class="dropdown-item notify-item">
                                <i class="mdi mdi-logout me-1"></i>
                                <span>Logout</span>
                            </a>
                        </div>
                    </li>

                </ul>
                <button class="button-menu-mobile open-left">
                    <i class="mdi mdi-menu"></i>
                </button>
                <div class="app-search dropdown d-none d-lg-block">
                    <form>
                        <div class="input-group">
                            <input type="text" class="form-control dropdown-toggle" placeholder="Search..." id="top-search"/>
                                <span class="mdi mdi-magnify search-icon"></span>
                                <button class="input-group-text btn-primary" type="submit">Search</button>
                        </div>
                    </form>

                    <div class="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                        <div class="dropdown-header noti-title">
                            <h5 class="text-overflow mb-1">Found <span class="text-danger">17</span> results</h5>
                        </div>

                        <div class="dropdown-header noti-title">
                            <h6 class="text-overflow mb-2 text-uppercase">Users</h6>
                        </div>

                        <div class="notification-list">
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <div class="d-flex">
                                    <img class="d-flex me-2 rounded-circle" src="assets/images/users/profile1.png" alt="Generic placeholder image" height="32"/>
                                        <div class="w-100">
                                            <h5 class="m-0 font-14">Juan Dela Cruz</h5>
                                            <span class="font-12 mb-0">Brgy. Official</span>
                                        </div>
                                </div>
                            </a>

                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <div class="d-flex">
                                    <img class="d-flex me-2 rounded-circle" src="assets/images/users/profile2.png" alt="Generic placeholder image" height="32"/>
                                        <div class="w-100">
                                            <h5 class="m-0 font-14">Maria Clara</h5>
                                            <span class="font-12 mb-0">Helpdesk</span>
                                        </div>
                                </div>
                            </a>

                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <div class="d-flex">
                                    <img class="d-flex me-2 rounded-circle" src="assets/images/users/profile3.png" alt="Generic placeholder image" height="32"/>
                                        <div class="w-100">
                                            <h5 class="m-0 font-14">Sisa Usisa</h5>
                                            <span class="font-12 mb-0">Staff</span>
                                        </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
