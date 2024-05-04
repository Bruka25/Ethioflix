import React from 'react';
import './signup.css';

function Signup() {
  return (
    
    <div className="signup-page-body">
    
      <div className="signup-container">
        <form action="/flix_signup" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required/>
          <br/>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required/>
          <br/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required/>
          <br/>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
