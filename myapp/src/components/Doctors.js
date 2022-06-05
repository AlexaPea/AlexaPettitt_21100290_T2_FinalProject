import React from 'react';
import searchIcon from "../Images/search_icon.svg";
import dp from '../Images/placeholder.jpg';
import family from '../Images/family.png';
import {UilEdit , UilArrowDown } from '@iconscout/react-unicons';
import Navigation from './Navigation';
import Logo from '../Images/logo.png';
import { useState, useEffect } from 'react'

const Doctors = (props) => {

    useEffect(() => {
        const link = document.querySelector("link[rel~='icon']");
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = {Logo};
      }, []);


    return (
        <div className='vet-page'>
                <Navigation/>
            <br/>
            <div className='left-list'>
                <h3>Search Vet in PetCare</h3>
            <div className="search vet"><input type="text" placeholder="Search..."/><img src={searchIcon}/></div>  
            <small>Showing 00 Doctors</small>
            <div className='order'>
                <div className='down-arrow'><UilArrowDown/></div>
                <div className='order-text'>A-Z</div>
                </div>
            <div className='vets-container'>
                <div className='individual-vet'>
                     <div className='vet-block-img'>  <img className='profileImg vet' src={dp}/></div>
                     <div className='vet-block-text'>
                         <h2>Dr. Sam Smith</h2>
                         <h4>Speciality</h4>
                     </div>
                </div>

                <div className='individual-vet'>
                     <div className='vet-block-img'>  <img className='profileImg vet' src={dp}/></div>
                     <div className='vet-block-text'>
                         <h2>Dr. Sam Smith</h2>
                         <h4>Speciality</h4>
                     </div>
                </div>
                <div className='individual-vet'>
                     <div className='vet-block-img'>  <img className='profileImg vet' src={dp}/></div>
                     <div className='vet-block-text'>
                         <h2>Dr. Sam Smith</h2>
                         <h4>Speciality</h4>
                     </div>
                </div>
                <div className='individual-vet'>
                     <div className='vet-block-img'>  <img className='profileImg vet' src={dp}/></div>
                     <div className='vet-block-text'>
                         <h2>Dr. Sam Smith</h2>
                         <h4>Speciality</h4>
                     </div>
                </div>
                <div className='individual-vet'>
                     <div className='vet-block-img'>  <img className='profileImg vet' src={dp}/></div>
                     <div className='vet-block-text'>
                         <h2>Dr. Sam Smith</h2>
                         <h4>Speciality</h4>
                     </div>
                </div>
                <div className='individual-vet'>
                     <div className='vet-block-img'>  <img className='profileImg vet' src={dp}/></div>
                     <div className='vet-block-text'>
                         <h2>Dr. Sam Smith</h2>
                         <h4>Speciality</h4>
                     </div>
                </div>
                <div className='individual-vet'>
                     <div className='vet-block-img'>  <img className='profileImg vet' src={dp}/></div>
                     <div className='vet-block-text'>
                         <h2>Dr. Sam Smith</h2>
                         <h4>Speciality</h4>
                     </div>
                </div>
            </div>
{/* 
            <img className='bottom-dog' src={dog}/>
             */}
                
                
            </div>

            <div className='middle-pannel'>
                <div className='edit-icon'><UilEdit/></div>
            <div className='vet-block main'>  <img className='vet-block-img main' src={dp}/></div>
            <div className='vet-maintext'>  
                <h1>Dr. Sam Smith</h1>
                <h3>Vetenarian</h3>
                <div className='special'>Surgury</div>
            </div>
            <div className='vet-info'>
                <h2 className='start-heading'>Bio</h2>
                <h4>Doctors general information</h4>
                <table className='general-info first'>
                    <tr>
                        <th>Name</th>
                        <td>Sam</td>
                    </tr>
                    <tr>
                        <th>Surname</th>
                        <td>Smith</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>Female</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>35</td>
                    </tr>
                </table>
            </div>
             <hr className='devider-line'/>
            <div className='vet-info two'>
                <h2>Details</h2>
                <h4>Doctors details which concern the practice</h4>
                <table className='general-info two'>
                    <tr>
                        <th>Email</th>
                        <td>Sam@petcare.co.za</td>
                    </tr>
                    <tr>
                        <th>Telephone</th>
                        <td>0671674070</td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td>*****</td>
                    </tr>
                    <tr>
                        <th>Doctor Id</th>
                        <td>10528465</td>
                    </tr>
                    <tr>
                        <th>Room</th>
                        <td>1 35</td>
                    </tr>
                    
                </table>
                {/* <button className='primary-btn vet'>Edit</button> */}
            </div>


            </div>

            <div className='img-holder'>
                    <img className='family' src={family}/>
            </div>

            <div className='right-pannel'>
               
                <div className='book-option'>
                    <h3>New Booking</h3>
                    <div className='book-container'>
                        <input list="docList" className='booking-input' type='text' placeholder='doctor'/>
                        <datalist id="docList">
                            <option value="Sarah"/>
                            <option value="Josh"/>
                            <option value="Daina"/>
                            <option value="Tanielle"/>
                            <option value="Tony"/>
                        </datalist>
                        <input list="clientList" className='booking-input' type='text' placeholder='client'/>
                        <datalist id="clientList">
                            <option value="Sarah"/>
                            <option value="Josh"/>
                            <option value="Daina"/>
                            <option value="Tanielle"/>
                            <option value="Tony"/>
                        </datalist>
                        <input className='booking-input' type='date' placeholder='Date'/>
                        <input className='booking-input' type='time' placeholder='time'/>
                        <input className='booking-input' type='number' placeholder='room'/>

                        <button className='primary-btn' id='btn'>Book appointment</button>
                    </div>

                </div>
                
            </div>
            
        </div>
    );
};

export default Doctors;