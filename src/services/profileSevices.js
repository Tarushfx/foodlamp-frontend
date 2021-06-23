import { getEmail } from "./authService";
import http from "./httpService";
const apiEndpoint = "http://localhost:4000";

export async function saveDiet(diet) {
  try {
    const email = await getEmail();
    if (email) {
      const data = await http.post(`${apiEndpoint}/diet`, {
        email: email,
        diet: diet,
      });
    } else {
      console.log("no email");
    }
  } catch (ex) {
    console.log(ex.message);
  }
}
export async function saveProfile({
  newPassword,
  oldPassword,
  name,
  newEmail,
}) {
  try {
    const email = await getEmail();
    if (email) {
      const data = await http.post(`${apiEndpoint}/me/profile`, {
        email: email,
        newEmail: newEmail,
        name: name,
        newPassword: newPassword,
        oldPassword: oldPassword,
      });
    } else {
      console.log("Invalid");
    }
  } catch (ex) {
    console.log(ex.message);
  }
}