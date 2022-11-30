import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("access_token"),
  },
});

export const getAllData = async (url) => {
  try {
    let res = await api.get("/" + url);
    return res;
  } catch (err) {
    return err;
  }
};

export const createData = async (url, usedata) => {
  try {
    let res = await api
      .post("/" + url, usedata)
      .then(({ res }) => console.log(res.data));
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getData = async (url, id) => {
  try {
    let res = await api.get("/" + url + "/" + id);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const updateData = async (url, id, usedata) => {
  try {
    let res = await api.patch("/" + url + "/" + id, { usedata });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const deleteData = async (url, id) => {
  console.log(localStorage.getItem("user_token"));
  try {
    let res = await api.delete("/" + url + "/" + id);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const userAuth = async (url, data) => {
  try {
    let res = await api.post("/" + url, { data });
    return res.data;
  } catch (err) {
    return err;
  }
};
