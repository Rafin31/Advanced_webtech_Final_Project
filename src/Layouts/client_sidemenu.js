import { NavLink } from "react-router-dom";
const Client_Sidemenu = () => {
    return (
        <div className="container">
            <div className="links">
                <div className="Client_sidebar">
                    <p className='head'>Welcome Client</p>
                    <NavLink to="/Client_dashboard">Dashboard</NavLink>
                    <NavLink to="/Withdraw_money">Withdraw Money</NavLink>
                    <NavLink to="/Send_Money">Send Money</NavLink>
                    <NavLink to="/Transaction">Transaction</NavLink>
                    <NavLink to="/Exchange_Currency">Exchange Currency</NavLink>
                    <NavLink to="/Paying_Bills">Paying Bills</NavLink>
                    <NavLink to="/Recharge_No">Recharge Mobile Number</NavLink>
                    <NavLink to="/Apply">Apply</NavLink>
                    <NavLink to="/Client_Profile">Profile</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
                    <NavLink to="/logout">Logout</NavLink>

                </div>
            </div>
        </div>
    );
}
export default Client_Sidemenu