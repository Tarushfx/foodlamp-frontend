import { getEmail } from "./authService.js";
import http, { apiEndpoint } from "./httpService.js";

export async function getFeed(id) {
  const feedResult = await http.get(
    `https://www.reddit.com/r/food/${id}.json`,
    {
      params: {
        limit: 5,
      },
    }
  );
  return feedResult.data.data.children;
}
export async function loadData() {
  try {
    const email = await getEmail();
    console.log(email);
    if (email) {
      const data = await http.get(`${apiEndpoint}/feed`, {
        email: email,
      });
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error.message);
  }
}
