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
import { useNavigate } from 'react-router-dom';
import MakeBooking from './MakeBooking';
import AddTask from './AddTask';


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

    //  handleBooking
    const [isShownBooking, setIsShownBooking] = useState(false);
    const [isShownTask, setIsShownTask] = useState(false);

    const handleBooking = (event) => {
     
        setIsShownBooking(current => !current);
    
      };

      // show add task option

      const addTask = (event) => {
     
        setIsShownTask(current => !current);
    
      };
     

      //Logout
      const navigate = useNavigate();

      const setLogOut = (e) => {
   
        sessionStorage.clear();
    
        navigate('/Login');
    
    
      };
      //current date and time
      const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      
    return (
        <div>
             {/* 👇️ show component on click */}
            {isShownBooking && <MakeBooking />}

              {/* 👇️ show component on click */}
              {isShownTask && <AddTask />}

         <Helmet>
            <title>Appointments</title>
            <link rel="icon" href={Logo}/>
         </Helmet>
         
            <Navigation/>
            

            <div className='left-panel'>
            <div className='row1'>
                <div className='greetiing'>
                    <h1 className='greeting-head'>Dashboard</h1>
                    <h2 className='greeting-msg'>{date} </h2>
                 
                    <div className="search"><input type="text" placeholder="Search..."/><img src={searchIcon}/></div>  
                    
                    
                    

                </div>
            </div>

            <div className='row2'>
                <div className='block one'>
                <img className='headerimg' src={headImg}/>
                <div className='greeting2'>
                    <h1 id='greeting-head-2'> Hello, Jessica </h1>
                    <h2 id='greeting-msg-2'> Have a nice day at work! </h2>
                    <div className='wave-container'>
                        <img className='wave' src={wave}/>
                    </div>
                    </div>
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
                    <button class='addBtn' id="btn" onClick={handleBooking}><div className='plus-icon' ><UilPlus/></div></button>
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

                        <button className='primary-btn' id='btn' onClick={setLogOut}>Log Out</button>
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
                    <button class='addBtn tasks' id="btn" onClick={addTask}><div className='plus-icon'><UilPlus/></div></button>
                    <div className='task-container'>
                        <div className='individual-task'>
                            <h5>Email Mrs Poter</h5>
                            <p>Regarding invoice</p>

                        </div>
                    </div>
                    
                </div>

           

            </div>

                    
                        
        </div>
    );
};

export default Appointments;