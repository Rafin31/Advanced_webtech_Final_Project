import React from 'react';
import Client_Sidemenu from '../Layouts/client_sidemenu';

function Client_changepassword() {
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
                                                    <label class="col-lg-4 col-form-label" for="val-password">Current Password <span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="password" class="form-control" id="val-password"
                                                            placeholder="Your Current Passsoword.." name="current_password" />
                                                        {/* error */}
                                                        <div className="error alert-danger">
                                                            {/* <p>{error.error.current_password}</p> */}
                                                        </div>

                                                    </div>

                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-password">New Password <span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="password" class="form-control" id="val-password"
                                                            name="new_password" placeholder="Choose a safe one.." />
                                                        {/* <div className="error alert-danger">
                                                            <p>{error.error.new_password}</p>
                                                        </div> */}
                                                    </div>

                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label"
                                                        for="val-confirm-password">Confirm Password <span
                                                            class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="password" class="form-control"
                                                            id="val-confirm-password" name="con_password"
                                                            placeholder="..and confirm it!" name="confirm_password" />
                                                        <div className="error alert-danger">
                                                            {/* <p>{error.error.confirm_password}</p> */}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-phoneus">

                                                    </label>
                                                    <div class="col-lg-6">
                                                        <button type="submit" name="submit"
                                                            class="btn btn-primary w-100">Confirm</button>
                                                        <div className="error alert-danger mt-3">
                                                            {/* <p>{error.error}</p> */}
                                                        </div>

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

export default Client_changepassword;