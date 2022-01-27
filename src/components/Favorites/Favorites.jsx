import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import './Favorites.css';
import { useDispatch, useSelector } from 'react-redux';


function Favorites() {
  // need to grab favorite gifs .state
  // need to grab all categories .state
  const categoryList = useSelector(store => store.categoriesReducer);
  const faveList = useSelector(store => store.favoritesReducer);


  const GifCard = ({ category, favorite }) => {
    // 
    // 
    // 
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={''}
          // gif.url here 👆 after i get redux store obj imported
          alt={''}
        // gif.title here 👆 after i get redux store obj imported
        />
        <CategoriesList />
      </Card>
    )
  } // end GifCard

  const CategoriesList = ({ favorite }) => {
    // 
    // 
    // list of categories w conditional rendering with selected! or not...
    return (
      <div className="categories-container">
        {categoryList.map(category =>
          <Category
            category={category}
            favorite={favorite}
          />
        )}
      </div>
    )
  } // end CategoriesList

  //single category
  const Category = ({ category, favorite }) => {
    // {if (favorite.)} // ???
    // const categoryJunction = useSelector(store => store.junctionReducer);

    // need to see if category.id === junction.category_id (basically if the category is included in this one)
    // if yes: 
    // render this:
    // <Button variant="contained" onClick={(evt) => removeCategory(favorite.id, category.id)}>{category.name}</Button>
    //if no:
    // render this:
    // <Button variant="outlined" onClick={(evt) => addCategory(favorite.id, category.id)>{category.name}</Button>
    // the code for this 👆 
    // is found below: 👇 
    // un comment when we get the router done
    /*
    for (let junction of categoryJunction.data) {
      if (favorite.id === junction.favorite_id && category.id === junction.category_id) {
        return (
          <Button variant="contained" onClick={(evt) => removeCategory(favorite.id, category.id)}>{category.name}</Button>
        )
      } else {
        return (
          <Button variant="outlined" onClick={(evt) => addCategory(favorite.id, category.id)}>{category.name}</Button>
        )
      }
    }
    */


  }

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
      Favorites
      {faveList.map(favorite =>
        <GifCard
          favorite={favorite}
        />

      )}
    </Container>
  )
}

export default Favorites;