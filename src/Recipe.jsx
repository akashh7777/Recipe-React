import React, { useEffect, useState } from "react";
import "./recipe.css";

const Recipe = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    getRecipeData();
  }, []);

  const getRecipeData = async () => {
    try {
      let apiResponse = await fetch("https://dummyjson.com/recipes");
      apiResponse = await apiResponse.json();

      setRecipeData(apiResponse.recipes);
    } catch (error) {
      console.log(error);
      alert("API call failed");
    }
  };

  return (
    <section id="recipes">
      <div className="recipe-heading">
        <p>DISCOVER</p>

        <h2>
          Recipes worth <span>cooking.</span>
        </h2>

        <h4>Discover delicious dishes from around the world.</h4>
      </div>

      <div className="recipe-grid">
        {recipeData.map((eachRecipe) => (
          <div className="recipe-card" key={eachRecipe.id}>
            <div className="recipe-image">
              <img src={eachRecipe.image} alt={eachRecipe.name} />

              <div className="recipe-rating">⭐ {eachRecipe.rating}</div>

              <button className="favorite-btn">♡</button>
            </div>

            <div className="recipe-content">
              <div className="recipe-tag">{eachRecipe.cuisine}</div>

              <h3>{eachRecipe.name}</h3>

              <div className="recipe-info">
                <span>⏱ {eachRecipe.cookTimeMinutes} min</span>

                <span>🍽 {eachRecipe.servings}</span>
              </div>

              <button
                className="view-btn"
                onClick={() => setSelectedRecipe(eachRecipe)}
              >
                View Recipe
                <span>↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RECIPE MODAL */}

      {selectedRecipe && (
        <div
          className="recipe-modal-overlay"
          onClick={() => setSelectedRecipe(null)}
        >
          <div className="recipe-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={() => setSelectedRecipe(null)}
            >
              ×
            </button>

            <div className="modal-image">
              <img src={selectedRecipe.image} alt={selectedRecipe.name} />
            </div>

            <div className="modal-content">
              <div className="recipe-tag">{selectedRecipe.cuisine}</div>

              <h2>{selectedRecipe.name}</h2>

              <div className="modal-rating">⭐ {selectedRecipe.rating}</div>

              <div className="modal-info">
                <div>
                  <span>⏱</span>
                  <small>Cook Time</small>
                  <strong>{selectedRecipe.cookTimeMinutes} min</strong>
                </div>

                <div>
                  <span>🍽</span>
                  <small>Servings</small>
                  <strong>{selectedRecipe.servings}</strong>
                </div>

                <div>
                  <span>📊</span>
                  <small>Difficulty</small>
                  <strong>{selectedRecipe.difficulty}</strong>
                </div>
              </div>

              <h3>Ingredients</h3>

              <ul className="ingredients">
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <span>•</span>
                    {ingredient}
                  </li>
                ))}
              </ul>

              <h3>Instructions</h3>

              <div className="instructions">
                {selectedRecipe.instructions.map((instruction, index) => (
                  <div className="instruction" key={index}>
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <p>{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Recipe;
