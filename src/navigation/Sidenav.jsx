import React from "react";
import "./Sidenav.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";

import InstagramIcon from '@mui/icons-material/Instagram';

// without outlined
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


function Sidenav() {

  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
      <InstagramIcon style={{display:"none"}}/>
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon style={{fontSize:"27px"}}/>
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <SearchOutlinedIcon style={{fontSize:"27px"}} />
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <ExploreOutlinedIcon style={{fontSize:"27px"}} />
          <span>Explore</span>
        </button>
        <button className="sidenav__button">
          <SlideshowOutlinedIcon style={{fontSize:"27px"}} />
          <span>Reels</span>
        </button>
        <button className="sidenav__button">
          <ChatOutlinedIcon style={{fontSize:"27px"}}/>
          <span>Messages</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderOutlinedIcon style={{fontSize:"27px"}} />
          <span>Notifications</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon style={{fontSize:"27px"}} />
          <span>Create</span>
        </button>
        <button className="sidenav__button">
          <img className="profil" src="https://images.unsplash.com/photo-1544890225-2f3faec4cd60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTM5OTR8MHwxfHNlYXJjaHw1fHxoYWNrZXJ8ZW58MHx8fHwxNjkzMzcxNjQ4fDA&ixlib=rb-4.0.3&q=80&w=400" alt="" />
          <span>Profil</span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon/>
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
