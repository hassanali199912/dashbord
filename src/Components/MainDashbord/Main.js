export default function Main() {
  return (
    <>
      <div
        className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page"
        style={{ paddingTop: "60px" }}
      >
        <div className="page__heading">
          <div className="container-fluid page__container">
            <h1 className="mb-0">Dashboard</h1>
          </div>
        </div>
        <div className="bg-white border-bottom mb-3">
          <div className="container-fluid nav nav-tabs" role="tablist">
            <a
              href="#activity_all"
              className="active"
              data-toggle="tab"
              role="tab"
              aria-controls="activity_all"
              aria-selected="true"
            >
              Overview
            </a>
            <a
              href="#activity_purchases"
              data-toggle="tab"
              role="tab"
              aria-selected="false"
            >
              Pricing
            </a>
          </div>
        </div>
        <div className="container-fluid page__container">
          <div className="tab-content">
            <div className="tab-pane active show fade" id="activity_all">
              {/* FIRST TAB CONTENT */}
              <div className="row card-group-row">
                <div className="col-lg-4 col-md-6 card-group-row__col">
                  <div className="card card-group-row__card">
                    <div className="card-body-x-lg card-body d-flex flex-row align-items-center">
                      <div className="flex">
                        <div className="card-header__title text-muted mb-2 d-flex">
                          Current Month{" "}
                          <span className="badge badge-warning ml-2">391</span>
                        </div>
                        <span className="h4 m-0">
                          $24,000{" "}
                          <small className="text-muted"> / $50,000</small>{" "}
                        </span>
                      </div>
                      <div>
                        <i className="material-icons icon-muted icon-40pt ml-3">
                          monetization_on
                        </i>
                      </div>
                    </div>
                    <div className="progress" style={{ height: "3px" }}>
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 card-group-row__col">
                  <div className="card card-group-row__card">
                    <div className="card-body-x-lg card-body d-flex flex-row align-items-center">
                      <div className="flex">
                        <div className="card-header__title text-muted d-flex mb-2">
                          Current Year{" "}
                          <span className="badge badge-primary ml-2">2019</span>
                        </div>
                        <span className="h4 m-0">$48,229 </span>
                      </div>
                      <div>
                        <i className="material-icons icon-muted icon-40pt ml-3">
                          gps_fixed
                        </i>
                      </div>
                    </div>
                    <div className="progress" style={{ height: "3px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 card-group-row__col">
                  <div className="card card-group-row__card">
                    <div className="card-body-x-lg card-body d-flex flex-row align-items-center">
                      <div className="flex">
                        <div className="card-header__title text-muted mb-2">
                          Top Grossing
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="h4 m-0">$13,531 </div>
                          <div
                            className="progress ml-1"
                            style={{ width: "100%", height: "3px" }}
                          >
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "25%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <i className="material-icons icon-muted icon-40pt ml-3">
                          contacts
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header card-header-large bg-light d-flex align-items-center">
                      <div className="flex">
                        <h4 className="card-header__title">Earnings</h4>
                        <div className="card-subtitle text-muted">
                          Your recent courses
                        </div>
                      </div>
                      <div className="ml-auto">
                        <a
                          href="author-earnings.html"
                          className="btn btn-light"
                        >
                          Browse All
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="chart" style={{ height: "295px" }}>
                        <canvas id="viewsChart">
                          <span style={{ fontSize: "1rem" }}>
                            <strong>Views</strong> area chart goes here.
                          </span>
                        </canvas>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header card-header-large bg-light d-flex align-items-center">
                      <div className="flex">
                        <h4 className="card-header__title">Rankings</h4>
                        <div className="card-subtitle text-muted">
                          Current Month Earnings
                        </div>
                      </div>
                      <div className="dropdown ml-auto">
                        <a
                          href="#"
                          className="dropdown-toggle text-muted"
                          data-caret="false"
                          data-toggle="dropdown"
                        >
                          <i className="material-icons">more_vert</i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">
                            Go to Report
                          </a>
                          <a className="dropdown-item" href="#">
                            Other Statistics
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item text-danger" href="#">
                            Archive
                          </a>
                        </div>
                      </div>
                    </div>
                    <ul className="list-group list-rankings">
                      <li className="list-group-item">
                        <div className="media align-items-center">
                          <span className="mr-2">1.</span>
                          <img
                            src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg"
                            className="img-fluid rounded-circle mr-2"
                            width={30}
                            alt="..."
                          />
                          <div className="media-body">
                            <a href="#">Tara Knows</a>
                          </div>
                          <div>$29,021</div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="media align-items-center">
                          <span className="mr-2">2.</span>
                          <img
                            src="assets/images/256_jeremy-banks-798787-unsplash.jpg"
                            className="img-fluid rounded-circle mr-2"
                            width={30}
                            alt="..."
                          />
                          <div className="media-body">
                            <a href="#">Karen Smith</a>
                          </div>
                          <div>$25,250</div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="media align-items-center">
                          <span className="mr-2">3.</span>
                          <img
                            src="assets/images/256_michael-dam-258165-unsplash.jpg"
                            className="img-fluid rounded-circle mr-2"
                            width={30}
                            alt="..."
                          />
                          <div className="media-body">
                            <a href="#">Mark Ups</a>
                          </div>
                          <div>$21,330</div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="media align-items-center">
                          <span className="mr-2">4.</span>
                          <img
                            src="assets/images/256_s-a-r-a-h-s-h-a-r-p-764291-unsplash.jpg"
                            className="img-fluid rounded-circle mr-2"
                            width={30}
                            alt="..."
                          />
                          <div className="media-body">
                            <a href="#">Steven Short</a>
                          </div>
                          <div>$17,740</div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="media align-items-center">
                          <span className="mr-2">5.</span>
                          <img
                            src="assets/images/256_luke-porter-261779-unsplash.jpg"
                            className="img-fluid rounded-circle mr-2"
                            width={30}
                            alt="..."
                          />
                          <div className="media-body">
                            <a href="#">John Mix</a>
                          </div>
                          <div>$13,120</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* END FIRST TAB CONTENT */}
            </div>
            <div className="tab-pane fade" id="activity_purchases">
              {/* SECOND TAB CONTENT */}
              <div className="row card-group-row  pt-2">
                <div className="col-md-6 col-lg-4 card-group-row__col">
                  <div className="card card-group-row__card pricing__card">
                    <div className="card-body d-flex flex-column">
                      <div className="text-center">
                        <h4 className="pricing__title mb-0">Personal</h4>
                        <div className="d-flex align-items-center justify-content-center border-bottom-2 flex pb-3">
                          <span className="pricing__amount headings-color">
                            29
                          </span>
                          <span className="d-flex flex-column">
                            <span className="pricing__currency text-dark-gray text-left">
                              USD
                            </span>
                            <span className="pricing__duration text-dark-gray">
                              *monthly
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="card-body d-flex flex-column">
                        <ul className="list-unstyled pricing__features">
                          <li>HTML/SCSS/JS</li>
                          <li>6 Months Support</li>
                        </ul>
                        <a
                          href="https://www.frontted.com/admins/educate-learning-app-theme"
                          className="btn btn-secondary mt-auto"
                        >
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 card-group-row__col">
                  <div className="card card-group-row__card pricing__card pricing__card--popular">
                    <span className="pricing__card-badge">most popular</span>
                    <div className="card-body d-flex flex-column">
                      <div className="text-center">
                        <h4 className="pricing__title mb-0">Developers</h4>
                        <div className="d-flex align-items-center justify-content-center border-bottom-2 flex pb-3">
                          <span className="pricing__amount headings-color">
                            59
                          </span>
                          <span className="d-flex flex-column">
                            <span className="pricing__currency text-dark-gray text-left">
                              USD
                            </span>
                            <span className="pricing__duration text-dark-gray">
                              *monthly
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="card-body d-flex flex-column">
                        <ul className="list-unstyled pricing__features">
                          <li>HTML/SCSS/JS</li>
                          <li>6 Months Support</li>
                          <li>HTML/SCSS/JS</li>
                          <li>6 Months Support</li>
                        </ul>
                        <a
                          href="https://www.frontted.com/admins/educate-learning-app-theme"
                          className="btn btn-primary mt-auto"
                        >
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 card-group-row__col">
                  <div className="card card-group-row__card pricing__card">
                    <div className="card-body d-flex flex-column">
                      <div className="text-center">
                        <h4 className="pricing__title mb-0">Personal</h4>
                        <div className="d-flex align-items-center justify-content-center border-bottom-2 flex pb-3">
                          <span className="pricing__amount headings-color">
                            199
                          </span>
                          <span className="d-flex flex-column">
                            <span className="pricing__currency text-dark-gray text-left">
                              USD
                            </span>
                            <span className="pricing__duration text-dark-gray">
                              *monthly
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="card-body d-flex flex-column">
                        <ul className="list-unstyled pricing__features">
                          <li>HTML/SCSS/JS</li>
                          <li>6 Months Support</li>
                          <li>HTML/SCSS/JS</li>
                          <li>6 Months Support</li>
                          <li>HTML/SCSS/JS</li>
                          <li>6 Months Support</li>
                        </ul>
                        <a
                          href="https://www.frontted.com/admins/educate-learning-app-theme"
                          className="btn btn-secondary mt-auto"
                        >
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END SECOND TAB */}
            </div>
            <div className="tab-pane fade" id="activity_emails">
              Ducimus aperiam aut corporis, facere nobis id quos dignissimos, ut
              corrupti asperiores reprehenderit culpa praesentium
              exercitationem, officia commodi.
            </div>
            <div className="tab-pane fade" id="activity_quotes">
              Odit consectetur dolore maxime similique qui officia deserunt
              fugiat quo tempore consequuntur dicta ratione sint commodi eum
              eligendi, magnam aliquid expedita quas accusantium, sed nobis
              tenetur illum mollitia. Quis ipsum tenetur distinctio tempore
              vitae atque quam.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
