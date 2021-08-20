import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactHtmlTableToExcel from "react-html-table-to-excel"
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../Layouts/manager_navBar';
import Request from './requests';

function RequestList() {
    const[list,setLists]=useState([]);
    const response=axios.get("http://localhost:8000/api/requests")
    .then(response=>{
       console.log(response.data);
        setLists(response.data.users);

    })
    .catch(error=>{

        console.log(error);


    }
    )

    const accept=(id)=>
    {

          console.log("Clicked"+id);
          axios.get('http://localhost:8000/api/acceptreq/${id}')
      .then(response=> 
        {
            if (response.data.status === 201)
            {
                alert("Validation Failed !");
            }
            else
            {
                console.log("Succesfully respond")
                alert("Accepted !");

            }
          
        })
        .catch(
          error=>
          {
            console.log(error.response)
            alert (error);
          }
        )
    
    }
    
  
   return (
    <>
 <NavBar status="Requests's  List"> </NavBar>
 
{
                                                list.map((user) => {
                                                     
                                                       
                                                    return  (  <div className='division'>
                                                        <p> ID: {user.id} </p>
                                                        <p> request_id : {user.request_id} </p>
                                                        <p>  description : {user.description} </p>
                                                        <p> status : {user.status} </p>
                                                        <Link onClick={()=>{accept(user.id)}}>  Accept </Link>

                                                    </div> );
                                                  
                                                        
                                                    

                                                })
                                            }

</>

); 
}
export default RequestList;