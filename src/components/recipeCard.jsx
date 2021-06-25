import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import "../css/RecipeCard.css";
import { useState } from "react";
const RecipeCard = (props) => {
  const [open, setOpen] = useState(0);
  let { healthLabels } = props;
  healthLabels = healthLabels.slice(0, 8);
  console.log(props);
  return (
    <div class="card-container">
      <div class="card u-clearfix">
        <div class="card-body">
          <div class="card-content">
            <span class="card-number card-circle subtle">
              {props.index + 1}
            </span>
            <h2 class="card-title">{props.title}</h2>
            <div class="card-description subtle">
              {healthLabels.map((label) => (
                <p key={props.index}>{label}</p>
              ))}
            </div>
            <a
              href={props.link}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div class="card-read">RECIPE</div>{" "}
            </a>

            {/* <div className="ingredients">// ingredients here</div> */}
          </div>

          <div class="card-media">
            <img src={props.imageUrl} alt="" class="card-media" />
          </div>
        </div>
      </div>
      <div class="card-shadow"></div>
    </div>
  );
};

export default RecipeCard;
