import React from "react";
import Add from"../images/addAvatar.png";
export const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">SuperChat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <input style={{display:"none"}} type="file" id="file"/>
          <label htmlFor="file">
            <img src={Add} alt=""/><span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};
export default Register;
