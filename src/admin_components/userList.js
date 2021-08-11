import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidemenu from "./Layouts/sidemenu";
import { Link } from 'react-router-dom';

function UserList() {
    const [data, setData] = useState([]);


    const load = async () => {
        const res = await axios.get("http://127.0.0.1:8000/api/userlist");
        setData(res.data.users);
    }
    useEffect(() => {
        load();
    }, []);


    const checkStatus = (user) => {
        if (user.account_Status === 'pending') {
            return <td><span class="badge  badge-pill badge-warning">{user.account_Status}</span></td>
        } else if (user.account_Status === 'Block') {
            return <td><span class="badge  badge-pill badge-danger">{user.account_Status}</span></td>
        } else {
            return <td><span class="badge  badge-pill badge-success">{user.account_Status}</span></td>
        }
    }





    return (
        <div className="content">
            <div className="container-fluid">
                <Sidemenu />
                <div className="row justify-content-center">
                    <div className="col-12 ">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Client Lists</h4>
                                <button className="btn btn-success m-2 text-capitalize">Export List</button>
                                <div className="table-responsive">
                                    <table className="table table-striped  zero-configuration">
                                        <thead>
                                            <tr>
                                                <th>Id #</th>
                                                <th>User Name</th>
                                                <th>User type</th>
                                                <th>Address</th>
                                                <th>Email</th>
                                                <th>Phone Number</th>
                                                <th>Acount Status</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                                <th>Block</th>
                                            </tr>
                                        </thead>
                                        <tbody id="table_body">
                                            {
                                                data.map((user) => {
                                                    return (
                                                        <tr>
                                                            <td>{user.id}</td>
                                                            <td>{user.user_name}</td>
                                                            <td><span className="badge badge-pill badge-success">{user.user_type}</span></td>
                                                            <td>{user.address}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.phone_number}</td>
                                                            {checkStatus(user)}
                                                            <td><button className="btn btn-info" >Edit</button></td>
                                                            <td><button className="btn btn-dark" >Block</button></td>
                                                            <td><button className="btn btn-danger" >Delete</button></td>

                                                        </tr>
                                                    );

                                                })
                                            }

                                        </tbody>

                                        <tfoot>
                                            <tr>
                                                <th>Id #</th>
                                                <th>User Name</th>
                                                <th>User type</th>
                                                <th>Address</th>
                                                <th>Email</th>
                                                <th>Phone Number</th>
                                                <th>Acount Status</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                                <th>Block</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >

    );
}

export default UserList;