import React from 'react';
import dp from '../Images/placeholder.jpg';
import DoctorInfo from './DoctorInfo';
import axios from 'axios';
import {UilEdit , UilArrowDown } from '@iconscout/react-unicons';
import Navigation from './Navigation';
import Logo from '../Images/logo.png';
import { useState, useEffect } from 'react';
import Doctors from './Doctors';


const VetItem = (props) => {
    
//=============================================================================
// Declaring Variables
//=============================================================================

 const user = sessionStorage.getItem('activeUser');

const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser'),
    });
const [state, setState] = useState();
const [activeVet, setActiveVet] = useState();
const [itemId, setItemId] = useState();
const [renderActiveVet, setRenderActiveVet] = useState(true);

const [inputs, setInputs] = useState({
    userId: sessionStorage.getItem('activeUser'),
    itemId:'',
});

//=============================================================================
// Onclick event to show vet
//=============================================================================

const showVetInfo = (event) => {
 
    
    //Toggles colour
    //document.classList.remove('bg-salmon');
    //event.currentTarget.classList.toggle('bg-salmon');
 
    event.preventDefault();
    setRenderActiveVet(false);
   
    //set Id to id of clicked div
    let id = event.currentTarget.id;
    setItemId(event.currentTarget.id);
    console.log(id);

    let value = event.currentTarget.id;
    console.log(value);
    setInputs({...inputs, itemId: value});
    console.log(inputs);
    //if first input is empty, set error message to nothing
    if(inputs.itemId == ''){console.log("no id")}

    //read clicked doctor
    axios.post('http://localhost:80/project-api/readActiveDoctor.php',inputs)
    .then((res)=>{
    let data = res.data;
    //render clicked doctors card
    setActiveVet(data.map((item) =>  <DoctorInfo key={item.id} rerender={setRenderActiveVet} uniqueId={item.id} name={item.name} surname={item.surname} specialization={item.specialization} age={item.age} gender={item.gender} email={item.email} contact={item.phoneNumber} doctorId={item.doctorId} room={item.room} profileImg={item.profileImage} />)) 
    // console.log(data);

      })
      .catch(err=>{
        console.log(err);
      });



}//end of onClick



//=============================================================================
// set colour of clicked doctor card
//=============================================================================
    const [activeItem, setActiveItem] = useState(0);
    
   
    const [activeButton, setActiveButton] = useState();

//=============================================================================
//Attempt to render image on vetItem
//=============================================================================
const [renderImage, setRenderImage] = useState();
useEffect(()=>{

    
    console.log(props.profileImage)
    let source = props.profileImage;
    let renderpath = 'http://localhost:80/project-api/' + source;
    setRenderImage(renderpath);

 },[]);


   
//=============================================================================
// html code
//=============================================================================
  
    return (
        
        <div className='vet'>
            <button  onClick={(e)=>{showVetInfo(e)}} className={activeButton === ("1") && "active"} data-value={props.uniqueId} id={props.uniqueId}   >
            <div className='individual-vet' id={props.uniqueId}  >
             
                     <div className='vet-block-img'>  <img className='profileImg vet' src={renderImage}/></div>
                     <div className='vet-block-text'>
                         <h2>Dr. {props.name + " " + props.surname}</h2>
                         <h4>{props.specialization}</h4>
                     </div>
                </div>
                </button>
                <div className='docInfoComp'>

                {activeVet}    
                </div>
               
        </div>
    );
};

export default VetItem;