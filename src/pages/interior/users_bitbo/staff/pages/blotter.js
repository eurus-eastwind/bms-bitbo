import React from 'react'

export default function BITBoStaffBlotter() {
  return (
    <React.Fragment>
          <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="page-title-box">
                          <h4 className="page-title">Blotter</h4>
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
                                      <a href="#buttons-table-active" data-bs-toggle="tab" aria-expanded="true" className="nav-link active">
                                          Pending
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#buttons-table-forreview" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                          For Review
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#buttons-table-summon" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                          Summon
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#buttons-table-settled" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                          Settled
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#buttons-table-dismissed" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                          Dismissed
                                      </a>
                                  </li>
                              </ul> {/* end nav*/}
                              <div className="tab-content">
                                  <div className="tab-pane show active" id="buttons-table-active" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-blotter&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-complainant&quot;, &quot;js-lists-values-user-person&quot;, &quot;js-lists-values-user-complaint&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search Blotter ID., Date or Complainant" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-blotter">Blotter
                                                          ID.</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-date">Date
                                                          Recorded</a>
                                                  </th>
                                                  <th style={{ width: 280 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-complainant">Complainant</a>
                                                  </th>
                                                  <th style={{ width: 280 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-person">Person to
                                                          Complain</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-complaint">Complaint</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-blotter">BLTR-2022002</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022-02-02</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complainant">Juan Dela
                                                      Cruz</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-person">Kuki
                                                      Kuripot</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complaint">Nakitae tas
                                                      di lumubog</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#mark-forreview-modal"><i className="mdi mdi-check-bold" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-blotter-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-blotter">BLTR-2022003</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022-02-02</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complainant">Maria
                                                      Clara</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-person">Kuki
                                                      Kuripot</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complaint">Nakitae tas
                                                      di lumubog</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#mark-forreview-modal"><i className="mdi mdi-check-bold" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-blotter-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-blotter">BLTR-2022004</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022-02-02</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complainant">Sisa
                                                      Usisa</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-person">Kuki
                                                      Kuripot</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complaint">Nakitae tas
                                                      di lumubog</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#mark-forreview-modal"><i className="mdi mdi-check-bold" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-blotter-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end active*/}
                                  <div className="tab-pane" id="buttons-table-forreview" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-blotter&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-complainant&quot;, &quot;js-lists-values-user-person&quot;, &quot;js-lists-values-user-complaint&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search Blotter ID., Date or Complainant" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-blotter">Blotter
                                                          ID.</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-date">Date
                                                          Recorded</a>
                                                  </th>
                                                  <th style={{ width: 280 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-complainant">Complainant</a>
                                                  </th>
                                                  <th style={{ width: 280 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-person">Person to
                                                          Complain</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-complaint">Complaint</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-blotter">BLTR-2022002</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022-02-02</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complainant">Juan Dela
                                                      Costa</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-person">Kuki
                                                      Kuripot</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complaint">Nakitae tas
                                                      di lumubog</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#mark-summon-modal"><i className="mdi mdi-check-bold" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-blotter-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-blotter">BLTR-2022003</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022-02-02</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complainant">Maria
                                                      Clara</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-person">Kuki
                                                      Kuripot</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complaint">Nakitae tas
                                                      di lumubog</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#mark-summon-modal"><i className="mdi mdi-check-bold" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-blotter-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-blotter">BLTR-2022004</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022-02-02</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complainant">Sisa
                                                      Usisa</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-person">Kuki
                                                      Kuripot</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complaint">Nakitae tas
                                                      di lumubog</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#mark-summon-modal"><i className="mdi mdi-check-bold" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-blotter-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end for review*/}
                                  <div className="tab-pane" id="buttons-table-summon" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-blotter&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-complainant&quot;, &quot;js-lists-values-user-person&quot;, &quot;js-lists-values-user-complaint&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search Blotter ID., Date or Complainant" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-blotter">Blotter
                                                          ID.</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-date">Date
                                                          Recorded</a>
                                                  </th>
                                                  <th style={{ width: 280 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-complainant">Complainant</a>
                                                  </th>
                                                  <th style={{ width: 280 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-person">Person to
                                                          Complain</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-complaint">Complaint</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-blotter">BLTR-2022002</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022-02-02</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complainant">Juan Dela
                                                      Costa</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-person">Kuki
                                                      Kuripot</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complaint">Nakitae tas
                                                      di lumubog</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#mark-settled-modal"><i className="mdi mdi-check-bold" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#mark-dismiss-modal"><i className="mdi mdi-cancel" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-blotter-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-blotter">BLTR-2022003</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022-02-02</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complainant">Maria
                                                      Labo</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-person">Kuki
                                                      Kuripot</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complaint">Nakitae tas
                                                      di lumubog</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#mark-settled-modal"><i className="mdi mdi-check-bold" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#mark-dismiss-modal"><i className="mdi mdi-cancel" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-blotter-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-blotter">BLTR-2022004</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022-02-02</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complainant">Sisa
                                                      Usisa</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-person">Kuki
                                                      Kuripot</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complaint">Nakitae tas
                                                      di lumubog</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#mark-settled-modal"><i className="mdi mdi-check-bold" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#mark-dismiss-modal"><i className="mdi mdi-cancel" />
                                                          </button></a>
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-blotter-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end for review*/}
                                  <div className="tab-pane" id="buttons-table-settled" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-blotter&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-complainant&quot;, &quot;js-lists-values-user-person&quot;, &quot;js-lists-values-user-complaint&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search Blotter ID., Date or Complainant" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-blotter">Blotter
                                                          ID.</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-date">Date
                                                          Recorded</a>
                                                  </th>
                                                  <th style={{ width: 280 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-complainant">Complainant</a>
                                                  </th>
                                                  <th style={{ width: 280 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-person">Person to
                                                          Complain</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-complaint">Complaint</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-blotter">BLTR-2022002</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022-02-02</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complainant">Juan Dela
                                                      Cruz</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-person">Kuki
                                                      Kuripot</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complaint">Nakitae tas
                                                      di lumubog</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-blotter-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-blotter">BLTR-2022003</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022-02-02</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complainant">Maria
                                                      Clara</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-person">Kuki
                                                      Kuripot</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complaint">Nakitae tas
                                                      di lumubog</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-blotter-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-blotter">BLTR-2022004</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022-02-02</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complainant">Sisa
                                                      Usisa</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-person">Kuki
                                                      Korak</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complaint">Nakitae tas
                                                      di lumubog</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-blotter-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end settled*/}
                                  <div className="tab-pane" id="buttons-table-dismissed" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-blotter&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-complainant&quot;, &quot;js-lists-values-user-person&quot;, &quot;js-lists-values-user-complaint&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search Blotter ID., Date or Complainant" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-blotter">Blotter
                                                          ID.</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-date">Date
                                                          Recorded</a>
                                                  </th>
                                                  <th style={{ width: 280 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-complainant">Complainant</a>
                                                  </th>
                                                  <th style={{ width: 280 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-person">Person to
                                                          Complain</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-complaint">Complaint</a>
                                                  </th>
                                                  <th style={{ width: 180 }}>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-blotter">BLTR-2022002</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022-02-02</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complainant">Juan Del
                                                      Monte</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-person">Kuki
                                                      Kuripot</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complaint">Nakitae tas
                                                      di lumubog</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-blotter-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-blotter">BLTR-2022003</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022-02-02</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complainant">Maria
                                                      Clara</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-person">Kuki
                                                      Kuripot</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complaint">Nakitae tas
                                                      di lumubog</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-blotter-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-blotter">BLTR-2022004</strong>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022-02-02</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complainant">Sisa
                                                      Usisa</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-person">Kuki
                                                      Korak</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-complaint">Nakitae tas
                                                      di lumubog</span>
                                                  </td>
                                                  <td className="table-action">
                                                      <a href="javascript: void(0);" className="action-icon">
                                                          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-blotter-modal"><i className="mdi mdi-file-document-edit-outline" />
                                                          </button></a>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end settled*/}
                              </div> {/* end tab-content*/}
                          </div> {/* end card body*/}
                      </div> {/* end card */}
                  </div>{/* end col*/}
              </div>{/* end row*/}
              {/*MODALS*/}
              {/* Edit Blotter Modal */}
              <div id="edit-blotter-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="warning-header-modalLabel">Edit Blotter Details</h4>
                          </div>
                          <div className="modal-body">
                              <dl className="row mb-0">
                                  <dt className="col-sm-3">Blotter Details</dt>
                                  <dd className="col-sm-9">
                                      <div className="row">
                                          <div className="col-md-6">
                                              <div className="mb-3">
                                                  <label htmlFor="firstname" className="form-label">Blotter ID</label>
                                                  <input type="text" className="form-control" id="blotterid" placeholder="Blotter ID" />
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <div className="mb-3">
                                                  <label htmlFor="firstname" className="form-label">Date Recorded</label>
                                                  <input type="date" className="form-control" id="blotterid" placeholder="Date Recorded" />
                                              </div>
                                          </div>
                                      </div>
                                      <div className="row">
                                          <div className="col-12">
                                              <div className="mb-3">
                                                  <label htmlFor="userbio" className="form-label">Complaint</label>
                                                  <textarea className="form-control" id="userbio" rows={4} placeholder="What's your complaint?..." defaultValue={""} />
                                              </div>
                                          </div>
                                      </div>
                                      <div className="row">
                                          <div className="col-md-12">
                                              <div className="mb-3">
                                                  <label htmlFor="lastname" className="form-label">Place of
                                                      Indident</label>
                                                  <div className="row">
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
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </dd>
                                  <dt className="col-sm-3">Complainant Details</dt>
                                  <dd className="col-sm-9">
                                      <div className="row">
                                          <div className="col-md-12">
                                              <div className="mb-3">
                                                  <label htmlFor="firstname" className="form-label">Name</label>
                                                  <input type="text" className="form-control" id="complainant" placeholder="Complainant Name" />
                                              </div>
                                          </div>
                                      </div>
                                      <div className="row">
                                          <div className="col-md-6">
                                              <div className="mb-3">
                                                  <label htmlFor="firstname" className="form-label">Contact</label>
                                                  <input type="number" className="form-control" id="complainant_contact" placeholder="Complainant Contact" />
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <div className="mb-3">
                                                  <label htmlFor="firstname" className="form-label">Age</label>
                                                  <input type="number" className="form-control" id="complainant_age" placeholder="Age" />
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
                                  </dd>
                                  <dt className="col-sm-3">Defendant Details</dt>
                                  <dd className="col-sm-9">
                                      <div className="row">
                                          <div className="col-md-12">
                                              <div className="mb-3">
                                                  <label htmlFor="firstname" className="form-label">Name</label>
                                                  <input type="text" className="form-control" id="complainant" placeholder="Complainant Name" />
                                              </div>
                                          </div>
                                      </div>
                                      <div className="row">
                                          <div className="col-md-6">
                                              <div className="mb-3">
                                                  <label htmlFor="firstname" className="form-label">Contact</label>
                                                  <input type="number" className="form-control" id="complainant_contact" placeholder="Complainant Contact" />
                                              </div>
                                          </div>
                                          <div className="col-md-6">
                                              <div className="mb-3">
                                                  <label htmlFor="firstname" className="form-label">Age</label>
                                                  <input type="number" className="form-control" id="complainant_age" placeholder="Age" />
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
                                  </dd>
                              </dl>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-six">Save
                                  changes</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              <div id="mark-forreview-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog modal-sm">
                      <div className="modal-content modal-filled bg-success">
                          <div className="modal-body p-4">
                              <div className="text-center">
                                  <i className="dripicons-question h1" />
                                  <h4 className="mt-2">For Review Confirmation</h4>
                                  <p className="mt-3">Are you sure you want to mark this botter as for review?</p>
                                  <button type="button" className="btn btn-outline-light my-2" data-bs-dismiss="modal">Cancel</button>
                                  <button type="button" className="btn btn-light my-2" data-bs-dismiss="modal" id="toastr-forreview">Confirm</button>
                              </div>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              <div id="mark-summon-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog modal-sm">
                      <div className="modal-content modal-filled bg-success">
                          <div className="modal-body p-4">
                              <div className="text-center">
                                  <i className="dripicons-question h1" />
                                  <h4 className="mt-2">Summon Confirmation</h4>
                                  <p className="mt-3">Are you sure you want to mark this botter as summon?</p>
                                  <button type="button" className="btn btn-outline-light my-2" data-bs-dismiss="modal">Cancel</button>
                                  <button type="button" className="btn btn-light my-2" data-bs-dismiss="modal" id="toastr-summon">Confirm</button>
                              </div>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              <div id="mark-settled-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog modal-sm">
                      <div className="modal-content modal-filled bg-success">
                          <div className="modal-body p-4">
                              <div className="text-center">
                                  <i className="dripicons-question h1" />
                                  <h4 className="mt-2">Settle Blotter Confirmation</h4>
                                  <p className="mt-3">Are you sure you want to mark this botter as settled?</p>
                                  <button type="button" className="btn btn-outline-light my-2" data-bs-dismiss="modal">Cancel</button>
                                  <button type="button" className="btn btn-light my-2" data-bs-dismiss="modal" id="toastr-settled">Confirm</button>
                              </div>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              <div id="mark-dismiss-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog modal-sm">
                      <div className="modal-content modal-filled bg-danger">
                          <div className="modal-body p-4">
                              <div className="text-center">
                                  <i className="dripicons-question h1" />
                                  <h4 className="mt-2">Dismiss Blotter Confirmation</h4>
                                  <p className="mt-3">Are you sure you want to mark this botter as dismissed?</p>
                                  <button type="button" className="btn btn-outline-light my-2" data-bs-dismiss="modal">Cancel</button>
                                  <button type="button" className="btn btn-light my-2" data-bs-dismiss="modal" id="toastr-dismiss">Confirm</button>
                              </div>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
          </div> {/* container */}

    </React.Fragment>
  )
}
