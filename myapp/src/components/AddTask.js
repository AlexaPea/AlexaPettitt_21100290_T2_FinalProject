import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';

const AddTask = () => {
    return (
        <div>
            <div className='task-form-container'>
                <form id='addTask'>
                <button class='closeBtn' id="btn" ><div className='close-icon'><UilTimes/></div></button>
                <div className='heading task'>
                        <h1>Add Task</h1>
                        <h3>Let's get productive!</h3>
                    </div>
                

                    <label className='labelOne'>
                    Task Title
                    <input type='text' name='task' placeholder='Please type task here'></input>
                </label>

                <label>
                    Description
                    <textarea name='description' placeholder='Please type task details here...' ></textarea>
                </label>

                <button className='primary-btn task'  id='btn'>Create task</button>

                </form>
            </div>
            
        </div>
    );
};

export default AddTask;