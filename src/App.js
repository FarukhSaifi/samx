import React from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import DataState from "./Context/DataContext/DataState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/layouts/Home";
import NotFound from "./components/shared-component/404";
import ArtBoard from "./components/shared-component/ArtBoard";

const App = () => {
  return (
    <DataState>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/art/:postId" component={ArtBoard} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </DataState>
  );
};

export default App;
