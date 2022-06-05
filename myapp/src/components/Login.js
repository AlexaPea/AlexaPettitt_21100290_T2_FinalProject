import React from 'react';
import loginimg from '../Images/login.png';
import Logo from '../Images/logo.png';
import { useState, useEffect } from 'react';
import Helmet from "react-helmet";
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

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

    const navigate = useNavigate();

  const [inputs, setInputs] = useState({
      email: '',
      password: ''
  });

  const emailVal = (e) => {

    const value = e.target.value;
    setInputs({...inputs, email: value});
    //here you will validate

  }

  const passwordVal = (e) => {

    const value = e.target.value;
    setInputs({...inputs, password: value});
    //here you will validate

  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    console.log(inputs); //must remove this on hand in

    axios.post('http://localhost:8888/project-api/userLogin.php', inputs)
    .then(function(response){
      console.log(response);

      if(response.data === true){
        sessionStorage.setItem('activeUser', inputs.email); //sets active user in sessionStorage
        navigate("/Appointments");
      }else{
        console.log("Not working")
      }
    });
}
      
      
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
     
                <label>
                    Email
                    <input type='email' name='email' placeholder='Please type email here' onChange={emailVal}></input>
                </label>

                <label>
                    Password
                    <input type='password' name='password' placeholder='Please type password here' onChange={passwordVal}></input>
                </label>

                <button className='primary-btn login' onClick={handleSubmit}>Log In</button>

                <h3>Don't have an account?</h3>
                <button className='primary-btn create' href='/Register'>Create account</button>
                </form>
            </div>
            
        </div>
    )
}

export default Login