import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateInputs = () => {
    if (!email || !password) {
      return 'Please enter both email and password.';
    }
    return '';
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      // Make API call to backend to authenticate the user
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Store the JWT token in localStorage for authentication
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        navigate('/'); // Redirect to homepage after successful login
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <center>
        <h1 style={{ color: "white", fontSize: "30px" }}>Login</h1>
      </center>
      <form onSubmit={handleLogin}>
        <label style={{ color: "white" }}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label style={{ color: "white" }}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <center>
        <p style={{ color: "white", fontSize: "20px" }}>
          Don't have an account? <a href="/signup">Sign Up</a>and<a href="/guest">GuestLogin</a>
        </p>
      </center>
    </div>
  );
};

export default Login;
