function Courses() {
  return (
    <div className="mt-5">
      <center>
        <h3 className="fs-2">Our Courses</h3>
      </center>
      {/* // Cards */}
      <div className="m-5 d-flex">
        {/* // Card 1 */}
        <div >
          <div className="d-flex">
            <img src="/Static/Rectangle-5.png" alt="" />
            <div>
              <div className="d-flex">
                <img
                  src="/Static/image-1.png"
                  alt=""
                  style={{ marginLeft: "20px" }}
                />
                <div>
                  <span style={{ color: "#F8193F" }} className="fs-4 fw-bold">
                    GNM{" "}
                  </span>
                  <span style={{ color: "#0E4EB2" }} className="fs-4 fw-bold">
                    Nursing
                  </span>
                  <p className="fs-5 fw-semibold">
                    (General Nursing & Midwifery)
                  </p>
                </div>
              </div>
              <div className="container mt-3 fs-5 fw-semibold">
                <span style={{ color: "#F8193F" }}>Overview: </span>
                <span>
                  The General nursing and Midwifery (GNM) training Course is of
                  3 years duration with English as the medium of instruction.
                  Apart from theoretical training in class rooms, the practical
                  hospital training would be of paramount. We have student
                  dedicated placement facility. <br />
                  <br />
                  <span style={{ color: "#0E4EB2" }}>
                    Eligibility: 10+2
                  </span>{" "}
                  <br />
                  <br />{" "}
                  <span style={{ color: "#F8193F" }}>Duration: 3 Years</span>
                </span>
              </div>
              <button className="btn btn-primary m-3 fs-5">
                  60 Seats
                </button>
                <button className="btn btn-danger m-3 fs-5">Read More</button>
            </div>
          </div>
        </div>

        {/* // Card 2 */}
        <div >
          <div className="d-flex">
            <img src="/Static/Rectangle-36.png" alt="" />
            <div>
              <div className="d-flex">
                <img
                  src="/Static/image-1.png"
                  alt=""
                  style={{ marginLeft: "20px" }}
                />
                <div>
                  <span style={{ color: "#F8193F" }} className="fs-4 fw-bold">
                    B.Sc{" "}
                  </span>
                  <span style={{ color: "#0E4EB2" }} className="fs-4 fw-bold">
                    Nursing
                  </span>
                  <p className="fs-5 fw-semibold">
                    (General Nursing & Midwifery)
                  </p>
                </div>
              </div>
              <div className="container mt-3 fs-5 fw-semibold">
                <span style={{ color: "#F8193F" }}>Overview: </span>
                <span>
                  The Basic B.Sc Nursing is the 4 years degree programme
                  affiliated to West Bengal Nursing Council (WBNC). This
                  programme is approved by West Bengal University of Health
                  Sciences (WBUHS).We have student dedicated placement facility.
                  <br />
                  <br />
                  <span style={{ color: "#0E4EB2" }}>
                    Eligibility: 10+2
                  </span>{" "}
                  <br />
                  <br />{" "}
                  <span style={{ color: "#F8193F" }}>Duration: 3 Years</span>
                </span>
              </div>
                <button className="btn btn-primary m-3 fs-5">
                  60 Seats
                </button>
                <button className="btn btn-danger m-3 fs-5">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
