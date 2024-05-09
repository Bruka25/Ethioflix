import React, { useState } from 'react';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to the /login URL
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Response from server:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="login-page-body">
      <div className="flix-login">
        <h1>Ethioflix login page</h1>
        <h3>Enter your credentials</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"> email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            required
          />
          <label htmlFor="password"> password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
