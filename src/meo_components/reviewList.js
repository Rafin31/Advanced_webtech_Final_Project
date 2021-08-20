import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebarmeo from "./Layouts/sidebarmeo";
import Header from './Header/Header'
import { Link, useHistory } from 'react-router-dom';


// import Swal from 'sweetalert';

function ReviewList() {
    const [data, setData] = useState([]);
    const history = useHistory();


    const load = async () => {
        const res = await axios.get("http://127.0.0.1:8000/api/reviewlist");
        setData(res.data.reviews);
    }
    useEffect(() => {
        load();
    }, []);
    

    const onDelete = (id) => {
        if (window.confirm("Do you want to Delete the problem?")) {
    

            const result = axios.post(`http://127.0.0.1:8000/api/destroyreview/${id}`)
                .then(response => {
                    if (response.data.status === 200) {
                        alert("Problem Deleted Succefully");
                        window.location.reload()
                    } 
                    // else {
                    //     alert("Something Went Wrong");
                    // }
                })
                // .catch(error => {
                //     alert("Something Went Wrong");
                // })

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
                                <h4 className="card-title" class="alert alert-danger">Problem Of Clients For Money Exchange</h4>
                              
                               
                                <div className="table-responsive">
                                    <table className="table table-striped  zero-configuration">
                                        <thead class="alert alert-danger">
                                            <tr>
                                                <th>PROBLEM ID</th>
                                                <th>USER NAME</th>
                                                <th>PROBLEM TYPE</th>
                                                <th>PROBLEM DETAILS</th>
                                                <th>STATUS</th>
                                                <th>VIEW PROBLEM</th>
                                                <th>EDIT PROBLEM</th>
                                                <th>DELETE PROBLEM</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody id="table_body">
                                            {
                                                data.map((review) => {
                                                    return (
                                                        <tr>
                                                            <td >{review.id}</td>
                                                            <td>{review.user_name}</td>
                                                            <td>{review.request_type}</td>
                                                            <td>{review.description}</td>
                                                            <td><span class="badge badge-success">{review.status}</span></td>
                                                            <td><Link onClick={() => { onDelete(review.id) }} className="btn btn-danger" >Delete</Link></td>
                                                            <td><Link to={`/reviewlist/view/${review.id}`} class="btn btn-warning" >View</Link></td>
                                                            <td><Link to={`/reviewlist/edit/${review.id}`} class="btn btn-primary" >Edit</Link></td>
                                                           
                                                           
         
                                                        </tr>
                                                    );

                                                })
                                            }

                                        </tbody>

                                        <tfoot class="alert alert-danger">
                                            <tr>
                                            <th>PROBLEM ID</th>
                                                <th>USER NAME</th>
                                                <th>PROBLEM TYPE</th>
                                                <th>PROBLEM DETAILS</th>
                                                <th>STATUS</th>
                                                <th>VIEW PROBLEM</th>
                                                <th>EDIT PROBLEM</th>
                                                <th>DELETE PROBLEM</th>
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

export default ReviewList;