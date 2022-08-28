import React from 'react'

export default function IHealthResidentDashboard() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        {/* start page title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <h4 className="page-title">Dashboard</h4>
            </div>
          </div>
        </div>
        {/* end page title */}
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="row">
              <div className="col">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-end">
                      <i className="mdi mdi-newspaper-variant widget-icon" />
                    </div>
                    <h5 className="text-muted fw-normal mt-0" title="Number of Customers">
                      Certificates Requested</h5>
                    <h3 className="mt-3 mb-3">4</h3>
                  </div> {/* end card-body*/}
                </div> {/* end card*/}
              </div> {/* end col*/}
              <div className="col">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-end">
                      <i className="mdi mdi-calendar-range widget-icon" />
                    </div>
                    <h5 className="text-muted fw-normal mt-0" title="Number of Orders">Consultation
                      Appointments<br /></h5>
                    <h3 className="mt-3 mb-3">3</h3>
                  </div> {/* end card-body*/}
                </div> {/* end card*/}
              </div> {/* end col*/}
              <div className="col">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-end">
                      <i className="mdi mdi-newspaper-variant widget-icon" />
                    </div>
                    <h5 className="text-muted fw-normal mt-0" title="Average Revenue">Services
                      Claimed</h5>
                    <h3 className="mt-3 mb-3">4</h3>
                  </div> {/* end card-body*/}
                </div> {/* end card*/}
              </div> {/* end col*/}
            </div> {/* end row */}
          </div> {/* end col */}
        </div>
        {/* end row */}
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4 className="page-title">Appointments</h4>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="tab-content">
                      <div className="tab-pane show active" id="events-ongoing" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-time&quot;, &quot;js-lists-values-user-theme&quot;]">
                        <div className="search-form search-form--light col-lg-4"><input type="text" className="form-control search" placeholder="Search Name, Date, or Time" />
                        </div><table id="table table-centered" className="table-responsive mb-0">
                        </table><table id className="table dt-responsive nowrap w-100">
                          <thead>
                            <tr>
                              <th style={{ width: 250 }}>
                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-date">Date</a>
                              </th>
                              <th style={{ width: 250 }}>
                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-time">Time</a>
                              </th>
                              <th style={{ width: 320 }}>
                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                              </th>
                              <th style={{ width: 320 }}>
                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-theme">Status</a>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list" id="staff02">
                            <tr>
                              <td><span className="js-lists-values-user-date">09/13/2022</span>
                              </td>
                              <td><span className="js-lists-values-user-time">9:00
                                AM</span>
                              </td>
                              <td>
                                <div className="media align-items-center">
                                  <div className="media-body d-flex flex-column">
                                    <strong className="js-lists-values-user-name">Vaccination
                                      Appointment</strong>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="js-lists-values-user-theme">Pending</span>
                              </td>
                            </tr>
                            <tr>
                              <td><span className="js-lists-values-user-date">09/28/2022</span>
                              </td>
                              <td><span className="js-lists-values-user-time">8:00
                                AM</span>
                              </td>
                              <td className="mb-3">
                                <div className="media align-items-center">
                                  <div className="media-body d-flex flex-column">
                                    <strong className="js-lists-values-user-name">Consultation
                                      Appointment</strong>
                                  </div>
                                </div>
                              </td>
                              <td>
                                Pending
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <h3 className="text-center">Brgy iHealth
                    </h3>
                    <ul className="ps-3">
                      <li className="text-muted mb-0">
                        iHealth is a Barangay Health Center Management System where you can
                        schedule an appointment for vaccination, consultation, request
                        health certificates, etc.
                      </li>
                    </ul>
                  </div>
                </div>
              </div> {/* end card-body*/}
            </div> {/* end card*/}
          </div> {/* end col*/}
        </div>{/* end row */}
      </div>{/* container */}

    </React.Fragment>
  )
}
