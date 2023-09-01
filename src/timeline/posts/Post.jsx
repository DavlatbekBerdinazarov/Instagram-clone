import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import LikeButton from "./LikeButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookMarkButton from "./BookMarkButton";



function Post({ user, postImage, likes, timestamp }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon style={{cursor:"pointer"}}/>
      </div>
      <div className="post__image">
        <img src={postImage} alt="Post Image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <LikeButton className="postIcon"/>
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookMarkButton className="postIcon" />
          </div>
        </div>
        {likes} likes
      </div>
      <p className="suggestions__parag">About • Help • Press • API • Jobs • Privacy • Terms • Jobs • Privacy • Terms</p>
    </div>
  );
}

export default Post;