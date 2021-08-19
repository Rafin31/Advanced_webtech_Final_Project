import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Client_Sidemenu from '../Layouts/client_sidemenu';

function Exchange_Currency() {

    const user = (JSON.parse(window.sessionStorage.getItem('user')));
    const history = useHistory();
    const [error, setError] = useState({
        error: []
    })
    const [data, setData] = useState({
        ex_from: " ",
        ex_amount: " ",
        ex_to: " ",
        date: " ",
        pin: " "
    });

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const submitted = (e) => {
        e.preventDefault();
        console.log(data);
        axios.post(`http://127.0.0.1:8000/api/Exchange_Currencydone/${user.id}`, JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
            .then(response => {
                console.log(response)
                if (response.data.status === 200) {
                    alert("Collect Money From The Bank");
                    history.push("/Client_dashboard")
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



                                            <div class="form-group">
                                                <label><b>From</b></label>
                                                <select class="form-control" id="sel1" name="ex_from" onChange={(e) => onChange(e)}>
                                                    <option value="Please select">Please select</option>
                                                    <option value="USD-US DOLLAR">USD-US DOLLAR</option>
                                                    <option value="IND-Rupees">IND-Rupees</option>
                                                    <option value="BNG-Taka">BNG-Taka</option>
                                                    <option value="SK-Won">SK-Won</option>
                                                    <option value="EUR-euro">EUR-euro</option>
                                                </select>

                                                <div class="div alert-danger">{error.error.ex_from}</div>
                                            </div>

                                            <div>
                                                <b>Exchange Amount</b>
                                                <input type="number" class="form-control" size="30" name="ex_amount" placeholder="৳" onChange={(e) => onChange(e)} />
                                                <div class="div alert-danger">{error.error.ex_amount}</div>
                                            </div>

                                            <div class="form-group" >
                                                <label><b>TO</b></label>
                                                <select class="form-control" id="sel1" name="ex_to" onChange={(e) => onChange(e)}>
                                                    <option value="Please select">Please select</option>
                                                    <option value="USD-US DOLLAR">USD-US DOLLAR</option>
                                                    <option value="IND-Rupees">IND-Rupees</option>
                                                    <option value="BNG-Taka">BNG-Taka</option>
                                                    <option value="SK-Won">SK-Won</option>
                                                    <option value="EUR-euro">EUR-euro</option>
                                                </select>
                                                <div class="div alert-danger">{error.error.ex_to}</div>
                                            </div>


                                            <div class="form-group row">

                                                <label class="col-lg-4 col-form-label" for="val-phoneus"><b>Date</b> <span
                                                    class="text-danger"></span>
                                                </label>


                                                <div class="col-lg-6">
                                                    <input type="date" class="form-control" name="date" onChange={(e) => onChange(e)} />
                                                    <div class="div alert-danger">{error.error.date}</div>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-date"><b>Pin</b> <span
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
                                                    <button type="submit" class="btn btn-primary">Convert</button>

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


export default Exchange_Currency;