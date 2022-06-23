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
import axios from 'axios';
import TaskPost from './TaskPost.js';
import UserInfo from './UserInfo';
import AppointmentItems from './AppointmentItems';
import AddTask from './AddTask';

const Appointments = (props) => {

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

      const navigate = useNavigate();

      const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser'),
    });

//=============================================================================
// Get active user info
//=============================================================================
      useEffect(()=>{
        const userSession = sessionStorage.getItem('activeUser');
        console.log(userId);
      if(userSession === '' || userSession === undefined){
      navigate('/');
      }   
    }, []);
 
//=============================================================================
// Render add task pop up
//=============================================================================

    const [Modal, setModal] = useState();

    const addTask = (event) => {
        event.preventDefault();
        setModal(<AddTask upRender={props.rerender} rerender={setModal}/>)
    };
     
//=============================================================================
// Set current date
//=============================================================================

    const current = new Date();

     const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      


//=============================================================================
// Render all tasks
//=============================================================================

  const [renderTask, setRenderTask] = useState();
  const [tasks, setTasks] = useState();

  const user = sessionStorage.getItem('activeUser');

  useEffect(()=>{

    axios.post('http://localhost:80/project-api/readTasks.php',userId )
    .then((res)=>{
      let data = res.data;
      let renderTask = data.map((item) =>  <TaskPost key={item.id} rerender={setRenderTask} uniqueId={item.id} receptionist={item.receptionist} taskName={item.taskName} taskDescription={item.taskDescription}  />);
    //   console.log(data);
      setTasks(renderTask);
      setRenderTask(false);
      
    })
    .catch(err=>{
      console.log(err);
    });

 },[renderTask, addTask]);


//=============================================================================
// Render user info
//=============================================================================

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

 },[]);

 //=============================================================================
// HTML Code
//=============================================================================

    return (
        <div>
                       
         <Helmet>
            <title>Appointments</title>
            <link rel="icon" href={Logo}/>
         </Helmet>
         
            <Navigation/>
         
            {Modal}
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

                <div className='block three'>
                    <h1 className='block-head'> 00 </h1>
                    <hr/>
                    <h2 className='block-text'> Appointments </h2>
                </div>
            </div>

            <Calendar/>


            </div>

         
            <div className='right-panel'>
           
               {userInfo}
   
                <div className='tasks'>
                    <h1 className='tasks-head'>Tasks</h1>
                    <button className='addBtn tasks' id="btn" onClick={addTask}><div className='plus-icon'><UilPlus/></div></button>
                    <div className='task-container'>
                       {tasks}
                       
                    </div>
                    
                </div>

           

            </div>

                    
                        
        </div>
    );
};

export default Appointments;