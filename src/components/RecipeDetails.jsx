import 'bootstrap/dist/css/bootstrap.min.css';


const RecipeDetails = ({recipe, onAddToSavedRecipes, onClose}) => {
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
        <div className="container box-content-modal">
            <div className='row text-end'>
                <div className='col'>
                    <button className="btn btn-primary btn-sm" onClick={onClose}>
                        Х
                    </button>
                </div>
            </div>
            <div className='row text-center'>
                <h5 className='value'>{title}</h5>
                <p>{description}</p>
            </div>
            <div className='row d-flex mt-5'>
                <div className='col'>
                    {image && <img className='img rounded' src={image} alt={title}/>}
                </div>
                <div className='col'>
                    <h5 className='value'>Ingredients:</h5>
                    <ul style={{listStyle: 'none', padding: 0}}>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr/>
            <div className='row d-flex mt-5'>
                <div className='col'>
                    <h5 className='value'>Health:</h5>
                    <ul style={{listStyle: 'none', padding: 0}}>
                        {healthLabels.map((label, index) => (
                            <li key={index}>{label}</li>
                        ))}
                    </ul>
                </div>
                <div className='col'>
                    <h5 className='value'>Total Daily:</h5>
                    <ul style={{listStyle: 'none', padding: 0}}>
                        {Object.entries(totalDaily).map(([key, value]) => (
                            <li key={key} style={{fontSize: '12px'}}>
                                {key}: {value.label} - {Math.round(value.quantity)}
                                {value.unit}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr/>
            <div className='row mt-5'>
                <div>
                    <div>Total Weight: <span className='value'>{Math.round(totalWeight)}</span>
                    </div>
                </div>
                <div>
                    <div>Calories: <span className='value'>{Math.round(calories)}</span></div>
                </div>
                <div>
                    <div>Total Time: <span className='value'>{totalTime}</span></div>
                </div>
                <div>
                    <div>Yield: <span className='value'>{recipeYield}</span></div>
                </div>
                <div>
                    <div>Cuisine Type: <span className='value'>{cuisineType}</span></div>
                </div>
                <div>
                    <div>Meal Type: <span className='value'>{mealType}</span></div>
                </div>
                <div>
                    <div>Dish Type: <span className='value'>{dishType}</span></div>
                </div>
                <div>
                    <div>Cautions: <span className='value'>
                         <span>
                        {cautions.map((caution, index) => (
                            <span key={index}>{caution}</span>
                        ))}
                    </span>
                    </span>
                    </div>
                </div>
                <div>
                    <div>Diet Labels: <span className='value'>
                        {dietLabels.length > 0 ? (
                            <div>{dietLabels.map((label, index) => (<span key={index}>{label}</span>))}</div>
                        ) : (
                            <span>No diet labels available.</span>
                        )}
                    </span>
                    </div>
                </div>
            </div>

            <div className="row  mt-5 mb-5">
                <div className='col-12 text-center'>
                    <button className='btn btn-primary btn-sm' onClick={() => onAddToSavedRecipes(recipe)}>Add to
                        saved
                        recipes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
