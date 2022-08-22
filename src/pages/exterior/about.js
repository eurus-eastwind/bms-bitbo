import React from 'react'

export default function about() {
  return (
    <React.Fragment>
        <section className="py-5" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h1 className="mt-0"><i className="mdi mdi-information-outline"></i></h1>
                            <h3>About <span className="text-dark">BITBo.</span></h3>
                            <p className="text-muted mt-3">The BITBo is a reliable, integrated and automated system specially
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
    </React.Fragment>
  )
}
