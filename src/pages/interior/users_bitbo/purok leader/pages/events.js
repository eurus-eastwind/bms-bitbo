import React from 'react'

export default function BITBoPurokLeaderEvents() {
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
                                      <div id="external-events" className="m-t-20">
                                          <div className="d-grid">
                                              <button className="btn btn-lg font-16 btn-success" id="btn-new-event" data-bs-toggle="modal" data-bs-target="#event-create-modal"><i className="mdi mdi-plus-circle-outline" /> Create New
                                                  Event / Project</button>
                                          </div>
                                          <br />
                                          <div className="external-event bg-primary-lighten text-primary" data-class="bg-primary">
                                              <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle" />Events
                                          </div>
                                          <div className="external-event bg-info-lighten text-info" data-class="bg-info">
                                              <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle" />Projects
                                          </div>
                                      </div>
                                      <div className="mt-5 d-none d-xl-block">
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
                                      <div className="mt-4 mt-lg-0">
                                          <div id="calendar" />
                                      </div>
                                  </div> {/* end col */}
                                  <div className="col-12">
                                      <div className="card-body">
                                          <ul className="nav nav-pills bg-nav-pills mb-3">
                                              <li className="nav-item">
                                                  <a href="#buttons-table-events" data-bs-toggle="tab" aria-expanded="false" className="nav-link active">
                                                      Events
                                                  </a>
                                              </li>
                                              <li className="nav-item">
                                                  <a href="#buttons-table-projects" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                                      Projects
                                                  </a>
                                              </li>
                                          </ul> {/* end nav*/}
                                          <div className="tab-content">
                                              <div className="tab-pane show active" id="buttons-table-events">
                                                  <ul className="nav nav-tabs nav-bordered mb-3">
                                                      <li className="nav-item">
                                                          <a href="#events-ongoing" data-bs-toggle="tab" aria-expanded="false" className="nav-link active">
                                                              <i className="mdi mdi-home-variant d-md-none d-block" />
                                                              <span className="d-none d-md-block">On Going</span>
                                                          </a>
                                                      </li>
                                                      <li className="nav-item">
                                                          <a href="#events-done" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                                              <i className="mdi mdi-account-circle d-md-none d-block" />
                                                              <span className="d-none d-md-block">Done</span>
                                                          </a>
                                                      </li>
                                                  </ul>
                                                  <div className="tab-content">
                                                      <div className="tab-pane show active" id="events-ongoing" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-time&quot;, &quot;js-lists-values-user-theme&quot;, &quot;js-lists-values-type&quot;]">
                                                          <div className="search-form search-form--light col-lg-3">
                                                              <input type="text" className="form-control search" placeholder="Search Name, Date, Time or Theme" />
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
                                                                          <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-type">Type</a>
                                                                      </th>
                                                                      <th style={{ width: 320 }}>
                                                                          <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-theme">Theme</a>
                                                                      </th>
                                                                      <th>Action</th>
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
                                                                          <span className="js-lists-values-user-type">Brgy.
                                                                              Beauty Contest</span>
                                                                      </td>
                                                                      <td>
                                                                          <span className="js-lists-values-user-theme">ithink
                                                                              korak madam</span>
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
                                                                          <span className="js-lists-values-user-type">Brgy.
                                                                              Beauty Contest</span>
                                                                      </td>
                                                                      <td>
                                                                          <span className="js-lists-values-user-theme">ithink
                                                                              korak madam</span>
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
                                                                          <span className="js-lists-values-user-type">Brgy.
                                                                              Beauty Contest</span>
                                                                      </td>
                                                                      <td>
                                                                          <span className="js-lists-values-user-theme">ithink
                                                                              korak madam</span>
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
                                                      <div className="tab-pane" id="events-done" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-time&quot;, &quot;js-lists-values-user-theme&quot;]">
                                                          <div className="search-form search-form--light col-lg-3">
                                                              <input type="text" className="form-control search" placeholder="Search Name, Date, Time or Theme" />
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
                                                                          <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-type">Type</a>
                                                                      </th>
                                                                      <th style={{ width: 320 }}>
                                                                          <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-theme">Theme</a>
                                                                      </th>
                                                                      <th>Action</th>
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
                                                                          <span className="js-lists-values-user-type">Brgy.
                                                                              Beauty Contest</span>
                                                                      </td>
                                                                      <td>
                                                                          <span className="js-lists-values-user-theme">ithink
                                                                              korak madam</span>
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
                                                                          <span className="js-lists-values-user-type">Brgy.
                                                                              Beauty Contest</span>
                                                                      </td>
                                                                      <td>
                                                                          <span className="js-lists-values-user-theme">ithink
                                                                              korak madam</span>
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
                                                                          <span className="js-lists-values-user-type">Brgy.
                                                                              Beauty Contest</span>
                                                                      </td>
                                                                      <td>
                                                                          <span className="js-lists-values-user-theme">ithink
                                                                              korek madam</span>
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
                                              </div> {/* end events*/}
                                              <div className="tab-pane" id="buttons-table-projects">
                                                  <ul className="nav nav-tabs nav-bordered mb-3">
                                                      <li className="nav-item">
                                                          <a href="#projects-ongoing" data-bs-toggle="tab" aria-expanded="false" className="nav-link active">
                                                              <i className="mdi mdi-home-variant d-md-none d-block" />
                                                              <span className="d-none d-md-block">On Going</span>
                                                          </a>
                                                      </li>
                                                      <li className="nav-item">
                                                          <a href="#projects-done" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                                              <i className="mdi mdi-account-circle d-md-none d-block" />
                                                              <span className="d-none d-md-block">Done</span>
                                                          </a>
                                                      </li>
                                                  </ul>
                                                  <div className="tab-content">
                                                      <div className="tab-pane show active" id="projects-ongoing" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-time&quot;, &quot;js-lists-values-user-theme&quot;]">
                                                          <div className="search-form search-form--light col-lg-3">
                                                              <input type="text" className="form-control search" placeholder="Search Name, Date, Time or Theme" />
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
                                                                          <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-type">Type</a>
                                                                      </th>
                                                                      <th style={{ width: 320 }}>
                                                                          <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-theme">Theme</a>
                                                                      </th>
                                                                      <th>Action</th>
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
                                                                          <span className="js-lists-values-user-type">Brgy.
                                                                              Beauty Contest</span>
                                                                      </td>
                                                                      <td>
                                                                          <span className="js-lists-values-user-theme">ithink
                                                                              korak madam</span>
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
                                                                          <span className="js-lists-values-user-type">Brgy.
                                                                              Beauty Contest</span>
                                                                      </td>
                                                                      <td>
                                                                          <span className="js-lists-values-user-theme">ithink
                                                                              korak madam</span>
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
                                                                          <span className="js-lists-values-user-type">Brgy.
                                                                              Beauty Contest</span>
                                                                      </td>
                                                                      <td>
                                                                          <span className="js-lists-values-user-theme">ithink
                                                                              korak madam</span>
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
                                                      <div className="tab-pane" id="projects-done" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-time&quot;, &quot;js-lists-values-user-theme&quot;]">
                                                          <div className="search-form search-form--light col-lg-3">
                                                              <input type="text" className="form-control search" placeholder="Search Name, Date, Time or Theme" />
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
                                                                          <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-type">Type</a>
                                                                      </th>
                                                                      <th style={{ width: 320 }}>
                                                                          <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-theme">Theme</a>
                                                                      </th>
                                                                      <th>Action</th>
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
                                                                          <span className="js-lists-values-user-type">Brgy.
                                                                              Beauty Contest</span>
                                                                      </td>
                                                                      <td>
                                                                          <span className="js-lists-values-user-theme">ithink
                                                                              korak madam</span>
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
                                                                          <span className="js-lists-values-user-type">Brgy.
                                                                              Beauty Contest</span>
                                                                      </td>
                                                                      <td>
                                                                          <span className="js-lists-values-user-theme">ithink
                                                                              korak madam</span>
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
                                                                          <span className="js-lists-values-user-type">Brgy.
                                                                              Beauty Contest</span>
                                                                      </td>
                                                                      <td>
                                                                          <span className="js-lists-values-user-theme">ithink
                                                                              korak madam</span>
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
                                              </div> {/* end events*/}
                                          </div> {/* end tab-content*/}
                                      </div> {/* end card body*/}
                                  </div>{/* end col*/}
                              </div> {/* end row */}
                          </div> {/* end card body*/}
                      </div> {/* end card */}
                      {/* Add New Event MODAL */}
                      <div className="modal fade" id="event-modal" tabIndex={-1}>
                          <div className="modal-dialog">
                              <div className="modal-content">
                              </div> {/* end modal-content*/}
                          </div> {/* end modal dialog*/}
                      </div>{/* end modal*/}
                  </div>{/* end col-12 */}
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
                          </div>
                      </div>{/* /.modal-content */}
                  </div>{/* /.modal-dialog */}
              </div>{/* /.modal */}
          </div>{/* container */}

    </React.Fragment>
  )
}
