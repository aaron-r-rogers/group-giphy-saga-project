import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Search from '../Search/Search.jsx';
import Favorites from '../Favorites/Favorites.jsx';
import './App.css';




function App(props) {
  const dispatch = useDispatch();
  const getElements = () => {
    dispatch({
      type: 'FETCH_CATEGORIES'
    });

    dispatch({
      type: 'FETCH_FAVORITES'
    });
  }


  useEffect(getElements, [])
  return (
    <Router>

      <div id="right-header">
        <div id="title">
          <h1>Giphy Search!</h1>
        </div>
        <div id="links"><Link to="/">
          Search Page
        </Link>
          <br />
          <Link to="/favorites">
            Favorites Page
          </Link>
        </div>
      </div>
      {/* have to create header component  */}
      {/* <Header /> */}
      <Route path="/" exact>
        <Search />
      </Route>
      <Route path="/favorites" exact>
        <Favorites />
      </Route>


    </Router>
  );
}

export default App;
