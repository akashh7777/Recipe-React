import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>

      <div className="home-content">
        <div className="eyebrow">
          <span></span>
          THE ART OF GOOD FOOD
        </div>

        <h1>
          Good food
          <br />
          <i>starts here.</i>
        </h1>

        <p>
          Explore carefully selected recipes from around the world and turn
          everyday ingredients into something extraordinary.
        </p>

        <div className="home-buttons">
          <a href="#recipes" className="primary-btn">
            Explore Recipes
            <span>↗</span>
          </a>

          <a href="#about" className="secondary-btn">
            Our Story
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-glow"></div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
            alt="Healthy food"
          />
        </div>

        <div className="floating-card">
          <span>✦</span>

          <div>
            <small>Today's pick</small>
            <strong>Fresh & delicious</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
