import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-center-logo2 padding-three-tb sm-padding-30px-tb sticky">
      <div className="container">
        <div className="row align-items-center">
          {/* <!-- start social media --> */}
          <div className="col-lg-4 col-md-5 social-style-3 text-center text-lg-left sm-margin-10px-bottom">
            <div className="social-icon-style-8 d-inline-block vertical-align-middle">
              <ul className="small-icon mb-0">
                <li>
                  <Link to={{ pathname: "https://www.behance.net/mdsameersaifi" }} title="Behance" target="_blank">
                    <i className="fab fa-behance text-extra-dark-gray" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link to={{ pathname: "https://www.instagram.com/samx99designs" }} title="Instagram" target="_blank">
                    <i className="fab fa-instagram text-extra-dark-gray"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to={{ pathname: "https://www.linkedin.com/in/md-sameer-saifi" }}
                    title="Linkedin"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in text-extra-dark-gray"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- end social media --> */}
          {/* <!-- start logo --> */}
          <div className="col-lg-4 col-md-2 text-center sm-margin-20px-bottom">
            <a href="/">
              <h6 style={{ fontFamily: "Barcelony" }} className="footer-logo">
                Sammer Saifi
              </h6>
              {/* <img className="footer-logo" src="images/logo.png" data-rjs="images/logo@2x.png" alt="" /> */}
            </a>
          </div>
          {/* <!-- end logo --> */}
          {/* <!-- start copyright --> */}
          <div className="col-lg-4 col-md-5 text-center alt-font text-small font-weight-500 text-lg-right">
            &copy; 2021 SamX is Powered by{" "}
            <a href="https://github.com/Farukh1x95" target="_blank" title="Samx" rel="noreferrer">
              Finix
            </a>
            .
          </div>
          {/* <!-- end copyright --> */}
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
