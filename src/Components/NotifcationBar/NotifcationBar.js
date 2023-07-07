import { Children } from "react";

export default function NotifcationBar(props) {


  return (
    <>
    {
        props.isOpen ? <Open /> :<Close />
    }
    </>
  );
}

function Open(props) {
  return (
    <>
      <div
        className="mdk-drawer js-mdk-drawer"
        id="events-drawer"
        data-align="end"
        data-opened
      >
         <div className="mdk-drawer__content">
          <div
            className="sidebar sidebar-light sidebar-left"
            data-perfect-scrollbar
          >
            <small className="text-dark-gray px-3 py-1">
              <strong>Thursday, 28 Feb</strong>
            </small>
            <div className="list-group list-group-flush">
              <div className="list-group-item bg-light">
                <div className="row">
                  <div className="col-auto d-flex flex-column">
                    <small>12:30 PM</small>
                    <small className="text-dark-gray">2 hrs</small>
                  </div>
                  <div className="col">
                    <div className="d-flex flex-column flex">
                      <a href="#" className="text-body">
                        <strong className="text-15pt">
                          Marketing Team Meeting
                        </strong>
                      </a>
                      <small className="text-muted d-flex align-items-center">
                        <i className="material-icons icon-16pt mr-1">
                          location_on
                        </i>{" "}
                        16845 Hicks Road
                      </small>
                    </div>
                    <div className="avatar-group mt-2">
                      <div className="avatar avatar-xs">
                        <img
                          src="assets/images/256_joao-silas-636453-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="avatar avatar-xs">
                        <img
                          src="assets/images/256_jeremy-banks-798787-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="avatar avatar-xs">
                        <img
                          src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <small className="text-dark-gray px-3 py-1">
              <strong>Wednesday, 27 Feb</strong>
            </small>
            <div className="list-group list-group-flush">
              <div className="list-group-item bg-light">
                <div className="row">
                  <div className="col-auto d-flex flex-column">
                    <small>07:48 PM</small>
                    <small className="text-dark-gray">30 min</small>
                  </div>
                  <div className="col">
                    <div className="d-flex flex-column flex">
                      <a href="#" className="text-body">
                        <strong className="text-15pt">Call Alex</strong>
                      </a>
                      <small className="text-muted d-flex align-items-center">
                        <i className="material-icons icon-16pt mr-1">phone</i>{" "}
                        202-555-0131
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <small className="text-dark-gray px-3 py-1">
              <strong>Tuesday, 26 Feb</strong>
            </small>
            <div className="list-group list-group-flush">
              <div className="list-group-item bg-light">
                <div className="row">
                  <div className="col-auto d-flex flex-column">
                    <small>03:13 PM</small>
                    <small className="text-dark-gray">2 hrs</small>
                  </div>
                  <div className="col">
                    <div className="d-flex flex-column flex">
                      <a href="#" className="text-body">
                        <strong className="text-15pt">
                          Design Team Meeting
                        </strong>
                      </a>
                      <small className="text-muted d-flex align-items-center">
                        <i className="material-icons icon-16pt mr-1">
                          location_on
                        </i>{" "}
                        16845 Hicks Road
                      </small>
                    </div>
                    <div className="avatar-group mt-2">
                      <div className="avatar avatar-xs">
                        <img
                          src="assets/images/256_rsz_1andy-lee-642320-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="avatar avatar-xs">
                        <img
                          src="assets/images/256_michael-dam-258165-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="avatar avatar-xs">
                        <img
                          src="assets/images/256_luke-porter-261779-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="avatar avatar-xs">
                        <img
                          src="assets/images/stories/256_rsz_clem-onojeghuo-193397-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <small className="text-dark-gray px-3 py-1">
              <strong>Monday, 25 Feb</strong>
            </small>
            <div className="list-group list-group-flush">
              <div className="list-group-item bg-light">
                <div className="row">
                  <div className="col-auto d-flex flex-column">
                    <small>12:30 PM</small>
                    <small className="text-dark-gray">2 hrs</small>
                  </div>
                  <div className="col d-flex">
                    <div className="d-flex flex-column flex">
                      <a href="#" className="text-body">
                        <strong className="text-15pt">Call Wendy</strong>
                      </a>
                      <small className="text-muted d-flex align-items-center">
                        <i className="material-icons icon-16pt mr-1">phone</i>{" "}
                        202-555-0131
                      </small>
                    </div>
                    <div className="avatar avatar-xs">
                      <img
                        src="assets/images/256_michael-dam-258165-unsplash.jpg"
                        alt="Avatar"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Close(props) {
  return (
    <>
      <div
        className="mdk-drawer js-mdk-drawer"
        id="events-drawer"
        data-align="end"
      >
          <div className="mdk-drawer__content">
          <div
            className="sidebar sidebar-light sidebar-left"
            data-perfect-scrollbar
          >
            <small className="text-dark-gray px-3 py-1">
              <strong>Thursday, 28 Feb</strong>
            </small>
            <div className="list-group list-group-flush">
              <div className="list-group-item bg-light">
                <div className="row">
                  <div className="col-auto d-flex flex-column">
                    <small>12:30 PM</small>
                    <small className="text-dark-gray">2 hrs</small>
                  </div>
                  <div className="col">
                    <div className="d-flex flex-column flex">
                      <a href="#" className="text-body">
                        <strong className="text-15pt">
                          Marketing Team Meeting
                        </strong>
                      </a>
                      <small className="text-muted d-flex align-items-center">
                        <i className="material-icons icon-16pt mr-1">
                          location_on
                        </i>{" "}
                        16845 Hicks Road
                      </small>
                    </div>
                    <div className="avatar-group mt-2">
                      <div className="avatar avatar-xs">
                        <img
                          src="assets/images/256_joao-silas-636453-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="avatar avatar-xs">
                        <img
                          src="assets/images/256_jeremy-banks-798787-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="avatar avatar-xs">
                        <img
                          src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <small className="text-dark-gray px-3 py-1">
              <strong>Wednesday, 27 Feb</strong>
            </small>
            <div className="list-group list-group-flush">
              <div className="list-group-item bg-light">
                <div className="row">
                  <div className="col-auto d-flex flex-column">
                    <small>07:48 PM</small>
                    <small className="text-dark-gray">30 min</small>
                  </div>
                  <div className="col">
                    <div className="d-flex flex-column flex">
                      <a href="#" className="text-body">
                        <strong className="text-15pt">Call Alex</strong>
                      </a>
                      <small className="text-muted d-flex align-items-center">
                        <i className="material-icons icon-16pt mr-1">phone</i>{" "}
                        202-555-0131
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <small className="text-dark-gray px-3 py-1">
              <strong>Tuesday, 26 Feb</strong>
            </small>
            <div className="list-group list-group-flush">
              <div className="list-group-item bg-light">
                <div className="row">
                  <div className="col-auto d-flex flex-column">
                    <small>03:13 PM</small>
                    <small className="text-dark-gray">2 hrs</small>
                  </div>
                  <div className="col">
                    <div className="d-flex flex-column flex">
                      <a href="#" className="text-body">
                        <strong className="text-15pt">
                          Design Team Meeting
                        </strong>
                      </a>
                      <small className="text-muted d-flex align-items-center">
                        <i className="material-icons icon-16pt mr-1">
                          location_on
                        </i>{" "}
                        16845 Hicks Road
                      </small>
                    </div>
                    <div className="avatar-group mt-2">
                      <div className="avatar avatar-xs">
                        <img
                          src="assets/images/256_rsz_1andy-lee-642320-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="avatar avatar-xs">
                        <img
                          src="assets/images/256_michael-dam-258165-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="avatar avatar-xs">
                        <img
                          src="assets/images/256_luke-porter-261779-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="avatar avatar-xs">
                        <img
                          src="assets/images/stories/256_rsz_clem-onojeghuo-193397-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <small className="text-dark-gray px-3 py-1">
              <strong>Monday, 25 Feb</strong>
            </small>
            <div className="list-group list-group-flush">
              <div className="list-group-item bg-light">
                <div className="row">
                  <div className="col-auto d-flex flex-column">
                    <small>12:30 PM</small>
                    <small className="text-dark-gray">2 hrs</small>
                  </div>
                  <div className="col d-flex">
                    <div className="d-flex flex-column flex">
                      <a href="#" className="text-body">
                        <strong className="text-15pt">Call Wendy</strong>
                      </a>
                      <small className="text-muted d-flex align-items-center">
                        <i className="material-icons icon-16pt mr-1">phone</i>{" "}
                        202-555-0131
                      </small>
                    </div>
                    <div className="avatar avatar-xs">
                      <img
                        src="assets/images/256_michael-dam-258165-unsplash.jpg"
                        alt="Avatar"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
