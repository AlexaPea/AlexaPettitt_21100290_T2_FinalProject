import React, {useState} from 'react'
import axios from 'axios';

const TaskPost = (props) => {
    return (
        <div>
             <div id={props.uniqueId} className='individual-task'>
                            <h5>{props.taskName}</h5>
                            <p>{props.taskDescription}</p>

                        </div>
            
        </div>
    );
};

export default TaskPost;
