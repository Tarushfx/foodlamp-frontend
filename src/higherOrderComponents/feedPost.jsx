import React from "react";
import FeedCard from "./../components/feedCard";

const FeedPost = (props) => {
  return (
    <div>
      <div className="row w-100 m-0">
        <div className="col col-sm-0 col-md-3 p-0"></div>
        <div className="col col-sm-12 col-md-5 p-0 col-xs-6">
          <FeedCard
            imageUrl={props.imageUrl}
            title={props.title}
            upvotes={props.upvotes}
            link={props.link}
            createTime={props.createTime}
            author={props.author}
            handleLike={props.handleLike}
            data={props.data}
          />
        </div>
        <div className="col col-sm-0 col-md-4 p-0"></div>
      </div>
    </div>
  );
};

export default FeedPost;
