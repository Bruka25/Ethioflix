import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Access the history object to navigate programmatically

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to the /signup URL
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response from server:", data);
        // Redirect the user to the welcome page after successful signup
        navigate("/welcome");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="signup-page-body">
      <div className="flix-signup">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Your Name"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            placeholder="Your email address"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <div className="flix-submit">
            <button type="submit">Sign Up</button>
          </div>
        </form>
        <p>
          Already have an account?
          <Link to="/login" style={{ textDecoration: "none" }}>
            {" "}
            login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
