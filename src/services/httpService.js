import axios from "axios";
const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export const apiEndpoint = "https://quiet-anchorage-46655.herokuapp.com";
// export const apiEndpoint = "http://localhost:4000";
export default http;
