import React from 'react';
import Client_Sidemenu from '../Layouts/client_sidemenu';

function Apply() {
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

                                                <label class="col-lg-4 col-form-label" for="val-phoneus">Apply Type <span
                                                    class="text-danger"></span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <select class="form-control" id="val-skill" name="apply_type">
                                                        <option value="">Please select</option>
                                                        <option value="Card">Card</option>
                                                        <option value="Checkbook">Checkbook</option>
                                                        <option value="Loan">Loan</option>
                                                        <option value="Vault">Vault</option>
                                                        <option value="Stop Bank Services">Stop Bank Services</option>

                                                    </select>

                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-nid">Description <span
                                                    class="text-danger"></span>
                                                </label>
                                                <textarea class="form-control h-150px" rows="5" name="description" id="comment"></textarea>

                                            </div>


                                            <div class="form-group row">
                                                <div class="col-lg-8 ml-auto">
                                                    <button type="submit" class="btn btn-primary">Submit</button>
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


export default Apply;