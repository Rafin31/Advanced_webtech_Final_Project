import React, { useEffect, useState } from 'react';
import Client_Sidemenu from '../Layouts/client_sidemenu';
import axios from 'axios';
import ReactHtmlTableToExcel from "react-html-table-to-excel"

function Transaction(props) {
    const user = (JSON.parse(window.sessionStorage.getItem('user')));
    const [data, setData] = useState([])

    const getTransationData = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/api/transaction/${user.id}`);
        setData(res.data.transaction);

    }
    useEffect(() => {
        getTransationData();

    }, [])
    // console.log(data);


    return (
        <>
            <Client_Sidemenu />
            <div className="client_content">
                <div className="container-fluid">

                    <div className="row justify-content-center">
                        <div className="col-10 ml-5">
                            <div className="card">
                                <div className="card-body">



                                    <h4 className="card-title">Transaction</h4>
                                    <ReactHtmlTableToExcel className="btn w-100  btn-dark mt-3 mb-3 text-capitalize" table="transaction_table" filename="Transactions" sheet="Transactions" buttonText="Export" />

                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered zero-configuration" id="transaction_table">
                                            <thead>
                                                <tr>
                                                    <th>Client ID</th>
                                                    <th>Current balance</th>
                                                    <th>Credit</th>
                                                    <th>Credit type</th>
                                                    <th>Debit</th>
                                                    <th>Debit type</th>
                                                    <th>Transaction Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {

                                                    data.map((transaction) => {
                                                        return (
                                                            <tr key={transaction.id}>
                                                                <td>{transaction.id}</td>
                                                                <td>{transaction.current_balance}</td>
                                                                <td>{transaction.credit}</td>
                                                                <td>{transaction.credit_type}</td>
                                                                <td>{transaction.debit}</td>
                                                                <td>{transaction.debit_type}</td>
                                                                <td>{transaction.transactions_date}</td>
                                                            </tr>
                                                        );


                                                    })
                                                }
                                            </tbody>

                                            <tfoot>
                                                <tr>
                                                    <th>Client ID</th>
                                                    <th>Current balance</th>
                                                    <th>Credit</th>
                                                    <th>Credit type</th>
                                                    <th>Debit</th>
                                                    <th>Debit type</th>
                                                    <th>Transaction Date</th>
                                                </tr>
                                            </tfoot>
                                        </table>
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

export default Transaction;