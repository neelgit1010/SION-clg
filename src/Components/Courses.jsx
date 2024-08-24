import '../styles/Courses.css';

function Courses() {
  return (
    <div className="mt-5">
      <center>
        <h3 className="fs-2">Our Courses</h3>
      </center>
      
      {/* Cards */}
      <div className="m-5 d-flex flex-column flex-lg-row justify-content-between">
        
        {/* Card 1 */}
        <div className="course-card mb-5 mb-lg-0">
          <div className="d-flex flex-column flex-lg-row">
            <img 
              src="/Static/Rectangle-5.png" 
              alt="GNM Nursing"
              className="course-image"
            />
            <div className="course-content ms-lg-4 mt-4 mt-lg-0">
              <div className="d-flex align-items-center">
                <img
                  src="/Static/image-1.png"
                  alt=""
                  className="course-icon"
                />
                <div className="ms-3">
                  <span className="course-title">GNM</span>
                  <span className="course-title-alt">Nursing</span>
                  <p className="course-subtitle">
                    (General Nursing & Midwifery)
                  </p>
                </div>
              </div>
              <div className="course-details mt-3">
                <p><span className="highlight">Overview:</span> The General nursing and Midwifery (GNM) training Course is of 3 years duration with English as the medium of instruction. Apart from theoretical training in classrooms, the practical hospital training would be of paramount importance. We have student dedicated placement facility.</p>
                <p><span className="highlight">Eligibility:</span> 10+2</p>
                <p><span className="highlight">Duration:</span> 3 Years</p>
              </div>
              <div className="button-group mt-3">
                <button className="btn btn-primary fs-5 me-3">60 Seats</button>
                <button className="btn btn-danger fs-5">Read More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="course-card">
          <div className="d-flex flex-column flex-lg-row">
            <img 
              src="/Static/Rectangle-36.png" 
              alt="B.Sc Nursing"
              className="course-image"
            />
            <div className="course-content ms-lg-4 mt-4 mt-lg-0">
              <div className="d-flex align-items-center">
                <img
                  src="/Static/image-1.png"
                  alt=""
                  className="course-icon"
                />
                <div className="ms-3">
                  <span className="course-title">B.Sc</span>
                  <span className="course-title-alt">Nursing</span>
                  <p className="course-subtitle">
                    (General Nursing & Midwifery)
                  </p>
                </div>
              </div>
              <div className="course-details mt-3">
                <p><span className="highlight">Overview:</span> The Basic B.Sc Nursing is the 4 years degree programme affiliated to West Bengal Nursing Council (WBNC). This programme is approved by West Bengal University of Health Sciences (WBUHS). We have student dedicated placement facility.</p>
                <p><span className="highlight">Eligibility:</span> 10+2</p>
                <p><span className="highlight">Duration:</span> 4 Years</p>
              </div>
              <div className="button-group mt-3">
                <button className="btn btn-primary fs-5 me-3">60 Seats</button>
                <button className="btn btn-danger fs-5">Read More</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Courses;
