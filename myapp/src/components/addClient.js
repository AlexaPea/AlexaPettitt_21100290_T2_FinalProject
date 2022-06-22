import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import { useState, useEffect } from 'react';
import MiniModalLeft from './FormModalLeft';
import MiniModalRight from './FormModalRight';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const AddClient = () => {

      //object will all inputs
      const [inputs, setInputs] = useState({
        name:'',
        surname:'',
        clientId: '',
        medicalAidNum: '',
        email:'',
        contact:'',
        petName:'',
        petType:'',
        petAge:'',
        petGender:'',
    });

    const [nameError, setNameError] = useState();
    const [surnameError, setSurnameError] = useState();
    const [emailError, setEmailError] = useState();
    const [clientIdError, setClientIdError] = useState();
    const [medicalAidNumError, setMedicalAidNumError] = useState();
    const [contactError, setContactError] = useState();
    const [petNameError, setPetNameError] = useState();
    const [petTypeError, setPetTypeError] = useState();
    const [petAgeError, setPetAgeError] = useState();
    const [petGenderError, setPetGenderError] = useState();

    //get info from input
    const nameVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, name: value});

        //if first input is empty, set error message to nothing
        if(inputs.name !== ''){setNameError();}


    }

    const surnameVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, surname: value});

        //if last input is empty, set error message to nothing
        if(inputs.surname !== ''){setSurnameError();}


    }

    const clientIdVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, clientId: value});

        //if last input is empty, set error message to nothing
        if(inputs.clientId !== ''){setClientIdError();}


    }

    const medicalAidNumVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, medicalAidNum: value});

        //if last input is empty, set error message to nothing
        if(inputs.medicalAidNum !== ''){setMedicalAidNumError();}


    }

    const emailVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, email: value});

        //if last input is empty, set error message to nothing
        if(inputs.email !== ''){setEmailError();}


    }
    const contactVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, contact: value});

        //if last input is empty, set error message to nothing
        if(inputs.contact !== ''){setContactError();}


    } 
     const petNameVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, petName: value});

        //if last input is empty, set error message to nothing
        if(inputs.petName !== ''){setPetNameError();}


    }

    const petTypeVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, petType: value});

        //if last input is empty, set error message to nothing
        if(inputs.petType !== ''){setPetTypeError();}


    }

    const petAgeVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, petAge: value});

        //if last input is empty, set error message to nothing
        if(inputs.petAge !== ''){setPetAgeError();}


    }
    const petGenderVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, petGender: value});

        //if last input is empty, set error message to nothing
        if(inputs.petGender !== ''){setPetGenderError();}


    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs); //error check

        //checks if some of the input values are equal to nothing
        let result = Object.values(inputs).some(o => o === "");

        if(result){
            console.log("There is an Error");
        }else{
            axios.post('http://localhost:80/project-api/addClient.php', inputs)
            .then(function(response){
                console.log(response);

                if(response.status === 200){
                   console.log("Client has been added!");
                   Navigate('/');
                }else{
                    console.log('error');
                }

            });
        }

      
    }




    return (
        <div className='addClient'>
            <form id='add-client-form'>
            <button className='closeBtn addClient' id="btn" ><div className='close-icon'><UilTimes/></div></button>
                <div className='greeting'>
                    <h1>Add Client</h1>
                    <h3 className='subheading'>Let's get this pet registered!</h3>
                </div>
                <div className='owner-info-form'>

                    <h3>Client Information</h3>

                    <div className='input-holder owner'>
                                                
                        <input onChange={nameVal} name='name' className='booking-input doc full' type='text' placeholder='First Name'/>

                        <input onChange={surnameVal} name='surname' className='booking-input doc full' type='text' placeholder='Last Name'/>

                        <input onChange={clientIdVal} name='clientId' className='booking-input doc full' type='number' placeholder='Patient Id'/>

                        <input onChange={medicalAidNumVal} name='medicalAidNum' className='booking-input doc full' type='number' placeholder='Medical Aid Number'/>

                        <input onChange={emailVal} name='email' className="booking-input doc full" type='email' placeholder='Email' />

                        <input onChange={contactVal}  name='contact' className="booking-input doc full" type='text' placeholder='Contact Number'/>  


                    </div>


                </div>
                <div className='pet-info-form'>

                  <h3>Pet Information</h3>

                  <div className='input-holder pet'></div>

                        <input onChange={petNameVal} name='petName' className='booking-input doc full' type='text' placeholder='Name'/>

                        <input onChange={petTypeVal}  name='petType' className='booking-input doc full' type='text' placeholder='Pet type'/>

                        <input onChange={petAgeVal}  name='petAge' className="booking-input doc half" type='text' placeholder='Age'/>
            
                        <select onChange={petGenderVal} name="petGender" className="booking-input doc gen">
                            <option value="none" selected>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">other</option>
                        </select>

                    </div>

                    
                    <button className='primary-btn addClient' id='btn' onClick={handleSubmit}>Add Client</button>

                
                    
  
             
            </form>
            
        </div>
    );
};

export default AddClient;