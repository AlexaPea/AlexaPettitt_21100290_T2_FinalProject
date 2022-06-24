import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { UilTimes } from '@iconscout/react-unicons';

const EditDoctor = (props) => {

//=============================================================================
// set doctor info
//=============================================================================

      const [updatedDoctor, setUpdatedDoctor] = useState({
        first: props.name,
        docImg: props.profileImage,
        last: props.surname,
        specialization: props.specialization,
        vetId: props.doctorId,
        room: props.room,
        email: props.email,
        age:props.age,
        gender:props.gender,
        contact:props.contact,
    });

//set input fields to original values

      
useEffect(()=>{
    document.getElementById('updateName').value = props.name;
    document.getElementById('updateSurname').value = props.surname;
    document.getElementById('updateSpecialization').value = props.specialization;
    document.getElementById('updateVetId').value = props.doctorId;
    document.getElementById('updateRoom').value = props.room;
    document.getElementById('updateEmail').value = props.email;
    document.getElementById('updateAge').value = props.age;
    document.getElementById('updateGender').value = props.gender;
    document.getElementById('updateContact').value = props.contact;
    
  },[]);

    
//=============================================================================
// Close popup
//=============================================================================
      const closeEditVet = () => {
        props.rerender();
      }

//=============================================================================
// Get values
//=============================================================================
const docImageVal = (e) => {           
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onloadend = function() {
    console.log(reader.result);
    let imgFile = reader.result;

    setUpdatedDoctor({...updatedDoctor, docImg: imgFile});

    let image = new Image();
    image.src = reader.result;
    document.getElementById('docImg').appendChild(image);
    }
    reader.readAsDataURL(file);
}
//get info from input
const firstVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedDoctor({...updatedDoctor, first: value});


}

const lastVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedDoctor({...updatedDoctor, last: value});


}

const specializationVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedDoctor({...updatedDoctor, specialization: value});


}

const vetIdVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedDoctor({...updatedDoctor, vetId: value});


}

const roomVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedDoctor({...updatedDoctor, room: value});

}


const emailVal = (e) => { //e is for events


    const value = e.target.value;
    setUpdatedDoctor({...updatedDoctor, email: value});

}


const contactVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedDoctor({...updatedDoctor, contact: value});

}


const ageVal = (e) => { //e is for events

   
    const value = e.target.value;
    setUpdatedDoctor({...updatedDoctor, age: value});

}

const passwordVal = (e) => { //e is for events

   
    const value = e.target.value;
    setUpdatedDoctor({...updatedDoctor, password: value});

  
}


const genderVal = (e) => { //e is for events

    const value = e.target.value;
    setUpdatedDoctor({...updatedDoctor, gender: value});

}

// const passwordConVal = (e) => { //e is for events


//     const value = e.target.value;
//     setInputs({...inputs, passwordCon: value});


// }

    return (
        <div>
              <div className='edit-doctor'>
            <div className='edit-doctor-form'>
                <form id="doctorForm">
                <button className='closeBtn' id="btn" onClick={closeEditVet}><div className='close-icon'><UilTimes/></div></button>
                    <div className='heading doc'>
                   
                        <h1>Edit Vet</h1>
                        <h3>Lets make them changes!</h3>

                    </div>

                    <div className='new-doc-container'>

                    <div className='imageArea'>
                    <p>Upload a Owner Profile Image</p>
                    <input name="docImageUrl" id="docImg" className='docImgInput' type="file" onChange={docImageVal}/>
                     </div>

                         {/* {nameError} */}
                        <input className='booking-input doc full' id="updateName" name='first' onChange={firstVal} type='text' placeholder='First Name'/>
                        {/* {lastError} */}
                        <input className='booking-input doc full' id="updateSurname" name='last' type='text' placeholder='Last Name' onChange={lastVal}/>

                        
                  
                        {/* {ageError} */}
                    <input name='age' id="updateAge" className="booking-input doc" type='text' placeholder='Age' onChange={ageVal}/>
                

                    {/* {genderError} */}
                    <select name="gender" id="updateGender" className="booking-input doc gen" onChange={genderVal}>
                        <option value="none" selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">other</option>
                    </select>
                
             
                    {/* {emailError} */}
                    <input name='email'id="updateEmail" className="booking-input doc" type='email' placeholder='Email' onChange={emailVal} />

                    {/* {contactError} */}
                    <input name='contact' id="updateContact" className="booking-input doc" type='text' placeholder='Contact Number' onChange={contactVal}/>  

                    {/* {specializationError} */}
                    <input name='specialization' id="updateSpecialization" className="booking-input doc full" type='text' placeholder='Specialization' onChange={specializationVal} />    

                    {/* {vetIdError} */}
                    <input name='vetId' id="updateVetId" className="booking-input doc" type='text' placeholder='Vet Id' onChange={vetIdVal} />   

                    {/* {roomError} */}
                    <input name='room' id="updateRoom" className="booking-input doc" type='number' placeholder='Room Number' onChange={roomVal} />       

                    {/* {passwordError} */}
                    <input name='password' className="booking-input doc"  type='password' placeholder='Password' onChange={passwordVal}/>
            
                    {/* {passwordConError} */}
                    <input name='passwordCon' className="booking-input doc"  type='password' placeholder='Confirm password' />
       

                       

                        <button className='primary-btn addVet' id='btn' >Edit Vet</button>
                    </div>
                  
                </form>
            </div>
        </div>
            
    
            
        </div>
    );
};

export default EditDoctor;