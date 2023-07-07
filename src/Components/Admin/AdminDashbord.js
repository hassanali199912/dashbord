import { admin_student } from "../../data/admin_student";
import Filter from "./Components/Filter";
import StudentTable from "./Components/StudentTable";

export default function AdminDashbord() {
  return (
    <>
      <div
        className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page"
        style={{ "padding-top": "60px" }}
      >
        <div className="page__heading border-bottom">
          <div className="container-fluid page__container d-flex align-items-center">
            <h1 className="mb-0">Dashboard</h1>
          </div>
        </div>
        <div className="container-fluid page__container">
          <div className="row">
            <div className="col-lg">
              <div className="card">
                <div className="card-header card-header-large bg-white d-flex align-items-center">
                  <h4 className="card-header__title flex m-0">
                    Recent Activity
                  </h4>
                </div>
                <div
                  className="card-header card-header-tabs-basic nav"
                  role="tablist"
                >
                  <a
                    href="#activity_all"
                    className="active"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="activity_all"
                    aria-selected="true"
                  >
                    Top Ranked
                  </a>
                </div>
                <div className="list-group tab-content list-group-flush">
                  <div className="tab-pane active show fade" id="activity_all">
                    <div className="list-group-item list-group-item-action d-flex align-items-center ">
                      <div className="avatar avatar-xs mr-3">
                        <span className="avatar-title rounded-circle  bg-purple">
                          <i className="material-icons">monetization_on</i>
                        </span>
                      </div>
                      <div className="flex">
                        <div className="d-flex align-items-middle">
                          <strong className="text-15pt mr-1">Hassan Ali</strong>
                        </div>
                      </div>
                      <div>75 %</div>
                    </div>
                    <div className="list-group-item list-group-item-action d-flex align-items-center ">
                      <div className="avatar avatar-xs mr-3">
                        <span className="avatar-title rounded-circle  bg-purple">
                          <i className="material-icons">monetization_on</i>
                        </span>
                      </div>
                      <div className="flex">
                        <div className="d-flex align-items-middle">
                          <strong className="text-15pt mr-1">Hassan Ali</strong>
                        </div>
                      </div>
                      <div>75 %</div>
                    </div>
                    <div className="list-group-item list-group-item-action d-flex align-items-center ">
                      <div className="avatar avatar-xs mr-3">
                        <span className="avatar-title rounded-circle  bg-purple">
                          <i className="material-icons">monetization_on</i>
                        </span>
                      </div>
                      <div className="flex">
                        <div className="d-flex align-items-middle">
                          <strong className="text-15pt mr-1">Hassan Ali</strong>
                        </div>
                      </div>
                      <div>75 %</div>
                    </div>
                    <div className="list-group-item list-group-item-action d-flex align-items-center ">
                      <div className="avatar avatar-xs mr-3">
                        <span className="avatar-title rounded-circle  bg-purple">
                          <i className="material-icons">monetization_on</i>
                        </span>
                      </div>
                      <div className="flex">
                        <div className="d-flex align-items-middle">
                          <strong className="text-15pt mr-1">Hassan Ali</strong>
                        </div>
                      </div>
                      <div>75 %</div>
                    </div>
                    <div className="list-group-item list-group-item-action d-flex align-items-center ">
                      <div className="avatar avatar-xs mr-3">
                        <span className="avatar-title rounded-circle  bg-purple">
                          <i className="material-icons">monetization_on</i>
                        </span>
                      </div>
                      <div className="flex">
                        <div className="d-flex align-items-middle">
                          <strong className="text-15pt mr-1">Hassan Ali</strong>
                        </div>
                      </div>
                      <div>75 %</div>
                    </div>
                    {/* 
                          <div className="list-group-item list-group-item-action d-flex align-items-center ">
                            <div className="avatar avatar-xs mr-3">
                              <span className="avatar-title rounded-circle  bg-teal">
                                <i className="material-icons">email</i>
                              </span>
                            </div>
                            <div className="flex">
                              <div className="d-flex align-items-middle">
                                <div className="avatar avatar-xxs mr-1">
                                  <img
                                    src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg"
                                    alt="Avatar"
                                    className="avatar-img rounded-circle"
                                  />
                                </div>
                                <strong className="text-15pt mr-1">
                                  Sherri J. Cardenas
                                </strong>
                              </div>
                              <small>Improve spacings on Projects page</small>
                            </div>
                            <small className="text-muted">3 days ago</small>
                            <i className="material-icons icon-muted ml-3">
                              arrow_forward
                            </i>
                          </div> */}

                    <div className="card-footer text-center border-0">
                      <a className="text-muted" href>
                        View All (54)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="row card-group-row">
                <div className="col-lg-6 card-group-row__col">
                  <div
                    className="card card-group-row__card card-body card-body-x-lg"
                    style={{
                      position: "relative",
                      "padding-bottom": "calc(80px - 1.25rem)",
                      overflow: "hidden",
                      "z-index": "0",
                    }}
                  >
                    <div className="card-header__title text-muted mb-2">
                      Products
                    </div>
                    <div className="text-amount">$8,391</div>
                    <div className="text-stats text-success">
                      31.5% <i className="material-icons">arrow_upward</i>
                    </div>
                    <div
                      className="chart"
                      style={{
                        height: "80px",
                        position: "absolute",
                        left: "0",
                        right: "0",
                        bottom: "0",
                      }}
                    >
                      <canvas id="productsChart" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 card-group-row__col">
                  <div
                    className="card card-group-row__card card-body card-body-x-lg"
                    style={{
                      position: "relative",
                      "padding-bottom": "calc(80px - 1.25rem)",
                      overflow: "hidden",
                      "z-index": "0",
                    }}
                  >
                    <div className="card-header__title text-muted mb-2">
                      Courses
                    </div>
                    <div className="text-amount">15,021</div>
                    <div className="text-stats text-danger">
                      31.5% <i className="material-icons">arrow_downward</i>
                    </div>
                    <div
                      className="chart"
                      style={{
                        height: "80px",
                        position: "absolute",
                        left: "0",
                        right: "0",
                        bottom: "0",
                      }}
                    >
                      <canvas id="coursesChart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <form className="form-inline">
                <label className="mr-sm-2" htmlFor="inlineFormFilterBy">
                  Filter by:
                </label>
                <input
                  type="text"
                  className="form-control mb-2 mr-sm-2 mb-sm-0"
                  id="inlineFormFilterBy"
                  placeholder="Type a name"
                />
                <Filter />
              </form>
            </div>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Student Name</th>
                  <th scope="col">Subjects</th>
                  <th scope="col">State</th>
                  <th scope="col">Rankes</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {admin_student.map((data) => (
                  <StudentTable key={data.id} student_data={data} />
                ))}
              </tbody>
            </table>
            {/* <div
                    className="table-responsive border-bottom"
                    data-toggle="lists"
                    data-lists-values='["js-lists-values-employee-name"]'
                  >
                    <table className="table mb-0 thead-border-top-0">
                      <thead>
                        <tr>
                          <th style={{ width: "18px" }}>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input js-toggle-check-all"
                                data-target="#staff"
                                id="customCheckAll"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheckAll"
                              >
                                <span className="text-hide">Toggle all</span>
                              </label>
                            </div>
                          </th>
                          <th>Name</th>
                          <th style={{ width: "150px" }}>Group</th>
                          <th style={{ width: "48px" }}>Courses</th>
                          <th style={{ width: "37px" }}>Status</th>
                          <th style={{ width: "120px" }}>Last Activity</th>
                          <th style={{ width: "51px" }}>Earnings</th>
                          <th style={{ width: "24px" }} />
                        </tr>
                      </thead>
                      <tbody className="list" id="staff">
                        <tr className="selected">
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input js-check-selected-row"
                                defaultChecked
                                id="customCheck1_1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1_1"
                              >
                                <span className="text-hide">Check</span>
                              </label>
                            </div>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="avatar avatar-xs mr-2">
                                <img
                                  src="assets/images/256_luke-porter-261779-unsplash.jpg"
                                  alt="Avatar"
                                  className="avatar-img rounded-circle"
                                />
                              </div>
                              <div className="media-body">
                                <span className="js-lists-values-employee-name">
                                  Michael Smith
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <a href>Black Ops</a>
                              <a href="#" className="rating-link">
                                <i className="material-icons ml-2">star</i>
                              </a>
                            </div>
                          </td>
                          <td>12</td>
                          <td>
                            <span className="badge badge-warning">ADMIN</span>
                          </td>
                          <td>
                            <small className="text-muted">3 days ago</small>
                          </td>
                          <td>$12,402</td>
                          <td>
                            <a href className="text-muted">
                              <i className="material-icons">more_vert</i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input js-check-selected-row"
                                id="customCheck2_1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck2_1"
                              >
                                <span className="text-hide">Check</span>
                              </label>
                            </div>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <img
                                src="assets/images/avatar/green.svg"
                                className="mr-2"
                                alt="avatar"
                              />
                              <div className="media-body">
                                <span className="js-lists-values-employee-name">
                                  Connie Smith
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <a href="#">Backend Ltd</a>
                              <a href="#" className="rating-link active">
                                <i className="material-icons ml-2">star</i>
                              </a>
                            </div>
                          </td>
                          <td>42</td>
                          <td>
                            <span className="badge badge-success">USER</span>
                          </td>
                          <td>
                            <small className="text-muted">1 week ago</small>
                          </td>
                          <td>$1,943</td>
                          <td>
                            <a href className="text-muted">
                              <i className="material-icons">more_vert</i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input js-check-selected-row"
                                id="customCheck3_1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck3_1"
                              >
                                <span className="text-hide">Check</span>
                              </label>
                            </div>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="avatar avatar-xs mr-2">
                                <img
                                  src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg"
                                  alt="Avatar"
                                  className="avatar-img rounded-circle"
                                />
                              </div>
                              <div className="media-body">
                                <span className="js-lists-values-employee-name">
                                  John Connor
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <a href>Frontted</a>
                              <a
                                href="#"
                                className="rating-link"
                                onclick="document.getElementById('box').classList.toggle('grow');"
                              >
                                <i className="material-icons ml-2">star</i>
                              </a>
                            </div>
                          </td>
                          <td>42</td>
                          <td>
                            <span className="badge badge-primary">MANAGER</span>
                          </td>
                          <td>
                            <small className="text-muted">1 week ago</small>
                          </td>
                          <td>$1,943</td>
                          <td>
                            <a href className="text-muted">
                              <i className="material-icons">more_vert</i>
                            </a>
                          </td>
                        </tr>
                        <tr className="selected">
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input js-check-selected-row"
                                defaultChecked
                                id="customCheck1_2"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1_2"
                              >
                                <span className="text-hide">Check</span>
                              </label>
                            </div>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="avatar avatar-xs mr-2">
                                <img
                                  src="assets/images/256_luke-porter-261779-unsplash.jpg"
                                  alt="Avatar"
                                  className="avatar-img rounded-circle"
                                />
                              </div>
                              <div className="media-body">
                                <span className="js-lists-values-employee-name">
                                  Michael Smith
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <a href>Black Ops</a>
                              <a href="#" className="rating-link">
                                <i className="material-icons ml-2">star</i>
                              </a>
                            </div>
                          </td>
                          <td>12</td>
                          <td>
                            <span className="badge badge-warning">ADMIN</span>
                          </td>
                          <td>
                            <small className="text-muted">3 days ago</small>
                          </td>
                          <td>$12,402</td>
                          <td>
                            <a href className="text-muted">
                              <i className="material-icons">more_vert</i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input js-check-selected-row"
                                id="customCheck2_2"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck2_2"
                              >
                                <span className="text-hide">Check</span>
                              </label>
                            </div>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <img
                                src="assets/images/avatar/green.svg"
                                className="mr-2"
                                alt="avatar"
                              />
                              <div className="media-body">
                                <span className="js-lists-values-employee-name">
                                  Connie Smith
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <a href="#">Backend Ltd</a>
                              <a href="#" className="rating-link active">
                                <i className="material-icons ml-2">star</i>
                              </a>
                            </div>
                          </td>
                          <td>42</td>
                          <td>
                            <span className="badge badge-success">USER</span>
                          </td>
                          <td>
                            <small className="text-muted">1 week ago</small>
                          </td>
                          <td>$1,943</td>
                          <td>
                            <a href className="text-muted">
                              <i className="material-icons">more_vert</i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input js-check-selected-row"
                                id="customCheck3_2"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck3_2"
                              >
                                <span className="text-hide">Check</span>
                              </label>
                            </div>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="avatar avatar-xs mr-2">
                                <img
                                  src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg"
                                  alt="Avatar"
                                  className="avatar-img rounded-circle"
                                />
                              </div>
                              <div className="media-body">
                                <span className="js-lists-values-employee-name">
                                  John Connor
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <a href>Frontted</a>
                              <a
                                href="#"
                                className="rating-link"
                                onclick="document.getElementById('box').classList.toggle('grow');"
                              >
                                <i className="material-icons ml-2">star</i>
                              </a>
                            </div>
                          </td>
                          <td>42</td>
                          <td>
                            <span className="badge badge-primary">MANAGER</span>
                          </td>
                          <td>
                            <small className="text-muted">1 week ago</small>
                          </td>
                          <td>$1,943</td>
                          <td>
                            <a href className="text-muted">
                              <i className="material-icons">more_vert</i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div> */}
            <div className="card-body text-right">
              15 <span className="text-muted">of 1,430</span>{" "}
              <a href="#" className="text-muted-light">
                <i className="material-icons ml-1">arrow_forward</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
