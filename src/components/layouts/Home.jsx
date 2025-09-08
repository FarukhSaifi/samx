import React from "react";
import Banner from "./Banner.jsx";
import Content from "./Content.jsx";

const Home = () => {
  return (
    <>
      <Banner />
      <Content />
    </>
  );
};

export default React.memo(Home);
