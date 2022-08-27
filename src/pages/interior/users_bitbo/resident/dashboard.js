import React from 'react'

export default function ResidentDashboard() {
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
                          <div className="col-lg-3">
                              <div className="card widget-flat">
                                  <div className="card-body">
                                      <div className="float-end">
                                          <i className="mdi mdi-newspaper-variant widget-icon" />
                                      </div>
                                      <h5 className="text-muted fw-normal mt-0" title="Number of Customers">Certificates Requested</h5>
                                      <h3 className="mt-3 mb-3">3</h3>
                                  </div> {/* end card-body*/}
                              </div> {/* end card*/}
                          </div> {/* end col*/}
                          <div className="col-lg-3">
                              <div className="card widget-flat">
                                  <div className="card-body">
                                      <div className="float-end">
                                          <i className="mdi mdi-message-alert-outline widget-icon" />
                                      </div>
                                      <h5 className="text-muted fw-normal mt-0" title="Number of Orders">Blotter Reported<br /></h5>
                                      <h3 className="mt-3 mb-3">13</h3>
                                  </div> {/* end card-body*/}
                              </div> {/* end card*/}
                          </div> {/* end col*/}
                          <div className="col-lg-3">
                              <div className="card widget-flat">
                                  <div className="card-body">
                                      <div className="float-end">
                                          <i className="mdi mdi-trophy widget-icon" />
                                      </div>
                                      <h5 className="text-muted fw-normal mt-0" title="Average Revenue">Events Joined</h5>
                                      <h3 className="mt-3 mb-3">54</h3>
                                  </div> {/* end card-body*/}
                              </div> {/* end card*/}
                          </div> {/* end col*/}
                          <div className="col-lg-3">
                              <div className="card widget-flat">
                                  <div className="card-body">
                                      <div className="float-end">
                                          <i className="mdi mdi-home-account widget-icon" />
                                      </div>
                                      <h5 className="text-muted fw-normal mt-0" title="Growth">Ayuda Received</h5>
                                      <h3 className="mt-3 mb-3">21</h3>
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
                              <h4 className="page-title">Events</h4>
                              <div className="row">
                                  <div className="col-lg-8">
                                      <div className="tab-content">
                                          <div className="tab-pane show active" id="events-ongoing" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-time&quot;, &quot;js-lists-values-user-theme&quot;]">
                                              <div className="search-form search-form--light col-lg-4"><input type="text" className="form-control search" placeholder="Search Name, Date, Time or Theme" />
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
                                                              <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-theme">Theme</a>
                                                          </th>
                                                      </tr>
                                                  </thead>
                                                  <tbody className="list" id="staff02">
                                                      <tr>
                                                          <td><span className="js-lists-values-user-date">2022/08/09</span>
                                                          </td>
                                                          <td><span className="js-lists-values-user-time">18:56:57</span>
                                                          </td>
                                                          <td>
                                                              <div className="media align-items-center">
                                                                  <div className="media-body d-flex flex-column">
                                                                      <strong className="js-lists-values-user-name">iThink
                                                                          Korique</strong></div>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <span className="js-lists-values-user-theme">Brgy.
                                                                  Beauty Contest</span>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td><span className="js-lists-values-user-date">2018/10/18</span>
                                                          </td>
                                                          <td><span className="js-lists-values-user-time">04:24:11</span>
                                                          </td>
                                                          <td className="mb-3">
                                                              <div className="media align-items-center">
                                                                  <div className="media-body d-flex flex-column">
                                                                      <strong className="js-lists-values-user-name">iThink
                                                                          Korik</strong></div>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              Brgy. Fiesta
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td>
                                                              <span className="js-lists-values-user-date">2021/11/31</span>
                                                          </td>
                                                          <td>
                                                              <span className="js-lists-values-user-time">07:48:27</span>
                                                          </td>
                                                          <td>
                                                              <div className="media align-items-center">
                                                                  <div className="media-body d-flex flex-column">
                                                                      <strong className="js-lists-values-user-name">iThink
                                                                          Korak</strong></div>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              Brgy. Fiesta
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-4">
                                      <h3 className="text-center">"iThink Korique: Good Action, Risk Prevention"
                                      </h3>
                                      <ul className="ps-3">
                                          <li className="text-muted mb-0">
                                              This theme is mainly pertains executing good actions will lead
                                              to prevention of any risks such as hazards in reality and
                                              virtually.
                                          </li>
                                      </ul>
                                      <div className="text-md-end mt-3 mt-md-0">
                                          <img src="../../../../public/assets/images/people.jpg" alt className="img-fluid" />
                                      </div>
                                      <div className="modal-footer">
                                          <a href="events.html">
                                              <button type="button" className="btn btn-warning">See Details</button>
                                          </a>
                                      </div>
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
