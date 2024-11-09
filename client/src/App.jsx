import AuthLayouts from "./layouts/AuthLayouts";
import GuestLayouts from "./layouts/GuestLayouts";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route element={<GuestLayouts />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<AuthLayouts />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
