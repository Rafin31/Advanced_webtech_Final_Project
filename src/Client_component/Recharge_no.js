import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Client_Sidemenu from '../Layouts/client_sidemenu';

function Recharge_no() {
    const user = (JSON.parse(window.sessionStorage.getItem('user')));
    const history = useHistory();
    const [error, setError] = useState({
        error: [],
        insufficient: " "
    })
    const [data, setData] = useState({
        p_num: " ",
        amount: " ",
        type: " ",
        acc_number: " ",
        pin: " "
    });

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const submitted = (e) => {
        e.preventDefault();
        console.log(data);
        axios.post(`http://127.0.0.1:8000/api/Recharge_moneydone/${user.id}`, JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
            .then(response => {
                console.log(response)
                if (response.data.status === 200) {
                    alert("Recharged Successfully");
                    history.push("/Client_dashboard")
                } else if (response.data.status === 202) {
                    setError({
                        insufficient: response.data.insufficient,
                        error: []
                    })
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
            <Client_Sidemenu />
            <div className=" client_content">
                <div class="container-fluid">
                    <div class="alert-danger"></div>
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="card">
                                <div class="card-body">
                                    <div class="form-validation">
                                        <form onSubmit={(e) => submitted(e)} class="form-valide" method="post">

                                            <div class="form-group row">

                                                <label class="col-lg-4 col-form-label" for="val-phoneus">Phone Number <span
                                                    class="text-danger"></span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <input type="number" name="p_num" class="form-control" id="val-phoneus"
                                                        placeholder="+880" onChange={(e) => onChange(e)} />

                                                    <div class="div alert-danger">{error.error.p_num}</div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-skill">Type <span
                                                    class="text-danger">*</span>
                                                </label>

                                                <div class="col-lg-6">
                                                    <select class="form-control" id="val-skill" name="type" onChange={(e) => onChange(e)}>
                                                        <option value="">Please select</option>
                                                        <option value="Robi">Robi</option>
                                                        <option value="Grameen Phone">Grameen Phone</option>
                                                        <option value="Airtel">Banklalink</option>
                                                        <option value="Airtel">Airtel</option>
                                                    </select>
                                                    <div class="div alert-danger">{error.error.type}</div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-nid">Amount <span
                                                    class="text-danger"></span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <input type="number" name="amount" class="form-control" id="val-nid"
                                                        placeholder="Amount" onChange={(e) => onChange(e)} />
                                                    <div class="div alert-danger">{error.error.amount}</div>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-skill">Enter Account Number <span
                                                    class="text-danger"></span>
                                                </label>

                                                <div class="col-lg-6">
                                                    <input type="number" name="acc_number" class="form-control" id="val-nid"
                                                        placeholder="Enter Account Number" onChange={(e) => onChange(e)} />
                                                    <div class="div alert-danger">{error.error.acc_number}</div>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-date">Pin <span
                                                    class="text-danger"></span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <input type="password" name='pin' class="form-control" id="val-date"
                                                        placeholder="pin" onChange={(e) => onChange(e)} />
                                                    <div class="div alert-danger">{error.error.pin}</div>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <div class="col-lg-8 ml-auto">
                                                    <button type="submit" class="btn btn-primary">Send</button>
                                                    <div class="div alert-danger">{error.insufficient}</div>
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
        </>
    );
} export default Recharge_no;