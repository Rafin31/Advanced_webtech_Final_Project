import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Client_Sidemenu from '../Layouts/client_sidemenu';


function Client_changepassword() {

    const user = (JSON.parse(window.sessionStorage.getItem('user')));
    const history = useHistory()
    const [error, setError] = useState({
        error: [],
        incorrect: ""
    })
    const [data, setData] = useState({
        c_password: "",
        n_password: "",
        con_password: ""
    })

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const submitted = (e) => {
        e.preventDefault();
        if (window.confirm("Do you want to Change the Password?")) {
            load();
        }

    }
    const load = () => {
        const result = axios.post(`http://127.0.0.1:8000/api/Client_changepassword/${user.id}`, JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
            .then(response => {
                console.log(response)
                if (response.data.status === 200) {
                    alert("Password Change Succefully");
                    history.push("/");
                } else if (response.data.status === 202) {
                    setError({
                        incorrect: response.data.incorrect,
                        error: []
                    })
                } else {
                    setError({
                        error: response.data.error,
                        incorrect: " "
                    })
                }
            })
            .catch(error => {
                alert("Something Went Wrong");
            })

    }


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
                                            <form onSubmit={(e) => submitted(e)} class="form-valide">

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-password">Current Password <span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="password" class="form-control" id="val-password"
                                                            placeholder="Your Current Passsoword.." name="c_password" onChange={(e) => onChange(e)} />

                                                        <div className="error alert-danger">{error.error.c_password}</div>
                                                    </div>

                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-password">New Password <span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="password" class="form-control" id="val-password"
                                                            name="n_password" placeholder="New Password" onChange={(e) => onChange(e)} />
                                                        <div className="error alert-danger">{error.error.n_password}</div>
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
                                                            placeholder="Confirm Password" onChange={(e) => onChange(e)} />
                                                        <div className="error alert-danger">{error.error.con_password}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-phoneus">

                                                    </label>
                                                    <div class="col-lg-6">
                                                        <button type="submit" name="submit"
                                                            class="btn btn-primary w-100">Confirm</button>
                                                        <div className="error alert-danger mt-3">{error.incorrect}

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