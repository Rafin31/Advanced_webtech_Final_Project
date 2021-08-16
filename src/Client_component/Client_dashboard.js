import React from 'react';
import Client_Sidemenu from '../Layouts/client_sidemenu';

function Client_dashboard() {
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
                                            <h2 class="text-white"></h2>
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
                                            <h2 class="text-white"></h2>
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
                                            <h2 class="text-white"></h2>
                                            <p class="text-white mb-0"></p>
                                        </div>
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