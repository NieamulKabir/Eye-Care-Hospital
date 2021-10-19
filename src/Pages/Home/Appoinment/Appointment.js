import React from 'react';
import { Link } from 'react-router-dom';
import './Appointment.css'

const Appointment = () => {
    return (
        <div id="appoinment" className="appoinment mt-5">
             <h1 className="text-primary mt-5 p-3">Appoinment</h1>
            <div className="" >

                <div className="container row">
                    <div className="col-lg-7 container">
                        <h1 className="text-start py-3 mb-5">Are You Looking For Eye Care Consultation?</h1>
                    </div>
                    <div className="col-lg-5 d-flex">
                        <div>

                            <Link to="/getAppoinment">
                                <button className="btn btn-primary mt-5">Book Appointment</button>
                            </Link>
                        </div>

                        <div className="mt-4 text-left">
                            <h2>+0896312478</h2>
                            <p>For Emergency Services</p>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Appointment;