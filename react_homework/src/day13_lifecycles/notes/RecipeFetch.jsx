// https://dummyjson.com/recipes/1

import { useEffect, useState } from "react";

async function delayedCall(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default function RecipeFetch() {
  const [recipeId, setRecipeId] = useState(1);
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchRecipe = async () => {
      try {
        await delayedCall(1000);
        const res = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
        const data = await res.json();
        setRecipe(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecipe();
  }, [recipeId]);

  const handlePrevButton = () => {
    if (recipeId === 1) {
      return;
    } else {
      setRecipeId((id) => id - 1);
    }
  };

  const handleNextButton = () => {
    setRecipeId((id) => id + 1);
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <button onClick={handlePrevButton}>Prev</button>
      <button onClick={handleNextButton}>Next</button>
      <h2>No. {recipe.id}</h2>
      <h3>{recipe.name}</h3>
      <div>
        {recipe.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
