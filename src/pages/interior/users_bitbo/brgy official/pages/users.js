import React from 'react'

export default function BITBoBrgyOfficialUsers() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <h4 className="page-title">Users</h4>
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
                                        <a href="#buttons-table-residents" data-bs-toggle="tab" aria-expanded="true" className="nav-link active">
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
                                    <div className="tab-pane show active" id="buttons-table-residents" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-housestreet&quot;, &quot;js-lists-values-user-purok&quot;, &quot;js-lists-values-user-age&quot;, &quot;js-lists-values-user-bday&quot;]">
                                        <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search User, House No., Purok, Age or Birthday" />
                                        </div><table id="table table-centered" className="table-responsive mb-0">
                                        </table><table id className="table dt-responsive nowrap w-100">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 280 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                                                    </th>
                                                    <th style={{ width: 300 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-housestreet">House
                                                            No./Street</a>
                                                    </th>
                                                    <th style={{ width: 250 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-purok">Purok</a>
                                                    </th>
                                                    <th style={{ width: 100 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-age">Age</a>
                                                    </th>
                                                    <th style={{ width: 250 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-bday">Birthday</a>
                                                    </th>
                                                    <th>Active?</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="list" id="staff02">
                                                <tr>
                                                    <td>
                                                        <div className="media align-items-center">
                                                            <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">
                                                                <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Juan Dela
                                                                Cruz</strong></div>
                                                        </div>
                                                    </td>
                                                    <td><span className="js-lists-values-user-housestreet">3435
                                                        Batumbakal Street</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-age">24</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-bday">1998/01/29</span>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <input type="checkbox" id="switch1" defaultChecked data-switch="success" />
                                                            <label htmlFor="switch1" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                        </div>
                                                    </td>
                                                    <td className="table-action">
                                                        <a href="javascript: void(0);" className="action-icon">
                                                            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-user-modal"><i className="mdi mdi-account-edit-outline" />
                                                            </button></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="mb-3">
                                                        <div className="media align-items-center">
                                                            <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">
                                                                <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Crisostomo
                                                                Ibarra</strong></div>
                                                        </div>
                                                    </td>
                                                    <td><span className="js-lists-values-user-housestreet">3435
                                                        Batumbakal Street</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-age">24</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-bday">1998/01/30</span>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <input type="checkbox" id="switch2" defaultChecked data-switch="success" />
                                                            <label htmlFor="switch2" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                        </div>
                                                    </td>
                                                    <td className="table-action">
                                                        <a href="javascript: void(0);" className="action-icon">
                                                            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-user-modal"><i className="mdi mdi-account-edit-outline" />
                                                            </button></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="media align-items-center">
                                                            <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">
                                                                <img src="../../assets/images/users/profile2.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Maria
                                                                Clara</strong></div>
                                                        </div>
                                                    </td>
                                                    <td><span className="js-lists-values-user-housestreet">3435
                                                        Batumbakal Street</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-age">24</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-bday">1998/01/31</span>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <input type="checkbox" id="switch3" defaultChecked data-switch="success" />
                                                            <label htmlFor="switch3" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                        </div>
                                                    </td>
                                                    <td className="table-action">
                                                        <a href="javascript: void(0);" className="action-icon">
                                                            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#edit-user-modal"><i className="mdi mdi-account-edit-outline" />
                                                            </button></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> {/* end residents*/}
                                    <div className="tab-pane" id="buttons-table-purokleaders" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-housestreet&quot;, &quot;js-lists-values-user-purok&quot;, &quot;js-lists-values-user-age&quot;, &quot;js-lists-values-user-bday&quot;]">
                                        <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search User, House No., Purok, Age or Birthday" />
                                        </div><table id="table table-centered" className="table-responsive mb-0">
                                        </table><table id className="table dt-responsive nowrap w-100">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 280 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                                                    </th>
                                                    <th style={{ width: 300 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-housestreet">House
                                                            No./Street</a>
                                                    </th>
                                                    <th style={{ width: 250 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-purok">Purok</a>
                                                    </th>
                                                    <th style={{ width: 100 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-age">Age</a>
                                                    </th>
                                                    <th style={{ width: 250 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-bday">Birthday</a>
                                                    </th>
                                                    <th>Active?</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="list" id="staff02">
                                                <tr>
                                                    <td>
                                                        <div className="media align-items-center">
                                                            <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">
                                                                <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Juan Dela
                                                                Cruz</strong></div>
                                                        </div>
                                                    </td>
                                                    <td><span className="js-lists-values-user-housestreet">3435
                                                        Batumbakal Street</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-age">24</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-bday">1998/02/29</span>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <input type="checkbox" id="switch4" defaultChecked data-switch="success" />
                                                            <label htmlFor="switch4" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                        </div>
                                                    </td>
                                                    <td className="table-action">
                                                        <a href="javascript: void(0);" className="action-icon">
                                                            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-purokleader-modal"><i className="mdi mdi-eye" />
                                                            </button></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="mb-3">
                                                        <div className="media align-items-center">
                                                            <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">
                                                                <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Crisostomo
                                                                Ibarra</strong></div>
                                                        </div>
                                                    </td>
                                                    <td><span className="js-lists-values-user-housestreet">3435
                                                        Batumbakal Street</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-age">24</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-bday">1998/02/30</span>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <input type="checkbox" id="switch5" defaultChecked data-switch="success" />
                                                            <label htmlFor="switch5" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                        </div>
                                                    </td>
                                                    <td className="table-action">
                                                        <a href="javascript: void(0);" className="action-icon">
                                                            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-purokleader-modal"><i className="mdi mdi-eye" />
                                                            </button></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="media align-items-center">
                                                            <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">
                                                                <img src="../../assets/images/users/profile2.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Maria
                                                                Clara</strong></div>
                                                        </div>
                                                    </td>
                                                    <td><span className="js-lists-values-user-housestreet">3435
                                                        Batumbakal Street</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-age">24</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-bday">1998/03/31</span>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <input type="checkbox" id="switch6" defaultChecked data-switch="success" />
                                                            <label htmlFor="switch6" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                        </div>
                                                    </td>
                                                    <td className="table-action">
                                                        <a href="javascript: void(0);" className="action-icon">
                                                            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-purokleader-modal"><i className="mdi mdi-eye" />
                                                            </button></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> {/* end purokleaders*/}
                                    <div className="tab-pane" id="buttons-table-healthworkers" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-housestreet&quot;, &quot;js-lists-values-user-purok&quot;, &quot;js-lists-values-user-age&quot;, &quot;js-lists-values-user-bday&quot;]">
                                        <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search User, House No., Purok, Age or Birthday" />
                                        </div><table id="table table-centered" className="table-responsive mb-0">
                                        </table><table id className="table dt-responsive nowrap w-100">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 280 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                                                    </th>
                                                    <th style={{ width: 300 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-housestreet">House
                                                            No./Street</a>
                                                    </th>
                                                    <th style={{ width: 250 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-purok">Purok</a>
                                                    </th>
                                                    <th style={{ width: 100 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-age">Age</a>
                                                    </th>
                                                    <th style={{ width: 250 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-bday">Birthday</a>
                                                    </th>
                                                    <th>Active?</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="list" id="staff02">
                                                <tr>
                                                    <td>
                                                        <div className="media align-items-center">
                                                            <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">
                                                                <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Juan Dela
                                                                Cruz</strong></div>
                                                        </div>
                                                    </td>
                                                    <td><span className="js-lists-values-user-housestreet">3435
                                                        Batumbakal Street</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-age">24</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-bday">1998/04/29</span>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <input type="checkbox" id="switch7" defaultChecked data-switch="success" />
                                                            <label htmlFor="switch7" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                        </div>
                                                    </td>
                                                    <td className="table-action">
                                                        <a href="javascript: void(0);" className="action-icon">
                                                            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-healthworker-modal"><i className="mdi mdi-eye" />
                                                            </button></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="mb-3">
                                                        <div className="media align-items-center">
                                                            <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">
                                                                <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Crisostomo
                                                                Ibarra</strong></div>
                                                        </div>
                                                    </td>
                                                    <td><span className="js-lists-values-user-housestreet">3435
                                                        Batumbakal Street</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-age">24</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-bday">1998/04/30</span>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <input type="checkbox" id="switch8" defaultChecked data-switch="success" />
                                                            <label htmlFor="switch8" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                        </div>
                                                    </td>
                                                    <td className="table-action">
                                                        <a href="javascript: void(0);" className="action-icon">
                                                            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-healthworker-modal"><i className="mdi mdi-eye" />
                                                            </button></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="media align-items-center">
                                                            <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">
                                                                <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Maria
                                                                Clara</strong></div>
                                                        </div>
                                                    </td>
                                                    <td><span className="js-lists-values-user-housestreet">3435
                                                        Batumbakal Street</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-age">24</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-bday">1998/04/31</span>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <input type="checkbox" id="switch9" defaultChecked data-switch="success" />
                                                            <label htmlFor="switch9" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                        </div>
                                                    </td>
                                                    <td className="table-action">
                                                        <a href="javascript: void(0);" className="action-icon">
                                                            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-healthworker-modal"><i className="mdi mdi-eye" />
                                                            </button></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> {/* end healthworkers*/}
                                    <div className="tab-pane" id="buttons-table-staffs" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-housestreet&quot;, &quot;js-lists-values-user-purok&quot;, &quot;js-lists-values-user-age&quot;, &quot;js-lists-values-user-bday&quot;]">
                                        <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search User, House No., Purok, Age or Birthday" />
                                        </div><table id="table table-centered" className="table-responsive mb-0">
                                        </table><table id className="table dt-responsive nowrap w-100">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 280 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                                                    </th>
                                                    <th style={{ width: 300 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-housestreet">House
                                                            No./Street</a>
                                                    </th>
                                                    <th style={{ width: 250 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-purok">Purok</a>
                                                    </th>
                                                    <th style={{ width: 100 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-age">Age</a>
                                                    </th>
                                                    <th style={{ width: 250 }}>
                                                        <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-bday">Birthday</a>
                                                    </th>
                                                    <th>Active?</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="list" id="staff02">
                                                <tr>
                                                    <td>
                                                        <div className="media align-items-center">
                                                            <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">
                                                                <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Juan Dela
                                                                Cruz</strong></div>
                                                        </div>
                                                    </td>
                                                    <td><span className="js-lists-values-user-housestreet">3435
                                                        Batumbakal Street</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-age">24</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-bday">1998/05/29</span>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <input type="checkbox" id="switch10" defaultChecked data-switch="success" />
                                                            <label htmlFor="switch10" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                        </div>
                                                    </td>
                                                    <td className="table-action">
                                                        <a href="javascript: void(0);" className="action-icon">
                                                            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-staff-modal"><i className="mdi mdi-eye" />
                                                            </button></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="mb-3">
                                                        <div className="media align-items-center">
                                                            <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">
                                                                <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Crisostomo
                                                                Ibarra</strong></div>
                                                        </div>
                                                    </td>
                                                    <td><span className="js-lists-values-user-housestreet">3435
                                                        Batumbakal Street</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-age">24</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-bday">1998/05/30</span>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <input type="checkbox" id="switch11" defaultChecked data-switch="success" />
                                                            <label htmlFor="switch11" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                        </div>
                                                    </td>
                                                    <td className="table-action">
                                                        <a href="javascript: void(0);" className="action-icon">
                                                            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-staff-modal"><i className="mdi mdi-eye" />
                                                            </button></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="media align-items-center">
                                                            <div className="media-body d-flex flex-column"><strong className="js-lists-values-user-name">
                                                                <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Maria
                                                                Clara</strong></div>
                                                        </div>
                                                    </td>
                                                    <td><span className="js-lists-values-user-housestreet">3435
                                                        Batumbakal Street</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-age">24</span>
                                                    </td>
                                                    <td><span className="js-lists-values-user-bday">1998/05/31</span>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <input type="checkbox" id="switch12" defaultChecked data-switch="success" />
                                                            <label htmlFor="switch12" data-on-label="Yes" data-off-label="No" className="mb-0 d-block" />
                                                        </div>
                                                    </td>
                                                    <td className="table-action">
                                                        <a href="javascript: void(0);" className="action-icon">
                                                            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-staff-modal"><i className="mdi mdi-eye" />
                                                            </button></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> {/* end staffs*/}
                                    <div className="tab-pane" id="buttons-table-brgyofficials">
                                        <ul className="nav nav-tabs nav-bordered mb-3">
                                            <li className="nav-item">
                                                <a href="#brgy-captain" data-bs-toggle="tab" aria-expanded="false" className="nav-link active">
                                                    <i className="mdi mdi-home-variant d-md-none d-block" />
                                                    <span className="d-none d-md-block">Captain</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#brgy-kagawad" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                                    <i className="mdi mdi-account-circle d-md-none d-block" />
                                                    <span className="d-none d-md-block">Kagawad</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#brgy-councilors" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                                    <i className="mdi mdi-account-circle d-md-none d-block" />
                                                    <span className="d-none d-md-block">Councilors</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#brgy-sanggunianchairmen" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                                    <i className="mdi mdi-account-circle d-md-none d-block" />
                                                    <span className="d-none d-md-block">Sanggunian Chairman</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#brgy-sanggunianmembers" data-bs-toggle="tab" aria-expanded="true" className="nav-link">
                                                    <i className="mdi mdi-account-circle d-md-none d-block" />
                                                    <span className="d-none d-md-block">Sanggunian Members</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane show active" id="brgy-captain" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-housestreet&quot;, &quot;js-lists-values-user-purok&quot;, &quot;js-lists-values-user-age&quot;, &quot;js-lists-values-user-bday&quot;]">
                                                <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search User, House No., Purok, Age" />
                                                </div><table id="table table-centered" className="table-responsive mb-0">
                                                </table><table id className="table dt-responsive nowrap w-100">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: 250 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                                                            </th>
                                                            <th style={{ width: 200 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-housestreet">House
                                                                    No./Street</a>
                                                            </th>
                                                            <th style={{ width: 200 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-purok">Purok</a>
                                                            </th>
                                                            <th style={{ width: 100 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-age">Age</a>
                                                            </th>
                                                            <th style={{ width: 200 }}>Start of Term</th>
                                                            <th style={{ width: 200 }}>End of Term</th>
                                                            <th>End Term?</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="list" id="staff02">
                                                        <tr>
                                                            <td>
                                                                <div className="media align-items-center">
                                                                    <div className="media-body d-flex flex-column">
                                                                        <strong className="js-lists-values-user-name">
                                                                            <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Juan
                                                                            Dela Cruz</strong>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="js-lists-values-user-housestreet">3435
                                                                Batumbakal Street</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-age">24</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2022/05/29</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2025/05/29</span>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#endterm-official-modal"><i className="mdi mdi-cancel" />
                                                                    </button></a>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-official-modal"><i className="mdi mdi-eye" />
                                                                    </button></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="mb-3">
                                                                <div className="media align-items-center">
                                                                    <div className="media-body d-flex flex-column">
                                                                        <strong className="js-lists-values-user-name">
                                                                            <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Crisostomo
                                                                            Ibarra</strong>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="js-lists-values-user-housestreet">3435
                                                                Batumbakal Street</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-age">24</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2022/05/29</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2025/05/29</span>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#endterm-official-modal"><i className="mdi mdi-cancel" />
                                                                    </button></a>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-official-modal"><i className="mdi mdi-eye" />
                                                                    </button></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="media align-items-center">
                                                                    <div className="media-body d-flex flex-column">
                                                                        <strong className="js-lists-values-user-name">
                                                                            <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Maria
                                                                            Clara</strong>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="js-lists-values-user-housestreet">3435
                                                                Batumbakal Street</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-age">24</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2022/05/29</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2025/05/29</span>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#endterm-official-modal"><i className="mdi mdi-cancel" />
                                                                    </button></a>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-official-modal"><i className="mdi mdi-eye" />
                                                                    </button></a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="tab-pane" id="brgy-kagawad" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-housestreet&quot;, &quot;js-lists-values-user-purok&quot;, &quot;js-lists-values-user-age&quot;, &quot;js-lists-values-user-bday&quot;]">
                                                <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search User, House No., Purok, Age" />
                                                </div><table id="table table-centered" className="table-responsive mb-0">
                                                </table><table id className="table dt-responsive nowrap w-100">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: 250 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                                                            </th>
                                                            <th style={{ width: 200 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-housestreet">House
                                                                    No./Street</a>
                                                            </th>
                                                            <th style={{ width: 200 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-purok">Purok</a>
                                                            </th>
                                                            <th style={{ width: 100 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-age">Age</a>
                                                            </th>
                                                            <th style={{ width: 200 }}>Start of Term</th>
                                                            <th style={{ width: 200 }}>End of Term</th>
                                                            <th>End Term?</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="list" id="staff02">
                                                        <tr>
                                                            <td>
                                                                <div className="media align-items-center">
                                                                    <div className="media-body d-flex flex-column">
                                                                        <strong className="js-lists-values-user-name">
                                                                            <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Juan
                                                                            Dela Costa</strong>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="js-lists-values-user-housestreet">3435
                                                                Batumbakal Street</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-age">24</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2022/05/29</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2026/05/29</span>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#endterm-official-modal"><i className="mdi mdi-cancel" />
                                                                    </button></a>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-official-modal"><i className="mdi mdi-eye" />
                                                                    </button></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="mb-3">
                                                                <div className="media align-items-center">
                                                                    <div className="media-body d-flex flex-column">
                                                                        <strong className="js-lists-values-user-name">
                                                                            <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Crisostomo
                                                                            Ibarra</strong>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="js-lists-values-user-housestreet">3435
                                                                Batumbakal Street</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-age">24</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2022/05/29</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2026/05/29</span>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#endterm-official-modal"><i className="mdi mdi-cancel" />
                                                                    </button></a>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-official-modal"><i className="mdi mdi-eye" />
                                                                    </button></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="media align-items-center">
                                                                    <div className="media-body d-flex flex-column">
                                                                        <strong className="js-lists-values-user-name">
                                                                            <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Maria
                                                                            Clara</strong>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="js-lists-values-user-housestreet">3435
                                                                Batumbakal Street</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-age">24</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2022/05/29</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2026/05/29</span>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#endterm-official-modal"><i className="mdi mdi-cancel" />
                                                                    </button></a>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-official-modal"><i className="mdi mdi-eye" />
                                                                    </button></a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="tab-pane" id="brgy-councilors" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-housestreet&quot;, &quot;js-lists-values-user-purok&quot;, &quot;js-lists-values-user-age&quot;, &quot;js-lists-values-user-bday&quot;]">
                                                <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search User, House No., Purok, Age" />
                                                </div><table id="table table-centered" className="table-responsive mb-0">
                                                </table><table id className="table dt-responsive nowrap w-100">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: 250 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                                                            </th>
                                                            <th style={{ width: 200 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-housestreet">House
                                                                    No./Street</a>
                                                            </th>
                                                            <th style={{ width: 200 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-purok">Purok</a>
                                                            </th>
                                                            <th style={{ width: 100 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-age">Age</a>
                                                            </th>
                                                            <th style={{ width: 200 }}>Start of Term</th>
                                                            <th style={{ width: 200 }}>End of Term</th>
                                                            <th>End Term?</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="list" id="staff02">
                                                        <tr>
                                                            <td>
                                                                <div className="media align-items-center">
                                                                    <div className="media-body d-flex flex-column">
                                                                        <strong className="js-lists-values-user-name">
                                                                            <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Juan
                                                                            Dela Costa</strong>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="js-lists-values-user-housestreet">3435
                                                                Batumbakal Street</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-age">24</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2022/05/29</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2027/05/29</span>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#endterm-official-modal"><i className="mdi mdi-cancel" />
                                                                    </button></a>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-official-modal"><i className="mdi mdi-eye" />
                                                                    </button></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="mb-3">
                                                                <div className="media align-items-center">
                                                                    <div className="media-body d-flex flex-column">
                                                                        <strong className="js-lists-values-user-name">
                                                                            <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Crisostomo
                                                                            Ibarra</strong>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="js-lists-values-user-housestreet">3435
                                                                Batumbakal Street</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-age">24</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2022/05/29</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2027/05/29</span>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#endterm-official-modal"><i className="mdi mdi-cancel" />
                                                                    </button></a>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-official-modal"><i className="mdi mdi-eye" />
                                                                    </button></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="media align-items-center">
                                                                    <div className="media-body d-flex flex-column">
                                                                        <strong className="js-lists-values-user-name">
                                                                            <img src="../../assets/images/users/profile2.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Maria
                                                                            Clara</strong>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="js-lists-values-user-housestreet">3435
                                                                Batumbakal Street</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-age">24</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2022/05/29</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2027/05/29</span>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#endterm-official-modal"><i className="mdi mdi-cancel" />
                                                                    </button></a>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-official-modal"><i className="mdi mdi-eye" />
                                                                    </button></a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="tab-pane" id="brgy-sanggunianchairmen" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-housestreet&quot;, &quot;js-lists-values-user-purok&quot;, &quot;js-lists-values-user-age&quot;, &quot;js-lists-values-user-bday&quot;]">
                                                <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search User, House No., Purok, Age" />
                                                </div><table id="table table-centered" className="table-responsive mb-0">
                                                </table><table id className="table dt-responsive nowrap w-100">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: 250 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                                                            </th>
                                                            <th style={{ width: 200 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-housestreet">House
                                                                    No./Street</a>
                                                            </th>
                                                            <th style={{ width: 200 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-purok">Purok</a>
                                                            </th>
                                                            <th style={{ width: 100 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-age">Age</a>
                                                            </th>
                                                            <th style={{ width: 200 }}>Start of Term</th>
                                                            <th style={{ width: 200 }}>End of Term</th>
                                                            <th>End Term?</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="list" id="staff02">
                                                        <tr>
                                                            <td>
                                                                <div className="media align-items-center">
                                                                    <div className="media-body d-flex flex-column">
                                                                        <strong className="js-lists-values-user-name">
                                                                            <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Juan
                                                                            Dela Costa</strong>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="js-lists-values-user-housestreet">3435
                                                                Batumbakal Street</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-age">24</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2022/05/29</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2028/05/29</span>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#endterm-official-modal"><i className="mdi mdi-cancel" />
                                                                    </button></a>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-official-modal"><i className="mdi mdi-eye" />
                                                                    </button></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="mb-3">
                                                                <div className="media align-items-center">
                                                                    <div className="media-body d-flex flex-column">
                                                                        <strong className="js-lists-values-user-name">
                                                                            <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Crisostomo
                                                                            Ibarra</strong>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="js-lists-values-user-housestreet">3435
                                                                Batumbakal Street</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-age">24</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2022/05/29</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2028/05/29</span>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#endterm-official-modal"><i className="mdi mdi-cancel" />
                                                                    </button></a>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-official-modal"><i className="mdi mdi-eye" />
                                                                    </button></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="media align-items-center">
                                                                    <div className="media-body d-flex flex-column">
                                                                        <strong className="js-lists-values-user-name">
                                                                            <img src="../../assets/images/users/profile2.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Maria
                                                                            Clara</strong>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="js-lists-values-user-housestreet">3435
                                                                Batumbakal Street</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-age">24</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2022/05/29</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2028/05/29</span>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#endterm-official-modal"><i className="mdi mdi-cancel" />
                                                                    </button></a>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-official-modal"><i className="mdi mdi-eye" />
                                                                    </button></a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="tab-pane" id="brgy-sanggunianmembers" data-toggle="lists" data-lists-values="[&quot;js-lists-values-user-name&quot;, &quot;js-lists-values-user-housestreet&quot;, &quot;js-lists-values-user-purok&quot;, &quot;js-lists-values-user-age&quot;, &quot;js-lists-values-user-bday&quot;]">
                                                <div className="search-form search-form--light col-lg-3"><input type="text" className="form-control search" placeholder="Search User, House No., Purok, Age" />
                                                </div><table id="table table-centered" className="table-responsive mb-0">
                                                </table><table id className="table dt-responsive nowrap w-100">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: 250 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-name">Name</a>
                                                            </th>
                                                            <th style={{ width: 200 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-housestreet">House
                                                                    No./Street</a>
                                                            </th>
                                                            <th style={{ width: 200 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-purok">Purok</a>
                                                            </th>
                                                            <th style={{ width: 100 }}>
                                                                <a href="javascript:void(0)" className="sort" data-sort="js-lists-values-user-age">Age</a>
                                                            </th>
                                                            <th style={{ width: 200 }}>Start of Term</th>
                                                            <th style={{ width: 200 }}>End of Term</th>
                                                            <th>End Term?</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="list" id="staff02">
                                                        <tr>
                                                            <td>
                                                                <div className="media align-items-center">
                                                                    <div className="media-body d-flex flex-column">
                                                                        <strong className="js-lists-values-user-name">
                                                                            <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Juan
                                                                            Dela Costa</strong>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="js-lists-values-user-housestreet">3435
                                                                Batumbakal Street</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-age">24</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2022/05/29</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2029/05/29</span>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#endterm-official-modal"><i className="mdi mdi-cancel" />
                                                                    </button></a>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-official-modal"><i className="mdi mdi-eye" />
                                                                    </button></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="mb-3">
                                                                <div className="media align-items-center">
                                                                    <div className="media-body d-flex flex-column">
                                                                        <strong className="js-lists-values-user-name">
                                                                            <img src="../../assets/images/users/profile1.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Crisostomo
                                                                            Ibarra</strong>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="js-lists-values-user-housestreet">3435
                                                                Batumbakal Street</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-age">24</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2022/05/29</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2029/05/29</span>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#endterm-official-modal"><i className="mdi mdi-cancel" />
                                                                    </button></a>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-official-modal"><i className="mdi mdi-eye" />
                                                                    </button></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="media align-items-center">
                                                                    <div className="media-body d-flex flex-column">
                                                                        <strong className="js-lists-values-user-name">
                                                                            <img src="../../assets/images/users/profile2.png" alt="image" className="img-fluid avatar-sm rounded-circle" />&nbsp;Maria
                                                                            Clara</strong>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="js-lists-values-user-housestreet">3435
                                                                Batumbakal Street</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-purok">Katakutan</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-age">24</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2022/05/29</span>
                                                            </td>
                                                            <td><span className="js-lists-values-user-bday">2029/05/29</span>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#endterm-official-modal"><i className="mdi mdi-cancel" />
                                                                    </button></a>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript: void(0);" className="action-icon">
                                                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#view-official-modal"><i className="mdi mdi-eye" />
                                                                    </button></a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div> {/* end brgy officials*/}
                                </div> {/* end tab-content*/}
                            </div> {/* end card body*/}
                        </div> {/* end card */}
                    </div>{/* end col*/}
                </div>{/* end row*/}
                {/*MODALS*/}
                {/*Decline Modal*/}
                <div id="endterm-official-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content modal-filled bg-danger">
                            <div className="modal-body p-4">
                                <div className="text-center">
                                    <i className="dripicons-question h1" />
                                    <h4 className="mt-2">End Term Confirmation</h4>
                                    <p className="mt-3">Are you sure you want to end the term of this official?</p>
                                    <button type="button" className="btn btn-light my-2" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-outline-light my-2" data-bs-dismiss="modal" id="toastr-endterm">Yes</button>
                                </div>
                            </div>
                        </div>{/* /.modal-content */}
                    </div>{/* /.modal-dialog */}
                </div>{/* /.modal */}
                {/* Edit Resident Modal */}
                <div id="edit-user-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header modal-colored-header bg-primary">
                                <h4 className="modal-title" id="warning-header-modalLabel">Edit Resident Details</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label htmlFor="firstname" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="resident_fname" placeholder="Enter first name" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Middle Name</label>
                                                <input type="text" className="form-control" id="resident_mname" placeholder="Enter middle name" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="resident_lname" placeholder="Enter last name" />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Suffix</label>
                                                <input type="text" className="form-control" id="resident_suffix" placeholder="Suffix" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Birthday</label>
                                                <input type="date" className="form-control" id="resident_bday" placeholder="Enter birthday" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Phone No.</label>
                                                <input type="number" className="form-control" id="resident_phone" placeholder="Enter phone no." />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Username</label>
                                                <input type="text" className="form-control" id="resident_username" placeholder="Enter username" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="useremail" className="form-label">Email Address</label>
                                                <input type="email" className="form-control" id="resident_emailadd" placeholder="Enter email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="userpassword" className="form-label">Password</label>
                                                <input type="password" className="form-control" id="resident_pass" placeholder="Enter password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Address</label>
                                                <div className="row">
                                                    <div className="col">
                                                        <input type="text" className="form-control" id="resident_street" placeholder="House No./Street" />
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
                                                        <input type="text" className="form-control" id="resident_barangay" placeholder="Barangay" defaultValue="Brgy. BITBo" disabled />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Educational
                                                    Attainment</label>
                                                <select className="form-select" id="resident_educ">
                                                    <option>No schooling completed</option>
                                                    <option>Elementary</option>
                                                    <option>High School Undergrad</option>
                                                    <option>High School Graduate</option>
                                                    <option>College Undergad</option>
                                                    <option>Vocational</option>
                                                    <option>Bachelor's Degree</option>
                                                    <option>Master's Degree</option>
                                                    <option>Doctorate Degree</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Gender</label>
                                                <select className="form-select" id="resident_gender">
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Blood Type</label>
                                                <select className="form-select" id="resident_bloodtype">
                                                    <option>Unknown</option>
                                                    <option>O+</option>
                                                    <option>O-</option>
                                                    <option>A+</option>
                                                    <option>A-</option>
                                                    <option>B+</option>
                                                    <option>B-</option>
                                                    <option>AB+</option>
                                                    <option>AB-</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Civil Status</label>
                                                <select className="form-select" id="resident_civilstat">
                                                    <option>Single</option>
                                                    <option>Married</option>
                                                    <option>Separated</option>
                                                    <option>Divorced</option>
                                                    <option>Widowed</option>
                                                    <option>Single Parent</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Condition Status</label>
                                                <select className="form-select" id="resident_condition">
                                                    <option>None</option>
                                                    <option>Senior Citizen</option>
                                                    <option>PWD</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label htmlFor="userpassword" className="form-label">Occupation</label>
                                                <input type="text" className="form-control" id="resident_occupation" placeholder="Occupation" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <div className="mb-3">
                                                    <label htmlFor="userpassword" className="form-label">Religion</label>
                                                    <input type="text" className="form-control" id="resident_religion" placeholder="Religion" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">House Ownership
                                                    Status</label>
                                                <select className="form-select" id="resident_howner">
                                                    <option>Owned</option>
                                                    <option>Rent</option>
                                                    <option>Living with Parents</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label htmlFor="useremail" className="form-label">Profile Picture</label>
                                                <input type="file" className="form-control" id="resident_profile_pic" placeholder="Upload Photo" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="toastr-five">Save
                                    changes</button>
                            </div>
                        </div>{/* /.modal-content */}
                    </div>{/* /.modal-dialog */}
                </div>{/* /.modal */}
                {/* Official Edit Modal */}
                <div id="view-official-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header modal-colored-header bg-primary">
                                <h4 className="modal-title" id="warning-header-modalLabel">Brgy. Official Details</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="firstname" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="firstname" placeholder="Enter first name" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Middle Name</label>
                                                <input type="text" className="form-control" id="middlename" placeholder="Enter middle name" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="lastname" placeholder="Enter last name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Birthday</label>
                                                <input type="date" className="form-control" id="birthday" placeholder="Enter birthday" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Phone No.</label>
                                                <input type="number" className="form-control" id="phone" placeholder="Enter phone no." />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Username</label>
                                                <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="useremail" className="form-label">Email Address</label>
                                                <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="userpassword" className="form-label">Password</label>
                                                <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
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
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Educational
                                                    Attainment</label>
                                                <select className="form-select" id="example-select">
                                                    <option>No schooling completed</option>
                                                    <option>Elementary</option>
                                                    <option>High School Undergrad</option>
                                                    <option>High School Graduate</option>
                                                    <option>College Undergad</option>
                                                    <option>Vocational</option>
                                                    <option>Bachelor's Degree</option>
                                                    <option>Master's Degree</option>
                                                    <option>Doctorate Degree</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Gender</label>
                                                <select className="form-select" id="example-select">
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Blood Type</label>
                                                <select className="form-select" id="example-select">
                                                    <option>Unknown</option>
                                                    <option>O+</option>
                                                    <option>O-</option>
                                                    <option>A+</option>
                                                    <option>A-</option>
                                                    <option>B+</option>
                                                    <option>B-</option>
                                                    <option>AB+</option>
                                                    <option>AB-</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Civil Status</label>
                                                <select className="form-select" id="example-select">
                                                    <option>Single</option>
                                                    <option>Married</option>
                                                    <option>Separated</option>
                                                    <option>Divorced</option>
                                                    <option>Widowed</option>
                                                    <option>Single Parent</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label htmlFor="useremail" className="form-label">Profile Picture</label>
                                                <input type="file" className="form-control" id="official_profile_pic" placeholder="Upload Profile Pic" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>{/* /.modal-content */}
                    </div>{/* /.modal-dialog */}
                </div>{/* /.modal */}
                {/* Staff Edit Modal */}
                <div id="view-staff-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header modal-colored-header bg-primary">
                                <h4 className="modal-title" id="warning-header-modalLabel">Staff Details</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="firstname" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="firstname" placeholder="Enter first name" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Middle Name</label>
                                                <input type="text" className="form-control" id="middlename" placeholder="Enter middle name" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="lastname" placeholder="Enter last name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Birthday</label>
                                                <input type="date" className="form-control" id="birthday" placeholder="Enter birthday" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Phone No.</label>
                                                <input type="number" className="form-control" id="phone" placeholder="Enter phone no." />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Username</label>
                                                <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="useremail" className="form-label">Email Address</label>
                                                <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="userpassword" className="form-label">Password</label>
                                                <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
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
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Educational
                                                    Attainment</label>
                                                <select className="form-select" id="example-select">
                                                    <option>No schooling completed</option>
                                                    <option>Elementary</option>
                                                    <option>High School Undergrad</option>
                                                    <option>High School Graduate</option>
                                                    <option>College Undergad</option>
                                                    <option>Vocational</option>
                                                    <option>Bachelor's Degree</option>
                                                    <option>Master's Degree</option>
                                                    <option>Doctorate Degree</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Gender</label>
                                                <select className="form-select" id="example-select">
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Blood Type</label>
                                                <select className="form-select" id="example-select">
                                                    <option>Unknown</option>
                                                    <option>O+</option>
                                                    <option>O-</option>
                                                    <option>A+</option>
                                                    <option>A-</option>
                                                    <option>B+</option>
                                                    <option>B-</option>
                                                    <option>AB+</option>
                                                    <option>AB-</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Civil Status</label>
                                                <select className="form-select" id="example-select">
                                                    <option>Single</option>
                                                    <option>Married</option>
                                                    <option>Separated</option>
                                                    <option>Divorced</option>
                                                    <option>Widowed</option>
                                                    <option>Single Parent</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label htmlFor="useremail" className="form-label">Profile Picture</label>
                                                <input type="file" className="form-control" id="staff_profile_pic" placeholder="Upload Profile Pic" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>{/* /.modal-content */}
                    </div>{/* /.modal-dialog */}
                </div>{/* /.modal */}
                {/* Health Worker Edit Modal */}
                <div id="view-healthworker-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header modal-colored-header bg-primary">
                                <h4 className="modal-title" id="warning-header-modalLabel">Health Worker Details</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="firstname" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="firstname" placeholder="Enter first name" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Middle Name</label>
                                                <input type="text" className="form-control" id="middlename" placeholder="Enter middle name" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="lastname" placeholder="Enter last name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Birthday</label>
                                                <input type="date" className="form-control" id="birthday" placeholder="Enter birthday" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Phone No.</label>
                                                <input type="number" className="form-control" id="phone" placeholder="Enter phone no." />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Username</label>
                                                <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="useremail" className="form-label">Email Address</label>
                                                <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="userpassword" className="form-label">Password</label>
                                                <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
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
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Educational
                                                    Attainment</label>
                                                <select className="form-select" id="example-select">
                                                    <option>No schooling completed</option>
                                                    <option>Elementary</option>
                                                    <option>High School Undergrad</option>
                                                    <option>High School Graduate</option>
                                                    <option>College Undergad</option>
                                                    <option>Vocational</option>
                                                    <option>Bachelor's Degree</option>
                                                    <option>Master's Degree</option>
                                                    <option>Doctorate Degree</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Gender</label>
                                                <select className="form-select" id="example-select">
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Blood Type</label>
                                                <select className="form-select" id="example-select">
                                                    <option>Unknown</option>
                                                    <option>O+</option>
                                                    <option>O-</option>
                                                    <option>A+</option>
                                                    <option>A-</option>
                                                    <option>B+</option>
                                                    <option>B-</option>
                                                    <option>AB+</option>
                                                    <option>AB-</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Civil Status</label>
                                                <select className="form-select" id="example-select">
                                                    <option>Single</option>
                                                    <option>Married</option>
                                                    <option>Separated</option>
                                                    <option>Divorced</option>
                                                    <option>Widowed</option>
                                                    <option>Single Parent</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label htmlFor="useremail" className="form-label">Profile Picture</label>
                                                <input type="file" className="form-control" id="staff_profile_pic" placeholder="Upload Profile Pic" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>{/* /.modal-content */}
                    </div>{/* /.modal-dialog */}
                </div>{/* /.modal */}
                {/* Health Worker Edit Modal */}
                <div id="view-purokleader-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="warning-header-modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header modal-colored-header bg-primary">
                                <h4 className="modal-title" id="warning-header-modalLabel">Purok Leader Details</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="firstname" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="firstname" placeholder="Enter first name" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Middle Name</label>
                                                <input type="text" className="form-control" id="middlename" placeholder="Enter middle name" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="lastname" placeholder="Enter last name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Birthday</label>
                                                <input type="date" className="form-control" id="birthday" placeholder="Enter birthday" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Phone No.</label>
                                                <input type="number" className="form-control" id="phone" placeholder="Enter phone no." />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Username</label>
                                                <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="useremail" className="form-label">Email Address</label>
                                                <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="userpassword" className="form-label">Password</label>
                                                <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
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
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Educational
                                                    Attainment</label>
                                                <select className="form-select" id="example-select">
                                                    <option>No schooling completed</option>
                                                    <option>Elementary</option>
                                                    <option>High School Undergrad</option>
                                                    <option>High School Graduate</option>
                                                    <option>College Undergad</option>
                                                    <option>Vocational</option>
                                                    <option>Bachelor's Degree</option>
                                                    <option>Master's Degree</option>
                                                    <option>Doctorate Degree</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Gender</label>
                                                <select className="form-select" id="example-select">
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Blood Type</label>
                                                <select className="form-select" id="example-select">
                                                    <option>Unknown</option>
                                                    <option>O+</option>
                                                    <option>O-</option>
                                                    <option>A+</option>
                                                    <option>A-</option>
                                                    <option>B+</option>
                                                    <option>B-</option>
                                                    <option>AB+</option>
                                                    <option>AB-</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label htmlFor="lastname" className="form-label">Civil Status</label>
                                                <select className="form-select" id="example-select">
                                                    <option>Single</option>
                                                    <option>Married</option>
                                                    <option>Separated</option>
                                                    <option>Divorced</option>
                                                    <option>Widowed</option>
                                                    <option>Single Parent</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label htmlFor="useremail" className="form-label">Profile Picture</label>
                                                <input type="file" className="form-control" id="staff_profile_pic" placeholder="Upload Profile Pic" />
                                            </div>
                                        </div>
                                    </div>
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
