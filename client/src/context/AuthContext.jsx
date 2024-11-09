import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const getUser = async () => {
    const { data } = await axios.get("/api/user");
    setUser(data);
  };
  const login = async ({ ...data }) => {
    try {
      await csrf();
      await axios.post("/login", data);
      getUser();
      navigate("/home");
    } catch (error) {
      if (error.response.status == 422) {
        setErrors(error.response.data.errors);
      }
    }
  };
  const register = async ({ ...data }) => {
    try {
      await csrf();
      await axios.post("/register", data);
      getUser();
      navigate("/home");
    } catch (error) {
      if (error.response.status == 422) {
        setErrors(error.response.data.errors);
      }
    }
  };
  const logout = () => {
    axios.post("logout").then(() => {
      setUser(null);
      navigate("/login");
    });
  };
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, getUser, login, register, errors, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
