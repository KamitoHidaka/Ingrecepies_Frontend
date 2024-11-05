import "./Home.css";
import { useEffect } from "react";
import { useRecipe } from "../../context/recipe/useRecipe";
import { RecepieItem } from "../../components/common/recepieItem/RecepieItem";

export const Home = () => {
  const { getAllRecipes, recipes, loading } = useRecipe();

  useEffect(() => {
    const fetchRecipes = async () => {
      await getAllRecipes();
    };

    fetchRecipes();
  }, []);

  return (
    <div className="home-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section className="grid-container">
          {recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <RecepieItem
                To={recipe._id}
                key={index}
                Title={recipe.name}
                Category={recipe.category}
                Thumbnail={recipe.image}
              />
            ))
          ) : (
            <p>No hay recetas disponibles</p>
          )}
        </section>
      )}
    </div>
  );
};
