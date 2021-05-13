import React, { useContext } from "react";
import DataContext from "../../Context/DataContext/DataContext";
import Image from "../shared-component/Image";

const Banner = () => {
  const context = useContext(DataContext);
  const { profile } = context;

  return (
    <section
      className="wow fadeIn p-0 mobile-height parallax"
      data-stellar-background-ratio="0.5"
      style={{ backgroundImage: "url('images/homepage-option18-banner.jpg')" }}
    >
      <div className="container text-center one-third-screen lg-height-350px md-height-500px sm-height-auto sm-padding-40px-top sm-padding-50px-bottom">
        <div className="row">
          <div className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center one-third-screen lg-height-350px md-height-500px sm-height-auto text-center wow bounceInLeft sm-height-auto sm-margin-30px-bottom">
            <Image alt="SamX" src="images/samx/samlogo-3.png" />
          </div>
          <div className="col-12 col-md-9 d-flex flex-column align-items-center justify-content-center one-third-screen lg-height-350px md-height-500px sm-height-auto text-center wow bounceInRight sm-height-auto">
            <div className="font-weight-300 alt-font title-large text-extra-dark-gray d-inline-block align-bottom mx-auto">
              I'm{" "}
              <span
                className="font-weight-600 text-bold-underline position-relative"
                style={{ fontFamily: "Barcelony" }}
              >
                {profile?.name}
              </span>
            </div>
            <div className="text-medium-gray text-large text-uppercase margin-40px-top letter-spacing-2 alt-font sm-margin-10px-top">
              {profile?.work}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
