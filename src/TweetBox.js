import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://vishnues.web.app/static/avatar.c24fbfe5.png" />
          <input
            className="tinput"
            type="text"
            placeholder="What’s happening?"
          />
        </div>
        <input
          type="text"
          className="tweetBox__imageInput"
          placeholder="Enter Image Url"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
