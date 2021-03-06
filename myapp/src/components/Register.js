import React from 'react';
import loginimg from '../Images/login.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Okay from '../Images/okay.svg';
import NotOkay from '../Images/notOkay.svg';
// import error from '../Images/error.svg';
import MiniModalLeft from './MiniModalLeft';
import MiniModalRight from './MiniModalRight';
import Logo from '../Images/logo.png';
import { useState, useEffect } from 'react';
import Helmet from "react-helmet";



const Login = (props) => {

//=============================================================================
// Variables
//=============================================================================

    const navigate = useNavigate();
    
//=============================================================================
// Dynamically load fav icon
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
// Get user input
//=============================================================================   


    //object holds all inputs
    const [inputs, setInputs] = useState({
        first:'',
        last:'',
        email:'',
        age:'',
        gender:'',
        contact:'',
        password:'',
        passwordCon:'',
        image:'',
    });

    //we must create a useState for every error error message
    //to check if empty
    const [nameError, setNameError] = useState();
    const [lastError, setLastError] = useState();
    const [emailError, setEmailError] = useState();
    const [usernameError, setUsernameError] = useState();
    const [contactError, setContactError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [passwordConError, setPasswordConError] = useState();
    const [ageError, setAgeError] = useState();
    const [genderError, setGenderError] = useState();
    const [imageError, setImageError] = useState();


    //check if input is available
    const [emailAvail, setEmailAvail] = useState();
    const [userAvail, setUserAvail] = useState();

    
    //check if input is available then show icon 
    const [emailIcon, setEmailIcon] = useState();
    const [userIcon, setUserIcon] = useState();


    //get info from input
    const firstVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, first: value});

        //if first input is empty, set error message to nothing
        if(inputs.first !== ''){setNameError();}


    }

    const imageVal = (e) => {           
        let file = e.target.files[0];
        let reader = new FileReader();

        reader.onloadend = function() {
        console.log(reader.result);
        let imgFile = reader.result;

        setInputs({...inputs, image: imgFile});

        let image = new Image();
        image.src = reader.result;
        document.getElementById('profileimg').appendChild(image);
        
        }
        reader.readAsDataURL(file);
}


    const lastVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, last: value});

        //if last input is empty, set error message to nothing
        if(inputs.last !== ''){setLastError();}


    }

    const emailVal = (e) => { //e is for events

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

    const contactVal = (e) => { //e is for events

        //validation
        const contactRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

        const value = e.target.value;
        setInputs({...inputs, contact: value});

        //if contact input is empty, set error message to nothing
        if(inputs.contact !== ''){setContactError();}

        //check validation
        if(!value.match(contactRegex)){
            setContactError(<MiniModalRight message="Contact number is not a valid format" />); //tooltip
            //Note: Explain why the format isn't valid in the message as well
        }
    }

    
    const ageVal = (e) => { //e is for events

        //validation
        const ageRegex = /^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$/;

        const value = e.target.value;
        setInputs({...inputs, age: value});

        //if contact input is empty, set error message to nothing
        if(inputs.age !== ''){setAgeError();}

        //check validation
        if(!value.match(ageRegex)){
            setAgeError(<MiniModalLeft message="Invalid input" />); //tooltip
            //Note: Explain why the format isn't valid in the message as well
        }
    }

    const passwordVal = (e) => { //e is for events

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

    
    const genderVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, gender: value});

        //if password input is empty, set error message to nothing
        if(inputs.gender !== 'none'){setGenderError();}

          //check validation
          if(value === 'none'){
            setGenderError(<MiniModalRight message="Please select gender" />); //tooltip
            //Note: Explain why the format isn't valid in the message as well
        }

    }

    const passwordConVal = (e) => { //e is for events


        const value = e.target.value;
        setInputs({...inputs, passwordCon: value});

        //if password input is empty, set error message to nothing
        if(inputs.passwordCon !== ''){setPasswordConError();}

        //check if matching


       if(inputs.password === value){
           setPasswordConError();
         }else{
             setPasswordConError(<MiniModalLeft message="Your passwords don't match" />);
         }
    }


//=============================================================================
// Authentication
//=============================================================================
const authenticateEmail = () => { //rather make it authenticate email
    axios.post('http://localhost:80/project-api/authenticateEmail.php', inputs)
    .then(function(response){
        //just to know what's happening
        console.log(response);

        //want to check if it's available or not
        if(response.data ==="Available"){
            setEmailIcon(Okay); //okay is the imported svg - the tick
            setEmailAvail();
        } else if(response.data === "Not Available"){
            setEmailIcon(NotOkay);
            setEmailAvail(<MiniModalLeft message="Email is not available" />);

        }else if(response.data === ''){
            setEmailIcon();
            setEmailAvail();
            setEmailError();
        }
    });
}

 //=============================================================================
// Onclick submit
//=============================================================================

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs); //error check

        if(inputs.first === ''){
            setNameError(<MiniModalLeft message="What's Your Name"/>);
        }else{
            setNameError();
        }

        if(inputs.last === ''){
            setLastError(<MiniModalRight message="What's Your Surname"/>);
        }else{
            setLastError();
        }

        <div className='statusIcon'>
        <img src=""/>
    </div>
        if(inputs.email === ''){
            setEmailError(<MiniModalLeft message="Please provide email"/>);
        }else{
            setEmailError();
        }

        if(inputs.username === ''){
            setUsernameError(<MiniModalLeft message="Please provide username"/>);
        }else{
            setUsernameError();
        }

        if(inputs.contact === ''){
            setContactError(<MiniModalRight message="Please provide contact number"/>);
        }else{
            setContactError();
        }

        if(inputs.password === ''){
            setPasswordError(<MiniModalLeft message="Please provide a password"/>);
        }else{
            setPasswordError();
        }
        if(inputs.age === ''){
            setAgeError(<MiniModalLeft message="Please provide your age"/>);
        }else{
            setPasswordError();
        }

        if(inputs.passwordCon === ''){
            setPasswordConError(<MiniModalLeft message="Please confirm your password"/>);
        }else{
            setPasswordConError();
        }

        if(inputs.gender === 'none'){
            setGenderError(<MiniModalRight message="Please select your gender"/>);
        }else{
            setGenderError();
        }

        //checks if some of the input values are equal to nothing
        let result = Object.values(inputs).some(o => o === "");

        if(result){
            console.log("There is an Error");
        }else{
            axios.post('http://localhost:80/project-api/addUser.php', inputs)
            .then(function(response){
                
                    if(response.status === 200){
                    sessionStorage.setItem('activeUser', inputs.email); //sets active user in sessionStorage
                    navigate("/");
                }

            });
        }
    }


//=============================================================================
// HTML code
//=============================================================================

    return (
        <div className='login-page'>
              <Helmet>
                <title>Register</title>
                <link rel="icon" href={Logo}/>
            </Helmet>
            
            <div className='right-login'>
            <img className='logo-img' src={Logo}/>
                <h1 className='login-heading'>PetCare</h1>
                <h2 className='login-two'>Taking care of all your pet related needs.</h2>
                <img className='login-img' src={loginimg}/>
            </div>

            <div className='left-register'>
            <form>
                <h1>Hello There!</h1>
                <h2>Let's get you registered!</h2>

                <div className='imageArea'>
                <p>Upload a Profile Image</p>
                <input name="imageUrl" id="profileimg" className='imgInput' type="file" onChange={imageVal} placeholder="Upload profile picture"/>
            </div>

                
                    {nameError}
                    <input name='first' className="half-input" type='text' placeholder='First Name'onChange={firstVal}/>
              

                    {lastError}
                    <input name='last' className="half-input" type='text' placeholder='Surname' onChange={lastVal}/>
             
                
                  
                    {ageError}
                    <input name='age' className="half-input" type='text' placeholder='Age' onChange={ageVal}/>
                

                    {genderError}
                    <select name="gender" onChange={genderVal} defaultValue="none">
                        <option value="none">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">other</option>
                    </select>
                
             
                    {emailError}    
                    {emailAvail}
                    <input name='email' type='email' placeholder='Email' onChange={emailVal} onBlur={authenticateEmail}/>

                    {contactError}
                    <input name='contact' type='text' placeholder='Contact Number' onChange={contactVal} />          

                    {passwordError}
                    <input name='password' type='password' placeholder='Password' onChange={passwordVal}/>
            
                    {passwordConError}
                    <input name='passwordCon' type='password' placeholder='Confirm password' onChange={passwordConVal}/>
       

                {/* make rank automatically general */}

                <button className='primary-btn login' type='submit' onClick={handleSubmit}>Register</button>

                <h3>Already have an account?</h3>
                <a href='/Login' className='login-link'><p>Login</p></a>
                </form>
            </div>
            
        </div>
    );
};

export default Login;