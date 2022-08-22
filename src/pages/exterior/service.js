import React from 'react'

export default function service() {
  return (
    <React.Fragment>
          <section className="py-5" id="services">
            <div className="container">
                <div className="row py-4">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <img src="assets/images/bitbo-dark-blue.png" alt="" className="logo-dark" height="40" />
                            <h3>offer you these services.</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="text-center p-2 p-sm-3">
                            <div className="avatar-sm m-auto">
                                <span className="avatar-title bg-primary-lighten rounded-circle">
                                    <i className="uil uil-chart-pie text-primary font-24"></i>
                                </span>
                            </div>
                            <h4 className="mt-3">Dashboard</h4>
                            <p className="text-muted mt-2 mb-0">A dashboard is a visual display of all of your data. Its primary
                                intention is to provide information at-a-glance, such as KPIs.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="text-center p-2 p-sm-3">
                            <div className="avatar-sm m-auto">
                                <span className="avatar-title bg-primary-lighten rounded-circle">
                                    <i className="uil uil-file-plus-alt text-primary font-24"></i>
                                </span>
                            </div>
                            <h4 className="mt-3">Request Certificates</h4>
                            <p className="text-muted mt-2 mb-0">Enables you to request a type of certificate.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="text-center p-2 p-sm-3">
                            <div className="avatar-sm m-auto">
                                <span className="avatar-title bg-primary-lighten rounded-circle">
                                    <i className="uil uil-comment-message text-primary font-24"></i>
                                </span>
                            </div>
                            <h4 className="mt-3">Blotter</h4>
                            <p className="text-muted mt-2 mb-0">A written record of arrests and other occurrences maintained by
                                the police.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="text-center p-2 p-sm-3">
                            <div className="avatar-sm m-auto">
                                <span className="avatar-title bg-primary-lighten rounded-circle">
                                    <i className="uil uil-user-square text-primary font-24"></i>
                                </span>
                            </div>
                            <h4 className="mt-3">Profile</h4>
                            <p className="text-muted mt-2 mb-0">You can manage your account, edit your info, upload a picture,
                                delete specific data and update.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="text-center p-2 p-sm-3">
                            <div className="avatar-sm m-auto">
                                <span className="avatar-title bg-primary-lighten rounded-circle">
                                    <i className="uil uil-money-insert text-primary font-24"></i>
                                </span>
                            </div>
                            <h4 className="mt-3">Payment Transactions</h4>
                            <p className="text-muted mt-2 mb-0">BITBo has a invoice generating feature, gives you physical and
                                electronic copy. Transaction can be done using e-payment apps.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="text-center p-2 p-sm-3">
                            <div className="avatar-sm m-auto">
                                <span className="avatar-title bg-primary-lighten rounded-circle">
                                    <i className="uil uil-comment-question text-primary font-24"></i>
                                </span>
                            </div>
                            <h4 className="mt-3">Support</h4>
                            <p className="text-muted mt-2 mb-0">You can access the support feature of the system where you can
                                ask help and will provide answers and directions.
                            </p>
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
