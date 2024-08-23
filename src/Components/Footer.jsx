import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md"

function Footer() {
  return (
    <div style={{ backgroundColor: "#0E4EB2" }}>
      <footer className="py-5 text-white">
        <div className="row border-bottom mb-3 mx-4">
         <div className="col-6 col-md-2 d-flex mb-3"> 
          <img src="/Static/image-18.png" alt="" />
         </div>
          <div className="col-6 col-md-2 d-flex align-items-center">
          <FaPhoneAlt/>
            <p className="ms-2">+91 98832 39466</p>
          </div>
          <div className="col-6 col-md-2 d-flex align-items-center">
          <FaWhatsapp/>
            <p className="ms-2">+91 98832 39466</p>
          </div>
          <div className="col-6 col-md-2 d-flex align-items-center">
          <MdEmail/>
            <p className="ms-2">sarojininursing21@gmail.com</p>
          </div>
        </div>

        <div className="row mx-5">
          <div className="col-6 col-md-2 mb-3">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  About us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Courses
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Admission
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Our Courses</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                GNM Nursing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                BSC Nurisng
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                Nursing College
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                Nursing Institute
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                Nursing Institution
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>About Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                Nursing College in Bankura
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                Nursing Institution in WB
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                Private Nursing College
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                GNM Nursing College
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                Private BSc Nursing College
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Social Media</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Whatsapp
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Facebook
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Instagram
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  LinkedIn
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-1 offset-md-1 mb-3">
            <img src="/Static/image-17.png" alt="" />
          </div>
          <p className=" fs-6 fw-semibold text-end">
            Vill:Ikra, P.O.:Sripat Purnia, P.S.:Mejia,
            <br />
            Pin:722143, West Bengal
          </p>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 mx-4 border-top">
          <p className="mx-5">
            Copyright 2024 <strong>Sarojini Institute of Nursing</strong> | All
            Rights Reserved. Privacy Policy
          </p>
          <p className="mx-5">
            Developed By: <strong>Reboot Marketing Pvt. Ltd.</strong>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
