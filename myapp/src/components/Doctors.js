import React from 'react';
import searchIcon from "../Images/search_icon.svg";
import dp from '../Images/placeholder.jpg';
import family from '../Images/family.png';
import {UilEdit , UilArrowDown } from '@iconscout/react-unicons';
import Navigation from './Navigation';
import Logo from '../Images/logo.png';
import docs from '../Images/docs.png';
import { useState, useEffect } from 'react'
import Helmet from "react-helmet";
import { UilPlus } from '@iconscout/react-unicons';
import AddDoctor from './AddDoctor';
import axios from 'axios';
import VetItem from './VetItem';
import DoctorInfo from './DoctorInfo';
import { useNavigate } from 'react-router-dom';


const Doctors = (props) => {

//=============================================================================
// Dynamically load favicon
//=============================================================================

    useEffect((props) => {
        const link = document.querySelector("link[rel~='icon']");
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = {Logo};
      }, []);


   


//=============================================================================
// Display doctor list
//=============================================================================


  const [vets, setVets] = useState();

  const user = sessionStorage.getItem('activeUser');

  const [userId, setUserId] = useState({
    activeUser: sessionStorage.getItem('activeUser'),
});


const [renderVetInfo, setRenderVetInfo] = useState();
const [renderVetNames, setRenderVetNames] = useState();
const [vetNames, setVetNames] = useState();
  useEffect(()=>{

    //render vet items
    axios.post('http://localhost:80/project-api/readDoctors.php',userId )
    .then((res)=>{
      let data = res.data;
      let id =data.id;
     // console.log(data[0].profileImage);
      let renderVetInfo = data.map((item) =>  <VetItem key={item.id} rerender={setRenderVetInfo} uniqueId={item.id} name={item.name} surname={item.surname} specialization={item.specialization} profileImage={item.profileImage}  />);
      let renderVetNames = data.map((item) =>  <option uniqueId={item.id} value={item.name + " " + item.surname} />);
      setVets(renderVetInfo);
      setVetNames(renderVetNames);
      setRenderVetInfo(false);
      
    })
    .catch(err=>{
      console.log(err);
    });

 },[renderVetInfo]);



  
//=============================================================================
// Add Booking
//=============================================================================
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
// Onclick submit booking
//=============================================================================

const Navigate = useNavigate();

  const handleSubmit = (e) =>{
      e.preventDefault();
      //console.log(inputs); //error check
      let result = Object.values(inputs).some(o => o === "");

      if(result){
          console.log("There is an Error");
      }else{
          axios.post('http://localhost:80/project-api/makeBooking.php', inputs)
          .then(function(response){
              console.log(response);

              if(response.status === 200){
                 console.log("Booking has been made!");
                 e.target.reset();
              }else{
                  console.log('error');
              }

          });
      }

    
  }

//=============================================================================
// Render Add Doc pop up
//=============================================================================

const [vetModal, setVetModal] = useState();

 const handleAddDoc = (event) => {
     
        event.preventDefault();
        setVetModal(<AddDoctor upRender={props.rerender} rerender={setVetModal}/>)
 
   };

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
  

//=============================================================================
// HTML Code
//=============================================================================

    return (
        <div className='vet-page'>
           
          {vetModal}
         
        
            <Helmet>
                <title>Vets</title>
                <link rel="icon" href={Logo}/>
            </Helmet>
            <Navigation/>
           
            <br/>
            <div className='left-list'>
    
            
            <button class='addBtn two' id="btn" onClick={handleAddDoc}><div className='plus-icon' ><UilPlus/></div></button>
                <h3>Search Vet in PetCare</h3>
            <div className="search vet"><input type="text" placeholder="Search..."/><img src={searchIcon}/></div>  
            <small>Showing 00 Doctors</small>
            <div className='order'>
                <div className='down-arrow'><UilArrowDown/></div>
                <div className='order-text'>A-Z</div>
                </div>
            <div className='vets-container'>
             {vets}
            </div>

                
            </div>
<div className='middle-holder'>
    <h1 className='waitHeading'>What Are You Waiting For!</h1>
    <h2 className='waitText'>Click on a Vet for More Information.</h2>
<img className='wait' src={docs}/>
</div>
       
            {/* {props.modal} */}
            {/* <DoctorInfo/> */}

            

            <div className='img-holder'>
                    <img className='family' src={family}/>
                
            </div>

            <div className='right-pannel'>
                <div id='myFormBook'>
               
                <div className='book-option'>
                    <h3>New Booking</h3>
                    <div className='book-container'>
                        <input onChange={vetNameVal} name="vet" list="docList" className='booking-input' type='text' placeholder='doctor'/>
                        <datalist id="docList">
                       {vetNames}
                        </datalist>
                        <input onChange={clientNameVal} name="client" list="clientList" className='booking-input' type='text' placeholder='client'/>
                        <datalist id="clientList">
                           {clients}
                        </datalist>
                        <input name="date" onChange={dateVal} className='booking-input' type='date' placeholder='Date'/>
                        <input name="time" onChange={timeVal} className='booking-input' type='time' placeholder='time'/>
                        <input name="room" onChange={roomVal} className='booking-input' type='number' placeholder='room'/>

                        <button className='primary-btn' id='btn' onClick={handleSubmit}>Book appointment</button>
                    </div>

                </div>
            </div>
                
            </div>
            
        </div>
    );
};

export default Doctors;