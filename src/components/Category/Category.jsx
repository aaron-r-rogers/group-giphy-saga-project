function Category({ category, favorite }) {
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

  return(
    <>
      {category.name} <br />
    </>
  )



}

export default Category;