export default function Coureses(){

    return <>
        <div className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page" style={{"padding-top":"60px"}}>
  <div className="page__heading border-bottom">
    <div className="container-fluid page__container d-flex align-items-center">
      <h1 className="mb-0">Courses</h1>
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
            <label htmlFor="published01" className="form-label mr-1">Status</label>
            <select id="published01" className="form-control custom-select" style={{"width":"200px"}}>
              <option selected>All</option>
              <option value={1}>In Progress</option>
              <option value={3}>New Releases</option>
            </select>
          </div>
        </div>
      </div>
    </form>
    <div className="row">
      <div className="col-md-3">
        <div className="card card__course">
          <div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
            <a className="card-header__title  justify-content-center align-self-center d-flex flex-column" href="#">
              <span><img src="assets/images/logos/react.svg" className="mb-1" style={{"width":"34px"}} alt="logo" /></span>
              <span className="course__title">React</span>
              <span className="course__subtitle">Learn the Basics</span>
            </a>
          </div>
          <div className="p-3">
            <div className="mb-2">
              <span className="mr-2">
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star_half</i></a>
              </span>
              <strong>4.7</strong><br />
              <small className="text-muted">(391 ratings)</small>
            </div>
            <div className="d-flex align-items-center">
              <strong className="h4 m-0">$49</strong>
              <a href="#" className="btn btn-primary ml-auto"><i className="material-icons">add_shopping_cart</i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card card__course">
          <div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
            <a className="card-header__title  justify-content-center align-self-center d-flex flex-column" href="#">
              <span><img src="assets/images/logos/vuejs.svg" className="mb-1" style={{"width":"34px"}} alt="logo" /></span>
              <span className="course__title">Vue.js</span>
              <span className="course__subtitle">Quick Tips</span>
            </a>
          </div>
          <div className="p-3">
            <div className="mb-2">
              <span className="mr-2">
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star_half</i></a>
              </span>
              <strong>4.7</strong><br />
              <small className="text-muted">(391 ratings)</small>
            </div>
            <div className="d-flex align-items-center">
              <strong className="h4 m-0">$49</strong>
              <a href="#" className="btn btn-primary ml-auto"><i className="material-icons">add_shopping_cart</i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card card__course">
          <div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
            <a className="card-header__title  justify-content-center align-self-center d-flex flex-column" href="#">
              <span><img src="assets/images/logos/angular.svg" className="mb-1" style={{"width":"34px"}} alt="logo" /></span>
              <span className="course__title">Angular</span>
              <span className="course__subtitle">Back to Basics</span>
            </a>
          </div>
          <div className="p-3">
            <div className="mb-2">
              <span className="mr-2">
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star_half</i></a>
              </span>
              <strong>4.7</strong><br />
              <small className="text-muted">(391 ratings)</small>
            </div>
            <div className="d-flex align-items-center">
              <strong className="h4 m-0">$49</strong>
              <a href="#" className="btn btn-primary ml-auto"><i className="material-icons">add_shopping_cart</i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card card__course">
          <div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
            <a className="card-header__title  justify-content-center align-self-center d-flex flex-column" href="#">
              <span><img src="assets/images/logos/javascript.svg" className="mb-1" style={{"width":"34px"}} alt="logo" /></span>
              <span className="course__title">Javascript</span>
              <span className="course__subtitle">ES6 and Beyond</span>
            </a>
          </div>
          <div className="p-3">
            <div className="mb-2">
              <span className="mr-2">
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star_half</i></a>
              </span>
              <strong>4.7</strong><br />
              <small className="text-muted">(391 ratings)</small>
            </div>
            <div className="d-flex align-items-center">
              <strong className="h4 m-0">$49</strong>
              <a href="#" className="btn btn-primary ml-auto"><i className="material-icons">add_shopping_cart</i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card card__course">
          <div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
            <a className="card-header__title  justify-content-center align-self-center d-flex flex-column" href="#">
              <span><img src="assets/images/logos/node.svg" className="mb-1" style={{"width":"34px"}} alt="logo" /></span>
              <span className="course__title">Node</span>
              <span className="course__subtitle">ES6 and Beyond</span>
            </a>
          </div>
          <div className="p-3">
            <div className="mb-2">
              <span className="mr-2">
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star_half</i></a>
              </span>
              <strong>4.7</strong><br />
              <small className="text-muted">(391 ratings)</small>
            </div>
            <div className="d-flex align-items-center">
              <strong className="h4 m-0">$49</strong>
              <a href="#" className="btn btn-primary ml-auto"><i className="material-icons">add_shopping_cart</i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card card__course">
          <div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
            <a className="card-header__title  justify-content-center align-self-center d-flex flex-column" href="#">
              <span><img src="assets/images/logos/gitlab.png" className="mb-1" style={{"width":"34px"}} alt="logo" /></span>
              <span className="course__title">Gitlab</span>
              <span className="course__subtitle">Git Workflows</span>
            </a>
          </div>
          <div className="p-3">
            <div className="mb-2">
              <span className="mr-2">
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star_half</i></a>
              </span>
              <strong>4.7</strong><br />
              <small className="text-muted">(391 ratings)</small>
            </div>
            <div className="d-flex align-items-center">
              <strong className="h4 m-0">$49</strong>
              <a href="#" className="btn btn-primary ml-auto"><i className="material-icons">add_shopping_cart</i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card card__course">
          <div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
            <a className="card-header__title  justify-content-center align-self-center d-flex flex-column" href="#">
              <span><img src="assets/images/logos/angular.svg" className="mb-1" style={{"width":"34px"}} alt="logo" /></span>
              <span className="course__title">Angular</span>
              <span className="course__subtitle">Typescript and Beyond</span>
            </a>
          </div>
          <div className="p-3">
            <div className="mb-2">
              <span className="mr-2">
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons icon-16pt">star_half</i></a>
              </span>
              <strong>4.7</strong><br />
              <small className="text-muted">(391 ratings)</small>
            </div>
            <div className="d-flex align-items-center">
              <strong className="h4 m-0">$49</strong>
              <a href="#" className="btn btn-primary ml-auto"><i className="material-icons">add_shopping_cart</i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className="d-flex flex-row align-items-center mb-3">
      <div className="form-inline">
        View
        <select className="custom-select ml-2">
          <option value={20} selected>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
        </select>
      </div>
      <div className="ml-auto">
        20 <span className="text-muted">of 100</span> <a href="#" className="icon-muted"><i className="material-icons float-right">arrow_forward</i></a>
      </div>
    </div>
  </div>
</div>
    </>
}