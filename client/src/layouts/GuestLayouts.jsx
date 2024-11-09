import useAuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function GuestLayouts() {
  const { user } = useAuthContext();
  
  return !user ? <Outlet /> : <Navigate to="/home" />;
}

export default GuestLayouts;
