import React from 'react';

const RecipeDetails = ({recipe, onAddToSavedRecipes, onClose}) => {
    const {title, description, ingredients, image} = recipe;

    return (
        <div className="recipe-details">
            <button className="close-button" onClick={onClose}>Х</button>
            <h2>{title}</h2>
            <p>{description}</p>
            {image && <img src={image} alt={title}/>}
            <h3>Інгредієнти:</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <div className='box-button'>
                <button onClick={() => onAddToSavedRecipes(recipe)}>Add to saved recipes</button>
            </div>
        </div>
    );
};

export default RecipeDetails;
