import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h3>What's happening</h3>
        <TwitterTweetEmbed
          tweetId={"1354915823501025280"}
          sourceType="profile"
          screenName="SignalApp"
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="telegram"
          options={{ height: 350 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
