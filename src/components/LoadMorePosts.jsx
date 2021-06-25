import React from "react";

const LoadMorePosts = (props) => {
  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      <button class="draw meet" onClick={props.handleClick}>
        Load More Posts
      </button>
    </div>
  );
};

export default LoadMorePosts;
