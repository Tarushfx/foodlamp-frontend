import http from "./httpService";
import _ from "lodash";
import jwt from "jsonwebtoken";
// const apiEndpoint = "http://localhost:4000";
import { apiEndpoint } from "./httpService";

export async function register(user) {
  try {
    const response = await http.post(
      `${apiEndpoint}/register`,
      _.pick(user, ["name", "email", "password"])
    );
    localStorage.setItem("token", response.headers["x-auth-token"]);
    return { status: true };
  } catch (error) {
    return { status: false, error };
  }
}

export async function login(user) {
  try {
    const response = await http.post(
      `${apiEndpoint}/login`,
      _.pick(user, ["email", "password"], {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
    );
    localStorage.setItem("token", response.data);

    return { status: true };
  } catch (error) {
    return { status: false, error };
  }
}

export async function logout() {
  localStorage.removeItem("token");

  return;
}
export function getToken() {
  return localStorage.getItem("token");
}
export async function getEmail() {
  let decoded = localStorage.getItem("token");
  // console.log(decoded);
  if (decoded) {
    const email = await jwt.decode(decoded).email;
    // console.log(email);
    return email;
  }
  return null;
}
export async function getName() {
  let decoded = localStorage.getItem("token");
  if (decoded) {
    const name = await jwt.decode(decoded).name;
    return name;
  }
  return null;
}
export default {
  login,
  register,
  logout,
  getToken,
  getEmail,
  getName,
};
