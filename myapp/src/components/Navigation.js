
import anxios from "axios";
// import Squirtle from '../Images/Squirtle.jpg';
import { UilStethoscopeAlt, UilUsersAlt, UilSchedule} from '@iconscout/react-unicons'
import{NavLink} from 'react-router-dom';


const Navigation = () => {

    return(
        <>
            <div className="navContainer">
                               
                <ul>
                    <li><NavLink exact activeClassName="active" to="/"><div className="icon icon1"><UilSchedule/></div></NavLink></li>
                    <li><NavLink activeClassName="active" to="/Doctors"><div className="icon icon2"><UilStethoscopeAlt/></div></NavLink></li>
                    <li><NavLink activeClassName="active" to="/Patients"><div className="icon icon3"><UilUsersAlt/></div></NavLink></li>
                </ul>

       
            </div>
        </>

    );


}
export default Navigation