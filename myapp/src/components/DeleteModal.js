import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import task from '../Images/task.png';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import Confetti from 'react-dom-confetti';
import Confetti from 'react-confetti'

const DeleteModal = (props) => {

    const closeModal = () => {
        props.rerender();
      }

      const [confetRender, setConfetRender]=useState();
      

      const deleteTask = () => {
      
        let postId = {id: props.id};

        axios.post('http://localhost:80/project-api/deleteTask.php', postId)
        .then((res)=>{
          let data = res.data;
          console.log(data); 
          setConfetRender(      <Confetti
            width={width}
            height={height}
          />)
          props.rerender();
        

        });
        
        props.rerender();
      }
      
      const { width, height } = 100;
    
    
       
    
    return (
        <div>
     
            {confetRender}
          <div className='delete-task-form-container'>
                <form id='addTask'>
                <button className='closeBtn' id="btn" onClick={closeModal}><div className='close-icon'><UilTimes/></div></button>
                <div className='heading task'>
                        <h1>Task Complete!</h1>
                        <h3>Ready to cut-down on those to-do's?</h3>
                    </div>
                  
            <div className='task-img-holder'>
                    <img className='taskImg' src={task}/>
                
            </div>
            
                <button className='primary-btn delete'  id='btn' onClick={deleteTask}>Task Complete!</button>
                <button className='primary-btn stillBusy'  id='btn' onClick={closeModal}>Still Busy</button>

                </form>
            </div>
            
        </div>
    );
};

export default DeleteModal;