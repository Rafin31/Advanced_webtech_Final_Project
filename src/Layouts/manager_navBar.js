import '../manager_style.css';
import { Link, useHistory } from 'react-router-dom';

const NavBar = ({status})=>

{
    const date = new Date().toDateString();;

    return(
     <>
    
       <div className='navbar'>
      <div>

      <h1 className="h"> <img src="https://img.icons8.com/fluency/48/000000/application-window.png"/>  {status} </h1>  <br></br>
      <img src="https://readme-typing-svg.herokuapp.com?font=cambria&size=22&lines=Welcome+to+This+Bank+App+;was designed+through+React+and+Laravel"></img>

      <h3> {date} </h3>  <br></br>
      </div>
    
    <hr></hr>
    <p align="center"> 
    <Link to="/manager_dashboard">  Dashboard </Link>| 
    <Link to="/client/add">  Add Client </Link>| 
    <Link to="/client/list"> Client List </Link>|
    
    <Link to="/employee/add">Add Employee</Link>|
    <Link to="/meeting/add"> Arrange Meeting </Link>|
    <Link to="/report/bug/add"> Report A Bug </Link>|
    <Link to="/currency"> Currency Info </Link>|
    <Link to="/salarylist"> Salary List </Link>
     </p>
    
      </div>
     
      </>
) 

}

     
   
  export default NavBar;