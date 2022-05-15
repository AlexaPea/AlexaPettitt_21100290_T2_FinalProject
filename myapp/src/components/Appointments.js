import React from 'react';
import wave from '../Images/wave.png';
import dp from '../Images/placeholder.jpg';
import Calendar from './Calendar';
import headImg from '../Images/headerImg2.png';
import searchIcon from "../Images/search_icon.svg";


const Appointments = () => {
    return (
        <div>

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
                    <h2 className='block-text'> Cancelations </h2>
                </div>
            </div>

            <div className='row3'>
                <div className='calendar'>
                    <div className='block-heading'> Calendar </div>
                    {/* <Calendar/> */}

                </div>
                <div className='appointments'>
                    <div className='block-heading'> Appointments </div>
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

                        <button className='primary-btn'>Log Out</button>
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
                    <div className='task-container'>
                        <div className='individual-task'>

                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Appointments;