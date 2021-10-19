import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, error, handleLogin, handleEmailChange, handlePasswordChange, hanleResetPassword } = useAuth();
    return (
        <div>

            <br /> <br />

            <div className="login-box d-flex align-items-center justify-content-center">
                <div className="login">
                    <div className="login-box">
                        <h2 className="text-info">Pease Login</h2>
                        <p className="text-danger">{error}</p>
                        <form onSubmit={handleLogin}>
                            <input
                                onChange={handleEmailChange}
                                className="input-felid w-100"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                            />
                            <br /><br />
                            <input
                                onChange={handlePasswordChange}
                                className="input-felid w-100"
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                            />
                            <input
                                className="mt-3 w-50 btn btn-success m-auto"
                                type="submit"
                                value="Login"
                            />
                        </form>
                    </div>
                    <button className="me-2 mt-2 btn btn-success" onClick={signInWithGoogle}>
                        Login with Google
                    </button>


                    <button className="mt-2 btn btn-success" onClick={hanleResetPassword}>
                        Reset Password
                    </button>
                </div>
            </div>


        </div >
    );
};

export default Login;