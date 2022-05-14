import type {NextPage} from 'next'




const TestePage: NextPage = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#sidebar" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon" data-bs-target="#sidebar"></span>
                    </button>
                    <a className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold" href="#">Frontendfunn</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#topNavBar" aria-controls="topNavBar" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="topNavBar">
                        <form className="d-flex ms-auto my-3 my-lg-0">
                            <div className="input-group">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-primary" type="submit">
                                        <i className="bi bi-search"></i>
                                    </button>
                            </div>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle ms-2" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-person-fill"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="offcanvas offcanvas-start sidebar-nav bg-dark" tabIndex={-1} id="sidebar">
                <div className="offcanvas-body p-0">
                    <nav className="navbar-dark">
                        <ul className="navbar-nav">
                            <li>
                                <div className="text-muted small fw-bold text-uppercase px-3">
                                    CORE
                                </div>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-3 active">
                                    <span className="me-2"><i className="bi bi-speedometer2"></i></span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li className="my-4">
                                <hr className="dropdown-divider bg-light"/>
                            </li>
                            <li>
                                <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
                                    Interface
                                </div>
                            </li>
                            <li>
                                <a className="nav-link px-3 sidebar-link" data-bs-toggle="collapse" href="#layouts"
                                   aria-expanded="true">
                                    <span className="me-2"><i className="bi bi-layout-split"></i></span>
                                    <span>Layouts</span>
                                    <span className="ms-auto">
                  <span className="right-icon">
                    <i className="bi bi-chevron-down"></i>
                  </span>
                </span>
                                </a>
                                <div className="collapse show" id="layouts" >
                                    <ul className="navbar-nav ps-3">
                                        <li>
                                            <a href="#" className="nav-link px-3">
                                                <span className="me-2"><i className="bi bi-speedometer2"></i></span>
                                                <span>Dashboard</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-3">
                                    <span className="me-2"><i className="bi bi-book-fill"></i></span>
                                    <span>Pages</span>
                                </a>
                            </li>
                            <li className="my-4">
                                <hr className="dropdown-divider bg-light"/>
                            </li>
                            <li>
                                <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
                                    Addons
                                </div>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-3">
                                    <span className="me-2"><i className="bi bi-graph-up"></i></span>
                                    <span>Charts</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-3">
                                    <span className="me-2"><i className="bi bi-table"></i></span>
                                    <span>Tables</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>


            <main className="mt-5 pt-3">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-12">
                            <h4>Dashboard</h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <div className="card bg-primary text-white h-100">
                                <div className="card-body py-5">Primary Card</div>
                                <div className="card-footer d-flex">
                                    View Details
                                    <span className="ms-auto">
                  <i className="bi bi-chevron-right"></i>
                </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card bg-warning text-dark h-100">
                                <div className="card-body py-5">Warning Card</div>
                                <div className="card-footer d-flex">
                                    View Details
                                    <span className="ms-auto">
                  <i className="bi bi-chevron-right"></i>
                </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card bg-success text-white h-100">
                                <div className="card-body py-5">Success Card</div>
                                <div className="card-footer d-flex">
                                    View Details
                                    <span className="ms-auto">
                  <i className="bi bi-chevron-right"></i>
                </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card bg-danger text-white h-100">
                                <div className="card-body py-5">Danger Card</div>
                                <div className="card-footer d-flex">
                                    View Details
                                    <span className="ms-auto">
                  <i className="bi bi-chevron-right"></i>
                </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="card">
                                <div className="card-header">
                                    <span><i className="bi bi-table me-2"></i></span> Data Table
                                </div>
                                <div className="card-body">
                                    <div>
                                        <div id="example_wrapper" className="dataTables_wrapper dt-bootstrap5">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6">
                                                    <div id="example_filter" className="dataTables_filter"><label>Search:<input
                                                        type="search" className="form-control form-control-sm"
                                                        placeholder="" aria-controls="example"/></label></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <table id="example"
                                                           className="table table-striped data-table dataTable"
                                                           style={{width:'100%'}} role="grid"
                                                           aria-describedby="example_info">
                                                        <thead>
                                                        <tr role="row">
                                                            <th className="sorting sorting_asc"></th>
                                                            <th className="sorting" >Position
                                                            </th>
                                                            <th className="sorting" >Office
                                                            </th>
                                                            <th className="sorting" >Age
                                                            </th>
                                                            <th className="sorting" >Start date
                                                            </th>
                                                            <th className="sorting" >Salary
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>


                                                        <tr className="odd">
                                                            <td className="sorting_1">Airi Satou</td>
                                                            <td>Accountant</td>
                                                            <td>Tokyo</td>
                                                            <td>33</td>
                                                            <td>2008/11/28</td>
                                                            <td>$162,700</td>
                                                        </tr>
                                                        <tr className="even">
                                                            <td className="sorting_1">Angelica Ramos</td>
                                                            <td>Chief Executive Officer (CEO)</td>
                                                            <td>London</td>
                                                            <td>47</td>
                                                            <td>2009/10/09</td>
                                                            <td>$1,200,000</td>
                                                        </tr>
                                                        <tr className="odd">
                                                            <td className="sorting_1">Ashton Cox</td>
                                                            <td>Junior Technical Author</td>
                                                            <td>San Francisco</td>
                                                            <td>66</td>
                                                            <td>2009/01/12</td>
                                                            <td>$86,000</td>
                                                        </tr>
                                                        <tr className="even">
                                                            <td className="sorting_1">Bradley Greer</td>
                                                            <td>Software Engineer</td>
                                                            <td>London</td>
                                                            <td>41</td>
                                                            <td>2012/10/13</td>
                                                            <td>$132,000</td>
                                                        </tr>
                                                        <tr className="odd">
                                                            <td className="sorting_1">Brenden Wagner</td>
                                                            <td>Software Engineer</td>
                                                            <td>San Francisco</td>
                                                            <td>28</td>
                                                            <td>2011/06/07</td>
                                                            <td>$206,850</td>
                                                        </tr>
                                                        <tr className="even">
                                                            <td className="sorting_1">Brielle Williamson</td>
                                                            <td>Integration Specialist</td>
                                                            <td>New York</td>
                                                            <td>61</td>
                                                            <td>2012/12/02</td>
                                                            <td>$372,000</td>
                                                        </tr>
                                                        <tr className="odd">
                                                            <td className="sorting_1">Bruno Nash</td>
                                                            <td>Software Engineer</td>
                                                            <td>London</td>
                                                            <td>38</td>
                                                            <td>2011/05/03</td>
                                                            <td>$163,500</td>
                                                        </tr>
                                                        <tr className="even">
                                                            <td className="sorting_1">Caesar Vance</td>
                                                            <td>Pre-Sales Support</td>
                                                            <td>New York</td>
                                                            <td>21</td>
                                                            <td>2011/12/12</td>
                                                            <td>$106,450</td>
                                                        </tr>
                                                        <tr className="odd">
                                                            <td className="sorting_1">Cara Stevens</td>
                                                            <td>Sales Assistant</td>
                                                            <td>New York</td>
                                                            <td>46</td>
                                                            <td>2011/12/06</td>
                                                            <td>$145,600</td>
                                                        </tr>
                                                        <tr className="even">
                                                            <td className="sorting_1">Cedric Kelly</td>
                                                            <td>Senior Javascript Developer</td>
                                                            <td>Edinburgh</td>
                                                            <td>22</td>
                                                            <td>2012/03/29</td>
                                                            <td>$433,060</td>
                                                        </tr>
                                                        </tbody>
                                                        <tfoot>
                                                        <tr>
                                                            <th rowSpan={1} colSpan={1}>Name</th>
                                                            <th rowSpan={1} colSpan={1}>Position</th>
                                                            <th rowSpan={1} colSpan={1}>Office</th>
                                                            <th rowSpan={1} colSpan={1}>Age</th>
                                                            <th rowSpan={1} colSpan={1}>Start date</th>
                                                            <th rowSpan={1} colSpan={1}>Salary</th>
                                                        </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-5">
                                                    <div className="dataTables_info" id="example_info" role="status"
                                                         aria-live="polite">Showing 1 to 10 of 57 entries
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-7">
                                                    <div className="dataTables_paginate paging_simple_numbers"
                                                         id="example_paginate">
                                                        <ul className="pagination">
                                                            <li className="paginate_button page-item previous disabled"
                                                                id="example_previous"><a href="#"
                                                                                         aria-controls="example"
                                                                                         data-dt-idx="0" tabIndex={0}
                                                                                         className="page-link">Previous</a>
                                                            </li>
                                                            <li className="paginate_button page-item active"><a href="#"
                                                                                                                aria-controls="example"
                                                                                                                data-dt-idx="1"
                                                                                                                tabIndex={0}
                                                                                                                className="page-link">1</a>
                                                            </li>
                                                            <li className="paginate_button page-item "><a href="#"
                                                                                                          aria-controls="example"
                                                                                                          data-dt-idx="2"
                                                                                                          tabIndex={0}
                                                                                                          className="page-link">2</a>
                                                            </li>
                                                            <li className="paginate_button page-item "><a href="#"
                                                                                                          aria-controls="example"
                                                                                                          data-dt-idx="3"
                                                                                                          tabIndex={0}
                                                                                                          className="page-link">3</a>
                                                            </li>
                                                            <li className="paginate_button page-item "><a href="#"
                                                                                                          aria-controls="example"
                                                                                                          data-dt-idx="4"
                                                                                                          tabIndex={0}
                                                                                                          className="page-link">4</a>
                                                            </li>
                                                            <li className="paginate_button page-item "><a href="#"
                                                                                                          aria-controls="example"
                                                                                                          data-dt-idx="5"
                                                                                                          tabIndex={0}
                                                                                                          className="page-link">5</a>
                                                            </li>
                                                            <li className="paginate_button page-item "><a href="#"
                                                                                                          aria-controls="example"
                                                                                                          data-dt-idx="6"
                                                                                                          tabIndex={0}
                                                                                                          className="page-link">6</a>
                                                            </li>
                                                            <li className="paginate_button page-item next"
                                                                id="example_next"><a href="#" aria-controls="example"
                                                                                     data-dt-idx="7" tabIndex={0}
                                                                                     className="page-link">Next</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>


    )
}

export default TestePage
