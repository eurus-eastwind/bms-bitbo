import React from 'react'

export default function BITBoStaffPaymentAdd() {
  return (
    <React.Fragment>
          <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="page-title-box">
                          <h4 className="page-title">Add Payment</h4>
                      </div>
                  </div>
              </div>
              {/* end page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="card">
                          <div className="card-body">
                              <form>
                                  <div className="row">
                                      <div className="col">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Invoice ID.</label>
                                              <input type="number" className="form-control" id="idno" placeholder="ID No." />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">First Name</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Enter first name" />
                                          </div>
                                      </div>
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Middle Name</label>
                                              <input type="text" className="form-control" id="middlename" placeholder="Enter middle name" />
                                          </div>
                                      </div>
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Last Name</label>
                                              <input type="text" className="form-control" id="lastname" placeholder="Enter last name" />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Document Type</label>
                                              <div className="row">
                                                  <div className="col-lg-8">
                                                      <select className="form-select" id="example-select">
                                                          <option>None</option>
                                                          <option>Barangay Certificate of Residency</option>
                                                          <option>Barangay Indigency</option>
                                                          <option>Barangay Clearance</option>
                                                          <option>Business Permit</option>
                                                          <option>Barangay Identification Card</option>
                                                      </select>
                                                  </div>
                                                  <div className="col-lg-4">
                                                      <select className="form-select" id="example-select" disabled>
                                                          <option>₱0</option>
                                                          <option>₱50</option>
                                                          <option>₱120</option>
                                                          <option>₱50</option>
                                                          <option>₱200</option>
                                                          <option>₱200</option>
                                                      </select>
                                                  </div>
                                              </div>
                                              <div className="row">
                                                  <div className="col-lg-12">
                                                      <select className="form-select" id="example-select">
                                                          <option>None</option>
                                                          <option>Physical Copy (8.375 x 2.125 | Printed)</option>
                                                          <option>Electronic Copy (8.375 x 2.125 | PDF)</option>
                                                          <option>Physical Copy (3.375 x 2.125 | PVC Printed)
                                                          </option>
                                                      </select>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Date Issued</label>
                                              <input type="date" className="form-control" id="Date Issued" placeholder="Date" />
                                          </div>
                                      </div>
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Contact No.</label>
                                              <input type="number" className="form-control" id="contactno" placeholder="Contact No." />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Address</label>
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
                              </form>
                              <div className="modal-footer">
                                  <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#cancel-alert-modal">Cancel</button>
                                  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#generate-alert-modal">Add Payment
                                      ID</button>
                              </div>
                          </div> {/* end card-body */}
                      </div> {/* end card */}
                  </div>{/* end col */}
              </div>{/* end row */}
              {/*MODALS*/}
              {/*Decline Modal*/}
              <div id="cancel-alert-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog modal-sm">
                      <div className="modal-content modal-filled bg-danger">
                          <div className="modal-body p-4">
                              <div className="text-center">
                                  <i className="dripicons-question h1" />
                                  <h4 className="mt-2">Cancel Payment Generation</h4>
                                  <p className="mt-3">Are you sure you want to cancel this payment generation? This
                                      cannot be undone.</p>
                                  <button type="button" className="btn btn-light my-2" data-bs-dismiss="modal">No</button>
                                  <a href="payment.html"><button type="button" className="btn btn-outline-light my-2" data-bs-dismiss="modal">Yes</button></a>
                              </div>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/*Decline Modal*/}
              <div id="generate-alert-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog modal-sm">
                      <div className="modal-content modal-filled bg-success">
                          <div className="modal-body p-4">
                              <div className="text-center">
                                  <i className="dripicons-question h1" />
                                  <h4 className="mt-2">Confirm Payment Generation</h4>
                                  <p className="mt-3">Are you sure you want to add this payment?</p>
                                  <button type="button" className="btn btn-outline-light my-2" data-bs-dismiss="modal">No</button>
                                  <button type="button" className="btn btn-light my-2" data-bs-dismiss="modal" id="toastr-addpayment">Yes</button>
                              </div>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
          </div> {/* container */}

    </React.Fragment>
  )
}
