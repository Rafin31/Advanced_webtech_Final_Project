import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Sidebarmeo from "./Layouts/sidebarmeo";
import Header from './Header/Header'
// import Swal from 'sweetalert';

function EditRequest() {
    const history = useHistory();
    const { id } = useParams();
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
    useEffect(() => {
        loadEditRequest();
    }, [])
    const loadEditRequest = () => {
        const result = axios.get(`http://127.0.0.1:8000/api/editrequest/${id}`)
            .then(response => {
                setData(response.data.requests)
            })
            .catch(error => {
                alert("something Went Wrong");
            })

    }

    const onchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const submitted = (e) => {
        e.preventDefault();
        // console.log(data);
        Edit();
        //console.log(error);

    }

    const Edit = () => {
        const result = axios.post(`http://127.0.0.1:8000/api/editrequestoparation/${id}`, JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
            .then(response => {
                if (response.data.status === 200) {
                    alert("User Eddited Succefully");
                    history.push("/requestlist")
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
          <Sidebarmeo />
          <Header />
            <div className="content" >
                <div class="container-fluid">
                    <div class="container-fluid" >
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <div class="card m-lg-5">
                                    <div class="card-body">
                                        <div class="form-validation"  class="alert alert-primary">
                                            <form onSubmit={(e) => submitted(e)} class="form-valide">

                                            
                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-id">ID<span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="number" class="form-control" id="val-id" name="id"
                                                            placeholder="" onChange={(e) => onchange(e)} name="id" value={data.id} />
                                                        {/* error */}
                                                        <div className="error alert-danger">
                                                            <p>{error.error.id}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-username">USERNAME <span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="val-username"
                                                            name="user_name" placeholder="" onChange={(e) => onchange(e)} name="user_name" value={data.user_name} />
                                                        {/* error */}
                                                        <div className="error alert-danger">
                                                            <p>{error.error.user_name}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-request_type">REQUEST_TYPE <span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="val-request_type" name="request_type"
                                                            placeholder="" onChange={(e) => onchange(e)} name="request_type" value={data.request_type} />
                                                        {/* error */}
                                                        <div className="error alert-danger">
                                                            <p>{error.error.request_type}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label"
                                                        for="val-confirm-password">DESCRIPTION<span
                                                            class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="val-confirm-password"
                                                            name="description" placeholder="" onChange={(e) => onchange(e)} name="description" value={data.description} />
                                                        {/* error */}
                                                        <div className="error alert-danger">
                                                            <p>{error.error.address}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-phoneus">STATUS
                                                        <span class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="val-phoneus"
                                                            name="status" placeholder="" onChange={(e) => onchange(e)} name="status" value={data.status} />
                                                        {/* error */}
                                                        <div className="error alert-danger">
                                                            <p>{error.error.status}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-phoneus">

                                                    </label>
                                                    <div class="col-lg-6">
                                                        <button type="submit"
                                                            class="class=btn btn-dark w-100">EDIT REQUEST</button>
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

export default EditRequest;