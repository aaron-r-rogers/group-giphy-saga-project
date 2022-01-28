import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useSelector } from 'react-redux';
import CategoriesList from '../CategoriesList/CategoriesList'

function GifCard(favorite) {
  const image = favorite.url;
  console.log('image', image);
  return (
    <>
      gifcard
    </>
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     component="img"
    //     height="200"
    //     image={fav.url}
    //     // gif.url here 👆 after i get redux store obj imported
    //   />
    //   <CategoriesList 
    //     favorite={favorite}
    //   />
    // </Card>
  )
} // end GifCard

export default GifCard
