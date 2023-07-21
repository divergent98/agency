import React from "react";
import { Link } from 'react-router-dom';
import instagram from "./img/instagram.png";
import youtube from "./img/youtube.png";
import telegram from "./img/telegram.png";
import whatsapp from "./img/whatsapp.png";
import logo from "./img/logo.png";
export const Footer = () => {
  return (
    <div className="background-dark-gray">
      <div className="container py-5">
        <div className="row ">
          <div className="col-lg-3 col-md-6 col-sm-12 social" >
            <div className="logo">
              <img className="footer-logo " src={logo} />
            </div>
            <div className="social-media-icons">
              <h6 class="gradient-headline font-18 blinker mt-4 mb-3">
                Follow Us
              </h6>
              <div class="d-flex ">
                <a class="me-4" href="#">
                  <img src={instagram} />
                </a>
                <a class="me-4" href="#">
                  <img src={youtube} />
                </a>
                <a class="me-4" href="#">
                  <img src={telegram} />
                </a>
                <a class="me-4" href="#">
                  <img src={whatsapp} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 polices">
            <h6 class="gradient-headline font-24 blinker mt-4 mb-3 footer-headline">
              Company polices
            </h6>
            <ul className="font-18 list-decoration">
              <li><Link className="decoration-none text-light">Legal</Link></li>
              <li><Link className="decoration-none text-light">Terms and conditions</Link></li>
              <li><Link className="decoration-none text-light">Support</Link></li>
              <li><Link className="decoration-none text-light">Careers</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 quick-links">
            <h6 class="gradient-headline font-24 blinker mt-4 mb-3 footer-headline">
              Site Navigation
            </h6>
            <ul className="font-18  list-decoration">
              <li><Link className="decoration-none text-light">Home</Link></li>
              <li><Link className="decoration-none text-light">Hot tours</Link></li>
              <li><Link className="decoration-none text-light">Special offers</Link></li>
              <li><Link className="decoration-none text-light">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 contact">
            <h6 class="gradient-headline font-24 blinker mt-4 mb-3 footer-headline">
              Contact us
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
