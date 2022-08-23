import React from 'react'

export default function AdminBrgyID() {
  return (
    <React.Fragment>
          <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="page-title-box">
                          <div className="page-title-right">
                              <form className="d-flex">
                                  <a href="brgyid-add.html" className="btn btn-primary mb-2"><i className="mdi mdi-credit-card-plus me-2" /> Add Brgy. ID</a>
                              </form>
                          </div>
                          <h4 className="page-title">Brgy. ID</h4>
                      </div>
                  </div>
              </div>
              {/* end page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="card">
                          <div className="card-body">
                              <div className="tab-content">
                                  <div className="tab-pane show active" id="buttons-table-pending" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-brgyid&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search Brgy ID, Name or Date" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 300 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-brgyid">Brgy ID.</a>
                                                  </th>
                                                  <th style={{ width: 400 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-date">Date</a>
                                                  </th>
                                                  <th style={{ width: 350 }}>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td><span className="js-lists-values-user-brgyid">2022-0001</span>
                                                  </td>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Juan Dela
                                                              Cruz</strong></div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-user-date">2022/08/09</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-alert-modal"><i className="mdi mdi-delete" /> </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#info-header-modal-view"><i className="mdi mdi-eye" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#info-header-modal-edit"><i className="mdi mdi-account-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td><span className="js-lists-values-user-brgyid">2022-0002</span>
                                                  </td>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Maria
                                                              Clara</strong></div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-user-date">2022/08/09</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-alert-modal"><i className="mdi mdi-delete" /> </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#info-header-modal-view"><i className="mdi mdi-eye" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#info-header-modal-edit"><i className="mdi mdi-account-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td><span className="js-lists-values-user-brgyid">2022-0003</span>
                                                  </td>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Sisa
                                                              Usisa</strong></div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-user-date">2022/08/09</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-alert-modal"><i className="mdi mdi-delete" /> </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#info-header-modal-view"><i className="mdi mdi-eye" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#info-header-modal-edit"><i className="mdi mdi-account-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td><span className="js-lists-values-user-brgyid">2022-0004</span>
                                                  </td>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Crisostomo
                                                              Ibarra</strong></div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-user-date">2022/08/09</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-alert-modal"><i className="mdi mdi-delete" /> </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#info-header-modal-view"><i className="mdi mdi-eye" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#info-header-modal-edit"><i className="mdi mdi-account-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td><span className="js-lists-values-user-brgyid">2022-0005</span>
                                                  </td>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Kuki
                                                              Kuripot</strong></div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-user-date">2022/08/09</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-alert-modal"><i className="mdi mdi-delete" /> </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#info-header-modal-view"><i className="mdi mdi-eye" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#info-header-modal-edit"><i className="mdi mdi-account-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end certificates*/}
                              </div> {/* end tab-content*/}
                          </div> {/* end card body*/}
                      </div> {/* end card */}
                  </div>{/* end col*/}
              </div>
              {/* end row*/}
              {/*Decline Modal*/}
              <div id="danger-alert-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog modal-sm">
                      <div className="modal-content modal-filled bg-danger">
                          <div className="modal-body p-4">
                              <div className="text-center">
                                  <i className="dripicons-question h1" />
                                  <h4 className="mt-2">Delete ID Confirmation</h4>
                                  <p className="mt-3">Are you sure you want to delete this ID?</p>
                                  <button type="button" className="btn btn-light my-2" data-bs-dismiss="modal">Cancel</button>
                                  <button type="button" className="btn btn-outline-light my-2" data-bs-dismiss="modal" id="toastr-deleteid">Delete</button>
                              </div>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              <div id="success-alert-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog modal-sm">
                      <div className="modal-content modal-filled bg-success">
                          <div className="modal-body p-4">
                              <div className="text-center">
                                  <i className="dripicons-question h1" />
                                  <h4 className="mt-2">Confirm Approve Request</h4>
                                  <p className="mt-3">Are you sure you want to approve Juan Dela Cruz's request?</p>
                                  <button type="button" className="btn btn-outline-light my-2" data-bs-dismiss="modal">Cancel</button>
                                  <button type="button" className="btn btn-light my-2" data-bs-dismiss="modal" id="toastr-three">Confirm</button>
                              </div>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* Info Header Modal */}
              <div id="info-header-modal-view" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
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
                                              Bitbo</strong></p>
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
              {/* Edit ID Modal */}
              <div id="info-header-modal-edit" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="info-header-modalLabel">Edit ID Details</h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
                          </div>
                          <div className="modal-body">
                              <form>
                                  <div className="row">
                                      <div className="col">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">ID No.</label>
                                              <input type="text" className="form-control" id="idno" placeholder="ID No." />
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
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Birthday</label>
                                              <input type="date" className="form-control" id="bday" placeholder="Birthday" />
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Contact No.</label>
                                              <input type="number" className="form-control" id="contact" placeholder="Contact No." />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">SSS No.</label>
                                              <input type="number" className="form-control" id="sss" placeholder="SSS No." />
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">TIN No.</label>
                                              <input type="number" className="form-control" id="tin" placeholder="TIN No." />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="mb-3">
                                          <label htmlFor="lastname" className="form-label">Photo</label>
                                          <input type="file" className="form-control" id="phot" placeholder="Photo" />
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-updateid">Save
                                  changes</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* Add Certificate */}
              <div id="info-header-modal-addcert" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="info-header-modalLabel">Add Certificate</h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
                          </div>
                          <div className="modal-body">
                              <form>
                                  <div className="row">
                                      <div className="col">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Blotter ID</label>
                                              <input type="text" className="form-control" id="certid" placeholder="Certificate ID" />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Certificate Name</label>
                                              <input type="text" className="form-control" id="certtype" placeholder="Certificate Name" />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Amount</label>
                                              <input type="number" className="form-control" id="certamount" placeholder="Amount" />
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-addcert">Save
                                  changes</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
          </div> {/* container */}

    </React.Fragment>
  )
}
