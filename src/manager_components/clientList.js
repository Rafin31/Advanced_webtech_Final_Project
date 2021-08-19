import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactHtmlTableToExcel from "react-html-table-to-excel"
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../Layouts/manager_navBar';
import Client from './client';

function ClientList() {
    const[list,setLists]=useState([]);
    const getData=async () => 
    {
    const response=await axios.get("http://localhost:8000/api/clientlist")
    .then(response=>{
       
         setLists(response.data.users);

    })
    .catch(error=>{

        console.log(error);
        /*<tr>
                                                            <td>{user.id}</td>
                                                            <td>{user.account_balance}</td>
                                                            <td>{user.account_type}</td>
                                                            <td>{user.nid_varification}</td>
                                                            <td>{user.account_status}</td>
                                                            

                                                        </tr>*/

    }
    )
    }
    getData();
  
   return (
    <>
 <NavBar status="Client's List"> </NavBar>
                                <p align="center"><table border="8" height="500" width="500" >
                                        
{
                                                list.map((user) => {
                                                    return <Client {...user} />

                                                })
                                            }
 </table> </p>
</>

); 
}
export default ClientList;