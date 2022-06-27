import React from 'react';
import { useState, useEffect } from 'react';
import { UilTrashAlt } from '@iconscout/react-unicons'
import DeleteApModal from './DeleteApModal';
import EditApModal from './EditApModal';

const AppointmentItems = (props) => {

//=============================================================================
// Get vets initials and surname
//=============================================================================

    const [name, setName] = useState(props.vet);
    const fullName = name[0].substring(0, 1).toUpperCase();
    const getLast = name.split(' ');


   //=============================================================================
// Delete appointment
//=============================================================================

const [deleteApModal, setDeleteApModal] = useState();

const deleteAppoint = () => {
  
    setDeleteApModal(<DeleteApModal upRender={props.rerender} rerender={setDeleteApModal} id={props.uniqueId} />);
    //  props.rerender();
  }

//=============================================================================
// Edit appointment
//=============================================================================

const [editApModal, setEditApModal] = useState();

const editAppointment = () => {
  
    setEditApModal(<EditApModal upRender={props.rerender} rerender={setEditApModal} id={props.uniqueId} vet={props.vet} client={props.client} time={props.time} room={props.room} date={props.aDate}/>);
    //  props.rerender();
  }

 
 



//=============================================================================
// HTML Code
//=============================================================================    
    return (
        <>
        {editApModal}
        {deleteApModal}
        
      
             <tr className='individual-appointment' >
                            <td onClick={editAppointment}>Dr {fullName + ". " + getLast[1]}</td>
                            <td onClick={editAppointment}>{props.client}</td>
                            <td onClick={editAppointment}>{props.time}</td>
                            <td onClick={editAppointment}>{props.room}</td>
                            <td className='trashTd' onClick={deleteAppoint}><UilTrashAlt/></td>

                        </tr>
                        </>
        
    );
};

export default AppointmentItems;