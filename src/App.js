import React, { useState } from 'react';
import Authentication from './components/authentication/Authentication';
import RecipeList from './components/RecipeList';
import SavedRecipes from './components/SavedRecipes';
import RecipeDetails from './components/RecipeDetails';
import CookingMode from './components/CookingMode';
import SearchRecipes from './components/SearchRecipes';
import './App.css';

function App() {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [cookingMode, setCookingMode] = useState(false);
    const [savedRecipes, setSavedRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleRecipeSelect = (recipe) => {
        setSelectedRecipe(recipe);
    };

    const handleCookingModeToggle = () => {
        setCookingMode(!cookingMode);
    };

    const handleAddToSavedRecipes = (recipe) => {
        const isRecipeSaved = savedRecipes.some((savedRecipe) => savedRecipe.id === recipe.id);
        if (isRecipeSaved) {
            console.log('The recipe is already saved:', recipe);
        } else {
            setSavedRecipes([...savedRecipes, recipe]);
            console.log('Added to saved recipes:', recipe);
        }
    };

    const handleDeleteRecipe = (recipeId) => {
        const updatedRecipes = savedRecipes.filter((recipe) => recipe.id !== recipeId);
        setSavedRecipes(updatedRecipes);
        console.log('Removed recipe from ID:', recipeId);
    };

    const handleSearchRecipes = (query) => {
        console.log('Search recipes on demand:', query);
        setSearchQuery(query);
    };

    const closeRecipeDetails = () => {
        setSelectedRecipe(null);
    };

    return (
        <div className="App">
            <Authentication>
                {cookingMode ? (
                    <CookingMode recipe={selectedRecipe} onToggleMode={handleCookingModeToggle} />
                ) : (
                    <SearchRecipes onSearch={handleSearchRecipes} />
                )}
                <RecipeList onRecipeSelect={handleRecipeSelect} />
                {selectedRecipe && (
                    <RecipeDetails
                        recipe={selectedRecipe}
                        onAddToSavedRecipes={handleAddToSavedRecipes}
                        onClose={closeRecipeDetails}
                    />
                )}

                <SavedRecipes savedRecipes={savedRecipes} onDeleteRecipe={handleDeleteRecipe} />
            </Authentication>
        </div>
    );
}

export default App;
