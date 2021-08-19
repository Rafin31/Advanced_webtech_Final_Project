import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebarmeo from "./Layouts/sidebarmeo";
import Header from './Header/Header'
import { Link, useHistory } from 'react-router-dom';

// import Swal from 'sweetalert';

function RequestList() {
    const [data, setData] = useState([]);
    const history = useHistory();


    const load = async () => {
        const res = await axios.get("http://127.0.0.1:8000/api/requestlist");
        setData(res.data.requests);
    }
    useEffect(() => {
        load();
    }, []);
    

    const onDelete = (id) => {
        if (window.confirm("Are you sure you want to Delete the user?")) {
        //   if (alert("Are you sure?", { dangerMode: true,  buttons: true,})){

            const result = axios.post(`http://127.0.0.1:8000/api/destroy/${id}`)
                .then(response => {
                    if (response.data.status === 200) {
                        alert("User Deleted Succefully");
                        window.location.reload()
                    } else {
                        alert("Something Went Wrong");
                    }
                })
                .catch(error => {
                    alert("Something Went Wrong");
                })

        }
    }


    return (
        <div className="content">
            <div className="container-fluid">
                <Sidebarmeo />
                <Header />
                <div className="row justify-content-center">
                    <div className="col-12 ">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title" class="alert alert-primary">Request Lists For Money Exchange</h4>
                              
                          
                                <div className="table-responsive">
                                    <table className="table table-striped  zero-configuration">
                                        <thead class="alert alert-primary">
                                            <tr>
                                                <th>ID</th>
                                                <th>USER NAME</th>
                                                <th>REQUEST TYPE</th>
                                                <th>DESCRIPTION</th>
                                                <th>STATUS</th>
                                                <th>VIEW</th>
                                                <th>EDIT</th>
                                                <th>DELETE</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody id="table_body">
                                            {
                                                data.map((request) => {
                                                    return (
                                                        <tr>
                                                            <td >{request.id}</td>
                                                            <td>{request.user_name}</td>
                                                            <td>{request.request_type}</td>
                                                            <td>{request.description}</td>
                                                            <td><span class="badge badge-success">{request.status}</span></td>
                                                            <td><Link to={`/requestlist/view/${request.id}`} class="btn btn-warning" >View</Link></td>
                                                            <td><Link to={`/requestlist/edit/${request.id}`} class="btn btn-primary" >Edit</Link></td>
                                                           <td><Link onClick={() => { onDelete(request.id) }} className="btn btn-danger" >Delete</Link></td>
                                                           
         
                                                        </tr>
                                                    );

                                                })
                                            }

                                        </tbody>

                                        <tfoot class="alert alert-primary">
                                            <tr>
                                                <th>ID</th>
                                                <th>USER NAME</th>
                                                <th>REQUEST TYPE</th>
                                                <th>DESCRIPTION</th>
                                                <th>STATUS</th>
                                                <th>VIEW</th>
                                                <th>EDIT</th>
                                                <th>DELETE</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div >

    );
}

export default RequestList;