import React, { useState } from 'react';
import Login from './Login/Login';
import Register from './Login/Register';

const SignIn = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <div className="row">
                <div className="login-area col-md-6">
                    {toggle ? <Register></Register> : <Login></Login>}

                    {toggle ? (
                        <p onClick={() => setToggle(false)} className="text-primary ">
                            New User please register
                        </p>
                    ) : (
                        <p onClick={() => setToggle(true)} className="text-primary ">
                            Already have an Account ?
                        </p>
                    )}
                </div>
                <div className="col-md-6">
                    <div className="img">
                        <br /> <br />
                        <img className='w-100' src="https://www.booking-wp-plugin.com/wp-content/uploads/2019/07/Banner-31a.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;