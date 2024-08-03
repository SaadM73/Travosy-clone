import axios from "axios";

const server = "http://api.travelwise.axsonstech.com/api";

export const baseUrl = "http://api.travelwise.axsonstech.com/";

const instance = axios.create({
  baseURL: server,
});

instance.interceptors.request.use((request) => {
  request.headers = {
    'Accept': "application/json, text/plain, */*",
  }
  return request
});

instance.interceptors.response.use((response) => {
  if (response) {
    return response
  }
}, function (err) {
  Promise.reject(err);
});

export default instance;