import React from 'react'

export default function faq() {
  return (
    <React.Fragment>
        <section className="py-5" id="faq">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h1 className="mt-0"><i className="mdi mdi-frequently-asked-questions"></i></h1>
                            <h3>Frequently Asked <span className="text-primary">Questions</span></h3>
                            <p className="text-muted mt-2">Here are some of the basic types of questions for our customers. For
                                more
                                <br/>information please contact us.
                            </p>

                            <button type="button" className="btn btn-success btn-sm mt-2"><i
                                    className="mdi mdi-email-outline me-1"></i> Email us your question</button>
                            <button type="button" className="btn btn-info btn-sm mt-2 ms-1"><i className="mdi mdi-twitter me-1"></i>
                                Send us a tweet</button>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-5 offset-lg-1">
                        <div>
                            <div className="faq-question-q-box">Q.</div>
                            <h4 className="faq-question text-body">What is the current state/issue of the organization that the
                                project is addressing?</h4>
                            <p className="faq-answer mb-4 pb-1 text-muted">The current state of the barangay under the
                                department of Management Information system (MIS) is they have the manual process of
                                encoding their files such their barangay clearances, barangay indecency, barangay
                                certification, barangay ID and recording of their treasury.<a
                                    href="https://themes.getbootstrap.com/licenses/" target="_blank">here</a>.</p>
                        </div>

                        <div>
                            <div className="faq-question-q-box">Q.</div>
                            <h4 className="faq-question text-body">What is the project objective that can address the current
                                state/issue of the organization?</h4>
                            <p className="faq-answer mb-4 pb-1 text-muted">The goal of our team is to make a system to help them
                                encode their files in cloud for less documented papers, folders, envelopes and it they will
                                have a huge space for other things. They can just type, save and print.</p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div>
                            <div className="faq-question-q-box">Q.</div>
                            <h4 className="faq-question text-body">How to request for certificates of any type?</h4>
                            <p className="faq-answer mb-4 pb-1 text-muted">Login to BITBo and go to
                                "Certificates", select type. On the request form, select your purpose and click
                                submit. Upon submitting your request a modal will pop-up which contains the information of
                                your request including the fee.</p>
                        </div>
                        <div>
                            <div className="faq-question-q-box">Q.</div>
                            <h4 className="faq-question text-body">What are the online services the system can provide?</h4>
                            <p className="faq-answer mb-4 pb-1 text-muted">Right now, BITBo can process
                                the following requests: Barangay Clearance, Barangay Business Clearance, Certificate of
                                Indigency, Register Household.</p>
                        </div>

                    </div>
                </div>
            </div> 
        </section>
    </React.Fragment>
  )
}
