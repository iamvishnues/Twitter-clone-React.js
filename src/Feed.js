import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <TweetBox />
      </div>
      <Post src="https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Introducing-a-Super-Fast-DataGrid-Widget-for-Flutter.jpg" />
    </div>
  );
}

export default Feed;
