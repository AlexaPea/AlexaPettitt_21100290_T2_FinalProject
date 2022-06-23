import AppointmentItems from './AppointmentItems';
import { UilPlus } from '@iconscout/react-unicons'
import Calendarcom from 'react-calendar';
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import React from 'react';
import moment from "moment";
import axios from 'axios';
import MakeBooking from './MakeBooking';


const Calendar = (props) => {

//=============================================================================
// Variables
//=============================================================================
const [modal, setModal] = useState();
    	
const [date, setDate] = useState(new Date());
const [formatDate, setFormatDate] = useState();

//    console.log(new Intl.DateTimeFormat('en-US').format(date));
const onDateChange = (newDate) => {
    setDate(newDate);
}

const [inputs, setInputs] = useState({
  date:'',
  userId:'',
});

//=============================================================================
// format date - to match database
//=============================================================================

useEffect(() => {
  setFormatDate(moment(date).format("YYYY-MM-DD"));
}, [date, onDateChange])


//=============================================================================
// Render booking pop up
//=============================================================================

const handleBooking = (event) => {
     event.preventDefault();
    setModal(<MakeBooking upRender={props.rerender} rerender={setModal}/>)

  };

 //=============================================================================
// Render appointments
//=============================================================================

const [userId, setUserId] = useState({
  activeUser: sessionStorage.getItem('activeUser'),
});


const [renderAppointents, setRenderAppointents] = useState();
const [appointmentItems, setAppointmentItems] = useState();


useEffect(()=>{

  //attempt to put needed data into inputs
  setInputs({...inputs, date: formatDate});
  setInputs({...inputs, userId: userId});

  axios.post('http://localhost:80/project-api/readAppointments.php',userId )
  .then((res)=>{
    let data = res.data;
    let renderAppointents = data.map((item) =>  <AppointmentItems key={item.id} rerender={setRenderAppointents} uniqueId={item.id} vet={item.vet} client={item.client} time={item.time} date={item.date} room={item.room}  />);
    // console.log(data);
    setAppointmentItems(renderAppointents);
    setRenderAppointents(false);
    
  })
  .catch(err=>{
    console.log(err);
  });

},[renderAppointents]);
// },[renderAppointents, handleBooking]);


//=============================================================================
// HTML Code
//=============================================================================
    
    return (
        <>
        {modal}
            <div className='row3'>
                <div className='calendar'>
                    <div className='block-heading' id='calendar-heading'> Calendar </div>
                    <CalendarContainer>
                 <Calendarcom calendarType='US' format="yyyy-mm-dd" className='react-calendar' 
                  onChange={onDateChange}           
                  value={date}  locale={"en-US"} />
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
                        </tr>
                        {appointmentItems}
                       
                        </tbody>
                    </table>

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