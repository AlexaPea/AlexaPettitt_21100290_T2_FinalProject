import React from 'react';
import dp from '../Images/placeholder.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ClientInfo from './ClientInfo';

const ClientItem = (props) => {
    
//=============================================================================
// Declaring Variables
//=============================================================================

 const user = sessionStorage.getItem('activeUser');

 const [userId, setUserId] = useState({
         activeUser: sessionStorage.getItem('activeUser'),
     });
 const [state, setState] = useState();
 const [activeClient, setActiveClient] = useState();
 const [itemId, setItemId] = useState();
 const [renderActiveClient, setRenderActiveClient] = useState(true);
 
 const [inputs, setInputs] = useState({
     userId: sessionStorage.getItem('activeUser'),
     itemId:'',
 });
 
 //=============================================================================
 // Onclick event to show vet
 //=============================================================================
 
 const showClient = (event) => {
  
     
        //Toggles colour
    //document.classList.remove('bg-salmon');
    //event.currentTarget.classList.toggle('bg-salmon');
    event.preventDefault();
    setRenderActiveClient("true");
    setActiveClient() ;
    
    
   
    //set Id to id of clicked div
    let id = event.currentTarget.id;
    setItemId(event.currentTarget.id);
    //console.log(id);

    let value = event.currentTarget.id;
   //console.log(value);
    setInputs({...inputs, itemId: value});
    //console.log(inputs);
    //if first input is empty, set error message to nothing
    //if(inputs.itemId == ''){console.log("no id")}
 
     //read clicked doctor
     axios.post('http://localhost:80/project-api/readActiveClient.php',inputs)
     .then((res)=>{
     let data = res.data;
     //render clicked doctors card
     setRenderActiveClient(true);
     setActiveClient(data.map((item) =>  <ClientInfo key={item.id} rerender={setRenderActiveClient} uniqueId={item.id} name={item.name} surname={item.surname} petName={item.petName} petType={item.petType} petAge={item.petAge} petGender={item.petGender} email={item.email} contact={item.phoneNumber} clientId={item.clientId} medicalAidNum={item.medicalAidNum} profileImg={item.profileImage} petImage={item.petImage} />)) 
     // console.log(data);
 
       })
       .catch(err=>{
         console.log(err);
         setRenderActiveClient(true);
       });
 
 
 
 }//end of onClick
 
 
 
 //=============================================================================
 // set colour of clicked doctor card
 //=============================================================================
  
     
    
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


    return (
        
        <div className='vet'>
        <button  onClick={(e)=>{showClient(e)}} className={activeButton === ("1") && "active"} data-value={props.uniqueId} id={props.uniqueId}   >
        <div className='individual-client' id={props.uniqueId}  >
         
                 <div className='client-block-img'>  <img className='profileImg client' src={renderImage}/></div>
                 <div className='client-block-text'>
                     <h2>{props.name + " " + props.surname}</h2>
                     <h4>{props.petType} | {props.petName}</h4>
                 </div>
            </div>
            </button>
            <div className='docInfoComp client'>
        
            {activeClient}    
            </div>
           
        </div>
    );
};

export default ClientItem;

