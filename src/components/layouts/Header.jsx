import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../Context/DataContext/DataContext";

const Header = () => {
  const context = useContext(DataContext);
  const { profile } = context;

  console.log("Header => ", profile);

  return (
    <header>
      {/* <!-- start navigation --> */}
      <nav className="navbar navbar-default bootsnav bg-transparent navbar-top navbar-transparent-no-sticky">
        <div className="container-fluid nav-header-container height-100px padding-three-half-lr sm-height-70px sm-padding-15px-lr">
          {/* <!-- start header navigation --> */}
          <div className="col d-none d-md-block text-left pl-0">
            <div className="social-icon">
              <Link to="/about" target="_blank">
                <i className="fab fa-facebook-f text-extra-dark-gray" aria-hidden="true"></i>
              </Link>

              <Link to="/twitter" target="_blank">
                <i className="fab fa-twitter text-extra-dark-gray"></i>
              </Link>

              <Link to="/dribble" title="Dribbble" target="_blank">
                <i className="fab fa-dribbble text-extra-dark-gray"></i>
              </Link>
            </div>
          </div>
          {/* <!-- start logo --> */}
          <div className="col text-md-center pl-0 pl-md-3">
            {/* <a className="logo" href="/">
              <h6 style={{ fontFamily: "Barcelony" }} className="default">
                {profile?.name}
              </h6>
            </a> */}
          </div>
          {/* <!-- end logo --> */}
          <div className="col text-right pr-0">
            <div className="hamburger-menu">
              {/* <div className="btn btn-hamburger border-none">
                <button
                  className="navbar-toggler mobile-toggle"
                  type="button"
                  id="open-button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div> */}
              <div className="hamburger-menu-wrepper sm-text-center">
                <div className="hamburger-logo text-left">
                  <a className="logo" href="index.html">
                    <img src="images/logo-white.png" data-rjs="images/logo-white@2x.png" alt="Pofo" />
                  </a>
                </div>
                <div className="btn btn-hamburger border-none">
                  <button className="close-menu close-button-menu" id="close-button"></button>
                </div>
                <div className="animation-box">
                  <div className="menu-middle">
                    <div className="menu-wrapper d-table-cell align-middle text-left">
                      <div className="d-md-flex">
                        <div className="col-lg-8 col-md-7 d-flex align-items-center">
                          <ul className="hamburger-menu-links alt-font">
                            <li>
                              <a href="home-classic-corporate.html" title="Home">
                                Home
                              </a>
                            </li>
                            <li>
                              <a href="about-me.html" title="Pages">
                                Pages
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-full-width-grid-overlay.html" title="Portfolio">
                                Portfolio
                              </a>
                            </li>
                            <li>
                              <a href="blog-standard-full-width.html" title="Blog">
                                Blog
                              </a>
                            </li>
                            <li>
                              <a href="accordions.html" title="Contact">
                                Elements
                              </a>
                            </li>
                            <li>
                              <a href="transparent-header.html" title="Shortcode">
                                Features
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-4 col-md-5 d-flex align-items-center social-style-3">
                          <div className="width-100">
                            <span className="text-extra-large text-deep-pink alt-font d-block margin-15px-bottom">
                              SamX
                            </span>
                            <span className="text-medium alt-font d-block font-weight-300 margin-15px-bottom line-height-30">
                              301 The Greenhouse,
                              <br />
                              Custard Factory, London, E2 8DY.
                              <br />
                              Call - +44 (0) 123 456 7890
                              <br />
                              Email -{" "}
                              <Link
                                to={{ pathname: "mailto:info@domain.com" }}
                                className="text-white-2"
                                target="_blank"
                              >
                                info@domain.com
                              </Link>
                            </span>
                            <div className="separator-line-horrizontal-medium-light2 bg-deep-pink margin-25px-tb sm-margin-15px-tb d-inline-block"></div>
                            <div className="social-icon-style-9">
                              <ul className="small-icon">
                                <li>
                                  <Link
                                    className="margin-20px-right facebook"
                                    to="https://www.facebook.com/"
                                    target="_blank"
                                  >
                                    <i className="fab fa-facebook-f"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="margin-20px-right twitter" to="http://twitter.com" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="margin-20px-right google" to="http://google.com" target="_blank">
                                    <i className="fab fa-google-plus-g"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="margin-20px-right dribbble" to="http://dribbble.com" target="_blank">
                                    <i className="fab fa-dribbble"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link className="inkedin" to="http://linkedin.com" target="_blank">
                                    <i className="fab fa-linkedin-in"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Header Navigation --> */}
      </nav>
      {/* <!-- end navigation --> */}
    </header>
  );
};

export default React.memo(Header);
