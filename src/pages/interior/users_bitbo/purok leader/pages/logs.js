import React from 'react'

export default function BITBoPurokLeaderLogs() {
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
                              <div className="tab-content">
                                  <div className="tab-pane show active" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-date&quot;, &quot;js-lists-values-user-time&quot;]">
                                      <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search Date or Time" />
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
                                                      <div>
                                                          Approved Blotter Request of Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td><span className="js-lists-values-user-date">2018/10/18</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">04:24:11</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request of Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td><span className="js-lists-values-user-date">2021/11/31</span>
                                                  </td>
                                                  <td><span className="js-lists-values-user-time">07:48:27</span>
                                                  </td>
                                                  <td>
                                                      <div>
                                                          Approved Blotter Request of Juan Dela Cruz
                                                      </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div> {/* end table*/}
                              </div> {/* end tab-content*/}
                          </div> {/* end card body*/}
                      </div> {/* end card */}
                  </div>{/* end col*/}
              </div>{/* end row*/}
          </div> {/* container */}

    </React.Fragment>
  )
}
