import { Link } from "react-router-dom";
import { admin_courses } from "../../data/admin_courses";
import CoureseCard from "./Components/CoureseCard";
import Filter from "./Components/Filter";

export default function AdminCourses() {
  return (
    <>
      <div
        className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page"
        style={{ "padding-top": "60px" }}
      >
        <div className="page__heading border-bottom">
          <div className="container-fluid page__container d-flex align-items-center">
            <h1 className="mb-0">My Course</h1>
            <Link to={"/AddNewCourse"} className="btn btn-success ml-auto">
              <i className="material-icons">add</i> New Course
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
            {admin_courses.map((item) => (
              <CoureseCard key={item.id} couseData={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
