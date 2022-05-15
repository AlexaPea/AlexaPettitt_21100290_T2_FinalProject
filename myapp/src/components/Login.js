import React from 'react';
import loginimg from '../Images/login.png';

const Login = () => {
    return (
        <div className='login-page'>
            
            <div className='right-login'>
                <h1 className='login-heading'>PetCare</h1>
                <h2 className='login-two'>Taking care of all your pet related needs.</h2>
                <img className='login-img' src={loginimg}/>
            </div>

            <div className='left-login'>
                <h1>Log In</h1>

                <label>
                    Email
                    <input type='email' placeholder='Please type email here'></input>
                </label>

                <label>
                    Password
                    <input type='password' placeholder='Please type password here'></input>
                </label>

                <button className='primary-btn'>Log In</button>

            </div>
            
        </div>
    );
};

export default Login;