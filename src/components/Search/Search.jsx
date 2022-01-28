import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import GifCard from '../GifCard/GifCard'

function Search() {
  const dispatch = useDispatch();
  const searchResults = useSelector((store) => store.searchResults)
  let [searchInput, setSearchInput] = useState('');


  const searchGiphy = (evt) => {
    evt.preventDefault();
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
        <form onSubmit={(evt) => searchGiphy(evt)}>
          <input
            type='text'
            placeholder='Search'
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button onClick={() => searchGiphy()}>
            <SearchIcon fontSize='x-small' />
          </Button>
        </form>
        <div id="container">
          {searchResults.map((gif) => (
            <GifCard
              key={gif.id}
              favorite={gif.images.fixed_height}
              type="search"
              gif={gif}
            /> 
          ))}
        </div>
      </div>
    </>
  )
}

export default Search;