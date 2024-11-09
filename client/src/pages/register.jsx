import { useState } from "react";

import { Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

function Register() {
  const [registerData, setRegisterData] = useState({});
  const { register, errors } = useAuthContext();
  function handleChange(e) {
    setRegisterData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(registerData);
    register(registerData);
  }

  return (
    <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>register</h3>
     
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => handleChange(e)}
        />
       
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
        {errors.password && <p className="error">{errors.password[0]}</p>}
      </div>
      <div>
        <input
          type="password"
          name="password_confirmation"
          placeholder="password verfication"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <p className="dont-have-account">
        alredy have an account <Link to="/login">login</Link>
      </p>
      <div>
        <button type="submit">register</button>
      </div>
    </form>
  );
}

export default Register;
