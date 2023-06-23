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
        <div className="container-fluid">
            <hr/>
            <div className='row pt-5 text-center'>
                <h5 className='value'>{title}</h5>
            </div>

            <div className='row'>
                <div className='col mt-5 list-ingridients'>
                    <h5 className='title'>List of ingredients:</h5>
                    <ul style={{listStyle: 'none', padding: 0}}>
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
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col'>
                    <h5>Instructions:</h5>
                    <a href={instructions} className='link'>{instructions}</a>
                </div>
            </div>
            <div className='row text-center pt-5'>
                <div className='col text-end'>
                    <button className='btn btn-primary btn-sm' onClick={handleResetCookingMode}>Reset cooking mode</button>
                </div>
                <div className='col text-start'>
                    <button className='btn btn-primary btn-sm' onClick={onToggleMode}>Return to recipe details</button>
                </div>
            </div>
        </div>
    );
};

export default CookingMode;
