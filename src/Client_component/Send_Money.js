import React from 'react';
import Client_Sidemenu from '../Layouts/client_sidemenu';

function Send_Money() {
    return (
        <>
            <Client_Sidemenu />
            <div className=" client_content">
                <div class="container-fluid">
                    <div class="alert-danger"></div>
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="card">
                                <div class="card-body">
                                    <div class="form-validation">
                                        <form class="form-valide" method="post">

                                            <div class="form-group row">

                                                <label class="col-lg-4 col-form-label" for="val-phoneus">To <span
                                                    class="text-danger"></span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <input type="text" name="acc_number" class="form-control" id="val-phoneus"
                                                        name="val-phoneus" placeholder="Enter Your Account Number" />

                                                    <div class="div alert-danger"></div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-nid">Amount <span
                                                    class="text-danger"></span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <input type="number" name="amount" class="form-control" id="val-nid" name="val-nid"
                                                        placeholder="$0" />
                                                    <div class="div alert-danger"></div>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-skill">Reference <span
                                                    class="text-danger"></span>
                                                </label>

                                                <div class="col-lg-6">
                                                    <input type="text" name="refernce" class="form-control" id="val-nid" name="val-nid"
                                                        placeholder="Reference" />
                                                    <div class="div alert-danger"></div>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-date">Pin <span
                                                    class="text-danger"></span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <input type="password" name='pin' class="form-control" id="val-date"
                                                        name="val-date" placeholder="pin" />
                                                    <div class="div alert-danger"></div>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <div class="col-lg-8 ml-auto">
                                                    <button type="submit" class="btn btn-primary">Send</button>
                                                </div>
                                            </div>
                                        </form>
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


export default Send_Money;