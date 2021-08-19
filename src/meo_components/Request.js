import React, { useEffect, useState } from 'react';
import Sidemenu from '../Layouts/sidemenu';
import { Link } from 'react-router-dom';
import axios from 'axios';



function Request() {

    const [data, setData] = useState([])


    useEffect(async () => {
        const req = await axios.get("http://127.0.0.1:8000/api/clientReq");
        setData(req.data.requests);

    }, [])
    const onApprove = (id) => {
        if (window.confirm("Are you sure you want to Approved the request?")) {

            const result = axios.post(`http://127.0.0.1:8000/api/clientReqOperation/${id}`)
                .then(response => {
                    if (response.data.status === 200) {
                        alert("Request Approved Succefully");
                        window.location.reload()
                    } else {
                        alert("Something Went Wrong");
                    }
                })
                .catch(error => {
                    alert("Something Went Wrong");
                })

        }
    }


    return (
        <div className="content">
            <div className="container-fluid">
                <Sidemenu />
                <div className="row justify-content-center">
                    <div className="col-sm-10 ">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Request Lists</h4>
                                <div className="table-responsive">
                                    <table className="table table-striped  zero-configuration">
                                        <thead>
                                            <tr>
                                                <th>Id #</th>
                                                <th>User Name</th>
                                                <th>Request type</th>
                                                <th>Description</th>
                                                <th>Status</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody id="table_body">
                                            {
                                                data.map((user) => {
                                                    return (
                                                        <tr>
                                                            <td>{user.id}</td>
                                                            <td>{user.user_name}</td>
                                                            <td>{user.request_type}</td>
                                                            <td>{user.description}</td>
                                                            <td><span className="badge badge-pill badge-warning">{user.status}</span></td>
                                                            <td><Link onClick={() => { onApprove(user.id) }} className="btn btn-success"  >Approve</Link></td>
                                                        </tr>
                                                    );

                                                })
                                            }
                                        </tbody>

                                        <tfoot>
                                            <tr>
                                                <th>Id #</th>
                                                <th>User Name</th>
                                                <th>Request type</th>
                                                <th>Description</th>
                                                <th>Status</th>
                                                <th>Action</th>
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

export default Request;