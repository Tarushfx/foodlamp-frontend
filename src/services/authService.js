import http from "./httpService";
import _ from "lodash";
const apiEndpoint = "http://localhost:4000";

export async function register(user) {
  try {
    const response = await http.post(
      `${apiEndpoint}/register`,
      _.pick(user, ["name", "email", "password"])
    );
    localStorage.setItem("token", response.headers["x-auth-token"]);
    return true;
  } catch (error) {
    return false;
  }
}

export async function login(user) {
  try {
    const response = await http.post(
      `${apiEndpoint}/login`,
      _.pick(user, ["email", "password"])
    );
    localStorage.setItem("token", response.data);

    return true;
  } catch (error) {
    return false;
  }
}

export async function logout() {
  localStorage.removeItem("token");

  return;
}
export function getToken() {
  return localStorage.getItem("token");
}
export default {
  login,
  register,
  logout,
  getToken,
};
