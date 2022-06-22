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
    
    
      const [renderActiveVet, setRenderActiveVet] = useState();
      const [activeVet, setActiveVet] = useState();
    const [isActive, setIsActive] = useState(false);

    const showVetInfo = (event) => {
        event.currentTarget.classList.toggle('bg-salmon');

        axios.post('http://localhost:80/project-api/readActiveDoctor.php', 5 )
        .then((res)=>{
          let data = res.data;
          let renderActiveVet = data.map((item) =>  <Doctors key={item.id} rerender={setRenderActiveVet} uniqueId={item.id} name={item.name} surname={item.surname} specialization={item.specialization} age={item.age} gender={item.gender} email={item.email} contact={item.phoneNumber} doctorId={item.doctorId} room={item.room} />);
        //   console.log(data);
        //   setActiveVet(renderActiveVet);
        //   setRenderActiveVet(false);
          
        })
        .catch(err=>{
          console.log(err);
        });


    }


  
//   useEffect(()=>{

     
//     axios.post('http://localhost:80/project-api/readActiveDoctor.php',userId )
//     .then((res)=>{
//       let data = res.data;
//       let renderActiveVet = data.map((item) =>  <Doctors key={item.id} rerender={setRenderActiveVet} uniqueId={item.id} name={item.name} surname={item.surname} specialization={item.specialization} age={item.age} gender={item.gender} email={item.email} contact={item.phoneNumber} doctorId={item.doctorId} room={item.room} />);
//       console.log(data);
//       setActiveVet(renderActiveVet);
//       setRenderActiveVet(false);
      
//     })
//     .catch(err=>{
//       console.log(err);
//     });

//  },[renderActiveVet]);

    return (
        <div>
             <button  onClick={showVetInfo} className='individual-vet' id={props.uniqueId}   >
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