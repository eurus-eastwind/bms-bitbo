import React from 'react'

export default function BITBoResidentCertificates() {
  return (
    <React.Fragment>
          <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="page-title-box">
                          <div className="page-title-right">
                              <form className="d-flex">
                                  <a href="#" className="btn btn-primary ms-1" data-bs-toggle="modal" data-bs-target="#req-certificate-modal">
                                      <i className="mdi mdi-plus-circle" /><span> &nbsp;Request
                                          Certificate</span>
                                  </a>
                              </form>
                          </div>
                          <h4 className="page-title">Certificates</h4>
                      </div>
                  </div>
              </div>
              {/* end page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="card">
                          <div className="card-body">
                              <ul className="nav nav-pills bg-nav-pills mb-3">
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
                                  <div className="tab-pane show active" id="buttons-table-pending" data-toggle="lists" data-lists-values="[&quot;js-lists-values-requestid&quot;, &quot;js-lists-values-name&quot;, &quot;js-lists-values-purpose&quot;, &quot;js-lists-values-findings&quot;, &quot;js-lists-values-date&quot;, &quot;js-lists-values-certtype&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search Request No., Date Issued, Findings etc." />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-requestid">Request
                                                          ID.</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-date">Date Issued</a>
                                                  </th>
                                                  <th style={{ width: 300 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-certtype">Certificate
                                                          Type</a>
                                                  </th>
                                                  <th style={{ width: 390 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-purpose">Findings</a>
                                                  </th>
                                                  <th style={{ width: 390 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-purpose">Purpose</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-requestid">RQ-2022-0001</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">2022/08/01</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-certtype">Barangay
                                                          Indigency</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-findings">No Record on
                                                          File</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-purpose">Medical
                                                          Assistance</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-alert-modal"><i className="mdi mdi-cancel" /> </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-request-modal"><i className="mdi mdi-file-document-edit" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-requestid">RQ-2022-0002</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">2022/08/01</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-certtype">Barangay
                                                          Indigency</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-findings">No Record on
                                                          File</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-purpose">Educational
                                                          Assistance</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#danger-alert-modal"><i className="mdi mdi-cancel" /> </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-request-modal"><i className="mdi mdi-file-document-edit" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-requestid">RQ-2022-0003</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">2022/08/01</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-certtype">Barangay
                                                          Indigency</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-findings">No Record on
                                                          File</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-purpose">Financial
                                                          Assistance</span>
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
                                  <div className="tab-pane" id="buttons-table-approved" data-toggle="lists" data-lists-values="[&quot;js-lists-values-requestid&quot;, &quot;js-lists-values-name&quot;, &quot;js-lists-values-purpose&quot;, &quot;js-lists-values-findings&quot;, &quot;js-lists-values-date&quot;, &quot;js-lists-values-certtype&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search Request No., Name or Purpose" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-requestid">Request
                                                          ID.</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-date">Date Issued</a>
                                                  </th>
                                                  <th style={{ width: 300 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-certtype">Certificate
                                                          Type</a>
                                                  </th>
                                                  <th style={{ width: 390 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-purpose">Findings</a>
                                                  </th>
                                                  <th style={{ width: 390 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-purpose">Purpose</a>
                                                  </th>
                                                  <th style={{ width: 100 }}>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-requestid">RQ-2022-0001</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">2022/08/01</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-certtype">Barangay
                                                          Indigency</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-findings">No Record on
                                                          File</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-purpose">Medical
                                                          Assistance</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-request-modal"><i className="mdi mdi-eye" /> </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-requestid">RQ-2022-0002</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">2022/08/01</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-certtype">Barangay
                                                          Indigency</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-findings">No Record on
                                                          File</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-purpose">Educational
                                                          Assistance</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-request-modal"><i className="mdi mdi-eye" /> </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-requestid">RQ-2022-0003</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">2022/08/01</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-certtype">Barangay
                                                          Certificate of Residency</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-findings">No Record on
                                                          File</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-purpose">Financial
                                                          Assistance</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-request-modal"><i className="mdi mdi-eye" /> </button></a>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end approved*/}
                                  <div className="tab-pane" id="buttons-table-declined" data-toggle="lists" data-lists-values="[&quot;js-lists-values-requestid&quot;, &quot;js-lists-values-name&quot;, &quot;js-lists-values-purpose&quot;, &quot;js-lists-values-findings&quot;, &quot;js-lists-values-date&quot;, &quot;js-lists-values-certtype&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search Request No., Name or Purpose" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-requestid">Request
                                                          ID.</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-date">Date Issued</a>
                                                  </th>
                                                  <th style={{ width: 300 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-certtype">Certificate
                                                          Type</a>
                                                  </th>
                                                  <th style={{ width: 390 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-purpose">Findings</a>
                                                  </th>
                                                  <th style={{ width: 390 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-purpose">Purpose</a>
                                                  </th>
                                                  <th style={{ width: 100 }}>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-requestid">RQ-2022-0001</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">2022/08/01</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-certtype">Barangay
                                                          Indigency</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-findings">No Record on
                                                          File</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-purpose">Medical
                                                          Assistance</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-request-modal"><i className="mdi mdi-eye" /> </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-requestid">RQ-2022-0002</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">2022/08/01</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-certtype">Barangay
                                                          Indigency</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-findings">No Record on
                                                          File</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-purpose">Educational
                                                          Assistance</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-request-modal"><i className="mdi mdi-eye" /> </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-requestid">RQ-2022-0003</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">2022/08/01</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-certtype">Barangay
                                                          Certificate of Residency</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-findings">No Record on
                                                          File</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-purpose">Financial
                                                          Assistance</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-request-modal"><i className="mdi mdi-eye" /> </button></a>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end declined*/}
                                  <div className="tab-pane" id="buttons-table-history" data-toggle="lists" data-lists-values="[&quot;js-lists-values-requestid&quot;, &quot;js-lists-values-name&quot;, &quot;js-lists-values-purpose&quot;, &quot;js-lists-values-findings&quot;, &quot;js-lists-values-date&quot;, &quot;js-lists-values-certtype&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search Request No., Name or Purpose" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-requestid">Request
                                                          ID.</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-date">Date Issued</a>
                                                  </th>
                                                  <th style={{ width: 300 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-certtype">Certificate
                                                          Type</a>
                                                  </th>
                                                  <th style={{ width: 390 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-purpose">Findings</a>
                                                  </th>
                                                  <th style={{ width: 390 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-purpose">Purpose</a>
                                                  </th>
                                                  <th style={{ width: 100 }}>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-requestid">RQ-2022-0001</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">2022/08/01</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-certtype">Barangay
                                                          Indigency</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-findings">No Record on
                                                          File</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-purpose">Medical
                                                          Assistance</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-request-modal"><i className="mdi mdi-eye" /> </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-requestid">RQ-2022-0002</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">2022/08/01</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-certtype">Barangay
                                                          Clearance</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-findings">No Record on
                                                          File</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-purpose">Educational
                                                          Assistance</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-request-modal"><i className="mdi mdi-eye" /> </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-requestid">RQ-2022-0003</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-date">2022/08/01</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-certtype">Barangay
                                                          Certificate of Residency</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-findings">No Record on
                                                          File</span>
                                                  </td>
                                                  <td>
                                                      <span className="js-lists-values-purpose">Financial
                                                          Assistance</span>
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
                                  <h4 className="mt-2">Confirm Cancel Request</h4>
                                  <p className="mt-3">Are you sure you want to cancel your request?</p>
                                  <button type="button" className="btn btn-light my-2" data-bs-dismiss="modal">No</button>
                                  <button type="button" className="btn btn-outline-light my-2" data-bs-dismiss="modal" id="toastr-cancelreq">Yes</button>
                              </div>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* Edit Request Modal */}
              <div id="edit-request-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="info-header-modalLabel">Request Certificate Details</h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
                          </div>
                          <div className="modal-body">
                              <form>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Request ID</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Resident Name" defaultValue="RQ-2022-0001" disabled />
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
                                      <div className="col-md-8">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Certificate Type</label>
                                              <select className="form-select" id="example-select">
                                                  <option>Barangay Certificate of Residency</option>
                                                  <option>Barangay Clearance</option>
                                                  <option>Barangay Indigency</option>
                                                  <option>Barangay Household Registration</option>
                                                  <option>Barangay Identification Card</option>
                                                  <option>Business Permit</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Date Issued</label>
                                              <input type="date" className="form-control" id="dateissued" placeholder="Enter birthday" />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Findings</label>
                                              <select className="form-select" id="example-select">
                                                  <option>No Record on File</option>
                                                  <option>No Derogatory Record</option>
                                                  <option>With Derogatory Record</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="userpassword" className="form-label">Purpose</label>
                                              <select className="form-select" id="example-select">
                                                  <option>None</option>
                                                  <option>Financial Assistance</option>
                                                  <option>Medical Clearance</option>
                                                  <option>Educational Assistance</option>
                                                  <option>General Requirement</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-editreq">Save
                                  Changes</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* Request Certificate Modal */}
              <div id="req-certificate-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="info-header-modalLabel">Request Certificate</h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
                          </div>
                          <div className="modal-body">
                              <form>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label htmlFor="firstname" className="form-label">Resident Name</label>
                                              <input type="text" className="form-control" id="firstname" placeholder="Resident Name" defaultValue="Juan Dela Cruz" disabled />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-8">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Certificate Type</label>
                                              <select className="form-select" id="example-select">
                                                  <option>Barangay Certificate of Residency</option>
                                                  <option>Barangay Clearance</option>
                                                  <option>Barangay Indigency</option>
                                                  <option>Barangay Household Registration</option>
                                                  <option>Barangay Identification Card</option>
                                                  <option>Business Permit</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Date to be Issued</label>
                                              <input type="date" className="form-control" id="dateissued" placeholder="Enter birthday" />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="lastname" className="form-label">Findings</label>
                                              <select className="form-select" id="example-select">
                                                  <option>No Record on File</option>
                                                  <option>No Derogatory Record</option>
                                                  <option>With Derogatory Record</option>
                                              </select>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label htmlFor="userpassword" className="form-label">Purpose</label>
                                              <select className="form-select" id="example-select">
                                                  <option>None</option>
                                                  <option>Financial Assistance</option>
                                                  <option>Medical Clearance</option>
                                                  <option>Educational Assistance</option>
                                                  <option>General Requirement</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-reqcert">Submit</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* View Request Modal */}
              <div id="view-request-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="info-header-modalLabel">Request Certificate Details</h4>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
                          </div>
                          <div className="modal-body">
                              <form>
                                  <p><strong>Request ID.: </strong>RQ-2022-0001</p>
                                  <p><strong>Resident Name: </strong>Juan Dela Cruz</p>
                                  <p><strong>Certificate Type: </strong>Barangay Certificate of Residency</p>
                                  <p><strong>Date Issued: </strong>2022/01/01</p>
                                  <p><strong>Findings: </strong>No Record on File</p>
                                  <p><strong>Purpose: </strong>Financial Assistance</p>
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
