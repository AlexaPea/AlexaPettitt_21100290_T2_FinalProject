import AppointmentItems from './AppointmentItems';
import { UilPlus } from '@iconscout/react-unicons'
import Calendarcom from 'react-calendar';
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import React from 'react';
import moment from "moment";
import axios from 'axios';
import MakeBooking from './MakeBooking';
import AppointmentNone from './AppointmentNone';


const Calendar = (props) => {

//=============================================================================
// Variables
//=============================================================================

    	
const [clickedDate, setClickedDate] = useState(new Date());
const [formatDate, setFormatDate] = useState(moment(clickedDate).format("YYYY-MM-DD"));

const [inputs, setInputs] = useState({
  userId: sessionStorage.getItem('activeUser'),
  dateId:formatDate,
});

// const [formatDate, setFormatDate] = useState();

//    console.log(new Intl.DateTimeFormat('en-US').format(date));
// const onDateChange = (newDate) => {
//     setDate(newDate);
// }

//=============================================================================
// format date - to match database
//=============================================================================


//setFormatDate(moment(date).format("YYYY-MM-DD"));


//=============================================================================
// Date click
//=============================================================================

const onDateChange = (newDate) => {
  setClickedDate(newDate); //sets the new day for the calendar
  setFormatDate(moment(clickedDate).format("YYYY-MM-DD"));
  setInputs({...inputs, dateId: formatDate});
  console.log(formatDate);
  setRenderAppointment(true);
};
 


//=============================================================================
// Render booking pop up
//=============================================================================
const [modal, setModal] = useState();

const handleBooking = (event) => {
     event.preventDefault();
    setModal(<MakeBooking upRender={props.rerender} rerender={setModal}/>)

  };

  // let renderAppointents = data.map((item) =>  <AppointmentItems key={item.id} rerender={setRenderAppointents} uniqueId={item.id} vet={item.vet} client={item.client} time={item.time} date={item.date} room={item.room}  />);
 //=============================================================================
// Render appointments
//=============================================================================


const [renderAppointment, setRenderAppointment] = useState();
const [renderNoAppointment, setRenderNoAppointment] = useState();
const [appointments, setAppointments] = useState();
const [noAppointments, setNoAppointments] = useState();
const [numAppointments, setNumAppointments] = useState();
const [userName, setUsername] = useState(sessionStorage.getItem('activeUser'));

// console.log(userName)

useEffect(()=>{

  
  console.log("this is updated inputs: "+ inputs)
  axios.post('http://localhost:80/project-api/readAppointments.php',inputs )
  .then((res)=>{
    let data = res.data;
    console.log(data.length);
    let num = data.length;
    if(num<10){
      setNumAppointments("0" + num);
      let renderAppointment = data.map((item) =>  <AppointmentItems key={item.id} rerender={setRenderAppointment} uniqueId={item.id} vet={item.vet} client={item.client} time={item.time} aDate={item.date} room={item.room}  />);
      setAppointments(renderAppointment);
      setRenderAppointment(false);
    }else if(num>10){
      setNumAppointments(num);
      let renderAppointment = data.map((item) =>  <AppointmentItems key={item.id} rerender={setRenderAppointment} uniqueId={item.id} vet={item.vet} client={item.client} time={item.time} aDate={item.date} room={item.room}  />);
      setAppointments(renderAppointment);
      setRenderAppointment(false);
    }else{
      setNumAppointments("00");
      setRenderAppointment(true);
      let renderNoAppointment = data.map((item) =>  <AppointmentNone/>);
      setNoAppointments(renderNoAppointment);
      setRenderNoAppointment(false);

      setRenderAppointment('');
      setAppointments(renderAppointment);
      setRenderAppointment(false);
    }
  
   
    
   
    
  //   console.log(data);



 
  })
  .catch(err=>{
    console.log(err);
  });

},[inputs.dateId]);



//=============================================================================
// HTML Code
//=============================================================================
    
    return (
        <>
        
        {modal}
        <div className='row2 two'>
        <div className='block three'>
                    <h1 className='block-head'> {numAppointments} </h1>
                    <hr/>
                    <h2 className='block-text'> Appointments </h2>
                </div>
            </div>
        
            <div className='row3'>
                <div className='calendar'>
                    <div className='block-heading' id='calendar-heading'> Calendar </div>
                    <CalendarContainer>
                 <Calendarcom calendarType='US' format="yyyy-mm-dd" className='react-calendar' 
                 onChange={onDateChange}           
                  value={clickedDate}  locale={"en-US"} />
                </CalendarContainer>

                </div>
                <div className='appointments'>
                    <div className='block-heading'> Appointments </div>
                    <button className='addBtn' id="btn" onClick={handleBooking}><div className='plus-icon' ><UilPlus/></div></button>
                    <table className='appointments-table'>
                        <tbody>
                        <tr className='row-heading'>
                            <th>Doctor</th>
                            <th>Patient</th>
                            <th>Time</th>
                            <th>Room</th>
                            <th>Delete</th>
                        </tr>
                        {appointments}
                       
                        </tbody>

                        
                    </table>
                    {noAppointments}
                </div>
            </div>
          
        </>
     
    );
};

export default Calendar;

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 600px;
  margin: auto;
  margin-top: 0px;
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 3px;
  outline:none;
  border:0;
  font-family: poppins;   

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;
    

    .react-calendar__navigation__label {
      font-weight: light;
      font-family: poppins;   
      text-decoration:none;
      color:2b2b2b;   
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }

    /* ~~~ label styles ~~~ */
    .react-calendar__month-view__weekdays {
      text-align: center;
      font-weight: light;
      font-family: poppins;
      text-decoration: none;
     
    }
}

.react-calendar__month-view__weekdays__weekday abbr{
    text-decoration:none;
}
    /* ~~~ button styles ~~~ */
  button {
    margin: 3px;
    background-color: none;
    background:none;
    border: 0;
    outline: 0;
    border-radius: 3px;
    color: #2b2b2b;
    padding: 5px 0;
    -webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
  }
    button:hover {
      background-colour: #3g3g3g;
    }

    button:active {
      background-color: #ffffff;
    }
  }

  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 

    .react-calendar__tile {
      max-width: initial !important;
    }
  }

  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.2;
  }
  .react-calendar__month-view__days__day--weekend {
   
  }

  /* ~~~ active day styles ~~~ */
  .react-calendar__tile--range {
    
    background: #ffffff;
    -webkit-box-shadow: 12px 12px 24px #ebebeb, -12px -12px 24px #ffffff;
    box-shadow: 12px 12px 24px #ebebeb, -12px -12px 24px #ffffff;
  }

  /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months, 
  .react-calendar__decade-view__years, 
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;