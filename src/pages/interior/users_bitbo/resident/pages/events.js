import React from 'react'

export default function BITBoResidentEvents() {
  return (
    <React.Fragment>
          <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="page-title-box">
                          <h4 className="page-title">Events</h4>
                      </div>
                  </div>
              </div>
              {/* end page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="card">
                          <div className="card-body">
                              <div className="row">
                                  <div className="col-lg-3">
                                      <div className="d-none d-xl-block">
                                          <h5 className="text-left">Theme</h5>
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
                                              <img src="../../assets/images/people.jpg" alt className="img-fluid" />
                                          </div>
                                      </div>
                                  </div> {/* end col*/}
                                  <div className="col-lg-9">
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
                                                              <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-theme">Type</a>
                                                          </th>
                                                          <th style={{ width: 100 }}>Action</th>
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
                                                                          Korique</strong>
                                                                  </div>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <span className="js-lists-values-user-theme">Brgy.
                                                                  Beauty Contest</span>
                                                          </td>
                                                          <td className="table-action">
                                                              <a href="javascript: void(0);" className="action-icon">
                                                                  <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#event-view-modal"><i className="mdi mdi-eye" />
                                                                  </button></a>
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
                                                                          Korik</strong>
                                                                  </div>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              Brgy. Fiesta
                                                          </td>
                                                          <td className="table-action">
                                                              <a href="javascript: void(0);" className="action-icon">
                                                                  <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#event-view-modal"><i className="mdi mdi-eye" />
                                                                  </button></a>
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
                                                                          Korak</strong>
                                                                  </div>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              Brgy. Fiesta
                                                          </td>
                                                          <td className="table-action">
                                                              <a href="javascript: void(0);" className="action-icon">
                                                                  <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#event-view-modal"><i className="mdi mdi-eye" />
                                                                  </button></a>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
                                  </div> {/* end col */}
                              </div> {/* end row */}
                          </div> {/* end card body*/}
                      </div> {/* end card */}
                  </div> {/* end col-12 */}
              </div> {/* end row */}
              <div className="row">
                  <div className="col-12">
                      <div className="card">
                          <div className="card-body">
                              <div className="row">
                                  <div className="col">
                                      <div className="tab-content">
                                          <h5 className="text-left">My Joined Events</h5><br />
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
                                                              <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-theme">Type</a>
                                                          </th>
                                                          <th style={{ width: 100 }}>Action</th>
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
                                                                          Korique</strong>
                                                                  </div>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <span className="js-lists-values-user-theme">Brgy.
                                                                  Beauty Contest</span>
                                                          </td>
                                                          <td className="table-action">
                                                              <a href="javascript: void(0);" className="action-icon">
                                                                  <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#myevent-view-modal"><i className="mdi mdi-eye" />
                                                                  </button></a>
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
                                                                          Korik</strong>
                                                                  </div>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              Brgy. Fiesta
                                                          </td>
                                                          <td className="table-action">
                                                              <a href="javascript: void(0);" className="action-icon">
                                                                  <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#myevent-view-modal"><i className="mdi mdi-eye" />
                                                                  </button></a>
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
                                                                          Korak</strong>
                                                                  </div>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              Brgy. Fiesta
                                                          </td>
                                                          <td className="table-action">
                                                              <a href="javascript: void(0);" className="action-icon">
                                                                  <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#myevent-view-modal"><i className="mdi mdi-eye" />
                                                                  </button></a>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
                                  </div> {/* end col */}
                              </div> {/* end row */}
                          </div> {/* end card body*/}
                      </div> {/* end card */}
                  </div> {/* end col-12 */}
              </div> {/* end row */}
              {/*MODALS*/}
              {/* View Event Modal */}
              <div id="event-view-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="warning-header-modalLabel">Event Details</h4>
                          </div>
                          <div className="modal-body">
                              <form>
                                  <p><strong>Name: </strong>iTHINK Korique</p>
                                  <p><strong>Type: </strong>Beauty Contest</p>
                                  <p><strong>Theme: </strong>iTHINK Korique: Good Action, Risk Prevention</p>
                                  <p><strong>Date: </strong>2022/08/01</p>
                                  <p><strong>Time: </strong>7:30 AM - 10:00 AM</p>
                                  <p><strong>Instructions: </strong>Kailagan p maganda kau saka beautiful</p>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#event-join-modal">Join Event</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* My Event Modal */}
              <div id="myevent-view-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header modal-colored-header bg-primary">
                              <h4 className="modal-title" id="warning-header-modalLabel">Event Details</h4>
                          </div>
                          <div className="modal-body">
                              <form>
                                  <p><strong>Name: </strong>iTHINK Korique</p>
                                  <p><strong>Type: </strong>Beauty Contest</p>
                                  <p><strong>Theme: </strong>iTHINK Korique: Good Action, Risk Prevention</p>
                                  <p><strong>Date: </strong>2022/08/01</p>
                                  <p><strong>Time: </strong>7:30 AM - 10:00 AM</p>
                                  <p><strong>Instructions: </strong>Kailagan p maganda kau saka beautiful</p>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
              {/* Join Event Modal */}
              <div id="event-join-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-sm">
                      <div className="modal-content modal-filled bg-success">
                          <div className="modal-body p-4">
                              <div className="text-center">
                                  <i className="dripicons-question h1" />
                                  <h4 className="mt-2">Join Event Confirmation</h4>
                                  <p className="mt-3">Are you sure you want to join this event?</p>
                                  <button type="button" className="btn btn-outline-light my-2" data-bs-dismiss="modal">No</button>
                                  <button type="button" className="btn btn-light" data-bs-dismiss="modal" id="toastr-joinevent">Yes</button>
                              </div>
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
          </div> {/* container */}
    </React.Fragment>
  )
}
