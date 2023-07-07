import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { Route, Routes } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Main from "../../Components/MainDashbord/Main";
import Nav from "../../Components/Navbar/Nav";
import NotifcationBar from "../../Components/NotifcationBar/NotifcationBar";
import Coureses from "../../Components/MainDashbord/Coureses";
import AdminDashbord from "../../Components/Admin/AdminDashbord";
import StudentCoursePurchase from "../../Components/Student/StudentCoursePurchase";
import StudentLessons from "../../Components/Student/StudentLessons";
import StudentQuiz from "../../Components/Student/StudentQuiz";
import StudentDashbord from "../../Components/Student/StudentDashbord";
import StudentDiscussions from "../../Components/Student/StudentDiscussions";
import StudentEditAccount from "../../Components/Student/StudentEditAccount";
import StudentBilling from "../../Components/Student/StudentBilling";

import AuthorCourses from "../../Components/Author/AuthorCourses";
import AuthorDashbord from "../../Components/Author/AuthorDashbord";
import AuthorEarning from "../../Components/Author/AuthorEarning";
import AuthorPayout from "../../Components/Author/AuthorPayout";
import AuthorQuizManager from "../../Components/Author/AuthorQuizManager";
import AuthorReports from "../../Components/Author/AuthorReports";
import AuthorSetting from "../../Components/Author/AuthorSetting";
import { useState } from "react";
import AdminNav from "../../Components/Navbar/AdminNav";
import AdminCourses from "../../Components/Admin/AdminCouses";
import AddNewCourse from "../../Components/Admin/AddNewCourse";
import AdminStudent from "../../Components/Admin/AdminStudent";
import AddNewStudent from "../../Components/Admin/AddNewStudent";
import AddUnitsAndLessons from "../../Components/Admin/AddUnitsAndLessons";

export default function Home() {
  const [openSideMenu, setOpenSideMenue] = useState(false);

  const datadd = (innerData) => {
    setOpenSideMenue(innerData);
  };

  return (
    <>
      <div
        className="mdk-drawer-layout js-mdk-drawer-layout"
        data-push
        data-responsive-width="992px"
        data-fullbleed
      >
        <div className="mdk-drawer-layout__content">
          <div
            className="mdk-header-layout js-mdk-header-layout "
            data-has-scrolling-region
          >
            <Header valOfIsOpen={datadd} />
            {/*  Main Content */}
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="courses" element={<Coureses />} />
              <Route
                path="StudentCoursePurchase"
                element={<StudentCoursePurchase />}
              />
              <Route path="StudentLessons" element={<StudentLessons />} />
              <Route path="StudentQuiz" element={<StudentQuiz />} />
              <Route path="StudentDashbord" element={<StudentDashbord />} />
              <Route
                path="StudentDiscussions"
                element={<StudentDiscussions />}
              />
              <Route
                path="StudentEditAccount"
                element={<StudentEditAccount />}
              />
              <Route path="StudentBilling" element={<StudentBilling />} />

              {/* Admin Routes */}
              <Route path="AdminDashbord" element={<AdminDashbord />} />
              <Route path="AdminCourses" element={<AdminCourses />} />
              <Route path="AddNewCourse" element={<AddNewCourse />} />
              <Route path="AdminStudent" element={<AdminStudent />} />
              <Route path="AddNewStudent" element={<AddNewStudent />} />
              <Route path="AddUnitsAndLessons" element={<AddUnitsAndLessons />} />

              {/* Author Routes */}

              <Route path="AuthorCourses" element={<AuthorCourses />} />
              <Route path="AuthorDashbord" element={<AuthorDashbord />} />
              <Route path="AuthorEarning" element={<AuthorEarning />} />
              <Route path="AuthorPayout" element={<AuthorPayout />} />
              <Route path="AuthorQuizManager" element={<AuthorQuizManager />} />
              <Route path="AuthorReports" element={<AuthorReports />} />
              <Route path="AuthorSetting" element={<AuthorSetting />} />
            </Routes>

            {/* End Main Content  */}
          </div>
        </div>
        {/* <Nav index={1} /> */}
        <AdminNav />
        {/* صفحة الادمن او المعلم */}
      </div>
      <NotifcationBar isOpen={openSideMenu} />
    </>
  );
}
