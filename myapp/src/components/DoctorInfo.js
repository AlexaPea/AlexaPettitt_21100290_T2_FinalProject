import React from 'react';
import dp from '../Images/placeholder.jpg';
import {UilEdit , UilArrowDown } from '@iconscout/react-unicons';
import Navigation from './Navigation';
import Logo from '../Images/logo.png';
import { useState, useEffect } from 'react'
import Helmet from "react-helmet";
import VetItem from './VetItem';
import EditDoctor from './EditDoctor';
import DeleteVetModal from './DeleteVetModal';
import { UilTrashAlt } from '@iconscout/react-unicons'


const DoctorInfo = (props) => {
   
    

    const [renderImage, setRenderImage] = useState();
useEffect(()=>{

    
    console.log(props.profileImg)
    let source = props.profileImg;
    let renderpath = 'http://localhost:80/project-api/' + source;
    setRenderImage(renderpath);

 },[]);

 //=============================================================================
// Delete vet
//=============================================================================

const [deleteVetModal, setDeleteVetModal] = useState();

const deleteVet = () => {
  
    setDeleteVetModal(<DeleteVetModal upRender={props.rerender} rerender={setDeleteVetModal} id={props.uniqueId} />);
    //  props.rerender();
  }

 

//=============================================================================
// Edit Doctor
//=============================================================================

const [modal, setModal] = useState();

const editDoctor = () => {
    console.log("clicked");
    setModal(<EditDoctor upRender={props.rerender} rerender={setModal} name={props.name} surname={props.surname} id={props.uniqueId} specialization={props.specialization} gender={props.gender} age={props.age} email={props.email} contact={props.contact} doctorId={props.doctorId} room={props.room} docImg={'http://localhost:80/project-api/' + props.profileImg}/>)
    console.log('http://localhost:80/project-api/' + props.profileImg);
}

   
//=============================================================================
// HTML Code - doctor info
//=============================================================================
    return (
        <div>
            {modal}
            {deleteVetModal}
                 <div className='middle-pannel vetInfo'>
                <div className='edit-icon' onClick={editDoctor}><UilEdit/></div>
            <div className='vet-block main'>  <img className='vet-block-img main' src={renderImage}/></div>
            <div className='vet-maintext'>  
                <h1>Dr. {props.name + " " + props.surname}</h1>
                <h3>Vetenarian</h3>
                <div className='special'>{props.specialization}</div>
            </div>
            <div className='vet-info'>
                <h2 className='start-heading'>Bio</h2>
                <h4>Doctors general information</h4>
                <table className='general-info first'>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{props.name}</td>
                    </tr>
                    <tr>
                        <th>Surname</th>
                        <td>{props.surname}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{props.gender}</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>{props.age}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
             <hr className='devider-line'/>
            <div className='vet-info two'>
                <h2>Details</h2>
                <h4>Doctors details which concern the practice</h4>
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
                        <th>Password</th>
                        <td>*****</td>
                    </tr>
                    <tr>
                        <th>Doctor Id</th>
                        <td>{props.doctorId}</td>
                    </tr>
                    <tr>
                        <th>Room</th>
                        <td>{props.room}</td>
                    </tr>
                    </tbody>
                </table>
                {/* <button className='primary-btn vet'>Edit</button> */}
            </div>
            <button className='deleteVet button' onClick={deleteVet}><div className='trash'><UilTrashAlt/></div>Would you like to delete this Client?</button>


            </div>
         
            
        </div>
    );
};

export default DoctorInfo;