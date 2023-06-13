import React, { useState } from 'react';

const SearchRecipes = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div className="search-recipes">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or ingredients"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchRecipes;
