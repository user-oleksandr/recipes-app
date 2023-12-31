import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeList = ({onRecipeSelect, searchQuery}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const recipeList = [];

            try {
                const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(
                    searchQuery
                )}&app_id=fff322ba&app_key=45c6da3652040430d56d743ed52c2b4b`;

                const response = await fetch(url);
                const data = await response.json();

                const retrievedRecipes = data.hits
                    .slice(0, 20)
                    .map((hit) => {
                        const recipe = hit.recipe;
                        return {
                            id: recipe.uri,
                            title: recipe.label,
                            description: recipe.source,
                            ingredients: recipe.ingredientLines,
                            instructions: recipe.url,
                            image: recipe.image,
                            calories: recipe.calories,
                            totalTime: recipe.totalTime,
                            dietLabels: recipe.dietLabels,
                            healthLabels: recipe.healthLabels,
                            yield: recipe.yield,
                            cuisineType: recipe.cuisineType,
                            mealType: recipe.mealType,
                            dishType: recipe.dishType,
                            cautions: recipe.cautions,
                            totalWeight: recipe.totalWeight,
                            totalDaily: recipe.totalDaily,
                        };
                    });

                recipeList.push(...retrievedRecipes);

                setRecipes(recipeList);
            } catch (error) {
                console.log('Error retrieving recipes:', error);
            }
        };

        fetchRecipes();
    }, [searchQuery]);

    return (
        <div className="container mt-5">
            <div className="row pt-5">
                {recipes.map((recipe) => (
                    <div
                        className="col-md-3 card-pointer"
                        key={recipe.id}
                        onClick={() => onRecipeSelect(recipe)}
                    >
                        <div className="card mb-4">
                            {recipe.image && (
                                <img src={recipe.image} className="card-img-top" alt={recipe.title}/>
                            )}
                            <div className="card-body">
                                <h5 className="card-title">
                                    {recipe.title}
                                </h5>
                                <p className="card-text">{recipe.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeList;
