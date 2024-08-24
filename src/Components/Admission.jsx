import React from "react";
import "../styles/Admission.css"; // Add CSS for custom styles if needed

function Admission() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Images Section */}
        <div className="col-md-6 mb-4">
          <img
            src="/Static/Rectangle-25.png"
            alt="Admission Image"
            className="img-fluid mb-4"
          />
          <img
            src="/Static/Rectangle-45.png"
            alt="Admission Image"
            className="img-fluid"
          />
        </div>

        {/* Form Section */}
        <div className="col-md-6 bg-primary text-white p-4 admission-form">
          <h1 className="text-center mt-4 mb-4">Online Admission Queries</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fs-5">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label fs-5">
                Mobile No.
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="course" className="form-label fs-5">
                Course
              </label>
              <input
                type="text"
                className="form-control"
                id="course"
                placeholder="Enter your course"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="district" className="form-label fs-5">
                District
              </label>
              <input
                type="text"
                className="form-control"
                id="district"
                placeholder="Enter your district"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="form-label fs-5">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-danger w-100 fs-5 p-3 mb-3"
            >
              Submit
            </button>
          </form>
          <button className="btn btn-primary w-100 fs-5 p-3 mt-4">
            Download Placement Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admission;
