export default function StudentTable(props) {

    return <>
           <tr>
     
     <th  scope="col">{props.student_data.id}</th>
     <th scope="col">{props.student_data.name}</th>
     <th className=" d-flex flex-wrap" scope="col">
     {props.student_data.courses.map(item => 
     <span className="p-1 m-1 badge badge-secondary">{item}</span> )}
       {/* <span className=" badge-soft-secondary">Node</span> */}
     </th>
     <th scope="col">
     {props.student_data.state === 'ONLINE'? <span className="p-1 badge badge-success">{props.student_data.state}</span>:<span className="p-1 badge badge-primary">{props.student_data.state}</span>}
     </th>
     <th scope="col">{props.student_data.ranke}%</th>
     <th scope="col" style={{textAlign : "left"}}>
     <div className="dropdown " >
                   <a href="#" className="dropdown-toggle text-muted " data-caret="false" data-toggle="dropdown">
                     <i className="material-icons">more_vert</i>
                   </a>
                   <div className="dropdown-menu dropdown-menu-right">
                     <a className="dropdown-item" href="#">Edit</a>
                     
                     <div className="dropdown-divider" />
                     <a className="dropdown-item text-danger" href="#">DELETE</a>
                   </div>
                 </div>
     </th>
   </tr>
    </>
};
