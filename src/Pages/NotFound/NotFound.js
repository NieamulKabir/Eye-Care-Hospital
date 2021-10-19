import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <br /> <br /> <br />
            <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeg_1PQSI7TWIB5y_TP7lanRYbVXfHbpeeSw&usqp=CAU" alt="" />
            <h1>Not found 404</h1>
            <Link to="/">
                <button className="btn btn-warning">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;