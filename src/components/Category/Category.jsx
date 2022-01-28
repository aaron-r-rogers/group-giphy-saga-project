import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';


function Category({ favorite, category }) {
  const categoryList = useSelector(store => store.categoriesReducer);
  
  let isAssigned = false;

  const removeCategory = (favId, catId) => {
    console.log('remove!', favId, catId)
    // dispatch({
    //   type: 'REMOVE_CATEGORY',
    //   payload: {
    //     category_id: catId,
    //     favorite_id: favId
    //   }
    // })
  }

  const addCategory = (favId, catId) => {
    console.log('add!', favId, catId)
    // dispatch({
    //   type: 'ADD_CATEGORY',
    //   payload: {
    //     category_id: catId,
    //     favorite_id: favId
    //   }
    // })
  }

  for (const parameter of categoryList) {
    for (const imageID of parameter.image_id_arr) {
      if (parameter.id === category.id && imageID === favorite.id) {
        console.log(`imageID`, imageID, 'has category', parameter.id);
        isAssigned = true;
      }
    }
  }
  return (
    <Button
      variant={isAssigned ? "contained" : "outlined"}
      onClick={() => isAssigned ? removeCategory(favorite.id, category.id) : addCategory(favorite.id, category.id)}
    >
      {category.name}
    </Button>
  )
}

export default Category;