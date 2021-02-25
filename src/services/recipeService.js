import http from "./httpService";

export async function getRecipes(search, from = 0) {
  const recipes = await http.get("https://api.edamam.com/search", {
    params: {
      q: search,
      app_id: "a55c565f",
      app_key: "99776aeb8204888b39d4e12c63e3c9d7",
      from: from,
    },
  });
  return recipes;
}
