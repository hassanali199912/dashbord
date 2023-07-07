export default function AuthorQuizManager() {
    return <>
        <div className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page" style={{"padding-top":"60px"}}>
  <div className="page__heading border-bottom">
    <div className="container-fluid page__container d-flex align-items-center">
      <h1 className="mb-0">Quiz Manager</h1>
      <a href="#" className="btn btn-success ml-auto"><i className="material-icons">add</i> New Quiz</a>
    </div>
  </div>
  <div className="container-fluid page__container">
    <form action="#" className="mb-3 border-bottom">
      <div className="form-group form-inline">
        <label className="form-label mr-1" htmlFor="custom-select">Category</label><br />
        <select id="custom-select" className="form-control custom-select" style={{"width":"200px"}}>
          <option selected>All categories</option>
          <option value={1}>Vue.js</option>
          <option value={2}>Node.js</option>
          <option value={3}>GitHub</option>
        </select>
      </div>
    </form>
    <div className="card-columns">
      <div className="card">
        <div className="card-body media">
          <div className="media-left">
            <a href="#" className="avatar avatar-lg mr-1">
              <img src="assets/images/logos/vuejs.svg" alt="Card image cap" className="avatar-course-img" />
            </a>
          </div>
          <div className="media-body align-self-center">
            <h4 className="card-title mb-0"><a href="#">Vue.js Deploy Quiz</a></h4>
            <span className="text-muted">25 Completed</span>
          </div>
        </div>
        <div className="card-footer d-flex bg-light">
          <div>
            <a href="#" className="btn btn-light btn-sm">Pending Review <span className="badge badge-soft-secondary ml-1">5</span></a>
          </div>
          <div className="ml-auto">
            <a href="#" className="btn btn-primary btn-sm"><i className="material-icons icon-16pt">edit</i> Edit </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body media">
          <div className="media-left">
            <a href="#" className="avatar avatar-lg mr-1">
              <img src="assets/images/logos/gitlab.png" alt="Card image cap" className="avatar-course-img" />
            </a>
          </div>
          <div className="media-body align-self-center">
            <h4 className="card-title mb-0"><a href="#">GitHub Basic Setup</a></h4>
            <span className="text-muted">410 Completed</span>
          </div>
        </div>
        <div className="card-footer d-flex bg-light">
          <div>
            <a href="#" className="btn btn-light btn-sm">Pending Review <span className="badge badge-soft-secondary ml-1">5</span></a>
          </div>
          <div className="ml-auto">
            <a href="#" className="btn btn-primary btn-sm"><i className="material-icons icon-16pt">edit</i> Edit </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body media">
          <div className="media-left">
            <a href="#" className="avatar avatar-lg mr-1">
              <img src="assets/images/logos/javascript.svg" alt="Card image cap" className="avatar-course-img" />
            </a>
          </div>
          <div className="media-body align-self-center">
            <h4 className="card-title mb-0"><a href="#">Javascript for Front-End</a></h4>
            <span className="text-muted">50 Completed</span>
          </div>
        </div>
        <div className="card-footer d-flex bg-light">
          <div>
            <a href="#" className="btn btn-light btn-sm">Pending Review <span className="badge badge-soft-secondary ml-1">5</span></a>
          </div>
          <div className="ml-auto">
            <a href="#" className="btn btn-primary btn-sm"><i className="material-icons icon-16pt">edit</i> Edit </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
}