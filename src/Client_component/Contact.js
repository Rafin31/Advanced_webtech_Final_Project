import React from 'react';
import Client_Sidemenu from '../Layouts/client_sidemenu';

function Contact() {
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

                                                <label class="col-lg-4 col-form-label" for="val-phoneus">Name <span
                                                    class="text-danger"></span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <input type="text" name="user_name" class="form-control" id="val-phoneus"
                                                        name="val-phoneus" placeholder="Name" />

                                                    <div class="div alert-danger"></div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-nid">Request Type <span
                                                    class="text-danger"></span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <input type="text" name="r_type" class="form-control" id="val-nid" name="val-nid"
                                                        placeholder="Request" />
                                                    <div class="div alert-danger"></div>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-skill">Description <span
                                                    class="text-danger"></span>
                                                </label>
                                                <textarea class="form-control h-150px" rows="6" name="description" id="comment"></textarea>

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


export default Contact;