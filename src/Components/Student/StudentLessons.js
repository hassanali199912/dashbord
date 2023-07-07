export default function StudentLessons() {
  return (
    <>
   <div className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page" style={{"padding-top":"60px"}}>
  <div className="hero-banner bg-primary d-flex flex-row align-items-center" style={{"height":"250px"}}>
    <div className="container-fluid page__container">
      <div className="d-flex flex-column">
        <div className="mb-1">
          <a href="#" className="badge badge-dark-gray text-white">Back to Courses</a>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="mr-3">
            <img src="assets/images/logos/rails.white.svg" width={100} alt="rails logo" />
          </div>
          <div>
            <h1 className="text-white mb-0">Build a Rails 5 application from Scratch</h1>
            <p className="lead text-white">This course will get you started with all the basics </p>
            <div className="my-2 text-white d-flex">
              <strong className="mr-4 "><i className="material-icons icon-16pt icon-light">weekend</i> Beginner</strong>
              <strong><i className="material-icons icon-16pt icon-light">watch_later</i> 2:42</strong>
            </div>
          </div>
        </div>
        <div className="mt-1">
          <a href="#" className="btn btn-light btn-rounded mr-2">Start Course</a><a href="#" className="btn btn-outline-light text-white btn-hover-primary btn-rounded"><i className="material-icons">local_activity</i> Add to list</a>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid page__container">
    <div className="row">
      <div className="col-md-4 order-12">
        <div className="card card-margin-md-negative-40">
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-light">
              <a href="profile.html" className="flex d-flex align-items-center text-body text-underline-0">
                <span className="avatar mr-3">
                  <img src="assets/images/avatar/demi.png" alt="avatar" className="avatar-img rounded-circle" />
                </span>
                <span className="flex d-flex flex-column">
                  <strong>Adrian Demian</strong>
                  <small className="text-muted text-uppercase">AUTHOR</small>
                </span>
              </a>
            </li>
            <li className="list-group-item">
              <span className="mr-2">
                <a href="#" className="rating-link active"><i className="material-icons">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons">star</i></a>
                <a href="#" className="rating-link active"><i className="material-icons">star_half</i></a>
              </span>
              <strong>4.7</strong>
              <span className="text-muted">(391 ratings)</span>
            </li>
            <li className="list-group-item">
              <strong>3872 people</strong> <span className="text-muted">completed this course</span>
            </li>
            <li className="list-group-item">
              <a href className="btn btn-facebook btn-rounded-social">
                <svg width="14px" style={{"fill":"currentColor"}} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Facebook icon</title>
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                </svg>
              </a>
              <a href className="btn btn-twitter btn-rounded-social">
                <svg width="14px" style={{"fill":"currentColor"}} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Twitter icon</title>
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href className="btn btn-secondary btn-rounded-social">
                <i className="material-icons">mail</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-8">
        <div className="mb-3"><strong className="text-dark-gray">DESCRIPTION</strong></div>
        <p className="mb-3">
          This course is for Rails newbies and anyone looking to get a solid foundation. It’s designed to teach you everything you need to start building web applications in Rails right away.
        </p>
        <div className>
          <ul className="list-group list-lessons">
            <li className="list-group-item d-flex">
              <a href="#">1. Wireframe</a>
              <div className="ml-auto d-flex align-items-center">
                <span className="badge badge-success mr-2">FREE</span>
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 1:42</span>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <a href="#">2. Design with Sketch</a>
              <div className="ml-auto">
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 2:21</span>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <a href="#">3. Build static HTML/CSS with Bootstrap 4</a>
              <div className="ml-auto">
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 3:39</span>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <a href="#">4. Rails New Application</a>
              <div className="ml-auto">
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 1:24</span>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <a href="#">5. Github and push your first commit.</a>
              <div className="ml-auto">
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 1:37</span>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <a href="#">6. Add Bootstrap 4 to Rails</a>
              <div className="ml-auto">
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 2:11</span>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <a href="#">7. Include Designed SASS assets</a>
              <div className="ml-auto">
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 3:52</span>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <a href="#">8. Basics of Routing</a>
              <div className="ml-auto">
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 1:46</span>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <a href="#">9. Postgres Database</a>
              <div className="ml-auto">
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 1:42</span>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <a href="#">10. Setup Authentification with Devise</a>
              <div className="ml-auto">
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 1:42</span>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <a href="#">11. Design &amp; Code the User Account</a>
              <div className="ml-auto">
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 4:03</span>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <a href="#">12. Scaffold a Discussions Feature with Rails</a>
              <div className="ml-auto">
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 2:22</span>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <a href="#">13. Refactoring and Refining</a>
              <div className="ml-auto">
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 1:53</span>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <a href="#">14. Validations</a>
              <div className="ml-auto">
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 1:39</span>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <a href="#">15. Rails Testing</a>
              <div className="ml-auto">
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 1:42</span>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <a href="#">16. Create Staging and Production Servers</a>
              <div className="ml-auto">
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 1:42</span>
              </div>
            </li>
            <li className="list-group-item d-flex">
              <a href="#">17. Deploy your Rails App with Capistrano</a>
              <div className="ml-auto">
                <span className="text-muted"><i className="material-icons icon-16pt icon-light">watch_later</i> 1:42</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
