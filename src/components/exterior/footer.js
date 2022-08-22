import React from 'react'

export default function footer() {
  return (
    <React.Fragment>
        <footer className="bg-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="assets/images/bitbo-white.png" alt="" className="logo-dark" height="25" />
                        <p className="text-muted mt-4">BITBo is a reliable, integrated and automated system specially developed for the barangays in the Philippines. 
                        </p>

                        <ul className="social-list list-inline mt-3">
                            <li className="list-inline-item text-center">
                                <a href="javascript: void(0);" className="social-list-item border-light text-light"><i
                                        className="mdi mdi-facebook"></i></a>
                            </li>
                            <li className="list-inline-item text-center">
                                <a href="javascript: void(0);" className="social-list-item border-danger text-danger"><i
                                        className="mdi mdi-instagram"></i></a>
                            </li>
                            <li className="list-inline-item text-center">
                                <a href="javascript: void(0);" className="social-list-item border-info text-info"><i
                                        className="mdi mdi-twitter"></i></a>
                            </li>
                        </ul>

                    </div>

                    <div className="col-lg-2 col-md-4 mt-3 mt-lg-0">
                        <h5 className="text-light">Company</h5>

                        <ul className="list-unstyled ps-0 mb-0 mt-3">
                            <li className="mt-2"><a href="javascript: void(0);" className="text-muted">About Us</a></li>
                            <li className="mt-2"><a href="javascript: void(0);" className="text-muted">Documentation</a></li>
                            <li className="mt-2"><a href="javascript: void(0);" className="text-muted">Blog</a></li>
                            <li className="mt-2"><a href="javascript: void(0);" className="text-muted">Affiliate Program</a></li>
                        </ul>

                    </div>

                    <div className="col-lg-2 col-md-4 mt-3 mt-lg-0">
                        <h5 className="text-light">Apps</h5>

                        <ul className="list-unstyled ps-0 mb-0 mt-3">
                            <li className="mt-2"><a href="javascript: void(0);" className="text-muted">Ecommerce Pages</a></li>
                            <li className="mt-2"><a href="javascript: void(0);" className="text-muted">Email</a></li>
                            <li className="mt-2"><a href="javascript: void(0);" className="text-muted">Social Feed</a></li>
                            <li className="mt-2"><a href="javascript: void(0);" className="text-muted">Projects</a></li>
                            <li className="mt-2"><a href="javascript: void(0);" className="text-muted">Tasks Management</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-4 mt-3 mt-lg-0">
                        <h5 className="text-light">Discover</h5>

                        <ul className="list-unstyled ps-0 mb-0 mt-3">
                            <li className="mt-2"><a href="javascript: void(0);" className="text-muted">Help Center</a></li>
                            <li className="mt-2"><a href="javascript: void(0);" className="text-muted">Our Products</a></li>
                            <li className="mt-2"><a href="javascript: void(0);" className="text-muted">Privacy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="mt-5">
                            <p className="text-muted mt-4 text-center mb-0">© 2022 -
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
  )
}
