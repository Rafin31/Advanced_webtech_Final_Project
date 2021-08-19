import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactHtmlTableToExcel from "react-html-table-to-excel"
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../Layouts/manager_navBar';

function ClientList() {
    const [list, setLists] = useState([]);
    const history = useHistory();


    const load = async () => {
        const res = await axios.get("http://127.0.0.1:8000/api/clientlist");
        setLists(res.data.users);
    }
    useEffect(() => {
        load();
    }, []);

                    

                    list.map((user) => {
                                                    return (
                                                        
                                                        <>
                                                        <NavBar status="Client's List" /> 
                                                        <table>
                                                            
                                                            <tr>
                                                            <td>{user.id}</td>
                                                            <td>{user.user_name}</td>
                                                            <td>{user.address}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.phone_number}</td>

                                                        </tr>
                                                        </table>
                                                    );

                                                )
                    
                </>
            )
            }
        
    );
}

export default ClientList;