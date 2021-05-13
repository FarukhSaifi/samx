import React from "react";
import Banner from "./Banner";
import Content from "./Content";

const Home = () => {
  return (
    <>
      <Banner />
      <Content />
    </>
  );
};

export default React.memo(Home);
