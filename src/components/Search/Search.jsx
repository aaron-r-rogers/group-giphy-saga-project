import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';



function Search () {
    const dispatch = useDispatch();
    // const searchResult = useSelector((store) store.searchResult)
    let [newGif, setNewGif] = useState('');


    // search bar that have local state
    // submit button
    // gif display with favorite button


    const searchGiphy = () => {
        console.log('search', searchGiphy);


        dispatch({
            type: 'SEARCH_GIF'
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
                    value={newGif}
                    onChange={(event) => setNewGif(event.target.value)}
                />
                <button onClick={searchGiphy}>Search</button>
            </form>

            {/* <div>
                {searchResult.map((gif) => (
                    <img  key={searchResult.id}  />
                ))}
            </div> */}

        </div>
        </>
    )
}

export default Search;