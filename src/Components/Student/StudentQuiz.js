export default function StudentQuiz() {
    return <>
        <div className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page" style={{"padding-top":"60px"}}>
  <div className="page__heading border-bottom">
    <div className="container-fluid page__container d-flex align-items-center">
      <h1 className="mb-0">Quiz</h1>
      <div className="ml-auto d-flex align-items-center">
        {/* TEMPLATE USED IN COUNTDOWN.JS */}
        {/* <div class="d-flex align-items-center">
  <div class="card mr-1 mb-0">
    <div class="p-1 px-2">
      <span class="h4 m-0 text-primary">3</span> 
      <span class="text-muted">hrs</span>
    </div>
  </div>
  <div class="mr-1">:</div>
  <div class="card mr-1 mb-0">
      <div class="p-1 px-2">
        <span class="h4 m-0 text-primary">3</span> 
        <span class="text-muted">min</span>
      </div>
    </div>
    <div class="mr-1">:</div>
    <div class="card mb-0 bg-light">
      <div class="p-1 px-2">
        <span class="h4 m-0 text-primary">3</span> 
        <span class="text-muted">sec</span>
      </div>
    </div>
  </div> */}
        <div className="countdown" data-value={4} data-unit="hour" />
        {/* <span class="badge badge-primary ml-2"><div class="material-icons icon-16pt">access_time</div></span> */}
      </div>
    </div>
  </div>
  <div className="container-fluid page__container">
    <div className="row">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <div className="media align-items-center">
              <div className="media-left">
                <h4 className="m-0 text-primary mr-2"><strong>#9</strong></h4>
              </div>
              <div className="media-body">
                <h4 className="card-title m-0">
                  Github command to deploy comits?
                </h4>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input id="customCheck01" type="checkbox" className="custom-control-input" />
                <label htmlFor="customCheck01" className="custom-control-label">git push</label>
              </div>
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input id="customCheck02" type="checkbox" className="custom-control-input" />
                <label htmlFor="customCheck02" className="custom-control-label">git commit -m "message"</label>
              </div>
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input id="customCheck03" type="checkbox" className="custom-control-input" />
                <label htmlFor="customCheck03" className="custom-control-label">git pull</label>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-light">Skip</a>
            <a href="#" className="btn btn-success float-right">Submit <i className="material-icons btn__icon--right">arrow_forward</i></a>
          </div>
        </div>
      </div>
      <div className="col-md-4 ">
        <div className="list-group">
          <a href="#" className="list-group-item active">
            <span className="media align-items-center">
              <span className="media-left mr-2">
                <span className="btn btn-light btn-sm">#9</span>
              </span>
              <span className="media-body">
                Github command to deploy comits?
              </span>
            </span>
          </a>
          <a href="#" className="list-group-item">
            <span className="media align-items-center">
              <span className="media-left mr-2">
                <span className="btn btn-light btn-sm">#10</span>
              </span>
              <span className="media-body">
                What's the difference between private and public repos?
              </span>
            </span>
          </a>
          <a href="#" className="list-group-item">
            <span className="media align-items-center">
              <span className="media-left mr-2">
                <span className="btn btn-light btn-sm">#11</span>
              </span>
              <span className="media-body">
                What is the purpose of a branch?
              </span>
            </span>
          </a>
          <a href="#" className="list-group-item">
            <span className="media align-items-center">
              <span className="media-left mr-2">
                <span className="btn btn-light btn-sm">#12</span>
              </span>
              <span className="media-body">
                Final Question?
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
}