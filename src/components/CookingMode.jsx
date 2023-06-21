import React, { useState } from 'react';

const CookingMode = ({ recipe, onToggleMode }) => {
    const [completedIngredients, setCompletedIngredients] = useState([]);

    if (!recipe) {
        return null;
    }

    const { title, ingredients } = recipe;

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
            <h2>{title}</h2>
            <h3>List of ingredients:</h3>
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
            <button onClick={handleResetCookingMode}>Reset cooking mode</button>
            <button onClick={onToggleMode}>Return to recipe details</button>
        </div>
    );
};

export default CookingMode;
