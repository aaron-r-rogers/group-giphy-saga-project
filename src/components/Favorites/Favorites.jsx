import './Favorites.css';
import { useDispatch, useSelector } from 'react-redux';
import GifCard from '../GifCard/GifCard';


function Favorites() {
  // need to grab favorite gifs .state
  // need to grab all categories .state
  const categoryList = useSelector(store => store.categoriesReducer);
  const faveList = useSelector(store => store.favoritesReducer);
  // console.log('faveList', faveList);

  return (
    <div id="container">
      {faveList.map((favorite) =>
        <GifCard
          key={favorite.id}
          favorite={favorite}
        />
      )}
    </div>
  )
}

export default Favorites;