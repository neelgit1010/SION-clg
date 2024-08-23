import { GoTriangleRight } from "react-icons/go";

function Welcome() {
  return (
    <div className='container d-flex'>
        <div className="container">
            <h2>
            <p style={{color: "#F8193F"}}>Welcome to</p> 
            <p style={{color: "#0E4EB2"}}>Sarojini Institute of Nursing | Admission 2024 Live</p>
            </h2>
            <div className="d-flex"><span><GoTriangleRight /></span> <p className="fw-bold fs-5">WBNC INC Approved Nursing College</p></div>
            <div className="d-flex"><span><GoTriangleRight /></span> <p className="fw-bold fs-5">GNM B.Sc Nursing College in Bankura</p></div>
            <div className="d-flex"><span><GoTriangleRight /></span> <p className="fw-bold fs-5">Student Credit Card Facility Available</p></div>
            <div className="d-flex"><span><GoTriangleRight /></span> <p className="fw-bold fs-5">Easy Loan, Placement Opportunities</p></div>
            <p className="fw-semibold">
            Sarojini Institute of Nursing,  leading GNM, B.Sc nursing college. <br/>Our modern campus features advanced labs, a comprehensive library, and comfortable hostel accommodations. <br /> We provide a range of student support services including easy loan facilities and a student credit card option.  Join us for a robust education in nursing with a focus on both technical skills and professional development.
            </p>
            <button className="btn btn-primary w-100 mt-3 p-3 fs-5">Download Prospectus</button>
            <button className="btn btn-danger w-100 mt-3 p-3 fs-5">Download Permission Copy</button>
        </div>
        <div>
          <img src="/Static/Rectangle-4.png" alt="" />
        </div>
    </div>
  )
}

export default Welcome