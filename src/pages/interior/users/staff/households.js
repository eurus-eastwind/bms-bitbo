import React from 'react'

export default function StaffHouseholds() {
  return (
    <React.Fragment>
          <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="page-title-box">
                          <div className="page-title-right">
                              <form className="d-flex">
                                  <a href="javascript:void(0);" className="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#add-household-modal"><i className="mdi mdi-plus-circle me-2" />Add Household</a>
                              </form>
                          </div>
                          <h4 className="page-title">Households</h4>
                      </div>
                  </div>
              </div>
              {/* end page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="card">
                          <div className="card-body">
                              <div className="tab-content">
                                  <div className="tab-pane show active" id="buttons-table-residents" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-householdhead&quot;, &quot;js-lists-values-user-housestreet&quot;, &quot;js-lists-values-user-purok&quot;, &quot;js-lists-values-user-type&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search Household Head, Street, Purok or Type" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 300 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-householdhead">Household
                                                          Head<br /><br /></a>
                                                  </th>
                                                  <th style={{ width: 300 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-housestreet">House
                                                          No./Street<br /><br /></a>
                                                  </th>
                                                  <th style={{ width: 280 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-purok">Purok<br /><br /></a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-type">Type<br /><br /></a>
                                                  </th>
                                                  <th style={{ width: 250 }}>No. of People<br /><br /></th>
                                                  <th style={{ width: 300 }}>Eligible for Ayuda?<br /><br />
                                                  </th>
                                                  <th style={{ width: 250 }}>Active?<br /><br /></th>
                                                  <th style={{ width: 250 }}>Action<br /><br /></th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column">
                                                              <strong className="js-lists-values-user-householdhead">Tiger
                                                                  Nixon</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-housestreet">3435
                                                      Batumbakal Street</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-user-purok">Katakutan</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-user-type">Nuclear
                                                          Family</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          4
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          <input type="checkbox" id="switch1" defaultChecked data-switch="success" />
                                                          <label htmlFor="switch1" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          <input type="checkbox" id="switch4" defaultChecked data-switch="success" />
                                                          <label htmlFor="switch4" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                      </div>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-household-modal"><i className="mdi mdi-account-edit-outline" />
                                                          </button></a>
                                                      <br />
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column">
                                                              <strong className="js-lists-values-user-householdhead">Grantt
                                                                  Winters</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-housestreet">3435
                                                      Batumbakal Street</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-user-purok">Karasyahan</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-user-type">Single</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          4
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          <input type="checkbox" id="switch2" defaultChecked data-switch="success" />
                                                          <label htmlFor="switch2" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          <input type="checkbox" id="switch5" defaultChecked data-switch="success" />
                                                          <label htmlFor="switch5" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                      </div>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-household-modal"><i className="mdi mdi-account-edit-outline" />
                                                          </button></a>
                                                      <br />
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column">
                                                              <strong className="js-lists-values-user-householdhead">Colleen
                                                                  Hurst</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-housestreet">3435
                                                      Batumbakal Street</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-user-purok">Kakurian</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-user-type">Step
                                                          Family</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          4
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          <input type="checkbox" id="switch3" defaultChecked data-switch="success" />
                                                          <label htmlFor="switch3" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          <input type="checkbox" id="switch6" defaultChecked data-switch="success" />
                                                          <label htmlFor="switch6" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                      </div>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-household-modal"><i className="mdi mdi-account-edit-outline" />
                                                          </button></a>
                                                      <br />
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end admins*/}
                              </div> {/* end tab-content*/}
                          </div> {/* end card body*/}
                      </div> {/* end card */}
                  </div>{/* end col*/}
              </div>{/* end row*/}
              {/*MODALS*/}
              {/* Edit Household Modal */}
              <div id="edit-household-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="warning-header-modalLabel">Edit Household Details
                              </h4>
                          </div>
                          <div className="modal-body">
                              <form>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Household Head
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
                                      <div className="col">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Type</label>
                                              <select className="form-select" id="example-select">
                                                  <option>Single</option>
                                                  <option>Nuclear Family</option>
                                                  <option>Extended Family</option>
                                                  <option>Childless Family</option>
                                                  <option>Single Parent</option>
                                                  <option>Step Family</option>
                                                  <option>Grandparent Family</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">No. of People</label>
                                              <input type="number" className="form-control" id="numpeople" placeholder="No. of People" />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Start of
                                                  Residence</label>
                                              <input type="date" className="form-control" id="birthday" placeholder="Start of Residence" />
                                          </div>
                                      </div>
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">End of
                                                  Residence</label>
                                              <input type="date" className="form-control" id="phone" placeholder="End of Residence" />
                                          </div>
                                      </div>
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Length of
                                                  Residence</label>
                                              <input type="number" className="form-control" id="username" placeholder="Length of Residence" />
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-household">Save changes</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* Add Housebold Modal */}
              <div id="add-household-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="warning-header-modalLabel">Add Household</h4>
                          </div>
                          <div className="modal-body">
                              <form>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Household Head
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
                                      <div className="col">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Type</label>
                                              <select className="form-select" id="example-select">
                                                  <option>Single</option>
                                                  <option>Nuclear Family</option>
                                                  <option>Extended Family</option>
                                                  <option>Childless Family</option>
                                                  <option>Single Parent</option>
                                                  <option>Step Family</option>
                                                  <option>Grandparent Family</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">No. of People</label>
                                              <input type="number" className="form-control" id="numpeople" placeholder="No. of People" />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Start of
                                                  Residence</label>
                                              <input type="date" className="form-control" id="birthday" placeholder="Start of Residence" />
                                          </div>
                                      </div>
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">End of
                                                  Residence</label>
                                              <input type="date" className="form-control" id="phone" placeholder="End of Residence" />
                                          </div>
                                      </div>
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Length of
                                                  Residence</label>
                                              <input type="number" className="form-control" id="username" placeholder="Length of Residence" />
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-addhousehold">Add Household</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
          </div> {/* container */}

    </React.Fragment>
  )
}
