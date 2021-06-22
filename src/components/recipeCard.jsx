import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useState } from "react";
const RecipeCard = (props) => {
  const [open, setOpen] = useState(0);
  return (
    <div
      className="recipe-card card mt-1"
      style={{
        backgroundColor: props.theme.secondary,
        color: props.theme.text,
      }}
    >
      <h6 className="card-title p-1 mb-0">{props.title}</h6>
      <h6 className="card-title p-1 mb-0 ml-auto">{props.cookTime}</h6>
      <img
        className="card-image mw-100 m-1"
        src={props.imageUrl}
        label={props.title}
      ></img>
      <div className="card-footer p-2">
        <div className="row w-100 m-0 pr-3">
          <h6 className="card-text  m-0">Serving:{props.serving}</h6>
          <div className="ml-auto">
            <span id="like" onClick={props.handleLike}>
              {props.data &&
              props.data.likes &&
              props.data.likes.includes(
                JSON.stringify({ name: props.title, link: props.link })
              ) === true ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderIcon />
              )}
            </span>
          </div>
          <div>
            <span
              data-toggle="collapse"
              data-target={`#ingredients-${props.index}`}
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={(e) => {
                setOpen(!open);
                console.log("h1llo");
              }}
            >
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </span>
          </div>
        </div>
        <div className="row w-100 m-0 pr-3">
          Labels: <br />
          <ul>
            {props.healthLabels.map((label, index) => (
              <span key={index}>
                {label}
                <br />
              </span>
            ))}
            {props.dietLabels.map((label, index) => (
              <span key={index}>
                {label}
                <br />
              </span>
            ))}
          </ul>
        </div>
        <div className="row w-100 m-0 pr-3">
          <div class="collapse" id={`ingredients-${props.index}`}>
            Ingredients:
            <ul>
              {props.ingredients.map((item, index) => (
                <li key={index}>
                  <span>
                    {item.text}
                    <br />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row w-100 m-0 pr-3">
          <div className="ml-auto p-0">
            <a
              className="badge badge-secondary"
              href={props.link}
              target="_blank"
            >
              Recipe!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
