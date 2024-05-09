import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to the /login URL
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
    })
  .then((response) => {
      if (!response.ok) {
        throw new Error('Invalid name or password');
      }
      return response.json();
    })
  .then((data) => {
      // Redirect the user to the home page after successful login
      window.location.href = '/';
    })
  .catch((error) => {
      console.error('Error:', error);
      setError('Invalid username or password');
    });
  };

  return (
    <div className="login-page-body">
      <div className="flix-login">
        <h1>Login</h1>
        <h3>Enter your credentials</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"> Username: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your username"
            required
          />
          <label htmlFor="password"> Password: </label>
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
            <button type="submit">Log in</button>
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