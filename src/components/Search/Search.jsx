import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';



function Search () {
    const dispatch = useDispatch();
    // const searchResults = useSelector((store) store.searchResults)
    let [searchInput, setSearchInput] = useState('');


    // search bar that have local state
    // submit button
    // gif display with favorite button


    const searchGiphy = () => {
        console.log('search', searchGiphy);

        // sending this to rootSaga
        dispatch({
            type: 'GET_SEARCH',
            payload: searchInput
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
                <button onClick={searchGiphy}>Search</button>
            </form>

            {/* <div>
                {searchResults.map((gif) => (
                    <img  key={gif.id}   />
                ))}
            </div> */}

        </div>
        </>
    )
}

export default Search;