import { Link } from "react-router-dom";

export default function AddLesson(props) {
    return <>
       <div className="lesson">
                  <p>{props.lesson.lesson_name}</p>
                  <Link
                    to={props.lesson.lesson_url}
                    className="btn btn-success ml-auto"
                  >
                    <i className="material-icons">link</i> LINK
                  </Link>
                </div>
    </>
}