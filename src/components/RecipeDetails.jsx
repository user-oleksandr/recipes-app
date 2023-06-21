import React, {useState} from 'react';

const RecipeDetails = ({recipe, onAddToSavedRecipes, onClose, onToggleCookingMode}) => {
    const {
        title,
        description,
        ingredients,
        image,
        calories,
        totalTime,
        dietLabels,
        healthLabels,
        yield: recipeYield,
        cuisineType,
        mealType,
        dishType,
        cautions,
        totalWeight,
        totalDaily,
    } = recipe;

    return (
        <div className="recipe-details">
            <button className="close-button" onClick={onClose}>
                Х
            </button>
            <h2>{title}</h2>
            <p>{description}</p>
            {image && <img src={image} alt={title}/>}
            <h3>Ingredients:</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Calories:</h3>
            <p>{calories}</p>
            <h3>Total Time:</h3>
            <p>{totalTime}</p>
            <h3>Yield:</h3>
            <p>{recipeYield}</p>
            <h3>Cuisine Type:</h3>
            <p>{cuisineType}</p>
            <h3>Meal Type:</h3>
            <p>{mealType}</p>
            <h3>Dish Type:</h3>
            <p>{dishType}</p>
            <h3>Cautions:</h3>
            <ul>
                {cautions.map((caution, index) => (
                    <li key={index}>{caution}</li>
                ))}
            </ul>
            <div>
                <h3>Diet Labels:</h3>
                {dietLabels.length > 0 ? (
                    <ul>
                        {dietLabels.map((label, index) => (
                            <li key={index}>{label}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No diet labels available.</p>
                )}
            </div>
            <h3>Health:</h3>
            <ul>
                {healthLabels.map((label, index) => (
                    <li key={index}>{label}</li>
                ))}
            </ul>
            <h3>Total Weight:</h3>
            <p>{totalWeight}</p>
            <h3>Total Daily:</h3>
            <ul>
                {Object.entries(totalDaily).map(([key, value]) => (
                    <li key={key}>
                        {key}: {value.label} - {value.quantity}
                        {value.unit}
                    </li>
                ))}
            </ul>
            <div className="box-button">
                <button onClick={() => onAddToSavedRecipes(recipe)}>Add to saved recipes</button>
                <button onClick={onToggleCookingMode}>Start Cooking</button>
            </div>
        </div>
    );
};

export default RecipeDetails;
