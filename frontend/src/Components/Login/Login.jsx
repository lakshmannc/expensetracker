import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginSignup.css';
import user_icon from "../assests/profile.png";
import email_icon from "../assests/gmail.png";
import password_icon from "../assests/locked-computer.png";
import phone_icon from "../assests/phone.png";

const Login = () => {
    const [action, setAction] = useState("Sign Up");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        
        // Here you can add your authentication logic

        // Redirect to the main page after successful login
        navigate('/'); // Redirect to the main page
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="toggle-button">
                    <button className={action === "Login" ? "toggle-button-login active" : "toggle-button-login"} onClick={() => setAction("Login")}>Login</button>
                    <button className={action === "Sign Up" ? "toggle-button-signup active" : "toggle-button-signup"} onClick={() => setAction("Sign Up")}>Sign Up</button>
                </div>
            </div>
            <div className="inputs">
                {action === "Sign Up" && (
                    <div className="input">
                        <img src={user_icon} alt='' />
                        <input type="text" placeholder='First Name' />
                    </div>
                )}
                {action === "Sign Up" && (
                    <div className="input">
                        <img src={user_icon} alt='' />
                        <input type="text" placeholder='Last Name' />
                    </div>
                )}
                <div className="input">
                    <img src={email_icon} alt='' />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                </div>
                {action === "Sign Up" && (
                    <div className="input">
                        <img src={phone_icon} alt='' />
                        <input type="tel" placeholder='Phone Number' />
                    </div>
                )}
                <div className="input">
                    <img src={password_icon} alt='' />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                </div>
                {action === "Sign Up" && (
                    <div className="input">
                        <img src={password_icon} alt='' />
                        <input type="password" placeholder='Confirm Password' />
                    </div>
                )}
                {action === "Login" && (
                    <div className="forget-password">Lost password? <span>Click Here!</span></div>
                )}
            </div>
            <div className="submit-container">
                <button className="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Login;