import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Client_Sidemenu from '../Layouts/client_sidemenu';

function Apply() {

    const user = (JSON.parse(window.sessionStorage.getItem('user')));
    const history = useHistory();
    const [error, setError] = useState({
        error: [],
    })
    const [data, setData] = useState({
        apply_type: "",
        description: "",

    });

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const submitted = (e) => {
        e.preventDefault();
        console.log(data);
        axios.post(`http://127.0.0.1:8000/api/Applydone/${user.id}`, JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
            .then(response => {
                console.log(response)
                if (response.data.status === 200) {
                    alert("Request Submitted...Wait for Manager Confirmation");
                    history.push("/Client_dashboard")
                } else {
                    setError({
                        error: response.data.error
                    })
                }
            })
        // .catch(error => {
        //     alert("Something Went Wrong");
        // })
    }


    return (
        <>
            <Client_Sidemenu />
            <div className=" client_content">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-validation">
                                        <form onSubmit={(e) => submitted(e)} className="form-valide" method="post">

                                            <div className="form-group row">

                                                <label className="col-lg-4 col-form-label" for="val-phoneus">Apply Type <span
                                                    className="text-danger"></span>
                                                </label>
                                                <div className="col-lg-6">
                                                    <select className="form-control" value={data.type} id="val-skill" name="apply_type" onChange={(e) => onChange(e)}>
                                                        <option value="">Please select</option>
                                                        <option value="Card">Card</option>
                                                        <option value="Checkbook">Checkbook</option>
                                                        <option value="Loan">Loan</option>
                                                        <option value="Vault">Vault</option>
                                                        <option value="Stop Bank Services">Stop Bank Services</option>

                                                    </select>
                                                    <div className="div alert-danger">{error.error.apply_type}</div>

                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-4 col-form-label" for="val-nid">Description <span
                                                    className="text-danger"></span>
                                                </label>
                                                <textarea className="form-control h-150px" rows="5" name="description" id="comment" onChange={(e) => onChange(e)}></textarea>
                                                <div className="div alert-danger">{error.error.description}</div>
                                            </div>


                                            <div className="form-group row">
                                                <div className="col-lg-8 ml-auto">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
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


export default Apply;