import { useState, useEffect } from 'react'
import './App.css';
import{Routes, Route} from 'react-router-dom';
import{NavLink} from 'react-router-dom';
import Navigation from './components/Navigation';
import Appointments from './components/Appointments';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import Login from './components/Login';
import Register from './components/Register'
import Logo from './Images/logo.png';
import Helmet from "react-helmet";




function App() {


  return (
    <div className="App">

    <Helmet>
      <title>PetCare</title>
      <link rel="icon" href={Logo}/>
  
    </Helmet>

      <Routes>
        
        <Route path='/' element = {<Appointments/>}/>
        <Route path='/Doctors' element = {<Doctors/>}/>
        <Route path='/Patients' element = {<Patients/>}/>
        <Route path='/Login' element = {<Login/>}/>
        <Route path='/Register' element = {<Register/>}/>
      </Routes>
 
    </div>
  );
}

export default App;
