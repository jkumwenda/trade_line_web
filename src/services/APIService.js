import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
});

api.interceptors.request.use(
  (request) => {
    request.headers = {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      "Content-Type": "application/json",
    };
    return request;
  },
  (error) => Promise.reject(error)
);

export const getAllData = async (url) => {
  const res = await api.get("/" + url + "/");
  return res.data;
};

export const createData = async (url, usedata) => {
  try {
    let res = await api
      .post("/" + url, usedata)
      .then((res) => console.log(res.data));
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getData = async (url, id) => {
  try {
    let res = await api.get("/" + url + "/" + id);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateData = async (url, id, usedata) => {
  try {
    let res = await api.patch("/" + url + "/" + id, usedata);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const deleteData = async (url, id) => {
  try {
    let res = await api.delete("/" + url + "/", { data: { id: +id } });
    return res.data;
  } catch (err) {
    return err;
  }
};
