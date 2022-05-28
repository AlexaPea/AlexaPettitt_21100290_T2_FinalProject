
import './App.css';
import{Routes, Route} from 'react-router-dom';
import{NavLink} from 'react-router-dom';
import Navigation from './components/Navigation';
import Appointments from './components/Appointments';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import Login from './components/Login';
import Register from './components/Register'
// import Calendar from './components/Calendar';


function App() {
  return (
    <div className="App">

<Navigation/>
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
