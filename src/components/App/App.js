import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Search from '../Search/Search.jsx';
import Favorites from '../Favorites/Favorites.jsx'



function App(props) {
  return (
    <Router>

      <div>
        <h1>Giphy Search!</h1>
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
