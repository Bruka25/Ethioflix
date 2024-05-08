import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-page-body"> 
      <div className="flix-login">
        <h1>Login</h1>
        <h3>Enter your credentials</h3>
        <form action="">
          <label htmlFor="first"> Username: </label>
          <input
            type="text"
            id="first"
            name="first"
            placeholder="Enter your username"
            required
          />
          <label htmlFor="password"> Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <div className="flix-submit">
            <button type="submit" >Log in</button>
          </div>
        </form>
        <p>
          Not registered?
          <Link to="/signup" style={{ textDecoration: 'none' }}> Create an account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
