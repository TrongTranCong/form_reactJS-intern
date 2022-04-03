import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
export default function LoginForm(props) {
  const [details, setDetails] = useState({ email: "", password: "" });
  const { LoginProp, error } = props;
  const navigate = useNavigate();
  // const navigate = useNavigate();
  // console.log(navigate)
  // navigate("\brands");
  const handleSubmit = (e) => {
    e.preventDefault();
    LoginProp(details);
    navigate('/brands')
  };

  return props.toggle ? (
    <div className="popup">
      <form className="popup-inner" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={details.email}
            required
            onChange={(e) => {
              setDetails({ ...details, email: e.target.value });
            }}
          />
          <label htmlFor="emai'">Email</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            required
            value={details.password}
            onChange={(e) => {
              setDetails({ ...details, password: e.target.value });
            }}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" value="Login" id="btn-login">
          Login
        </button>
        {error !== "" ? <div>{error}</div> : ""}
      </form>
    </div>
  ) : (
    ""
  );
}
