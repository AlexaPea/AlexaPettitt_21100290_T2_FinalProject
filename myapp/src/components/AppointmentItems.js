import React from 'react';
import { useState, useEffect } from 'react'

const AppointmentItems = (props) => {

    const [name, setName] = useState(props.vet);
    // const last =name.Substring(name.IndexOf(" ") + 1);;
    const fullName = name[0].substring(0, 1).toUpperCase();
    const getLast = name.split(' ');
    


    
    return (
      
             <tr className='individual-appointment'>
                            <td>Dr {fullName + ". " + getLast[1]}</td>
                            <td>{props.client}</td>
                            <td>{props.time}</td>
                            <td>{props.room}</td>
                        </tr>
        
    );
};

export default AppointmentItems;