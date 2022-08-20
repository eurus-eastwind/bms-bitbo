import React from 'react'

export default function Home() {
  return (
    <React.Fragment>

        <nav class="navbar navbar-expand-lg py-lg-3 navbar-dark">
            <div class="container">
                <a href="Home.js" class="navbar-brand me-lg-5">
                    <img src="../../../public/assets/images/bitbo-white.png" alt="" class="logo-dark" height="40" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="mdi mdi-menu"></i>
                </button>

                {/* Ibabalik to kapag nailagay na ang iba */}
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav me-auto align-items-center">
                        <li class="nav-item mx-lg-1">
                            <a class="nav-link active" href="#home">Home</a>
                        </li>
                        <li class="nav-item mx-lg-1">
                            <a class="nav-link" href="#services">Services</a>
                        </li>
                        <li class="nav-item mx-lg-1">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item mx-lg-1">
                            <a class="nav-link" href="#faq">FAQs</a>
                        </li>
                        <li class="nav-item mx-lg-1">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>

                    <ul class="navbar-nav ms-auto align-items-center">
                        <li class="nav-item me-0">
                            <div class="btn-group">
                                <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="mdi mdi-login me-2"></i> Login <span class="caret"></span> </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="login-resident.html">Resident</a>
                                    <a class="dropdown-item" href="login-purokleader.html">Purok Leader</a>
                                    <a class="dropdown-item" href="login-staff.html">Staff</a>
                                    <a class="dropdown-item" href="login-brgyofficial.html">Brgy. Official</a>
                                    <a class="dropdown-item" href="login-admin.html">Admin</a>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>


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
                            <img src="../../../public/assets/images/bitbo.png" alt="" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="py-5" id="services">
            <div class="container">
                <div class="row py-4">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <img src="../../../public/assets/images/bitbo-dark-blue.png" alt="" class="logo-dark" height="40" />
                            <h3>offer you these services.</h3>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="text-center p-2 p-sm-3">
                            <div class="avatar-sm m-auto">
                                <span class="avatar-title bg-primary-lighten rounded-circle">
                                    <i class="uil uil-chart-pie text-primary font-24"></i>
                                </span>
                            </div>
                            <h4 class="mt-3">Dashboard</h4>
                            <p class="text-muted mt-2 mb-0">A dashboard is a visual display of all of your data. Its primary
                                intention is to provide information at-a-glance, such as KPIs.
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="text-center p-2 p-sm-3">
                            <div class="avatar-sm m-auto">
                                <span class="avatar-title bg-primary-lighten rounded-circle">
                                    <i class="uil uil-file-plus-alt text-primary font-24"></i>
                                </span>
                            </div>
                            <h4 class="mt-3">Request Certificates</h4>
                            <p class="text-muted mt-2 mb-0">Enables you to request a type of certificate.
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="text-center p-2 p-sm-3">
                            <div class="avatar-sm m-auto">
                                <span class="avatar-title bg-primary-lighten rounded-circle">
                                    <i class="uil uil-comment-message text-primary font-24"></i>
                                </span>
                            </div>
                            <h4 class="mt-3">Blotter</h4>
                            <p class="text-muted mt-2 mb-0">A written record of arrests and other occurrences maintained by
                                the police.
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="text-center p-2 p-sm-3">
                            <div class="avatar-sm m-auto">
                                <span class="avatar-title bg-primary-lighten rounded-circle">
                                    <i class="uil uil-user-square text-primary font-24"></i>
                                </span>
                            </div>
                            <h4 class="mt-3">Profile</h4>
                            <p class="text-muted mt-2 mb-0">You can manage your account, edit your info, upload a picture,
                                delete specific data and update.
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="text-center p-2 p-sm-3">
                            <div class="avatar-sm m-auto">
                                <span class="avatar-title bg-primary-lighten rounded-circle">
                                    <i class="uil uil-money-insert text-primary font-24"></i>
                                </span>
                            </div>
                            <h4 class="mt-3">Payment Transactions</h4>
                            <p class="text-muted mt-2 mb-0">BITBo has a invoice generating feature, gives you physical and
                                electronic copy. Transaction can be done using e-payment apps.
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="text-center p-2 p-sm-3">
                            <div class="avatar-sm m-auto">
                                <span class="avatar-title bg-primary-lighten rounded-circle">
                                    <i class="uil uil-comment-question text-primary font-24"></i>
                                </span>
                            </div>
                            <h4 class="mt-3">Support</h4>
                            <p class="text-muted mt-2 mb-0">You can access the support feature of the system where you can
                                ask help and will provide answers and directions.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>


        <section class="py-5" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <h1 class="mt-0"><i class="mdi mdi-information-outline"></i></h1>
                            <h3>About <span class="text-dark">BITBo.</span></h3>
                            <p class="text-muted mt-3">The BITBo is a reliable, integrated and automated system specially
                                developed for the barangays in the Philippines. It provides a more organized approach to
                                processing, storing, and managing data that are relevant and needed by the barangays.
                                Barangay
                                IT Robot is designed to handle a wide-range of information relating to barangay profile,
                                citizens profile, barangay IDs/ clearances/ certifications, blotter cases, local businesses,
                                and
                                barangay legislation. The system is equipped with features and functionalities that will
                                provide
                                complete and accurate information for a more effective management of barangay transactions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5" id="faq">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <h1 class="mt-0"><i class="mdi mdi-frequently-asked-questions"></i></h1>
                            <h3>Frequently Asked <span class="text-primary">Questions</span></h3>
                            <p class="text-muted mt-2">Here are some of the basic types of questions for our customers. For
                                more
                                <br/>information please contact us.
                            </p>

                            <button type="button" class="btn btn-success btn-sm mt-2"><i
                                    class="mdi mdi-email-outline me-1"></i> Email us your question</button>
                            <button type="button" class="btn btn-info btn-sm mt-2 ms-1"><i class="mdi mdi-twitter me-1"></i>
                                Send us a tweet</button>
                        </div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-lg-5 offset-lg-1">
                        <div>
                            <div class="faq-question-q-box">Q.</div>
                            <h4 class="faq-question text-body">What is the current state/issue of the organization that the
                                project is addressing?</h4>
                            <p class="faq-answer mb-4 pb-1 text-muted">The current state of the barangay under the
                                department of Management Information system (MIS) is they have the manual process of
                                encoding their files such their barangay clearances, barangay indecency, barangay
                                certification, barangay ID and recording of their treasury.<a
                                    href="#" target="_blank">here</a>.</p>
                        </div>

                        <div>
                            <div class="faq-question-q-box">Q.</div>
                            <h4 class="faq-question text-body">What is the project objective that can address the current
                                state/issue of the organization?</h4>
                            <p class="faq-answer mb-4 pb-1 text-muted">The goal of our team is to make a system to help them
                                encode their files in cloud for less documented papers, folders, envelopes and it they will
                                have a huge space for other things. They can just type, save and print.</p>
                        </div>

                    </div>

                    <div class="col-lg-5">
                        <div>
                            <div class="faq-question-q-box">Q.</div>
                            <h4 class="faq-question text-body">How to request for certificates of any type?</h4>
                            <p class="faq-answer mb-4 pb-1 text-muted">Login to BITBo and go to
                                "Certificates", select type. On the request form, select your purpose and click
                                submit. Upon submitting your request a modal will pop-up which contains the information of
                                your request including the fee.</p>
                        </div>

                        <div>
                            <div class="faq-question-q-box">Q.</div>
                            <h4 class="faq-question text-body">What are the online services the system can provide?</h4>
                            <p class="faq-answer mb-4 pb-1 text-muted">Right now, BITBo can process
                                the following requests: Barangay Clearance, Barangay Business Clearance, Certificate of
                                Indigency, Register Household.</p>
                        </div>

                    </div>
                   
                </div>

            </div> 
        </section>

    
        <section class="py-5 bg-light-lighten border-top border-bottom border-light" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <h3>Get In <span class="text-primary">Touch</span></h3>
                            <p class="text-muted mt-2">Please fill out the following form and we will get back to you
                                shortly. For more
                                <br/>information please contact us.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center mt-3">
                    <div class="col-md-4">
                        <p class="text-muted"><span class="fw-bold">Customer Support:</span><br/> <span
                                class="d-block mt-1">+1 234 56 7894</span></p>
                        <p class="text-muted mt-4"><span class="fw-bold">Email Address:</span><br/> <span
                                class="d-block mt-1">info@gmail.com</span></p>
                        <p class="text-muted mt-4"><span class="fw-bold">Office Address:</span><br/> <span
                                class="d-block mt-1">4461 Cedar Street Moro, AR 72368</span></p>
                        <p class="text-muted mt-4"><span class="fw-bold">Office Time:</span><br/> <span
                                class="d-block mt-1">9:00AM To 6:00PM</span></p>
                    </div>

                    <div class="col-md-8">
                        <form>
                            <div class="row mt-4">
                                <div class="col-lg-6">
                                    <div class="mb-2">
                                        <label for="fullname" class="form-label">Your Name</label>
                                        <input class="form-control form-control-light" type="text" id="fullname"
                                            placeholder="Name..." />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-2">
                                        <label for="emailaddress" class="form-label">Your Email</label>
                                        <input class="form-control form-control-light" type="email" required=""
                                            id="emailaddress" placeholder="Enter you email..." />
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-1">
                                <div class="col-lg-12">
                                    <div class="mb-2">
                                        <label for="subject" class="form-label">Your Subject</label>
                                        <input class="form-control form-control-light" type="text" id="subject"
                                            placeholder="Enter subject..."/>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-1">
                                <div class="col-lg-12">
                                    <div class="mb-2">
                                        <label for="comments" class="form-label">Message</label>
                                        <textarea id="comments" rows="4" class="form-control form-control-light"
                                            placeholder="Type your message here..."></textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-2">
                                <div class="col-12 text-end">
                                    <button class="btn btn-primary">Send a Message <i class="mdi mdi-telegram ms-1"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    
        <footer class="bg-dark py-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <img src="../../../public/assets/images/bitbo-white.png" alt="" class="logo-dark" height="25" />
                        <p class="text-muted mt-4">BITBo is a reliable, integrated and automated system specially developed for the barangays in the Philippines. 
                        </p>

                        <ul class="social-list list-inline mt-3">
                            <li class="list-inline-item text-center">
                                <a href="" class="social-list-item border-light text-light">
                                    <i class="mdi mdi-facebook"></i></a>
                            </li>
                            <li class="list-inline-item text-center">
                                <a href="" class="social-list-item border-danger text-danger"><i
                                        class="mdi mdi-instagram"></i></a>
                            </li>
                            <li class="list-inline-item text-center">
                                <a href="" class="social-list-item border-info text-info"><i
                                        class="mdi mdi-twitter"></i></a>
                            </li>
                        </ul>

                    </div>

                    <div class="col-lg-2 col-md-4 mt-3 mt-lg-0">
                        <h5 class="text-light">Company</h5>

                        <ul class="list-unstyled ps-0 mb-0 mt-3">
                            <li class="mt-2"><a href="#" class="text-muted">About Us</a></li>
                            <li class="mt-2"><a href="#" class="text-muted">Documentation</a></li>
                            <li class="mt-2"><a href="#" class="text-muted">Blog</a></li>
                            <li class="mt-2"><a href="#" class="text-muted">Affiliate Program</a></li>
                        </ul>

                    </div>

                    <div class="col-lg-2 col-md-4 mt-3 mt-lg-0">
                        <h5 class="text-light">Apps</h5>

                        <ul class="list-unstyled ps-0 mb-0 mt-3">
                            <li class="mt-2"><a href="#" class="text-muted">Ecommerce Pages</a></li>
                            <li class="mt-2"><a href="#" class="text-muted">Email</a></li>
                            <li class="mt-2"><a href="#" class="text-muted">Social Feed</a></li>
                            <li class="mt-2"><a href="#" class="text-muted">Projects</a></li>
                            <li class="mt-2"><a href="#" class="text-muted">Tasks Management</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-4 mt-3 mt-lg-0">
                        <h5 class="text-light">Discover</h5>

                        <ul class="list-unstyled ps-0 mb-0 mt-3">
                            <li class="mt-2"><a href="#" class="text-muted">Help Center</a></li>
                            <li class="mt-2"><a href="#" class="text-muted">Our Products</a></li>
                            <li class="mt-2"><a href="#" class="text-muted">Privacy</a></li>
                        </ul>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="mt-5">
                            <p class="text-muted mt-4 text-center mb-0">© 2022 -
                                <script>
                                    document.write(new Date().getFullYear())
                                </script> BITBo. | iHealth Team
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    </React.Fragment>
  );
}
