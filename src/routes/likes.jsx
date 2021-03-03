import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NavBar from "../components/navbar";
import _ from "lodash";
import RecipeCard from "../components/recipeCard";
import FeedPost from "../higherOrderComponents/feedPost";
import { getRecipes, likeRecipe } from "../services/recipeService";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
const Likes = (props) => {
  console.log(props);
  const [likesArray, setLikesArray] = useState([]);
  useEffect(() => {
    setLikesArray((props.data && props.data.likes) || []);
  }, [props]);
  const handleLike = async (e, name, link) => {
    try {
      console.log(e, link);
      await likeRecipe(name, link);
      props.loadData();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <NavBar
        onChange={props.changeTheme}
        theme={props.theme}
        data={props.data}
      />
      {likesArray &&
        likesArray.map(
          (item) =>
            Object.keys(item).length !== 0 && (
              <div>
                <a
                  href={`${
                    JSON.parse(item).link &&
                    JSON.parse(item).link.slice(0, 7) !== "http://"
                      ? "https://"
                      : ""
                  }${JSON.parse(item).link}`}
                  target="_blank"
                >
                  {JSON.parse(item).name}
                </a>

                <span
                  id="like"
                  onClick={(e) =>
                    handleLike(e, JSON.parse(item).name, JSON.parse(item).link)
                  }
                >
                  {likesArray.includes(item) == true ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </span>
              </div>
            )
        )}
    </>
  );
};

export default Likes;
