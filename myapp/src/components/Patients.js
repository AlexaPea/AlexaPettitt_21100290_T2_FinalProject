import React from 'react';
import pet from '../Images/pet.jpg';
import {UilEdit , UilArrowDown } from '@iconscout/react-unicons';
import searchIcon from "../Images/search_icon.svg";
import dp from '../Images/placeholder.jpg';
import dog from '../Images/dog.png';
import Navigation from './Navigation';
import Logo from '../Images/logo.png';
import { useState, useEffect } from 'react';
import Helmet from "react-helmet";
import { UilPlus } from '@iconscout/react-unicons';
import AddClient from './AddClient';
import axios from 'axios';
import ClientItem from './ClientItem';
import waitPet from '../Images/waitPet.png';

const Patients = (props) => {

//=============================================================================
// Dynamically load favicon
//=============================================================================

    useEffect(() => {
        const link = document.querySelector("link[rel~='icon']");
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = {Logo};
      }, []);
    
 
//=============================================================================
// Output client list
//=============================================================================
  
  const [renderClientInfo, setRenderClientInfo] = useState();
  const [clients, setClients] = useState();

  const user = sessionStorage.getItem('activeUser');

  const [userId, setUserId] = useState({
    activeUser: sessionStorage.getItem('activeUser'),
});

  useEffect(()=>{

    axios.post('http://localhost:80/project-api/readClients.php',userId )
    .then((res)=>{
      let data = res.data;
      let renderClientInfo = data.map((item) =>  <ClientItem key={item.id} rerender={setRenderClientInfo} uniqueId={item.id} name={item.name} surname={item.surname} petName={item.petName} petType={item.petType} profileImage={item.profileImage}/>);
      console.log(data);
      setClients(renderClientInfo);
      setRenderClientInfo(false);
      
    })
    .catch(err=>{
      console.log(err);
    });

 },[renderClientInfo]);

 //=============================================================================
// Render add client pop up
//=============================================================================

 const [modal, setModal] = useState();

 const handleAddClient = (event) => {
 
    event.preventDefault();
    setModal(<AddClient upRender={props.rerender} rerender={setModal}/>)

};

//=============================================================================
// HTML code
//=============================================================================


    return (
        
        <div>

            <Helmet>
                <title>Clients</title>
                <link rel="icon" href={Logo}/>
            </Helmet>
            <Navigation/>
          
           {modal}

            <br/>
            <div className='left-list'>
            <button class='addBtn two' id="btn" onClick={handleAddClient}><div className='plus-icon' ><UilPlus/></div></button>
                <h3>Search client at PetCare</h3>
            <div className="search vet"><input type="text" placeholder="Search..."/><img src={searchIcon}/></div>  
            <small>Showing 00 Clients</small>
            <div className='order'>
                <div className='down-arrow'><UilArrowDown/></div>
                <div className='order-text'>A-Z</div>
                </div>
            <div className='clients-container'>
                {clients}

                
            </div>
            </div>

      {/* where info was taken */}
      <div className='middle-holder'>
        <h1 className='waitHeading'>The Informations Waiting!</h1>
        <h2 className='waitText'>Click on a Client for More Information.</h2>
    <img className='wait cat' src={waitPet}/>
    </div>

    <img className='dog' src={dog}/>

<div className='right-pannel-client'>
   
</div>
            
        </div>
    );
};

export default Patients;