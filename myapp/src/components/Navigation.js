
import anxios from "axios";
// import Squirtle from '../Images/Squirtle.jpg';
import { UilStethoscopeAlt, UilUsersAlt, UilSchedule} from '@iconscout/react-unicons'
import{NavLink} from 'react-router-dom';


const Navigation = () => {

    return(
        <>
            <div className="navContainer">
                               
                <ul>
                    <li><NavLink exact activeClassName="active" to="/"><button className="icon icon1"><UilSchedule/></button></NavLink></li>
                    <li><NavLink activeClassName="active" to="/Doctors"><button className="icon icon2"><UilStethoscopeAlt/></button></NavLink></li>
                    <li><NavLink activeClassName="active" to="/Patients"><button className="icon icon3"><UilUsersAlt/></button></NavLink></li>
                </ul>

       
            </div>
        </>

    );


}
export default Navigation