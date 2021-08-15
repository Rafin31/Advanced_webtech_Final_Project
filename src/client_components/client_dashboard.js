import Sidemenu from "../Layouts/admin_sidemenu";
import Client_Sidemenu from "../Layouts/client_sidemenu";
const Client_dashboard = () => {
    return (
        <>
            <Client_Sidemenu />
            <div class="client_content dashboard_content">
                <div class="container-fluid">
                    <div class="container-fluid mt-5">
                        <div class="row">
                            <div class="col-lg-3 col-sm-6">
                                <div class=" gradient-1">
                                    <div class=" card_in_dashboard card-body">
                                        <h3 class="card-title text-white">Current Balance</h3>
                                        <div class="d-inline-block">
                                            <h2 class="text-white">12</h2>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class=" gradient-2">
                                    <div class=" card_in_dashboard card-body">
                                        <h3 class="card-title text-white">Previous Balance</h3>
                                        <div class="d-inline-block">
                                            <h2 class="text-white">12</h2>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class=" gradient-3">
                                    <div class=" card_in_dashboard card-body">
                                        <h3 class="card-title text-white">Nid Varification</h3>
                                        <div class="d-inline-block">
                                            <h2 class="text-white">12</h2>
                                            
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
export default Client_dashboard