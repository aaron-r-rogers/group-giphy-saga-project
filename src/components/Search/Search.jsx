import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';


function Search () {
    const dispatch = useDispatch();
    const searchResults = useSelector((store) => store.searchResults)
    let [searchInput, setSearchInput] = useState('');
    const [clicked, setClicked] = useState(false)

    const searchGiphy = () => {
        console.log('search', searchGiphy);
        // sending this to rootSaga
        dispatch({
            type: 'GET_SEARCH',
            payload: searchInput
        })
    }; // end of searchGiphy

    const clickHandler = (url) => {
        console.log('click', url)
        dispatch({
            type: 'MAKE_FAVORITE',
            payload: url
        })
    }

    return (
        <>
        <div>
            <h2>Search Form</h2>
            <form>
                <input 
                    type='text'
                    placeholder='Search'
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                />
                <button onClick={searchGiphy}>
                    <SearchIcon fontSize='x-small'/>
                </button>
            </form>
            <div>
                {searchResults.map((gif) => (
                    <div key={gif.id}>
                    <img  
                        src={gif.images.fixed_height.url}
                    />
                    <FavoriteIcon style={{ color: 'red' }}  onClick={() => clickHandler(gif.images.fixed_height.url)} />
                    </div>
                ))}
            </div>

        </div>
        </>
    )
}

export default Search;