import React from 'react';

const SavedRecipes = ({savedRecipes, onDeleteRecipe}) => {
    return (
        <div className="saved-recipes">
            <h2>List of saved recipes</h2>
            {savedRecipes.length > 0 ? (
                savedRecipes.map((recipe) => (
                    <div key={recipe.id} className="saved-recipe-card">
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                        {recipe.image && <img src={recipe.image} alt={recipe.title}/>}
                        <button onClick={() => onDeleteRecipe(recipe.id)}>Видалити</button>
                    </div>
                ))
            ) : (
                <p>You don't have any recipes saved yet.</p>
            )}
        </div>
    );
};

export default SavedRecipes;
