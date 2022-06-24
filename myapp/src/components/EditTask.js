import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { UilTimes } from '@iconscout/react-unicons';

const EditTask = (props) => {
    const [updatedPost, setUpdatedPost] = useState({
        newTask: props.original, 
        newTaskDescription: props.original, 
        id: props.id
      });
    
      const closeModal = () => {
        props.rerender();
      }
      
      useEffect(()=>{
        document.getElementById('updateText').value = props.originalTaskName;
        document.getElementById('updateTextDescription').innerHTML = props.originalTaskDescription;
      },[]);
    
      const handleChange = (e) => {
        let value = e.target.value;
        setUpdatedPost({...updatedPost, newTask: value});
        console.log(updatedPost);
      }
       
      const handleChangeText = (e) => {
        let value = e.target.value;
        setUpdatedPost({...updatedPost, newTaskDescription: value});
        console.log(updatedPost);
      }
    
      const udpatePost = (e) => {
        e.preventDefault();
    
        axios.post('http://localhost:80/project-api/updateTask.php', updatedPost)
          .then((res)=>{
            let data = res.data;
            console.log(data); 
            props.upRender(true);
            props.rerender();
          });
      }
    
      return (
        <div className='modal'>


          <div className='edit-task-form-container'>
                <form id='addTask'>
                <button className='closeBtn' id="btn" onClick={closeModal}><div className='close-icon'><UilTimes/></div></button>
                <div className='heading task'>
                        <h1>Edit Task</h1>
                        <h3>Go and make those changes!</h3>
                    </div>
                

                    <label className='labelOne'>
                    Task Title
                    <input id='updateText'  type='text' name='taskName' placeholder='Edit Post Message' onChange={handleChange}></input>
                </label>

                <label>
                    Description
                    <textarea id='updateTextDescription' name='taskDescription' placeholder='Update task here...' onChange={handleChangeText}></textarea>
                </label>

                <button className='primary-btn task'  id='btn' onClick={udpatePost}>Edit this task</button>

                </form>
            </div>
           
        </div>
      )
    
};

export default EditTask;