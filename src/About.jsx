import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        {/* Left Content */}

        <div className="about-content">
          <div className="about-label">
            <span></span>
            ABOUT RECIPEHUB
          </div>

          <h2>
            Food is more than
            <br />
            <i>just a recipe.</i>
          </h2>

          <p className="about-description">
            RecipeHub is a place for curious cooks, food lovers, and anyone
            looking for their next great meal.
          </p>

          <p className="about-description second">
            From comforting classics to dishes from around the world, discover
            recipes that make everyday cooking feel a little more special.
          </p>

          <a href="#recipes" className="about-button">
            Discover Recipes
            <span>↗</span>
          </a>
        </div>

        {/* Right Visual */}

        <div className="about-visual">
          <div className="about-glow"></div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85"
              alt="Fresh ingredients"
            />
          </div>

          {/* Floating Glass Card */}

          <div className="about-card">
            <div className="about-card-icon">✦</div>

            <div>
              <small>OUR PHILOSOPHY</small>

              <strong>Cook with curiosity.</strong>

              <p>Eat with intention.</p>
            </div>
          </div>

          {/* Number */}

          <div className="about-number">
            <span>01</span>
            <p>
              Discover
              <br />
              something new
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}

      <div className="about-stats">
        <div>
          <strong>30+</strong>
          <span>Recipes</span>
        </div>

        <div>
          <strong>10+</strong>
          <span>Cuisines</span>
        </div>

        <div>
          <strong>∞</strong>
          <span>Possibilities</span>
        </div>

        <div className="stats-message">
          <span>Made for people who</span>
          <strong>love good food.</strong>
        </div>
      </div>
    </section>
  );
};

export default About;
