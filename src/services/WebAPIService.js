import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:8000/api",
// });
// api.defaults.headers.common["Content-Type"] = "application/json";
const API_BASE_URL = "http://localhost:8000/api";
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
});

api.interceptors.request.use(
  (request) => {
    request.headers = {
      "Content-Type": "application/json",
    };
    return request;
  },
  (error) => Promise.reject(error)
);

export const getAll = async (url) => {
  const res = await api.get("/" + url + "/");
  return res.data;
};

export const create = async (url, usedata) => {
  const result = await api.post("/" + url, usedata);
  return result.data || [];
};

export const get = async (url, id) => {
  try {
    let res = await api.get("/" + url + "/" + id);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const update = async (url, id, usedata) => {
  try {
    let res = await api.patch("/" + url + "/" + id, { usedata });
    return res.data;
  } catch (err) {
    return err;
  }
};
