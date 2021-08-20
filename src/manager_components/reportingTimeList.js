import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactHtmlTableToExcel from "react-html-table-to-excel"
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../Layouts/manager_navBar';
import Reporting from './reporting';

function ReportingList() {
    const[list,setLists]=useState([]);
    const response=axios.get("http://localhost:8000/api/reportingtime")
    .then(response=>{
       console.log(response.data);
        setLists(response.data.users);

    })
    .catch(error=>{

        console.log(error);
      
    }
    )
  
   return (
    <>
 <NavBar status="Employees's Reporting Info"> </NavBar>
                               
{
                                                list.map((user) => {
                                                     
                                                       
                                                    return <p align="center"> <Reporting {...user} /></p>
                                                         
                                                            
                                                        
                                                    

                                                })
                                            }

</>

); 
}
export default ReportingList;