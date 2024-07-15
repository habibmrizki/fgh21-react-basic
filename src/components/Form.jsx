import React from "react";
import assetPic from "../assets/image/logo-background.png";

function Form() {
  function doLogin(event) {
    event.prevetDefault();
    const email = event.target.email.value;
    const password = event.target.passwrod.value;
    if (email === "admin@mail.com" && password === 1234) {
      window.alert("berhasil masuk");
    } else {
      window.alert("wrong email or password");
    }
  }
  return (
    <div className="container">
      <div className="content-box">
        <div className="text-form">
          <h1>Welcome Back</h1>
          <p>Enter your credential to access your account.</p>
        </div>
        <form onSubmit={doLogin} className="form">
          <div className="input-form">
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter Your Email" />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
              />
            </div>
            <button type="button">Sign In</button>
          </div>
          <div className="forgot-password">
            Forgot your Password? <a href="#">Reset Password</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
