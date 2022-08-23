import React from 'react'

export default function BrgyOfficialDashboard() {
  return (
    <React.Fragment>
          <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                  <div className="col-12">
                      <div className="page-title-box">
                          <div className="page-title-right">
                              <form className="d-flex">
                                  <div className="input-group">
                                      <input type="text" className="form-control form-control-light" id="dash-daterange" />
                                      <span className="input-group-text bg-primary border-primary text-white">
                                          <i className="mdi mdi-calendar-range font-13" />
                                      </span>
                                  </div>
                                  <a href="javascript: void(0);" className="btn btn-primary ms-2">
                                      <i className="mdi mdi-autorenew" />
                                  </a>
                                  <a href="javascript: void(0);" className="btn btn-primary ms-1">
                                      <i className="mdi mdi-filter-variant" />
                                  </a>
                              </form>
                          </div>
                          <h4 className="page-title">Dashboard</h4>
                      </div>
                  </div>
              </div>
              {/* end page title */}
              <div className="row">
                  <div className="col-xl-5 col-lg-6">
                      <div className="row">
                          <div className="col-lg-4">
                              <div className="card widget-flat">
                                  <div className="card-body">
                                      <div className="float-end">
                                          <i className="mdi mdi-account-multiple widget-icon" />
                                      </div>
                                      <h5 className="text-muted fw-normal mt-0" title="Number of Customers">Ayuda
                                          Distributed</h5>
                                      <h3 className="mt-3 mb-3">1,254</h3>
                                      <p className="mb-0 text-muted"><br />
                                          <span className="text-nowrap">This month of August</span>
                                      </p>
                                  </div> {/* end card-body*/}
                              </div> {/* end card*/}
                          </div> {/* end col*/}
                          <div className="col-lg-4">
                              <div className="card widget-flat">
                                  <div className="card-body">
                                      <div className="float-end">
                                          <i className="mdi mdi-newspaper-variant widget-icon" />
                                      </div>
                                      <h5 className="text-muted fw-normal mt-0" title="Number of Orders">
                                          Certificates<br /><br /></h5>
                                      <h3 className="mt-3 mb-3">5,543</h3>
                                      <p className="mb-0 text-muted">
                                          <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold" />
                                              1.08%</span>
                                          <span className="text-nowrap">Since last month</span>
                                      </p>
                                  </div> {/* end card-body*/}
                              </div> {/* end card*/}
                          </div> {/* end col*/}
                          <div className="col-lg-4">
                              <div className="card widget-flat">
                                  <div className="card-body">
                                      <div className="float-end">
                                          <i className="mdi mdi-message-alert-outline widget-icon" />
                                      </div>
                                      <h5 className="text-muted fw-normal mt-0" title="Number of Orders">Blotter
                                          Reports<br /><br /></h5>
                                      <h3 className="mt-3 mb-3">543</h3>
                                      <p className="mb-0 text-muted">
                                          <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold" />
                                              1.08%</span>
                                          <span className="text-nowrap">Since last month</span>
                                      </p>
                                  </div> {/* end card-body*/}
                              </div> {/* end card*/}
                          </div> {/* end col*/}
                      </div> {/* end row */}
                      <div className="row">
                          <div className="col-lg-6">
                              <div className="card widget-flat">
                                  <div className="card-body">
                                      <div className="float-end">
                                          <i className="mdi mdi-account-multiple widget-icon" />
                                      </div>
                                      <h5 className="text-muted fw-normal mt-0" title="Average Revenue">Population
                                      </h5>
                                      <h3 className="mt-3 mb-3">36,254</h3>
                                      <p className="mb-0 text-muted">
                                          <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold" />
                                              7.00%</span>
                                          <span className="text-nowrap">Since last month</span>
                                      </p>
                                  </div> {/* end card-body*/}
                              </div> {/* end card*/}
                          </div> {/* end col*/}
                          <div className="col-lg-6">
                              <div className="card widget-flat">
                                  <div className="card-body">
                                      <div className="float-end">
                                          <i className="mdi mdi-home-account widget-icon" />
                                      </div>
                                      <h5 className="text-muted fw-normal mt-0" title="Growth">Households</h5>
                                      <h3 className="mt-3 mb-3">15,122</h3>
                                      <p className="mb-0 text-muted">
                                          <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold" />
                                              1.87%</span>
                                          <span className="text-nowrap">Since last month</span>
                                      </p>
                                  </div> {/* end card-body*/}
                              </div> {/* end card*/}
                          </div> {/* end col*/}
                      </div> {/* end row */}
                  </div> {/* end col */}
                  <div className="col-xl-7 col-lg-6">
                      <div className="card card-h-100">
                          <div className="card-body">
                              <div className="dropdown float-end">
                                  <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                      <i className="mdi mdi-dots-vertical" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end">
                                      {/* item*/}
                                      <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
                                      {/* item*/}
                                      <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
                                      {/* item*/}
                                      <a href="javascript:void(0);" className="dropdown-item">Profit</a>
                                      {/* item*/}
                                      <a href="javascript:void(0);" className="dropdown-item">Action</a>
                                  </div>
                              </div>
                              <h4 className="header-title mb-3">BRGY. FUND MONTHLY SEGMENTATION</h4>
                              <div dir="ltr">
                                  <div id="high-performing-product" className="apex-charts" data-colors="#203469,#e3eaef" />
                              </div>
                          </div> {/* end card-body*/}
                      </div> {/* end card*/}
                  </div> {/* end col */}
              </div>
              {/* end row */}
              <div className="row">
                  <div className="col-lg-8">
                      <div className="card">
                          <div className="card-body">
                              <div className="dropdown float-end">
                                  <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                      <i className="mdi mdi-dots-vertical" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end">
                                      {/* item*/}
                                      <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
                                      {/* item*/}
                                      <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
                                      {/* item*/}
                                      <a href="javascript:void(0);" className="dropdown-item">Profit</a>
                                      {/* item*/}
                                      <a href="javascript:void(0);" className="dropdown-item">Action</a>
                                  </div>
                              </div>
                              <h4 className="header-title mb-3">Revenue</h4>
                              <div className="chart-content-bg">
                                  <div className="row text-center">
                                      <div className="col-md-6">
                                          <p className="text-muted mb-0 mt-3">This Year</p>
                                          <h2 className="fw-normal mb-3">
                                              <small className="mdi mdi-checkbox-blank-circle text-primary align-middle me-1" />
                                              <span>$108,254</span>
                                          </h2>
                                      </div>
                                      <div className="col-md-6">
                                          <p className="text-muted mb-0 mt-3">Previous Year</p>
                                          <h2 className="fw-normal mb-3">
                                              <small className="mdi mdi-checkbox-blank-circle text-success align-middle me-1" />
                                              <span>$69,524</span>
                                          </h2>
                                      </div>
                                  </div>
                              </div>
                              <div className="dash-item-overlay d-none d-md-block" dir="ltr">
                                  <h5>This Month's Earning: $2,562.30</h5>
                                  <p className="text-muted font-13 mb-3 mt-2">August 2022 have a lot of fund raising
                                      activities made our Brgy. Fund increased.</p>
                                  <a href="javascript: void(0);" className="btn btn-outline-primary">View Statements
                                      <i className="mdi mdi-arrow-right ms-2" />
                                  </a>
                              </div>
                              <div dir="ltr">
                                  <div id="revenue-chart" className="apex-charts mt-3" data-colors="#203469,#0acf97">
                                  </div>
                              </div>
                          </div> {/* end card-body*/}
                      </div> {/* end card*/}
                  </div> {/* end col*/}
                  <div className="col-lg-4">
                      <div className="card">
                          <div className="card-body">
                              <div className="dropdown float-end">
                                  <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                      <i className="mdi mdi-dots-vertical" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-end">
                                      {/* item*/}
                                      <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
                                      {/* item*/}
                                      <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
                                      {/* item*/}
                                      <a href="javascript:void(0);" className="dropdown-item">Profit</a>
                                      {/* item*/}
                                      <a href="javascript:void(0);" className="dropdown-item">Action</a>
                                  </div>
                              </div>
                              <h4 className="header-title">Total Residents</h4>
                              <div id="average-sales" className="apex-charts mb-4 mt-4" data-colors="#203469,#0acf97,#fa5c7c,#6b5eae" />
                              <div className="chart-widget-list">
                                  <p>
                                      <i className="mdi mdi-square text-primary" />
                                      <span className="float-end">12,456</span> Youths
                                  </p>
                                  <p>
                                      <i className="mdi mdi-square text-success" /> Adults
                                      <span className="float-end">15,234</span>
                                  </p>
                                  <p>
                                      <i className="mdi mdi-square text-danger" /> Senior Citizens
                                      <span className="float-end">10,231</span>
                                  </p>
                                  <p className="mb-0">
                                      <i className="mdi mdi-square text-purple" /> New Borns
                                      <span className="float-end">4,452</span>
                                  </p>
                              </div>
                          </div> {/* end card-body*/}
                      </div> {/* end card*/}
                  </div> {/* end col*/}
              </div>{/* end row */}
          </div>{/* container */}

    </React.Fragment>
  )
}
