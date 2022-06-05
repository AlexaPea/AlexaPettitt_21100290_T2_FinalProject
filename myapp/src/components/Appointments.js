import React from 'react';
import wave from '../Images/wave.png';
import dp from '../Images/placeholder.jpg';
import headImg from '../Images/headerImg2.png';
import searchIcon from "../Images/search_icon.svg";
import Navigation from './Navigation';
import Calendar from './Calendar';
import { UilPlus } from '@iconscout/react-unicons'
import { useState, useEffect } from 'react'
import Logo from '../Images/logo.png';
import Helmet from "react-helmet";


const Appointments = (props) => {

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
        <div>
         <Helmet>
            <title>Appointments</title>
            <link rel="icon" href={Logo}/>
         </Helmet>
         
            <Navigation/>
            

            <div className='left-panel'>
            <div className='row1'>
                <div className='greetiing'>
                    <h1 className='greeting-head'> Hello Jessica </h1>
                    <h2 className='greeting-msg'> Have a nice day at work </h2>
                    <div className='.wave-container'>
                        <img className='wave' src={wave}/>
                    </div>
                    <div className="search"><input type="text" placeholder="Search..."/><img src={searchIcon}/></div>  
                    
                    
                    

                </div>
            </div>

            <div className='row2'>
                <div className='block one'>
                <img className='headerimg' src={headImg}/>
                </div>

                {/* <div className='block two'>
                    <h1 className='block-head'> 00 </h1>
                    <hr/>
                    <h2 className='block-text'> Doctors On Duty </h2>
                </div> */}

                <div className='block three'>
                    <h1 className='block-head'> 00 </h1>
                    <hr/>
                    <h2 className='block-text'> Appointments </h2>
                </div>
            </div>

            <div className='row3'>
                <div className='calendar'>
                    <div className='block-heading' id='calendar-heading'> Calendar </div>
                    <Calendar/>

                </div>
                <div className='appointments'>
                    <div className='block-heading'> Appointments </div>
                    <button class='addBtn' id="btn"><div className='plus-icon'><UilPlus/></div></button>
                    <table className='appointments-table'>
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
                    </table>

                </div>
            </div>




            </div>

            
                   
            <div className='right-panel'>
           
                <div className='profile'>
                <img className='profileImg' src={dp}/>
                    <div className='profileHeading'> 
                        <div className='addButton'></div>
                    
                    </div>
                    <div className='profileInfo'>
                        
                        <div className='text'>
                            <h3>Jessica Jones</h3>
                            <p>Receptionist</p>
                            <p>Rank</p>
                            
                        </div>

                        <button className='primary-btn' id='btn'>Log Out</button>
                        {/* <table className='reception'>
                            <tr>
                                <td>balh</td>
                                <td>balh</td>
                                <td>balh</td>
                            </tr>
                        </table> */}
                    </div>
                </div>

                <div className='tasks'>
                    <h1 className='tasks-head'>Tasks</h1>
                    <button class='addBtn tasks' id="btn"><div className='plus-icon'><UilPlus/></div></button>
                    <div className='task-container'>
                        <div className='individual-task'>
                            <h5>Email Mrs Poter</h5>
                            <p>Regarding invoice</p>

                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='appointments-form'>
                <form>
                    <div className='heading'>
                        <h1>Make booking</h1>
                        <h3>Let's get this clients pet booked!</h3>

                    </div>

                    <div className='new-book-container'>
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
                  
                </form>
            </div>
            
        </div>
    );
};

export default Appointments;