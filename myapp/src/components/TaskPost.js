import React, {useState} from 'react'
import axios from 'axios';
import EditTask from './EditTask';
import { UilCheckCircle } from '@iconscout/react-unicons'
import DeleteModal from './DeleteModal';

const TaskPost = (props) => {

        
//=============================================================================
// Edit Task
//=============================================================================

    const [modal, setModal] = useState();

    const editTask = () => {
        console.log("clicked");
        setModal(true);
        setModal(<EditTask upRender={props.rerender} rerender={setModal} originalTaskName={props.taskName} originalTaskDescription={props.taskDescription} id={props.uniqueId}  />)
      }
    
//=============================================================================
// Handle Complete
//=============================================================================
const [deleteModal, setDeleteModal] = useState();
    const handleComplete = () => {
        console.log("clickedComplete");
        setDeleteModal(<DeleteModal upRender={props.rerender} rerender={setDeleteModal} originalTaskName={props.taskName} originalTaskDescription={props.taskDescription} id={props.uniqueId}  />)
      }

    
//=============================================================================
// HTML code
//=============================================================================
    return (
       
        <div>
             {modal}
             {deleteModal}
             <div id={props.uniqueId} className='individual-task' >
                            <h5 onClick={editTask}>{props.taskName}</h5>
                            <p onClick={editTask}>{props.taskDescription}</p>

                            <div className='completeTask' onClick={handleComplete}><div className='tick-icon'><UilCheckCircle/></div></div>

             </div>
            
        </div>
    );
};

export default TaskPost;
