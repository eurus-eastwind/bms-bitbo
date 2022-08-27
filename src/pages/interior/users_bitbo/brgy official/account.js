import React from 'react'

export default function BrgyOfficialAccount() {
  return (
    <React.Fragment>
          <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="page-title-box">
                          <h4 className="page-title">My Account</h4>
                      </div>
                  </div>
              </div>
              {/* end page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="card text-center">
                          <div className="card-body">
                              <div className="col-lg-12 text-center">
                                  <img src="../../assets/images/users/profile1.png" className="rounded-circle" height={200} alt="profile-image" />
                              </div>
                              <h4 className="mb-0 mt-2">Juan Dela Cruz</h4>
                              <p className="text-muted font-16">Administrator</p>
                              <div className="text-start mt-3">
                                  <p className="text-muted mb-2 font-16"><strong>Full Name :</strong> <span className="ms-2">Juan Dela Cruz
                                  </span></p>
                                  <p className="text-muted mb-2 font-16"><strong>Birthday :</strong><span className="ms-2">1998-04-24
                                  </span></p>
                                  <p className="text-muted mb-2 font-16"><strong>Mobile :</strong><span className="ms-2">09987654321
                                  </span></p>
                                  <p className="text-muted mb-2 font-16"><strong>Email :</strong> <span className="ms-2 ">juandelacruz@gmail.com</span></p>
                                  <p className="text-muted mb-1 font-16"><strong>Address :</strong> <span className="ms-2">3435 Batumbakal Street, Purok Katakutan, Brgy. BITBo</span>
                                  </p>
                              </div>
                              <div className="modal-footer">
                                  <button type="button" className="btn btn-warning" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#edit-account-modal"><i className="mdi mdi-account-edit-outline" /> Edit</button>
                              </div>
                          </div> {/* end card-body */}
                      </div> {/* end card */}
                  </div>{/* end col*/}
              </div>{/* end row*/}
              {/*MODALS*/}
              {/* Edit Account Modal */}
              <div id="edit-account-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="warning-header-modalLabel">Edit Account Details</h4>
                          </div>
                          <div className="modal-body">
                              <form>
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
                                      <div className="col-md-3">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Birthday</label>
                                              <input type="date" className="form-control" id="birthday" placeholder="Enter birthday" />
                                          </div>
                                      </div>
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Mobile No.</label>
                                              <input type="number" className="form-control" id="phone" placeholder="Enter phone no." />
                                          </div>
                                      </div>
                                      <div className="col-md-5">
                                          <div className="mb-3">
                                              <label htmlFor="useremail" className="form-label">Email Address</label>
                                              <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
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
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-editaccount">Save
                                  changes</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
          </div> {/* container */}

    </React.Fragment>
  )
}
