import React, { useState } from 'react';
import Sidemenu from '../Layouts/sidemenu';
import axios from 'axios';

function Postnotices(props) {
    const user = (JSON.parse(window.sessionStorage.getItem('user')));
    const [error, setError] = useState({
        error: "",

    })
    const [data, setData] = useState({
        subject: "",
        description: ""
    })

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        load();

    }
    const load = () => {
        console.log("te");
        const result = axios.post(`http://127.0.0.1:8000/api/postNoticesOperation/${user.id}`, JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
            .then(response => {
                if (response.data.status === 200) {
                    alert("Notices Posted Succefully");
                    window.location.reload();

                } else {
                    setError({
                        error: response.data.error
                    })
                    alert("Something Went Wrong");
                    window.location.reload();
                }
            })
            .catch(error => {
                alert("Something Went Wrong");
                window.location.reload();
            })

    }
    return (
        <>
            <Sidemenu />
            <div className="content">
                <div class="container-fluid">
                    <div className="row justify-content-center">
                        <div class="errors alert-success"></div>
                        <div class="col-lg-9">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Post Notices</h4>
                                    <div class="basic-form">
                                        <form onSubmit={(e) => onSubmit(e)}>

                                            <div class="form-group">
                                                <label>Subject:</label>
                                                <input type='text' placeholder="*Maximum 255 words" class="form-control mb-3"
                                                    name="subject" required value={data.subject} onChange={(e) => onChange(e)} />
                                                {/* error */}
                                                <div className="error alert-danger">
                                                    <p>{error.error.subject}</p>
                                                </div>

                                                <label>Notece:</label>
                                                <textarea name="description" class="form-control h-150px"
                                                    placeholder="*Maximum 1000 words" rows="6" id="comment" required value={data.description} onChange={(e) => onChange(e)}></textarea>
                                                {/* error */}
                                                <div className="error alert-danger">
                                                    <p>{error.error.description}</p>
                                                </div>
                                                <button type="submit" name="submit"
                                                    class="btn btn-primary mt-3 w-100">Post</button>
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

export default Postnotices;