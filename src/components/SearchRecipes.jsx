import React, {useState} from 'react';

const SearchRecipes = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-recipes">
            <div className='box-search'>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Search by name or ingredients"
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};

export default SearchRecipes;
