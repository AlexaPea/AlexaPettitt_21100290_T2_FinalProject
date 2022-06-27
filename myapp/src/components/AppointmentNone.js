import React from 'react';
import noAps from '../Images/noAps.png';

const AppointmentNone = () => {
    return (
        <div className='noAps'>
            <div className='noaps-holder'>
            <h1>Quiet Day at the Office!</h1>
            <h3>No appointments yet!</h3>


            </div>
            
            <div className='task-img-holder right'>
                    <img className='taskImg' src={noAps}/>
                
            </div>

            
        </div>
    );
};

export default AppointmentNone;