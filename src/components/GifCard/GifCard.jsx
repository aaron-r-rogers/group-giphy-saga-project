import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CategoriesList from '../CategoriesList/CategoriesList'
import Heart from '../Heart/Heart.jsx';


function GifCard({favorite, type, gif}) {
  // console.log('image', image);
  return (
    <Card sx={{ width: 440 }}>
      <CardMedia
        component="img"
        height="400"
        image={favorite.url}
        // gif.url here 👆 after i get redux store obj imported
      />
      {type === "search" ? 
      <Heart 
      url={gif.images.fixed_height.url} 
      /> 
      :
      <CategoriesList 
        favorite={favorite}
      />
      }
    </Card>
  )
} // end GifCard

export default GifCard
