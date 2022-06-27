import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import byeClient from '../Images/byeClient.png';
import axios from 'axios';
import { useState, useEffect } from 'react';

const DeleteClientModal = (props) => {
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

        axios.post('http://localhost:80/project-api/deleteClient.php', vetid)
        .then((res)=>{
          let data = res.data;
          console.log(data); 
          props.rerender();
        

        });
        
        props.rerender();
      }



    return (
        <div>

<div className='delete-task-form-container deleteVet'>
                <form id='addTask'>
                <button className='closeBtn' id="btn" onClick={closeModal}><div className='close-icon'><UilTimes/></div></button>
                <div className='heading task'>
                        <h1>Remove Client</h1>
                        <h3>Are you sure you're ready to see them go?</h3>
                    </div>
                  
            <div className='task-img-holder Clientdelete'>
                    <img className='taskImg client' src={byeClient}/>
                
            </div>
            
                <button type="submit" className='primary-btn deleteVet'  id='btn' onClick={deleteVet} >Remove Client</button>
                <button className='primary-btn stillBusy'  id='btn' onClick={closeModal}>Cancel</button>

                </form>
            </div>

            
        </div>
    );
};


export default DeleteClientModal;