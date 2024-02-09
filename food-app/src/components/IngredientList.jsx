import IngredientItem from "./IngredientItem";

export default function IngredientList({recipe, isLoading}) {
    return (
        <div>
            <h2>Ingredients:</h2>
            {
                isLoading ? <p>Loading...</p> : recipe.extendedIngredients.map((item) => <IngredientItem item={item}/>) 
            }
        </div>
    )
}