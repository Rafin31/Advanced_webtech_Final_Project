import { NavLink } from "react-router-dom";
const Sidemenu = () => {
    return (
        <div className="container">
            <div className="links">
                <div className="sidebar">
                    <p className='head'>Welcome Admin</p>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/adduser">Add users</NavLink>
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
export default Sidemenu