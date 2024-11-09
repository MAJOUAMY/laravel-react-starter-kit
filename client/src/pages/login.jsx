import { Link } from "react-router-dom";


import { useState } from "react";
import useAuthContext from "../context/AuthContext";

function Login() {
  const [loginData, setLoginData] = useState({});
  const { login, errors } = useAuthContext();

  function handleChange(e) {
    setLoginData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    login(loginData);
  }
  return (
    <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>Login </h3>

      <div>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => handleChange(e)}
        />
        {errors.email && <p className="error">{errors.email[0]}</p>}
      </div>

      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => handleChange(e)}
        />
        { errors.password && <p className="error">{errors.password[0]}</p>}
      </div>
      <p className="dont-have-account">
         have an account<Link to="/register"> register</Link>
      </p>
      <div>
        <button type="submit"> login</button>
      </div>
    </form>
  );
}

export default Login;
