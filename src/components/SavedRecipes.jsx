import React, { useState } from 'react';
import Modal from './Modal';
import RecipeDetails from './RecipeDetails';
import CookingMode from './CookingMode';

const SavedRecipes = ({ savedRecipes, onDeleteRecipe }) => {
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
        <div className="saved-recipes">
            <h2>List of saved recipes</h2>
            {savedRecipes.length > 0 ? (
                savedRecipes.map((recipe) => (
                    <div key={recipe.id} className="saved-recipe-card">
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                        {recipe.image && (
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                onClick={() => openRecipeDetails(recipe)}
                                className="recipe-image"
                            />
                        )}
                        <button onClick={() => openCookingMode(recipe)}>Почати приготування</button>
                        <button onClick={() => onDeleteRecipe(recipe.id)}>Видалити</button>
                    </div>
                ))
            ) : (
                <p>You don't have any recipes saved yet.</p>
            )}

            {cookingModeRecipe && (
                <Modal onClose={closeCookingMode}>
                    <CookingMode recipe={cookingModeRecipe} onToggleMode={closeCookingMode} />
                </Modal>
            )}

            {recipeDetails && (
                <Modal onClose={closeRecipeDetails}>
                    <RecipeDetails recipe={recipeDetails} onAddToSavedRecipes={() => {}} onClose={closeRecipeDetails} />
                </Modal>
            )}
        </div>
    );
};

export default SavedRecipes;
