import Footer from "@components/layouts/Footer.jsx";
import Header from "@components/layouts/Header.jsx";
import Home from "@components/layouts/Home.jsx";
import NotFound from "@components/shared-component/404.jsx";
import ArtBoard from "@components/shared-component/ArtBoard.jsx";
import DataState from "@context/DataContext/DataState.jsx";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <DataState>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art/:postId" element={<ArtBoard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </DataState>
  );
};

export default App;
