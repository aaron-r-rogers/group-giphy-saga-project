import { useSelector } from 'react-redux';
import Category from '../Category/Category';

function CategoriesList({ favorite }) {

  const categoryList = useSelector(store => store.categoriesReducer);

  // 
  // 
  // list of categories w conditional rendering with selected! or not...
  return (
    <div className="categories-container">
      {categoryList.map(category =>
        <Category
          key={category.id}
          category={category}
          favorite={favorite}
        />
      )}
    </div>
  )
} // end CategoriesList

export default CategoriesList;