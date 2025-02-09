import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateInputs = () => {
    if (!email || !password) {
      return 'Please fill in all fields.';
    }
    return '';
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      // Make API call to backend to register the user
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Signup successful');
        navigate('/login'); // Redirect to login page after successful signup
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <center>
        <h1 style={{ color: "white" }}>Sign Up</h1>
      </center>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Sign Up</button>
      </form>
      <center>
        <p style={{ color: "white", fontSize: "20px" }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </center>
    </div>
  );
};

export default Signup;
