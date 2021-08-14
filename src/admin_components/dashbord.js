import { useEffect, useState } from "react";
import axios from "axios";
import Sidemenu from "../Layouts/sidemenu"
const Dashboard = () => {
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



    return (
        <>
            <Sidemenu />
            <div class="content dashboard_content">
                <div class="container-fluid">
                    <div class="container-fluid mt-5">
                        <div class="row">
                            <div class="col-lg-3 col-sm-6">
                                <div class=" gradient-1">
                                    <div class=" card_in_dashboard card-body">
                                        <h3 class="card-title text-white">Active Clients</h3>
                                        <div class="d-inline-block">
                                            <h2 class="text-white">{(active_users.length)}</h2>
                                            <p class="text-white mb-0">{date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class=" gradient-2">
                                    <div class=" card_in_dashboard card-body">
                                        <h3 class="card-title text-white">Pending Clients</h3>
                                        <div class="d-inline-block">
                                            <h2 class="text-white">{(pending_users.length)}</h2>
                                            <p class="text-white mb-0">{date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class=" gradient-3">
                                    <div class=" card_in_dashboard card-body">
                                        <h3 class="card-title text-white">Active Stuffs</h3>
                                        <div class="d-inline-block">
                                            <h2 class="text-white">{stuff.length}</h2>
                                            <p class="text-white mb-0">{date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class=" gradient-4">
                                    <div class=" card_in_dashboard card-body">
                                        <h3 class="card-title text-white">Pending Requests</h3>
                                        <div class="d-inline-block">
                                            <h2 class="text-white">{request.length}</h2>
                                            <p class="text-white mb-0">{date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div >
            </div >
        </>
    );
}
export default Dashboard