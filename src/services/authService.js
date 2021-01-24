import http from "./httpService";
import _ from "lodash";
import jwt from "jsonwebtoken";
const apiEndpoint = "http://localhost:4000";

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
      _.pick(user, ["email", "password"])
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
  const email = await jwt.decode(localStorage.getItem("token")).email;
  return email;
}
export async function getName() {
  const name = await jwt.decode(localStorage.getItem("token")).name;
  return name;
}
export default {
  login,
  register,
  logout,
  getToken,
  getEmail,
  getName,
};
