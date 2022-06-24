import React from 'react';
import {UilEdit , UilArrowDown } from '@iconscout/react-unicons';
import dog from '../Images/dog.png';
import { useState, useEffect } from 'react'

const ClientInfo = (props) => {


    const [renderImage, setRenderImage] = useState();
    useEffect(()=>{
    
        
        console.log(props.petImage)
        let source = props.petImage;
        let renderpath = 'http://localhost:80/project-api/' + source;
        setRenderImage(renderpath);
    
     },[]);

    return (
        <div>
                  <div className='middle-pannel-client'>
                <div className='edit-icon'><UilEdit/></div>
            <div className='client-block main'>  <img className='client-block-img main' src={renderImage}/></div>
            <div className='client-maintext one'>  
                <h1>{props.petName}</h1>
                <h3>{props.petType}</h3>
                {/* <div className='special'>Surgury</div> */}
            </div>
             
            <div className='client-info main'>
                <h2>Pet Details</h2>
                <h4>Details on clients pet</h4>
                <table className='general-info two'>
                    <tbody>
                    <tr>
                        <th>Breed</th>
                        <td>{props.petType}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{props.petGender}</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>{props.petAge}</td>
                    </tr>
                    </tbody>
                </table>
                <hr className='devider-line'/>
                <div className='client-info two'>
                    <h2>Appointment History</h2>
                    <h4>All previous appointments listed bellow.</h4>

                    <div className='appointments-holder'>

                    <table className='appointments-table two'>
                        <tbody>
                        <tr className='row-heading'>
                            <th>Doctor</th>
                            <th>Patient</th>
                            <th>Time</th>
                            <th>Room</th>
                        </tr>
                        <tr className='individual-appointment'>
                            <td>Dr S. Smith</td>
                            <td>Jason Craig</td>
                            <td>08:30 am</td>
                            <td>341</td>
                        </tr>
                        <tr className='individual-appointment'>
                            <td>Dr S. Smith</td>
                            <td>Jason Craig</td>
                            <td>08:30 am</td>
                            <td>341</td>
                        </tr>
                        <tr className='individual-appointment'>
                            <td>Dr S. Smith</td>
                            <td>Jason Craig</td>
                            <td>08:30 am</td>
                            <td>341</td>
                        </tr>
                        <tr className='individual-appointment'>
                            <td>Dr S. Smith</td>
                            <td>Jason Craig</td>
                            <td>08:30 am</td>
                            <td>341</td>
                        </tr>
                        <tr className='individual-appointment'>
                            <td>Dr S. Smith</td>
                            <td>Jason Craig</td>
                            <td>08:30 am</td>
                            <td>341</td>
                        </tr>
                        </tbody>
                    </table>

                    </div>
                </div>
                {/* <button className='primary-btn vet'>Edit</button> */}
            </div>


            </div>

            <img className='dog' src={dog}/>

            <div className='right-pannel-client'>
                <div className='edit-icon client'><UilEdit/></div>
            <div className='client-maintext two'>  
                <h1 className='owner-name'>{props.name + " " + props.surname}</h1>
                <h3>Owner</h3>
            </div>
            <div className='client-info'>
            <h2>Contact Details</h2>
                <h4>Client details which concern the practice</h4>
                <table className='general-info two'>
                    <tbody>
                    <tr>
                        <th>Email</th>
                        <td>{props.email}</td>
                    </tr>
                    <tr>
                        <th>Telephone</th>
                        <td>{props.contact}</td>
                    </tr>
                    <tr>
                        <th>Patient Id</th>
                        <td>{props.clientId}</td>
                    </tr>
              
                    </tbody>
                </table>
            </div>
             <hr className='devider-line'/>

             <div className='client-info two'>
            <h2>Medical Details</h2>
                <h4>Insurance related</h4>
                <table className='general-info two'>
                <tbody>
                    <tr>
                        <th>Medical Aid Number</th>
                        <td>{props.medicalAidNum}</td>
                    </tr>
                    <tr>
                        <th>Id Number</th>
                        <td>{props.clientId}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            
                {/* <button className='primary-btn vet'>Edit</button> */}
            </div>


           


        
            
        </div>
    );
};

export default ClientInfo;