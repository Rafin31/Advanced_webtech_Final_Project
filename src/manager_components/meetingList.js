import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactHtmlTableToExcel from "react-html-table-to-excel"
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../Layouts/manager_navBar';
import Meeting from './meeting';

function MeetingList() {
    const[list,setLists]=useState([]);
    const response=axios.get("http://localhost:8000/api/meetings")
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
 <NavBar status="Meeting List"> </NavBar>
                                <p align="center"> <h3> Upcoming Meetings</h3>  </p>  
{
                                                list.map((user) => {
                                                     
                                                       
                                                    return <p align="center"> <Meeting {...user} /></p>
                                                         
                                                            
                                                        
                                                    

                                                })
                                            }

</>

); 
}
export default MeetingList;