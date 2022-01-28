import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Heart from '../Heart/Heart';

function Search () {
    const dispatch = useDispatch();
    const searchResults = useSelector((store) => store.searchResults)
    let [searchInput, setSearchInput] = useState('');
    

    const searchGiphy = () => {
        console.log('search', searchGiphy);
        // sending this to rootSaga
        dispatch({
            type: 'GET_SEARCH',
            payload: searchInput
        })
    }; // end of searchGiphy

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
                <Button onClick={searchGiphy}>
                    <SearchIcon fontSize='x-small'/>
                </Button>
            </form>
            <div>
                {searchResults.map((gif) => (
                    <div key={gif.id}>
                    <img  
                        src={gif.images.fixed_height.url}
                    />
                    <Heart url={gif.images.fixed_height.url}/>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Search;