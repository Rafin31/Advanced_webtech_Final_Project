import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebarmeo from "./Layouts/sidebarmeo";
import Header from './Header/Header'
import axios from 'axios';

function ProfileMeo() {
    const user = (JSON.parse(window.sessionStorage.getItem('user')));
    const [data, setdata] = useState([]);

    const Edit = () => {
        const result = axios.get(`http://127.0.0.1:8000/api/edituser/${user.id}`)
            .then(response => {
                setdata(response.data.users);
            })

    }
    useEffect(() => {
        Edit();
    }, [])

            return (

                <>
                 <Sidebarmeo />
                    <Header />
                    <br /> 
                    <br />
                  
                     <div className="content">

                     <br />

                     <div class="container-fluid">



        <h1 class="list-group-item">Profile Details</h1>
        
        <h3 class="list-group-item list-group-item-primary" >ID: {data.id}</h3>
        <h3 class="list-group-item list-group-item-secondary">User Name: {data.user_name}</h3>
        <h3 class="list-group-item list-group-item-success">User Email: {data.email}</h3>
        <h3 class="list-group-item list-group-item-danger">User Phone Number: {data.phone_number}</h3>
        <h3 class="list-group-item list-group-item-warning">User Address: {data.address}</h3>
        <h3 class="list-group-item list-group-item-info">User Type: {data.user_type}</h3>
            
  
    
        



                        </div>
            </div>

        </>
    );
}

export default ProfileMeo;