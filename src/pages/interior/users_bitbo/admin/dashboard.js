import React from 'react'

export default function AdminDashboard() {
    return (
        <React.Fragment>
            <div class="container-fluid">

                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box">
                            <div class="page-title-right">
                                <form class="d-flex">
                                    <div class="input-group">
                                        <input type="text" class="form-control form-control-light" id="dash-daterange" />
                                        <span class="input-group-text bg-primary border-primary text-white">
                                            <i class="mdi mdi-calendar-range font-13"></i>
                                        </span>
                                    </div>
                                    <a href="javascript: void(0);" class="btn btn-primary ms-2">
                                        <i class="mdi mdi-autorenew"></i>
                                    </a>
                                    <a href="javascript: void(0);" class="btn btn-primary ms-1">
                                        <i class="mdi mdi-filter-variant"></i>
                                    </a>
                                </form>
                            </div>
                            <h4 class="page-title">Dashboard</h4>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-5 col-lg-6">

                        <div class="row">
                            <div class="col-lg-4">
                                <div class="card widget-flat">
                                    <div class="card-body">
                                        <div class="float-end">
                                            <i class="mdi mdi-account-multiple widget-icon"></i>
                                        </div>
                                        <h5 class="text-muted fw-normal mt-0" title="Number of Customers">Ayuda Distributed</h5>
                                        <h3 class="mt-3 mb-3">1,254</h3>
                                        <p class="mb-0 text-muted"><br />
                                            <span class="text-nowrap">This month of August</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="card widget-flat">
                                    <div class="card-body">
                                        <div class="float-end">
                                            <i class="mdi mdi-newspaper-variant widget-icon"></i>
                                        </div>
                                        <h5 class="text-muted fw-normal mt-0" title="Number of Orders">Certificates<br /><br /></h5>
                                        <h3 class="mt-3 mb-3">5,543</h3>
                                        <p class="mb-0 text-muted">
                                            <span class="text-danger me-2"><i class="mdi mdi-arrow-down-bold"></i> 1.08%</span>
                                            <span class="text-nowrap">Since last month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="card widget-flat">
                                    <div class="card-body">
                                        <div class="float-end">
                                            <i class="mdi mdi-message-alert-outline widget-icon"></i>
                                        </div>
                                        <h5 class="text-muted fw-normal mt-0" title="Number of Orders">Blotter Reports<br /><br /></h5>
                                        <h3 class="mt-3 mb-3">543</h3>
                                        <p class="mb-0 text-muted">
                                            <span class="text-danger me-2"><i class="mdi mdi-arrow-down-bold"></i> 1.08%</span>
                                            <span class="text-nowrap">Since last month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="card widget-flat">
                                    <div class="card-body">
                                        <div class="float-end">
                                            <i class="mdi mdi-account-multiple widget-icon"></i>
                                        </div>
                                        <h5 class="text-muted fw-normal mt-0" title="Average Revenue">Population</h5>
                                        <h3 class="mt-3 mb-3">36,254</h3>
                                        <p class="mb-0 text-muted">
                                            <span class="text-success me-2"><i class="mdi mdi-arrow-up-bold"></i> 7.00%</span>
                                            <span class="text-nowrap">Since last month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="card widget-flat">
                                    <div class="card-body">
                                        <div class="float-end">
                                            <i class="mdi mdi-home-account widget-icon"></i>
                                        </div>
                                        <h5 class="text-muted fw-normal mt-0" title="Growth">Households</h5>
                                        <h3 class="mt-3 mb-3">15,122</h3>
                                        <p class="mb-0 text-muted">
                                            <span class="text-success me-2"><i class="mdi mdi-arrow-up-bold"></i> 1.87%</span>
                                            <span class="text-nowrap">Since last month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-7 col-lg-6">
                        <div class="card card-h-100">
                            <div class="card-body">
                                <div class="dropdown float-end">
                                    <a href="#" class="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="mdi mdi-dots-vertical"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a href="javascript:void(0);" class="dropdown-item">Sales Report</a>
                                        <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                        <a href="javascript:void(0);" class="dropdown-item">Profit</a>
                                        <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                    </div>
                                </div>
                                <h4 class="header-title mb-3">BRGY. FUND MONTHLY SEGMENTATION</h4>

                                <div dir="ltr">
                                    <div id="high-performing-product" class="apex-charts" data-colors="#203469,#e3eaef"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-body">
                                <div class="dropdown float-end">
                                    <a href="#" class="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="mdi mdi-dots-vertical"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a href="javascript:void(0);" class="dropdown-item">Sales Report</a>
                                        <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                        <a href="javascript:void(0);" class="dropdown-item">Profit</a>
                                        <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                    </div>
                                </div>
                                <h4 class="header-title mb-3">Revenue</h4>

                                <div class="chart-content-bg">
                                    <div class="row text-center">
                                        <div class="col-md-6">
                                            <p class="text-muted mb-0 mt-3">This Year</p>
                                            <h2 class="fw-normal mb-3">
                                                <small class="mdi mdi-checkbox-blank-circle text-primary align-middle me-1"></small>
                                                <span>$108,254</span>
                                            </h2>
                                        </div>
                                        <div class="col-md-6">
                                            <p class="text-muted mb-0 mt-3">Previous Year</p>
                                            <h2 class="fw-normal mb-3">
                                                <small class="mdi mdi-checkbox-blank-circle text-success align-middle me-1"></small>
                                                <span>$69,524</span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                <div class="dash-item-overlay d-none d-md-block" dir="ltr">
                                    <h5>This Month's Earning: $2,562.30</h5>
                                    <p class="text-muted font-13 mb-3 mt-2">August 2022 have a lot of fund raising activities made our Brgy. Fund increased.</p>
                                    <a href="javascript: void(0);" class="btn btn-outline-primary">View Statements
                                        <i class="mdi mdi-arrow-right ms-2"></i>
                                    </a>
                                </div>
                                <div dir="ltr">
                                    <div id="revenue-chart" class="apex-charts mt-3" data-colors="#203469,#0acf97"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="dropdown float-end">
                                    <a href="#" class="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="mdi mdi-dots-vertical"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a href="javascript:void(0);" class="dropdown-item">Sales Report</a>
                                        <a href="javascript:void(0);" class="dropdown-item">Export Report</a>
                                        <a href="javascript:void(0);" class="dropdown-item">Profit</a>
                                        <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                    </div>
                                </div>
                                <h4 class="header-title">Total Residents</h4>

                                <div id="average-sales" class="apex-charts mb-4 mt-4" data-colors="#203469,#0acf97,#fa5c7c,#6b5eae"></div>


                                <div class="chart-widget-list">
                                    <p>
                                        <i class="mdi mdi-square text-primary"></i>
                                        <span class="float-end">12,456</span> Youths
                                    </p>
                                    <p>
                                        <i class="mdi mdi-square text-success"></i> Adults
                                        <span class="float-end">15,234</span>
                                    </p>
                                    <p>
                                        <i class="mdi mdi-square text-danger"></i> Senior Citizens
                                        <span class="float-end">10,231</span>
                                    </p>
                                    <p class="mb-0">
                                        <i class="mdi mdi-square text-purple"></i> New Borns
                                        <span class="float-end">4,452</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
