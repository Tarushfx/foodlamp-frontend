import { RepeatOneSharp } from "@material-ui/icons";
import http from "./httpService";
const apiEndpoint = "http://localhost:4000";

export async function register(user) {
    const response = await http.post(`${apiEndpoint}/register`, {
        name: user.name,
        email: user.email,
        password: user.password
    });
    return response;
}


