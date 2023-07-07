import { Link } from "react-router-dom";

export default function AddNewStudent() {
  return (
    <>
      <div
        className="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page"
        style={{ "padding-top": "60px" }}
      >
        <div className="page__heading border-bottom">
          <div className="container-fluid page__container d-flex align-items-center">
            <h1 className="mb-0">Add New Student </h1>
            <Link to={"/AdminStudent"} className="btn btn-success ml-auto">
              <i className="material-icons">add</i> Add New Student
            </Link>
          </div>
        </div>
        <div className="container-fluid page__container">
          <form>
            <div className="card card-form">
              <div className="row no-gutters">
                <div className="col-lg-4 card-body">
                  <p>
                    <strong className="headings-color">
                      Basic Information
                    </strong>
                  </p>
                  <p className="text-muted mb-0">
                    Edit your account details and settings.
                  </p>
                </div>
                <div className="col-lg-8 card-form__body card-body">
                  <div className="form-group">
                    <label htmlFor="sname">Student Name</label>
                    <input
                      id="sname"
                      type="text"
                      className="form-control"
                      placeholder="Enter Name ...."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="semail">Enter Email</label>
                    <input
                      id="semail"
                      type="email"
                      className="form-control"
                      placeholder="Enter Student Email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">State</label>
                    <br />
                    <select id="country" className="custom-select w-auto">
                      <option value="OFLINE">OFLINE</option>
                      <option value="ONLINE">ONLINE</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="courses">Select Course</label>
                    <br />
                    <select id="courses" className="custom-select w-auto">
                      <option value="Node">Node.js</option>
                      <option value="Vue">Vue.js</option>
                      <option value="GetPah">GetPah</option>
                    </select>
                  </div>
                  {/* <div className="form-group">
                    <label htmlFor="subscribe">Subscribe to newsletter</label>
                    <br />
                    <div className="custom-control custom-checkbox-toggle custom-control-inline mr-1">
                      <input
                        defaultChecked
                        type="checkbox"
                        id="subscribe"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="subscribe"
                      >
                        Yes
                      </label>
                    </div>
                    <label htmlFor="subscribe" className="mb-0">
                      Yes
                    </label>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="card card-form">
              <div className="row no-gutters">
                <div className="col-lg-4 card-body">
                  <p>
                    <strong className="headings-color">
                   New Student Password
                    </strong>
                  </p>
                  <p className="text-muted mb-0">Create Student Password</p>
                </div>
                <div className="col-lg-8 card-form__body card-body">
                  <div className="row">
                    <div className="col-md-6">
                      
                      <div className="form-group">
                        <label htmlFor="npass">Create Password</label>
                        <input
                          id="npass"
                          type="password"
                          className="form-control is-invalid"
                        />
                        <small className="invalid-feedback">
                          The new password must not be empty.
                        </small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="cpass">Confirm Password</label>
                        <input
                          id="cpass"
                          type="password"
                          className="form-control"
                          placeholder="Confirm password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </form>
        </div>

        {/* <div className="container-fluid page__container">
          <div className="row">
            <div>
            <form>
              Basic Infromation Name, descrition And Price
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
                      Please{" "}
                      <a
                        href="https://getbootstrap.com/docs/4.1/components/forms/"
                        target="_blank"
                      >
                        read the official documentation
                      </a>{" "}
                      for a full list of options from Bootstrap's core library.
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

              Dropd File And Rengs 
              <div className="card card-form">
                <div className="row no-gutters">
                  <div className="col-lg-4 card-body">
                    <p>
                      <strong className="headings-color">
                        Drag &amp; Drop File Uploads
                      </strong>
                    </p>
                    <p className="text-muted">
                      Drag and drop file uploads with image previews powered by
                      Dropzone.js. Please read the{" "}
                      <a href="http://www.dropzonejs.com/" target="_blank">
                        official plugin documentation
                      </a>{" "}
                      for a full list of options.
                    </p>
                  </div>
                  <div className="col-lg-8 card-form__body card-body ">
                    <div className="form-group">
                      <label>Range Of The Course</label>
                      <br />
                      <DateRange
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                      />
                    </div>

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

              <div className="card card-form">
                <div className="row no-gutters">
                  <div className="col-lg-4 card-body">
                    <p>
                      <strong className="headings-color">Select</strong>
                    </p>
                    <p className="text-muted">
                      Customizable select box with support for searching,
                      tagging, remote data sets, infinite scrolling, and many
                      other highly used options powered by Select2. Please read
                      the{" "}
                      <a href="https://select2.org/" target="_blank">
                        official plugin documentation
                      </a>{" "}
                      for a full list of options.
                    </p>
                  </div>
                  <div className="col-lg-8 card-form__body card-body">
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
                    <div className="form-group" style={{textAlign:'right'}}>
                      <label htmlFor="select04">Large</label>
                      <Multiselect
                        options={options} // Options to display in the dropdown
                        onSelect={onSelect} // Function will trigger on select event
                        onRemove={onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                      />
                    </div>
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
