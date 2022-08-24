import React from 'react'

export default function AdminLogs() {
  return (
    <React.Fragment>
          <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="page-title-box">
                          <h4 className="page-title">Logs</h4>
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
                                      <a href="#buttons-table-admins" data-bs-toggle="tab" aria-expanded="true" className="nav-link active">
                                          Admin
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#buttons-table-residents" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                          Residents
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#buttons-table-purokleaders" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                          Purok Leaders
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#buttons-table-healthworkers" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                          Health Workers
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#buttons-table-staffs" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                          Staffs
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#buttons-table-brgyofficials" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                          Brgy. Officials
                                      </a>
                                  </li>
                              </ul> {/* end nav*/}
                              <div className="tab-content">
                                  <div className="tab-pane show active" id="buttons-table-admins" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-time&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search User, Date or Time" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-date">Date</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-time">Time</a>
                                                  </th>
                                                  <th>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Juan Dela
                                                              Cruz</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022/08/09</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">18:56:57</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="mb-3">
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Crisostomo
                                                              Ibarra</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2018/10/18</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">04:24:11</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Maria
                                                              Clara</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2021/11/31</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">07:48:27</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end admin*/}
                                  <div className="tab-pane" id="buttons-table-residents" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-time&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search User, Date or Time" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-date">Date</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-time">Time</a>
                                                  </th>
                                                  <th>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Juan Dela
                                                              Cruz</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022/08/09</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">18:56:57</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="mb-3">
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Krissy
                                                              Ibarra</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2018/10/18</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">04:24:11</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Maria
                                                              Clara</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2021/11/31</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">07:48:27</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end residents*/}
                                  <div className="tab-pane" id="buttons-table-purokleaders" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-time&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search User, Date or Time" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-date">Date</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-time">Time</a>
                                                  </th>
                                                  <th>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Juan Dela
                                                              Cruz</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022/08/09</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">18:56:57</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="mb-3">
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Krissy
                                                              Ibarra</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2018/10/18</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">04:24:11</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Maria
                                                              Labo</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2021/11/31</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">07:48:27</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end purokleaders*/}
                                  <div className="tab-pane" id="buttons-table-healthworkers" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-time&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search User, Date or Time" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-date">Date</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-time">Time</a>
                                                  </th>
                                                  <th>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Juan Dela
                                                              Costa</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022/08/09</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">18:56:57</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="mb-3">
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Krissy
                                                              Ibarra</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2018/10/18</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">04:24:11</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Costa
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Maria
                                                              Clara</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2021/11/31</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">07:48:27</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end healthworkers*/}
                                  <div className="tab-pane" id="buttons-table-staffs" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-time&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search User, Date or Time" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-date">Date</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-time">Time</a>
                                                  </th>
                                                  <th>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Juan Dela
                                                              Cruz</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022/08/09</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">18:56:57</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="mb-3">
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Krissy
                                                              Aquino</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2018/10/18</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">04:24:11</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Maria
                                                              Clara</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2021/11/31</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">07:48:27</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end staffs*/}
                                  <div className="tab-pane" id="buttons-table-brgyofficials" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-time&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search User, Date or Time" />
                                      </div><table id="table table-centered" className="table-responsive mb-0">
                                      </table><table id className="table dt-responsive nowrap w-100">
                                          <thead>
                                              <tr>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-date">Date</a>
                                                  </th>
                                                  <th style={{ width: 250 }}>
                                                      <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-time">Time</a>
                                                  </th>
                                                  <th>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="list" id="staff02">
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Juan
                                                              Cruz</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2022/08/09</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">18:56:57</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="mb-3">
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Krissy
                                                              Aquino</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2018/10/18</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">04:24:11</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div className="media align-items-center">
                                                          <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">Maria
                                                              Pelita</strong></div>
                                                      </div>
                                                  </td>
                                                  <td><span className="js-lists-values-user-date">2021/11/31</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">07:48:27</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request by Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end brgyofficials*/}
                              </div> {/* end tab-content*/}
                          </div> {/* end card body*/}
                      </div> {/* end card */}
                  </div>{/* end col*/}
              </div>{/* end row*/}
          </div> {/* container */}

    </React.Fragment>
  )
}
