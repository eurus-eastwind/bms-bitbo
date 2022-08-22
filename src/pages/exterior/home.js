import React from 'react'

export default function home() {
  return (
    <React.Fragment>
        <section className="hero-section" id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <div className="mt-md-4">
                            <div className="card">

                                <div className="card-body p-4">
                                    
                                    <div className="text-center w-75 m-auto">
                                        <h4 className="text-dark-50 text-center mt-0 fw-bold">Sign up as RESIDENT</h4><br></br>
                                    </div>

                                    <div id="basicwizard">
                                        <ul className="nav nav-pills nav-justified form-wizard-header mb-3">
                                            <li className="nav-item" data-target-form="#accountForm">
                                                <a href="#first" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                                                    <i className="mdi mdi-account-circle me-1"></i>
                                                    <span className="d-none d-sm-inline">Profile</span>
                                                </a>
                                            </li>
                                            <li className="nav-item" data-target-form="#profileForm">
                                                <a href="#second" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                                                    <i className="mdi mdi-map-marker-circle me-1"></i>
                                                    <span className="d-none d-sm-inline">Address</span>
                                                </a>
                                            </li>
                                            <li className="nav-item" data-target-form="#otherForm">
                                                <a href="#third" data-bs-toggle="tab" data-toggle="tab" className="nav-link rounded-0 pt-2 pb-2">
                                                    <i className="mdi mdi-checkbox-marked-circle-outline me-1"></i>
                                                    <span className="d-none d-sm-inline">Finish</span>
                                                </a>
                                            </li>
                                        </ul>

                                        <div className="tab-content mb-0 b-0">

                                            <div className="tab-pane" id="first">
                                                <form id="accountForm" method="post" action="#" className="form-horizontal">
                                                    <div className="row">
                                                        <div className="col-lg-4 mb-3">
                                                            <label for="emailaddress" className="form-label">First Name</label>
                                                            <input className="form-control" type="text" id="emailaddress" required="" placeholder="First Name"/>
                                                        </div>
                                                        <div className="col-lg-4 mb-3">
                                                            <label for="emailaddress" className="form-label">Middle Name</label>
                                                            <input className="form-control" type="text" id="emailaddress" required="" placeholder="Middle Name"/>
                                                        </div>
                                                        <div className="col-lg-4 mb-3">
                                                            <label for="emailaddress" className="form-label">Last Name</label>
                                                            <input className="form-control" type="text" id="emailaddress" required="" placeholder="Last Name"/>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="mb-3">
                                                                <label for="lastname" className="form-label">Birthday</label>
                                                                <input type="date" className="form-control" id="birthday" placeholder="Enter birthday"/>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="mb-3">
                                                                <label for="lastname" className="form-label">Phone No.</label>
                                                                <input type="number" className="form-control" id="phone" placeholder="Phone No."/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="mb-3">
                                                                <label for="lastname" className="form-label">Username</label>
                                                                <input type="text" className="form-control" id="username" placeholder="Enter username"/>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="mb-3">
                                                                <label for="lastname" className="form-label">Email</label>
                                                                <input type="email" className="form-control" id="email" placeholder="Email"/>
                                                            </div>
                                                        </div>
                                                    </div>
                    
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="useremail" className="form-label">Password</label>
                                                                <div className="input-group input-group-merge">
                                                                    <input type="password" id="password" className="form-control" placeholder="Enter your password"/>
                                                                    <div className="input-group-text" data-password="false">
                                                                        <span className="password-eye"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="userpassword" className="form-label"> Confirm Password</label>
                                                                <div className="input-group input-group-merge">
                                                                    <input type="password" id="password" className="form-control" placeholder="Enter your password"/>
                                                                    <div className="input-group-text" data-password="false">
                                                                        <span className="password-eye"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                            <div className="tab-pane fade" id="second">
                                                <form id="profileForm" method="post" action="#" className="form-horizontal">
                                                    <div className="col mb-3">
                                                        <label for="useremail" className="form-label">House No./Street</label>
                                                        <input type="email" className="form-control" id="housestreet" placeholder="Email"/>
                                                    </div>
                                                    <div className="col mb-3">
                                                        <label for="userpassword" className="form-label">Purok</label>
                                                        <input type="password" className="form-control" id="purok" placeholder="Purok"/>
                                                    </div>
                                                    <div className="col mb-3">
                                                        <label for="userpassword" className="form-label">Barangay</label>
                                                        <input type="password" className="form-control" id="barangay" placeholder="Barangay"/>
                                                    </div>
                                                    <div className="col mb-3">
                                                        <label for="userpassword" className="form-label">City</label>
                                                        <input type="password" className="form-control" id="City" placeholder="City"/>
                                                    </div>
                                                </form>
                                            </div>

                                            <div className="tab-pane fade" id="third">
                                                <form id="otherForm" method="post" action="#" className="form-horizontal">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="text-center">
                                                                <h2 className="mt-0">
                                                                    <i className="mdi mdi-check-all"></i>
                                                                </h2>
                                                                <h3 className="mt-0">Registered Successfully !</h3>
                                                
                                                                <p className="w-75 mb-2 mx-auto">You are already registered. Please proceed to log in to access the system. Thank you!</p>
                                                
                                                                <div className="mb-3">
                                                                    <div className="form-check d-inline-block">
                                                                        <input type="checkbox" className="form-check-input" id="customCheck4" required=""/>
                                                                        <label className="form-check-label" for="customCheck4">I agree with the <a href="bitbo-termsandconditions.html">Terms and Conditions</a></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                
                                                    </div>
                                                </form>
                                            </div>

                                            <ul className="list-inline wizard mb-0">
                                                <li className="previous list-inline-item"><a href="#" className="btn btn-primary">Previous</a>
                                                </li>
                                                <li className="next list-inline-item float-end"><a href="#" className="btn btn-primary">Next</a></li>
                                            </ul>

                                        </div>
                                    </div> 
                                </div> 
                            </div>


                            <div className="row mt-3">
                                <div className="col-12 text-center">
                                    <p className="text-muted">Already have account? <a href="login-resident.html" className="text-muted ms-1"><b>Log In</b></a></p>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-2">
                        <div className="text-md-end mt-3 mt-md-0">
                            <img src="assets/images/bitbo.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    
    </React.Fragment>
  )
}
