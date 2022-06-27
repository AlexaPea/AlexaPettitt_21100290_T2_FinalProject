import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import byeAp from '../Images/byeAp.png';
// import task from '../Images/task.png';

import { useState, useEffect } from 'react';

const Sorry = (props) => {

    const closeModal = () => {
        props.rerender();
      }

    return (

        
        <div>
                  <div className='delete-task-form-container sorry'>
                <form id='addTask'>
                <button className='closeBtn' id="btn" onClick={closeModal}><div className='close-icon'><UilTimes/></div></button>
                <div className='heading task'>
                        <h1>Uh-Oh!</h1>
                        <h3>Only the head receptionist may do this!</h3>
                    </div>

                    <div className='task-img-holder sorryImg'>
                            <img className='sorryImg' src={byeAp}/>
                        
                    </div>
                  
            
                <button className='primary-btn'  id='btn' onClick={closeModal}>Go Back</button>
                

                </form>
            </div>
        </div>
    );
};

export default Sorry;