export default function AuthorEarning() {
    return <>
        <div className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page" style={{"padding-top":"60px"}}>
  <div className="page__heading border-bottom">
    <div className="container-fluid page__container d-flex align-items-center">
      <h1 className="mb-0">Earnings</h1>
    </div>
  </div>
  <div className="container-fluid page__container">
    <div className="row card-group-row">
      <div className="col-lg-4 col-md-5 card-group-row__col">
        <div className="card card-group-row__card">
          <div className="card-header card-header-large bg-light d-flex align-items-center">
            <div className="flex">
              <h4 className="card-header__title">Current Balance</h4>
              <div className="card-subtitle text-muted">This billing cycle</div>
            </div>
            <div className="dropdown ml-auto">
              <a href="#" data-toggle="dropdown" data-caret="false" className="text-dark-gray"><i className="material-icons">more_horiz</i></a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="javascript:void(0)" className="dropdown-item">Go to Report</a>
                <a href="javascript:void(0)" className="dropdown-item">Next Cycle</a>
              </div>
            </div>
          </div>
          <div className="card-body d-flex align-items-center justify-content-center h-250">
            <div className="chart z-0 dashboard-chart">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="text-muted mb-1">Next payout</div>
                <div className="card-header__title">15.09.2019</div>
              </div>
              <canvas className="position-relative chartjs-render-monitor" id="billingChart" width={420} height={420} style={{"display":"block","height":"210px","width":"210px"}} />
            </div>
          </div>
          <div className="card-body pt-0 text-center">
            <div className="text-amount mb-1">$37,290</div>
            <div className="text-muted">Current balance this billing cycle</div>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-md-7 card-group-row__col">
        <div className="card card-group-row__card">
          <div className="card-header card-header-large bg-light d-flex align-items-center">
            <div className="flex">
              <h4 className="card-header__title">Purchases</h4>
              <div className="card-subtitle text-muted">This billing cycle</div>
            </div>
            <div className="dropdown ml-auto">
              <a href="#" data-toggle="dropdown" data-caret="false" className="text-dark-gray"><i className="material-icons">more_horiz</i></a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="javascript:void(0)" className="dropdown-item">Action</a>
                <a href="javascript:void(0)" className="dropdown-item">Other Action</a>
                <div className="dropdown-divider" />
                <a href="javascript:void(0)" className="dropdown-item">Some Other Action</a>
              </div>
            </div>
          </div>
          <div className="card-body d-flex align-items-center">
            <div className="chart w-100" style={{"height":"calc(328px - 1.25rem * 2)"}}>
              <div className="chartjs-size-monitor" style={{"position":"absolute","left":"0px","top":"0px","right":"0px","bottom":"0px","overflow":"hidden","pointer-events":"none","visibility":"hidden","z-index":"-1"}}>
                <div className="chartjs-size-monitor-expand" style={{"position":"absolute","left":"0","top":"0","right":"0","bottom":"0","overflow":"hidden","pointer-events":"none","visibility":"hidden","z-index":"-1"}}>
                  <div style={{"position":"absolute","width":"1000000px","height":"1000000px","left":"0","top":"0"}} />
                </div>
                <div className="chartjs-size-monitor-shrink" style={{"position":"absolute","left":"0","top":"0","right":"0","bottom":"0","overflow":"hidden","pointer-events":"none","visibility":"hidden","z-index":"-1"}}>
                  <div style={{"position":"absolute","width":"200%","height":"200%","left":"0","top":"0"}} />
                </div>
              </div>
              <canvas id="transactionsChart" width={1402} height={576} className="chartjs-render-monitor" style={{"display":"block","height":"288px","width":"701px"}} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header card-header-large bg-white">
        <h4 className="card-header__title">Current Students</h4>
      </div>
      <div className="card-header">
        <form className="form-inline">
          <label className="mr-sm-2" htmlFor="inlineFormFilterBy">Filter by:</label>
          <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormFilterBy" placeholder="Type a name" />
          <label className="sr-only" htmlFor="inlineFormRole">Role</label>
          <select id="inlineFormRole" className="custom-select mb-2 mr-sm-2 mb-sm-0">
            <option value="Courses">All Courses</option>
          </select>
          <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
            <input type="checkbox" className="custom-control-input" id="inlineFormPurchase" />
            <label className="custom-control-label" htmlFor="inlineFormPurchase">Subscribed?</label>
          </div>
        </form>
      </div>
      <div className="table-responsive border-bottom" data-toggle="lists" data-lists-values="[&quot;js-lists-values-employee-name&quot;]">
        <table className="table mb-0 thead-border-top-0">
          <thead>
            <tr>
              <th style={{"width":"18px"}}>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input js-toggle-check-all" data-target="#staff" id="customCheckAll" />
                  <label className="custom-control-label" htmlFor="customCheckAll"><span className="text-hide">Toggle all</span></label>
                </div>
              </th>
              <th>Name</th>
              <th style={{"width":"150px"}}>Group</th>
              <th style={{"width":"48px"}}>Courses</th>
              <th style={{"width":"37px"}}>Status</th>
              <th style={{"width":"120px"}}>Last Activity</th>
              <th style={{"width":"51px"}}>Earnings</th>
              <th style={{"width":"24px"}} />
            </tr>
          </thead>
          <tbody className="list" id="staff">
            <tr className="selected">
              <td>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input js-check-selected-row" defaultChecked id="customCheck1_1" />
                  <label className="custom-control-label" htmlFor="customCheck1_1"><span className="text-hide">Check</span></label>
                </div>
              </td>
              <td>
                <div className="media align-items-center">
                  <div className="avatar avatar-xs mr-2">
                    <img src="assets/images/256_luke-porter-261779-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                  </div>
                  <div className="media-body">
                    <span className="js-lists-values-employee-name">Michael Smith</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="media align-items-center">
                  <a href>Black Ops</a>
                  <a href="#" className="rating-link"><i className="material-icons ml-2">star</i></a>
                </div>
              </td>
              <td>12</td>
              <td><span className="badge badge-warning">ADMIN</span></td>
              <td><small className="text-muted">3 days ago</small></td>
              <td>$12,402</td>
              <td><a href className="text-muted"><i className="material-icons">more_vert</i></a></td>
            </tr>
            <tr>
              <td>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input js-check-selected-row" id="customCheck2_1" />
                  <label className="custom-control-label" htmlFor="customCheck2_1"><span className="text-hide">Check</span></label>
                </div>
              </td>
              <td>
                <div className="media align-items-center">
                  <img src="assets/images/avatar/green.svg" className="mr-2" alt="avatar" />
                  <div className="media-body">
                    <span className="js-lists-values-employee-name">Connie Smith</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="media align-items-center">
                  <a href="#">Backend Ltd</a>
                  <a href="#" className="rating-link active"><i className="material-icons ml-2">star</i></a>
                </div>
              </td>
              <td>42</td>
              <td><span className="badge badge-success">USER</span></td>
              <td><small className="text-muted">1 week ago</small></td>
              <td>$1,943</td>
              <td><a href className="text-muted"><i className="material-icons">more_vert</i></a></td>
            </tr>
            <tr>
              <td>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input js-check-selected-row" id="customCheck3_1" />
                  <label className="custom-control-label" htmlFor="customCheck3_1"><span className="text-hide">Check</span></label>
                </div>
              </td>
              <td>
                <div className="media align-items-center">
                  <div className="avatar avatar-xs mr-2">
                    <img src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                  </div>
                  <div className="media-body">
                    <span className="js-lists-values-employee-name">John Connor</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="media align-items-center">
                  <a href>Frontted</a>
                  <a href="#" className="rating-link" onclick="document.getElementById('box').classList.toggle('grow');"><i className="material-icons ml-2">star</i></a>
                </div>
              </td>
              <td>42</td>
              <td><span className="badge badge-primary">MANAGER</span></td>
              <td><small className="text-muted">1 week ago</small></td>
              <td>$1,943</td>
              <td><a href className="text-muted"><i className="material-icons">more_vert</i></a></td>
            </tr>
            <tr className="selected">
              <td>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input js-check-selected-row" defaultChecked id="customCheck1_2" />
                  <label className="custom-control-label" htmlFor="customCheck1_2"><span className="text-hide">Check</span></label>
                </div>
              </td>
              <td>
                <div className="media align-items-center">
                  <div className="avatar avatar-xs mr-2">
                    <img src="assets/images/256_luke-porter-261779-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                  </div>
                  <div className="media-body">
                    <span className="js-lists-values-employee-name">Michael Smith</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="media align-items-center">
                  <a href>Black Ops</a>
                  <a href="#" className="rating-link"><i className="material-icons ml-2">star</i></a>
                </div>
              </td>
              <td>12</td>
              <td><span className="badge badge-warning">ADMIN</span></td>
              <td><small className="text-muted">3 days ago</small></td>
              <td>$12,402</td>
              <td><a href className="text-muted"><i className="material-icons">more_vert</i></a></td>
            </tr>
            <tr>
              <td>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input js-check-selected-row" id="customCheck2_2" />
                  <label className="custom-control-label" htmlFor="customCheck2_2"><span className="text-hide">Check</span></label>
                </div>
              </td>
              <td>
                <div className="media align-items-center">
                  <img src="assets/images/avatar/green.svg" className="mr-2" alt="avatar" />
                  <div className="media-body">
                    <span className="js-lists-values-employee-name">Connie Smith</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="media align-items-center">
                  <a href="#">Backend Ltd</a>
                  <a href="#" className="rating-link active"><i className="material-icons ml-2">star</i></a>
                </div>
              </td>
              <td>42</td>
              <td><span className="badge badge-success">USER</span></td>
              <td><small className="text-muted">1 week ago</small></td>
              <td>$1,943</td>
              <td><a href className="text-muted"><i className="material-icons">more_vert</i></a></td>
            </tr>
            <tr>
              <td>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input js-check-selected-row" id="customCheck3_2" />
                  <label className="custom-control-label" htmlFor="customCheck3_2"><span className="text-hide">Check</span></label>
                </div>
              </td>
              <td>
                <div className="media align-items-center">
                  <div className="avatar avatar-xs mr-2">
                    <img src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                  </div>
                  <div className="media-body">
                    <span className="js-lists-values-employee-name">John Connor</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="media align-items-center">
                  <a href>Frontted</a>
                  <a href="#" className="rating-link" onclick="document.getElementById('box').classList.toggle('grow');"><i className="material-icons ml-2">star</i></a>
                </div>
              </td>
              <td>42</td>
              <td><span className="badge badge-primary">MANAGER</span></td>
              <td><small className="text-muted">1 week ago</small></td>
              <td>$1,943</td>
              <td><a href className="text-muted"><i className="material-icons">more_vert</i></a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card-body text-right">
        15 <span className="text-muted">of 1,430</span> <a href="#" className="text-muted-light"><i className="material-icons ml-1">arrow_forward</i></a>
      </div>
    </div>
  </div>
</div>
    </>
}