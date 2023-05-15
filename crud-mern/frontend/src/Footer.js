import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
          felis scelerisque, gravida sapien non, cursus augue. Aenean id pretium
          turpis. Suspendisse eros nunc, sollicitudin nec.
        </p>

        <ul className="socials">
          <li>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-linkedin-square"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright <span id="year"></span> <a href="#">lila.the.aen.seidhe</a>{" "}
        </p>

        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <a href="">Home</a>
            </li>

            <li>
              <a href="">About</a>
            </li>

            <li>
              <a href="">Contact</a>
            </li>

            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
