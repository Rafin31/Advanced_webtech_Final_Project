import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Sidebarmeo from "./Layouts/sidebarmeo";
import Header from './Header/Header'
// import Swal from 'sweetalert';

function AddReview() {
    const history = useHistory();
    const [error, setError] = useState({
        error: []
    })
    const [data, setData] = useState({
        id:"",
        user_name: "",
        request_type:"",
        description:"",
        status:""
    });


    const onchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const submitted = (e) => {
        e.preventDefault();
        // console.log(data);
        load();
        console.log(error);

    }

    const load = () => {
        console.log("te");
        const result = axios.post("http://127.0.0.1:8000/api/addreview", JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
            .then(response => {
                if (response.data.status === 200) {
                    alert("Problem Added Succefully");
                    history.push("/reviewlist")
                } else {
                    setError({
                        error: response.data.error
                    })
                }
            })
            .catch(error => {
                //history.push("/requestlist")
                alert("Something Went Wrong");
             
            })

           

    }

    return (
           <>
            <Sidebarmeo />
            <Header />
            <div className="content">
                <div class="container-fluid">
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <div class="card m-lg-5">
                                    <div class="card-body" >
                                        <div class="form-validation">
                                            <form onSubmit={(e) => submitted(e)} class="form-valide" class="alert alert-primary">

                                                
                                            <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-id">PROBLEM ID<span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                      
                                                        <input type="number" class="form-control" id="val-id"
                                                            name="id" placeholder="Enter User Id" onChange={(e) => onchange(e)} name="id" value={data.id} />
                                                        
                                                        <div className="error alert-danger">
                                                            <p>{error.error.id}</p>
                                                        </div>
                                                    </div>

                                                </div>

            
                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-username">USER NAME <span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="val-username"
                                                            name="user_name" placeholder="Enter a valid User Name" onChange={(e) => onchange(e)} name="user_name" value={data.user_name} />
                                                        
                                                        <div className="error alert-danger">
                                                            <p>{error.error.user_name}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-request_type">PROBLEM TYPE <span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="val-request_type" name="request_type"
                                                            placeholder="Your Problem Type" onChange={(e) => onchange(e)} name="request_type" value={data.request_type} />
                                                        
                                                        <div className="error alert-danger">
                                                            <p>{error.error.request_type}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            
                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label"
                                                        for="val-description">PROBLEM DESCRIPTION <span
                                                            class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <textarea type="text" class="form-control"
                                                            id="val-description" name="description"
                                                            placeholder="Enter Problem Description" onChange={(e) => onchange(e)} name="description" value={data.description} />
                                                        
                                                        <div className="error alert-danger">
                                                            <p>{error.error.description}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-phoneus">PROBLEM STATUS
                                                        <span class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="val-status" 
                                                            name="status" placeholder="Enter the status of Problem" onChange={(e) => onchange(e)} name="status" value={data.status} />
                                                   
                                                        <div className="error alert-danger">
                                                            <p>{error.error.status}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-status">

                                                    </label>
                                                    <div class="col-lg-6">
                                                        <button type="submit"
                                                            class="btn btn-dark w-100">ADD PROBLEM</button>
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

export default AddReview;