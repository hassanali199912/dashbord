export default function CoureseCard(props) {


    return <>
         <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column flex-sm-row">
              <a href={props.couseData.moveTo} className="avatar mb-3 w-xs-plus-down-100 mr-sm-3">
                <img src={props.couseData.img} alt={props.couseData.name} className="avatar-course-img" />
              </a>
              <div className="flex" style={{"min-width":"200px"}}>
                <div className="d-flex">
                  <div>
                    <h4 className="card-title mb-1"><a href="#">{props.couseData.name}</a></h4>
                    <p className="text-muted">{props.couseData.description}</p>
                  </div>
                  <div className="dropdown ml-auto">
                    <a href="#" className="dropdown-toggle text-muted" data-caret="false" data-toggle="dropdown">
                      <i className="material-icons">more_vert</i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Edit Course</a>
                      
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#">Archive</a>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-end">
                  <div className="d-flex flex flex-column mr-3">
                    <div className="d-flex align-items-center py-2 border-bottom">
                      <span className="mr-2">{props.couseData.price}</span>
                      <small className="text-muted ml-auto">{props.couseData.sales} SALES</small>
                    </div>
                    <div className="d-flex align-items-center flex-wrap py-2" style={{gap:'0.2rem'}}>
                    {props.couseData.skills.map((item)=> <span className={`badge badge-${props.couseData.add_calss} mr-2`}>{item}</span>)}
                     
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-soft-secondary">{props.couseData.level}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
};
