import React from 'react';
import useAuth from '../../../Hooks/useAuth';


const Register = () => {
    const { handleEmailChange, handlePasswordChange, handleOnSubmit } = useAuth;

    return (
        <div>
            <br /> <br />
            <div className="login-box d-flex align-items-center justify-content-center">
                <div className="login">
                    <div className="login-box">
                        <h2 className="text-info">Please Register</h2>
                        <form onSubmit={handleOnSubmit}>
                            <input
                                onChange={handleEmailChange}
                                className="input-felid w-100"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                                required
                            />
                            <br /> <br />
                            <input
                                onChange={handlePasswordChange}
                                className="input-felid w-100"
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                                required
                            />
                            <input
                                className="mt-3 w-50 btn btn-success m-auto"
                                type="submit"
                                value="Register"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;