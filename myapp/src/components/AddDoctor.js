import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import { useState, useEffect } from 'react'

const AddDoctor = () => {
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
                        <input className='booking-input doc full' type='text' placeholder='First Name'/>

                        <input className='booking-input doc full' type='text' placeholder='Last Name'/>

                        
                  
                
                    <input name='age' className="booking-input doc" type='text' placeholder='Age'/>
                

     
                    <select name="gender" className="booking-input doc gen">
                        <option value="none" selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">other</option>
                    </select>
                
             
                   
                    <input name='email' className="booking-input doc" type='email' placeholder='Email' />

        
                    <input name='contact' className="booking-input doc" type='text' placeholder='Contact Number'/>  

                    <input name='specialization' className="booking-input doc full" type='text' placeholder='Specialization' />        

             
                    <input name='password' className="booking-input doc"  type='password' placeholder='Password'/>
            
            
                    <input name='passwordCon' className="booking-input doc"  type='password' placeholder='Confirm password'/>
       

                       

                        <button className='primary-btn addVet' id='btn'>Add Vet</button>
                    </div>
                  
                </form>
            </div>
        </div>
            
    
    );
};

export default AddDoctor;