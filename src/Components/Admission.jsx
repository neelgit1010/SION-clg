function Admission() {
  return (
    <div className="container d-flex mt-5">
      {/* Pics */}
      <div>
        <img src="/Static/Rectangle-25.png" alt="" className="d-block" />
        <img src="/Static/Rectangle-45.png" alt="" className="mt-5" />
      </div>
      <div className="container ms-5" style={{ backgroundColor: "#133B7A" }}>
        <h1 className="text-center text-white mt-5">
          Online Admission Queries
        </h1>
        <form action="">
        <div className="container mt-5 text-white">
          <h3>Name</h3>
          <textarea
            name="name"
            id="name"
            cols="80"
            rows="3"
            className="mb-5"
          ></textarea>
          <h3>Mobile NO.</h3>
          <textarea
            name="mobile"
            id="mobile"
            cols="80"
            rows="3"
            className="mb-5"
          ></textarea>
          <h3>Course</h3>
          <textarea
            name="course"
            id="course"
            cols="80"
            rows="3"
            className="mb-5"
          ></textarea>
          <h3>District</h3>
          <textarea
            name="district"
            id="district"
            cols="80"
            rows="3"
            className="mb-5"
          ></textarea>
          <h3>Message</h3>
          <textarea
            name="message"
            id="message"
            cols="80"
            rows="3"
            className="mb-5"
          ></textarea>
        </div>
        <button className="btn btn-primary w-100 mt-3 p-3 fs-5" style={{backgroundColor: "#F8193F"}}>Submit</button>
        </form>
        <button className="btn btn-primary w-100 mt-5 p-3 fs-5">Download Placement report</button>
      </div>
    </div>
  );
}

export default Admission;
