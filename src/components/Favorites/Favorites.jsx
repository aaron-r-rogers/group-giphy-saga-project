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
  console.log('faveList',faveList);

  faveList.map((fav) => (
    console.log('fav',fav)
  // fav.map(favorite => console.log(favorite)
  // )
  )
  )
  // each gif has a card element that displays the gif and its assigned categories

  //each gifCard has these categories underneath it, and they are toggle-able

  //single category


  // const removeCategory = (favId, catId) => {
  //   dispatch({
  //     type: 'REMOVE_CATEGORY',
  //     payload: {
  //       category_id: catId,
  //       favorite_id: favId
  //     }
  //   })
  // }

  // const addCategory = (favId, catId) => {
  //   dispatch({
  //     type: 'ADD_CATEGORY',
  //     payload: {
  //       category_id: catId,
  //       favorite_id: favId
  //     }
  //   })
  // }

  return (
    <>
      favorite page
    </>
    // <Container maxWidth="lg">
    //   {faveList.map((fav) => 
    //     <GifCard
    //       key={fav.id}
    //       favorite={fav}
    //     />
    //   )}
    // </Container>
  )
}

export default Favorites;