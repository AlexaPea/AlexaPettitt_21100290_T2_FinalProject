import React from 'react';
import dp from '../Images/placeholder.jpg';
import DoctorInfo from './DoctorInfo';
import axios from 'axios';
import {UilEdit , UilArrowDown } from '@iconscout/react-unicons';
import Navigation from './Navigation';
import Logo from '../Images/logo.png';
import { useState, useEffect } from 'react';
import Doctors from './Doctors';


const activeButton = {color: 'green'}
const inactive = {}


const VetItem = (props) => {
    



  

      const user = sessionStorage.getItem('activeUser');

      const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser'),
    });
    
    

const [state, setState] = useState();
const [activeVet, setActiveVet] = useState();
const [itemId, setItemId] = useState();
const [renderActiveVet, setRenderActiveVet] = useState();
const showVetInfo = (event) => {

    // event.currentTarget.classList.toggle('bg-salmon');
 
    let id = (event.currentTarget.id);
    setItemId(id);
  
    console.log(id);

    axios.post('http://localhost:80/project-api/readActiveDoctor.php',itemId )
    .then((res)=>{
    let data = res.data;
    setActiveVet(data.map((item) =>  <DoctorInfo key={item.id} rerender={setRenderActiveVet} uniqueId={item.id} name={item.name} surname={item.surname} specialization={item.specialization} age={item.age} gender={item.gender} email={item.email} contact={item.phoneNumber} doctorId={item.doctorId} room={item.room} />)) 
    
         console.log(data);
      //   setActiveVet(renderActiveVet);
      //   setRenderActiveVet(false);
    
      })
      .catch(err=>{
        console.log(err);
      });
}
    //show specific doctors
    const [activeItem, setActiveItem] = useState(0);
    const handleClick = (itemId) => () => {
      setActiveItem(itemId);
      console.log("active "+ itemId)
    };

    const [activeButton, setActiveButton] = useState();

    useEffect(() => {
        //creates placeholder information
        changeTimeLine('1');
    }, [])
    

    function changeTimeLine(value){
        setActiveButton(value) //update your current active button state 
    }
// console.log(itemId);

axios.post('http://localhost:80/project-api/readActiveDoctor.php',itemId )
.then((res)=>{
let data = res.data;
setActiveVet(data.map((item) =>  <DoctorInfo key={item.id} rerender={setRenderActiveVet} uniqueId={item.id} name={item.name} surname={item.surname} specialization={item.specialization} age={item.age} gender={item.gender} email={item.email} contact={item.phoneNumber} doctorId={item.doctorId} room={item.room} />)) 

    //  console.log(data);
  //   setActiveVet(renderActiveVet);
  //   setRenderActiveVet(false);

  })
  .catch(err=>{
    console.log(err);
  });
  
    return (
        
        <div>
            <div onClick={(e)=>{showVetInfo(e)}}  className='individual-vet' id={props.uniqueId}  >
             <div className={`OptionButton ${activeButton === itemId && "activeOp"}`} value={itemId} onClick={e => changeTimeLine(e.target.value)}   >
                     <div className='vet-block-img'>  <img className='profileImg vet' src={dp}/></div>
                     <div className='vet-block-text'>
                         <h2>Dr. {props.name + " " + props.surname}</h2>
                         <h4>{props.specialization}</h4>
                     </div>
                </div>
                </div>
                <div className='docInfoComp'>

                {activeVet}    
                </div>
               
        </div>
    );
};

export default VetItem;