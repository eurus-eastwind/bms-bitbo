import React from 'react'

export default function IHealthResidentGeneralServices() {
  return (
    <React.Fragment>
          <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="page-title-box">
                          <div className="page-title-right">
                              <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="mdi mdi-plus-circle" /> Request Appointment</button>
                              <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#vaccine-request-modal"><i className="mdi mdi-needle" />
                                      COVID-19 Vaccine</a>
                                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#dental-request-modal"><i className="mdi mdi-tooth-outline" />
                                      Dental Check-up</a>
                                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#infant-request-modal"><i className="mdi mdi-baby" /> Infant
                                      Check-up</a>
                                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#medical-request-modal"><i className="mdi mdi-stethoscope" />
                                      Medical Check-up</a>
                                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#rvaccine-request-modal"><i className="mdi mdi-dog" />
                                      Rabis Vaccination</a>
                                  <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#scitizen-request-modal"><i className="mdi mdi-account" />
                                      Senior Citizen</a>
                              </div>
                          </div>
                          <h4 className="page-title">General Services</h4>
                      </div>
                  </div>
              </div>
              {/* end page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="card">
                          <div className="card-body">
                              <ul className="nav nav-pills mb-3">
                                  <li className="nav-item">
                                      <a href="#buttons-table-pending" data-bs-toggle="tab" aria-expanded="true" className="nav-link active">
                                          Pending
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#buttons-table-approved" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                          Approved
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#buttons-table-declined" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                          Declined
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#buttons-table-history" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                          History
                                      </a>
                                  </li>
                              </ul> {/* end nav*/}
                              <div className="tab-content">
                                  <div className="tab-pane show active" id="buttons-table-pending" data-toggle="lists" data-lists-values="[&quot;js-lists-values-appointmentid&quot;, &quot;js-lists-values-name&quot;, &quot;js-lists-values-date&quot;, &quot;js-lists-values-time&quot;, &quot;js-lists-values-service&quot;, &quot;js-lists-values-dosestatus&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search Appointment ID, Name or Date" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-appointmentid">Appointment
                                                          ID</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-date">Date</a>
                                                  </th>
                                                  <th style={{ width: 300 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-time">Time</a>
                                                  </th>
                                                  <th style={{ width: 390 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-service">Service Type</a>
                                                  </th>
                                                  <th style={{ width: 400 }}>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-appointmentid">VA-2022-0003</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">09/13/2022</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-time">9:00 AM</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-service">COVID-19
                                                          Vaccine</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-alert-modal"><i className="mdi mdi-cancel" /> </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-request-modal"><i className="mdi mdi-file-document-edit" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end pending*/}
                                  <div className="tab-pane" id="buttons-table-approved" data-toggle="lists" data-lists-values="[&quot;js-lists-values-appointmentid&quot;, &quot;js-lists-values-name&quot;, &quot;js-lists-values-date&quot;, &quot;js-lists-values-time&quot;, &quot;js-lists-values-manufacturer&quot;, &quot;js-lists-values-dosestatus&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search Appointment ID, Name or Date" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-appointmentid">Appointment
                                                          ID</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-date">Date</a>
                                                  </th>
                                                  <th style={{ width: 300 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-time">Time</a>
                                                  </th>
                                                  <th style={{ width: 390 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-service">Service Type</a>
                                                  </th>
                                                  <th style={{ width: 400 }}>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-appointmentid">DC-2022-0002</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">09/13/2022</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-time">9:00 AM</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-service">Dental Check-Up</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-alert-modal"><i className="mdi mdi-cancel" />
                                                          </button>
                                                      </a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-request-modal"><i className="mdi mdi-eye" />
                                                          </button>
                                                      </a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-appointmentid">MC-2022-0006</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">09/13/2022</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-time">9:00 AM</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-service">Medical Check-Up</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-alert-modal"><i className="mdi mdi-cancel" /> </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-request-modal"><i className="mdi mdi-eye" />
                                                          </button>
                                                      </a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-appointmentid">VA-2022-0003</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">09/13/2022</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-time">9:00 AM</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-service">COVID-19
                                                          Vaccine</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-alert-modal"><i className="mdi mdi-cancel" />
                                                          </button>
                                                      </a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-request-modal"><i className="mdi mdi-eye" />
                                                          </button>
                                                      </a>
                                                  </td>
                                              </tr>
                                          </tbody></table>
                                  </div> {/* end approved*/}
                                  <div className="tab-pane" id="buttons-table-declined" data-toggle="lists" data-lists-values="[&quot;js-lists-values-appointmentid&quot;, &quot;js-lists-values-name&quot;, &quot;js-lists-values-date&quot;, &quot;js-lists-values-time&quot;, &quot;js-lists-values-manufacturer&quot;, &quot;js-lists-values-dosestatus&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search Appointment ID, Name or Date" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-appointmentid">Appointment
                                                          ID</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-date">Date</a>
                                                  </th>
                                                  <th style={{ width: 300 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-time">Time</a>
                                                  </th>
                                                  <th style={{ width: 390 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-service">Service Type</a>
                                                  </th>
                                                  <th style={{ width: 400 }}>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-appointmentid">VA-2022-0007</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">09/13/2022</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-time">10:00 AM</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-service">Pfizer</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-request-modal"><i className="mdi mdi-eye" />
                                                          </button>
                                                      </a>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end declined*/}
                                  <div className="tab-pane" id="buttons-table-history" data-toggle="lists" data-lists-values="[&quot;js-lists-values-appointmentid&quot;, &quot;js-lists-values-name&quot;, &quot;js-lists-values-date&quot;, &quot;js-lists-values-time&quot;, &quot;js-lists-values-manufacturer&quot;, &quot;js-lists-values-dosestatus&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search Appointment ID, Name or Date" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-appointmentid">Appointment
                                                          ID</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-date">Date</a>
                                                  </th>
                                                  <th style={{ width: 300 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-time">Time</a>
                                                  </th>
                                                  <th style={{ width: 390 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-service">Service Type</a>
                                                  </th>
                                                  <th style={{ width: 400 }}>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-appointmentid">VA-2022-0001</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">09/13/2021</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-time">9:00 AM</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-service">Pfizer</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-request-modal"><i className="mdi mdi-eye" /> </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-appointmentid">VA-2022-0002</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">10/04/2021</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-time">7:00 AM</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-service">Pfizer</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-request-modal"><i className="mdi mdi-eye" /> </button></a>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end history*/}
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
                                  <h4 className="mt-2">Confirm Cancel Appointment</h4>
                                  <p className="mt-3">Are you sure you want to cancel your appointment?</p>
                                  <button type="button" className="btn btn-light my-2" data-bs-dismiss="modal">No</button>
                                  <button type="button" className="btn btn-outline-light my-2" data-bs-dismiss="modal" id="toastr-cancelreq">Yes</button>
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
                                  <h4 className="mt-2">Confirm Approve Appointment</h4>
                                  <p className="mt-3">Are you sure you want to approve Juan Dela Cruz's appointment?
                                  </p>
                                  <button type="button" className="btn btn-outline-light my-2" data-bs-dismiss="modal">Cancel</button>
                                  <button type="button" className="btn btn-light my-2" data-bs-dismiss="modal" id="toastr-three">Confirm</button>
                              </div>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* Info Header Modal */}
              <div id="edit-request-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="info-header-modalLabel">Vaccination Appointment Details
                              </h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
                          </div>
                          <div className="modal-body">
                              <form>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Appointment ID</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Resident Name" defaultValue="VA-2022-0001" disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Resident Name</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Resident Name" defaultValue="Juan Dela Cruz" disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Date</label>
                                              <input type="date" min="2022-08-01" max="2023-12-31" className="form-control" id="date" placeholder="Enter Date" />
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Time</label>
                                              <select className="form-select" id="example-select">
                                                  <option>7:00 AM</option>
                                                  <option>8:00 AM</option>
                                                  <option>9:00 AM</option>
                                                  <option>10:00 AM</option>
                                                  <option>11:00 AM</option>
                                                  <option>1:00 PM</option>
                                                  <option>2:00 PM</option>
                                                  <option>3:00 PM</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Vaccine
                                                  Manufacturer</label>
                                              <select className="form-select" id="example-select">
                                                  <option>Pfizer</option>
                                                  <option>Moderna</option>
                                                  <option>Astrazeneca</option>
                                                  <option>Johnson &amp; Johnson</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="userpassword" className="form-label">Dosage Status</label>
                                              <select className="form-select" id="example-select">
                                                  <option>1st Dose</option>
                                                  <option>2nd Dose</option>
                                                  <option>1st Booster Dose</option>
                                                  <option>2nd Booster Dose</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-editreq">Save Changes</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* Vaccine Header Modal */}
              <div id="vaccine-request-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="info-header-modalLabel">Request Vaccination
                              </h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
                          </div>
                          <div className="modal-body">
                              <form>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Appointment ID</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Resident Name" defaultValue="VA-2022-0001" disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Resident Name</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Resident Name" defaultValue="Juan Dela Cruz" disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Date</label>
                                              <input type="date" min="2022-08-01" max="2023-12-31" className="form-control" id="date" placeholder="Enter Date" />
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Time</label>
                                              <select className="form-select" id="example-select">
                                                  <option>7:00 AM</option>
                                                  <option>8:00 AM</option>
                                                  <option>9:00 AM</option>
                                                  <option>10:00 AM</option>
                                                  <option>11:00 AM</option>
                                                  <option>1:00 PM</option>
                                                  <option>2:00 PM</option>
                                                  <option>3:00 PM</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Vaccine
                                                  Manufacturer</label>
                                              <select className="form-select" id="example-select">
                                                  <option>Pfizer</option>
                                                  <option>Moderna</option>
                                                  <option>Astrazeneca</option>
                                                  <option>Johnson &amp; Johnson</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="userpassword" className="form-label">Dosage Status</label>
                                              <select className="form-select" id="example-select">
                                                  <option>1st Dose</option>
                                                  <option>2nd Dose</option>
                                                  <option>1st Booster Dose</option>
                                                  <option>2nd Booster Dose</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-reqvaccine">Save Changes</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* Rabis Vaccine Header Modal */}
              <div id="rvaccine-request-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="info-header-modalLabel">Request Rabis Vaccination
                              </h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
                          </div>
                          <div className="modal-body">
                              <form>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Appointment ID</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Resident Name" defaultValue="VA-2022-0001" disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Resident Name</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Resident Name" defaultValue="Juan Dela Cruz" disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Date</label>
                                              <input type="date" min="2022-08-01" max="2023-12-31" className="form-control" id="date" placeholder="Enter Date" />
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Time</label>
                                              <select className="form-select" id="example-select">
                                                  <option>7:00 AM</option>
                                                  <option>8:00 AM</option>
                                                  <option>9:00 AM</option>
                                                  <option>10:00 AM</option>
                                                  <option>11:00 AM</option>
                                                  <option>1:00 PM</option>
                                                  <option>2:00 PM</option>
                                                  <option>3:00 PM</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Date Bitten</label>
                                              <input type="date" min="2022-08-01" max="2023-12-31" className="form-control" id="date" placeholder="Enter Date" />
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-reqvaccine">Save Changes</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* Dental Header Modal */}
              <div id="dental-request-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="info-header-modalLabel">Request Dental Check-up Appointment
                              </h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
                          </div>
                          <div className="modal-body">
                              <form>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Appointment ID</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Resident Name" defaultValue="VA-2022-0001" disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Resident Name</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Resident Name" defaultValue="Juan Dela Cruz" disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Date</label>
                                              <input type="date" min="2022-08-01" max="2023-12-31" className="form-control" id="date" placeholder="Enter Date" />
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Time</label>
                                              <select className="form-select" id="example-select">
                                                  <option>7:00 AM</option>
                                                  <option>8:00 AM</option>
                                                  <option>9:00 AM</option>
                                                  <option>10:00 AM</option>
                                                  <option>11:00 AM</option>
                                                  <option>1:00 PM</option>
                                                  <option>2:00 PM</option>
                                                  <option>3:00 PM</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-reqdental">Save Changes</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* Infant Header Modal */}
              <div id="infant-request-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="info-header-modalLabel">Request Infant Check-up Appointment
                              </h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
                          </div>
                          <div className="modal-body">
                              <form>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Appointment ID</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Resident Name" defaultValue="VA-2022-0001" disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Resident Name</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Resident Name" defaultValue="Juan Dela Cruz" disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Infant Name</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Infant Name" defaultValue="Baby Juan Dela Cruz" disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Infant Age</label>
                                              <input type="number" className="form-control" id="firstname" placeholder="Infant Age" defaultValue={4} disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Date</label>
                                              <input type="date" min="2022-08-01" max="2023-12-31" className="form-control" id="date" placeholder="Enter Date" />
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Time</label>
                                              <select className="form-select" id="example-select">
                                                  <option>7:00 AM</option>
                                                  <option>8:00 AM</option>
                                                  <option>9:00 AM</option>
                                                  <option>10:00 AM</option>
                                                  <option>11:00 AM</option>
                                                  <option>1:00 PM</option>
                                                  <option>2:00 PM</option>
                                                  <option>3:00 PM</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-reqinfant">Save Changes</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* Medical Header Modal */}
              <div id="medical-request-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="info-header-modalLabel">Request Medical Check-up Appointment
                              </h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
                          </div>
                          <div className="modal-body">
                              <form>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Appointment ID</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Resident Name" defaultValue="VA-2022-0001" disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Resident Name</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Resident Name" defaultValue="Juan Dela Cruz" disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Date</label>
                                              <input type="date" min="2022-08-01" max="2023-12-31" className="form-control" id="date" placeholder="Enter Date" />
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Time</label>
                                              <select className="form-select" id="example-select">
                                                  <option>7:00 AM</option>
                                                  <option>8:00 AM</option>
                                                  <option>9:00 AM</option>
                                                  <option>10:00 AM</option>
                                                  <option>11:00 AM</option>
                                                  <option>1:00 PM</option>
                                                  <option>2:00 PM</option>
                                                  <option>3:00 PM</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-reqmedical">Save Changes</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* Vaccine Header Modal */}
              <div id="scitizen-request-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="info-header-modalLabel">Request Senior Citizen Check-up Appointment
                              </h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
                          </div>
                          <div className="modal-body">
                              <form>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Appointment ID</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Resident Name" defaultValue="VA-2022-0001" disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Resident Name</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Resident Name" defaultValue="Juan Dela Cruz" disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Date</label>
                                              <input type="date" min="2022-08-01" max="2023-12-31" className="form-control" id="date" placeholder="Enter Date" />
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Time</label>
                                              <select className="form-select" id="example-select">
                                                  <option>7:00 AM</option>
                                                  <option>8:00 AM</option>
                                                  <option>9:00 AM</option>
                                                  <option>10:00 AM</option>
                                                  <option>11:00 AM</option>
                                                  <option>1:00 PM</option>
                                                  <option>2:00 PM</option>
                                                  <option>3:00 PM</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-reqscitizen">Save Changes</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* View Request Modal */}
              <div id="view-request-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="info-header-modalLabel">Vaccination Appointment Details
                              </h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
                          </div>
                          <div className="modal-body">
                              <form>
                                  <p><strong>Appointment ID.: </strong>VA-2022-0001</p>
                                  <p><strong>Resident Name: </strong>Juan Dela Cruz</p>
                                  <p><strong>Appointment Date: </strong>09/13/2022</p>
                                  <p><strong>Appointment Time: </strong>8:00 AM</p>
                                  <p><strong>Vaccine Manufacturer: </strong>Pfizer</p>
                                  <p><strong>Dosage Status: </strong>Booster</p>
                              </form>
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
