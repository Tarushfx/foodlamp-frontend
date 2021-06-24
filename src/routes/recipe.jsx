import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import LoadMorePosts from "../components/LoadMorePosts.jsx";
import Navbar from "../components/navbar.jsx";
import RecipeCard from "../components/recipeCard.jsx";
import RecipePage from "../components/RecipePage.jsx";
import FeedPost from "../higherOrderComponents/feedPost.jsx";
import { getEmail } from "../services/authService.js";
import http from "../services/httpService.js";
import { getRecipes, likeRecipe } from "../services/recipeService.js";

const Recipe = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [recipeArray, setRecipeArray] = useState([]);
  const [from, setFrom] = useState(0);
  const [search, setSearch] = useState(
    (location.state && location.state.search) || ""
  );
  useEffect(() => {
    let recipeHelper = async () => {
      let recipes = await getRecipes(search);
      recipes = recipes.data.hits;
      setRecipeArray(recipes);
    };
    recipeHelper();
  }, []);
  const searchRecipe = async (e, searchTerm) => {
    history.push("/recipe", { search: searchTerm });
    setSearch(searchTerm);
    let recipes = await getRecipes(search || searchTerm);
    console.log(recipes.data.hits);
    recipes = recipes.data.hits;
    setRecipeArray(recipes);
  };
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
      <Navbar
        onChange={props.changeTheme}
        theme={props.theme}
        data={props.data}
        search={(location.state && location.state.search) || ""}
        searchRecipe={searchRecipe}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {recipeArray &&
          recipeArray.map(({ recipe }, index) => (
            <>
              <RecipeCard
                key={index}
                theme={props.theme}
                imageUrl={recipe.image}
                title={recipe.label}
                data={props.data}
                link={recipe.url}
                time={recipe.totalTime}
                index={index}
                handleLike={(e) => handleLike(e, recipe.label, recipe.url)}
                //recipe
                ingredients={recipe.ingredients}
                healthLabels={recipe.healthLabels}
                dietLabels={recipe.dietLabels}
                recipeID={recipe.uri}
                serving={recipe.yield}
              />
            </>
          ))}
        {recipeArray.length !== 0 && (
          <LoadMorePosts
            handleClick={async () => {
              if (from <= 50) {
                let recipes = await getRecipes(search, from + 10);
                setFrom(from + 10);
                recipes = recipes.data.hits;
                let tempRecipes = [].concat(recipeArray);
                tempRecipes = tempRecipes.concat(recipes);
                setRecipeArray(tempRecipes);
              }
            }}
          />
        )}

        {recipeArray.length == 0 && <RecipePage />}
      </div>
    </>
  );
};

export default Recipe;
