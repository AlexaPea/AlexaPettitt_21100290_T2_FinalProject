import React from 'react';
import loginimg from '../Images/login.png';
import Logo from '../Images/logo.png';
import { useState, useEffect } from 'react'

const Login = (props) => {

    useEffect(() => {
        const link = document.querySelector("link[rel~='icon']");
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = {Logo};
      }, []);
      
      
    return (
        <div className='login-page'>
            
            <div className='right-login'>
            <img className='logo-img' src={Logo}/>
                <h1 className='login-heading'>PetCare</h1>
                <h2 className='login-two'>Taking care of all your pet related needs.</h2>
                <img className='login-img' src={loginimg}/>
            </div>

            <div className='left-login'>
            <form>
                <h1>Hello Again!</h1>
                <h2>Welcome back you've been missed!</h2>
     
                <label>
                    Email
                    <input type='email' placeholder='Please type email here'></input>
                </label>

                <label>
                    Password
                    <input type='password' placeholder='Please type password here'></input>
                </label>

                <button className='primary-btn login'>Log In</button>

                <h3>Don't have an account?</h3>
                <button className='primary-btn create'>Create account</button>
                </form>
            </div>
            
        </div>
    );
};

export default Login;