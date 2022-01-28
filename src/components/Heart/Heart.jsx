import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@material-ui/core/IconButton'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from 'react';
import { useDispatch } from 'react-redux';



function Heart ({url}) {
    const [clicked, setClicked] = useState(false)
    const dispatch = useDispatch();


    const clickHandler = (url) => {
        console.log('click', url)
        setClicked(true);
        dispatch({
            type: 'MAKE_FAVORITE',
            payload: url
        })
        
    }

    return (
        <div>
        <IconButton onClick={() => clickHandler(url)}>
            {clicked ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderOutlinedIcon /> }
        </IconButton>
        </div>
    )
};

export default Heart;