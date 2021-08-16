import React from 'react';
import Client_Sidemenu from '../Layouts/client_sidemenu';

function Client_EditProfile() {
    return (
        <>
            <Client_Sidemenu />
            <div className="content">
                <div class="container-fluid">
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="card m-lg-5">
                                    <div class="card-body">
                                        <div class="form-validation">
                                            <form class="form-valide">

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-skill">User Type <span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <select class="form-control" name="user_type" id="val-skill"
                                                            name="val-skill" name="user_type" disabled >
                                                            <option >User Type</option>
                                                            <option value="clients">Clients</option>
                                                            <option value="bank_manager">Bank Manager</option>
                                                            <option value="noney_exchange_officer">Money exchange officer
                                                            </option>
                                                            <option value="admin">Admin</option>
                                                        </select>



                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-username">Username <span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="val-username"
                                                            name="user_name" placeholder="Enter a username.." name="user_name" />

                                                    </div>

                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-email">Email <span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="val-email" name="email"
                                                            placeholder="Your valid email.." name="email" />

                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label"
                                                        for="val-confirm-password">Address <span
                                                            class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="val-confirm-password"
                                                            name="address" placeholder="Address" name="address" />

                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-phoneus">Phone (BD)
                                                        <span class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="val-phoneus"
                                                            name="phone_number" placeholder="+88 01754789658" name="phone_number" />

                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-phoneus">

                                                    </label>
                                                    <div class="col-lg-6">
                                                        <button type="submit"
                                                            class="btn btn-primary w-100">Edit</button>
                                                    </div>
                                                </div>
                                            </form>
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


export default Client_EditProfile;