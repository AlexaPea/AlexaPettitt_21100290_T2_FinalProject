import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';
import {UilEdit , UilArrowDown } from '@iconscout/react-unicons';
import EditUser from './EditUser';

const UserInfo = (props) => {

 //=============================================================================
// Logout user
//=============================================================================
    const navigate = useNavigate();

    const setLogOut = (e) => {
        sessionStorage.clear();
         navigate('/Login');
         };

         

//=============================================================================
// get active users info and output it
//=============================================================================
    const [renderImage, setRenderImage] = useState();

    useEffect(()=>{

        const userSession = sessionStorage.getItem('activeUser');

        //kick user out if not logged in
        if(userSession === '' || userSession === undefined){
        navigate('/');
        }
    
         let userProfile = {activeUser: userSession};
   
         axios.post('http://localhost:80/project-api/readUserInfo.php', userProfile)
         .then((res)=>{
           let data = res.data;
           //get image to output
           let source = data[0].profileImage;
           let renderpath = 'http://localhost:80/project-api/' + source;
           setRenderImage(renderpath);
           
         })
         .catch(err=>{
           console.log(err);
         });
   
       
       }, []);

//=============================================================================
// Logout user
//=============================================================================
   

const [modal, setModal] = useState();

const editUserInfo = () => {
    console.log("clicked");
    setModal(<EditUser upRender={props.rerender} rerender={setModal} name={props.name} surname={props.surname} id={props.uniqueId} age={props.age} gender={props.gender} contact={props.contact} password={props.password} email={props.email} />)
   
};
        

//=============================================================================
// HTML code
//=============================================================================
    return (
        <div>
            {modal}
             <div className='profile'>
                <div className='userEdit' onClick={editUserInfo}><UilEdit/></div>
                <img className='profileImg' src={renderImage}/>
                    <div className='profileHeading'> 
                        <div className='addButton'></div>
                    
                    </div>
                    <div className='profileInfo'>
                        
                        <div className='text'>
                            <h3>{props.name + " " + props.surname}</h3>
                            <p>Receptionist | {props.age}</p>
                            <p>{props.rank}</p>
                            
                        </div>

                        <button className='primary-btn' id='btn' onClick={setLogOut}>Log Out</button>
                 
                    </div>
                </div>
            
        </div>
    );
};

export default UserInfo;