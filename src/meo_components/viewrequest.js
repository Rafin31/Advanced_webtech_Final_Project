
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
// import Swal from 'sweetalert';
import React from "react";
import Sidebarmeo from "./Layouts/sidebarmeo";
import Header from './Header/Header'


function ViewRequest() {
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
        loadViewRequest();
    }, [])
    const loadViewRequest = () => {
        const result = axios.get(`http://127.0.0.1:8000/api/viewrequest/${id}`)
            .then(response => {
                setData(response.data.requests)
                if (response.data.status === 200) {
                    setData(response.data.requests)
                }
                
            })
            .catch(error => {
               alert("something Went Wrong");
            })

    }

    const onchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
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
                                    <div class="card-body" class="alert alert-primary">
                                        <div class="form-validation">
                                            <form class="form-valide">

                                            
                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label"> <h4>ID</h4>
                                                    
                                                    </label>
                                                    <div class="col-lg-6">
                                                       <h4><input type="number" class="alert alert-info" value={data.id} disabled/></h4> 
                                                        {/* <h4  type="number" class="alert alert-primary" disabled>{data.id}</h4>   */}
                                                        
                                                       
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label"><h4>UserName</h4> 
                                                    </label>
                                                    <div class="col-lg-6">
                                                       <h4><input type="text" class="alert alert-success" value={data.user_name} disabled /></h4> 
                                                        {/* <h4 type="text" class="alert alert-success"  disabled >{data.user_name}</h4> */}
                                                  
                                                       
                                                    </div>

                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label"><h4>Request_Type </h4>
                                                    </label>
                                                    <div class="col-lg-6">

                                                    <h4><input type="text" class="alert alert-danger" value={data.request_type} disabled/></h4>
                                                    
                                                  
                                                        
                                                    </div>
                                                </div>


                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" ><h4>Status</h4>
                                                 
                                                    </label>
                                                    <div class="col-lg-6">
                                                        {/* <input type="text" class="alert alert-info" value={data.status}  disabled/> */}
                                                       <h4><input type="text" class="alert alert-info" value={data.status}  disabled/></h4> 
                                                      
                                                    </div>
                                                </div>

                                                
                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label"> <h4>Description</h4>
                                                           
                                                    </label>
                                                    <div class="col-lg-6">
                                                       <h4><textarea type="text" class="alert alert-warning" 
                                                              value={data.description} disabled /></h4> 
                                                        
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" >

                                                    </label>
                                                    <div class="col-lg-6">
                                                        
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




export default ViewRequest;