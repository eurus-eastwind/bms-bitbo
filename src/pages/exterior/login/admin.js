import React from 'react'

export default function LoginAdmin() {
  return (
    <React.Fragment>
        <section class="hero-section" id="loginAdmin">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-5">
                        <div class="mt-md-4">
                            <div class="card">
                                <div class="card-body p-4">
                                    <div class="text-center w-75 m-auto">
                                        <h4 class="text-dark-50 text-center mt-0 fw-bold">Login as ADMIN</h4>
                                        <p class="text-muted mb-4">Enter your email address and password to access your account.</p>
                                    </div>
    
                                    <form action="BITBo/admin/bitbo-admin-index.html">

                                        <div class="mb-3">
                                            <label for="emailaddress" class="form-label">Email address</label>
                                            <input class="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" />
                                        </div>
    
                                        <div class="mb-3">
                                            <label for="password" class="form-label">Password</label>
                                            <div class="input-group input-group-merge">
                                                <input type="password" id="password" class="form-control" placeholder="Enter your password" />
                                                <div class="input-group-text" data-password="false">
                                                    <span class="password-eye"></span>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="mb-3 mb-0 text-center">
                                            <button class="btn btn-primary" type="submit"> Log In </button>
                                        </div>
    
                                    </form>
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
    </React.Fragment>
  )
}
