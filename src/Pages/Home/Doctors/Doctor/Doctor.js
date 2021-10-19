import React from 'react';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    const { name, img, specialist } = doctor;
    return (

        <div className="container">
            <div className="doctor pb-3">
                <div>
                    <img className="p-3" src={img} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>{specialist}</p>
                </div>
            </div>
        </div>

    );
};

export default Doctor;