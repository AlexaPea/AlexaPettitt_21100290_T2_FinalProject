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
const [renderActiveVet, setRenderActiveVet] = useState();

const [inputs, setInputs] = useState({
    userId: {activeUser: sessionStorage.getItem('activeUser')},
    itemId:'',
});

//=============================================================================
// Onclick event to show vet
//=============================================================================

const showVetInfo = (event) => {
 
    
    //Toggles colour
    //document.classList.remove('bg-salmon');
    //event.currentTarget.classList.toggle('bg-salmon');
 
   
   
    //set Id to id of clicked div
    let id = (event.currentTarget.id);
    setItemId(event.currentTarget.id);
    console.log(id);

    const value = event.currentTarget.id;
    setInputs({...inputs, itemId: value});

    //if first input is empty, set error message to nothing
    if(inputs.itemId !== ''){console.log("no id")}

    //read clicked doctor
    axios.post('http://localhost:80/project-api/readActiveDoctor.php',userId )
    .then((res)=>{
    let data = res.data;
    //render clicked doctors card
    setActiveVet(data.map((item) =>  <DoctorInfo key={item.id} rerender={setRenderActiveVet} uniqueId={item.id} name={item.name} surname={item.surname} specialization={item.specialization} age={item.age} gender={item.gender} email={item.email} contact={item.phoneNumber} doctorId={item.doctorId} room={item.room} />)) 
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

    useEffect(()=>{

        //setActiveButton(itemId) //update your current active button state 
        // console.log(activeButton +" is active");
       
       }, [showVetInfo]);
    

//=============================================================================
//Attempt to render image on vetItem
//=============================================================================


  //const [renderImage, setRenderImage] = useState(props.image);

//   axios.post('http://localhost:80/project-api/readDoctors.php',userId )
//     .then((res)=>{
//       let data = res.data;
//       for(let i=0; i<data.length; i++){
//         let data = res.data;
//       console.log(data[i].profileImage);
//       let source = data[i].profileImage;
//       let renderpath = 'http://localhost:80/project-api/' + source;
//       setRenderImage(renderpath);

//       }


      
//     })
//     .catch(err=>{
//       console.log(err);
//     });



//=============================================================================
// html code
//=============================================================================
  
    return (
        
        <div className='vet'>
            <button  onClick={(e)=>{showVetInfo(e)}} className={activeButton === ("1") && "active"} data-value={props.uniqueId} id={props.uniqueId}   >
            <div className='individual-vet' id={props.uniqueId}  >
             
                     <div className='vet-block-img'>  <img className='profileImg vet' src={props.image}/></div>
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