import React from 'react'

export default function home() {
  return (
    <React.Fragment>
        <section class="hero-section" id="home">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-5">
                    <div class="mt-md-4">
                        <div class="card">

                            <div class="card-body p-4">
                                
                                <div class="text-center w-75 m-auto">
                                    <h4 class="text-dark-50 text-center mt-0 fw-bold">Sign up as RESIDENT</h4><br></br>
                                </div>

                                <div id="basicwizard">
                                    <ul class="nav nav-pills nav-justified form-wizard-header mb-3">
                                        <li class="nav-item" data-target-form="#accountForm">
                                            <a href="#first" data-bs-toggle="tab" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                                <i class="mdi mdi-account-circle me-1"></i>
                                                <span class="d-none d-sm-inline">Profile</span>
                                            </a>
                                        </li>
                                        <li class="nav-item" data-target-form="#profileForm">
                                            <a href="#second" data-bs-toggle="tab" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                                <i class="mdi mdi-map-marker-circle me-1"></i>
                                                <span class="d-none d-sm-inline">Address</span>
                                            </a>
                                        </li>
                                        <li class="nav-item" data-target-form="#otherForm">
                                            <a href="#third" data-bs-toggle="tab" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                                <i class="mdi mdi-checkbox-marked-circle-outline me-1"></i>
                                                <span class="d-none d-sm-inline">Finish</span>
                                            </a>
                                        </li>
                                    </ul>

                                    <div class="tab-content mb-0 b-0">

                                        <div class="tab-pane" id="first">
                                            <form id="accountForm" method="post" action="#" class="form-horizontal">
                                                <div class="row">
                                                    <div class="col-lg-4 mb-3">
                                                        <label for="emailaddress" class="form-label">First Name</label>
                                                        <input class="form-control" type="text" id="emailaddress" required="" placeholder="First Name"/>
                                                    </div>
                                                    <div class="col-lg-4 mb-3">
                                                        <label for="emailaddress" class="form-label">Middle Name</label>
                                                        <input class="form-control" type="text" id="emailaddress" required="" placeholder="Middle Name"/>
                                                    </div>
                                                    <div class="col-lg-4 mb-3">
                                                        <label for="emailaddress" class="form-label">Last Name</label>
                                                        <input class="form-control" type="text" id="emailaddress" required="" placeholder="Last Name"/>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col">
                                                        <div class="mb-3">
                                                            <label for="lastname" class="form-label">Birthday</label>
                                                            <input type="date" class="form-control" id="birthday" placeholder="Enter birthday"/>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="mb-3">
                                                            <label for="lastname" class="form-label">Phone No.</label>
                                                            <input type="number" class="form-control" id="phone" placeholder="Phone No."/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col">
                                                        <div class="mb-3">
                                                            <label for="lastname" class="form-label">Username</label>
                                                            <input type="text" class="form-control" id="username" placeholder="Enter username"/>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="mb-3">
                                                            <label for="lastname" class="form-label">Email</label>
                                                            <input type="email" class="form-control" id="email" placeholder="Email"/>
                                                        </div>
                                                    </div>
                                                </div>
                
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="mb-3">
                                                            <label for="useremail" class="form-label">Password</label>
                                                            <div class="input-group input-group-merge">
                                                                <input type="password" id="password" class="form-control" placeholder="Enter your password"/>
                                                                <div class="input-group-text" data-password="false">
                                                                    <span class="password-eye"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="mb-3">
                                                            <label for="userpassword" class="form-label"> Confirm Password</label>
                                                            <div class="input-group input-group-merge">
                                                                <input type="password" id="password" class="form-control" placeholder="Enter your password"/>
                                                                <div class="input-group-text" data-password="false">
                                                                    <span class="password-eye"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div class="tab-pane fade" id="second">
                                            <form id="profileForm" method="post" action="#" class="form-horizontal">
                                                <div class="col mb-3">
                                                    <label for="useremail" class="form-label">House No./Street</label>
                                                    <input type="email" class="form-control" id="housestreet" placeholder="Email"/>
                                                </div>
                                                <div class="col mb-3">
                                                    <label for="userpassword" class="form-label">Purok</label>
                                                    <input type="password" class="form-control" id="purok" placeholder="Purok"/>
                                                </div>
                                                <div class="col mb-3">
                                                    <label for="userpassword" class="form-label">Barangay</label>
                                                    <input type="password" class="form-control" id="barangay" placeholder="Barangay"/>
                                                </div>
                                                <div class="col mb-3">
                                                    <label for="userpassword" class="form-label">City</label>
                                                    <input type="password" class="form-control" id="City" placeholder="City"/>
                                                </div>
                                            </form>
                                        </div>

                                        <div class="tab-pane fade" id="third">
                                            <form id="otherForm" method="post" action="#" class="form-horizontal">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="text-center">
                                                            <h2 class="mt-0">
                                                                <i class="mdi mdi-check-all"></i>
                                                            </h2>
                                                            <h3 class="mt-0">Registered Successfully !</h3>
                                            
                                                            <p class="w-75 mb-2 mx-auto">You are already registered. Please proceed to log in to access the system. Thank you!</p>
                                            
                                                            <div class="mb-3">
                                                                <div class="form-check d-inline-block">
                                                                    <input type="checkbox" class="form-check-input" id="customCheck4" required=""/>
                                                                    <label class="form-check-label" for="customCheck4">I agree with the <a href="bitbo-termsandconditions.html">Terms and Conditions</a></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            
                                                </div>
                                            </form>
                                        </div>

                                        <ul class="list-inline wizard mb-0">
                                            <li class="previous list-inline-item"><a href="#" class="btn btn-primary">Previous</a>
                                            </li>
                                            <li class="next list-inline-item float-end"><a href="#" class="btn btn-primary">Next</a></li>
                                        </ul>

                                    </div>
                                </div> 
                            </div> 
                        </div>


                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <p class="text-muted">Already have account? <a href="login-resident.html" class="text-muted ms-1"><b>Log In</b></a></p>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="col-md-5 offset-md-2">
                    <div class="text-md-end mt-3 mt-md-0">
                        <img src="assets/images/bitbo.png" alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
        </section>
    <script src="assets/js/vendor.min.js"></script>
    <script src="assets/js/app.min.js"></script>

    <script src="assets/js/pages/demo.form-wizard.js"></script>
    </React.Fragment>
  )
}
