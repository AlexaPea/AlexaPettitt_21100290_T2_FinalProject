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
        first:'',
        last:'',
        clientId: '',
        medicalAidNum: '',
        room: '',
        email:'',
        age:'',
        gender:'',
        contact:'',
        password:'',
        passwordCon:'',
    });

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
                                                
                        <input name='name' className='booking-input doc full' type='text' placeholder='First Name'/>

                        <input name='surname' className='booking-input doc full' type='text' placeholder='Last Name'/>

                        <input name='clientId' className='booking-input doc full' type='number' placeholder='Patient Id'/>

                        <input name='medicalAidNum' className='booking-input doc full' type='number' placeholder='Medical Aid Number'/>

                        <input name='email' className="booking-input doc full" type='email' placeholder='Email' />

                        <input name='contact' className="booking-input doc full" type='text' placeholder='Contact Number'/>  


                    </div>


                </div>
                <div className='pet-info-form'>

                  <h3>Pet Information</h3>

                  <div className='input-holder pet'></div>

                        <input name='petName' className='booking-input doc full' type='text' placeholder='Name'/>

                        <input name='petType' className='booking-input doc full' type='text' placeholder='Pet type'/>

                        <input name='age' className="booking-input doc half" type='text' placeholder='Age'/>
            
                        <select name="gender" className="booking-input doc gen">
                            <option value="none" selected>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">other</option>
                        </select>

                    </div>

                    
                    <button className='primary-btn addClient' id='btn'>Add Client</button>

                
                    
  
             
            </form>
            
        </div>
    );
};

export default AddClient;