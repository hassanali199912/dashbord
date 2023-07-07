export default function AuthorCourses() {
    return <>
        <div className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page" style={{"padding-top":"60px"}}>
  <div className="page__heading border-bottom">
    <div className="container-fluid page__container d-flex align-items-center">
      <h1 className="mb-0">Courses</h1>
      <a href="quiz-edit.html" className="btn btn-success ml-auto"><i className="material-icons">add</i> New Course</a>
    </div>
  </div>
  <div className="container-fluid page__container">
    <form action="#" className="mb-3 border-bottom pb-3">
      <div className="d-flex">
        <div className="search-form mr-3 search-form--light">
          <input type="text" className="form-control" placeholder="Search courses" id="searchSample02" />
          <button className="btn" type="button"><i className="material-icons">search</i></button>
        </div>
        <div className="form-inline ml-auto">
          <div className="form-group mr-3">
            <label htmlFor="custom-select" className="form-label mr-1">Category</label>
            <select id="custom-select" className="form-control custom-select" style={{"width":"200px"}}>
              <option selected>All categories</option>
              <option value={1}>Vue.js</option>
              <option value={2}>Node.js</option>
              <option value={3}>GitHub</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="published01" className="form-label mr-1">Published</label>
            <select id="published01" className="form-control custom-select" style={{"width":"200px"}}>
              <option selected>Published</option>
              <option value={1}>Draft</option>
              <option value={3}>All</option>
            </select>
          </div>
        </div>
      </div>
    </form>
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column flex-sm-row">
              <a href="#" className="avatar mb-3 w-xs-plus-down-100 mr-sm-3">
                <img src="assets/images/logos/vuejs.svg" alt="Card image cap" className="avatar-course-img" />
              </a>
              <div className="flex" style={{"min-width":"200px"}}>
                <div className="d-flex">
                  <div>
                    <h4 className="card-title mb-1"><a href="#">Learn Vue.js</a></h4>
                    <p className="text-muted">Let’s start with a quick tour of Vue’s data binding features.</p>
                  </div>
                  <div className="dropdown ml-auto">
                    <a href="#" className="dropdown-toggle text-muted" data-caret="false" data-toggle="dropdown">
                      <i className="material-icons">more_vert</i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Edit Course</a>
                      <a className="dropdown-item" href="#">Statistics</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#">Archive</a>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-end">
                  <div className="d-flex flex flex-column mr-3">
                    <div className="d-flex align-items-center py-2 border-bottom">
                      <span className="mr-2">$1,230/mo</span>
                      <small className="text-muted ml-auto">34 SALES</small>
                    </div>
                    <div className="d-flex align-items-center py-2">
                      <span className="badge badge-vuejs mr-2">VUEJS</span>
                      <span className="badge badge-soft-secondary">INTERMEDIATE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column flex-sm-row">
              <a href="#" className="avatar mb-3 w-xs-plus-down-100 mr-sm-3">
                <img src="assets/images/logos/node.svg" alt="Card image cap" className="avatar-course-img" />
              </a>
              <div className="flex" style={{"min-width":"200px"}}>
                <div className="d-flex">
                  <div>
                    <h4 className="card-title mb-1"><a href="#">Npm &amp; Gulp Advanced Workflow</a></h4>
                    <p className="text-muted">Learn the basics of Github and become a power Github developer.</p>
                  </div>
                  <div className="dropdown ml-auto">
                    <a href="#" className="dropdown-toggle text-muted" data-caret="false" data-toggle="dropdown">
                      <i className="material-icons">more_vert</i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Edit Course</a>
                      <a className="dropdown-item" href="#">Statistics</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#">Archive</a>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-end">
                  <div className="d-flex flex flex-column mr-3">
                    <div className="d-flex align-items-center py-2 border-bottom">
                      <span className="mr-2">$421/mo</span>
                      <small className="text-muted ml-auto">12 SALES</small>
                    </div>
                    <div className="d-flex align-items-center py-2">
                      <span className="badge badge-node mr-2">NODE</span>
                      <span className="badge badge-soft-secondary">INTERMEDIATE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column flex-sm-row">
              <a href="#" className="avatar mb-3 w-xs-plus-down-100 mr-sm-3">
                <img src="assets/images/logos/gitlab.png" alt="Card image cap" className="avatar-course-img" />
              </a>
              <div className="flex" style={{"min-width":"200px"}}>
                <div className="d-flex">
                  <div>
                    <h4 className="card-title mb-1"><a href="#">Gitlab for Beginners</a></h4>
                    <p className="text-muted">Developing static website with fast and advanced gulp setup.</p>
                  </div>
                  <div className="dropdown ml-auto">
                    <a href="#" className="dropdown-toggle text-muted" data-caret="false" data-toggle="dropdown">
                      <i className="material-icons">more_vert</i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Edit Course</a>
                      <a className="dropdown-item" href="#">Statistics</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#">Archive</a>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-end">
                  <div className="d-flex flex flex-column mr-3">
                    <div className="d-flex align-items-center py-2 border-bottom">
                      <span className="mr-2">$2,191/mo</span>
                      <small className="text-muted ml-auto">50 SALES</small>
                    </div>
                    <div className="d-flex align-items-center py-2">
                      <span className="badge badge-gitlab mr-2">GITLAB</span>
                      <span className="badge badge-soft-secondary">INTERMEDIATE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column flex-sm-row">
              <a href="#" className="avatar mb-3 w-xs-plus-down-100 mr-sm-3">
                <img src="assets/images/logos/rails.svg" alt="Card image cap" className="avatar-course-img" />
              </a>
              <div className="flex" style={{"min-width":"200px"}}>
                <div className="d-flex">
                  <div>
                    <h4 className="card-title mb-1"><a href="#">Ruby on Rails Workflows</a></h4>
                    <p className="text-muted">Let’s start with a quick tour of Vue’s data binding features.</p>
                  </div>
                  <div className="dropdown ml-auto">
                    <a href="#" className="dropdown-toggle text-muted" data-caret="false" data-toggle="dropdown">
                      <i className="material-icons">more_vert</i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Edit Course</a>
                      <a className="dropdown-item" href="#">Statistics</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#">Archive</a>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-end">
                  <div className="d-flex flex flex-column mr-3">
                    <div className="d-flex align-items-center py-2 border-bottom">
                      <span className="mr-2">$300/mo</span>
                      <small className="text-muted ml-auto">5 SALES</small>
                    </div>
                    <div className="d-flex align-items-center py-2">
                      <span className="badge badge-angular mr-2">ANGULAR</span>
                      <span className="badge badge-soft-secondary">INTERMEDIATE</span>
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
</div>
    </>
}