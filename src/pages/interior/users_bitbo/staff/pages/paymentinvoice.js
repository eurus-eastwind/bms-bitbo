import React from 'react'

export default function BITBoStaffPaymentInvoice() {
  return (
    <React.Fragment>
          <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="page-title-box">
                          <h4 className="page-title">Payment Invoice</h4>
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
                                          <p className="text-muted font-13">Please find below a cost-breakdown for the
                                              recent work completed. Please make payment at your earliest
                                              convenience, and do not hesitate to contact us with any questions.
                                          </p>
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
                                                  <tr>
                                                      <th>#</th>
                                                      <th>Document Type</th>
                                                      <th>Quantity</th>
                                                      <th>Unit Cost</th>
                                                      <th className="text-end">Total</th>
                                                  </tr>
                                              </thead>
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
                                      <a href="javascript: void(0);" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-invoice-modal">Edit</a>
                                  </div>
                              </div>
                              {/* end buttons */}
                          </div> {/* end card-body*/}
                      </div> {/* end card */}
                  </div> {/* end col*/}
              </div>{/* end row */}
              {/*MODALS*/}
              {/* Info Header Modal */}
              <div id="edit-invoice-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="info-header-modalLabel">Edit Invoice Details</h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
                          </div>
                          <div className="modal-body">
                              <form>
                                  <dl className="row mb-0">
                                      <dt className="col-sm-3">Payment Details</dt>
                                      <dd className="col-sm-9">
                                          <div className="row">
                                              <div className="col">
                                                  <div className="mb-3">
                                                      <label htmlFor="firstname" className="form-label">Transaction
                                                          Date</label>
                                                      <input type="date" className="form-control" id="transacdate" placeholder="Transaction Date" />
                                                  </div>
                                              </div>
                                              <div className="col">
                                                  <div className="mb-3">
                                                      <label htmlFor="firstname" className="form-label">Transaction
                                                          Status</label>
                                                      <select className="form-select" id="example-select">
                                                          <option>Pending</option>
                                                          <option>Paid</option>
                                                      </select>
                                                  </div>
                                              </div>
                                              <div className="col">
                                                  <div className="mb-3">
                                                      <label htmlFor="firstname" className="form-label">Order ID.</label>
                                                      <input type="text" className="form-control" id="idno" placeholder="ID No." />
                                                  </div>
                                              </div>
                                          </div>
                                      </dd>
                                      <dt className="col-sm-3">Receiver Details</dt>
                                      <dd className="col-sm-9">
                                          <div className="row">
                                              <div className="col-md-12">
                                                  <div className="mb-3">
                                                      <label htmlFor="lastname" className="form-label">Receiver's
                                                          Name</label>
                                                      <div className="row">
                                                          <div className="col">
                                                              <input type="text" className="form-control" id="firstname" placeholder="Enter first name" />
                                                          </div>
                                                          <div className="col">
                                                              <input type="text" className="form-control" id="middlename" placeholder="Enter middle name" />
                                                          </div>
                                                          <div className="col">
                                                              <input type="text" className="form-control" id="lastname" placeholder="Enter last name" />
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="row">
                                              <div className="col-md-12">
                                                  <div className="mb-3">
                                                      <label htmlFor="lastname" className="form-label">Receiver's
                                                          Address</label>
                                                      <div className="row">
                                                          <div className="col">
                                                              <input type="text" className="form-control" id="housestreet" placeholder="House No./Street" />
                                                          </div>
                                                          <div className="col">
                                                              <select className="form-select" id="example-select">
                                                                  <option>Purok Katakutan</option>
                                                                  <option>Purok Kakirutan</option>
                                                                  <option>Purok Kalanturan</option>
                                                                  <option>Purok Kakurian</option>
                                                                  <option>Purok Karasyahan</option>
                                                                  <option>Purok Kakuriputan</option>
                                                              </select>
                                                          </div>
                                                          <div className="col">
                                                              <input type="text" className="form-control" id="birthplace" placeholder="Barangay" defaultValue="Brgy. BITBo" disabled />
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </dd>
                                  </dl>
                                  <div className="table-responsive">
                                      <table className="table table-centered mb-0">
                                          <thead className="table-light">
                                              <tr>
                                                  <th style={{ width: 20 }}>
                                                      <div className="form-check">
                                                          <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                          <label className="form-check-label" htmlFor="customCheck1">&nbsp;</label>
                                                      </div>
                                                  </th>
                                                  <th>#</th>
                                                  <th>Document Type</th>
                                                  <th>Quantity</th>
                                                  <th>Unit Cost</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>
                                                      <div className="form-check">
                                                          <input type="checkbox" className="form-check-input" id="customCheck2" />
                                                          <label className="form-check-label" htmlFor="customCheck2">&nbsp;</label>
                                                      </div>
                                                  </td>
                                                  <td><a href="apps-ecommerce-orders-details.html" className="text-body fw-bold">1</a> </td>
                                                  <td>
                                                      Barangay Identification Card <small className="text-muted"><br />Physical Copy (3.375 x 2.125 |
                                                          PVC Printed)</small>
                                                  </td>
                                                  <td>
                                                      1
                                                  </td>
                                                  <td>
                                                      ₱ 220.00
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-updatedinvoice">Save
                                  changes</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
          </div> {/* container */}

    </React.Fragment>
  )
}
