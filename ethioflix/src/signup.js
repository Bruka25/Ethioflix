import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="signup-page-body"> 
      <div className="flix-signup">
        <h1>Sign Up</h1>
        <form action="/flix_signup" method='post'>
        <label htmlFor="name">Name:</label>
          <input placeholder='Your Name' type="text" id="name" name="name" required/>
          <label htmlFor="email">Email:</label>
          <input placeholder='Your email address' type="email" id="email" name="email" required/>
          <label htmlFor="password">Password:</label>
          <input placeholder='Password' type="password" id="password" name="password" required/>
          <div className="flix-submit">
            <button type="submit" >Sign up</button>
          </div>
        </form>
        <p>
          Already have an account?
          <Link to="/login" style={{ textDecoration: 'none' }}> login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
