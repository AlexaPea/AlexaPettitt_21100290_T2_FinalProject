import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import { useState, useEffect } from 'react';
import MiniModalLeft from './FormModalLeft';
import MiniModalRight from './FormModalRight';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const AddDoctor = () => {

      //object will all inputs
      const [inputs, setInputs] = useState({
        first:'',
        last:'',
        specialization: '',
        vetId: '',
        room: '',
        email:'',
        age:'',
        gender:'',
        contact:'',
        password:'',
        passwordCon:'',
    });

    const [nameError, setNameError] = useState();
    const [lastError, setLastError] = useState();
    const [emailError, setEmailError] = useState();
    const [specializationError, setSpecializationError] = useState();
    const [vetIdError, setVetIdError] = useState();
    const [roomError, setRoomError] = useState();
    const [contactError, setContactError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [passwordConError, setPasswordConError] = useState();
    const [ageError, setAgeError] = useState();
    const [genderError, setGenderError] = useState();

    //get info from input
    const firstVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, first: value});

        //if first input is empty, set error message to nothing
        if(inputs.first !== ''){setNameError();}


    }

    const lastVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, last: value});

        //if last input is empty, set error message to nothing
        if(inputs.last !== ''){setLastError();}


    }

    const specializationVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, specialization: value});

        //if last input is empty, set error message to nothing
        if(inputs.specialization !== ''){setSpecializationError();}


    }

    const vetIdVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, vetId: value});

        //if last input is empty, set error message to nothing
        if(inputs.vetId !== ''){setVetIdError();}


    }

    const roomVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, room: value});

        //if last input is empty, set error message to nothing
        if(inputs.room !== ''){setRoomError();}


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
            setPasswordError(<MiniModalLeft message="Password must include..." />); //tooltip
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

        if(inputs.specialization === 'none'){
            setSpecializationError(<MiniModalRight message="Please provide the specialization"/>);
        }else{
            setSpecializationError();
        }


        

        //checks if some of the input values are equal to nothing
        let result = Object.values(inputs).some(o => o === "");

        if(result){
            console.log("There is an Error");
        }else{
            axios.post('http://localhost:80/project-api/addVet.php', inputs)
            .then(function(response){
                console.log(response);

                if(response.status === 200){
                   console.log("Vet has been added!");
                   Navigate('/Doctors');
                }

            });
        }

      
    }

    


   



    return (
        <div className='add-doctor'>
            <div className='add-doctor-form'>
                <form id="doctorForm">
                <button className='closeBtn' id="btn" ><div className='close-icon'><UilTimes/></div></button>
                    <div className='heading doc'>
                   
                        <h1>Add New Vet</h1>
                        <h3>Add the new member to the team!</h3>

                    </div>

                    <div className='new-doc-container'>

                         {/* {nameError} */}
                        <input className='booking-input doc full' name='first' onChange={firstVal} type='text' placeholder='First Name'/>
                        {/* {lastError} */}
                        <input className='booking-input doc full' name='last' type='text' placeholder='Last Name' onChange={lastVal}/>

                        
                  
                        {/* {ageError} */}
                    <input name='age' className="booking-input doc" type='text' placeholder='Age' onChange={ageVal}/>
                

                    {/* {genderError} */}
                    <select name="gender" className="booking-input doc gen" onChange={genderVal}>
                        <option value="none" selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">other</option>
                    </select>
                
             
                    {/* {emailError} */}
                    <input name='email' className="booking-input doc" type='email' placeholder='Email' onChange={emailVal} />

                    {/* {contactError} */}
                    <input name='contact' className="booking-input doc" type='text' placeholder='Contact Number' onChange={contactVal}/>  

                    {/* {specializationError} */}
                    <input name='specialization' className="booking-input doc full" type='text' placeholder='Specialization' onChange={specializationVal} />    

                    {/* {vetIdError} */}
                    <input name='vetId' className="booking-input doc" type='text' placeholder='Vet Id' onChange={vetIdVal} />   

                    {/* {roomError} */}
                    <input name='room' className="booking-input doc" type='number' placeholder='Room Number' onChange={roomVal} />       

                    {/* {passwordError} */}
                    <input name='password' className="booking-input doc"  type='password' placeholder='Password' onChange={passwordVal}/>
            
                    {/* {passwordConError} */}
                    <input name='passwordCon' className="booking-input doc"  type='password' placeholder='Confirm password' onChange={passwordConVal}/>
       

                       

                        <button className='primary-btn addVet' id='btn' onClick = {handleSubmit}>Add Vet</button>
                    </div>
                  
                </form>
            </div>
        </div>
            
    
    );
};

export default AddDoctor;