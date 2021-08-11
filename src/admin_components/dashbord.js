import Sidemenu from './Layouts/sidemenu';
const Dashboard = () => {
    return (
        <>
            <Sidemenu />
            <div class="content dashboard_content">
                <div class="container-fluid">
                    <div class="container-fluid mt-5">
                        <div class="row">
                            <div class="col-lg-3 col-sm-6">
                                <div class=" gradient-1">
                                    <div class=" card_in_dashboard card-body">
                                        <h3 class="card-title text-white">Active Clients</h3>
                                        <div class="d-inline-block">
                                            <h2 class="text-white">12</h2>
                                            <p class="text-white mb-0">active Client</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class=" gradient-2">
                                    <div class=" card_in_dashboard card-body">
                                        <h3 class="card-title text-white">Active Clients</h3>
                                        <div class="d-inline-block">
                                            <h2 class="text-white">12</h2>
                                            <p class="text-white mb-0">active Client</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class=" gradient-3">
                                    <div class=" card_in_dashboard card-body">
                                        <h3 class="card-title text-white">Active Clients</h3>
                                        <div class="d-inline-block">
                                            <h2 class="text-white">12</h2>
                                            <p class="text-white mb-0">active Client</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class=" gradient-4">
                                    <div class=" card_in_dashboard card-body">
                                        <h3 class="card-title text-white">Active Clients</h3>
                                        <div class="d-inline-block">
                                            <h2 class="text-white">12</h2>
                                            <p class="text-white mb-0">active Client</p>
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
export default Dashboard