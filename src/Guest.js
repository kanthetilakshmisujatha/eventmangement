// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Guest = ({ setIsLoggedIn }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const validateInputs = () => {
//     if (!email || !password) {
//       return 'Please enter both email and password.';
//     }
//     return '';
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const validationError = validateInputs();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     // Simulating login (without backend)
//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     if (storedUser && storedUser.email === email && storedUser.password === password) {
//       setIsLoggedIn(true);
//       localStorage.setItem('isLoggedIn', 'true'); // Store login state
//       navigate('/'); // Redirect to home page
//     } else {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <center>
//         <h1 style={{ color: "white", fontSize: "30px" }}>Guest</h1>
//       </center>
//       <form onSubmit={handleLogin}>
//         <label style={{ color: "white" }}>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label style={{ color: "white" }}>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {error && <p className="error">{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//       <div className="links">
//         {/* <center>
//           <p style={{ color: "white", fontSize: "20px" }}>
//             Don't have an account? <a href="/signup">Sign Up</a>
//           </p>
//         </center> */}
//       </div>
//     </div>
//   );
// };

// export default Guest;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Guest = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        navigate('/'); // Redirect to home page
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <center>
        <h1 style={{ color: 'white', fontSize: '30px' }}>Guest</h1>
      </center>
      <form onSubmit={handleLogin}>
        <label style={{ color: 'white' }}>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <label style={{ color: 'white' }}>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Guest;
