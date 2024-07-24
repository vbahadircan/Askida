import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import Firebase auth service
import './Login.css';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, phoneNumber, 'yourPassword');
      navigate('/'); // Redirect to home page after login
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          required
        />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      <div className="register-text">
        <p>Do not have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
}

export default Login;
