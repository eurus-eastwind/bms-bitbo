import React from 'react'

export default function ResidentPaymentInvoice() {
  return (
    <React.Fragment>
          <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="page-title-box">
                          <h4 className="page-title">Payments</h4>
                      </div>
                  </div>
              </div>
              {/* end page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="card">
                          <div className="card-body">
                              {/* Invoice Logo*/}
                              <div className="clearfix">
                                  <div className="float-start mb-3">
                                      <img src="../../assets/images/bitbo-logo-with-text-blue.png" alt height={40} />
                                  </div>
                                  <div className="float-end">
                                      <h4 className="m-0 d-print-none">Invoice</h4>
                                  </div>
                              </div>
                              {/* Invoice Detail*/}
                              <div className="row">
                                  <div className="col-sm-6">
                                      <div className="float-end mt-3">
                                          <p><b>Hello, Juan Dela Cruz!</b></p>
                                          <p className="text-muted font-13">Please find below a cost-breakdown for the recent work completed. Please make payment at your earliest convenience, and do not hesitate to contact us with any questions.</p>
                                      </div>
                                  </div>{/* end col */}
                                  <div className="col-sm-4 offset-sm-2">
                                      <div className="mt-3 float-sm-end">
                                          <p className="font-13"><strong>Transaction Date: </strong><span className="float-end">Jan 17, 2018</span></p>
                                          <p className="font-13"><strong>Transaction Status: </strong> <span className="badge bg-warning float-end">Pending</span></p>
                                          <p className="font-13"><strong>Order ID: </strong> <span className="float-end">#123456</span></p>
                                      </div>
                                  </div>{/* end col */}
                              </div>
                              {/* end row */}
                              <div className="row mt-4">
                                  <div className="col-sm-4">
                                      <h6>Billing Address</h6>
                                      <address>
                                          Brgy. BITBo Hall<br />
                                          1024 Woodensteel Street, Purok Kakurian<br />
                                          Brgy. BITBo<br />
                                          <abbr title="phone">P:</abbr> (63) 998-456-7890
                                      </address>
                                  </div> {/* end col*/}
                                  <div className="col-sm-4">
                                      <h6>Receiver Address</h6>
                                      <address>
                                          Juan Dela Cruz<br />
                                          1024 Tubiglangis Street, Purok Karasyahan<br />
                                          Brgy. BITBo<br />
                                          <abbr title="Phone">P:</abbr> (63) 997-456-7890
                                      </address>
                                  </div> {/* end col*/}
                                  <div className="col-sm-4">
                                      <div className="text-sm-end">
                                          <img src="../../assets/images/barcode.png" alt="barcode-image" className="img-fluid me-2" />
                                      </div>
                                  </div> {/* end col*/}
                              </div>
                              {/* end row */}
                              <div className="row">
                                  <div className="col-12">
                                      <div className="table-responsive">
                                          <table className="table mt-4">
                                              <thead>
                                                  <tr><th>#</th>
                                                      <th>Document Type</th>
                                                      <th>Quantity</th>
                                                      <th>Unit Cost</th>
                                                      <th className="text-end">Total</th>
                                                  </tr></thead>
                                              <tbody>
                                                  <tr>
                                                      <td>1</td>
                                                      <td>
                                                          <b>Barangay Identification Card</b> <br />
                                                          Physical Copy (3.375 x 2.125 | PVC Printed)
                                                      </td>
                                                      <td>1</td>
                                                      <td>₱ 220.00</td>
                                                      <td className="text-end">₱ 220.00</td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </div> {/* end table-responsive*/}
                                  </div> {/* end col */}
                              </div>
                              {/* end row */}
                              <div className="row">
                                  <div className="col-sm-6">
                                      <div className="clearfix pt-3">
                                          <h6 className="text-muted">Notes:</h6>
                                          <small>
                                              All accounts are to be paid within 7 days from receipt of
                                              invoice. To be paid by cheque or credit card or direct payment
                                              online. If account is not paid within 7 days the credits details
                                              supplied as confirmation of work undertaken will be charged the
                                              agreed quoted fee noted above.
                                          </small>
                                      </div>
                                  </div> {/* end col */}
                                  <div className="col-sm-6">
                                      <div className="float-end mt-3 mt-sm-0">
                                          <p><b>Sub-total:</b> <span className="float-end">₱ 220.00</span></p>
                                          <h3>₱ 220.00 PHP</h3>
                                      </div>
                                      <div className="clearfix" />
                                  </div> {/* end col */}
                              </div>
                              {/* end row*/}
                              <div className="d-print-none mt-4">
                                  <div className="text-end">
                                      <a href="javascript:window.print()" className="btn btn-primary"><i className="mdi mdi-printer" /> Print</a>
                                  </div>
                              </div>
                              {/* end buttons */}
                          </div> {/* end card-body*/}
                      </div> {/* end card */}
                  </div> {/* end col*/}
              </div>{/* end row */}
          </div> {/* container */}

    </React.Fragment>
  )
}
