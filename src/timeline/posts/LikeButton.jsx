import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import "./LikeButton.css"

function LikeButton() {
    const [liked, setLiked] = useState(false);
  
    const handleClick = () => {
      setLiked(!liked);
    };
  
    return (
      <IconButton onClick={handleClick}>
        {liked ? <Favorite className='f' color="error" /> : <FavoriteBorder className='fb'/>}
      </IconButton>
    );
  }

  export default LikeButton