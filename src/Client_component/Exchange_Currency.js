import React from 'react';
import Client_Sidemenu from '../Layouts/client_sidemenu';

function Exchange_Currency() {
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



                                            <div class="form-group">
                                                <label><b>From</b></label>
                                                <select class="form-control" id="sel1" name="ex_from">
                                                    <option value="Please select">Please select</option>
                                                    <option value="USD-US DOLLAR">USD-US DOLLAR</option>
                                                    <option value="IND-Rupees">IND-Rupees</option>
                                                    <option value="BNG-Taka">BNG-Taka</option>
                                                    <option value="SK-Won">SK-Won</option>
                                                    <option value="EUR-euro">EUR-euro</option>
                                                </select>

                                                <div class="div alert-danger"></div>
                                            </div>

                                            <div>
                                                <b>Exchange Amount</b>
                                                <input type="text" class="form-control" size="30" name="ex_amount" value="" placeholder="৳" />

                                            </div>

                                            <div class="form-group" >
                                                <label><b>TO</b></label>
                                                <select class="form-control" id="sel1" name="ex_to">
                                                    <option value="Please select">Please select</option>
                                                    <option value="USD-US DOLLAR">USD-US DOLLAR</option>
                                                    <option value="IND-Rupees">IND-Rupees</option>
                                                    <option value="BNG-Taka">BNG-Taka</option>
                                                    <option value="SK-Won">SK-Won</option>
                                                    <option value="EUR-euro">EUR-euro</option>
                                                </select>
                                            </div>


                                            <div class="form-group row">

                                                <label class="col-lg-4 col-form-label" for="val-phoneus"><b>Date</b> <span
                                                    class="text-danger"></span>
                                                </label>


                                                <div class="col-lg-6">
                                                    <input type="date" class="form-control" name="date" />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-date"><b>Pin</b> <span
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
                                                    <button type="submit" class="btn btn-primary">Convert</button>
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


export default Exchange_Currency;