import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./welcome.css";

const Welcome = ({ username }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/login");
    }, 5000); // Redirect after 5 seconds

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome, to EthioFLIX</h1>
      <p className="welcome-message">
        Thank you for signing up, redirecting you to login page
      </p>
    </div>
  );
};

export default Welcome;
