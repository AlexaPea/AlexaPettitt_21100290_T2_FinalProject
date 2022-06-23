import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import { useState, useEffect } from 'react';
import MiniModalLeft from './FormModalLeft';
import MiniModalRight from './FormModalRight';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const AddTask = (props) => {
//=============================================================================
// Variables
//=============================================================================

    const navigate = useNavigate();

    const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser'),
    });

//=============================================================================
// Get active user
//=============================================================================
    useEffect(()=>{
      const userSession = sessionStorage.getItem('activeUser');
      console.log(userSession);
    if(userSession === '' || userSession === undefined){
        setUserId(userSession);
    navigate('/');
    }
    }, []);


//=============================================================================
// Get task input
//=============================================================================    

    const [inputs, setInputs] = useState({
        activeUser: sessionStorage.getItem('activeUser'),
        taskName:'',
        taskDescription: '',
    });

    const [taskNameError, setTaskNameError] = useState();
    const [taskDescriptionError, setTaskDescriptionError] = useState();


    //get info from input
    const taskNameVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, taskName: value});

        //if first input is empty, set error message to nothing
        if(inputs.taskName !== ''){setTaskNameError();}


    }

    const taskDescriptionVal = (e) => { //e is for events

        const value = e.target.value;
        setInputs({...inputs, taskDescription: value});

        //if first input is empty, set error message to nothing
        if(inputs.taskDescription !== ''){setTaskDescriptionError();}


    }

//=============================================================================
// Onclick add task
//============================================================================= 
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs); //error check

        if(inputs.taskName === ''){
            setTaskNameError(<MiniModalLeft message="Please add task name"/>);
        }else{
            setTaskNameError();
        }

        //checks if some of the input values are equal to nothing
        let result = Object.values(inputs).some(o => o === "");

        if(result){
            console.log("There is an Error");
        }else{
            axios.post('http://localhost:80/project-api/addTask.php', inputs)
            .then(function(response){
                // console.log(response);
                if(response.status === 200){
                   console.log("Task has been added!");
                   props.rerender();
                }else{
                    console.log('error');
                }
            });
        }
    }

//=============================================================================
// Close addTask pop up
//=============================================================================
    const closeTask = (event) => {
        event.preventDefault();
        props.rerender();
    
      };

//=============================================================================
// HTML Code
//=============================================================================

    return (
        <div>
            <div className='task-form-container'>
                <form id='addTask'>
                <button className='closeBtn' id="btn" onClick={closeTask}><div className='close-icon'><UilTimes/></div></button>
                <div className='heading task'>
                        <h1>Add Task</h1>
                        <h3>Let's get productive!</h3>
                    </div>
                

                    <label className='labelOne'>
                    Task Title
                    <input type='text' name='taskName' placeholder='Please type task here' onChange={taskNameVal}></input>
                </label>

                <label>
                    Description
                    <textarea name='taskDescription' placeholder='Please type task details here...' onChange={taskDescriptionVal}></textarea>
                </label>

                <button className='primary-btn task'  id='btn' onClick={handleSubmit}>Create task</button>

                </form>
            </div>
            
        </div>
    );
};

export default AddTask;