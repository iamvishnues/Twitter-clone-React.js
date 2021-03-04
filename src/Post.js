import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
// import { ChatBubbleOutline, FavoriteBorder, Publish } from "@material-ui/icons";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
function Post({
  displayName,
  username,
  verified,
  timestamp,
  password,
  text,
  avatar,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Introducing-a-Super-Fast-DataGrid-Widget-for-Flutter.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Vishnu ES
              <span>
                <VerifiedUserIcon className="post__badge" />
                @vishnues
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              Nasa's Perseverance rover landed on Mars at 20:55 GMT on 18
              February after almost seven months travelling from Earth.
            </p>
          </div>
        </div>
        <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/9353/production/_117351773_mars_perseverance_nrf_0009_0667756352_693ecm_n0030000ncam05000_01_295j.jpg" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
