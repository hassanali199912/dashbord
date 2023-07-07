export default function StudentDashbord() {
    
    return <>
        <div className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page" style={{"padding-top":"60px"}}>
  <div className="container-fluid page__container">
    <div className="alert alert-soft-warning d-flex align-items-center card-margin" role="alert">
      <i className="material-icons mr-3">error_outline</i>
      <div className="text-body">You have <strong>5 days left</strong> on your subscription</div>
      <a href className="btn btn-warning ml-auto">Upgrade</a>
    </div>
    <div className="row">
      <div className="col-lg-7">
        <div className="card">
          <div className="card-header card-header-large bg-light d-flex align-items-center">
            <div className="flex">
              <h4 className="card-header__title">In Progress</h4>
              <div className="card-subtitle text-muted">Your recent courses</div>
            </div>
            <div className="ml-auto">
              <a href="student-courses.html" className="btn btn-light">Browse All</a>
            </div>
          </div>
          <ul className="list-group list-group-flush mb-0" style={{"z-index":"initial"}}>
            <li className="list-group-item" style={{"z-index":"initial"}}>
              <div className="d-flex align-items-center">
                <a href="#" className="mr-3">
                  <img src="assets/images/logos/vuejs.svg" alt="course" className />
                </a>
                <div className="flex">
                  <a href="#" className="text-body"><strong>Learn Vue.js Fundamentals</strong></a>
                  <div className="d-flex align-items-center">
                    <div className="progress" style={{"width":"100px","height":"4px"}}>
                      <div className="progress-bar bg-vuejs" role="progressbar" style={{"width":"25%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <small className="text-muted ml-2">25%</small>
                  </div>
                </div>
                <div className="dropdown ml-3">
                  <a href="#" className="dropdown-toggle text-muted" data-caret="false" data-toggle="dropdown">
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">View Stats</a>
                    <a className="dropdown-item" href="#">Proceed</a>
                    <a className="dropdown-item" href="#">Close</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item" style={{"z-index":"initial"}}>
              <div className="d-flex align-items-center">
                <a href="#" className="mr-3">
                  <img src="assets/images/logos/angular.svg" alt="course" className />
                </a>
                <div className="flex">
                  <a href="#" className="text-body"><strong>Angular in Steps</strong></a>
                  <div className="d-flex align-items-center">
                    <div className="progress" style={{"width":"100px","height":"4px"}}>
                      <div className="progress-bar bg-angular" role="progressbar" style={{"width":"100%"}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <small className="text-muted ml-2">100%</small>
                  </div>
                </div>
                <div className="dropdown ml-3">
                  <a href="#" className="dropdown-toggle text-muted" data-caret="false" data-toggle="dropdown">
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">View Stats</a>
                    <a className="dropdown-item" href="#">Proceed</a>
                    <a className="dropdown-item" href="#">Close</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item" style={{"z-index":"initial"}}>
              <div className="d-flex align-items-center">
                <a href="#" className="mr-3">
                  <img src="assets/images/logos/javascript.svg" alt="course" className />
                </a>
                <div className="flex">
                  <a href="#" className="text-body"><strong>ES6 Foundations</strong></a>
                  <div className="d-flex align-items-center">
                    <div className="progress" style={{"width":"100px","height":"4px"}}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{"width":"80%"}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <small className="text-muted ml-2">80%</small>
                  </div>
                </div>
                <div className="dropdown ml-3">
                  <a href="#" className="dropdown-toggle text-muted" data-caret="false" data-toggle="dropdown">
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">View Stats</a>
                    <a className="dropdown-item" href="#">Proceed</a>
                    <a className="dropdown-item" href="#">Close</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="card-header card-header-large bg-light d-flex align-items-center">
            <div className="flex">
              <h4 className="card-header__title">My Quizes</h4>
              <div className="card-subtitle text-muted">Skill tests</div>
            </div>
            <div className="dropdown ml-auto">
              <a className="btn btn-sm btn-light" href="#">View all</a>
            </div>
          </div>
          <ul className="list-group list-group-flush mb-0">
            <li className="list-group-item">
              <div className="media align-items-center">
                <div className="media-body">
                  <a className="text-body mb-1" href="#"><strong>Level 1 HTML</strong></a><br />
                  <div className="d-flex align-items-center">
                    <i className="material-icons icon-16pt text-muted mr-1">queue_play_next</i> <a href="take-course.html" className="small text-muted">Basics of HTML</a>
                  </div>
                </div>
                <div className="media-right text-center d-flex align-items-center">
                  <span className="badge badge-warning mr-2">
                    Good
                  </span>
                  <h4 className="mb-0 text-warning">5.8</h4>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media align-items-center">
                <div className="media-body">
                  <a className="text-body mb-1" href="#"><strong>Level 2 Angular</strong></a><br />
                  <div className="d-flex align-items-center">
                    <i className="material-icons icon-16pt text-muted mr-1">queue_play_next</i> <a href="take-course.html" className="small text-muted">Angular in Steps</a>
                  </div>
                </div>
                <div className="media-right text-center d-flex align-items-center">
                  <span className="badge badge-success mr-2">
                    Great
                  </span>
                  <h4 className="mb-0 text-success">9.8</h4>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media align-items-center">
                <div className="media-body">
                  <a className="text-body mb-1" href="#"><strong>Graduation</strong></a><br />
                  <div className="d-flex align-items-center">
                    <i className="material-icons icon-16pt text-muted mr-1">queue_play_next</i> <a href="take-course.html" className="small text-muted">Bootstrap Foundations</a>
                  </div>
                </div>
                <div className="media-right text-center d-flex align-items-center">
                  <span className="badge badge-danger mr-2">
                    Failed
                  </span>
                  <h4 className="mb-0 text-danger">2.8</h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-5">
        {/* START ACTIVITY */}
        <div className="card">
          <div className="card-header card-header-large bg-white d-flex align-items-center">
            <h4 className="card-header__title flex m-0">Recent Activity</h4>
            <div className=" flatpickr-wrapper flatpickr-calendar-right d-flex ml-auto">
              <div data-toggle="flatpickr" data-flatpickr-wrap="true" data-flatpickr-static="true" data-flatpickr-mode="range" data-flatpickr-alt-format="d/m/Y" data-flatpickr-date-format="d/m/Y">
                <a href="javascript:void(0)" className="link-date" data-toggle>13/03/2018 <span className="text-muted mx-1">to</span> 20/03/2018</a>
                <input className="d-none" type="hidden" defaultValue="13/03/2018 to 20/03/2018" data-input />
              </div>
            </div>
          </div>
          <div className="card-header card-header-tabs-basic nav" role="tablist">
            <a href="#activity_all" className="active" data-toggle="tab" role="tab" aria-controls="activity_all" aria-selected="true">All</a>
            <a href="#activity_purchases" data-toggle="tab" role="tab" aria-controls="activity_purchases" aria-selected="false">Purchases</a>
            <a href="#activity_emails" data-toggle="tab" role="tab" aria-controls="activity_emails" aria-selected="false">Emails</a>
            <a href="#activity_quotes" data-toggle="tab" role="tab" aria-controls="activity_quotes" aria-selected="false">Quotes</a>
          </div>
          <div className="list-group tab-content list-group-flush">
            <div className="tab-pane active show fade" id="activity_all">
              <div className="list-group-item list-group-item-action d-flex align-items-center ">
                <div className="avatar avatar-xs mr-3">
                  <span className="avatar-title rounded-circle bg-primary">
                    <img src="assets/images/logo.svg" width={20} alt="avatar" />
                  </span>
                </div>
                <div className="flex">
                  <div className="d-flex align-items-middle">
                    <div className="avatar avatar-xxs mr-1">
                      <img src="assets/images/256_rsz_1andy-lee-642320-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                    </div>
                    <strong className="text-15pt mr-1">Jenell D. Matney</strong>
                  </div>
                  <small className="text-muted">4 days ago</small>
                </div>
                <div>$573</div>
                <i className="material-icons icon-muted ml-3">arrow_forward</i>
              </div>
              <div className="list-group-item list-group-item-action d-flex align-items-center ">
                <div className="avatar avatar-xs mr-3">
                  <span className="avatar-title rounded-circle bg-primary">
                    <img src="assets/images/logo.svg" width={20} alt="avatar" />
                  </span>
                </div>
                <div className="flex">
                  <div className="d-flex align-items-middle">
                    <div className="avatar avatar-xxs mr-1">
                      <img src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                    </div>
                    <strong className="text-15pt mr-1">Sherri J. Cardenas</strong>
                  </div>
                  <small>Improve spacings on Projects page</small>
                </div>
                <small className="text-muted">3 days ago</small>
                <i className="material-icons icon-muted ml-3">arrow_forward</i>
              </div>
              <div className="list-group-item list-group-item-action d-flex align-items-center  bg-light ">
                <div className="avatar avatar-xs mr-3">
                  <span className="avatar-title rounded-circle bg-primary">
                    <img src="assets/images/logo.svg" width={20} alt="avatar" />
                  </span>
                </div>
                <div className="flex">
                  <div className="d-flex align-items-middle">
                    <div className="avatar avatar-xxs mr-1">
                      <img src="assets/images/256_jeremy-banks-798787-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                    </div>
                    <strong className="text-15pt mr-1">Joseph S. Ferland</strong>
                  </div>
                  <small className="text-muted">2 days ago</small>
                </div>
                <div>$244</div>
                <i className="material-icons icon-muted ml-3">arrow_forward</i>
              </div>
              <div className="list-group-item list-group-item-action d-flex align-items-center  bg-light ">
                <div className="avatar avatar-xs mr-3">
                  <span className="avatar-title rounded-circle bg-primary">
                    <img src="assets/images/logo.svg" width={20} alt="avatar" />
                  </span>
                </div>
                <div className="flex">
                  <div className="d-flex align-items-middle">
                    <div className="avatar avatar-xxs mr-1">
                      <img src="assets/images/256_joao-silas-636453-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                    </div>
                    <strong className="text-15pt mr-1">Bryan K. Davis</strong>
                  </div>
                  <small className="text-muted">1 day ago</small>
                </div>
                <div>$664</div>
                <i className="material-icons icon-muted ml-3">arrow_forward</i>
              </div>
              <div className="list-group-item list-group-item-action d-flex align-items-center  bg-light ">
                <div className="avatar avatar-xs mr-3">
                  <span className="avatar-title rounded-circle bg-primary">
                    <img src="assets/images/logo.svg" width={20} alt="avatar" />
                  </span>
                </div>
                <div className="flex">
                  <div className="d-flex align-items-middle">
                    <div className="avatar avatar-xxs mr-1">
                      <img src="assets/images/256_michael-dam-258165-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                    </div>
                    <strong className="text-15pt mr-1">Kaci M. Langston</strong>
                  </div>
                  <small className="text-muted">just now</small>
                </div>
                <div>$631</div>
                <i className="material-icons icon-muted ml-3">arrow_forward</i>
              </div>
              <div className="card-footer text-center border-0">
                <a className="text-muted" href>View All (54)</a>
              </div>
            </div>
            <div className="tab-pane" id="activity_purchases">
              <div className="list-group-item list-group-item-action d-flex align-items-center ">
                <div className="avatar avatar-xs mr-3">
                  <span className="avatar-title rounded-circle bg-success">
                    <i className="material-icons">monetization_on</i>
                  </span>
                </div>
                <div className="flex">
                  <div className="d-flex align-items-middle">
                    <div className="avatar avatar-xxs mr-1">
                      <img src="assets/images/256_rsz_1andy-lee-642320-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                    </div>
                    <strong className="text-15pt mr-1">Sherri J. Cardenas</strong>
                  </div>
                  <small className="text-muted">4 days ago</small>
                </div>
                <div>$573</div>
                <i className="material-icons icon-muted ml-3">arrow_forward</i>
              </div>
              <div className="list-group-item list-group-item-action d-flex align-items-center ">
                <div className="avatar avatar-xs mr-3">
                  <span className="avatar-title rounded-circle bg-success">
                    <i className="material-icons">monetization_on</i>
                  </span>
                </div>
                <div className="flex">
                  <div className="d-flex align-items-middle">
                    <div className="avatar avatar-xxs mr-1">
                      <img src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                    </div>
                    <strong className="text-15pt mr-1">Joseph S. Ferland</strong>
                  </div>
                  <small className="text-muted">3 days ago</small>
                </div>
                <div>$612</div>
                <i className="material-icons icon-muted ml-3">arrow_forward</i>
              </div>
              <div className="list-group-item list-group-item-action d-flex align-items-center ">
                <div className="avatar avatar-xs mr-3">
                  <span className="avatar-title rounded-circle bg-success">
                    <i className="material-icons">monetization_on</i>
                  </span>
                </div>
                <div className="flex">
                  <div className="d-flex align-items-middle">
                    <div className="avatar avatar-xxs mr-1">
                      <img src="assets/images/256_jeremy-banks-798787-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                    </div>
                    <strong className="text-15pt mr-1">Bryan K. Davis</strong>
                  </div>
                  <small className="text-muted">2 days ago</small>
                </div>
                <div>$244</div>
                <i className="material-icons icon-muted ml-3">arrow_forward</i>
              </div>
              <div className="list-group-item list-group-item-action d-flex align-items-center  bg-light ">
                <div className="avatar avatar-xs mr-3">
                  <span className="avatar-title rounded-circle bg-success">
                    <i className="material-icons">monetization_on</i>
                  </span>
                </div>
                <div className="flex">
                  <div className="d-flex align-items-middle">
                    <div className="avatar avatar-xxs mr-1">
                      <img src="assets/images/256_joao-silas-636453-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                    </div>
                    <strong className="text-15pt mr-1">Kaci M. Langston</strong>
                  </div>
                  <small className="text-muted">1 day ago</small>
                </div>
                <div>$664</div>
                <i className="material-icons icon-muted ml-3">arrow_forward</i>
              </div>
              <div className="list-group-item list-group-item-action d-flex align-items-center  bg-light ">
                <div className="avatar avatar-xs mr-3">
                  <span className="avatar-title rounded-circle bg-success">
                    <i className="material-icons">monetization_on</i>
                  </span>
                </div>
                <div className="flex">
                  <div className="d-flex align-items-middle">
                    <div className="avatar avatar-xxs mr-1">
                      <img src="assets/images/256_michael-dam-258165-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                    </div>
                    <strong className="text-15pt mr-1" />
                  </div>
                  <small className="text-muted">just now</small>
                </div>
                <div>$631</div>
                <i className="material-icons icon-muted ml-3">arrow_forward</i>
              </div>
            </div>
            <div className="tab-pane" id="activity_emails">
              <div className="list-group-item list-group-item-action d-flex align-items-center ">
                <div className="avatar avatar-xs mr-3">
                  <span className="avatar-title rounded-circle bg-secondary">
                    <i className="material-icons">email</i>
                  </span>
                </div>
                <div className="flex">
                  <div className="d-flex align-items-middle">
                    <div className="avatar avatar-xxs mr-1">
                      <img src="assets/images/256_rsz_1andy-lee-642320-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                    </div>
                    <strong className="text-15pt mr-1">Jenell D. Matney</strong>
                  </div>
                  <small>Confirmation required for design</small>
                </div>
                <small className="text-muted">4 days ago</small>
                <i className="material-icons icon-muted ml-3">arrow_forward</i>
              </div>
              <div className="list-group-item list-group-item-action d-flex align-items-center ">
                <div className="avatar avatar-xs mr-3">
                  <span className="avatar-title rounded-circle bg-secondary">
                    <i className="material-icons">email</i>
                  </span>
                </div>
                <div className="flex">
                  <div className="d-flex align-items-middle">
                    <div className="avatar avatar-xxs mr-1">
                      <img src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                    </div>
                    <strong className="text-15pt mr-1">Sherri J. Cardenas</strong>
                  </div>
                  <small>Improve spacings on Projects page</small>
                </div>
                <small className="text-muted">3 days ago</small>
                <i className="material-icons icon-muted ml-3">arrow_forward</i>
              </div>
              <div className="list-group-item list-group-item-action d-flex align-items-center ">
                <div className="avatar avatar-xs mr-3">
                  <span className="avatar-title rounded-circle bg-secondary">
                    <i className="material-icons">email</i>
                  </span>
                </div>
                <div className="flex">
                  <div className="d-flex align-items-middle">
                    <div className="avatar avatar-xxs mr-1">
                      <img src="assets/images/256_jeremy-banks-798787-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                    </div>
                    <strong className="text-15pt mr-1">Joseph S. Ferland</strong>
                  </div>
                  <small>You unlocked a new Badge</small>
                </div>
                <small className="text-muted">2 days ago</small>
                <i className="material-icons icon-muted ml-3">arrow_forward</i>
              </div>
            </div>
            <div className="tab-pane" id="activity_quotes" />
          </div>
        </div>
        {/* END ACTIVITY */}
        {/* START SKILLS */}
        <div className="card">
          <div className="card-header">
            <h4 className="card-header__title">Skills</h4>
          </div>
          <div className="card-body">
            <ul className="list-unstyled list-skills">
              <li>
                <div>HTML</div>
                <div className="flex">
                  <div className="progress" style={{"height":"4px"}}>
                    <div className="progress-bar" role="progressbar" style={{"width":"61%"}} aria-valuenow={61} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="text-dark-gray"><strong>61%</strong></div>
              </li>
              <li>
                <div>CSS/SCSS</div>
                <div className="flex">
                  <div className="progress" style={{"height":"4px"}}>
                    <div className="progress-bar bg-success" role="progressbar" style={{"width":"39%"}} aria-valuenow={39} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="text-dark-gray"><strong>39%</strong></div>
              </li>
              <li>
                <div>JAVASCRIPT</div>
                <div className="flex">
                  <div className="progress" style={{"height":"4px"}}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{"width":"76%"}} aria-valuenow={76} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="text-dark-gray"><strong>76%</strong></div>
              </li>
              <li>
                <div>RUBY ON RAILS</div>
                <div className="flex">
                  <div className="progress" style={{"height":"4px"}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{"width":"28%"}} aria-valuenow={28} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="text-dark-gray"><strong>28%</strong></div>
              </li>
              <li>
                <div>VUEJS</div>
                <div className="flex">
                  <div className="progress" style={{"height":"4px"}}>
                    <div className="progress-bar bg-vuejs" role="progressbar" style={{"width":"50%"}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="text-dark-gray"><strong>50%</strong></div>
              </li>
            </ul>
          </div>
          <div className="card-footer text-center border-0">
            <a href="#">
              <span className="text-muted">View All</span>
            </a>
          </div>
        </div>
        {/* END SKILLS */}
      </div>
    </div>
  </div>
</div>
    </>
};
