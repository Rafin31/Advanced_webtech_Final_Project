import React, { useEffect, useState } from 'react';
import Client_Sidemenu from '../Layouts/client_sidemenu';
import axios from 'axios';

function Client_dashboard() {
    const user = (JSON.parse(window.sessionStorage.getItem('user')));
    const [client, setClient] = useState([])
    const [transaction, setTransaction] = useState([])
    const [notice, setNotice] = useState([])

    const getClientTable = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/api/index/${user.id}`);
        setClient(res.data.users);
        setTransaction(res.data.transaction);
        setNotice(res.data.notice);
    }

    useEffect(() => {
        getClientTable();
    }, [])

    console.log(client.account_balance)
    console.log(transaction.debit)
    console.log(notice.description)




    return (
        <>
            <Client_Sidemenu />
            <div class="content dashboard_content">
                <div class="container-fluid">
                    <div class="container-fluid mt-5">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 col-sm-6">
                                <div class=" box box-1">
                                    <div class=" card_in_dashboard card-body">
                                        <h3 class="card-title text-white">Balance</h3>
                                        <div class="d-inline-block">
                                            <h2 class="text-white">{client.account_balance}</h2>
                                            <p class="text-white mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class=" box box-2">
                                    <div class=" card_in_dashboard card-body">
                                        <h3 class="card-title text-white">Previous Withdraw </h3>
                                        <div class="d-inline-block">
                                            <h2 class="text-white">{transaction.debit}</h2>
                                            <p class="text-white mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class=" box box-3">
                                    <div class=" card_in_dashboard card-body">
                                        <h3 class="card-title text-white">Nid Varification</h3>
                                        <div class="d-inline-block">
                                            <h2 class="text-white">{client.nid_varification}</h2>
                                            <p class="text-white mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row justify-content-center">
                        <div class="col-lg-9">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-title info info-success">
                                        <h4>Notice</h4>
                                        <h6>{notice.subject}</h6>
                                        <p>{notice.description}</p>
                                        <p>{notice.post_date}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            </div >
        </>
    );
}

export default Client_dashboard;