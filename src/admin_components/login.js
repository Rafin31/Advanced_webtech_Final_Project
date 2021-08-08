import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div class="login-form-bg h-100">
            <div class="container ">
                <div class="row justify-content-center ">
                    <div class="col-xl-6">
                        <div class="form-input-content">
                            <div class="card login-form mb-0">
                                <div class="card-body pt-5">

                                    <Link class="text-center signinlink" to="#">
                                        <h4>LogIn</h4>
                                    </Link>
                                    <form method="" class="mt-5 mb-5 login-input">
                                        <div class="form-group">
                                            <input type="text" name="user_name" class="form-control"
                                                placeholder="User Name" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" name="password" class="form-control"
                                                placeholder="Password" />
                                        </div>
                                        <input type="submit" value="Sign in" class="btn btn-success w-100 " />
                                    </form>

                                    <p class="mt-5 login-form__footer">Dont have account?
                                        <Link
                                            to="/signup" class="text-primary">Sign Up</Link> now
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

export default Login;