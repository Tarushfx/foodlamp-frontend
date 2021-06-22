import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/feed.css';

const FeedCard = (props) => {
  const postLink = 'https://www.reddit.com' + props.link;
  let title = props.title;
  title = title.substring(10);
  // console.log(props.theme);
  return (
    <div className="main-card-outer">
      <div className="left-img">
        <img src={props.imageUrl} label={props.title}></img>
      </div>
      <div className="right-content">
        <h6 className="feed-post-title">{title}</h6>
        <h6 className="post-author">
          Posted by <span>u/{props.author}</span> on {props.time.toString().slice(0, -34)}
        </h6>
        <div>
          <div>
            <div className="btn-1">
              <span className="upvotes">{props.upvotes} upvotes</span>
              <a href={postLink} target="_blank" style={{ textDecoration: 'none' }}>
                <button>Go to reddit post</button>
              </a>
            </div>
            <div className="col p-0"></div>
            <div>
              <span id="like" onClick={props.handleLike}>
                {props.data &&
                props.data.likes &&
                props.data.likes.includes(JSON.stringify({ name: props.title, link: postLink })) ==
                  true ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
