
import Calendarcom from 'react-calendar';

import styled from 'styled-components';

import { useState, useEffect } from 'react'


import React from 'react';
import moment from "moment";




const Calendar = () => {

    	
const [date, setDate] = useState(new Date());
const [formatDate, setFormatDate] = useState();

//    console.log(new Intl.DateTimeFormat('en-US').format(date));
const onDateChange = (newDate) => {

    setDate(newDate);
  
}

// useEffect(() => {
//   console.log(date);
//   setFormatDate(new Intl.DateTimeFormat('en-US').format(date));
//   console.log(formatDate);
// }, [date, onDateChange])

useEffect(() => {
  console.log(date);
  setFormatDate(moment(date).format("YYYY-MM-DD"));
  console.log(formatDate);
}, [date, onDateChange])




const locale = 'fr-CA';
    
    return (
        <>
           <CalendarContainer>
                 <Calendarcom calendarType='US' format="yyyy-mm-dd" className='react-calendar' 
                  onChange={onDateChange}           
                  value={date}  locale={"en-US"} />
             </CalendarContainer>
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