import React from 'react';
import { Link } from 'react-router-dom';
import Sidemenu from '../Layouts/sidemenu';

function Profile() {

    console.log(window.sessionStorage.getItem('status'))
    return (
        <>
            <Sidemenu />
            <div className="content">

                <div class="container-fluid">

                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">

                                    <div class="col-12 mt-5 text-center">
                                        <Link to=""
                                            class="btn mr-3 btn-danger">
                                            Edit Profile</Link>
                                        <Link to=""
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

                                                                    <th><strong class="text-dark mr-4">User Id</strong></th>
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
                                                                    <td> </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td class="color-primary"></td>
                                                                    <td class="color-primary"></td>
                                                                    <td><span
                                                                        class="badge badge-primary px-2"></span>
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