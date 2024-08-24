import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import '../styles/Footer.css';

function Footer() {
  return (
    <div style={{ backgroundColor: "#0E4EB2" }}>
      <footer className="py-5 text-white">
        <div className="container">
          <div className="row border-bottom mb-3 pb-3">
            <div className="col-12 col-md-2 d-flex align-items-center mb-3">
              <img src="/Static/image-18.png" alt="Logo" className="footer-logo" />
            </div>
            <div className="col-12 col-md-3 d-flex align-items-center mb-3">
              <FaPhoneAlt />
              <p className="ms-2 mb-0">+91 98832 39466</p>
            </div>
            <div className="col-12 col-md-3 d-flex align-items-center mb-3">
              <FaWhatsapp />
              <p className="ms-2 mb-0">+91 98832 39466</p>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-center mb-3">
              <MdEmail />
              <p className="ms-2 mb-0">sarojininursing21@gmail.com</p>
            </div>
          </div>

          <div className="row">
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
                    About Us
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
                    Contact Us
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
                    BSc Nursing
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
                    WhatsApp
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

            <div className="col-md-2 d-flex justify-content-center align-items-center mb-3">
              <img src="/Static/image-17.png" alt="Image" className="footer-img" />
            </div>

            <p className="text-white text-end col-md-12">
              Vill:Ikra, P.O.:Sripat Purnia, P.S.:Mejia,
              <br />
              Pin:722143, West Bengal
            </p>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p className="mb-0 text-center">
              &copy; 2024 <strong>Sarojini Institute of Nursing</strong> | All
              Rights Reserved | Privacy Policy
            </p>
            <p className="mb-0 text-center">
              Developed By: <strong>Reboot Marketing Pvt. Ltd.</strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
