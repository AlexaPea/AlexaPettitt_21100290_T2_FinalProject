import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';

const AddClient = () => {
    return (
        <div className='addClient'>
            <form id='add-client-form'>
            <button className='closeBtn' id="btn" ><div className='close-icon'><UilTimes/></div></button>
                <div className='greeting'>
                    <h1>Add Client</h1>
                    <h3>Let's get this pet registered!</h3>
                </div>
                <div className='owner-info-form'>

                    <h3>Client Information</h3>

                    <div className='input-holder owner'>
                                                
                        <input className='booking-input doc full' type='text' placeholder='First Name'/>

                        <input className='booking-input doc full' type='text' placeholder='Last Name'/>

                        <input className='booking-input doc full' type='number' placeholder='Patient Id'/>

                        <input className='booking-input doc full' type='number' placeholder='Medical Aid Number'/>

                        <input name='email' className="booking-input doc" type='email' placeholder='Email' />

                        <input name='contact' className="booking-input doc" type='text' placeholder='Contact Number'/>  


                    </div>


                </div>
                <div className='pet-info-form'>

                  <h3>Pet Information</h3>

                  <div className='input-holder pet'></div>

                        <input className='booking-input doc full' type='text' placeholder='Name'/>

                        <input className='booking-input doc full' type='text' placeholder='Pet type'/>

                        <input className='booking-input doc full' type='text' placeholder='Breed'/>

                        <input name='age' className="booking-input doc" type='text' placeholder='Age'/>
            
                        <select name="gender" className="booking-input doc gen">
                            <option value="none" selected>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">other</option>
                        </select>

                    </div>

                
                    
  
             
            </form>
            
        </div>
    );
};

export default AddClient;