import { getEmail } from "./authService.js";
import http, { apiEndpoint } from "./httpService.js";
export async function getFeed(id, limit = 20) {
  const feedResult = await http.get(
    `https://www.reddit.com/r/food/${id}.json`,
    {
      params: {
        limit: limit,
      },
    }
  );
  return feedResult.data.data.children;
}
export async function loadData() {
  try {
    const email = await getEmail();
    if (email) {
      const data = await http
        .get(`${apiEndpoint}/feed`, {
          params: {
            email: email,
          },
        })
        .catch((ex) => console.log(ex));

      console.log(data, data.data);
      return data.data;
    } else {
      console.log("no email");
    }
  } catch (error) {
    console.log(error.message);
  }
}
export async function saveTheme(theme) {
  try {
    const email = await getEmail();
    if (email) {
      const data = await http.post(`${apiEndpoint}/me`, {
        email: email,
        theme: theme,
      });
    } else {
      console.log("no email");
    }
  } catch (ex) {
    console.log(ex.message);
  }
}
