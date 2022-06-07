import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import { useState, useEffect } from 'react'

const MakeBooking = () => {

    //  handleBooking
    const [isShown, setIsShown] = useState(false);

    const handleBooking = (event) => {
     
        setIsShown(current => !current);
    
      };
     

    return (
        <div>
             <div className='appointments-form'>
                <form id="homeForm">
                <button className='closeBtn' id="btn" onClick={handleBooking}><div className='close-icon'><UilTimes/></div></button>
                    <div className='heading'>
                   
                        <h1>Make booking</h1>
                        <h3>Let's get this clients pet booked!</h3>

                    </div>

                    <div className='new-book-container home'>
                        <input list="docList" className='booking-input home' type='text' placeholder='doctor'/>
                        <datalist id="docList">
                            <option value="Sarah"/>
                            <option value="Josh"/>
                            <option value="Daina"/>
                            <option value="Tanielle"/>
                            <option value="Tony"/>
                        </datalist>
                        <input list="clientList" className='booking-input home' type='text' placeholder='client'/>
                        <datalist id="clientList">
                            <option value="Sarah"/>
                            <option value="Josh"/>
                            <option value="Daina"/>
                            <option value="Tanielle"/>
                            <option value="Tony"/>
                        </datalist>
                        <input className='booking-input home' type='date' placeholder='Date'/>
                        <input className='booking-input home' type='time' placeholder='time'/>
                        <input className='booking-input home' type='number' placeholder='room'/>

                        <button className='primary-btn' id='btn'>Book appointment</button>
                    </div>
                  
                </form>
            </div>
        </div>
    );
};

export default MakeBooking;