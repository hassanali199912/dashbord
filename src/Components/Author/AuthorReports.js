export default function AuthorReports() {
    return <>
        <div className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page" style={{"padding-top":"60px"}}>
  <div className="page__heading border-bottom">
    <div className="container-fluid page__container d-flex align-items-center">
      <h1 className="mb-0">Reports</h1>
    </div>
  </div>
  <div className="container-fluid page__container">
    <div className="card-group">
      <div className="card card-body text-center">
        <div className="d-flex flex-row align-items-center">
          <div className="card-header__title m-0"> <i className="material-icons icon-muted icon-30pt">assessment</i> Visits</div>
          <div className="text-amount ml-auto">3,642</div>
        </div>
      </div>
      <div className="card card-body text-center">
        <div className="d-flex flex-row align-items-center">
          <div className="card-header__title m-0"><i className="material-icons icon-muted icon-30pt">shopping_basket</i> Earnings</div>
          <div className="text-amount ml-auto">$12,311</div>
        </div>
      </div>
      <div className="card card-body text-center">
        <div className="d-flex flex-row align-items-center">
          <div className="card-header__title m-0"><i className="material-icons  icon-muted icon-30pt">perm_identity</i> Students</div>
          <div className="text-amount ml-auto">78</div>
        </div>
      </div>
    </div>
    <div className="card card-form d-flex flex-column flex-sm-row">
      <div className="card-form__body card-body-form-group flex">
        <div className="row">
          <div className="col-sm-auto">
            <div className="form-group">
              <label htmlFor="filter_name">Name</label>
              <input id="filter_name" type="text" className="form-control" placeholder="Search by name" />
            </div>
          </div>
          <div className="col-sm-auto">
            <div className="form-group">
              <label htmlFor="filter_category">Category</label><br />
              <select id="filter_category" className="custom-select" style={{"width":"200px"}}>
                <option value="all">All Categories</option>
              </select>
            </div>
          </div>
          <div className="col-sm-auto">
            <div className="form-group">
              <label htmlFor="filter_stock">Single Purchase?</label>
              <div className="custom-control custom-checkbox mt-sm-2">
                <input type="checkbox" className="custom-control-input" id="filter_stock" defaultChecked />
                <label className="custom-control-label" htmlFor="filter_stock">Yes</label>
              </div>
            </div>
          </div>
          <div className="col-sm-auto">
            <div className="form-group" style={{"width":"200px"}}>
              <label htmlFor="filter_date">Order date</label>
              <input id="filter_date" type="text" className="form-control" placeholder="Select date ..." defaultValue="13/03/2018 to 20/03/2018" data-toggle="flatpickr" data-flatpickr-mode="range" data-flatpickr-alt-format="d/m/Y" data-flatpickr-date-format="d/m/Y" />
            </div>
          </div>
        </div>
      </div>
      <button className="btn bg-white border-left border-top border-top-sm-0 rounded-top-0 rounded-top-sm rounded-left-sm-0"><i className="material-icons text-primary icon-20pt">refresh</i></button>
    </div>
    <div className="row">
      <div className="col-lg-7">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center text-center mb-4">
              <div className="border-right pr-4 mr-4">
                <div className="mb-0">Total Views</div>
                <div className="text-amount">4,412</div>
              </div>
              <div>
                <div className="mb-0">Conv. Ratio</div>
                <div className="text-amount">4%</div>
              </div>
              <div className="ml-auto">
                <a href="#" className="btn btn-primary">Export Data <i className="material-icons">file_download</i></a>
              </div>
            </div>
            <div className="chart" style={{"height":"295px"}}>
              <canvas id="viewsChart">
                <span style={{"font-size":"1rem"}}><strong>Views</strong> area chart goes here.</span>
              </canvas>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="card">
          <div className="card-header card-header-large bg-white d-flex align-items-center">
            <div className="flatpickr-wrapper flex">
              <div id="recent_orders_date" data-toggle="flatpickr" data-flatpickr-wrap="true" data-flatpickr-static="true" data-flatpickr-mode="range" data-flatpickr-alt-format="d/m/Y" data-flatpickr-date-format="d/m/Y">
                <h4 className="card-header__title">Recent Transactions</h4>
                <a href="javascript:void(0)" className="link-date" data-toggle>13/03/2018 to 20/03/2018</a>
                <input className="d-none" type="hidden" defaultValue="13/03/2018 to 20/03/2018" data-input />
              </div>
            </div>
            <i className="material-icons icon-muted">help_outline</i>
          </div>
          <div className="card-body py-0">
            <div className="list-group list-group-small list-group-flush">
              <div className="list-group-item d-flex align-items-center px-0">
                <div className="mr-3 flex"> <i className="material-icons icon-18pt icon-muted">contacts</i> Sherri J. Cardenas</div>
                <div className="mr-3 text-dark-gray">3 days ago</div>
                <div><a href>$123</a></div>
              </div>
              <div className="list-group-item d-flex align-items-center px-0">
                <div className="mr-3 flex"> <i className="material-icons icon-18pt icon-muted">contacts</i> Joseph S. Ferland</div>
                <div className="mr-3 text-dark-gray">2 days ago</div>
                <div><a href>$246</a></div>
              </div>
              <div className="list-group-item d-flex align-items-center px-0">
                <div className="mr-3 flex"> <i className="material-icons icon-18pt icon-muted">contacts</i> Bryan K. Davis</div>
                <div className="mr-3 text-dark-gray">1 day ago</div>
                <div><a href>$369</a></div>
              </div>
              <div className="list-group-item d-flex align-items-center px-0">
                <div className="mr-3 flex"> <i className="material-icons icon-18pt icon-muted">contacts</i> Elizabeth J. Ohara</div>
                <div className="mr-3 text-dark-gray">4 hours ago</div>
                <div><a href>$492</a></div>
              </div>
              <div className="list-group-item d-flex align-items-center px-0">
                <div className="mr-3 flex"> <i className="material-icons icon-18pt icon-muted">contacts</i> Kaci M. Langston</div>
                <div className="mr-3 text-dark-gray">just now</div>
                <div><a href>$615</a></div>
              </div>
            </div>
          </div>
          <div className="card-footer text-center">
            <a className="text-muted" href>View All (54)</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
}