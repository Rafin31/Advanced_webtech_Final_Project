import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Sidemenu from '../Layouts/sidemenu';
import axios from 'axios';

function Profile() {
    const user = (JSON.parse(window.sessionStorage.getItem('user')));
    const [data, setdata] = useState([]);

    const Edit = () => {
        const result = axios.get(`http://127.0.0.1:8000/api/edituser/${user.id}`)
            .then(response => {
                setdata(response.data.users);
            })

    }
    useEffect(() => {
        Edit();
    }, [])

    return (

        <>
            <Sidemenu />
            <div className="content">

                <div class="container-fluid">

                    <div class="row justify-content-center">
                        <div class="col-10">
                            <div class="card">
                                <div class="card-body">
                                    <div class="col-12 mt-5 text-center">
                                        <Link to="/editprofile"
                                            class="btn mr-3 btn-danger">
                                            Edit Profile</Link>
                                        <Link to="/changepassword"
                                            class="btn btn-danger w-auto"> Change Password</Link>
                                    </div>

                                    <div class="media align-items-center mb-4">
                                        <div class="media-body">
                                            <h3 class="mb-0"></h3>
                                            <p class="text-muted mb-0"></p>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="card-title">
                                                        <h4>Profile Information</h4>
                                                    </div>
                                                    <div class="table-responsive">
                                                        <table class="table table-hover">
                                                            <thead>
                                                                <tr>

                                                                    <th><strong class="text-dark mr-4">User Id#</strong></th>
                                                                    <th><strong class="text-dark mr-4">User Name</strong>
                                                                    </th>
                                                                    <th><strong class="text-dark mr-4">Email</strong></th>
                                                                    <th><strong class="text-dark mr-4">Mobile</strong></th>
                                                                    <th><strong class="text-dark mr-4">Address</strong></th>
                                                                    <th><strong class="text-dark mr-4">User Type</strong>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                <tr>
                                                                    <td>{data.id}</td>
                                                                    <td>{data.user_name}</td>
                                                                    <td>{data.email}</td>
                                                                    <td class="color-primary">{data.phone_number}</td>
                                                                    <td>{data.address}</td>
                                                                    <td><span
                                                                        class="badge badge-primary px-2">{data.user_type}</span>
                                                                    </td>
                                                                </tr>


                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Profile;