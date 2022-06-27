import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import byeAp from '../Images/byeAp.png';
import axios from 'axios';
import { useState, useEffect } from 'react';

const DeleteApModal = (props) => {

    const [vetid, setVetid] = useState(props.id);

 
    console.log(vetid);

    const closeModal = () => {
        props.rerender();
      }
      //uniqueId


      const deleteVet = (event) => {
        event.preventDefault();
      
        
        setVetid(props.id);
        console.log(vetid);

        axios.post('http://localhost:80/project-api/deleteAp.php', vetid)
        .then((res)=>{
          let data = res.data;
          console.log(data); 
          props.rerender();
        

        });
        
        props.rerender();
      }
      



    return (
        <div>

        <div className='delete-task-form-container deleteVet deleteAp'>
                        <form id='addTask'>
                        <button className='closeBtn' id="btn" onClick={closeModal}><div className='close-icon'><UilTimes/></div></button>
                        <div className='heading task'>
                                <h1>Delete Appointment</h1>
                                <h3>Are you sure you want to delete this?</h3>
                            </div>
                          
                    <div className='task-img-holder Clientdelete'>
                            <img className='taskImg client' src={byeAp}/>
                        
                    </div>
                    
                        <button type="submit" className='primary-btn deleteVet'  id='btn' onClick={deleteVet} >Delete Appointment</button>
                        <button className='primary-btn stillBusy'  id='btn' onClick={closeModal}>Cancel</button>
        
                        </form>
                    </div>
        
                    
                </div>
    );
};

export default DeleteApModal;