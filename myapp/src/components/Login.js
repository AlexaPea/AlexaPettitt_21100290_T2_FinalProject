import React from 'react';
import loginimg from '../Images/login.png';
import Logo from '../Images/logo.png';
import { useState, useEffect } from 'react';
import Helmet from "react-helmet";
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import MiniModalLeft from './MiniModalLeft';

const Login = (props) => {

//=============================================================================
// Variables
//=============================================================================
    
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [error, setError] = useState();

//=============================================================================
// Dynamically load favicon
//=============================================================================

    useEffect(() => {
        const link = document.querySelector("link[rel~='icon']");
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = {Logo};
      }, []);

//=============================================================================
// Get Input values
//=============================================================================

  const emailVal = (e) => {

    
    //here you will validate
       //validation
       const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

       const value = e.target.value;
    setInputs({...inputs, email: value});

       //if email input is empty, set error message to nothing
       if(inputs.email !== ''){setEmailError();}

       //check validation
       if(!value.match(mailRegex)){
           setEmailError(<MiniModalLeft message="Email is not a valid format" />); //tooltip
           //Note: Explain why the format isn't valid in the message as well
       }

  }

  //=============================================================================
// Authentication
//=============================================================================

const [emailAvail, setEmailAvail] = useState();
const authenticateEmail = () => { //rather make it authenticate email
    axios.post('http://localhost:80/project-api/authenticateEmail.php', inputs)
    .then(function(response){
        //just to know what's happening
        console.log(response);

        //want to check if it's available or not
        if(response.data ==="Available"){
            
            setEmailAvail(<MiniModalLeft message="Invalid Email" className="emailAvailLog" />);
        } else if(response.data === "Not Available"){
          
            setEmailAvail();

        }else if(response.data === ''){
           
            setEmailAvail();
            setEmailError();
        }
    });
}

  const passwordVal = (e) => {

   
    //here you will validate

     //validation
     const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;

     const value = e.target.value;
    setInputs({...inputs, password: value});

     //if password input is empty, set error message to nothing
     if(inputs.password !== ''){setPasswordError();}

     //check validation
     if(!value.match(passwordRegex)){
         setPasswordError(<MiniModalLeft message="Password must include a capital,symbols and numbers" />); //tooltip
         //Note: Explain why the format isn't valid in the message as well
     }

  }

  const navigateRegister = () => {

   navigate("/Register");

  }

//=============================================================================
// Onclick submit
//=============================================================================

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(inputs.email === ''){
      setEmailError(<MiniModalLeft message="Please provide email"/>);
  }else{
      setEmailError();
  }

  if(inputs.password === ''){
      setPasswordError(<MiniModalLeft message="Please provide a password"/>);
  }else{
      setPasswordError();
  }

    axios.post('http://localhost:80/project-api/userLogin.php', inputs)
    .then(function(response){
      console.log(response);

      if(response.data === true){
        sessionStorage.setItem('activeUser', inputs.email); //sets active user in sessionStorage
        navigate("/");
      }else{
        console.log("Not working")
        setError(<MiniModalLeft message="Incorrect Email or password"/>);
      }
    });
}
      
//=============================================================================
// HTML Code
//=============================================================================     

    return (
        <div className='login-page'>
              <Helmet>
                <title>Login</title>
                <link rel="icon" href={Logo}/>
            </Helmet>
            
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
               
                <div className='finalError'
                >  {error} </div>
     
     
                <label>
                    Email
                    <input type='email' name='email' placeholder='Please type email here' onBlur={authenticateEmail} onChange={emailVal}></input>
                    {emailAvail}
                {emailError}
                </label>
               
                <label>
                    Password
                    <input type='password' name='password' placeholder='Please type password here' onChange={passwordVal}></input>
                    
                </label>
                {passwordError}

                <button className='primary-btn login' onClick={handleSubmit}>Log In</button>

                <h3>Don't have an account?</h3>
                <button className='primary-btn create' onClick={navigateRegister}>Create account</button>
              
                </form>
              
               
            </div>
            
        </div>
    )
}

export default Login