import React from 'react';
import './Loginsignup.css';
const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign up</h1>
                <div className="loginfield">
                    <input type = "text" placeholder='your Name'/>
                    <input type = "email" placeholder=' Email'/>
                    <input type = "password" placeholder='Password'/>

                </div>
                <button>Continue</button>
                <p className="login-login">Already have an account?<span>Login Here</span></p>
            <div className="login-agree">
                <input type="checkbox" name ='' id = '' />
                <p>BY Continuing ,I agree to terms and conditions.</p>
            </div>
            </div>

        </div>
    )
}

export default LoginSignup