import { Link } from "react-router-dom";
import Filter from "./Components/Filter";
import { admin_student } from "../../data/admin_student";
import StudentTable from "./Components/StudentTable";

export default function AdminStudent() {
    return <>
          <div
        className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page"
        style={{ "padding-top": "60px" }}
      >
        <div className="page__heading border-bottom">
          <div className="container-fluid page__container d-flex align-items-center">
            <h1 className="mb-0">My Student</h1>
            <Link to={"/AddNewStudent"} className="btn btn-success ml-auto">
              <i className="material-icons">add</i> New Student
            </Link>
          </div>
        </div>
        <div className="container-fluid page__container">
          <form action="#" className="mb-3 border-bottom pb-3">
            <div className="d-flex">
              <div className="search-form mr-3 search-form--light">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search courses"
                  id="searchSample02"
                />
                <button className="btn" type="button">
                  <i className="material-icons">search</i>
                </button>
              </div>
              <Filter />
            </div>
          </form>
          <div className="row">
          <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th  scope="col">#</th>
      <th  scope="col">Student Name</th>
      <th  scope="col">Subjects</th>
      <th  scope="col">State</th>
      <th  scope="col">Rankes</th>
      <th  scope="col"></th>
    </tr>
  </thead>
  <tbody>
 
    {admin_student.map(data => <StudentTable key={data.id} student_data ={data} />)}
  
  </tbody>
</table>
          </div>
        </div>
      </div>
    </>
};
