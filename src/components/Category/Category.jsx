import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';


function Category({ favorite, category }) {
  const categoryList = useSelector(store => store.categoriesReducer);
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

  categoryList.map(parameter => {
    parameter.image_id_arr.map(imageID => {
      if (parameter.id === category.id && imageID !== null) {
        console.log(`imageID`, imageID, 'has category', parameter.id)
        return (
          <Button
            variant="contained"
            onClick={() => removeCategory(favorite.id, category.id)}
          >
            {category.name}👍
          </Button>
        )
      }
    })
  })

  // for (const parameter of categoryList) {
  //   for (const categoryId of parameter.image_id_arr) {
  //     if (favorite.id === categoryId && parameter.id === categoryId) {
  //       console.log(parameter.name, `applies to image id#`, favorite.id);
  //       return (
  //         <Button
  //           variant="contained"
  //           onClick={(evt) => removeCategory(favorite.id, category.id)}
  //         >
  //           {category.name}
  //         </Button>
  //       )
  //     }
  //   }
  // }
  return (
    <Button
      variant="outlined"
      onClick={() => addCategory(favorite.id, category.id)}
    >
      {category.name}👎
    </Button>
  )


}

export default Category;