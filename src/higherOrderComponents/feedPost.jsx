import React from "react";

const FeedPost = (props) => {
  return (
    <div>
      <div className="row w-100 m-0">
        <div className="col col-sm-0 col-md-3 p-0"></div>
        <div className="col col-sm-12 col-md-5 p-0 col-xs-6">
          <props.post
            key={props.index}
            data={props.data}
            imageUrl={props.imageUrl}
            link={props.link}
            handleLike={props.handleLike}
            time={props.createTime}
            title={props.title}
            theme={props.theme}
            index={props.index}
            // feed
            author={props.author || ""}
            upvotes={props.upvotes || ""}
            // recipe
            ingredients={props.ingredients || ""}
            healthLabels={props.healthLabels || ""}
            dietLabels={props.dietLabels || ""}
            recipeID={props.recipeID || ""}
            serving={props.serving || ""}
          />
        </div>
        <div className="col col-sm-0 col-md-4 p-0"></div>
      </div>
    </div>
  );
};

export default FeedPost;
