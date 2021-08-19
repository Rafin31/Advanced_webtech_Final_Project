
import { useEffect, useState } from "react";
import axios from "axios";
import Sidemenu from "../Layouts/sidemenu"
import { Redirect, useHistory } from "react-router-dom";
import NavBar from '../Layouts/manager_navBar';
const ManagerDashboard = () => {

    /*const history = useHistory();
    const [data, setData] = useState([]);
    const [request, setrequest] = useState([]);

    const date = new Date().toDateString();;
    useEffect(async () => {
        const res = await axios.get("http://127.0.0.1:8000/api/userlist");
        setData(res.data.users);
        const req = await axios.get("http://127.0.0.1:8000/api/clientReq");
        setrequest(req.data.requests)
    }, [])

    const active_users = data.filter((user) => {
        return user.account_Status === 'active';
    })
    const pending_users = data.filter((user) => {
        return user.account_Status === 'pending';
    })
    const stuff = data.filter((user) => {
        return user.user_type != 'clients';
    })

*/

    return (
        <>
        
        <NavBar status="Welcome TO Manager Dashboard" />
        <marquee color="green" width="100%" direction="right" height="100px" > Welcome to Manager's Dashboard  . . . . . . . . .Welcome to Manager's Dashboard . . . . . . . . .Welcome to Manager's Dashboard  . . . . . . . . . </marquee>
        </>
    );
}
export default ManagerDashboard