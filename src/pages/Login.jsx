
import React from "react";
import Add from"../images/addAvatar.png";
export const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">SuperChat</span>
        <span className="title">Register</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};
export default Login;