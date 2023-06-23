import React, {useState} from 'react';

import RecipeDetails from './RecipeDetails';
import CookingMode from './CookingMode';

const SavedRecipes = ({savedRecipes, onDeleteRecipe, onClose}) => {
    const [cookingModeRecipe, setCookingModeRecipe] = useState(null);
    const [recipeDetails, setRecipeDetails] = useState(null);

    const openCookingMode = (recipe) => {
        setCookingModeRecipe(recipe);
    };

    const closeCookingMode = () => {
        setCookingModeRecipe(null);
    };

    const openRecipeDetails = (recipe) => {
        setRecipeDetails(recipe);
    };

    const closeRecipeDetails = () => {
        setRecipeDetails(null);
    };

    return (
        <div className="container-fluid box-saved mt-5 rounded mb-5">
            <div className="row text-center text-primary">
                <h5>List of saved recipes:</h5>
            </div>
            {savedRecipes.length > 0 ? (
                <div className="row mt-5">
                    {savedRecipes.map((recipe) => (
                        <div className="col col-lg-3" key={recipe.id}>
                            <div className="card mb-4">
                                {recipe.image && (
                                    <img
                                        className="card-img-top"
                                        src={recipe.image}
                                        alt={recipe.title}
                                    />
                                )}
                                <div className="card-body">
                                    <h5 className="card-title-saved">{recipe.title}</h5>
                                    <p className="card-text">{recipe.description}</p>
                                    <div className='col'>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => openCookingMode(recipe)}
                                        >
                                            Почати приготування
                                        </button>
                                    </div>
                                    <div className='col mt-1'>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => onDeleteRecipe(recipe.id)}
                                        >
                                            Видалити
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>You don't have any recipes saved yet.</p>
            )}

            {cookingModeRecipe && (
                <CookingMode recipe={cookingModeRecipe} onToggleMode={closeCookingMode}/>
            )}

            {recipeDetails && (
                <RecipeDetails
                    recipe={recipeDetails}
                    onAddToSavedRecipes={() => {
                    }}
                    onClose={closeRecipeDetails}
                />
            )}
        </div>
    );
};

export default SavedRecipes;
