import Multiselect from "multiselect-react-dropdown";
import { Link } from "react-router-dom";

export default function AddNewCourse() {

    // const [formData,setFromData] = useState();

  const options = [
    { name: "Option 1", id: 1 },
    { name: "Option 2", id: 2 },
    { name: "Option 3", id: 3 },
    { name: "Option 4", id: 4 },
    { name: "Option 5", id: 5 },
    { name: "Option 6", id: 6 },
  ];
  const  onSelect = (selectedList, selectedItem) => {

};

const  onRemove = (selectedList, removedItem) => {

};
  return (
    <>
      <div
        className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page"
        style={{ "padding-top": "60px" }}
      >
        <div className="page__heading border-bottom">
          <div className="container-fluid page__container d-flex align-items-center">
            <h1 className="mb-0">Add New Course</h1>
            <Link to={'/AddUnitsAndLessons'} className="btn btn-success ml-auto">
              <i className="material-icons">add</i> Next
            </Link>
          </div>
        </div>
        <div className="container-fluid page__container">
          <div className="row">
            <div>
            <form>
              {/* Basic Infromation Name, descrition And Price*/}
              <div className="card card-form">
                <div className="row no-gutters">
                  <div className="col-lg-4 card-body">
                    <p>
                      <strong className="headings-color">
                        Basic Infromation
                      </strong>
                    </p>
                    <p className="text-muted">
                      Stack supports all of Bootstrap's default form styling in
                      addition to a handful of new input types and features.
                      Please
                     
                    </p>
                  </div>
                  <div className="col-lg-8 card-form__body card-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputName">Course Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        placeholder="Enter Course Name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Course Description
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label htmlFor="maskSample01">Price Of Course</label>
                      <input
                        id="maskSample01"
                        type="text"
                        className="form-control"
                        placeholder="Number: 2.342,42"
                        data-mask="#.##0,00"
                        data-mask-reverse="true"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dropd File And Rengs */}
              <div className="card card-form">
                <div className="row no-gutters">
                  <div className="col-lg-4 card-body">
                    <p>
                      <strong className="headings-color">
                        Drop File Uploads
                      </strong>
                    </p>
                    <p className="text-muted">
                      Drag and drop file uploads with image previews powered by
                      Dropzone.js
                      
                    </p>
                  </div>
                  <div className="col-lg-8 card-form__body card-body ">
                  
                    <div className="form-group">
                      <label>Upload Course Imge</label>
                      <br />
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="validatedCustomFile"
                          required
                        />
                        <label
                          class="custom-file-label"
                          for="validatedCustomFile"
                        >
                          Choose file...
                        </label>
                        <div class="invalid-feedback">
                          Example invalid custom file feedback
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-form mb-3" >
                <div className="row no-gutters">
                  <div className="col-lg-4 card-body">
                    <p>
                      <strong className="headings-color">Select</strong>
                    </p>
                    <p className="text-muted">
                      Customizable select box with support for searching,
                      tagging, remote data sets, infinite scrolling, and many
                      other highly used options powered by Select2.
                    </p>
                  </div>
                  <div className="col-lg-8 card-form__body card-body">
                  <div className="form-group" style={{textAlign:'right'}}>
                      <label htmlFor="select04">Skils</label>
                      <Multiselect
                        options={options} // Options to display in the dropdown
                        onSelect={onSelect} // Function will trigger on select event
                        onRemove={onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="select01">Level OF Course</label>
                      <select
                        id="select01"
                        data-toggle="select"
                        className="form-control"
                      >
                        <option selected>INTERMEDIATE</option>
                        <option>MEDIAM</option>
                        <option>EXPORT</option>
                      </select>
                    </div>
                   
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
