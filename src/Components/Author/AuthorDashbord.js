export default function AuthorDashbord() {
    return <>
        <div className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page" style={{"padding-top":"60px"}}>
  <div className="page__heading border-bottom">
    <div className="container-fluid page__container d-flex align-items-center">
      <h1 className="mb-0">Dashboard</h1>
    </div>
  </div>
  <div className="container-fluid page__container">
    <div className="card">
      <div className="card-header card-header-large bg-light d-flex align-items-center">
        <div className="flex">
          <h4 className="card-header__title">Earnings</h4>
          <div className="card-subtitle text-muted">Last Year</div>
        </div>
        <div className="ml-auto">
          <a href="#" className="btn btn-light">Details</a>
        </div>
      </div>
      <div className="card-body">
        <div className="chart" style={{"height":"200px"}}>
          <canvas id="earningsChart" className="chart-canvas" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header card-header-large bg-light d-flex align-items-center">
            <div className="mr-3">
              <i className="material-icons icon-30pt text-muted-light">receipt</i>
            </div>
            <div className="flex">
              <h4 className="card-header__title">Sales</h4>
              <div className="card-subtitle text-muted">Latest transactions</div>
            </div>
            <div className="ml-auto">
              <a href="statement.html" className="btn btn-sm btn-light">View all</a>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table m-0">
              <thead className="thead-light">
                <tr>
                  <th>Details</th>
                  <th className="text-right">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="media align-items-center">
                      <a href="#" className="avatar avatar-xs mr-3">
                        <img src="assets/images/logos/angular.svg" alt="course" className="avatar-img rounded" />
                      </a>
                      <div className="media-body">
                        <a className="text-body js-lists-values-course" href="#"><strong>Angular Routing In-Depth</strong></a><br />
                        <small className="text-muted mr-1">
                          INV
                          <a href="invoice.html">#8734</a> - $<span>89</span>
                        </small>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <small className="text-muted text-uppercase js-lists-values-date">12 Jun 2019</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media align-items-center">
                      <a href="#" className="avatar avatar-xs mr-3">
                        <img src="assets/images/logos/angular.svg" alt="course" className="avatar-img rounded" />
                      </a>
                      <div className="media-body">
                        <a className="text-body js-lists-values-course" href="#"><strong>Angular Unit Testing</strong></a><br />
                        <small className="text-muted mr-1">
                          INV
                          <a href="invoice.html">#8735</a> - $<span>89</span>
                        </small>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <small className="text-muted text-uppercase js-lists-values-date">13 Apr 2019</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media align-items-center">
                      <a href="#" className="avatar avatar-xs mr-3">
                        <img src="assets/images/logos/javascript.svg" alt="course" className="avatar-img rounded" />
                      </a>
                      <div className="media-body">
                        <a className="text-body js-lists-values-course" href="#"><strong>Introduction to Javascript</strong></a><br />
                        <small className="text-muted mr-1">
                          INV
                          <a href="invoice.html">#8736</a> - $<span>89</span>
                        </small>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <small className="text-muted text-uppercase js-lists-values-date">14 Mar 2019</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media align-items-center">
                      <a href="#" className="avatar avatar-xs mr-3">
                        <img src="assets/images/logos/angular.svg" alt="course" className="avatar-img rounded" />
                      </a>
                      <div className="media-body">
                        <a className="text-body js-lists-values-course" href="#"><strong>Learn Angular Fundamentals</strong></a><br />
                        <small className="text-muted mr-1">
                          INV
                          <a href="invoice.html">#8737</a> - $<span>89</span>
                        </small>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <small className="text-muted text-uppercase js-lists-values-date">2 Mar 2019</small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header card-header-large bg-light d-flex align-items-center">
            <div className="mr-3">
              <i className="material-icons icon-30pt text-muted-light">forum</i>
            </div>
            <div className="flex">
              <h4 className="card-header__title">Comments</h4>
              <div className="card-subtitle text-muted">Recent comments</div>
            </div>
            <div className="ml-auto">
              <a href="#" className="btn btn-light btn-sm"><i className="material-icons">keyboard_arrow_left</i></a>
              <a href="#" className="btn btn-light btn-sm"><i className="material-icons">keyboard_arrow_right</i></a>
            </div>
          </div>
          <div className="card-body">
            <div className="media">
              <div className="media-left">
                <a href="#" className="avatar avatar-sm mr-3">
                  <img src="assets/images/avatar/demi.png" alt="Guy" className="avatar-img rounded-circle" />
                </a>
              </div>
              <div className="media-body d-flex flex-column">
                <div className="d-flex align-items-center">
                  <a href="profile.html" className="text-body"><strong>Adrian Demian</strong></a>
                  <small className="ml-auto text-muted">27 min ago</small><br />
                </div>
                <p className="text-muted">on <a href="#" className="text-black-50" style={{"-webkit-text-decoration":"underline","text-decoration":"underline"}}>Data Visualization With Chart.js</a></p>
                <p className="mt-1">How can I load Charts on a page?</p>
              </div>
            </div>
            <div className="media ml-sm-32pt border rounded p-3 bg-light">
              <div className="media-left">
                <a href="#" className="avatar avatar-sm mr-3">
                  <img src="assets/images/frontted-logo-blue.svg" alt="Guy" className="avatar-img rounded-circle" />
                </a>
              </div>
              <div className="media-body">
                <div className="d-flex align-items-center">
                  <a href="profile.html" className="text-body"><strong>Frontted</strong></a>
                  <small className="ml-auto text-muted">just now</small>
                </div>
                <p className="mt-1 mb-0 text-black-70">Hi Bogdan,<br /> Thank you for purchasing our course! <br /><br />Please have a look at the charts library documentation <a href="#">here</a> and follow the instructions.</p>
              </div>
            </div>
          </div>
          <div className="card-footer bg-light">
            <form action="#" id="message-reply">
              <div className="input-group input-group-merge">
                <input type="text" className="form-control form-control-appended" required placeholder="Quick Reply" />
                <div className="input-group-append">
                  <div className="input-group-text pr-2">
                    <button className="btn btn-flush" type="button"><i className="material-icons">tag_faces</i></button>
                  </div>
                  <div className="input-group-text pl-0">
                    <div className="custom-file custom-file-naked d-flex" style={{"width":"24px","overflow":"hidden"}}>
                      <input type="file" className="custom-file-input" id="customFile" />
                      <label className="custom-file-label" style={{"color":"inherit"}} htmlFor="customFile">
                        <i className="material-icons">attach_file</i>
                      </label>
                    </div>
                  </div>
                  <div className="input-group-text pl-0">
                    <button className="btn btn-flush" type="button"><i className="material-icons">send</i></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
}