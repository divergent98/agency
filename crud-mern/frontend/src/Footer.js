import React from "react";
import instagram from "./img/instagram.png";
import youtube from "./img/youtube.png";
import telegram from "./img/telegram.png";
import whatsapp from "./img/whatsapp.png";
export const Footer = () => {
  return (
    <div className="background-dark-gray"> 
    <div className="container">
      <div className="row">      
        <div className="col-3 social">
          <div className="logo">
            logo
          </div>
          <div className="social-media-icons">
          <h6 class="text-primary mt-4 mb-3">Follow Us</h6>
          <div class="d-flex">
                        <a class="mx-2" href="#"><img src={instagram} /></a>
                        <a class="mx-2" href="#"><img src={youtube} /></a>
                        <a class="mx-2" href="#"><img src={telegram} /></a>
                        <a class="mx-2" href="#"><img src={whatsapp} /></a>
                    </div>
          </div>
        </div>
        <div className="col-3 contact">

        </div>
        <div className="col-3 polices"></div>
        <div className="col-3 quick-links"></div>
  

      </div>
    </div>
    </div>
  );
};
