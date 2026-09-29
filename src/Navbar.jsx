import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="logo">
        <h1>
          <span>✦</span> RecipeHub
        </h1>
      </div>

      <div id="nav">
        <a href="#home">Home</a>

        <a href="#recipes">Recipes</a>

        <a href="#about">About</a>
      </div>

      <div id="navbutton">
        <a href="#recipes">
          Explore <span>↗</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
