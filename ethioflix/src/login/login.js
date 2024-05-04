import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="login-page-body"> 
      <div className="flix-login">
        <h1>Ethioflix login page</h1>
        <h3>Enter your credentials</h3>
        <form action="">
          <label htmlFor="first"> username: </label>
          <input
            type="text"
            id="first"
            name="first"
            placeholder="Enter your username"
            required
          />
          <label htmlFor="password"> password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <div className="flix-submit">
            <button type="submit">submit</button>
          </div>
        </form>
        <p>
          Not registered?
          <a href="#" style={{ textDecoration: 'none' }}> Create an account</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
