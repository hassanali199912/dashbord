import Header from "./Components/Header/Header";
import Coureses from "./Components/MainDashbord/Coureses";
import Main from "./Components/MainDashbord/Main";
import Nav from "./Components/Navbar/Nav";
import NotifcationBar from "./Components/NotifcationBar/NotifcationBar";
import Course from "./pages/Courese/Courses";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/LoginAndRegister/Login";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
     
       {/* <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
       </Routes> */}

       <Home />

    </>
  );
}

export default App;
