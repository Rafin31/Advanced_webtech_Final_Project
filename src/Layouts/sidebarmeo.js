import { NavLink } from "react-router-dom";
const Sidebarmeo = () => {
    return (
        <div className="container">
            <div className="links">
                <div className="sidebarmeo">
                    <p className='head'>E-Bank</p>
                    <NavLink to="/meo_dashboard">Dashboard</NavLink>
                    <NavLink to="/addrequest">Add Request</NavLink>
                    
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/changepassword">Change Password</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                </div>
            </div>
        </div>
    );
}
export default Sidebarmeo