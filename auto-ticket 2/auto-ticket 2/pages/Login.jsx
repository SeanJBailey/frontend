import React, { useState } from 'react';
import '../styles/LoginSignup.css';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication - for now, just call onLogin
    onLogin();
  };

  return (
    <div className="container">
      <div className="header"> 
        <div className='text'>Auto-Ticket</div> {/* Changed from "Login" to "Auto-Ticket" */}
        <div className='underline'></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt=""/>
            <input 
              type="email" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <img src={password_icon} alt=""/>
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="forgot-password">
          Lost Password? <span>click here!</span>
        </div>
        
        {/* Centered the login button */}
        <div className='submit-container' style={{justifyContent: 'center'}}>
          <button type="submit" className="submit">Login</button>
        </div>
        
        <div className="switch-form">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;