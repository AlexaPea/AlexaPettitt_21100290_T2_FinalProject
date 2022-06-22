import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';



const UserInfo = (props) => {

         //Logout
         const navigate = useNavigate();

         const setLogOut = (e) => {
      
           sessionStorage.clear();
       
           navigate('/Login');
       
       
         };

         const [renderImage, setRenderImage] = useState();


         //get active user info
         useEffect(()=>{
           const userSession = sessionStorage.getItem('activeUser');
        
         if(userSession === '' || userSession === undefined){
         navigate('/');
         }
   
         let userProfile = {activeUser: userSession};
   
         axios.post('http://localhost:80/project-api/readUserInfo.php', userProfile)
         .then((res)=>{
           let data = res.data;
           let source = data[0].profileImage;
           let renderpath = 'http://localhost:80/project-api/' + source;
           setRenderImage(renderpath);
           
         })
         .catch(err=>{
           console.log(err);
         });
   
       
       }, []);


    return (
        <div>
             <div className='profile'>
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
                        {/* <table className='reception'>
                            <tr>
                                <td>balh</td>
                                <td>balh</td>
                                <td>balh</td>
                            </tr>
                        </table> */}
                    </div>
                </div>
            
        </div>
    );
};

export default UserInfo;