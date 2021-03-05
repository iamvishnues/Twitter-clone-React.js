import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Anonymous",
      userName: "anonymous",
      verified: true,
      avatar: "https://avatarfiles.alphacoders.com/102/thumb-102173.jpg",
      text: tweetMessage,
      image: tweetImage,
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://vishnues.web.app/static/avatar.c24fbfe5.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            className="tinput"
            type="text"
            placeholder="What’s happening?"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Enter Image Url"
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
