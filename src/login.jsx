import React from "react";
import axios from "axios";
import './style/login.css';

export default function Signin({ store }) {

  function checkUser() {
    var un = document.getElementsByName("un")[0].value;
    var pw = document.getElementsByName("pw")[0].value;

    axios.post("http://localhost:8080/check", {
      "un": un,
      "pw": pw,
    }).then((res) => {
      alert(res.data);
      if (res.data !== "0") {
        sessionStorage.setItem("un", un);
        sessionStorage.setItem("role", res.data);
        if (res.data === "User") {
          store.dispatch({ type: "page", data: "Dashboard" });
        } else if (res.data === "Admin") {
          store.dispatch({ type: "page", data: "Admin" });
        } else {
          store.dispatch({ type: "page", data: "Error" });
        }
      }
    });
  }

  return (
    <div className="signup-container">
      <h2>SIGN IN</h2>
      <hr className="divider" />

      <form className="signup-form">
        <label>Username</label>
        <input type="text" name="un" />

        <label>Password</label>
        <input type="password" name="pw" />

        <button type="button" onClick={checkUser}>Login</button>

        <div className="signin-link">
          Don't have an account? <a href="#">Sign Up</a>
        </div>
      </form>
    </div>
  );
}