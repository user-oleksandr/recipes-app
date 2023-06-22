import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="container">
            <div className='row justify-content-center'>
                <div className='col-8 d-flex'>
                    <input className='form-control form-control-sm'
                           type="form"
                           value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}
                           onKeyPress={handleKeyPress}
                           placeholder="Search by name or ingredients"
                    />
                    <button className='btn btn-primary btn-sm ms-2' onClick={handleSearch}>Search</button>
                </div>

            </div>
        </div>
    );
};

export default SearchRecipes;
