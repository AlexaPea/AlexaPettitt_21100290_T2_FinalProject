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
    

      //show specific doctors


      const user = sessionStorage.getItem('activeUser');

      const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser'),
    });
    
    

const [state, setState] = useState();
const showVetInfo = (event) => {

    event.currentTarget.classList.toggle('bg-salmon');
 
    let id = (event.currentTarget.id);
    console.log(id);

    axios.post('http://localhost:80/project-api/readActiveDoctor.php',userId )
    .then((res)=>{
      let data = res.data;
        setState(data);
        state.map((data,index)=><DoctorInfo key={index} name={data.name} surname={data.surname} specialization={data.specialization} />)

        console.log(data)

        })
        .catch(err=>{
        console.log(err);
        });
}
  
    return (
        <div>
    
             <button  onClick={(e)=>{showVetInfo(e)}}  className='individual-vet' id={props.uniqueId}   >
                     <div className='vet-block-img'>  <img className='profileImg vet' src={dp}/></div>
                     <div className='vet-block-text'>
                         <h2>Dr. {props.name + " " + props.surname}</h2>
                         <h4>{props.specialization}</h4>
                     </div>
                </button>
            
        </div>
    );
};

export default VetItem;