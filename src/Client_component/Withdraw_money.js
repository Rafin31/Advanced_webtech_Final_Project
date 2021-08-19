import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Client_Sidemenu from '../Layouts/client_sidemenu';

function Withdraw_money() {
    const user = (JSON.parse(window.sessionStorage.getItem('user')));
    const history = useHistory();
    const [error, setError] = useState({
        error: [],
        insufficient: " "
    })
    const [data, setData] = useState({
        p_number: " ",
        amount: " ",
        type: " ",
        pin: " "
    });

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const submitted = (e) => {
        e.preventDefault();

        axios.post(`http://127.0.0.1:8000/api/WithdrawDone/${user.id}`, JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
            .then(response => {
                console.log(response)
                if (response.data.status === 200) {
                    alert("Successfully Withdrawed");
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

                                                <label class="col-lg-4 col-form-label" for="val-phoneus">Phone (BD) <span
                                                    class="text-danger">*</span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <input type="text" name="p_number" class="form-control" id="val-phoneus"
                                                        placeholder="+880" onChange={(e) => onChange(e)} />

                                                    <div class="div alert-danger">{error.error.p_number}</div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-nid">Amount <span
                                                    class="text-danger"></span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <input type="number" name="amount" class="form-control" id="val-nid"
                                                        placeholder="Amount.." onChange={(e) => onChange(e)} />
                                                    <div class="div alert-danger">{error.error.amount}</div>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-skill">Type <span
                                                    class="text-danger">*</span>
                                                </label>

                                                <div class="col-lg-6">
                                                    <select class="form-control" name="type" id="val-skill" onChange={(e) => onChange(e)}>
                                                        <option >Please select</option>
                                                        <option value="Bkash">Bkash</option>
                                                        <option value="Nagad">Nagad</option>
                                                        <option value="Rocket">Rocket</option>


                                                    </select>
                                                    <div class="div alert-danger">{error.error.type}</div>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-date">Pin <span
                                                    class="text-danger">*</span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <input type="password" name='pin' class="form-control" id="val-date"
                                                        placeholder="pin" onChange={(e) => onChange(e)} />
                                                    <div class="div alert-danger">{error.error.pin}</div>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <div class="col-lg-8 ml-auto">
                                                    <button type="submit" name="submit" class="btn btn-primary">Submit</button>
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
}

export default Withdraw_money;