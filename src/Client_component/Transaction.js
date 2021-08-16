import React from 'react';
import Client_Sidemenu from '../Layouts/client_sidemenu';

function Transaction(props) {
    return (
        <>
            <Client_Sidemenu />
            <div className="client_content">
                <div className="container-fluid">
                    {/* <div className="export w-100 ">
                    <a href="{{url('/index/transaction/export')}}" className="btn btn-info p-2 w-100 mb-2">Export</a>
                </div> */}

                    <div className="row justify-content-center">
                        <div className="col-8">
                            <div className="card">
                                <div className="card-body">



                                    <h4 className="card-title">Transaction</h4>
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered zero-configuration">
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