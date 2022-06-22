import React from 'react';
import wave from '../Images/wave.png';
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
import axios from 'axios';
import TaskPost from './TaskPost.js';
import UserInfo from './UserInfo';
import AppointmentItems from './AppointmentItems';


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

      const navigate = useNavigate();

      const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser'),
    });

  


      //get active user info
      useEffect(()=>{
        const userSession = sessionStorage.getItem('activeUser');
        console.log(userId);
      if(userSession === '' || userSession === undefined){
      navigate('/');
      }   
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
     

 
      //current date and time
      const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      


  //show all tasks

  const [renderTask, setRenderTask] = useState();
  const [tasks, setTasks] = useState();

  const user = sessionStorage.getItem('activeUser');



  useEffect(()=>{

    axios.post('http://localhost:80/project-api/readTasks.php',userId )
    .then((res)=>{
      let data = res.data;
      let renderTask = data.map((item) =>  <TaskPost key={item.id} rerender={setRenderTask} uniqueId={item.id} receptionist={item.receptionist} taskName={item.taskName} taskDescription={item.taskDescription}  />);
      console.log(data);
      setTasks(renderTask);
      setRenderTask(false);
      
    })
    .catch(err=>{
      console.log(err);
    });

 },[renderTask]);

 //show user info
 
  //show all tasks

  const [renderUserInfo, setRenderUserInfo] = useState();
  const [userInfo, setUserInfo] = useState();
  const [greetingName, setGreetingName] = useState();

  useEffect(()=>{

    axios.post('http://localhost:80/project-api/readUserInfo.php',userId )
    .then((res)=>{
      let data = res.data;
      let renderUserInfo = data.map((item) =>  <UserInfo key={item.id} rerender={setRenderUserInfo} name={item.name} surname={item.surname} rank={item.rank}  age={item.age} profileImage={item.profileImage}/>);
      setUserInfo(renderUserInfo);
      setRenderUserInfo(false);
      setGreetingName(data[0].name); 
    })
    .catch(err=>{
      console.log(err);
    });

 },[renderUserInfo]);

 //show all appoints

 const [renderAppointents, setRenderAppointents] = useState();
 const [appointmentItems, setAppointmentItems] = useState();


 useEffect(()=>{

   axios.post('http://localhost:80/project-api/readAppointments.php',userId )
   .then((res)=>{
     let data = res.data;
     let renderAppointents = data.map((item) =>  <AppointmentItems key={item.id} rerender={setRenderAppointents} uniqueId={item.id} vet={item.vet} client={item.client} time={item.time} date={item.date} room={item.room}  />);
     console.log(data);
     setAppointmentItems(renderAppointents);
     setRenderAppointents(false);
     
   })
   .catch(err=>{
     console.log(err);
   });

},[renderAppointents]);



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
                    <h1 id='greeting-head-2'> Hello, {greetingName} </h1>
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
                    <button className='addBtn' id="btn" onClick={handleBooking}><div className='plus-icon' ><UilPlus/></div></button>
                    <table className='appointments-table'>
                        <tbody>
                        <tr className='row-heading'>
                            <th>Doctor</th>
                            <th>Patient</th>
                            <th>Time</th>
                            <th>Room</th>
                        </tr>
                        {appointmentItems}
                       
                        </tbody>
                    </table>

                </div>
            </div>




            </div>

            
                   
            <div className='right-panel'>
           
               {userInfo}

                <div className='tasks'>
                    <h1 className='tasks-head'>Tasks</h1>
                    <button className='addBtn tasks' id="btn" onClick={addTask}><div className='plus-icon'><UilPlus/></div></button>
                    <div className='task-container'>
                       {tasks}
                       {renderTask}
                    </div>
                    
                </div>

           

            </div>

                    
                        
        </div>
    );
};

export default Appointments;