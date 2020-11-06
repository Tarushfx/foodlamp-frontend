import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../css/feedCard.css";

const FeedCard = (props) => {
  const postLink = "https://www.reddit.com" + props.link;

  return (
    <div className="card mt-1 bg-dark text-light">
      <h6 className="card-title p-1 mb-0">{props.title}</h6>
      <img
        className="card-image mw-100 m-1"
        src={props.imageUrl}
        label={props.title}
      ></img>

      <h6 className="card-text p-1 m-0">
        Posted by <span>u/{props.author}</span> on{" "}
        {props.createTime.toString().slice(0, -34)}
      </h6>
      <div className="card-footer p-2">
        <div className="row w-100 m-0 pr-3">
          <div className="col-6 p-0">
            <a class="badge badge-secondary" href={postLink} target="_blank">
              Go to reddit post
            </a>
            <span class="badge upvote">{props.upvotes} upvotes</span>
          </div>
          <div className="col p-0"></div>
          <div>
            <span id="like" onClick={props.liked}>
              <FavoriteBorderIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
