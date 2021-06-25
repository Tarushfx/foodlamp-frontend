import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { likeRecipe } from "../services/recipeService";
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
      await props.loadData();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div class="modal fade" id="likesModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Liked Recipes</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {likesArray &&
              likesArray.map(
                (item) =>
                  Object.keys(item).length !== 0 && (
                    <span>
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
                          handleLike(
                            e,
                            JSON.parse(item).name,
                            JSON.parse(item).link
                          )
                        }
                      >
                        <FavoriteIcon />
                      </span>
                    </span>
                  )
              )}
            {likesArray.length == 0 && (
              <h2 style={{ fontFamily: "sans-serif" }}>Nothing liked Yet!!!</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Likes;
