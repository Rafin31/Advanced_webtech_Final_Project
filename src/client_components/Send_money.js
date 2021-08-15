import Client_Sidemenu from "../Layouts/client_sidemenu";
const Send_money = () => {
    return (
        <>
            <Client_Sidemenu />
            <div className="client_content">
                <div className="container-fluid">
                    <div className="basic-form">
                        <form method="post">
                            <b>TO:</b>
                            <br />
                            <br />
                            <i className="fa fa-user"></i><input className="form-control" type="text" size="50" name="acc_num" Value=""
                                placeholder="Enter Account Number" />

                            <br />
                            <br />
                            <b>Amount:</b>
                            <br />
                            <br />
                            <input className="form-control" type="text" size="30" name="amount" Value="" placeholder="$0" />

                            <br />
                            <br />
                            <b>Reference:</b>
                            <br />
                            <br />
                            <i className="fa fa-clipboard"></i><input className="form-control" type="text" size="30" name="ref" Value="" placeholder="Add a note" />

                            <br />
                            <br />
                            <b>Pin:</b>
                            <br />
                            <br />
                            <input className="form-control" type="password" size="30" name="password" Value="" placeholder="Enter Pin" />

                            <br />
                            <br />
                            <br />
                            <br />
                            <button type="submit" className="btn btn-dark mb-2">Send</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Send_money;