import "./RecipePage.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipe } from "../../context/recipe/useRecipe";

export const RecipePage = () => {
    const { getRecipeById, loading, recipes } = useRecipe();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchRecipe = async () => {
            if (id) {
                await getRecipeById(id); 
            }
        };
        fetchRecipe();
    }, [] );

    return (
        <div className="recipe-page-container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {recipes.length > 0 ? (
                        <div key={recipes[0]._id}>
                            <h1>{recipes[0].name}</h1>
                            <p>{recipes[0].description}</p>
                            <img src={recipes[0].image} alt={recipes[0].name} />
                            <p>Category: {recipes[0].category}</p>
                            <h3>Ingredients:</h3>
                            <ul>
                                {recipes[0].ingredients.map((ingredient, index) => (
                                    <li key={index}>
                                        {`${ingredient.quantity} ${ingredient.unit} of ${ingredient.ingredientName}`}
                                    </li>
                                ))}
                            </ul>
                            <h3>Steps:</h3>
                            <ol>
                                {recipes[0].steps.map((step, index) => (
                                    <li key={index}>{step.step}</li>
                                ))}
                            </ol>
                        </div>
                    ) : (
                        <p>No se encontro la receta</p>
                    )}
                </div>
            )}
        </div>
    );
};
