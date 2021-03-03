import { getEmail } from "./authService";
import http from "./httpService";

export async function getRecipes(search, from = 0, type = "q") {
  const recipes = await http.get("https://api.edamam.com/search", {
    params: {
      [type]: search,
      app_id: "a55c565f",
      app_key: "99776aeb8204888b39d4e12c63e3c9d7",
      from: from,
    },
    mode: "cors",
  });
  return recipes;
}
export async function likeRecipe(name, link) {
  try {
    const apiEndpoint = "http://localhost:4000";
    const req = await http.post(`${apiEndpoint}/like`, {
      email: await getEmail(),
      link: { name: name, link: link },
    });
  } catch (ex) {
    console.log(ex.message);
  }
}
