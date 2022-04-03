import React from "react";
import { useState } from "react";
import LoginForm from "../Login/LoginForm";
import "./Header.css";
export default function Header(props) {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin12345",
  };
  const [user, setUser] = useState({ email: "", password: "" });
  console.log(user)
  const [error, setError] = useState("");
  const Login = (details) => {
  
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({...user,
        email: details.email,
        password: details.password,
      });
    } else {
      setError("Details do not match");
    }

  };
  const Logout = () => {
    setUser({
      email: "",
      password: "",
    });
  };
  const [show, setShow] = useState("");
  return (
    <div className="header">
      <span>
        <i className="fa fa-user" aria-hidden="true"></i>
      </span>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Login
      </button>
      {show && <LoginForm toggle={true} LoginProp={Login} error={error} />}
      {/* {user.email !== "" ? (
        <div>
          <h3>Hello World!!!</h3>
          <button onClick={Logout}></button>
        </div>
      ) : (
        <LoginForm />
      )} */}
    </div>
  );
}
