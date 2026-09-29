import React from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Recipe from "./Recipe";
import About from "./About";

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />

      <Home />
      <Recipe />
      <About />
    </>
  );
};

export default App;
