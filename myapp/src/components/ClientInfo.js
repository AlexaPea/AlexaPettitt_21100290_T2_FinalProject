import React from 'react';
import {UilEdit , UilArrowDown } from '@iconscout/react-unicons';
import dog from '../Images/dog.png';
import { useState, useEffect } from 'react';
import { UilTrashAlt } from '@iconscout/react-unicons'
import ClientAppointments from './ClientAppointments';
import axios from 'axios';
import DeleteClientModal from './DeleteClientModal';
import EditClient from './EditClient';

const ClientInfo = (props) => {


    const [renderImage, setRenderImage] = useState();
    useEffect(()=>{
    
        
        console.log(props.petImage)
        let source = props.petImage;
        let renderpath = 'http://localhost:80/project-api/' + source;
        setRenderImage(renderpath);
    
     },[]);


/////////////////////////Read appoinyments

//=============================================================================
// Render all tasks
//=============================================================================

const [renderClientAp, setRenderClientAp] = useState();
const [clientAps, setClientAps] = useState();
//const [clientId, setClientId] = useState(props.name + " " + props.surname);
//const [clientId, setClientId] = useState("Chelsea Schmoop");

const [clientId, setClientId] = useState({
    name: (props.name + " " + props.surname),
});


const user = sessionStorage.getItem('activeUser');

useEffect(()=>{

  axios.post('http://localhost:80/project-api/readClientAps.php',clientId )
  .then((res)=>{
    let data = res.data;
    let renderClientAp = data.map((item) =>  <ClientAppointments key={item.id} rerender={setRenderClientAp} uniqueId={item.id} vet={item.vet} client={props.petName} time={item.time} aDate={item.date} room={item.room}  />);
  //   console.log(data);
  setClientAps(renderClientAp);
  setRenderClientAp(false);
    
  })
  .catch(err=>{
    console.log(err);
  });

},[]);

 //=============================================================================
// Delete client
//=============================================================================

const [deleteClientModal, setDeleteClientModal] = useState();

const deleteClient = () => {
  
    setDeleteClientModal(<DeleteClientModal upRender={props.rerender} rerender={setDeleteClientModal} id={props.uniqueId} />);
    //  props.rerender();
  };

 
//=============================================================================
// Edit Client
//=============================================================================

const [modal, setModal] = useState();

const editClient = () => {
    console.log("clicked");
    setModal(<EditClient upRender={props.rerender} rerender={setModal} name={props.name} surname={props.surname} id={props.uniqueId} petName={props.petName} petType={props.petType} petGender={props.petGender} petAge={props.petAge} email={props.email} contact={props.contact} clientId={props.clientId} medicalAidNum={props.medicalAidNum} />)
   
};

   

    return (
        <div>
            {modal}
            {deleteClientModal}
                  <div className='middle-pannel-client'>
                <div className='edit-icon' onClick={editClient}><UilEdit/></div>
            <div className='client-block main'>  <img className='client-block-img main' src={renderImage}/></div>
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
                            <th>Client</th>
                            <th>Time</th>
                            <th>Room</th>
                        </tr>

                        {clientAps}
                        
                        </tbody>
                    </table>

                    </div>
                </div>
                {/* <button className='primary-btn vet'>Edit</button> */}
                <button className='deleteVet client button' onClick={deleteClient}><div className='trash'><UilTrashAlt/></div>Would you like to delete this Client?</button>
            </div>


            </div>

            <img className='dog' src={dog}/>

            <div className='right-pannel-client two'>
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
                        <td>{props.contact}</td>
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

export default ClientInfo;