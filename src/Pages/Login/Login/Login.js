import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div>
            <h2>Please Log in</h2>
            <button onClick={signInWithGoogle} className="btn btn-success">Google Sign in</button>
        </div>
    );
};

export default Login;