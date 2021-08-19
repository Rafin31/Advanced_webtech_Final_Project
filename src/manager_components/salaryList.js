import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactHtmlTableToExcel from "react-html-table-to-excel"
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../Layouts/manager_navBar';
import Salary from './salary';

function SalaryList() {
    const[list,setLists]=useState([]);
    const response=axios.get("http://localhost:8000/api/salarylist")
    .then(response=>{
       console.log(response.data);
        setLists(response.data.users);

    })
    .catch(error=>{

        console.log(error);
        /*<tr>
                                                            <td>{user.id}</td>
                                                            <td>{user.salary}</td>
                                                            
                                                        </tr>*/
                                                       

    }
    )
  
   return (
    <>
 <NavBar status="Employees's Salary List"> </NavBar>
                               
{
                                                list.map((user) => {
                                                     
                                                       
                                                    return <p align="center"> <Salary {...user} /></p>
                                                         
                                                            
                                                        
                                                    

                                                })
                                            }

</>

); 
}
export default SalaryList;