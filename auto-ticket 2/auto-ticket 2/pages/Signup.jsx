import React, { useState } from 'react';
import '../styles/LoginSignup.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import calender_icon from '../assets/calendar.png';
import phone_icon from '../assets/phone.png';
import profile_icon from '../assets/profile.png';
import gender_icon from '../assets/gender.png';
import { Link } from 'react-router-dom';

const Signup = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    dob: '',
    gender: '',
    userName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy registration - for now, just call onLogin
    // You can add validation here if needed
    onLogin();
  };

  return (
    <div className="container">
      <div className="header"> 
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt=""/>
            <input 
              type="text" 
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input">
            <img src={phone_icon} alt=""/>
            <input 
              type="tel" 
              name="contactNumber"
              placeholder="Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input">
            <img src={calender_icon} alt=""/>
            <input 
              type="date" 
              name="dob"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input">
            <img src={gender_icon} alt=""/>
            <input 
              type="text" 
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input">
            <img src={profile_icon} alt=""/>
            <input 
              type="text" 
              name="userName"
              placeholder="User Name"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input">
            <img src={email_icon} alt=""/>
            <input 
              type="email" 
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input">
            <img src={password_icon} alt=""/>
            <input 
              type="password" 
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className='submit-container'>
          <button type="submit" className="submit">Sign Up</button>
        </div>
      </form>

      <div className="switch-form">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Signup;