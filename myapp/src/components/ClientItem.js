import React from 'react';
import dp from '../Images/placeholder.jpg';

const ClientItem = (props) => {
    return (
        <div>
            <div className='individual-client' id={props.uniqueId}>
                     <div className='client-block-img'>  <img className='profileImg client' src={dp}/></div>
                     <div className='client-block-text'>
                         <h2>{props.name + " " + props.surname}</h2>
                         <h4>{props.petType} | {props.petName} </h4>
                     </div>
                </div>
            
        </div>
    );
};

export default ClientItem;