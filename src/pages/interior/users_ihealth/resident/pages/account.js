import React from 'react'

export default function IHealthResidentAccount() {
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
                              <p className="text-muted font-16">Resident</p>
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
                                  <button type="button" className="btn btn-warning" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#edit-account-modal"><i className="mdi mdi-account-edit-outline" /> Edit Account</button>
                                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#mybrgyid-modal"><i className="mdi mdi-account-box-outline" /> My BrgyID</button>
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
                                  <div className="row">
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Educational
                                                  Attainment</label>
                                              <select className="form-select" id="example-select">
                                                  <option>No schooling completed</option>
                                                  <option>Elementary</option>
                                                  <option>High School Undergrad</option>
                                                  <option>High School Graduate</option>
                                                  <option>College Undergad</option>
                                                  <option>Vocational</option>
                                                  <option>Bachelor's Degree</option>
                                                  <option>Master's Degree</option>
                                                  <option>Doctorate Degree</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-md-2">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Gender</label>
                                              <select className="form-select" id="example-select">
                                                  <option>Male</option>
                                                  <option>Female</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-md-3">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Blood Type</label>
                                              <select className="form-select" id="example-select">
                                                  <option>Unknown</option>
                                                  <option>O+</option>
                                                  <option>O-</option>
                                                  <option>A+</option>
                                                  <option>A-</option>
                                                  <option>B+</option>
                                                  <option>B-</option>
                                                  <option>AB+</option>
                                                  <option>AB-</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-md-3">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Civil Status</label>
                                              <select className="form-select" id="example-select">
                                                  <option>Single</option>
                                                  <option>Married</option>
                                                  <option>Separated</option>
                                                  <option>Divorced</option>
                                                  <option>Widowed</option>
                                                  <option>Single Parent</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="useremail" className="form-label">Profile Picture</label>
                                              <input type="file" className="form-control" id="staff_profile_pic" placeholder="Upload Profile Pic" />
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
              {/* My BrgyID Modal */}
              <div id="mybrgyid-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                          <div className="modal-body">
                              <div className="card">
                                  <br />
                                  <div className="row">
                                      <div className="col-lg-3 text-center">
                                          <img src="../../assets/images/bitbo.png" className="rounded-circle" height={70} alt="profile-image" />
                                      </div>
                                      <div className="col-lg-6 text-center">
                                          <h5>BARANGAY</h5>
                                          <h3>IT ROBOTs</h3>
                                      </div>
                                      <div className="col-lg-3 text-center">
                                          <img src="../../assets/images/bitbo.png" className="rounded-circle" height={70} alt="profile-image" />
                                      </div>
                                      <br /><br /><br /><br /><br />
                                      <div className="col-lg-3 text-center">
                                          <img src="../../assets/images/users/profile1.png" className height={150} alt="profile-image" />
                                          <h4 className="mb-0 mt-2">BRGYID-0001</h4>
                                          <p className="text-muted font-14">ID NO.</p>
                                      </div>
                                      <div className="col-lg-9 text-left">
                                          <p>Name: <strong>DELA CRUZ, JUAN</strong></p>
                                          <p>Address: <strong>3435 Batumbakal Street, Purok Katakutan, Brgy.
                                              Bitbo</strong>
                                          </p>
                                          <p>Birthday: <strong>2001-05-13</strong></p>
                                          <p>Contact No: <strong>09987654321</strong></p>
                                          <p>SSS No.: <strong /></p>
                                          <p>TIN No.: <strong /></p>
                                      </div>
                                      <div className="col-lg-12 text-center">
                                          <h2><span className="badge bg-info">BARANGAY IDENTIFICATION CARD</span></h2>
                                      </div>
                                  </div>
                              </div> {/* end card */}
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
          </div> {/* container */}

    </React.Fragment>
  )
}
