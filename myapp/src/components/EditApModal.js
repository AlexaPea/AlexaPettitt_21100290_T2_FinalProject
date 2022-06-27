import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import { useState, useEffect } from 'react';

import axios from 'axios';

const EditApModal = (props) => {

    //=============================================================================
// set client info
//=============================================================================

const [updatedAp, setUpdatedAp] = useState({
    vet: props.vet,
    client: props.client,
    date: props.date,
    time: props.time,
    room: props.room,
    id: props.id,
   
});

//set input fields to original values

  
useEffect(()=>{
document.getElementById('updateVet').value = props.vet;
document.getElementById('updateClient').value = props.client;
document.getElementById('updateDate').value = props.date;
document.getElementById('updateTime').value = props.time;
document.getElementById('updateRoom').value = props.room;


},[]);


//=============================================================================
// Close addClient pop up
//=============================================================================
   
const closeBooking = (event) => {
    event.preventDefault();
    props.rerender();
  };


  //=============================================================================
// Get values
//=============================================================================


      //get info from input
      const vetNameVal = (e) => { //e is for events
  
        const value = e.target.value;
        setUpdatedAp({...updatedAp, vet: value});

    }

    const clientNameVal = (e) => { //e is for events

        const value = e.target.value;
        setUpdatedAp({...updatedAp, client: value});


    }

    
    const dateVal = (e) => { //e is for events

      const value = e.target.value;
      setUpdatedAp({...updatedAp, date: value});


  }

  const timeVal = (e) => { //e is for events

      const value = e.target.value;
      setUpdatedAp({...updatedAp, time: value});

  }

  const roomVal = (e) => { //e is for events

      const value = e.target.value;
      setUpdatedAp({...updatedAp, room: value});

  }

  /////////////////////update
const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:80/project-api/updateAp.php', updatedAp)
      .then((res)=>{
        let data = res.data;
        console.log(data); 
        props.upRender(true);
        props.rerender();
      });
  }





    return (
        <div className='editApModal'>
             <div className='appointments-form '>
                <form id="homeForm">
                <button className='closeBtn' id="btn" onClick={closeBooking}><div className='close-icon'><UilTimes/></div></button>
                    <div className='heading'>
                   
                        <h1>Edit booking</h1>
                        <h3>Let's make some changes!</h3>

                    </div>

                    <div className='new-book-container home'>
                        <input name="vet" id='updateVet' list="docList" onBlur={vetNameVal} className='booking-input home' type='text' placeholder='doctor'/>
                        <datalist id="docList">
                            <option value="Sarah"/>
                            <option value="Josh"/>
                            <option value="Daina"/>
                            <option value="Tanielle"/>
                            <option value="Tony"/>
                        </datalist>
                        <input name="client"  id='updateClient' list="clientList"  onBlur={clientNameVal} className='booking-input home' type='text' placeholder='client'/>
                        <datalist id="clientList">
                            <option value="Sarah"/>
                            <option value="Josh"/>
                            <option value="Daina"/>
                            <option value="Tanielle"/>
                            <option value="Tony"/>
                        </datalist>
                        <input name="date"   id='updateDate' onChange={dateVal} className='booking-input home' type='date' placeholder='Date'/>
                        <input name="time"   id='updateTime'  onChange={timeVal} className='booking-input home' type='time' placeholder='time'/>
                        <input name="room"  id='updateRoom'  onBlur={roomVal}  className='booking-input home' type='number' placeholder='room'/>

                        <div className='editApButtons'>
                                 <button className='primary-btn' id='btn' onClick={handleSubmit}>Edit appointment</button>
                                                <button className='primary-btn white' id='btn' onClick={closeBooking}>Cancel</button>

                        </div>
                    
                    </div>
                  
                </form>
            </div>
        </div>
    );
};

export default EditApModal;