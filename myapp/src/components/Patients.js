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

const Patients = (props) => {

    useEffect(() => {
        const link = document.querySelector("link[rel~='icon']");
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = {Logo};
      }, []);
    
       //  handleAddClient
       const [isShown, setIsShown] = useState(false);

 

     //show clients
  
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
      let renderClientInfo = data.map((item) =>  <ClientItem key={item.id} rerender={setRenderClientInfo} uniqueId={item.id} name={item.name} surname={item.surname} petName={item.petName} petType={item.petType} />);
      console.log(data);
      setClients(renderClientInfo);
      setRenderClientInfo(false);
      
    })
    .catch(err=>{
      console.log(err);
    });

 },[renderClientInfo]);

 const [modal, setModal] = useState();

 //  handleAddDoc


 const handleAddClient = (event) => {
 
    event.preventDefault();
    setModal(<AddClient upRender={props.rerender} rerender={setModal}/>)

};


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

            <div className='middle-pannel-client'>
                <div className='edit-icon'><UilEdit/></div>
            <div className='client-block main'>  <img className='client-block-img main' src={pet}/></div>
            <div className='client-maintext one'>  
                <h1>{props.petName}</h1>
                <h3>{props.petType}</h3>
                {/* <div className='special'>Surgury</div> */}
            </div>
             
            <div className='client-info main'>
                <h2>Pet Details</h2>
                <h4>Details on clients pet</h4>
                <table className='general-info two'>
                    <tbody>
                    <tr>
                        <th>Breed</th>
                        <td>{props.petType}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{props.petGender}</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>{props.petAge}</td>
                    </tr>
                    </tbody>
                </table>
                <hr className='devider-line'/>
                <div className='client-info two'>
                    <h2>Appointment History</h2>
                    <h4>All previous appointments listed bellow.</h4>

                    <div className='appointments-holder'>

                    <table className='appointments-table two'>
                        <tbody>
                        <tr className='row-heading'>
                            <th>Doctor</th>
                            <th>Patient</th>
                            <th>Time</th>
                            <th>Room</th>
                        </tr>
                        <tr className='individual-appointment'>
                            <td>Dr S. Smith</td>
                            <td>Jason Craig</td>
                            <td>08:30 am</td>
                            <td>341</td>
                        </tr>
                        <tr className='individual-appointment'>
                            <td>Dr S. Smith</td>
                            <td>Jason Craig</td>
                            <td>08:30 am</td>
                            <td>341</td>
                        </tr>
                        <tr className='individual-appointment'>
                            <td>Dr S. Smith</td>
                            <td>Jason Craig</td>
                            <td>08:30 am</td>
                            <td>341</td>
                        </tr>
                        <tr className='individual-appointment'>
                            <td>Dr S. Smith</td>
                            <td>Jason Craig</td>
                            <td>08:30 am</td>
                            <td>341</td>
                        </tr>
                        <tr className='individual-appointment'>
                            <td>Dr S. Smith</td>
                            <td>Jason Craig</td>
                            <td>08:30 am</td>
                            <td>341</td>
                        </tr>
                        </tbody>
                    </table>

                    </div>
                </div>
                {/* <button className='primary-btn vet'>Edit</button> */}
            </div>


            </div>

            <img className='dog' src={dog}/>

            <div className='right-pannel-client'>
                <div className='edit-icon client'><UilEdit/></div>
            <div className='client-maintext two'>  
                <h1 className='owner-name'>{props.name + " " + props.surname}</h1>
                <h3>Owner</h3>
            </div>
            <div className='client-info'>
            <h2>Contact Details</h2>
                <h4>Client details which concern the practice</h4>
                <table className='general-info two'>
                    <tbody>
                    <tr>
                        <th>Email</th>
                        <td>{props.email}</td>
                    </tr>
                    <tr>
                        <th>Telephone</th>
                        <td>{props.phoneNumber}</td>
                    </tr>
                    <tr>
                        <th>Patient Id</th>
                        <td>{props.clientId}</td>
                    </tr>
              
                    </tbody>
                </table>
            </div>
             <hr className='devider-line'/>

             <div className='client-info two'>
            <h2>Medical Details</h2>
                <h4>Insurance related</h4>
                <table className='general-info two'>
                <tbody>
                    <tr>
                        <th>Medical Aid Number</th>
                        <td>{props.medicalAidNum}</td>
                    </tr>
                    <tr>
                        <th>Id Number</th>
                        <td>{props.clientId}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            
                {/* <button className='primary-btn vet'>Edit</button> */}
            </div>


           


        
            
        </div>
    );
};

export default Patients;