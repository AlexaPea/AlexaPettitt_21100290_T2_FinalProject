import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import { useState, useEffect } from 'react';

import axios from 'axios';






const EditClient = (props) => {

//=============================================================================
// set client info
//=============================================================================

const [updatedClient, setUpdatedClient] = useState({
    name: props.name,
    surname: props.surname,
    petName: props.petName,
    petType: props.petType,
    petGender: props.petgender,
    email: props.email,
    contact: props.contact,
    petAge:props.age,
    clientId:props.clientId,
    medicalAidNum:props.medicalAidNum,
    id:props.id,
});

//set input fields to original values

  
useEffect(()=>{
document.getElementById('updateName').value = props.name;
document.getElementById('updateSurname').value = props.surname;
document.getElementById('updatePetName').value = props.petName;
document.getElementById('updatePetType').value = props.petType;
document.getElementById('updateEmail').value = props.email;
document.getElementById('updatePetAge').value = props.petAge;
document.getElementById('updatePetGender').value = props.petGender;
document.getElementById('updateContact').value = props.contact;
document.getElementById('updateClientId').value = props.clientId;
document.getElementById('updateMedicalAidNum').value = props.medicalAidNum;


},[]);


//=============================================================================
// Close addClient pop up
//=============================================================================
   
const closeAddClient = (event) => {
    event.preventDefault();
    props.rerender();
  };

  

//=============================================================================
// Get values
//=============================================================================

//get info from input
const nameVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedClient({...updatedClient, name: value});

 

}



const surnameVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedClient({...updatedClient, surname: value});

}

const clientIdVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedClient({...updatedClient, clientId: value});

}

const medicalAidNumVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedClient({...updatedClient, medicalAidNum: value});
}

const emailVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedClient({...updatedClient, email: value});

}
const contactVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedClient({...updatedClient, contact: value});


} 
 const petNameVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedClient({...updatedClient, petName: value});

   

}

const petTypeVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedClient({...updatedClient, petType: value});

    

}

const petAgeVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedClient({...updatedClient, petAge: value});

    


}
const petGenderVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedClient({...updatedClient, petGender: value});

}


/////////////////////update
const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:80/project-api/updateClient.php', updatedClient)
      .then((res)=>{
        let data = res.data;
        console.log(data); 
        props.upRender(true);
        props.rerender();
      });
  }




    return (
        <div>
              <div className='addClient editClientblock'>
            <form id='add-client-form'>
            <button className='closeBtn addClient' id="btn" onClick={closeAddClient} ><div className='close-icon'><UilTimes/></div></button>
                <div className='greeting'>
                    <h1>Edit Client</h1>
                    <h3 className='subheading'>Time for an update!</h3>
                </div>
                <div className='owner-info-form'>

                    <h3>Client Information</h3>

                    <div className='input-holder owner'>
             
                                                
                        <input onBlur={nameVal} name='name' id='updateName' className='booking-input doc full' type='text' placeholder='First Name'/>

                        <input onBlur={surnameVal} name='surname'  id='updateSurname' className='booking-input doc full' type='text' placeholder='Last Name'/>

                        <input onBlur={clientIdVal} name='clientId'  id='updateClientId' className='booking-input doc full' type='number' placeholder='Patient Id'/>

                        <input onBlur={medicalAidNumVal} name='medicalAidNum'  id='updateMedicalAidNum' className='booking-input doc full' type='number' placeholder='Medical Aid Number'/>

                        <input onBlur={emailVal} name='email'  id='updateEmail' className="booking-input doc full" type='email' placeholder='Email' />

                        <input onBlur={contactVal}  name='contact'  id='updateContact' className="booking-input doc full" type='text' placeholder='Contact Number'/>  


                    </div>


                </div>
                <div className='pet-info-form'>

                  <h3>Pet Information</h3>
        

                  <div className='input-holder pet'></div>

                        <input onBlur={petNameVal} name='petName' id='updatePetName' className='booking-input doc full' type='text' placeholder='Name'/>

                        <input onBlur={petTypeVal}  name='petType'  id='updatePetType' className='booking-input doc full' type='text' placeholder='Pet type'/>

                        <input onBlur={petAgeVal}  name='petAge'  id='updatePetAge' className="booking-input doc half" type='text' placeholder='Age'/>
            
                        <select onBlur={petGenderVal} name="petGender"  id='updatePetGender' className="booking-input doc gen">
                            <option value="none" selected>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">other</option>
                        </select>

                    </div>

                    
                    <button className='primary-btn addClient' id='btn' onClick={handleSubmit}>Update Client</button>

                
                    
  
             
            </form>
            
        </div>
            
        </div>
    );
};

export default EditClient;