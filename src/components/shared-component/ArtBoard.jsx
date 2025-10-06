import { DataContext } from "@context/DataContext/DataState.jsx";
import Link from "next/link";
import React, { useContext, useMemo } from "react";
import Image from "./Image.jsx";
import Loader from "./Loader.jsx";

const ArtBoard = () => {
  const context = useContext(DataContext);
  const { getArt, loading, artBoard } = context;

  // in Next.js, page handles getArt in pages/art/[postId].jsx

  // Memoize the album to prevent unnecessary re-renders
  const memoizedAlbum = useMemo(() => artBoard?.album || [], [artBoard?.album]);

  if (loading) {
    return <Loader />;
  }

  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <>
      {/* <section
        className="wow animate__animated fadeIn one-fourth-screen cover-background"
        style={{ backgroundImage: `url(${window.location.origin}/images/pofo-magic-box-bg.jpg)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </section> */}

      {/* <section className="wow animate__animated fadeIn bg-extra-dark-gray">
        <div className="container">
          <div className="row"> */}
      {/* <div className="col-12 col-lg-6 md-margin-50px-bottom sm-margin-30px-bottom wow animate__animated fadeInLeft">
              <h2 className="alt-font font-weight-700 letter-spacing-minus-2 text-white-2 margin-5px-bottom">
                Meat Bun
              </h2>
              <h6 className="alt-font font-weight-300">Fast food branding.</h6>
              <p className="margin-35px-bottom d-block">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </p>
              <a href="index.html" className="btn btn-transparent-light-gray btn-small">
                Launch Website
              </a>
            </div>
            <div className="col-12 col-lg-4 offset-lg-2 wow animate__animated fadeInRight">
              <ul className="list-style-9 margin-twelve-left">
                <li className="text-uppercase">
                  <span className="d-block text-extra-small text-white-2">Client</span>Jason Richardson
                </li>
                <li className="text-uppercase">
                  <span className="d-block text-extra-small text-white-2">Industry</span>Adventure / Travel
                </li>
                <li className="text-uppercase">
                  <span className="d-block text-extra-small text-white-2">Services</span>Design, Art Direction, Website
                </li>
                <li className="text-uppercase">
                  <span className="d-block text-extra-small text-white-2">Website</span>
                  <a href="index.html">www.meatbun.com</a>
                </li>
              </ul>
            </div> */}
      {/* </div>
        </div>
      </section> */}

      {/* <section
        className="p-0 parallax one-fifth-screen md-height-500px sm-height-350px background-position-x-50 wow  animate__animated fadeIn"
        data-stellar-background-ratio="0.4"
        style={{ backgroundImage: `url(${window.location.origin}/${artBoard?.image})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </section> */}

      <section className="wow animate__animated fadeIn p-0">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-12 p-0"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {memoizedAlbum.length !== 0 ? (
                memoizedAlbum.map(item => (
                  <Image key={item?.id} src={`${baseUrl}/${item?.name}`} alt={item?.alt} className="width-100" />
                ))
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="wow animate__animated{{ fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center social-style-4">
              <span className="text-medium font-weight-600 text-uppercase d-block alt-font text-extra-dark-gray margin-30px-bottom">
                Share Our Work
              </span>
              <div className="social-icon-style-3">
                <ul className="margin-30px-top medium-icon">
                  <li>
                    <Link className="facebook" href={{ pathname: "http://facebook.com" }} target="_blank">
                      <i className="fab fa-facebook-f"></i>
                      <span></span>
                    </Link>
                  </li>
                  <li>
                    <Link className="twitter" href={{ pathname: "http://twitter.com" }} target="_blank">
                      <i className="fab fa-twitter"></i>
                      <span></span>
                    </Link>
                  </li>
                  <li>
                    <Link className="google" href={{ pathname: "http://google.com" }} target="_blank">
                      <i className="fab fa-google-plus-g"></i>
                      <span></span>
                    </Link>
                  </li>
                  <li>
                    <Link className="dribbble" href={{ pathname: "http://dribbble.com" }} target="_blank">
                      <i className="fab fa-dribbble"></i>
                      <span></span>
                    </Link>
                  </li>
                  <li>
                    <Link className="linkedin" href={{ pathname: "http://linkedin.com" }} target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                      <span></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(ArtBoard);
