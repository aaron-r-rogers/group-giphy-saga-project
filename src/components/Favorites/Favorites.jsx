import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './Favorites.css';


function Favorites() {
  // need to grab favorite gifs .state
  // need to grab all categories .state

  const GifCard = () => {
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
        <Categories />
      </Card>
    )
  }

  const Categories = () => {
    // 
    // 
    // list of categories w conditional rendering with selected! or not...
    return (
      <div className="categories-container">

      </div>
    )
  }

  return (
    <Container maxWidth="lg">
      Favorites
      <GifCard />
    </Container>
  )
}

export default Favorites;