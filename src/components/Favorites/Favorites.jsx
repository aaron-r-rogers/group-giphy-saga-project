import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './Favorites.css';
import { useDispatch, useSelector } from 'react-redux';
import GifCard from '../GifCard/GifCard';


function Favorites() {
  // need to grab favorite gifs .state
  // need to grab all categories .state
  const categoryList = useSelector(store => store.categoriesReducer);
  const faveList = useSelector(store => store.favoritesReducer);
  console.log('faveList', faveList);

  const removeCategory = (favId, catId) => {
    dispatch({
      type: 'REMOVE_CATEGORY',
      payload: {
        category_id: catId,
        favorite_id: favId
      }
    })
  }

  const addCategory = (favId, catId) => {
    dispatch({
      type: 'ADD_CATEGORY',
      payload: {
        category_id: catId,
        favorite_id: favId
      }
    })
  }

  return (
    <Container maxWidth="lg">
      {faveList.map((favorite) =>
        <GifCard
          key={favorite.id}
          favorite={favorite}
        />
      )}
    </Container>
  )
}

export default Favorites;