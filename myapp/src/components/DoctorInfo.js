import React from 'react';
import dp from '../Images/placeholder.jpg';
import {UilEdit , UilArrowDown } from '@iconscout/react-unicons';
import Navigation from './Navigation';
import Logo from '../Images/logo.png';
import { useState, useEffect } from 'react'
import Helmet from "react-helmet";
import VetItem from './VetItem';





const DoctorInfo = (props) => {

    console.log(props.name);
    return (
        <div>
                 <div className='middle-pannel'>
                <div className='edit-icon'><UilEdit/></div>
            <div className='vet-block main'>  <img className='vet-block-img main' src={dp}/></div>
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


            </div>
            
        </div>
    );
};

export default DoctorInfo;