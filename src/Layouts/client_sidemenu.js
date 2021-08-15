import { NavLink } from "react-router-dom";
const Client_Sidemenu = () => {
    return (
        <div className="container">
            <div className="links">
                <div className="sidebar">
                    <p className='head'>Welcome Client</p>
                    <NavLink to="/client_dashboard">Dashboard</NavLink>
                    <NavLink to="/send_money">Send Money</NavLink>
                    <NavLink to="/userlist">Users List</NavLink>
                    <NavLink to="/pendinguser">Pending Users </NavLink>
                    <NavLink to="/unblockuser">Unblock Users</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/changepassword">Change Password</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                </div>
            </div>
        </div>
    );
}
export default Client_Sidemenu