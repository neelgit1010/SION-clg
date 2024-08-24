import { GoTriangleRight } from "react-icons/go";
import '../styles/Welcome.css';  // Ensure you import the CSS file

function Welcome() {
  return (
    <div className='welcome-container container mt-5'>
      <div className="text-content">
        <h2>
          <p className="text-primary">Welcome to</p> 
          <p style={{color: "red"}}>Sarojini Institute of Nursing | Admission 2024 Live</p>
        </h2>
        <div className="d-flex align-items-center mb-2">
          <GoTriangleRight className="icon" />
          <p className="fw-bold fs-5 ms-2">WBNC INC Approved Nursing College</p>
        </div>
        <div className="d-flex align-items-center mb-2">
          <GoTriangleRight className="icon" />
          <p className="fw-bold fs-5 ms-2">GNM B.Sc Nursing College in Bankura</p>
        </div>
        <div className="d-flex align-items-center mb-2">
          <GoTriangleRight className="icon" />
          <p className="fw-bold fs-5 ms-2">Student Credit Card Facility Available</p>
        </div>
        <div className="d-flex align-items-center mb-2">
          <GoTriangleRight className="icon" />
          <p className="fw-bold fs-5 ms-2">Easy Loan, Placement Opportunities</p>
        </div>
        <p className="fw-semibold mt-3">
          Sarojini Institute of Nursing, a leading GNM and B.Sc nursing college. <br />
          Our modern campus features advanced labs, a comprehensive library, and comfortable hostel accommodations. <br />
          We provide a range of student support services including easy loan facilities and a student credit card option. 
          Join us for a robust education in nursing with a focus on both technical skills and professional development.
        </p>
        <button className="btn btn-primary w-100 mt-3 p-3 fs-5">Download Prospectus</button>
        <button className="btn btn-danger w-100 mt-3 p-3 fs-5">Download Permission Copy</button>
      </div>
      <div className="image-content d-none d-md-block">
        <img src="/Static/Rectangle-4.png" alt="" />
      </div>
    </div>
  )
}

export default Welcome;
