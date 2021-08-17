import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Client_Sidemenu from '../Layouts/client_sidemenu';

function Contact() {

    const user = (JSON.parse(window.sessionStorage.getItem('user')));
    const history = useHistory();
    const [error, setError] = useState({
        error: [],
    })
    const [data, setData] = useState({
        user_name: " ",
        r_type: " ",
        description: " ",

    });

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const submitted = (e) => {
        e.preventDefault();
        console.log(data);
        axios.post(`http://127.0.0.1:8000/api/Contactdone/${user.id}`, JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
            .then(response => {
                console.log(response)
                if (response.data.status === 200) {
                    alert("Please wait for a notice");
                    history.push("/Client_dashboard")
                } else {
                    setError({
                        error: response.data.error
                    })
                }
            })
            .catch(error => {
                alert("Something went Wrong");
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

                                                <label class="col-lg-4 col-form-label" for="val-phoneus">Name <span
                                                    class="text-danger"></span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <input type="text" name="user_name" class="form-control" id="val-phoneus"
                                                        placeholder="Name" onChange={(e) => onChange(e)} />

                                                    <div class="div alert-danger">{error.error.user_name}</div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-nid">Request Type <span
                                                    class="text-danger"></span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <input type="text" name="r_type" class="form-control" id="val-nid"
                                                        placeholder="Request" onChange={(e) => onChange(e)} />
                                                    <div class="div alert-danger">{error.error.r_type}</div>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-skill">Description <span
                                                    class="text-danger"></span>
                                                </label>
                                                <textarea class="form-control h-150px" rows="6" name="description" id="comment" onChange={(e) => onChange(e)}></textarea>
                                                <div class="div alert-danger">{error.error.description}</div>
                                            </div>



                                            <div class="form-group row">
                                                <div class="col-lg-8 ml-auto">
                                                    <button type="submit" class="btn btn-primary">Submit</button>
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


export default Contact;