import { useLocation, Navigate } from "react-router-dom";

export const setToken = (token) => {
  localStorage.setItem("access_token", token);
};

export const setUser = (username) => {
  localStorage.setItem("username", username);
};

export const fetchToken = () => {
  return localStorage.getItem("access_token");
};

export function RequireToken({ children }) {
  let auth = fetchToken();
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export function Logout() {
  let location = useLocation();
  localStorage.removeItem("access_token");
  return <Navigate to="/login" state={{ from: location }} />;
}
