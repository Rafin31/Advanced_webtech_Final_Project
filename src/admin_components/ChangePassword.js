import React from 'react';
import Sidemenu from '../Layouts/sidemenu';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

function ChangePassword() {
    const user = (JSON.parse(window.sessionStorage.getItem('user')));
    const history = useHistory()
    const [error, setError] = useState({
        error: ""
    })
    const [data, setData] = useState({
        current_password: "",
        new_password: "",
        confirm_password: ""
    })

    const onchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const submitted = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to Change the Password?")) {
            load();
        }

    }
    const load = () => {
        const result = axios.post(`http://127.0.0.1:8000/api/changePasswordOperation/${user.id}`, JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
            .then(response => {
                if (response.data.status === 200) {
                    alert("Password Change Succefully");
                    history.push("/");
                } else {
                    setError({
                        error: response.data.error
                    })
                }
            })
            .catch(error => {
                alert("Something Went Wrong");
            })

    }


    return (
        <>
            <Sidemenu />
            <div className="content">
                <div class="container-fluid">
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <div class="card m-lg-5">
                                    <div class="card-body">
                                        <div class="form-validation">
                                            <form onSubmit={(e) => submitted(e)} class="form-valide">

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-password">Current Password <span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="password" class="form-control" id="val-password"
                                                            placeholder="Your Current Passsoword.." onChange={(e) => onchange(e)} name="current_password" value={data.current_password} />
                                                        {/* error */}
                                                        <div className="error alert-danger">
                                                            <p>{error.error.current_password}</p>
                                                        </div>

                                                    </div>

                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-password">New Password <span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="password" class="form-control" id="val-password"
                                                            name="new_password" placeholder="Choose a safe one.." onChange={(e) => onchange(e)} value={data.new_password} />
                                                        <div className="error alert-danger">
                                                            <p>{error.error.new_password}</p>
                                                        </div>
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
                                                            placeholder="..and confirm it!" onChange={(e) => onchange(e)} name="confirm_password" value={data.confirm_password} />
                                                        <div className="error alert-danger">
                                                            <p>{error.error.confirm_password}</p>
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
                                                            <p>{error.error}</p>
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

export default ChangePassword;