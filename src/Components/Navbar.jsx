import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/Static/image-1.png" alt="" />
        </a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 fw-bold" >
            <li className="nav-item gap-nav" style={{ margin: "0 58px"}}>
              <a className="nav-link active" aria-current="page" href="#" style={{ color: "#0E4EB2"}}>
                Home
              </a>
            </li>
            <li className="nav-item gap-nav" style={{ margin: "0 58px"}}>
              <a className="nav-link" href="#" style={{ color: "#0E4EB2"}}>
                About Us
              </a>
            </li>
            <li className="nav-item" style={{ margin: "0 58px" }}>
              <a className="nav-link" href="#" style={{ color: "#0E4EB2"}}>
                Courses
              </a>
            </li>
            <li className="nav-item" style={{ margin: "0 58px" }}>
              <a className="nav-link" href="#" style={{ color: "#0E4EB2"}}>
                Gallery
              </a>
            </li>
            <li className="nav-item" style={{ margin: "0 58px" }}>
              <a className="nav-link" href="#" style={{ color: "#0E4EB2"}}>
                Contact Us
              </a>
            </li>
           
          </ul>
          <button className="btn btn-danger" style={{marginRight: "30px"}}>Download Prospectus</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
