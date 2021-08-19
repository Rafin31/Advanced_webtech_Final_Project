import { NavLink } from "react-router-dom";
const Sidebarmeo = () => {
    return (
        <div className="container">
            <div className="links">
                <div className="sidebarmeo">
                    <p className='head'>E-Bank</p>
                    <NavLink to="/meo_dashboard">Dashboard</NavLink>
                    <NavLink to="/addrequest">Add Request</NavLink>
                    <NavLink to="/requestlist">Request List</NavLink>
                    <NavLink to="/postClient">Post client</NavLink>

                    
                    <NavLink to="/meo_profile">Profile</NavLink>
                    <NavLink to="/meo_changepassword">Change Password</NavLink>
            
                    <NavLink to="/CurrencyConvert">Convert Currency</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                </div>
            </div>
        </div>
    );
}
export default Sidebarmeo