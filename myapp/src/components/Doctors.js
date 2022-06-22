import React from 'react';
import searchIcon from "../Images/search_icon.svg";
import dp from '../Images/placeholder.jpg';
import family from '../Images/family.png';
import {UilEdit , UilArrowDown } from '@iconscout/react-unicons';
import Navigation from './Navigation';
import Logo from '../Images/logo.png';
import { useState, useEffect } from 'react'
import Helmet from "react-helmet";
import { UilPlus } from '@iconscout/react-unicons';
import AddDoctor from './AddDoctor';
import axios from 'axios';
import VetItem from './VetItem';
import DoctorInfo from './DoctorInfo';
import { useNavigate } from 'react-router-dom';


const Doctors = (props) => {

    useEffect((props) => {
        const link = document.querySelector("link[rel~='icon']");
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = {Logo};
      }, []);


        //  handleAddDoc
        const [isShown, setIsShown] = useState(false);

        const handleAddDoc = (event) => {
        
         setIsShown(current => !current);
    
      };


      //show all doctors


  const [renderVetInfo, setRenderVetInfo] = useState();
  const [vets, setVets] = useState();

  const user = sessionStorage.getItem('activeUser');

  const [userId, setUserId] = useState({
    activeUser: sessionStorage.getItem('activeUser'),
});

  useEffect(()=>{

    axios.post('http://localhost:80/project-api/readDoctors.php',userId )
    .then((res)=>{
      let data = res.data;
      let renderVetInfo = data.map((item) =>  <VetItem key={item.id} rerender={setRenderVetInfo} uniqueId={item.id} name={item.name} surname={item.surname} specialization={item.specialization}  />);
      console.log(data);
      setVets(renderVetInfo);
      setRenderVetInfo(false);
      
    })
    .catch(err=>{
      console.log(err);
    });

 },[renderVetInfo]);


 //Add Booking
      //get active user
      const Navigate = useNavigate();
  

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


  const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(inputs); //error check

    //   if(inputs.taskName === ''){
    //       setTaskNameError(<MiniModalLeft message="Please add task name"/>);
    //   }else{
    //       setTaskNameError();
    //   }
     

      //checks if some of the input values are equal to nothing
      let result = Object.values(inputs).some(o => o === "");

      if(result){
          console.log("There is an Error");
      }else{
          axios.post('http://localhost:80/project-api/makeBooking.php', inputs)
          .then(function(response){
              console.log(response);

              if(response.status === 200){
                 console.log("Booking has been made!");
                  setIsShown(current => !current);
                 Navigate('/Doctors');
              }else{
                  console.log('error');
              }

          });
      }

    
  }





    return (
        <div className='vet-page'>
           
          {/* 👇️ show component on click */}
          {/* {isShown && <addDoctor />} */}
        
            <Helmet>
                <title>Vets</title>
                <link rel="icon" href={Logo}/>
            </Helmet>
            <Navigation/>
           
            <br/>
            <div className='left-list'>
            {/* 👇️ show component on click */}
          {isShown && <AddDoctor />}
            
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
{/* 
            <img className='bottom-dog' src={dog}/>
             */}
                
                
            </div>

       
            {/* {props.modal} */}
            <DoctorInfo/>

            

            <div className='img-holder'>
                    <img className='family' src={family}/>
            </div>

            <div className='right-pannel'>
               
                <div className='book-option'>
                    <h3>New Booking</h3>
                    <div className='book-container'>
                        <input onChange={vetNameVal} name="vet" list="docList" className='booking-input' type='text' placeholder='doctor'/>
                        <datalist id="docList">
                            <option value="Sarah"/>
                            <option value="Josh"/>
                            <option value="Daina"/>
                            <option value="Tanielle"/>
                            <option value="Tony"/>
                        </datalist>
                        <input onChange={clientNameVal} name="client" list="clientList" className='booking-input' type='text' placeholder='client'/>
                        <datalist id="clientList">
                            <option value="Sarah"/>
                            <option value="Josh"/>
                            <option value="Daina"/>
                            <option value="Tanielle"/>
                            <option value="Tony"/>
                        </datalist>
                        <input name="date" onChange={dateVal} className='booking-input' type='date' placeholder='Date'/>
                        <input name="time" onChange={timeVal} className='booking-input' type='time' placeholder='time'/>
                        <input name="room" onChange={roomVal} className='booking-input' type='number' placeholder='room'/>

                        <button className='primary-btn' id='btn' onClick={handleSubmit}>Book appointment</button>
                    </div>

                </div>
                
            </div>
            
        </div>
    );
};

export default Doctors;