import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import IngredientList from "./IngredientList";

const URL = "https://api.spoonacular.com/recipes";
const API_KEY = ""; // Register with https://spoonacular.com/food-api and add your api key here.

export default function FoodDetails({ foodID }) {
  const [isLoading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}/${foodID}/information?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log({ data });
      setRecipe(data);
      setLoading(false);
    }

    fetchFood();
  }, [foodID]);

  return (
    <div>
      <div className={styles.recipeCardContainer}>
        <div>
          <h1 className={styles.recipeTitle}> {recipe.title}</h1>
          <img className={styles.recipeImage} alt={recipe.title} src={recipe.image} />

          <div className={styles.recipeInfo}>
            <span>
              <strong>🕘 {recipe.readyInMinutes} minutes</strong>
            </span>
            <span>
              <strong>👨‍👧‍👦 Serves {recipe.servings}</strong>
            </span>
            <span>
              {recipe.vegetarian ? "🌿 Vegetarian" : "🥩 Non-Vegetarian"}
            </span>
            <span>{recipe.vegan ? "🌿 Vegan" : ""}</span>
          </div>
          <div>
            <span>💰 ${recipe.pricePerServing / 100} Per Serving</span>
          </div>
        </div>
        <IngredientList recipe={recipe} isLoading={isLoading}/>
        <div>
          <h2>Instructions:</h2>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              recipe.analyzedInstructions[0].steps.map((step) => {
                return <li key={step.number}>{step.step}</li>;
              })
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
