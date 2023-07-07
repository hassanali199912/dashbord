import { useState } from "react"

export default function Header(props){
  const [isOpen,setIsOpen] = useState(false);
  console.log(props);
    return <>
         {/* Header */}
         <div id="header" className="mdk-header js-mdk-header m-0" data-fixed data-effects="waterfall" data-retarget-mouse-scroll="false">
          <div className="mdk-header__content">
            <div className="navbar navbar-expand-sm navbar-main navbar-dark bg-primary pl-md-0 pr-0" id="navbar" data-primary>
              <div className="container-fluid page__container pr-0">
                {/* Navbar toggler */}
                <button className="navbar-toggler navbar-toggler-custom  d-lg-none d-flex mr-navbar" type="button" data-toggle="sidebar">
                  <span className="material-icons icon-14pt">menu</span>
                </button>
                <div className="navbar-collapse collapse" id="navbarsExample03">
                  {/* <ul className="nav navbar-nav">
                        <li className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">UI Components</a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="ui-buttons.html">Buttons</a>
                            <a className="dropdown-item" href="ui-alerts.html">Alerts</a>
                            <a className="dropdown-item" href="ui-avatars.html">Avatars</a>
                            <a className="dropdown-item" href="ui-modals.html">Modals</a>
                            <a className="dropdown-item" href="ui-icons.html">Icons</a>
                            <a className="dropdown-item" href="ui-range-sliders.html">Range Sliders</a>
                            <a className="dropdown-item" href="ui-datetime.html">Time &amp; Date</a>
                            <a className="dropdown-item" href="ui-tables.html">Tables</a>
                            <a className="dropdown-item" href="ui-loaders.html">Loaders</a>
                            <a className="dropdown-item" href="ui-drag.html">Drag &amp; Drop</a>
                            <a className="dropdown-item" href="ui-pagination.html">Pagination</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="ui-forms.html">Forms</a>
                            <a className="dropdown-item" href="ui-charts.html">Charts</a>
                            <div className="dropdown-divider" />
                            <div className="dropdown-header">Extras</div>
                            <a className="dropdown-item" href="fullcalendar.html">Calendar</a>
                            <a className="dropdown-item" href="ui-vector-maps.html">Vector Maps</a>
                          </div>
                        </li>
                       

                        
                    
                    
                  </ul> */}
                </div>
                <form className="ml-auto search-form search-form--light d-none d-sm-flex flex" action="index.html">
                  <input type="text" className="form-control" placeholder="Search" />
                  <button className="btn" type="submit"><i className="material-icons">search</i></button>
                </form>
                <ul className="nav navbar-nav d-none d-md-flex">
                  <li className="nav-item dropdown">
                    <a href="#notifications_menu" className="nav-link dropdown-toggle" data-toggle="dropdown" data-caret="false">
                      <i className="material-icons nav-icon navbar-notifications-indicator">notifications</i>
                    </a>
                    <div id="notifications_menu" className="dropdown-menu dropdown-menu-right navbar-notifications-menu">
                      <div className="dropdown-item d-flex align-items-center py-2">
                        <span className="flex navbar-notifications-menu__title m-0">Notifications</span>
                        <a href="" className="text-muted"><small>Clear all</small></a>
                      </div>
                      <div className="navbar-notifications-menu__content" data-perfect-scrollbar>
                        <div className="py-2">
                          <div className="dropdown-item d-flex">
                            <div className="mr-3">
                              <div className="avatar avatar-xs">
                                <img src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                              </div>
                            </div>
                            <div className="flex">
                              <a href="" >A.Demian</a> left a comment on <a href="" >Stack</a><br />
                              <small className="text-muted">1 minute ago</small>
                            </div>
                          </div>
                          <div className="dropdown-item d-flex">
                            <div className="mr-3">
                              <a href="#">
                                <div className="avatar avatar-xs">
                                  <span className="avatar-title bg-primary rounded-circle"><i className="material-icons icon-16pt">person_add</i></span>
                                </div>
                              </a>
                            </div>
                            <div className="flex">
                              New user <a href="#">Peter Parker</a> signed up.<br />
                              <small className="text-muted">1 hour ago</small>
                            </div>
                          </div>
                          <div className="dropdown-item d-flex">
                            <div className="mr-3">
                              <a href="#">
                                <div className="avatar avatar-xs">
                                  <span className="avatar-title rounded-circle">JD</span>
                                </div>
                              </a>
                            </div>
                            <div className="flex">
                              <a href="#">Big Joe</a> <small className="text-muted">wrote:</small><br />
                              <div>Hey, how are you? What about our next meeting</div>
                              <small className="text-muted">2 minutes ago</small>
                            </div>
                          </div>
                          <div className="dropdown-item d-flex">
                            <div className="mr-3">
                              <div className="avatar avatar-xs">
                                <img src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                              </div>
                            </div>
                            <div className="flex">
                              <a href>A.Demian</a> left a comment on <a href>Stack</a><br />
                              <small className="text-muted">1 minute ago</small>
                            </div>
                          </div>
                          <div className="dropdown-item d-flex">
                            <div className="mr-3">
                              <a href="#">
                                <div className="avatar avatar-xs">
                                  <span className="avatar-title bg-primary rounded-circle"><i className="material-icons icon-16pt">person_add</i></span>
                                </div>
                              </a>
                            </div>
                            <div className="flex">
                              New user <a href="#">Peter Parker</a> signed up.<br />
                              <small className="text-muted">1 hour ago</small>
                            </div>
                          </div>
                          <div className="dropdown-item d-flex">
                            <div className="mr-3">
                              <a href="#">
                                <div className="avatar avatar-xs">
                                  <span className="avatar-title rounded-circle">JD</span>
                                </div>
                              </a>
                            </div>
                            <div className="flex">
                              <a href="#">Big Joe</a> <small className="text-muted">wrote:</small><br />
                              <div>Hey, how are you? What about our next meeting</div>
                              <small className="text-muted">2 minutes ago</small>
                            </div>
                          </div>
                          <div className="dropdown-item d-flex">
                            <div className="mr-3">
                              <div className="avatar avatar-xs">
                                <img src="assets/images/256_daniel-gaffey-1060698-unsplash.jpg" alt="Avatar" className="avatar-img rounded-circle" />
                              </div>
                            </div>
                            <div className="flex">
                              <a href>A.Demian</a> left a comment on <a href>Stack</a><br />
                              <small className="text-muted">1 minute ago</small>
                            </div>
                          </div>
                          <div className="dropdown-item d-flex">
                            <div className="mr-3">
                              <a href="#">
                                <div className="avatar avatar-xs">
                                  <span className="avatar-title bg-primary rounded-circle"><i className="material-icons icon-16pt">person_add</i></span>
                                </div>
                              </a>
                            </div>
                            <div className="flex">
                              New user <a href="#">Peter Parker</a> signed up.<br />
                              <small className="text-muted">1 hour ago</small>
                            </div>
                          </div>
                          <div className="dropdown-item d-flex">
                            <div className="mr-3">
                              <a href="#">
                                <div className="avatar avatar-xs">
                                  <span className="avatar-title rounded-circle">JD</span>
                                </div>
                              </a>
                            </div>
                            <div className="flex">
                              <a href="#">Big Joe</a> <small className="text-muted">wrote:</small><br />
                              <div>Hey, how are you? What about our next meeting</div>
                              <small className="text-muted">2 minutes ago</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a href="" className="dropdown-item text-center navbar-notifications-menu__footer">View All</a>
                    </div>
                  </li>
                  
                  <li className="nav-item nav-item-circle">
                    <a  className="nav-link d-flex align-items-center navbar-circle-link" onClick={()=>{
                      setIsOpen(!isOpen);
                      props.valOfIsOpen(isOpen);
                    } }>
                      <span className="rounded-circle">
                        <span className="material-icons text-primary">flag</span>
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="dropdown">
                  <a href="#" data-toggle="dropdown" data-caret="false" className="dropdown-toggle navbar-toggler navbar-toggler-dashboard border-left d-flex align-items-center ml-navbar">
                    <span className="material-icons">laptop</span> My Dashboard
                  </a>
                  <div id="company_menu" className="dropdown-menu dropdown-menu-right navbar-company-menu">
                    <div className="dropdown-item d-flex align-items-center py-2 navbar-company-info py-3">
                      <span className="mr-3">
                        <img src="assets/images/frontted-logo-blue.svg" width={43} height={43} alt="avatar" />
                      </span>
                      <span className="flex d-flex flex-column">
                        <strong className="h5 m-0">Adrian D.</strong>
                        <small className="text-muted text-uppercase">STUDENT</small>
                      </span>
                    </div>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item d-flex align-items-center py-2" href="edit-account.html">
                      <span className="material-icons mr-2">account_circle</span> Edit Account
                    </a>
                    <a className="dropdown-item d-flex align-items-center py-2" href="#">
                      <span className="material-icons mr-2">settings</span> Settings
                    </a>
                    <a className="dropdown-item d-flex align-items-center py-2" href="login.html">
                      <span className="material-icons mr-2">exit_to_app</span> Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // END Header */}
    </>
} 