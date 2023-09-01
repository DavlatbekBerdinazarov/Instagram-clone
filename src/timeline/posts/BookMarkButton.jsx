import "./BookMarkButton.css"
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";



function BookMarkButton() {
    
    const [saved, setSaved] = useState(false);
  
    const handleClick = () => {
      setSaved(!saved);
    };
  
  return (
    <IconButton onClick={handleClick}>
        {saved ? <BookmarkOutlinedIcon className='boi'/> : <BookmarkBorderIcon className='bbi'/>}
    </IconButton>
  )
}

export default BookMarkButton