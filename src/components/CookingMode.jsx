import React, { useState } from 'react';

const CookingMode = ({ recipe, onToggleMode }) => {
    const [completedIngredients, setCompletedIngredients] = useState([]);

    if (!recipe) {
        return null;
    }

    const { title, ingredients, instructions } = recipe;

    const handleIngredientToggle = (ingredient) => {
        if (completedIngredients.includes(ingredient)) {
            setCompletedIngredients(completedIngredients.filter((item) => item !== ingredient));
        } else {
            setCompletedIngredients([...completedIngredients, ingredient]);
        }
    };

    const handleResetCookingMode = () => {
        setCompletedIngredients([]);
    };

    return (
        <div className="cooking-mode">
            <div>
                <h2>{title}</h2>
                <h3>List of ingredients:</h3>
            </div>

            <ul>
                {ingredients.map((ingredient, index) => (
                    <li
                        key={index}
                        className={completedIngredients.includes(ingredient) ? 'completed' : ''}
                        onClick={() => handleIngredientToggle(ingredient)}
                    >
                        {ingredient}
                    </li>
                ))}
            </ul>

            <div>
                <h3>Instructions:</h3>
                <p>{instructions}</p>

            </div>

            <button onClick={handleResetCookingMode}>Reset cooking mode</button>
            <button onClick={onToggleMode}>Return to recipe details</button>
        </div>
    );
};

export default CookingMode;
