import React, { Component } from "react";
import FeedPost from "../higherOrderComponents/feedPost";

import NavBar from "./../components/navbar";

class Feed extends Component {
  state = {};
  arr= [1,0,3,4,7];
  render() {
    return (
      <React.Fragment>
        <NavBar />
        {this.arr.map(item => <FeedPost proptext={item} id={item}/>)}
        
      </React.Fragment>
    );
  }
}

export default Feed;
