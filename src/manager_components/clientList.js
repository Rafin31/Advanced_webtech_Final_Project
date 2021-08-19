import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactHtmlTableToExcel from "react-html-table-to-excel"
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../Layouts/manager_navBar';

function ClientList() {
    const[list,setLists]=useState([]);
    const response=axios.get("http://localhost:8000/api/clientlist")
    .then(response=>{
       
        setLists(response.data.users);

    })
    .catch(error=>{

        console.log(error);

    }
    )
  
   return (
    <>
 <NavBar status="Client's List"> </NavBar>
                                <p align="center"><table border="8" height="500" width="500" >
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Account Balance</th>
                                                <th>Account type</th>
                                                <th>NID Verification No.</th>
                                                <th>Acount Status</th>
                                            </tr>
                                        </thead>
{
                                                list.map((user) => {
                                                    return (
                                                       
                                                      
                                                         
                                                            
                                                        <tr>
                                                            <td>{user.id}</td>
                                                            <td>{user.account_balance}</td>
                                                            <td>{user.account_type}</td>
                                                            <td>{user.nid_varification}</td>
                                                            <td>{user.account_status}</td>
                                                            

                                                        </tr>
                                                       
                                                    );

                                                })
                                            }
 </table> </p>
</>

); 
}
export default ClientList;