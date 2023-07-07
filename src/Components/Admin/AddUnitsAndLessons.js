import { Link } from "react-router-dom";
import AddLesson from "./Components/AddLesson";
import { useState } from "react";

export default function AddUnitsAndLessons() {


    const [lessons,setLessons] = useState([{lesson_name:'lesson one',lesson_url:'www.google.com'}]); 
    const [lessonsData,setLessonsData] = useState({lesson_name:'',lesson_url:''}); 
    
    const handelChanges = (event) =>{
        const {name,value} = event.target;
        setLessonsData((prevVale)=>{
            return {
                ...prevVale,
                [name] :value
            }
        })
    }

    const handleClick = ()=>{
            console.log(lessonsData);
            setLessons((prevVale)=>{
                return [...prevVale,lessonsData]
            })
            setLessonsData({lesson_name:'',lesson_url:''})
    }    
  return (
    <>
      <div
        className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page"
        style={{ "padding-top": "60px" }}
      >
        <div className="page__heading border-bottom">
          <div className="container-fluid page__container d-flex align-items-center">
            <h1 className="mb-0">Add New Course</h1>
            <Link
              to={"/AddUnitsAndLessons"}
              className="btn btn-success ml-auto"
            >
              <i className="material-icons">add</i> Save & Finshed
            </Link>
          </div>
        </div>
        <div className="container-fluid page__container">
          <div className="row">
            <div className="col card unit">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Unit Name"
                />
              </div>
              <div className="lessons" id="lessons">
              <div className="row lesson-form ">
                <div className="col-12">
                <h3>Add Lessons</h3>
                </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="lesson_name">Lesson Name</label>
                        <input
                          id="lesson_name"
                          name="lesson_name"
                          type="text"
                          className="form-control"
                          placeholder="Enter Lesson Name"
                          value={lessonsData.lesson_name}
                          onChange={handelChanges}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="lesson_link">Youtube Link</label>
                        <input
                          id="lesson_link"
                          name="lesson_url"
                          type="text"
                          className="form-control"
                          placeholder="Enter Lesson Link"
                          value={lessonsData.lesson_url}
                          onChange={handelChanges}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                 <button onClick={handleClick} className="btn btn-primary">Add Lesson</button>
                 </div>
              </div>
               {lessons.map(item => <AddLesson lesson={item} />)}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col card add-units">
              <Link className="btn">
                <i className="material-icons">add</i>
                <br />
                <p>Add Unit</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
