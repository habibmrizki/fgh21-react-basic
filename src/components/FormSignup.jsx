import React from "react";
function FormSignup() {
  function doSignup(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
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
        <form onSubmit={doSignup} className="form">
          <div className="input-form">
            <div className="Fullname">
              <label htmlFor="Fullname">Fullname</label>
              <input
                type="Fullname"
                name="Fullname"
                id="Fullname"
                placeholder="Enter Your Fullname"
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="password">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="confirmPassword"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Enter Your confirmPassword"
              />
            </div>
            <button type="submit">Sign In</button>
          </div>
          <div className="forgot-password">
            Forgot your Password? <a href="#">Reset Password</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormSignup;