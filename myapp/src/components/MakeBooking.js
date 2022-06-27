import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MakeBooking = (props) => {

//=============================================================================
// Variables
//=============================================================================

   
      const navigate = useNavigate();
  
      const [userId, setUserId] = useState({
              activeUser: sessionStorage.getItem('activeUser'),
          });
      
  
      const [inputs, setInputs] = useState({
          vet: '',
          client: '',
          date: '',
          time: '',
          room:'',
      });

      const [vetNameError, setVetNameError] = useState();
      const [clientNameError, setClientNameError] = useState();
      const [dateError, setDateError] = useState();
      const [timeError, setTimeError] = useState();
      const [roomError, setRoomError] = useState();

//=============================================================================
// Close Booking
//=============================================================================

    const closeBooking = (event) => {
        event.preventDefault();
        props.rerender();
      };

 

     
 //=============================================================================
// Get input values
//============================================================================= 
  
      //get info from input
      const vetNameVal = (e) => { //e is for events
  
          const value = e.target.value;
          setInputs({...inputs, vet: value});
  
          //if first input is empty, set error message to nothing
          if(inputs.vet !== ''){setVetNameError();}
  
  
      }
  
      const clientNameVal = (e) => { //e is for events
  
          const value = e.target.value;
          setInputs({...inputs, client: value});
  
          //if first input is empty, set error message to nothing
          if(inputs.client !== ''){setClientNameError();}
  
  
      }

      
      const dateVal = (e) => { //e is for events
  
        const value = e.target.value;
        setInputs({...inputs, date: value});

        //if first input is empty, set error message to nothing
        if(inputs.date !== ''){setDateError();}


    }

    const timeVal = (e) => { //e is for events
  
        const value = e.target.value;
        setInputs({...inputs, time: value});

        //if first input is empty, set error message to nothing
        if(inputs.time !== ''){setTimeError();}


    }

    const roomVal = (e) => { //e is for events
  
        const value = e.target.value;
        setInputs({...inputs, room: value});

        //if first input is empty, set error message to nothing
        if(inputs.room !== ''){setRoomError();}


    }
  
//=============================================================================
// Onclick submit
//=============================================================================
  
      const handleSubmit = (e) =>{
          e.preventDefault();
          console.log(inputs); //error check
  
          //checks if some of the input values are equal to nothing
          let result = Object.values(inputs).some(o => o === "");
  
          if(result){
              console.log("There is an Error");
          }else{
              axios.post('http://localhost:80/project-api/makeBooking.php', inputs)
              .then(function(response){
                //   console.log(response);
  
                  if(response.status === 200){
                     console.log("Booking has been made!");
                      props.rerender();
                  }else{
                      console.log('error');
                  }
              });
          }
      }

      //========================================================
      //get client list
      //======================================
      const [renderClientInfo, setRenderClientInfo] = useState();
  const [clients, setClients] = useState();

      useEffect(()=>{

        axios.post('http://localhost:80/project-api/readClients.php',userId )
        .then((res)=>{
          let data = res.data;
          let renderClientInfo = data.map((item) =><option uniqueId={item.id} value={item.name + " " + item.surname} />);
          console.log(data);
          setClients(renderClientInfo);
          setRenderClientInfo(false);
          
        })
        .catch(err=>{
          console.log(err);
        });
    
     },[]);


     //=========================================================
//get docs
     //=============================================================
     const [renderVetInfo, setRenderVetInfo] = useState();
     const [vets, setVets] = useState();
     useEffect(()=>{
   
       //render vet items
       axios.post('http://localhost:80/project-api/readDoctors.php',userId )
       .then((res)=>{
         let data = res.data;
         let id =data.id;
        // console.log(data[0].profileImage);
         let renderVetInfo = data.map((item) =>  <option uniqueId={item.id} value={item.name + " " + item.surname} />);
   
         setVets(renderVetInfo);
         setRenderVetInfo(false);
         
       })
       .catch(err=>{
         console.log(err);
       });
   
    },[]);
  //=============================================================================
// HTML code
//=============================================================================    
     

    return (
        <div>
             <div className='appointments-form'>
                <form id="homeForm">
                <button className='closeBtn' id="btn" onClick={closeBooking}><div className='close-icon'><UilTimes/></div></button>
                    <div className='heading'>
                   
                        <h1>Make booking</h1>
                        <h3>Let's get this clients pet booked!</h3>

                    </div>

                    <div className='new-book-container home'>
                        <input name="vet" list="docList" onChange={vetNameVal} className='booking-input home' type='text' placeholder='doctor'/>
                        <datalist id="docList">
                            {vets}
                        </datalist>
                        <input name="client" list="clientList"  onChange={clientNameVal} className='booking-input home' type='text' placeholder='client'/>
                        <datalist id="clientList">
                           {clients}
                        </datalist>
                        <input name="date"  onChange={dateVal} className='booking-input home' type='date' placeholder='Date'/>
                        <input name="time"   onChange={timeVal} className='booking-input home' type='time' placeholder='time'/>
                        <input name="room" onChange={roomVal}  className='booking-input home' type='number' placeholder='room'/>

                        <button className='primary-btn' id='btn' onClick={handleSubmit}>Book appointment</button>
                    </div>
                  
                </form>
            </div>
        </div>
    );
};

export default MakeBooking;