import { Link } from "react-router-dom";
const Signup = () => {
    return (
        <div className="login-form-bg h-100">
            <div className="container h-100">
                <div className="row justify-content-center h-100">
                    <div className="col-xl-6">
                        <div className="form-input-content">
                            <div className="card login-form mb-0">
                                <div className="card-body pt-5">

                                    <Link className="text-center signinlink" to="#">
                                        <h4>Sign Up</h4>
                                    </Link>

                                    <form method="post" className="mt-5 mb-5 login-input">


                                        <div className="form-group">
                                            <input type="text" name="user_name" value=""
                                                className="form-control" placeholder="User Name" required />
                                        </div>


                                        <div className="form-group">
                                            <input type="text" value="" name="phone_number"
                                                className="form-control" placeholder="Phone Number" required />
                                        </div>


                                        <div className="form-group">
                                            <input type="email" value="" name="email" className="form-control"
                                                placeholder="Email" required />
                                        </div>

                                        <div className="form-group">
                                            <input type="password" name="password" className="form-control"
                                                placeholder="Password" required />
                                        </div>

                                        <div className="form-group">
                                            <input type="password" name="con_password" className="form-control"
                                                placeholder="Confirm password" required />
                                        </div>

                                        <div className="form-group">
                                            <input type="text" name="address" value=""
                                                className="form-control" placeholder="Address" required />
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-lg-4 col-form-label" for="val-skill">User Type <span
                                                className="text-danger">*</span>
                                            </label>
                                            <div className="col-lg-6">
                                                <select className="form-control" id="val-skill" name="user_type">
                                                    <option value="">User Type</option>
                                                    <option value="clients">Clients</option>
                                                    <option value="bank_manager">Bank Manager</option>
                                                    <option value="money_exchange_officer">Money exchange officer</option>
                                                    <option value="admin">Admin</option>
                                                </select>
                                            </div>
                                        </div>

                                        <button className="btn btn-success login-form__btn submit w-100">Sign in</button>
                                    </form>
                                    <p className="mt-5 login-form__footer">Have account
                                        <Link to="/login" className="text-primary">Sign in</Link>now
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Signup