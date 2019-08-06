import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./homePage/homePage";
import AboutPage from "./aboutPage/aboutPage";
import Header from "./common/Header";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
    </div>
  );
}

export default App;
