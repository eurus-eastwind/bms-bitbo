import React from 'react'

export default function IHealthAdminHealthCertificatesEdit() {
  return (
    <React.Fragment>
          <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="page-title-box">
                          <div className="page-title-right">
                              <form className="d-flex">
                                  <a href="javascript:void(0);" className="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#info-header-modal-addcert"><i className="mdi mdi-plus-circle me-2" /> Add Certificate</a>
                              </form>
                          </div>
                          <h4 className="page-title">Manage Certificates</h4>
                      </div>
                  </div>
              </div>
              {/* end page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="card">
                          <div className="card-body">
                              <div className="tab-content">
                                  <div className="tab-pane show active" id="buttons-table-pending">
                                      <table id="scroll-vertical-datatable" className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th>Certificate ID.</th>
                                                  <th>Type</th>
                                                  <th>Amount</th>
                                                  <th>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>CERT-0001</td>
                                                  <td>Barangay Certificate of Residency</td>
                                                  <td>50</td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon"> <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-alert-modal"><i className="mdi mdi-delete" /> </button></a>
                                                      <a href="javascript: void(0);" className="action-icon"> <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#info-header-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                      </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>CERT-0002</td>
                                                  <td>Barangay Clearance</td>
                                                  <td>120</td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon"> <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-alert-modal"><i className="mdi mdi-delete" /> </button></a>
                                                      <a href="javascript: void(0);" className="action-icon"> <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#info-header-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                      </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>CERT-0003</td>
                                                  <td>Barangay Indigency</td>
                                                  <td>50</td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon"> <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-alert-modal"><i className="mdi mdi-delete" /> </button></a>
                                                      <a href="javascript: void(0);" className="action-icon"> <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#info-header-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                      </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>CERT-0004</td>
                                                  <td>Business Permit</td>
                                                  <td>200</td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon"> <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-alert-modal"><i className="mdi mdi-delete" /> </button></a>
                                                      <a href="javascript: void(0);" className="action-icon"> <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#info-header-modal"><i className="mdi mdi-file-document-edit-outline" />
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
              </div>{/* end row*/}
              {/*MODALS*/}
              {/*Decline Modal*/}
              <div id="danger-alert-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog modal-sm">
                      <div className="modal-content modal-filled bg-danger">
                          <div className="modal-body p-4">
                              <div className="text-center">
                                  <i className="dripicons-question h1" />
                                  <h4 className="mt-2">Delete Certificate Confirmation</h4>
                                  <p className="mt-3">Are you sure you want to delete this type of certificate?</p>
                                  <button type="button" className="btn btn-light my-2" data-bs-dismiss="modal">Cancel</button>
                                  <button type="button" className="btn btn-outline-light my-2" data-bs-dismiss="modal" id="toastr-deletecert">Delete</button>
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
              <div id="info-header-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="info-header-modalLabel">Request Details</h4>
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
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-updatecert">Save
                                  changes</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* Info Header Add Certificate */}
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
